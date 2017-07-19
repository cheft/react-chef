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

var render = async function (component, req, r) {
  switch (component) {
    case 'about':
      var data = {}
      data.platform = systemService.getPlatform()
      data.date = systemService.getDate()
      // var info = await systemService.getInfo()
      // data.info = info
      return {data: data, html: renderToString(<Page content={<About req={req} data={data} />} path={req.path} router={r}/>)}
    case 'topic':
      return {data: data, html: renderToString(<Page content={<Topic req={req} />} path={req.path} router={r}/>)}
    default:
      return {data: data, html: renderToString(<Page content={<Home req={req} />} path={req.path} router={r}/>)}
  }
}

router.addResMethod('render', async function(component, req) {
  var html = fs.readFileSync(path.resolve(__dirname, '../../public/index.html'))
  var result = await render(component, req, router)
  console.log(result, this.ctx.body)
  var data = '<script type="text/javascript">window.__INITDATA=' + JSON.stringify(result.data) + '</script>'
  this.ctx.body = html.toString().replace('<div id="app"></div>', data + '<div id="app">' + result.html + '</div>')
})

module.exports = router
