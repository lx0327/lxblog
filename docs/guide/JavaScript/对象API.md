---
title: 对象API
---

## 1:Object.prototype.hasOwnProperty(prop)

该方法仅在目标属性为对象自身属性时返回`true`,而当该属性是从原型链中继承而来或根本不存在时，返回`false`。

```javascript
var o = { prop: 1 };
o.hasOwnProperty("prop"); // true
o.hasOwnProperty("toString"); // false
o.hasOwnProperty("formString"); // false
```

## 2:Object.values(obj): 用于返回一个对象自身所有可枚举属性值的数组

```javascript
//values的使用，返回对象的value值数组
let arr = { a: 1, b: 2, c: 3 };
console.log(Object.keys(arr)); //['1','2','3']
```

## 3:Object.keys(obj): 用于获取目标对象原型

```javascript
//keys的使用，返回对象的key值数组
let arr = { a: 1, b: 2, c: 3 };
console.log(Object.keys(arr)); //['a','b','c']
```

## 4：Object.assign 的使用

```javascript
//assign:第二个参数及以后的参数对象合并到第一个参数上
let obj1 = { a: 1 };
let obj2 = { b: 2 };
let obi3 = { c: 3 };
Object.assign(obj1, obj2, obj3);
console.log(obj1); //{a:1,b:2,c:3}
console.log(obj2); //{b:2}
console.log(obj3); //{c:3
```
