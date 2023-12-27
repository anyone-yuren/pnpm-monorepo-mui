var A=Object.defineProperty;var P=Object.getOwnPropertySymbols;var U=Object.prototype.hasOwnProperty,J=Object.prototype.propertyIsEnumerable;var M=(e,t,a)=>t in e?A(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,N=(e,t)=>{for(var a in t||(t={}))U.call(t,a)&&M(e,a,t[a]);if(P)for(var a of P(t))J.call(t,a)&&M(e,a,t[a]);return e};import{p as _,q as W,t as q,s as p,r as v,x as H,e as E,l as g,cd as B,o as Q,am as Z,j as i,an as K,aE as ee,a as F,ce as u,aG as b,B as z,aH as te}from"./index-17f935ee.js";const ne=e=>{const{componentCls:t,sizePaddingEdgeHorizontal:a,colorSplit:n,lineWidth:r,textPaddingInline:d,orientationMargin:l,verticalMarginInline:o}=e;return{[t]:Object.assign(Object.assign({},q(e)),{borderBlockStart:`${p(r)} solid ${n}`,"&-vertical":{position:"relative",top:"-0.06em",display:"inline-block",height:"0.9em",marginInline:o,marginBlock:0,verticalAlign:"middle",borderTop:0,borderInlineStart:`${p(r)} solid ${n}`},"&-horizontal":{display:"flex",clear:"both",width:"100%",minWidth:"100%",margin:`${p(e.dividerHorizontalGutterMargin)} 0`},[`&-horizontal${t}-with-text`]:{display:"flex",alignItems:"center",margin:`${p(e.dividerHorizontalWithTextGutterMargin)} 0`,color:e.colorTextHeading,fontWeight:500,fontSize:e.fontSizeLG,whiteSpace:"nowrap",textAlign:"center",borderBlockStart:`0 ${n}`,"&::before, &::after":{position:"relative",width:"50%",borderBlockStart:`${p(r)} solid transparent`,borderBlockStartColor:"inherit",borderBlockEnd:0,transform:"translateY(50%)",content:"''"}},[`&-horizontal${t}-with-text-left`]:{"&::before":{width:`calc(${l} * 100%)`},"&::after":{width:`calc(100% - ${l} * 100%)`}},[`&-horizontal${t}-with-text-right`]:{"&::before":{width:`calc(100% - ${l} * 100%)`},"&::after":{width:`calc(${l} * 100%)`}},[`${t}-inner-text`]:{display:"inline-block",paddingBlock:0,paddingInline:d},"&-dashed":{background:"none",borderColor:n,borderStyle:"dashed",borderWidth:`${p(r)} 0 0`},[`&-horizontal${t}-with-text${t}-dashed`]:{"&::before, &::after":{borderStyle:"dashed none none"}},[`&-vertical${t}-dashed`]:{borderInlineStartWidth:r,borderInlineEnd:0,borderBlockStart:0,borderBlockEnd:0},[`&-plain${t}-with-text`]:{color:e.colorText,fontWeight:"normal",fontSize:e.fontSize},[`&-horizontal${t}-with-text-left${t}-no-default-orientation-margin-left`]:{"&::before":{width:0},"&::after":{width:"100%"},[`${t}-inner-text`]:{paddingInlineStart:a}},[`&-horizontal${t}-with-text-right${t}-no-default-orientation-margin-right`]:{"&::before":{width:"100%"},"&::after":{width:0},[`${t}-inner-text`]:{paddingInlineEnd:a}}})}},ae=e=>({textPaddingInline:"1em",orientationMargin:.05,verticalMarginInline:e.marginXS}),re=_("Divider",e=>{const t=W(e,{dividerHorizontalWithTextGutterMargin:e.margin,dividerHorizontalGutterMargin:e.marginLG,sizePaddingEdgeHorizontal:0});return[ne(t)]},ae,{unitless:{orientationMargin:!0}});var ie=globalThis&&globalThis.__rest||function(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,n=Object.getOwnPropertySymbols(e);r<n.length;r++)t.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(a[n[r]]=e[n[r]]);return a};const oe=e=>{const{getPrefixCls:t,direction:a,divider:n}=v.useContext(H),{prefixCls:r,type:d="horizontal",orientation:l="center",orientationMargin:o,className:m,rootClassName:h,children:x,dashed:j,plain:c,style:$}=e,S=ie(e,["prefixCls","type","orientation","orientationMargin","className","rootClassName","children","dashed","plain","style"]),s=t("divider",r),[w,C]=re(s),O=l.length>0?`-${l}`:l,y=!!x,f=l==="left"&&o!=null,T=l==="right"&&o!=null,V=E(s,n==null?void 0:n.className,C,`${s}-${d}`,{[`${s}-with-text`]:y,[`${s}-with-text${O}`]:y,[`${s}-dashed`]:!!j,[`${s}-plain`]:!!c,[`${s}-rtl`]:a==="rtl",[`${s}-no-default-orientation-margin-left`]:f,[`${s}-no-default-orientation-margin-right`]:T},m,h),G=v.useMemo(()=>typeof o=="number"?o:/^\d+$/.test(o)?Number(o):o,[o]),X=Object.assign(Object.assign({},f&&{marginLeft:G}),T&&{marginRight:G});return w(v.createElement("div",Object.assign({className:V,style:Object.assign(Object.assign({},n==null?void 0:n.style),$)},S,{role:"separator"}),x&&d!=="vertical"&&v.createElement("span",{className:`${s}-inner-text`,style:X},x)))},Ne=oe,L=["wrap","nowrap","wrap-reverse"],R=["flex-start","flex-end","start","end","center","space-between","space-around","space-evenly","stretch","normal","left","right"],D=["center","start","end","flex-start","flex-end","self-start","self-end","baseline","normal","stretch"],se=(e,t)=>{const a={};return L.forEach(n=>{a[`${e}-wrap-${n}`]=t.wrap===n}),a},le=(e,t)=>{const a={};return D.forEach(n=>{a[`${e}-align-${n}`]=t.align===n}),a[`${e}-align-stretch`]=!t.align&&!!t.vertical,a},ce=(e,t)=>{const a={};return R.forEach(n=>{a[`${e}-justify-${n}`]=t.justify===n}),a};function de(e,t){return E(Object.assign(Object.assign(Object.assign({},se(e,t)),le(e,t)),ce(e,t)))}const ge=e=>{const{componentCls:t}=e;return{[t]:{display:"flex","&-vertical":{flexDirection:"column"},"&-rtl":{direction:"rtl"},"&:empty":{display:"none"}}}},fe=e=>{const{componentCls:t}=e;return{[t]:{"&-gap-small":{gap:e.flexGapSM},"&-gap-middle":{gap:e.flexGap},"&-gap-large":{gap:e.flexGapLG}}}},pe=e=>{const{componentCls:t}=e,a={};return L.forEach(n=>{a[`${t}-wrap-${n}`]={flexWrap:n}}),a},me=e=>{const{componentCls:t}=e,a={};return D.forEach(n=>{a[`${t}-align-${n}`]={alignItems:n}}),a},he=e=>{const{componentCls:t}=e,a={};return R.forEach(n=>{a[`${t}-justify-${n}`]={justifyContent:n}}),a},xe=()=>({}),ue=_("Flex",e=>{const{paddingXS:t,padding:a,paddingLG:n}=e,r=W(e,{flexGapSM:t,flexGap:a,flexGapLG:n});return[ge(r),fe(r),pe(r),me(r),he(r)]},xe);var ye=globalThis&&globalThis.__rest||function(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,n=Object.getOwnPropertySymbols(e);r<n.length;r++)t.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(a[n[r]]=e[n[r]]);return a};const ve=g.forwardRef((e,t)=>{const{prefixCls:a,rootClassName:n,className:r,style:d,flex:l,gap:o,children:m,vertical:h=!1,component:x="div"}=e,j=ye(e,["prefixCls","rootClassName","className","style","flex","gap","children","vertical","component"]),{flex:c,direction:$,getPrefixCls:S}=g.useContext(H),s=S("flex",a),[w,C]=ue(s),O=h!=null?h:c==null?void 0:c.vertical,y=E(r,n,c==null?void 0:c.className,s,C,de(s,e),{[`${s}-rtl`]:$==="rtl",[`${s}-gap-${o}`]:B(o),[`${s}-vertical`]:O}),f=Object.assign(Object.assign({},c==null?void 0:c.style),d);return l&&(f.flex=l),o&&!B(o)&&(f.gap=o),w(g.createElement(x,Object.assign({ref:t,className:y,style:f},Q(j,["justify","wrap","align"])),m))}),be=ve;function je(e){const{children:t,direction:a="left",delay:n=3e3,run:r=!1,config:d={tension:100,friction:26}}=e,[l,o]=g.useState(!1);g.useEffect(()=>{o(r)},[r]);const m=Z({opacity:l?1:0,transform:l?`${a==="left"?"translateX(0px) scale(1) rotateY(0deg)":"translateY(0px) scale(1) rotateY(0deg)"}`:`${a==="left"?"translateX(80px) scale(1) rotateY(10deg)":"translateY(80px) scale(0.9) rotateY(10deg)"}`,delay:n,config:N({},d),onRest:()=>{}});return i.jsx(K.div,{className:e.className,style:N({},m),children:r&&t})}const $e="/react-antd-admin-pnpm/assets/avatar_2-ce7fcb30.jpg",Se="/react-antd-admin-pnpm/assets/cover_5-5698cb6c.jpg",we=ee(({token:e})=>({"user-card":{width:"100%",".ant-skeleton, .ant-skeleton-image":{width:"100% !important"},".ant-card-cover":{maxHeight:"200px",overflow:"hidden"},".cover":{position:"relative",filter:"blur(0)","&:before":{content:'""',top:0,left:0,width:"100%",height:" 100%",zIndex:1,position:"absolute",background:"rgba(22, 28, 36, 0.48)",borderRadius:`${e.borderRadiusLG}px ${e.borderRadiusLG}px 0 0`}},".user_info":{position:"relative",".info":{paddingTop:e.margin*2,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"},".avatar-svg":{color:e.colorBgContainer,width:"144px !important",height:"62px !important",top:"-60px",position:"absolute",transform:"translateX(-50%)",left:"50%"},".avatar":{width:"64px",height:"64px",borderRadius:"50%",overflow:"hidden",position:"absolute",top:"-56px",transform:"translateX(-50%)",left:"50%"}}}})),{Text:Y,Title:k}=te,I=({name:e,count:t})=>i.jsxs("div",{className:"footer",children:[i.jsx(Y,{type:"secondary",children:e}),i.jsxs(k,{style:{margin:0},level:5,children:[t,"K"]})]}),ze=e=>{const[t,a]=g.useState(!0),{styles:n}=we();return g.useEffect(()=>{setTimeout(()=>{a(!1)},1500)},[]),i.jsxs(i.Fragment,{children:[t&&i.jsx(F,{className:n["user-card"],actions:[i.jsx(u.Button,{active:!0,shape:"round"}),i.jsx(u.Button,{active:!0,shape:"round"}),i.jsx(u.Button,{active:!0,shape:"round"})],cover:i.jsx(u.Image,{active:!0}),children:i.jsx(u,{loading:!0,avatar:!0,active:!0})}),i.jsx(je,{direction:"up",run:!t,delay:100,children:i.jsx(F,{className:n["user-card"],cover:i.jsx("span",{className:"cover",children:i.jsx("img",{alt:"example",src:Se})}),actions:[i.jsx(I,{name:"Foloower",count:1.02}),i.jsx(I,{name:"Folowing",count:2.58}),i.jsx(I,{name:"Total Post",count:1.13})],children:i.jsxs("div",{className:"user_info",children:[i.jsx(b,{className:"avatar-svg",name:"wave"}),i.jsx("div",{className:"avatar",children:i.jsx("img",{src:$e})}),i.jsxs("div",{className:"info",children:[i.jsx(k,{style:{margin:0},level:5,children:"Gbeata"}),i.jsx(Y,{type:"secondary",children:"来历不明"}),i.jsxs(be,{style:{marginTop:8},gap:8,children:[i.jsx(z,{shape:"circle",icon:i.jsx(b,{style:{color:"#1890ff"},name:"github"})}),i.jsx(z,{shape:"circle",icon:i.jsx(b,{name:"message"})}),i.jsx(z,{shape:"circle",icon:i.jsx(b,{name:"like"})})]})]})]})})})]})};export{Ne as D,be as F,je as T,ze as U,I as a,$e as b,Se as c};
