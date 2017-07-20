require('babel-core/register')
require('babel-polyfill')

const path = require('path')
const Koa = require('koa')
var staticCache = require('koa-static-cache')

const router = require('./router')
const app = new Koa()

app.use(staticCache(path.resolve(__dirname, '../public'), {
  maxAge: 365 * 24 * 60 * 60,
  gzip: true
}))

app.use(require('./controllers').routes())
app.use(router)

// 测试
app.use(async function(ctx) {
  const timeout = function (delay) {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve()
        }, delay)
      })
    }

  await Promise.resolve(timeout(3000))
  ctx.body = '404'
})

app.listen(8080)
