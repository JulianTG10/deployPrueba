import{c as x,a as f,h as g,d as A,Z as oe,_ as le,r as I,$ as ne,B as Z,m as ie,g as C,a0 as re,a1 as X,a2 as ae,e as se,a3 as Y,w as O,a4 as ue,o as ce,f as F,s as h,l as m,a5 as de}from"./index.62d90b09.js";import{u as W,a as Q}from"./plugin-vue_export-helper.657f78e4.js";var ye=x({name:"QItemSection",props:{avatar:Boolean,thumbnail:Boolean,side:Boolean,top:Boolean,noWrap:Boolean},setup(e,{slots:t}){const o=f(()=>`q-item__section column q-item__section--${e.avatar===!0||e.side===!0||e.thumbnail===!0?"side":"main"}`+(e.top===!0?" q-item__section--top justify-start":" justify-center")+(e.avatar===!0?" q-item__section--avatar":"")+(e.thumbnail===!0?" q-item__section--thumbnail":"")+(e.noWrap===!0?" q-item__section--nowrap":""));return()=>g("div",{class:o.value},A(t.default))}}),qe=x({name:"QItem",props:{...W,...oe,tag:{type:String,default:"div"},active:{type:Boolean,default:null},clickable:Boolean,dense:Boolean,insetLevel:Number,tabindex:[String,Number],focused:Boolean,manualFocus:Boolean},emits:["click","keyup"],setup(e,{slots:t,emit:o}){const{proxy:{$q:l}}=C(),n=Q(e,l),{hasLink:u,linkAttrs:a,linkClass:s,linkTag:d,navigateOnClick:p}=le(),c=I(null),b=I(null),y=f(()=>e.clickable===!0||u.value===!0||e.tag==="label"),v=f(()=>e.disable!==!0&&y.value===!0),q=f(()=>"q-item q-item-type row no-wrap"+(e.dense===!0?" q-item--dense":"")+(n.value===!0?" q-item--dark":"")+(u.value===!0&&e.active===null?s.value:e.active===!0?` q-item--active${e.activeClass!==void 0?` ${e.activeClass}`:""}`:"")+(e.disable===!0?" disabled":"")+(v.value===!0?" q-item--clickable q-link cursor-pointer "+(e.manualFocus===!0?"q-manual-focusable":"q-focusable q-hoverable")+(e.focused===!0?" q-manual-focusable--focused":""):"")),T=f(()=>{if(e.insetLevel===void 0)return null;const r=l.lang.rtl===!0?"Right":"Left";return{["padding"+r]:16+e.insetLevel*56+"px"}});function k(r){v.value===!0&&(b.value!==null&&(r.qKeyEvent!==!0&&document.activeElement===c.value?b.value.focus():document.activeElement===b.value&&c.value.focus()),p(r))}function E(r){if(v.value===!0&&ne(r,[13,32])===!0){Z(r),r.qKeyEvent=!0;const R=new MouseEvent("click",r);R.qKeyEvent=!0,c.value.dispatchEvent(R)}o("keyup",r)}function i(){const r=ie(t.default,[]);return v.value===!0&&r.unshift(g("div",{class:"q-focus-helper",tabindex:-1,ref:b})),r}return()=>{const r={ref:c,class:q.value,style:T.value,role:"listitem",onClick:k,onKeyup:E};return v.value===!0?(r.tabindex=e.tabindex||"0",Object.assign(r,a.value)):y.value===!0&&(r["aria-disabled"]="true"),g(d.value,r,i())}}});const fe={true:"inset",item:"item-inset","item-thumbnail":"item-thumbnail-inset"},P={xs:2,sm:4,md:8,lg:16,xl:24};var Se=x({name:"QSeparator",props:{...W,spaced:[Boolean,String],inset:[Boolean,String],vertical:Boolean,color:String,size:String},setup(e){const t=C(),o=Q(e,t.proxy.$q),l=f(()=>e.vertical===!0?"vertical":"horizontal"),n=f(()=>` q-separator--${l.value}`),u=f(()=>e.inset!==!1?`${n.value}-${fe[e.inset]}`:""),a=f(()=>`q-separator${n.value}${u.value}`+(e.color!==void 0?` bg-${e.color}`:"")+(o.value===!0?" q-separator--dark":"")),s=f(()=>{const d={};if(e.size!==void 0&&(d[e.vertical===!0?"width":"height"]=e.size),e.spaced!==!1){const p=e.spaced===!0?`${P.md}px`:e.spaced in P?`${P[e.spaced]}px`:e.spaced,c=e.vertical===!0?["Left","Right"]:["Top","Bottom"];d[`margin${c[0]}`]=d[`margin${c[1]}`]=p}return d});return()=>g("hr",{class:a.value,style:s.value,"aria-orientation":l.value})}}),Le=x({name:"QList",props:{...W,bordered:Boolean,dense:Boolean,separator:Boolean,padding:Boolean,tag:{type:String,default:"div"}},setup(e,{slots:t}){const o=C(),l=Q(e,o.proxy.$q),n=f(()=>"q-list"+(e.bordered===!0?" q-list--bordered":"")+(e.dense===!0?" q-list--dense":"")+(e.separator===!0?" q-list--separator":"")+(l.value===!0?" q-list--dark":"")+(e.padding===!0?" q-list--padding":""));return()=>g(e.tag,{class:n.value},A(t.default))}});const ve=[null,document,document.body,document.scrollingElement,document.documentElement];function xe(e,t){let o=re(t);if(o===void 0){if(e==null)return window;o=e.closest(".scroll,.scroll-y,.overflow-auto")}return ve.includes(o)?window:o}function G(e){return e===window?window.pageYOffset||window.scrollY||document.body.scrollTop||0:e.scrollTop}function J(e){return e===window?window.pageXOffset||window.scrollX||document.body.scrollLeft||0:e.scrollLeft}function ee(e,t,o=0){const l=arguments[3]===void 0?performance.now():arguments[3],n=G(e);if(o<=0){n!==t&&M(e,t);return}requestAnimationFrame(u=>{const a=u-l,s=n+(t-n)/Math.max(a,o)*a;M(e,s),s!==t&&ee(e,t,o-a,u)})}function te(e,t,o=0){const l=arguments[3]===void 0?performance.now():arguments[3],n=J(e);if(o<=0){n!==t&&z(e,t);return}requestAnimationFrame(u=>{const a=u-l,s=n+(t-n)/Math.max(a,o)*a;z(e,s),s!==t&&te(e,t,o-a,u)})}function M(e,t){if(e===window){window.scrollTo(window.pageXOffset||window.scrollX||document.body.scrollLeft||0,t);return}e.scrollTop=t}function z(e,t){if(e===window){window.scrollTo(t,window.pageYOffset||window.scrollY||document.body.scrollTop||0);return}e.scrollLeft=t}function Te(e,t,o){if(o){ee(e,t,o);return}M(e,t)}function ke(e,t,o){if(o){te(e,t,o);return}z(e,t)}let B;function Ee(){if(B!==void 0)return B;const e=document.createElement("p"),t=document.createElement("div");X(e,{width:"100%",height:"200px"}),X(t,{position:"absolute",top:"0px",left:"0px",visibility:"hidden",width:"200px",height:"150px",overflow:"hidden"}),t.appendChild(e),document.body.appendChild(t);const o=e.offsetWidth;t.style.overflow="scroll";let l=e.offsetWidth;return o===l&&(l=t.clientWidth),t.remove(),B=o-l,B}function me(e,t=!0){return!e||e.nodeType!==Node.ELEMENT_NODE?!1:t?e.scrollHeight>e.clientHeight&&(e.classList.contains("scroll")||e.classList.contains("overflow-auto")||["auto","scroll"].includes(window.getComputedStyle(e)["overflow-y"])):e.scrollWidth>e.clientWidth&&(e.classList.contains("scroll")||e.classList.contains("overflow-auto")||["auto","scroll"].includes(window.getComputedStyle(e)["overflow-x"]))}function Be(){if(window.getSelection!==void 0){const e=window.getSelection();e.empty!==void 0?e.empty():e.removeAllRanges!==void 0&&(e.removeAllRanges(),ae.is.mobile!==!0&&e.addRange(document.createRange()))}else document.selection!==void 0&&document.selection.empty()}function _e(e,t,o){return o<=t?t:Math.min(o,Math.max(t,e))}function Ce(e,t,o){if(o<=t)return t;const l=o-t+1;let n=t+(e-t)%l;return n<t&&(n=l+n),n===0?0:n}function Pe(e,t=2,o="0"){if(e==null)return e;const l=""+e;return l.length>=t?l:new Array(t-l.length+1).join(o)+l}function Ve(e,t,o){let l;function n(){l!==void 0&&(Y.remove(l),l=void 0)}return se(()=>{e.value===!0&&n()}),{removeFromHistory:n,addToHistory(){l={condition:()=>o.value===!0,handler:t},Y.add(l)}}}const $e={modelValue:{type:Boolean,default:null},"onUpdate:modelValue":[Function,Array]},He=["beforeShow","show","beforeHide","hide"];function Me({showing:e,canShow:t,hideOnRouteChange:o,handleShow:l,handleHide:n,processOnMount:u}){const a=C(),{props:s,emit:d,proxy:p}=a;let c;function b(i){e.value===!0?q(i):y(i)}function y(i){if(s.disable===!0||i!==void 0&&i.qAnchorHandled===!0||t!==void 0&&t(i)!==!0)return;const r=s["onUpdate:modelValue"]!==void 0;r===!0&&(d("update:modelValue",!0),c=i,F(()=>{c===i&&(c=void 0)})),(s.modelValue===null||r===!1)&&v(i)}function v(i){e.value!==!0&&(e.value=!0,d("beforeShow",i),l!==void 0?l(i):d("show",i))}function q(i){if(s.disable===!0)return;const r=s["onUpdate:modelValue"]!==void 0;r===!0&&(d("update:modelValue",!1),c=i,F(()=>{c===i&&(c=void 0)})),(s.modelValue===null||r===!1)&&T(i)}function T(i){e.value!==!1&&(e.value=!1,d("beforeHide",i),n!==void 0?n(i):d("hide",i))}function k(i){s.disable===!0&&i===!0?s["onUpdate:modelValue"]!==void 0&&d("update:modelValue",!1):i===!0!==e.value&&(i===!0?v:T)(c)}O(()=>s.modelValue,k),o!==void 0&&ue(a)===!0&&O(()=>p.$route.fullPath,()=>{o.value===!0&&e.value===!0&&q()}),u===!0&&ce(()=>{k(s.modelValue)});const E={show:y,hide:q,toggle:b};return Object.assign(p,E),E}let S=0,V,$,L,H=!1,U,j,D,w=null;function we(e){pe(e)&&Z(e)}function pe(e){if(e.target===document.body||e.target.classList.contains("q-layout__backdrop"))return!0;const t=de(e),o=e.shiftKey&&!e.deltaX,l=!o&&Math.abs(e.deltaX)<=Math.abs(e.deltaY),n=o||l?e.deltaY:e.deltaX;for(let u=0;u<t.length;u++){const a=t[u];if(me(a,l))return l?n<0&&a.scrollTop===0?!0:n>0&&a.scrollTop+a.clientHeight===a.scrollHeight:n<0&&a.scrollLeft===0?!0:n>0&&a.scrollLeft+a.clientWidth===a.scrollWidth}return!0}function K(e){e.target===document&&(document.scrollingElement.scrollTop=document.scrollingElement.scrollTop)}function _(e){H!==!0&&(H=!0,requestAnimationFrame(()=>{H=!1;const{height:t}=e.target,{clientHeight:o,scrollTop:l}=document.scrollingElement;(L===void 0||t!==window.innerHeight)&&(L=o-t,document.scrollingElement.scrollTop=l),l>L&&(document.scrollingElement.scrollTop-=Math.ceil((l-L)/8))}))}function N(e){const t=document.body,o=window.visualViewport!==void 0;if(e==="add"){const{overflowY:l,overflowX:n}=window.getComputedStyle(t);V=J(window),$=G(window),U=t.style.left,j=t.style.top,D=window.location.href,t.style.left=`-${V}px`,t.style.top=`-${$}px`,n!=="hidden"&&(n==="scroll"||t.scrollWidth>window.innerWidth)&&t.classList.add("q-body--force-scrollbar-x"),l!=="hidden"&&(l==="scroll"||t.scrollHeight>window.innerHeight)&&t.classList.add("q-body--force-scrollbar-y"),t.classList.add("q-body--prevent-scroll"),document.qScrollPrevented=!0,h.is.ios===!0&&(o===!0?(window.scrollTo(0,0),window.visualViewport.addEventListener("resize",_,m.passiveCapture),window.visualViewport.addEventListener("scroll",_,m.passiveCapture),window.scrollTo(0,0)):window.addEventListener("scroll",K,m.passiveCapture))}h.is.desktop===!0&&h.is.mac===!0&&window[`${e}EventListener`]("wheel",we,m.notPassive),e==="remove"&&(h.is.ios===!0&&(o===!0?(window.visualViewport.removeEventListener("resize",_,m.passiveCapture),window.visualViewport.removeEventListener("scroll",_,m.passiveCapture)):window.removeEventListener("scroll",K,m.passiveCapture)),t.classList.remove("q-body--prevent-scroll"),t.classList.remove("q-body--force-scrollbar-x"),t.classList.remove("q-body--force-scrollbar-y"),document.qScrollPrevented=!1,t.style.left=U,t.style.top=j,window.location.href===D&&window.scrollTo(V,$),L=void 0)}function be(e){let t="add";if(e===!0){if(S++,w!==null){clearTimeout(w),w=null;return}if(S>1)return}else{if(S===0||(S--,S>0))return;if(t="remove",h.is.ios===!0&&h.is.nativeMobile===!0){w!==null&&clearTimeout(w),w=setTimeout(()=>{N(t),w=null},100);return}}N(t)}function ze(){let e;return{preventBodyScroll(t){t!==e&&(e!==void 0||t===!0)&&(e=t,be(t))}}}var Ae=x({name:"QItemLabel",props:{overline:Boolean,caption:Boolean,header:Boolean,lines:[Number,String]},setup(e,{slots:t}){const o=f(()=>parseInt(e.lines,10)),l=f(()=>"q-item__label"+(e.overline===!0?" q-item__label--overline text-overline":"")+(e.caption===!0?" q-item__label--caption text-caption":"")+(e.header===!0?" q-item__label--header":"")+(o.value===1?" ellipsis":"")),n=f(()=>e.lines!==void 0&&o.value>1?{overflow:"hidden",display:"-webkit-box","-webkit-box-orient":"vertical","-webkit-line-clamp":o.value}:null);return()=>g("div",{style:n.value,class:l.value},A(t.default))}});export{qe as Q,G as a,J as b,Be as c,_e as d,ke as e,He as f,xe as g,Me as h,Ve as i,ze as j,Ee as k,ye as l,Ae as m,Le as n,Se as o,Pe as p,Ce as q,Te as s,$e as u};
