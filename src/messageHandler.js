const logger = require('./logger')('messageHandler')

const commandHandler = (message) => {
  const commands = {
    ping: () => message.channel.send('pong'),
    // TODO: Add more commands
  }

  // The characters immedieatly after ! until we hit a space is the command
  const commandName = message.content.slice(1).split(' ')[0]
  const command = commands[commandName]

  // If we find a matching command, then we execute it.
  if (command) {
    logger.debug(`Got command "!${commandName}" and executing`)
    command()
  }
}

module.exports = (message) => {
  // A message is considered a command if it starts with !
  const isCommand = message.content[0] === '!'

  if (isCommand) commandHandler(message)

  logger.info(`message received: "${message.content}"`)
}
