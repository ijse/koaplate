const Router = require('koa-router')
const router = new Router()
const config = require('config')

const os = require('os')

router.get('/guide(/.*)*', async (ctx:any) => {
  await ctx.render('guide', {
    hostname: os.hostname(),
    env: config.get('env')
  })
})

module.exports = router
