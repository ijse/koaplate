import * as config from 'config'
import * as GitHub from 'github'

const github = new GitHub()

github.authenticate({
  type: 'oauth',
  token: config.get('github.token')
})

export default github
