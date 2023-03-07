---
title: js作用域
---



## 1：定义:

 作用域就是变量与函数的可访问范围，即作用域控制着变量与函数的可见性和生命周期。在 JavaScript 中，变量的作用域有全局作用域和局部作用域两种。

## 2：**全局作用域：**

 (1)在代码中任何地方都能访问到的对象拥有全局作用域，一般来说以下几种情形拥有全局作用域：

```javascript
 <script>
        var a = 1;
        function doSomething() {
            var b = 2;
            function innerSay() {
                console.log(b);
            }
            innerSay();
        }
        console.log(a); //1
        // console.log(b); //b is not defined
        doSomething(); //2
        // innerSay() //inddersay() is not defined
    </script>
```

(2)所有末定义直接赋值的变量自动声明为拥有全局作用域

```javascript
 <script>
      function fn(){
         innerVar = "inner";
      }
      fn();
      console.log(innerVar);// result:inner
   </script>
```

（3）所有 window 对象的属性拥有全局作用域

一般情况下，window 对象的内置属性都拥有全局作用域，例如 window.name、window.location、window.top 等等。

## 3：**局部作用域（函数作用域）：**

和全局作用域相反，局部作用域一般只在固定的代码片段内可访问到，最常见的例如函数内部，所以在一些地方也会看到有人把这种作用域称为**函数作用域**

```javascript
<script>
      function fn(){
         var innerVar = "inner";
      }
      fn();
      console.log(innerVar);// ReferenceError: innerVar is not defined
</script>
```

**只要函数内定义了一个局部变量，函数在解析的时候都会将这个变量“提前声明”**：

```javascript
   <script>
      var scope = "global";
      function fn(){
         var scope;//提前声明了局部变量
         console.log(scope);//result:undefined
         scope = "local";
         console.log(scope);//result:local;
      }
      fn();
   </script>
```

## 4：块级作用域

**ES6 之前 JavaScript 没有块级作用域,只有全局作用域和函数作用域**。ES6 的到来，为我们提供了‘块级作用域’,可通过新增命令 let 和 const 来体现。

块级作用域可通过新增命令 let 和 const 声明，所声明的变量在指定块的作用域外无法被访问。块级作用域在如下情况被创建：

1. 在一个函数内部
2. 在一个代码块（由一对花括号包裹）内部

```javascript
function getValue(condition) {
  if (condition) {
    let value = "blue";
    return value;
  } else {
    // value 在此处不可用
    return null;
  }
  // value 在此处不可用
}
```

**块级作用域不存在变量提升**

## **5:this 指向问题**

（1） 全局环境下

在全局环境下，this 始终指向全局对象（window）, 无论是否严格模式；

```
console.log(this.document === document); // true

// 在浏览器中，全局对象为 window 对象：
console.log(this === window); // true

this.a = 37;
console.log(window.a); // 37
```

（2）函数直接调用

普通函数内部的 this 分两种情况，严格模式和非严格模式。

非严格模式下，this 默认指向全局对象 window

```stylus?linenums
function f1(){
  return this;
}

f1() === window; // true
```

而严格模式下， this 为 undefined

```stylus?linenums
function f2(){
  "use strict"; // 这里是严格模式
  return this;
}

f2() === undefined; // true
```

（3）对象中的 this

方法调用模式

当函数被保存为一个对象的属性时，它就可称为这个对象的方法。当一个方法被调用时，this 被绑定到这个对象上。如果调用表达式包含一个提取属性的动作（. 或 []），那么它被称为方法调用

```javascript
var o = {
  name: "hello",
  sayName: function () {
    console.log(this);
    console.log(name);
  }
};
o.sayName(); //指向o对象
```

```javascript
var o = {
  name: "hello",
  b: {
    sayName: function () {
      console.log(this);
      console.log(this.name);
    }
  }
};
o.b.sayName(); //指向b对象
```

```javascript
var o = {
  name: "hello",
  b: {
    sayName: function () {
      console.log(this);
      console.log(this.name);
    }
  }
};
var a = o.b.sayName; //因为a时全局环境下的变量所以指向window
a(); //指向window
```

（4）构造函数中 this

如果在一个函数前面加上 new 关键字来调用，那么就会创建一个连接到该函数的 prototype 成员的新对象，同时，this 会被绑定到这个新对象上。这种情况下，这个函数就可以成为此对象的构造函数。

在构造函数，new 出一个对象时，this 指向这个构造函数，new 关键字会改变 this 的指向

**当用 new 关键字，返回的是一个对象，this 指向的就是那个返回的对象；**

**如果返回的不是对象，this 还是指向函数的实例，虽然 null 属于对象，但是返回 null 依然指向函数实例**

```javascript
function C() {
  this.a = 37;
}

var o = new C();
console.log(o.a); // logs 37

function C2() {
  this.a = 37;
  return { a: 38 };
}

var b = new C2();
console.log(b.a); // logs 38

function Fn() {
  this.a = "lx";
  return {};
}
var fn = new Fn();
console.log(fn.a); //undefined因为返回了一个对象则指向这个对象，这对象中没有a所以undefined
```

（5）setTimeout & setInterval

对于延时函数内部的回调函数的 this 指向全局对象 window

(6)apply 和 call 调用模式

JS 中，函数也是对象，所有函数对象都有两个方法：apply 和 call，这两个方法可以让我们构建一个参数数组传递给调用函数，也允许我们改变 this 的值

```javascript
var name = "window";
var o = {
  name: "obj"
};

function sayName() {
  console.log(this.name);
}
sayName(); //window
sayName.apply(o); //obj
sayName.call(o); //obj
sayName.apply(); //window
sayName.call(); //window
```

（7）箭头函数中的 this

由于箭头函数不绑定 this， 它会捕获其所在（即定义的位置）上下文的 this 值， 作为自己的 this 值，

1. 所以 call() / apply() / bind() 方法对于箭头函数来说只是传入参数，对它的 this 毫无影响。
2. 考虑到 this 是词法层面上的，严格模式中与 this 相关的规则都将被忽略。（可以忽略是否在严格模式下的影响）

- 总结如下：

| 调用方式     | this 指向                                 |
| ------------ | ----------------------------------------- |
| 普通函数调用 | window                                    |
| 构造函数调用 | 实例对象,原型对象里面的方法也指向实例对象 |
| 对象方法调用 | 该方法所属对象                            |
| 事件绑定方法 | 绑定事件对象                              |
| 定时器函数   | window                                    |
| 立即执行函数 | window                                    |

## 6：普通函数 this 和箭头函数 this

对于普通函数来说，内部的`this`指向函数运行时所在的对象，但是这一点对箭头函数不成立。它没有自己的`this`对象，内部的`this`就是定义时上层作用域中的`this`。也就是说，箭头函数内部的`this`指向是固定的，相比之下，普通函数的`this`指向是可变的。

## 7:call apply bind 的使用和区别

###### 1. call

- fn.call

> 当前实例(函数 fn)通过原型链的查找机制，找到`function.prototype`上的`call`方法，`function call(){[native code]}`

fn.call() 把找到的 call 方法执行当 call 方法执行的时候，内部处理了一些事情 1.首先把要操作的函数中的 this 关键字变为 call 方法第一个传递的实参 2.把 call 方法第二个及之后的实参获取到 3.把要操作的函数执行，并且把第二个以后传递进来的实参传递给函数

```
fn.call([this],[param]...)
```

1. 非严格模式

> 如果不传参数，或者第一个参数是`null`或`nudefined`，`this`都指向`window`

```javascript
let fn = function (a, b) {
  console.log(this, a, b);
};
let obj = { name: "obj" };
fn.call(obj, 1, 2); // this:obj    a:1         b:2
fn.call(1, 2); // this:Number{1}      a:2         b:undefined
fn.call(); // this:window a:undefined b:undefined
fn.call(null); // this=window a=undefined b=undefined
fn.call(undefined); // this=window a=undefined b=undefined
```

1. 严格模式

> 第一个参数是谁，this 就指向谁，包括 null 和 undefined，如果不传参数 this 就是 undefined

```javascript
"use strict";
let fn = function (a, b) {
  console.log(this, a, b);
};
let obj = { name: "obj" };
fn.call(obj, 1, 2); // this:obj        a:1          b:2
fn.call(1, 2); // this:Number{1}          a:2          b=undefined
fn.call(); // this:undefined  a:undefined  b:undefined
fn.call(null); // this:null       a:undefined  b:undefined
fn.call(undefined); // this:undefined  a:undefined  b:undefined
```

###### 2. apply

- apply：和 call 基本上一致，唯一区别在于传参方式

> apply 把需要传递给 fn 的参数放到一个数组（或者类数组）中传递进去，虽然写的是一个数组，但是也相当于给 fn 一个个的传递

```javascript
fn.call(obj, 1, 2);
fn.apply(obj, [1, 2]);
```

###### 3. bind

- bind：语法和 call 一模一样，区别在于立即执行还是等待执行，bind 不兼容 IE6~8

```javascript
fn.call(obj, 1, 2); // 改变fn中的this，并且把fn立即执行
fn.bind(obj, 1, 2); // 改变fn中的this，fn并不执行
```

this 改变为 obj 了，但是绑定的时候立即执行，当触发点击事件的时候执行的是 fn 的返回值 undefined

```
document.onclick = fn.call(obj);
```

bind 会把 fn 中的 this 预处理为 obj，此时 fn 没有执行，当点击的时候才会把 fn 执行

```
document.onclick = fn.bind(obj);
```
