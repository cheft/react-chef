var os = require('os')
var path = require('path')
var fs = require('fs')

var rp = require('request-promise')

module.exports = {
  getPlatform: function() {
    return os.platform()
  },

  getDate: function() {
    return new Date().toLocaleDateString()
  },

  getInfo: async function() {
    var result = await rp.get('http://www.baidu.com')
    return result
  }
}
