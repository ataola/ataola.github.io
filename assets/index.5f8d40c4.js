import{c as f,a as d,d as m,o as p,b as _,r as h,e as y,f as v}from"./vendor.db4456a0.js";const g=function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const o of t.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function r(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}};g();const L="modulepreload",l={},P="./",b=function(n,s){return!s||s.length===0?n():Promise.all(s.map(r=>{if(r=`${P}${r}`,r in l)return;l[r]=!0;const e=r.endsWith(".css"),t=e?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${r}"]${t}`))return;const o=document.createElement("link");if(o.rel=e?"stylesheet":L,e||(o.as="script",o.crossOrigin=""),o.href=r,document.head.appendChild(o),e)return new Promise((a,u)=>{o.addEventListener("load",a),o.addEventListener("error",u)})})).then(()=>n())},E=[{path:"/",name:"Home",component:()=>b(()=>import("./home.a5d0c211.js"),["assets/home.a5d0c211.js","assets/home.46d8572d.css","assets/vendor.db4456a0.js"]),meta:{title:"\u9996\u9875"}}],O=f({history:d(),routes:E});const k=m({setup(c){return(n,s)=>{const r=h("router-view");return p(),_(r)}}}),i=y(k);i.use(v());i.use(O);i.mount("#app");