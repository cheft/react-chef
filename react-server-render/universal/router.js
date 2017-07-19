var router = require('minrouter')

router.get('/', function(req, res, next) {
  res.render('home', req)
})

router.get('/about', function(req, res) {
  res.render('about', req)
})

router.get('/topics-:id', function(req, res) {
  res.render('topic', req)
})

module.exports = router
