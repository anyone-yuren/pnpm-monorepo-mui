var g=Object.defineProperty;var c=Object.getOwnPropertySymbols;var I=Object.prototype.hasOwnProperty,C=Object.prototype.propertyIsEnumerable;var h=(l,t,s)=>t in l?g(l,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):l[t]=s,r=(l,t)=>{for(var s in t||(t={}))I.call(t,s)&&h(l,s,t[s]);if(c)for(var s of c(t))C.call(t,s)&&h(l,s,t[s]);return l};import{F as a,j as e,G as w,H as i,l as x,s as n,I as o,S,g as f}from"./antd-1c8f3862.js";import{r as d}from"./react-0ea83593.js";import{u as N,_ as j}from"./index-68632023.js";import{P as U,C as P}from"./websiteSetting-1503c4af.js";import"./entry/index-0f79d39e.1704815160034.js";const E=()=>{const[l]=a.useForm(),[t,s]=d.useState({start:0,end:2020,duration:4,decimals:0,separator:",",prefix:"￥ ",suffix:" rmb"}),m=d.useRef(null),{start:u,reset:p}=N(r({ref:m},t));d.useEffect(()=>{p()},[]);const y=b=>{s(r(r({},t),b))};return e.jsx(U,{plugin:P,children:e.jsxs(w,{gutter:12,children:[e.jsx(i,{span:6,children:e.jsx(x,{title:"正向增加",bordered:!1,bodyStyle:{height:"300px"},children:e.jsx(j,{start:0,end:2020,duration:4,style:{height:"100%",fontSize:"40px",color:"#e65d6e"},className:"flex-center"})})}),e.jsx(i,{span:12,children:e.jsxs(x,{title:"自定义配置",bordered:!1,bodyStyle:{height:"300px"},children:[e.jsx("div",{className:"flex-center",style:{marginBottom:"30px"},children:e.jsx("span",{ref:m,style:{fontSize:"40px",color:"#e65d6e"}})}),e.jsxs(a,{form:l,initialValues:r({},t),layout:"inline",labelAlign:"left",labelCol:{style:{width:"80px",marginBottom:"12px"}},onValuesChange:y,children:[e.jsx(a.Item,{label:"startVal:",name:"start",children:e.jsx(n,{min:0,max:1e4,style:{width:"100px"}})}),e.jsx(a.Item,{label:"endVal:",name:"end",children:e.jsx(n,{min:0,max:1e4,style:{width:"100px"}})}),e.jsx(a.Item,{label:"duration:",name:"duration",children:e.jsx(n,{min:1,max:100,style:{width:"100px"}})}),e.jsx(a.Item,{label:"decimals:",name:"decimals",children:e.jsx(n,{min:0,max:100,style:{width:"100px"}})}),e.jsx(a.Item,{label:"separator:",name:"separator",children:e.jsx(o,{style:{width:"100px"}})}),e.jsx(a.Item,{label:"prefix:",name:"prefix",children:e.jsx(o,{style:{width:"100px"}})}),e.jsx(a.Item,{label:"suffix:",name:"suffix",children:e.jsx(o,{style:{width:"100px"}})}),e.jsx(a.Item,{children:e.jsxs(S,{children:[e.jsx(f,{type:"primary",onClick:u,children:"开始"}),e.jsx(f,{type:"primary",danger:!0,onClick:p,children:"重置"})]})})]})]})}),e.jsx(i,{span:6,children:e.jsx(x,{title:"反向减少",bordered:!1,bodyStyle:{height:"300px"},children:e.jsx(j,{start:2020,end:0,duration:4,style:{height:"100%",fontSize:"40px",color:"#30b08f"},className:"flex-center"})})})]})})};export{E as default};
