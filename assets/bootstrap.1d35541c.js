import{_ as m,d as _,B as i,h as b,o as v,c as f,b as t,g as r,f as l,A as x,r as u,e as y}from"./index.7dd6c8bf.js";var B="/assets/zheng.1dd85e59.png";const g=_({name:"Bootstrap",setup(o,{emit:e,slots:c,attrs:p}){const s=i("\u70B9\u6B64\u8FDB\u5165"),n=i("\u6C5F\u6D9B\u7684\u4E2A\u4EBA\u7F51\u7AD9"),a=b({fullScreen:{zIndex:1},interactivity:{events:{onClick:{enable:!0,mode:"repulse"},onHover:{enable:!0,mode:"bubble"}},modes:{bubble:{distance:400,duration:.3,opacity:1,size:4},grab:{distance:400,links:{opacity:.5}}}},particles:{links:{color:{value:"#ffffff"},distance:500,opacity:.4,width:2},move:{attract:{rotate:{x:600,y:1200}},direction:"bottom",enable:!0,outModes:{bottom:"out",left:"out",right:"out",top:"out"}},number:{density:{enable:!0},value:400},opacity:{random:{enable:!0},value:{min:.1,max:.5},animation:{speed:1,minimumValue:.1}},size:{random:{enable:!0},value:{min:1,max:10},animation:{speed:40,minimumValue:.1}}}});return{tip:s,title:n,snowOption:a}}}),k={class:"cover"},A={class:"logo"},h={class:"blink"};function C(o,e,c,p,s,n){const a=u("router-link"),d=u("Particles");return v(),f("div",k,[e[1]||(e[1]=t("span",{class:"overlay"},null,-1)),t("div",A,[t("h2",null,[e[0]||(e[0]=t("img",{class:"avatar",src:B,alt:"\u90D1"},null,-1)),t("span",h,r(o.title),1)]),l(a,{to:{name:"Home"}},{default:x(()=>[y(r(o.tip)+"\xA0\xA0\xA0\xA0\u279E",1)]),_:1})]),l(d,{id:"Particles",options:o.snowOption},null,8,["options"])])}var V=m(g,[["render",C],["__scopeId","data-v-38aebe91"]]);export{V as default};
