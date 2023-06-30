import{_ as e,p as n,q as r,a1 as i}from"./framework-375afed4.js";const t={},s=i(`<h2 id="_1-概念" tabindex="-1"><a class="header-anchor" href="#_1-概念" aria-hidden="true">#</a> 1：概念</h2><p>“ 导航 ” 表示路由正在发生变化 vue - router 提供的导航守卫主要用来通过跳转或取消的方式守卫导航。<strong>就是在路由跳转时加一些判断操作啥的</strong>，导航守卫：包括 <strong>全局导航守卫</strong> 和 <strong>局部导航守卫</strong></p><h2 id="_2-全局守卫" tabindex="-1"><a class="header-anchor" href="#_2-全局守卫" aria-hidden="true">#</a> 2：全局守卫</h2><p><strong>vue-router</strong> 全局有三个守卫</p><p><strong>router.beforeEach</strong>：全局前置守卫，进入路由之前</p><p><strong>router.beforeResolve</strong>：全局解析守卫，在 beforeRouteEnter 调用之后调用（不常用）</p><p><strong>router.afterEach</strong> ：全局后置钩子，进入路由之后</p><p><strong>全局前置钩子</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>
router.beforeEach((to, from, next) =&gt; {
// to和from都是路由实例
// to：即将跳转到的路由
// from：现在的要离开的路由
// next：函数
})
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>next: Function :</strong> 一定要调用该方法来 resolve 这个钩子。执行效果依赖 next 方法的调用参数。</p><p><strong>next() :</strong> 进行管道中的下一个钩子。如果全部钩子执行完了，则导航的状态就是 confirmed (确认的)。</p><p><strong>next(false) :</strong> 中断当前的导航。如果浏览器的 URL 改变了 (可能是用户手动或者浏览器后退按钮)，那么 URL 地址会重置到 from 路由对应的地址。</p><p><strong>next(&#39;/&#39;)</strong> 或者<strong>next({ path: &#39;/&#39; }) :</strong> 跳转到一个不同的地址。当前的导航被中断，然后进行一个新的导航。你可以向 next 传递任意位置对象，且允许设置诸如 replace: true 、 name: &#39;home&#39; 之类的选项以及任何用在 router-link 的 to prop 或 router.push 中的选项。</p><p><strong>next(error)</strong> : (2.4.0+) 如果传入 next 的参数是一个 Error 实例，则导航会被终止且该错误会 被传递给 router.onError() 注册过的回调。</p><p><strong>注意</strong>：如果是 next(&#39;/&#39;) 或者 next({ path: &#39;/&#39; }) ，只要带了要放行的路径，那么前面必须有判断，在什么时候给他放行，不然他会一直循环。</p><p><strong>全局后置钩子</strong></p><p>你也可以注册全局后置钩子，然而和守卫不同的是，这些钩子不会接受 next 函数也不会改变导航本身：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>// 全局后置钩子
 router.afterEach((to,form) =&gt; { })
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3-路由独享的守卫" tabindex="-1"><a class="header-anchor" href="#_3-路由独享的守卫" aria-hidden="true">#</a> 3：<strong>路由独享的守卫</strong></h2><p>如果不想在全局配置路由的话，可以为某些路由单独配置守卫</p><p>比如：给 mainpage 页面单独配置守卫</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>{
path: &#39;/mainpage&#39;,
name: &#39;About&#39;,
component: About, // 路由独享守卫
beforeEnter:(to,from,next) =&gt; {
 if(from.name === &#39;About&#39;){ alert(&quot;这是从about来的&quot;)
   }else{
 alert(&quot;这不是从about来的&quot;)
   }next(); // 必须调用来进行下一步操作。否则是不会跳转的
 }
}
},
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_4-组件内的守卫" tabindex="-1"><a class="header-anchor" href="#_4-组件内的守卫" aria-hidden="true">#</a> <strong>4:组件内的守卫</strong></h2><p>最后，你可以在路由组件内直接定义以下路由导航守卫：</p><ul><li>beforeRouteEnter()：进入路由前</li><li>beforeRouteUpdate()：路由复用同一个组件时</li><li>beforeRouteLeave()：离开当前路由时</li></ul><p>在 Product 中举个例子</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>export default {
// 组件内守卫beforeRouteUpdate被触发的条件是：当前路由改变，但是该组件被复用的时候。
比如说：product/orders到product/cart这个路由，都复用了 Product.vue 这个组件，这个时候
beforeRouteUpdate就会被触发。可以获取到this实例。

// 因为这个钩子调用的时候，组件实例还没有被创建出来，因此获取不到this
beforeRouteEnter (to, from, next) {
console.log(to.name);
// 如果想获取到实例的话
// next(vm=&gt;{
// // 这里的vm是组件的实例（this）
// });
next();
},
beforeRouteUpdate(to,from,next){
console.log(to.name, from.name);
next();
},
// 路由即将要离开的时候调用此方法
// 比如说，用户编辑了一个东西，但是还么有保存，这时候他要离开这个页面，就要提醒他一下，还没保
存，是否要离开
beforeRouteLeave (to, from, next) {
const leave = confirm(&quot;确定要离开吗？&quot;);
if(leave) next() // 离开
else next(false) // 不离开
},
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_5-一个完整的导航解析流程" tabindex="-1"><a class="header-anchor" href="#_5-一个完整的导航解析流程" aria-hidden="true">#</a> 5:一个完整的导航解析流程</h2><p>1 、导航被触发。</p><p>2 、在失活的组件（即将离开的页面组件）里调用离开守卫。 beforeRouteLeave</p><p>3 、调用全局的 beforeEach 守卫。</p><p>4 、在重用的组件里调用 beforeRouteUpdate 守卫 ( 2.2 +) 。</p><p>5 、在路由配置里调用（路由独享的守卫） beforeEnter 。</p><p>6 、解析异步路由组件</p><p>7 、在被激活的组件（即将进入的页面组件）里调用 beforeRouteEnter 。</p><p>8 、调用全局的 beforeResolve 守卫 ( 2.5 +) 。</p><p>9 、导航被确认。</p><p>10 、调用全局的 afterEach 钩子。所有的钩子都触发完了。</p><p>11 、触发 DOM 更新。</p><p>12 、用创建好的实例调用 beforeRouteEnter 守卫中传给 next 的回调函数。</p>`,40),a=[s];function d(o,l){return n(),r("div",null,a)}const u=e(t,[["render",d],["__file","导航守卫.html.vue"]]);export{u as default};
