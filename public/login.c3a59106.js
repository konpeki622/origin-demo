import{l as s,r as e,k as a,q as r,c as n,s as o,v as t,d as u,t as l,n as p,o as d}from"./vendor.0200a2b0.js";const i={name:"login",setup(){const n=s(),o=e(!0),t=a({username:"",password:""});return r((()=>{o.value=!Boolean(t.username&&t.password)})),{btnIsDisabled:o,user:t,toUsers:()=>{o.value||n.replace(`/users/${t.username}`)}}}},m={class:"login"};i.render=function(s,e,a,r,i,c){return d(),n("div",m,[o(u("input",{class:"normal-input userinfo-input",placeholder:"username",type:"text","onUpdate:modelValue":e[0]||(e[0]=s=>r.user.username=s)},null,512),[[t,r.user.username]]),o(u("input",{class:"normal-input userinfo-input",placeholder:"password",type:"password","onUpdate:modelValue":e[1]||(e[1]=s=>r.user.password=s)},null,512),[[t,r.user.password]]),u("button",{onClick:e[2]||(e[2]=(...s)=>r.toUsers&&r.toUsers(...s)),class:p(["normal-btn router-btn",r.btnIsDisabled?"router-btn-disabled":""])},l(s.$t("login")),3)])};export{i as default};
