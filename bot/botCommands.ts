import { REST } from '@discordjs/rest'
import { SlashCommandBuilder } from '@discordjs/builders'
import { ApplicationCommandType, ContextMenuCommandBuilder } from 'discord.js'
import { Routes } from 'discord-api-types/v9'

const apiToken = process.env.BOT_KEY!
const clientId = process.env.BOT_CLIENT_ID!

const commands = [
  new ContextMenuCommandBuilder()
    .setName('Reply with canvas')
    .setType(ApplicationCommandType.Message),
  new SlashCommandBuilder().setName('paint').setDescription('Spawns a canvas')
].map(command => command.toJSON())

const deploy = async () => {
  try {
    const rest = new REST({ version: '9' }).setToken(apiToken)
    await rest.put(Routes.applicationCommands(clientId) as any, { body: commands })

    console.log('Deployed Bot commands')
  } catch (err) {
    console.error('There was an error!', (err as any).message)
  }
}

deploy()
