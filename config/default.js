module.exports = {
  env: 'dev',
  port: 4000,
  devPort: 4001,

  authSecret: 'koaplate',

  github: {
    clientID: 'af9c267e62f4bda295b4',
    clientSecret: 'f5a7c33f53f8cfb0a5852ff13e42e023f6bb1edc'
  },

  db: {
    url: 'sqlite://db.sqlite'
  },
  sentry: 'https://202c02c458e7453bbd3b35ce17e9f2de:4dda7c3ffd7b4cce862cb7ec950fdab3@sentry.io/261322'
}
