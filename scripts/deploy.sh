#!/bin/bash
set -e

run() {
    echo "Run: $@"
    eval $@
}
echo $SERVERPASS
run "ls"
run "echo {version: $(date +%Y-%m-%d~%H:%M)} > ./pm2/version.txt"
run "npm ci"
run "npm run build"
# run "rm -rf output"
# run "mkdir output"
# run "zip -rq ./output/output.zip ../Home"
# run "ls"
# shell中脚本执行的路径相对于shell执行时的路径,所以./deployServer.js会报找不到模块
run "node ./scripts/deployServer.js $SERVERPASS"