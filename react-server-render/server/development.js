require('babel-core/register')
require('babel-polyfill')

const Koa = require('koa')

const path = require('path')
const chokidar = require('chokidar')
const webpack = require('webpack')
const KWM = require('koa-webpack-middleware')
const config = require('../webpack.config.js')

const compiler = webpack(config)

var devMiddleware = KWM.devMiddleware
var hotMiddleware = KWM.hotMiddleware

const app = new Koa()

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
  heartbeat: 300
})

// router 的顺序不能变，否则有问题
app.use(require('./controllers').routes())

app.use(hotMiddlewareInstance)

// 解决 hotMiddleware 的修改了 type 的 bug
app.use(async function(ctx, next) {
  ctx.type = 'text/html; charset=utf-8';
  await next()
})

app.use(require('./router'))

app.use(devMiddlewareInstance)

// end router


app.use(function(ctx) {
  ctx.body = '404'
})

var server = require('http').createServer(app.callback())
var watcher = chokidar.watch([
  path.join(__dirname, '../server'),
  path.join(__dirname, '../universal')
])

function clearCache() {
  console.log("Clearing module cache");
  app.use(require('./router'))
  Object.keys(require.cache).forEach(function(id) {
    if (/[\/\\](server|universal)[\/\\]/.test(id)) {
      delete require.cache[id]
    }
  })
}

watcher.on('ready', function () {
  clearCache()
  watcher.on('all', function (e, p) {
    clearCache()
  })
})

server.listen('8080', function () {
  console.log('App started, at port %d, CTRL + C to terminate', '8080')
})
