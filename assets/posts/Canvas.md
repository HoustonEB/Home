---
authorName: Yu
title: Canvas
date: 2021-04-06 11:23:07
categories: Canvas
tags: Canvas
---

## 常见问题
---

### width和style.width的区别

- `canvas`width,height: 绘制canvas的宽高.
- `style.width,style.height`: 渲染在浏览器中可见的宽高.

[canvas: width和style.width的区别](https://segmentfault.com/a/1190000016819776)

### canvas锯齿

1. 浏览器中显示的宽高不变.
2. 放大绘制画布的宽高,并且缩放(放大)当前屏幕像素比相同的倍数.

```js
// 根据设备像素比优化canvas绘图
const devicePixelRatio = window.devicePixelRatio;
if (devicePixelRatio) {
  canvas.style.width = `${width}px`;
  canvas.style.height = `${height}px`;
  canvas.height = height * devicePixelRatio; // 画布宽高放大
  canvas.width = width * devicePixelRatio;
  context.scale(devicePixelRatio, devicePixelRatio); // 画布内容放大相同的倍数
} else {
  canvas.width = width;
  canvas.height = height;
}
```
[canvas锯齿](https://blog.csdn.net/u010619243/article/details/69944369)

## 相关链接
---

[canvas: width和style.width的区别](https://segmentfault.com/a/1190000016819776)
[canvas实现签名组件](http://louiszhai.github.io/2017/07/07/canvas-draw/)
