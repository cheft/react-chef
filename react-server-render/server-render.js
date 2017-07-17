import React from 'react'
import { renderToString } from 'react-dom/server'

import Page from './pages/page'
import Home from './pages/home'
import About from './pages/about'
import Topic from './pages/topic'

module.exports = function (component, req, router) {
  let html = ''
  var components = {
    home: <Home req={req} />,
    about: <About req={req} />,
    topic: <Topic req={req} />,
  }
  return renderToString(<Page content={components[component]} pathname={req.pathname} router={router}/>)
}
