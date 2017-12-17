const Koa = require('koa')
const path = require('path')

const cors = require('@koa/cors')
const morgan = require('koa-morgan')
const bodyParser = require('koa-bodyparser')
const session = require('koa-session')
const helmet = require('koa-helmet')
const render = require('koa-ejs')
const statics = require('koa-static')

const appRouter = require('app/server/router')

const app = new Koa()

if (app.env === 'development') {
  app.use(morgan('dev'))
}

app.use(cors())
app.use(helmet())

app.use(session({}, app))
app.use(bodyParser())

render(app, {
  root: path.join(__dirname, 'view'),
  layout: 'template',
  viewExt: 'html',
  cache: false,
  debug: false
})

app.use(appRouter.routes())
app.use(appRouter.allowedMethods())

app.use(statics('./client'))

module.exports = app
