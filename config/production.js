module.exports = {
  env: 'prod',
  port: process.env.PORT || 4000,
  sqlite: 'sqlite:///tmp/db.sqlite',
  github: {
    clientID: '03527e62f9a8bd201034',
    clientSecret: '285dda7a6cb0f0cdc820ddc3d4ea8c56a4456472'
  },
}
