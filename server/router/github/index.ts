import service from 'app/server/service'

const github = service.github

export default (router:any) => {
  router.get('/github/prs', async (ctx:any) => {
    const { data: result } = await github.pullRequests.getAll({
      owner: 'tigerbrokers',
      repo: 'gem'
    })

    const list = result.map(async (pr:any) => {
      try {
        const issue = await github.issues.get({
          owner: 'tigerbrokers',
          repo: 'gem',
          number: pr.number
        })

        pr.issue = issue.data
      } catch (e) {
        console.error(e)
      }
      return pr
    })

    ctx.body = await Promise.all(list)
  })
}
