import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import Page from './pages/page'

// 以下路由代码可兼容 node，可为 node 中间件
import router from 'minrouter'

router.get('/', function(req, res) {
  res.view('home', req.params)
})

router.get('/about', function(req, res) {
  res.view('about', req.params)
})

router.get('/topics-:id', function(req, res) {
  res.view('topic', req.params)
})
// end 路由代码

var render = function(content) {
  ReactDOM.render(
    <Page content={content} router={router}/>,
    document.getElementById('app')
  )
}

router.addResMethod('view', function (cname, params) {
  switch (cname) {
    case 'about':
      require.ensure([], function(require) {
        const About = require('./pages/about').default
        render(<About />)
      })
      break
    case 'topic':
      require.ensure([], function(require) {
        const Topic = require('./pages/topic').default
        render(<Topic params={params} />)
      })
      break
    default:
      require.ensure([], function(require) {
        const Home = require('./pages/home').default
        render(<Home />)
      })
      break
  }
})

export default router
