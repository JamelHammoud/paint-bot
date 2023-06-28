import cors from 'cors'
import express from 'express'
import Cryptr from 'cryptr'
import { inflate } from 'pako'
import {
  Client,
  IntentsBitField,
  ActionRowBuilder,
  ButtonBuilder,
  ButtonStyle,
  AttachmentBuilder,
  TextChannel,
  Guild
} from 'discord.js'

const bot = new Client({
  intents: [IntentsBitField.Flags.Guilds, IntentsBitField.Flags.GuildMessages]
})

const createButton = (
  interactionId: string,
  userId: string,
  channelId: string,
  channelName: string,
  targetId?: string
) => {
  const secret = process.env.SECRET!
  const cryptr = new Cryptr(secret)
  const object = {
    iid: interactionId,
    uid: userId,
    cid: channelId,
    tid: targetId
  }
  const pid = cryptr.encrypt(JSON.stringify(object))

  return new ActionRowBuilder().addComponents(
    new ButtonBuilder()
      .setURL(`${process.env.APP_URL}?pid=${pid}&cname=${channelName}`)
      .setLabel('Open Canvas')
      .setStyle(ButtonStyle.Link)
  )
}

const app = express()
const PORT = 52635

app.use(cors({ origin: '*' }))
app.use(express.urlencoded({ extended: true, limit: '50mb' }))
app.use(express.json({ limit: '50mb' }))

const specialWords = [
  'drew',
  'created this masterpiece',
  'painted',
  'sculpted',
  'composed',
  'designed',
  'invented',
  'rendered',
  'illustrated',
  'sketched'
]

app.listen(PORT, () => {
  return console.log(`Server is listening on ${PORT}`)
})

app.post('/send', (req, res) => {
  try {
    const { image, pid, message } = req.body

    if (!image || !pid) {
      throw new Error('Invalid parameters')
    }

    const secret = process.env.SECRET!
    const cryptr = new Cryptr(secret)
    const session = cryptr.decrypt(pid)

    const { iid, uid, cid, tid } = JSON.parse(session)

    if (!iid || !uid || !cid) {
      throw new Error('Invalid PID')
    }

    const channel = bot.channels.cache.get(cid) as TextChannel
    const guild = bot.guilds.cache.get(channel.guildId) as Guild

    if (!channel) {
      throw new Error('Could not find channel')
    }

    const uncompressed = inflate(image, { to: 'string' })
    const sfbuff = Buffer.from(uncompressed.split(',')[1], 'base64')
    const attachment = new AttachmentBuilder(sfbuff, { name: 'canvas.png' })
    const word = specialWords[Math.floor(Math.random() * specialWords.length)]
    const date = new Date().toLocaleString()

    console.log(`${uid} just ${word} in #${channel?.name} (${guild?.name}) at ${date}. ${message}`)

    channel.send({
      content: `<@${uid}> ${word}:${message?.trim() ? `\n> ${message}` : ''}`,
      reply: {
        messageReference: tid
      },
      files: [attachment]
    })

    res.json({
      status: 'ok'
    })
  } catch (err) {
    console.error(err)
  }
})

bot.on('interactionCreate', async interaction => {
  try {
    if (!interaction.isCommand() && !interaction.isUserContextMenuCommand()) {
      return
    }

    await interaction.deferReply({ ephemeral: true })

    const { commandName, user, channel, channelId } = interaction
    const targetId = (interaction as any)?.targetId
    const channelName = (channel as any).name

    if (commandName !== 'paint' && !targetId) {
      return
    }

    const button = createButton(interaction.id, user.id, channelId, channelName, targetId)

    await interaction.reply({
      components: [button as any],
      ephemeral: true
    })
  } catch (err) {
    console.error(err)
  }
})

bot.on('ready', () => {
  console.log('ready')
})

bot.login(process.env.BOT_KEY)
