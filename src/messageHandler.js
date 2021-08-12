const logger = require('./logger')('messageHandler')

module.exports = (message) => {
  logger.info('message received:', message.content)
}
