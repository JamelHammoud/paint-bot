import { Client, IntentsBitField } from 'discord.js'

const bot = new Client({
  intents: [IntentsBitField.Flags.Guilds, IntentsBitField.Flags.GuildMessages]
})

bot.on('ready', () => {
  console.log(`I am in ${bot.guilds.cache.size} guilds.`)
})

bot.login(process.env.BOT_KEY)
