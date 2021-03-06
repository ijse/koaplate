koaplate
========

## Structure
- TypeScript
- Koa2
  - Router
  - CORS
  - Logging
  - Session
  - BodyParser
  - Helmet
  - Render (ejs)
  - Static files
- Config
- Nodemon
- Sequlize ORM
  - SQLite3
  - MySQL
- Webpack
- PostCSS
  - import
  - autoprefixer
  - nesting
  - cssnano
- Web
  - Vue2
  - axios
- Deploy by Shipit
- Unit Test

## Getting Startup

```
yarn
yarn start
```

## Contribution

```
yarn dev
```

## With docker

### build
```
docker build -t koaplate .
docker run -p 4000:4000 koaplate
```

### Pull from docker hub
```
docker run -p 4000:4000 ijse/koaplate
```

### Compose

```
docker swarm init --advertise-addr $(docker-machine ip default) --listen-addr 0.0.0.0
docker stack deploy -c docker-compose.yml koaplate
```
