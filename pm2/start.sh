# !/bin/bash
set -e

cd ./resources
npm ci
nuxt start
