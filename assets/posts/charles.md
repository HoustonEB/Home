---
authorName: Yu
title: charles
date: 2019-08-15 15:14:48
tags: charles
categories: 抓包工具
---

{% note info %}
charles常用技巧
{% endnote %}

{% note error %}
charles常用技巧
{% endnote %}

1. 断点mock数据

右键你需要打断点的请求.

![charles4](./charles/charles4.jpg)
<!-- more -->
刷新页面后可以编辑发出的请求和修改响应的数据.

![charles5](./charles/charles5.jpg)

------

{% note warning %}
使用charles经常会遇到的问题总结:
 1.e
 2.ddsdsd
{% endnote %}
1. 抓不到https请求

安装证书.

![charles1](./charles/charles1.jpg)

开启SSL代理,监听所有host和port.

![charles4](./charles/charles2.jpg)

2. 请求没有被charles代理成功.

将本地的http和https代理到本机ip地址,port是charles的默认端口号8888

![charles4](./charles/charles3.jpg)
    
