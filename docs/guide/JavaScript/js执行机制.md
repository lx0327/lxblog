---
title: js执行机制
---

## 1：js 执行机制

​ 由于 JavaScript 是一门单线程语言，就意味着前一个任务结束，才会执行后一个任务，如果前一个任务耗时过长，后一个任务就不得不一直等着。

如果排队是因为计算量大，CPU 忙不过来，倒也算了，但是很多时候 CPU 是闲着的，因为 IO 设备（输入输出设备）很慢（比如 Ajax 操作从网络读取数据），不得不等着结果出来，再往下执行。

JavaScript 语言的设计者意识到，这时主线程完全可以不管 IO 设备，挂起处于等待中的任务，先运行排在后面的任务。等到 IO 设备返回了结果，再回过头，把挂起的任务继续执行下去。

## 2：同步任务和异步任务

于是，所有任务可以分成两种，一种是同步任务（synchronous），另一种是异步任务（asynchronous）。同步任务指的是，在主线程上排队执行的任务，只有前一个任务执行完毕，才能执行后一个任务；异步任务指的是，不进入主线程、而进入"任务队列"（task queue）的任务，只有"任务队列"通知主线程，某个异步任务可以执行了，该任务才会进入主线程执行。

![img](https://images2018.cnblogs.com/blog/1424035/201807/1424035-20180717203930248-574135681.png)

**1、同步和异步任务分别进入不同的执行"场所"，同步的进入主线程，异步的进入 Event Table 并注册函数。** 　　**2、当 Event Table 中指定的事情完成时，会将这个函数移入 Event Queue。** 　　**3、主线程内的任务执行完毕为空，会去 Event Queue 读取对应的函数，进入主线程执行。** 　　**4、上述过程会不断重复，也就是常说的 Event Loop(事件循环)。** 　　**5、我们不禁要问了，那怎么知道主线程执行栈为空啊？js 引擎存在 monitoring process 进程，会持续不断的检查主线程执行栈是否为空，一旦为空，就会去 Event Queue 那里检查是否有等待被调用的函数。**

## 3:宏任务和微任务

JavaScript 除了广义上的的同步任务何异步任务，其对任务还有更精细的定义：　　　　**macro-task(宏任务)：包括整体代码 script，setTimeout，setInterval** 　　　　**micro-task(微任务)：Promise，process.nextTick** 　　不同类型的任务会进入对应的 Event Queue。　　事件循环的顺序，决定 js 代码的执行顺序。进入整体代码(宏任务)后，开始第一次循环。接着执行所有的微任务。然后再次从宏任务开始，找到其中一个任务队列执行完毕，再执行所有的微任务。

![img](https://images2018.cnblogs.com/blog/1424035/201807/1424035-20180717204025092-991427971.png)

## 4:实例

###### 1: 同步

```javascript
console.log(1);
console.log(2);
console.log(3);
/*
    执行结果：1、2、3
    同步任务，按照顺序一步一步执行
*/
```

###### 2 :同步和异步

```javascript
console.log(1);
setTimeout(function () {
  console.log(2);
}, 1000);
console.log(3);
/*
    执行结果：1、3、2
    同步任务，按照顺序一步一步执行
    异步任务，放入消息队列中，等待同步任务执行结束，读取消息队列执行
    */
```

###### 3:异步任务进一步分析

```javascript
console.log(1);
setTimeout(function () {
  console.log(2);
}, 1000);
setTimeout(function () {
  console.log(3);
}, 0);
console.log(4);
/*
    猜测是：1、4、2、3   但实际上是：1、4、3、2
    分析：
        同步任务，按照顺序一步一步执行
        异步任务，当读取到异步任务的时候，将异步任务放置到Event table（事件表格）
中，当满足某种条件或者说指定事情完成了（这里的是时间分别是达到了0ms和1000ms）当指定
事件完成了才从Event table中注册到Event Queue（事件队列），当同步事件完成了，便从
Event Queue中读取事件执行。（因为3的事情先完成了，所以先从Event table中注册到
Event Queue中，所以先执行的是3而不是在前面的2）
*/
```

###### 4:宏任务和微任务

```javascript
console.log(1);
setTimeout(function () {
  console.log(2);
}, 1000);

new Promise(function (resolve) {
  console.log(3);
  resolve();
}).then(function () {
  console.log(4);
});
console.log(5);
/*
    以同步异步的方式来判断的结果应该是：1、3、5、2、4
    但是事实上结果是：1、3、5、4、2
    为什么是这样呢？因为以同步异步的方式来解释执行机制是不准确的，更加准确的方式是宏任务和微任务：
    因此执行机制便为：执行宏任务 ===> 执行微任务 ===> 执行另一个宏任务 ===> 不断循环
        即：在一个事件循环中，执行第一个宏任务，宏任务执行结束，执行当前事件循环中的微任务，
执行完毕之后进入下一个事件循环中，或者说执行下一个宏任务
*/
```

## 5：测试

```javascript
console.log("1");

setTimeout(function () {
  console.log("2");
  process.nextTick(function () {
    console.log("3");
  });
  new Promise(function (resolve) {
    console.log("4");
    resolve();
  }).then(function () {
    console.log("5");
  });
});
process.nextTick(function () {
  console.log("6");
});
new Promise(function (resolve) {
  console.log("7");
  resolve();
}).then(function () {
  console.log("8");
});

setTimeout(function () {
  console.log("9");
  process.nextTick(function () {
    console.log("10");
  });
  new Promise(function (resolve) {
    console.log("11");
    resolve();
  }).then(function () {
    console.log("12");
  });
});
/*
1、 第一轮事件循环流程分析如下：
    整体script作为第一个宏任务进入主线程，遇到console.log，输出1。
    遇到setTimeout，其回调函数被分发到宏任务Event Queue中。我们暂且记为setTimeout1。
    遇到process.nextTick()，其回调函数被分发到微任务Event Queue中。我们记为process1。
    遇到Promise，new Promise直接执行，输出7。then被分发到微任务Event Queue中。我们记为then1。
    又遇到了setTimeout，其回调函数被分发到宏任务Event Queue中，我们记为setTimeout2。
         
    宏任务Event Queue   微任务Event Queue
    setTimeout1         process1
    setTimeout2         then1
     
    上表是第一轮事件循环宏任务结束时各Event Queue的情况，此时已经输出了1和7。
    我们发现了process1和then1两个微任务。
    执行process1,输出6。
    执行then1，输出8。
     
    好了，第一轮事件循环正式结束，这一轮的结果是输出1，7，6，8。
     
2、 那么第二轮时间循环从setTimeout1宏任务开始：
     
    首先输出2。接下来遇到了process.nextTick()，同样将其分发到微任务Event Queue中，
记为process2。new Promise立即执行输出4，then也分发到微任务Event Queue中，记为then2。
     
    宏任务Event Queue     微任务Event Queue
    setTimeout2           process2
                          then2
                           
    第二轮事件循环宏任务结束，我们发现有process2和then2两个微任务可以执行。
        输出3。
        输出5。
        第二轮事件循环结束，第二轮输出2，4，3，5。
 
3、 第三轮事件循环开始，此时只剩setTimeout2了，执行。
        直接输出9。
        将process.nextTick()分发到微任务Event Queue中。记为process3。
        直接执行new Promise，输出11。
        将then分发到微任务Event Queue中，记为then3。
         
    宏任务Event Queue     微任务Event Queue
                            process3
                            then3     
    第三轮事件循环宏任务执行结束，执行两个微任务process3和then3。
        输出10。
        输出12。
        第三轮事件循环结束，第三轮输出9，11，10，12。
 
    整段代码，共进行了三次事件循环，完整的输出为1，7，6，8，2，4，3，5，9，11，10，12。
*/
```
