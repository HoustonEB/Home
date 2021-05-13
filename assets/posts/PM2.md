---
authorName: Yu
title: PM2
date: 2021-05-13 14:24:52
categories: PM2
tags: PM2
---


## 命令
---

pm2启动并使用npm命令,运行nuxt server
`pm2 start npm -i max --name home-server -- run nuxt-start`

## 问题
---

1. 启动进程报错

每次进程启动错误,可能是pm2内存错误,需要杀下pm2进程.
```bash
ps aux | grep pm2 (查看pm2进程占用情况)
kill -9  14360 (这个数值要依据你上面命令返回的进程id进行填写)
```