import{o as t,c as e,F as r,j as s,t as o,k as i,l as n,a as l,d as u,b as a}from"./vendor.0200a2b0.js";import{_ as c}from"./originjs.01f61889.js";const g={name:"Sources",props:{list:{required:!0}}},p={class:"source-link-box"},d=["href","title"];g.render=function(i,n,l,u,a,c){return t(),e("div",p,[(t(!0),e(r,null,s(l.list,(r=>(t(),e("a",{key:r.title,class:"source-link",rel:"noreferrer",href:r.link,target:"_blank",title:r.title},o(r.title),9,d)))),128))])};const f={name:"Default",setup(){const t=i([{title:"github",link:"https://github.com/originjs/origin.js"},{title:"docs",link:"https://originjs.github.io/docs/"}]),e=n(),{currentRoute:r}=e;return{currentRoute:r,sourceOpitons:t}}},h=u("img",{alt:"Origin.js logo",src:c,class:"logo logo-large"},null,-1),j=u("h2",null,"Origin.js",-1),m={class:"text-component-desc text-route"};f.render=function(r,s,i,n,c,p){const d=l("router-view"),f=g;return t(),e("div",null,[h,j,u("p",null,o(r.$t("introduction")),1),a(d),u("p",m,o(r.$t("currentRoute"))+": '"+o(n.currentRoute.fullPath)+"' ",1),a(f,{list:n.sourceOpitons},null,8,["list"])])};export{f as default};
