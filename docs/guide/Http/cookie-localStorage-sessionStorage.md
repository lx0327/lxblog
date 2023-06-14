---
title: Cookie/LocalStorage/SessionStorage
---

## 生命周期

- cookie：可设置失效时间，没有设置的话，默认是关闭浏览器后失效
- localStorage：除非被手动清除，否则将会永久保存。
- sessionStorage： 仅在当前网页会话下有效，关闭页面或浏览器后就会被清除。

## 存放数据大小

- cookie：4KB 左右
- localStorage 和 sessionStorage：可以保存 5MB 的信息。

## http 请求

- cookie：每次都会携带在 HTTP 头中，如果使用 cookie 保存过多数据会带来性能问题
- localStorage 和 sessionStorage：仅在客户端（即浏览器）中保存，不参与和服务器的通信

## 应用场景

从安全性来说，因为每次 http 请求都会携带 cookie 信息，这样无形中浪费了带宽，所以 cookie 应该尽可能少的使用，另外 cookie 还需要指定作用域，不可以跨域调用（当前页面只能读取页面所在域的 `cookie`，即 `document.cookie` ），限制比较多。但是用来识别用户登录来说，cookie 还是比 storage 更好用的。其他情况下，可以使用 storage，就用 storage。
localStorage 和 sessionStorage 唯一的差别一个是永久保存在浏览器里面，一个是关闭网页就清除了信息。localStorage 可以用来夸页面传递参数，sessionStorage 用来保存一些临时的数据，防止用户刷新页面之后丢失了一些参数。
