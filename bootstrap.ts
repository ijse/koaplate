const config = require('config')
const server = require('app/server/index.ts')

const port = config.get('port')

server.listen(port, () => {
  console.log('Server listen at port %s', port)
})

export {}
