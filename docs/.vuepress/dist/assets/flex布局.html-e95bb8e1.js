import{_ as e,M as l,p,q as d,Q as n,N as a,a1 as s}from"./framework-7aa8fa41.js";const r={},i=s('<h2 id="_1-布局原理" tabindex="-1"><a class="header-anchor" href="#_1-布局原理" aria-hidden="true">#</a> 1 ： 布局原理</h2><p>通过给 父盒子 添加 flex 属性，来控制子盒子的位置和排列方式。</p><h2 id="_2-flex-布局父亲项常用属性" tabindex="-1"><a class="header-anchor" href="#_2-flex-布局父亲项常用属性" aria-hidden="true">#</a> 2 ：flex 布局父亲项常用属性</h2><h3 id="_1-flex-direction" tabindex="-1"><a class="header-anchor" href="#_1-flex-direction" aria-hidden="true">#</a> 1：flex-direction</h3><p>设置主轴方向</p><table><thead><tr><th>属性值</th><th>说明</th></tr></thead><tbody><tr><td>row</td><td>默认值从左到右</td></tr><tr><td>row-reverse</td><td>从右到左</td></tr><tr><td>column</td><td>从上到下</td></tr><tr><td>column-reverse</td><td>从下到上</td></tr></tbody></table>',6),o={href:"https://imgse.com/i/pSW0jgg",target:"_blank",rel:"noopener noreferrer"},c=n("img",{src:"https://s1.ax1x.com/2023/02/09/pSW0jgg.md.png",alt:"pSW0jgg.md.png"},null,-1),u=s(`<div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>flex<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span><span class="token punctuation">&gt;</span></span> 1 <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span><span class="token punctuation">&gt;</span></span> 2 <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span><span class="token punctuation">&gt;</span></span> 3 <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">&gt;</span></span><span class="token style"><span class="token language-css">
  <span class="token selector">.flex</span> <span class="token punctuation">{</span>
    <span class="token property">display</span><span class="token punctuation">:</span> flex<span class="token punctuation">;</span>
    <span class="token property">background-color</span><span class="token punctuation">:</span> pink<span class="token punctuation">;</span>
    <span class="token property">width</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
    <span class="token property">height</span><span class="token punctuation">:</span> 500px<span class="token punctuation">;</span>
    <span class="token comment">/*flex-direction:column;*/</span>
  <span class="token punctuation">}</span>
  <span class="token selector">.flex span</span> <span class="token punctuation">{</span>
    <span class="token property">margin-left</span><span class="token punctuation">:</span> 10px<span class="token punctuation">;</span>
    <span class="token property">width</span><span class="token punctuation">:</span> 30%<span class="token punctuation">;</span>
    <span class="token property">height</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
    <span class="token property">background-color</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),h={href:"https://imgse.com/i/pSWBE2F",target:"_blank",rel:"noopener noreferrer"},g=n("img",{src:"https://s1.ax1x.com/2023/02/09/pSWBE2F.md.png",alt:"pSWBE2F.md.png"},null,-1),f=s('<h3 id="_2-justify-content" tabindex="-1"><a class="header-anchor" href="#_2-justify-content" aria-hidden="true">#</a> 2 : justify-content</h3><p>设置主轴上的元素的排列方式</p><table><thead><tr><th>属性值</th><th>说明</th></tr></thead><tbody><tr><td>flex-start</td><td>默认值从头开始，如果主轴是 x 轴，则水平向右</td></tr><tr><td>flex-end</td><td>从尾部开始</td></tr><tr><td>center</td><td>在主轴居中对齐</td></tr><tr><td>space-around</td><td>平分剩余空间</td></tr><tr><td>space-between</td><td>先两边贴边在平分剩余空间</td></tr></tbody></table>',3),m={href:"https://imgse.com/i/pSWBDG8",target:"_blank",rel:"noopener noreferrer"},x=n("img",{src:"https://s1.ax1x.com/2023/02/09/pSWBDG8.md.png",alt:"pSWBDG8.md.png"},null,-1),b=s('<h3 id="_3-flex-wrap" tabindex="-1"><a class="header-anchor" href="#_3-flex-wrap" aria-hidden="true">#</a> 3 : flex-wrap</h3><p>设置子元素是否换行（默认不会换行，不够装不开就缩小盒子）</p><table><thead><tr><th>属性</th><th>说明</th></tr></thead><tbody><tr><td>nowrap</td><td>默认值不换行</td></tr><tr><td>wrap</td><td>换行</td></tr></tbody></table><h3 id="_4-align-items" tabindex="-1"><a class="header-anchor" href="#_4-align-items" aria-hidden="true">#</a> 4：align-items</h3><p>设置侧轴上子元素的排列方式（若 x 为主轴则侧轴为 y）（适合单行，多行时由于align-content: stretch 作怪，stretch 是默认值，将每行的布局自动拉伸间距如下图,此时就应该使用align-content）</p>',5),k={href:"https://imgse.com/i/ppnJ5y4",target:"_blank",rel:"noopener noreferrer"},v=n("img",{src:"https://s1.ax1x.com/2023/03/09/ppnJ5y4.md.png",alt:"ppnJ5y4.md.png",style:{zoom:"50%"}},null,-1),_=n("p",null,"下面是设置align-content：flex-start得到想要效果",-1),y={href:"https://imgse.com/i/ppnYpmd",target:"_blank",rel:"noopener noreferrer"},w=n("img",{src:"https://s1.ax1x.com/2023/03/09/ppnYpmd.md.png",alt:"ppnYpmd.md.png",style:{zoom:"50%"}},null,-1),S=s(`<table><thead><tr><th>属性</th><th>说明</th></tr></thead><tbody><tr><td>flex-start</td><td>默认值 从上到下</td></tr><tr><td>flex-end</td><td>从下到上</td></tr><tr><td>center</td><td>垂直居中</td></tr><tr><td>stretch</td><td>拉伸</td></tr></tbody></table><h3 id="_5-align-content" tabindex="-1"><a class="header-anchor" href="#_5-align-content" aria-hidden="true">#</a> 5: align-content</h3><p>设置侧轴上子元素的排列方式（适合多行在单下没有效果及单行<strong>flex-wrap:nowrap</strong>时不生效）</p><table><thead><tr><th>属性</th><th>说明</th></tr></thead><tbody><tr><td>flex-start</td><td>默认值在侧轴的头部排列</td></tr><tr><td>flex-end</td><td>在侧轴的尾部排列</td></tr><tr><td>center</td><td>在侧轴中间显示</td></tr><tr><td>space-around</td><td>子项在侧轴平分剩余空间</td></tr><tr><td>space-between</td><td>子项在侧轴先分布在两头，在平分剩余空间</td></tr><tr><td>stretch</td><td>设置子项元素高度平分父元素高度</td></tr></tbody></table><h3 id="_6-flex-flow" tabindex="-1"><a class="header-anchor" href="#_6-flex-flow" aria-hidden="true">#</a> 6 ：flex-flow</h3><p>（flex-direction 和 flex-wrap 的结合）</p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code>flex-flow：row wrap = flex-direction：row,flex-wrap:wrap
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="_3-flex-布局子项常见属性" tabindex="-1"><a class="header-anchor" href="#_3-flex-布局子项常见属性" aria-hidden="true">#</a> 3: flex 布局子项常见属性</h2><h3 id="_1-flex-属性" tabindex="-1"><a class="header-anchor" href="#_1-flex-属性" aria-hidden="true">#</a> 1 ：flex 属性</h3><p>定义子项分配剩余空间，用 flex 来表示占多少份</p><p>flex 属性是 flex-grow, flex-shrink 和 flex-basis 的简写，默认值为 0 1 auto。后两个属性可选。</p><p>该属性有两个快捷值：auto (1 1 auto) 和 none (0 0 auto)。</p><p>下图是第二个盒子设置了flex:1其他盒子默认所以当宽度不够时他会被缩小</p><p><strong>flex:1代表flex-grow:1,flex-shrink:1,flex-basis:0%</strong></p>`,14),q={href:"https://imgse.com/i/ppnYEp8",target:"_blank",rel:"noopener noreferrer"},W=n("img",{src:"https://s1.ax1x.com/2023/03/09/ppnYEp8.md.png",alt:"ppnYEp8.md.png"},null,-1),j=s(`<h3 id="_2-align-self" tabindex="-1"><a class="header-anchor" href="#_2-align-self" aria-hidden="true">#</a> 2 : align-self</h3><p>控制子项自己在侧轴的排列方式</p><h3 id="_3-order" tabindex="-1"><a class="header-anchor" href="#_3-order" aria-hidden="true">#</a> 3 ：order</h3><blockquote><p>在flex布局中，order属性用于控制子项的排列顺序。order的默认值为0，当你给一个子项设置order:1时，它会排列在所有order值为0或负数的子项之后。因此，这个子项会跑到最后而不是后移一位。</p></blockquote><p>属性定义子项自己的排列顺序（默认为 0 ）</p><h3 id="_4-flex-grow" tabindex="-1"><a class="header-anchor" href="#_4-flex-grow" aria-hidden="true">#</a> 4 ：flex-grow</h3><p>属性定义项目的放大比例，默认为 0 ，即如果存在剩余空间，也不放大。</p><blockquote><p>计算公式：所占大小=当前盒子设置的 flex 值/所有盒子设置的 flex-grow 值</p></blockquote><h3 id="_5-flex-shrink" tabindex="-1"><a class="header-anchor" href="#_5-flex-shrink" aria-hidden="true">#</a> 5 ：flex-shrink</h3><p>属性定义了项目的缩小比例，默认为 1 ，即如果空间不足，该项目将缩小。</p><blockquote><p>如果所有项目的 flex-shrink 属性都为 1 ， 当空间不足时 ，都将等比例缩小。如果一个项目的 flex-shrink 属性为 0 ，其他项目都为 1 ，则空间不足时，前者不缩小。负值对该属性无效。</p></blockquote><h3 id="_6-flex-basis" tabindex="-1"><a class="header-anchor" href="#_6-flex-basis" aria-hidden="true">#</a> 6 ：flex-basis</h3><p>属性定义了在分配多余空间之前，项目占据的主轴空间</p><p>浏览器根据这个属性，计算主轴是否有多余空间。它的默认值为 auto，即项目的本来大小。可设为固</p><p>定宽度将覆盖盒子本身宽度，也可设置百分比，占据总宽度的比列。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>height: 500px;
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
&lt;/style&gt;
&lt;div class=&quot;flex&quot;&gt;
&lt;span&gt; 1 &lt;/span&gt;
&lt;span&gt; 2 &lt;/span&gt;
&lt;span&gt; 3 &lt;/span&gt;
&lt;/div&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,16),B={href:"https://imgse.com/i/pSWDNSU",target:"_blank",rel:"noopener noreferrer"},E=n("img",{src:"https://s1.ax1x.com/2023/02/09/pSWDNSU.md.png",alt:"pSWDNSU.md.png"},null,-1);function N(D,Y){const t=l("ExternalLinkIcon");return p(),d("div",null,[i,n("p",null,[n("a",o,[c,a(t)])]),u,n("p",null,[n("a",h,[g,a(t)])]),f,n("p",null,[n("a",m,[x,a(t)])]),b,n("p",null,[n("a",k,[v,a(t)])]),_,n("p",null,[n("a",y,[w,a(t)])]),S,n("p",null,[n("a",q,[W,a(t)])]),j,n("p",null,[n("a",B,[E,a(t)])])])}const G=e(r,[["render",N],["__file","flex布局.html.vue"]]);export{G as default};
