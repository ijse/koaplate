const config = require('config')

const Raven = require('raven')
const server = require('app/server/index.ts')

const port = config.get('port')

Raven.config(config.get('sentry'))
  .install()

server.listen(port, () => {
  console.log('Server listen at port %s', port)
  console.log('Local URL: http://localhost:%s', port)
})

export {}
