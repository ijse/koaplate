import * as config from 'config'
import * as passport from 'koa-passport'
import * as Router from 'koa-router'

import User from 'app/server/model/User'
import { Strategy as GithubAuth } from 'passport-github'
const router = new Router()

// GitHub auth
const githubAuth = new GithubAuth(
  config.get('github'),
  async (accToken:any, refToken:any, profile:any, cb:any) => {
    const user = await User.findOrCreate({
      where: {
        username: profile.username,
        provider: 'github'
      },
      defaults: {
        provider: 'github',
        name: profile.displayName,
        username: profile.login,
        avatar: profile.photos[0].value,
        email: profile.emails[0].value
      }
    }).spread(user => user)

    return cb(false, user)
  }
)

passport.use(githubAuth)

router.get('/auth/github', passport.authenticate('github'))
router.get(
  '/auth/github/callback',
  passport.authenticate('github'),
  ctx => {
    ctx.redirect('/')
  })

export default router
