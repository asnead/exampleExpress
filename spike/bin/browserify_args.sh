#!/bin/bash
cd $(dirname "$0")/..
find app/browser -maxdepth 1 -type f -name "*.js" -not -name "*test.js" -exec echo {} \;
