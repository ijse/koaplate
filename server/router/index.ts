const Router = require('koa-router')
const router = new Router()

router.get('/', async (ctx:any) => {
  await ctx.render('guide', {
    greeting: 'hello'
  })
})

module.exports = router
