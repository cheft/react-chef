var manager = require('../managers/system')

module.exports = {
  getPlatform: function() {
    return manager.getPlatform()
  },

  getDate: function() {
    return manager.getDate()
  },

  getInfo: async function(req) {
    return await manager.getInfo()
  },

  testAsync: async function() {
    const timeout = function (delay) {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve()
        }, delay)
      })
    }

    await Promise.resolve(timeout(3000))
    return 'hello'
  }
}
