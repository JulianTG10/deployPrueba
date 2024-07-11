import{c as W,a as f,h as T,d as ge,r as C,i as Je,o as re,e as Z,n as Ee,f as he,g as K,l as Oe,j as He,k as N,w as $,m as gt,p as ye,q as yt,s as ae,t as pt,u as ve,v as ke,x as Qe,y as Te,z as Be,A as _e,B as zt,C as St,D as wt,E as Ct,F as Ze,G as xe,H as Ve,I as et,J as qt,K as fe,L as kt,M as me,N as be,O as _,P as q,Q as oe,R as tt,S as J,T as Re,U as Tt,V as _t,W as $t,X as Lt,Y as at}from"./index.ec7fdd9e.js";import{g as Pt,a as Mt,b as Ot,c as Bt,d as Y,s as Fe,e as $e,u as xt,f as Et,h as Ht,i as Dt,j as At,k as Le,Q as ne,l as V,m as je,n as Qt,o as Vt}from"./QItemLabel.4dd25b7f.js";import{u as lt,a as ot,b as Rt,L as le,_ as Ft}from"./plugin-vue_export-helper.0331ce33.js";var jt=W({name:"QToolbarTitle",props:{shrink:Boolean},setup(e,{slots:o}){const n=f(()=>"q-toolbar__title ellipsis"+(e.shrink===!0?" col-shrink":""));return()=>T("div",{class:n.value},ge(o.default))}}),Nt=W({name:"QToolbar",props:{inset:Boolean},setup(e,{slots:o}){const n=f(()=>"q-toolbar row no-wrap items-center"+(e.inset===!0?" q-toolbar--inset":""));return()=>T("div",{class:n.value,role:"toolbar"},ge(o.default))}});function Wt(){const e=C(!Je.value);return e.value===!1&&re(()=>{e.value=!0}),{isHydrated:e}}const nt=typeof ResizeObserver!="undefined",Ne=nt===!0?{}:{style:"display:block;position:absolute;top:0;left:0;right:0;bottom:0;height:100%;width:100%;overflow:hidden;pointer-events:none;z-index:-1;",url:"about:blank"};var ue=W({name:"QResizeObserver",props:{debounce:{type:[String,Number],default:100}},emits:["resize"],setup(e,{emit:o}){let n=null,s,t={width:-1,height:-1};function l(v){v===!0||e.debounce===0||e.debounce==="0"?r():n===null&&(n=setTimeout(r,e.debounce))}function r(){if(n!==null&&(clearTimeout(n),n=null),s){const{offsetWidth:v,offsetHeight:c}=s;(v!==t.width||c!==t.height)&&(t={width:v,height:c},o("resize",t))}}const{proxy:a}=K();if(a.trigger=l,nt===!0){let v;const c=u=>{s=a.$el.parentNode,s?(v=new ResizeObserver(l),v.observe(s),r()):u!==!0&&he(()=>{c(!0)})};return re(()=>{c()}),Z(()=>{n!==null&&clearTimeout(n),v!==void 0&&(v.disconnect!==void 0?v.disconnect():s&&v.unobserve(s))}),Ee}else{let u=function(){n!==null&&(clearTimeout(n),n=null),c!==void 0&&(c.removeEventListener!==void 0&&c.removeEventListener("resize",l,Oe.passive),c=void 0)},k=function(){u(),s&&s.contentDocument&&(c=s.contentDocument.defaultView,c.addEventListener("resize",l,Oe.passive),r())};const{isHydrated:v}=Wt();let c;return re(()=>{he(()=>{s=a.$el,s&&k()})}),Z(u),()=>{if(v.value===!0)return T("object",{class:"q--avoid-card-border",style:Ne.style,tabindex:-1,type:"text/html",data:Ne.url,"aria-hidden":"true",onLoad:k})}}}}),It=W({name:"QHeader",props:{modelValue:{type:Boolean,default:!0},reveal:Boolean,revealOffset:{type:Number,default:250},bordered:Boolean,elevated:Boolean,heightHint:{type:[String,Number],default:50}},emits:["reveal","focusin"],setup(e,{slots:o,emit:n}){const{proxy:{$q:s}}=K(),t=He(ye,N);if(t===N)return console.error("QHeader needs to be child of QLayout"),N;const l=C(parseInt(e.heightHint,10)),r=C(!0),a=f(()=>e.reveal===!0||t.view.value.indexOf("H")!==-1||s.platform.is.ios&&t.isContainer.value===!0),v=f(()=>{if(e.modelValue!==!0)return 0;if(a.value===!0)return r.value===!0?l.value:0;const h=l.value-t.scroll.value.position;return h>0?h:0}),c=f(()=>e.modelValue!==!0||a.value===!0&&r.value!==!0),u=f(()=>e.modelValue===!0&&c.value===!0&&e.reveal===!0),k=f(()=>"q-header q-layout__section--marginal "+(a.value===!0?"fixed":"absolute")+"-top"+(e.bordered===!0?" q-header--bordered":"")+(c.value===!0?" q-header--hidden":"")+(e.modelValue!==!0?" q-layout--prevent-focus":"")),z=f(()=>{const h=t.rows.value.top,M={};return h[0]==="l"&&t.left.space===!0&&(M[s.lang.rtl===!0?"right":"left"]=`${t.left.size}px`),h[2]==="r"&&t.right.space===!0&&(M[s.lang.rtl===!0?"left":"right"]=`${t.right.size}px`),M});function b(h,M){t.update("header",h,M)}function g(h,M){h.value!==M&&(h.value=M)}function B({height:h}){g(l,h),b("size",h)}function P(h){u.value===!0&&g(r,!0),n("focusin",h)}$(()=>e.modelValue,h=>{b("space",h),g(r,!0),t.animate()}),$(v,h=>{b("offset",h)}),$(()=>e.reveal,h=>{h===!1&&g(r,e.modelValue)}),$(r,h=>{t.animate(),n("reveal",h)}),$(t.scroll,h=>{e.reveal===!0&&g(r,h.direction==="up"||h.position<=e.revealOffset||h.position-h.inflectionPoint<100)});const w={};return t.instances.header=w,e.modelValue===!0&&b("size",l.value),b("space",e.modelValue),b("offset",v.value),Z(()=>{t.instances.header===w&&(t.instances.header=void 0,b("size",0),b("offset",0),b("space",!1))}),()=>{const h=gt(o.default,[]);return e.elevated===!0&&h.push(T("div",{class:"q-layout__shadow absolute-full overflow-hidden no-pointer-events"})),h.push(T(ue,{debounce:0,onResize:B})),T("header",{class:k.value,style:z.value,onFocusin:P},h)}}});const{passive:We}=Oe,Ut=["both","horizontal","vertical"];var it=W({name:"QScrollObserver",props:{axis:{type:String,validator:e=>Ut.includes(e),default:"vertical"},debounce:[String,Number],scrollTarget:{default:void 0}},emits:["scroll"],setup(e,{emit:o}){const n={position:{top:0,left:0},direction:"down",directionChanged:!1,delta:{top:0,left:0},inflectionPoint:{top:0,left:0}};let s=null,t,l;$(()=>e.scrollTarget,()=>{v(),a()});function r(){s!==null&&s();const k=Math.max(0,Mt(t)),z=Ot(t),b={top:k-n.position.top,left:z-n.position.left};if(e.axis==="vertical"&&b.top===0||e.axis==="horizontal"&&b.left===0)return;const g=Math.abs(b.top)>=Math.abs(b.left)?b.top<0?"up":"down":b.left<0?"left":"right";n.position={top:k,left:z},n.directionChanged=n.direction!==g,n.delta=b,n.directionChanged===!0&&(n.direction=g,n.inflectionPoint=n.position),o("scroll",{...n})}function a(){t=Pt(l,e.scrollTarget),t.addEventListener("scroll",c,We),c(!0)}function v(){t!==void 0&&(t.removeEventListener("scroll",c,We),t=void 0)}function c(k){if(k===!0||e.debounce===0||e.debounce==="0")r();else if(s===null){const[z,b]=e.debounce?[setTimeout(r,e.debounce),clearTimeout]:[requestAnimationFrame(r),cancelAnimationFrame];s=()=>{b(z),s=null}}}const{proxy:u}=K();return $(()=>u.$q.lang.rtl,r),re(()=>{l=u.$el.parentNode,a()}),Z(()=>{s!==null&&s(),v()}),Object.assign(u,{trigger:c,getPosition:()=>n}),Ee}});const De={left:!0,right:!0,up:!0,down:!0,horizontal:!0,vertical:!0},Xt=Object.keys(De);De.all=!0;function Ie(e){const o={};for(const n of Xt)e[n]===!0&&(o[n]=!0);return Object.keys(o).length===0?De:(o.horizontal===!0?o.left=o.right=!0:o.left===!0&&o.right===!0&&(o.horizontal=!0),o.vertical===!0?o.up=o.down=!0:o.up===!0&&o.down===!0&&(o.vertical=!0),o.horizontal===!0&&o.vertical===!0&&(o.all=!0),o)}const Yt=["INPUT","TEXTAREA"];function Ue(e,o){return o.event===void 0&&e.target!==void 0&&e.target.draggable!==!0&&typeof o.handler=="function"&&Yt.includes(e.target.nodeName.toUpperCase())===!1&&(e.qClonedBy===void 0||e.qClonedBy.indexOf(o.uid)===-1)}function Pe(e,o,n){const s=Be(e);let t,l=s.left-o.event.x,r=s.top-o.event.y,a=Math.abs(l),v=Math.abs(r);const c=o.direction;c.horizontal===!0&&c.vertical!==!0?t=l<0?"left":"right":c.horizontal!==!0&&c.vertical===!0?t=r<0?"up":"down":c.up===!0&&r<0?(t="up",a>v&&(c.left===!0&&l<0?t="left":c.right===!0&&l>0&&(t="right"))):c.down===!0&&r>0?(t="down",a>v&&(c.left===!0&&l<0?t="left":c.right===!0&&l>0&&(t="right"))):c.left===!0&&l<0?(t="left",a<v&&(c.up===!0&&r<0?t="up":c.down===!0&&r>0&&(t="down"))):c.right===!0&&l>0&&(t="right",a<v&&(c.up===!0&&r<0?t="up":c.down===!0&&r>0&&(t="down")));let u=!1;if(t===void 0&&n===!1){if(o.event.isFirst===!0||o.event.lastDir===void 0)return{};t=o.event.lastDir,u=!0,t==="left"||t==="right"?(s.left-=l,a=0,l=0):(s.top-=r,v=0,r=0)}return{synthetic:u,payload:{evt:e,touch:o.event.mouse!==!0,mouse:o.event.mouse===!0,position:s,direction:t,isFirst:o.event.isFirst,isFinal:n===!0,duration:Date.now()-o.event.time,distance:{x:a,y:v},offset:{x:l,y:r},delta:{x:s.left-o.event.lastX,y:s.top-o.event.lastY}}}}let Kt=0;var ie=yt({name:"touch-pan",beforeMount(e,{value:o,modifiers:n}){if(n.mouse!==!0&&ae.has.touch!==!0)return;function s(l,r){n.mouse===!0&&r===!0?zt(l):(n.stop===!0&&Te(l),n.prevent===!0&&Qe(l))}const t={uid:"qvtp_"+Kt++,handler:o,modifiers:n,direction:Ie(n),noop:Ee,mouseStart(l){Ue(l,t)&&pt(l)&&(ve(t,"temp",[[document,"mousemove","move","notPassiveCapture"],[document,"mouseup","end","passiveCapture"]]),t.start(l,!0))},touchStart(l){if(Ue(l,t)){const r=l.target;ve(t,"temp",[[r,"touchmove","move","notPassiveCapture"],[r,"touchcancel","end","passiveCapture"],[r,"touchend","end","passiveCapture"]]),t.start(l)}},start(l,r){if(ae.is.firefox===!0&&ke(e,!0),t.lastEvt=l,r===!0||n.stop===!0){if(t.direction.all!==!0&&(r!==!0||t.modifiers.mouseAllDir!==!0&&t.modifiers.mousealldir!==!0)){const c=l.type.indexOf("mouse")!==-1?new MouseEvent(l.type,l):new TouchEvent(l.type,l);l.defaultPrevented===!0&&Qe(c),l.cancelBubble===!0&&Te(c),Object.assign(c,{qKeyEvent:l.qKeyEvent,qClickOutside:l.qClickOutside,qAnchorHandled:l.qAnchorHandled,qClonedBy:l.qClonedBy===void 0?[t.uid]:l.qClonedBy.concat(t.uid)}),t.initialEvent={target:l.target,event:c}}Te(l)}const{left:a,top:v}=Be(l);t.event={x:a,y:v,time:Date.now(),mouse:r===!0,detected:!1,isFirst:!0,isFinal:!1,lastX:a,lastY:v}},move(l){if(t.event===void 0)return;const r=Be(l),a=r.left-t.event.x,v=r.top-t.event.y;if(a===0&&v===0)return;t.lastEvt=l;const c=t.event.mouse===!0,u=()=>{s(l,c);let b;n.preserveCursor!==!0&&n.preservecursor!==!0&&(b=document.documentElement.style.cursor||"",document.documentElement.style.cursor="grabbing"),c===!0&&document.body.classList.add("no-pointer-events--children"),document.body.classList.add("non-selectable"),Bt(),t.styleCleanup=g=>{if(t.styleCleanup=void 0,b!==void 0&&(document.documentElement.style.cursor=b),document.body.classList.remove("non-selectable"),c===!0){const B=()=>{document.body.classList.remove("no-pointer-events--children")};g!==void 0?setTimeout(()=>{B(),g()},50):B()}else g!==void 0&&g()}};if(t.event.detected===!0){t.event.isFirst!==!0&&s(l,t.event.mouse);const{payload:b,synthetic:g}=Pe(l,t,!1);b!==void 0&&(t.handler(b)===!1?t.end(l):(t.styleCleanup===void 0&&t.event.isFirst===!0&&u(),t.event.lastX=b.position.left,t.event.lastY=b.position.top,t.event.lastDir=g===!0?void 0:b.direction,t.event.isFirst=!1));return}if(t.direction.all===!0||c===!0&&(t.modifiers.mouseAllDir===!0||t.modifiers.mousealldir===!0)){u(),t.event.detected=!0,t.move(l);return}const k=Math.abs(a),z=Math.abs(v);k!==z&&(t.direction.horizontal===!0&&k>z||t.direction.vertical===!0&&k<z||t.direction.up===!0&&k<z&&v<0||t.direction.down===!0&&k<z&&v>0||t.direction.left===!0&&k>z&&a<0||t.direction.right===!0&&k>z&&a>0?(t.event.detected=!0,t.move(l)):t.end(l,!0))},end(l,r){if(t.event!==void 0){if(_e(t,"temp"),ae.is.firefox===!0&&ke(e,!1),r===!0)t.styleCleanup!==void 0&&t.styleCleanup(),t.event.detected!==!0&&t.initialEvent!==void 0&&t.initialEvent.target.dispatchEvent(t.initialEvent.event);else if(t.event.detected===!0){t.event.isFirst===!0&&t.handler(Pe(l===void 0?t.lastEvt:l,t).payload);const{payload:a}=Pe(l===void 0?t.lastEvt:l,t,!0),v=()=>{t.handler(a)};t.styleCleanup!==void 0?t.styleCleanup(v):v()}t.event=void 0,t.initialEvent=void 0,t.lastEvt=void 0}}};if(e.__qtouchpan=t,n.mouse===!0){const l=n.mouseCapture===!0||n.mousecapture===!0?"Capture":"";ve(t,"main",[[e,"mousedown","mouseStart",`passive${l}`]])}ae.has.touch===!0&&ve(t,"main",[[e,"touchstart","touchStart",`passive${n.capture===!0?"Capture":""}`],[e,"touchmove","noop","notPassiveCapture"]])},updated(e,o){const n=e.__qtouchpan;n!==void 0&&(o.oldValue!==o.value&&(typeof value!="function"&&n.end(),n.handler=o.value),n.direction=Ie(o.modifiers))},beforeUnmount(e){const o=e.__qtouchpan;o!==void 0&&(o.event!==void 0&&o.end(),_e(o,"main"),_e(o,"temp"),ae.is.firefox===!0&&ke(e,!1),o.styleCleanup!==void 0&&o.styleCleanup(),delete e.__qtouchpan)}});const Xe=["vertical","horizontal"],Me={vertical:{offset:"offsetY",scroll:"scrollTop",dir:"down",dist:"y"},horizontal:{offset:"offsetX",scroll:"scrollLeft",dir:"right",dist:"x"}},Ye={prevent:!0,mouse:!0,mouseAllDir:!0},Ke=e=>e>=250?50:Math.ceil(e/5);var Gt=W({name:"QScrollArea",props:{...lt,thumbStyle:Object,verticalThumbStyle:Object,horizontalThumbStyle:Object,barStyle:[Array,String,Object],verticalBarStyle:[Array,String,Object],horizontalBarStyle:[Array,String,Object],contentStyle:[Array,String,Object],contentActiveStyle:[Array,String,Object],delay:{type:[String,Number],default:1e3},visible:{type:Boolean,default:null},tabindex:[String,Number],onScroll:Function},setup(e,{slots:o,emit:n}){const s=C(!1),t=C(!1),l=C(!1),r={vertical:C(0),horizontal:C(0)},a={vertical:{ref:C(null),position:C(0),size:C(0)},horizontal:{ref:C(null),position:C(0),size:C(0)}},{proxy:v}=K(),c=ot(e,v.$q);let u=null,k;const z=C(null),b=f(()=>"q-scrollarea"+(c.value===!0?" q-scrollarea--dark":""));a.vertical.percentage=f(()=>{const d=a.vertical.size.value-r.vertical.value;if(d<=0)return 0;const m=Y(a.vertical.position.value/d,0,1);return Math.round(m*1e4)/1e4}),a.vertical.thumbHidden=f(()=>(e.visible===null?l.value:e.visible)!==!0&&s.value===!1&&t.value===!1||a.vertical.size.value<=r.vertical.value+1),a.vertical.thumbStart=f(()=>a.vertical.percentage.value*(r.vertical.value-a.vertical.thumbSize.value)),a.vertical.thumbSize=f(()=>Math.round(Y(r.vertical.value*r.vertical.value/a.vertical.size.value,Ke(r.vertical.value),r.vertical.value))),a.vertical.style=f(()=>({...e.thumbStyle,...e.verticalThumbStyle,top:`${a.vertical.thumbStart.value}px`,height:`${a.vertical.thumbSize.value}px`})),a.vertical.thumbClass=f(()=>"q-scrollarea__thumb q-scrollarea__thumb--v absolute-right"+(a.vertical.thumbHidden.value===!0?" q-scrollarea__thumb--invisible":"")),a.vertical.barClass=f(()=>"q-scrollarea__bar q-scrollarea__bar--v absolute-right"+(a.vertical.thumbHidden.value===!0?" q-scrollarea__bar--invisible":"")),a.horizontal.percentage=f(()=>{const d=a.horizontal.size.value-r.horizontal.value;if(d<=0)return 0;const m=Y(Math.abs(a.horizontal.position.value)/d,0,1);return Math.round(m*1e4)/1e4}),a.horizontal.thumbHidden=f(()=>(e.visible===null?l.value:e.visible)!==!0&&s.value===!1&&t.value===!1||a.horizontal.size.value<=r.horizontal.value+1),a.horizontal.thumbStart=f(()=>a.horizontal.percentage.value*(r.horizontal.value-a.horizontal.thumbSize.value)),a.horizontal.thumbSize=f(()=>Math.round(Y(r.horizontal.value*r.horizontal.value/a.horizontal.size.value,Ke(r.horizontal.value),r.horizontal.value))),a.horizontal.style=f(()=>({...e.thumbStyle,...e.horizontalThumbStyle,[v.$q.lang.rtl===!0?"right":"left"]:`${a.horizontal.thumbStart.value}px`,width:`${a.horizontal.thumbSize.value}px`})),a.horizontal.thumbClass=f(()=>"q-scrollarea__thumb q-scrollarea__thumb--h absolute-bottom"+(a.horizontal.thumbHidden.value===!0?" q-scrollarea__thumb--invisible":"")),a.horizontal.barClass=f(()=>"q-scrollarea__bar q-scrollarea__bar--h absolute-bottom"+(a.horizontal.thumbHidden.value===!0?" q-scrollarea__bar--invisible":""));const g=f(()=>a.vertical.thumbHidden.value===!0&&a.horizontal.thumbHidden.value===!0?e.contentStyle:e.contentActiveStyle),B=[[ie,d=>{Q(d,"vertical")},void 0,{vertical:!0,...Ye}]],P=[[ie,d=>{Q(d,"horizontal")},void 0,{horizontal:!0,...Ye}]];function w(){const d={};return Xe.forEach(m=>{const S=a[m];d[m+"Position"]=S.position.value,d[m+"Percentage"]=S.percentage.value,d[m+"Size"]=S.size.value,d[m+"ContainerSize"]=r[m].value}),d}const h=St(()=>{const d=w();d.ref=v,n("scroll",d)},0);function M(d,m,S){if(Xe.includes(d)===!1){console.error("[QScrollArea]: wrong first param of setScrollPosition (vertical/horizontal)");return}(d==="vertical"?Fe:$e)(z.value,m,S)}function y({height:d,width:m}){let S=!1;r.vertical.value!==d&&(r.vertical.value=d,S=!0),r.horizontal.value!==m&&(r.horizontal.value=m,S=!0),S===!0&&A()}function L({position:d}){let m=!1;a.vertical.position.value!==d.top&&(a.vertical.position.value=d.top,m=!0),a.horizontal.position.value!==d.left&&(a.horizontal.position.value=d.left,m=!0),m===!0&&A()}function O({height:d,width:m}){a.horizontal.size.value!==m&&(a.horizontal.size.value=m,A()),a.vertical.size.value!==d&&(a.vertical.size.value=d,A())}function Q(d,m){const S=a[m];if(d.isFirst===!0){if(S.thumbHidden.value===!0)return;k=S.position.value,t.value=!0}else if(t.value!==!0)return;d.isFinal===!0&&(t.value=!1);const j=Me[m],G=r[m].value,pe=(S.size.value-G)/(G-S.thumbSize.value),ce=d.distance[j.dist],ze=k+(d.direction===j.dir?1:-1)*ce*pe;ee(ze,m)}function I(d,m){const S=a[m];if(S.thumbHidden.value!==!0){const j=d[Me[m].offset];if(j<S.thumbStart.value||j>S.thumbStart.value+S.thumbSize.value){const G=j-S.thumbSize.value/2;ee(G/r[m].value*S.size.value,m)}S.ref.value!==null&&S.ref.value.dispatchEvent(new MouseEvent(d.type,d))}}function R(d){I(d,"vertical")}function D(d){I(d,"horizontal")}function A(){s.value=!0,u!==null&&clearTimeout(u),u=setTimeout(()=>{u=null,s.value=!1},e.delay),e.onScroll!==void 0&&h()}function ee(d,m){z.value[Me[m].scroll]=d}let x=null;function te(){x!==null&&clearTimeout(x),x=setTimeout(()=>{x=null,l.value=!0},v.$q.platform.is.ios?50:0)}function se(){x!==null&&(clearTimeout(x),x=null),l.value=!1}let F=null;return $(()=>v.$q.lang.rtl,d=>{z.value!==null&&$e(z.value,Math.abs(a.horizontal.position.value)*(d===!0?-1:1))}),wt(()=>{F={top:a.vertical.position.value,left:a.horizontal.position.value}}),Ct(()=>{if(F===null)return;const d=z.value;d!==null&&($e(d,F.left),Fe(d,F.top))}),Z(h.cancel),Object.assign(v,{getScrollTarget:()=>z.value,getScroll:w,getScrollPosition:()=>({top:a.vertical.position.value,left:a.horizontal.position.value}),getScrollPercentage:()=>({top:a.vertical.percentage.value,left:a.horizontal.percentage.value}),setScrollPosition:M,setScrollPercentage(d,m,S){M(d,m*(a[d].size.value-r[d].value)*(d==="horizontal"&&v.$q.lang.rtl===!0?-1:1),S)}}),()=>T("div",{class:b.value,onMouseenter:te,onMouseleave:se},[T("div",{ref:z,class:"q-scrollarea__container scroll relative-position fit hide-scrollbar",tabindex:e.tabindex!==void 0?e.tabindex:void 0},[T("div",{class:"q-scrollarea__content absolute",style:g.value},Ze(o.default,[T(ue,{debounce:0,onResize:O})])),T(it,{axis:"both",onScroll:L})]),T(ue,{debounce:0,onResize:y}),T("div",{class:a.vertical.barClass.value,style:[e.barStyle,e.verticalBarStyle],"aria-hidden":"true",onMousedown:R}),T("div",{class:a.horizontal.barClass.value,style:[e.barStyle,e.horizontalBarStyle],"aria-hidden":"true",onMousedown:D}),xe(T("div",{ref:a.vertical.ref,class:a.vertical.thumbClass.value,style:a.vertical.style.value,"aria-hidden":"true"}),B),xe(T("div",{ref:a.horizontal.ref,class:a.horizontal.thumbClass.value,style:a.horizontal.style.value,"aria-hidden":"true"}),P)])}});const Ge=150;var Jt=W({name:"QDrawer",inheritAttrs:!1,props:{...xt,...lt,side:{type:String,default:"left",validator:e=>["left","right"].includes(e)},width:{type:Number,default:300},mini:Boolean,miniToOverlay:Boolean,miniWidth:{type:Number,default:57},noMiniAnimation:Boolean,breakpoint:{type:Number,default:1023},showIfAbove:Boolean,behavior:{type:String,validator:e=>["default","desktop","mobile"].includes(e),default:"default"},bordered:Boolean,elevated:Boolean,overlay:Boolean,persistent:Boolean,noSwipeOpen:Boolean,noSwipeClose:Boolean,noSwipeBackdrop:Boolean},emits:[...Et,"onLayout","miniState"],setup(e,{slots:o,emit:n,attrs:s}){const t=K(),{proxy:{$q:l}}=t,r=ot(e,l),{preventBodyScroll:a}=At(),{registerTimeout:v,removeTimeout:c}=Rt(),u=He(ye,N);if(u===N)return console.error("QDrawer needs to be child of QLayout"),N;let k,z=null,b;const g=C(e.behavior==="mobile"||e.behavior!=="desktop"&&u.totalWidth.value<=e.breakpoint),B=f(()=>e.mini===!0&&g.value!==!0),P=f(()=>B.value===!0?e.miniWidth:e.width),w=C(e.showIfAbove===!0&&g.value===!1?!0:e.modelValue===!0),h=f(()=>e.persistent!==!0&&(g.value===!0||j.value===!0));function M(i,p){if(Q(),i!==!1&&u.animate(),H(0),g.value===!0){const E=u.instances[F.value];E!==void 0&&E.belowBreakpoint===!0&&E.hide(!1),U(1),u.isContainer.value!==!0&&a(!0)}else U(0),i!==!1&&we(!1);v(()=>{i!==!1&&we(!0),p!==!0&&n("show",i)},Ge)}function y(i,p){I(),i!==!1&&u.animate(),U(0),H(A.value*P.value),Ce(),p!==!0?v(()=>{n("hide",i)},Ge):c()}const{show:L,hide:O}=Ht({showing:w,hideOnRouteChange:h,handleShow:M,handleHide:y}),{addToHistory:Q,removeFromHistory:I}=Dt(w,O,h),R={belowBreakpoint:g,hide:O},D=f(()=>e.side==="right"),A=f(()=>(l.lang.rtl===!0?-1:1)*(D.value===!0?1:-1)),ee=C(0),x=C(!1),te=C(!1),se=C(P.value*A.value),F=f(()=>D.value===!0?"left":"right"),d=f(()=>w.value===!0&&g.value===!1&&e.overlay===!1?e.miniToOverlay===!0?e.miniWidth:P.value:0),m=f(()=>e.overlay===!0||e.miniToOverlay===!0||u.view.value.indexOf(D.value?"R":"L")!==-1||l.platform.is.ios===!0&&u.isContainer.value===!0),S=f(()=>e.overlay===!1&&w.value===!0&&g.value===!1),j=f(()=>e.overlay===!0&&w.value===!0&&g.value===!1),G=f(()=>"fullscreen q-drawer__backdrop"+(w.value===!1&&x.value===!1?" hidden":"")),pe=f(()=>({backgroundColor:`rgba(0,0,0,${ee.value*.4})`})),ce=f(()=>D.value===!0?u.rows.value.top[2]==="r":u.rows.value.top[0]==="l"),ze=f(()=>D.value===!0?u.rows.value.bottom[2]==="r":u.rows.value.bottom[0]==="l"),rt=f(()=>{const i={};return u.header.space===!0&&ce.value===!1&&(m.value===!0?i.top=`${u.header.offset}px`:u.header.space===!0&&(i.top=`${u.header.size}px`)),u.footer.space===!0&&ze.value===!1&&(m.value===!0?i.bottom=`${u.footer.offset}px`:u.footer.space===!0&&(i.bottom=`${u.footer.size}px`)),i}),ut=f(()=>{const i={width:`${P.value}px`,transform:`translateX(${se.value}px)`};return g.value===!0?i:Object.assign(i,rt.value)}),st=f(()=>"q-drawer__content fit "+(u.isContainer.value!==!0?"scroll":"overflow-auto")),ct=f(()=>`q-drawer q-drawer--${e.side}`+(te.value===!0?" q-drawer--mini-animate":"")+(e.bordered===!0?" q-drawer--bordered":"")+(r.value===!0?" q-drawer--dark q-dark":"")+(x.value===!0?" no-transition":w.value===!0?"":" q-layout--prevent-focus")+(g.value===!0?" fixed q-drawer--on-top q-drawer--mobile q-drawer--top-padding":` q-drawer--${B.value===!0?"mini":"standard"}`+(m.value===!0||S.value!==!0?" fixed":"")+(e.overlay===!0||e.miniToOverlay===!0?" q-drawer--on-top":"")+(ce.value===!0?" q-drawer--top-padding":""))),dt=f(()=>{const i=l.lang.rtl===!0?e.side:F.value;return[[ie,mt,void 0,{[i]:!0,mouse:!0}]]}),vt=f(()=>{const i=l.lang.rtl===!0?F.value:e.side;return[[ie,Ae,void 0,{[i]:!0,mouse:!0}]]}),ft=f(()=>{const i=l.lang.rtl===!0?F.value:e.side;return[[ie,Ae,void 0,{[i]:!0,mouse:!0,mouseAllDir:!0}]]});function Se(){bt(g,e.behavior==="mobile"||e.behavior!=="desktop"&&u.totalWidth.value<=e.breakpoint)}$(g,i=>{i===!0?(k=w.value,w.value===!0&&O(!1)):e.overlay===!1&&e.behavior!=="mobile"&&k!==!1&&(w.value===!0?(H(0),U(0),Ce()):L(!1))}),$(()=>e.side,(i,p)=>{u.instances[p]===R&&(u.instances[p]=void 0,u[p].space=!1,u[p].offset=0),u.instances[i]=R,u[i].size=P.value,u[i].space=S.value,u[i].offset=d.value}),$(u.totalWidth,()=>{(u.isContainer.value===!0||document.qScrollPrevented!==!0)&&Se()}),$(()=>e.behavior+e.breakpoint,Se),$(u.isContainer,i=>{w.value===!0&&a(i!==!0),i===!0&&Se()}),$(u.scrollbarWidth,()=>{H(w.value===!0?0:void 0)}),$(d,i=>{X("offset",i)}),$(S,i=>{n("onLayout",i),X("space",i)}),$(D,()=>{H()}),$(P,i=>{H(),qe(e.miniToOverlay,i)}),$(()=>e.miniToOverlay,i=>{qe(i,P.value)}),$(()=>l.lang.rtl,()=>{H()}),$(()=>e.mini,()=>{e.noMiniAnimation||e.modelValue===!0&&(ht(),u.animate())}),$(B,i=>{n("miniState",i)});function H(i){i===void 0?he(()=>{i=w.value===!0?0:P.value,H(A.value*i)}):(u.isContainer.value===!0&&D.value===!0&&(g.value===!0||Math.abs(i)===P.value)&&(i+=A.value*u.scrollbarWidth.value),se.value=i)}function U(i){ee.value=i}function we(i){const p=i===!0?"remove":u.isContainer.value!==!0?"add":"";p!==""&&document.body.classList[p]("q-body--drawer-toggle")}function ht(){z!==null&&clearTimeout(z),t.proxy&&t.proxy.$el&&t.proxy.$el.classList.add("q-drawer--mini-animate"),te.value=!0,z=setTimeout(()=>{z=null,te.value=!1,t&&t.proxy&&t.proxy.$el&&t.proxy.$el.classList.remove("q-drawer--mini-animate")},150)}function mt(i){if(w.value!==!1)return;const p=P.value,E=Y(i.distance.x,0,p);if(i.isFinal===!0){E>=Math.min(75,p)===!0?L():(u.animate(),U(0),H(A.value*p)),x.value=!1;return}H((l.lang.rtl===!0?D.value!==!0:D.value)?Math.max(p-E,0):Math.min(0,E-p)),U(Y(E/p,0,1)),i.isFirst===!0&&(x.value=!0)}function Ae(i){if(w.value!==!0)return;const p=P.value,E=i.direction===e.side,de=(l.lang.rtl===!0?E!==!0:E)?Y(i.distance.x,0,p):0;if(i.isFinal===!0){Math.abs(de)<Math.min(75,p)===!0?(u.animate(),U(1),H(0)):O(),x.value=!1;return}H(A.value*de),U(Y(1-de/p,0,1)),i.isFirst===!0&&(x.value=!0)}function Ce(){a(!1),we(!0)}function X(i,p){u.update(e.side,i,p)}function bt(i,p){i.value!==p&&(i.value=p)}function qe(i,p){X("size",i===!0?e.miniWidth:p)}return u.instances[e.side]=R,qe(e.miniToOverlay,P.value),X("space",S.value),X("offset",d.value),e.showIfAbove===!0&&e.modelValue!==!0&&w.value===!0&&e["onUpdate:modelValue"]!==void 0&&n("update:modelValue",!0),re(()=>{n("onLayout",S.value),n("miniState",B.value),k=e.showIfAbove===!0;const i=()=>{(w.value===!0?M:y)(!1,!0)};if(u.totalWidth.value!==0){he(i);return}b=$(u.totalWidth,()=>{b(),b=void 0,w.value===!1&&e.showIfAbove===!0&&g.value===!1?L(!1):i()})}),Z(()=>{b!==void 0&&b(),z!==null&&(clearTimeout(z),z=null),w.value===!0&&Ce(),u.instances[e.side]===R&&(u.instances[e.side]=void 0,X("size",0),X("offset",0),X("space",!1))}),()=>{const i=[];g.value===!0&&(e.noSwipeOpen===!1&&i.push(xe(T("div",{key:"open",class:`q-drawer__opener fixed-${e.side}`,"aria-hidden":"true"}),dt.value)),i.push(Ve("div",{ref:"backdrop",class:G.value,style:pe.value,"aria-hidden":"true",onClick:O},void 0,"backdrop",e.noSwipeBackdrop!==!0&&w.value===!0,()=>ft.value)));const p=B.value===!0&&o.mini!==void 0,E=[T("div",{...s,key:""+p,class:[st.value,s.class]},p===!0?o.mini():ge(o.default))];return e.elevated===!0&&w.value===!0&&E.push(T("div",{class:"q-layout__shadow absolute-full overflow-hidden no-pointer-events"})),i.push(Ve("aside",{ref:"content",class:ct.value,style:ut.value},E,"contentclose",e.noSwipeClose!==!0&&g.value===!0,()=>vt.value)),T("div",{class:"q-drawer-container"},i)}}}),Zt=W({name:"QPageContainer",setup(e,{slots:o}){const{proxy:{$q:n}}=K(),s=He(ye,N);if(s===N)return console.error("QPageContainer needs to be child of QLayout"),N;et(qt,!0);const t=f(()=>{const l={};return s.header.space===!0&&(l.paddingTop=`${s.header.size}px`),s.right.space===!0&&(l[`padding${n.lang.rtl===!0?"Left":"Right"}`]=`${s.right.size}px`),s.footer.space===!0&&(l.paddingBottom=`${s.footer.size}px`),s.left.space===!0&&(l[`padding${n.lang.rtl===!0?"Right":"Left"}`]=`${s.left.size}px`),l});return()=>T("div",{class:"q-page-container",style:t.value},ge(o.default))}}),ea=W({name:"QLayout",props:{container:Boolean,view:{type:String,default:"hhh lpr fff",validator:e=>/^(h|l)h(h|r) lpr (f|l)f(f|r)$/.test(e.toLowerCase())},onScroll:Function,onScrollHeight:Function,onResize:Function},setup(e,{slots:o,emit:n}){const{proxy:{$q:s}}=K(),t=C(null),l=C(s.screen.height),r=C(e.container===!0?0:s.screen.width),a=C({position:0,direction:"down",inflectionPoint:0}),v=C(0),c=C(Je.value===!0?0:Le()),u=f(()=>"q-layout q-layout--"+(e.container===!0?"containerized":"standard")),k=f(()=>e.container===!1?{minHeight:s.screen.height+"px"}:null),z=f(()=>c.value!==0?{[s.lang.rtl===!0?"left":"right"]:`${c.value}px`}:null),b=f(()=>c.value!==0?{[s.lang.rtl===!0?"right":"left"]:0,[s.lang.rtl===!0?"left":"right"]:`-${c.value}px`,width:`calc(100% + ${c.value}px)`}:null);function g(y){if(e.container===!0||document.qScrollPrevented!==!0){const L={position:y.position.top,direction:y.direction,directionChanged:y.directionChanged,inflectionPoint:y.inflectionPoint.top,delta:y.delta.top};a.value=L,e.onScroll!==void 0&&n("scroll",L)}}function B(y){const{height:L,width:O}=y;let Q=!1;l.value!==L&&(Q=!0,l.value=L,e.onScrollHeight!==void 0&&n("scrollHeight",L),w()),r.value!==O&&(Q=!0,r.value=O),Q===!0&&e.onResize!==void 0&&n("resize",y)}function P({height:y}){v.value!==y&&(v.value=y,w())}function w(){if(e.container===!0){const y=l.value>v.value?Le():0;c.value!==y&&(c.value=y)}}let h=null;const M={instances:{},view:f(()=>e.view),isContainer:f(()=>e.container),rootRef:t,height:l,containerHeight:v,scrollbarWidth:c,totalWidth:f(()=>r.value+c.value),rows:f(()=>{const y=e.view.toLowerCase().split(" ");return{top:y[0].split(""),middle:y[1].split(""),bottom:y[2].split("")}}),header:fe({size:0,offset:0,space:!1}),right:fe({size:300,offset:0,space:!1}),footer:fe({size:0,offset:0,space:!1}),left:fe({size:300,offset:0,space:!1}),scroll:a,animate(){h!==null?clearTimeout(h):document.body.classList.add("q-body--layout-animate"),h=setTimeout(()=>{h=null,document.body.classList.remove("q-body--layout-animate")},155)},update(y,L,O){M[y][L]=O}};if(et(ye,M),Le()>0){let O=function(){y=null,L.classList.remove("hide-scrollbar")},Q=function(){if(y===null){if(L.scrollHeight>s.screen.height)return;L.classList.add("hide-scrollbar")}else clearTimeout(y);y=setTimeout(O,300)},I=function(R){y!==null&&R==="remove"&&(clearTimeout(y),O()),window[`${R}EventListener`]("resize",Q)},y=null;const L=document.body;$(()=>e.container!==!0?"add":"remove",I),e.container!==!0&&I("add"),kt(()=>{I("remove")})}return()=>{const y=Ze(o.default,[T(it,{onScroll:g}),T(ue,{onResize:B})]),L=T("div",{class:u.value,style:k.value,ref:e.container===!0?void 0:t,tabindex:-1},y);return e.container===!0?T("div",{class:"q-layout-container overflow-hidden",ref:t},[T(ue,{onResize:P}),T("div",{class:"absolute-full",style:z.value},[T("div",{class:"scroll",style:b.value},[L])])]):L}}});Object.assign({name:"EssentialLink"},{__name:"EssentialLink",props:{title:{type:String,required:!0},caption:{type:String,default:""},link:{type:String,default:"#"},icon:{type:String,default:""}},setup(e){const o=e;return(n,s)=>(me(),be(ne,{clickable:"",tag:"a",target:"_blank",href:o.link},{default:_(()=>[o.icon?(me(),be(V,{key:0,avatar:""},{default:_(()=>[q(oe,{name:o.icon},null,8,["name"])]),_:1})):tt("",!0),q(V,null,{default:_(()=>[q(je,null,{default:_(()=>[J(Re(o.title),1)]),_:1}),q(je,{caption:""},{default:_(()=>[J(Re(o.caption),1)]),_:1})]),_:1})]),_:1},8,["href"]))}});var ta={name:"MainLayout",setup(){const e=Tt(),o=C(!1),n=C(!0),s=C(!1),t=[],l=le.getItem("userData");return{userRole:l?l.rol:null,router:e,essentialLinks:t,leftDrawerOpen:o,drawer:s,toggleLeftDrawer:()=>{o.value=!o.value},miniState:n,toggleMiniState:()=>{o.value=!0,n.value=!n.value},goPage:k=>{e.push(k)},logout:()=>{console.log("Logout initiated"),le.remove("userData"),le.remove("token"),le.clear(),console.log("Token almacenado en el LocalStorage:",le.getItem("token")),console.log("Datos del usuario eliminados al cerrar sesi\xF3n"),e.push("/")}}},beforeMount(){},async data(){return{}}};const aa=at("span",null,"MultiCotizaciones",-1),la=at("div",null,"Versi\xF3n 0.1",-1);function oa(e,o,n,s,t,l){const r=_t("router-view");return me(),be(ea,{view:"lHh Lpr lFf"},{default:_(()=>[q(It,{elevated:""},{default:_(()=>[q(Nt,null,{default:_(()=>[q($t,{flat:"",onClick:o[0]||(o[0]=a=>e.drawer=!e.drawer),round:"",dense:"",icon:"menu"}),aa,q(jt),la]),_:1})]),_:1}),q(Jt,{modelValue:e.drawer,"onUpdate:modelValue":o[4]||(o[4]=a=>e.drawer=a),"show-if-above":"",mini:e.miniState,onMouseover:o[5]||(o[5]=a=>e.miniState=!1),onMouseout:o[6]||(o[6]=a=>e.miniState=!0),width:200,breakpoint:500,bordered:"",class:Lt(e.$q.dark.isActive?"bg-grey-9":"bg-grey-3")},{default:_(()=>[q(Gt,{class:"fit","horizontal-thumb-style":{opacity:0}},{default:_(()=>[q(Qt,{padding:""},{default:_(()=>[q(ne,{clickable:"",onClick:o[1]||(o[1]=a=>e.goPage("/cotizacion"))},{default:_(()=>[q(V,{avatar:""},{default:_(()=>[q(oe,{name:"home"})]),_:1}),q(V,null,{default:_(()=>[J("Cotizaci\xF3n")]),_:1})]),_:1}),e.userRole==="administrador"?(me(),be(ne,{key:0,clickable:"",onClick:o[2]||(o[2]=a=>e.goPage("/ControlUser"))},{default:_(()=>[q(V,{avatar:""},{default:_(()=>[q(oe,{name:"manage_accounts"})]),_:1}),q(V,null,{default:_(()=>[J("Control Usuarios")]),_:1})]),_:1})):tt("",!0),q(ne,{clickable:"",onClick:o[3]||(o[3]=a=>e.goPage("/ControlClient"))},{default:_(()=>[q(V,{avatar:""},{default:_(()=>[q(oe,{name:"group"})]),_:1}),q(V,null,{default:_(()=>[J("Control Clientes")]),_:1})]),_:1}),q(Vt),q(ne,{clickable:"",onClick:e.logout},{default:_(()=>[q(V,{avatar:""},{default:_(()=>[q(oe,{name:"logout"})]),_:1}),q(V,null,{default:_(()=>[J("Cerrar Sesi\xF3n")]),_:1})]),_:1},8,["onClick"])]),_:1})]),_:1})]),_:1},8,["modelValue","mini","class"]),q(Zt,null,{default:_(()=>[q(r)]),_:1})]),_:1})}var sa=Ft(ta,[["render",oa]]);export{sa as default};
