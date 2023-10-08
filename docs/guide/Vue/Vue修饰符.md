---
title: Vue修饰符
---

### 1:修饰符是什么

在程序世界里，修饰符是用于限定类型以及类型成员的声明的一种符号

在`Vue`中，修饰符处理了许多`DOM`事件的细节，让我们不再需要花大量的时间去处理这些烦恼的事情，而能有更多的精力专注于程序的逻辑处理

`vue`中修饰符分为以下五种：

- 表单修饰符
- 事件修饰符
- 鼠标按键修饰符
- 键值修饰符

### 2：修饰符的作用

#### 表单修饰符

在我们填写表单的时候用得最多的是`input`标签，指令用得最多的是`v-model`

关于表单的修饰符有如下：

- lazy
- trim
- number

#### lazy

在我们填完信息，光标离开标签的时候，才会将值赋予给`value`，也就是在`change`事件之后再进行信息同步

```vue
<input type="text" v-model.lazy="value">
<p>{{value}}</p>
```

#### trim

自动过滤用户输入的首空格字符，而中间的空格不会过滤

```vue
<input type="text" v-model.trim="value">
```

#### number

自动将用户的输入值转为数值类型，但如果这个值无法被`parseFloat`解析，则会返回原来的值

```vue
<input v-model.number="age" type="number">
```

### 事件修饰符

事件修饰符是对事件捕获以及目标进行了处理，有如下修饰符：

- stop
- prevent
- once

#### stop

阻止了事件冒泡，相当于调用了`event.stopPropagation`方法

```vue
<div @click="shout(2)">
  <button @click.stop="shout(1)">ok</button>
</div>
//只输出1
```

#### prevent

阻止了事件的默认行为，相当于调用了`event.preventDefault`方法

```vue
<form v-on:submit.prevent="onSubmit"></form>
```

#### once

绑定了事件以后只能触发一次，第二次就不会触发

```vue
<button @click.once="shout(1)">ok</button>
```

### 鼠标按钮修饰符

鼠标按钮修饰符针对的就是左键、右键、中键点击，有如下：

- left 左键点击
- right 右键点击
- middle 中键点击

```vue
<button @click.left="shout(1)">ok</button>
<button @click.right="shout(1)">ok</button>
<button @click.middle="shout(1)">ok</button>
```

### 键盘修饰符

键盘修饰符是用来修饰键盘事件（`onkeyup`，`onkeydown`）的，有如下：

`keyCode`存在很多，但`vue`为我们提供了别名，分为以下两种：

- 普通键（enter、tab、delete、space、esc、up...）
- 系统修饰键（ctrl、alt、meta、shift...）

```vue
// 只有按键为keyCode的时候才触发
<input type="text" @keyup.keyCode="shout()">
```

还可以通过以下方式自定义一些全局的键盘码别名

```vue

Vue.config.keyCodes.f2 = 113
```

### 总结

- .stop：阻止事件冒泡
- .once：事件只执行一次
- .self ：将事件绑定在自身身上，相当于阻止事件冒泡
- .prevent：阻止默认事件
- .once：只触发一次
- .keyCode：监听特定键盘按下
- .right：右键
