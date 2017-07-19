const router = require('koa-router')({prefix: '/api'})

router.use('/system', require('../controllers/system').routes())

module.exports = router
