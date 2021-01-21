---
authorName: Yu
title: Unicode
date: 2021-01-21 15:35:46
categories: Unicode
tags: Unicode
---

## Unicode是什么
---
Unicode源于一个很简单的想法: 将全世界所有的字符包含在一个集合里,计算机只要支持这一个字符集,就能显示所有的字符,再也不会有乱码了.
目前,Unicode的最新版本是7.0版,一共收入了109449个符号,其中的中日韩文字为74500个.可以近似认为,全世界现有的符号当中,三分之二以上来自东亚文字.比如,中文"好"的码点是十六进制的597D.
## JavaScript中的Unicode
---
### JavaScript字符函数的局限
由于JavaScript只能处理UCS-2编码,造成所有字符在这门语言中都是2个字节,如果是4个字节的字符,会当作两个双字节的字符处理.JavaScript的字符函数都受到这一点的影响,无法返回正确结果.
### ECMAScript6
JavaScript的下一个版本ECMAScript 6(简称ES6),大幅增强了Unicode支持,基本上解决了这个问题.
#### 正确识别字符
ES6可以自动识别4字节的码点.因此,可以用下列方法遍历字符串.
```js
for (let s of string ) {
  // ...
}
```
但是,为了保持兼容,length属性还是原来的行为方式.为了得到字符串的正确长度,可以用下面的方式.
`Array.from(string).length`
#### 码点表示法
JavaScript允许直接用码点表示Unicode字符,写法是"反斜杠+u+码点".
`'好' === '\u597D' // true`
但是,这种表示法对4字节的码点无效.ES6修正了这个问题,只要将码点放在大括号内,就能正确识别.
```js
'𠁀'.charCodeAt(0).toString(16) // "d840" charCodeAt无法处理大于FFFF的编码所以结果是错误的
'𠁀'.codePointAt(0).toString(16) // "20040"
'\ud840' === '𠁀' // false
'\u{20040}' === '𠁀' // true
```
#### 字符串处理函数
```js
处理两个字节码点的函数.
'A'.charCodeAt(0) // 返回10进制编码
'A'.charCodeAt(0).toString(16) // 返回16进制编码
ES6新增了几个专门处理4字节码点的函数.
String.fromCodePoint(): 从Unicode码点(10进制)返回对应字符
String.prototype.codePointAt(): 从字符返回对应的码点(10进制)
String.prototype.at(): 返回字符串给定位置的字符
```
#### 正则表达式
##### 1.修饰符

ES6 对正则表达式添加了`u`修饰符，含义为“Unicode 模式”,用来正确处理大于`\uFFFF`的 Unicode 字符.也就是说,会正确处理四个字节的UTF-16编码.
```js
/^\uD83D/u.test('\uD83D\uDC2A') // false
/^\uD83D/.test('\uD83D\uDC2A') // true
```
上面代码中,`\uD83D\uDC2A`是一个四个字节的 UTF-16 编码,代表一个字符.但是,ES5 不支持四个字节的 UTF-16 编码,会将其识别为两个字符,导致第二行代码结果为true.加了`u`修饰符以后,ES6 就会识别其为一个字符,所以第一行代码结果为false.

##### 2.Unicode 字符表示法

ES6 新增了使用大括号表示 Unicode 字符,这种表示法在正则表达式中必须加上`u`修饰符,才能识别当中的大括号,否则会被解读为量词.
```js
/\u{61}/.test('a') // false
/\u{61}/u.test('a') // true
/\u{20BB7}/u.test('𠮷') // true

js不能正确处理\uFFFF的unicode编码.添加修饰符u,并将码点放入{}中可以支持.
/[\u20000-\u2A6D6]/.test(';') // true 不能正确处理
/[\u20000-\u2A6D6]/.test('𠁹') // false
/[\u{20000}-\u{2A6D6}]/u.test('𠁹') // true
```
上面代码表示,如果不加`u`修饰符,正则表达式无法识别`\u{61}`这种表示法,只会认为这匹配61个连续的u.

#### Unicode正规化
有些字符除了字母以外,还有附加符号.比如,汉语拼音的`Ǒ`,字母上面的声调就是附加符号.对于许多欧洲语言来说,声调符号是非常重要的.
Unicode提供了两种表示方法.一种是带附加符号的单个字符,即一个码点表示一个字符,比如`Ǒ`的码点是`U+01D1`;另一种是将附加符号单独作为一个码点,与主体字符复合显示,即两个码点表示一个字符,比如`Ǒ`可以写成`O（U+004F） + ˇ（U+030C）`.
```js
// 方法一
'\u01D1'
// 'Ǒ'

// 方法二
'\u004F\u030C'
// 'Ǒ'
```
这两种表示方法,视觉和语义都完全一样,理应作为等同情况处理.但是,JavaScript无法辨别.
`'\u01D1'==='\u004F\u030C' //false`
ES6提供了normalize方法,允许"Unicode正规化",即将两种方法转为同样的序列.
```js
 '\u01D1'.normalize() === '\u004F\u030C'.normalize() 
 // true
```
## 相关链接
---
[Unicode与JavaScript详解](http://www.ruanyifeng.com/blog/2014/12/unicode.html)
[Es6修饰符](https://es6.ruanyifeng.com/#docs/regex#u-%E4%BF%AE%E9%A5%B0%E7%AC%A6)
[汉字 Unicode 编码范围](https://www.qqxiuzi.cn/zh/hanzi-unicode-bianma.php)
