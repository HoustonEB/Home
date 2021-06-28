# !/bin/bash
set -e

cd /usr/local/nginx/html/home-node-server/resources
rm -rf node_modules/
# npm cache clean --force
npm ci 
# npm run build
npm run nuxt-start


