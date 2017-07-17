import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import Page from './pages/page'
import router  from './router'

function render(content, req) {
  ReactDOM.render(
    <Page content={content} pathname={req.pathname} router={router}/>,
    document.getElementById('app')
  )
}

router.addResMethod('view', function (cname, req) {
  switch (cname) {
    case 'about':
      require.ensure([], function(require) {
        const About = require('./pages/about').default
        render(<About req={req} />, req)
      })
      break
    case 'topic':
      require.ensure([], function(require) {
        const Topic = require('./pages/topic').default
        render(<Topic req={req} />, req)
      })
      break
    default:
      require.ensure([], function(require) {
        const Home = require('./pages/home').default
        render(<Home req={req} />, req)
      })
      break
  }
})

router()

if (module.hot) {
  module.hot.accept(() => { router() })
}
