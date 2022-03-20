import{v as f,a as m,n as $,o as x,d as e,S as d,L as w,f as k,j as F}from"./vendor.6d0a7b46.js";import{c as b,B as u,a as E,u as M,b as B,T as h,d as T,P as z,D as C,L as A,F as S,C as _,e as j,f as N,g as R,h as P}from"./index.ae27f545.js";import{L as W,c as D,C as H}from"./copyText.3f9916b4.js";import{G as c}from"./Grid.1c6528d7.js";const G=f('<svg><path d="M0 0h24v24H0z" fill="none"></path></svg>',4,!0),U=f('<svg><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"></path></svg>',4,!0);var Q=b(()=>[G.cloneNode(!0),U.cloneNode(!0)],"Check");const V=f('<svg><path d="M0 0h24v24H0z" fill="none"></path></svg>',4,!0),q=f('<svg><path d="M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"></path></svg>',4,!0);var J=b(()=>[V.cloneNode(!0),q.cloneNode(!0)],"CheckBox");const K=f("<span></span>");function O(n,t){let i=0;const r=setInterval(()=>{i<t.text.length?(n.append(t.text.charAt(i)),i++):(clearInterval(r),t.onFinish?.())},t.speed??150);return r}function X(n,t){let i=0;const r=setInterval(()=>{i<t.length?(n.innerText=n.innerText.slice(0,-1),i++):(clearInterval(r),t.onFinish?.())},t.speed??150);return r}function Y(n){return setTimeout(()=>{n.onFinish?.()},n.ms)}function Z(n,t){if(t.type==="write")return O(n,t);if(t.type==="erase")return X(n,t);if(t.type==="delay")return Y(t);throw new Error(`Invalid effect type: ${t.type}`)}function ee(n){const t=E(),[i,r]=m(!1);let s=0,o=[];const l={restart:()=>{s=0,l.stop(),t.ref.innerText="",r(!1),y(v)},stop:()=>{for(const a of o)clearInterval(a),clearTimeout(a)}};n.actionsRef?.(l);const y=a=>{const p=n.effects[s++];if(p){const I=Z(t.ref,{...p,onFinish:()=>{o=o.filter(L=>L!==I),a?.(s in n.effects),p.onFinish?.()}});o.push(I)}},v=a=>{a?y(v):r(!0)};return $(async()=>{l.restart()}),x(()=>{l.stop()}),e(u,{sx:{display:"inline-block"},get children(){return e(u,{get children(){return[(()=>{const a=K.cloneNode(!0);return t(a),a})(),e(d,{get when(){return!i()},get children(){return e(u,{component:"span",sx:{fontWeight:400,ml:"0.6px",animation:"blink-$id .5s step-end infinite alternate","@keyframes blink-$id":{50:{color:"transparent"}}},children:"|"})}})]}})}})}function te(){const[n,t]=m(!1),i="npm i @suid/material";let r;return k(()=>{!n()||(clearTimeout(r),r=setTimeout(()=>t(!1),2e3))}),x(()=>clearTimeout(r)),e(T,{variant:"outlined",size:"large",sx:{textTransform:"none",borderRadius:3},onClick:()=>{t(!0),D(i)},get children(){return[i,e(d,{get when(){return n()},get fallback(){return e(H,{sx:{ml:2}})},get children(){return e(Q,{sx:{ml:2}})}})]}})}function g(n){return e(R,{disablePadding:!0,get children(){return[e(d,{get when(){return n.checkbox},get children(){return e(j,{sx:{minWidth:35},get children(){return e(J,{})}})}}),e(N,{get children(){return[F(()=>n.text)," "]}})]}})}function ne(n){const[t,i]=m(10);let r,s=!1;return k(()=>{!n.start||s||(s=!0,r=setInterval(()=>{if(i(t()+1),t()===30)return clearInterval(r)},80))}),x(()=>clearInterval(r)),e(g,{get text(){return`+${t()} Components`}})}function ce(){const n=M(),[t,i]=m(!1),r=B(n.breakpoints.down("md")),s=P();return e(_,{maxWidth:"md",get children(){return e(c,{container:!0,spacing:0,sx:{mt:"25%"},get children(){return[e(c,{item:!0,sm:12,md:8,get sx(){return{...r()&&{flexBasis:"100%",alignItems:"center",textAlign:"center",justifyContent:"center"}}},get children(){return[e(h,{component:"h1",variant:"h2",sx:{fontWeight:600},get children(){return["The ideal"," ",e(u,{component:"span",get sx(){return{color:n.palette.primary.main}},children:"Solid.js"})," ","UI library"," ",e(u,{component:"span",sx:{cursor:"pointer"},onClick:()=>{s.ref.restart()},get children(){return e(ee,{actionsRef:s,get effects(){return[{type:"delay",ms:1200},{type:"write",text:"for your app"},{type:"delay",ms:2e3},{type:"erase",length:8},{type:"write",text:"you.",onFinish:()=>i(!0)}]}})}})]}}),e(h,{variant:"body1",get sx(){return{color:n.palette.text.secondary,mt:2}},get children(){return["A port of Material UI design (",e(W,{href:"https://mui.com",target:"_blank",children:"MUI"}),") for Solid.js."]}})," ",e(c,{container:!0,spacing:2,get sx(){return{alignItems:"center",mt:2,...r()&&{flexBasis:"100%",textAlign:"center",justifyContent:"center"}}},get children(){return[e(c,{item:!0,get children(){return e(T,{variant:"contained",size:"large",component:w,href:"/getting-started/installation",onMouseEnter:o=>{const l=o.target.getAttribute("href");l&&z[l]?.preload()},children:"Get started"})}}),e(c,{item:!0,get children(){return e(h,{children:"or"})}}),e(c,{item:!0,get children(){return e(te,{})}})]}})]}}),e(d,{get when(){return r()},get children(){return e(c,{xs:12,get children(){return e(C,{sx:{mt:5}})}})}}),e(c,{item:!0,sm:12,md:4,get sx(){return{display:"flex",alignItems:"center",textAlign:"center",justifyContent:"center",...r()&&{flexBasis:"100%",mt:5}}},get children(){return[e(d,{get when(){return!r()},get children(){return e(C,{orientation:"vertical"})}}),e(A,{disablePadding:!0,dense:!0,sx:{pl:3,[`& .${h}`]:{fontSize:25,fontWeight:200}},get children(){return[e(g,{text:"Typescript",checkbox:!0}),e(g,{text:"Material Design",checkbox:!0}),e(g,{text:"Styled Components",checkbox:!0}),e(S,{get in(){return t()},timeout:1e3,get children(){return e(ne,{get start(){return t()}})}})]}})]}})]}})}})}export{ce as default};
