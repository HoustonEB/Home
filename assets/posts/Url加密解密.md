---
authorName: Yu
title: Url加密解密
date: 2019-09-17 11:06:40
categories: Url加密解密
tags: Url加密解密
---
## 解码函数
---

encode(加密) decode(解密)
`encodeURI decodeURI encodeURIComponent decodeURIComponent`四个函数都可以进行加密解密.
### 区别
---

1. encodeURI不能加密如`#`的特殊符号

```js
encodeURI('http://w3schools.com/my test.asp?name=ståle&car=saab')
// 输出 => "http://w3schools.com/my%20test.asp?name=st%C3%A5le&car=saab"

decodeURI("http://w3schools.com/my%20test.asp?name=st%C3%A5le&car=saab")
// 输出 => "http://w3schools.com/my test.asp?name=ståle&car=saab"
```
2. encodeURIComponent可以对特俗符号加密

```js
encodeURIComponent("http://w3schools.com/my test.asp?name=ståle&car=saab")
// 输出 => "http%3A%2F%2Fw3schools.com%2Fmy%20test.asp%3Fname%3Dst%C3%A5le%26car%3Dsaab"

decodeURIComponent("http%3A%2F%2Fw3schools.com%2Fmy%20test.asp%3Fname%3Dst%C3%A5le%26car%3Dsaab")
// 输出 => "http://w3schools.com/my test.asp?name=ståle&car=saab"
```

## 问题
---

1. 丢失参数
如果url不经过加密处理,在传输过程中会丢失参数.

## 总结
---
{% note info %}
都使用encodeURIComponent decodeURIComponent 
{% endnote %}

## 参考
---

[小程序丢失参数](https://juejin.cn/post/6901677582740586503)