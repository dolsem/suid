var T=Object.defineProperty;var c=(e,t)=>T(e,"name",{value:t,configurable:!0});import{q as y,r as x,s as S,v as l,w as m,ab as L,a as B,m as n,K as P,d as s,A as R,n as k,ac as N,T as v,y as $,U as D,R as I}from"./index.61547350.js";import{f as U}from"./formControlState.b9711728.js";import{u as A}from"./useFormControl.37262801.js";import{F as E,S as H}from"./SwitchBase.dd207950.js";function O(e){return x("MuiFormControlLabel",e)}c(O,"getFormControlLabelUtilityClasses");const b=y("MuiFormControlLabel",["root","labelPlacementStart","labelPlacementTop","labelPlacementBottom","disabled","label","error"]),w=S()({name:"MuiFormControlLabel",propDefaults:({set:e})=>e({componentsProps:{},labelPlacement:"end"}),selfPropNames:["checked","classes","componentsProps","control","disableTypography","disabled","inputRef","label","labelPlacement","name","onChange","value"],autoCallUseClasses:!1,utilityClass:O,slotClasses:e=>({root:["root",!!e.disabled&&"disabled",`labelPlacement${l(e.labelPlacement)}`,!!e.error&&"error"],label:["label",!!e.disabled&&"disabled"]})}),W=m("label",{name:"MuiFormControlLabel",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:o}=e;return[{[`& .${b.label}`]:t.label},t.root,t[`labelPlacement${l(o.labelPlacement)}`]]}})(({theme:e,ownerState:t})=>({display:"inline-flex",alignItems:"center",cursor:"pointer",verticalAlign:"middle",WebkitTapHighlightColor:"transparent",marginLeft:-11,marginRight:16,[`&.${b.disabled}`]:{cursor:"default"},...t.labelPlacement==="start"&&{flexDirection:"row-reverse",marginLeft:16,marginRight:-11},...t.labelPlacement==="top"&&{flexDirection:"column-reverse",marginLeft:16},...t.labelPlacement==="bottom"&&{flexDirection:"column",marginLeft:16},[`& .${b.label}`]:{[`&.${b.disabled}`]:{color:e.palette.text.disabled}}})),ee=w.component(c(function({allProps:t,otherProps:o,props:r}){const d=A(),[u]=L(r,["checked","name","onChange","value","inputRef","disabled"]),[h,p]=B(r.disabled),g=n(u,{setDisabled:i=>p(i)}),z=U({props:t,muiFormControl:d,states:["error"]}),C=n(t,()=>({error:z.error}),()=>({disabled:h()})),f=w.useClasses(C),F=c(i=>i instanceof HTMLElement&&i.classList.contains(v.toString()),"isTypography"),M=P(()=>{const i=N(()=>r.label)();return F(i)||r.disableTypography?i:s(v,n({component:"span",get className(){return f.label}},()=>r.componentsProps.typography||{},{get children(){return r.label}}))});return s(E.Provider,{value:g,get children(){return s(W,n(o,{get className(){return R(f.root,o.className)},ownerState:C,get children(){return[k(()=>r.control),k(()=>M())]}}))}})},"FormControlLabel"));function X(e){return x("MuiSwitch",e)}c(X,"getSwitchUtilityClass");const a=y("MuiSwitch",["root","edgeStart","edgeEnd","switchBase","colorPrimary","colorSecondary","sizeSmall","sizeMedium","checked","disabled","input","thumb","track"]),j=S()({name:"MuiSwitch",selfPropNames:["checkedIcon","classes","color","disabled","icon","size","value"],propDefaults:({set:e})=>e({color:"primary",size:"medium"}),utilityClass:X,slotClasses:e=>({root:["root",!!e.edge&&`edge${l(e.edge)}`,`size${l(e.size)}`],switchBase:["switchBase",`color${l(e.color)}`,!!e.checked&&"checked",!!e.disabled&&"disabled"],thumb:["thumb"],track:["track"],input:["input"]})}),q=m("span",{name:"MuiSwitch",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:o}=e;return[t.root,o.edge&&t[`edge${l(o.edge)}`],t[`size${l(o.size)}`]]}})(({ownerState:e})=>({display:"inline-flex",width:34+12*2,height:14+12*2,overflow:"hidden",padding:12,boxSizing:"border-box",position:"relative",flexShrink:0,zIndex:0,verticalAlign:"middle","@media print":{colorAdjust:"exact"},...e.edge==="start"&&{marginLeft:-8},...e.edge==="end"&&{marginRight:-8},...e.size==="small"&&{width:40,height:24,padding:7,[`& .${a.thumb}`]:{width:16,height:16},[`& .${a.switchBase}`]:{padding:4,[`&.${a.checked}`]:{transform:"translateX(16px)"}}}})),K=m(H,{name:"MuiSwitch",slot:"SwitchBase",overridesResolver:(e,t)=>{const{ownerState:o}=e;return[t.switchBase,{[`& .${a.input}`]:t.input},o.color!=="default"&&t[`color${l(o.color)}`]]}})(({theme:e})=>({position:"absolute",top:0,left:0,zIndex:1,color:e.palette.mode==="light"?e.palette.common.white:e.palette.grey[300],transition:e.transitions.create(["left","transform"],{duration:e.transitions.duration.shortest}),[`&.${a.checked}`]:{transform:"translateX(20px)"},[`&.${a.disabled}`]:{color:e.palette.mode==="light"?e.palette.grey[100]:e.palette.grey[600]},[`&.${a.checked} + .${a.track}`]:{opacity:.5},[`&.${a.disabled} + .${a.track}`]:{opacity:e.palette.mode==="light"?.12:.2},[`& .${a.input}`]:{left:"-100%",width:"300%"}}),({theme:e,ownerState:t})=>({"&:hover":{backgroundColor:$(e.palette.action.active,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},...t.color!=="default"&&{[`&.${a.checked}`]:{color:e.palette[t.color].main,"&:hover":{backgroundColor:$(e.palette[t.color].main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},[`&.${a.disabled}`]:{color:e.palette.mode==="light"?D(e.palette[t.color].main,.62):I(e.palette[t.color].main,.55)}},[`&.${a.checked} + .${a.track}`]:{backgroundColor:e.palette[t.color].main}}})),G=m("span",{name:"MuiSwitch",slot:"Track",overridesResolver:(e,t)=>t.track})(({theme:e})=>({height:"100%",width:"100%",borderRadius:14/2,zIndex:-1,transition:e.transitions.create(["opacity","background-color"],{duration:e.transitions.duration.shortest}),backgroundColor:e.palette.mode==="light"?e.palette.common.black:e.palette.common.white,opacity:e.palette.mode==="light"?.38:.3})),J=m("span",{name:"MuiSwitch",slot:"Thumb",overridesResolver:(e,t)=>t.thumb})(({theme:e})=>({boxShadow:e.shadows[1],backgroundColor:"currentColor",width:20,height:20,borderRadius:"50%"})),te=j.component(c(function({allProps:t,props:o,classes:r,otherProps:d}){const u=P(()=>s(J,{get className(){return r.thumb},ownerState:t})),h=n(r,()=>({root:r.switchBase})),[,p]=L(d,["sx"]),g=n(()=>({icon:u(),checkedIcon:u()}),()=>({checkedIcon:o.checkedIcon,disabled:o.disabled,icon:o.icon,value:o.value}),p);return s(q,{get className(){return R(r.root,d.className)},get sx(){return d.sx},ownerState:t,get children(){return[s(K,n({type:"checkbox",ownerState:t},g,{classes:h})),s(G,{get className(){return r.track},ownerState:t})]}})},"Switch"));export{ee as F,te as S};
