import{r as n,p as ze,q as Ce,t as Oe,s as se,aP as $e,x as ie,aa as we,bY as Me,c7 as ke,a7 as le,e as J,bN as Re,ai as Ee,bc as Ne,N as A,O as F,j as e,R as D,C as E,a as y,h as W,J as q,al as U,aE as V,aH as K,I as Le,B as L,c8 as S,c9 as O,ca as Ae,cb as Fe,l as Z,cc as Ie}from"./index-17f935ee.js";import{F as u,a as ae,D as Te,c as _e,b as Ge,T as H}from"./index-f622f6ca.js";import{P as Pe}from"./index-a0e99b5c.js";import{I as Be}from"./index-2df84f89.js";import"./addEventListener-f7b371b8.js";const He=n.createContext({}),Y=He,We=t=>{const{antCls:s,componentCls:a,iconCls:i,avatarBg:r,avatarColor:l,containerSize:m,containerSizeLG:h,containerSizeSM:z,textFontSize:g,textFontSizeLG:$,textFontSizeSM:G,borderRadius:j,borderRadiusLG:v,borderRadiusSM:w,lineWidth:M,lineType:I,calc:N}=t,C=(x,k,p)=>({width:x,height:x,lineHeight:se(N(x).sub(N(M).mul(2)).equal()),borderRadius:"50%",[`&${a}-square`]:{borderRadius:p},[`${a}-string`]:{position:"absolute",left:{_skip_check_:!0,value:"50%"},transformOrigin:"0 center"},[`&${a}-icon`]:{fontSize:k,[`> ${i}`]:{margin:0}}});return{[a]:Object.assign(Object.assign(Object.assign(Object.assign({},Oe(t)),{position:"relative",display:"inline-block",overflow:"hidden",color:l,whiteSpace:"nowrap",textAlign:"center",verticalAlign:"middle",background:r,border:`${se(M)} ${I} transparent`,"&-image":{background:"transparent"},[`${s}-image-img`]:{display:"block"}}),C(m,g,j)),{"&-lg":Object.assign({},C(h,$,v)),"&-sm":Object.assign({},C(z,G,w)),"> img":{display:"block",width:"100%",height:"100%",objectFit:"cover"}})}},De=t=>{const{componentCls:s,groupBorderColor:a,groupOverlapping:i,groupSpace:r}=t;return{[`${s}-group`]:{display:"inline-flex",[`${s}`]:{borderColor:a},"> *:not(:first-child)":{marginInlineStart:i}},[`${s}-group-popover`]:{[`${s} + ${s}`]:{marginInlineStart:r}}}},Ve=t=>{const{controlHeight:s,controlHeightLG:a,controlHeightSM:i,fontSize:r,fontSizeLG:l,fontSizeXL:m,fontSizeHeading3:h,marginXS:z,marginXXS:g,colorBorderBg:$}=t;return{containerSize:s,containerSizeLG:a,containerSizeSM:i,textFontSize:Math.round((l+m)/2),textFontSizeLG:h,textFontSizeSM:r,groupSpace:g,groupOverlapping:-z,groupBorderColor:$}},ce=ze("Avatar",t=>{const{colorTextLightSolid:s,colorTextPlaceholder:a}=t,i=Ce(t,{avatarBg:a,avatarColor:s});return[We(i),De(i)]},Ve);var Xe=globalThis&&globalThis.__rest||function(t,s){var a={};for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&s.indexOf(i)<0&&(a[i]=t[i]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,i=Object.getOwnPropertySymbols(t);r<i.length;r++)s.indexOf(i[r])<0&&Object.prototype.propertyIsEnumerable.call(t,i[r])&&(a[i[r]]=t[i[r]]);return a};const Ze=(t,s)=>{const[a,i]=n.useState(1),[r,l]=n.useState(!1),[m,h]=n.useState(!0),z=n.useRef(null),g=n.useRef(null),$=$e(s,z),{getPrefixCls:G,avatar:j}=n.useContext(ie),v=n.useContext(Y),w=()=>{if(!g.current||!z.current)return;const o=g.current.offsetWidth,c=z.current.offsetWidth;if(o!==0&&c!==0){const{gap:f=4}=t;f*2<c&&i(c-f*2<o?(c-f*2)/o:1)}};n.useEffect(()=>{l(!0)},[]),n.useEffect(()=>{h(!0),i(1)},[t.src]),n.useEffect(w,[t.gap]);const M=()=>{const{onError:o}=t;(o==null?void 0:o())!==!1&&h(!1)},{prefixCls:I,shape:N,size:C,src:x,srcSet:k,icon:p,className:T,rootClassName:P,alt:he,draggable:xe,children:X,crossOrigin:me}=t,B=Xe(t,["prefixCls","shape","size","src","srcSet","icon","className","rootClassName","alt","draggable","children","crossOrigin"]),d=we(o=>{var c,f;return(f=(c=C!=null?C:v==null?void 0:v.size)!==null&&c!==void 0?c:o)!==null&&f!==void 0?f:"default"}),ge=Object.keys(typeof d=="object"?d||{}:{}).some(o=>["xs","sm","md","lg","xl","xxl"].includes(o)),Q=Me(ge),pe=n.useMemo(()=>{if(typeof d!="object")return{};const o=ke.find(f=>Q[f]),c=d[o];return c?{width:c,height:c,lineHeight:`${c}px`,fontSize:c&&(p||X)?c/2:18}:{}},[Q,d]),b=G("avatar",I),ee=le(b),[fe,je]=ce(b,ee),ve=J({[`${b}-lg`]:d==="large",[`${b}-sm`]:d==="small"}),te=n.isValidElement(x),be=N||(v==null?void 0:v.shape)||"circle",ye=J(b,ve,j==null?void 0:j.className,`${b}-${be}`,{[`${b}-image`]:te||x&&m,[`${b}-icon`]:!!p},ee,T,P,je),Se=typeof d=="number"?{width:d,height:d,lineHeight:`${d}px`,fontSize:p?d/2:18}:{};let _;if(typeof x=="string"&&m)_=n.createElement("img",{src:x,draggable:xe,srcSet:k,onError:M,alt:he,crossOrigin:me});else if(te)_=x;else if(p)_=p;else if(r||a!==1){const o=`scale(${a}) translateX(-50%)`,c={msTransform:o,WebkitTransform:o,transform:o},f=typeof d=="number"?{lineHeight:`${d}px`}:{};_=n.createElement(Re,{onResize:w},n.createElement("span",{className:`${b}-string`,ref:g,style:Object.assign(Object.assign({},f),c)},X))}else _=n.createElement("span",{className:`${b}-string`,style:{opacity:0},ref:g},X);return delete B.onError,delete B.gap,fe(n.createElement("span",Object.assign({},B,{style:Object.assign(Object.assign(Object.assign(Object.assign({},Se),pe),j==null?void 0:j.style),B.style),className:ye,ref:$}),_))},Je=n.forwardRef(Ze),oe=Je,ne=t=>{const{size:s,shape:a}=n.useContext(Y),i=n.useMemo(()=>({size:t.size||s,shape:t.shape||a}),[t.size,t.shape,s,a]);return n.createElement(Y.Provider,{value:i},t.children)},Ye=t=>{const{getPrefixCls:s,direction:a}=n.useContext(ie),{prefixCls:i,className:r,rootClassName:l,style:m,maxCount:h,maxStyle:z,size:g,shape:$,maxPopoverPlacement:G="top",maxPopoverTrigger:j="hover",children:v}=t,w=s("avatar",i),M=`${w}-group`,I=le(w),[N,C]=ce(w,I),x=J(M,{[`${M}-rtl`]:a==="rtl"},I,r,l,C),k=Ee(v).map((T,P)=>Ne(T,{key:`avatar-key-${P}`})),p=k.length;if(h&&h<p){const T=k.slice(0,h),P=k.slice(h,p);return T.push(n.createElement(Pe,{key:"avatar-popover-key",content:P,trigger:j,placement:G,overlayClassName:`${M}-popover`},n.createElement(oe,{style:z},`+${p-h}`))),N(n.createElement(ne,{shape:$,size:g},n.createElement("div",{className:x,style:m},T)))}return N(n.createElement(ne,{shape:$,size:g},n.createElement("div",{className:x,style:m},k)))},qe=Ye,de=oe;de.Group=qe;const R=de;var Ue={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M716.3 313.8c19-18.9 19-49.7 0-68.6l-69.9-69.9.1.1c-18.5-18.5-50.3-50.3-95.3-95.2-21.2-20.7-55.5-20.5-76.5.5L80.9 474.2a53.84 53.84 0 000 76.4L474.6 944a54.14 54.14 0 0076.5 0l165.1-165c19-18.9 19-49.7 0-68.6a48.7 48.7 0 00-68.7 0l-125 125.2c-5.2 5.2-13.3 5.2-18.5 0L189.5 521.4c-5.2-5.2-5.2-13.3 0-18.5l314.4-314.2c.4-.4.9-.7 1.3-1.1 5.2-4.1 12.4-3.7 17.2 1.1l125.2 125.1c19 19 49.8 19 68.7 0zM408.6 514.4a106.3 106.2 0 10212.6 0 106.3 106.2 0 10-212.6 0zm536.2-38.6L821.9 353.5c-19-18.9-49.8-18.9-68.7.1a48.4 48.4 0 000 68.6l83 82.9c5.2 5.2 5.2 13.3 0 18.5l-81.8 81.7a48.4 48.4 0 000 68.6 48.7 48.7 0 0068.7 0l121.8-121.7a53.93 53.93 0 00-.1-76.4z"}}]},name:"ant-design",theme:"outlined"};const Ke=Ue;var Qe=function(s,a){return n.createElement(A,F({},s,{ref:a,icon:Ke}))};const et=n.forwardRef(Qe);var tt={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M464 512a48 48 0 1096 0 48 48 0 10-96 0zm200 0a48 48 0 1096 0 48 48 0 10-96 0zm-400 0a48 48 0 1096 0 48 48 0 10-96 0zm661.2-173.6c-22.6-53.7-55-101.9-96.3-143.3a444.35 444.35 0 00-143.3-96.3C630.6 75.7 572.2 64 512 64h-2c-60.6.3-119.3 12.3-174.5 35.9a445.35 445.35 0 00-142 96.5c-40.9 41.3-73 89.3-95.2 142.8-23 55.4-34.6 114.3-34.3 174.9A449.4 449.4 0 00112 714v152a46 46 0 0046 46h152.1A449.4 449.4 0 00510 960h2.1c59.9 0 118-11.6 172.7-34.3a444.48 444.48 0 00142.8-95.2c41.3-40.9 73.8-88.7 96.5-142 23.6-55.2 35.6-113.9 35.9-174.5.3-60.9-11.5-120-34.8-175.6zm-151.1 438C704 845.8 611 884 512 884h-1.7c-60.3-.3-120.2-15.3-173.1-43.5l-8.4-4.5H188V695.2l-4.5-8.4C155.3 633.9 140.3 574 140 513.7c-.4-99.7 37.7-193.3 107.6-263.8 69.8-70.5 163.1-109.5 262.8-109.9h1.7c50 0 98.5 9.7 144.2 28.9 44.6 18.7 84.6 45.6 119 80 34.3 34.3 61.3 74.4 80 119 19.4 46.2 29.1 95.2 28.9 145.8-.6 99.6-39.7 192.9-110.1 262.7z"}}]},name:"message",theme:"outlined"};const st=tt;var at=function(s,a){return n.createElement(A,F({},s,{ref:a,icon:st}))};const nt=n.forwardRef(at);var rt={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M456 231a56 56 0 10112 0 56 56 0 10-112 0zm0 280a56 56 0 10112 0 56 56 0 10-112 0zm0 280a56 56 0 10112 0 56 56 0 10-112 0z"}}]},name:"more",theme:"outlined"};const it=rt;var lt=function(s,a){return n.createElement(A,F({},s,{ref:a,icon:it}))};const ct=n.forwardRef(lt);var ot={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M752 664c-28.5 0-54.8 10-75.4 26.7L469.4 540.8a160.68 160.68 0 000-57.6l207.2-149.9C697.2 350 723.5 360 752 360c66.2 0 120-53.8 120-120s-53.8-120-120-120-120 53.8-120 120c0 11.6 1.6 22.7 4.7 33.3L439.9 415.8C410.7 377.1 364.3 352 312 352c-88.4 0-160 71.6-160 160s71.6 160 160 160c52.3 0 98.7-25.1 127.9-63.8l196.8 142.5c-3.1 10.6-4.7 21.8-4.7 33.3 0 66.2 53.8 120 120 120s120-53.8 120-120-53.8-120-120-120zm0-476c28.7 0 52 23.3 52 52s-23.3 52-52 52-52-23.3-52-52 23.3-52 52-52zM312 600c-48.5 0-88-39.5-88-88s39.5-88 88-88 88 39.5 88 88-39.5 88-88 88zm440 236c-28.7 0-52-23.3-52-52s23.3-52 52-52 52 23.3 52 52-23.3 52-52 52z"}}]},name:"share-alt",theme:"outlined"};const dt=ot;var ut=function(s,a){return n.createElement(A,F({},s,{ref:a,icon:dt}))};const ht=n.forwardRef(ut);var xt={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M690.1 377.4c5.9 0 11.8.2 17.6.5-24.4-128.7-158.3-227.1-319.9-227.1C209 150.8 64 271.4 64 420.2c0 81.1 43.6 154.2 111.9 203.6a21.5 21.5 0 019.1 17.6c0 2.4-.5 4.6-1.1 6.9-5.5 20.3-14.2 52.8-14.6 54.3-.7 2.6-1.7 5.2-1.7 7.9 0 5.9 4.8 10.8 10.8 10.8 2.3 0 4.2-.9 6.2-2l70.9-40.9c5.3-3.1 11-5 17.2-5 3.2 0 6.4.5 9.5 1.4 33.1 9.5 68.8 14.8 105.7 14.8 6 0 11.9-.1 17.8-.4-7.1-21-10.9-43.1-10.9-66 0-135.8 132.2-245.8 295.3-245.8zm-194.3-86.5c23.8 0 43.2 19.3 43.2 43.1s-19.3 43.1-43.2 43.1c-23.8 0-43.2-19.3-43.2-43.1s19.4-43.1 43.2-43.1zm-215.9 86.2c-23.8 0-43.2-19.3-43.2-43.1s19.3-43.1 43.2-43.1 43.2 19.3 43.2 43.1-19.4 43.1-43.2 43.1zm586.8 415.6c56.9-41.2 93.2-102 93.2-169.7 0-124-120.8-224.5-269.9-224.5-149 0-269.9 100.5-269.9 224.5S540.9 847.5 690 847.5c30.8 0 60.6-4.4 88.1-12.3 2.6-.8 5.2-1.2 7.9-1.2 5.2 0 9.9 1.6 14.3 4.1l59.1 34c1.7 1 3.3 1.7 5.2 1.7a9 9 0 006.4-2.6 9 9 0 002.6-6.4c0-2.2-.9-4.4-1.4-6.6-.3-1.2-7.6-28.3-12.2-45.3-.5-1.9-.9-3.8-.9-5.7.1-5.9 3.1-11.2 7.6-14.5zM600.2 587.2c-19.9 0-36-16.1-36-35.9 0-19.8 16.1-35.9 36-35.9s36 16.1 36 35.9c0 19.8-16.2 35.9-36 35.9zm179.9 0c-19.9 0-36-16.1-36-35.9 0-19.8 16.1-35.9 36-35.9s36 16.1 36 35.9a36.08 36.08 0 01-36 35.9z"}}]},name:"wechat",theme:"outlined"};const mt=xt;var gt=function(s,a){return n.createElement(A,F({},s,{ref:a,icon:mt}))};const pt=n.forwardRef(gt);var ft={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M457.3 543c-68.1-17.7-145 16.2-174.6 76.2-30.1 61.2-1 129.1 67.8 151.3 71.2 23 155.2-12.2 184.4-78.3 28.7-64.6-7.2-131-77.6-149.2zm-52 156.2c-13.8 22.1-43.5 31.7-65.8 21.6-22-10-28.5-35.7-14.6-57.2 13.7-21.4 42.3-31 64.4-21.7 22.4 9.5 29.6 35 16 57.3zm45.5-58.5c-5 8.6-16.1 12.7-24.7 9.1-8.5-3.5-11.2-13.1-6.4-21.5 5-8.4 15.6-12.4 24.1-9.1 8.7 3.2 11.8 12.9 7 21.5zm334.5-197.2c15 4.8 31-3.4 35.9-18.3 11.8-36.6 4.4-78.4-23.2-109a111.39 111.39 0 00-106-34.3 28.45 28.45 0 00-21.9 33.8 28.39 28.39 0 0033.8 21.8c18.4-3.9 38.3 1.8 51.9 16.7a54.2 54.2 0 0111.3 53.3 28.45 28.45 0 0018.2 36zm99.8-206c-56.7-62.9-140.4-86.9-217.7-70.5a32.98 32.98 0 00-25.4 39.3 33.12 33.12 0 0039.3 25.5c55-11.7 114.4 5.4 154.8 50.1 40.3 44.7 51.2 105.7 34 159.1-5.6 17.4 3.9 36 21.3 41.7 17.4 5.6 36-3.9 41.6-21.2v-.1c24.1-75.4 8.9-161.1-47.9-223.9zM729 499c-12.2-3.6-20.5-6.1-14.1-22.1 13.8-34.7 15.2-64.7.3-86-28-40.1-104.8-37.9-192.8-1.1 0 0-27.6 12.1-20.6-9.8 13.5-43.5 11.5-79.9-9.6-101-47.7-47.8-174.6 1.8-283.5 110.6C127.3 471.1 80 557.5 80 632.2 80 775.1 263.2 862 442.5 862c235 0 391.3-136.5 391.3-245 0-65.5-55.2-102.6-104.8-118zM443 810.8c-143 14.1-266.5-50.5-275.8-144.5-9.3-93.9 99.2-181.5 242.2-195.6 143-14.2 266.5 50.5 275.8 144.4C694.4 709 586 796.6 443 810.8z"}}]},name:"weibo",theme:"outlined"};const jt=ft;var vt=function(s,a){return n.createElement(A,F({},s,{ref:a,icon:jt}))};const bt=n.forwardRef(vt);var yt={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M564.7 230.1V803h60l25.2 71.4L756.3 803h131.5V230.1H564.7zm247.7 497h-59.9l-75.1 50.4-17.8-50.4h-18V308.3h170.7v418.8zM526.1 486.9H393.3c2.1-44.9 4.3-104.3 6.6-172.9h130.9l-.1-8.1c0-.6-.2-14.7-2.3-29.1-2.1-15-6.6-34.9-21-34.9H287.8c4.4-20.6 15.7-69.7 29.4-93.8l6.4-11.2-12.9-.7c-.8 0-19.6-.9-41.4 10.6-35.7 19-51.7 56.4-58.7 84.4-18.4 73.1-44.6 123.9-55.7 145.6-3.3 6.4-5.3 10.2-6.2 12.8-1.8 4.9-.8 9.8 2.8 13 10.5 9.5 38.2-2.9 38.5-3 .6-.3 1.3-.6 2.2-1 13.9-6.3 55.1-25 69.8-84.5h56.7c.7 32.2 3.1 138.4 2.9 172.9h-141l-2.1 1.5c-23.1 16.9-30.5 63.2-30.8 65.2l-1.4 9.2h167c-12.3 78.3-26.5 113.4-34 127.4-3.7 7-7.3 14-10.7 20.8-21.3 42.2-43.4 85.8-126.3 153.6-3.6 2.8-7 8-4.8 13.7 2.4 6.3 9.3 9.1 24.6 9.1 5.4 0 11.8-.3 19.4-1 49.9-4.4 100.8-18 135.1-87.6 17-35.1 31.7-71.7 43.9-108.9L497 850l5-12c.8-1.9 19-46.3 5.1-95.9l-.5-1.8-108.1-123-22 16.6c6.4-26.1 10.6-49.9 12.5-71.1h158.7v-8c0-40.1-18.5-63.9-19.2-64.9l-2.4-3z"}}]},name:"zhihu",theme:"outlined"};const St=yt;var zt=function(s,a){return n.createElement(A,F({},s,{ref:a,icon:St}))};const Ct=n.forwardRef(zt),Ot=()=>e.jsx(e.Fragment,{children:e.jsxs(D,{gutter:[16,16],children:[e.jsx(E,{span:12,children:e.jsxs(y,{children:[e.jsx(W,{children:"Checkbox"}),e.jsx(q,{defaultValue:"lucy",style:{width:120},options:[{value:"jack",label:"Jack"},{value:"lucy",label:"Lucy"},{value:"Yiminghe",label:"yiminghe"},{value:"disabled",label:"Disabled",disabled:!0}]}),e.jsx(U,{defaultChecked:!0})]})}),e.jsx(E,{span:12})]})}),$t=()=>e.jsx(e.Fragment,{children:e.jsxs(D,{gutter:[16,16],children:[e.jsx(E,{span:12,children:e.jsxs(y,{children:[e.jsx(W,{children:"Checkbox"}),e.jsx(q,{defaultValue:"lucy",style:{width:120},options:[{value:"jack",label:"Jack"},{value:"lucy",label:"Lucy"},{value:"Yiminghe",label:"yiminghe"},{value:"disabled",label:"Disabled",disabled:!0}]}),e.jsx(U,{defaultChecked:!0})]})}),e.jsx(E,{span:12})]})}),wt=()=>e.jsx(e.Fragment,{children:e.jsxs(D,{gutter:[16,16],children:[e.jsx(E,{span:12,children:e.jsxs(y,{children:[e.jsx(W,{children:"Checkbox"}),e.jsx(q,{defaultValue:"lucy",style:{width:120},options:[{value:"jack",label:"Jack"},{value:"lucy",label:"Lucy"},{value:"Yiminghe",label:"yiminghe"},{value:"disabled",label:"Disabled",disabled:!0}]}),e.jsx(U,{defaultChecked:!0})]})}),e.jsx(E,{span:12,children:e.jsxs(y,{children:[e.jsx(W,{children:"Checkbox"}),e.jsx("p",{children:"sda"}),e.jsx("p",{children:"sda"}),e.jsx("p",{children:"sda"}),e.jsx("p",{children:"sda"}),e.jsx("p",{children:"sda"}),e.jsx("p",{children:"sda"}),e.jsx("p",{children:"sda"}),e.jsx("p",{children:"sda"}),e.jsx("p",{children:"sda"}),e.jsx("p",{children:"sda"}),e.jsx("p",{children:"sda"}),e.jsx("p",{children:"sda"}),e.jsx("p",{children:"sda"}),e.jsx("p",{children:"sda"}),e.jsx("p",{children:"sda"}),e.jsx("p",{children:"sda"}),e.jsx("p",{children:"sda"}),e.jsx("p",{children:"sda"}),e.jsx("p",{children:"sda"})]})})]})}),Mt="/react-antd-admin-pnpm/assets/avatar_1-329667d0.jpg",kt="/react-antd-admin-pnpm/assets/avatar_4-2497c77c.jpg",ue="/react-antd-admin-pnpm/assets/avatar_6-1e41071d.jpg",Rt="/react-antd-admin-pnpm/assets/avatar_8-1956d908.jpg",Et="/react-antd-admin-pnpm/assets/travel_3-0a78a2d4.jpg",Nt=V(({token:t})=>({"message-list":{".message_content":{flex:1,padding:t.paddingSM,backgroundColor:t.colorBgLayout,borderRadius:t.borderRadiusLG}}})),{Title:Lt,Text:At}=K,Ft=({avatar:t,time:s,content:a,user:i})=>{const{styles:r}=Nt();return e.jsxs(u,{gap:8,className:r["message-list"],children:[e.jsx("div",{children:t}),e.jsxs("div",{className:"message_content",children:[e.jsxs(u,{justify:"space-between",align:"center",children:[e.jsx(Lt,{level:5,children:i}),e.jsx("div",{children:s})]}),e.jsx(At,{type:"secondary",children:a})]})]})},It=V(({token:t})=>({"send-box":{".send-content":{flex:1,borderRadius:t.borderRadiusLG}}})),Tt=({avatar:t=ue,time:s,content:a,user:i})=>{const{styles:r}=It();return e.jsxs(u,{gap:8,align:"center",className:r["send-box"],children:[e.jsx(R,{src:t}),e.jsx("div",{className:"send-content",children:e.jsx(Le,{placeholder:"请在这里输入您的留言",suffix:e.jsxs(u,{children:[e.jsx(L,{type:"text",shape:"circle",icon:e.jsx(S,{name:"picture"})}),e.jsx(L,{type:"text",shape:"circle",icon:e.jsx(S,{name:"express"})})]})})})]})},_t=V(({token:t})=>({"custom-image":{borderRadius:t.borderRadiusLG}})),{Text:re}=K,Gt=()=>{const{styles:t}=_t(),s=[{title:"深圳市",icon:e.jsx(S,{name:"point",size:24})},{title:"shoplazza.nyg@gmail.com",icon:e.jsx(S,{name:"email",size:24})},{title:"前端开发",icon:e.jsx(S,{name:"work",size:24})}],a=[{title:"https://github.com/anyone-yuren",icon:e.jsx(Fe,{style:{fontSize:24}})},{title:"nhf066901@sina.com",icon:e.jsx(bt,{style:{fontSize:24}})},{title:"leio-forver",icon:e.jsx(pt,{style:{fontSize:24}})},{title:"https://juejin.cn/user/2682464101469480/posts",icon:e.jsx(Ct,{style:{fontSize:24}})}],i=[{avatar:e.jsx(R,{src:kt}),time:"2小时前",content:"做普通人，干正经事，可以爱小钱，但必有大胸怀。      ",user:"anyone"},{avatar:e.jsx(R,{src:Mt}),time:"27 Dec 2023",content:"多年后，一个埋我的人被指定，这些年，我偶尔想一想死亡的事情，把活着，当成了一种习惯",user:"倾盆大雨"}];return e.jsx(e.Fragment,{children:e.jsxs(D,{gutter:[16,16],children:[e.jsx(E,{span:8,children:e.jsxs(u,{gap:16,vertical:!0,children:[e.jsx(y,{children:e.jsxs(u,{align:"middle",justify:"space-evenly",children:[e.jsx(ae,{name:"Follower",count:12}),e.jsx(Te,{style:{height:"auto"},type:"vertical"}),e.jsx(ae,{name:"Following",count:112})]})}),e.jsxs(y,{title:"关于我",children:[e.jsx(re,{type:"secondary",children:"如果给你寄一本书， 我不会寄给你诗歌， 我要给你一本关于植物，关于庄稼的， 告诉你稻子和稗子的区别， 告诉你一棵稗子提心吊胆的春天。"}),e.jsx(O,{itemLayout:"horizontal",dataSource:s,renderItem:(r,l)=>e.jsx(O.Item,{children:e.jsx(O.Item.Meta,{avatar:r.icon,description:r.title})},l)})]}),e.jsx(y,{title:"社交",children:e.jsx(O,{itemLayout:"horizontal",dataSource:a,renderItem:(r,l)=>e.jsx(O.Item,{children:e.jsx(O.Item.Meta,{avatar:r.icon,description:r.title})},l)})})]})}),e.jsx(E,{span:16,children:e.jsxs(u,{gap:16,vertical:!0,children:[e.jsx(y,{children:e.jsxs(u,{gap:16,vertical:!0,children:[e.jsx(Ae,{rows:4,placeholder:"分享你想对我说的话",maxLength:6}),e.jsx(u,{justify:"end",children:e.jsx(L,{type:"primary",children:"发布"})})]})}),e.jsx(y,{title:e.jsxs(u,{justify:"space-between",align:"center",gap:16,children:[e.jsx(O,{children:e.jsx(O.Item,{children:e.jsx(O.Item.Meta,{avatar:e.jsx(R,{src:Rt,size:48}),title:"Gbeata",description:"25 Dec 2023"})},"1")}),e.jsx(L,{shape:"circle",type:"text",icon:e.jsx(ct,{})})]}),children:e.jsxs(u,{gap:16,vertical:!0,children:[e.jsx(re,{children:"我填平了山海，却发现你在云端。"}),e.jsx(Be,{className:t["custom-image"],width:"100%",height:400,src:Et}),e.jsxs(u,{justify:"space-between",align:"content-center",children:[e.jsxs(u,{align:"center",children:[e.jsx(L,{id:"like",size:"small",type:"text",icon:e.jsx(S,{name:"love"}),children:"3"}),e.jsxs(R.Group,{maxCount:2,maxStyle:{color:"#f56a00",backgroundColor:"#fde3cf"},children:[e.jsx(R,{src:"https://xsgames.co/randomusers/avatar.php?g=pixel&key=2"}),e.jsx(R,{src:ue,style:{backgroundColor:"#f56a00"},children:"K"}),e.jsx(R,{style:{backgroundColor:"#1677ff"},icon:e.jsx(et,{})})]})]}),e.jsxs("div",{children:[e.jsx(L,{shape:"circle",type:"text",icon:e.jsx(nt,{})}),e.jsx(L,{shape:"circle",type:"text",icon:e.jsx(ht,{})})]})]}),i.map(r=>e.jsx(Ft,{avatar:r.avatar,time:r.time,content:r.content,user:r.user})),e.jsx(Tt,{})]})})]})})]})})},Pt=V(({token:t})=>({"user-card":{width:"100%",position:"relative",".ant-skeleton, .ant-skeleton-image":{width:"100% !important"},".ant-segmented-item-label":{lineHeight:"48px !important",minHeight:"48px !important",padding:"0 16px !important"},".profile":{verticalAlign:"-0.35em"},".ant-card-body":{padding:0,textAlign:"right"},".ant-card-cover":{minHeight:"200px",position:"relative",background:`url(${_e})`,filter:"blur(0)",backgroundRepeat:"no-repeat",backgroundSize:"cover","&:before":{content:'""',top:0,left:0,width:"100%",height:" 100%",zIndex:1,position:"absolute",background:"rgba(22, 28, 36, 0.48)",borderRadius:`${t.borderRadiusLG}px ${t.borderRadiusLG}px 0 0`}},".user_info":{position:"absolute",display:"flex",flexDirection:"row",zIndex:2,bottom:"-24px",left:"24px",gap:"16px",".info":{display:"flex",flexDirection:"column",justifyContent:"center",color:"white"},".avatar":{width:"128px",height:"128px",borderRadius:"50%",overflow:"hidden"}}},translatex:{margin:`${t.marginSM}px 0`},content:{position:"relative"}})),{Text:Bt,Title:Ht}=K,Wt=t=>{const[s,a]=Z.useState("Profile"),[i,r]=Z.useState(!0),{styles:l}=Pt();return Z.useEffect(()=>{setTimeout(()=>{r(!1)},1500)},[]),e.jsxs("div",{className:l.content,children:[e.jsx(y,{hoverable:!0,className:l["user-card"],cover:e.jsx(e.Fragment,{children:e.jsxs("div",{className:"user_info",children:[e.jsx("div",{className:"avatar",children:e.jsx("img",{src:Ge})}),e.jsxs("div",{className:"info",children:[e.jsx(Ht,{style:{margin:0,color:"inherit"},level:3,children:"Gbeata"}),e.jsx(Bt,{style:{color:"inherit",opacity:.7},children:"来历不明"})]})]})}),children:e.jsx(Ie,{size:"large",onChange:m=>{a(m)},value:s,options:[{label:"Profile",value:"Profile",icon:e.jsx(S,{className:"profile",name:"profile",size:24})},{label:"Followers",value:"Followers",icon:e.jsx(S,{className:"profile",name:"followers",size:24})},{label:"Friends",value:"Friends",icon:e.jsx(S,{className:"profile",name:"friends",size:24})},{label:"Gallery",value:"Gallery",icon:e.jsx(S,{className:"profile",name:"gallery",size:24})}]})}),e.jsx(H,{className:l.translatex,direction:"left",run:s==="Profile",delay:100,children:e.jsx(Gt,{})}),e.jsx(H,{className:l.translatex,direction:"left",run:s==="Gallery",delay:100,children:e.jsx(wt,{})}),e.jsx(H,{className:l.translatex,direction:"left",run:s==="Followers",delay:100,children:e.jsx(Ot,{})}),e.jsx(H,{className:l.translatex,direction:"left",run:s==="Friends",delay:100,children:e.jsx($t,{})})]})},Yt=()=>(console.log(""),e.jsx(Wt,{}));export{Yt as default};
