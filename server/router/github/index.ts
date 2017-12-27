import service from 'app/server/service'

const github = service.github

export default (router:any) => {
  router.get('/github/prs', async (ctx:any) => {
    const { data: list } = await github.pullRequests.getAll({
      owner: 'tigerbrokers',
      repo: 'gem'
    })

    ctx.body = list
  })
}
