var b=Object.defineProperty,h=Object.defineProperties;var y=Object.getOwnPropertyDescriptors;var d=Object.getOwnPropertySymbols;var I=Object.prototype.hasOwnProperty,x=Object.prototype.propertyIsEnumerable;var u=(e,t,s)=>t in e?b(e,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[t]=s,c=(e,t)=>{for(var s in t||(t={}))I.call(t,s)&&u(e,s,t[s]);if(d)for(var s of d(t))x.call(t,s)&&u(e,s,t[s]);return e},_=(e,t)=>h(e,y(t));import{S as m}from"./SideBar.521783d7.js";import{d as N,r as w,N as L,a as S,c as g,b as n,f as p,O as j,j as l,o as $}from"./vendor.f4be5165.js";import{_ as A}from"./index.2d833e04.js";const F=N({name:"Laboratory",components:{[m.name]:m},setup(e,{emit:t,slots:s,attrs:v}){const i=j(),o=w({sideBarItem:{text:"\u542F\u52A8\u9875",value:"LaboratoryBootstrap",isNew:!0},sideBarItems:[{text:"\u542F\u52A8\u9875",value:"LaboratoryBootstrap",isNew:!0}]}),a=r=>{o.sideBarItem=o.sideBarItems.find(B=>B.value===r)||{text:"\u542F\u52A8\u9875",value:"LaboratoryBootstrap",isNew:!0};const f=r;i.push({name:f})};return L(()=>{a("LaboratoryBootstrap")}),_(c({},S(o)),{changeSideBar:a})}}),k={class:"container"},C={class:"main"},R={class:"main-left"},V={class:"sidebar-box"},E={class:"main-right"};function M(e,t,s,v,i,o){const a=l("side-bar"),r=l("router-view");return $(),g("div",k,[n("div",C,[n("div",R,[n("div",V,[p(a,{items:e.sideBarItems,value:e.sideBarItem.value,onInput:e.changeSideBar},null,8,["items","value","onInput"])])]),n("div",E,[p(r)])])])}var G=A(F,[["render",M],["__scopeId","data-v-6ff05f34"]]);export{G as default};
