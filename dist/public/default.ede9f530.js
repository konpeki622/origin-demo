import{c as t,F as e,h as r,o as s,t as n,r as o,u,a as l,d as a,b as i}from"./vendor.f4f69488.js";var c={name:"Sources",props:{list:{type:Array,required:!0}}};const p=["href","title"];c.render=function(o,u,l,a,i,c){return s(),t("div",null,[(s(!0),t(e,null,r(l.list,(e=>(s(),t("a",{key:e.title,class:"source-link",rel:"noreferrer",href:e.link,target:"_blank",title:e.title},n(e.title),9,p)))),128))])};var f={name:"Default",components:{Sources:c},setup(){const t=o([{title:"github",link:"https://github.com/originjs/origin.js"}]),e=u(),{currentRoute:r}=e;return{currentRoute:r,sourceOpitons:t}}};const d={class:"text-component-desc text-route"},m=i("p",{class:"text-component-desc text-layout"}," layout default ",-1);f.render=function(r,o,u,c,p,f){const h=l("router-view"),g=l("Sources");return s(),t(e,null,[a(h),i("p",d,"current route: '"+n(c.currentRoute.fullPath)+"'",1),m,a(g,{list:c.sourceOpitons},null,8,["list"])],64)};export{f as default};
