import React from 'react'
import { renderToString } from 'react-dom/server'

import Page from '../universal/pages/page'
import Home from '../universal/pages/home'
import About from '../universal/pages/about'
import Topic from '../universal/pages/topic'

module.exports = function (component, req, router) {
  let html = ''
  var components = {
    home: <Home req={req} />,
    about: <About req={req} />,
    topic: <Topic req={req} />,
  }
  return renderToString(<Page content={components[component]} path={req.path} router={router}/>)
}
