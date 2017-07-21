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
    var result = await rp('https://api.github.com/users/cheft', {
      json: true,
      headers: {'User-Agent': 'Awesome-Octocat-App'}
    })

    // const timeout = function (delay) {
    //   return new Promise((resolve, reject) => {
    //     setTimeout(() => {
    //       resolve()
    //     }, delay)
    //   })
    // }
    // var result = {
    //   name: '早晨海风22222'
    // }
    // await Promise.resolve(timeout(500))
    return result
  }
}
