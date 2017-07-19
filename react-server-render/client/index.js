import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import Page from '../universal/pages/page'
import router  from '../universal/router'

function render(content, req) {
  ReactDOM.render(
    <Page content={content} path={req.path} router={router}/>,
    document.getElementById('app')
  )
}

router.addResMethod('render', function (cname, req) {
  switch (cname) {
    case 'about':
      require.ensure([], function(require) {
        const About = require('../universal/pages/about').default
        render(<About req={req} />, req)
      })
      break
    case 'topic':
      require.ensure([], function(require) {
        const Topic = require('../universal/pages/topic').default
        render(<Topic req={req} />, req)
      })
      break
    default:
      require.ensure([], function(require) {
        const Home = require('../universal/pages/home').default
        render(<Home req={req} />, req)
      })
      break
  }
})

router()
