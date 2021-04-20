#!/bin/bash
set -e
run() {
    echo "Run: $@"
    eval $@
}
echo $SERVERPASS
run "ls"
run "npm ci"
run "npm run build"
run "mkdir output"
run "zip -rq ./output/output.zip ../Home"
run "ls"
run "node ./deployServer.js $SERVERPASS"