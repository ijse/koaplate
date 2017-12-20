koaplate
========

## Structure
- Typescript
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
- Webpack
  - Vue2
  - PostCSS
    - CSS Nesting
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
