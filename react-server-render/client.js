import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import Page from './pages/page'
import router  from './router'

var render = function(content, req, router) {
  ReactDOM.render(
    <Page content={content} path={req.path} router={router}/>,
    document.getElementById('app')
  )
}

router.addResMethod('view', function (cname, req) {
  switch (cname) {
    case 'about':
      require.ensure([], function(require) {
        const About = require('./pages/about').default
        render(<About />, req, router)
      })
      break
    case 'topic':
      require.ensure([], function(require) {
        const Topic = require('./pages/topic').default
        render(<Topic params={req.params} />, req, router)
      })
      break
    default:
      require.ensure([], function(require) {
        const Home = require('./pages/home').default
        render(<Home />, req, router)
      })
      break
  }
})

router()

if (module.hot) {
  module.hot.accept('./minrouter', () => { router() })
}