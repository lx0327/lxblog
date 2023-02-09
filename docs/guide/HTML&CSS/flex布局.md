---
title: flex布局
---

## 1 ： 布局原理

通过给 父盒子 添加 flex 属性，来控制子盒子的位置和排列方式。

## 2 ：flex 布局父亲项常用属性

### 1：flex-direction

设置主轴方向

| 属性值         | 说明           |
| -------------- | -------------- |
| row            | 默认值从左到右 |
| row-reverse    | 从右到左       |
| column         | 从上到下       |
| column-reverse | 从下到上       |

[![pSW0jgg.md.png](https://s1.ax1x.com/2023/02/09/pSW0jgg.md.png)](https://imgse.com/i/pSW0jgg)

```html
<div class="flex">
  <span> 1 </span>
  <span> 2 </span>
  <span> 3 </span>
</div>
<style>
  .flex {
    display: flex;
    background-color: pink;
    width: 100%;
    height: 500px;
    /*flex-direction:column;*/
  }
  .flex span {
    margin-left: 10px;
    width: 30%;
    height: 100px;
    background-color: red;
  }
</style>
```

[![pSWBE2F.md.png](https://s1.ax1x.com/2023/02/09/pSWBE2F.md.png)](https://imgse.com/i/pSWBE2F)

### 2 : justify-content

设置主轴上的元素的排列方式

| 属性值        | 说明                                        |
| ------------- | ------------------------------------------- |
| flex-start    | 默认值从头开始，如果主轴是 x 轴，则水平向右 |
| flex-end      | 从尾部开始                                  |
| center        | 在主轴居中对齐                              |
| space-around  | 平分剩余空间                                |
| space-between | 先两边贴边在平分剩余空间                    |

[![pSWBDG8.md.png](https://s1.ax1x.com/2023/02/09/pSWBDG8.md.png)](https://imgse.com/i/pSWBDG8)

### 3 : flex-wrap

设置子元素是否换行（默认不会换行，不够装不开就缩小盒子）

| 属性   | 说明         |
| ------ | ------------ |
| nowrap | 默认值不换行 |
| wrap   | 换行         |

### 4 ：align-items

设置侧轴上子元素的排列方式（若 x 为主轴则侧轴为 y）（适合单行）

| 属性       | 说明            |
| ---------- | --------------- |
| flex-start | 默认值 从上到下 |
| flex-end   | 从下到上        |
| center     | 垂直居中        |
| stretch    | 拉伸            |

### 5: align-content

设置侧轴上子元素的排列方式（适合多行在单下没有效果）

| 属性          | 说明                                   |
| ------------- | -------------------------------------- |
| flex-start    | 默认值在侧轴的头部排列                 |
| flex-end      | 在侧轴的尾部排列                       |
| center        | 在侧轴中间显示                         |
| space-around  | 子项在侧轴平分剩余空间                 |
| space-between | 子项在侧轴先分布在两头，在平分剩余空间 |
| stretch       | 设置子项元素高度平分父元素高度         |

### 6 ：flex-flow

（flex-direction 和 flex-wrap 的结合）

## 3: flex 布局子项常见属性

### 1 ：flex 属性

定义子项分配剩余空间，用 flex 来表示占多少份

flex 属性是 flex-grow, flex-shrink 和 flex-basis 的简写，默认值为 0 1 auto。后两个属性可选。

该属性有两个快捷值：auto (1 1 auto) 和 none (0 0 auto)。

```
flex-flow：row wrap = flex-direction：row,flex-wrap:wrap
<style>
.flex {
display: flex;
background-color: pink;
width: 100%;
```

### 2: align-self

控制子项自己在侧轴的排列方式

### 3 ：order

属性定义子项自己的排列顺序（默认为 0 ，负数往前移动反之后移）

### 4 ：flex-grow

属性定义项目的放大比例，默认为 0 ，即如果存在剩余空间，也不放大。

计算公式：所占大小=当前盒子设置的 flex 值/所有盒子设置的 flex-grow 值

### 5 ：flex-shrink

属性定义了项目的缩小比例，默认为 1 ，即如果空间不足，该项目将缩小。

如果所有项目的 flex-shrink 属性都为 1 ， 当空间不足时 ，都将等比例缩小。如果一个项目的 flex-shrink 属性为 0 ，其他项目都为 1 ，则空间不足时，前者不缩小。负值对该属性无效。

### 6 ：flex-basis

属性定义了在分配多余空间之前，项目占据的主轴空间

浏览器根据这个属性，计算主轴是否有多余空间。它的默认值为 auto，即项目的本来大小。可设为固

定宽度将覆盖盒子本身宽度，也可设置百分比，占据总宽度的比列。

```
height: 500px;
flex-direction: row;
/* justify-content: flex-start; */
/* justify-content: flex-end; */
/* justify-content: center; */
justify-content: space-between;
align-items: center;
}
.flex span {
flex: 1 ;
}
.flex :nth-child( 2 ) {
flex: 3 ;
}
</style>
<div class="flex">
<span> 1 </span>
<span> 2 </span>
<span> 3 </span>
</div>
```

[![pSWDNSU.md.png](https://s1.ax1x.com/2023/02/09/pSWDNSU.md.png)](https://imgse.com/i/pSWDNSU)
