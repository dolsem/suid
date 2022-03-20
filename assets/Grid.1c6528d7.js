import{i as v,j as C,k as G,s as W}from"./index.ae27f545.js";import{c as b,u as N,d as $,g as k,h as M}from"./vendor.6d0a7b46.js";import{r as f,h as x}from"./copyText.3f9916b4.js";const w=b();function z(n){return C("MuiGrid",n)}const B=[0,1,2,3,4,5,6,7,8,9,10],R=["column-reverse","column","row-reverse","row"],D=["nowrap","wrap-reverse","wrap"],d=["auto",!0,1,2,3,4,5,6,7,8,9,10,11,12],S=v("MuiGrid",["root","container","item","zeroMinWidth",...B.map(n=>`spacing-xs-${n}`),...R.map(n=>`direction-xs-${n}`),...D.map(n=>`wrap-xs-${n}`),...d.map(n=>`grid-xs-${n}`),...d.map(n=>`grid-sm-${n}`),...d.map(n=>`grid-md-${n}`),...d.map(n=>`grid-lg-${n}`),...d.map(n=>`grid-xl-${n}`)]),I=G()({name:"MuiGrid",selfPropNames:["children","classes","columnSpacing","columns","container","direction","item","lg","md","rowSpacing","sm","spacing","wrap","xl","xs","zeroMinWidth"],propDefaults:({set:n,inProps:e})=>n({columns:12,component:"div",container:!1,direction:"row",item:!1,lg:!1,md:!1,sm:!1,spacing:0,wrap:"wrap",xl:!1,xs:!1,zeroMinWidth:!1,rowSpacing:e.rowSpacing??e.spacing??0,columnSpacing:e.columnSpacing??e.spacing??0}),utilityClass:z,slotClasses:n=>({root:["root",n.container&&"container",n.item&&"item",n.zeroMinWidth&&"zeroMinWidth",...h(n.spacing,n.container),n.direction!=="row"&&`direction-xs-${String(n.direction)}`,n.wrap!=="wrap"&&`wrap-xs-${String(n.wrap)}`,n.xs!==!1&&`grid-xs-${String(n.xs)}`,n.sm!==!1&&`grid-sm-${String(n.sm)}`,n.md!==!1&&`grid-md-${String(n.md)}`,n.lg!==!1&&`grid-lg-${String(n.lg)}`,n.xl!==!1&&`grid-xl-${String(n.xl)}`]})});function m(n){const e=parseFloat(n);return`${e}${String(n).replace(String(e),"")||"px"}`}function V(n){const{theme:e,ownerState:r}=n;let a;return e.breakpoints.keys.reduce((t,i)=>{let s={};if(r[i]&&(a=r[i]),!a)return t;if(a===!0)s={flexBasis:0,flexGrow:1,maxWidth:"100%"};else if(a==="auto")s={flexBasis:"auto",flexGrow:0,flexShrink:0,maxWidth:"none",width:"auto"};else{const c=f({values:r.columns,breakpoints:e.breakpoints.values}),o=typeof c=="object"?c[i]:c;if(o==null)return t;const l=`${Math.round(a/o*1e8)/1e6}%`;let g={};if(r.container&&r.item&&r.columnSpacing!==0){const u=e.spacing(r.columnSpacing);if(u!=="0px"){const p=`calc(${l} + ${m(u)})`;g={flexBasis:p,maxWidth:p}}}s={flexBasis:l,flexGrow:0,maxWidth:l,...g}}return e.breakpoints.values[i]===0?Object.assign(t,s):t={...t,[e.breakpoints.up(i)]:s},t},{})}function A(n){const{theme:e,ownerState:r}=n,a=f({values:r.direction,breakpoints:e.breakpoints.values});return x({theme:e},a,t=>{let i={flexDirection:t};return t.indexOf("column")===0&&(i={...i,[`& > .${S.item}`]:{maxWidth:"none"}}),i})}function O(n){const{theme:e,ownerState:r}=n,{container:a,rowSpacing:t}=r;let i={};if(a&&t!==0){const s=f({values:t,breakpoints:e.breakpoints.values});i=x({theme:e},s,c=>{const o=e.spacing(c);return o!=="0px"?{marginTop:`-${m(o)}`,[`& > .${S.item}`]:{paddingTop:m(o)}}:{}})}return i}function j(n){const{theme:e,ownerState:r}=n,{container:a,columnSpacing:t}=r;let i={};if(a&&t!==0){const s=f({values:t,breakpoints:e.breakpoints.values});i=x({theme:e},s,c=>{const o=e.spacing(c);return o!=="0px"?{width:`calc(100% + ${m(o)})`,marginLeft:`-${m(o)}`,[`& > .${S.item}`]:{paddingLeft:m(o)}}:{}})}return i}function h(n,e,r={}){if(!e||!n||n<=0)return[];if(typeof n=="string"&&!Number.isNaN(Number(n))||typeof n=="number")return[r[`spacing-xs-${String(n)}`]||`spacing-xs-${String(n)}`];if(typeof n=="string"||Array.isArray(n))return[];const a=n.xs,t=n.sm,i=n.md,s=n.lg,c=n.xl;return[Number(a)>0&&(r[`spacing-xs-${String(a)}`]||`spacing-xs-${String(a)}`),Number(t)>0&&(r[`spacing-sm-${String(t)}`]||`spacing-sm-${String(t)}`),Number(i)>0&&(r[`spacing-md-${String(i)}`]||`spacing-md-${String(i)}`),Number(s)>0&&(r[`spacing-lg-${String(s)}`]||`spacing-lg-${String(s)}`),Number(c)>0&&(r[`spacing-xl-${String(c)}`]||`spacing-xl-${String(c)}`)]}const T=W("div",{name:"MuiGrid",slot:"Root",overridesResolver:(n,e)=>{const{container:r,direction:a,item:t,lg:i,md:s,sm:c,spacing:o,wrap:l,xl:g,xs:u,zeroMinWidth:p}=n.ownerState;return[e.root,r&&e.container,t&&e.item,p&&e.zeroMinWidth,...h(o,r,e),a!=="row"&&e[`direction-xs-${String(a)}`],l!=="wrap"&&e[`wrap-xs-${String(l)}`],u!==!1&&e[`grid-xs-${String(u)}`],c!==!1&&e[`grid-sm-${String(c)}`],s!==!1&&e[`grid-md-${String(s)}`],i!==!1&&e[`grid-lg-${String(i)}`],g!==!1&&e[`grid-xl-${String(g)}`]]}})(({ownerState:n})=>({boxSizing:"border-box",...n.container&&{display:"flex",flexWrap:"wrap",width:"100%"},...n.item&&{margin:0},...n.zeroMinWidth&&{minWidth:0},...n.wrap!=="wrap"&&{flexWrap:n.wrap}}),A,O,j,V),L=I.component(function({allProps:e,props:r,otherProps:a,classes:t}){const i=N(w),s=r.columns||i||12;return(o=>s!==12?$(w.Provider,{value:s,children:o}):o)($(T,k({ownerState:e,get className(){return M(t.root,a.className)}},a,{get children(){return r.children}})))});export{L as G};
