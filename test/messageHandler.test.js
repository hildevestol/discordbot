const expect = require('expect.js')

// TODO: Refactor code so that we don't need so much mocking to test simple functionality
let result
const mockMessage = (content) => {
  return {
    content: content,
    channel: {
      send: (txt) => {
        result = txt
      },
    },
  }
}

const messageHandler = require('../src/messageHandler')

describe('mesageHandler', () => {
  describe('! commands', () => {
    beforeEach(() => {
      // Reset result before each test
      result = undefined
    })

    it('responds with pong for !ping', async () => {
      messageHandler(mockMessage('!ping'))
      expect(result).to.eql('pong')
    })

    it('ignores unknown ! commands', () => {
      messageHandler(mockMessage('!something'))
      expect(result).to.eql(undefined)
    })

    it('ignores no commands', () => {
      messageHandler(mockMessage('ping'))
      expect(result).to.eql(undefined)
    })
  })
})
