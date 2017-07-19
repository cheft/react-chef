var router = require('minrouter')

router.get('/', function(req, res, next) {
  return res.render('home', req)
})

router.get('/about', function(req, res) {
  return res.render('about', req)
})

router.get('/topics/:id', function(req, res) {
  return res.render('topic', req)
})

module.exports = router
