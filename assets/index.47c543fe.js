import{c as e,a as t,r,o,b as n,d as s}from"./vendor.048245f8.js";!function(e=".",t="__import__"){try{self[t]=new Function("u","return import(u)")}catch(r){const o=new URL(e,location),n=e=>{URL.revokeObjectURL(e.src),e.remove()};self[t]=e=>new Promise(((r,s)=>{const a=new URL(e,o);if(self[t].moduleMap[a])return r(self[t].moduleMap[a]);const i=new Blob([`import * as m from '${a}';`,`${t}.moduleMap['${a}']=m;`],{type:"text/javascript"}),l=Object.assign(document.createElement("script"),{type:"module",src:URL.createObjectURL(i),onerror(){s(new Error(`Failed to import: ${e}`)),n(l)},onload(){r(self[t].moduleMap[a]),n(l)}});document.head.appendChild(l)})),self[t].moduleMap={}}}("/mlog/assets/");let a;const i={},l=[{path:"/",name:"index",redirect:()=>({name:"/mlog"})},{path:"/mlog",name:"mlog",component:()=>function(e,t){if(!t)return e();if(void 0===a){const e=document.createElement("link").relList;a=e&&e.supports&&e.supports("modulepreload")?"modulepreload":"preload"}return Promise.all(t.map((e=>{if(e in i)return;i[e]=!0;const t=e.endsWith(".css"),r=t?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${e}"]${r}`))return;const o=document.createElement("link");return o.rel=t?"stylesheet":a,t||(o.as="script",o.crossOrigin=""),o.href=e,document.head.appendChild(o),t?new Promise(((e,t)=>{o.addEventListener("load",e),o.addEventListener("error",t)})):void 0}))).then((()=>e()))}((()=>__import__("./index.1f152ee3.js")),["/mlog/assets/index.1f152ee3.js","/mlog/assets/index.3b797331.css","/mlog/assets/vendor.048245f8.js"])}],c=e({history:t(),routes:l});const m={name:"netMusic-App"};m.render=function(e,t,s,a,i,l){const c=r("router-view");return o(),n(c)};const d=s(m);d.use(c),d.mount("#app");
