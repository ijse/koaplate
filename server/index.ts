import Koa from 'koa'
import path from 'path'
import cors from '@koa/cors'
import morgan from 'koa-morgan'
import bodyParser from 'koa-bodyparser'
import session from 'koa-session'
import helmet from 'koa-helmet'
import render from 'koa-ejs'
import statics from 'koa-static'
import appRouter from 'app/server/router'

import db from './db'

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

export default app
