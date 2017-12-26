#!/bin/bash

PATH=$PATH:node_modules/.bin

export NODE_ENV=production

rm -rf build

webpack

# postcss -o build/style.css client/style/index.css
postcss --dir build/style client/style/**/*.css
