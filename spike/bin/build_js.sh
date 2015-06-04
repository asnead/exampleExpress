#!/bin/bash
cd $(dirname "$0")/..
echo $(./bin/browserify_args.sh) "$@" 
browserify $(./bin/browserify_args.sh) "$@" | uglifyjs --no-mangle > wwwroot/bundle.js
