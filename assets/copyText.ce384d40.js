var f=Object.defineProperty;var c=(r,e)=>f(r,"name",{value:e,configurable:!0});import{t as m,a as u,m as y,S as g}from"./vendor.7d03e054.js";import{c as v,i as h,s as C,j as d,r as l,m as k}from"./index.575706a7.js";const V=m('<svg><g><path d="M15,20H5V7c0-0.55-0.45-1-1-1h0C3.45,6,3,6.45,3,7v13c0,1.1,0.9,2,2,2h10c0.55,0,1-0.45,1-1v0C16,20.45,15.55,20,15,20z M20,16V4c0-1.1-0.9-2-2-2H9C7.9,2,7,2.9,7,4v12c0,1.1,0.9,2,2,2h9C19.1,18,20,17.1,20,16z M18,16H9V4h9V16z"></path></g></svg>',6,!0);var N=v(()=>V.cloneNode(!0),"ContentCopyRounded");function x(r,e){return!e||typeof e!="string"?null:e.split(".").reduce((n,t)=>n&&n[t]?n[t]:null,r)}c(x,"getPath");function S(r,e,n,t){const o=x(r,e)||n;return typeof o=="number"?i=>typeof i=="string"?i:o*i:Array.isArray(o)?i=>typeof i=="string"?i:o[i]:typeof o=="function"?o:()=>{}}c(S,"createUnaryUnit");function R(r){return S(r,"spacing.resolve",8)}c(R,"createUnarySpacing");const A=h()({name:"MuiStack",selfPropNames:["children","direction","divider","spacing"],propDefaults:({set:r})=>r({component:"div",direction:"column",spacing:0})});function M(r,e){const n=(Array.isArray(r)?r:[r]).filter(Boolean);return n.reduce((t,o,i)=>(t.push(o),i<n.length-1&&t.push(e),t),[])}c(M,"joinChildren");const B=c(r=>({row:"Left","row-reverse":"Right",column:"Top","column-reverse":"Bottom"})[r],"getSideFromDirection"),F=C("div",{name:"MuiStack",slot:"Root",overridesResolver:(r,e)=>[e.root]})(({theme:r,ownerState:e})=>{let n={display:"flex",...d({theme:r},l({values:e.direction,breakpoints:r.breakpoints.values}),t=>({flexDirection:t}))};if(e.spacing){const t=R(r),o=r.breakpoints.keys.reduce((a,s)=>((e.spacing[s]!=null||e.direction[s]!=null)&&(a[s]=!0),a),{}),i=l({values:e.direction,base:o}),p=l({values:e.spacing,base:o});n=k(n,d({theme:r},p,c((a,s)=>({"& > :not(style) + :not(style)":{margin:0,[`margin${B(s?i[s]:e.direction)}`]:t(a)}}),"styleFromPropValue")))}return n}),U=A.component(c(function({allProps:e,otherProps:n,props:t}){return u(F,y({get as(){return n.component},ownerState:e},n,{get children(){return u(g,{get when(){return!!t.divider},get fallback(){return t.children},get children(){return M(t.children,t.divider)}})}}))},"Stack"));function $(r){let e;try{return e=document.createElement("textarea"),e.value=r,e.style.top="0",e.style.left="0",e.style.position="fixed",document.body.appendChild(e),e.focus(),e.select(),document.execCommand("copy")}catch(n){return console.error(n),!1}finally{e.remove()}}c($,"copyText");export{N as C,U as S,$ as c};
