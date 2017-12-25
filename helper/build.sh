#!/bin/bash

PATH=$PATH:node_modules/.bin

NODE_ENV=production

postcss -o build/style.css client/style/index.css
webpack

ts-node ./bootstrap.ts
