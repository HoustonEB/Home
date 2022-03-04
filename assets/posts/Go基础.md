---
authorName: Yu
title: Go基础
date: 2021-11-17 10:16:28
categories: Go基础
tags: Go基础
---

## 环境配置

``http://10.10.3.7:7710

## 常见问题
1. 改变环境变量报错

```go
go env -w GOPROXY=https://goproxy.io
```

```bash
warning: go env -w GOPROXY=... does not override conflicting OS environment variable
```
解决方法: 
`unset GOPROXY`
之前安装go12版本时候，用环境变量的方式设置过代理地址，go13提供了-w参数来设置GOPROXY变量，但无法覆盖OS级别的环境变量

