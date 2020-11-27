cd /Users/v_yuzhuang01/Documents/Home/dist/
git rm -r --cached .
git add .
git commit -m "deploy:gh-pages"

git push --force --quiet git@github.com:HoustonEB/Home.git master:gh-pages