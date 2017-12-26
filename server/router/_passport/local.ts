import * as passport from 'koa-passport'
import * as Router from 'koa-router'
import User from 'app/server/model/User'

import { Strategy as LocalAuth } from 'passport-local'

const router = new Router()

// Local auth
passport.use(new LocalAuth((username, password, done) => {
  return User.findOne({
    where: { username }
  })
  .then(user => {
    if (!user) {
      return done(null, false, {
        message: 'user not found'
      })
    }

    if (user.password !== password) {
      return done(null, false, {
        message: 'Password invalid.'
      })
    }

    return done(null, user)
  })
  .catch(done)
}))

export default router
