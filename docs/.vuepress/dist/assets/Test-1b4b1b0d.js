import{_ as m,r as x,M as d,p as a,q as o,Q as u,v as p,N as n,V as t,t as i,O as v,P as g,z as y}from"./framework-375afed4.js";const k={class:"card-header"},C={__name:"Test",setup(T){let s=x([]);const c=()=>{var e=new XMLHttpRequest;console.log(e),e.open("get","https://v1.hitokoto.cn?c=f"),e.onreadystatechange=function(){if(e.readyState===4){var r=JSON.parse(e.responseText);s.value.push(r.hitokoto)}},e.send()},f=()=>{s.value.length--};return c(),(e,r)=>{const l=d("el-button"),h=d("el-card");return a(),o(v,null,[u("div",null,p(e.count),1),n(h,{class:"box-card"},{header:t(()=>[u("div",k,[n(l,{type:"success",onClick:c},{default:t(()=>[i("加一条")]),_:1}),n(l,{type:"danger",onClick:f},{default:t(()=>[i("删一条")]),_:1})])]),default:t(()=>[(a(!0),o(v,null,g(y(s),_=>(a(),o("div",{key:_,class:"text item"},p(_),1))),128))]),_:1})],64)}}},V=m(C,[["__scopeId","data-v-1d374d80"],["__file","Test.vue"]]);export{V as default};
