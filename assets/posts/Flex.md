---
title: Flex
date: 2019-09-02 13:44:56
categories: 布局
tags: 
- Flex
- 布局
---

### Flex
---
#### 容器的属性
---
以下属性设置在容器上
1. flex-direction
`flex-direction`属性决定主轴的方向（即项目的排列方向）。
```css
.box {
  flex-direction: row | row-reverse | column | column-reverse;
}
```
2. flex-wrap
默认情况下，项目都排在一条线（又称"轴线"）上。`flex-wrap`属性定义，如果一条轴线排不下，如何换行。
```css
.box{
  flex-wrap: nowrap | wrap | wrap-reverse;
}
```
3. flex-flow
`flex-flow`属性是`flex-direction`属性和`flex-wrap`属性的简写形式，默认值为`row nowrap`。
```css
.box {
  flex-flow: <flex-direction> || <flex-wrap>;
}
```
4. justify-content
`justify-content`属性定义了项目在主轴上的对齐方式。
```css
.box {
  justify-content: flex-start | flex-end | center | space-between | space-around;
}
```
5. align-items
`align-items`属性定义项目在交叉轴上如何对齐。
```css
.box {
  align-items: flex-start | flex-end | center | baseline | stretch;
}
```
6. align-content
`align-content`属性定义了多根轴线的对齐方式。如果项目只有一根轴线，该属性不起作用。
```css
.box {
  align-content: flex-start | flex-end | center | space-between | space-around | stretch;
}
```

#### 项目的属性
--- 
以下属性设置在子元素上
1. order
`order`属性定义项目的排列顺序。数值越小，排列越靠前，默认为0。
```css
.item {
  order: <integer>;
}
```
2. flex-grow
`flex-grow`属性定义项目的放大比例，默认为0，即如果存在剩余空间，也不放大。
```css
.item {
  flex-grow: <number>; /* default 0 */
}
```
3. flex-shrink
属性定义了项目的缩小比例，默认为1，即如果空间不足，该项目将缩小。设为0,该项目不会缩小.
```css
.item {
  flex-shrink: <number>; /* default 1 */
}
```
4. flex-basis
`flex-basis`属性定义了在分配多余空间之前，项目占据的主轴空间（main size）。浏览器根据这个属性，计算主轴是否有多余空间。它的默认值为auto，即项目的本来大小。
它可以设为跟width或height属性一样的值（比如350px），则项目将占据固定空间。
```css
.item {
  flex-basis: <length> | auto; /* default auto */
}
```
5. flex
flex属性是`flex-grow`, `flex-shrink` 和 `flex-basis`的简写，默认值为`0 1 auto`。后两个属性可选。
建议优先使用这个属性，而不是单独写三个分离的属性，因为浏览器会推算相关值
```css
.item {
  flex: none | [ <'flex-grow'> <'flex-shrink'>? || <'flex-basis'> ]
}
```
6. align-self
`align-self`属性允许单个项目有与其他项目不一样的对齐方式，可覆盖`align-items`属性。默认值为auto，表示继承父元素的`align-items`属性，如果没有父元素，则等同于stretch。
```css
.item {
  align-self: auto | flex-start | flex-end | center | baseline | stretch;
}
```

#### issues
---
1. 一列宽度固定,另一列内容适应宽度.
```css
.box {
    display: flex;
}
.left-item {
    flex: 1;
    overflow: auto; // 重要. 避免盒子宽度被内容撑开
}
.right-item {
    flex: 0 0 240px; => // flex-grow: 0; flex-shrink: 0; flex-basis: 240px;
}
```
2. 顶部固定,中间内容适应并滚动,底部固定
```css
.box {
    display: flex;
    height: 100%;
    flex-direction: column;
}
.header {
    width: 100%;
    flex: 0 0 100px;
}
.content {
    width: 100%;
    flex: 1;
    overflow: auto;
}
.footer {
    width: 100%;
    flex: 0 0 50px;
}
```
[布局demo](https://codepen.io/houstoneb/pen/RwGPBJv)
#### 参考
---
[flex布局阮一峰](http://www.ruanyifeng.com/blog/2015/07/flex-grammar.html)
[flex在线demo](https://yoksel.github.io/flex-cheatsheet/#section-display)