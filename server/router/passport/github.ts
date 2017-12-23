import * as config from 'config'
import * as passport from 'koa-passport'
import * as Router from 'koa-router'

import User from 'app/server/model/User'
import { Strategy as GithubAuth } from 'passport-github'
const router = new Router()

// GitHub auth
passport.use(new GithubAuth(config.get('github'), async (
  accToken:any, refToken:any, profile:any, cb:any
) => {
  const user = await User.findOrCreate({
    where: { username: profile.username },
    defaults: {
      username: profile.login,
      password: profile.id
    }
  }).spread(user => user)

  return cb(false, user)
}))

router.get('/auth/github', passport.authenticate('github'))
router.get(
  '/auth/github/callback',
  passport.authenticate('github', { failureRedirect: '/login' }),
  ctx => {
    ctx.redirect('/')
  })

export default router
