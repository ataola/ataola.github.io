var D=Object.defineProperty;var p=Object.getOwnPropertySymbols;var L=Object.prototype.hasOwnProperty,O=Object.prototype.propertyIsEnumerable;var l=(o,e,t)=>e in o?D(o,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):o[e]=t,f=(o,e)=>{for(var t in e||(e={}))L.call(e,t)&&l(o,t,e[t]);if(p)for(var t of p(e))O.call(e,t)&&l(o,t,e[t]);return o};import{H as m}from"./hammer.e00af7d2.js";import{_ as C}from"./index.e07914b8.js";import{d as R,r as w,K as $,R as S,a as g,c as d,F as h,e as H,o as c,b as P,n as E}from"./vendor.d865ff46.js";const k=R({name:"Hammer",setup(o,{emit:e,slots:t,attrs:_}){const n=w({swipeInfo:{type:void 0,deltaX:void 0,deltaY:void 0,deltaTime:void 0,distance:void 0,angle:void 0,velocityX:void 0,velocityY:void 0,velocity:void 0,direction:void 0,offsetDirection:void 0,scale:void 0,rotation:void 0,center:void 0,srcEvent:void 0,target:void 0,pointerType:void 0,eventType:void 0,isFirst:void 0,isFinal:void 0,pointers:void 0,changedPointers:void 0,preventDefault:void 0},DIRECTION_MAP:{1:"NONE",2:"LEFT",4:"RIGHT",6:"HORIZONTAL",8:"UP",16:"DOWN",24:"VERTICAL",30:"ALL"},INPUT_EVENT_MAP:{1:"START",2:"MOVE",4:"END",8:"CANCEL"},RECOGNIZER_STATES_MAP:{1:"POSSIBLE",2:"BEGAN",4:"CHANGED",8:"ENDED",STATE_ENDED:"RECOGNIZED",16:"CANCELLED",32:"FAILED"},swipeInfoItems:[]}),v=$(()=>Object.keys(n.swipeInfo)),a=s=>{let r=[];for(const i of v.value)s[i]instanceof Function||s[i]instanceof Object||(n.swipeInfo[i]=s[i],r.push({key:i,value:s[i]}));n.swipeInfoItems=r};return S(()=>{const s=document.querySelector(".container"),r=new m(s);r.get("swipe").set({direction:m.DIRECTION_ALL}),r.on("swipe",function(i){a(i);const{type:u="",deltaX:I="",deltaY:T="",deltaTime:y="",distance:N="",direction:A=""}=n.swipeInfo;console.log(`info: type ${u}, direction ${n.DIRECTION_MAP[A]}, delat ${I}, deltaY: ${T}, distance ${N}, deltaTime, ${y}`)})}),f({},g(n))}}),F={class:"container"};function M(o,e,t,_,n,v){return c(),d("div",F,[(c(!0),d(h,null,H(o.swipeInfoItems,a=>(c(),d("div",{key:a.key},[P("p",null,E(a.key)+":"+E(a.value),1)]))),128))])}var x=C(k,[["render",M],["__scopeId","data-v-2c6c0fba"]]);export{x as default};
