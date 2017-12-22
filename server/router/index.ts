import * as config from 'config'
import * as Router from 'koa-router'
import * as os from 'os'
import * as moment from 'moment'

import passport from './passport'
import talk from './talk'
import guide from './guide'

const router = new Router()

router.use(async (ctx, next) => {
  Object.assign(ctx.state, {
    moment,
    hostname: os.hostname(),
    env: config.get('env')
  })
  await next()
})

router.use(passport.routes())
router.use(talk.routes())
router.use(guide.routes())

export default router
