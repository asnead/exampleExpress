#!/bin/bash
cd $(dirname "$0")/..
echo \
  -e $(find app/browser -name '*.js' -not -name '*test.js' -print0 | \
    xargs -0 -I file echo file | \
    sed -e 's/^/-r \.\//' | \
    sed -e 's/\.js$//' | \
    xargs)
