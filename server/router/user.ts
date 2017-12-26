import * as passport from 'koa-passport'
import * as crypto from 'crypto'
import * as config from 'config'
import { Op } from 'sequelize'
import User from 'app/server/model/User'

function hashPass (str:string = ''):string {
  const secret:string = config.get('authSecret')
  return crypto.createHmac('sha256', secret)
    .update(str)
    .digest('hex')
}

export default function (router:any) {
  router.get('/login', async (ctx:any) => {
    await ctx.render('login', {
      title: 'login'
    })
  })

  router.post('/login',
    passport.authenticate('local'),
    async (ctx:any) => {
      const user = ctx.state.user
      ctx.redirect(`/user/${user.username}`)
    })

  router.get('/user/:username', async (ctx:any) => {
    const username = ctx.params.username
    const user = await User.findOne({ where: { username } })
    if (!user) return ctx.throw(404)

    const plainUser = user.get({ plain: true })
    delete plainUser.password

    await ctx.render('user', { user: plainUser })
  })

  router.post('/user', async (ctx:any) => {
    const userInfo = ctx.request.body
    const user = new User(userInfo)

    user.name = userInfo.name || user.username
    user.password = hashPass(user.password)
    await user.save()
    await ctx.login(user)
    ctx.status = 200
    ctx.redirect(`/user/${user.username}`)
  })

  router.get('/signup', async (ctx:any) => {
    await ctx.render('signup')
  })
}
