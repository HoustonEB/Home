---
authorName: Yu
title: Git
date: 2019-08-22 11:38:16
categories: Git
tags: Git
---
## 常用git命令
---

### 缓存
清除git缓存,添加新的文件进入暂存区
```shell
git add .
git rm -r --cached .
```
{% note info %}
应用场景:
    - 先暂存文件,没有git ignore文件
    - 将项目里的第三方git仓库化为己有
{% endnote %}
### 创建分支

```shell
# 创建本地分支
git checkout -b local-branch
# 拉取remote分支,并在本地创建分支
git checkout -b local-branch origin/remote-branch
```

### tag
```shell
# 查看本地全部tag
git tag
# 给某个commit添加tag
git tag tagName commitHash
推动本地tag到远端
git push --tags origin
# 删除tag
git tag -d tagName
# 查看tag是在哪个commit打的
git show tagName
```

### config
设置全局的git用户名和邮箱,不带global是设置该仓库的git用户名和邮箱
```shell
git config --global user.name newName
git config --global user.email newEmail
```

### 远端代码强制覆盖本地代码

```shell
git fetch --all
git reset --hard origin/master 
git pull
```
### 查看修改记录

`git log`

| options | desc |
| ---- | ---- |
| `pretty` | 这个选项可以使用不同于默认格式的方式展示提交历史。 这个选项有一些内建的子选项供你使用。 比如 oneline 会将每个提交放在一行显示，在浏览大量的提交时非常有用。 另外还有 short，full 和 fuller 选项，它们展示信息的格式基本一致，但是详尽程度不一：|

```shell
# 显示全部提交历史
git log --pretty=oneline
# 显示某个文件的提交历史
git log --pretty=oneline src/frontend/service/common.js
# 查看某个commitId的具体改动
git show 8dc03eb52d2598fa57671af146769d8c0b0653ee
```

## git提交规范
---

eg: `git commit -m 'feat: 新特性'`

| type | desc |
| --- | ---- |
| feat | 新特性 |
| fix | 修改问题 |
| refactor | 代码重构 |
| docs | 文档修改 |
| style | 代码格式修改，非css |
| test | 测试用例修改 |
| chore | 其他修改，比如构建流程，依赖管理 |
| scope | commit影响的范围，比如: route, component, utils, build... |
| subject | commit 的概述 |
| body | commit具体修改 |
| footer | 备注 |

## 常见问题
---

1. Failed to connect to github.com port 443:connection timed out

```shell
# 取消全局代理
git config --global --unset http.proxy
git config --global --unset https.proxy
```