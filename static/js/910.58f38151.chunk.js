"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[910],{7164:function(e,n,t){t.d(n,{Z:function(){return N}});var r=t(5987),i=t(7462),o=t(2791),a=t(4164),c=t(5522),l=t(794),s=t(4667),d=t(1565),u=t(9806);var f="undefined"!==typeof window?o.useLayoutEffect:o.useEffect;var h=o.forwardRef((function(e,n){var t=e.children,r=e.container,i=e.disablePortal,c=void 0!==i&&i,l=e.onRendered,s=o.useState(null),h=s[0],p=s[1],m=(0,u.Z)(o.isValidElement(t)?t.ref:null,n);return f((function(){c||p(function(e){return e="function"===typeof e?e():e,a.findDOMNode(e)}(r)||document.body)}),[r,c]),f((function(){if(h&&!c)return(0,d.Z)(n,h),function(){(0,d.Z)(n,null)}}),[n,h,c]),f((function(){l&&(h||c)&&l()}),[l,h,c]),c?o.isValidElement(t)?o.cloneElement(t,{ref:m}):t:h?a.createPortal(t,h):h})),p=t(7545),m=t(2216),v=t(9535),b=t(5671),y=t(3144),k=t(2982);var g=t(7636);function E(e,n){n?e.setAttribute("aria-hidden","true"):e.removeAttribute("aria-hidden")}function x(e){return parseInt(window.getComputedStyle(e)["padding-right"],10)||0}function w(e,n,t){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:[],i=arguments.length>4?arguments[4]:void 0,o=[n,t].concat((0,k.Z)(r)),a=["TEMPLATE","SCRIPT","STYLE"];[].forEach.call(e.children,(function(e){1===e.nodeType&&-1===o.indexOf(e)&&-1===a.indexOf(e.tagName)&&E(e,i)}))}function Z(e,n){var t=-1;return e.some((function(e,r){return!!n(e)&&(t=r,!0)})),t}function C(e,n){var t,r=[],i=[],o=e.container;if(!n.disableScrollLock){if(function(e){var n=(0,s.Z)(e);return n.body===e?(0,g.Z)(n).innerWidth>n.documentElement.clientWidth:e.scrollHeight>e.clientHeight}(o)){var a=function(){var e=document.createElement("div");e.style.width="99px",e.style.height="99px",e.style.position="absolute",e.style.top="-9999px",e.style.overflow="scroll",document.body.appendChild(e);var n=e.offsetWidth-e.clientWidth;return document.body.removeChild(e),n}();r.push({value:o.style.paddingRight,key:"padding-right",el:o}),o.style["padding-right"]="".concat(x(o)+a,"px"),t=(0,s.Z)(o).querySelectorAll(".mui-fixed"),[].forEach.call(t,(function(e){i.push(e.style.paddingRight),e.style.paddingRight="".concat(x(e)+a,"px")}))}var c=o.parentElement,l="HTML"===c.nodeName&&"scroll"===window.getComputedStyle(c)["overflow-y"]?c:o;r.push({value:l.style.overflow,key:"overflow",el:l}),l.style.overflow="hidden"}return function(){t&&[].forEach.call(t,(function(e,n){i[n]?e.style.paddingRight=i[n]:e.style.removeProperty("padding-right")})),r.forEach((function(e){var n=e.value,t=e.el,r=e.key;n?t.style.setProperty(r,n):t.style.removeProperty(r)}))}}var R=function(){function e(){(0,b.Z)(this,e),this.modals=[],this.containers=[]}return(0,y.Z)(e,[{key:"add",value:function(e,n){var t=this.modals.indexOf(e);if(-1!==t)return t;t=this.modals.length,this.modals.push(e),e.modalRef&&E(e.modalRef,!1);var r=function(e){var n=[];return[].forEach.call(e.children,(function(e){e.getAttribute&&"true"===e.getAttribute("aria-hidden")&&n.push(e)})),n}(n);w(n,e.mountNode,e.modalRef,r,!0);var i=Z(this.containers,(function(e){return e.container===n}));return-1!==i?(this.containers[i].modals.push(e),t):(this.containers.push({modals:[e],container:n,restore:null,hiddenSiblingNodes:r}),t)}},{key:"mount",value:function(e,n){var t=Z(this.containers,(function(n){return-1!==n.modals.indexOf(e)})),r=this.containers[t];r.restore||(r.restore=C(r,n))}},{key:"remove",value:function(e){var n=this.modals.indexOf(e);if(-1===n)return n;var t=Z(this.containers,(function(n){return-1!==n.modals.indexOf(e)})),r=this.containers[t];if(r.modals.splice(r.modals.indexOf(e),1),this.modals.splice(n,1),0===r.modals.length)r.restore&&r.restore(),e.modalRef&&E(e.modalRef,!0),w(r.container,e.mountNode,e.modalRef,r.hiddenSiblingNodes,!1),this.containers.splice(t,1);else{var i=r.modals[r.modals.length-1];i.modalRef&&E(i.modalRef,!1)}return n}},{key:"isTopModal",value:function(e){return this.modals.length>0&&this.modals[this.modals.length-1]===e}}]),e}();var M=function(e){var n=e.children,t=e.disableAutoFocus,r=void 0!==t&&t,i=e.disableEnforceFocus,c=void 0!==i&&i,l=e.disableRestoreFocus,d=void 0!==l&&l,f=e.getDoc,h=e.isEnabled,p=e.open,m=o.useRef(),v=o.useRef(null),b=o.useRef(null),y=o.useRef(),k=o.useRef(null),g=o.useCallback((function(e){k.current=a.findDOMNode(e)}),[]),E=(0,u.Z)(n.ref,g),x=o.useRef();return o.useEffect((function(){x.current=p}),[p]),!x.current&&p&&"undefined"!==typeof window&&(y.current=f().activeElement),o.useEffect((function(){if(p){var e=(0,s.Z)(k.current);r||!k.current||k.current.contains(e.activeElement)||(k.current.hasAttribute("tabIndex")||k.current.setAttribute("tabIndex",-1),k.current.focus());var n=function(){null!==k.current&&(e.hasFocus()&&!c&&h()&&!m.current?k.current&&!k.current.contains(e.activeElement)&&k.current.focus():m.current=!1)},t=function(n){!c&&h()&&9===n.keyCode&&e.activeElement===k.current&&(m.current=!0,n.shiftKey?b.current.focus():v.current.focus())};e.addEventListener("focus",n,!0),e.addEventListener("keydown",t,!0);var i=setInterval((function(){n()}),50);return function(){clearInterval(i),e.removeEventListener("focus",n,!0),e.removeEventListener("keydown",t,!0),d||(y.current&&y.current.focus&&y.current.focus(),y.current=null)}}}),[r,c,d,h,p]),o.createElement(o.Fragment,null,o.createElement("div",{tabIndex:0,ref:v,"data-test":"sentinelStart"}),o.cloneElement(n,{ref:E}),o.createElement("div",{tabIndex:0,ref:b,"data-test":"sentinelEnd"}))},P={root:{zIndex:-1,position:"fixed",right:0,bottom:0,top:0,left:0,backgroundColor:"rgba(0, 0, 0, 0.5)",WebkitTapHighlightColor:"transparent"},invisible:{backgroundColor:"transparent"}},O=o.forwardRef((function(e,n){var t=e.invisible,a=void 0!==t&&t,c=e.open,l=(0,r.Z)(e,["invisible","open"]);return c?o.createElement("div",(0,i.Z)({"aria-hidden":!0,ref:n},l,{style:(0,i.Z)({},P.root,a?P.invisible:{},l.style)})):null}));var T=new R,N=o.forwardRef((function(e,n){var t=(0,c.Z)(),d=(0,l.Z)({name:"MuiModal",props:(0,i.Z)({},e),theme:t}),f=d.BackdropComponent,b=void 0===f?O:f,y=d.BackdropProps,k=d.children,g=d.closeAfterTransition,x=void 0!==g&&g,w=d.container,Z=d.disableAutoFocus,C=void 0!==Z&&Z,R=d.disableBackdropClick,P=void 0!==R&&R,N=d.disableEnforceFocus,z=void 0!==N&&N,F=d.disableEscapeKeyDown,L=void 0!==F&&F,A=d.disablePortal,I=void 0!==A&&A,S=d.disableRestoreFocus,D=void 0!==S&&S,B=d.disableScrollLock,H=void 0!==B&&B,j=d.hideBackdrop,V=void 0!==j&&j,K=d.keepMounted,W=void 0!==K&&K,_=d.manager,Y=void 0===_?T:_,q=d.onBackdropClick,X=d.onClose,G=d.onEscapeKeyDown,J=d.onRendered,Q=d.open,U=(0,r.Z)(d,["BackdropComponent","BackdropProps","children","closeAfterTransition","container","disableAutoFocus","disableBackdropClick","disableEnforceFocus","disableEscapeKeyDown","disablePortal","disableRestoreFocus","disableScrollLock","hideBackdrop","keepMounted","manager","onBackdropClick","onClose","onEscapeKeyDown","onRendered","open"]),$=o.useState(!0),ee=$[0],ne=$[1],te=o.useRef({}),re=o.useRef(null),ie=o.useRef(null),oe=(0,u.Z)(ie,n),ae=function(e){return!!e.children&&e.children.props.hasOwnProperty("in")}(d),ce=function(){return(0,s.Z)(re.current)},le=function(){return te.current.modalRef=ie.current,te.current.mountNode=re.current,te.current},se=function(){Y.mount(le(),{disableScrollLock:H}),ie.current.scrollTop=0},de=(0,m.Z)((function(){var e=function(e){return e="function"===typeof e?e():e,a.findDOMNode(e)}(w)||ce().body;Y.add(le(),e),ie.current&&se()})),ue=o.useCallback((function(){return Y.isTopModal(le())}),[Y]),fe=(0,m.Z)((function(e){re.current=e,e&&(J&&J(),Q&&ue()?se():E(ie.current,!0))})),he=o.useCallback((function(){Y.remove(le())}),[Y]);if(o.useEffect((function(){return function(){he()}}),[he]),o.useEffect((function(){Q?de():ae&&x||he()}),[Q,he,ae,x,de]),!W&&!Q&&(!ae||ee))return null;var pe=function(e){return{root:{position:"fixed",zIndex:e.zIndex.modal,right:0,bottom:0,top:0,left:0},hidden:{visibility:"hidden"}}}(t||{zIndex:v.Z}),me={};return void 0===k.props.tabIndex&&(me.tabIndex=k.props.tabIndex||"-1"),ae&&(me.onEnter=(0,p.Z)((function(){ne(!1)}),k.props.onEnter),me.onExited=(0,p.Z)((function(){ne(!0),x&&he()}),k.props.onExited)),o.createElement(h,{ref:fe,container:w,disablePortal:I},o.createElement("div",(0,i.Z)({ref:oe,onKeyDown:function(e){"Escape"===e.key&&ue()&&(G&&G(e),L||(e.stopPropagation(),X&&X(e,"escapeKeyDown")))},role:"presentation"},U,{style:(0,i.Z)({},pe.root,!Q&&ee?pe.hidden:{},U.style)}),V?null:o.createElement(b,(0,i.Z)({open:Q,onClick:function(e){e.target===e.currentTarget&&(q&&q(e),!P&&X&&X(e,"backdropClick"))}},y)),o.createElement(M,{disableEnforceFocus:z,disableAutoFocus:C,disableRestoreFocus:D,getDoc:ce,isEnabled:ue,open:Q},o.cloneElement(k,me))))}))},5630:function(e,n,t){var r=t(2791),i=t(8499);n.Z=(0,i.Z)(r.createElement("path",{d:"M20.01 15.38c-1.23 0-2.42-.2-3.53-.56-.35-.12-.74-.03-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z"}),"Call")},4900:function(e,n,t){var r=t(2791),i=t(8499);n.Z=(0,i.Z)(r.createElement("path",{d:"M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM6 9h12v2H6V9zm8 5H6v-2h8v2zm4-6H6V6h12v2z"}),"Chat")},7209:function(e,n,t){var r=t(2791),i=t(8499);n.Z=(0,i.Z)(r.createElement("path",{d:"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"}),"Delete")},6327:function(e,n,t){var r=t(2791),i=t(8499);n.Z=(0,i.Z)(r.createElement("path",{d:"M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34a.9959.9959 0 00-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"}),"Edit")},963:function(e,n,t){var r=t(2791),i=t(8499);n.Z=(0,i.Z)(r.createElement("path",{d:"M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"}),"Person")},8402:function(e,n,t){t.d(n,{no:function(){return w}});var r,i,o=t(2791),a={"aria-busy":!0,role:"status"},c=t(8789),l=function(e,n){return Object.defineProperty?Object.defineProperty(e,"raw",{value:n}):e.raw=n,e},s=242.776657104492,d=(0,c.F4)(r||(r=l(["\n  12.5% {\n    stroke-dasharray: ","px, ","px;\n    stroke-dashoffset: -","px;\n  }\n  43.75% {\n    stroke-dasharray: ","px, ","px;\n    stroke-dashoffset: -","px;\n  }\n  100% {\n    stroke-dasharray: ","px, ","px;\n    stroke-dashoffset: -","px;\n  }\n"],["\n  12.5% {\n    stroke-dasharray: ","px, ","px;\n    stroke-dashoffset: -","px;\n  }\n  43.75% {\n    stroke-dasharray: ","px, ","px;\n    stroke-dashoffset: -","px;\n  }\n  100% {\n    stroke-dasharray: ","px, ","px;\n    stroke-dashoffset: -","px;\n  }\n"])),.14*s,s,.11*s,.35*s,s,.35*s,.01*s,s,.99*s),u=(c.ZP.path(i||(i=l(["\n  stroke-dasharray: ","px, ",";\n  stroke-dashoffset: 0;\n  animation: "," ","s linear infinite;\n"],["\n  stroke-dasharray: ","px, ",";\n  stroke-dashoffset: 0;\n  animation: "," ","s linear infinite;\n"])),.01*s,s,d,1.6),function(e,n){return function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if("undefined"!==typeof t[e])return t[e];if(e&&e.indexOf(".")>0){for(var r=e.split("."),i=r.length,o=t[r[0]],a=1;null!=o&&a<i;)o=o[r[a]],a+=1;if("undefined"!==typeof o)return o}return n}});var f,h,p,m=function(e,n){return Object.defineProperty?Object.defineProperty(e,"raw",{value:n}):e.raw=n,e},v=(0,c.F4)(f||(f=m(["\n to {\n    transform: rotate(360deg);\n  }\n"],["\n to {\n    transform: rotate(360deg);\n  }\n"])));c.ZP.svg(h||(h=m(["\n  animation: "," 0.75s steps(12, end) infinite;\n  animation-duration: ","s;\n"],["\n  animation: "," 0.75s steps(12, end) infinite;\n  animation-duration: ","s;\n"])),v,u("speed","0.75")),c.ZP.polyline(p||(p=m(["\n  stroke-width: ","px;\n  stroke-linecap: round;\n\n  &:nth-child(12n + 0) {\n    stroke-opacity: 0.08;\n  }\n\n  &:nth-child(12n + 1) {\n    stroke-opacity: 0.17;\n  }\n\n  &:nth-child(12n + 2) {\n    stroke-opacity: 0.25;\n  }\n\n  &:nth-child(12n + 3) {\n    stroke-opacity: 0.33;\n  }\n\n  &:nth-child(12n + 4) {\n    stroke-opacity: 0.42;\n  }\n\n  &:nth-child(12n + 5) {\n    stroke-opacity: 0.5;\n  }\n\n  &:nth-child(12n + 6) {\n    stroke-opacity: 0.58;\n  }\n\n  &:nth-child(12n + 7) {\n    stroke-opacity: 0.66;\n  }\n\n  &:nth-child(12n + 8) {\n    stroke-opacity: 0.75;\n  }\n\n  &:nth-child(12n + 9) {\n    stroke-opacity: 0.83;\n  }\n\n  &:nth-child(12n + 11) {\n    stroke-opacity: 0.92;\n  }\n"],["\n  stroke-width: ","px;\n  stroke-linecap: round;\n\n  &:nth-child(12n + 0) {\n    stroke-opacity: 0.08;\n  }\n\n  &:nth-child(12n + 1) {\n    stroke-opacity: 0.17;\n  }\n\n  &:nth-child(12n + 2) {\n    stroke-opacity: 0.25;\n  }\n\n  &:nth-child(12n + 3) {\n    stroke-opacity: 0.33;\n  }\n\n  &:nth-child(12n + 4) {\n    stroke-opacity: 0.42;\n  }\n\n  &:nth-child(12n + 5) {\n    stroke-opacity: 0.5;\n  }\n\n  &:nth-child(12n + 6) {\n    stroke-opacity: 0.58;\n  }\n\n  &:nth-child(12n + 7) {\n    stroke-opacity: 0.66;\n  }\n\n  &:nth-child(12n + 8) {\n    stroke-opacity: 0.75;\n  }\n\n  &:nth-child(12n + 9) {\n    stroke-opacity: 0.83;\n  }\n\n  &:nth-child(12n + 11) {\n    stroke-opacity: 0.92;\n  }\n"])),(function(e){return e.width}));var b,y,k,g=function(e,n){return Object.defineProperty?Object.defineProperty(e,"raw",{value:n}):e.raw=n,e},E=(0,c.F4)(b||(b=g(["\n to {\n    stroke-dashoffset: 136;\n  }\n"],["\n to {\n    stroke-dashoffset: 136;\n  }\n"])));c.ZP.polygon(y||(y=g(["\n  stroke-dasharray: 17;\n  animation: "," 2.5s cubic-bezier(0.35, 0.04, 0.63, 0.95) infinite;\n"],["\n  stroke-dasharray: 17;\n  animation: "," 2.5s cubic-bezier(0.35, 0.04, 0.63, 0.95) infinite;\n"])),E),c.ZP.svg(k||(k=g(["\n  transform-origin: 50% 65%;\n"],["\n  transform-origin: 50% 65%;\n"])));var x=function(){return x=Object.assign||function(e){for(var n,t=1,r=arguments.length;t<r;t++)for(var i in n=arguments[t])Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i]);return e},x.apply(this,arguments)};function w(e){var n=e.visible,t=void 0===n||n,r=e.width,i=void 0===r?"80":r,c=e.height,l=void 0===c?"80":c,s=e.wrapperClass,d=void 0===s?"":s,u=e.wrapperStyle,f=void 0===u?{}:u,h=e.ariaLabel,p=void 0===h?"blocks-loading":h;return t?o.createElement("svg",x({width:i,height:l,className:d,style:f,xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",viewBox:"0 0 100 100",preserveAspectRatio:"xMidYMid","aria-label":p,"data-testid":"blocks-svg"},a),o.createElement("rect",{x:"17",y:"17",width:"20",height:"20",fill:"#577c9b"},o.createElement("animate",{attributeName:"fill",values:"#0dceff;#577c9b;#577c9b",keyTimes:"0;0.125;1",dur:"1s",repeatCount:"indefinite",begin:"0s",calcMode:"discrete"})),o.createElement("rect",{x:"40",y:"17",width:"20",height:"20",fill:"#577c9b"},o.createElement("animate",{attributeName:"fill",values:"#0dceff;#577c9b;#577c9b",keyTimes:"0;0.125;1",dur:"1s",repeatCount:"indefinite",begin:"0.125s",calcMode:"discrete"})),o.createElement("rect",{x:"63",y:"17",width:"20",height:"20",fill:"#577c9b"},o.createElement("animate",{attributeName:"fill",values:"#0dceff;#577c9b;#577c9b",keyTimes:"0;0.125;1",dur:"1s",repeatCount:"indefinite",begin:"0.25s",calcMode:"discrete"})),o.createElement("rect",{x:"17",y:"40",width:"20",height:"20",fill:"#577c9b"},o.createElement("animate",{attributeName:"fill",values:"#0dceff;#577c9b;#577c9b",keyTimes:"0;0.125;1",dur:"1s",repeatCount:"indefinite",begin:"0.875s",calcMode:"discrete"})),o.createElement("rect",{x:"63",y:"40",width:"20",height:"20",fill:"#577c9b"},o.createElement("animate",{attributeName:"fill",values:"#0dceff;#577c9b;#577c9b",keyTimes:"0;0.125;1",dur:"1s",repeatCount:"indefinite",begin:"0.375s",calcMode:"discrete"})),o.createElement("rect",{x:"17",y:"63",width:"20",height:"20",fill:"#577c9b"},o.createElement("animate",{attributeName:"fill",values:"#0dceff;#577c9b;#577c9b",keyTimes:"0;0.125;1",dur:"1s",repeatCount:"indefinite",begin:"0.75s",calcMode:"discrete"})),o.createElement("rect",{x:"40",y:"63",width:"20",height:"20",fill:"#577c9b"},o.createElement("animate",{attributeName:"fill",values:"#0dceff;#577c9b;#577c9b",keyTimes:"0;0.125;1",dur:"1s",repeatCount:"indefinite",begin:"0.625s",calcMode:"discrete"})),o.createElement("rect",{x:"63",y:"63",width:"20",height:"20",fill:"#577c9b"},o.createElement("animate",{attributeName:"fill",values:"#0dceff;#577c9b;#577c9b",keyTimes:"0;0.125;1",dur:"1s",repeatCount:"indefinite",begin:"0.5s",calcMode:"discrete"}))):null}}}]);
//# sourceMappingURL=910.58f38151.chunk.js.map