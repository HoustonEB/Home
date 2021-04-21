# !/bin/bash
set -e

echo '1-----'

unzip -d ./resources ./output/output.zip
cd ./resources
nuxt start