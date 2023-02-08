#### 1：什么是vuex

https://www.jianshu.com/p/2e5973fe1223

Vuex 是一个专为 Vue.js 应用程序开发的**状态管理模式**。它采用集中式存储管理应用的所有组件的状态，并以相应的规则保证状态以一种可预测的方式发生变化。Vuex 也集成到 Vue 的官方调试工具 [devtools extension (opens new window)](https://github.com/vuejs/vue-devtools)，提供了诸如零配置的 time-travel 调试、状态快照导入导出等高级调试功能。



#### 2:vuex工作流程

![img](https://upload-images.jianshu.io/upload_images/16550832-20d0ad3c60a99111.png?imageMogr2/auto-orient/strip|imageView2/2/format/webp)

首先，`Vue`组件如果调用某个`VueX`的方法过程中需要向后端请求时或者说出现异步操作时，需要`dispatch` VueX中`actions`的方法，以保证数据的同步。可以说，`action`的存在就是为了让`mutations`中的方法能在异步操作中起作用。

如果没有异步操作，那么我们就可以直接在组件内提交状态中的`Mutations`中自己编写的方法来达成对`state`成员的操作。不建议在组件中直接对`state`中的成员进行操作，这是因为直接修改(例如：`this.$store.state.name = 'hello'`)的话不能被`VueDevtools`所监控到。

最后被修改后的state成员会被渲染到组件的原位置当中去。



#### 3：核心概念

#####       1：state（基本数据）

​            **单一状态树**

Vuex使用单一状态树，即用一个对象就包含了全部的状态数据。`state`作为构造器选项，定义了所有我们需要的基本状态参数

​             **组件中获取数据**

​          $store.state.名称

​       **增删state中的成员**

为了配合Vue的响应式数据，我们在Mutations的方法中，应当使用Vue提供的方法来进行操作。如果使用`delete`或者`xx.xx = xx`的形式去删或增，则Vue不能对数据进行实时响应。

- Vue.set 为某个对象设置成员的值，若不存在则新增

  例如对state对象中添加一个age成员

  ```js
  Vue.set(state,"age",15)
  ```

- Vue.delete 删除成员

  将刚刚添加的age成员删除

  ```js
  Vue.delete(state,'age')
  ```

#####      2：getters（从基本数据派生的数据）

可以对state中的成员加工后传递给外界

Getters中的方法有两个默认参数

- state 当前VueX对象中的状态对象
- getters 当前getters对象，用于将getters下的其他getter拿来用

相当于computed计算属性，用于对state中的数据进行处理

#####           组件中 **使用**方式

​       $store.getters.方法名;

```
getters:{
    nameInfo(state){
        return "姓名:"+state.name
    },
    fullInfo(state,getters){
        return getters.nameInfo+'年龄:'+state.age
    }  
}
```



#####    3：mutations （ 提交更改数据的方法）

  `mutations`是操作`state`数据的方法的集合，比如对该数据的修改、增加、删除等等。

 相当于methods，

```
 mutations: {
        addCount(state, payload) {
            state.count++;
            console.log(payload);
        },
        reduceCount(state) {
            state.count--;
        }
    },
```



#####            组件中 使用方式

   this. $store.**commit**("方法名",携带的参数);当需要多个参数时用对象保存



#####  4：actions （包裹mutations，使之可以异步）。

由于直接在`mutation`方法中进行异步操作，将会引起数据失效。所以提供了Actions来专门进行异步操作，最终提交`mutation`方法。

`Actions`中的方法有两个默认参数

- `context` 上下文(相当于箭头函数中的this)对象
- `payload` 挂载参数

由于`setTimeout`是异步操作，所以需要使用`actions`

#####   组件中使用方式

$store.dispatch("action")

```
  actions: {
        increment(context) {
            setInterval(function() {
                context.commit("addCount");
            }, 1000);
        }
    },
```

#### 5：modules

当项目庞大，状态非常多时，可以采用模块化管理模式。Vuex 允许我们将 store 分割成**模块（module）**。每个模块拥有自己的 `state、mutation、action、getter`、甚至是嵌套子模块——从上至下进行同样方式的分割。

```
modules:{
    a:{
        state:{},
        getters:{},
        ....
    }
}
```

组件中使用方式

```
this.$store.a.state
```

