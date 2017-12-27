module.exports = {
  env: 'prod',
  port: process.env.PORT || 4000,
  db: {
    url: 'mysql://b197c83d5ec8a0:44eb8225@us-cdbr-iron-east-05.cleardb.net/heroku_28a5cb0e7c5f130?reconnect=true'
  },
  github: {
    token: process.env.GH_TOKEN,
    clientID: '03527e62f9a8bd201034',
    clientSecret: '285dda7a6cb0f0cdc820ddc3d4ea8c56a4456472'
  },
}
