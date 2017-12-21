module.exports = {
  env: 'prod',
  port: process.env.PORT,
  sqlite: {
    file: '~/db.sqlite'
  },
}
