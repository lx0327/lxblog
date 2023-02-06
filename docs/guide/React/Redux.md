---
title: redux-toolkit使用步骤
date: 2022-11-30 09:25:00
author: lx
summary: react项目中使用redux-toolkit
categories: React
tags:
  - React-redux
  - Redux-toolkit
---



#####    1.安装redux配套工具

```npm
# 安装redux配套工具
npm i @reduxjs/toolkit react-redux
```

#####     2.创建store

> 创建store的的核心步骤分为两步
>
> 1. 使用toolkit的**createSlice**方法创建一个独立的子模块
> 2. 使用**configureStore**语法组合子模块
> 3. 文件夹结构  store[index.js[module[countStore.js]]]

​         1.创建子模块

```react
import { createSlice } from '@reduxjs/toolkit'

const counter = createSlice({
  // 模块名称独一无二
  name: 'counter',
  // 初始数据
  initialState: {
    count: 1
  },
  // 修改数据的同步方法
  reducers: {
    add (state) {
      state.count++
    }
  }
})

const { add } = counter.actions
const reducer = counter.reducer

// 导出修改数据的函数
export { add }
// 导出reducer
export default reducer
```

​        2.组合子模块

```react
import { configureStore } from '@reduxjs/toolkit'

import counterStore from './counterStore'

export default configureStore({
  reducer: {
    // 注册子模块
    counterStore
  }
})
```

##### 3.为React提供redux

> 要想让所有的组件都有资格访问store中的数据，需要我们在入口文件中添加Provide来包裹根组件
>
> 

```react
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
// 导入store
import store from './store'
// 导入store提供组件Provider
import { Provider } from 'react-redux'

ReactDOM.createRoot(document.getElementById('root')).render(
  // 提供store数据
  <Provider store={store}>
    <App />
  </Provider>
)
```

##### 4.组件中使用store

> 组件中使用store中的数据需要借助一个hool方法，叫做useSelector
>
> useSelector(store=>store.模块名)方法的返回值是一个对象，里面包含了store中的所有数据

```react
import { useSelector } from 'react-redux'

function App () {
  // 使用数据
  const { count } = useSelector(store => store.counterStore)//直接解构出store里的count
  
  return (
    <div className="App">
      {count}
      <button onClick={clickHandler}>+</button>
    </div>
  )
}

export default App
```

##### 5.组件中修改store中的数据

> 通过dispatch函数传入导出的action方法

```react
import { useSelector, useDispatch } from 'react-redux'
import { add } from './store/counterStore'

function App () {
  // 使用数据
  const { count } = useSelector(state => state.counterStore)
  // 修改数据
  const dispatch = useDispatch()
  const clickHandler = () => {
    dispatch(add())//传入的是导出的action方法
  }
  return (
    <div className="App">
      {count}
      <button onClick={clickHandler}>+</button>
    </div>
  )
}

export default App
```

6.组件中修改数据并传参

> 在修改数据的方法中添加第二个参数action，对象中有一个固定的属性payload为传递过来的参数

```react
import { createSlice } from "@reduxjs/toolkit"
const counterStore = createSlice({
  name: 'counter', // 独一无二不重复的名字语义化
  // 定义初始化的数据
  initialState: {
    taskList: ['react']
  },
  reducers: {
    // action为一个对象 对象中有一个固定的属性叫做payload 为传递过来的参数
    addTaskList (state, action) {
      state.taskList.push(action.payload)
    }
  }
})

// 生成修改数据的方法导出
const { addTaskList } = counterStore.actions
export { addTaskList }
// 生成reducer 导出 供index.js做组合模块
const reducer = counterStore.reducer

export default reducer
```

> dispatch调用方法的时候传入实参就可以

```react 
<button onClick={() => dispatch(addTaskList('vue'))}>addList</button>
```

##### 7.Redux异步处理

```react
import { createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

const channelStore = createSlice({
  name: 'task',
  initialState: {
    channels: []
  },
  reducers: {
    setChannels (state, action) {
      state.channels = action.payload
    }
  }
})


// 创建异步
const { setChannels } = channelStore.actions
const url = 'http://geek.itheima.net/v1_0/channels'
// 封装一个函数 在函数中return一个新函数 在新函数中封装异步
// 得到数据之后通过dispatch函数 触发修改
const fetchChannelList = () => {
  return async (dispatch) => {
    const res = await axios.get(url)
    dispatch(setChannels(res.data.data.channels))
  }
}

export { fetchChannelList }

const reducer = channelStore.reducer
export default reducer
```

```react
import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchChannelList } from './store/channelStore'

function App () {
  // 使用数据
  const { channels } = useSelector(state => state.channelStore)
  useEffect(() => {
    const action = fetchTaskList()
    dispatch(action)
  }, [dispatch])

  return (
    <div className="App">
      <ul>
        {channels.map(task => <li key={task.id}>{task.name}</li>)}
      </ul>
    </div>
  )
}

export default App
```

