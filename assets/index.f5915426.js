var mn=Object.defineProperty,gn=Object.defineProperties;var Tn=Object.getOwnPropertyDescriptors;var Tt=Object.getOwnPropertySymbols;var Cn=Object.prototype.hasOwnProperty,En=Object.prototype.propertyIsEnumerable;var Ve=(r,s,a)=>s in r?mn(r,s,{enumerable:!0,configurable:!0,writable:!0,value:a}):r[s]=a,ze=(r,s)=>{for(var a in s||(s={}))Cn.call(s,a)&&Ve(r,a,s[a]);if(Tt)for(var a of Tt(s))En.call(s,a)&&Ve(r,a,s[a]);return r},Ge=(r,s)=>gn(r,Tn(s));var be=(r,s,a)=>(Ve(r,typeof s!="symbol"?s+"":s,a),a);import{d as ge,_ as _n,o as Q,c as K,F as yn,b as In,a as m,m as Ct,r as Et,$ as Fn,t as _t,i as re,a0 as Sn,e as M,w as yt,X as It,p as Ft,h as St,U as An,D as On,k as At,T as Dn,v as Nn,l as Pn}from"./vendor.db88fc1c.js";import{g as Ot,_ as Te}from"./index.1683ba66.js";var Dt={exports:{}};/*! Hammer.JS - v2.0.7 - 2016-04-22
 * http://hammerjs.github.io/
 *
 * Copyright (c) 2016 Jorik Tangelder;
 * Licensed under the MIT license */(function(r){(function(s,a,S,f){var C=["","webkit","Moz","MS","ms","o"],g=a.createElement("div"),p="function",d=Math.round,E=Math.abs,l=Date.now;function c(e,t,n){return setTimeout(x(e,n),t)}function h(e,t,n){return Array.isArray(e)?(y(e,n[t],n),!0):!1}function y(e,t,n){var i;if(!!e)if(e.forEach)e.forEach(t,n);else if(e.length!==f)for(i=0;i<e.length;)t.call(n,e[i],i,e),i++;else for(i in e)e.hasOwnProperty(i)&&t.call(n,e[i],i,e)}function L(e,t,n){var i="DEPRECATED METHOD: "+t+`
`+n+` AT 
`;return function(){var o=new Error("get-stack-trace"),u=o&&o.stack?o.stack.replace(/^[^\(]+?[\n$]/gm,"").replace(/^\s+at\s+/gm,"").replace(/^Object.<anonymous>\s*\(/gm,"{anonymous}()@"):"Unknown Stack Trace",v=s.console&&(s.console.warn||s.console.log);return v&&v.call(s.console,i,u),e.apply(this,arguments)}}var T;typeof Object.assign!="function"?T=function(t){if(t===f||t===null)throw new TypeError("Cannot convert undefined or null to object");for(var n=Object(t),i=1;i<arguments.length;i++){var o=arguments[i];if(o!==f&&o!==null)for(var u in o)o.hasOwnProperty(u)&&(n[u]=o[u])}return n}:T=Object.assign;var I=L(function(t,n,i){for(var o=Object.keys(n),u=0;u<o.length;)(!i||i&&t[o[u]]===f)&&(t[o[u]]=n[o[u]]),u++;return t},"extend","Use `assign`."),D=L(function(t,n){return I(t,n,!0)},"merge","Use `assign`.");function _(e,t,n){var i=t.prototype,o;o=e.prototype=Object.create(i),o.constructor=e,o._super=i,n&&T(o,n)}function x(e,t){return function(){return e.apply(t,arguments)}}function V(e,t){return typeof e==p?e.apply(t&&t[0]||f,t):e}function Me(e,t){return e===f?t:e}function z(e,t,n){y(Ce(t),function(i){e.addEventListener(i,n,!1)})}function te(e,t,n){y(Ce(t),function(i){e.removeEventListener(i,n,!1)})}function le(e,t){for(;e;){if(e==t)return!0;e=e.parentNode}return!1}function X(e,t){return e.indexOf(t)>-1}function Ce(e){return e.trim().split(/\s+/g)}function ne(e,t,n){if(e.indexOf&&!n)return e.indexOf(t);for(var i=0;i<e.length;){if(n&&e[i][n]==t||!n&&e[i]===t)return i;i++}return-1}function Ee(e){return Array.prototype.slice.call(e,0)}function Ze(e,t,n){for(var i=[],o=[],u=0;u<e.length;){var v=t?e[u][t]:e[u];ne(o,v)<0&&i.push(e[u]),o[u]=v,u++}return n&&(t?i=i.sort(function(O,P){return O[t]>P[t]}):i=i.sort()),i}function _e(e,t){for(var n,i,o=t[0].toUpperCase()+t.slice(1),u=0;u<C.length;){if(n=C[u],i=n?n+o:t,i in e)return i;u++}return f}var Mt=1;function Ut(){return Mt++}function Je(e){var t=e.ownerDocument||e;return t.defaultView||t.parentWindow||s}var Lt=/mobile|tablet|ip(ad|hone|od)|android/i,Qe="ontouchstart"in s,xt=_e(s,"PointerEvent")!==f,$t=Qe&&Lt.test(navigator.userAgent),ue="touch",kt="pen",Ue="mouse",Yt="kinect",Ht=25,N=1,j=2,F=4,w=8,ye=1,ce=2,he=4,fe=8,de=16,k=ce|he,Z=fe|de,Ke=k|Z,et=["x","y"],Ie=["clientX","clientY"];function b(e,t){var n=this;this.manager=e,this.callback=t,this.element=e.element,this.target=e.options.inputTarget,this.domHandler=function(i){V(e.options.enable,[e])&&n.handler(i)},this.init()}b.prototype={handler:function(){},init:function(){this.evEl&&z(this.element,this.evEl,this.domHandler),this.evTarget&&z(this.target,this.evTarget,this.domHandler),this.evWin&&z(Je(this.element),this.evWin,this.domHandler)},destroy:function(){this.evEl&&te(this.element,this.evEl,this.domHandler),this.evTarget&&te(this.target,this.evTarget,this.domHandler),this.evWin&&te(Je(this.element),this.evWin,this.domHandler)}};function Xt(e){var t,n=e.options.inputClass;return n?t=n:xt?t=xe:$t?t=Ae:Qe?t=$e:t=Se,new t(e,Bt)}function Bt(e,t,n){var i=n.pointers.length,o=n.changedPointers.length,u=t&N&&i-o==0,v=t&(F|w)&&i-o==0;n.isFirst=!!u,n.isFinal=!!v,u&&(e.session={}),n.eventType=t,qt(e,n),e.emit("hammer.input",n),e.recognize(n),e.session.prevInput=n}function qt(e,t){var n=e.session,i=t.pointers,o=i.length;n.firstInput||(n.firstInput=tt(t)),o>1&&!n.firstMultiple?n.firstMultiple=tt(t):o===1&&(n.firstMultiple=!1);var u=n.firstInput,v=n.firstMultiple,A=v?v.center:u.center,O=t.center=nt(i);t.timeStamp=l(),t.deltaTime=t.timeStamp-u.timeStamp,t.angle=Le(A,O),t.distance=Fe(A,O),Wt(n,t),t.offsetDirection=rt(t.deltaX,t.deltaY);var P=it(t.deltaTime,t.deltaX,t.deltaY);t.overallVelocityX=P.x,t.overallVelocityY=P.y,t.overallVelocity=E(P.x)>E(P.y)?P.x:P.y,t.scale=v?Gt(v.pointers,i):1,t.rotation=v?zt(v.pointers,i):0,t.maxPointers=n.prevInput?t.pointers.length>n.prevInput.maxPointers?t.pointers.length:n.prevInput.maxPointers:t.pointers.length,Vt(n,t);var H=e.element;le(t.srcEvent.target,H)&&(H=t.srcEvent.target),t.target=H}function Wt(e,t){var n=t.center,i=e.offsetDelta||{},o=e.prevDelta||{},u=e.prevInput||{};(t.eventType===N||u.eventType===F)&&(o=e.prevDelta={x:u.deltaX||0,y:u.deltaY||0},i=e.offsetDelta={x:n.x,y:n.y}),t.deltaX=o.x+(n.x-i.x),t.deltaY=o.y+(n.y-i.y)}function Vt(e,t){var n=e.lastInterval||t,i=t.timeStamp-n.timeStamp,o,u,v,A;if(t.eventType!=w&&(i>Ht||n.velocity===f)){var O=t.deltaX-n.deltaX,P=t.deltaY-n.deltaY,H=it(i,O,P);u=H.x,v=H.y,o=E(H.x)>E(H.y)?H.x:H.y,A=rt(O,P),e.lastInterval=t}else o=n.velocity,u=n.velocityX,v=n.velocityY,A=n.direction;t.velocity=o,t.velocityX=u,t.velocityY=v,t.direction=A}function tt(e){for(var t=[],n=0;n<e.pointers.length;)t[n]={clientX:d(e.pointers[n].clientX),clientY:d(e.pointers[n].clientY)},n++;return{timeStamp:l(),pointers:t,center:nt(t),deltaX:e.deltaX,deltaY:e.deltaY}}function nt(e){var t=e.length;if(t===1)return{x:d(e[0].clientX),y:d(e[0].clientY)};for(var n=0,i=0,o=0;o<t;)n+=e[o].clientX,i+=e[o].clientY,o++;return{x:d(n/t),y:d(i/t)}}function it(e,t,n){return{x:t/e||0,y:n/e||0}}function rt(e,t){return e===t?ye:E(e)>=E(t)?e<0?ce:he:t<0?fe:de}function Fe(e,t,n){n||(n=et);var i=t[n[0]]-e[n[0]],o=t[n[1]]-e[n[1]];return Math.sqrt(i*i+o*o)}function Le(e,t,n){n||(n=et);var i=t[n[0]]-e[n[0]],o=t[n[1]]-e[n[1]];return Math.atan2(o,i)*180/Math.PI}function zt(e,t){return Le(t[1],t[0],Ie)+Le(e[1],e[0],Ie)}function Gt(e,t){return Fe(t[0],t[1],Ie)/Fe(e[0],e[1],Ie)}var jt={mousedown:N,mousemove:j,mouseup:F},Zt="mousedown",Jt="mousemove mouseup";function Se(){this.evEl=Zt,this.evWin=Jt,this.pressed=!1,b.apply(this,arguments)}_(Se,b,{handler:function(t){var n=jt[t.type];n&N&&t.button===0&&(this.pressed=!0),n&j&&t.which!==1&&(n=F),!!this.pressed&&(n&F&&(this.pressed=!1),this.callback(this.manager,n,{pointers:[t],changedPointers:[t],pointerType:Ue,srcEvent:t}))}});var Qt={pointerdown:N,pointermove:j,pointerup:F,pointercancel:w,pointerout:w},Kt={2:ue,3:kt,4:Ue,5:Yt},st="pointerdown",ot="pointermove pointerup pointercancel";s.MSPointerEvent&&!s.PointerEvent&&(st="MSPointerDown",ot="MSPointerMove MSPointerUp MSPointerCancel");function xe(){this.evEl=st,this.evWin=ot,b.apply(this,arguments),this.store=this.manager.session.pointerEvents=[]}_(xe,b,{handler:function(t){var n=this.store,i=!1,o=t.type.toLowerCase().replace("ms",""),u=Qt[o],v=Kt[t.pointerType]||t.pointerType,A=v==ue,O=ne(n,t.pointerId,"pointerId");u&N&&(t.button===0||A)?O<0&&(n.push(t),O=n.length-1):u&(F|w)&&(i=!0),!(O<0)&&(n[O]=t,this.callback(this.manager,u,{pointers:n,changedPointers:[t],pointerType:v,srcEvent:t}),i&&n.splice(O,1))}});var en={touchstart:N,touchmove:j,touchend:F,touchcancel:w},tn="touchstart",nn="touchstart touchmove touchend touchcancel";function at(){this.evTarget=tn,this.evWin=nn,this.started=!1,b.apply(this,arguments)}_(at,b,{handler:function(t){var n=en[t.type];if(n===N&&(this.started=!0),!!this.started){var i=rn.call(this,t,n);n&(F|w)&&i[0].length-i[1].length==0&&(this.started=!1),this.callback(this.manager,n,{pointers:i[0],changedPointers:i[1],pointerType:ue,srcEvent:t})}}});function rn(e,t){var n=Ee(e.touches),i=Ee(e.changedTouches);return t&(F|w)&&(n=Ze(n.concat(i),"identifier",!0)),[n,i]}var sn={touchstart:N,touchmove:j,touchend:F,touchcancel:w},on="touchstart touchmove touchend touchcancel";function Ae(){this.evTarget=on,this.targetIds={},b.apply(this,arguments)}_(Ae,b,{handler:function(t){var n=sn[t.type],i=an.call(this,t,n);!i||this.callback(this.manager,n,{pointers:i[0],changedPointers:i[1],pointerType:ue,srcEvent:t})}});function an(e,t){var n=Ee(e.touches),i=this.targetIds;if(t&(N|j)&&n.length===1)return i[n[0].identifier]=!0,[n,n];var o,u,v=Ee(e.changedTouches),A=[],O=this.target;if(u=n.filter(function(P){return le(P.target,O)}),t===N)for(o=0;o<u.length;)i[u[o].identifier]=!0,o++;for(o=0;o<v.length;)i[v[o].identifier]&&A.push(v[o]),t&(F|w)&&delete i[v[o].identifier],o++;if(!!A.length)return[Ze(u.concat(A),"identifier",!0),A]}var ln=2500,lt=25;function $e(){b.apply(this,arguments);var e=x(this.handler,this);this.touch=new Ae(this.manager,e),this.mouse=new Se(this.manager,e),this.primaryTouch=null,this.lastTouches=[]}_($e,b,{handler:function(t,n,i){var o=i.pointerType==ue,u=i.pointerType==Ue;if(!(u&&i.sourceCapabilities&&i.sourceCapabilities.firesTouchEvents)){if(o)un.call(this,n,i);else if(u&&cn.call(this,i))return;this.callback(t,n,i)}},destroy:function(){this.touch.destroy(),this.mouse.destroy()}});function un(e,t){e&N?(this.primaryTouch=t.changedPointers[0].identifier,ut.call(this,t)):e&(F|w)&&ut.call(this,t)}function ut(e){var t=e.changedPointers[0];if(t.identifier===this.primaryTouch){var n={x:t.clientX,y:t.clientY};this.lastTouches.push(n);var i=this.lastTouches,o=function(){var u=i.indexOf(n);u>-1&&i.splice(u,1)};setTimeout(o,ln)}}function cn(e){for(var t=e.srcEvent.clientX,n=e.srcEvent.clientY,i=0;i<this.lastTouches.length;i++){var o=this.lastTouches[i],u=Math.abs(t-o.x),v=Math.abs(n-o.y);if(u<=lt&&v<=lt)return!0}return!1}var ct=_e(g.style,"touchAction"),ht=ct!==f,ft="compute",dt="auto",ke="manipulation",J="none",pe="pan-x",ve="pan-y",Oe=fn();function Ye(e,t){this.manager=e,this.set(t)}Ye.prototype={set:function(e){e==ft&&(e=this.compute()),ht&&this.manager.element.style&&Oe[e]&&(this.manager.element.style[ct]=e),this.actions=e.toLowerCase().trim()},update:function(){this.set(this.manager.options.touchAction)},compute:function(){var e=[];return y(this.manager.recognizers,function(t){V(t.options.enable,[t])&&(e=e.concat(t.getTouchAction()))}),hn(e.join(" "))},preventDefaults:function(e){var t=e.srcEvent,n=e.offsetDirection;if(this.manager.session.prevented){t.preventDefault();return}var i=this.actions,o=X(i,J)&&!Oe[J],u=X(i,ve)&&!Oe[ve],v=X(i,pe)&&!Oe[pe];if(o){var A=e.pointers.length===1,O=e.distance<2,P=e.deltaTime<250;if(A&&O&&P)return}if(!(v&&u)&&(o||u&&n&k||v&&n&Z))return this.preventSrc(t)},preventSrc:function(e){this.manager.session.prevented=!0,e.preventDefault()}};function hn(e){if(X(e,J))return J;var t=X(e,pe),n=X(e,ve);return t&&n?J:t||n?t?pe:ve:X(e,ke)?ke:dt}function fn(){if(!ht)return!1;var e={},t=s.CSS&&s.CSS.supports;return["auto","manipulation","pan-y","pan-x","pan-x pan-y","none"].forEach(function(n){e[n]=t?s.CSS.supports("touch-action",n):!0}),e}var De=1,R=2,ie=4,G=8,B=G,me=16,Y=32;function q(e){this.options=T({},this.defaults,e||{}),this.id=Ut(),this.manager=null,this.options.enable=Me(this.options.enable,!0),this.state=De,this.simultaneous={},this.requireFail=[]}q.prototype={defaults:{},set:function(e){return T(this.options,e),this.manager&&this.manager.touchAction.update(),this},recognizeWith:function(e){if(h(e,"recognizeWith",this))return this;var t=this.simultaneous;return e=Ne(e,this),t[e.id]||(t[e.id]=e,e.recognizeWith(this)),this},dropRecognizeWith:function(e){return h(e,"dropRecognizeWith",this)?this:(e=Ne(e,this),delete this.simultaneous[e.id],this)},requireFailure:function(e){if(h(e,"requireFailure",this))return this;var t=this.requireFail;return e=Ne(e,this),ne(t,e)===-1&&(t.push(e),e.requireFailure(this)),this},dropRequireFailure:function(e){if(h(e,"dropRequireFailure",this))return this;e=Ne(e,this);var t=ne(this.requireFail,e);return t>-1&&this.requireFail.splice(t,1),this},hasRequireFailures:function(){return this.requireFail.length>0},canRecognizeWith:function(e){return!!this.simultaneous[e.id]},emit:function(e){var t=this,n=this.state;function i(o){t.manager.emit(o,e)}n<G&&i(t.options.event+pt(n)),i(t.options.event),e.additionalEvent&&i(e.additionalEvent),n>=G&&i(t.options.event+pt(n))},tryEmit:function(e){if(this.canEmit())return this.emit(e);this.state=Y},canEmit:function(){for(var e=0;e<this.requireFail.length;){if(!(this.requireFail[e].state&(Y|De)))return!1;e++}return!0},recognize:function(e){var t=T({},e);if(!V(this.options.enable,[this,t])){this.reset(),this.state=Y;return}this.state&(B|me|Y)&&(this.state=De),this.state=this.process(t),this.state&(R|ie|G|me)&&this.tryEmit(t)},process:function(e){},getTouchAction:function(){},reset:function(){}};function pt(e){return e&me?"cancel":e&G?"end":e&ie?"move":e&R?"start":""}function vt(e){return e==de?"down":e==fe?"up":e==ce?"left":e==he?"right":""}function Ne(e,t){var n=t.manager;return n?n.get(e):e}function $(){q.apply(this,arguments)}_($,q,{defaults:{pointers:1},attrTest:function(e){var t=this.options.pointers;return t===0||e.pointers.length===t},process:function(e){var t=this.state,n=e.eventType,i=t&(R|ie),o=this.attrTest(e);return i&&(n&w||!o)?t|me:i||o?n&F?t|G:t&R?t|ie:R:Y}});function Pe(){$.apply(this,arguments),this.pX=null,this.pY=null}_(Pe,$,{defaults:{event:"pan",threshold:10,pointers:1,direction:Ke},getTouchAction:function(){var e=this.options.direction,t=[];return e&k&&t.push(ve),e&Z&&t.push(pe),t},directionTest:function(e){var t=this.options,n=!0,i=e.distance,o=e.direction,u=e.deltaX,v=e.deltaY;return o&t.direction||(t.direction&k?(o=u===0?ye:u<0?ce:he,n=u!=this.pX,i=Math.abs(e.deltaX)):(o=v===0?ye:v<0?fe:de,n=v!=this.pY,i=Math.abs(e.deltaY))),e.direction=o,n&&i>t.threshold&&o&t.direction},attrTest:function(e){return $.prototype.attrTest.call(this,e)&&(this.state&R||!(this.state&R)&&this.directionTest(e))},emit:function(e){this.pX=e.deltaX,this.pY=e.deltaY;var t=vt(e.direction);t&&(e.additionalEvent=this.options.event+t),this._super.emit.call(this,e)}});function He(){$.apply(this,arguments)}_(He,$,{defaults:{event:"pinch",threshold:0,pointers:2},getTouchAction:function(){return[J]},attrTest:function(e){return this._super.attrTest.call(this,e)&&(Math.abs(e.scale-1)>this.options.threshold||this.state&R)},emit:function(e){if(e.scale!==1){var t=e.scale<1?"in":"out";e.additionalEvent=this.options.event+t}this._super.emit.call(this,e)}});function Xe(){q.apply(this,arguments),this._timer=null,this._input=null}_(Xe,q,{defaults:{event:"press",pointers:1,time:251,threshold:9},getTouchAction:function(){return[dt]},process:function(e){var t=this.options,n=e.pointers.length===t.pointers,i=e.distance<t.threshold,o=e.deltaTime>t.time;if(this._input=e,!i||!n||e.eventType&(F|w)&&!o)this.reset();else if(e.eventType&N)this.reset(),this._timer=c(function(){this.state=B,this.tryEmit()},t.time,this);else if(e.eventType&F)return B;return Y},reset:function(){clearTimeout(this._timer)},emit:function(e){this.state===B&&(e&&e.eventType&F?this.manager.emit(this.options.event+"up",e):(this._input.timeStamp=l(),this.manager.emit(this.options.event,this._input)))}});function Be(){$.apply(this,arguments)}_(Be,$,{defaults:{event:"rotate",threshold:0,pointers:2},getTouchAction:function(){return[J]},attrTest:function(e){return this._super.attrTest.call(this,e)&&(Math.abs(e.rotation)>this.options.threshold||this.state&R)}});function qe(){$.apply(this,arguments)}_(qe,$,{defaults:{event:"swipe",threshold:10,velocity:.3,direction:k|Z,pointers:1},getTouchAction:function(){return Pe.prototype.getTouchAction.call(this)},attrTest:function(e){var t=this.options.direction,n;return t&(k|Z)?n=e.overallVelocity:t&k?n=e.overallVelocityX:t&Z&&(n=e.overallVelocityY),this._super.attrTest.call(this,e)&&t&e.offsetDirection&&e.distance>this.options.threshold&&e.maxPointers==this.options.pointers&&E(n)>this.options.velocity&&e.eventType&F},emit:function(e){var t=vt(e.offsetDirection);t&&this.manager.emit(this.options.event+t,e),this.manager.emit(this.options.event,e)}});function we(){q.apply(this,arguments),this.pTime=!1,this.pCenter=!1,this._timer=null,this._input=null,this.count=0}_(we,q,{defaults:{event:"tap",pointers:1,taps:1,interval:300,time:250,threshold:9,posThreshold:10},getTouchAction:function(){return[ke]},process:function(e){var t=this.options,n=e.pointers.length===t.pointers,i=e.distance<t.threshold,o=e.deltaTime<t.time;if(this.reset(),e.eventType&N&&this.count===0)return this.failTimeout();if(i&&o&&n){if(e.eventType!=F)return this.failTimeout();var u=this.pTime?e.timeStamp-this.pTime<t.interval:!0,v=!this.pCenter||Fe(this.pCenter,e.center)<t.posThreshold;this.pTime=e.timeStamp,this.pCenter=e.center,!v||!u?this.count=1:this.count+=1,this._input=e;var A=this.count%t.taps;if(A===0)return this.hasRequireFailures()?(this._timer=c(function(){this.state=B,this.tryEmit()},t.interval,this),R):B}return Y},failTimeout:function(){return this._timer=c(function(){this.state=Y},this.options.interval,this),Y},reset:function(){clearTimeout(this._timer)},emit:function(){this.state==B&&(this._input.tapCount=this.count,this.manager.emit(this.options.event,this._input))}});function W(e,t){return t=t||{},t.recognizers=Me(t.recognizers,W.defaults.preset),new We(e,t)}W.VERSION="2.0.7",W.defaults={domEvents:!1,touchAction:ft,enable:!0,inputTarget:null,inputClass:null,preset:[[Be,{enable:!1}],[He,{enable:!1},["rotate"]],[qe,{direction:k}],[Pe,{direction:k},["swipe"]],[we],[we,{event:"doubletap",taps:2},["tap"]],[Xe]],cssProps:{userSelect:"none",touchSelect:"none",touchCallout:"none",contentZooming:"none",userDrag:"none",tapHighlightColor:"rgba(0,0,0,0)"}};var dn=1,mt=2;function We(e,t){this.options=T({},W.defaults,t||{}),this.options.inputTarget=this.options.inputTarget||e,this.handlers={},this.session={},this.recognizers=[],this.oldCssProps={},this.element=e,this.input=Xt(this),this.touchAction=new Ye(this,this.options.touchAction),gt(this,!0),y(this.options.recognizers,function(n){var i=this.add(new n[0](n[1]));n[2]&&i.recognizeWith(n[2]),n[3]&&i.requireFailure(n[3])},this)}We.prototype={set:function(e){return T(this.options,e),e.touchAction&&this.touchAction.update(),e.inputTarget&&(this.input.destroy(),this.input.target=e.inputTarget,this.input.init()),this},stop:function(e){this.session.stopped=e?mt:dn},recognize:function(e){var t=this.session;if(!t.stopped){this.touchAction.preventDefaults(e);var n,i=this.recognizers,o=t.curRecognizer;(!o||o&&o.state&B)&&(o=t.curRecognizer=null);for(var u=0;u<i.length;)n=i[u],t.stopped!==mt&&(!o||n==o||n.canRecognizeWith(o))?n.recognize(e):n.reset(),!o&&n.state&(R|ie|G)&&(o=t.curRecognizer=n),u++}},get:function(e){if(e instanceof q)return e;for(var t=this.recognizers,n=0;n<t.length;n++)if(t[n].options.event==e)return t[n];return null},add:function(e){if(h(e,"add",this))return this;var t=this.get(e.options.event);return t&&this.remove(t),this.recognizers.push(e),e.manager=this,this.touchAction.update(),e},remove:function(e){if(h(e,"remove",this))return this;if(e=this.get(e),e){var t=this.recognizers,n=ne(t,e);n!==-1&&(t.splice(n,1),this.touchAction.update())}return this},on:function(e,t){if(e!==f&&t!==f){var n=this.handlers;return y(Ce(e),function(i){n[i]=n[i]||[],n[i].push(t)}),this}},off:function(e,t){if(e!==f){var n=this.handlers;return y(Ce(e),function(i){t?n[i]&&n[i].splice(ne(n[i],t),1):delete n[i]}),this}},emit:function(e,t){this.options.domEvents&&pn(e,t);var n=this.handlers[e]&&this.handlers[e].slice();if(!(!n||!n.length)){t.type=e,t.preventDefault=function(){t.srcEvent.preventDefault()};for(var i=0;i<n.length;)n[i](t),i++}},destroy:function(){this.element&&gt(this,!1),this.handlers={},this.session={},this.input.destroy(),this.element=null}};function gt(e,t){var n=e.element;if(!!n.style){var i;y(e.options.cssProps,function(o,u){i=_e(n.style,u),t?(e.oldCssProps[i]=n.style[i],n.style[i]=o):n.style[i]=e.oldCssProps[i]||""}),t||(e.oldCssProps={})}}function pn(e,t){var n=a.createEvent("Event");n.initEvent(e,!0,!0),n.gesture=t,t.target.dispatchEvent(n)}T(W,{INPUT_START:N,INPUT_MOVE:j,INPUT_END:F,INPUT_CANCEL:w,STATE_POSSIBLE:De,STATE_BEGAN:R,STATE_CHANGED:ie,STATE_ENDED:G,STATE_RECOGNIZED:B,STATE_CANCELLED:me,STATE_FAILED:Y,DIRECTION_NONE:ye,DIRECTION_LEFT:ce,DIRECTION_RIGHT:he,DIRECTION_UP:fe,DIRECTION_DOWN:de,DIRECTION_HORIZONTAL:k,DIRECTION_VERTICAL:Z,DIRECTION_ALL:Ke,Manager:We,Input:b,TouchAction:Ye,TouchInput:Ae,MouseInput:Se,PointerEventInput:xe,TouchMouseInput:$e,SingleTouchInput:at,Recognizer:q,AttrRecognizer:$,Tap:we,Pan:Pe,Swipe:qe,Pinch:He,Rotate:Be,Press:Xe,on:z,off:te,each:y,merge:D,extend:I,assign:T,inherit:_,bindFn:x,prefixed:_e});var vn=typeof s!="undefined"?s:typeof self!="undefined"?self:{};vn.Hammer=W,typeof f=="function"&&f.amd?f(function(){return W}):r.exports?r.exports=W:s[S]=W})(window,document,"Hammer")})(Dt);var Nt=Dt.exports;const wn=ge({name:"RadioBox",props:{value:{type:[Number,String],default:()=>0},options:{type:Array,default:()=>[]}},emits:["input"],setup(r,{emit:s,slots:a,attrs:S}){const f=Ot()+"-",C=g=>{s("input",g)};return _n(()=>r.options,(g,p)=>{C(g[0].value)}),{uuid:f,updateSelected:C}}}),bn={class:"radio-box"},Rn=["id","onClick","name","checked"],Mn=["for"];function Un(r,s,a,S,f,C){return Q(),K("div",bn,[(Q(!0),K(yn,null,In(r.options,(g,p)=>(Q(),K("div",{key:r.uuid+p,class:"radio-item"},[m("input",{type:"radio",id:r.uuid+p,onClick:d=>r.updateSelected(g.value),name:r.uuid,checked:r.value===g.value},null,8,Rn),m("label",{for:r.uuid+p,class:"radio-label"},Ct(g.text),9,Mn)]))),128))])}var Pt=Te(wn,[["render",Un]]);const Ln=ge({name:"SingleRadioBox",props:{value:{type:Boolean,default:()=>!1}},emits:["input"],setup(r,{emit:s,slots:a,attrs:S}){return{uuid:Ot(),updateSelected:g=>{s("input",!g)}}}}),xn={class:"radio-box"},$n={class:"radio-item"},kn=["id","name","checked"],Yn=["for"];function Hn(r,s,a,S,f,C){return Q(),K("div",xn,[m("div",$n,[m("input",{type:"radio",id:r.uuid,onClick:s[0]||(s[0]=g=>r.updateSelected(r.value)),name:r.uuid,checked:r.value},null,8,kn),m("label",{for:r.uuid,class:"radio-label"},"\xA0",8,Yn)])])}var wt=Te(Ln,[["render",Hn]]);const Xn=ge({name:"WordOperator",components:{[Pt.name]:Pt,[wt.name]:wt},emits:["operator"],props:{initData:{type:Object,default:()=>({type:"slide",text:"\u8C2D\u677E\u97F5\uFF0C\u4F60\u771F\u68D2",size:"large",direction:"left",speed:1,count:"n",isSquareBg:!0,isFullScreen:!1,color:"#fff",bgColor:"#c0c0c0"})}},setup(r,{emit:s,slots:a,attrs:S}){const{proxy:f}=It(),C=Et({wordAttr:{type:"slide",text:"\u8C2D\u677E\u97F5\uFF0C\u4F60\u771F\u68D2",size:"large",direction:"left",speed:1,count:"n",isSquareBg:!0,isFullScreen:!1,color:"#fff",bgColor:"#c0c0c0"},typeOptions:[{text:"\u95EA\u70C1",value:"blink"},{text:"\u6ED1\u52A8",value:"slide"}],sizeOptions:[{text:"\u4E2D\u676F",value:"middle"},{text:"\u5927\u676F",value:"large"},{text:"\u7279\u5927\u676F",value:"heavy"}],directionOptions:[{text:"\u5DE6",value:"left"},{text:"\u53F3",value:"right"},{text:"\u4E0A",value:"up"},{text:"\u4E0B",value:"down"}],speedOptions:[{text:"0.5",value:.5},{text:"1",value:1},{text:"1.5",value:1.5},{text:"2",value:2}],countOptions:[{text:"1",value:"1"},{text:"2",value:"2"},{text:"3",value:"3"},{text:"n",value:"n"}]}),g=(l="close",c=void 0)=>{s("operator",{type:l,data:c})},p=(l,c)=>{C.wordAttr[l]=c},d=()=>{if(!C.wordAttr.text)return f==null?void 0:f.$message({text:"\u8BF7\u8F93\u5165\u6587\u5B57\u518D\u63D0\u4EA4\uFF01",type:"error"});g("confirm",C.wordAttr)},E=()=>{Object.assign(C.wordAttr,r.initData),g()};return Fn(()=>{Object.assign(C.wordAttr,r.initData)}),Ge(ze({},_t(C)),{close:g,handleInput:p,confirm:d,cancel:E})}}),U=r=>(Ft("data-v-387ab37e"),r=r(),St(),r),Bn={class:"panel"},qn=U(()=>m("div",{class:"title"},"\u6D41\u8424\u914D\u7F6E\u9762\u677F",-1)),Wn={class:"content"},Vn={class:"item"},zn=U(()=>m("div",{class:"item-title"},"\u7C7B\u578B:",-1)),Gn={class:"item"},jn=U(()=>m("div",{class:"item-title"},"\u6587\u5B57:",-1)),Zn=["value"],Jn={class:"item"},Qn=U(()=>m("div",{class:"item-title"},"\u6587\u5B57\u989C\u8272:",-1)),Kn=["value"],ei={class:"item"},ti=U(()=>m("div",{class:"item-title"},"\u80CC\u666F\u989C\u8272:",-1)),ni=["value"],ii={class:"item"},ri=U(()=>m("div",{class:"item-title"},"\u5C3A\u5BF8:",-1)),si={class:"item"},oi=U(()=>m("div",{class:"item-title"},"\u65B9\u5411:",-1)),ai={class:"item"},li=U(()=>m("div",{class:"item-title"},"\u901F\u5EA6:",-1)),ui={class:"item"},ci=U(()=>m("div",{class:"item-title"},"\u6B21\u6570:",-1)),hi={class:"item"},fi=U(()=>m("div",{class:"item-title"},"\u662F\u5426\u683C\u5B50\u5316:",-1)),di={class:"item"},pi=U(()=>m("div",{class:"item-title"},"\u662F\u5426\u5168\u5C4F:",-1)),vi=U(()=>m("span",{class:"tip"},"(\u4E0D\u652F\u6301IOS(\u0CA5_\u0CA5)",-1)),mi={class:"item"};function gi(r,s,a,S,f,C){const g=re("font-awesome-icon"),p=re("RadioBox"),d=re("SingleRadioBox"),E=Sn("trim");return Q(),K("div",Bn,[m("button",{class:"btn-close",onClick:s[0]||(s[0]=(...l)=>r.cancel&&r.cancel(...l))},[M(g,{icon:["fas","angle-double-right"]})]),qn,m("div",Wn,[m("div",Vn,[zn,M(p,{value:r.wordAttr.type,options:r.typeOptions,onInput:s[1]||(s[1]=l=>r.handleInput("type",l))},null,8,["value","options"])]),m("div",Gn,[jn,yt(m("input",{class:"item-input",value:r.wordAttr.text,placeholder:"\u8BF7\u8F93\u5165\u6587\u5B57",onInput:s[2]||(s[2]=l=>r.wordAttr.text=l.target.value)},null,40,Zn),[[E,r.wordAttr.text]])]),m("div",Jn,[Qn,m("input",{class:"item-color",value:r.wordAttr.color,type:"color",onInput:s[3]||(s[3]=l=>r.wordAttr.color=l.target.value)},null,40,Kn)]),m("div",ei,[ti,m("input",{class:"item-color",value:r.wordAttr.bgColor,type:"color",onInput:s[4]||(s[4]=l=>r.wordAttr.bgColor=l.target.value)},null,40,ni)]),m("div",ii,[ri,M(p,{value:r.wordAttr.size,options:r.sizeOptions,onInput:s[5]||(s[5]=l=>r.handleInput("size",l))},null,8,["value","options"])]),m("div",si,[oi,M(p,{value:r.wordAttr.direction,options:r.directionOptions,onInput:s[6]||(s[6]=l=>r.handleInput("direction",l))},null,8,["value","options"])]),m("div",ai,[li,M(p,{value:r.wordAttr.speed,options:r.speedOptions,onInput:s[7]||(s[7]=l=>r.handleInput("speed",l))},null,8,["value","options"])]),m("div",ui,[ci,M(p,{value:r.wordAttr.count,options:r.countOptions,onInput:s[8]||(s[8]=l=>r.handleInput("count",l))},null,8,["value","options"])]),m("div",hi,[fi,M(d,{value:r.wordAttr.isSquareBg,onInput:s[9]||(s[9]=l=>r.handleInput("isSquareBg",l))},null,8,["value"])]),m("div",di,[pi,M(d,{value:r.wordAttr.isFullScreen,onInput:s[10]||(s[10]=l=>r.handleInput("isFullScreen",l))},null,8,["value"]),vi]),m("div",mi,[m("button",{class:"button",onClick:s[11]||(s[11]=(...l)=>r.confirm&&r.confirm(...l))},"\u786E\u8BA4"),m("button",{class:"button",onClick:s[12]||(s[12]=(...l)=>r.cancel&&r.cancel(...l))},"\u53D6\u6D88")])])])}var bt=Te(Xn,[["render",gi],["__scopeId","data-v-387ab37e"]]);const Ti=ge({name:"Cover",setup(r,{emit:s,slots:a,attrs:S}){return{}}}),Ci=r=>(Ft("data-v-2cdb0446"),r=r(),St(),r),Ei={class:"bg"},_i=Ci(()=>m("div",{id:"grid"},null,-1)),yi=[_i];function Ii(r,s,a,S,f,C){return Q(),K("div",Ei,yi)}var Rt=Te(Ti,[["render",Ii],["__scopeId","data-v-2cdb0446"]]);class Fi{constructor(){be(this,"isFullScreen");be(this,"fullScreenDocumentElement");be(this,"fullScreenDocument");this.isFullScreen=!1,this.fullScreenDocumentElement=document.documentElement,this.fullScreenDocument=document}fullScreen(){this.fullScreenDocumentElement.requestFullscreen?this.fullScreenDocumentElement.requestFullscreen():this.fullScreenDocumentElement.mozRequestFullScreen?this.fullScreenDocumentElement.mozRequestFullScreen():this.fullScreenDocumentElement.msRequestFullscreen?this.fullScreenDocumentElement.msRequestFullscreen():this.fullScreenDocumentElement.webkitRequestFullscreen&&this.fullScreenDocumentElement.webkitRequestFullscreen(),this.isFullScreen=!0}exitFullScreen(){this.fullScreenDocument.exitFullscreen?this.fullScreenDocument.exitFullscreen():this.fullScreenDocument.msExitFullscreen?this.fullScreenDocument.msExitFullscreen():this.fullScreenDocument.mozCancelFullScreen?this.fullScreenDocument.mozCancelFullScreen():this.fullScreenDocument.webkitExitFullscreen&&this.fullScreenDocument.webkitExitFullscreen(),this.isFullScreen=!1}toggleFullScreen(){this.isFullScreen?this.exitFullScreen():this.fullScreen()}}var je={exports:{}},se=1e3,oe=se*60,ae=oe*60,ee=ae*24,Si=ee*7,Ai=ee*365.25,Oi=function(r,s){s=s||{};var a=typeof r;if(a==="string"&&r.length>0)return Di(r);if(a==="number"&&isFinite(r))return s.long?Pi(r):Ni(r);throw new Error("val is not a non-empty string or a valid number. val="+JSON.stringify(r))};function Di(r){if(r=String(r),!(r.length>100)){var s=/^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(r);if(!!s){var a=parseFloat(s[1]),S=(s[2]||"ms").toLowerCase();switch(S){case"years":case"year":case"yrs":case"yr":case"y":return a*Ai;case"weeks":case"week":case"w":return a*Si;case"days":case"day":case"d":return a*ee;case"hours":case"hour":case"hrs":case"hr":case"h":return a*ae;case"minutes":case"minute":case"mins":case"min":case"m":return a*oe;case"seconds":case"second":case"secs":case"sec":case"s":return a*se;case"milliseconds":case"millisecond":case"msecs":case"msec":case"ms":return a;default:return}}}}function Ni(r){var s=Math.abs(r);return s>=ee?Math.round(r/ee)+"d":s>=ae?Math.round(r/ae)+"h":s>=oe?Math.round(r/oe)+"m":s>=se?Math.round(r/se)+"s":r+"ms"}function Pi(r){var s=Math.abs(r);return s>=ee?Re(r,s,ee,"day"):s>=ae?Re(r,s,ae,"hour"):s>=oe?Re(r,s,oe,"minute"):s>=se?Re(r,s,se,"second"):r+" ms"}function Re(r,s,a,S){var f=s>=a*1.5;return Math.round(r/a)+" "+S+(f?"s":"")}function wi(r){a.debug=a,a.default=a,a.coerce=d,a.disable=C,a.enable=f,a.enabled=g,a.humanize=Oi,a.destroy=E,Object.keys(r).forEach(l=>{a[l]=r[l]}),a.names=[],a.skips=[],a.formatters={};function s(l){let c=0;for(let h=0;h<l.length;h++)c=(c<<5)-c+l.charCodeAt(h),c|=0;return a.colors[Math.abs(c)%a.colors.length]}a.selectColor=s;function a(l){let c,h=null,y,L;function T(...I){if(!T.enabled)return;const D=T,_=Number(new Date),x=_-(c||_);D.diff=x,D.prev=c,D.curr=_,c=_,I[0]=a.coerce(I[0]),typeof I[0]!="string"&&I.unshift("%O");let V=0;I[0]=I[0].replace(/%([a-zA-Z%])/g,(z,te)=>{if(z==="%%")return"%";V++;const le=a.formatters[te];if(typeof le=="function"){const X=I[V];z=le.call(D,X),I.splice(V,1),V--}return z}),a.formatArgs.call(D,I),(D.log||a.log).apply(D,I)}return T.namespace=l,T.useColors=a.useColors(),T.color=a.selectColor(l),T.extend=S,T.destroy=a.destroy,Object.defineProperty(T,"enabled",{enumerable:!0,configurable:!1,get:()=>h!==null?h:(y!==a.namespaces&&(y=a.namespaces,L=a.enabled(l)),L),set:I=>{h=I}}),typeof a.init=="function"&&a.init(T),T}function S(l,c){const h=a(this.namespace+(typeof c=="undefined"?":":c)+l);return h.log=this.log,h}function f(l){a.save(l),a.namespaces=l,a.names=[],a.skips=[];let c;const h=(typeof l=="string"?l:"").split(/[\s,]+/),y=h.length;for(c=0;c<y;c++)!h[c]||(l=h[c].replace(/\*/g,".*?"),l[0]==="-"?a.skips.push(new RegExp("^"+l.slice(1)+"$")):a.names.push(new RegExp("^"+l+"$")))}function C(){const l=[...a.names.map(p),...a.skips.map(p).map(c=>"-"+c)].join(",");return a.enable(""),l}function g(l){if(l[l.length-1]==="*")return!0;let c,h;for(c=0,h=a.skips.length;c<h;c++)if(a.skips[c].test(l))return!1;for(c=0,h=a.names.length;c<h;c++)if(a.names[c].test(l))return!0;return!1}function p(l){return l.toString().substring(2,l.toString().length-2).replace(/\.\*\?$/,"*")}function d(l){return l instanceof Error?l.stack||l.message:l}function E(){console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.")}return a.enable(a.load()),a}var bi=wi;(function(r,s){s.formatArgs=S,s.save=f,s.load=C,s.useColors=a,s.storage=g(),s.destroy=(()=>{let d=!1;return()=>{d||(d=!0,console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`."))}})(),s.colors=["#0000CC","#0000FF","#0033CC","#0033FF","#0066CC","#0066FF","#0099CC","#0099FF","#00CC00","#00CC33","#00CC66","#00CC99","#00CCCC","#00CCFF","#3300CC","#3300FF","#3333CC","#3333FF","#3366CC","#3366FF","#3399CC","#3399FF","#33CC00","#33CC33","#33CC66","#33CC99","#33CCCC","#33CCFF","#6600CC","#6600FF","#6633CC","#6633FF","#66CC00","#66CC33","#9900CC","#9900FF","#9933CC","#9933FF","#99CC00","#99CC33","#CC0000","#CC0033","#CC0066","#CC0099","#CC00CC","#CC00FF","#CC3300","#CC3333","#CC3366","#CC3399","#CC33CC","#CC33FF","#CC6600","#CC6633","#CC9900","#CC9933","#CCCC00","#CCCC33","#FF0000","#FF0033","#FF0066","#FF0099","#FF00CC","#FF00FF","#FF3300","#FF3333","#FF3366","#FF3399","#FF33CC","#FF33FF","#FF6600","#FF6633","#FF9900","#FF9933","#FFCC00","#FFCC33"];function a(){return typeof window!="undefined"&&window.process&&(window.process.type==="renderer"||window.process.__nwjs)?!0:typeof navigator!="undefined"&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/)?!1:typeof document!="undefined"&&document.documentElement&&document.documentElement.style&&document.documentElement.style.WebkitAppearance||typeof window!="undefined"&&window.console&&(window.console.firebug||window.console.exception&&window.console.table)||typeof navigator!="undefined"&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/)&&parseInt(RegExp.$1,10)>=31||typeof navigator!="undefined"&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/)}function S(d){if(d[0]=(this.useColors?"%c":"")+this.namespace+(this.useColors?" %c":" ")+d[0]+(this.useColors?"%c ":" ")+"+"+r.exports.humanize(this.diff),!this.useColors)return;const E="color: "+this.color;d.splice(1,0,E,"color: inherit");let l=0,c=0;d[0].replace(/%[a-zA-Z%]/g,h=>{h!=="%%"&&(l++,h==="%c"&&(c=l))}),d.splice(c,0,E)}s.log=console.debug||console.log||(()=>{});function f(d){try{d?s.storage.setItem("debug",d):s.storage.removeItem("debug")}catch(E){}}function C(){let d;try{d=s.storage.getItem("debug")}catch(E){}return!d&&typeof process!="undefined"&&"env"in process&&(d={}.DEBUG),d}function g(){try{return localStorage}catch(d){}}r.exports=bi(s);const{formatters:p}=r.exports;p.j=function(d){try{return JSON.stringify(d)}catch(E){return"[UnexpectedJSONParseError]: "+E.message}}})(je,je.exports);var Ri=je.exports;function Mi(r){return Ri(r)}function Ui(){const{hostname:r,hash:s}=window.location,a=s.slice(1).replaceAll("/",":");return`${r}${a}`}const Li=ge({name:"LEDLightWord",components:{[Rt.name]:Rt,[bt.name]:bt},setup(r,{emit:s,slots:a,attrs:S}){const{proxy:f}=It(),C=new Fi,g=Mi(Ui()),p=Et({swipeInfo:{type:void 0,deltaX:void 0,deltaY:void 0,deltaTime:void 0,distance:void 0,angle:void 0,velocityX:void 0,velocityY:void 0,velocity:void 0,direction:void 0,offsetDirection:void 0,scale:void 0,rotation:void 0,center:void 0,srcEvent:void 0,target:void 0,pointerType:void 0,eventType:void 0,isFirst:void 0,isFinal:void 0,pointers:void 0,changedPointers:void 0,preventDefault:void 0},DIRECTION_MAP:{1:"NONE",2:"LEFT",4:"RIGHT",6:"HORIZONTAL",8:"UP",16:"DOWN",24:"VERTICAL",30:"ALL"},INPUT_EVENT_MAP:{1:"START",2:"MOVE",4:"END",8:"CANCEL"},RECOGNIZER_STATES_MAP:{1:"POSSIBLE",2:"BEGAN",4:"CHANGED",8:"ENDED",STATE_ENDED:"RECOGNIZED",16:"CANCELLED",32:"FAILED"},isShowPanel:!1,configData:{type:"slide",text:"\u8C2D\u677E\u97F5\uFF0C\u4F60\u771F\u68D2",size:"large",direction:"left",speed:1,count:"n",isSquareBg:!0,isFullScreen:!1,color:"#fff",bgColor:"#c0c0c0"}}),d=An(()=>Object.keys(p.swipeInfo)),E=c=>{for(const h of d.value)p.swipeInfo[h]=c[h]},l=c=>{const{type:h,data:y}=c;h==="close"?p.isShowPanel=!1:h==="confirm"&&(p.isShowPanel=!1,f==null||f.$message({text:"\u914D\u7F6E\u6210\u529F",type:"success"}),Object.assign(p.configData,y),p.configData.isFullScreen&&(C.isFullScreen||C.fullScreen()),g(`type: ${h}, data: ${JSON.stringify(y)}`))};return On(()=>{const c=document.querySelector(".container"),h=new Nt(c);h.get("swipe").set({direction:Nt.DIRECTION_ALL}),h.on("swipeleft",function(y){E(y),p.isShowPanel=!0;const{type:L="",deltaX:T="",deltaY:I="",deltaTime:D="",distance:_="",direction:x=""}=p.swipeInfo;g(`info: type ${L}, direction ${p.DIRECTION_MAP[x]}, delat ${T}, deltaY: ${I}, distance ${_}, deltaTime, ${D}`)}),h.on("swiperight",function(y){E(y),p.isShowPanel=!1;const{type:L="",deltaX:T="",deltaY:I="",deltaTime:D="",distance:_="",direction:x=""}=p.swipeInfo;g(`info: type ${L}, direction ${p.DIRECTION_MAP[x]}, delat ${T}, deltaY: ${I}, distance ${_}, deltaTime, ${D}`)}),h.on("swipeup",function(y){E(y);const{type:L="",deltaX:T="",deltaY:I="",deltaTime:D="",distance:_="",direction:x=""}=p.swipeInfo;g(`info: type ${L}, direction ${p.DIRECTION_MAP[x]}, delat ${T}, deltaY: ${I}, distance ${_}, deltaTime, ${D}`)})}),Ge(ze({},_t(p)),{onOperatorAction:l})}}),xi={class:"container"};function $i(r,s,a,S,f,C){const g=re("Cover"),p=re("WordOperator"),d=re("marquee");return Q(),K("div",xi,[M(g),M(Dn,{name:"slide"},{default:At(()=>[yt(M(p,{initData:r.configData,onOperator:r.onOperatorAction},null,8,["initData","onOperator"]),[[Nn,r.isShowPanel]])]),_:1}),M(d,{class:"sentence"},{default:At(()=>[Pn(Ct(r.configData.text),1)]),_:1})])}var Xi=Te(Li,[["render",$i],["__scopeId","data-v-35a54978"]]);export{Xi as default};
