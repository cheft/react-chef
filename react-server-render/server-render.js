import React from 'react'
import { renderToString } from 'react-dom/server'

import Page from './pages/page'
import Home from './pages/home'
import About from './pages/about'
import Topic from './pages/topic'

module.exports = function (component, req, router) {
  let html = ''
  switch (component) {
    case 'about':
      return renderToString(<Page content={<About/>} path={req.path} router={router}/>)
    case 'topic':
      return renderToString(<Page content={<Topic params={req.params}/>} path={req.path} router={router}/>)
    default:
      return renderToString(<Page content={<Home/>} path={req.path} router={router}/>)
  }
}
