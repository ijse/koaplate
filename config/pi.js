module.exports = Object.assign(require('./production.js'), {
  db: {
    url: 'sqlite://~/koaplabe-db.sqlite'
  },
  github: {
    token: process.env.GH_TOKEN,
    clientID: 'b6f123a4728d35b25376',
    clientSecret: '1275fd1f391aadaf39c58d302e78c80af3b6aa76'
  }
})
