;(function(){var __vite_style__=document.createElement('style');__vite_style__.innerHTML=".cover[data-v-38aebe91]{width:100%;height:100%;margin:0;padding:0;position:relative;overflow:hidden;box-sizing:border-box;background-image:url(/assets/bg.ff12e453.jpg);background-repeat:no-repeat;background-position:center}.cover .overlay[data-v-38aebe91]{width:100%;height:100%;position:absolute;top:0;left:0;overflow:hidden;z-index:6;opacity:.4;background-color:#fff}.cover .logo[data-v-38aebe91]{min-width:2rem;position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);z-index:7;overflow:hidden;text-align:center;transition:all .2s linear}.cover .logo h2[data-v-38aebe91]{display:flex;align-items:center;font-size:.32rem;cursor:default;animation:down-38aebe91 linear 1s}.cover .logo h2 .avatar[data-v-38aebe91]{width:.42rem;height:.42rem}.cover .logo a[data-v-38aebe91]{display:block;color:#fff;opacity:.7;font-size:.24rem;text-decoration:none;text-shadow:2px 2px 2px #000000;transition:all .2s linear;animation:up-38aebe91 linear 1s}.cover .logo a[data-v-38aebe91]:hover{color:#000}@keyframes up-38aebe91{0%{transform:translateY(200%)}to{transform:translateY(0)}}@-webkit-keyframes up-38aebe91{0%{transform:translateY(200%)}to{transform:translateY(0)}}@keyframes down-38aebe91{0%{transform:translateY(-200%)}to{transform:translateY(0)}}@-webkit-keyframes down-38aebe91{0%{transform:translateY(-200%)}to{transform:translateY(0)}}.blink[data-v-38aebe91]{background:-webkit-linear-gradient(left,#fff,#f00 6.25%,#ff7d00 12.5%,#ff0 18.75%,#0f0 25%,#0ff 31.25%,#00f 37.5%,#f0f 43.75%,#ff0 50%,#f00 56.25%,#ff7d00 62.5%,#ff0 68.75%,#0f0 75%,#0ff 81.25%,#00f 87.5%,#f0f 93.75%,#ff0);background-size:200% 100%;background-clip:text;-webkit-background-clip:text;-webkit-text-fill-color:transparent;animation:masked-animation-38aebe91 2s linear infinite;white-space:nowrap}@keyframes masked-animation-38aebe91{0%{background-position:0 0}to{background-position:-100%,0}}\n";document.head.appendChild(__vite_style__);System.register(['./index-legacy.526e136a.js','./vendor-legacy.7c4970e8.js'],function(exports){'use strict';var _export_sfc,defineComponent,ref,reactive,createElementBlock,createBaseVNode,toDisplayString,createVNode,withCtx,pushScopeId,popScopeId,resolveComponent,openBlock,createTextVNode;return{setters:[function(module){_export_sfc=module._;},function(module){defineComponent=module.d;ref=module.C;reactive=module.r;createElementBlock=module.c;createBaseVNode=module.a;toDisplayString=module.m;createVNode=module.e;withCtx=module.k;pushScopeId=module.p;popScopeId=module.h;resolveComponent=module.i;openBlock=module.o;createTextVNode=module.l;}],execute:function execute(){var _imports_0="/assets/zheng.1dd85e59.png";var bootstrap_vue_vue_type_style_index_0_scoped_true_lang='';var _sfc_main=defineComponent({name:"Bootstrap",setup:function setup(props,_ref){var emit=_ref.emit,slots=_ref.slots,attrs=_ref.attrs;var tip=ref("\u70B9\u6B64\u8FDB\u5165");var title=ref("\u6C5F\u6D9B\u7684\u4E2A\u4EBA\u7F51\u7AD9");var snowOption=reactive({fullScreen:{zIndex:1},interactivity:{events:{onClick:{enable:true,mode:"repulse"},onHover:{enable:true,mode:"bubble"}},modes:{bubble:{distance:400,duration:0.3,opacity:1,size:4},grab:{distance:400,links:{opacity:0.5}}}},particles:{links:{color:{value:"#ffffff"},distance:500,opacity:0.4,width:2},move:{attract:{rotate:{x:600,y:1200}},direction:"bottom",enable:true,outModes:{bottom:"out",left:"out",right:"out",top:"out"}},number:{density:{enable:true},value:400},opacity:{random:{enable:true},value:{min:0.1,max:0.5},animation:{speed:1,minimumValue:0.1}},size:{random:{enable:true},value:{min:1,max:10},animation:{speed:40,minimumValue:0.1}}}});return{tip:tip,title:title,snowOption:snowOption};}});var _withScopeId=function _withScopeId(n){return pushScopeId("data-v-38aebe91"),n=n(),popScopeId(),n;};var _hoisted_1={class:"cover"};var _hoisted_2=/* @__PURE__ */_withScopeId(function(){return/* @__PURE__ */createBaseVNode("span",{class:"overlay"},null,-1);});var _hoisted_3={class:"logo"};var _hoisted_4=/* @__PURE__ */_withScopeId(function(){return/* @__PURE__ */createBaseVNode("img",{class:"avatar",src:_imports_0,alt:"\u90D1"},null,-1);});var _hoisted_5={class:"blink"};function _sfc_render(_ctx,_cache,$props,$setup,$data,$options){var _component_router_link=resolveComponent("router-link");var _component_Particles=resolveComponent("Particles");return openBlock(),createElementBlock("div",_hoisted_1,[_hoisted_2,createBaseVNode("div",_hoisted_3,[createBaseVNode("h2",null,[_hoisted_4,createBaseVNode("span",_hoisted_5,toDisplayString(_ctx.title),1)]),createVNode(_component_router_link,{to:{name:"Home"}},{default:withCtx(function(){return[createTextVNode(toDisplayString(_ctx.tip)+"\xA0\xA0\xA0\xA0\u279E",1)];}),_:1})]),createVNode(_component_Particles,{id:"Particles",options:_ctx.snowOption},null,8,["options"])]);}var bootstrap=exports('default',/* @__PURE__ */_export_sfc(_sfc_main,[["render",_sfc_render],["__scopeId","data-v-38aebe91"]]));}};});})();