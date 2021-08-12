const bole = require('bole')
const { Writable } = require('stream')
const outputStream = process.stdout

const options = {
  level: process.env.LOG_LEVEL || 'error',
  pretty: JSON.parse(process.env.LOG_PRETTY_JSON || 'false'),
  json: JSON.parse(process.env.LOG_JSON || 'true'),
}

const streamWrapper = () => {
  return new Writable({
    write (chunk, _encoding, callback) {
      const object = JSON.parse(chunk.toString())
      const indent = options.pretty ? 2 : 0

      if (!options.json) {
        const output = Buffer.from(object.name + ': ' + object.message + '\n')
        outputStream.write(output, 'buffer')
      } else {
        const output = Buffer.from(JSON.stringify(object, null, indent) + '\n')
        outputStream.write(output, 'buffer')
      }

      callback()
    },
  })
}

bole.output({
  level: options.level,
  stream: streamWrapper(),
})

module.exports = (name) => {
  return bole(name)
}
