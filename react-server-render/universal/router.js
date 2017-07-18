var router = require('minrouter')

router.get('/', function(req, res) {
  res.view('home', req)
})

router.get('/about', function(req, res) {
  res.view('about', req)
})

router.get('/topics-:id', function(req, res) {
  res.view('topic', req)
})

module.exports = router
