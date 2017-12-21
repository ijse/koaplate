import config from 'config'
import Router from 'koa-router'
import os from 'os'

const router = new Router()

router.get('/guide(/.*)*', async (ctx:any) => {
  await ctx.render('guide', {
    hostname: os.hostname(),
    env: config.get('env')
  })
})

export default router
