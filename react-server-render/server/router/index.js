import fs from 'fs'
import path from 'path'

import React from 'react'
import { renderToString } from 'react-dom/server'

import Page from '../../universal/pages/page'
import router from '../../universal/router'

import Home from '../../universal/pages/home'
import About from '../../universal/pages/about'
import Topic from '../../universal/pages/topic'

function render (component, req, r) {
  let html = ''
  var components = {
    home: <Home req={req} />,
    about: <About req={req} />,
    topic: <Topic req={req} />,
  }
  return renderToString(<Page content={components[component]} path={req.path} router={r}/>)
}

router.addResMethod('render', function(component, req) {
  var html = fs.readFileSync(path.resolve(__dirname, '../../public/index.html'))
  this.ctx.body = html.toString().replace('<div id="app"></div>',
    '<div id="app">' + render(component, req, router) + '</div>')
})

module.exports = router
