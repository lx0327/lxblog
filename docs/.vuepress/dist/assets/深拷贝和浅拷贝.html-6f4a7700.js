import{_ as n,p as s,q as a,a1 as t}from"./framework-375afed4.js";const o={},p=t(`<h2 id="_1-理解" tabindex="-1"><a class="header-anchor" href="#_1-理解" aria-hidden="true">#</a> 1：理解</h2><p>浅拷贝和深拷贝都是创建一份数据的拷贝。 js 分为原始类型和引用类型，对于原始类型的拷贝，并没有深浅拷贝的区别，我们讨论的深浅拷贝都只针对引用类型。</p><p>浅拷贝和深拷贝都复制了值和地址，都是为了解决引用类型赋值后互相影响的问题。</p><p>但是浅拷贝只进行一层复制，深层次的引用类型还是共享内存地址，原对象和拷贝对象还是会互相影响。</p><p>深拷贝就是无限层级拷贝，深拷贝后的原对象不会和拷贝对象互相影响。</p><h2 id="_2-实现浅拷贝方法" tabindex="-1"><a class="header-anchor" href="#_2-实现浅拷贝方法" aria-hidden="true">#</a> 2：实现浅拷贝方法</h2><p>1:for in 循环</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">simpleClone</span><span class="token punctuation">(</span><span class="token parameter">initalObj</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">var</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">var</span> i <span class="token keyword">in</span> initalObj<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    obj<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> initalObj<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> obj<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">var</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">a</span><span class="token operator">:</span> <span class="token string">&quot;hello&quot;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">b</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">a</span><span class="token operator">:</span> <span class="token string">&quot;world&quot;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">b</span><span class="token operator">:</span> <span class="token number">21</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">c</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;Bob&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;Tom&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;Jenny&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token function-variable function">d</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">&quot;hello world&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> cloneObj <span class="token operator">=</span> <span class="token function">simpleClone</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span><span class="token punctuation">;</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>cloneObj<span class="token punctuation">.</span>a<span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>cloneObj<span class="token punctuation">.</span>b<span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>cloneObj<span class="token punctuation">.</span>c<span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>cloneObj<span class="token punctuation">.</span>d<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">//更改拷贝对象中的a,b,c,d，看看源对象是否变化</span>
cloneObj<span class="token punctuation">.</span>a <span class="token operator">=</span> <span class="token string">&quot;changed&quot;</span><span class="token punctuation">;</span>
cloneObj<span class="token punctuation">.</span>b<span class="token punctuation">.</span>a <span class="token operator">=</span> <span class="token string">&quot;changed&quot;</span><span class="token punctuation">;</span>
cloneObj<span class="token punctuation">.</span>b<span class="token punctuation">.</span>b <span class="token operator">=</span> <span class="token number">25</span><span class="token punctuation">;</span>
cloneObj<span class="token punctuation">.</span>c <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
cloneObj<span class="token punctuation">.</span><span class="token function-variable function">d</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">&quot;changed&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>obj<span class="token punctuation">.</span>a<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//hello</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>obj<span class="token punctuation">.</span>b<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//{a:&quot;changed&quot;,b:25},事实上就是只有对象是拷贝的引用类型</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>obj<span class="token punctuation">.</span>c<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//[&#39;Bob&#39;,&#39;Tom&#39;,&#39;Jenny&#39;]</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>obj<span class="token punctuation">.</span>d<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//...alert(&quot;hello world&quot;)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>2：Object.assign</p><pre><code>var obj1 = {
    a: &quot;hello&quot;,
    b: {
        a: &quot;hello&quot;,
        b: 21}
};

var cloneObj1= Object.assign({}, obj1);
cloneObj1.a = &quot;changed&quot;;
cloneObj1.b.a = &quot;changed&quot;;
console.log(obj1.a);  //hello
console.log(obj.b.a); // &quot;changed&quot;
</code></pre><h2 id="_3-深拷贝的实现方式" tabindex="-1"><a class="header-anchor" href="#_3-深拷贝的实现方式" aria-hidden="true">#</a> 3：深拷贝的实现方式</h2><p>1、对象只有一层的话可以使用上面的：Object .assign()函数</p><p>Object .assign({}, obj1)的意思是先建立一个空对象{}，接着把 obj1 中所有的属性复制过去，所以 obj2 会长得跟 obj1 一样，这时候再修改 obj2.b 也不会影响 obj1。</p><p>因为 Object .assign 跟我们手动复制的效果相同，所以一样只能处理深度只有一层的对象，没办法做到真正的 Deep Copy。不过如果要复制的对象只有一层的话可以考虑使用它。</p><p>2、转成 JSON 再转回来</p><pre><code>var obj1 = { body: { a: 10 } };
var obj2 = JSON.parse(JSON.stringify(obj1));
obj2.body.a = 20;
console.log(obj1);
// { body: { a: 10 } } &lt;-- 沒被改到
console.log(obj2);
// { body: { a: 20 } }
console.log(obj1 === obj2);
// false
console.log(obj1.body === obj2.body);
// false
</code></pre><p>但是这种方法也有不少坏处</p><ol><li><p>它会抛弃对象的 constructor。也就是深拷贝之后，不管这个对象原来的构造函数是什么，在深拷贝之后都会变成 Object。</p></li><li><p>Date 对象, RegExp 对象, Error 对象等是无法通过这种方式深拷贝。这种方法能正确处理的对象只有 Number, String, Boolean, Array, 扁平对象，即那些能够被 json 直接表示的数据结构。</p></li><li><p>如果原对象中有值为 undefined 的情况, JSON.stringify 后会丢失</p></li><li><p>如果 obj 里有 NaN、Infinity 和-Infinity，则序列化的结果会变成 null</p></li></ol><p>也就是说，只有可以转成 JSON 格式的对象才可以这样用，像 function 没办法转成 JSON。</p><h2 id="_3-深拷贝实现完整版本" tabindex="-1"><a class="header-anchor" href="#_3-深拷贝实现完整版本" aria-hidden="true">#</a> 3:深拷贝实现完整版本</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>function deepClone (target) {
  if (target === null) return target // 处理 null
  if (target instanceof Date) return new Date(target) // 处理日期
  if (target instanceof RegExp) return new RegExp(target) // 处理正则

  if (typeof target !== &#39;object&#39;) return target // 处理原始类型

  // 处理对象和数组
  const cloneTarget = new target.constructor() // 创建一个新的克隆对象或克隆数组
  for (const key in target) { // 递归拷贝每一层
    cloneTarget[key] = deepClone(target[key])
  }
  return cloneTarget
}


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,21),e=[p];function c(l,i){return s(),a("div",null,e)}const r=n(o,[["render",c],["__file","深拷贝和浅拷贝.html.vue"]]);export{r as default};
