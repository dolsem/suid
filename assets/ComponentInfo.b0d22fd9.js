var x=Object.defineProperty;var i=(t,n)=>x(t,"name",{value:n,configurable:!0});import{t as h,a as f,h as o,d as e,S as s,i as C,v}from"./vendor.7f6460ea.js";import{c as y,u as b,P as $,I as l,T as r,B as d,w as I,x as k}from"./index.dc490824.js";import{c as N,C as S,S as z,L as u}from"./copyText.450be6ec.js";import{P as g}from"./PaperCode.8a4eb3f4.js";const w=h('<svg><path d="M8.7 15.9L4.8 12l3.9-3.9c.39-.39.39-1.01 0-1.4-.39-.39-1.01-.39-1.4 0l-4.59 4.59c-.39.39-.39 1.02 0 1.41l4.59 4.6c.39.39 1.01.39 1.4 0 .39-.39.39-1.01 0-1.4zm6.6 0l3.9-3.9-3.9-3.9c-.39-.39-.39-1.01 0-1.4.39-.39 1.01-.39 1.4 0l4.59 4.59c.39.39.39 1.02 0 1.41l-4.59 4.6c-.39.39-1.01.39-1.4 0-.39-.39-.39-1.01 0-1.4z"></path></svg>',4,!0);var A=y(()=>w.cloneNode(!0),"CodeRounded");const P=h("<br>");function L(t){const[n,c]=f(!1),m=o(()=>t.component.code),a=b();return[e($,{elevation:0,get sx(){return{display:"flex",justifyItems:"center",justifyContent:"center",p:3,border:1,borderColor:a.palette.grey[a.palette.mode==="dark"?800:300]}},get children(){return e(t.component,{})}}),e(z,{direction:"row",spacing:1,sx:{pt:1,justifyContent:"end"},get children(){return[e(l,{onClick:()=>c(!n()),size:"small",get children(){return e(A,{fontSize:"inherit"})}}),e(l,{onClick:()=>N(t.component.code),size:"small",get children(){return e(S,{fontSize:"inherit"})}})]}}),e(s,{get when(){return n()},get children(){return[P.cloneNode(!0),e(g,{get value(){return m()},language:"tsx"})]}})]}i(L,"ComponentCode");function E(t){const n=o(()=>I(k(t.name))),c=o(()=>t.docsName??n()),m=o(()=>typeof t.docsApiName=="string"?t.docsApiName.includes("/")?t.docsApiName:`api/${t.docsApiName}`:`api/${n()}`),a=o(()=>t.moreExamples??!0);return[e(r,{component:"h1",variant:"h4",sx:{mt:1},get children(){return t.name}}),e(r,{variant:"body2",sx:{mt:2},get children(){return["Learn more on"," ",e(u,{get href(){return`https://mui.com/${m()}`},target:"_blank",children:"MUI docs"}),"."]}}),e(r,{component:"h2",variant:"h5",sx:{mt:2,mb:1},children:"Import"}),e(g,{language:"tsx",get value(){return`import ${t.name} from "@suid/${t.scope??"material"}/${t.name}"`}}),e(r,{variant:"body2",sx:{mt:2}}),e(s,{get when(){return!!t.examples?.length},get children(){return[e(r,{component:"h2",variant:"h5",sx:{mt:2,mb:1},children:"Examples"}),C(()=>v(()=>t.examples,p=>e(d,{sx:{mb:2},get children(){return e(L,{component:p})}})))]}}),e(s,{get when(){return a()},get children(){return e(d,{sx:{mt:2},get children(){return e(u,{get href(){return`https://mui.com/components/${c()}`},target:"_blank",children:"More examples"})}})}})]}i(E,"ComponentInfo");export{E as C};
