#!/bin/bash

run() {
    echo "Run: $@"
    eval $@
}
run "ls"
run "npm ci"
run "npm run build && node ./deployServer.js"