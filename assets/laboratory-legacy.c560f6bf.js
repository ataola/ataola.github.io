!function(){function e(t){return e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e(t)}function t(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function r(e){for(var r=1;r<arguments.length;r++){var i=null!=arguments[r]?arguments[r]:{};r%2?t(Object(i),!0).forEach((function(t){n(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):t(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function n(t,r,n){return(r=function(t){var r=function(t,r){if("object"!=e(t)||!t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var i=n.call(t,r||"default");if("object"!=e(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===r?String:Number)(t)}(t,"string");return"symbol"==e(r)?r:r+""}(r))in t?Object.defineProperty(t,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[r]=n,t}var i=document.createElement("style");i.innerHTML=".container[data-v-b01c1322]{width:100%;display:flex;flex-wrap:wrap}.container .top[data-v-b01c1322]{width:100%;height:1rem;display:flex;padding:.2rem;justify-content:flex-end;box-sizing:border-box}.container .top button[data-v-b01c1322]{display:flex;justify-content:space-around;margin:.1rem;min-width:1.2rem}.container .top button[data-v-b01c1322]:last-child{margin-right:.5rem}.container .main[data-v-b01c1322]{padding:.2rem;width:100%;display:flex;box-sizing:border-box}.container .main-left[data-v-b01c1322]{display:flex;flex-shrink:0}.container .main-left .sidebar-box[data-v-b01c1322]{display:block}.container .main-right[data-v-b01c1322]{display:flex;flex-grow:1;justify-content:center;background-color:#fff;min-height:calc(100vh - 2.5rem)}\n",document.head.appendChild(i),System.register(["./index-legacy.958d3944.js"],(function(e){"use strict";var t,n,i,a,o,c,u,s,l,d,f,b;return{setters:[function(e){t=e._,n=e.d,i=e.z,a=e.h,o=e.j,c=e.k,u=e.o,s=e.c,l=e.b,d=e.f,f=e.v,b=e.r}],execute:function(){var m=n({name:"Laboratory",setup:function(e,t){t.emit,t.slots,t.attrs;var n=f(),u=i(),s=a({sideBarItem:{text:"流萤",value:"LEDLightWordIntro"},sideBarItems:[{text:"流萤",value:"LEDLightWordIntro",isNew:!0}]}),l=function(e){s.sideBarItem=s.sideBarItems.find((function(t){return t.value===e}))||{text:"流萤",value:"LEDLightWordIntro",isNew:!0};var t=e;n.push({name:t,params:{value:e}})};return o((function(){var e=u.params.value;e&&l(e)})),r(r({},c(s)),{},{changeSideBar:l})}}),p={class:"container"},v={class:"main"},y={class:"main-left"},g={class:"sidebar-box"},h={class:"main-right"};e("default",t(m,[["render",function(e,t,r,n,i,a){var o=b("side-bar"),c=b("router-view");return u(),s("div",p,[l("div",v,[l("div",y,[l("div",g,[d(o,{items:e.sideBarItems,value:e.sideBarItem.value,onInput:e.changeSideBar},null,8,["items","value","onInput"])])]),l("div",h,[d(c)])])])}],["__scopeId","data-v-b01c1322"]]))}}}))}();
