---
title: Object.defineProperty
---

#### 1：作用

**`Object.defineProperty()`** 方法会直接在一个对象上定义一个新属性，或修改其现有属性，并返回此对象。

#### 2：参数说明

```
Object.defineProperty(obj, prop, descriptor)
```

` obj`:要定义的对象。

` prop`：指定要定义或修改的属性键

` descriptor`:属性的描述符

> 对象中存在的属性描述符有两种主要类型：数据描述符和访问器描述符。**数据描述符**是一个具有可写或不可写值的属性。**访问器描述符**是由 getter/setter 函数对描述的属性。描述符只能是这两种类型之一，不能同时为两者。

#### 3：数据描述符

| 属性名       | 作用                                                                               | 默认值    |
| ------------ | ---------------------------------------------------------------------------------- | --------- |
| configurable | 控制属性是否可以从对象中删除以及其特性（除了 `value` 和 `writable`）是否可以更改。 | false     |
| enumerable   | 只有为 true 时才能枚举属性                                                         | false     |
| value        | 设置属性的值                                                                       | undefined |
| writable     | 只有为 true 时才能更改                                                             | false     |

#### 4：访问器描述符

| 属性名 | 作用                                              | 默认值    |
| ------ | ------------------------------------------------- | --------- |
| get    | 当访问该属性时调用此函数,返回值将被用作该属性的值 | undefined |
| set    | 当修改该属性时调用此函数                          | undefine  |

> 如果描述符没有 `value`、`writable`、`get` 和 `set` 键中的任何一个，它将被视为数据描述符。如果描述符同时具有 [`value` 或 `writable`] 和 [`get` 或 `set`] 键，则会抛出异常。

#### 5：示例

` value使用`

```javascript
let user = {};
Object.defineProperty(user, 'name', {
  value: 'lx',
});
user.name = 'hh';
console.log(user); //{name:lx}因为writable 为false 所以不能更改，那么值仍为lx
```

` writable使用`

```javascript
let user = {};
Object.defineProperty(user, 'name', {
  writable: true,
  value: 'lx',
});
user.name = 'hh';
console.log(user); //{name:hh}因为writable 为true可以更改
```

` configurable使用`

```javascript
let user = {};
Object.defineProperty(user, 'name', {
  writable: true,
  configurable: true,
  value: 'lx',
});
user.name = 'hh';
delete user.name;
console.log(user); //{}因为configurable为true 所以属性删除若为false则{name:'hh'}
```

` enumerable使用`

```javascript
let user = {};
Object.defineProperty(user, 'name', {
  writable: true,
  configurable: false,
  value: 'lx',
  enumerable: false,
});
user.name = 'hh';
delete user.name;
for (let i in user) {
  console.log(i); //啥也打印不出因为enumerable为false改为true时可以打印出name属性
}
```

`set,get使用`

```javascript
let user = {};
let name = '';
Object.defineProperty(user, 'name', {
  set: function (val) {
    name = val;
    console.log('name改变了', val);
  },
  get: function () {
    console.log('name被访问了');
    return name; //返回值将被作为user.name的值不返回最后访问user.name 将为undefined因为writable默认为false，后面user.name='hh'不能改变user
  },
});
user.name = 'hh';
console.log(user.name); //name改变了 hh name被访问了 hh
```
