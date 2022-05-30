var Ce=Object.defineProperty;var Re=(t,e,r)=>e in t?Ce(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r;var Y=(t,e,r)=>(Re(t,typeof e!="symbol"?e+"":e,r),r);import{M as q}from"./index.68b90f16.js";var I={exports:{}},Q=function(e,r){return function(){for(var n=new Array(arguments.length),i=0;i<n.length;i++)n[i]=arguments[i];return e.apply(r,n)}},Oe=Q,E=Object.prototype.toString;function _(t){return Array.isArray(t)}function F(t){return typeof t=="undefined"}function Ae(t){return t!==null&&!F(t)&&t.constructor!==null&&!F(t.constructor)&&typeof t.constructor.isBuffer=="function"&&t.constructor.isBuffer(t)}function Z(t){return E.call(t)==="[object ArrayBuffer]"}function Ne(t){return E.call(t)==="[object FormData]"}function $e(t){var e;return typeof ArrayBuffer!="undefined"&&ArrayBuffer.isView?e=ArrayBuffer.isView(t):e=t&&t.buffer&&Z(t.buffer),e}function Te(t){return typeof t=="string"}function Pe(t){return typeof t=="number"}function ee(t){return t!==null&&typeof t=="object"}function A(t){if(E.call(t)!=="[object Object]")return!1;var e=Object.getPrototypeOf(t);return e===null||e===Object.prototype}function ge(t){return E.call(t)==="[object Date]"}function Ue(t){return E.call(t)==="[object File]"}function Be(t){return E.call(t)==="[object Blob]"}function re(t){return E.call(t)==="[object Function]"}function De(t){return ee(t)&&re(t.pipe)}function je(t){return E.call(t)==="[object URLSearchParams]"}function Le(t){return t.trim?t.trim():t.replace(/^\s+|\s+$/g,"")}function qe(){return typeof navigator!="undefined"&&(navigator.product==="ReactNative"||navigator.product==="NativeScript"||navigator.product==="NS")?!1:typeof window!="undefined"&&typeof document!="undefined"}function k(t,e){if(!(t===null||typeof t=="undefined"))if(typeof t!="object"&&(t=[t]),_(t))for(var r=0,a=t.length;r<a;r++)e.call(null,t[r],r,t);else for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&e.call(null,t[n],n,t)}function H(){var t={};function e(n,i){A(t[i])&&A(n)?t[i]=H(t[i],n):A(n)?t[i]=H({},n):_(n)?t[i]=n.slice():t[i]=n}for(var r=0,a=arguments.length;r<a;r++)k(arguments[r],e);return t}function Ie(t,e,r){return k(e,function(n,i){r&&typeof n=="function"?t[i]=Oe(n,r):t[i]=n}),t}function _e(t){return t.charCodeAt(0)===65279&&(t=t.slice(1)),t}var h={isArray:_,isArrayBuffer:Z,isBuffer:Ae,isFormData:Ne,isArrayBufferView:$e,isString:Te,isNumber:Pe,isObject:ee,isPlainObject:A,isUndefined:F,isDate:ge,isFile:Ue,isBlob:Be,isFunction:re,isStream:De,isURLSearchParams:je,isStandardBrowserEnv:qe,forEach:k,merge:H,extend:Ie,trim:Le,stripBOM:_e},x=h;function te(t){return encodeURIComponent(t).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}var ne=function(e,r,a){if(!r)return e;var n;if(a)n=a(r);else if(x.isURLSearchParams(r))n=r.toString();else{var i=[];x.forEach(r,function(f,m){f===null||typeof f=="undefined"||(x.isArray(f)?m=m+"[]":f=[f],x.forEach(f,function(l){x.isDate(l)?l=l.toISOString():x.isObject(l)&&(l=JSON.stringify(l)),i.push(te(m)+"="+te(l))}))}),n=i.join("&")}if(n){var o=e.indexOf("#");o!==-1&&(e=e.slice(0,o)),e+=(e.indexOf("?")===-1?"?":"&")+n}return e},Fe=h;function N(){this.handlers=[]}N.prototype.use=function(e,r,a){return this.handlers.push({fulfilled:e,rejected:r,synchronous:a?a.synchronous:!1,runWhen:a?a.runWhen:null}),this.handlers.length-1};N.prototype.eject=function(e){this.handlers[e]&&(this.handlers[e]=null)};N.prototype.forEach=function(e){Fe.forEach(this.handlers,function(a){a!==null&&e(a)})};var ke=N,He=h,Me=function(e,r){He.forEach(e,function(n,i){i!==r&&i.toUpperCase()===r.toUpperCase()&&(e[r]=n,delete e[i])})},ae=function(e,r,a,n,i){return e.config=r,a&&(e.code=a),e.request=n,e.response=i,e.isAxiosError=!0,e.toJSON=function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:this.config,code:this.code,status:this.response&&this.response.status?this.response.status:null}},e},Je=ae,se=function(e,r,a,n,i){var o=new Error(e);return Je(o,r,a,n,i)},ze=se,Ve=function(e,r,a){var n=a.config.validateStatus;!a.status||!n||n(a.status)?e(a):r(ze("Request failed with status code "+a.status,a.config,null,a.request,a))},$=h,We=$.isStandardBrowserEnv()?function(){return{write:function(r,a,n,i,o,u){var f=[];f.push(r+"="+encodeURIComponent(a)),$.isNumber(n)&&f.push("expires="+new Date(n).toGMTString()),$.isString(i)&&f.push("path="+i),$.isString(o)&&f.push("domain="+o),u===!0&&f.push("secure"),document.cookie=f.join("; ")},read:function(r){var a=document.cookie.match(new RegExp("(^|;\\s*)("+r+")=([^;]*)"));return a?decodeURIComponent(a[3]):null},remove:function(r){this.write(r,"",Date.now()-864e5)}}}():function(){return{write:function(){},read:function(){return null},remove:function(){}}}(),Xe=function(e){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)},Ke=function(e,r){return r?e.replace(/\/+$/,"")+"/"+r.replace(/^\/+/,""):e},Ge=Xe,Ye=Ke,Qe=function(e,r){return e&&!Ge(r)?Ye(e,r):r},M=h,Ze=["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"],er=function(e){var r={},a,n,i;return e&&M.forEach(e.split(`
`),function(u){if(i=u.indexOf(":"),a=M.trim(u.substr(0,i)).toLowerCase(),n=M.trim(u.substr(i+1)),a){if(r[a]&&Ze.indexOf(a)>=0)return;a==="set-cookie"?r[a]=(r[a]?r[a]:[]).concat([n]):r[a]=r[a]?r[a]+", "+n:n}}),r},ie=h,rr=ie.isStandardBrowserEnv()?function(){var e=/(msie|trident)/i.test(navigator.userAgent),r=document.createElement("a"),a;function n(i){var o=i;return e&&(r.setAttribute("href",o),o=r.href),r.setAttribute("href",o),{href:r.href,protocol:r.protocol?r.protocol.replace(/:$/,""):"",host:r.host,search:r.search?r.search.replace(/^\?/,""):"",hash:r.hash?r.hash.replace(/^#/,""):"",hostname:r.hostname,port:r.port,pathname:r.pathname.charAt(0)==="/"?r.pathname:"/"+r.pathname}}return a=n(window.location.href),function(o){var u=ie.isString(o)?n(o):o;return u.protocol===a.protocol&&u.host===a.host}}():function(){return function(){return!0}}();function J(t){this.message=t}J.prototype.toString=function(){return"Cancel"+(this.message?": "+this.message:"")};J.prototype.__CANCEL__=!0;var T=J,P=h,tr=Ve,nr=We,ar=ne,sr=Qe,ir=er,or=rr,z=se,ur=U,fr=T,oe=function(e){return new Promise(function(a,n){var i=e.data,o=e.headers,u=e.responseType,f;function m(){e.cancelToken&&e.cancelToken.unsubscribe(f),e.signal&&e.signal.removeEventListener("abort",f)}P.isFormData(i)&&delete o["Content-Type"];var s=new XMLHttpRequest;if(e.auth){var l=e.auth.username||"",y=e.auth.password?unescape(encodeURIComponent(e.auth.password)):"";o.Authorization="Basic "+btoa(l+":"+y)}var d=sr(e.baseURL,e.url);s.open(e.method.toUpperCase(),ar(d,e.params,e.paramsSerializer),!0),s.timeout=e.timeout;function K(){if(!!s){var v="getAllResponseHeaders"in s?ir(s.getAllResponseHeaders()):null,S=!u||u==="text"||u==="json"?s.responseText:s.response,w={data:S,status:s.status,statusText:s.statusText,headers:v,config:e,request:s};tr(function(L){a(L),m()},function(L){n(L),m()},w),s=null}}if("onloadend"in s?s.onloadend=K:s.onreadystatechange=function(){!s||s.readyState!==4||s.status===0&&!(s.responseURL&&s.responseURL.indexOf("file:")===0)||setTimeout(K)},s.onabort=function(){!s||(n(z("Request aborted",e,"ECONNABORTED",s)),s=null)},s.onerror=function(){n(z("Network Error",e,null,s)),s=null},s.ontimeout=function(){var S=e.timeout?"timeout of "+e.timeout+"ms exceeded":"timeout exceeded",w=e.transitional||ur.transitional;e.timeoutErrorMessage&&(S=e.timeoutErrorMessage),n(z(S,e,w.clarifyTimeoutError?"ETIMEDOUT":"ECONNABORTED",s)),s=null},P.isStandardBrowserEnv()){var G=(e.withCredentials||or(d))&&e.xsrfCookieName?nr.read(e.xsrfCookieName):void 0;G&&(o[e.xsrfHeaderName]=G)}"setRequestHeader"in s&&P.forEach(o,function(S,w){typeof i=="undefined"&&w.toLowerCase()==="content-type"?delete o[w]:s.setRequestHeader(w,S)}),P.isUndefined(e.withCredentials)||(s.withCredentials=!!e.withCredentials),u&&u!=="json"&&(s.responseType=e.responseType),typeof e.onDownloadProgress=="function"&&s.addEventListener("progress",e.onDownloadProgress),typeof e.onUploadProgress=="function"&&s.upload&&s.upload.addEventListener("progress",e.onUploadProgress),(e.cancelToken||e.signal)&&(f=function(v){!s||(n(!v||v&&v.type?new fr("canceled"):v),s.abort(),s=null)},e.cancelToken&&e.cancelToken.subscribe(f),e.signal&&(e.signal.aborted?f():e.signal.addEventListener("abort",f))),i||(i=null),s.send(i)})},c=h,ue=Me,lr=ae,cr={"Content-Type":"application/x-www-form-urlencoded"};function fe(t,e){!c.isUndefined(t)&&c.isUndefined(t["Content-Type"])&&(t["Content-Type"]=e)}function dr(){var t;return(typeof XMLHttpRequest!="undefined"||typeof process!="undefined"&&Object.prototype.toString.call(process)==="[object process]")&&(t=oe),t}function hr(t,e,r){if(c.isString(t))try{return(e||JSON.parse)(t),c.trim(t)}catch(a){if(a.name!=="SyntaxError")throw a}return(r||JSON.stringify)(t)}var g={transitional:{silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},adapter:dr(),transformRequest:[function(e,r){return ue(r,"Accept"),ue(r,"Content-Type"),c.isFormData(e)||c.isArrayBuffer(e)||c.isBuffer(e)||c.isStream(e)||c.isFile(e)||c.isBlob(e)?e:c.isArrayBufferView(e)?e.buffer:c.isURLSearchParams(e)?(fe(r,"application/x-www-form-urlencoded;charset=utf-8"),e.toString()):c.isObject(e)||r&&r["Content-Type"]==="application/json"?(fe(r,"application/json"),hr(e)):e}],transformResponse:[function(e){var r=this.transitional||g.transitional,a=r&&r.silentJSONParsing,n=r&&r.forcedJSONParsing,i=!a&&this.responseType==="json";if(i||n&&c.isString(e)&&e.length)try{return JSON.parse(e)}catch(o){if(i)throw o.name==="SyntaxError"?lr(o,this,"E_JSON_PARSE"):o}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};c.forEach(["delete","get","head"],function(e){g.headers[e]={}});c.forEach(["post","put","patch"],function(e){g.headers[e]=c.merge(cr)});var U=g,pr=h,mr=U,vr=function(e,r,a){var n=this||mr;return pr.forEach(a,function(o){e=o.call(n,e,r)}),e},le=function(e){return!!(e&&e.__CANCEL__)},ce=h,V=vr,yr=le,br=U,Er=T;function W(t){if(t.cancelToken&&t.cancelToken.throwIfRequested(),t.signal&&t.signal.aborted)throw new Er("canceled")}var wr=function(e){W(e),e.headers=e.headers||{},e.data=V.call(e,e.data,e.headers,e.transformRequest),e.headers=ce.merge(e.headers.common||{},e.headers[e.method]||{},e.headers),ce.forEach(["delete","get","head","post","put","patch","common"],function(n){delete e.headers[n]});var r=e.adapter||br.adapter;return r(e).then(function(n){return W(e),n.data=V.call(e,n.data,n.headers,e.transformResponse),n},function(n){return yr(n)||(W(e),n&&n.response&&(n.response.data=V.call(e,n.response.data,n.response.headers,e.transformResponse))),Promise.reject(n)})},p=h,de=function(e,r){r=r||{};var a={};function n(s,l){return p.isPlainObject(s)&&p.isPlainObject(l)?p.merge(s,l):p.isPlainObject(l)?p.merge({},l):p.isArray(l)?l.slice():l}function i(s){if(p.isUndefined(r[s])){if(!p.isUndefined(e[s]))return n(void 0,e[s])}else return n(e[s],r[s])}function o(s){if(!p.isUndefined(r[s]))return n(void 0,r[s])}function u(s){if(p.isUndefined(r[s])){if(!p.isUndefined(e[s]))return n(void 0,e[s])}else return n(void 0,r[s])}function f(s){if(s in r)return n(e[s],r[s]);if(s in e)return n(void 0,e[s])}var m={url:o,method:o,data:o,baseURL:u,transformRequest:u,transformResponse:u,paramsSerializer:u,timeout:u,timeoutMessage:u,withCredentials:u,adapter:u,responseType:u,xsrfCookieName:u,xsrfHeaderName:u,onUploadProgress:u,onDownloadProgress:u,decompress:u,maxContentLength:u,maxBodyLength:u,transport:u,httpAgent:u,httpsAgent:u,cancelToken:u,socketPath:u,responseEncoding:u,validateStatus:f};return p.forEach(Object.keys(e).concat(Object.keys(r)),function(l){var y=m[l]||i,d=y(l);p.isUndefined(d)&&y!==f||(a[l]=d)}),a},he={version:"0.25.0"},Sr=he.version,X={};["object","boolean","number","function","string","symbol"].forEach(function(t,e){X[t]=function(a){return typeof a===t||"a"+(e<1?"n ":" ")+t}});var pe={};X.transitional=function(e,r,a){function n(i,o){return"[Axios v"+Sr+"] Transitional option '"+i+"'"+o+(a?". "+a:"")}return function(i,o,u){if(e===!1)throw new Error(n(o," has been removed"+(r?" in "+r:"")));return r&&!pe[o]&&(pe[o]=!0,console.warn(n(o," has been deprecated since v"+r+" and will be removed in the near future"))),e?e(i,o,u):!0}};function xr(t,e,r){if(typeof t!="object")throw new TypeError("options must be an object");for(var a=Object.keys(t),n=a.length;n-- >0;){var i=a[n],o=e[i];if(o){var u=t[i],f=u===void 0||o(u,i,t);if(f!==!0)throw new TypeError("option "+i+" must be "+f);continue}if(r!==!0)throw Error("Unknown option "+i)}}var Cr={assertOptions:xr,validators:X},me=h,Rr=ne,ve=ke,ye=wr,B=de,be=Cr,C=be.validators;function O(t){this.defaults=t,this.interceptors={request:new ve,response:new ve}}O.prototype.request=function(e,r){if(typeof e=="string"?(r=r||{},r.url=e):r=e||{},!r.url)throw new Error("Provided config url is not valid");r=B(this.defaults,r),r.method?r.method=r.method.toLowerCase():this.defaults.method?r.method=this.defaults.method.toLowerCase():r.method="get";var a=r.transitional;a!==void 0&&be.assertOptions(a,{silentJSONParsing:C.transitional(C.boolean),forcedJSONParsing:C.transitional(C.boolean),clarifyTimeoutError:C.transitional(C.boolean)},!1);var n=[],i=!0;this.interceptors.request.forEach(function(d){typeof d.runWhen=="function"&&d.runWhen(r)===!1||(i=i&&d.synchronous,n.unshift(d.fulfilled,d.rejected))});var o=[];this.interceptors.response.forEach(function(d){o.push(d.fulfilled,d.rejected)});var u;if(!i){var f=[ye,void 0];for(Array.prototype.unshift.apply(f,n),f=f.concat(o),u=Promise.resolve(r);f.length;)u=u.then(f.shift(),f.shift());return u}for(var m=r;n.length;){var s=n.shift(),l=n.shift();try{m=s(m)}catch(y){l(y);break}}try{u=ye(m)}catch(y){return Promise.reject(y)}for(;o.length;)u=u.then(o.shift(),o.shift());return u};O.prototype.getUri=function(e){if(!e.url)throw new Error("Provided config url is not valid");return e=B(this.defaults,e),Rr(e.url,e.params,e.paramsSerializer).replace(/^\?/,"")};me.forEach(["delete","get","head","options"],function(e){O.prototype[e]=function(r,a){return this.request(B(a||{},{method:e,url:r,data:(a||{}).data}))}});me.forEach(["post","put","patch"],function(e){O.prototype[e]=function(r,a,n){return this.request(B(n||{},{method:e,url:r,data:a}))}});var Or=O,Ar=T;function R(t){if(typeof t!="function")throw new TypeError("executor must be a function.");var e;this.promise=new Promise(function(n){e=n});var r=this;this.promise.then(function(a){if(!!r._listeners){var n,i=r._listeners.length;for(n=0;n<i;n++)r._listeners[n](a);r._listeners=null}}),this.promise.then=function(a){var n,i=new Promise(function(o){r.subscribe(o),n=o}).then(a);return i.cancel=function(){r.unsubscribe(n)},i},t(function(n){r.reason||(r.reason=new Ar(n),e(r.reason))})}R.prototype.throwIfRequested=function(){if(this.reason)throw this.reason};R.prototype.subscribe=function(e){if(this.reason){e(this.reason);return}this._listeners?this._listeners.push(e):this._listeners=[e]};R.prototype.unsubscribe=function(e){if(!!this._listeners){var r=this._listeners.indexOf(e);r!==-1&&this._listeners.splice(r,1)}};R.source=function(){var e,r=new R(function(n){e=n});return{token:r,cancel:e}};var Nr=R,$r=function(e){return function(a){return e.apply(null,a)}},Tr=h,Pr=function(e){return Tr.isObject(e)&&e.isAxiosError===!0},Ee=h,gr=Q,D=Or,Ur=de,Br=U;function we(t){var e=new D(t),r=gr(D.prototype.request,e);return Ee.extend(r,D.prototype,e),Ee.extend(r,e),r.create=function(n){return we(Ur(t,n))},r}var b=we(Br);b.Axios=D;b.Cancel=T;b.CancelToken=Nr;b.isCancel=le;b.VERSION=he.version;b.all=function(e){return Promise.all(e)};b.spread=$r;b.isAxiosError=Pr;I.exports=b;I.exports.default=b;var Dr=I.exports;const j=class{static init(){this.axiosInstance=Dr.create({baseURL:"/api",timeout:1e4}),this.initInterceptors()}static initInterceptors(){this.axiosInstance.defaults.withCredentials=!0,this.axiosInstance.defaults.headers["X-Requested-With"]="XMLHttpRequest",this.axiosInstance.defaults.headers.post["Content-Type"]="application/json",this.axiosInstance.interceptors.request.use(e=>{const r=localStorage.getItem("ACCESS_TOKEN");return r&&e&&e.headers&&(e.headers.Authorization="Bearer "+r),e},e=>{alert(e)}),this.axiosInstance.interceptors.response.use(e=>{const{data:{code:r,message:a,data:n}}=e;return(e.status!==200||r!==0)&&j.errorHandle(e,a),n},e=>{const{response:r}=e;return r?j.errorHandle(r):q({text:"\u7F51\u7EDC\u8FDE\u63A5\u5F02\u5E38,\u8BF7\u7A0D\u540E\u518D\u8BD5!",type:"error"}),Promise.reject(r==null?void 0:r.data)})}static errorHandle(e,r){switch(e.status){case 401:break;case 403:break;case 404:q({text:"\u8BF7\u6C42\u7684\u8D44\u6E90\u4E0D\u5B58\u5728",type:"error"});break;default:r&&q({text:r,type:"error"})}}};let Se=j;Y(Se,"axiosInstance");export{Se as R};
