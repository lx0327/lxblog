import{_ as n,p as e,q as i,a1 as s}from"./framework-204010b2.js";const t={},l=s(`<h2 id="_1-防抖" tabindex="-1"><a class="header-anchor" href="#_1-防抖" aria-hidden="true">#</a> 1：防抖：</h2><p>高频率触发的事件,在指定的单位时间内，只响应最后一次，如果在指定的时间在触发，则重新计算时间(后面触发的事件执行，替代了前面的事件)</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;body&gt;
    &lt;button id=&quot;btn&quot;&gt;防抖&lt;/button&gt;
    &lt;script&gt;
        function debounce(fn, time) {
            let timeout = null; // 创建一个标记用来存放定时器的返回值
            return function() {
                clearTimeout(timeout); // 每当函数调用的时候把前一个 setTimeout clear 掉
                timeout = setTimeout(() =&gt; { // 然后又创建一个新的 setTimeout, 这样多次调用只会执行第一次
                    fn.apply(this, arguments); //arguments是传入的参数
                }, time);
            };
        }


        function sayHi() {
            console.log(&#39;防抖成功&#39;);
        }

        var btn = document.getElementById(&#39;btn&#39;);
        btn.addEventListener(&#39;click&#39;, debounce(sayHi, 2000)); // 防抖
        // inp.addEventListener(&#39;input&#39;, sayHi);
    &lt;/script&gt;
&lt;/body&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2-节流" tabindex="-1"><a class="header-anchor" href="#_2-节流" aria-hidden="true">#</a> 2：节流：</h2><p>高频率触发的事件,在指定的单位时间内，只响应第一次(前面触发的执行前，忽略后面的事件)</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;body&gt;
    &lt;script&gt;
        function throttle(fn, time) {
            let canRun = true; // 通过闭包保存一个标记
            return function() {
                if (!canRun) return; // 在函数开头判断标记是否为true，不为true则return
                canRun = false; // 立即设置为false
                setTimeout(() =&gt; { // 将外部传入的函数的执行放在setTimeout中
                    fn.apply(this, arguments);
                    // 最后在setTimeout执行完毕后再把标记设置为true(关键)表示可以执行下一次循环了。当定时器没有执行的时候标记永远是false，在开头被return掉
                    canRun = true;
                }, time);
            };
        }

        function sayHi(e) {
            console.log(&quot;节流&quot;);
        }
        window.addEventListener(&#39;resize&#39;, throttle(sayHi, 2000));
    &lt;/script&gt;
&lt;/body&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>防抖</strong>和<strong>节流</strong>的作用都是防止函数多次调用。区别在于，假设一个用户一直触发这个函数，且每次触发函数的间隔小于 wait，防抖的情况下只会调用一次，而节流的 情况会每隔一定时间（参数 wait）调用函数</p><p>防抖动和节流本质是不一样的。防抖动是将多次执行变为最后一次执行，节流是将多次执行变成每隔一段时间执行。</p>`,8),d=[l];function a(r,u){return e(),i("div",null,d)}const c=n(t,[["render",a],["__file","防抖和节流.html.vue"]]);export{c as default};
