import fs from 'fs'
import path from 'path'
import React from 'react'
import { renderToString } from 'react-dom/server'

import Page from '../../universal/pages/page'
import router from '../../universal/router'

import Home from '../../universal/pages/home'
import About from '../../universal/pages/about'
import Topic from '../../universal/pages/topic'

import systemService from '../services/system'


var createStore = async function(req) {
  var data = {}
  data.platform = systemService.getPlatform()
  data.date = systemService.getDate()
  var info = await systemService.getInfo()
  data.info = info
  return data
}

var render = function (component, req, r, data) {
  switch (component) {
    case 'about':
      return renderToString(<Page content={<About req={req} data={data} />} path={req.path} router={r}/>)
    case 'topic':
      return renderToString(<Page content={<Topic req={req} data={data} />} path={req.path} router={r}/>)
    default:
      return renderToString(<Page content={<Home req={req} data={data} />} path={req.path} router={r}/>)
  }
}

router.addResMethod('render', async function(component, req) {
  var data = await createStore(req)
  var html = fs.readFileSync(path.resolve(__dirname, '../../public/index.html'))
  var result = render(component, req, router, data)
  var initData = '<script type="text/javascript">window.__INITDATA=' + JSON.stringify(data) + '</script>'
  this.ctx.body = html.toString().replace('<div id="app"></div>', initData + '<div id="app">' + result + '</div>')
})

module.exports = router
