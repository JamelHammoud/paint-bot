import { REST } from '@discordjs/rest'
import { SlashCommandBuilder } from '@discordjs/builders'
import { Routes } from 'discord-api-types/v9'

const apiToken = process.env.REACT_APP_BOT_KEY!
const clientId = '1066192909109567489'
const guildId = '796600091430354974'

const commands = [
	new SlashCommandBuilder()
  .setName('paint')
  .setDescription('Spawns a canvas')
].map((command) => command.toJSON())

const deploy = async () => {
  try {
    const rest = new REST({ version: '9' }).setToken(apiToken)
    await rest.put(Routes.applicationGuildCommands(clientId, guildId) as any, { body: commands })
    
    console.log('Deployed Bot commands')
  }
  catch (err: any) {
    console.log('There was an error!', err.message)
  }
}

deploy()