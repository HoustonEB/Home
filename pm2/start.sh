# !/bin/bash
set -e

cd ./resources
npm cache clean --force
npm ci
nuxt start
