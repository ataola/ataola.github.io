var B=Object.defineProperty,I=Object.defineProperties;var b=Object.getOwnPropertyDescriptors;var d=Object.getOwnPropertySymbols;var g=Object.prototype.hasOwnProperty,L=Object.prototype.propertyIsEnumerable;var u=(e,t,s)=>t in e?B(e,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[t]=s,_=(e,t)=>{for(var s in t||(t={}))g.call(t,s)&&u(e,s,t[s]);if(d)for(var s of d(t))L.call(t,s)&&u(e,s,t[s]);return e},l=(e,t)=>I(e,b(t));import{_ as x,d as y,y as D,i as w,k as E,l as N,o as $,c as k,a as n,g as m,r as p,x as R}from"./index.bcce16d5.js";const W=y({name:"Laboratory",setup(e,{emit:t,slots:s,attrs:v}){const i=R(),c=D(),a=w({sideBarItem:{text:"\u6D41\u8424",value:"LEDLightWordIntro"},sideBarItems:[{text:"\u6D41\u8424",value:"LEDLightWordIntro",isNew:!0}]}),r=o=>{a.sideBarItem=a.sideBarItems.find(f=>f.value===o)||{text:"\u6D41\u8424",value:"LEDLightWordIntro",isNew:!0};const h=o;i.push({name:h,params:{value:o}})};return E(()=>{const{params:{value:o}}=c;o&&r(o)}),l(_({},N(a)),{changeSideBar:r})}}),C={class:"container"},S={class:"main"},V={class:"main-left"},M={class:"sidebar-box"},j={class:"main-right"};function q(e,t,s,v,i,c){const a=p("side-bar"),r=p("router-view");return $(),k("div",C,[n("div",S,[n("div",V,[n("div",M,[m(a,{items:e.sideBarItems,value:e.sideBarItem.value,onInput:e.changeSideBar},null,8,["items","value","onInput"])])]),n("div",j,[m(r)])])])}var F=x(W,[["render",q],["__scopeId","data-v-b01c1322"]]);export{F as default};
