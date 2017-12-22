import * as Koa from 'koa'
import * as path from 'path'

import * as cors from '@koa/cors'
import * as morgan from 'koa-morgan'
import * as bodyParser from 'koa-bodyparser'
import * as session from 'koa-session'
import * as helmet from 'koa-helmet'
import * as render from 'koa-ejs'
import * as statics from 'koa-static'
import router from 'app/server/router'

import './db'

const app = new Koa()

if (app.env === 'development') {
  app.use(morgan('dev'))
}

app.use(cors())
app.use(helmet())

app.keys = [ 'mysecret' ]
app.use(session({}, app))
app.use(bodyParser())

render(app, {
  root: path.join(__dirname, 'view'),
  layout: 'template',
  viewExt: 'html',
  cache: false,
  debug: false
})

app.use(router.routes())
app.use(router.allowedMethods())

app.use(statics('./client'))

export default app
