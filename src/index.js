require('dotenv').config()
const { Client } = require('discord.js')
const messageHandler = require('./messageHandler')

const client = new Client()

client.on('ready', () => console.log(`Logged in as ${client.user.tag}!`))
client.on('message', messageHandler)

client.login(process.env.TOKEN)
