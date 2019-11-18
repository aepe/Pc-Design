### 
# @abstract:
 # @version:
 # @Author: bhabgs
 # @Date: 2019-11-14 15:01:12
 # @LastEditors: bhabgs
 # @LastEditTime: 2019-11-14 16:03:17
 ###
#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
npm run docs:build

# 进入生成的文件夹
cd docs/.vuepress/dist

git init
git add -A
git commit -m '发布文档'

# 如果发布到 https://<USERNAME>.github.io
 git push -f git@github.com:zx-js/zx-util-ui-docs.git master

# 如果发布到 https://<USERNAME>.github.io/<REPO>
# git push -f git@github.com:muou2125/blog.git master:gh-pages

cd -