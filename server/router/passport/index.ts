import * as config from 'config'
import * as Router from 'koa-router'
import * as passport from 'koa-passport'
import User from 'app/server/model/User'

import local from './local'
import github from './github'
const router = new Router()

passport.serializeUser((user:any, done:any) => {
  done(null, user.id)
})

passport.deserializeUser(async (id:any, done:any) => {
  console.log('>>>', id)
  const user = await User.findById(id)

  done(null, user)
})

router.use(passport.initialize())
router.use(passport.session())

router.use(github.routes())
router.use(local.routes())

router.get('/logout', async ctx => {
  ctx.logout()
  ctx.redirect('/')
})

export default router
