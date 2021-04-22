---
authorName: Yu
title: EventLoop
date: 2021-04-15 15:06:58
categories: EventLoop
tags: EventLoop
---

## 浏览器事件循环

---

### 循环机制1
执行栈为空去检查宏任务队列是否为空,为空去执行微任务队列并全部执行完.
如果不为空,则执行宏任务,之后去检查微任务队列是否为空,为空则执行宏任务中的任务,否则执行微任务中任务.

### 例子
1.
```js
console.log('start');
setTimeout(() => {
    console.log('setTimeout1');
    setTimeout(() => {
        console.log('setTimeout1-1');
        Promise.resolve(1)
            .then(v => {
                console.log(v, 'promise1');
                return 3;
            })
            .then(v => {
                console.log(v, 'promise3');
                return 6;
            })
            .then(v => {
                console.log(v, 'promise6');
            });
        Promise.resolve(4)
            .then(v => {
                console.log(v, 'promise4');
                return 5;
            })
            .then(v => {
                console.log(v, 'promise5');
            });
    });
});
setTimeout(() => {
    console.log('setTimeout2');
    Promise.resolve(2).then(v => {
        console.log(v, 'promise2');
    });
});
console.log('end');
```
分析: 
1. 主线程执行 js 代码,输出'start'. 
2. 将 setTimeout1 和 setTimeout2 加入宏任务队列中. 
3. 输出'end'. 
4. 此时执行栈中为空,回去将宏任务队列中的 setTimeout1 的回调加入执行栈中执行,输出'setTimeout1',并将 setTimeout1-1 加入宏任务队列末尾(队列是先进先出的原则) 
5. 此时执行栈为空,将宏任务队列里的 setTimeout2 的回调加入执行栈中执行,输出'setTimeout2'.此时将微任务 promise2 加入微任务队列中,并执行,输出'2 promise2'. 
6. 此时微任务队列和执行栈为空,去宏任务中,将 setTimeout1-1 加入执行栈中执行,输出'setTimeout1-1',并添加微任务 promise1,并执行,输出'promise1'.

> 结果:
start
end
setTimeout1
setTimeout2
2 "promise2"
setTimeout1-1
1 "promise1"
4 "promise4"
3 "promise3"
5 "promise5"
6 "promise6"

2.

```js
async function f() {
  await p
  console.log('ok')
}
可以简单理解为:
function f() {
  return RESOLVE(p).then(() => {
    console.log('ok')
  })
}
```

```js
console.log('script start');

async function async1() {
    await async2();
    console.log('async1 end');
}
async function async2() {
    console.log('async2 end');
}
async1();

setTimeout(function () {
    console.log('setTimeout');
}, 0);

new Promise(resolve => {
    console.log('Promise');
    resolve();
})
    .then(function () {
        console.log('promise1');
    })
    .then(function () {
        console.log('promise2');
    });

console.log('script end');
```
> 结果: script start
async2 end
Promise
script end
async1 end
promise1
promise2
undefined
setTimeout

## NodeJS的Event Loop
---


## 相关链接
---

[一次弄懂Event Loop](https://juejin.cn/post/6844903764202094606)