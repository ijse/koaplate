#!/bin/bash

PATH=$PATH:node_modules/.bin

NODE_ENV=development

webpack -w | nodemon \
  -e .ts,.js,.html \
  --watch "server/**/*" \
  --exec "ts-node" \
  ./bootstrap.ts
