import * as config from 'config'
import * as Router from 'koa-router'
import * as passport from 'koa-passport'
import { Strategy as GithubAuth } from 'passport-github'
const router = new Router()

passport.serializeUser(function(user:any, done:any) {
  done(null, user)
})

passport.deserializeUser(function(user:any, done:any) {
  done(null, user)
})

router.use(passport.initialize())
router.use(passport.session())
passport.use(new GithubAuth({
  clientID: config.get('github.clientId'),
  clientSecret: config.get('github.clientSecret'),
  callbackURL: 'http://localhost:4000/auth/github/callback'
}, (accToken:any, refToken:any, profile:any, cb:any) => {
  console.log(profile)
  return cb(false, profile)
}))

router.get('/auth/github', passport.authenticate('github'))
router.get(
  '/auth/github/callback',
  passport.authenticate('github', { failureRedirect: '/login' }),
  ctx => {
    ctx.redirect('/')
  })

  export default router
