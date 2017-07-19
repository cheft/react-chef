var router = require('koa-router')()
var service = require('../services/system')

router.get('/date', function(ctx) {
  ctx.body  = service.getDate()
})

router.get('/data', async function(ctx) {
  var result = await service.getInfo()
  ctx.body = result
})

module.exports = router
