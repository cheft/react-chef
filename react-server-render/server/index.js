const fs = require('fs')
const path = require('path')
const Koa = require('koa')
const router = require('../universal/router')
const views = require('koa-views')

var webpack = require('webpack')
var KWM = require('koa-webpack-middleware')
var chokidar = require('chokidar')
var config = require('../webpack.config.js')
var compiler = webpack(config)

var devMiddleware = KWM.devMiddleware
var hotMiddleware = KWM.hotMiddleware

require('babel-core/register')
const render = require('./render')

const app = new Koa()


router.addResMethod('view', function(component, req) {
  var html = fs.readFileSync(__dirname + '/template.ejs')
  this.ctx.response.header['content-type'] = 'text/html; charset=utf-8'
  this.ctx.body = html.toString().replace('<div id="app"></div>',
    '<div id="app">' + render(component, req, router) + '</div>')
})


var devMiddlewareInstance = devMiddleware(compiler, {
  noInfo: true,
  watchOptions: {
    aggregateTimeout: 300,
    poll: false
  },
  publicPath: '/',
  dynamicPublicPath: true,
  stats: {
    colors: true
  }
})
var hotMiddlewareInstance = hotMiddleware(compiler, {
  log: console.log,
  path: '/__webpack_hmr',
  heartbeat: 10 * 1000
})

process.env.NODE_ENV = 'development'
app.env = 'development'
app.use(devMiddlewareInstance)

app.use(hotMiddlewareInstance)

// 解决 hotMiddleware 的修改了 type 的 bug
app.use(function(ctx, next) {
  ctx.type = 'text/html; charset=utf-8';
  next()
})

app.use(router)

// app.listen(8080, function(err) {
//   console.log('Web started at port 8080!')
// })

// error logger
app.on('error', function (err, ctx) {
  console.log('error occured:', err.stack)
})

// listen
var server = require('http').createServer(app.callback())
var watcher = chokidar.watch([
  // path.join(__dirname, '../server'),
  path.join(__dirname, '../universal')
])
watcher.on('ready', function () {
  watcher.on('all', function (e, p) {
    console.log("Clearing module cache");
    Object.keys(require.cache).forEach(function(id) {
      if (/[\/\\](universal)[\/\\]/.test(id)) {
        console.log(id)
        delete require.cache[id]
      }
    })
  })
})
var isListened = false
compiler._plugins['after-compile'].push(function (compilation, callback) {
  callback()
  !isListened && server.listen('8080', function () {
    console.log('App started, at port %d, CTRL + C to terminate', '8080')
    isListened = true
  })
})
