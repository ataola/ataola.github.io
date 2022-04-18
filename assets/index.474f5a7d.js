var q=Object.defineProperty,H=Object.defineProperties;var W=Object.getOwnPropertyDescriptors;var w=Object.getOwnPropertySymbols;var T=Object.prototype.hasOwnProperty,K=Object.prototype.propertyIsEnumerable;var b=(e,s,o)=>s in e?q(e,s,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[s]=o,x=(e,s)=>{for(var o in s||(s={}))T.call(s,o)&&b(e,o,s[o]);if(w)for(var o of w(s))K.call(s,o)&&b(e,o,s[o]);return e},B=(e,s)=>H(e,W(s));import{d as g,t as M,r as A,a as G,c as u,b as l,F as S,e as F,f as p,w as J,v as Q,p as E,g as L,h as m,o as c,i as h,j as f,k as C,l as y,m as U,T as I,n as D,K as X,q as Y,s as Z,u as ee,_ as te,x as k,y as oe,z as se,A as ne,B as ae,C as re,V as ce,D as ie,E as le}from"./vendor.b058a5b3.js";const ue=function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))r(t);new MutationObserver(t=>{for(const n of t)if(n.type==="childList")for(const a of n.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function o(t){const n={};return t.integrity&&(n.integrity=t.integrity),t.referrerpolicy&&(n.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?n.credentials="include":t.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function r(t){if(t.ep)return;t.ep=!0;const n=o(t);fetch(t.href,n)}};ue();const de="modulepreload",N={},_e="/",R=function(s,o){return!o||o.length===0?s():Promise.all(o.map(r=>{if(r=`${_e}${r}`,r in N)return;N[r]=!0;const t=r.endsWith(".css"),n=t?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${r}"]${n}`))return;const a=document.createElement("link");if(a.rel=t?"stylesheet":de,t||(a.as="script",a.crossOrigin=""),a.href=r,document.head.appendChild(a),t)return new Promise((_,i)=>{a.addEventListener("load",_),a.addEventListener("error",i)})})).then(()=>s())};var $=(e,s)=>{const o=e.__vccOpts||e;for(const[r,t]of s)o[r]=t;return o};const pe=g({name:"NavBar",props:{items:{type:Array,default:()=>[],required:!0}},setup(e,{emit:s,slots:o,attrs:r}){const t=M(e,"items"),n=A({isSearch:!1}),a=()=>{n.isSearch=!n.isSearch};return B(x({items:t},G(n)),{toggleSearch:a})}}),me=e=>(E("data-v-44cacc22"),e=e(),L(),e),he={class:"header"},fe=me(()=>l("div",{class:"logo"},null,-1)),ve={class:"nav"},ge={class:"nav-container"},ye=["href"],ke={key:2,class:"nav-dropdown"},$e=["href"],we={class:"search"},be={class:"search-box"},xe={type:"text",placeholder:"\u641C\u7D22...",class:"ipt-search"};function Be(e,s,o,r,t,n){const a=m("router-link"),_=m("font-awesome-icon");return c(),u("div",he,[fe,l("div",ve,[l("ul",ge,[(c(!0),u(S,null,F(e.items,i=>(c(),u("li",{key:i.value},[i.router?(c(),h(a,{key:0,to:{name:i.router},"active-class":"link-active"},{default:f(()=>[C(y(i.text),1)]),_:2},1032,["to"])):(c(),u("a",{key:1,href:i.link,target:"_blank"},y(i.text),9,ye)),i.children.length>0?(c(),u("ul",ke,[(c(!0),u(S,null,F(i.children,d=>(c(),u("li",{key:d.value},[d.router?(c(),h(a,{key:0,to:{name:d.router},"active-class":"link-active"},{default:f(()=>[C(y(d.text),1)]),_:2},1032,["to"])):(c(),u("a",{key:1,href:d.link,class:"link-active",target:"_blank"},y(d.text),9,$e))]))),128))])):U("",!0)]))),128))])]),l("div",we,[l("div",be,[p(_,{class:"icon-search",icon:["fas","search"],onClick:e.toggleSearch},null,8,["onClick"]),J(l("input",xe,null,512),[[Q,e.isSearch]])])])])}var O=$(pe,[["render",Be],["__scopeId","data-v-44cacc22"]]),Ae="/assets/qrcode.9820fc65.jpeg";const Se=g({name:"Footer"}),P=e=>(E("data-v-73d42434"),e=e(),L(),e),Fe={class:"footer"},Ee=P(()=>l("div",{class:"copyright"},"\xA92022 - present \u6C5F\u6D9B\u7F51 design by ataola with Vue3 | All Rights Reserved",-1)),Le={class:"contact"},Ce={class:"contact-item"},Ie={href:"https://cloud.tencent.com/developer/user/2705701",target:"_blank"},De=P(()=>l("img",{class:"contact-item-popup",src:Ae},null,-1));function Ne(e,s,o,r,t,n){const a=m("font-awesome-icon");return c(),u("div",Fe,[Ee,l("div",Le,[l("div",Ce,[l("a",Ie,[p(a,{icon:["fab","weixin"]}),De])])])])}var V=$(Se,[["render",Ne],["__scopeId","data-v-73d42434"]]);const Re=g({name:"Layout",components:{[O.name]:O,[V.name]:V},setup(e,{emit:s,slots:o,attrs:r}){return{stateList:A({navItems:[{text:"\u9996\u9875",value:"Home",router:"Home",children:[]},{text:"\u57FA\u672C\u529F",value:"basicSkill",link:"#",children:[{text:"\u6570\u636E\u7ED3\u6784\u548C\u7B97\u6CD5",value:"DataStructureAndAlgorithm",link:"https://zhengjiangtao.cn/coding-ts"},{text:"\u8BBE\u8BA1\u6A21\u5F0F",value:"DesignMode",link:"https://zhengjiangtao.cn/coding/"}]},{text:"\u524D\u7AEF",value:"Frontend",link:"#",children:[]},{text:"\u535A\u5BA2",value:"Blog",link:"https://www.cnblogs.com/cnroadbridge/",children:[]},{text:"\u5B9E\u9A8C\u5BA4",value:"Laboratory",link:"#",children:[]},{text:"\u53CB\u94FE",value:"FriendsLinks",link:"#",children:[]}]})}}}),Oe={class:"layout"};function Pe(e,s,o,r,t,n){const a=m("NavBar"),_=m("router-view"),i=m("Footer");return c(),u("div",Oe,[p(a,{items:e.stateList.navItems},null,8,["items"]),p(_,null,{default:f(({Component:d,route:j})=>[p(I,{name:"fade",mode:"out-in"},{default:f(()=>[(c(),h(X,null,[(c(),h(D(d),{key:j.path}))],1024))]),_:2},1024)]),_:1}),p(i)])}var Ve=$(Re,[["render",Pe],["__scopeId","data-v-8c254304"]]);const ze=[{path:"/",component:Ve,redirect:"/home",children:[{path:"/home",name:"Home",component:()=>R(()=>import("./home.1cd9ddd0.js"),["assets/home.1cd9ddd0.js","assets/home.16458853.css","assets/vendor.b058a5b3.js"]),meta:{title:"\u9996\u9875"}}]},{path:"/bootstrap",name:"Bootstrap",component:()=>R(()=>import("./bootstrap.4d304878.js"),["assets/bootstrap.4d304878.js","assets/bootstrap.b5b6b603.css","assets/vendor.b058a5b3.js"]),meta:{title:"\u542F\u52A8\u9875"}}],z=Y({history:Z(),routes:ze});z.beforeEach((e,s,o)=>{e.name==="Home"&&s.name==="Bootstrap"&&localStorage.setItem("isBootstrap","true"),localStorage.getItem("isBootstrap")?e.path==="/bootstrap"?o("/"):o():e.path==="/bootstrap"?o():o({path:"/bootstrap"})});const je=g({name:"App",setup(e,{emit:s,slots:o,attrs:r}){const t=()=>{const n=document.documentElement;let a=n.clientWidth;a=a<750?a:750,n.style.fontSize=a/7.5+"px"};return ee(()=>{const n=te.debounce(t,1e3);document.addEventListener("DOMContentLoaded",n),window.addEventListener("orientationchange"in window?"orientationchange":"resize",n),t()}),{}}});function qe(e,s,o,r,t,n){const a=m("router-view");return c(),h(a,null,{default:f(({Component:_})=>[p(I,{name:"fade",mode:"out-in"},{default:f(()=>[(c(),h(D(_)))]),_:2},1024)]),_:1})}var He=$(je,[["render",qe]]);k.add(oe);k.add(se);k.add(ne);k.add(ae);const v=re(He);v.use(z);v.use(ce);v.use(ie());v.component("font-awesome-icon",le);v.mount("#app");export{$ as _};
