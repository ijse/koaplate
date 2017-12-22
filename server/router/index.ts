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
  await next()
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

export default router
