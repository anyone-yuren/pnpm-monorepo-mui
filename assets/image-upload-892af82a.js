var x=(o,g,i)=>new Promise((c,r)=>{var m=t=>{try{a(i.next(t))}catch(n){r(n)}},l=t=>{try{a(i.throw(t))}catch(n){r(n)}},a=t=>t.done?c(t.value):Promise.resolve(t.value).then(m,l);a((i=i.apply(o,g)).next())});import{j as e,G as I,H as u,l as h,am as b,an as j,g as L,P as O,M as S}from"./antd-1c8f3862.js";import{r as p}from"./react-0ea83593.js";import{P as k,U as N}from"./websiteSetting-1503c4af.js";import"./entry/index-0f79d39e.1704815160034.js";const M=()=>{const{Dragger:o}=j,[g,i]=p.useState(!1),[c,r]=p.useState(""),[m,l]=p.useState(""),a=[{uid:"-1",name:"beautiful-girl.jpg"},{uid:"-2",name:"beautiful-sunshine.jpg"}],[t,n]=p.useState([{uid:"-1",name:"beautiful-girl.jpg",status:"done",url:"https://cdn.jsdelivr.net/gh/baimingxuan/media-store/images/img04.jpg",thumbUrl:"https://cdn.jsdelivr.net/gh/baimingxuan/media-store/images/img04.jpg"},{uid:"-2",name:"beautiful-sunshine.jpg",status:"done",url:"https://cdn.jsdelivr.net/gh/baimingxuan/media-store/images/img03.jpg",thumbUrl:"https://cdn.jsdelivr.net/gh/baimingxuan/media-store/images/img03.jpg"}]),v=s=>x(void 0,null,function*(){!s.url&&!s.preview&&(s.preview=yield w(s.originFileObj)),r(s.url||s.preview),i(!0),l(s.name||s.url.substring(s.url.lastIndexOf("/")+1))}),w=s=>new Promise((P,C)=>{const d=new FileReader;d.readAsDataURL(s),d.onload=()=>P(d.result),d.onerror=U=>C(U)}),f=({fileList:s})=>n(s),y=()=>{i(!1),l("")};return e.jsx(k,{plugin:N,children:e.jsxs(I,{gutter:12,children:[e.jsx(u,{span:8,children:e.jsx(h,{title:"拖拽上传",bordered:!1,bodyStyle:{height:"300px"},children:e.jsxs(o,{defaultFileList:a,action:"https://www.mocky.io/v2/5cc8019d300000980a055e76",accept:".jpg, .jpeg, .gif, .png, .bmp",multiple:!0,children:[e.jsx("p",{className:"ant-upload-drag-icon",style:{marginBottom:0},children:e.jsx(b,{rev:void 0})}),e.jsxs("p",{children:["将图片拖到此处, 或",e.jsx("span",{style:{color:"#1890ff;"},children:"点击上传"})]}),e.jsx("p",{className:"ant-upload-hint",children:"只能上传jpg、jpeg、gif、png、bmp文件, 且不超过500kb"})]})})}),e.jsx(u,{span:8,children:e.jsx(h,{title:"列表样式",bordered:!1,bodyStyle:{height:"300px"},children:e.jsxs(j,{defaultFileList:[...t],action:"https://www.mocky.io/v2/5cc8019d300000980a055e76",accept:".jpg, .jpeg, .gif, .png, .bmp",listType:"picture",className:"list-upload",children:[e.jsxs(L,{type:"primary",children:[e.jsx(b,{rev:void 0}),e.jsx("span",{children:"点击上传"})]}),e.jsx("p",{className:"ant-upload-hint",children:"只能上传jpg、jpeg、gif、png、bmp文件, 且不超过500kb"})]})})}),e.jsxs(u,{span:8,children:[e.jsx(h,{title:"照片墙",bordered:!1,bodyStyle:{height:"300px"},children:e.jsx(j,{fileList:t,action:"https://www.mocky.io/v2/5cc8019d300000980a055e76",accept:".jpg, .jpeg, .gif, .png, .bmp",listType:"picture-card",className:"list-upload",onPreview:v,onChange:f,children:e.jsxs("div",{children:[e.jsx(O,{rev:void 0}),e.jsx("div",{style:{marginTop:"8px"},children:"点击上传"})]})})}),e.jsx(S,{open:g,title:m,footer:null,onCancel:y,children:e.jsx("img",{src:c,style:{width:"100%"}})})]})]})})};export{M as default};
