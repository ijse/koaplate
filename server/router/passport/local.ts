import * as passport from 'koa-passport'
import { Op } from 'sequelize'
import User from 'app/server/model/User'
import * as Router from 'koa-router'

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

router.get('/login', async ctx => {
  await ctx.render('login')
})
router.post('/login',
  passport.authenticate('local'),
  async ctx => {
    const user = ctx.state.user
    ctx.redirect(`/user/${user.username}`)
  })

router.get('/user/:username', async ctx => {
  const username = ctx.params.username
  const user = await User.findOne({ where: { username } })
  if (!user) ctx.throw(404)
  await ctx.render('user', { user })
})

router.post('/user', async ctx => {
  const userInfo = ctx.request.body
  const user = new User(userInfo)
  await user.save()
  await ctx.login(user)
  ctx.status = 200
  ctx.redirect(`/user/${user.username}`)
})

router.get('/signup', async ctx => {
  await ctx.render('signup')
})

export default router
