import{a as c,D as i,e as _,a6 as f,g as m,n as a,a7 as y,a8 as p,s as b}from"./index.692c5f09.js";const I={dark:{type:Boolean,default:null}};function w(t,n){return c(()=>t.dark===null?n.dark.isActive:t.dark)}function D(){let t=null;const n=m();function r(){t!==null&&(clearTimeout(t),t=null)}return i(r),_(r),{removeTimeout:r,registerTimeout(e,o){r(),f(n)===!1&&(t=setTimeout(()=>{t=null,e()},o))}}}function h(t){return y(t)===!0?"__q_date|"+t.toUTCString():p(t)===!0?"__q_expr|"+t.source:typeof t=="number"?"__q_numb|"+t:typeof t=="boolean"?"__q_bool|"+(t?"1":"0"):typeof t=="string"?"__q_strn|"+t:typeof t=="function"?"__q_strn|"+t.toString():t===Object(t)?"__q_objt|"+JSON.stringify(t):t}function d(t){if(t.length<9)return t;const r=t.substring(0,8),e=t.substring(9);switch(r){case"__q_date":return new Date(e);case"__q_expr":return new RegExp(e);case"__q_numb":return Number(e);case"__q_bool":return Boolean(e==="1");case"__q_strn":return""+e;case"__q_objt":return JSON.parse(e);default:return t}}function q(){const t=()=>null;return{has:()=>!1,getLength:()=>0,getItem:t,getIndex:t,getKey:t,getAll:()=>{},getAllKeys:()=>[],set:a,remove:a,clear:a,isEmpty:()=>!0}}function k(t){const n=window[t+"Storage"],r=e=>{const o=n.getItem(e);return o?d(o):null};return{has:e=>n.getItem(e)!==null,getLength:()=>n.length,getItem:r,getIndex:e=>e<n.length?r(n.key(e)):null,getKey:e=>e<n.length?n.key(e):null,getAll:()=>{let e;const o={},s=n.length;for(let u=0;u<s;u++)e=n.key(u),o[e]=r(e);return o},getAllKeys:()=>{const e=[],o=n.length;for(let s=0;s<o;s++)e.push(n.key(s));return e},set:(e,o)=>{n.setItem(e,h(o))},remove:e=>{n.removeItem(e)},clear:()=>{n.clear()},isEmpty:()=>n.length===0}}const l=b.has.webStorage===!1?q():k("local"),g={install({$q:t}){t.localStorage=l}};Object.assign(g,l);var x=g,T=(t,n)=>{const r=t.__vccOpts||t;for(const[e,o]of n)r[e]=o;return r};export{x as L,T as _,w as a,D as b,I as u};
