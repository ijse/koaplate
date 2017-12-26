import * as config from 'config'
import * as Raven from 'raven'
import server from 'app/server'

const port = config.get('port')

Raven.config(config.get('sentry'))
  .install()

server.listen(port, () => {
  console.log('Server listen at port %s', port)

  if (config.get('env') === 'dev') {
    console.log('Local URL: http://localhost:%s', port)
    console.log('Debug URL: http://localhost:%s', config.get('devPort'))
  }
})
