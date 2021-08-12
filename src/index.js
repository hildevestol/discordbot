require('dotenv').config()
const log = require('./logger')('bot')

const { Client } = require('discord.js')
const messageHandler = require('./messageHandler')

const client = new Client()

client.on('ready', () => log.debug(`Logged in as ${client.user.tag}!`))
client.on('message', messageHandler)

client.login(process.env.TOKEN)
