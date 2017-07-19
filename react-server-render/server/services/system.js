var manager = require('../managers/system')

module.exports = {
  getPlatform: function() {
    return manager.getPlatform()
  },

  getDate: function() {
    return manager.getDate()
  },

  getInfo: async function() {
    var result = await manager.getInfo()
    return result
  }
}
