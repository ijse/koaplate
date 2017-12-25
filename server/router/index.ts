import * as config from 'config'
import * as Router from 'koa-router'
import * as os from 'os'
import * as moment from 'moment'

import * as requireDir from 'require.dir'

const router = new Router()

router.use(async (ctx, next) => {
  Object.assign(ctx.state, {
    moment,
    hostname: os.hostname(),
    env: config.get('env')
  })
  try {
    await next()
  } catch (e) {
    console.log(e.status)
    ctx.status = e.status
    await ctx.render('error', {
      status: e.status,
      message: e.message
    })
  }
})

// load routes in current folder
const routeList:any = requireDir('.')
;(<any>Object).entries(routeList)
  .forEach((mod:any) => {
    const [ name, route ] = mod
    if (route.default instanceof Router) {
      router.use(route.default.routes())
    }
  })

router.get('/', async ctx => {
  await ctx.render('index')
})

// prevent /src/* from request
router.get('/src/*', async ctx => {
  ctx.throw(404)
})

export default router
