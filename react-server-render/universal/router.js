var router = require('minrouter')

router.get('/', async function(req, res, next) {
  await res.render('home', req)
})

router.get('/about', async function(req, res) {
  await res.render('about', req)
})

router.get('/topics/:id', async function(req, res) {
  await res.render('topic', req)
})

module.exports = router
