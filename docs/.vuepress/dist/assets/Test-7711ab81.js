import{_ as b,r as g,M as d,p as a,q as c,Q as i,v as f,N as u,V as s,t as v,O as y,P as h,z as x}from"./framework-375afed4.js";function O(n){if(n.__esModule)return n;var e=n.default;if(typeof e=="function"){var t=function o(){if(this instanceof o){var r=[null];r.push.apply(r,arguments);var l=Function.bind.apply(e,r);return new l}return e.apply(this,arguments)};t.prototype=e.prototype}else t={};return Object.defineProperty(t,"__esModule",{value:!0}),Object.keys(n).forEach(function(o){var r=Object.getOwnPropertyDescriptor(n,o);Object.defineProperty(t,o,r.get?r:{enumerable:!0,get:function(){return n[o]}})}),t}const j={},w=Object.freeze(Object.defineProperty({__proto__:null,default:j},Symbol.toStringTag,{value:"Module"})),C=O(w);/**
 * Wrapper for built-in http.js to emulate the browser XMLHttpRequest object.
 *
 * This can be used with JS designed for browsers to improve reuse of code and
 * allow the use of existing libraries.
 *
 * Usage: include("XMLHttpRequest.js") and use XMLHttpRequest per W3C specs.
 *
 * @author Dan DeFelippi <dan@driverdan.com>
 * @contributor David Ellis <d.f.ellis@ieee.org>
 * @license MIT
 */C.spawn;const T={class:"card-header"},B={__name:"Test",setup(n){let e=g([]);const t=()=>{e.value.push(111)},o=()=>{e.value.length--};return t(),(r,l)=>{const _=d("el-button"),m=d("el-card");return a(),c(y,null,[i("div",null,f(r.count),1),u(m,{class:"box-card"},{header:s(()=>[i("div",T,[u(_,{type:"success",onClick:t},{default:s(()=>[v("加一条")]),_:1}),u(_,{type:"danger",onClick:o},{default:s(()=>[v("删一条")]),_:1})])]),default:s(()=>[(a(!0),c(y,null,h(x(e),p=>(a(),c("div",{key:p,class:"text item"},f(p),1))),128))]),_:1})],64)}}},P=b(B,[["__scopeId","data-v-f559cc6e"],["__file","Test.vue"]]);export{P as default};
