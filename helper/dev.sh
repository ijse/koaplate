#!/bin/bash

PATH=$PATH:node_modules/.bin

NODE_ENV=development

postcss -w \
  --dir build/style client/style/**/*.css \
| webpack-dev-server \
| nodemon \
  -e .ts,.js,.html \
  --watch "server/**/*" \
  --exec "ts-node" \
  ./bootstrap.ts
