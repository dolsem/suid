var C=Object.defineProperty;var i=(e,n)=>C(e,"name",{value:n,configurable:!0});import{t as g,x as y,a as v,h as a,d as t,S as l,i as k,v as z}from"./vendor.d934995e.js";import{c as f,z as I,u as b,b as S,P as $,I as u,T as m,B as h,v as L,A as N,E as P}from"./index.1eb3101f.js";import{c as w,C as A,S as j,L as p}from"./copyText.ef3346ef.js";import{P as x}from"./PaperCode.74ffdaba.js";const E=g('<svg><path d="M8.7 15.9L4.8 12l3.9-3.9c.39-.39.39-1.01 0-1.4-.39-.39-1.01-.39-1.4 0l-4.59 4.59c-.39.39-.39 1.02 0 1.41l4.59 4.6c.39.39 1.01.39 1.4 0 .39-.39.39-1.01 0-1.4zm6.6 0l3.9-3.9-3.9-3.9c-.39-.39-.39-1.01 0-1.4.39-.39 1.01-.39 1.4 0l4.59 4.59c.39.39.39 1.02 0 1.41l-4.59 4.6c-.39.39-1.01.39-1.4 0-.39-.39-.39-1.01 0-1.4z"></path></svg>',4,!0);var M=f(()=>E.cloneNode(!0),"CodeRounded");function _(e={},n={}){y.openProject(I(e),{openFile:["src/App.tsx"],...n||{}})}i(_,"openProject");const B=g('<svg><path d="M8.13378 16.1087H0L14.8696 0L10.8662 11.1522L19 11.1522L4.13043 27.2609L8.13378 16.1087Z"></path></svg>',4,!0),R=g("<br>"),T=f(()=>B.cloneNode(!0),"Stackblitz");function F(e){const[n,d]=v(!1),o=b(),c=a(()=>e.component.code),s=S(o.breakpoints.down("sm"));return[t($,{elevation:0,get square(){return s()},get sx(){return{display:"flex",justifyItems:"center",justifyContent:"center",overflow:"auto",p:3,border:1,borderColor:o.palette.grey[o.palette.mode==="dark"?800:300],...s()&&{mx:-3,borderLeft:0,borderRight:0},...e.sx||{}}},get children(){return t(e.component,{})}}),t(j,{direction:"row",spacing:1,sx:{pt:1,justifyContent:"end"},get children(){return[t(u,{size:"small",onClick:()=>d(!n()),get children(){return t(M,{fontSize:"inherit"})}}),t(u,{size:"small",onClick:()=>w(e.component.code),get children(){return t(A,{fontSize:"inherit"})}}),t(u,{size:"small",onClick:()=>{_({title:e.name,appCode:c()})},get children(){return t(T,{fontSize:"inherit"})}})]}}),t(l,{get when(){return n()},get children(){return[R.cloneNode(!0),t(x,{get value(){return c()},language:"tsx"})]}})]}i(F,"ComponentCode");function U(e){const n=a(()=>N(P(e.name))),d=b(),o=a(()=>e.docsName??n()),c=a(()=>typeof e.docsApiName=="string"?e.docsApiName.includes("/")?e.docsApiName:`api/${e.docsApiName}`:`api/${n()}`),s=a(()=>e.moreExamples??!0);return[t(m,{component:"h1",variant:"h4",sx:{mt:1},get children(){return e.name}}),t(m,{variant:"body2",sx:{mt:2},get children(){return["Learn more on"," ",t(p,{get href(){return`https://mui.com/${c()}`},target:"_blank",children:"MUI docs"}),"."]}}),t(l,{get when(){return e.importInfo??!0},get children(){return[t(m,{component:"h2",variant:"h5",sx:{my:2},children:"Import"}),t(x,{language:"tsx",sx:{mb:3},get value(){return`import ${e.name} from "@suid/${e.scope??"material"}/${e.name}"`}})]}}),t(l,{get when(){return!!e.examples?.length},get children(){return[t(m,{component:"h2",variant:"h5",sx:{my:2},children:"Examples"}),k(()=>z(()=>e.examples?.map(r=>typeof r=="function"?{component:r}:r),r=>t(h,{sx:{mb:2},get children(){return t(F,{get name(){return e.name},get component(){return r.component},get sx(){return{...r.bgcolor==="contrasted"&&{bgcolor:d.palette.mode==="light"?"#E7EBF0":"rgb(43 53 65)"},...r.bgcolor&&r.bgcolor!=="contrasted"&&{bgcolor:r.bgcolor}}}})}})))]}}),t(l,{get when(){return s()},get children(){return t(h,{sx:{mt:2},get children(){return t(p,{get href(){return`https://mui.com/components/${o()}`},target:"_blank",children:"More examples"})}})}}),t(L,{sx:{mt:2}})]}i(U,"ComponentInfo");export{U as C};
