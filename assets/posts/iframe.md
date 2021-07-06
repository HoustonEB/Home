---
authorName: Yu
title: iframe
date: 2021-07-06 14:32:19
categories: iframe
tags: iframe
---

## 获取iframe文本对象
---
兼容写法
```js
let iframe = document.getElementById('iframeId');
let doc = iframe.contentDocument || iframe.contentWindow.document;
// 获取节点和子节点内的文本内容
let txt = doc.body && doc.body.textContent;
```

### contentDocument和contentWindow区别
contentDocument获取的是iframe中的`document`文本对象.
contentWindow获取的是iframe中的`window`对象.
### innerHTML和innerText和textContent区别
1. innerHTML获取该节点中所有的html和文本内容.
2. innerText获取该节点中所有已渲染的文本内容,未显示(`display:none`)在页面上的不获取,并且不能获取`<script>`和`<style>`元素中的内容.
3. textContent获取该节点包括子节点所有文本内容,未渲染节点也会获取,
4. 要注意设置文本时被替换的可不只是文本了;这时`textContent`,`innerText`属性相当于`innerHTML`属性,会把指定节点下的所有子节点也一并替换掉.
5. 由于`innerText`受CSS样式的影响,它会触发重排(`reflow`),但`textContent`不会.

## 获取父窗口
---

```js
document.getElementById(iframeId).contentWindow.parent.document.body.style='background-color: red;'
```
