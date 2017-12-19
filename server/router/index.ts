const Router = require('koa-router')
const router = new Router()
const config = require('config')

router.get('/guide(/.*)*', async (ctx:any) => {
  await ctx.render('guide', {
    env: config.get('env')
  })
})

module.exports = router
