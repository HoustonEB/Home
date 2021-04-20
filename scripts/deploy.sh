#!/bin/bash
set -e
run() {
    echo "Run: $@"
    eval $@
}
run "ls"
run "npm ci"
run "npm run build"
run "zip -rq ./output/output.zip ../HOME"
run "ls"
run "node ./deployServer.js"