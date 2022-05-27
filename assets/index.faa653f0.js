var z=Object.defineProperty,N=Object.defineProperties;var x=Object.getOwnPropertyDescriptors;var w=Object.getOwnPropertySymbols;var V=Object.prototype.hasOwnProperty,T=Object.prototype.propertyIsEnumerable;var f=(e,t,a)=>t in e?z(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,b=(e,t)=>{for(var a in t||(t={}))V.call(t,a)&&f(e,a,t[a]);if(w)for(var a of w(t))T.call(t,a)&&f(e,a,t[a]);return e},j=(e,t)=>N(e,x(t));import{_ as S,s as L}from"./index.911e3d48.js";import{d as k,t as M,j as h,o as p,c,b as s,f as A,n as I,r as P,Q as y,a as D,F as C,e as _,k as J}from"./vendor.90a5a758.js";const R=k({name:"NavigationItem",props:{value:{type:Object,default:()=>({})}},setup(e,{emit:t,slots:a,attrs:m}){return{navItem:M(e,"value"),display:o=>L(o)}}}),q={class:"nav-box"},B={class:"left"},U={class:"right"},O={class:"title"},G=["href"],F=["title"];function $(e,t,a,m,r,d){const o=h("Icon");return p(),c("div",q,[s("div",B,[A(o,{value:e.navItem.avatar},null,8,["value"])]),s("div",U,[s("div",O,[s("a",{href:e.navItem.url,target:"_blank"},I(e.navItem.name),9,G)]),s("div",{class:"desc",title:e.navItem.description},I(e.display(e.navItem.description)),9,F)])])}var E=S(R,[["render",$],["__scopeId","data-v-8672def6"]]);const g={javascript:"JS",typescript:"TS",html:"HTML",design:"DESIGN",vue:"Vue",react:"REACT",angular:"ANGULAR",css:"CSS",babel:"BABEL",graphql:"GRAPHQL",nodejs:"NODEJS",forum:"FORUM",deno:"DENO",visualization:"VISUALIZATION",util:"UTIL",weekly:"WEEKLY",tools:"TOOLS",website:"WEBSITE",zjt:"ZJT613",friendlink:"FRIENDLINK"};var W=[{id:"1",name:"iconfont",type:"design",url:"https://www.iconfont.cn/",avatar:"design",description:"\u963F\u91CC\u5988\u5988MUX\u503E\u529B\u6253\u9020\u7684\u77E2\u91CF\u56FE\u6807\u7BA1\u7406\u3001\u4EA4\u6D41\u5E73\u53F0\u3002"},{id:"2",name:"iconPark",type:"design",url:"https://iconpark.oceanengine.com/",avatar:"design",description:"IconPark\u662F\u6280\u672F\u9A71\u52A8\u56FE\u6807\u6837\u5F0F\u7684\u5F00\u6E90\u56FE\u6807\u5E93"},{id:"3",name:"Font Awesome",type:"design",url:"https://fontawesome.com/icons",avatar:"design",description:"Font Awesome is the internet's icon library and toolkit used by millions of designers, developers, and content creators."},{id:"4",name:"VUE3",type:"vue",url:"https://vuejs.org/guide/introduction.html",avatar:"vue",description:"Vue is a JavaScript framework for building user interfaces. It builds on top of standard HTML, CSS and JavaScript, and provides a declarative and component-based programming model that helps you efficiently develop user interfaces, be it simple or complex."},{id:"5",name:"VUE2",type:"vue",url:"https://v2.vuejs.org/v2/guide/",avatar:"vue",description:"Vue is a progressive framework for building user interfaces. Unlike other monolithic frameworks, Vue is designed from the ground up to be incrementally adoptable. The core library is focused on the view layer only, and is easy to pick up and integrate with other libraries or existing projects. On the other hand, Vue is also perfectly capable of powering sophisticated Single-Page Applications when used in combination with modern tooling and supporting libraries."},{id:"6",name:"REACT",type:"react",url:"https://reactjs.org/docs/getting-started.html",avatar:"react",description:"React is a JavaScript library for building user interfaces."},{id:"7",name:"Font Awesome \u4E2D\u6587\u7F51",type:"design",url:"http://www.fontawesome.com.cn/faicons/",avatar:"design",description:"Font Awesome \u5B57\u4F53\u4E3A\u60A8\u63D0\u4F9B\u53EF\u7F29\u653E\u77E2\u91CF\u56FE\u6807,\u5B83\u53EF\u4EE5\u88AB\u5B9A\u5236\u5927\u5C0F\u3001\u989C\u8272\u3001\u9634\u5F71\u4EE5\u53CA\u4EFB\u4F55\u53EF\u4EE5\u7528CSS\u7684\u6837\u5F0F\u3002"},{id:"8",name:"MDN - JAVASCRIPT",type:"javascript",url:"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript",avatar:"javascript",description:"\u6743\u5A01\u7684Javascript\u624B\u518C\u6587\u6863"},{id:"9",name:"\u5B66\u4E60CSS\u5E03\u5C40",type:"css",url:"https://zh.learnlayout.com/",avatar:"css",description:"\u672C\u7AD9\u6559\u6388\u7684\u662F\u73B0\u5728\u5E7F\u6CDB\u4F7F\u7528\u4E8E\u7F51\u7AD9\u5E03\u5C40\u9886\u57DF\u7684CSS\u57FA\u7840."},{id:"10",name:"DOCS",type:"babel",url:"https://babeljs.io/docs/en/",avatar:"babel",description:"Babel is a toolchain that is mainly used to convert ECMAScript 2015+ code into a backwards compatible version of JavaScript in current and older browsers or environments."},{id:"11",name:"PLAYGROUND",type:"babel",url:"https://babeljs.io/repl#?browsers=defaults%2C%20not%20ie%2011%2C%20not%20ie_mob%2011&build=&builtIns=false&corejs=3.6&spec=false&loose=false&code_lz=Q&debug=false&forceAllTransforms=false&shippedProposals=false&circleciRepo=&evaluate=false&fileSize=false&timeTravel=false&sourceType=module&lineWrap=true&presets=env%2Creact%2Cstage-2&prettier=false&targets=&version=7.17.9&externalPlugins=&assumptions=%7B%7D",avatar:"babel",description:"an online playground for babel."},{id:"12",name:"VuePress",type:"vue",url:"https://vuepress.vuejs.org/guide/getting-started.html#prerequisites/",avatar:"vue",description:"Build document and website easily with vuePress."},{id:"13",name:"Vuex",type:"vue",url:"https://vuex.vuejs.org/",avatar:"vue",description:"Vuex is a state management pattern + library for Vue.js applications. It serves as a centralized store for all the components in an application, with rules ensuring that the state can only be mutated in a predictable fashion."},{id:"14",name:"Pinia",type:"vue",url:"https://pinia.vuejs.org/introduction.html",avatar:"vue",description:"Pinia started as an experiment to redesign what a Store for Vue could look like with the Composition API around November 2019. Since then, the initial principles are still the same, but Pinia works for both Vue 2 and Vue 3 and doesn't require you to use the composition API. The API is the same for both except for installation and SSR, and these docs are targeted to Vue 3 with notes about Vue 2 whenever necessary so it can be read by Vue 2 and Vue 3 users!"},{id:"15",name:"Vue CLI",type:"vue",url:"https://cli.vuejs.org/guide/",avatar:"vue",description:"Vue CLI aims to be the standard tooling baseline for the Vue ecosystem. It ensures the various build tools work smoothly together with sensible defaults so you can focus on writing your app instead of spending days wrangling with configurations. At the same time, it still offers the flexibility to tweak the config of each tool without the need for ejecting."},{id:"16",name:"Vite\u5B98\u7F51\u6587\u6863",type:"vue",url:"https://cn.vitejs.dev/guide/",avatar:"vue",description:"Vite\u662F\u4E00\u79CD\u65B0\u578B\u524D\u7AEF\u6784\u5EFA\u5DE5\u5177\uFF0C\u80FD\u591F\u663E\u8457\u63D0\u5347\u524D\u7AEF\u5F00\u53D1\u4F53\u9A8C\u3002\u5B83\u4E3B\u8981\u7531\u4E24\u90E8\u5206\u7EC4\u6210"},{id:"17",name:"ANGULAR",type:"angular",url:"https://angular.io/docs",avatar:"angular",description:"Angular is an application design framework and development platform for creating efficient and sophisticated single-page apps."},{id:"18",name:"ANGULAR \u4E2D\u6587\u7F51",type:"angular",url:"https://angular.cn/docs",avatar:"angular",description:"Angular \u662F\u4E00\u4E2A\u5E94\u7528\u8BBE\u8BA1\u6846\u67B6\u4E0E\u5F00\u53D1\u5E73\u53F0\uFF0C\u7528\u4E8E\u521B\u5EFA\u9AD8\u6548\u3001\u590D\u6742\u3001\u7CBE\u81F4\u7684\u5355\u9875\u9762\u5E94\u7528"},{id:"19",name:"GraphQL",type:"graphql",url:"https://graphql.org/",avatar:"graphql",description:"GraphQL is a query language for APIs and a runtime for fulfilling those queries with your existing data. GraphQL provides a complete and understandable description of the data in your API, gives clients the power to ask for exactly what they need and nothing more, makes it easier to evolve APIs over time, and enables powerful developer tools."},{id:"19",name:"Vue Apollo & v2",type:"vue",url:"https://apollo.vuejs.org/",avatar:"vue",description:"This library integrates apollo (opens new window)in your Vue (opens new window)components with declarative queries. Compatible with Vue 2.0+."},{id:"20",name:"Vue Apollo & v3",type:"vue",url:"https://v4.apollo.vuejs.org/guide/#compatibility",avatar:"vue",description:"This library integrates apollo (opens new window)in your Vue (opens new window)components with declarative queries."},{id:"21",name:"Apollo",type:"graphql",url:"https://www.apollographql.com/docs/",avatar:"graphql",description:"Apollo is a platform for building a unified graph, a communication layer that helps you manage the flow of data between your application clients (such as web and native apps) and your backend services. At the heart of the graph is a query language called GraphQL."},{id:"22",name:"apollo react",type:"react",url:"https://www.apollographql.com/docs/react/",avatar:"react",description:"Apollo Client is a comprehensive state management library for JavaScript that enables you to manage both local and remote data with GraphQL. Use it to fetch, cache, and modify application data, all while automatically updating your UI."},{id:"23",name:"DOCS",type:"nodejs",url:"https://nodejs.org/docs/latest-v17.x/api/",avatar:"nodejs",description:"Node.js v17.9.0 documentation"},{id:"24",name:"NODJS\u4E2D\u6587\u6587\u6863",type:"nodejs",url:"http://nodejs.cn/api/",avatar:"nodejs",description:"Node.js v18.0.0 \u6587\u6863"},{id:"25",name:"CNODEJS",type:"forum",url:"https://cnodejs.org/",avatar:"nodejs",description:"NODJS\u4E13\u4E1A\u4E2D\u6587\u793E\u533A"},{id:"26",name:"DENO",type:"deno",url:"https://deno.land/manual",avatar:"deno",description:"Deno is a JavaScript/TypeScript runtime with secure defaults and a great developer experience."},{id:"27",name:"DENO\u4E2D\u6587\u793E\u533A",type:"forum",url:"https://deno.js.cn/",avatar:"deno",description:"Deno \u4E2D\u6587\u793E\u533A"},{id:"28",name:"CSS-TRICKS",type:"css",url:"https://css-tricks.com/",avatar:"css",description:"amazing website to study css"},{id:"29",name:"DOCS",type:"typescript",url:"https://www.typescriptlang.org/docs/handbook/typescript-from-scratch.html",avatar:"typescript",description:"TypeScript for the New Programmer"},{id:"30",name:"PLAYGROUND",type:"typescript",url:"https://www.typescriptlang.org/play?#code",avatar:"typescript",description:"online website runtime to study typescript"},{id:"31",name:"Ant Design",type:"react",url:"https://ant.design/docs/react/introduce-cn",avatar:"ant-design",description:"antd \u662F\u57FA\u4E8E Ant Design \u8BBE\u8BA1\u4F53\u7CFB\u7684 React UI \u7EC4\u4EF6\u5E93\uFF0C\u4E3B\u8981\u7528\u4E8E\u7814\u53D1\u4F01\u4E1A\u7EA7\u4E2D\u540E\u53F0\u4EA7\u54C1"},{id:"32",name:"Elment UI",type:"vue",url:"https://element.eleme.cn/#/zh-CN/component/installation",avatar:"vue",description:"elementUI \u662F\u4E00\u4E2AUI\u7EC4\u4EF6\u5E93"},{id:"33",name:"vant",type:"vue",url:"https://youzan.github.io/vant/#/zh-CN",avatar:"vue",description:"vant \u662F\u4E00\u4E2A\u79FB\u52A8\u7AEFUI\u7EC4\u4EF6\u5E93"},{id:"34",name:"Taro",type:"react",url:"https://taro-docs.jd.com/taro/docs/",avatar:"react",description:"Taro \u662F\u4E00\u4E2A\u5F00\u653E\u5F0F\u8DE8\u7AEF\u8DE8\u6846\u67B6\u89E3\u51B3\u65B9\u6848\uFF0C\u652F\u6301\u4F7F\u7528 React/Vue/Nerv \u7B49\u6846\u67B6\u6765\u5F00\u53D1 \u5FAE\u4FE1 / \u4EAC\u4E1C / \u767E\u5EA6 / \u652F\u4ED8\u5B9D / \u5B57\u8282\u8DF3\u52A8 / QQ / \u98DE\u4E66 \u5C0F\u7A0B\u5E8F / H5 / RN \u7B49\u5E94\u7528\u3002"},{id:"35",name:"Echarts",type:"visualization",url:"https://echarts.apache.org/handbook/zh/get-started/",avatar:"visualization",description:"\u4E00\u4E2A\u4F18\u79C0\u7684\u524D\u7AEF\u56FE\u8868\u5E93"},{id:"36",name:"Ant Design Vue",type:"vue",url:"https://www.antdv.com/components/overview",avatar:"vue",description:"\u4E00\u4E2A Vue\u7684UI\u7EC4\u4EF6\u5E93"},{id:"37",name:"antv",type:"visualization",url:"https://antv.vision/zh",avatar:"visualization",description:"\u4E00\u4E2A\u4F18\u79C0\u7684\u524D\u7AEF\u56FE\u8868\u5E93"},{id:"38",name:"ES6\u5165\u95E8\u6559\u7A0B",type:"javascript",url:"https://es6.ruanyifeng.com/",avatar:"javascript",description:"Javascript\u8BED\u6CD5 - ES6\u5165\u95E8\u6559\u7A0B"},{id:"39",name:"Dribbble",type:"design",url:"https://dribbble.com/",avatar:"design",description:"\u8FFD\u6CE2\u8BBE\u8BA1"},{id:"40",name:"animate.css",type:"css",url:"https://animate.style/#documentation",avatar:"css",description:"Animate.css is a library of ready-to-use, cross-browser animations for use in your web projects. Great for emphasis, home pages, sliders, and attention-guiding hints."},{id:"41",name:"SASS",type:"css",url:"https://sass-lang.com/guide",avatar:"scss",description:"Sass is a stylesheet language that\u2019s compiled to CSS. It allows you to use variables, nested rules, mixins, functions, and more, all with a fully CSS-compatible syntax. Sass helps keep large stylesheets well-organized and makes it easy to share design within and across projects."},{id:"42",name:"LESS",type:"css",url:"https://lesscss.org/",avatar:"less",description:"Less (which stands for Leaner Style Sheets) is a backwards-compatible language extension for CSS. This is the official documentation for Less, the language and Less.js, the JavaScript tool that converts your Less styles to CSS styles."},{id:"43",name:"\u7A00\u571F\u6398\u91D1",type:"forum",url:"https://juejin.cn/",avatar:"forum",description:"\u5B57\u8282\u8DF3\u52A8\u65D7\u4E0B\u6280\u672F\u793E\u533A"},{id:"44",name:"\u535A\u5BA2\u56ED",type:"forum",url:"https://www.cnblogs.com/",avatar:"forum",description:"\u65E9\u671F\u7684\u6280\u672F\u6587\u7AE0\u5199\u4F5C\u57FA\u5730"},{id:"45",name:"Vue Router",type:"vue",url:"https://router.vuejs.org/installation.html",avatar:"vue",description:"a router library for vue"},{id:"46",name:"Lodash",type:"util",url:"https://lodash.com/",avatar:"util",description:"A modern JavaScript utility library delivering modularity, performance & extras.e"},{id:"47",name:"Nuxt",type:"vue",url:"https://nuxtjs.org/docs/get-started/installation",avatar:"vue",description:"A ssr framework for vue."},{id:"48",name:"\u524D\u7AEF\u7CBE\u8BFB\u5468\u520A",type:"weekly",url:"https://github.com/ascoders/weekly",avatar:"weekly",description:"\u4E00\u4EFD\u6765\u81EAgithub\u7684\u524D\u7AEF\u5468\u520A."},{id:"49",name:"Javascript Weekly",type:"weekly",url:"https://javascriptweekly.com/issues",avatar:"javascript",description:"Javascript Weekyly Archives."},{id:"50",name:"\u5947\u821E\u5468\u520A",type:"weekly",url:"https://weekly.75.team/",avatar:"weekly",description:"360\u5947\u821E\u56E2\u7684\u5468\u520A"},{id:"51",name:"V8",type:"nodejs",url:"https://v8.js.cn/",avatar:"nodejs",description:"V8\u5F15\u64CE"},{id:"52",name:"regexr",type:"tools",url:"https://regexr.com/",avatar:"tools",description:"\u5728\u7EBF\u6B63\u5219\u8868\u8FBE\u5F0F\u5DE5\u5177"},{id:"53",name:"uigradients",type:"tools",url:"https://uigradients.com/#Maldives/",avatar:"css",description:"\u6E10\u53D8\u8272\u5DE5\u5177"},{id:"54",name:"CoolHue",type:"tools",url:"https://webkul.github.io/coolhue/",avatar:"css",description:"\u6E10\u53D8\u8272\u5DE5\u5177"},{id:"55",name:"webgradients",type:"tools",url:"https://webgradients.com/",avatar:"css",description:"\u6E10\u53D8\u8272\u5DE5\u5177"},{id:"56",name:"jex",type:"tools",url:"https://jex.im/regulex/#!flags=&re=%5E(a%7Cb)*%3F%24",avatar:"tools",description:"\u6B63\u5219\u8868\u8FBE\u5F0F\u5DE5\u5177"},{id:"57",name:"express",type:"nodejs",url:"https://expressjs.com/",avatar:"nodejs",description:"Node.js \u7684web\u6846\u67B6"},{id:"58",name:"koa",type:"nodejs",url:"https://koajs.com/",avatar:"nodejs",description:"Node.js \u7684web\u6846\u67B6"},{id:"59",name:"eggjs",type:"nodejs",url:"https://www.eggjs.org/",avatar:"nodejs",description:"Node.js \u7684web\u6846\u67B6"},{id:"60",name:"Node Weekly",type:"weekly",url:"https://nodeweekly.com/issues",avatar:"nodejs",description:"Node.js\u5468\u520A"},{id:"61",name:"CSS Weekly",type:"weekly",url:"https://css-weekly.com/archives/",avatar:"css",description:"css\u5468\u520A"},{id:"62",name:"Frontend Weekly",type:"weekly",url:"https://frontendfoc.us/issues",avatar:"weekly",description:"Frontend Focus \u5468\u520A"},{id:"63",name:"Echo JS",type:"weekly",url:"https://www.echojs.com/",avatar:"javascript",description:"some news of Javascript"},{id:"64",name:"JSK",type:"weekly",url:"https://javascriptkicks.com/stories",avatar:"javascript",description:"javascript stories"},{id:"65",name:"Mobile Weekly",type:"weekly",url:"https://mobiledevweekly.com/issues",avatar:"mobile",description:"Mobile Weekly"},{id:"66",name:"statuscode Weekly",type:"weekly",url:"https://weekly.statuscode.com/issues",avatar:"weekly",description:"StatusCode Weekly"},{id:"67",name:"Segmentfault Question",type:"forum",url:"https://segmentfault.com/questions",avatar:"forum",description:"\u601D\u5426\u793E\u533A\u95EE\u7B54\u6A21\u5757"},{id:"68",name:"Stackoverflow Question",type:"forum",url:"https://stackoverflow.com/questions",avatar:"forum",description:"stackoverflow\u793E\u533A\u95EE\u7B54\u6A21\u5757"},{id:"69",name:"ES5\u89C4\u8303-\u989C\u6D77\u955C",type:"javascript",url:"http://yanhaijing.com/es5/#about",avatar:"javascript",description:"\u5173\u4E8E\u90E8\u5206\u4E0D\u5C5E\u4E8E\u89C4\u8303\uFF0C\u672C\u89C4\u8303\u662Fw3c \u89C4\u8303\u7684\u955C\u50CF\u7248\uFF0C\u76EE\u524D\u4EE5100%\u5B8C\u6210\uFF0C\u4F46\u5C1A\u672A\u6821\u8BA2\uFF0C\u672C\u89C4\u8303\u4E3A\u9605\u8BFB\u800C\u751F\uFF0C\u610F\u5728\u4F18\u5316\u9605\u8BFB\u4F53\u9A8C\u3002"},{id:"70",name:"ES5\u89C4\u8303-W3C",type:"javascript",url:"https://www.w3.org/html/ig/zh/wiki/ES5",avatar:"javascript",description:"w3c  es5\u89C4\u8303\u5B98\u65B9\u6587\u6863"},{id:"71",name:"ES5\u89C4\u8303-ECMA",type:"javascript",url:"https://262.ecma-international.org/5.1/",avatar:"javascript",description:"ECMA  es5\u89C4\u8303\u5B98\u65B9\u6587\u6863"},{id:"72",name:"ES6\u89C4\u8303-ECMA",type:"javascript",url:"https://262.ecma-international.org/6.0/",avatar:"javascript",description:"ECMA  es6(ES2015)\u89C4\u8303\u5B98\u65B9\u6587\u6863"},{id:"73",name:"ES7\u89C4\u8303-ECMA",type:"javascript",url:"https://262.ecma-international.org/7.0/",avatar:"javascript",description:"ECMA  es7(ES2016)\u89C4\u8303\u5B98\u65B9\u6587\u6863"},{id:"74",name:"ES8\u89C4\u8303-ECMA",type:"javascript",url:"https://262.ecma-international.org/8.0/",avatar:"javascript",description:"ECMA  es8(ES2017)\u89C4\u8303\u5B98\u65B9\u6587\u6863"},{id:"75",name:"ES9\u89C4\u8303-ECMA",type:"javascript",url:"https://262.ecma-international.org/9.0/",avatar:"javascript",description:"ECMA  es9(ES2018)\u89C4\u8303\u5B98\u65B9\u6587\u6863"},{id:"76",name:"ES10\u89C4\u8303-ECMA",type:"javascript",url:"https://262.ecma-international.org/10.0/",avatar:"javascript",description:"ECMA  es10(ES2019)\u89C4\u8303\u5B98\u65B9\u6587\u6863"},{id:"77",name:"ES11\u89C4\u8303-ECMA",type:"javascript",url:"https://262.ecma-international.org/11.0/",avatar:"javascript",description:"ECMA  es11(ES2020)\u89C4\u8303\u5B98\u65B9\u6587\u6863"},{id:"78",name:"ES12\u89C4\u8303-ECMA",type:"javascript",url:"https://262.ecma-international.org/12.0/",avatar:"javascript",description:"ECMA  es12(ES2021)\u89C4\u8303\u5B98\u65B9\u6587\u6863"},{id:"79",name:"Can I Use",type:"tools",url:"https://caniuse.com/",avatar:"tools",description:'"Can I use" provides up-to-date browser support tables for support of front-end web technologies on desktop and mobile web browsers.'},{id:"80",name:"Google Style Guide",type:"html",url:"https://google.github.io/styleguide/htmlcssguide.html",avatar:"html",description:"This document defines formatting and style rules for HTML and CSS. It aims at improving collaboration, code quality, and enabling supporting infrastructure. It applies to raw, working files that use HTML and CSS, including GSS files. Tools are free to obfuscate, minify, and compile as long as the general code quality is maintained."},{id:"81",name:"devdocs",type:"tools",url:"https://devdocs.io/",avatar:"tools",description:"DevDocs combines multiple API documentations in a fast, organized, and searchable interface. Here's what you should know before you start:"},{id:"82",name:"hammer.js",type:"util",url:"http://hammerjs.github.io/",avatar:"util",description:"A JavaScript library for detecting touch gestures."},{id:"83",name:"day.js",type:"util",url:"https://day.js.org/",avatar:"util",description:"Fast 2kB alternative to Moment.js with the same modern API"},{id:"84",name:"moment.js",type:"util",url:"https://momentjs.com/",avatar:"util",description:"Moment.js 2.29.3 Parse, validate, manipulate,and display dates and times in JavaScript. Considering using Moment in your project? here may be better modern alternatives. For more details and recommendations, please see Project Status in the docs."},{id:"85",name:"swiper.js",type:"util",url:"https://swiperjs.com/",avatar:"util",description:"Swiper is the most modern free mobile touch slider with hardware accelerated transitions and amazing native behavior. It is intended to be used in mobile websites, mobile web apps, and mobile native/hybrid apps."},{id:"86",name:"fullPage.js",type:"util",url:"https://alvarotrigo.com/fullPage/",avatar:"util",description:"A simple and easy to use library that creates fullscreen scrolling websites (also known as single page websites or onepage sites) and adds landscape sliders inside the sections of the site."},{id:"87",name:"clipboard.js",type:"util",url:"https://clipboardjs.com/",avatar:"util",description:"Copying text to the clipboard shouldn't be hard. It shouldn't require dozens of steps to configure or hundreds of KBs to load. But most of all, it shouldn't depend on Flash or any bloated framework."},{id:"88",name:"axios.js",type:"util",url:"https://axios-http.com/",avatar:"util",description:"Axios is a simple promise based HTTP client for the browser and node.js. Axios provides a simple to use library in a small package with a very extensible interface."},{id:"89",name:"sweetalert.js",type:"util",url:"https://sweetalert.js.org/",avatar:"util",description:"SweetAlert makes popup messages easy and pretty."},{id:"90",name:"nprogress.js",type:"util",url:"https://ricostacruz.com/nprogress/",avatar:"util",description:"A nanoscopic progress bar. Featuring realistic trickle animations to convince your users that something is happening!"},{id:"91",name:"\u8349\u7A3F\u7EB8",type:"zjt",url:"https://zhengjiangtao.cn/show/",avatar:"zjt",description:"ataola\u7AE5\u978B\u5B66\u4E60\u7F51\u9875\u8BBE\u8BA1\u7684\u601D\u8003\u603B\u7ED3 - \u6253\u8349\u7A3F\u7BC7"},{id:"92",name:"codepen-ataola",type:"zjt",url:"https://codepen.io/ataola",avatar:"zjt",description:"ataola\u7AE5\u978B\u5728codepen\u4E0A\u7684\u4E00\u4E9B\u5B9E\u8DF5demo"},{id:"93",name:"yuque-ataola",type:"zjt",url:"https://www.yuque.com/ataola",avatar:"zjt",description:"ataola\u7AE5\u978B\u5728yuque\u4E0A\u7684\u4E00\u4E9B\u7B14\u8BB0"},{id:"94",name:"cnblogs-ataola",type:"zjt",url:"https://www.cnblogs.com/cnroadbridge/",avatar:"zjt",description:"ataola\u7AE5\u978B\u5199\u535A\u5BA2\u7684\u5730\u65B9"},{id:"95",name:"\u817E\u8BAF\u4E91\u793E\u533A-ataola",type:"zjt",url:"https://cloud.tencent.com/developer/user/2705701",avatar:"zjt",description:"\u540C\u6B65\u81EA\u540C\u540D\u516C\u4F17\u53F7\u201C\u6C5F\u6D9B\u5B66\u7F16\u7A0B\u201D\u7684\u539F\u521B\u6587\u7AE0\u6C47\u96C6\u5730"},{id:"96",name:"github-ataola",type:"zjt",url:"https://github.com/ataola",avatar:"zjt",description:"ataola\u7AE5\u978B\u7684GitHub\u5730\u5740"},{id:"97",name:"cnroadbridge",type:"zjt",url:"https://github.com/cnroadbridge",avatar:"zjt",description:"\u8DEF\u6865\u5DE5\u4F5C\u5BA4\u7684GitHub\u5730\u5740"},{id:"98",name:"gitee-ataola",type:"zjt",url:"https://gitee.com/taoge2021",avatar:"zjt",description:"ataola\u7AE5\u978B\u7684gitee\u5730\u5740"},{id:"99",name:"leetcode-ataola",type:"zjt",url:"https://leetcode.cn/u/ataola/",avatar:"zjt",description:"ataola\u7AE5\u978B\u7684leetcode\u5730\u5740"},{id:"100",name:"nowcoder-ataola",type:"zjt",url:"https://www.nowcoder.com/profile/2285622",avatar:"zjt",description:"ataola\u7AE5\u978B\u7684nowcoder\u5730\u5740"},{id:"101",name:"\u866B\u90E8\u843D",type:"forum",url:"https://www.chongbuluo.com/",avatar:"forum",description:"\u4E00\u4E2A\u8D44\u6E90\u4E30\u5BCC\u7684\u8BBA\u575B\u793E\u533A"},{id:"102",name:"visualgo",type:"visualization",url:"https://visualgo.net/zh/",avatar:"visualization",description:"\u6570\u636E\u7ED3\u6784\u548C\u7B97\u6CD5\u7684\u53EF\u89C6\u5316\u5B66\u4E60\u6559\u7A0B\u7F51\u7AD9"},{id:"103",name:"\u82E5\u5DDD\u7684\u535A\u5BA2",type:"friendlink",url:"https://lxchuan12.gitee.io/",avatar:"website",description:"\u4F60\u597D\uFF0C\u6211\u662F\u82E5\u5DDD (opens new window)\u3002\u76EE\u524D\u6301\u7EED\u7EC4\u7EC7\u4E865\u4E2A\u6708\u6BCF\u5468\u4E00\u8D77\u5B66200\u884C\u5DE6\u53F3\u6E90\u7801\u5171\u8BFB\u6D3B\u52A8 (opens new window)\uFF0C\u6BCF\u5468\u4E00\u671F\uFF0C\u5DF2\u8FDB\u884C\u523020\u671F\uFF0C\u611F\u5174\u8DA3\u7684\u53EF\u4EE5\u52A0\u6211\u5FAE\u4FE1 ruochuan12 (opens new window)\u52A0\u7FA4\u53C2\u4E0E\uFF0C\u957F\u671F\u4EA4\u6D41\u5B66\u4E60\u3002\u5FAE\u4FE1\u626B\u7801\u6216\u641C\u7D22\u300C\u82E5\u5DDD\u89C6\u91CE\u300D"},{id:"104",name:"\u5C71\u6708\u884C",type:"friendlink",url:"https://shanyue.tech/",avatar:"website",description:"\u5173\u4E8E\u5E73\u5E38\u5DE5\u4F5C\u4E2D\u5728\u524D\u7AEF\uFF0C\u540E\u7AEF\u4EE5\u53CA\u8FD0\u7EF4\u4E2D\u9047\u5230\u95EE\u9898\u7684\u4E00\u4E9B\u6587\u7AE0\u603B\u7ED3\u3002\u4EE5\u540E\u4E5F\u4F1A\u505A\u7CFB\u5217\u6587\u7AE0\u8FDB\u884C\u8F93\u51FA\uFF0C\u5982\u524D\u7AEF\u9AD8\u7EA7\u8FDB\u9636\u7CFB\u5217\uFF0C\u4E2A\u4EBA\u670D\u52A1\u5668\u6307\u5357\u7CFB\u5217\u3002"},{id:"105",name:"\u5927\u5723",type:"friendlink",url:"https://shengxinjing.cn/",avatar:"website",description:"\u5927\u5723\u524D\u7AEF\u7F16\u7A0B\u81EA\u5B66\u7F51"}];const H=k({name:"Navigation",components:{[E.name]:E},setup(e,{emit:t,slots:a,attrs:m}){const r=P({sideBarItem:{text:"JS",value:"javascript"},navigationItems:W}),d=y(()=>{const{navigationItems:n}=r;return[...new Set(n.map(i=>{const{type:v}=i;return v}))].sort((i,v)=>g[i].length-g[v].length).map(i=>({text:g[i]||i,title:i,value:i}))}),o=y(()=>{const n=u.value.length%3;return{"1":[1,2],"2":[1],"3":[],"0":[]}[n]}),u=y(()=>r.navigationItems.filter(n=>n.type===r.sideBarItem.value)),l=n=>{r.sideBarItem=d.value.find(i=>i.value===n)||{text:"Design",value:"design"}};return j(b({},D(r)),{sideBarItems:d,navigationItemRestArr:o,navigationFilterItems:u,changeSideBar:l})}}),Q={class:"container"},K={class:"main"},Y={class:"main-left"},Z={class:"sidebar-box"},X={class:"main-right"};function ee(e,t,a,m,r,d){const o=h("side-bar"),u=h("NavigationItem");return p(),c("div",Q,[s("div",K,[s("div",Y,[s("div",Z,[A(o,{items:e.sideBarItems,value:e.sideBarItem.value,onInput:e.changeSideBar},null,8,["items","value","onInput"])])]),s("div",X,[(p(!0),c(C,null,_(e.navigationFilterItems,l=>(p(),J(u,{key:l.id,value:l},null,8,["value"]))),128)),(p(!0),c(C,null,_(e.navigationItemRestArr,l=>(p(),c("div",{key:l,class:"flex-space-fix"}))),128))])])])}var se=S(H,[["render",ee],["__scopeId","data-v-5d5d6a4a"]]);export{se as default};
