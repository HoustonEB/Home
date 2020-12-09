#!/bin/bash
npm run generate
cd /Users/v_yuzhuang01/Documents/Home/dist/
git init
git config user.name "HoustonEB"
git config user.email "860852345@qq.com"
git rm -r --cached .
git add .
git commit -m "deploy:gh-pages"

git push --force --quiet git@github.com:HoustonEB/Home.git master:gh-pages