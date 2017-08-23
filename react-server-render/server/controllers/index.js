const router = require('koa-router')({prefix: '/api'})

router.use('/system', require('../controllers/system').routes())
router.use('/bigpipe', require('../controllers/bigpipe').routes())

module.exports = router
