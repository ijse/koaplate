import * as Router from 'koa-router'

const router = new Router()

router.get('/guide(/.*)*', async (ctx:any) => {
  await ctx.render('guide')
})

export default router
