import{p as a,j as e,l,o,e as s,f as t,L as n,M as u,H as i,W as c,t as r,C as p,O as v}from"./vendor.08c6e7a1.js";import{l as d,s as m}from"./main.4c8368f1.js";import{c as f}from"./util.9ca2e63c.js";a("data-v-bf568f6a");const g={class:"login-content"},b={class:"login-form",name:"login-form"},h={class:"login-phone-input"},y={class:"login-password-input"},w={class:"auto-login-box"},x={class:"al-box-wrap"},k=t("label",{for:"login-auto",class:"at-login"},"自动登录",-1),U=t("a",{href:"#",class:"fgt-pwd"},"忘记密码",-1),j={key:0,class:"error-tips"};e();const I={expose:[],setup(a){const e=l(""),I=l(!0),C=l(""),L=l(""),V=l(!1);async function K(){try{V.value=!0,await function(){const a=/^1[3456789]\d{9}$/g;return new Promise(((e,l)=>{let o=C.value.toString();a.test(o)?L.value?e():l("请输入密码"):l("请输入正确的手机号")}))}(),I.value=!0,e.value=""}catch(a){e.value=a,I.value=!1}finally{I.value&&d(C.value,L.value).then((a=>{502===a.code||501===a.code?(e.value=a.message,I.value=!1):(m.commit("setUserInfo",a.profile),m.commit("setUserLogin",!0),H())})),V.value=!1}}const N=l(!0);function _(a){let e=parseInt(a.target.value);C.value=isNaN(e)?"":e}window.addEventListener("beforeunload",(function(){!1===N.value&&f()}));const E=v();function H(){E.push("/mlog/")}return(a,l)=>(o(),s("main",g,[t("form",b,[t("div",h,[n(t("input",{type:"tel",placeholder:"请输入手机号","onUpdate:modelValue":l[1]||(l[1]=a=>C.value=a),onInput:_,maxlength:"11"},null,544),[[u,C.value,void 0,{trim:!0}]])]),t("div",y,[n(t("input",{type:"password",autocomplete:"",placeholder:"请输入密码","onUpdate:modelValue":l[2]||(l[2]=a=>L.value=a),onKeypress:i(K,["enter"])},null,40,["onKeypress"]),[[u,L.value,void 0,{trim:!0}]])]),t("div",w,[t("div",x,[n(t("input",{type:"checkbox",name:"autologin",id:"login-auto","onUpdate:modelValue":l[3]||(l[3]=a=>N.value=a)},null,512),[[c,N.value]]),k]),U,I.value?p("",!0):(o(),s("p",j,r(e.value),1))]),t("button",{type:"button",onClick:K,disabled:V.value,class:{"dis-btn":V.value}}," 登录 ",10,["disabled"]),t("p",{class:"back-home"},[t("a",{href:"#",onClick:H},"< 返回首页")])])]))},__scopeId:"data-v-bf568f6a"};export default I;
