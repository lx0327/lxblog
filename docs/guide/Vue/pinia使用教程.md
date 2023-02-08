---
title: pinia使用教程
---

> 与 Vuex 相比，Pinia 提供了一个更简单的 API，具有更少的规范，提供了 Composition-API 风格的 API，最重要的是，在与 TypeScript 一起使用时具有可靠的类型推断支持。

## 1：创建一个 pinia（根存储）并将其传递给应用程序

```js
import { createPinia } from 'pinia';
app.use(createPinia());
```

## 2：创建 srore（选项式）

> 什么是 store
>
> 一个 Store （如 Pinia）是一个实体，它持有未绑定到您的组件树的状态和业务逻辑。换句话说，**它托管全局状态**。它有点像一个始终存在并且每个人都可以读取和写入的组件。它有**三个概念**，[state](https://pinia.web3doc.top/core-concepts/state.html)、[getters](https://pinia.web3doc.top/core-concepts/getters.html) 和 [actions](https://pinia.web3doc.top/core-concepts/actions.html) 并且可以安全地假设这些概念等同于组件中的“数据”、“计算”和“方法”。

```js
// stores/counter.js
import { defineStore } from 'pinia';
// 第一个参数是应用程序中 store 的唯一 id是必要的，Pinia 使用它来将 store 连接到 devtools。 将返回的函数命名为 use... 是跨可组合项的约定，以使其符合你的使用习惯。
export const useCounterStore = defineStore('counter', {
  state: () => {
    return { count: 0 };
  },
  // 也可以定义为
  // state: () => ({ count: 0 })
  actions: {
    increment() {
      this.count++;
    },
  },
});
```

## 3：创建 store(组合式类似于组件的 setup)

```javascript
export const useCounterStore = defineStore('counter', () => {
  const count = ref(0);
  function increment() {
    count.value++;
  }

  return { count, increment };
});
```

## 4：在组件中使用 store

```javascript
import { useCounterStore } from '@/stores/counter';

export default {
  setup() {
    const counter = useCounterStore();

    counter.count++;
    // 带自动补全 ✨
    counter.$patch({ count: counter.count + 1 });
    // 或使用 action 代替
    counter.increment();
  },
};
```

## 5：在组件中解构时需注意

> 请注意，`store` 是一个用`reactive` 包裹的对象，这意味着不需要在 getter 之后写`.value`，但是，就像`setup` 中的`props` 一样，**我们不能对其进行解构**：

```js
export default defineComponent({
  setup() {
    const store = useStore();
    // ❌ 这不起作用，因为它会破坏响应式
    // 这和从 props 解构是一样的
    const { name, doubleCount } = store;

    name; // "eduardo"
    doubleCount; // 2

    return {
      // 一直会是 "eduardo"
      name,
      // 一直会是 2
      doubleCount,
      // 这将是响应式的
      doubleValue: computed(() => store.doubleCount),
    };
  },
});
```

> 为了从 Store 中提取属性同时保持其响应式，您需要使用`storeToRefs()`。 它将为任何响应式属性创建 refs。 当您仅使用 store 中的状态但不调用任何操作时，这很有用：

```js
import { storeToRefs } from 'pinia';

export default defineComponent({
  setup() {
    const store = useStore();
    // `name` 和 `doubleCount` 是响应式引用
    // 这也会为插件添加的属性创建引用
    // 但跳过任何 action 或 非响应式（不是 ref/reactive）的属性
    const { name, doubleCount } = storeToRefs(store);

    return {
      name,
      doubleCount,
    };
  },
});
```

## 6：state 重置状态

> 您可以通过调用 store 上的 `$reset()` 方法将状态 _重置_ 到其初始值：

```
const store = useStore()
store.$reset()
```
