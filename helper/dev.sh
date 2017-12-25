#!/bin/bash

PATH=$PATH:node_modules/.bin

NODE_ENV=development

postcss -w \
  -o build/style.css client/style/index.css \
| webpack -w \
| nodemon \
  -e .ts,.js,.html \
  --watch "server/**/*" \
  --exec "ts-node" \
  ./bootstrap.ts
