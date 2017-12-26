#!/bin/bash

PATH=$PATH:node_modules/.bin

export NODE_ENV=production

webpack

postcss -o build/style.css client/style/index.css
