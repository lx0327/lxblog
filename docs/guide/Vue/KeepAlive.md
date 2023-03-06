---
title: KeepAlive
---

### 功能

它的功能是在多个组件间动态切换时缓存被移除的组件实例。

### 基本使用

```html
 <router-view v-slot="{ Component }">
   <keep-alive include='About'>
   <component  :is="Component" />
   </keep-alive>
 </router-view>
```

### 包含和排除

```html
<KeepAlive include="a,b" exclude='c'>//a,b会被缓存，c不会
  <component :is="view" />
</KeepAlive>
```

> a,b为组件名字，不是组件的name

### 最大缓存实例数

我们可以通过传入 `max` prop 来限制可被缓存的最大组件实例数。`<KeepAlive>` 的行为在指定了 `max` 后类似一个 LRU 缓存如果缓存的实例数量即将超过指定的那个最大数量，则最久没有被访问的缓存实例将被销毁，以便为新的实例腾出空间。

```html
<KeepAlive :max="10">
  <component :is="activeComponent" />
</KeepAlive>
```

### 缓存实例的生命周期

当一个组件实例从 DOM 上移除但因为被 `<KeepAlive>` 缓存而仍作为组件树的一部分时，它将变为**不活跃**状态而不是被卸载。当一个组件实例作为缓存树的一部分插入到 DOM 中时，它将重新**被激活**。

一个持续存在的组件可以通过 `onActivated()` 和 `onDeactivated()` 注册相应的两个状态的生命周期钩子：

```html
<script setup>
import { onActivated, onDeactivated } from 'vue'

onActivated(() => {
  // 调用时机为首次挂载
  // 以及每次从缓存中被重新插入时
})

onDeactivated(() => {
  // 在从 DOM 上移除、进入缓存
  // 以及组件卸载时调用
})
</script>

```

