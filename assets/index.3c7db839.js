var m=(u,e,t)=>new Promise((a,s)=>{var i=r=>{try{o(t.next(r))}catch(l){s(l)}},n=r=>{try{o(t.throw(r))}catch(l){s(l)}},o=r=>r.done?a(r.value):Promise.resolve(r.value).then(i,n);o((t=t.apply(u,e)).next())});import{A as d,K as f,O as g,d as p,o as w,c as C,a as c,w as $}from"./index.bcce16d5.js";import{R as v}from"./request.691b3273.js";import"./index.03bb1a20.js";function k(){const u=d(0),e=d(0);function t(a){u.value=a.pageX,e.value=a.pageY}return f(()=>{window.addEventListener("mousemove",t)}),g(()=>{window.removeEventListener("mousemove",t)}),{x:u,y:e}}const x={getVersion:"/v1/getVersion"};v.init();class V{static getVersion(){return v.axiosInstance({url:x.getVersion,method:"get",desc:"\u83B7\u53D6\u7CFB\u7EDF\u4FE1\u606F\u7248\u672C\u53F7",isJSON:!1}).then(e=>{console.log(e)}).catch(e=>{console.log(e)})}}const I=p({__name:"index",setup(u){const{proxy:e}=$(),{x:t,y:a}=k(),s=(i,n,o=1e3)=>{e==null||e.$message({text:`${i}, ${t.value}, ${a.value}`,type:n,duration:o})};return m(this,null,function*(){yield V.getVersion()}),(i,n)=>(w(),C("div",null,[c("button",{onClick:n[0]||(n[0]=o=>s("warn","warn"))},"warn"),c("button",{onClick:n[1]||(n[1]=o=>s("error","error",2e3))},"error"),c("button",{onClick:n[2]||(n[2]=o=>s("success","success",3e3))},"success"),c("button",{onClick:n[3]||(n[3]=o=>s("info","info"))},"info")]))}});export{I as default};
