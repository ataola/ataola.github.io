var p=(_,d,r)=>new Promise((l,u)=>{var f=o=>{try{i(r.next(o))}catch(c){u(c)}},h=o=>{try{i(r.throw(o))}catch(c){u(c)}},i=o=>o.done?l(o.value):Promise.resolve(o.value).then(f,h);i((r=r.apply(_,d)).next())});import{_ as x,d as F,B as m,K as k,E,o as B,c as $,x as S,y as N,u as v,b as g,F as R}from"./index.c66ee764.js";import{i as j,r as I}from"./index.30e2d5b9.js";import{a as y}from"./index.1ffb6a9a.js";const K=F({__name:"dynamic",setup(_){let d=null,r=new Map;r.set(1e5,{name:"\u4E2D\u56FD",adcode:1e5,url:"https://geo.datav.aliyun.com/areas_v3/bound/100000_full.json",childrenNum:34,center:[0,0],hasRegister:!0});let l=m(1e5),u=m(null);const f=m();function h(e,t){I(e,t)}const i=e=>p(this,null,function*(){return(yield y.get(`https://geo.datav.aliyun.com/areas_v3/bound/${e}_full.json`)).data});function o(e){let t=new Map;for(const a of e.features){const{properties:{name:n,adcode:s,childrenNum:M,center:D}}=a;r.set(s,{name:n,adcode:s,url:`https://geo.datav.aliyun.com/areas_v3/bound/${s}_full.json`,childrenNum:M,center:D,hasRegister:!1})}return t}function c(e){let t={title:{text:`${e}\u5730\u56FE`,left:"center",top:"2%",textStyle:{color:"#fff"}},backgroundColor:"#070d18",series:[{name:`${e}\u5730\u56FE`,map:e,type:"map",roam:!0,selectedMode:!1,label:{normal:{formatter:"{b}",show:!0,textStyle:{color:"#fff"}},emphasis:{show:!0,textStyle:{color:"#05C3F9"}}},itemStyle:{normal:{areaColor:"#0C356C",borderColor:"#3B5077",borderWidth:1},emphasis:{areaColor:"#0C356C",shadowColor:"#1773c3",shadowBlur:20}},select:{},data:[]}]};d.setOption(t)}function C(e){return p(this,null,function*(){const t=yield i(e.adcode);if(!(e!=null&&e.hasRegister)){h(e.name,t);let a=o(t);r=new Map([...r,...a]),r.get(e==null?void 0:e.adcode).hasRegister=!0}c(e.name)})}const w=(e,t)=>{let a=t.values(),n=0;for(const s of a)if(s.name==e){n=s.adcode;break}return n},b=e=>{l.value=e};return k(()=>p(this,null,function*(){d=j(f.value),d.on("click",a=>{var s;let n=w(a.name,r);((s=r.get(n))==null?void 0:s.childrenNum)!=0&&(l.value=n)});const e=r.get(l.value),{data:t}=yield y.get(e.url);h("\u4E2D\u56FD",t),c("\u4E2D\u56FD"),o(t)})),E(l,(e,t)=>{let a=r.get(e);(a==null?void 0:a.childrenNum)&&a.childrenNum>0&&(u.value=a,u.value.parentadcode==null&&(u.value.parentadcode=t),C(a))}),(e,t)=>(B(),$(R,null,[S(g("div",{class:"backParent",onClick:t[0]||(t[0]=a=>{var n;return b((n=v(u))==null?void 0:n.parentadcode)})}," \u8FD4\u56DE ",512),[[N,v(l)!=1e5]]),g("div",{ref_key:"chart",ref:f,style:{width:"100%",height:"100%"}},null,512)],64))}});var W=x(K,[["__scopeId","data-v-090b903d"]]);export{W as default};