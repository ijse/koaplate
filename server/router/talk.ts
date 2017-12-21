import * as Router from 'koa-router'
import Talk from 'app/server/model/Talk'

const router = new Router()

router.get('/talk', async (ctx:any) => {
  const list = await Talk.findAll({
    order: [ ['createdAt', 'DESC'] ]
  })
  await ctx.render('talk', {
    list
  })
})

router.post('/talk', async (ctx:any) => {
  const msg = ctx.request.body.content
  console.log('Got msg:', msg)

  const newTalk = new Talk({
    content: msg
  })

  await newTalk.save()

  ctx.redirect('/talk')
  // ctx.body = newTalk
})

export default router

