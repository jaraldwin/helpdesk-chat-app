import{r as y,ab as A,o as L,y as E,l as R,I as B,O as M,h as m,g as q,ac as O,w as P,ad as V,ae as I,af as K,ag as C,c as g,ah as T,B as X,a as G,u as J,ai as Y}from"./index.9d4cc54e.js";function Z(){const e=y(!A.value);return e.value===!1&&L(()=>{e.value=!0}),e}const D=typeof ResizeObserver!="undefined",W=D===!0?{}:{style:"display:block;position:absolute;top:0;left:0;right:0;bottom:0;height:100%;width:100%;overflow:hidden;pointer-events:none;z-index:-1;",url:"about:blank"};var j=E({name:"QResizeObserver",props:{debounce:{type:[String,Number],default:100}},emits:["resize"],setup(e,{emit:i}){let t=null,o,a={width:-1,height:-1};function c(r){r===!0||e.debounce===0||e.debounce==="0"?u():t===null&&(t=setTimeout(u,e.debounce))}function u(){if(t!==null&&(clearTimeout(t),t=null),o){const{offsetWidth:r,offsetHeight:l}=o;(r!==a.width||l!==a.height)&&(a={width:r,height:l},i("resize",a))}}const{proxy:v}=q();if(v.trigger=c,D===!0){let r;const l=f=>{o=v.$el.parentNode,o?(r=new ResizeObserver(c),r.observe(o),u()):f!==!0&&M(()=>{l(!0)})};return L(()=>{l()}),R(()=>{t!==null&&clearTimeout(t),r!==void 0&&(r.disconnect!==void 0?r.disconnect():o&&r.unobserve(o))}),B}else{let f=function(){t!==null&&(clearTimeout(t),t=null),l!==void 0&&(l.removeEventListener!==void 0&&l.removeEventListener("resize",c,O.passive),l=void 0)},h=function(){f(),o&&o.contentDocument&&(l=o.contentDocument.defaultView,l.addEventListener("resize",c,O.passive),u())};const r=Z();let l;return L(()=>{M(()=>{o=v.$el,o&&h()})}),R(f),()=>{if(r.value===!0)return m("object",{style:W.style,tabindex:-1,type:"text/html",data:W.url,"aria-hidden":"true",onLoad:h})}}}});const $={left:!0,right:!0,up:!0,down:!0,horizontal:!0,vertical:!0},_=Object.keys($);$.all=!0;function oe(e){const i={};for(const t of _)e[t]===!0&&(i[t]=!0);return Object.keys(i).length===0?$:(i.horizontal===!0?i.left=i.right=!0:i.left===!0&&i.right===!0&&(i.horizontal=!0),i.vertical===!0?i.up=i.down=!0:i.up===!0&&i.down===!0&&(i.vertical=!0),i.horizontal===!0&&i.vertical===!0&&(i.all=!0),i)}const ee=["INPUT","TEXTAREA"];function le(e,i){return i.event===void 0&&e.target!==void 0&&e.target.draggable!==!0&&typeof i.handler=="function"&&ee.includes(e.target.nodeName.toUpperCase())===!1&&(e.qClonedBy===void 0||e.qClonedBy.indexOf(i.uid)===-1)}const{passive:k}=O,te=["both","horizontal","vertical"];var ne=E({name:"QScrollObserver",props:{axis:{type:String,validator:e=>te.includes(e),default:"vertical"},debounce:[String,Number],scrollTarget:{default:void 0}},emits:["scroll"],setup(e,{emit:i}){const t={position:{top:0,left:0},direction:"down",directionChanged:!1,delta:{top:0,left:0},inflectionPoint:{top:0,left:0}};let o=null,a,c;P(()=>e.scrollTarget,()=>{r(),v()});function u(){o!==null&&o();const h=Math.max(0,I(a)),p=K(a),d={top:h-t.position.top,left:p-t.position.left};if(e.axis==="vertical"&&d.top===0||e.axis==="horizontal"&&d.left===0)return;const z=Math.abs(d.top)>=Math.abs(d.left)?d.top<0?"up":"down":d.left<0?"left":"right";t.position={top:h,left:p},t.directionChanged=t.direction!==z,t.delta=d,t.directionChanged===!0&&(t.direction=z,t.inflectionPoint=t.position),i("scroll",{...t})}function v(){a=V(c,e.scrollTarget),a.addEventListener("scroll",l,k),l(!0)}function r(){a!==void 0&&(a.removeEventListener("scroll",l,k),a=void 0)}function l(h){if(h===!0||e.debounce===0||e.debounce==="0")u();else if(o===null){const[p,d]=e.debounce?[setTimeout(u,e.debounce),clearTimeout]:[requestAnimationFrame(u),cancelAnimationFrame];o=()=>{d(p),o=null}}}const{proxy:f}=q();return P(()=>f.$q.lang.rtl,u),L(()=>{c=f.$el.parentNode,v()}),R(()=>{o!==null&&o(),r()}),Object.assign(f,{trigger:l,getPosition:()=>t}),B}}),re=E({name:"QLayout",props:{container:Boolean,view:{type:String,default:"hhh lpr fff",validator:e=>/^(h|l)h(h|r) lpr (f|l)f(f|r)$/.test(e.toLowerCase())},onScroll:Function,onScrollHeight:Function,onResize:Function},setup(e,{slots:i,emit:t}){const{proxy:{$q:o}}=q(),a=y(null),c=y(o.screen.height),u=y(e.container===!0?0:o.screen.width),v=y({position:0,direction:"down",inflectionPoint:0}),r=y(0),l=y(A.value===!0?0:C()),f=g(()=>"q-layout q-layout--"+(e.container===!0?"containerized":"standard")),h=g(()=>e.container===!1?{minHeight:o.screen.height+"px"}:null),p=g(()=>l.value!==0?{[o.lang.rtl===!0?"left":"right"]:`${l.value}px`}:null),d=g(()=>l.value!==0?{[o.lang.rtl===!0?"right":"left"]:0,[o.lang.rtl===!0?"left":"right"]:`-${l.value}px`,width:`calc(100% + ${l.value}px)`}:null);function z(n){if(e.container===!0||document.qScrollPrevented!==!0){const s={position:n.position.top,direction:n.direction,directionChanged:n.directionChanged,inflectionPoint:n.inflectionPoint.top,delta:n.delta.top};v.value=s,e.onScroll!==void 0&&t("scroll",s)}}function F(n){const{height:s,width:b}=n;let w=!1;c.value!==s&&(w=!0,c.value=s,e.onScrollHeight!==void 0&&t("scrollHeight",s),H()),u.value!==b&&(w=!0,u.value=b),w===!0&&e.onResize!==void 0&&t("resize",n)}function U({height:n}){r.value!==n&&(r.value=n,H())}function H(){if(e.container===!0){const n=c.value>r.value?C():0;l.value!==n&&(l.value=n)}}let S=null;const N={instances:{},view:g(()=>e.view),isContainer:g(()=>e.container),rootRef:a,height:c,containerHeight:r,scrollbarWidth:l,totalWidth:g(()=>u.value+l.value),rows:g(()=>{const n=e.view.toLowerCase().split(" ");return{top:n[0].split(""),middle:n[1].split(""),bottom:n[2].split("")}}),header:T({size:0,offset:0,space:!1}),right:T({size:300,offset:0,space:!1}),footer:T({size:0,offset:0,space:!1}),left:T({size:300,offset:0,space:!1}),scroll:v,animate(){S!==null?clearTimeout(S):document.body.classList.add("q-body--layout-animate"),S=setTimeout(()=>{S=null,document.body.classList.remove("q-body--layout-animate")},155)},update(n,s,b){N[n][s]=b}};if(X(Y,N),C()>0){let b=function(){n=null,s.classList.remove("hide-scrollbar")},w=function(){if(n===null){if(s.scrollHeight>o.screen.height)return;s.classList.add("hide-scrollbar")}else clearTimeout(n);n=setTimeout(b,300)},x=function(Q){n!==null&&Q==="remove"&&(clearTimeout(n),b()),window[`${Q}EventListener`]("resize",w)},n=null;const s=document.body;P(()=>e.container!==!0?"add":"remove",x),e.container!==!0&&x("add"),G(()=>{x("remove")})}return()=>{const n=J(i.default,[m(ne,{onScroll:z}),m(j,{onResize:F})]),s=m("div",{class:f.value,style:h.value,ref:e.container===!0?void 0:a,tabindex:-1},n);return e.container===!0?m("div",{class:"q-layout-container overflow-hidden",ref:a},[m(j,{onResize:U}),m("div",{class:"absolute-full",style:p.value},[m("div",{class:"scroll",style:d.value},[s])])]):s}}});export{j as Q,re as a,oe as g,le as s};