---
title: 字符串API
---

# 1、slice

语法：slice（start，end）

关于这个方法，一定要搞懂四个关键点：

（1）截取字符串时不包括下标为 end 的元素。

（2）end 是可选参数，没有时，默认从 start 到结束的所有字符串。

（3）String.slice 与 Array.slice 区别。

（4）参数为负数时，是如何处理的。(**将字符串的长度与对应的负数相加，结果作为参数。**)

其中第 3 点其实就是在 JavaScript 中字符串和数组都具有这个方法，它们的返回结果形式不一样，一个是一段字符串，一个是一段浅复制后的数组。另外三个点接着往下看你就会明白。

## 2、substr

语法：substr（start，length）

关于这个方法，也需要搞懂几个关键点：

（1）第二个参数是子串中的字符数，必须是数值。可以没有。

（2）参数为负数时如何进行处理。(只会将第一个参数与字符串长度相加后的结果作为第一个参数（第一个参数为负数）)

由于 substr() 的参数指定的是子串的开始位置和长度，因此它可以替代 substring() 和 slice() 来使用。

## 3、substring

语法：substring（start，stop）

关于这个方法，同样需要搞懂几个关键点：

（1）返回的字符串中不包括 stop 处的字符。

（2）参数为负数时如何进行处理。(**直接将负参数直接转成 0。**)

（3）如果参数 start 与 stop 相等，那么该方法返回的就是一个空串（即长度为 0 的字符串）。

（4）如果 start 比 stop 大，那么该方法在提取子串之前会先交换这两个参数。

这个方法的作用同样可以使用 slice 方法来替代。

**在讲第四个方法之前，先来捋一捋上面这三个方法的区别和使用：**

（一）：都接收两个参数，slice 和 substring 接收的是起始位置和结束位置(注意：不包括结束位置)，而 substr 接收的则是起始位置和所要返回的字符串长度。

我想，下面这个例子足够说明这一点：

![String（字符串）：一切方法都在掌握之中](https://p1-tt.byteimg.com/origin/pgc-image/15315265718721f007b08c8?from=pc)

看一下控制台运行出来的结果，其中 slice/substring 都是从 0 开始截取 3 到 6 位置但不包括 6 位置的字符串"lo "，对比之下，substr 截取 3 位置之后的 6 个字符串"lo wor"。

（二）：需要注意 substring 是以两个参数中较小一个作为起始位置，较大的参数作为结束位置。

来，在控制台验证一下：

![String（字符串）：一切方法都在掌握之中](https://p6-tt.byteimg.com/origin/pgc-image/15315266461054a4d8c8bc4?from=pc)

上面这个（6，3）会默认变成（3，6）将小的当起始位置来处理。

接下来第三点很关键，一定要记清楚，虽然不常用，但用了就很容易出 BUG。

（三）：参数为负数时如何解析

substr：。

下面我来举个例子，因为有一个参数和两个参数的情况，所以，我得分别举两种情况的例子，把这个问题讲明白。

**第一，先看一个参数的情况：**

![String（字符串）：一切方法都在掌握之中](https://p1-tt.byteimg.com/origin/pgc-image/15315267203462e16b217f9?from=pc)

解释一下上面的结果：字符串长度是 11，（11-3=8），所以 slice（-3）和 substr（-3）从下标为 8 的字母开始。得到的结果就是"rld"。而 substring 直接将负数据转为 0，所以输出结果就是"hello world"。

**第二，看一下两个参数的情况：**

先回忆一下上面的定义：

slice：长度与负数相加作为参数。

substring：负数直接转为 0。

substr：仅将第一个参数与长度相加作为第一个参数。

![String（字符串）：一切方法都在掌握之中](https://p6-tt.byteimg.com/origin/pgc-image/1531526731799d7822bfcad?from=pc)

解释一下输出的结果：slice（3，11-4）就是从下标 3 截取到下标 7 的字符串，这里就是"lo w"。substring（3，0），其中-4 直接转成 0，所以由定义从下标 0 截取到 3，这里表示"hel"。最后一个 substr 第一个参数不是负数，第二个表示长度的参数为负数时，输出只能是空字符串。

## 4、split

语法：split（separator，howmany）

这个方法作用就是将一个字符串分割成字符串数组。

需要记住两个地方：

1、separator 可以是字符串或正则表达式。

2、howmany 可选参数，表示返回数组的最大长度。

举两个例子：

![String（字符串）：一切方法都在掌握之中](https://p6-tt.byteimg.com/origin/pgc-image/1531526857712a8aa42b704?from=pc)

上面 separator 是正则表达式的情况。

再来看一个拥有 howmany 参数的情况。

![String（字符串）：一切方法都在掌握之中](https://p1-tt.byteimg.com/origin/pgc-image/15315268701207812690f18?from=pc)

来阐述一下。split 方法把一个字符串 string 分割成片段创建一个字符串数组，可选参数 howmany 可以限制被分割的片段的数量。separator 参数可以是一个字符串或一个正则表达式。

# **二、其它字符串处理方法**

## **1、charAt（pos）**

返回指定位置（如上 pos）的字符。如果 pos 小于 0 或者大于等于字符串的长度 string.length，它会返回空字符串。

![String（字符串）：一切方法都在掌握之中](https://p1-tt.byteimg.com/origin/pgc-image/1531526960744d9d320b614?from=pc)

charAt 其实可以像下面这样实现：

![String（字符串）：一切方法都在掌握之中](https://p3-tt.byteimg.com/origin/pgc-image/15315269691041c617cf5a5?from=pc)

## 2、charCodeAt（pos）

和上面那个方法类似，只是它返回指定位置的字符的 Unicode 编码。这个返回值是 0 - 65535 之间的整数。

![String（字符串）：一切方法都在掌握之中](https://p3-tt.byteimg.com/origin/pgc-image/15315269780887c94f1a59e?from=pc)

## **3、concat（string...）**

用于连接两个或者多个字符串。相较于数组 Array.concat()。其实字符串到是用的不多，主要是之前使用加号（+）会更方便一些，新语法时一步优化字符串拼接的操作。

![String（字符串）：一切方法都在掌握之中](https://p3-tt.byteimg.com/origin/pgc-image/1531527283794770e02e136?from=pc)

## **4、indexOf（searchString，position）**

在 string 内查找另一个字符串 searchString。如果它被找到，就返回第 1 个匹配字符的位置，否则返回-1。

需要记住一点是：可选参数 position 可设置从 string 的某个指定的位置开始查找。

![String（字符串）：一切方法都在掌握之中](https://p1-tt.byteimg.com/origin/pgc-image/15315272930404580abe96a?from=pc)

上面最后一个输出，设置 position=4，让它从第 4 个位置开始查找，所以查到第二次出现 O 的位置是 11 。

## **5、lastIndexOf（searchString，position）**

与 indexOf 方法类似，只不过它是从该字符串的末尾开始查找而不是从开头。

总结就是，查找的方向是反的，顺序是正的。如下代码：

![String（字符串）：一切方法都在掌握之中](https://p3-tt.byteimg.com/origin/pgc-image/15315273049702c9a20239e?from=pc)

## **6、localeCompare（that）**

据官方给出的语法格式是： stringObject.localeCompare(target)，那么我们就从这个格式开始分析它的作用。

用来比较两个字符串，返回比较结果数字。如果 stringObject 小于 target，则 localeCompare() 返回小于 0 的数。如果 stringObject 大于 target，则该方法返回大于 0 的数。如果两个字符串相等，或根据本地排序规则没有区别，该方法返回 0。

所以，其实这个方法可以用比较中文是否相同，下面我举三段代码来看一下结果：

![String（字符串）：一切方法都在掌握之中](https://p1-tt.byteimg.com/origin/pgc-image/1531527378964464460ce6d?from=pc)

## **7、match（regexp）**

match 方法让字符串和一个正则表达式进行匹配。它依据 g 标识来决定如何进行匹配。如果没有 g 标识，那么调用 string.match(regexp)的结果与调用 regexp.exec(string)的结果相同。带 g 标识返回的是一个结果数组，具体如下代码所示：

![String（字符串）：一切方法都在掌握之中](https://p3-tt.byteimg.com/origin/pgc-image/1531527327297a12f0a39a2?from=pc)

## **8、replace（searchValue，replaceValue）**

作用：replace 方法对 string 进行查找和替换操作，并返回一个新的字符串。

取值：而参数 searchValue 可以是一个字符串或者一个正则表达式对象。

第一种情况：如果 searchValue 是一个字符串，那么 searchValue 只会在第 1 次出现 的地方被替换。

【举个例子】：

![String（字符串）：一切方法都在掌握之中](https://p6-tt.byteimg.com/origin/pgc-image/1531527597630d85ea84191?from=pc)

上面这例子就证明 searchValue 是一个字符串时，只会在第 1 次出现的地方被替换。

第二种情况：如果 searchValue 是一个正则表达式并且带有 g 标识，它会替换所有的匹配。如果没有带 g 标识，它会仅替换第 1 个匹配。

【举个例子】：

![String（字符串）：一切方法都在掌握之中](https://p3-tt.byteimg.com/origin/pgc-image/1531527606990f0287942a5?from=pc)

这个例子很简单，为的是说明 searchValue 为正则表达式时带 g 与不带 g 的情况。我先来简单解释一下上面这段代码：

首先，定义了一个 name 具有三段字符的字符串。

其次，serchValue 定义了一个正则表达式，其意义是：

\b：匹配单词边界，准确的说是表达独立部分，可以是起始，结束，空格。

\w+：表示多个字符组合( 字母 ，数字，下划线\_ )。

最后，如果不加 g 的话，如上，只匹配第一串字符。加了之后所有的都匹配了。

第三种情况：replaceValue 可以是一个字符串或一个函数，如果 replaceValue 是一个字符串，字符$拥有特殊的含义。

关于 replaceValue 是函数的情况，上面已经有一个例子了，但是等会我还会举一个经典例子来分析一下。

现在我们来看一下是字符串的情况下，$的特殊含义。先来看一个例子的结果，然后我再来解释一下每行代码的意义。

![String（字符串）：一切方法都在掌握之中](https://p3-tt.byteimg.com/origin/pgc-image/1531527623632b531e735a9?from=pc)

这个正则表达式也很简单，不过需要注意的一个地方是：**/[^"] / 和 /^["]/是不一样的，前者是排除的意思，后者是代表首位。**(有关正则表达式部分也没有什么难的，而且有一些在线的工具可以利用，下回我用一篇专门来写一下如何搞。)

其次就是讲一下$number-表示分组捕获的文本，即与 regexp 中的第 number 个子表达式相匹配的文本，后面这一句话比较是关键。上面那个例子$1 就代表前面 searchValue 正则所匹配的每一项内容。

然而，这个时候关于$0，$1，$2 等等，可能还不是很清楚，那么，我决定，再举一个更详细的例子来给大家讲一下。如下所示：

![String（字符串）：一切方法都在掌握之中](https://p3-tt.byteimg.com/origin/pgc-image/1531527639147f7141609d3?from=pc)

这个例子是不是可以直接将 2013-6-7 变成 2013.6.7 了，对的，直接在函数里面 return $1+‘.’。

$0：匹配成功后的整体结果（2013-，6-）。

$1：匹配成功后的第一个分组，这个例子中指的是\d（2013，6）。

$2：匹配成功后的第二个分组，这个例子中指的是-（- -）。

这样一搞，是不是就清晰多了？。好吧，不常用，用好也不容易，用好了才能才知道它有什么用，balabalabalabalabala。有关 replace 就说到这里。

## **9、search（regexp）**

**search 方法其实和 indexOf 方法有点类似。**这句话一定要理解。

返回：它只接受一个正则表达式对象作为参数而不是一个字符串。如果找到匹配，它返回第 1 个匹配的音字符位置，如果没有找到匹配，则返回-1。这个方法会忽略 g 标识，且没有 position 参数。

![String（字符串）：一切方法都在掌握之中](https://p1-tt.byteimg.com/origin/pgc-image/1531527783025aa1e072b27?from=pc)

上代码输出"的位置：17。绿色部分用来标识位置信息，当在 10 及以上时省略第一位显示。这样看是不是有点类似于 indexOf 的返回。

## **10、大小写转换**

ECMAScript 中涉及到字符串大小写转换的方法总共有 4 个。

**（1）toLowerCase()**

（2）toLocaleLowerCase()

**（3）toUpperCase()**

（4）toLocaleUpperCase()

1 和 3 比较经典，2 和 4 是针对特定地区的实现。

对有些地区来说，针对地区的方法与其通用方法得到的结果相同，但少数语言(如土耳其语言)会为 Unicode 大小写转换应用特殊的规则，这时候就必须使用针对地区的方法来保证实现正确的转换。

看一个例子：

![String（字符串）：一切方法都在掌握之中](https://p6-tt.byteimg.com/origin/pgc-image/1531527792350d89df98a3e?from=pc)

针对地区的方法和通用的方法输出结果是一样的，大部分情况都会这样，还是建议在不知道自己的代码将在那种语言环境中运行的情况下，还是使用针对地区的方法更稳妥一些。

## **11、fromCharCode（char...）**

用 w3c 上的定义，可接受一个指定的 Unicode 值，然后返回一个字符串。

举个例子吧：

![String（字符串）：一切方法都在掌握之中](https://p6-tt.byteimg.com/origin/pgc-image/1531527800816cbb5138e36?from=pc)
