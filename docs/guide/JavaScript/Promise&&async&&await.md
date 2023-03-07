---
title: promise/async/await
---

## 1:什么是Promise

> promise是一个对象，它代表了一个异步操作的最终完成或者失败

- 从语法上来说：Promise 是一个构造函数
- 从功能上来说：Promise 对象用来封装一个异步操作并可以获取其结果

## 2：promise的状态

1. pending 变为 resolved
2. pending 变为rejected

> 说明：只有这2种，且一个 Promise 对象只能改变一次，无论变成成功还是失败，都会有一个结果数据，成功的结果数据一般称为 value，失败的结果数据一般称为 reason。

## 3：Promise的基本流程

![「长文干货」Promise和Async/await的理解和使用](https://p1-tt.byteimg.com/origin/pgc-image/35477690536b4e2baf57653c7026b0ac?from=pc)

## 4：基本使用

返回0-10随机数大于5成功否则失败

```javascript
const p1 = new Promise((resolve, reject) => {//执行器函数同步执行
  //2:执行异步操作
  setTimeout(() => {
    const num = Math.floor(Math.random(0, 10) * 10)
    if (num >= 5) {
      // 3.1 如果成功了，调用resolve(value)
      resolve('成功' + num)
      return
    }
    // 3.2 如果失败了，调用reject(reason)
    reject('失败' + num)

  }, 2000);
})
p1.then(res => {
  // 接受得到成功的value数据，onResolved
  console.log(res)
}, rej => {
  // 接受得到失败的reason数据,onRejected
  console.log(rej)
})
```

## 5：Promise.all

> 包含 n 个 promise 的数组，返回一个新的 promise, 只有所有的 promise 都成功才成功, 只要有一个失败了就直接失败。

```javascript
    const list = [1, 2, 3, 4, 5, 6]
    const list2 = [4, 5, 6, 7, 8, 9]
    const list3 = [10, 11, 12, 13]
    const p1 = Promise.resolve((list))
    const p2 = Promise.resolve(list2)
    const p3 = new Promise((resove, reject) => {
      setTimeout(() => {
        resove(list3)
      }, 3000);
    })
    const pll = Promise.all([p1, p2, p3])
    pll.then(res => {
      console.log(res);
    }, rej => {
      console.log(rej);
    })
    const race = Promise.race([p3, p2, p1])
    race.then(res => {
      console.log(res);
    })
```

[![ppZXOwF.png](https://s1.ax1x.com/2023/03/07/ppZXOwF.png)](https://imgse.com/i/ppZXOwF)

## 6: Promise.race

> 包含 n 个 promise 的数组，返回一个新的 promise, 第一个完成的 promise 的结果状态就是最终的结果状态。

```javascript
const race = Promise.race([p3, p2, p1])
race.then(res => {
  console.log(res);//p2最先执行[4,5,6,7,8]
})
```

## 7:async/await

**async/await** 实际上只是一种基于 **promises** 的语法糖，**async/await** 和 **promises** 一样，都是非堵塞式的，**async/await** 让异步代码更具同步代码风格，这也是其优势所在。

**async function** 用来定义一个返回 **AsyncFunction** 对象的异步函数。异步函数是指通过事件循环异步执行的函数，它会通过一个隐式的 **Promise** 返回其结果，。如果你在代码中使用了异步函数，就会发现它的语法和结构会更像是标准的同步函数。

**await** 操作符用于等待一个 **Promise** 对象。它只能在异步函数 **async function** 中使用。

### async

> **async** 函数的返回值为 Promise 对象，**async** 函数返回的 Promise 的结果由函数执行的结果决定

```javascript
async function fn1() {
    return 1
}
const result = fn1()
console.log(result) // Promise { 1 }
fn1().then(
    value => { console.log('onResolved()', value) },//1
    reason => { console.log('onRejected()', reason) } 
)
```

### await

> **await** 右侧的表达式一般为 **promise** 对象, 但也可以是其它的值
>
> 1. 如果表达式是 promise 对象, await 返回的是 promise 成功的值
> 2. 如果表达式是其它值, 直接将此值作为 await 的返回值

```javascript
function fn2() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(1000)
        }, 1000);
    })
}
function fn4() {
  return 6   
}
async function fn3() {
    // const value = await fn2() // await 右侧表达式为Promise，得到的结果就是Promise成功的value
    const value = await fn4()
    console.log('value', value)
}
fn3() // value 6
```

**await** 必须写在 **async** 函数中, 但 **async** 函数中可以没有 **await**，如果 **await** 的 Promise 失败了, 就会抛出异常, 需要通过 **try...catch** 捕获处理。

```javascript
function fn2() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // resolve(1000)
            reject(1000)
        }, 1000);
    })
}
async function fn3() {
    try {
        const value = await fn2()
    } catch (error) {
        console.log('得到失败的结果', error)
    }
}
fn3() // 得到失败的结果 1000
```

**Async/await 比 Promise 更优越的表现**

**简洁干净**，使用 async/await 能省去写多少行代码

**错误处理**，async/wait 能用相同的结构和好用的经典 try/catch 处理同步和异步错误，错误堆栈能指出包含错误的函数。

**调试**，async/await 的一个极大优势是它更容易调试，使用 async/await 则无需过多箭头函数，并且能像正常的同步调用一样直接跨过 await 调用。
