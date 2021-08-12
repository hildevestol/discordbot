require('dotenv').config()
const { Client } = require('discord.js')

const client = new Client()

client.on('ready', () => console.log(`Logged in as ${client.user.tag}!`))
client.on('message', (message) =>
  console.log('message received:', message.content)
)

client.login(process.env.TOKEN)
