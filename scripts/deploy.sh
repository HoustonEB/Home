#!/bin/bash

run() {
    echo "Run: $@"
    eval $@
}
run "ls"
run "npm install"
run "npm run build && node ./deployServer.js"