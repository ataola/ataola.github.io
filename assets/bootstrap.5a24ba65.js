import{_ as m,d as b,A as n,i as v,o as f,c as h,a as t,h as i,g as r,z as x,r as l,b as y,p as g,f as B}from"./index.bcce16d5.js";var k="/assets/zheng.1dd85e59.png";const A=b({name:"Bootstrap",setup(e,{emit:u,slots:p,attrs:d}){const a=n("\u70B9\u6B64\u8FDB\u5165"),s=n("\u6C5F\u6D9B\u7684\u4E2A\u4EBA\u7F51\u7AD9"),o=v({fullScreen:{zIndex:1},interactivity:{events:{onClick:{enable:!0,mode:"repulse"},onHover:{enable:!0,mode:"bubble"}},modes:{bubble:{distance:400,duration:.3,opacity:1,size:4},grab:{distance:400,links:{opacity:.5}}}},particles:{links:{color:{value:"#ffffff"},distance:500,opacity:.4,width:2},move:{attract:{rotate:{x:600,y:1200}},direction:"bottom",enable:!0,outModes:{bottom:"out",left:"out",right:"out",top:"out"}},number:{density:{enable:!0},value:400},opacity:{random:{enable:!0},value:{min:.1,max:.5},animation:{speed:1,minimumValue:.1}},size:{random:{enable:!0},value:{min:1,max:10},animation:{speed:40,minimumValue:.1}}}});return{tip:a,title:s,snowOption:o}}}),c=e=>(g("data-v-38aebe91"),e=e(),B(),e),w={class:"cover"},z=c(()=>t("span",{class:"overlay"},null,-1)),C={class:"logo"},D=c(()=>t("img",{class:"avatar",src:k,alt:"\u90D1"},null,-1)),I={class:"blink"};function S(e,u,p,d,a,s){const o=l("router-link"),_=l("Particles");return f(),h("div",w,[z,t("div",C,[t("h2",null,[D,t("span",I,i(e.title),1)]),r(o,{to:{name:"Home"}},{default:x(()=>[y(i(e.tip)+"\xA0\xA0\xA0\xA0\u279E",1)]),_:1})]),r(_,{id:"Particles",options:e.snowOption},null,8,["options"])])}var E=m(A,[["render",S],["__scopeId","data-v-38aebe91"]]);export{E as default};
