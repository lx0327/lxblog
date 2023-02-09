---
title: 数组API
---

http://louiszhai.github.io/2017/04/28/array

## 1 : 遍历数组

### ​1：普通 for 循环

```html
for（let i =0;i<arr.length;i++）//i为得到数组的索引号
```

​ 2:for in 遍历

```html
for（i in arr）//i为数组的索引号
```

​ 3:for of 遍历

```
for（i of arr）//i为数组的值
```

### 2：filter()高阶函数

```html
<script>
  //得到数组中值大于四的数
  var arr = [2, 4, 6, 8, 10];
  var newArr = arr.filter(function (i) {
    return i > 4;
  });
  console.log(newArr);
</script>
```

filter 函数传入一个回调函数，返回一个 boolean 值，当这个值为 true 时就将遍历到数组里的数值保存到新的数组中常用于筛选数组中

指定要求的值

### 3：map 函数

```html
<script>
  var arr = [2, 4, 6, 8, 10];
  var newArr = arr.map(function (n) {
    return n * 2;
  });
  console.log(newArr);
</script>
```

map 函数也需要传入一个回调函数，该函数直接返回对数组里所有的数执行同样的操作后的数组，如上面代码所示直接返回对 arr 所有

数值执行乘 2 的操作后的值

### 4：reduce 函数

```html
<script>
  var arr = [2, 4, 6, 8, 10];
  var newArr = arr.reduce(function (before, now) {
    return before + now;
  }, 0);
  console.log(newArr);
</script>
```

reduce 传入一个回调函数，这个函数要传入 2 个值，一个是开始设定的值，另一个是遍历到的数组里的值，常用于累加数组里的值

## 5:push():

可以接收任意数量的参数，把它们逐个添加到数组末尾，**并返回修改后数组的长度**。

```javascript
var arr = [2, 4, 6, 8, 10];
var newArr = arr.push(12, 14);
console.log(newArr); //7
```

## 6:unshift()

可以接收任意数量的参数，把它们逐个添加到数组头部,**并返回修改后数组的长度**。

```javascript
var arr = [2, 4, 6, 8, 10];
var newArr = arr.unshift(12, 14);
console.log(newArr); //7
```

## 7:pop()：

数组末尾移除最后一项，减少数组的 length 值，然后**返回移除的项**。

```javascript
var arr = [2, 4, 6, 8, 10];
var newArr = arr.pop();
console.log(newArr); //10
```

## 8:shift()

删除原数组第一项，并**返回删除元素的值**；如果数组为空则返回 undefined 。

```
var arr = [2, 4, 6, 8, 10];
        var newArr = arr.shift()
        console.log(newArr)//2
```

## 9:sort()

按升序排列数组项——即最小的值位于最前面，最大的值排在最后面。

在排序时，sort()方法会调用每个数组项的 toString()转型方法，然后比较得到的字符串，以确定如何排序。即使数组中的每一项都是数值， sort()方法比较的也是字符串，因此会出现以下的这种情况：

```javascript
var arr1 = [“a”, “d”, “c”, “b”];
console.log(arr1.sort()); // [“a”, “b”, “c”, “d”]
arr2 = [13, 24, 51, 3];
console.log(arr2.sort()); // [13, 24, 3, 51]
console.log(arr2); // 13, 24, 3, 51
```

为了解决上述问题，sort()方法可以接收一个比较函数作为参数，以便我们指定哪个值位于哪个值的前面。比较函数接收两个参数，如果第一个参数应该位于第二个之前则返回一个负数，如果两个参数相等则返回 0，如果第一个参数应该位于第二个之后则返回一个正数。以下就是一个简单的比较函数：

```javascript
 arr2 = [13, 24, 51, 3];
        console.log(arr2.sort(function(num1, num2) {
            if (num1 > num2) {
                return 1;
            } else if (num1 < num2) {
                return -1;

            } else {
                return 0;
            }//[3, 13, 24, 51]
```

如果需要通过比较函数产生降序排序的结果，只要交换比较函数返回的值即可：

```javascript
function compare(value1, value2) {
  if (value1 < value2) {
    return 1;
  } else if (value1 > value2) {
    return -1;
  } else {
    return 0;
  }
}
arr2 = [13, 24, 51, 3];
console.log(arr2.sort(compare)); // [51, 24, 13, 3]
```

## 10:reverse()：

反转数组项的顺序。

```javascript
var arr = [13, 24, 51, 3];
console.log(arr.reverse()); //[3, 51, 24, 13]
```

## 11:concat()

将参数添加到原数组中。这个方法会先创建当前数组一个副本，然后将接收到的参数添加到这个副本的末尾，最后返回新构建的数组。在没有给 concat()方法传递参数的情况下，它只是复制当前数组并返回副本。

```javascript
var arr = [1, 3, 5, 7];
var arrCopy = arr.concat(9, [11, 13]);
console.log(arrCopy); //[1, 3, 5, 7, 9, 11, 13]
console.log(arr); // 1, 3, 5, 7
```

从上面测试结果可以发现：传入的不是数组，则直接把参数添加到数组后面，如果传入的是数组，则将数组中的各个项添加到数组中。但是如果传入的是一个二维数组呢？

```javascript
var arrCopy2 = arr.concat([9, [11, 13]]);
console.log(arrCopy2); //[1, 3, 5, 7, 9, Array[2]]
console.log(arrCopy2[5]); //[11, 13]
```

上述代码中，arrCopy2 数组的第五项是一个包含两项的数组，也就是说 concat 方法只能将传入数组中的每一项添加到数组中，如果传入数组中有些项是数组，那么也会把这一数组项当作一项添加到 arrCopy2 中。

## 12:slice()

返回从原数组中指定开始下标到结束下标之间的项组成的新数组**。slice()方法可以接受一或两个参数，即要返回项的起始和结束位置。在只有一个参数的情况下， slice()方法返回从该参数指定位置开始到当前数组末尾的所有项。如果有两个参数，该方法返回起始和结束位置之间的项——但**不包括结束位置的项。\*\*

```javascript
var arr = [1, 3, 5, 7, 9, 11];
var arrCopy = arr.slice(1);
var arrCopy2 = arr.slice(1, 4);
var arrCopy3 = arr.slice(1, -2);
var arrCopy4 = arr.slice(-4, -1);
console.log(arr); //1, 3, 5, 7, 9, 11
console.log(arrCopy); //[3, 5, 7, 9, 11]
console.log(arrCopy2); //[3, 5, 7]
console.log(arrCopy3); //[3, 5, 7]
console.log(arrCopy4); //[5, 7, 9]
```

arrCopy 只设置了一个参数，也就是起始下标为 1，所以返回的数组为下标 1（包括下标 1）开始到数组最后。 arrCopy2 设置了两个参数，返回起始下标（包括 1）开始到终止下标（不包括 4）的子数组。 arrCopy3 设置了两个参数，终止下标为负数，当出现负数时，将负数加上数组长度的值（6）来替换该位置的数，因此就是从 1 开始到 4（不包括）的子数组。 arrCopy4 中两个参数都是负数，所以都加上数组长度 6 转换成正数，因此相当于 slice(2,5)。

## 13:splice()

很强大的数组方法，它有很多种用法，可以实现删除、插入和替换。

删除：可以删除任意数量的项，只需指定 2 个参数：要删除的第一项的位置和要删除的项数。例如， splice(0,2)会删除数组中的前两项。

插入：可以向指定位置插入任意数量的项，只需提供 3 个参数：起始位置、 0（要删除的项数）和要插入的项。例如，splice(2,0,4,6)会从当前数组的位置 2 开始插入 4 和 6。替换：可以向指定位置插入任意数量的项，且同时删除任意数量的项，只需指定 3 个参数：起始位置、要删除的项数和要插入的任意数量的项。插入的项数不必与删除的项数相等。例如，splice (2,1,4,6)会删除当前数组位置 2 的项，然后再从位置 2 开始插入 4 和 6。

**splice()方法始终都会返回一个数组**，该数组中包含从原始数组中删除的项，如果没有删除任何项，则返回一个空数组。

```javascript
var arr = [1, 3, 5, 7, 9, 11];
var arrRemoved = arr.splice(0, 2);
console.log(arr); //[5, 7, 9, 11]
console.log(arrRemoved); //[1, 3]
var arrRemoved2 = arr.splice(2, 0, 4, 6);
console.log(arr); // [5, 7, 4, 6, 9, 11]
console.log(arrRemoved2); // []
var arrRemoved3 = arr.splice(1, 1, 2, 4);
console.log(arr); // [5, 2, 4, 4, 6, 9, 11]
console.log(arrRemoved3); //[7]
```

## 14:indexOf()和 lastIndexOf()

indexOf()：接收两个参数：要查找的项和（可选的）表示查找起点位置的索引。其中， 从数组的开头（位置 0）开始向后查找。 lastIndexOf：接收两个参数：要查找的项和（可选的）表示查找起点位置的索引。其中， 从数组的末尾开始向前查找。

这两个方法都返回要查找的项在数组中的位置，或者在没找到的情况下返回-1 比较第一个参数与数组中的每一项时，会使用**全等**操作符。

```javascript
var arr = [1,3,5,7,7,5,3,1];
console.log(arr.indexOf(5)); //2
console.log(arr.lastIndexOf(5)); //5
console.log(arr.indexOf(5,2)); //2
console.log(arr.lastIndexOf(5,4)); //2
console.log(arr.indexOf(“5”)); //-1
```

## 15:every()

判断数组中每一项都是否满足条件，只有所有项都满足条件，才会返回 true。

```javascript
var arr = [1, 2, 3, 4, 5];
var arr2 = arr.every(function (x) {
  return x < 10;
});
console.log(arr2); //true
var arr3 = arr.every(function (x) {
  return x < 3;
});
console.log(arr3); // false
```

## 16:some()

判断数组中是否存在满足条件的项，只要有一项满足条件，就会返回 true。

```javascript
var arr = [1, 2, 3, 4, 5];
var arr2 = arr.some(function (x) {
  return x < 3;
});
console.log(arr2); //true
var arr3 = arr.some(function (x) {
  return x < 1;
});
console.log(arr3); // false
```
