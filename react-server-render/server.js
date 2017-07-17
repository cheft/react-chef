const fs = require('fs')
const Koa = require('koa')
const Webpack = require('webpack')
const koaWebpack = require('koa-webpack')
const config = require('./webpack.config.js')
const router = require('./router')

require('babel-core/register')
const render = require('./server-render')

const compiler = Webpack(config)
const app = new Koa()

const middleware = koaWebpack({
  compiler: compiler,
  dev: {
    publicPath: '/'
  }
})

router.addResMethod('view', function(component, req) {
  var html = fs.readFileSync(__dirname + '/index.html')
  this.ctx.body = html.toString().replace('<div id="app"></div>',
    '<div id="app">' + render(component, req, router) + '</div>')
})

app.use(middleware)
app.use(router)

middleware.hot.publish({ action: 'reload' })

app.listen(8080, function(err) {
  console.log('Web started at port 8080!')
})
