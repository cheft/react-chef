require('babel-core/register')
const path = require('path')
const Koa = require('koa')
var staticCache = require('koa-static-cache')

const router = require('./router')
const app = new Koa()

app.use(staticCache(path.resolve(__dirname, '../public'), {
  maxAge: 365 * 24 * 60 * 60,
  gzip: true
}))

app.use(router)

app.use(function(ctx) {
  ctx.body = '404'
})

app.listen(8000)
