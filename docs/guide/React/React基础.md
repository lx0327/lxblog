# React 介绍

**React 是什么**

一个专注于构建用户界面的 JavaScript 库，和 vue 和 angular 并称前端三大框架

**React 有什么特点**

1- 声明式 UI（JSX）

> 写 UI 就和写普通的 HTML 一样，抛弃命令式的繁琐实现

[![pSgRjHJ.png](https://s1.ax1x.com/2023/02/07/pSgRjHJ.png)](https://imgse.com/i/pSgRjHJ)

2- 组件化

组件是 react 中最重要的内容，组件可以通过搭积木的方式拼成一个完整的页面，通过组件的抽象可以增加复用能力和提高可维护性

3- 跨平台

react 既可以开发 web 应用也可以使用同样的语法开发原生应用（react-native），比如安卓和 ios 应用，甚至可以使用 react 开发 VR 应用，想象力空间十足，react 更像是一个 `元框架` 为各种领域赋能

# 环境初始化

## 1. 使用脚手架创建项目

```javascript
 npx create-react-app react-basic//创建项目
 npm start //启动项目
```

# JSX 基础

## 1. JSX 介绍

概念：JSX 是 JavaScript XML（HTML）的缩写，表示在 JS 代码中书写 HTML 结构

作用：在 React 中创建 HTML 结构（页面 UI 结构）

优势：

1. 采用类似于 HTML 的语法，降低学习成本，会 HTML 就会 JSX
2. 充分利用 JS 自身的可编程能力创建 HTML 结构

## 2. JSX 中使用 js 表达式

**语法**

```javascript
{ JS 表达式 }
```

```react
const name = 'lx'
<h1>你好，我叫{lx}</h1>
```

**可以使用的表达式**

1. 字符串、数值、布尔值、null、undefined、object（ [] / {} ）
2. 1 + 2、'abc'.split('')、['a', 'b'].join('-')
3. fn()

**特别注意**

> if 语句/ switch-case 语句/ 变量声明语句，这些叫做语句，不是表达式，不能出现在 `{}` 中！！

## 3. JSX 列表渲染

> 页面的构建离不开重复的列表结构，比如歌曲列表，商品列表等，我们知道 vue 中用的是 v-for.

实现：使用数组的`map` 方法

```react
// 来个列表
const fruits = [
  { id: 1, name: '苹果' },
  { id: 2, name: '橘子' },
  { id: 3, name: '香蕉' }
]

function App() {
  return (
    <div className="App">
      <ul>
        {
          fruits.map(item => <li key="item.id">{item.name}</li>)
        }
      </ul>
    </div>
  )
}

export default App
```

注意点：需要为遍历项添加 `key` 属性

1. key 是 React 内部用来进行性能优化时使用
2. key 在当前列表中要唯一的字符串或者数值（String/Number）
3. 如果列表中有像 id 这种的唯一值，就用 id 来作为 key 值
4. 如果列表中没有像 id 这种的唯一值，就可以使用 index（下标）来作为 key 值

## 4. JSX 条件渲染

```react
// 来个布尔值
const flag = true
function App() {
  return (
    <div className="App">
      {/* 条件渲染字符串 */}
      {flag ? 'react' : 'vue'}
      {/* 条件渲染标签/组件 */}
      {flag ? <span>this is span</span> : null}
    </div>
  )
}
export default App
```

## 5. JSX 样式处理

- 行内样式 - style

- 类名 - className - 动态类名控制

```react
import './app.css'
const showTitle = true
function App() {
  return (
    <div className="App">
      <div className={ showTitle ? 'title' : ''}>this is a div</div>
    </div>
  )
}
export default App
```

## 6. JSX 注意事项

1. JSX 必须有一个根节点，如果没有根节点，可以使用`<></>`（幽灵节点）替代
2. 所有标签必须形成闭合，成对闭合或者自闭合都可以
3. JSX 中的语法更加贴近 JS 语法，属性名采用驼峰命名法 `class -> className` `for -> htmlFor`
4. JSX 支持多行（换行），如果需要换行，需使用`()` 包裹，防止 bug 出现

# React 组件基础

## 函数组件

**概念**

使用 JS 的函数（或箭头函数）创建的组件，就叫做`函数组件`

**组件定义与渲染**

```react
// 定义函数组件
function HelloFn () {
  return <div>这是我的第一个函数组件!</div>
}

// 定义类组件
function App () {
  return (
    <div className="App">
      {/* 渲染函数组件 */}
      <HelloFn />
      <HelloFn></HelloFn>
    </div>
  )
}
export default App
```

**约定说明**

1. 组件的名称**必须首字母大写**，react 内部会根据这个来判断是组件还是普通的 HTML 标签
2. 函数组件**必须有返回值**，表示该组件的 UI 结构；如果不需要渲染任何内容，则返回 null
3. 组件就像 HTML 标签一样可以被渲染到页面中。组件表示的是一段结构内容，对于函数组件来说，渲染的内容是函数的**返回值**就是对应的内容
4. 使用函数名称作为组件标签名称，可以成对出现也可以自闭合

## 类组件

> 使用 ES6 的 class 创建的组件，叫做类（class）组件

**组件定义与渲染**

```react
// 引入React
import React from 'react'

// 定义类组件
class HelloC extends React.Component {
  render () {
    return <div>这是我的第一个类组件!</div>
  }
}

function App () {
  return (
    <div className="App">
      {/* 渲染类组件 */}
      <HelloC />
      <HelloC></HelloC>
    </div>
  )
}
export default App
```

**约定说明**

1. **类名称也必须以大写字母开头**
2. 类组件应该继承 React.Component 父类，从而使用父类中提供的方法或属性
3. 类组件必须提供 render 方法**render 方法必须有返回值，表示该组件的 UI 结构**

## 函数组件的事件绑定

### 1. 如何绑定事件

- 语法
  on + 事件名称 = { 事件处理程序 } ，比如：`<div onClick={ onClick }></div>`
- 注意点
  react 事件采用驼峰命名法，比如：onMouseEnter、onFocus
- 样例

```react
// 函数组件
function HelloFn () {
  // 定义事件回调函数
  const clickHandler = () => {
    console.log('事件被触发了')
  }
  return (
    // 绑定事件
    <button onClick={clickHandler}>click me!</button>
  )
}
```

### 2. 获取事件对象

> 获取事件对象 e 只需要在 事件的回调函数中 补充一个形参 e 即可拿到

```react
// 函数组件
function HelloFn () {
  // 定义事件回调函数
  const clickHandler = (e) => {
    console.log('事件被触发了', e)
  }
  return (
    // 绑定事件
    <button onClick={clickHandler}>click me!</button>
  )
}
```

### 3. 传递额外参数

```react
import React from "react"
// 如何获取额外的参数？
// onClick={ onDel } -> onClick={ () => onDel(id) }
// 注意: 一定不要在模板中写出函数调用的代码 onClick = { onDel(id) }  bad!!!!!!
const TestComponent = () => {
  const list = [
    {
      id: 1001,
      name: 'react'
    },
    {
      id: 1002,
      name: 'vue'
    }
  ]
  const onDel = (e, id) => {
    console.log(e, id)
  }
  return (
      <ul>
        {list.map(item =>（
           <li key={item.id}>
                {item.name}
                <button onClick={(e) => onDel(e, item.id)}>x</button>
           </li>
        ))}
      </ul>
  )
}

function App () {
  return (
    <div>
      <TestComponent />
    </div>
  )
}


export default App
```

## 类组件的事件绑定

> 类组件中的事件绑定，整体的方式和函数组件差别不大
>
> 唯一需要注意的 因为处于 class 类语境下 所以定义事件回调函数以及定它写法上有不同
>
> 1. 定义的时候: class Fields 语法
>
> 2. 使用的时候: 需要借助 this 关键词获取

```react
import React from "react"
class CComponent extends React.Component {
  // class Fields
  clickHandler = (e, num) => {
    // 这里的this指向的是正确的当前的组件实例对象
    // 可以非常方便的通过this关键词拿到组件实例身上的其他属性或者方法
    console.log(this)
  }

  clickHandler1 () {
    // 这里的this 不指向当前的组件实例对象而指向undefined 存在this丢失问题
    console.log(this)
  }

  render () {
    return (
      <div>
        <button onClick={(e) => this.clickHandler(e, '123')}>click me</button>
        <button onClick={this.clickHandler1}>click me</button>
      </div>
    )
  }
}

function App () {
  return (
    <div>
      <CComponent />
    </div>
  )
}

export default App

```

## 组件状态

> 在 React hook 出来之前，函数式组件是没有自己的状态的

[![pSgWZEd.png](https://s1.ax1x.com/2023/02/07/pSgWZEd.png)](https://imgse.com/i/pSgWZEd)

### 1. 初始化状态

- 通过 class 的实例属性 state 来初始化
- state 的值是一个对象结构，表示一个组件可以有多个数据状态

```react
class Counter extends React.Component {
  // 初始化状态
  state = {
    count: 0
  }
  render() {
    return <button>计数器</button>
  }
}
```

### 2. 读取状态

- 通过 this.state 来获取状态

```react
class Counter extends React.Component {
  // 初始化状态
  state = {
    count: 0
  }
  render() {
    // 读取状态
    return <button>计数器{this.state.count}</button>
  }
}
```

### 3. 修改状态

- 语法
  `this.setState({ 要修改的部分数据 })`
- setState 方法作用

1. 1. 修改 state 中的数据状态
   2. 更新 UI

- 思想
  数据驱动视图，也就是只要修改数据状态，那么页面就会自动刷新，无需手动操作 dom
- 注意事项
  **不要直接修改 state 中的值，必须通过 setState 方法进行修改**

```react
class Counter extends React.Component {
  // 定义数据
  state = {
    count: 0
  }
  // 定义修改数据的方法
  setCount = () => {
    this.setState({
      count: this.state.count + 1
    })
  }
  // 使用数据 并绑定事件
  render () {
    return <button onClick={this.setCount}>{this.state.count}</button>
  }
}
```

## React 的状态不可变

**概念**：不要直接修改状态的值，而是基于当前状态创建新的状态值

**1. 错误的直接修改**

```react
state = {
  count : 0,
  list: [1,2,3],
  person: {
     name:'jack',
     age:18
  }
}
// 直接修改简单类型Number
this.state.count++
++this.state.count
this.state.count += 1
this.state.count = 1

// 直接修改数组
this.state.list.push(123)
this.state.list.spice(1,1)

// 直接修改对象
this.state.person.name = 'rose'
```

**2. 正确的基于当前状态创建新值**

```react
this.setState({
    count: this.state.count + 1
    list: [...this.state.list, 4],
    person: {
       ...this.state.person,
       // 覆盖原来的属性 就可以达到修改对象中属性的目的
       name: 'rose'
    }
})
```

## 表单处理

使用 React 处理表单元素，一般有俩种方式：

1. 受控组件 （推荐使用）
2. 非受控组件 （了解）

### 1. 受控表单组件

> 什么是受控组件？ `input框自己的状态被React组件状态控制`
>
> React 组件的状态的地方是在 state 中，input 表单元素也有自己的状态是在 value 中，React 将 state 与表单元素的值（value）绑定到一起，由 state 的值来控制表单元素的值，从而保证单一数据源特性

**实现步骤**

以获取文本框的值为例，受控组件的使用步骤如下：

1. 在组件的 state 中声明一个组件的状态数据
2. 将状态数据设置为 input 标签元素的 value 属性的值
3. 为 input 添加 change 事件，在事件处理程序中，通过事件对象 e 获取到当前文本框的值（`即用户当前输入的值`）
4. 调用 setState 方法，将文本框的值作为 state 状态的最新值

```react
import React from 'react'

class InputComponent extends React.Component {
  // 声明组件状态
  state = {
    message: 'this is message',
  }
  // 声明事件回调函数
  changeHandler = (e) => {
    this.setState({ message: e.target.value })
  }
  render () {
    return (
      <div>
        {/* 绑定value 绑定事件*/}
        <input value={this.state.message} onChange={this.changeHandler} />
      </div>
    )
  }
}


function App () {
  return (
    <div className="App">
      <InputComponent />
    </div>
  )
}
export default App
```

### 2. 非受控表单组件

> 什么是非受控组件？
>
> 非受控组件就是通过手动操作 dom 的方式获取文本框的值，文本框的状态不受 react 组件的 state 中的状态控制，直接通过原生 dom 获取输入框的值

**实现步骤**

1. 导入`createRef` 函数
2. 调用 createRef 函数，创建一个 ref 对象，存储到名为`msgRef`的实例属性中
3. 为 input 添加 ref 属性，值为`msgRef`
4. 在按钮的事件处理程序中，通过`msgRef.current`即可拿到 input 对应的 dom 元素，而其中`msgRef.current.value`拿到的就是文本框的值

```react
import React, { createRef } from 'react'

class InputComponent extends React.Component {
  // 使用createRef产生一个存放dom的对象容器
  msgRef = createRef()

  changeHandler = () => {
    console.log(this.msgRef.current.value)
  }

  render() {
    return (
      <div>
        {/* ref绑定 获取真实dom */}
        <input ref={this.msgRef} />
        <button onClick={this.changeHandler}>click</button>
      </div>
    )
  }
}

function App () {
  return (
    <div className="App">
      <InputComponent />
    </div>
  )
}
export default App
```

# React 组件通信

## 父传子实现

**实现步骤**

1.  父组件提供要传递的数据 - `state`
2.  给子组件标签`添加属性`值为 state 中的数据
3.  子组件中通过 `props` 接收父组件中传过来的数据

4.  1.  类组件使用 this.props 获取 props 对象
    2.  函数式组件直接通过参数获取 props 对象

**代码实现**

```react
import React from 'react'

// 函数式子组件
function FSon(props) {
  console.log(props)
  return (
    <div>
      子组件1
      {props.msg}
    </div>
  )
}

// 类子组件
class CSon extends React.Component {
  render() {
    return (
      <div>
        子组件2
        {this.props.msg}
      </div>
    )
  }
}
// 父组件
class App extends React.Component {
  state = {
    message: 'this is message'
  }
  render() {
    return (
      <div>
        <div>父组件</div>
        <FSon msg={this.state.message} />
        <CSon msg={this.state.message} />
      </div>
    )
  }
}

export default App
```

## props 说明

**1. props 是只读对象（readonly）**

根据单项数据流的要求，子组件只能读取 props 中的数据，不能进行修改

**2. props 可以传递任意数据**

数字、字符串、布尔值、数组、对象、`函数、JSX`

## 子传父实现

> 父组件给子组件传递回调函数，子组件调用

**实现步骤**

1. 父组件提供一个回调函数 - 用于接收数据
2. 将函数作为属性的值，传给子组件
3. 子组件通过 props 调用 回调函数
4. 将子组件中的数据作为参数传递给回调函数

## 跨组件通信 Context

**实现步骤**

1- 创建 Context 对象 导出 Provider 和 Consumer 对象

```react
const { Provider, Consumer } = createContext()
```

2- 使用 Provider 包裹上层组件提供数据

```react
<Provider value={this.state.message}>
    {/* 根组件 */}
</Provider>
```

3- 需要用到数据的组件使用 Consumer 包裹获取数据

```react
<Consumer >
    {value => /* 基于 context 值进行渲染*/}
</Consumer>
```

**代码实现**

```react
import React, { createContext }  from 'react'

// 1. 创建Context对象
const { Provider, Consumer } = createContext()


// 3. 消费数据
function ComC() {
  return (
    <Consumer >
      {value => <div>{value}</div>}
    </Consumer>
  )
}

function ComA() {
  return (
    <ComC/>
  )
}

// 2. 提供数据
class App extends React.Component {
  state = {
    message: 'this is message'
  }
  render() {
    return (
      <Provider value={this.state.message}>
        <div className="app">
          <ComA />
        </div>
      </Provider>
    )
  }
}

export default App
```

# React 生命周期

> 组件的生命周期是指组件从被创建到挂载到页面中运行起来，再到组件不用时卸载的过程，注意，只有类组件才有生命周期（类组件 实例化 函数组件 不需要实例化）

[![pSgWeUA.png](https://s1.ax1x.com/2023/02/07/pSgWeUA.png)](https://imgse.com/i/pSgWeUA)

## 生命周期 - 挂载阶段

[![pSgWYUs.png](https://s1.ax1x.com/2023/02/07/pSgWYUs.png)](https://imgse.com/i/pSgWYUs)

| 钩子 函数         | 触发时机                                              | 作用                                                          |
| ----------------- | ----------------------------------------------------- | ------------------------------------------------------------- |
| constructor       | 创建组件时，最先执行，初始化的时候只执行一次          | 1. 初始化 state 2. 创建 Ref 3. 使用 bind 解决 this 指向问题等 |
| render            | 每次组件渲染都会触发                                  | 渲染 UI（**注意： 不能在里面调用 setState()** ）              |
| componentDidMount | 组件挂载（完成 DOM 渲染）后执行，初始化的时候执行一次 | 1. 发送网络请求 2.DOM 操作                                    |

## 生命周期 - 更新阶段

| 钩子函数           | 触发时机                   | 作用                                                             |
| ------------------ | -------------------------- | ---------------------------------------------------------------- |
| render             | 每次组件渲染都会触发       | 渲染 UI（与 挂载阶段 是同一个 render）                           |
| componentDidUpdate | 组件更新后（DOM 渲染完毕） | DOM 操作，可以获取到更新后的 DOM 内容，**不要直接调用 setState** |

## 生命周期 - 卸载阶段

| 钩子函数             | 触发时机                 | 作用                               |
| -------------------- | ------------------------ | ---------------------------------- |
| componentWillUnmount | 组件卸载（从页面中消失） | 执行清理工作（比如：清理定时器等） |

# Hooks 基础

### 1. 什么是 hooks

> Hooks 的本质：**一套能够使函数组件更强大，更灵活的“钩子”**

React 体系里组件分为 类组件 和 函数组件

经过多年的实战，函数组件是一个更加匹配 React 的设计理念 `UI = f(data)`，也更有利于逻辑拆分与重用的组件表达形式，而先前的函数组件是不可以有自己的状态的，为了能让函数组件可以拥有自己的状态，所以从 react v16.8 开始，Hooks 应运而生

**注意点：**

1. 有了 hooks 之后，为了兼容老版本，class 类组件并没有被移除，俩者都可以使用
2. 有了 hooks 之后，不能在把函数成为无状态组件了，因为 hooks 为函数组件提供了状态
3. hooks 只能在函数组件中使用

### 2. Hooks 解决了什么问题

Hooks 的出现解决了俩个问题 1. 组件的状态逻辑复用 2.class 组件自身的问题

1.  组件的逻辑复用
    在 hooks 出现之前，react 先后尝试了 mixins 混入，HOC 高阶组件，render-props 等模式
    但是都有各自的问题，比如 mixin 的数据来源不清晰，高阶组件的嵌套问题等等
2.  class 组件自身的问题
    class 组件大而全，提供了很多东西，有不可忽视的学习成本，比如各种生命周期，this 指向问题等等，而我们更多时候需要的是一个轻快灵活的

## useState

### 1. 基础使用

**作用**

> useState 为函数组件提供状态（state）

**使用步骤**

1. 导入 `useState` 函数
2. 调用 `useState` 函数，并传入状态的初始值
3. 从`useState`函数的返回值中，拿到状态和修改状态的方法
4. 在 JSX 中展示状态
5. 调用修改状态的方法更新状态

**代码实现**

```react
import { useState } from 'react'

function App() {
  // 参数：状态初始值比如,传入 0 表示该状态的初始值为 0
  // 返回值：数组,包含两个值：1 状态值（state） 2 修改该状态的函数（setState）
  const [count, setCount] = useState(0)
  return (
    <button onClick={() => { setCount(count + 1) }}>{count}</button>
  )
}
export default App
```

### 2. 状态的读取和修改

**读取状态**

> 该方式提供的状态，是函数内部的局部变量，可以在函数内的任意位置使用

**修改状态**

1. setCount 是一个函数，参数表示`最新的状态值`
2. 调用该函数后，将使用新值替换旧值
3. 修改状态后，由于状态发生变化，会引起视图变化

**注意事项**

1. 修改状态的时候，一定要使用新的状态替换旧的状态，不能直接修改旧的状态，尤其是引用类型

### 3. 组件的更新过程

函数组件使用 **useState** hook 后的执行过程，以及状态值的变化

- 组件第一次渲染

1. 1. 从头开始执行该组件中的代码逻辑
   2. 调用 `useState(0)` 将传入的参数作为状态初始值，即：0
   3. 渲染组件，此时，获取到的状态 count 值为： 0

- 组件第二次渲染

1. 1. 点击按钮，调用 `setCount(count + 1)` 修改状态，因为状态发生改变，所以，该组件会重新渲染
   2. 组件重新渲染时，会再次执行该组件中的代码逻辑
   3. 再次调用 `useState(0)`，此时 **React 内部会拿到最新的状态值而非初始值**，比如，该案例中最新的状态值为 1
   4. 再次渲染组件，此时，获取到的状态 count 值为：1

注意：**useState 的初始值(参数)只会在组件第一次渲染时生效**。也就是说，以后的每次渲染，useState 获取到都是最新的状态值，React 组件会记住每次最新的状态值

### 4. 使用规则

1.  `useState` 函数可以执行多次，每次执行互相独立，每调用一次为函数组件提供一个状态

1.  `useState` 注意事项

1.  1.  只能出现在函数组件或者其他 hook 函数中
    2.  不能嵌套在 if/for/其它函数中（react 按照 hooks 的调用顺序识别每一个 hook）

```react
let num = 1
function List(){
  num++
  if(num / 2 === 0){
     const [name, setName] = useState('cp')
  }
  const [list,setList] = useState([])
}
// 俩个hook的顺序不是固定的，这是不可以的！！！
```

## useEffect

### 1. 理解函数副作用

**什么是副作用**

> 副作用是相对于主作用来说的，一个函数除了主作用，其他的作用就是副作用。对于 React 组件来说，**主作用就是根据数据（state/props）渲染 UI**，除此之外都是副作用（比如，手动修改 DOM）

**常见的副作用**

1. 数据请求 ajax 发送
2. 手动修改 dom
3. localstorage 操作

### 2. 基础使用

**使用步骤**

1. 导入 `useEffect` 函数
2. 调用 `useEffect` 函数，并传入回调函数
3. 在回调函数中编写副作用处理（dom 操作）
4. 修改数据状态
5. 检测副作用是否生效

**代码实现**

```react
import { useEffect, useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  useEffect(()=>{
    // dom操作
    document.title = `当前已点击了${count}次`
  })
  return (
    <button onClick={() => { setCount(count + 1) }}>{count}</button>
  )
}

export default App
```

### 3. 依赖项控制执行时机

**1. 不添加依赖项**

> 组件首次渲染执行一次，以及不管是哪个状态更改引起组件更新时都会重新执行
>
> 1. 组件初始渲染
> 2. 组件更新 （不管是哪个状态引起的更新）

**2. 添加空数组**

> 组件只在首次渲染时执行一次

```react
useEffect(()=>{
	 console.log('副作用执行了')
},[])
```

**3. 添加特定依赖项**

> 副作用函数在首次渲染时执行，在依赖项发生变化时重新执行

```react
function App() {
    const [count, setCount] = useState(0)
    const [name, setName] = useState('zs')

    useEffect(() => {
        console.log('副作用执行了')
    }, [count])

    return (
        <>
         <button onClick={() => { setCount(count + 1) }}>{count}</button>
         <button onClick={() => { setName('cp') }}>{name}</button>
        </>
    )
}
```

**注意事项**

> useEffect 回调函数中用到的数据（比如，count）就是依赖数据，就应该出现在依赖项数组中，如果不添加依赖项就会有 bug 出现

### 4. 清理副作用

> 如果想要清理副作用 可以在副作用函数中的末尾 return 一个新的函数，在新的函数中编写清理副作用的逻辑
>
> 注意执行时机为：
>
> 1. 组件卸载时自动执行
> 2. 组件更新时，下一个 useEffect 副作用函数执行之前自动执行

```react
import { useEffect, useState } from "react"
const App = () => {
  const [count, setCount] = useState(0)
  useEffect(() => {
    const timerId = setInterval(() => {
      setCount(count + 1)
    }, 1000)
    return () => {
      // 用来清理副作用的事情
      clearInterval(timerId)
    }
  }, [count])
  return (
    <div>
      {count}
    </div>
  )
}

export default App
```

# Hooks 进阶

## useState - 回调函数的参数

**使用场景**

参数只会在组件的初始渲染中起作用，后续渲染时会被忽略。如果初始 state 需要通过计算才能获得，则可以传入一个函数，在函数中计算并返回初始的 state，此函数只在初始渲染时被调用

**语法**

```react
const [name, setName] = useState(()=>{
  // 编写计算逻辑    return '计算之后的初始值'
})
```

**语法规则**

1. 回调函数 return 出去的值将作为 `name` 的初始值
2. 回调函数中的逻辑只会在组件初始化的时候执行一次

```react
import { useState } from 'react'

function Counter(props) {
  const [count, setCount] = useState(() => {
    return props.count
  })
  return (
    <div>
      <button onClick={() => setCount(count + 1)}>{count}</button>
    </div>
  )
}

function App() {
  return (
    <>
      <Counter count={10} />
      <Counter count={20} />
    </>
  )
}

export default App
```

## useEffect - 发送网络请求

**使用场景**

如何在 useEffect 中发送网络请求，并且封装同步 async await 操作

**语法要求**

不可以直接在 useEffect 的回调函数外层直接包裹 await ，因为**异步会导致清理函数无法立即返回**

```react
useEffect(async ()=>{
    const res = await axios.get('http://geek.itheima.net/v1_0/channels')
    console.log(res)
},[])
```

**正确写法**

在内部单独定义一个函数，然后把这个函数包装成同步

```react
useEffect(()=>{
    async function fetchData(){
       const res = await axios.get('http://geek.itheima.net/v1_0/channels')                            console.log(res)
    }
},[])
```

## useRef

**使用场景**

在函数组件中获取真实的 dom 元素对象或者是组件对象

**使用步骤**

1. 导入 `useRef` 函数
2. 执行 `useRef` 函数并传入 null，返回值为一个对象 内部有一个 current 属性存放拿到的 dom 对象（组件实例）
3. 通过 ref 绑定 要获取的元素或者组件

**获取 dom**

```react
import { useEffect, useRef } from 'react'
function App() {
    const h1Ref = useRef(null)
    useEffect(() => {
        console.log(h1Ref)
    },[])
    return (
        <div>
            <h1 ref={ h1Ref }>this is h1</h1>
        </div>
    )
}
export default App
```

**获取组件实例**

> 函数组件由于没有实例，不能使用 ref 获取，如果想获取组件实例，必须是类组件

## useContext

**实现步骤**

1. 使用`createContext` 创建 Context 对象
2. 在顶层组件通过`Provider` 提供数据
3. 在底层组件通过`useContext`函数获取数据

```react
import { createContext, useContext } from 'react'
// 创建Context对象
const Context = createContext()

function Foo() {
    return <div>Foo <Bar/></div>
}

function Bar() {
    // 底层组件通过useContext函数获取数据
    const name = useContext(Context)
    return <div>Bar {name}</div>
}

function App() {
    return (
        // 顶层组件通过Provider 提供数据
        <Context.Provider value={'this is name'}>
            <div><Foo/></div>
        </Context.Provider>
    )
}

export default App
```
