"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[186],{28670:function(e,t,n){n.d(t,{Z:function(){return r}});/**
 * @license lucide-react v0.335.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let r=(0,n(87461).Z)("Search",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]])},52235:function(e,t,n){n.d(t,{Z:function(){return r}});/**
 * @license lucide-react v0.335.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let r=(0,n(87461).Z)("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]])},63124:function(e,t,n){let r,l;n.d(t,{mY:function(){return e4}});var o=/[\\\/_+.#"@\[\(\{&]/,u=/[\\\/_+.#"@\[\(\{&]/g,a=/[\s-]/,i=/[\s-]/g;function c(e){return e.toLowerCase().replace(i," ")}var s=n(14749),d=n(64090),f=n.t(d,2);function v(e,t){let{checkForDefaultPrevented:n=!0}=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return function(r){if(null==e||e(r),!1===n||!r.defaultPrevented)return null==t?void 0:t(r)}}function m(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return e=>t.forEach(t=>{"function"==typeof t?t(e):null!=t&&(t.current=e)})}function p(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return(0,d.useCallback)(m(...t),t)}let h=(null==globalThis?void 0:globalThis.document)?d.useLayoutEffect:()=>{},E=f["useId".toString()]||(()=>void 0),g=0;function b(e){let[t,n]=d.useState(E());return h(()=>{e||n(e=>null!=e?e:String(g++))},[e]),e||(t?"radix-".concat(t):"")}function y(e){let t=(0,d.useRef)(e);return(0,d.useEffect)(()=>{t.current=e}),(0,d.useMemo)(()=>function(){for(var e,n=arguments.length,r=Array(n),l=0;l<n;l++)r[l]=arguments[l];return null===(e=t.current)||void 0===e?void 0:e.call(t,...r)},[])}var w=n(89542);let C=(0,d.forwardRef)((e,t)=>{let{children:n,...r}=e,l=d.Children.toArray(n),o=l.find(k);if(o){let e=o.props.children,n=l.map(t=>t!==o?t:d.Children.count(e)>1?d.Children.only(null):(0,d.isValidElement)(e)?e.props.children:null);return(0,d.createElement)(S,(0,s.Z)({},r,{ref:t}),(0,d.isValidElement)(e)?(0,d.cloneElement)(e,void 0,n):null)}return(0,d.createElement)(S,(0,s.Z)({},r,{ref:t}),n)});C.displayName="Slot";let S=(0,d.forwardRef)((e,t)=>{let{children:n,...r}=e;return(0,d.isValidElement)(n)?(0,d.cloneElement)(n,{...function(e,t){let n={...t};for(let r in t){let l=e[r],o=t[r];/^on[A-Z]/.test(r)?n[r]=function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];null==o||o(...t),null==l||l(...t)}:"style"===r?n[r]={...l,...o}:"className"===r&&(n[r]=[l,o].filter(Boolean).join(" "))}return{...e,...n}}(r,n.props),ref:m(t,n.ref)}):d.Children.count(n)>1?d.Children.only(null):null});S.displayName="SlotClone";let R=e=>{let{children:t}=e;return(0,d.createElement)(d.Fragment,null,t)};function k(e){return(0,d.isValidElement)(e)&&e.type===R}let N=["a","button","div","h2","h3","img","li","nav","ol","p","span","svg","ul"].reduce((e,t)=>{let n=(0,d.forwardRef)((e,n)=>{let{asChild:r,...l}=e,o=r?C:t;return(0,d.useEffect)(()=>{window[Symbol.for("radix-ui")]=!0},[]),(0,d.createElement)(o,(0,s.Z)({},l,{ref:n}))});return n.displayName="Primitive.".concat(t),{...e,[t]:n}},{}),A="dismissableLayer.update",D=(0,d.createContext)({layers:new Set,layersWithOutsidePointerEventsDisabled:new Set,branches:new Set}),L=(0,d.forwardRef)((e,t)=>{let{disableOutsidePointerEvents:n=!1,onEscapeKeyDown:l,onPointerDownOutside:o,onFocusOutside:u,onInteractOutside:a,onDismiss:i,...c}=e,f=(0,d.useContext)(D),[m,h]=(0,d.useState)(null),[,E]=(0,d.useState)({}),g=p(t,e=>h(e)),b=Array.from(f.layers),[w]=[...f.layersWithOutsidePointerEventsDisabled].slice(-1),C=b.indexOf(w),S=m?b.indexOf(m):-1,R=f.layersWithOutsidePointerEventsDisabled.size>0,k=S>=C,L=function(e){let t=y(e),n=(0,d.useRef)(!1),r=(0,d.useRef)(()=>{});return(0,d.useEffect)(()=>{let e=e=>{if(e.target&&!n.current){let n={originalEvent:e};function l(){O("dismissableLayer.pointerDownOutside",t,n,{discrete:!0})}"touch"===e.pointerType?(document.removeEventListener("click",r.current),r.current=l,document.addEventListener("click",r.current,{once:!0})):l()}n.current=!1},l=window.setTimeout(()=>{document.addEventListener("pointerdown",e)},0);return()=>{window.clearTimeout(l),document.removeEventListener("pointerdown",e),document.removeEventListener("click",r.current)}},[t]),{onPointerDownCapture:()=>n.current=!0}}(e=>{let t=e.target,n=[...f.branches].some(e=>e.contains(t));!k||n||(null==o||o(e),null==a||a(e),e.defaultPrevented||null==i||i())}),I=function(e){let t=y(e),n=(0,d.useRef)(!1);return(0,d.useEffect)(()=>{let e=e=>{e.target&&!n.current&&O("dismissableLayer.focusOutside",t,{originalEvent:e},{discrete:!1})};return document.addEventListener("focusin",e),()=>document.removeEventListener("focusin",e)},[t]),{onFocusCapture:()=>n.current=!0,onBlurCapture:()=>n.current=!1}}(e=>{let t=e.target;[...f.branches].some(e=>e.contains(t))||(null==u||u(e),null==a||a(e),e.defaultPrevented||null==i||i())});return!function(e){let t=y(e);(0,d.useEffect)(()=>{let e=e=>{"Escape"===e.key&&t(e)};return document.addEventListener("keydown",e),()=>document.removeEventListener("keydown",e)},[t])}(e=>{S!==f.layers.size-1||(null==l||l(e),!e.defaultPrevented&&i&&(e.preventDefault(),i()))}),(0,d.useEffect)(()=>{if(m)return n&&(0===f.layersWithOutsidePointerEventsDisabled.size&&(r=document.body.style.pointerEvents,document.body.style.pointerEvents="none"),f.layersWithOutsidePointerEventsDisabled.add(m)),f.layers.add(m),P(),()=>{n&&1===f.layersWithOutsidePointerEventsDisabled.size&&(document.body.style.pointerEvents=r)}},[m,n,f]),(0,d.useEffect)(()=>()=>{m&&(f.layers.delete(m),f.layersWithOutsidePointerEventsDisabled.delete(m),P())},[m,f]),(0,d.useEffect)(()=>{let e=()=>E({});return document.addEventListener(A,e),()=>document.removeEventListener(A,e)},[]),(0,d.createElement)(N.div,(0,s.Z)({},c,{ref:g,style:{pointerEvents:R?k?"auto":"none":void 0,...e.style},onFocusCapture:v(e.onFocusCapture,I.onFocusCapture),onBlurCapture:v(e.onBlurCapture,I.onBlurCapture),onPointerDownCapture:v(e.onPointerDownCapture,L.onPointerDownCapture)}))});function P(){let e=new CustomEvent(A);document.dispatchEvent(e)}function O(e,t,n,r){let{discrete:l}=r,o=n.originalEvent.target,u=new CustomEvent(e,{bubbles:!1,cancelable:!0,detail:n});(t&&o.addEventListener(e,t,{once:!0}),l)?o&&(0,w.flushSync)(()=>o.dispatchEvent(u)):o.dispatchEvent(u)}let I="focusScope.autoFocusOnMount",M="focusScope.autoFocusOnUnmount",T={bubbles:!1,cancelable:!0},x=(0,d.forwardRef)((e,t)=>{let{loop:n=!1,trapped:r=!1,onMountAutoFocus:l,onUnmountAutoFocus:o,...u}=e,[a,i]=(0,d.useState)(null),c=y(l),f=y(o),v=(0,d.useRef)(null),m=p(t,e=>i(e)),h=(0,d.useRef)({paused:!1,pause(){this.paused=!0},resume(){this.paused=!1}}).current;(0,d.useEffect)(()=>{if(r){function e(e){if(h.paused||!a)return;let t=e.target;a.contains(t)?v.current=t:Z(v.current,{select:!0})}function t(e){h.paused||!a||a.contains(e.relatedTarget)||Z(v.current,{select:!0})}return document.addEventListener("focusin",e),document.addEventListener("focusout",t),()=>{document.removeEventListener("focusin",e),document.removeEventListener("focusout",t)}}},[r,a,h.paused]),(0,d.useEffect)(()=>{if(a){K.add(h);let e=document.activeElement;if(!a.contains(e)){let t=new CustomEvent(I,T);a.addEventListener(I,c),a.dispatchEvent(t),t.defaultPrevented||(function(e){let{select:t=!1}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=document.activeElement;for(let r of e)if(Z(r,{select:t}),document.activeElement!==n)return}(F(a).filter(e=>"A"!==e.tagName),{select:!0}),document.activeElement===e&&Z(a))}return()=>{a.removeEventListener(I,c),setTimeout(()=>{let t=new CustomEvent(M,T);a.addEventListener(M,f),a.dispatchEvent(t),t.defaultPrevented||Z(null!=e?e:document.body,{select:!0}),a.removeEventListener(M,f),K.remove(h)},0)}}},[a,c,f,h]);let E=(0,d.useCallback)(e=>{if(!n&&!r||h.paused)return;let t="Tab"===e.key&&!e.altKey&&!e.ctrlKey&&!e.metaKey,l=document.activeElement;if(t&&l){let t=e.currentTarget,[r,o]=function(e){let t=F(e);return[_(t,e),_(t.reverse(),e)]}(t);r&&o?e.shiftKey||l!==o?e.shiftKey&&l===r&&(e.preventDefault(),n&&Z(o,{select:!0})):(e.preventDefault(),n&&Z(r,{select:!0})):l===t&&e.preventDefault()}},[n,r,h.paused]);return(0,d.createElement)(N.div,(0,s.Z)({tabIndex:-1},u,{ref:m,onKeyDown:E}))});function F(e){let t=[],n=document.createTreeWalker(e,NodeFilter.SHOW_ELEMENT,{acceptNode:e=>{let t="INPUT"===e.tagName&&"hidden"===e.type;return e.disabled||e.hidden||t?NodeFilter.FILTER_SKIP:e.tabIndex>=0?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_SKIP}});for(;n.nextNode();)t.push(n.currentNode);return t}function _(e,t){for(let n of e)if(!function(e,t){let{upTo:n}=t;if("hidden"===getComputedStyle(e).visibility)return!0;for(;e&&(void 0===n||e!==n);){if("none"===getComputedStyle(e).display)return!0;e=e.parentElement}return!1}(n,{upTo:t}))return n}function Z(e){let{select:t=!1}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(e&&e.focus){var n;let r=document.activeElement;e.focus({preventScroll:!0}),e!==r&&(n=e)instanceof HTMLInputElement&&"select"in n&&t&&e.select()}}let K=(l=[],{add(e){let t=l[0];e!==t&&(null==t||t.pause()),(l=W(l,e)).unshift(e)},remove(e){var t;null===(t=(l=W(l,e))[0])||void 0===t||t.resume()}});function W(e,t){let n=[...e],r=n.indexOf(t);return -1!==r&&n.splice(r,1),n}let U=(0,d.forwardRef)((e,t)=>{var n;let{container:r=null==globalThis?void 0:null===(n=globalThis.document)||void 0===n?void 0:n.body,...l}=e;return r?w.createPortal((0,d.createElement)(N.div,(0,s.Z)({},l,{ref:t})),r):null}),q=e=>{let{present:t,children:n}=e,r=function(e){var t,n;let[r,l]=(0,d.useState)(),o=(0,d.useRef)({}),u=(0,d.useRef)(e),a=(0,d.useRef)("none"),[i,c]=(t=e?"mounted":"unmounted",n={mounted:{UNMOUNT:"unmounted",ANIMATION_OUT:"unmountSuspended"},unmountSuspended:{MOUNT:"mounted",ANIMATION_END:"unmounted"},unmounted:{MOUNT:"mounted"}},(0,d.useReducer)((e,t)=>{let r=n[e][t];return null!=r?r:e},t));return(0,d.useEffect)(()=>{let e=B(o.current);a.current="mounted"===i?e:"none"},[i]),h(()=>{let t=o.current,n=u.current;if(n!==e){let r=a.current,l=B(t);e?c("MOUNT"):"none"===l||(null==t?void 0:t.display)==="none"?c("UNMOUNT"):n&&r!==l?c("ANIMATION_OUT"):c("UNMOUNT"),u.current=e}},[e,c]),h(()=>{if(r){let e=e=>{let t=B(o.current).includes(e.animationName);e.target===r&&t&&(0,w.flushSync)(()=>c("ANIMATION_END"))},t=e=>{e.target===r&&(a.current=B(o.current))};return r.addEventListener("animationstart",t),r.addEventListener("animationcancel",e),r.addEventListener("animationend",e),()=>{r.removeEventListener("animationstart",t),r.removeEventListener("animationcancel",e),r.removeEventListener("animationend",e)}}c("ANIMATION_END")},[r,c]),{isPresent:["mounted","unmountSuspended"].includes(i),ref:(0,d.useCallback)(e=>{e&&(o.current=getComputedStyle(e)),l(e)},[])}}(t),l="function"==typeof n?n({present:r.isPresent}):d.Children.only(n),o=p(r.ref,l.ref);return"function"==typeof n||r.isPresent?(0,d.cloneElement)(l,{ref:o}):null};function B(e){return(null==e?void 0:e.animationName)||"none"}q.displayName="Presence";let j=0;function z(){let e=document.createElement("span");return e.setAttribute("data-radix-focus-guard",""),e.tabIndex=0,e.style.cssText="outline: none; opacity: 0; position: fixed; pointer-events: none",e}var V=n(69703),Y=n(84814),X=n(42022),H=(0,n(52804)._)(),G=function(){},J=d.forwardRef(function(e,t){var n=d.useRef(null),r=d.useState({onScrollCapture:G,onWheelCapture:G,onTouchMoveCapture:G}),l=r[0],o=r[1],u=e.forwardProps,a=e.children,i=e.className,c=e.removeScrollBar,s=e.enabled,f=e.shards,v=e.sideCar,m=e.noIsolation,p=e.inert,h=e.allowPinchZoom,E=e.as,g=(0,V._T)(e,["forwardProps","children","className","removeScrollBar","enabled","shards","sideCar","noIsolation","inert","allowPinchZoom","as"]),b=(0,X.q)([n,t]),y=(0,V.pi)((0,V.pi)({},g),l);return d.createElement(d.Fragment,null,s&&d.createElement(v,{sideCar:H,removeScrollBar:c,shards:f,noIsolation:m,inert:p,setCallbacks:o,allowPinchZoom:!!h,lockRef:n}),u?d.cloneElement(d.Children.only(a),(0,V.pi)((0,V.pi)({},y),{ref:b})):d.createElement(void 0===E?"div":E,(0,V.pi)({},y,{className:i,ref:b}),a))});J.defaultProps={enabled:!0,removeScrollBar:!0,inert:!1},J.classNames={fullWidth:Y.zi,zeroRight:Y.pF};var Q=n(29074),$=n(58387),ee=n(68109),et=!1;try{var en=Object.defineProperty({},"passive",{get:function(){return et=!0,!0}});window.addEventListener("test",en,en),window.removeEventListener("test",en,en)}catch(e){et=!1}var er=!!et&&{passive:!1},el=function(e){var t=window.getComputedStyle(e);return"hidden"!==t.overflowY&&!(t.overflowY===t.overflowX&&"visible"===t.overflowY)},eo=function(e){var t=window.getComputedStyle(e);return"hidden"!==t.overflowX&&!(t.overflowY===t.overflowX&&"visible"===t.overflowX)},eu=function(e,t){var n=t;do{if("undefined"!=typeof ShadowRoot&&n instanceof ShadowRoot&&(n=n.host),ea(e,n)){var r=ei(e,n);if(r[1]>r[2])return!0}n=n.parentNode}while(n&&n!==document.body);return!1},ea=function(e,t){return"v"===e?el(t):eo(t)},ei=function(e,t){return"v"===e?[t.scrollTop,t.scrollHeight,t.clientHeight]:[t.scrollLeft,t.scrollWidth,t.clientWidth]},ec=function(e,t,n,r,l){var o,u=(o=window.getComputedStyle(t).direction,"h"===e&&"rtl"===o?-1:1),a=u*r,i=n.target,c=t.contains(i),s=!1,d=a>0,f=0,v=0;do{var m=ei(e,i),p=m[0],h=m[1]-m[2]-u*p;(p||h)&&ea(e,i)&&(f+=h,v+=p),i=i.parentNode}while(!c&&i!==document.body||c&&(t.contains(i)||t===i));return d&&(l&&0===f||!l&&a>f)?s=!0:!d&&(l&&0===v||!l&&-a>v)&&(s=!0),s},es=function(e){return"changedTouches"in e?[e.changedTouches[0].clientX,e.changedTouches[0].clientY]:[0,0]},ed=function(e){return[e.deltaX,e.deltaY]},ef=function(e){return e&&"current"in e?e.current:e},ev=0,em=[],ep=(0,Q.L)(H,function(e){var t=d.useRef([]),n=d.useRef([0,0]),r=d.useRef(),l=d.useState(ev++)[0],o=d.useState(function(){return(0,ee.Ws)()})[0],u=d.useRef(e);d.useEffect(function(){u.current=e},[e]),d.useEffect(function(){if(e.inert){document.body.classList.add("block-interactivity-".concat(l));var t=(0,V.ev)([e.lockRef.current],(e.shards||[]).map(ef),!0).filter(Boolean);return t.forEach(function(e){return e.classList.add("allow-interactivity-".concat(l))}),function(){document.body.classList.remove("block-interactivity-".concat(l)),t.forEach(function(e){return e.classList.remove("allow-interactivity-".concat(l))})}}},[e.inert,e.lockRef.current,e.shards]);var a=d.useCallback(function(e,t){if("touches"in e&&2===e.touches.length)return!u.current.allowPinchZoom;var l,o=es(e),a=n.current,i="deltaX"in e?e.deltaX:a[0]-o[0],c="deltaY"in e?e.deltaY:a[1]-o[1],s=e.target,d=Math.abs(i)>Math.abs(c)?"h":"v";if("touches"in e&&"h"===d&&"range"===s.type)return!1;var f=eu(d,s);if(!f)return!0;if(f?l=d:(l="v"===d?"h":"v",f=eu(d,s)),!f)return!1;if(!r.current&&"changedTouches"in e&&(i||c)&&(r.current=l),!l)return!0;var v=r.current||l;return ec(v,t,e,"h"===v?i:c,!0)},[]),i=d.useCallback(function(e){if(em.length&&em[em.length-1]===o){var n="deltaY"in e?ed(e):es(e),r=t.current.filter(function(t){var r;return t.name===e.type&&t.target===e.target&&(r=t.delta)[0]===n[0]&&r[1]===n[1]})[0];if(r&&r.should){e.preventDefault();return}if(!r){var l=(u.current.shards||[]).map(ef).filter(Boolean).filter(function(t){return t.contains(e.target)});(l.length>0?a(e,l[0]):!u.current.noIsolation)&&e.preventDefault()}}},[]),c=d.useCallback(function(e,n,r,l){var o={name:e,delta:n,target:r,should:l};t.current.push(o),setTimeout(function(){t.current=t.current.filter(function(e){return e!==o})},1)},[]),s=d.useCallback(function(e){n.current=es(e),r.current=void 0},[]),f=d.useCallback(function(t){c(t.type,ed(t),t.target,a(t,e.lockRef.current))},[]),v=d.useCallback(function(t){c(t.type,es(t),t.target,a(t,e.lockRef.current))},[]);d.useEffect(function(){return em.push(o),e.setCallbacks({onScrollCapture:f,onWheelCapture:f,onTouchMoveCapture:v}),document.addEventListener("wheel",i,er),document.addEventListener("touchmove",i,er),document.addEventListener("touchstart",s,er),function(){em=em.filter(function(e){return e!==o}),document.removeEventListener("wheel",i,er),document.removeEventListener("touchmove",i,er),document.removeEventListener("touchstart",s,er)}},[]);var m=e.removeScrollBar,p=e.inert;return d.createElement(d.Fragment,null,p?d.createElement(o,{styles:"\n  .block-interactivity-".concat(l," {pointer-events: none;}\n  .allow-interactivity-").concat(l," {pointer-events: all;}\n")}):null,m?d.createElement($.jp,{gapMode:"margin"}):null)}),eh=d.forwardRef(function(e,t){return d.createElement(J,(0,V.pi)({},e,{ref:t,sideCar:ep}))});eh.classNames=J.classNames;var eE=n(66674);let eg="Dialog",[eb,ey]=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],n=[],r=()=>{let t=n.map(e=>(0,d.createContext)(e));return function(n){let r=(null==n?void 0:n[e])||t;return(0,d.useMemo)(()=>({["__scope".concat(e)]:{...n,[e]:r}}),[n,r])}};return r.scopeName=e,[function(t,r){let l=(0,d.createContext)(r),o=n.length;function u(t){let{scope:n,children:r,...u}=t,a=(null==n?void 0:n[e][o])||l,i=(0,d.useMemo)(()=>u,Object.values(u));return(0,d.createElement)(a.Provider,{value:i},r)}return n=[...n,r],u.displayName=t+"Provider",[u,function(n,u){let a=(null==u?void 0:u[e][o])||l,i=(0,d.useContext)(a);if(i)return i;if(void 0!==r)return r;throw Error("`".concat(n,"` must be used within `").concat(t,"`"))}]},function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];let r=t[0];if(1===t.length)return r;let l=()=>{let e=t.map(e=>({useScope:e(),scopeName:e.scopeName}));return function(t){let n=e.reduce((e,n)=>{let{useScope:r,scopeName:l}=n,o=r(t)["__scope".concat(l)];return{...e,...o}},{});return(0,d.useMemo)(()=>({["__scope".concat(r.scopeName)]:n}),[n])}};return l.scopeName=r.scopeName,l}(r,...t)]}(eg),[ew,eC]=eb(eg),eS="DialogPortal",[eR,ek]=eb(eS,{forceMount:void 0}),eN="DialogOverlay",eA=(0,d.forwardRef)((e,t)=>{let n=ek(eN,e.__scopeDialog),{forceMount:r=n.forceMount,...l}=e,o=eC(eN,e.__scopeDialog);return o.modal?(0,d.createElement)(q,{present:r||o.open},(0,d.createElement)(eD,(0,s.Z)({},l,{ref:t}))):null}),eD=(0,d.forwardRef)((e,t)=>{let{__scopeDialog:n,...r}=e,l=eC(eN,n);return(0,d.createElement)(eh,{as:C,allowPinchZoom:!0,shards:[l.contentRef]},(0,d.createElement)(N.div,(0,s.Z)({"data-state":eT(l.open)},r,{ref:t,style:{pointerEvents:"auto",...r.style}})))}),eL="DialogContent",eP=(0,d.forwardRef)((e,t)=>{let n=ek(eL,e.__scopeDialog),{forceMount:r=n.forceMount,...l}=e,o=eC(eL,e.__scopeDialog);return(0,d.createElement)(q,{present:r||o.open},o.modal?(0,d.createElement)(eO,(0,s.Z)({},l,{ref:t})):(0,d.createElement)(eI,(0,s.Z)({},l,{ref:t})))}),eO=(0,d.forwardRef)((e,t)=>{let n=eC(eL,e.__scopeDialog),r=(0,d.useRef)(null),l=p(t,n.contentRef,r);return(0,d.useEffect)(()=>{let e=r.current;if(e)return(0,eE.Ry)(e)},[]),(0,d.createElement)(eM,(0,s.Z)({},e,{ref:l,trapFocus:n.open,disableOutsidePointerEvents:!0,onCloseAutoFocus:v(e.onCloseAutoFocus,e=>{var t;e.preventDefault(),null===(t=n.triggerRef.current)||void 0===t||t.focus()}),onPointerDownOutside:v(e.onPointerDownOutside,e=>{let t=e.detail.originalEvent,n=0===t.button&&!0===t.ctrlKey;(2===t.button||n)&&e.preventDefault()}),onFocusOutside:v(e.onFocusOutside,e=>e.preventDefault())}))}),eI=(0,d.forwardRef)((e,t)=>{let n=eC(eL,e.__scopeDialog),r=(0,d.useRef)(!1);return(0,d.createElement)(eM,(0,s.Z)({},e,{ref:t,trapFocus:!1,disableOutsidePointerEvents:!1,onCloseAutoFocus:t=>{var l,o;null===(l=e.onCloseAutoFocus)||void 0===l||l.call(e,t),t.defaultPrevented||(r.current||null===(o=n.triggerRef.current)||void 0===o||o.focus(),t.preventDefault()),r.current=!1},onInteractOutside:t=>{var l,o;null===(l=e.onInteractOutside)||void 0===l||l.call(e,t),t.defaultPrevented||(r.current=!0);let u=t.target;(null===(o=n.triggerRef.current)||void 0===o?void 0:o.contains(u))&&t.preventDefault()}}))}),eM=(0,d.forwardRef)((e,t)=>{let{__scopeDialog:n,trapFocus:r,onOpenAutoFocus:l,onCloseAutoFocus:o,...u}=e,a=eC(eL,n),i=p(t,(0,d.useRef)(null));return(0,d.useEffect)(()=>{var e,t;let n=document.querySelectorAll("[data-radix-focus-guard]");return document.body.insertAdjacentElement("afterbegin",null!==(e=n[0])&&void 0!==e?e:z()),document.body.insertAdjacentElement("beforeend",null!==(t=n[1])&&void 0!==t?t:z()),j++,()=>{1===j&&document.querySelectorAll("[data-radix-focus-guard]").forEach(e=>e.remove()),j--}},[]),(0,d.createElement)(d.Fragment,null,(0,d.createElement)(x,{asChild:!0,loop:!0,trapped:r,onMountAutoFocus:l,onUnmountAutoFocus:o},(0,d.createElement)(L,(0,s.Z)({role:"dialog",id:a.contentId,"aria-describedby":a.descriptionId,"aria-labelledby":a.titleId,"data-state":eT(a.open)},u,{ref:i,onDismiss:()=>a.onOpenChange(!1)}))),!1)});function eT(e){return e?"open":"closed"}let[ex,eF]=function(e,t){let n=(0,d.createContext)(t);function r(e){let{children:t,...r}=e,l=(0,d.useMemo)(()=>r,Object.values(r));return(0,d.createElement)(n.Provider,{value:l},t)}return r.displayName=e+"Provider",[r,function(r){let l=(0,d.useContext)(n);if(l)return l;if(void 0!==t)return t;throw Error("`".concat(r,"` must be used within `").concat(e,"`"))}]}("DialogTitleWarning",{contentName:eL,titleName:"DialogTitle",docsSlug:"dialog"}),e_=e=>{let{__scopeDialog:t,children:n,open:r,defaultOpen:l,onOpenChange:o,modal:u=!0}=e,a=(0,d.useRef)(null),i=(0,d.useRef)(null),[c=!1,s]=function(e){let{prop:t,defaultProp:n,onChange:r=()=>{}}=e,[l,o]=function(e){let{defaultProp:t,onChange:n}=e,r=(0,d.useState)(t),[l]=r,o=(0,d.useRef)(l),u=y(n);return(0,d.useEffect)(()=>{o.current!==l&&(u(l),o.current=l)},[l,o,u]),r}({defaultProp:n,onChange:r}),u=void 0!==t,a=u?t:l,i=y(r);return[a,(0,d.useCallback)(e=>{if(u){let n="function"==typeof e?e(t):e;n!==t&&i(n)}else o(e)},[u,t,o,i])]}({prop:r,defaultProp:l,onChange:o});return(0,d.createElement)(ew,{scope:t,triggerRef:a,contentRef:i,contentId:b(),titleId:b(),descriptionId:b(),open:c,onOpenChange:s,onOpenToggle:(0,d.useCallback)(()=>s(e=>!e),[s]),modal:u},n)},eZ=e=>{let{__scopeDialog:t,forceMount:n,children:r,container:l}=e,o=eC(eS,t);return(0,d.createElement)(eR,{scope:t,forceMount:n},d.Children.map(r,e=>(0,d.createElement)(q,{present:n||o.open},(0,d.createElement)(U,{asChild:!0,container:l},e))))};var eK='[cmdk-group=""]',eW='[cmdk-group-items=""]',eU='[cmdk-item=""]',eq="".concat(eU,':not([aria-disabled="true"])'),eB="cmdk-item-select",ej="data-value",ez=(e,t)=>(function e(t,n,r,l,c,s,d){if(s===n.length)return c===t.length?1:.99;var f="".concat(c,",").concat(s);if(void 0!==d[f])return d[f];for(var v,m,p,h,E=l.charAt(s),g=r.indexOf(E,c),b=0;g>=0;)(v=e(t,n,r,l,g+1,s+1,d))>b&&(g===c?v*=1:o.test(t.charAt(g-1))?(v*=.8,(p=t.slice(c,g-1).match(u))&&c>0&&(v*=Math.pow(.999,p.length))):a.test(t.charAt(g-1))?(v*=.9,(h=t.slice(c,g-1).match(i))&&c>0&&(v*=Math.pow(.999,h.length))):(v*=.17,c>0&&(v*=Math.pow(.999,g-c))),t.charAt(g)!==n.charAt(s)&&(v*=.9999)),(v<.1&&r.charAt(g-1)===l.charAt(s+1)||l.charAt(s+1)===l.charAt(s)&&r.charAt(g-1)!==l.charAt(s))&&.1*(m=e(t,n,r,l,g+1,s+2,d))>v&&(v=.1*m),v>b&&(b=v),g=r.indexOf(E,g+1);return d[f]=b,b})(e,t,c(e),c(t),0,0,{}),eV=d.createContext(void 0),eY=()=>d.useContext(eV),eX=d.createContext(void 0),eH=()=>d.useContext(eX),eG=d.createContext(void 0),eJ=d.forwardRef((e,t)=>{let n=d.useRef(null),r=e7(()=>{var t,n,r;return{search:"",value:null!=(r=null!=(n=e.value)?n:null==(t=e.defaultValue)?void 0:t.toLowerCase())?r:"",filtered:{count:0,items:new Map,groups:new Set}}}),l=e7(()=>new Set),o=e7(()=>new Map),u=e7(()=>new Map),a=e7(()=>new Set),i=e6(e),{label:c,children:s,value:f,onValueChange:v,filter:m,shouldFilter:p,vimBindings:h=!0,...E}=e,g=d.useId(),b=d.useId(),y=d.useId(),w=tt();e8(()=>{if(void 0!==f){let e=f.trim().toLowerCase();r.current.value=e,w(6,D),C.emit()}},[f]);let C=d.useMemo(()=>({subscribe:e=>(a.current.add(e),()=>a.current.delete(e)),snapshot:()=>r.current,setState:(e,t,n)=>{var l,o,u;if(!Object.is(r.current[e],t)){if(r.current[e]=t,"search"===e)A(),k(),w(1,N);else if("value"===e){if((null==(l=i.current)?void 0:l.value)!==void 0){null==(u=(o=i.current).onValueChange)||u.call(o,null!=t?t:"");return}n||w(5,D)}C.emit()}},emit:()=>{a.current.forEach(e=>e())}}),[]),S=d.useMemo(()=>({value:(e,t)=>{t!==u.current.get(e)&&(u.current.set(e,t),r.current.filtered.items.set(e,R(t)),w(2,()=>{k(),C.emit()}))},item:(e,t)=>(l.current.add(e),t&&(o.current.has(t)?o.current.get(t).add(e):o.current.set(t,new Set([e]))),w(3,()=>{A(),k(),r.current.value||N(),C.emit()}),()=>{u.current.delete(e),l.current.delete(e),r.current.filtered.items.delete(e);let t=L();w(4,()=>{A(),(null==t?void 0:t.getAttribute("id"))===e&&N(),C.emit()})}),group:e=>(o.current.has(e)||o.current.set(e,new Set),()=>{u.current.delete(e),o.current.delete(e)}),filter:()=>i.current.shouldFilter,label:c||e["aria-label"],commandRef:n,listId:g,inputId:y,labelId:b}),[]);function R(e){var t,n;let l=null!=(n=null==(t=i.current)?void 0:t.filter)?n:ez;return e?l(e,r.current.search):0}function k(){if(!n.current||!r.current.search||!1===i.current.shouldFilter)return;let e=r.current.filtered.items,t=[];r.current.filtered.groups.forEach(n=>{let r=o.current.get(n),l=0;r.forEach(t=>{l=Math.max(e.get(t),l)}),t.push([n,l])});let l=n.current.querySelector('[cmdk-list-sizer=""]');P().sort((t,n)=>{var r,l;let o=t.getAttribute(ej),u=n.getAttribute(ej);return(null!=(r=e.get(u))?r:0)-(null!=(l=e.get(o))?l:0)}).forEach(e=>{let t=e.closest(eW);t?t.appendChild(e.parentElement===t?e:e.closest("".concat(eW," > *"))):l.appendChild(e.parentElement===l?e:e.closest("".concat(eW," > *")))}),t.sort((e,t)=>t[1]-e[1]).forEach(e=>{let t=n.current.querySelector("".concat(eK,"[").concat(ej,'="').concat(e[0],'"]'));null==t||t.parentElement.appendChild(t)})}function N(){let e=P().find(e=>!e.ariaDisabled),t=null==e?void 0:e.getAttribute(ej);C.setState("value",t||void 0)}function A(){if(!r.current.search||!1===i.current.shouldFilter){r.current.filtered.count=l.current.size;return}r.current.filtered.groups=new Set;let e=0;for(let t of l.current){let n=R(u.current.get(t));r.current.filtered.items.set(t,n),n>0&&e++}for(let[e,t]of o.current)for(let n of t)if(r.current.filtered.items.get(n)>0){r.current.filtered.groups.add(e);break}r.current.filtered.count=e}function D(){var e,t,n;let r=L();r&&((null==(e=r.parentElement)?void 0:e.firstChild)===r&&(null==(n=null==(t=r.closest(eK))?void 0:t.querySelector('[cmdk-group-heading=""]'))||n.scrollIntoView({block:"nearest"})),r.scrollIntoView({block:"nearest"}))}function L(){var e;return null==(e=n.current)?void 0:e.querySelector("".concat(eU,'[aria-selected="true"]'))}function P(){return Array.from(n.current.querySelectorAll(eq))}function O(e){let t=P()[e];t&&C.setState("value",t.getAttribute(ej))}function I(e){var t;let n=L(),r=P(),l=r.findIndex(e=>e===n),o=r[l+e];null!=(t=i.current)&&t.loop&&(o=l+e<0?r[r.length-1]:l+e===r.length?r[0]:r[l+e]),o&&C.setState("value",o.getAttribute(ej))}function M(e){let t=L(),n=null==t?void 0:t.closest(eK),r;for(;n&&!r;)r=null==(n=e>0?function(e,t){let n=e.nextElementSibling;for(;n;){if(n.matches(t))return n;n=n.nextElementSibling}}(n,eK):function(e,t){let n=e.previousElementSibling;for(;n;){if(n.matches(t))return n;n=n.previousElementSibling}}(n,eK))?void 0:n.querySelector(eq);r?C.setState("value",r.getAttribute(ej)):I(e)}let T=()=>O(P().length-1),x=e=>{e.preventDefault(),e.metaKey?T():e.altKey?M(1):I(1)},F=e=>{e.preventDefault(),e.metaKey?O(0):e.altKey?M(-1):I(-1)};return d.createElement("div",{ref:e3([n,t]),...E,"cmdk-root":"",onKeyDown:e=>{var t;if(null==(t=E.onKeyDown)||t.call(E,e),!e.defaultPrevented)switch(e.key){case"n":case"j":h&&e.ctrlKey&&x(e);break;case"ArrowDown":x(e);break;case"p":case"k":h&&e.ctrlKey&&F(e);break;case"ArrowUp":F(e);break;case"Home":e.preventDefault(),O(0);break;case"End":e.preventDefault(),T();break;case"Enter":if(!e.nativeEvent.isComposing){e.preventDefault();let t=L();if(t){let e=new Event(eB);t.dispatchEvent(e)}}}}},d.createElement("label",{"cmdk-label":"",htmlFor:S.inputId,id:S.labelId,style:tn},c),d.createElement(eX.Provider,{value:C},d.createElement(eV.Provider,{value:S},s)))}),eQ=d.forwardRef((e,t)=>{var n,r;let l=d.useId(),o=d.useRef(null),u=d.useContext(eG),a=eY(),i=e6(e),c=null!=(r=null==(n=i.current)?void 0:n.forceMount)?r:null==u?void 0:u.forceMount;e8(()=>a.item(l,null==u?void 0:u.id),[]);let s=te(l,o,[e.value,e.children,o]),f=eH(),v=e5(e=>e.value&&e.value===s.current),m=e5(e=>!!c||!1===a.filter()||!e.search||e.filtered.items.get(l)>0);function p(){var e,t;h(),null==(t=(e=i.current).onSelect)||t.call(e,s.current)}function h(){f.setState("value",s.current,!0)}if(d.useEffect(()=>{let t=o.current;if(!(!t||e.disabled))return t.addEventListener(eB,p),()=>t.removeEventListener(eB,p)},[m,e.onSelect,e.disabled]),!m)return null;let{disabled:E,value:g,onSelect:b,forceMount:y,...w}=e;return d.createElement("div",{ref:e3([o,t]),...w,id:l,"cmdk-item":"",role:"option","aria-disabled":E||void 0,"aria-selected":v||void 0,"data-disabled":E||void 0,"data-selected":v||void 0,onPointerMove:E?void 0:h,onClick:E?void 0:p},e.children)}),e$=d.forwardRef((e,t)=>{let{heading:n,children:r,forceMount:l,...o}=e,u=d.useId(),a=d.useRef(null),i=d.useRef(null),c=d.useId(),s=eY(),f=e5(e=>!!l||!1===s.filter()||!e.search||e.filtered.groups.has(u));e8(()=>s.group(u),[]),te(u,a,[e.value,e.heading,i]);let v=d.useMemo(()=>({id:u,forceMount:l}),[l]),m=d.createElement(eG.Provider,{value:v},r);return d.createElement("div",{ref:e3([a,t]),...o,"cmdk-group":"",role:"presentation",hidden:!f||void 0},n&&d.createElement("div",{ref:i,"cmdk-group-heading":"","aria-hidden":!0,id:c},n),d.createElement("div",{"cmdk-group-items":"",role:"group","aria-labelledby":n?c:void 0},m))}),e0=d.forwardRef((e,t)=>{let{alwaysRender:n,...r}=e,l=d.useRef(null),o=e5(e=>!e.search);return n||o?d.createElement("div",{ref:e3([l,t]),...r,"cmdk-separator":"",role:"separator"}):null}),e1=d.forwardRef((e,t)=>{let{onValueChange:n,...r}=e,l=null!=e.value,o=eH(),u=e5(e=>e.search),a=e5(e=>e.value),i=eY(),c=d.useMemo(()=>{var e;let t=null==(e=i.commandRef.current)?void 0:e.querySelector("".concat(eU,"[").concat(ej,'="').concat(a,'"]'));return null==t?void 0:t.getAttribute("id")},[a,i.commandRef]);return d.useEffect(()=>{null!=e.value&&o.setState("search",e.value)},[e.value]),d.createElement("input",{ref:t,...r,"cmdk-input":"",autoComplete:"off",autoCorrect:"off",spellCheck:!1,"aria-autocomplete":"list",role:"combobox","aria-expanded":!0,"aria-controls":i.listId,"aria-labelledby":i.labelId,"aria-activedescendant":c,id:i.inputId,type:"text",value:l?e.value:u,onChange:e=>{l||o.setState("search",e.target.value),null==n||n(e.target.value)}})}),e2=d.forwardRef((e,t)=>{let{children:n,...r}=e,l=d.useRef(null),o=d.useRef(null),u=eY();return d.useEffect(()=>{if(o.current&&l.current){let e=o.current,t=l.current,n,r=new ResizeObserver(()=>{n=requestAnimationFrame(()=>{let n=e.offsetHeight;t.style.setProperty("--cmdk-list-height",n.toFixed(1)+"px")})});return r.observe(e),()=>{cancelAnimationFrame(n),r.unobserve(e)}}},[]),d.createElement("div",{ref:e3([l,t]),...r,"cmdk-list":"",role:"listbox","aria-label":"Suggestions",id:u.listId,"aria-labelledby":u.inputId},d.createElement("div",{ref:o,"cmdk-list-sizer":""},n))}),e9=d.forwardRef((e,t)=>{let{open:n,onOpenChange:r,overlayClassName:l,contentClassName:o,container:u,...a}=e;return d.createElement(e_,{open:n,onOpenChange:r},d.createElement(eZ,{container:u},d.createElement(eA,{"cmdk-overlay":"",className:l}),d.createElement(eP,{"aria-label":e.label,"cmdk-dialog":"",className:o},d.createElement(eJ,{ref:t,...a}))))}),e4=Object.assign(eJ,{List:e2,Item:eQ,Input:e1,Group:e$,Separator:e0,Dialog:e9,Empty:d.forwardRef((e,t)=>{let n=d.useRef(!0),r=e5(e=>0===e.filtered.count);return d.useEffect(()=>{n.current=!1},[]),n.current||!r?null:d.createElement("div",{ref:t,...e,"cmdk-empty":"",role:"presentation"})}),Loading:d.forwardRef((e,t)=>{let{progress:n,children:r,...l}=e;return d.createElement("div",{ref:t,...l,"cmdk-loading":"",role:"progressbar","aria-valuenow":n,"aria-valuemin":0,"aria-valuemax":100,"aria-label":"Loading..."},d.createElement("div",{"aria-hidden":!0},r))})});function e6(e){let t=d.useRef(e);return e8(()=>{t.current=e}),t}var e8=d.useLayoutEffect;function e7(e){let t=d.useRef();return void 0===t.current&&(t.current=e()),t}function e3(e){return t=>{e.forEach(e=>{"function"==typeof e?e(t):null!=e&&(e.current=t)})}}function e5(e){let t=eH(),n=()=>e(t.snapshot());return d.useSyncExternalStore(t.subscribe,n,n)}function te(e,t,n){let r=d.useRef(),l=eY();return e8(()=>{var o;let u=(()=>{var e;for(let t of n){if("string"==typeof t)return t.trim().toLowerCase();if("object"==typeof t&&"current"in t)return t.current?null==(e=t.current.textContent)?void 0:e.trim().toLowerCase():r.current}})();l.value(e,u),null==(o=t.current)||o.setAttribute(ej,u),r.current=u}),r}var tt=()=>{let[e,t]=d.useState(),n=e7(()=>new Map);return e8(()=>{n.current.forEach(e=>e()),n.current=new Map},[e]),(e,r)=>{n.current.set(e,r),t({})}},tn={position:"absolute",width:"1px",height:"1px",padding:"0",margin:"-1px",overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",borderWidth:"0"}}}]);