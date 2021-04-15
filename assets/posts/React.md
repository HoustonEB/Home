---
authorName: Yu
title: React
date: 2020-6-30 11:46:11
categories: React
tags: React
---
## Refs转发
---
Ref 转发是一项将 ref 自动地通过组件传递到其一子组件的技巧。对于大多数应用中的组件来说，这通常不是必需的。但其对某些组件，尤其是可重用的组件库是很有用的。最常见的案例如下所述。
1. 在函数式组件中转发

```js
const Button = React.forwardRef(function (props, ref) {
    return h.button('', {
        ref,
        onClick: props.onClick
    }, 
    props.children
    );
})
export default class View extends Component {
    btnRef;
    constructor(props) {
        super(props);
        this.btnRef = React.createRef();
    }

    render() {

        return (
            h.div('', {},
                h(Button, {ref: this.btnRef}, 'dom转发'),
                h(Button, {}, '未dom转发'),
                h(Button, {
                    onClick: () => {console.log(this.btnRef, '子组件btnDom')}
                }, '获取子组件dom')
            )
        )
    }
}
// btnRef输出: {current: button}
```
React 组件隐藏其实现细节，包括其渲染结果。其他使用`Button`的组件通常不需要获取内部的 DOM 元素 button 的 ref。这很好，因为这防止组件过度依赖其他组件的 DOM 结构。<br/>
虽然这种封装对类似`FeedStory`或`Comment`这样的应用级组件是理想的，但其对`Button`或`Input`这样的高可复用“叶”组件来说可能是不方便的。这些组件倾向于在整个应用中以一种类似常规 DOM button 和 input 的方式被使用，并且访问其 DOM 节点对管理焦点，选中或动画来说是不可避免的。
2. 在高阶组件中转发

```js
const Button = React.forwardRef(function (props, ref) {
    return h.button('', {
        ref,
        ...props
    },
        props.children
    );
})
const wrapComp = function (component) {
    class wrapCompView extends React.Component {
        constructor(props) {
            super(props);
        };

        render() {
            let { forwardedRef, children, ...rest } = this.props;
            return h(component, {
                ref: forwardedRef,
                ...rest
            }, children);
        }
    }
    return React.forwardRef((props, ref) => {
        return h(wrapCompView, { forwardedRef: ref, ...props }, props.children);
    })
}
export default class View extends Component {
    btnRef;
    wrapBtnComp;

    constructor(props) {
        super(props);
        this.btnRef = React.createRef();
        this.wrapBtnComp = wrapComp(Button);
    }

    render() {

        return (
            h.div('', {},
                h(this.wrapBtnComp, { ref: this.btnRef }, 'dom转发'),
                h(Button, {
                    onClick: () => { console.log(this.btnRef, '子组件btnDom') }
                }, '获取子组件dom')
            )
        )
    }
}
```
以下是对上述示例发生情况的逐步解释：
1. 我们通过调用 React.createRef 创建了一个 React ref 并将其赋值给 ref 变量。
2. 我们通过指定 ref 为 JSX 属性，将其向下传递给 `<FancyButton ref={ref}>`。
3. React 传递 ref 给 forwardRef 内函数 (props, ref) => ...，作为其第二个参数。
4. 我们向下转发该 ref 参数到`\<button ref={ref}\>`，将其指定为 JSX 属性。
5. 当 ref 挂载完成，ref.current 将指向`\<button\>`DOM 节点。

{% note warning %}
1.第二个参数 ref 只在使用 React.forwardRef 定义组件时存在。常规函数和 class 组件不接收 ref 参数，且 props 中也不存在 ref。
2.Ref 转发不仅限于 DOM 组件，你也可以转发 refs 到 class 组件实例中。
3.上面的示例有一点需要注意：refs 将不会透传下去。这是因为 ref 不是 prop 属性。就像 key 一样，其被 React 进行了特殊处理。如果你对 HOC 添加 ref，该 ref 将引用最外层的容器组件，而不是被包裹的组件
{% endnote %}

## Fragments
---
React 中的一个常见模式是一个组件返回多个元素。Fragments 允许你将子列表分组，而无需向 DOM 添加额外节点。
```js
render() {
  return (
    <React.Fragment>
      <ChildA />
      <ChildB />
      <ChildC />
    </React.Fragment>
  );
}
```

**使用场景**
表格组件`table`中不能使用父div
```js
class Table extends React.Component {
  render() {
    return (
      <table>
        <tr>
          <Columns />
        </tr>
      </table>
    );
  }
}
```
tr中只能是td, 添加div会无效.
```js
class Columns extends React.Component {
  render() {
    return (
      <div>
        <td>Hello</td>
        <td>World</td>
      </div>
    );
  }
}
```
可以使用`React.Fragment`,短语法`<> </>`
```js
class Columns extends React.Component {
  render() {
    return (
      <React.Fragment>
        <td>Hello</td>
        <td>World</td>
      </React.Fragment>
    );
  }
}
// 同下
/*
*  <>
*     <td>Hello</td>
*     <td>World</td>
*  </>
*/
```

## JSX
---
实际上，JSX 仅仅只是`React.createElement(component, props, ...children)`函数的语法糖。如下 JSX 代码：
```js
<MyButton color="blue" shadowSize={2}>
  Click Me
</MyButton>
```
会编译为
```js
React.createElement(
  MyButton,
  {color: 'blue', shadowSize: 2},
  'Click Me'
)
```

### React 必须在作用域内
由于 JSX 会编译为`React.createElement`调用形式，所以 React 库也必须包含在 JSX 代码作用域内。<br/>
例如，在如下代码中，虽然`React`和`CustomButton`并没有被直接使用，但还是需要导入：
```js
import React from 'react';
import CustomButton from './CustomButton';

function WarningButton() {
  // return React.createElement(CustomButton, {color: 'red'}, null);
  return <CustomButton color="red" />;
}
```
如果你不使用 JavaScript 打包工具而是直接通过`<script>`标签加载`React`，则必须将`React`挂载到全局变量中。

### 在 JSX 类型中使用点语法
在`JSX`中，你也可以使用点语法来引用一个`React`组件。当你在一个模块中导出许多 React 组件时，这会非常方便。例如，如果`MyComponents`.`DatePicker`是一个组件，你可以在 JSX 中直接使用
```js
import React from 'react';

const MyComponents = {
  DatePicker: function DatePicker(props) {
    return <div>Imagine a {props.color} datepicker here.</div>;
  }
}

function BlueDatePicker() {
  return <MyComponents.DatePicker color="blue" />;
}
```

## 性能优化
---
`shouldComponentUpdate`该方法会在重新渲染前被触发。其默认实现总是返回 true，让 React 执行更新：
```js
shouldComponentUpdate(nextProps, nextState) {
  return true;
}
```
如果你知道在什么情况下你的组件不需要更新，你可以在`shouldComponentUpdate`中返回`false`来跳过整个渲染过程。其包括该组件的`render`调用以及之后的操作。<br/>
在大部分情况下，你可以继承`React.PureComponent`以代替手写`shouldComponentUpdate()`。它用当前与之前`props`和`state`的浅比较覆写了 `shouldComponentUpdate()`的实现。
### 示例
如果你的组件只有当`props.color`或者`state.count`的值改变才需要更新时，你可以使用`shouldComponentUpdate`来进行检查：
```js
class CounterButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {count: 1};
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (this.props.color !== nextProps.color) {
      return true;
    }
    if (this.state.count !== nextState.count) {
      return true;
    }
    return false;
  }

  render() {
    return (
      <button
        color={this.props.color}
        onClick={() => this.setState(state => ({count: state.count + 1}))}>
        Count: {this.state.count}
      </button>
    );
  }
}
```
在这段代码中`shouldComponentUpdate`仅检查了`props.color`或`state.count`是否改变。如果这些值没有改变，那么这个组件不会更新。如果你的组件更复杂一些，你可以使用类似“浅比较”的模式来检查 props 和 state 中所有的字段，以此来决定是否组件需要更新。React 已经提供了一位好帮手来帮你实现这种常见的模式 - 你只要继承`React.PureComponent`就行了。所以这段代码可以改成以下这种更简洁的形式：
```js
class CounterButton extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {count: 1};
  }

  render() {
    return (
      <button
        color={this.props.color}
        onClick={() => this.setState(state => ({count: state.count + 1}))}>
        Count: {this.state.count}
      </button>
    );
  }
}
```
## Portals
---
### 用法
Portal 提供了一种将子节点渲染到存在于父组件以外的 DOM 节点的优秀的方案。<br/>
通常来讲，当你从组件的 render 方法返回一个元素时，该元素将被挂载到 DOM 节点中离其最近的父节点：
```js
render() {
  // React 挂载了一个新的 div，并且把子元素渲染其中
  return (
    <div>
      {this.props.children}
    </div>
  );
}
```
然而，有时候将子元素插入到 DOM 节点中的不同位置也是有好处的：
```js
render() {
  // React 并*没有*创建一个新的 div。它只是把子元素渲染到 `domNode` 中。
  // `domNode` 是一个可以在任何位置的有效 DOM 节点。
  return ReactDOM.createPortal(
    this.props.children,
    domNode
  );
}
```
一个 portal 的典型用例是当父组件有`overflow: hidden`或`z-index`样式时，但你需要子组件能够在视觉上“跳出”其容器。例如，对话框、悬浮卡以及提示框：
### 通过 Portal 进行事件冒泡


## Hook
---

### useCallback

```js
const memoizedCallback = useCallback(
  () => {
    doSomething(a, b);
  },
  [a, b],
);
```
返回一个`memoized`回调函数。
### useMemo

```js
const memoizedValue = useMemo(() => computeExpensiveValue(a, b), [a, b]);
```
返回一个`memoized`值。
### useMemo和useCallback的区别

> `useMemo`和`useCallback`接收的参数都是一样,第一个参数为回调 第二个参数为要依赖的数据
> 共同作用：
> 1.仅仅 依赖数据 发生变化, 才会重新计算结果，也就是起到缓存的作用。
> 两者区别：
> 1.`useMemo`计算结果是return回来的**值**, 主要用于缓存计算结果的值 ，应用场景如：需要计算的状态
> 2.`useCallback`计算结果是**函数**, 主要用于缓存函数，应用场景如: 需要缓存的函数，因为函数式组件每次任何一个`state`的变化整个组件都会被重新> 刷新，一些函数是没有必要被重新刷新的，此时就应该缓存起来，提高性能，和减少资源浪费。





