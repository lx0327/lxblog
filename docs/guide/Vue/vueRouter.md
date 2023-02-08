**1：在HTML页面中使用路由**
想要在非 vue-cli（vue 脚手架）上使用路由，必须要引用Vue Router，而Vue Router需要单独下载或者以CDN的方式引用

使用路由的固定步骤：

1：使用router-link组件设置导航链接，组件的 to 属性用于指定链接的URL，组件会被默认渲染成一个a 标签，也可以通过 tag 属性指定生成其他标签
2：使用router-view组件设置组件渲染的地方，和router-link组件配套使用，可以理解为占位符
定义路由组件
3：定义路由，需要和router-link组件中to 属性一一对应
4：创建 VueRouter 实例，
5：在Vue根实例中使用routers 选项注入 上一步创建的 VueRouter 实例

```html
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <script src="./js/vue.js"></script>
    <script src="https://unpkg.com/vue-router/dist/vue-router.js"></script>
</head>

<body>
    <div id="app">
        <!-- 第一步 -->
        <router-link to="/">首页</router-link>
        <router-link to="/news">新闻</router-link>
        <router-link to="/books">图书</router-link>
        <!-- 第二步 -->
        <router-view></router-view>
    </div>
    <script>
        // 第三步
        const index = {
            template: `<div>这是首页</div>`
        };
        const news = {
            template: `<div>这是新闻页面</div>`
        };
        const books = {
            template: `<div>这是图书页面</div>`
        };
        // 第四步
        const routes = [{
            path: "/",
            component: index
        }, {
            path: "/news",
            component: news
        }, {
            path: "/books",
            component: books
        }];
        //第五步
        const router = new VueRouter({
            routes
        });
        let vm = new Vue({
            el: "#app",
            //第六步
            router: router
        })
    </script>

</body>

</html>
```

**2：脚手架搭建项目中使用路由**

1:创建组件实例，用于跳转

2：导入组件，配置路由，导出路由

3：导入路由,挂载路由，设置导航(router-link)，和显示位置（router-view）

```javascript
/**
 * 配置路由相关信息
 * 1.先导入vue实例和vue-router实例
 */
import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'//导入Home组件
import Header from '@/components/Header'//导入Header组件
import User from '@/components/User'//导入User组件
import VueRouter from 'vue-router'
Vue.use(Router)// 2. 通过Vue.use(插件)，安装插件
//3. 创建 router路由对象
const routes = [{
    //4配置路由映射
    path: '',
    redirect: '/home'
}, {
    path: '/home',
    name: 'Home',
    component: Home
}, {
    path: '/header',
    name: 'Header',
    component: Header
}, {
    path: '/user/:userId',
    name: 'User',
    component: User
}]
const router = new VueRouter({
    routes,//配置路由和组件之间的应用关系
    mode: 'history'
})
export default router//4.导出router实例在main.js中挂载router
```



User组件

```html
<template>
  <div>
      <h1>User</h1>
      <p>这是用户{{$route.params.userId}}</p>
  </div>
</template>

<script>
export default {
name:"User"
}
</script>

<style>

</style>
```



App.vue(入口文件中设置导航连接)

```html
<template>
  <div id="app">
    <router-link :to="{name:'HomeNews',params:{name:'hh',id:1}}" >Home</router-link>
    <router-link :to="{name:'Header',query:{name:'lx',id:2}}">Header</router-link>
    <router-link :to="'/user/'+userId">User</router-link>//动态路由配置v-bind
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      userId:'lx',
    }
  }
}
</script>

<style>

</style>

```

main.js

```javascript
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

```

**3:vue-router的动态路由**

​    一个页面的path路径可能是不确定的，例如可能有`/user/aaaa`或者`/user/bbbb`，除了`/user`之外，后面还跟上了用户ID`/user/123 `等。这种path和component的匹配关系，叫动态路由。

1：路由配置添加：路径

```javascript
 {
    path: '/user/:userId',
    name: 'User',
    component: User
}
```

2:`<router-link>`动态添加属性

```html
     <router-link :to="'/user/'+userId">User</router-link>//动态路由配置v-bind
```

3：获取用户

```
$route.params.userId
$route.query.userId
```



4：**实现嵌套路由：**

1. 创建对应的子组件，并且在路由映射(`router/index.js`)中配置对应的子路由。

```javascript
{
    path: '/home',
    name: 'Home',
    component: Home,
    children: [{
        path: 'news',
        name: 'HomeNews',
        component: HomeNews
    }, {
        path: 'message',
        name: 'HomeMessage',
        component: HomeMessage
    }]
}
```

2:在组件内部使用`<router-view>`标签来占位。

```html
<template>

<div>
  <h1>Home</h1>
  <p>这是Home</p>
   <router-link to="/home/news">新闻</router-link>
   <router-link to="/home/message">消息</router-link>
   <router-view></router-view>
</div>
</template>
<script>
import Header from './Header'
export default {
 name:"Home"
}
</script>

<style>

</style>
```

**5：参数传递**



（1）不带参

```
<router-link :to="{name:'home'}">
```

//从当前路由开始

```
<router-link :to="{path:'/home'}"> 
```

//从根路由开始,name,path都行, 建议用name

 

（2）带参 （params，query）

 

```
<router-link :to="{name:'home', params: {id:1}}">
```

```
<router-link :to="{name:'home', query: {id:1}}">
```

在目标页面通过this.$route.params.id获取参数。 

在目标页面通过this.$route.query.id获取参数。 

（3）.this.$route.push( )

跳转到指定url路径，并向history栈中添加一个记录，点击后会返回到上一个页面。 

例如：push后面可以是对象，也可以是字符串

```javascript
// 字符串
this.$router.push('/home/first')
// 对象 query相当与发送了一次get请求，请求参数会显示在浏览器地址栏中
this.$router.push({ path: '/home/first' })
// 命名的路由，params相当于发送了一次post请求，请求参数则不会显示，并且刷新页面之后参数会消失
this.$router.push({ name:'Login', params: { id: this.id } )
```

 1：params

页面通过name和params传递参数（传参只能用name，不能用path）： 

this.$router.push({ name: 'about',params:{type:2} }) 

在目标页面通过this.$route.params.type获取参数。 

地址栏：localhost：8080/about

2：query

页面通过path/name和query传递参数： 

this.$router.push({ name: 'about', query: { type: '2' } }); 

this.$router.push({ path: '/about', query: { type: '2' } }); 

在目标页面通过this.$route.query.type获取参数。 

地址栏：localhost：8080/about?type=2 

**6、this.$router和this.$route** 

1. this.$router:

表示全局路由对象，里面包含属性push()，可以在任意页面实现路由跳转 路由操作对象 ，只写

对象。 

2. this.$route:

表示当前路由对象，里面包含属性name , path, query, params等， 路由信息对象，只读对

象。

**7、history路由和hash路由** 

1. hash 路由：

监听 url 中 hash 的变化，然后渲染不同的内容，这种路由不向服务器发送请求，不需要服务端的

支持。

2. history 路由：

监听 url 中的路径变化，需要客户端和服务端共同的支持； 在 history 路由中，我们一定会使用

window.history中的方法，常见的操作有：

 this.$router. back()：后退到上一个路由；

 this.$router.forward()：前进到下一个路由，如果有的话；

 this.$router. go(number)：进入到任意一个路由，正数为前进，负数为后退；

 this.$router.push(path): 相当于点击路由链接(可以返回到当前路由界面)；

 this.$router.replace(path): 用新路由替换当前路由(不可以返回到当前路由界面）。
