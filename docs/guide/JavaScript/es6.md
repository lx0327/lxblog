---
title: Es6常用
---

## 1：let 关键字

用 let 声明的变量有几个特点：

let 关键字用来声明变量，使用 let 声明的变量有几个特点：

1. 不允许重复声明；

2. 块儿级作用域（局部变量）；

   ```javascript
   {
     let a = 1;
   }
   console.log(a); //Uncaught ReferenceError: a is not defined
   ```

3. 不存在变量提升；

   ```javascript
   {
     console.log(a);
     let a = 1;
   } //报错
   ```

4. 不影响作用域链；

```javascript
let school = "abc";
function fn() {
  console.log(school); //abc
}
```

## 2:const 关键字

​ 声明常量

1. 一定要赋初始值
2. 一般常量使用大写（潜规则）
3. 常量的值不能修改
4. 也具有块级作用域
5. 对于数组和对象的元素修改，不算作对常量的修改
6. 不允许重复声明；
7. 不存在变量提升；

## 3： 解构赋值

ES6 允许按照一定模式从数组和对象中提取值，对变量进行赋值，这被称为解构赋值。

1：数组的解构：

```javascript
const F4 = ["1", "2", "3", "4"]; //这里是中括号
let [a, b, c, d] = F4;
console.log(a); //1
console.log(b); //2
console.log(c); //3
console.log(d); //4
```

2:对象的解构

```javascript
const zhao = {
  name: "赵本山",
  age: "不详",
  xiaopin: function () {
    console.log("我可以演小品");
  }
};
let {
  //这里是花括号
  name,
  age,
  xiaopin
} = zhao;
console.log(name);
console.log(age);
console.log(xiaopin);
```

## 4：模板字符串

模板字符串（template string）是增强版的字符串，用反引号（`）标识，特点：

1：字符串中可以出现换行符；

2：可以使用 ${xxx} 形式引用变量

```
let lovest = 'lx';
let out = `${lovest}哈哈哈`;

console.log(out)  //lx哈哈哈
```

## **5：简化对象和函数写法**

ES6 允许在大括号里面，直接写入变量和函数，作为对象的属性和方法,这样的书写更加简洁

```javascript
let name = "lx";
let change = function () {
  console.log("哈哈哈哈");
};
//创建对象
const school = {
  // 完整写法
  // name:name,
  // change:change
  // 简化写法
  name,
  change,
  // 声明方法的简化
  say() {
    console.log("额鹅鹅鹅！");
  }
};
school.change();
school.say();
```

## 6:箭头函数

**概述：**

ES6 允许使用箭头（=>）定义函数，箭头函数提供了一种更加简洁的函数书写方式，箭头函数多用于匿

名函数的定义；

**箭头函数的注意点：**

1. 如果形参只有一个，则小括号可以省略；

2. 函数体如果只有一条语句，则花括号可以省略，函数的返回值为该条语句的执行结果；

3. 箭头函数的 this 是静态的, this 指向声明时所在作用域下 this 的值；

4. 箭头函数不能作为构造函数实例化；

5. 不能使用 arguments；

```javascript
// ES6允许使用箭头（=>）定义函数
// 传统写法：无参数
var say = function () {
  console.log("hello！");
};
say();
// ES6写法：无参数
let speak = () => console.log("hello 哈哈！");
speak();
// 传统写法：一个参数
var hello = function (name) {
  return "hello " + name;
};
console.log(hello("lx"));
// ES6箭头函数：一个参数
let hi = (name) => "hi " + name;
console.log(hi("lx"));
// 传统写法：多个参数
var sum = function (a, b, c) {
  return a + b + c;
};
console.log(sum(1, 2, 3));
// ES6箭头函数：多个参数
let he = (a, b, c) => a + b + c;
console.log(he(1, 2, 3));
// 特性
// 1、箭头函数的this是静态的，始终指向函数声明时所在作用域下的this的值
const school = {
  name: "大哥"
};
// 传统函数
function getName() {
  console.log("getName：" + this.name);
}

// 箭头函数
getName1 = () => console.log("getName1：" + this.name);
window.name = "lx";
// 直接调用
getName(); //lx
getName1(); //lx
// 使用call调用
getName.call(school); //大哥
getName1.call(school); //lx
// 结论：箭头函数的this是静态的，始终指向函数声明时所在作用域下的this的值
// 2、不能作为构造实例化对象
// let Persion = (name,age) => {
// this.name = name;
// this.age = age;
// }
// let me = new Persion("lx",18);
// console.log(me);
// 报错：Uncaught TypeError: Persion is not a constructor
// 3、不能使用 arguments 变量
// let fn = () => console.log(arguments);
// fn(1,2,3);
// 报错：Uncaught ReferenceError: arguments is not defined
```

## 7: 函数参数默认值

1:ES6 允许给函数参数赋值初始值

```javascript
function add(a, b, c = 12) {
  return a + b + c;
}
let result = add(1, 2);
console.log(result); // 15
```

2:与解构赋值结合

```javascript
function A({ host = "127.0.0.1", username, password, port }) {
  console.log(host + "-" + username + "-" + password + "-" + port);
}
A({
  username: "lx",
  password: "123",
  port: "80"
});
```

## 8:rest 参数

ES6 引入 rest 参数，用于获取函数的实参，用来代替 arguments；

```javascript
// ES5获取实参的方式

function data() {
  console.log(arguments);
}

data("大哥", "二哥", "三哥", "四哥");

// ES6的rest参数...args，rest参数必须放在最后面

function data(...args) {
  console.log(args); // fliter some every map
}

data("大哥", "二哥", "三哥", "四哥"); //返回数组
```

![image-20210727152444060](C:\Users\梁宵\AppData\Roaming\Typora\typora-user-images\image-20210727152444060.png)

## 9：扩展运算符

... 扩展运算符能将数组转换为逗号分隔的参数序列；

扩展运算符（spread）也是三个点（...）。它好比 rest 参数的逆运算，将一个数组转为用逗号分隔的参

数序列，对数组进行解包；

```javascript
const tfboys=['AA','BB','CC']
function chunwan(){
    console.log(arguments);
}
chunwan(...tfboys);  //0:'AA' 1:'BB' 2:'CC'

将字符串转换成数组可以这样
[...'hello']
// [ "h", "e", "l", "l", "o" ]
```
