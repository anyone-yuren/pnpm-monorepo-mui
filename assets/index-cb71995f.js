import{r as e,j as t,a,X as i,Q as n,I as l,Y as o,B as s,O as d,Z as r,$ as b}from"./index-23c8ddfa.js";import{P as c,X as h}from"./websiteSetting-4c58a8c6.js";import{u as x}from"./useExcel-aa8313e2.js";const u=[{key:1001,name:"张三",sex:"男",phone:15266001235,birth:"2002-05-06",education:"高中",hobby:"羽毛球、篮球、听歌、阅读",forbid:!1,editable:!0},{key:1002,name:"李四",sex:"男",phone:15266006621,birth:"1998-09-21",education:"初中",hobby:"乒乓球、排球、游泳",forbid:!0,editable:!1},{key:1003,name:"王五",sex:"男",phone:15264848125,birth:"1993-06-06",education:"本科",hobby:"旱冰、滑雪、跳高、打游戏",forbid:!1,editable:!1},{key:1004,name:"辛八",sex:"男",phone:15248491001,birth:"1995-08-03",education:"大专",hobby:"网球、篮球、跳伞",forbid:!0,editable:!1},{key:1005,name:"刘二",sex:"女",phone:15248411021,birth:"1999-11-05",education:"本科",hobby:"滑翔、游泳、篮球、看电影",forbid:!0,editable:!1},{key:1006,name:"赵七",sex:"男",phone:15298621500,birth:"2000-07-18",education:"大专",hobby:"游泳、篮球、潜水",forbid:!1,editable:!1},{key:1007,name:"杨一",sex:"女",phone:15267499461,birth:"1998-12-25",education:"高中",hobby:"冲浪、上网、看书、打游戏",forbid:!1,editable:!1}],y=y=>{const{Item:p}=n,{Group:m}=r,{exportDataToExcel:f}=x(),[j,g]=e.useState([]),[k,v]=e.useState([]);return t.jsx(c,{plugin:h,children:t.jsx(a,{bordered:!1,children:t.jsxs(i,{direction:"vertical",size:16,style:{width:"100%"},children:[t.jsxs(n,{layout:"inline",autoComplete:"off",initialValues:{fileName:"",autoWidth:!0,fileType:"xlsx"},onFinish:function(e){if(console.log("values",e),!k.length)return void b.warning("请勾选要导出的数据项！");const{fileName:t,autoWidth:a,fileType:i}=e;f({data:k,header:["编号","姓名","性别","手机","学历","爱好"],key:["key","name","sex","phone","education","hobby"],fileName:t,autoWidth:a,bookType:i}),g([]),v([])},children:[t.jsx(p,{label:"文件名:",name:"fileName",children:t.jsx(l,{placeholder:"文件名"})}),t.jsx(p,{label:"自动宽度:",name:"autoWidth",children:t.jsx(m,{options:[{label:"自动",value:!0},{label:"固定",value:!1}]})}),t.jsx(p,{label:"文件类型:",name:"fileType",children:t.jsx(o,{options:[{label:"xlsx",value:"xlsx"},{label:"csv",value:"csv"},{label:"txt",value:"txt"}],style:{width:"180px"}})}),t.jsx(p,{children:t.jsx(s,{type:"primary",htmlType:"submit",children:"导出Excel"})})]}),t.jsx(d,{dataSource:u,columns:[{title:"编号",dataIndex:"key",align:"center"},{title:"姓名",dataIndex:"name",align:"center"},{title:"性别",dataIndex:"sex",align:"center"},{title:"手机",dataIndex:"phone",align:"center"},{title:"学历",dataIndex:"education",align:"center"},{title:"爱好",dataIndex:"hobby",align:"center"}],rowSelection:{selectedRowKeys:j,onChange:function(e){g(e)},onSelect:function(e,t,a){v(a)},onSelectAll:function(e,t){v(t)}},pagination:!1})]})})})};export{y as default};
