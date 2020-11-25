cd ../dist/
git init
git add .
git commit -m "deploy:gh-pages"

git push --force --quiet git@github.com:HoustonEB/Home.git master:gh-pages