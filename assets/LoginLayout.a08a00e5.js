import{i as Ye,k as fe,r as T,c as w,l as De,o as Je,t as Qe,m as Ze,R as et,h as P,n as Y,p as tt,q as at,Q as ne,u as nt,g as le,v as lt,x as ot,y as oe,z as me,A as Re,w as X,B as it,C as rt,D as st,E as ie,G as ut,H,I as ct,J as dt,K as ee,L as ge,M as Le,N as he,O as vt,P as ft,S as mt,U as gt,V as ht,W as bt,X as pt,_ as yt,Y as wt,Z as Ct,$ as _t,a0 as L,a1 as A,f as y,a2 as te,a3 as ae,a4 as be,a5 as pe,a6 as Tt}from"./index.9d4cc54e.js";import{Q as Pt,g as Ae,s as Ie,a as qt}from"./QLayout.9bf56f15.js";import{r as xt,u as kt,Q as Be}from"./use-quasar.cf0c828d.js";import{c as St}from"./selection.4448b3d4.js";import{g as ye,G as Rt,s as Lt,a as At,c as It}from"./index-bea2a320.2d43d630.js";import"./index.esm2017.5a485a28.js";let Bt=0;const Vt=["click","keydown"],Mt={icon:String,label:[Number,String],alert:[Boolean,String],alertIcon:String,name:{type:[Number,String],default:()=>`t_${Bt++}`},noCaps:Boolean,tabindex:[String,Number],disable:Boolean,contentClass:String,ripple:{type:[Boolean,Object],default:!0}};function Et(e,n,d,r){const o=Ye(Qe,fe);if(o===fe)return console.error("QTab/QRouteTab component needs to be child of QTabs"),fe;const{proxy:a}=le(),l=T(null),f=T(null),B=T(null),Q=w(()=>e.disable===!0||e.ripple===!1?!1:Object.assign({keyCodes:[13,32],early:!0},e.ripple===!0?{}:e.ripple)),p=w(()=>o.currentModel.value===e.name),q=w(()=>"q-tab relative-position self-stretch flex flex-center text-center"+(p.value===!0?" q-tab--active"+(o.tabProps.value.activeClass?" "+o.tabProps.value.activeClass:"")+(o.tabProps.value.activeColor?` text-${o.tabProps.value.activeColor}`:"")+(o.tabProps.value.activeBgColor?` bg-${o.tabProps.value.activeBgColor}`:""):" q-tab--inactive")+(e.icon&&e.label&&o.tabProps.value.inlineLabel===!1?" q-tab--full":"")+(e.noCaps===!0||o.tabProps.value.noCaps===!0?" q-tab--no-caps":"")+(e.disable===!0?" disabled":" q-focusable q-hoverable cursor-pointer")+(r!==void 0?r.linkClass.value:"")),g=w(()=>"q-tab__content self-stretch flex-center relative-position q-anchor--skip non-selectable "+(o.tabProps.value.inlineLabel===!0?"row no-wrap q-tab__content--inline":"column")+(e.contentClass!==void 0?` ${e.contentClass}`:"")),h=w(()=>e.disable===!0||o.hasFocus.value===!0||p.value===!1&&o.hasActiveTab.value===!0?-1:e.tabindex||0);function k(s,S){if(S!==!0&&l.value!==null&&l.value.focus(),e.disable===!0){r!==void 0&&r.hasRouterLink.value===!0&&Y(s);return}if(r===void 0){o.updateModel({name:e.name}),d("click",s);return}if(r.hasRouterLink.value===!0){const V=(x={})=>{let R;const D=x.to===void 0||lt(x.to,e.to)===!0?o.avoidRouteWatcher=ot():null;return r.navigateToRouterLink(s,{...x,returnRouterError:!0}).catch(W=>{R=W}).then(W=>{if(D===o.avoidRouteWatcher&&(o.avoidRouteWatcher=!1,R===void 0&&(W===void 0||W.message!==void 0&&W.message.startsWith("Avoided redundant navigation")===!0)&&o.updateModel({name:e.name})),x.returnRouterError===!0)return R!==void 0?Promise.reject(R):W})};d("click",s,V),s.defaultPrevented!==!0&&V();return}d("click",s)}function E(s){tt(s,[13,32])?k(s,!0):at(s)!==!0&&s.keyCode>=35&&s.keyCode<=40&&s.altKey!==!0&&s.metaKey!==!0&&o.onKbdNavigate(s.keyCode,a.$el)===!0&&Y(s),d("keydown",s)}function $(){const s=o.tabProps.value.narrowIndicator,S=[],V=P("div",{ref:B,class:["q-tab__indicator",o.tabProps.value.indicatorClass]});e.icon!==void 0&&S.push(P(ne,{class:"q-tab__icon",name:e.icon})),e.label!==void 0&&S.push(P("div",{class:"q-tab__label"},e.label)),e.alert!==!1&&S.push(e.alertIcon!==void 0?P(ne,{class:"q-tab__alert-icon",color:e.alert!==!0?e.alert:void 0,name:e.alertIcon}):P("div",{class:"q-tab__alert"+(e.alert!==!0?` text-${e.alert}`:"")})),s===!0&&S.push(V);const x=[P("div",{class:"q-focus-helper",tabindex:-1,ref:l}),P("div",{class:g.value},nt(n.default,S))];return s===!1&&x.push(V),x}const F={name:w(()=>e.name),rootRef:f,tabIndicatorRef:B,routeData:r};De(()=>{o.unregisterTab(F)}),Je(()=>{o.registerTab(F)});function z(s,S){const V={ref:f,class:q.value,tabindex:h.value,role:"tab","aria-selected":p.value===!0?"true":"false","aria-disabled":e.disable===!0?"true":void 0,onClick:k,onKeydown:E,...S};return Ze(P(s,V,$()),[[et,Q.value]])}return{renderTab:z,$tabs:o}}var Ve=oe({name:"QTab",props:Mt,emits:Vt,setup(e,{slots:n,emit:d}){const{renderTab:r}=Et(e,n,d);return()=>r("div")}});function Dt(e,n,d){const r=d===!0?["left","right"]:["top","bottom"];return`absolute-${n===!0?r[0]:r[1]}${e?` text-${e}`:""}`}const Qt=["left","center","right","justify"];var $t=oe({name:"QTabs",props:{modelValue:[Number,String],align:{type:String,default:"center",validator:e=>Qt.includes(e)},breakpoint:{type:[String,Number],default:600},vertical:Boolean,shrink:Boolean,stretch:Boolean,activeClass:String,activeColor:String,activeBgColor:String,indicatorColor:String,leftIcon:String,rightIcon:String,outsideArrows:Boolean,mobileArrows:Boolean,switchIndicator:Boolean,narrowIndicator:Boolean,inlineLabel:Boolean,noCaps:Boolean,dense:Boolean,contentClass:String,"onUpdate:modelValue":[Function,Array]},setup(e,{slots:n,emit:d}){const{proxy:r}=le(),{$q:o}=r,{registerTick:a}=me(),{registerTick:l}=me(),{registerTick:f}=me(),{registerTimeout:B,removeTimeout:Q}=Re(),{registerTimeout:p,removeTimeout:q}=Re(),g=T(null),h=T(null),k=T(e.modelValue),E=T(!1),$=T(!0),F=T(!1),z=T(!1),s=[],S=T(0),V=T(!1);let x=null,R=null,D;const W=w(()=>({activeClass:e.activeClass,activeColor:e.activeColor,activeBgColor:e.activeBgColor,indicatorClass:Dt(e.indicatorColor,e.switchIndicator,e.vertical),narrowIndicator:e.narrowIndicator,inlineLabel:e.inlineLabel,noCaps:e.noCaps})),re=w(()=>{const t=S.value,i=k.value;for(let u=0;u<t;u++)if(s[u].name.value===i)return!0;return!1}),se=w(()=>`q-tabs__content--align-${E.value===!0?"left":z.value===!0?"justify":e.align}`),ue=w(()=>`q-tabs row no-wrap items-center q-tabs--${E.value===!0?"":"not-"}scrollable q-tabs--${e.vertical===!0?"vertical":"horizontal"} q-tabs__arrows--${e.outsideArrows===!0?"outside":"inside"} q-tabs--mobile-with${e.mobileArrows===!0?"":"out"}-arrows`+(e.dense===!0?" q-tabs--dense":"")+(e.shrink===!0?" col-shrink":"")+(e.stretch===!0?" self-stretch":"")),c=w(()=>"q-tabs__content scroll--mobile row no-wrap items-center self-stretch hide-scrollbar relative-position "+se.value+(e.contentClass!==void 0?` ${e.contentClass}`:"")),b=w(()=>e.vertical===!0?{container:"height",content:"offsetHeight",scroll:"scrollHeight"}:{container:"width",content:"offsetWidth",scroll:"scrollWidth"}),M=w(()=>e.vertical!==!0&&o.lang.rtl===!0),U=w(()=>xt===!1&&M.value===!0);X(M,G),X(()=>e.modelValue,t=>{ce({name:t,setCurrent:!0,skipEmit:!0})}),X(()=>e.outsideArrows,J);function ce({name:t,setCurrent:i,skipEmit:u}){k.value!==t&&(u!==!0&&e["onUpdate:modelValue"]!==void 0&&d("update:modelValue",t),(i===!0||e["onUpdate:modelValue"]===void 0)&&(We(k.value,t),k.value=t))}function J(){a(()=>{we({width:g.value.offsetWidth,height:g.value.offsetHeight})})}function we(t){if(b.value===void 0||h.value===null)return;const i=t[b.value.container],u=Math.min(h.value[b.value.scroll],Array.prototype.reduce.call(h.value.children,(_,m)=>_+(m[b.value.content]||0),0)),C=i>0&&u>i;E.value=C,C===!0&&l(G),z.value=i<parseInt(e.breakpoint,10)}function We(t,i){const u=t!=null&&t!==""?s.find(_=>_.name.value===t):null,C=i!=null&&i!==""?s.find(_=>_.name.value===i):null;if(u&&C){const _=u.tabIndicatorRef.value,m=C.tabIndicatorRef.value;x!==null&&(clearTimeout(x),x=null),_.style.transition="none",_.style.transform="none",m.style.transition="none",m.style.transform="none";const v=_.getBoundingClientRect(),I=m.getBoundingClientRect();m.style.transform=e.vertical===!0?`translate3d(0,${v.top-I.top}px,0) scale3d(1,${I.height?v.height/I.height:1},1)`:`translate3d(${v.left-I.left}px,0,0) scale3d(${I.width?v.width/I.width:1},1,1)`,f(()=>{x=setTimeout(()=>{x=null,m.style.transition="transform .25s cubic-bezier(.4, 0, .2, 1)",m.style.transform="none"},70)})}C&&E.value===!0&&O(C.rootRef.value)}function O(t){const{left:i,width:u,top:C,height:_}=h.value.getBoundingClientRect(),m=t.getBoundingClientRect();let v=e.vertical===!0?m.top-C:m.left-i;if(v<0){h.value[e.vertical===!0?"scrollTop":"scrollLeft"]+=Math.floor(v),G();return}v+=e.vertical===!0?m.height-_:m.width-u,v>0&&(h.value[e.vertical===!0?"scrollTop":"scrollLeft"]+=Math.ceil(v),G())}function G(){const t=h.value;if(t===null)return;const i=t.getBoundingClientRect(),u=e.vertical===!0?t.scrollTop:Math.abs(t.scrollLeft);M.value===!0?($.value=Math.ceil(u+i.width)<t.scrollWidth-1,F.value=u>0):($.value=u>0,F.value=e.vertical===!0?Math.ceil(u+i.height)<t.scrollHeight:Math.ceil(u+i.width)<t.scrollWidth)}function Ce(t){R!==null&&clearInterval(R),R=setInterval(()=>{Ue(t)===!0&&j()},5)}function _e(){Ce(U.value===!0?Number.MAX_SAFE_INTEGER:0)}function Te(){Ce(U.value===!0?0:Number.MAX_SAFE_INTEGER)}function j(){R!==null&&(clearInterval(R),R=null)}function Fe(t,i){const u=Array.prototype.filter.call(h.value.children,I=>I===i||I.matches&&I.matches(".q-tab.q-focusable")===!0),C=u.length;if(C===0)return;if(t===36)return O(u[0]),u[0].focus(),!0;if(t===35)return O(u[C-1]),u[C-1].focus(),!0;const _=t===(e.vertical===!0?38:37),m=t===(e.vertical===!0?40:39),v=_===!0?-1:m===!0?1:void 0;if(v!==void 0){const I=M.value===!0?-1:1,N=u.indexOf(i)+v*I;return N>=0&&N<C&&(O(u[N]),u[N].focus({preventScroll:!0})),!0}}const Ne=w(()=>U.value===!0?{get:t=>Math.abs(t.scrollLeft),set:(t,i)=>{t.scrollLeft=-i}}:e.vertical===!0?{get:t=>t.scrollTop,set:(t,i)=>{t.scrollTop=i}}:{get:t=>t.scrollLeft,set:(t,i)=>{t.scrollLeft=i}});function Ue(t){const i=h.value,{get:u,set:C}=Ne.value;let _=!1,m=u(i);const v=t<m?-1:1;return m+=v*5,m<0?(_=!0,m=0):(v===-1&&m<=t||v===1&&m>=t)&&(_=!0,m=t),C(i,m),G(),_}function Pe(t,i){for(const u in t)if(t[u]!==i[u])return!1;return!0}function je(){let t=null,i={matchedLen:0,queryDiff:9999,hrefLen:0};const u=s.filter(v=>v.routeData!==void 0&&v.routeData.hasRouterLink.value===!0),{hash:C,query:_}=r.$route,m=Object.keys(_).length;for(const v of u){const I=v.routeData.exact.value===!0;if(v.routeData[I===!0?"linkIsExactActive":"linkIsActive"].value!==!0)continue;const{hash:N,query:de,matched:He,href:Xe}=v.routeData.resolvedLink.value,ve=Object.keys(de).length;if(I===!0){if(N!==C||ve!==m||Pe(_,de)===!1)continue;t=v.name.value;break}if(N!==""&&N!==C||ve!==0&&Pe(de,_)===!1)continue;const K={matchedLen:He.length,queryDiff:m-ve,hrefLen:Xe.length-N.length};if(K.matchedLen>i.matchedLen){t=v.name.value,i=K;continue}else if(K.matchedLen!==i.matchedLen)continue;if(K.queryDiff<i.queryDiff)t=v.name.value,i=K;else if(K.queryDiff!==i.queryDiff)continue;K.hrefLen>i.hrefLen&&(t=v.name.value,i=K)}t===null&&s.some(v=>v.routeData===void 0&&v.name.value===k.value)===!0||ce({name:t,setCurrent:!0})}function Ke(t){if(Q(),V.value!==!0&&g.value!==null&&t.target&&typeof t.target.closest=="function"){const i=t.target.closest(".q-tab");i&&g.value.contains(i)===!0&&(V.value=!0,E.value===!0&&O(i))}}function ze(){B(()=>{V.value=!1},30)}function Z(){xe.avoidRouteWatcher===!1?p(je):q()}function qe(){if(D===void 0){const t=X(()=>r.$route.fullPath,Z);D=()=>{t(),D=void 0}}}function Oe(t){s.push(t),S.value++,J(),t.routeData===void 0||r.$route===void 0?p(()=>{if(E.value===!0){const i=k.value,u=i!=null&&i!==""?s.find(C=>C.name.value===i):null;u&&O(u.rootRef.value)}}):(qe(),t.routeData.hasRouterLink.value===!0&&Z())}function Ge(t){s.splice(s.indexOf(t),1),S.value--,J(),D!==void 0&&t.routeData!==void 0&&(s.every(i=>i.routeData===void 0)===!0&&D(),Z())}const xe={currentModel:k,tabProps:W,hasFocus:V,hasActiveTab:re,registerTab:Oe,unregisterTab:Ge,verifyRouteModel:Z,updateModel:ce,onKbdNavigate:Fe,avoidRouteWatcher:!1};it(Qe,xe);function ke(){x!==null&&clearTimeout(x),j(),D!==void 0&&D()}let Se;return De(ke),rt(()=>{Se=D!==void 0,ke()}),st(()=>{Se===!0&&qe(),J()}),()=>P("div",{ref:g,class:ue.value,role:"tablist",onFocusin:Ke,onFocusout:ze},[P(Pt,{onResize:we}),P("div",{ref:h,class:c.value,onScroll:G},ie(n.default)),P(ne,{class:"q-tabs__arrow q-tabs__arrow--left absolute q-tab__icon"+($.value===!0?"":" q-tabs__arrow--faded"),name:e.leftIcon||o.iconSet.tabs[e.vertical===!0?"up":"left"],onMousedownPassive:_e,onTouchstartPassive:_e,onMouseupPassive:j,onMouseleavePassive:j,onTouchendPassive:j}),P(ne,{class:"q-tabs__arrow q-tabs__arrow--right absolute q-tab__icon"+(F.value===!0?"":" q-tabs__arrow--faded"),name:e.rightIcon||o.iconSet.tabs[e.vertical===!0?"down":"right"],onMousedownPassive:Te,onTouchstartPassive:Te,onMouseupPassive:j,onMouseleavePassive:j,onTouchendPassive:j})])}});function Wt(e){const n=[.06,6,50];return typeof e=="string"&&e.length&&e.split(":").forEach((d,r)=>{const o=parseFloat(d);o&&(n[r]=o)}),n}var Ft=ut({name:"touch-swipe",beforeMount(e,{value:n,arg:d,modifiers:r}){if(r.mouse!==!0&&H.has.touch!==!0)return;const o=r.mouseCapture===!0?"Capture":"",a={handler:n,sensitivity:Wt(d),direction:Ae(r),noop:ct,mouseStart(l){Ie(l,a)&&dt(l)&&(ee(a,"temp",[[document,"mousemove","move",`notPassive${o}`],[document,"mouseup","end","notPassiveCapture"]]),a.start(l,!0))},touchStart(l){if(Ie(l,a)){const f=l.target;ee(a,"temp",[[f,"touchmove","move","notPassiveCapture"],[f,"touchcancel","end","notPassiveCapture"],[f,"touchend","end","notPassiveCapture"]]),a.start(l)}},start(l,f){H.is.firefox===!0&&ge(e,!0);const B=Le(l);a.event={x:B.left,y:B.top,time:Date.now(),mouse:f===!0,dir:!1}},move(l){if(a.event===void 0)return;if(a.event.dir!==!1){Y(l);return}const f=Date.now()-a.event.time;if(f===0)return;const B=Le(l),Q=B.left-a.event.x,p=Math.abs(Q),q=B.top-a.event.y,g=Math.abs(q);if(a.event.mouse!==!0){if(p<a.sensitivity[1]&&g<a.sensitivity[1]){a.end(l);return}}else if(window.getSelection().toString()!==""){a.end(l);return}else if(p<a.sensitivity[2]&&g<a.sensitivity[2])return;const h=p/f,k=g/f;a.direction.vertical===!0&&p<g&&p<100&&k>a.sensitivity[0]&&(a.event.dir=q<0?"up":"down"),a.direction.horizontal===!0&&p>g&&g<100&&h>a.sensitivity[0]&&(a.event.dir=Q<0?"left":"right"),a.direction.up===!0&&p<g&&q<0&&p<100&&k>a.sensitivity[0]&&(a.event.dir="up"),a.direction.down===!0&&p<g&&q>0&&p<100&&k>a.sensitivity[0]&&(a.event.dir="down"),a.direction.left===!0&&p>g&&Q<0&&g<100&&h>a.sensitivity[0]&&(a.event.dir="left"),a.direction.right===!0&&p>g&&Q>0&&g<100&&h>a.sensitivity[0]&&(a.event.dir="right"),a.event.dir!==!1?(Y(l),a.event.mouse===!0&&(document.body.classList.add("no-pointer-events--children"),document.body.classList.add("non-selectable"),St(),a.styleCleanup=E=>{a.styleCleanup=void 0,document.body.classList.remove("non-selectable");const $=()=>{document.body.classList.remove("no-pointer-events--children")};E===!0?setTimeout($,50):$()}),a.handler({evt:l,touch:a.event.mouse!==!0,mouse:a.event.mouse,direction:a.event.dir,duration:f,distance:{x:p,y:g}})):a.end(l)},end(l){a.event!==void 0&&(he(a,"temp"),H.is.firefox===!0&&ge(e,!1),a.styleCleanup!==void 0&&a.styleCleanup(!0),l!==void 0&&a.event.dir!==!1&&Y(l),a.event=void 0)}};if(e.__qtouchswipe=a,r.mouse===!0){const l=r.mouseCapture===!0||r.mousecapture===!0?"Capture":"";ee(a,"main",[[e,"mousedown","mouseStart",`passive${l}`]])}H.has.touch===!0&&ee(a,"main",[[e,"touchstart","touchStart",`passive${r.capture===!0?"Capture":""}`],[e,"touchmove","noop","notPassiveCapture"]])},updated(e,n){const d=e.__qtouchswipe;d!==void 0&&(n.oldValue!==n.value&&(typeof n.value!="function"&&d.end(),d.handler=n.value),d.direction=Ae(n.modifiers))},beforeUnmount(e){const n=e.__qtouchswipe;n!==void 0&&(he(n,"main"),he(n,"temp"),H.is.firefox===!0&&ge(e,!1),n.styleCleanup!==void 0&&n.styleCleanup(),delete e.__qtouchswipe)}});function Nt(){const e=new Map;return{getCache:function(n,d){return e[n]===void 0?e[n]=d:e[n]},getCacheWithFn:function(n,d){return e[n]===void 0?e[n]=d():e[n]}}}const Ut={name:{required:!0},disable:Boolean},Me={setup(e,{slots:n}){return()=>P("div",{class:"q-panel scroll",role:"tabpanel"},ie(n.default))}},jt={modelValue:{required:!0},animated:Boolean,infinite:Boolean,swipeable:Boolean,vertical:Boolean,transitionPrev:String,transitionNext:String,transitionDuration:{type:[String,Number],default:300},keepAlive:Boolean,keepAliveInclude:[String,Array,RegExp],keepAliveExclude:[String,Array,RegExp],keepAliveMax:Number},Kt=["update:modelValue","beforeTransition","transition"];function zt(){const{props:e,emit:n,proxy:d}=le(),{getCacheWithFn:r}=Nt();let o,a;const l=T(null),f=T(null);function B(c){const b=e.vertical===!0?"up":"left";R((d.$q.lang.rtl===!0?-1:1)*(c.direction===b?1:-1))}const Q=w(()=>[[Ft,B,void 0,{horizontal:e.vertical!==!0,vertical:e.vertical,mouse:!0}]]),p=w(()=>e.transitionPrev||`slide-${e.vertical===!0?"down":"right"}`),q=w(()=>e.transitionNext||`slide-${e.vertical===!0?"up":"left"}`),g=w(()=>`--q-transition-duration: ${e.transitionDuration}ms`),h=w(()=>typeof e.modelValue=="string"||typeof e.modelValue=="number"?e.modelValue:String(e.modelValue)),k=w(()=>({include:e.keepAliveInclude,exclude:e.keepAliveExclude,max:e.keepAliveMax})),E=w(()=>e.keepAliveInclude!==void 0||e.keepAliveExclude!==void 0);X(()=>e.modelValue,(c,b)=>{const M=s(c)===!0?S(c):-1;a!==!0&&x(M===-1?0:M<S(b)?-1:1),l.value!==M&&(l.value=M,n("beforeTransition",c,b),vt(()=>{n("transition",c,b)}))});function $(){R(1)}function F(){R(-1)}function z(c){n("update:modelValue",c)}function s(c){return c!=null&&c!==""}function S(c){return o.findIndex(b=>b.props.name===c&&b.props.disable!==""&&b.props.disable!==!0)}function V(){return o.filter(c=>c.props.disable!==""&&c.props.disable!==!0)}function x(c){const b=c!==0&&e.animated===!0&&l.value!==-1?"q-transition--"+(c===-1?p.value:q.value):null;f.value!==b&&(f.value=b)}function R(c,b=l.value){let M=b+c;for(;M>-1&&M<o.length;){const U=o[M];if(U!==void 0&&U.props.disable!==""&&U.props.disable!==!0){x(c),a=!0,n("update:modelValue",U.props.name),setTimeout(()=>{a=!1});return}M+=c}e.infinite===!0&&o.length!==0&&b!==-1&&b!==o.length&&R(c,c===-1?o.length:-1)}function D(){const c=S(e.modelValue);return l.value!==c&&(l.value=c),!0}function W(){const c=s(e.modelValue)===!0&&D()&&o[l.value];return e.keepAlive===!0?[P(gt,k.value,[P(E.value===!0?r(h.value,()=>({...Me,name:h.value})):Me,{key:h.value,style:g.value},()=>c)])]:[P("div",{class:"q-panel scroll",style:g.value,key:h.value,role:"tabpanel"},[c])]}function re(){if(o.length!==0)return e.animated===!0?[P(ft,{name:f.value},W)]:W()}function se(c){return o=mt(ie(c.default,[])).filter(b=>b.props!==null&&b.props.slot===void 0&&s(b.props.name)===!0),o.length}function ue(){return o}return Object.assign(d,{next:$,previous:F,goTo:z}),{panelIndex:l,panelDirectives:Q,updatePanelsList:se,updatePanelIndex:D,getPanelContent:re,getEnabledPanels:V,getPanels:ue,isValidPanelName:s,keepAliveProps:k,needsUniqueKeepAliveWrapper:E,goToPanelByOffset:R,goToPanel:z,nextPanel:$,previousPanel:F}}var Ee=oe({name:"QTabPanel",props:Ut,setup(e,{slots:n}){return()=>P("div",{class:"q-tab-panel",role:"tabpanel"},ie(n.default))}}),Ot=oe({name:"QTabPanels",props:{...jt,...ht},emits:Kt,setup(e,{slots:n}){const d=le(),r=bt(e,d.proxy.$q),{updatePanelsList:o,getPanelContent:a,panelDirectives:l}=zt(),f=w(()=>"q-tab-panels q-panel-parent"+(r.value===!0?" q-tab-panels--dark q-dark":""));return()=>(o(n),pt("div",{class:f.value},a(),"pan",e.swipeable,()=>l.value))}}),$e="/assets/about-aldwin.24df12f1.png";const Gt={setup(){const e=T(null),n=T(""),d=wt(),r=T(""),o=T(""),a=T(""),l=T(""),f=kt();async function B(){const q=ye(),g=new Rt;try{const h=await Lt(q,g);d.push("/dashboard")}catch(h){console.error("Error signing in:",h),e.value=h.message,f.notify({type:"negative",message:"Failed to sign in with Google. Please try again later."})}}const Q=()=>{At(ye(),r.value,o.value).then(q=>{d.push("/dashboard"),f.notify({type:"positive",message:"Logged in successfully."})}).catch(q=>{switch(q.code){case"auth/invalid-email":n.value="Invalid Email";break;case"auth/user-not-found":n.value="User not found";break;case"auth/wrong-password":n.value="Wrong password";break;default:n.value="Email and Password is incorrect!";break}f.notify({type:"negative",message:n.value})})},p=()=>{It(ye(),a.value,l.value).then(q=>{console.log("Registration successful"),d.push("/login"),f.notify({type:"positive",message:"Registered successfully. You can now log in."})}).catch(q=>{console.error("Registration failed:",q),f.notify({type:"negative",message:"Failed to register. Please try again later."})})};return{error:e,signInWithGoogle:B,tab:T("login"),login:Q,register:p,email:r,password:o,emailRegister:a,passwordRegister:l}}},Ht={class:"column"},Xt={class:"row",style:{width:"400px"}},Yt=A("div",{class:"row justify-between items-center"},[A("div",null,[A("div",{class:"text-h5"},"Login"),A("div",{class:"text-subtitle2"},"Helpdesk 1.0")]),A("div",null,[A("img",{width:"150",src:$e})])],-1),Jt={class:"row justify-center items-center"},Zt=A("span",{class:"q-ml-sm"},"Sign in with Google",-1),ea=A("div",{class:"row justify-between items-center"},[A("div",null,[A("div",{class:"text-h5"},"Register"),A("div",{class:"text-subtitle2"},"Helpdesk 1.0")]),A("div",null,[A("img",{width:"150",src:$e})])],-1);function ta(e,n,d,r,o,a){return Ct(),_t(qt,{class:"row justify-center items-center"},{default:L(()=>[A("div",Ht,[A("div",Xt,[y(Tt,{bordered:"",class:"q-pa-lg shadow-1 my-card",style:{width:"100%"}},{default:L(()=>[y($t,{dense:"","active-color":"primary",modelValue:r.tab,"onUpdate:modelValue":n[0]||(n[0]=l=>r.tab=l),align:"justify"},{default:L(()=>[y(Ve,{name:"login",label:"Login"}),y(Ve,{name:"register",label:"Register"})]),_:1},8,["modelValue"]),y(Ot,{modelValue:r.tab,"onUpdate:modelValue":n[5]||(n[5]=l=>r.tab=l),animated:"","transition-prev":"scale","transition-next":"scale"},{default:L(()=>[y(Ee,{name:"login"},{default:L(()=>[y(te,null,{default:L(()=>[Yt]),_:1}),y(te,null,{default:L(()=>[y(Be,{class:"q-gutter-md"},{default:L(()=>[y(ae,{modelValue:r.email,"onUpdate:modelValue":n[1]||(n[1]=l=>r.email=l),square:"",filled:"",clearable:"",type:"email",label:"Email"},null,8,["modelValue"]),y(ae,{modelValue:r.password,"onUpdate:modelValue":n[2]||(n[2]=l=>r.password=l),square:"",filled:"",clearable:"",type:"password",label:"password"},null,8,["modelValue"])]),_:1})]),_:1}),y(be,{align:"right",class:"q-px-md"},{default:L(()=>[y(pe,{onClick:r.login,icon:"login",unelevated:"",color:"primary",label:"Login"},null,8,["onClick"])]),_:1}),y(be,{align:"center"},{default:L(()=>[A("div",Jt,[y(pe,{onClick:r.signInWithGoogle,"no-caps":"",outline:"",color:"primary",icon:"mdi-google"},{default:L(()=>[Zt]),_:1},8,["onClick"])])]),_:1})]),_:1}),y(Ee,{name:"register"},{default:L(()=>[y(te,null,{default:L(()=>[ea]),_:1}),y(te,null,{default:L(()=>[y(Be,{class:"q-gutter-md"},{default:L(()=>[y(ae,{modelValue:r.emailRegister,"onUpdate:modelValue":n[3]||(n[3]=l=>r.emailRegister=l),square:"",filled:"",clearable:"",type:"email",label:"Email"},null,8,["modelValue"]),y(ae,{square:"",filled:"",clearable:"",type:"password",label:"Password",modelValue:r.passwordRegister,"onUpdate:modelValue":n[4]||(n[4]=l=>r.passwordRegister=l)},null,8,["modelValue"])]),_:1})]),_:1}),y(be,{align:"right",class:"q-px-md"},{default:L(()=>[y(pe,{icon:"mdi-text-box-check-outline",unelevated:"",color:"primary",label:"Register",onClick:r.register},null,8,["onClick"])]),_:1})]),_:1})]),_:1},8,["modelValue"])]),_:1})])])]),_:1})}var sa=yt(Gt,[["render",ta]]);export{sa as default};
