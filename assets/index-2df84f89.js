import{r as n,X as j,aO as it,aQ as st,U as T,V as ee,e as te,b8 as lt,cf as ct,Y as $e,a0 as we,l as fe,O as q,cg as ut,z as ft,W as Ve,i as ze,N as Ie,p as mt,q as Ye,aR as me,ch as dt,ci as vt,b4 as gt,v as ht,s as Fe,aW as pt,L as wt,n as Ct,x as Ge,a7 as Ue,af as Ke,ag as Ee,f as Xe,b7 as St}from"./index-17f935ee.js";import{b as Qe,a as he,g as bt}from"./addEventListener-f7b371b8.js";var ke=["crossOrigin","decoding","draggable","loading","referrerPolicy","sizes","srcSet","useMap","alt"],ye=n.createContext(null),Ze=0;function xt(t,e){var o=n.useState(function(){return Ze+=1,String(Ze)}),a=j(o,1),r=a[0],i=n.useContext(ye),f={data:e,canPreview:t};return n.useEffect(function(){if(i)return i.register(r,f)},[]),n.useEffect(function(){i&&i.register(r,f)},[t,e]),r}function It(t){return new Promise(function(e){var o=document.createElement("img");o.onerror=function(){return e(!1)},o.onload=function(){return e(!0)},o.src=t})}function qe(t){var e=t.src,o=t.isCustomPlaceholder,a=t.fallback,r=n.useState(o?"loading":"normal"),i=j(r,2),f=i[0],s=i[1],c=n.useRef(!1),u=f==="error";n.useEffect(function(){var v=!0;return It(e).then(function(h){!h&&v&&s("error")}),function(){v=!1}},[e]),n.useEffect(function(){o&&!c.current?s("loading"):u&&s("normal")},[e]);var g=function(){s("normal")},m=function(h){c.current=!1,f==="loading"&&h!==null&&h!==void 0&&h.complete&&(h.naturalWidth||h.naturalHeight)&&(c.current=!0,g())},b=u&&a?{src:a}:{onLoad:g,src:e};return[m,b,f]}var Oe={x:0,y:0,rotate:0,scale:1,flipX:!1,flipY:!1};function yt(t,e,o,a){var r=n.useRef(null),i=n.useRef([]),f=n.useState(Oe),s=j(f,2),c=s[0],u=s[1],g=function(h){u(Oe),a&&!it(Oe,c)&&a({transform:Oe,action:h})},m=function(h,I){r.current===null&&(i.current=[],r.current=st(function(){u(function(C){var x=C;return i.current.forEach(function(E){x=T(T({},x),E)}),r.current=null,a==null||a({transform:x,action:I}),x})})),i.current.push(T(T({},c),h))},b=function(h,I,C,x,E){var N=t.current,y=N.width,l=N.height,S=N.offsetWidth,p=N.offsetHeight,d=N.offsetLeft,R=N.offsetTop,M=h,w=c.scale*h;w>o?(w=o,M=o/c.scale):w<e&&(w=E?w:e,M=w/c.scale);var L=C!=null?C:innerWidth/2,k=x!=null?x:innerHeight/2,_=M-1,A=_*y*.5,X=_*l*.5,W=_*(L-c.x-d),D=_*(k-c.y-R),B=c.x-(W-A),V=c.y-(D-X);if(h<1&&w===1){var G=S*w,U=p*w,oe=Qe(),re=oe.width,Y=oe.height;G<=re&&U<=Y&&(B=0,V=0)}m({x:B,y:V,scale:w},I)};return{transform:c,resetTransform:g,updateTransform:m,dispatchZoomChange:b}}function He(t,e,o,a){var r=e+o,i=(o-a)/2;if(o>a){if(e>0)return ee({},t,i);if(e<0&&r<a)return ee({},t,-i)}else if(e<0||r>a)return ee({},t,e<0?i:-i);return{}}function Je(t,e,o,a){var r=Qe(),i=r.width,f=r.height,s=null;return t<=i&&e<=f?s={x:0,y:0}:(t>i||e>f)&&(s=T(T({},He("x",o,t,i)),He("y",a,e,f))),s}var pe=1,Rt=1;function Mt(t,e,o,a,r,i,f){var s=r.rotate,c=r.scale,u=r.x,g=r.y,m=n.useState(!1),b=j(m,2),v=b[0],h=b[1],I=n.useRef({diffX:0,diffY:0,transformX:0,transformY:0}),C=function(l){!e||l.button!==0||(l.preventDefault(),l.stopPropagation(),I.current={diffX:l.pageX-u,diffY:l.pageY-g,transformX:u,transformY:g},h(!0))},x=function(l){o&&v&&i({x:l.pageX-I.current.diffX,y:l.pageY-I.current.diffY},"move")},E=function(){if(o&&v){h(!1);var l=I.current,S=l.transformX,p=l.transformY,d=u!==S&&g!==p;if(!d)return;var R=t.current.offsetWidth*c,M=t.current.offsetHeight*c,w=t.current.getBoundingClientRect(),L=w.left,k=w.top,_=s%180!==0,A=Je(_?M:R,_?R:M,L,k);A&&i(T({},A),"dragRebound")}},N=function(l){if(!(!o||l.deltaY==0)){var S=Math.abs(l.deltaY/100),p=Math.min(S,Rt),d=pe+p*a;l.deltaY>0&&(d=pe/d),f(d,"wheel",l.clientX,l.clientY)}};return n.useEffect(function(){var y,l,S,p;if(e){S=he(window,"mouseup",E,!1),p=he(window,"mousemove",x,!1);try{window.top!==window.self&&(y=he(window.top,"mouseup",E,!1),l=he(window.top,"mousemove",x,!1))}catch(d){}}return function(){var d,R,M,w;(d=S)===null||d===void 0||d.remove(),(R=p)===null||R===void 0||R.remove(),(M=y)===null||M===void 0||M.remove(),(w=l)===null||w===void 0||w.remove()}},[o,v,u,g,s,e]),{isMoving:v,onMouseDown:C,onMouseMove:x,onMouseUp:E,onWheel:N}}function Pe(t,e){var o=t.x-e.x,a=t.y-e.y;return Math.hypot(o,a)}function Ot(t,e,o,a){var r=Pe(t,o),i=Pe(e,a);if(r===0&&i===0)return[t.x,t.y];var f=r/(r+i),s=t.x+f*(e.x-t.x),c=t.y+f*(e.y-t.y);return[s,c]}function Et(t,e,o,a,r,i,f){var s=r.rotate,c=r.scale,u=r.x,g=r.y,m=n.useState(!1),b=j(m,2),v=b[0],h=b[1],I=n.useRef({point1:{x:0,y:0},point2:{x:0,y:0},eventType:"none"}),C=function(l){I.current=T(T({},I.current),l)},x=function(l){if(e){l.stopPropagation(),h(!0);var S=l.touches,p=S===void 0?[]:S;p.length>1?C({point1:{x:p[0].clientX,y:p[0].clientY},point2:{x:p[1].clientX,y:p[1].clientY},eventType:"touchZoom"}):C({point1:{x:p[0].clientX-u,y:p[0].clientY-g},eventType:"move"})}},E=function(l){var S=l.touches,p=S===void 0?[]:S,d=I.current,R=d.point1,M=d.point2,w=d.eventType;if(p.length>1&&w==="touchZoom"){var L={x:p[0].clientX,y:p[0].clientY},k={x:p[1].clientX,y:p[1].clientY},_=Ot(R,M,L,k),A=j(_,2),X=A[0],W=A[1],D=Pe(L,k)/Pe(R,M);f(D,"touchZoom",X,W,!0),C({point1:L,point2:k,eventType:"touchZoom"})}else w==="move"&&(i({x:p[0].clientX-R.x,y:p[0].clientY-R.y},"move"),C({eventType:"move"}))},N=function(){if(o){if(v&&h(!1),C({eventType:"none"}),a>c)return i({x:0,y:0,scale:a},"touchZoom");var l=t.current.offsetWidth*c,S=t.current.offsetHeight*c,p=t.current.getBoundingClientRect(),d=p.left,R=p.top,M=s%180!==0,w=Je(M?S:l,M?l:S,d,R);w&&i(T({},w),"dragRebound")}};return n.useEffect(function(){var y;return o&&e&&(y=he(window,"touchmove",function(l){return l.preventDefault()},{passive:!1})),function(){var l;(l=y)===null||l===void 0||l.remove()}},[o,e]),{isTouching:v,onTouchStart:x,onTouchMove:E,onTouchEnd:N}}var Pt=function(e){var o=e.visible,a=e.maskTransitionName,r=e.getContainer,i=e.prefixCls,f=e.rootClassName,s=e.icons,c=e.countRender,u=e.showSwitch,g=e.showProgress,m=e.current,b=e.transform,v=e.count,h=e.scale,I=e.minScale,C=e.maxScale,x=e.closeIcon,E=e.onSwitchLeft,N=e.onSwitchRight,y=e.onClose,l=e.onZoomIn,S=e.onZoomOut,p=e.onRotateRight,d=e.onRotateLeft,R=e.onFlipX,M=e.onFlipY,w=e.toolbarRender,L=e.zIndex,k=n.useContext(ye),_=s.rotateLeft,A=s.rotateRight,X=s.zoomIn,W=s.zoomOut,D=s.close,B=s.left,V=s.right,G=s.flipX,U=s.flipY,oe="".concat(i,"-operations-operation");n.useEffect(function(){var P=function(O){O.keyCode===$e.ESC&&y()};return o&&window.addEventListener("keydown",P),function(){window.removeEventListener("keydown",P)}},[o]);var re=[{icon:U,onClick:M,type:"flipY"},{icon:G,onClick:R,type:"flipX"},{icon:_,onClick:d,type:"rotateLeft"},{icon:A,onClick:p,type:"rotateRight"},{icon:W,onClick:S,type:"zoomOut",disabled:h<=I},{icon:X,onClick:l,type:"zoomIn",disabled:h===C}],Y=re.map(function(P){var z,O=P.icon,J=P.onClick,Z=P.type,H=P.disabled;return n.createElement("div",{className:te(oe,(z={},ee(z,"".concat(i,"-operations-operation-").concat(Z),!0),ee(z,"".concat(i,"-operations-operation-disabled"),!!H),z)),onClick:J,key:Z},O)}),F=n.createElement("div",{className:"".concat(i,"-operations")},Y);return n.createElement(lt,{visible:o,motionName:a},function(P){var z=P.className,O=P.style;return n.createElement(ct,{open:!0,getContainer:r!=null?r:document.body},n.createElement("div",{className:te("".concat(i,"-operations-wrapper"),z,f),style:T(T({},O),{},{zIndex:L})},x===null?null:n.createElement("button",{className:"".concat(i,"-close"),onClick:y},x||D),u&&n.createElement(n.Fragment,null,n.createElement("div",{className:te("".concat(i,"-switch-left"),ee({},"".concat(i,"-switch-left-disabled"),m===0)),onClick:E},B),n.createElement("div",{className:te("".concat(i,"-switch-right"),ee({},"".concat(i,"-switch-right-disabled"),m===v-1)),onClick:N},V)),n.createElement("div",{className:"".concat(i,"-footer")},g&&n.createElement("div",{className:"".concat(i,"-progress")},c?c(m+1,v):"".concat(m+1," / ").concat(v)),w?w(F,T({icons:{flipYIcon:Y[0],flipXIcon:Y[1],rotateLeftIcon:Y[2],rotateRightIcon:Y[3],zoomOutIcon:Y[4],zoomInIcon:Y[5]},actions:{onFlipY:M,onFlipX:R,onRotateLeft:d,onRotateRight:p,onZoomOut:S,onZoomIn:l},transform:b},k?{current:m,total:v}:{})):F)))})},Tt=["fallback","src","imgRef"],Nt=["prefixCls","src","alt","fallback","movable","onClose","visible","icons","rootClassName","closeIcon","getContainer","current","count","countRender","scaleStep","minScale","maxScale","transitionName","maskTransitionName","imageRender","imgCommonProps","toolbarRender","onTransform","onChange"],Lt=function(e){var o=e.fallback,a=e.src,r=e.imgRef,i=we(e,Tt),f=qe({src:a,fallback:o}),s=j(f,2),c=s[0],u=s[1];return fe.createElement("img",q({ref:function(m){r.current=m,c(m)}},i,u))},et=function(e){var o=e.prefixCls,a=e.src,r=e.alt,i=e.fallback,f=e.movable,s=f===void 0?!0:f,c=e.onClose,u=e.visible,g=e.icons,m=g===void 0?{}:g,b=e.rootClassName,v=e.closeIcon,h=e.getContainer,I=e.current,C=I===void 0?0:I,x=e.count,E=x===void 0?1:x,N=e.countRender,y=e.scaleStep,l=y===void 0?.5:y,S=e.minScale,p=S===void 0?1:S,d=e.maxScale,R=d===void 0?50:d,M=e.transitionName,w=M===void 0?"zoom":M,L=e.maskTransitionName,k=L===void 0?"fade":L,_=e.imageRender,A=e.imgCommonProps,X=e.toolbarRender,W=e.onTransform,D=e.onChange,B=we(e,Nt),V=n.useRef(),G=n.useContext(ye),U=G&&E>1,oe=G&&E>=1,re=n.useState(!0),Y=j(re,2),F=Y[0],P=Y[1],z=yt(V,p,R,W),O=z.transform,J=z.resetTransform,Z=z.updateTransform,H=z.dispatchZoomChange,se=Mt(V,s,u,l,O,Z,H),Ce=se.isMoving,de=se.onMouseDown,Se=se.onWheel,K=Et(V,s,u,p,O,Z,H),ne=K.isTouching,ae=K.onTouchStart,le=K.onTouchMove,ie=K.onTouchEnd,be=O.rotate,ve=O.scale,ge=te(ee({},"".concat(o,"-moving"),Ce));n.useEffect(function(){F||P(!0)},[F]);var Ne=function(){J("close")},Le=function(){H(pe+l,"zoomIn")},_e=function(){H(pe/(pe+l),"zoomOut")},ce=function(){Z({rotate:be+90},"rotateRight")},ue=function(){Z({rotate:be-90},"rotateLeft")},Re=function(){Z({flipX:!O.flipX},"flipX")},Me=function(){Z({flipY:!O.flipY},"flipY")},xe=function($){$==null||$.preventDefault(),$==null||$.stopPropagation(),C>0&&(P(!1),J("prev"),D==null||D(C-1,C))},Ae=function($){$==null||$.preventDefault(),$==null||$.stopPropagation(),C<E-1&&(P(!1),J("next"),D==null||D(C+1,C))},at=function($){!u||!U||($.keyCode===$e.LEFT?xe():$.keyCode===$e.RIGHT&&Ae())},rt=function($){u&&(ve!==1?Z({x:0,y:0,scale:1},"doubleClick"):H(pe+l,"doubleClick",$.clientX,$.clientY))};n.useEffect(function(){var Q=he(window,"keydown",at,!1);return function(){Q.remove()}},[u,U,C]);var De=fe.createElement(Lt,q({},A,{width:e.width,height:e.height,imgRef:V,className:"".concat(o,"-img"),alt:r,style:{transform:"translate3d(".concat(O.x,"px, ").concat(O.y,"px, 0) scale3d(").concat(O.flipX?"-":"").concat(ve,", ").concat(O.flipY?"-":"").concat(ve,", 1) rotate(").concat(be,"deg)"),transitionDuration:(!F||ne)&&"0s"},fallback:i,src:a,onWheel:Se,onMouseDown:de,onDoubleClick:rt,onTouchStart:ae,onTouchMove:le,onTouchEnd:ie,onTouchCancel:ie}));return fe.createElement(fe.Fragment,null,fe.createElement(ut,q({transitionName:w,maskTransitionName:k,closable:!1,keyboard:!0,prefixCls:o,onClose:c,visible:u,classNames:{wrapper:ge},rootClassName:b,getContainer:h},B,{afterClose:Ne}),fe.createElement("div",{className:"".concat(o,"-img-wrapper")},_?_(De,T({transform:O},G?{current:C}:{})):De)),fe.createElement(Pt,{visible:u,transform:O,maskTransitionName:k,closeIcon:v,getContainer:h,prefixCls:o,rootClassName:b,icons:m,countRender:N,showSwitch:U,showProgress:oe,current:C,count:E,scale:ve,minScale:p,maxScale:R,toolbarRender:X,onSwitchLeft:xe,onSwitchRight:Ae,onZoomIn:Le,onZoomOut:_e,onRotateRight:ce,onRotateLeft:ue,onFlipX:Re,onFlipY:Me,onClose:c,zIndex:B.zIndex!==void 0?B.zIndex+1:void 0}))};function _t(t){var e=n.useState({}),o=j(e,2),a=o[0],r=o[1],i=n.useCallback(function(s,c){return r(function(u){return T(T({},u),{},ee({},s,c))}),function(){r(function(u){var g=T({},u);return delete g[s],g})}},[]),f=n.useMemo(function(){return t?t.map(function(s){if(typeof s=="string")return{data:{src:s}};var c={};return Object.keys(s).forEach(function(u){["src"].concat(ft(ke)).includes(u)&&(c[u]=s[u])}),{data:c}}):Object.keys(a).reduce(function(s,c){var u=a[c],g=u.canPreview,m=u.data;return g&&s.push({data:m,id:c}),s},[])},[t,a]);return[f,i]}var $t=["visible","onVisibleChange","getContainer","current","movable","minScale","maxScale","countRender","closeIcon","onChange","onTransform","toolbarRender","imageRender"],zt=["src"],kt=function(e){var o,a=e.previewPrefixCls,r=a===void 0?"rc-image-preview":a,i=e.children,f=e.icons,s=f===void 0?{}:f,c=e.items,u=e.preview,g=e.fallback,m=Ve(u)==="object"?u:{},b=m.visible,v=m.onVisibleChange,h=m.getContainer,I=m.current,C=m.movable,x=m.minScale,E=m.maxScale,N=m.countRender,y=m.closeIcon,l=m.onChange,S=m.onTransform,p=m.toolbarRender,d=m.imageRender,R=we(m,$t),M=_t(c),w=j(M,2),L=w[0],k=w[1],_=ze(0,{value:I}),A=j(_,2),X=A[0],W=A[1],D=n.useState(!1),B=j(D,2),V=B[0],G=B[1],U=((o=L[X])===null||o===void 0?void 0:o.data)||{},oe=U.src,re=we(U,zt),Y=ze(!!b,{value:b,onChange:function(ne,ae){v==null||v(ne,ae,X)}}),F=j(Y,2),P=F[0],z=F[1],O=n.useState(null),J=j(O,2),Z=J[0],H=J[1],se=n.useCallback(function(K,ne,ae){var le=L.findIndex(function(ie){return ie.id===K});z(!0),H({x:ne,y:ae}),W(le<0?0:le),G(!0)},[L]);n.useEffect(function(){P?V||W(0):G(!1)},[P]);var Ce=function(ne,ae){W(ne),l==null||l(ne,ae)},de=function(){z(!1),H(null)},Se=n.useMemo(function(){return{register:k,onPreview:se}},[k,se]);return n.createElement(ye.Provider,{value:Se},i,n.createElement(et,q({"aria-hidden":!P,movable:C,visible:P,prefixCls:r,closeIcon:y,onClose:de,mousePosition:Z,imgCommonProps:re,src:oe,fallback:g,icons:s,minScale:x,maxScale:E,getContainer:h,current:X,count:L.length,countRender:N,onTransform:S,toolbarRender:p,imageRender:d,onChange:Ce},R)))},jt=["src","alt","onPreviewClose","prefixCls","previewPrefixCls","placeholder","fallback","width","height","style","preview","className","onClick","onError","wrapperClassName","wrapperStyle","rootClassName"],At=["src","visible","onVisibleChange","getContainer","mask","maskClassName","movable","icons","scaleStep","minScale","maxScale","imageRender","toolbarRender"],Te=function(e){var o=e.src,a=e.alt,r=e.onPreviewClose,i=e.prefixCls,f=i===void 0?"rc-image":i,s=e.previewPrefixCls,c=s===void 0?"".concat(f,"-preview"):s,u=e.placeholder,g=e.fallback,m=e.width,b=e.height,v=e.style,h=e.preview,I=h===void 0?!0:h,C=e.className,x=e.onClick,E=e.onError,N=e.wrapperClassName,y=e.wrapperStyle,l=e.rootClassName,S=we(e,jt),p=u&&u!==!0,d=Ve(I)==="object"?I:{},R=d.src,M=d.visible,w=M===void 0?void 0:M,L=d.onVisibleChange,k=L===void 0?r:L,_=d.getContainer,A=_===void 0?void 0:_,X=d.mask,W=d.maskClassName,D=d.movable,B=d.icons,V=d.scaleStep,G=d.minScale,U=d.maxScale,oe=d.imageRender,re=d.toolbarRender,Y=we(d,At),F=R!=null?R:o,P=ze(!!w,{value:w,onChange:k}),z=j(P,2),O=z[0],J=z[1],Z=qe({src:o,isCustomPlaceholder:p,fallback:g}),H=j(Z,3),se=H[0],Ce=H[1],de=H[2],Se=n.useState(null),K=j(Se,2),ne=K[0],ae=K[1],le=n.useContext(ye),ie=!!I,be=function(){J(!1),ae(null)},ve=te(f,N,l,ee({},"".concat(f,"-error"),de==="error")),ge=n.useMemo(function(){var ce={};return ke.forEach(function(ue){e[ue]!==void 0&&(ce[ue]=e[ue])}),ce},ke.map(function(ce){return e[ce]})),Ne=n.useMemo(function(){return T(T({},ge),{},{src:F})},[F,ge]),Le=xt(ie,Ne),_e=function(ue){var Re=bt(ue.target),Me=Re.left,xe=Re.top;le?le.onPreview(Le,Me,xe):(ae({x:Me,y:xe}),J(!0)),x==null||x(ue)};return n.createElement(n.Fragment,null,n.createElement("div",q({},S,{className:ve,onClick:ie?_e:x,style:T({width:m,height:b},y)}),n.createElement("img",q({},ge,{className:te("".concat(f,"-img"),ee({},"".concat(f,"-img-placeholder"),u===!0),C),style:T({height:b},v),ref:se},Ce,{width:m,height:b,onError:E})),de==="loading"&&n.createElement("div",{"aria-hidden":"true",className:"".concat(f,"-placeholder")},u),X&&ie&&n.createElement("div",{className:te("".concat(f,"-mask"),W),style:{display:(v==null?void 0:v.display)==="none"?"none":void 0}},X)),!le&&ie&&n.createElement(et,q({"aria-hidden":!O,visible:O,prefixCls:c,onClose:be,mousePosition:ne,src:F,alt:a,fallback:g,getContainer:A,icons:B,movable:D,scaleStep:V,minScale:G,maxScale:U,rootClassName:l,imageRender:oe,imgCommonProps:ge,toolbarRender:re},Y)))};Te.PreviewGroup=kt;Te.displayName="Image";var Dt={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"defs",attrs:{},children:[{tag:"style",attrs:{}}]},{tag:"path",attrs:{d:"M672 418H144c-17.7 0-32 14.3-32 32v414c0 17.7 14.3 32 32 32h528c17.7 0 32-14.3 32-32V450c0-17.7-14.3-32-32-32zm-44 402H188V494h440v326z"}},{tag:"path",attrs:{d:"M819.3 328.5c-78.8-100.7-196-153.6-314.6-154.2l-.2-64c0-6.5-7.6-10.1-12.6-6.1l-128 101c-4 3.1-3.9 9.1 0 12.3L492 318.6c5.1 4 12.7.4 12.6-6.1v-63.9c12.9.1 25.9.9 38.8 2.5 42.1 5.2 82.1 18.2 119 38.7 38.1 21.2 71.2 49.7 98.4 84.3 27.1 34.7 46.7 73.7 58.1 115.8a325.95 325.95 0 016.5 140.9h74.9c14.8-103.6-11.3-213-81-302.3z"}}]},name:"rotate-left",theme:"outlined"};const Yt=Dt;var Xt=function(e,o){return n.createElement(Ie,q({},e,{ref:o,icon:Yt}))};const Zt=n.forwardRef(Xt);var Ht={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"defs",attrs:{},children:[{tag:"style",attrs:{}}]},{tag:"path",attrs:{d:"M480.5 251.2c13-1.6 25.9-2.4 38.8-2.5v63.9c0 6.5 7.5 10.1 12.6 6.1L660 217.6c4-3.2 4-9.2 0-12.3l-128-101c-5.1-4-12.6-.4-12.6 6.1l-.2 64c-118.6.5-235.8 53.4-314.6 154.2A399.75 399.75 0 00123.5 631h74.9c-.9-5.3-1.7-10.7-2.4-16.1-5.1-42.1-2.1-84.1 8.9-124.8 11.4-42.2 31-81.1 58.1-115.8 27.2-34.7 60.3-63.2 98.4-84.3 37-20.6 76.9-33.6 119.1-38.8z"}},{tag:"path",attrs:{d:"M880 418H352c-17.7 0-32 14.3-32 32v414c0 17.7 14.3 32 32 32h528c17.7 0 32-14.3 32-32V450c0-17.7-14.3-32-32-32zm-44 402H396V494h440v326z"}}]},name:"rotate-right",theme:"outlined"};const Wt=Ht;var Bt=function(e,o){return n.createElement(Ie,q({},e,{ref:o,icon:Wt}))};const Vt=n.forwardRef(Bt);var Ft={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M847.9 592H152c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h605.2L612.9 851c-4.1 5.2-.4 13 6.3 13h72.5c4.9 0 9.5-2.2 12.6-6.1l168.8-214.1c16.5-21 1.6-51.8-25.2-51.8zM872 356H266.8l144.3-183c4.1-5.2.4-13-6.3-13h-72.5c-4.9 0-9.5 2.2-12.6 6.1L150.9 380.2c-16.5 21-1.6 51.8 25.1 51.8h696c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8z"}}]},name:"swap",theme:"outlined"};const Gt=Ft;var Ut=function(e,o){return n.createElement(Ie,q({},e,{ref:o,icon:Gt}))};const We=n.forwardRef(Ut);var Kt={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M637 443H519V309c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8v134H325c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h118v134c0 4.4 3.6 8 8 8h60c4.4 0 8-3.6 8-8V519h118c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8zm284 424L775 721c122.1-148.9 113.6-369.5-26-509-148-148.1-388.4-148.1-537 0-148.1 148.6-148.1 389 0 537 139.5 139.6 360.1 148.1 509 26l146 146c3.2 2.8 8.3 2.8 11 0l43-43c2.8-2.7 2.8-7.8 0-11zM696 696c-118.8 118.7-311.2 118.7-430 0-118.7-118.8-118.7-311.2 0-430 118.8-118.7 311.2-118.7 430 0 118.7 118.8 118.7 311.2 0 430z"}}]},name:"zoom-in",theme:"outlined"};const Qt=Kt;var qt=function(e,o){return n.createElement(Ie,q({},e,{ref:o,icon:Qt}))};const Jt=n.forwardRef(qt);var eo={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M637 443H325c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h312c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8zm284 424L775 721c122.1-148.9 113.6-369.5-26-509-148-148.1-388.4-148.1-537 0-148.1 148.6-148.1 389 0 537 139.5 139.6 360.1 148.1 509 26l146 146c3.2 2.8 8.3 2.8 11 0l43-43c2.8-2.7 2.8-7.8 0-11zM696 696c-118.8 118.7-311.2 118.7-430 0-118.7-118.8-118.7-311.2 0-430 118.8-118.7 311.2-118.7 430 0 118.7 118.8 118.7 311.2 0 430z"}}]},name:"zoom-out",theme:"outlined"};const to=eo;var oo=function(e,o){return n.createElement(Ie,q({},e,{ref:o,icon:to}))};const no=n.forwardRef(oo),je=t=>({position:t||"absolute",inset:0}),ao=t=>{const{iconCls:e,motionDurationSlow:o,paddingXXS:a,marginXXS:r,prefixCls:i,colorTextLightSolid:f}=t;return{position:"absolute",inset:0,display:"flex",alignItems:"center",justifyContent:"center",color:f,background:new me("#000").setAlpha(.5).toRgbString(),cursor:"pointer",opacity:0,transition:`opacity ${o}`,[`.${i}-mask-info`]:Object.assign(Object.assign({},ht),{padding:`0 ${Fe(a)}`,[e]:{marginInlineEnd:r,svg:{verticalAlign:"baseline"}}})}},ro=t=>{const{previewCls:e,modalMaskBg:o,paddingSM:a,marginXL:r,margin:i,paddingLG:f,previewOperationColorDisabled:s,previewOperationHoverColor:c,motionDurationSlow:u,iconCls:g,colorTextLightSolid:m}=t,b=new me(o).setAlpha(.1),v=b.clone().setAlpha(.2);return{[`${e}-footer`]:{position:"fixed",bottom:r,left:{_skip_check_:!0,value:0},width:"100%",display:"flex",flexDirection:"column",alignItems:"center",color:t.previewOperationColor},[`${e}-progress`]:{marginBottom:i},[`${e}-close`]:{position:"fixed",top:r,right:{_skip_check_:!0,value:r},display:"flex",color:m,backgroundColor:b.toRgbString(),borderRadius:"50%",padding:a,outline:0,border:0,cursor:"pointer",transition:`all ${u}`,"&:hover":{backgroundColor:v.toRgbString()},[`& > ${g}`]:{fontSize:t.previewOperationSize}},[`${e}-operations`]:{display:"flex",alignItems:"center",padding:`0 ${Fe(f)}`,backgroundColor:b.toRgbString(),borderRadius:100,"&-operation":{marginInlineStart:a,padding:a,cursor:"pointer",transition:`all ${u}`,userSelect:"none",[`&:not(${e}-operations-operation-disabled):hover > ${g}`]:{color:c},"&-disabled":{color:s,cursor:"not-allowed"},"&:first-of-type":{marginInlineStart:0},[`& > ${g}`]:{fontSize:t.previewOperationSize}}}}},io=t=>{const{modalMaskBg:e,iconCls:o,previewOperationColorDisabled:a,previewCls:r,zIndexPopup:i,motionDurationSlow:f}=t,s=new me(e).setAlpha(.1),c=s.clone().setAlpha(.2);return{[`${r}-switch-left, ${r}-switch-right`]:{position:"fixed",insetBlockStart:"50%",zIndex:t.calc(i).add(1).equal({unit:!1}),display:"flex",alignItems:"center",justifyContent:"center",width:t.imagePreviewSwitchSize,height:t.imagePreviewSwitchSize,marginTop:t.calc(t.imagePreviewSwitchSize).mul(-1).div(2).equal(),color:t.previewOperationColor,background:s.toRgbString(),borderRadius:"50%",transform:"translateY(-50%)",cursor:"pointer",transition:`all ${f}`,userSelect:"none","&:hover":{background:c.toRgbString()},"&-disabled":{"&, &:hover":{color:a,background:"transparent",cursor:"not-allowed",[`> ${o}`]:{cursor:"not-allowed"}}},[`> ${o}`]:{fontSize:t.previewOperationSize}},[`${r}-switch-left`]:{insetInlineStart:t.marginSM},[`${r}-switch-right`]:{insetInlineEnd:t.marginSM}}},so=t=>{const{motionEaseOut:e,previewCls:o,motionDurationSlow:a,componentCls:r}=t;return[{[`${r}-preview-root`]:{[o]:{height:"100%",textAlign:"center",pointerEvents:"none"},[`${o}-body`]:Object.assign(Object.assign({},je()),{overflow:"hidden"}),[`${o}-img`]:{maxWidth:"100%",maxHeight:"70%",verticalAlign:"middle",transform:"scale3d(1, 1, 1)",cursor:"grab",transition:`transform ${a} ${e} 0s`,userSelect:"none","&-wrapper":Object.assign(Object.assign({},je()),{transition:`transform ${a} ${e} 0s`,display:"flex",justifyContent:"center",alignItems:"center","& > *":{pointerEvents:"auto"},"&::before":{display:"inline-block",width:1,height:"50%",marginInlineEnd:-1,content:'""'}})},[`${o}-moving`]:{[`${o}-preview-img`]:{cursor:"grabbing","&-wrapper":{transitionDuration:"0s"}}}}},{[`${r}-preview-root`]:{[`${o}-wrap`]:{zIndex:t.zIndexPopup}}},{[`${r}-preview-operations-wrapper`]:{position:"fixed",zIndex:t.calc(t.zIndexPopup).add(1).equal({unit:!1})},"&":[ro(t),io(t)]}]},lo=t=>{const{componentCls:e}=t;return{[e]:{position:"relative",display:"inline-block",[`${e}-img`]:{width:"100%",height:"auto",verticalAlign:"middle"},[`${e}-img-placeholder`]:{backgroundColor:t.colorBgContainerDisabled,backgroundImage:"url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMTQuNSAyLjVoLTEzQS41LjUgMCAwIDAgMSAzdjEwYS41LjUgMCAwIDAgLjUuNWgxM2EuNS41IDAgMCAwIC41LS41VjNhLjUuNSAwIDAgMC0uNS0uNXpNNS4yODEgNC43NWExIDEgMCAwIDEgMCAyIDEgMSAwIDAgMSAwLTJ6bTguMDMgNi44M2EuMTI3LjEyNyAwIDAgMS0uMDgxLjAzSDIuNzY5YS4xMjUuMTI1IDAgMCAxLS4wOTYtLjIwN2wyLjY2MS0zLjE1NmEuMTI2LjEyNiAwIDAgMSAuMTc3LS4wMTZsLjAxNi4wMTZMNy4wOCAxMC4wOWwyLjQ3LTIuOTNhLjEyNi4xMjYgMCAwIDEgLjE3Ny0uMDE2bC4wMTUuMDE2IDMuNTg4IDQuMjQ0YS4xMjcuMTI3IDAgMCAxLS4wMi4xNzV6IiBmaWxsPSIjOEM4QzhDIiBmaWxsLXJ1bGU9Im5vbnplcm8iLz48L3N2Zz4=')",backgroundRepeat:"no-repeat",backgroundPosition:"center center",backgroundSize:"30%"},[`${e}-mask`]:Object.assign({},ao(t)),[`${e}-mask:hover`]:{opacity:1},[`${e}-placeholder`]:Object.assign({},je())}}},co=t=>{const{previewCls:e}=t;return{[`${e}-root`]:vt(t,"zoom"),"&":gt(t,!0)}},uo=t=>({zIndexPopup:t.zIndexPopupBase+80,previewOperationColor:new me(t.colorTextLightSolid).setAlpha(.65).toRgbString(),previewOperationHoverColor:new me(t.colorTextLightSolid).setAlpha(.85).toRgbString(),previewOperationColorDisabled:new me(t.colorTextLightSolid).setAlpha(.25).toRgbString(),previewOperationSize:t.fontSizeIcon*1.5}),tt=mt("Image",t=>{const e=`${t.componentCls}-preview`,o=Ye(t,{previewCls:e,modalMaskBg:new me("#000").setAlpha(.45).toRgbString(),imagePreviewSwitchSize:t.controlHeightLG});return[lo(o),so(o),dt(Ye(o,{componentCls:e})),co(o)]},uo);var fo=globalThis&&globalThis.__rest||function(t,e){var o={};for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&e.indexOf(a)<0&&(o[a]=t[a]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,a=Object.getOwnPropertySymbols(t);r<a.length;r++)e.indexOf(a[r])<0&&Object.prototype.propertyIsEnumerable.call(t,a[r])&&(o[a[r]]=t[a[r]]);return o};const ot={rotateLeft:n.createElement(Zt,null),rotateRight:n.createElement(Vt,null),zoomIn:n.createElement(Jt,null),zoomOut:n.createElement(no,null),close:n.createElement(pt,null),left:n.createElement(wt,null),right:n.createElement(Ct,null),flipX:n.createElement(We,null),flipY:n.createElement(We,{rotate:90})},mo=t=>{var{previewPrefixCls:e,preview:o}=t,a=fo(t,["previewPrefixCls","preview"]);const{getPrefixCls:r}=n.useContext(Ge),i=r("image",e),f=`${i}-preview`,s=r(),c=Ue(i),[u,g]=tt(i,c),[m]=Ke("ImagePreview",typeof o=="object"?o.zIndex:void 0),b=n.useMemo(()=>{var v;if(o===!1)return o;const h=typeof o=="object"?o:{},I=te(g,c,(v=h.rootClassName)!==null&&v!==void 0?v:"");return Object.assign(Object.assign({},h),{transitionName:Ee(s,"zoom",h.transitionName),maskTransitionName:Ee(s,"fade",h.maskTransitionName),rootClassName:I,zIndex:m})},[o]);return u(n.createElement(Te.PreviewGroup,Object.assign({preview:b,previewPrefixCls:f,icons:ot},a)))},vo=mo;var Be=globalThis&&globalThis.__rest||function(t,e){var o={};for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&e.indexOf(a)<0&&(o[a]=t[a]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,a=Object.getOwnPropertySymbols(t);r<a.length;r++)e.indexOf(a[r])<0&&Object.prototype.propertyIsEnumerable.call(t,a[r])&&(o[a[r]]=t[a[r]]);return o};const nt=t=>{const{prefixCls:e,preview:o,className:a,rootClassName:r,style:i}=t,f=Be(t,["prefixCls","preview","className","rootClassName","style"]),{getPrefixCls:s,locale:c=Xe,getPopupContainer:u,image:g}=n.useContext(Ge),m=s("image",e),b=s(),v=c.Image||Xe.Image,h=Ue(m),[I,C]=tt(m,h),x=te(r,C,h),E=te(a,C,g==null?void 0:g.className),[N]=Ke("ImagePreview",typeof o=="object"?o.zIndex:void 0),y=n.useMemo(()=>{if(o===!1)return o;const S=typeof o=="object"?o:{},{getContainer:p}=S,d=Be(S,["getContainer"]);return Object.assign(Object.assign({mask:n.createElement("div",{className:`${m}-mask-info`},n.createElement(St,null),v==null?void 0:v.preview),icons:ot},d),{getContainer:p||u,transitionName:Ee(b,"zoom",S.transitionName),maskTransitionName:Ee(b,"fade",S.maskTransitionName),zIndex:N})},[o,v]),l=Object.assign(Object.assign({},g==null?void 0:g.style),i);return I(n.createElement(Te,Object.assign({prefixCls:m,preview:y,rootClassName:x,className:E,style:l},f)))};nt.PreviewGroup=vo;const po=nt;export{po as I};
