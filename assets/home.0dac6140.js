import{d as a}from"./browser.95ab92ab.js";import{_ as c}from"./index.19d53f50.js";import{d as n,J as r,c as _,b as t,n as p,p as d,i as l,o as h}from"./vendor.fce34864.js";const i=u=>(d("data-v-4a52b6ef"),u=u(),l(),u),m=i(()=>t("h6",null,"\u989D\uFF0C\u6682\u65F6\u6CA1\u6709\u7075\u611F\u548C\u60F3\u6CD5\u9996\u9875\u653E\u4EC0\u4E48\uFF0C\u5148\u653E\u53E5\u9E21\u6C64\u5427",-1)),f=n({setup(u){const s=a("zhengjiangtao.cn:views:Home"),o=r("\u7F51\u7AD9\u5F00\u53D1\u4E2D\u3002\u3002\u3002\u3002\u3002\u3002");return fetch("https://v1.hitokoto.cn?c=k&c=d&max_length=10").then(e=>e.json()).then(e=>{s(e),o.value=e.hitokoto}).catch(console.error),(e,v)=>(h(),_("div",null,[t("h6",null,p(o.value),1),m]))}});var E=c(f,[["__scopeId","data-v-4a52b6ef"]]);export{E as default};
