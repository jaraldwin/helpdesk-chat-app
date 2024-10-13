import{r as kr,_ as Cu,C as Du,F as Nu,g as dt,a as ku,d as xu,L as Pt,S as Mu,b as Lu,c as Ou,e as Pn,f as Fu}from"./index.esm2017.5a485a28.js";var bu="firebase",Uu="10.8.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */kr(bu,Uu,"app");var qu=typeof globalThis!="undefined"?globalThis:typeof window!="undefined"?window:typeof global!="undefined"?global:typeof self!="undefined"?self:{},y,ri=ri||{},w=qu||self;function $n(n){var t=typeof n;return t=t!="object"?t:n?Array.isArray(n)?"array":t:"null",t=="array"||t=="object"&&typeof n.length=="number"}function Ke(n){var t=typeof n;return t=="object"&&n!=null||t=="function"}function Bu(n){return Object.prototype.hasOwnProperty.call(n,vr)&&n[vr]||(n[vr]=++ju)}var vr="closure_uid_"+(1e9*Math.random()>>>0),ju=0;function zu(n,t,e){return n.call.apply(n.bind,arguments)}function $u(n,t,e){if(!n)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var i=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(i,r),n.apply(t,i)}}return function(){return n.apply(t,arguments)}}function J(n,t,e){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?J=zu:J=$u,J.apply(null,arguments)}function mn(n,t){var e=Array.prototype.slice.call(arguments,1);return function(){var r=e.slice();return r.push.apply(r,arguments),n.apply(this,r)}}function $(n,t){function e(){}e.prototype=t.prototype,n.$=t.prototype,n.prototype=new e,n.prototype.constructor=n,n.ac=function(r,i,s){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return t.prototype[i].apply(r,o)}}function xt(){this.s=this.s,this.o=this.o}var Qu=0;xt.prototype.s=!1;xt.prototype.sa=function(){!this.s&&(this.s=!0,this.N(),Qu!=0)&&Bu(this)};xt.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const co=Array.prototype.indexOf?function(n,t){return Array.prototype.indexOf.call(n,t,void 0)}:function(n,t){if(typeof n=="string")return typeof t!="string"||t.length!=1?-1:n.indexOf(t,0);for(let e=0;e<n.length;e++)if(e in n&&n[e]===t)return e;return-1};function ii(n){const t=n.length;if(0<t){const e=Array(t);for(let r=0;r<t;r++)e[r]=n[r];return e}return[]}function ls(n,t){for(let e=1;e<arguments.length;e++){const r=arguments[e];if($n(r)){const i=n.length||0,s=r.length||0;n.length=i+s;for(let o=0;o<s;o++)n[i+o]=r[o]}else n.push(r)}}function Z(n,t){this.type=n,this.g=this.target=t,this.defaultPrevented=!1}Z.prototype.h=function(){this.defaultPrevented=!0};var Gu=function(){if(!w.addEventListener||!Object.defineProperty)return!1;var n=!1,t=Object.defineProperty({},"passive",{get:function(){n=!0}});try{const e=()=>{};w.addEventListener("test",e,t),w.removeEventListener("test",e,t)}catch{}return n}();function ke(n){return/^[\s\xa0]*$/.test(n)}function Qn(){var n=w.navigator;return n&&(n=n.userAgent)?n:""}function pt(n){return Qn().indexOf(n)!=-1}function si(n){return si[" "](n),n}si[" "]=function(){};function Ku(n,t){var e=Uc;return Object.prototype.hasOwnProperty.call(e,n)?e[n]:e[n]=t(n)}var Wu=pt("Opera"),oe=pt("Trident")||pt("MSIE"),ho=pt("Edge"),xr=ho||oe,lo=pt("Gecko")&&!(Qn().toLowerCase().indexOf("webkit")!=-1&&!pt("Edge"))&&!(pt("Trident")||pt("MSIE"))&&!pt("Edge"),Hu=Qn().toLowerCase().indexOf("webkit")!=-1&&!pt("Edge");function fo(){var n=w.document;return n?n.documentMode:void 0}var Mr;t:{var Ir="",wr=function(){var n=Qn();if(lo)return/rv:([^\);]+)(\)|;)/.exec(n);if(ho)return/Edge\/([\d\.]+)/.exec(n);if(oe)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(n);if(Hu)return/WebKit\/(\S+)/.exec(n);if(Wu)return/(?:Version)[ \/]?(\S+)/.exec(n)}();if(wr&&(Ir=wr?wr[1]:""),oe){var Ar=fo();if(Ar!=null&&Ar>parseFloat(Ir)){Mr=String(Ar);break t}}Mr=Ir}var Lr;if(w.document&&oe){var ds=fo();Lr=ds||parseInt(Mr,10)||void 0}else Lr=void 0;var Xu=Lr;function xe(n,t){if(Z.call(this,n?n.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,n){var e=this.type=n.type,r=n.changedTouches&&n.changedTouches.length?n.changedTouches[0]:null;if(this.target=n.target||n.srcElement,this.g=t,t=n.relatedTarget){if(lo){t:{try{si(t.nodeName);var i=!0;break t}catch{}i=!1}i||(t=null)}}else e=="mouseover"?t=n.fromElement:e=="mouseout"&&(t=n.toElement);this.relatedTarget=t,r?(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=n.clientX!==void 0?n.clientX:n.pageX,this.clientY=n.clientY!==void 0?n.clientY:n.pageY,this.screenX=n.screenX||0,this.screenY=n.screenY||0),this.button=n.button,this.key=n.key||"",this.ctrlKey=n.ctrlKey,this.altKey=n.altKey,this.shiftKey=n.shiftKey,this.metaKey=n.metaKey,this.pointerId=n.pointerId||0,this.pointerType=typeof n.pointerType=="string"?n.pointerType:Yu[n.pointerType]||"",this.state=n.state,this.i=n,n.defaultPrevented&&xe.$.h.call(this)}}$(xe,Z);var Yu={2:"touch",3:"pen",4:"mouse"};xe.prototype.h=function(){xe.$.h.call(this);var n=this.i;n.preventDefault?n.preventDefault():n.returnValue=!1};var We="closure_listenable_"+(1e6*Math.random()|0),Ju=0;function Zu(n,t,e,r,i){this.listener=n,this.proxy=null,this.src=t,this.type=e,this.capture=!!r,this.la=i,this.key=++Ju,this.fa=this.ia=!1}function Gn(n){n.fa=!0,n.listener=null,n.proxy=null,n.src=null,n.la=null}function oi(n,t,e){for(const r in n)t.call(e,n[r],r,n)}function tc(n,t){for(const e in n)t.call(void 0,n[e],e,n)}function mo(n){const t={};for(const e in n)t[e]=n[e];return t}const fs="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function po(n,t){let e,r;for(let i=1;i<arguments.length;i++){r=arguments[i];for(e in r)n[e]=r[e];for(let s=0;s<fs.length;s++)e=fs[s],Object.prototype.hasOwnProperty.call(r,e)&&(n[e]=r[e])}}function Kn(n){this.src=n,this.g={},this.h=0}Kn.prototype.add=function(n,t,e,r,i){var s=n.toString();n=this.g[s],n||(n=this.g[s]=[],this.h++);var o=Fr(n,t,r,i);return-1<o?(t=n[o],e||(t.ia=!1)):(t=new Zu(t,this.src,s,!!r,i),t.ia=e,n.push(t)),t};function Or(n,t){var e=t.type;if(e in n.g){var r=n.g[e],i=co(r,t),s;(s=0<=i)&&Array.prototype.splice.call(r,i,1),s&&(Gn(t),n.g[e].length==0&&(delete n.g[e],n.h--))}}function Fr(n,t,e,r){for(var i=0;i<n.length;++i){var s=n[i];if(!s.fa&&s.listener==t&&s.capture==!!e&&s.la==r)return i}return-1}var ai="closure_lm_"+(1e6*Math.random()|0),Rr={};function go(n,t,e,r,i){if(r&&r.once)return yo(n,t,e,r,i);if(Array.isArray(t)){for(var s=0;s<t.length;s++)go(n,t[s],e,r,i);return null}return e=hi(e),n&&n[We]?n.O(t,e,Ke(r)?!!r.capture:!!r,i):_o(n,t,e,!1,r,i)}function _o(n,t,e,r,i,s){if(!t)throw Error("Invalid event type");var o=Ke(i)?!!i.capture:!!i,a=ci(n);if(a||(n[ai]=a=new Kn(n)),e=a.add(t,e,r,o,s),e.proxy)return e;if(r=ec(),e.proxy=r,r.src=n,r.listener=e,n.addEventListener)Gu||(i=o),i===void 0&&(i=!1),n.addEventListener(t.toString(),r,i);else if(n.attachEvent)n.attachEvent(To(t.toString()),r);else if(n.addListener&&n.removeListener)n.addListener(r);else throw Error("addEventListener and attachEvent are unavailable.");return e}function ec(){function n(e){return t.call(n.src,n.listener,e)}const t=nc;return n}function yo(n,t,e,r,i){if(Array.isArray(t)){for(var s=0;s<t.length;s++)yo(n,t[s],e,r,i);return null}return e=hi(e),n&&n[We]?n.P(t,e,Ke(r)?!!r.capture:!!r,i):_o(n,t,e,!0,r,i)}function Eo(n,t,e,r,i){if(Array.isArray(t))for(var s=0;s<t.length;s++)Eo(n,t[s],e,r,i);else r=Ke(r)?!!r.capture:!!r,e=hi(e),n&&n[We]?(n=n.i,t=String(t).toString(),t in n.g&&(s=n.g[t],e=Fr(s,e,r,i),-1<e&&(Gn(s[e]),Array.prototype.splice.call(s,e,1),s.length==0&&(delete n.g[t],n.h--)))):n&&(n=ci(n))&&(t=n.g[t.toString()],n=-1,t&&(n=Fr(t,e,r,i)),(e=-1<n?t[n]:null)&&ui(e))}function ui(n){if(typeof n!="number"&&n&&!n.fa){var t=n.src;if(t&&t[We])Or(t.i,n);else{var e=n.type,r=n.proxy;t.removeEventListener?t.removeEventListener(e,r,n.capture):t.detachEvent?t.detachEvent(To(e),r):t.addListener&&t.removeListener&&t.removeListener(r),(e=ci(t))?(Or(e,n),e.h==0&&(e.src=null,t[ai]=null)):Gn(n)}}}function To(n){return n in Rr?Rr[n]:Rr[n]="on"+n}function nc(n,t){if(n.fa)n=!0;else{t=new xe(t,this);var e=n.listener,r=n.la||n.src;n.ia&&ui(n),n=e.call(r,t)}return n}function ci(n){return n=n[ai],n instanceof Kn?n:null}var Pr="__closure_events_fn_"+(1e9*Math.random()>>>0);function hi(n){return typeof n=="function"?n:(n[Pr]||(n[Pr]=function(t){return n.handleEvent(t)}),n[Pr])}function z(){xt.call(this),this.i=new Kn(this),this.S=this,this.J=null}$(z,xt);z.prototype[We]=!0;z.prototype.removeEventListener=function(n,t,e,r){Eo(this,n,t,e,r)};function H(n,t){var e,r=n.J;if(r)for(e=[];r;r=r.J)e.push(r);if(n=n.S,r=t.type||t,typeof t=="string")t=new Z(t,n);else if(t instanceof Z)t.target=t.target||n;else{var i=t;t=new Z(r,n),po(t,i)}if(i=!0,e)for(var s=e.length-1;0<=s;s--){var o=t.g=e[s];i=pn(o,r,!0,t)&&i}if(o=t.g=n,i=pn(o,r,!0,t)&&i,i=pn(o,r,!1,t)&&i,e)for(s=0;s<e.length;s++)o=t.g=e[s],i=pn(o,r,!1,t)&&i}z.prototype.N=function(){if(z.$.N.call(this),this.i){var n=this.i,t;for(t in n.g){for(var e=n.g[t],r=0;r<e.length;r++)Gn(e[r]);delete n.g[t],n.h--}}this.J=null};z.prototype.O=function(n,t,e,r){return this.i.add(String(n),t,!1,e,r)};z.prototype.P=function(n,t,e,r){return this.i.add(String(n),t,!0,e,r)};function pn(n,t,e,r){if(t=n.i.g[String(t)],!t)return!0;t=t.concat();for(var i=!0,s=0;s<t.length;++s){var o=t[s];if(o&&!o.fa&&o.capture==e){var a=o.listener,u=o.la||o.src;o.ia&&Or(n.i,o),i=a.call(u,r)!==!1&&i}}return i&&!r.defaultPrevented}var li=w.JSON.stringify;class rc{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}function ic(){var n=di;let t=null;return n.g&&(t=n.g,n.g=n.g.next,n.g||(n.h=null),t.next=null),t}class sc{constructor(){this.h=this.g=null}add(t,e){const r=vo.get();r.set(t,e),this.h?this.h.next=r:this.g=r,this.h=r}}var vo=new rc(()=>new oc,n=>n.reset());class oc{constructor(){this.next=this.g=this.h=null}set(t,e){this.h=t,this.g=e,this.next=null}reset(){this.next=this.g=this.h=null}}function ac(n){var t=1;n=n.split(":");const e=[];for(;0<t&&n.length;)e.push(n.shift()),t--;return n.length&&e.push(n.join(":")),e}function uc(n){w.setTimeout(()=>{throw n},0)}let Me,Le=!1,di=new sc,Io=()=>{const n=w.Promise.resolve(void 0);Me=()=>{n.then(cc)}};var cc=()=>{for(var n;n=ic();){try{n.h.call(n.g)}catch(e){uc(e)}var t=vo;t.j(n),100>t.h&&(t.h++,n.next=t.g,t.g=n)}Le=!1};function Wn(n,t){z.call(this),this.h=n||1,this.g=t||w,this.j=J(this.qb,this),this.l=Date.now()}$(Wn,z);y=Wn.prototype;y.ga=!1;y.T=null;y.qb=function(){if(this.ga){var n=Date.now()-this.l;0<n&&n<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-n):(this.T&&(this.g.clearTimeout(this.T),this.T=null),H(this,"tick"),this.ga&&(fi(this),this.start()))}};y.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function fi(n){n.ga=!1,n.T&&(n.g.clearTimeout(n.T),n.T=null)}y.N=function(){Wn.$.N.call(this),fi(this),delete this.g};function mi(n,t,e){if(typeof n=="function")e&&(n=J(n,e));else if(n&&typeof n.handleEvent=="function")n=J(n.handleEvent,n);else throw Error("Invalid listener argument");return 2147483647<Number(t)?-1:w.setTimeout(n,t||0)}function wo(n){n.g=mi(()=>{n.g=null,n.i&&(n.i=!1,wo(n))},n.j);const t=n.h;n.h=null,n.m.apply(null,t)}class hc extends xt{constructor(t,e){super(),this.m=t,this.j=e,this.h=null,this.i=!1,this.g=null}l(t){this.h=arguments,this.g?this.i=!0:wo(this)}N(){super.N(),this.g&&(w.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Oe(n){xt.call(this),this.h=n,this.g={}}$(Oe,xt);var ms=[];function Ao(n,t,e,r){Array.isArray(e)||(e&&(ms[0]=e.toString()),e=ms);for(var i=0;i<e.length;i++){var s=go(t,e[i],r||n.handleEvent,!1,n.h||n);if(!s)break;n.g[s.key]=s}}function Ro(n){oi(n.g,function(t,e){this.g.hasOwnProperty(e)&&ui(t)},n),n.g={}}Oe.prototype.N=function(){Oe.$.N.call(this),Ro(this)};Oe.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function Hn(){this.g=!0}Hn.prototype.Ea=function(){this.g=!1};function lc(n,t,e,r,i,s){n.info(function(){if(n.g)if(s)for(var o="",a=s.split("&"),u=0;u<a.length;u++){var c=a[u].split("=");if(1<c.length){var h=c[0];c=c[1];var l=h.split("_");o=2<=l.length&&l[1]=="type"?o+(h+"="+c+"&"):o+(h+"=redacted&")}}else o=null;else o=s;return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+t+`
`+e+`
`+o})}function dc(n,t,e,r,i,s,o){n.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+t+`
`+e+`
`+s+" "+o})}function ee(n,t,e,r){n.info(function(){return"XMLHTTP TEXT ("+t+"): "+mc(n,e)+(r?" "+r:"")})}function fc(n,t){n.info(function(){return"TIMEOUT: "+t})}Hn.prototype.info=function(){};function mc(n,t){if(!n.g)return t;if(!t)return null;try{var e=JSON.parse(t);if(e){for(n=0;n<e.length;n++)if(Array.isArray(e[n])){var r=e[n];if(!(2>r.length)){var i=r[1];if(Array.isArray(i)&&!(1>i.length)){var s=i[0];if(s!="noop"&&s!="stop"&&s!="close")for(var o=1;o<i.length;o++)i[o]=""}}}}return li(e)}catch{return t}}var Gt={},ps=null;function Xn(){return ps=ps||new z}Gt.Ta="serverreachability";function Po(n){Z.call(this,Gt.Ta,n)}$(Po,Z);function Fe(n){const t=Xn();H(t,new Po(t))}Gt.STAT_EVENT="statevent";function Vo(n,t){Z.call(this,Gt.STAT_EVENT,n),this.stat=t}$(Vo,Z);function rt(n){const t=Xn();H(t,new Vo(t,n))}Gt.Ua="timingevent";function So(n,t){Z.call(this,Gt.Ua,n),this.size=t}$(So,Z);function He(n,t){if(typeof n!="function")throw Error("Fn must not be null and must be a function");return w.setTimeout(function(){n()},t)}var Yn={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},Co={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function pi(){}pi.prototype.h=null;function gs(n){return n.h||(n.h=n.i())}function Do(){}var Xe={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function gi(){Z.call(this,"d")}$(gi,Z);function _i(){Z.call(this,"c")}$(_i,Z);var br;function Jn(){}$(Jn,pi);Jn.prototype.g=function(){return new XMLHttpRequest};Jn.prototype.i=function(){return{}};br=new Jn;function Ye(n,t,e,r){this.l=n,this.j=t,this.m=e,this.W=r||1,this.U=new Oe(this),this.P=pc,n=xr?125:void 0,this.V=new Wn(n),this.I=null,this.i=!1,this.u=this.B=this.A=this.L=this.G=this.Y=this.C=null,this.F=[],this.g=null,this.o=0,this.s=this.v=null,this.ca=-1,this.J=!1,this.O=0,this.M=null,this.ba=this.K=this.aa=this.S=!1,this.h=new No}function No(){this.i=null,this.g="",this.h=!1}var pc=45e3,ko={},Ur={};y=Ye.prototype;y.setTimeout=function(n){this.P=n};function qr(n,t,e){n.L=1,n.A=tr(At(t)),n.u=e,n.S=!0,xo(n,null)}function xo(n,t){n.G=Date.now(),Je(n),n.B=At(n.A);var e=n.B,r=n.W;Array.isArray(r)||(r=[String(r)]),Bo(e.i,"t",r),n.o=0,e=n.l.J,n.h=new No,n.g=ua(n.l,e?t:null,!n.u),0<n.O&&(n.M=new hc(J(n.Pa,n,n.g),n.O)),Ao(n.U,n.g,"readystatechange",n.nb),t=n.I?mo(n.I):{},n.u?(n.v||(n.v="POST"),t["Content-Type"]="application/x-www-form-urlencoded",n.g.ha(n.B,n.v,n.u,t)):(n.v="GET",n.g.ha(n.B,n.v,null,t)),Fe(),lc(n.j,n.v,n.B,n.m,n.W,n.u)}y.nb=function(n){n=n.target;const t=this.M;t&&gt(n)==3?t.l():this.Pa(n)};y.Pa=function(n){try{if(n==this.g)t:{const h=gt(this.g);var t=this.g.Ia();const l=this.g.da();if(!(3>h)&&(h!=3||xr||this.g&&(this.h.h||this.g.ja()||Ts(this.g)))){this.J||h!=4||t==7||(t==8||0>=l?Fe(3):Fe(2)),Zn(this);var e=this.g.da();this.ca=e;e:if(Mo(this)){var r=Ts(this.g);n="";var i=r.length,s=gt(this.g)==4;if(!this.h.i){if(typeof TextDecoder=="undefined"){Ft(this),Re(this);var o="";break e}this.h.i=new w.TextDecoder}for(t=0;t<i;t++)this.h.h=!0,n+=this.h.i.decode(r[t],{stream:s&&t==i-1});r.length=0,this.h.g+=n,this.o=0,o=this.h.g}else o=this.g.ja();if(this.i=e==200,dc(this.j,this.v,this.B,this.m,this.W,h,e),this.i){if(this.aa&&!this.K){e:{if(this.g){var a,u=this.g;if((a=u.g?u.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!ke(a)){var c=a;break e}}c=null}if(e=c)ee(this.j,this.m,e,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Br(this,e);else{this.i=!1,this.s=3,rt(12),Ft(this),Re(this);break t}}this.S?(Lo(this,h,o),xr&&this.i&&h==3&&(Ao(this.U,this.V,"tick",this.mb),this.V.start())):(ee(this.j,this.m,o,null),Br(this,o)),h==4&&Ft(this),this.i&&!this.J&&(h==4?ia(this.l,this):(this.i=!1,Je(this)))}else Oc(this.g),e==400&&0<o.indexOf("Unknown SID")?(this.s=3,rt(12)):(this.s=0,rt(13)),Ft(this),Re(this)}}}catch{}finally{}};function Mo(n){return n.g?n.v=="GET"&&n.L!=2&&n.l.Ha:!1}function Lo(n,t,e){let r=!0,i;for(;!n.J&&n.o<e.length;)if(i=gc(n,e),i==Ur){t==4&&(n.s=4,rt(14),r=!1),ee(n.j,n.m,null,"[Incomplete Response]");break}else if(i==ko){n.s=4,rt(15),ee(n.j,n.m,e,"[Invalid Chunk]"),r=!1;break}else ee(n.j,n.m,i,null),Br(n,i);Mo(n)&&n.o!=0&&(n.h.g=n.h.g.slice(n.o),n.o=0),t!=4||e.length!=0||n.h.h||(n.s=1,rt(16),r=!1),n.i=n.i&&r,r?0<e.length&&!n.ba&&(n.ba=!0,t=n.l,t.g==n&&t.ca&&!t.M&&(t.l.info("Great, no buffering proxy detected. Bytes received: "+e.length),wi(t),t.M=!0,rt(11))):(ee(n.j,n.m,e,"[Invalid Chunked Response]"),Ft(n),Re(n))}y.mb=function(){if(this.g){var n=gt(this.g),t=this.g.ja();this.o<t.length&&(Zn(this),Lo(this,n,t),this.i&&n!=4&&Je(this))}};function gc(n,t){var e=n.o,r=t.indexOf(`
`,e);return r==-1?Ur:(e=Number(t.substring(e,r)),isNaN(e)?ko:(r+=1,r+e>t.length?Ur:(t=t.slice(r,r+e),n.o=r+e,t)))}y.cancel=function(){this.J=!0,Ft(this)};function Je(n){n.Y=Date.now()+n.P,Oo(n,n.P)}function Oo(n,t){if(n.C!=null)throw Error("WatchDog timer not null");n.C=He(J(n.lb,n),t)}function Zn(n){n.C&&(w.clearTimeout(n.C),n.C=null)}y.lb=function(){this.C=null;const n=Date.now();0<=n-this.Y?(fc(this.j,this.B),this.L!=2&&(Fe(),rt(17)),Ft(this),this.s=2,Re(this)):Oo(this,this.Y-n)};function Re(n){n.l.H==0||n.J||ia(n.l,n)}function Ft(n){Zn(n);var t=n.M;t&&typeof t.sa=="function"&&t.sa(),n.M=null,fi(n.V),Ro(n.U),n.g&&(t=n.g,n.g=null,t.abort(),t.sa())}function Br(n,t){try{var e=n.l;if(e.H!=0&&(e.g==n||jr(e.i,n))){if(!n.K&&jr(e.i,n)&&e.H==3){try{var r=e.Ja.g.parse(t)}catch{r=null}if(Array.isArray(r)&&r.length==3){var i=r;if(i[0]==0){t:if(!e.u){if(e.g)if(e.g.G+3e3<n.G)Cn(e),ir(e);else break t;Ii(e),rt(18)}}else e.Fa=i[1],0<e.Fa-e.V&&37500>i[2]&&e.G&&e.A==0&&!e.v&&(e.v=He(J(e.ib,e),6e3));if(1>=$o(e.i)&&e.oa){try{e.oa()}catch{}e.oa=void 0}}else bt(e,11)}else if((n.K||e.g==n)&&Cn(e),!ke(t))for(i=e.Ja.g.parse(t),t=0;t<i.length;t++){let c=i[t];if(e.V=c[0],c=c[1],e.H==2)if(c[0]=="c"){e.K=c[1],e.pa=c[2];const h=c[3];h!=null&&(e.ra=h,e.l.info("VER="+e.ra));const l=c[4];l!=null&&(e.Ga=l,e.l.info("SVER="+e.Ga));const d=c[5];d!=null&&typeof d=="number"&&0<d&&(r=1.5*d,e.L=r,e.l.info("backChannelRequestTimeoutMs_="+r)),r=e;const p=n.g;if(p){const R=p.g?p.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(R){var s=r.i;s.g||R.indexOf("spdy")==-1&&R.indexOf("quic")==-1&&R.indexOf("h2")==-1||(s.j=s.l,s.g=new Set,s.h&&(yi(s,s.h),s.h=null))}if(r.F){const P=p.g?p.g.getResponseHeader("X-HTTP-Session-Id"):null;P&&(r.Da=P,x(r.I,r.F,P))}}e.H=3,e.h&&e.h.Ba(),e.ca&&(e.S=Date.now()-n.G,e.l.info("Handshake RTT: "+e.S+"ms")),r=e;var o=n;if(r.wa=aa(r,r.J?r.pa:null,r.Y),o.K){Qo(r.i,o);var a=o,u=r.L;u&&a.setTimeout(u),a.C&&(Zn(a),Je(a)),r.g=o}else na(r);0<e.j.length&&sr(e)}else c[0]!="stop"&&c[0]!="close"||bt(e,7);else e.H==3&&(c[0]=="stop"||c[0]=="close"?c[0]=="stop"?bt(e,7):vi(e):c[0]!="noop"&&e.h&&e.h.Aa(c),e.A=0)}}Fe(4)}catch{}}function _c(n){if(n.Z&&typeof n.Z=="function")return n.Z();if(typeof Map!="undefined"&&n instanceof Map||typeof Set!="undefined"&&n instanceof Set)return Array.from(n.values());if(typeof n=="string")return n.split("");if($n(n)){for(var t=[],e=n.length,r=0;r<e;r++)t.push(n[r]);return t}t=[],e=0;for(r in n)t[e++]=n[r];return t}function yc(n){if(n.ta&&typeof n.ta=="function")return n.ta();if(!n.Z||typeof n.Z!="function"){if(typeof Map!="undefined"&&n instanceof Map)return Array.from(n.keys());if(!(typeof Set!="undefined"&&n instanceof Set)){if($n(n)||typeof n=="string"){var t=[];n=n.length;for(var e=0;e<n;e++)t.push(e);return t}t=[],e=0;for(const r in n)t[e++]=r;return t}}}function Fo(n,t){if(n.forEach&&typeof n.forEach=="function")n.forEach(t,void 0);else if($n(n)||typeof n=="string")Array.prototype.forEach.call(n,t,void 0);else for(var e=yc(n),r=_c(n),i=r.length,s=0;s<i;s++)t.call(void 0,r[s],e&&e[s],n)}var bo=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Ec(n,t){if(n){n=n.split("&");for(var e=0;e<n.length;e++){var r=n[e].indexOf("="),i=null;if(0<=r){var s=n[e].substring(0,r);i=n[e].substring(r+1)}else s=n[e];t(s,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function Bt(n){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,n instanceof Bt){this.h=n.h,Vn(this,n.j),this.s=n.s,this.g=n.g,Sn(this,n.m),this.l=n.l;var t=n.i,e=new be;e.i=t.i,t.g&&(e.g=new Map(t.g),e.h=t.h),_s(this,e),this.o=n.o}else n&&(t=String(n).match(bo))?(this.h=!1,Vn(this,t[1]||"",!0),this.s=ve(t[2]||""),this.g=ve(t[3]||"",!0),Sn(this,t[4]),this.l=ve(t[5]||"",!0),_s(this,t[6]||"",!0),this.o=ve(t[7]||"")):(this.h=!1,this.i=new be(null,this.h))}Bt.prototype.toString=function(){var n=[],t=this.j;t&&n.push(Ie(t,ys,!0),":");var e=this.g;return(e||t=="file")&&(n.push("//"),(t=this.s)&&n.push(Ie(t,ys,!0),"@"),n.push(encodeURIComponent(String(e)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),e=this.m,e!=null&&n.push(":",String(e))),(e=this.l)&&(this.g&&e.charAt(0)!="/"&&n.push("/"),n.push(Ie(e,e.charAt(0)=="/"?Ic:vc,!0))),(e=this.i.toString())&&n.push("?",e),(e=this.o)&&n.push("#",Ie(e,Ac)),n.join("")};function At(n){return new Bt(n)}function Vn(n,t,e){n.j=e?ve(t,!0):t,n.j&&(n.j=n.j.replace(/:$/,""))}function Sn(n,t){if(t){if(t=Number(t),isNaN(t)||0>t)throw Error("Bad port number "+t);n.m=t}else n.m=null}function _s(n,t,e){t instanceof be?(n.i=t,Rc(n.i,n.h)):(e||(t=Ie(t,wc)),n.i=new be(t,n.h))}function x(n,t,e){n.i.set(t,e)}function tr(n){return x(n,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),n}function ve(n,t){return n?t?decodeURI(n.replace(/%25/g,"%2525")):decodeURIComponent(n):""}function Ie(n,t,e){return typeof n=="string"?(n=encodeURI(n).replace(t,Tc),e&&(n=n.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n):null}function Tc(n){return n=n.charCodeAt(0),"%"+(n>>4&15).toString(16)+(n&15).toString(16)}var ys=/[#\/\?@]/g,vc=/[#\?:]/g,Ic=/[#\?]/g,wc=/[#\?@]/g,Ac=/#/g;function be(n,t){this.h=this.g=null,this.i=n||null,this.j=!!t}function Mt(n){n.g||(n.g=new Map,n.h=0,n.i&&Ec(n.i,function(t,e){n.add(decodeURIComponent(t.replace(/\+/g," ")),e)}))}y=be.prototype;y.add=function(n,t){Mt(this),this.i=null,n=de(this,n);var e=this.g.get(n);return e||this.g.set(n,e=[]),e.push(t),this.h+=1,this};function Uo(n,t){Mt(n),t=de(n,t),n.g.has(t)&&(n.i=null,n.h-=n.g.get(t).length,n.g.delete(t))}function qo(n,t){return Mt(n),t=de(n,t),n.g.has(t)}y.forEach=function(n,t){Mt(this),this.g.forEach(function(e,r){e.forEach(function(i){n.call(t,i,r,this)},this)},this)};y.ta=function(){Mt(this);const n=Array.from(this.g.values()),t=Array.from(this.g.keys()),e=[];for(let r=0;r<t.length;r++){const i=n[r];for(let s=0;s<i.length;s++)e.push(t[r])}return e};y.Z=function(n){Mt(this);let t=[];if(typeof n=="string")qo(this,n)&&(t=t.concat(this.g.get(de(this,n))));else{n=Array.from(this.g.values());for(let e=0;e<n.length;e++)t=t.concat(n[e])}return t};y.set=function(n,t){return Mt(this),this.i=null,n=de(this,n),qo(this,n)&&(this.h-=this.g.get(n).length),this.g.set(n,[t]),this.h+=1,this};y.get=function(n,t){return n?(n=this.Z(n),0<n.length?String(n[0]):t):t};function Bo(n,t,e){Uo(n,t),0<e.length&&(n.i=null,n.g.set(de(n,t),ii(e)),n.h+=e.length)}y.toString=function(){if(this.i)return this.i;if(!this.g)return"";const n=[],t=Array.from(this.g.keys());for(var e=0;e<t.length;e++){var r=t[e];const s=encodeURIComponent(String(r)),o=this.Z(r);for(r=0;r<o.length;r++){var i=s;o[r]!==""&&(i+="="+encodeURIComponent(String(o[r]))),n.push(i)}}return this.i=n.join("&")};function de(n,t){return t=String(t),n.j&&(t=t.toLowerCase()),t}function Rc(n,t){t&&!n.j&&(Mt(n),n.i=null,n.g.forEach(function(e,r){var i=r.toLowerCase();r!=i&&(Uo(this,r),Bo(this,i,e))},n)),n.j=t}var Pc=class{constructor(n,t){this.g=n,this.map=t}};function jo(n){this.l=n||Vc,w.PerformanceNavigationTiming?(n=w.performance.getEntriesByType("navigation"),n=0<n.length&&(n[0].nextHopProtocol=="hq"||n[0].nextHopProtocol=="h2")):n=!!(w.g&&w.g.Ka&&w.g.Ka()&&w.g.Ka().dc),this.j=n?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var Vc=10;function zo(n){return n.h?!0:n.g?n.g.size>=n.j:!1}function $o(n){return n.h?1:n.g?n.g.size:0}function jr(n,t){return n.h?n.h==t:n.g?n.g.has(t):!1}function yi(n,t){n.g?n.g.add(t):n.h=t}function Qo(n,t){n.h&&n.h==t?n.h=null:n.g&&n.g.has(t)&&n.g.delete(t)}jo.prototype.cancel=function(){if(this.i=Go(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const n of this.g.values())n.cancel();this.g.clear()}};function Go(n){if(n.h!=null)return n.i.concat(n.h.F);if(n.g!=null&&n.g.size!==0){let t=n.i;for(const e of n.g.values())t=t.concat(e.F);return t}return ii(n.i)}var Sc=class{stringify(n){return w.JSON.stringify(n,void 0)}parse(n){return w.JSON.parse(n,void 0)}};function Cc(){this.g=new Sc}function Dc(n,t,e){const r=e||"";try{Fo(n,function(i,s){let o=i;Ke(i)&&(o=li(i)),t.push(r+s+"="+encodeURIComponent(o))})}catch(i){throw t.push(r+"type="+encodeURIComponent("_badmap")),i}}function Nc(n,t){const e=new Hn;if(w.Image){const r=new Image;r.onload=mn(gn,e,r,"TestLoadImage: loaded",!0,t),r.onerror=mn(gn,e,r,"TestLoadImage: error",!1,t),r.onabort=mn(gn,e,r,"TestLoadImage: abort",!1,t),r.ontimeout=mn(gn,e,r,"TestLoadImage: timeout",!1,t),w.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=n}else t(!1)}function gn(n,t,e,r,i){try{t.onload=null,t.onerror=null,t.onabort=null,t.ontimeout=null,i(r)}catch{}}function er(n){this.l=n.ec||null,this.j=n.ob||!1}$(er,pi);er.prototype.g=function(){return new nr(this.l,this.j)};er.prototype.i=function(n){return function(){return n}}({});function nr(n,t){z.call(this),this.F=n,this.u=t,this.m=void 0,this.readyState=Ei,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}$(nr,z);var Ei=0;y=nr.prototype;y.open=function(n,t){if(this.readyState!=Ei)throw this.abort(),Error("Error reopening a connection");this.C=n,this.B=t,this.readyState=1,Ue(this)};y.send=function(n){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const t={headers:this.v,method:this.C,credentials:this.m,cache:void 0};n&&(t.body=n),(this.F||w).fetch(new Request(this.B,t)).then(this.$a.bind(this),this.ka.bind(this))};y.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Ze(this)),this.readyState=Ei};y.$a=function(n){if(this.g&&(this.l=n,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=n.headers,this.readyState=2,Ue(this)),this.g&&(this.readyState=3,Ue(this),this.g)))if(this.responseType==="arraybuffer")n.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if(typeof w.ReadableStream!="undefined"&&"body"in n){if(this.j=n.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;Ko(this)}else n.text().then(this.Za.bind(this),this.ka.bind(this))};function Ko(n){n.j.read().then(n.Xa.bind(n)).catch(n.ka.bind(n))}y.Xa=function(n){if(this.g){if(this.u&&n.value)this.response.push(n.value);else if(!this.u){var t=n.value?n.value:new Uint8Array(0);(t=this.A.decode(t,{stream:!n.done}))&&(this.response=this.responseText+=t)}n.done?Ze(this):Ue(this),this.readyState==3&&Ko(this)}};y.Za=function(n){this.g&&(this.response=this.responseText=n,Ze(this))};y.Ya=function(n){this.g&&(this.response=n,Ze(this))};y.ka=function(){this.g&&Ze(this)};function Ze(n){n.readyState=4,n.l=null,n.j=null,n.A=null,Ue(n)}y.setRequestHeader=function(n,t){this.v.append(n,t)};y.getResponseHeader=function(n){return this.h&&this.h.get(n.toLowerCase())||""};y.getAllResponseHeaders=function(){if(!this.h)return"";const n=[],t=this.h.entries();for(var e=t.next();!e.done;)e=e.value,n.push(e[0]+": "+e[1]),e=t.next();return n.join(`\r
`)};function Ue(n){n.onreadystatechange&&n.onreadystatechange.call(n)}Object.defineProperty(nr.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(n){this.m=n?"include":"same-origin"}});var kc=w.JSON.parse;function O(n){z.call(this),this.headers=new Map,this.u=n||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=Wo,this.L=this.M=!1}$(O,z);var Wo="",xc=/^https?$/i,Mc=["POST","PUT"];y=O.prototype;y.Oa=function(n){this.M=n};y.ha=function(n,t,e,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+n);t=t?t.toUpperCase():"GET",this.I=n,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():br.g(),this.C=this.u?gs(this.u):gs(br),this.g.onreadystatechange=J(this.La,this);try{this.G=!0,this.g.open(t,String(n),!0),this.G=!1}catch(s){Es(this,s);return}if(n=e||"",e=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var i in r)e.set(i,r[i]);else if(typeof r.keys=="function"&&typeof r.get=="function")for(const s of r.keys())e.set(s,r.get(s));else throw Error("Unknown input type for opt_headers: "+String(r));r=Array.from(e.keys()).find(s=>s.toLowerCase()=="content-type"),i=w.FormData&&n instanceof w.FormData,!(0<=co(Mc,t))||r||i||e.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[s,o]of e)this.g.setRequestHeader(s,o);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{Yo(this),0<this.B&&((this.L=Lc(this.g))?(this.g.timeout=this.B,this.g.ontimeout=J(this.ua,this)):this.A=mi(this.ua,this.B,this)),this.v=!0,this.g.send(n),this.v=!1}catch(s){Es(this,s)}};function Lc(n){return oe&&typeof n.timeout=="number"&&n.ontimeout!==void 0}y.ua=function(){typeof ri!="undefined"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,H(this,"timeout"),this.abort(8))};function Es(n,t){n.h=!1,n.g&&(n.l=!0,n.g.abort(),n.l=!1),n.j=t,n.m=5,Ho(n),rr(n)}function Ho(n){n.F||(n.F=!0,H(n,"complete"),H(n,"error"))}y.abort=function(n){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=n||7,H(this,"complete"),H(this,"abort"),rr(this))};y.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),rr(this,!0)),O.$.N.call(this)};y.La=function(){this.s||(this.G||this.v||this.l?Xo(this):this.kb())};y.kb=function(){Xo(this)};function Xo(n){if(n.h&&typeof ri!="undefined"&&(!n.C[1]||gt(n)!=4||n.da()!=2)){if(n.v&&gt(n)==4)mi(n.La,0,n);else if(H(n,"readystatechange"),gt(n)==4){n.h=!1;try{const o=n.da();t:switch(o){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var t=!0;break t;default:t=!1}var e;if(!(e=t)){var r;if(r=o===0){var i=String(n.I).match(bo)[1]||null;!i&&w.self&&w.self.location&&(i=w.self.location.protocol.slice(0,-1)),r=!xc.test(i?i.toLowerCase():"")}e=r}if(e)H(n,"complete"),H(n,"success");else{n.m=6;try{var s=2<gt(n)?n.g.statusText:""}catch{s=""}n.j=s+" ["+n.da()+"]",Ho(n)}}finally{rr(n)}}}}function rr(n,t){if(n.g){Yo(n);const e=n.g,r=n.C[0]?()=>{}:null;n.g=null,n.C=null,t||H(n,"ready");try{e.onreadystatechange=r}catch{}}}function Yo(n){n.g&&n.L&&(n.g.ontimeout=null),n.A&&(w.clearTimeout(n.A),n.A=null)}y.isActive=function(){return!!this.g};function gt(n){return n.g?n.g.readyState:0}y.da=function(){try{return 2<gt(this)?this.g.status:-1}catch{return-1}};y.ja=function(){try{return this.g?this.g.responseText:""}catch{return""}};y.Wa=function(n){if(this.g){var t=this.g.responseText;return n&&t.indexOf(n)==0&&(t=t.substring(n.length)),kc(t)}};function Ts(n){try{if(!n.g)return null;if("response"in n.g)return n.g.response;switch(n.K){case Wo:case"text":return n.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in n.g)return n.g.mozResponseArrayBuffer}return null}catch{return null}}function Oc(n){const t={};n=(n.g&&2<=gt(n)&&n.g.getAllResponseHeaders()||"").split(`\r
`);for(let r=0;r<n.length;r++){if(ke(n[r]))continue;var e=ac(n[r]);const i=e[0];if(e=e[1],typeof e!="string")continue;e=e.trim();const s=t[i]||[];t[i]=s,s.push(e)}tc(t,function(r){return r.join(", ")})}y.Ia=function(){return this.m};y.Sa=function(){return typeof this.j=="string"?this.j:String(this.j)};function Jo(n){let t="";return oi(n,function(e,r){t+=r,t+=":",t+=e,t+=`\r
`}),t}function Ti(n,t,e){t:{for(r in e){var r=!1;break t}r=!0}r||(e=Jo(e),typeof n=="string"?e!=null&&encodeURIComponent(String(e)):x(n,t,e))}function _e(n,t,e){return e&&e.internalChannelParams&&e.internalChannelParams[n]||t}function Zo(n){this.Ga=0,this.j=[],this.l=new Hn,this.pa=this.wa=this.I=this.Y=this.g=this.Da=this.F=this.na=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=_e("failFast",!1,n),this.G=this.v=this.u=this.m=this.h=null,this.aa=!0,this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=_e("baseRetryDelayMs",5e3,n),this.hb=_e("retryDelaySeedMs",1e4,n),this.eb=_e("forwardChannelMaxRetries",2,n),this.xa=_e("forwardChannelRequestTimeoutMs",2e4,n),this.va=n&&n.xmlHttpFactory||void 0,this.Ha=n&&n.useFetchStreams||!1,this.L=void 0,this.J=n&&n.supportsCrossDomainXhr||!1,this.K="",this.i=new jo(n&&n.concurrentRequestLimit),this.Ja=new Cc,this.P=n&&n.fastHandshake||!1,this.O=n&&n.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=n&&n.bc||!1,n&&n.Ea&&this.l.Ea(),n&&n.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&n&&n.detectBufferingProxy||!1,this.qa=void 0,n&&n.longPollingTimeout&&0<n.longPollingTimeout&&(this.qa=n.longPollingTimeout),this.oa=void 0,this.S=0,this.M=!1,this.ma=this.B=null}y=Zo.prototype;y.ra=8;y.H=1;function vi(n){if(ta(n),n.H==3){var t=n.W++,e=At(n.I);if(x(e,"SID",n.K),x(e,"RID",t),x(e,"TYPE","terminate"),tn(n,e),t=new Ye(n,n.l,t),t.L=2,t.A=tr(At(e)),e=!1,w.navigator&&w.navigator.sendBeacon)try{e=w.navigator.sendBeacon(t.A.toString(),"")}catch{}!e&&w.Image&&(new Image().src=t.A,e=!0),e||(t.g=ua(t.l,null),t.g.ha(t.A)),t.G=Date.now(),Je(t)}oa(n)}function ir(n){n.g&&(wi(n),n.g.cancel(),n.g=null)}function ta(n){ir(n),n.u&&(w.clearTimeout(n.u),n.u=null),Cn(n),n.i.cancel(),n.m&&(typeof n.m=="number"&&w.clearTimeout(n.m),n.m=null)}function sr(n){if(!zo(n.i)&&!n.m){n.m=!0;var t=n.Na;Me||Io(),Le||(Me(),Le=!0),di.add(t,n),n.C=0}}function Fc(n,t){return $o(n.i)>=n.i.j-(n.m?1:0)?!1:n.m?(n.j=t.F.concat(n.j),!0):n.H==1||n.H==2||n.C>=(n.cb?0:n.eb)?!1:(n.m=He(J(n.Na,n,t),sa(n,n.C)),n.C++,!0)}y.Na=function(n){if(this.m)if(this.m=null,this.H==1){if(!n){this.W=Math.floor(1e5*Math.random()),n=this.W++;const i=new Ye(this,this.l,n);let s=this.s;if(this.U&&(s?(s=mo(s),po(s,this.U)):s=this.U),this.o!==null||this.O||(i.I=s,s=null),this.P)t:{for(var t=0,e=0;e<this.j.length;e++){e:{var r=this.j[e];if("__data__"in r.map&&(r=r.map.__data__,typeof r=="string")){r=r.length;break e}r=void 0}if(r===void 0)break;if(t+=r,4096<t){t=e;break t}if(t===4096||e===this.j.length-1){t=e+1;break t}}t=1e3}else t=1e3;t=ea(this,i,t),e=At(this.I),x(e,"RID",n),x(e,"CVER",22),this.F&&x(e,"X-HTTP-Session-Id",this.F),tn(this,e),s&&(this.O?t="headers="+encodeURIComponent(String(Jo(s)))+"&"+t:this.o&&Ti(e,this.o,s)),yi(this.i,i),this.bb&&x(e,"TYPE","init"),this.P?(x(e,"$req",t),x(e,"SID","null"),i.aa=!0,qr(i,e,null)):qr(i,e,t),this.H=2}}else this.H==3&&(n?vs(this,n):this.j.length==0||zo(this.i)||vs(this))};function vs(n,t){var e;t?e=t.m:e=n.W++;const r=At(n.I);x(r,"SID",n.K),x(r,"RID",e),x(r,"AID",n.V),tn(n,r),n.o&&n.s&&Ti(r,n.o,n.s),e=new Ye(n,n.l,e,n.C+1),n.o===null&&(e.I=n.s),t&&(n.j=t.F.concat(n.j)),t=ea(n,e,1e3),e.setTimeout(Math.round(.5*n.xa)+Math.round(.5*n.xa*Math.random())),yi(n.i,e),qr(e,r,t)}function tn(n,t){n.na&&oi(n.na,function(e,r){x(t,r,e)}),n.h&&Fo({},function(e,r){x(t,r,e)})}function ea(n,t,e){e=Math.min(n.j.length,e);var r=n.h?J(n.h.Va,n.h,n):null;t:{var i=n.j;let s=-1;for(;;){const o=["count="+e];s==-1?0<e?(s=i[0].g,o.push("ofs="+s)):s=0:o.push("ofs="+s);let a=!0;for(let u=0;u<e;u++){let c=i[u].g;const h=i[u].map;if(c-=s,0>c)s=Math.max(0,i[u].g-100),a=!1;else try{Dc(h,o,"req"+c+"_")}catch{r&&r(h)}}if(a){r=o.join("&");break t}}}return n=n.j.splice(0,e),t.F=n,r}function na(n){if(!n.g&&!n.u){n.ba=1;var t=n.Ma;Me||Io(),Le||(Me(),Le=!0),di.add(t,n),n.A=0}}function Ii(n){return n.g||n.u||3<=n.A?!1:(n.ba++,n.u=He(J(n.Ma,n),sa(n,n.A)),n.A++,!0)}y.Ma=function(){if(this.u=null,ra(this),this.ca&&!(this.M||this.g==null||0>=this.S)){var n=2*this.S;this.l.info("BP detection timer enabled: "+n),this.B=He(J(this.jb,this),n)}};y.jb=function(){this.B&&(this.B=null,this.l.info("BP detection timeout reached."),this.l.info("Buffering proxy detected and switch to long-polling!"),this.G=!1,this.M=!0,rt(10),ir(this),ra(this))};function wi(n){n.B!=null&&(w.clearTimeout(n.B),n.B=null)}function ra(n){n.g=new Ye(n,n.l,"rpc",n.ba),n.o===null&&(n.g.I=n.s),n.g.O=0;var t=At(n.wa);x(t,"RID","rpc"),x(t,"SID",n.K),x(t,"AID",n.V),x(t,"CI",n.G?"0":"1"),!n.G&&n.qa&&x(t,"TO",n.qa),x(t,"TYPE","xmlhttp"),tn(n,t),n.o&&n.s&&Ti(t,n.o,n.s),n.L&&n.g.setTimeout(n.L);var e=n.g;n=n.pa,e.L=1,e.A=tr(At(t)),e.u=null,e.S=!0,xo(e,n)}y.ib=function(){this.v!=null&&(this.v=null,ir(this),Ii(this),rt(19))};function Cn(n){n.v!=null&&(w.clearTimeout(n.v),n.v=null)}function ia(n,t){var e=null;if(n.g==t){Cn(n),wi(n),n.g=null;var r=2}else if(jr(n.i,t))e=t.F,Qo(n.i,t),r=1;else return;if(n.H!=0){if(t.i)if(r==1){e=t.u?t.u.length:0,t=Date.now()-t.G;var i=n.C;r=Xn(),H(r,new So(r,e)),sr(n)}else na(n);else if(i=t.s,i==3||i==0&&0<t.ca||!(r==1&&Fc(n,t)||r==2&&Ii(n)))switch(e&&0<e.length&&(t=n.i,t.i=t.i.concat(e)),i){case 1:bt(n,5);break;case 4:bt(n,10);break;case 3:bt(n,6);break;default:bt(n,2)}}}function sa(n,t){let e=n.ab+Math.floor(Math.random()*n.hb);return n.isActive()||(e*=2),e*t}function bt(n,t){if(n.l.info("Error code "+t),t==2){var e=null;n.h&&(e=null);var r=J(n.pb,n);e||(e=new Bt("//www.google.com/images/cleardot.gif"),w.location&&w.location.protocol=="http"||Vn(e,"https"),tr(e)),Nc(e.toString(),r)}else rt(2);n.H=0,n.h&&n.h.za(t),oa(n),ta(n)}y.pb=function(n){n?(this.l.info("Successfully pinged google.com"),rt(2)):(this.l.info("Failed to ping google.com"),rt(1))};function oa(n){if(n.H=0,n.ma=[],n.h){const t=Go(n.i);(t.length!=0||n.j.length!=0)&&(ls(n.ma,t),ls(n.ma,n.j),n.i.i.length=0,ii(n.j),n.j.length=0),n.h.ya()}}function aa(n,t,e){var r=e instanceof Bt?At(e):new Bt(e);if(r.g!="")t&&(r.g=t+"."+r.g),Sn(r,r.m);else{var i=w.location;r=i.protocol,t=t?t+"."+i.hostname:i.hostname,i=+i.port;var s=new Bt(null);r&&Vn(s,r),t&&(s.g=t),i&&Sn(s,i),e&&(s.l=e),r=s}return e=n.F,t=n.Da,e&&t&&x(r,e,t),x(r,"VER",n.ra),tn(n,r),r}function ua(n,t,e){if(t&&!n.J)throw Error("Can't create secondary domain capable XhrIo object.");return t=n.Ha&&!n.va?new O(new er({ob:e})):new O(n.va),t.Oa(n.J),t}y.isActive=function(){return!!this.h&&this.h.isActive(this)};function ca(){}y=ca.prototype;y.Ba=function(){};y.Aa=function(){};y.za=function(){};y.ya=function(){};y.isActive=function(){return!0};y.Va=function(){};function Dn(){if(oe&&!(10<=Number(Xu)))throw Error("Environmental error: no available transport.")}Dn.prototype.g=function(n,t){return new ct(n,t)};function ct(n,t){z.call(this),this.g=new Zo(t),this.l=n,this.h=t&&t.messageUrlParams||null,n=t&&t.messageHeaders||null,t&&t.clientProtocolHeaderRequired&&(n?n["X-Client-Protocol"]="webchannel":n={"X-Client-Protocol":"webchannel"}),this.g.s=n,n=t&&t.initMessageHeaders||null,t&&t.messageContentType&&(n?n["X-WebChannel-Content-Type"]=t.messageContentType:n={"X-WebChannel-Content-Type":t.messageContentType}),t&&t.Ca&&(n?n["X-WebChannel-Client-Profile"]=t.Ca:n={"X-WebChannel-Client-Profile":t.Ca}),this.g.U=n,(n=t&&t.cc)&&!ke(n)&&(this.g.o=n),this.A=t&&t.supportsCrossDomainXhr||!1,this.v=t&&t.sendRawJson||!1,(t=t&&t.httpSessionIdParam)&&!ke(t)&&(this.g.F=t,n=this.h,n!==null&&t in n&&(n=this.h,t in n&&delete n[t])),this.j=new fe(this)}$(ct,z);ct.prototype.m=function(){this.g.h=this.j,this.A&&(this.g.J=!0);var n=this.g,t=this.l,e=this.h||void 0;rt(0),n.Y=t,n.na=e||{},n.G=n.aa,n.I=aa(n,null,n.Y),sr(n)};ct.prototype.close=function(){vi(this.g)};ct.prototype.u=function(n){var t=this.g;if(typeof n=="string"){var e={};e.__data__=n,n=e}else this.v&&(e={},e.__data__=li(n),n=e);t.j.push(new Pc(t.fb++,n)),t.H==3&&sr(t)};ct.prototype.N=function(){this.g.h=null,delete this.j,vi(this.g),delete this.g,ct.$.N.call(this)};function ha(n){gi.call(this),n.__headers__&&(this.headers=n.__headers__,this.statusCode=n.__status__,delete n.__headers__,delete n.__status__);var t=n.__sm__;if(t){t:{for(const e in t){n=e;break t}n=void 0}(this.i=n)&&(n=this.i,t=t!==null&&n in t?t[n]:void 0),this.data=t}else this.data=n}$(ha,gi);function la(){_i.call(this),this.status=1}$(la,_i);function fe(n){this.g=n}$(fe,ca);fe.prototype.Ba=function(){H(this.g,"a")};fe.prototype.Aa=function(n){H(this.g,new ha(n))};fe.prototype.za=function(n){H(this.g,new la)};fe.prototype.ya=function(){H(this.g,"b")};function bc(){this.blockSize=-1}function ft(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}$(ft,bc);ft.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0};function Vr(n,t,e){e||(e=0);var r=Array(16);if(typeof t=="string")for(var i=0;16>i;++i)r[i]=t.charCodeAt(e++)|t.charCodeAt(e++)<<8|t.charCodeAt(e++)<<16|t.charCodeAt(e++)<<24;else for(i=0;16>i;++i)r[i]=t[e++]|t[e++]<<8|t[e++]<<16|t[e++]<<24;t=n.g[0],e=n.g[1],i=n.g[2];var s=n.g[3],o=t+(s^e&(i^s))+r[0]+3614090360&4294967295;t=e+(o<<7&4294967295|o>>>25),o=s+(i^t&(e^i))+r[1]+3905402710&4294967295,s=t+(o<<12&4294967295|o>>>20),o=i+(e^s&(t^e))+r[2]+606105819&4294967295,i=s+(o<<17&4294967295|o>>>15),o=e+(t^i&(s^t))+r[3]+3250441966&4294967295,e=i+(o<<22&4294967295|o>>>10),o=t+(s^e&(i^s))+r[4]+4118548399&4294967295,t=e+(o<<7&4294967295|o>>>25),o=s+(i^t&(e^i))+r[5]+1200080426&4294967295,s=t+(o<<12&4294967295|o>>>20),o=i+(e^s&(t^e))+r[6]+2821735955&4294967295,i=s+(o<<17&4294967295|o>>>15),o=e+(t^i&(s^t))+r[7]+4249261313&4294967295,e=i+(o<<22&4294967295|o>>>10),o=t+(s^e&(i^s))+r[8]+1770035416&4294967295,t=e+(o<<7&4294967295|o>>>25),o=s+(i^t&(e^i))+r[9]+2336552879&4294967295,s=t+(o<<12&4294967295|o>>>20),o=i+(e^s&(t^e))+r[10]+4294925233&4294967295,i=s+(o<<17&4294967295|o>>>15),o=e+(t^i&(s^t))+r[11]+2304563134&4294967295,e=i+(o<<22&4294967295|o>>>10),o=t+(s^e&(i^s))+r[12]+1804603682&4294967295,t=e+(o<<7&4294967295|o>>>25),o=s+(i^t&(e^i))+r[13]+4254626195&4294967295,s=t+(o<<12&4294967295|o>>>20),o=i+(e^s&(t^e))+r[14]+2792965006&4294967295,i=s+(o<<17&4294967295|o>>>15),o=e+(t^i&(s^t))+r[15]+1236535329&4294967295,e=i+(o<<22&4294967295|o>>>10),o=t+(i^s&(e^i))+r[1]+4129170786&4294967295,t=e+(o<<5&4294967295|o>>>27),o=s+(e^i&(t^e))+r[6]+3225465664&4294967295,s=t+(o<<9&4294967295|o>>>23),o=i+(t^e&(s^t))+r[11]+643717713&4294967295,i=s+(o<<14&4294967295|o>>>18),o=e+(s^t&(i^s))+r[0]+3921069994&4294967295,e=i+(o<<20&4294967295|o>>>12),o=t+(i^s&(e^i))+r[5]+3593408605&4294967295,t=e+(o<<5&4294967295|o>>>27),o=s+(e^i&(t^e))+r[10]+38016083&4294967295,s=t+(o<<9&4294967295|o>>>23),o=i+(t^e&(s^t))+r[15]+3634488961&4294967295,i=s+(o<<14&4294967295|o>>>18),o=e+(s^t&(i^s))+r[4]+3889429448&4294967295,e=i+(o<<20&4294967295|o>>>12),o=t+(i^s&(e^i))+r[9]+568446438&4294967295,t=e+(o<<5&4294967295|o>>>27),o=s+(e^i&(t^e))+r[14]+3275163606&4294967295,s=t+(o<<9&4294967295|o>>>23),o=i+(t^e&(s^t))+r[3]+4107603335&4294967295,i=s+(o<<14&4294967295|o>>>18),o=e+(s^t&(i^s))+r[8]+1163531501&4294967295,e=i+(o<<20&4294967295|o>>>12),o=t+(i^s&(e^i))+r[13]+2850285829&4294967295,t=e+(o<<5&4294967295|o>>>27),o=s+(e^i&(t^e))+r[2]+4243563512&4294967295,s=t+(o<<9&4294967295|o>>>23),o=i+(t^e&(s^t))+r[7]+1735328473&4294967295,i=s+(o<<14&4294967295|o>>>18),o=e+(s^t&(i^s))+r[12]+2368359562&4294967295,e=i+(o<<20&4294967295|o>>>12),o=t+(e^i^s)+r[5]+4294588738&4294967295,t=e+(o<<4&4294967295|o>>>28),o=s+(t^e^i)+r[8]+2272392833&4294967295,s=t+(o<<11&4294967295|o>>>21),o=i+(s^t^e)+r[11]+1839030562&4294967295,i=s+(o<<16&4294967295|o>>>16),o=e+(i^s^t)+r[14]+4259657740&4294967295,e=i+(o<<23&4294967295|o>>>9),o=t+(e^i^s)+r[1]+2763975236&4294967295,t=e+(o<<4&4294967295|o>>>28),o=s+(t^e^i)+r[4]+1272893353&4294967295,s=t+(o<<11&4294967295|o>>>21),o=i+(s^t^e)+r[7]+4139469664&4294967295,i=s+(o<<16&4294967295|o>>>16),o=e+(i^s^t)+r[10]+3200236656&4294967295,e=i+(o<<23&4294967295|o>>>9),o=t+(e^i^s)+r[13]+681279174&4294967295,t=e+(o<<4&4294967295|o>>>28),o=s+(t^e^i)+r[0]+3936430074&4294967295,s=t+(o<<11&4294967295|o>>>21),o=i+(s^t^e)+r[3]+3572445317&4294967295,i=s+(o<<16&4294967295|o>>>16),o=e+(i^s^t)+r[6]+76029189&4294967295,e=i+(o<<23&4294967295|o>>>9),o=t+(e^i^s)+r[9]+3654602809&4294967295,t=e+(o<<4&4294967295|o>>>28),o=s+(t^e^i)+r[12]+3873151461&4294967295,s=t+(o<<11&4294967295|o>>>21),o=i+(s^t^e)+r[15]+530742520&4294967295,i=s+(o<<16&4294967295|o>>>16),o=e+(i^s^t)+r[2]+3299628645&4294967295,e=i+(o<<23&4294967295|o>>>9),o=t+(i^(e|~s))+r[0]+4096336452&4294967295,t=e+(o<<6&4294967295|o>>>26),o=s+(e^(t|~i))+r[7]+1126891415&4294967295,s=t+(o<<10&4294967295|o>>>22),o=i+(t^(s|~e))+r[14]+2878612391&4294967295,i=s+(o<<15&4294967295|o>>>17),o=e+(s^(i|~t))+r[5]+4237533241&4294967295,e=i+(o<<21&4294967295|o>>>11),o=t+(i^(e|~s))+r[12]+1700485571&4294967295,t=e+(o<<6&4294967295|o>>>26),o=s+(e^(t|~i))+r[3]+2399980690&4294967295,s=t+(o<<10&4294967295|o>>>22),o=i+(t^(s|~e))+r[10]+4293915773&4294967295,i=s+(o<<15&4294967295|o>>>17),o=e+(s^(i|~t))+r[1]+2240044497&4294967295,e=i+(o<<21&4294967295|o>>>11),o=t+(i^(e|~s))+r[8]+1873313359&4294967295,t=e+(o<<6&4294967295|o>>>26),o=s+(e^(t|~i))+r[15]+4264355552&4294967295,s=t+(o<<10&4294967295|o>>>22),o=i+(t^(s|~e))+r[6]+2734768916&4294967295,i=s+(o<<15&4294967295|o>>>17),o=e+(s^(i|~t))+r[13]+1309151649&4294967295,e=i+(o<<21&4294967295|o>>>11),o=t+(i^(e|~s))+r[4]+4149444226&4294967295,t=e+(o<<6&4294967295|o>>>26),o=s+(e^(t|~i))+r[11]+3174756917&4294967295,s=t+(o<<10&4294967295|o>>>22),o=i+(t^(s|~e))+r[2]+718787259&4294967295,i=s+(o<<15&4294967295|o>>>17),o=e+(s^(i|~t))+r[9]+3951481745&4294967295,n.g[0]=n.g[0]+t&4294967295,n.g[1]=n.g[1]+(i+(o<<21&4294967295|o>>>11))&4294967295,n.g[2]=n.g[2]+i&4294967295,n.g[3]=n.g[3]+s&4294967295}ft.prototype.j=function(n,t){t===void 0&&(t=n.length);for(var e=t-this.blockSize,r=this.m,i=this.h,s=0;s<t;){if(i==0)for(;s<=e;)Vr(this,n,s),s+=this.blockSize;if(typeof n=="string"){for(;s<t;)if(r[i++]=n.charCodeAt(s++),i==this.blockSize){Vr(this,r),i=0;break}}else for(;s<t;)if(r[i++]=n[s++],i==this.blockSize){Vr(this,r),i=0;break}}this.h=i,this.i+=t};ft.prototype.l=function(){var n=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);n[0]=128;for(var t=1;t<n.length-8;++t)n[t]=0;var e=8*this.i;for(t=n.length-8;t<n.length;++t)n[t]=e&255,e/=256;for(this.j(n),n=Array(16),t=e=0;4>t;++t)for(var r=0;32>r;r+=8)n[e++]=this.g[t]>>>r&255;return n};function N(n,t){this.h=t;for(var e=[],r=!0,i=n.length-1;0<=i;i--){var s=n[i]|0;r&&s==t||(e[i]=s,r=!1)}this.g=e}var Uc={};function Ai(n){return-128<=n&&128>n?Ku(n,function(t){return new N([t|0],0>t?-1:0)}):new N([n|0],0>n?-1:0)}function _t(n){if(isNaN(n)||!isFinite(n))return re;if(0>n)return K(_t(-n));for(var t=[],e=1,r=0;n>=e;r++)t[r]=n/e|0,e*=zr;return new N(t,0)}function da(n,t){if(n.length==0)throw Error("number format error: empty string");if(t=t||10,2>t||36<t)throw Error("radix out of range: "+t);if(n.charAt(0)=="-")return K(da(n.substring(1),t));if(0<=n.indexOf("-"))throw Error('number format error: interior "-" character');for(var e=_t(Math.pow(t,8)),r=re,i=0;i<n.length;i+=8){var s=Math.min(8,n.length-i),o=parseInt(n.substring(i,i+s),t);8>s?(s=_t(Math.pow(t,s)),r=r.R(s).add(_t(o))):(r=r.R(e),r=r.add(_t(o)))}return r}var zr=4294967296,re=Ai(0),$r=Ai(1),Is=Ai(16777216);y=N.prototype;y.ea=function(){if(ht(this))return-K(this).ea();for(var n=0,t=1,e=0;e<this.g.length;e++){var r=this.D(e);n+=(0<=r?r:zr+r)*t,t*=zr}return n};y.toString=function(n){if(n=n||10,2>n||36<n)throw Error("radix out of range: "+n);if(wt(this))return"0";if(ht(this))return"-"+K(this).toString(n);for(var t=_t(Math.pow(n,6)),e=this,r="";;){var i=kn(e,t).g;e=Nn(e,i.R(t));var s=((0<e.g.length?e.g[0]:e.h)>>>0).toString(n);if(e=i,wt(e))return s+r;for(;6>s.length;)s="0"+s;r=s+r}};y.D=function(n){return 0>n?0:n<this.g.length?this.g[n]:this.h};function wt(n){if(n.h!=0)return!1;for(var t=0;t<n.g.length;t++)if(n.g[t]!=0)return!1;return!0}function ht(n){return n.h==-1}y.X=function(n){return n=Nn(this,n),ht(n)?-1:wt(n)?0:1};function K(n){for(var t=n.g.length,e=[],r=0;r<t;r++)e[r]=~n.g[r];return new N(e,~n.h).add($r)}y.abs=function(){return ht(this)?K(this):this};y.add=function(n){for(var t=Math.max(this.g.length,n.g.length),e=[],r=0,i=0;i<=t;i++){var s=r+(this.D(i)&65535)+(n.D(i)&65535),o=(s>>>16)+(this.D(i)>>>16)+(n.D(i)>>>16);r=o>>>16,s&=65535,o&=65535,e[i]=o<<16|s}return new N(e,e[e.length-1]&-2147483648?-1:0)};function Nn(n,t){return n.add(K(t))}y.R=function(n){if(wt(this)||wt(n))return re;if(ht(this))return ht(n)?K(this).R(K(n)):K(K(this).R(n));if(ht(n))return K(this.R(K(n)));if(0>this.X(Is)&&0>n.X(Is))return _t(this.ea()*n.ea());for(var t=this.g.length+n.g.length,e=[],r=0;r<2*t;r++)e[r]=0;for(r=0;r<this.g.length;r++)for(var i=0;i<n.g.length;i++){var s=this.D(r)>>>16,o=this.D(r)&65535,a=n.D(i)>>>16,u=n.D(i)&65535;e[2*r+2*i]+=o*u,_n(e,2*r+2*i),e[2*r+2*i+1]+=s*u,_n(e,2*r+2*i+1),e[2*r+2*i+1]+=o*a,_n(e,2*r+2*i+1),e[2*r+2*i+2]+=s*a,_n(e,2*r+2*i+2)}for(r=0;r<t;r++)e[r]=e[2*r+1]<<16|e[2*r];for(r=t;r<2*t;r++)e[r]=0;return new N(e,0)};function _n(n,t){for(;(n[t]&65535)!=n[t];)n[t+1]+=n[t]>>>16,n[t]&=65535,t++}function ye(n,t){this.g=n,this.h=t}function kn(n,t){if(wt(t))throw Error("division by zero");if(wt(n))return new ye(re,re);if(ht(n))return t=kn(K(n),t),new ye(K(t.g),K(t.h));if(ht(t))return t=kn(n,K(t)),new ye(K(t.g),t.h);if(30<n.g.length){if(ht(n)||ht(t))throw Error("slowDivide_ only works with positive integers.");for(var e=$r,r=t;0>=r.X(n);)e=ws(e),r=ws(r);var i=Yt(e,1),s=Yt(r,1);for(r=Yt(r,2),e=Yt(e,2);!wt(r);){var o=s.add(r);0>=o.X(n)&&(i=i.add(e),s=o),r=Yt(r,1),e=Yt(e,1)}return t=Nn(n,i.R(t)),new ye(i,t)}for(i=re;0<=n.X(t);){for(e=Math.max(1,Math.floor(n.ea()/t.ea())),r=Math.ceil(Math.log(e)/Math.LN2),r=48>=r?1:Math.pow(2,r-48),s=_t(e),o=s.R(t);ht(o)||0<o.X(n);)e-=r,s=_t(e),o=s.R(t);wt(s)&&(s=$r),i=i.add(s),n=Nn(n,o)}return new ye(i,n)}y.gb=function(n){return kn(this,n).h};y.and=function(n){for(var t=Math.max(this.g.length,n.g.length),e=[],r=0;r<t;r++)e[r]=this.D(r)&n.D(r);return new N(e,this.h&n.h)};y.or=function(n){for(var t=Math.max(this.g.length,n.g.length),e=[],r=0;r<t;r++)e[r]=this.D(r)|n.D(r);return new N(e,this.h|n.h)};y.xor=function(n){for(var t=Math.max(this.g.length,n.g.length),e=[],r=0;r<t;r++)e[r]=this.D(r)^n.D(r);return new N(e,this.h^n.h)};function ws(n){for(var t=n.g.length+1,e=[],r=0;r<t;r++)e[r]=n.D(r)<<1|n.D(r-1)>>>31;return new N(e,n.h)}function Yt(n,t){var e=t>>5;t%=32;for(var r=n.g.length-e,i=[],s=0;s<r;s++)i[s]=0<t?n.D(s+e)>>>t|n.D(s+e+1)<<32-t:n.D(s+e);return new N(i,n.h)}Dn.prototype.createWebChannel=Dn.prototype.g;ct.prototype.send=ct.prototype.u;ct.prototype.open=ct.prototype.m;ct.prototype.close=ct.prototype.close;Yn.NO_ERROR=0;Yn.TIMEOUT=8;Yn.HTTP_ERROR=6;Co.COMPLETE="complete";Do.EventType=Xe;Xe.OPEN="a";Xe.CLOSE="b";Xe.ERROR="c";Xe.MESSAGE="d";z.prototype.listen=z.prototype.O;O.prototype.listenOnce=O.prototype.P;O.prototype.getLastError=O.prototype.Sa;O.prototype.getLastErrorCode=O.prototype.Ia;O.prototype.getStatus=O.prototype.da;O.prototype.getResponseJson=O.prototype.Wa;O.prototype.getResponseText=O.prototype.ja;O.prototype.send=O.prototype.ha;O.prototype.setWithCredentials=O.prototype.Oa;ft.prototype.digest=ft.prototype.l;ft.prototype.reset=ft.prototype.reset;ft.prototype.update=ft.prototype.j;N.prototype.add=N.prototype.add;N.prototype.multiply=N.prototype.R;N.prototype.modulo=N.prototype.gb;N.prototype.compare=N.prototype.X;N.prototype.toNumber=N.prototype.ea;N.prototype.toString=N.prototype.toString;N.prototype.getBits=N.prototype.D;N.fromNumber=_t;N.fromString=da;var qc=function(){return new Dn},Bc=function(){return Xn()},Sr=Yn,jc=Co,zc=Gt,As={xb:0,Ab:1,Bb:2,Ub:3,Zb:4,Wb:5,Xb:6,Vb:7,Tb:8,Yb:9,PROXY:10,NOPROXY:11,Rb:12,Nb:13,Ob:14,Mb:15,Pb:16,Qb:17,tb:18,sb:19,ub:20},yn=Do,$c=O,Qc=ft,ie=N;const Rs="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class st{constructor(t){this.uid=t}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}st.UNAUTHENTICATED=new st(null),st.GOOGLE_CREDENTIALS=new st("google-credentials-uid"),st.FIRST_PARTY=new st("first-party-uid"),st.MOCK_USER=new st("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let me="10.8.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jt=new Lu("@firebase/firestore");function Ee(){return jt.logLevel}function _(n,...t){if(jt.logLevel<=Pt.DEBUG){const e=t.map(Ri);jt.debug(`Firestore (${me}): ${n}`,...e)}}function Tt(n,...t){if(jt.logLevel<=Pt.ERROR){const e=t.map(Ri);jt.error(`Firestore (${me}): ${n}`,...e)}}function qe(n,...t){if(jt.logLevel<=Pt.WARN){const e=t.map(Ri);jt.warn(`Firestore (${me}): ${n}`,...e)}}function Ri(n){if(typeof n=="string")return n;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(e){return JSON.stringify(e)}(n)}catch{return n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function v(n="Unexpected state"){const t=`FIRESTORE (${me}) INTERNAL ASSERTION FAILED: `+n;throw Tt(t),new Error(t)}function D(n,t){n||v()}function A(n,t){return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const f={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class g extends Nu{constructor(t,e){super(t,e),this.code=t,this.message=e,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lt{constructor(){this.promise=new Promise((t,e)=>{this.resolve=t,this.reject=e})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gc{constructor(t,e){this.user=e,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class Kc{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,e){t.enqueueRetryable(()=>e(st.UNAUTHENTICATED))}shutdown(){}}class Wc{constructor(t){this.t=t,this.currentUser=st.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,e){let r=this.i;const i=u=>this.i!==r?(r=this.i,e(u)):Promise.resolve();let s=new lt;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new lt,t.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const u=s;t.enqueueRetryable(async()=>{await u.promise,await i(this.currentUser)})},a=u=>{_("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(u=>a(u)),setTimeout(()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?a(u):(_("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new lt)}},0),o()}getToken(){const t=this.i,e=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(e).then(r=>this.i!==t?(_("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(D(typeof r.accessToken=="string"),new Gc(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const t=this.auth&&this.auth.getUid();return D(t===null||typeof t=="string"),new st(t)}}class Hc{constructor(t,e,r){this.l=t,this.h=e,this.P=r,this.type="FirstParty",this.user=st.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const t=this.T();return t&&this.I.set("Authorization",t),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class Xc{constructor(t,e,r){this.l=t,this.h=e,this.P=r}getToken(){return Promise.resolve(new Hc(this.l,this.h,this.P))}start(t,e){t.enqueueRetryable(()=>e(st.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Yc{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Jc{constructor(t){this.A=t,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(t,e){const r=s=>{s.error!=null&&_("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.R;return this.R=s.token,_("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?e(s.token):Promise.resolve()};this.o=s=>{t.enqueueRetryable(()=>r(s))};const i=s=>{_("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.appCheck.addTokenListener(this.o)};this.A.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.A.getImmediate({optional:!0});s?i(s):_("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then(e=>e?(D(typeof e.token=="string"),this.R=e.token,new Yc(e.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zc(n){const t=typeof self!="undefined"&&(self.crypto||self.msCrypto),e=new Uint8Array(n);if(t&&typeof t.getRandomValues=="function")t.getRandomValues(e);else for(let r=0;r<n;r++)e[r]=Math.floor(256*Math.random());return e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fa{static newId(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",e=Math.floor(256/t.length)*t.length;let r="";for(;r.length<20;){const i=Zc(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<e&&(r+=t.charAt(i[s]%t.length))}return r}}function C(n,t){return n<t?-1:n>t?1:0}function ae(n,t,e){return n.length===t.length&&n.every((r,i)=>e(r,t[i]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class q{constructor(t,e){if(this.seconds=t,this.nanoseconds=e,e<0)throw new g(f.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(e>=1e9)throw new g(f.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(t<-62135596800)throw new g(f.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new g(f.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}static now(){return q.fromMillis(Date.now())}static fromDate(t){return q.fromMillis(t.getTime())}static fromMillis(t){const e=Math.floor(t/1e3),r=Math.floor(1e6*(t-1e3*e));return new q(e,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(t){return this.seconds===t.seconds?C(this.nanoseconds,t.nanoseconds):C(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const t=this.seconds- -62135596800;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class I{constructor(t){this.timestamp=t}static fromTimestamp(t){return new I(t)}static min(){return new I(new q(0,0))}static max(){return new I(new q(253402300799,999999999))}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Be{constructor(t,e,r){e===void 0?e=0:e>t.length&&v(),r===void 0?r=t.length-e:r>t.length-e&&v(),this.segments=t,this.offset=e,this.len=r}get length(){return this.len}isEqual(t){return Be.comparator(this,t)===0}child(t){const e=this.segments.slice(this.offset,this.limit());return t instanceof Be?t.forEach(r=>{e.push(r)}):e.push(t),this.construct(e)}limit(){return this.offset+this.length}popFirst(t){return t=t===void 0?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return this.length===0}isPrefixOf(t){if(t.length<this.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}forEach(t){for(let e=this.offset,r=this.limit();e<r;e++)t(this.segments[e])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,e){const r=Math.min(t.length,e.length);for(let i=0;i<r;i++){const s=t.get(i),o=e.get(i);if(s<o)return-1;if(s>o)return 1}return t.length<e.length?-1:t.length>e.length?1:0}}class k extends Be{construct(t,e,r){return new k(t,e,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...t){const e=[];for(const r of t){if(r.indexOf("//")>=0)throw new g(f.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);e.push(...r.split("/").filter(i=>i.length>0))}return new k(e)}static emptyPath(){return new k([])}}const th=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class W extends Be{construct(t,e,r){return new W(t,e,r)}static isValidIdentifier(t){return th.test(t)}canonicalString(){return this.toArray().map(t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),W.isValidIdentifier(t)||(t="`"+t+"`"),t)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new W(["__name__"])}static fromServerFormat(t){const e=[];let r="",i=0;const s=()=>{if(r.length===0)throw new g(f.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);e.push(r),r=""};let o=!1;for(;i<t.length;){const a=t[i];if(a==="\\"){if(i+1===t.length)throw new g(f.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const u=t[i+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new g(f.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);r+=u,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(r+=a,i++):(s(),i++)}if(s(),o)throw new g(f.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new W(e)}static emptyPath(){return new W([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class E{constructor(t){this.path=t}static fromPath(t){return new E(k.fromString(t))}static fromName(t){return new E(k.fromString(t).popFirst(5))}static empty(){return new E(k.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return t!==null&&k.comparator(this.path,t.path)===0}toString(){return this.path.toString()}static comparator(t,e){return k.comparator(t.path,e.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new E(new k(t.slice()))}}function eh(n,t){const e=n.toTimestamp().seconds,r=n.toTimestamp().nanoseconds+1,i=I.fromTimestamp(r===1e9?new q(e+1,0):new q(e,r));return new Ct(i,E.empty(),t)}function nh(n){return new Ct(n.readTime,n.key,-1)}class Ct{constructor(t,e,r){this.readTime=t,this.documentKey=e,this.largestBatchId=r}static min(){return new Ct(I.min(),E.empty(),-1)}static max(){return new Ct(I.max(),E.empty(),-1)}}function rh(n,t){let e=n.readTime.compareTo(t.readTime);return e!==0?e:(e=E.comparator(n.documentKey,t.documentKey),e!==0?e:C(n.largestBatchId,t.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ih="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class sh{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(t=>t())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function en(n){if(n.code!==f.FAILED_PRECONDITION||n.message!==ih)throw n;_("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class m{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t(e=>{this.isDone=!0,this.result=e,this.nextCallback&&this.nextCallback(e)},e=>{this.isDone=!0,this.error=e,this.catchCallback&&this.catchCallback(e)})}catch(t){return this.next(void 0,t)}next(t,e){return this.callbackAttached&&v(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(e,this.error):this.wrapSuccess(t,this.result):new m((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(t,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(e,s).next(r,i)}})}toPromise(){return new Promise((t,e)=>{this.next(t,e)})}wrapUserFunction(t){try{const e=t();return e instanceof m?e:m.resolve(e)}catch(e){return m.reject(e)}}wrapSuccess(t,e){return t?this.wrapUserFunction(()=>t(e)):m.resolve(e)}wrapFailure(t,e){return t?this.wrapUserFunction(()=>t(e)):m.reject(e)}static resolve(t){return new m((e,r)=>{e(t)})}static reject(t){return new m((e,r)=>{r(t)})}static waitFor(t){return new m((e,r)=>{let i=0,s=0,o=!1;t.forEach(a=>{++i,a.next(()=>{++s,o&&s===i&&e()},u=>r(u))}),o=!0,s===i&&e()})}static or(t){let e=m.resolve(!1);for(const r of t)e=e.next(i=>i?m.resolve(i):r());return e}static forEach(t,e){const r=[];return t.forEach((i,s)=>{r.push(e.call(this,i,s))}),this.waitFor(r)}static mapArray(t,e){return new m((r,i)=>{const s=t.length,o=new Array(s);let a=0;for(let u=0;u<s;u++){const c=u;e(t[c]).next(h=>{o[c]=h,++a,a===s&&r(o)},h=>i(h))}})}static doWhile(t,e){return new m((r,i)=>{const s=()=>{t()===!0?e().next(()=>{s()},i):r()};s()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pi{constructor(t,e){this.action=t,this.transaction=e,this.aborted=!1,this.V=new lt,this.transaction.oncomplete=()=>{this.V.resolve()},this.transaction.onabort=()=>{e.error?this.V.reject(new Pe(t,e.error)):this.V.resolve()},this.transaction.onerror=r=>{const i=Vi(r.target.error);this.V.reject(new Pe(t,i))}}static open(t,e,r,i){try{return new Pi(e,t.transaction(i,r))}catch(s){throw new Pe(e,s)}}get m(){return this.V.promise}abort(t){t&&this.V.reject(t),this.aborted||(_("SimpleDb","Aborting transaction:",t?t.message:"Client-initiated abort"),this.aborted=!0,this.transaction.abort())}g(){const t=this.transaction;this.aborted||typeof t.commit!="function"||t.commit()}store(t){const e=this.transaction.objectStore(t);return new ah(e)}}class Ut{constructor(t,e,r){this.name=t,this.version=e,this.p=r,Ut.S(Pn())===12.2&&Tt("Firestore persistence suffers from a bug in iOS 12.2 Safari that may cause your app to stop working. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.")}static delete(t){return _("SimpleDb","Removing database:",t),Ot(window.indexedDB.deleteDatabase(t)).toPromise()}static D(){if(!Fu())return!1;if(Ut.C())return!0;const t=Pn(),e=Ut.S(t),r=0<e&&e<10,i=Ut.v(t),s=0<i&&i<4.5;return!(t.indexOf("MSIE ")>0||t.indexOf("Trident/")>0||t.indexOf("Edge/")>0||r||s)}static C(){var t;return typeof process!="undefined"&&((t=process.__PRIVATE_env)===null||t===void 0?void 0:t.F)==="YES"}static M(t,e){return t.store(e)}static S(t){const e=t.match(/i(?:phone|pad|pod) os ([\d_]+)/i),r=e?e[1].split("_").slice(0,2).join("."):"-1";return Number(r)}static v(t){const e=t.match(/Android ([\d.]+)/i),r=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(r)}async O(t){return this.db||(_("SimpleDb","Opening database:",this.name),this.db=await new Promise((e,r)=>{const i=indexedDB.open(this.name,this.version);i.onsuccess=s=>{const o=s.target.result;e(o)},i.onblocked=()=>{r(new Pe(t,"Cannot upgrade IndexedDB schema while another tab is open. Close all tabs that access Firestore and reload this page to proceed."))},i.onerror=s=>{const o=s.target.error;o.name==="VersionError"?r(new g(f.FAILED_PRECONDITION,"A newer version of the Firestore SDK was previously used and so the persisted data is not compatible with the version of the SDK you are now using. The SDK will operate with persistence disabled. If you need persistence, please re-upgrade to a newer version of the SDK or else clear the persisted IndexedDB data for your app to start fresh.")):o.name==="InvalidStateError"?r(new g(f.FAILED_PRECONDITION,"Unable to open an IndexedDB connection. This could be due to running in a private browsing session on a browser whose private browsing sessions do not support IndexedDB: "+o)):r(new Pe(t,o))},i.onupgradeneeded=s=>{_("SimpleDb",'Database "'+this.name+'" requires upgrade from version:',s.oldVersion);const o=s.target.result;this.p.N(o,i.transaction,s.oldVersion,this.version).next(()=>{_("SimpleDb","Database upgrade to version "+this.version+" complete")})}})),this.B&&(this.db.onversionchange=e=>this.B(e)),this.db}L(t){this.B=t,this.db&&(this.db.onversionchange=e=>t(e))}async runTransaction(t,e,r,i){const s=e==="readonly";let o=0;for(;;){++o;try{this.db=await this.O(t);const a=Pi.open(this.db,t,s?"readonly":"readwrite",r),u=i(a).next(c=>(a.g(),c)).catch(c=>(a.abort(c),m.reject(c))).toPromise();return u.catch(()=>{}),await a.m,u}catch(a){const u=a,c=u.name!=="FirebaseError"&&o<3;if(_("SimpleDb","Transaction failed with error:",u.message,"Retrying:",c),this.close(),!c)return Promise.reject(u)}}}close(){this.db&&this.db.close(),this.db=void 0}}class oh{constructor(t){this.k=t,this.q=!1,this.K=null}get isDone(){return this.q}get $(){return this.K}set cursor(t){this.k=t}done(){this.q=!0}U(t){this.K=t}delete(){return Ot(this.k.delete())}}class Pe extends g{constructor(t,e){super(f.UNAVAILABLE,`IndexedDB transaction '${t}' failed: ${e}`),this.name="IndexedDbTransactionError"}}function nn(n){return n.name==="IndexedDbTransactionError"}class ah{constructor(t){this.store=t}put(t,e){let r;return e!==void 0?(_("SimpleDb","PUT",this.store.name,t,e),r=this.store.put(e,t)):(_("SimpleDb","PUT",this.store.name,"<auto-key>",t),r=this.store.put(t)),Ot(r)}add(t){return _("SimpleDb","ADD",this.store.name,t,t),Ot(this.store.add(t))}get(t){return Ot(this.store.get(t)).next(e=>(e===void 0&&(e=null),_("SimpleDb","GET",this.store.name,t,e),e))}delete(t){return _("SimpleDb","DELETE",this.store.name,t),Ot(this.store.delete(t))}count(){return _("SimpleDb","COUNT",this.store.name),Ot(this.store.count())}W(t,e){const r=this.options(t,e),i=r.index?this.store.index(r.index):this.store;if(typeof i.getAll=="function"){const s=i.getAll(r.range);return new m((o,a)=>{s.onerror=u=>{a(u.target.error)},s.onsuccess=u=>{o(u.target.result)}})}{const s=this.cursor(r),o=[];return this.G(s,(a,u)=>{o.push(u)}).next(()=>o)}}j(t,e){const r=this.store.getAll(t,e===null?void 0:e);return new m((i,s)=>{r.onerror=o=>{s(o.target.error)},r.onsuccess=o=>{i(o.target.result)}})}H(t,e){_("SimpleDb","DELETE ALL",this.store.name);const r=this.options(t,e);r.J=!1;const i=this.cursor(r);return this.G(i,(s,o,a)=>a.delete())}Y(t,e){let r;e?r=t:(r={},e=t);const i=this.cursor(r);return this.G(i,e)}Z(t){const e=this.cursor({});return new m((r,i)=>{e.onerror=s=>{const o=Vi(s.target.error);i(o)},e.onsuccess=s=>{const o=s.target.result;o?t(o.primaryKey,o.value).next(a=>{a?o.continue():r()}):r()}})}G(t,e){const r=[];return new m((i,s)=>{t.onerror=o=>{s(o.target.error)},t.onsuccess=o=>{const a=o.target.result;if(!a)return void i();const u=new oh(a),c=e(a.primaryKey,a.value,u);if(c instanceof m){const h=c.catch(l=>(u.done(),m.reject(l)));r.push(h)}u.isDone?i():u.$===null?a.continue():a.continue(u.$)}}).next(()=>m.waitFor(r))}options(t,e){let r;return t!==void 0&&(typeof t=="string"?r=t:e=t),{index:r,range:e}}cursor(t){let e="next";if(t.reverse&&(e="prev"),t.index){const r=this.store.index(t.index);return t.J?r.openKeyCursor(t.range,e):r.openCursor(t.range,e)}return this.store.openCursor(t.range,e)}}function Ot(n){return new m((t,e)=>{n.onsuccess=r=>{const i=r.target.result;t(i)},n.onerror=r=>{const i=Vi(r.target.error);e(i)}})}let Ps=!1;function Vi(n){const t=Ut.S(Pn());if(t>=12.2&&t<13){const e="An internal error was encountered in the Indexed Database server";if(n.message.indexOf(e)>=0){const r=new g("internal",`IOS_INDEXEDDB_BUG1: IndexedDb has thrown '${e}'. This is likely due to an unavoidable bug in iOS. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.`);return Ps||(Ps=!0,setTimeout(()=>{throw r},0)),r}}return n}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Si{constructor(t,e){this.previousValue=t,e&&(e.sequenceNumberHandler=r=>this.se(r),this.oe=r=>e.writeSequenceNumber(r))}se(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.oe&&this.oe(t),t}}Si._e=-1;function rn(n){return n==null}function xn(n){return n===0&&1/n==-1/0}function uh(n){return typeof n=="number"&&Number.isInteger(n)&&!xn(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vs(n){let t=0;for(const e in n)Object.prototype.hasOwnProperty.call(n,e)&&t++;return t}function Kt(n,t){for(const e in n)Object.prototype.hasOwnProperty.call(n,e)&&t(e,n[e])}function ma(n){for(const t in n)if(Object.prototype.hasOwnProperty.call(n,t))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class L{constructor(t,e){this.comparator=t,this.root=e||G.EMPTY}insert(t,e){return new L(this.comparator,this.root.insert(t,e,this.comparator).copy(null,null,G.BLACK,null,null))}remove(t){return new L(this.comparator,this.root.remove(t,this.comparator).copy(null,null,G.BLACK,null,null))}get(t){let e=this.root;for(;!e.isEmpty();){const r=this.comparator(t,e.key);if(r===0)return e.value;r<0?e=e.left:r>0&&(e=e.right)}return null}indexOf(t){let e=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(t,r.key);if(i===0)return e+r.left.size;i<0?r=r.left:(e+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal((e,r)=>(t(e,r),!1))}toString(){const t=[];return this.inorderTraversal((e,r)=>(t.push(`${e}:${r}`),!1)),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new En(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new En(this.root,t,this.comparator,!1)}getReverseIterator(){return new En(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new En(this.root,t,this.comparator,!0)}}class En{constructor(t,e,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!t.isEmpty();)if(s=e?r(t.key,e):1,e&&i&&(s*=-1),s<0)t=this.isReverse?t.left:t.right;else{if(s===0){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const e={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return e}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class G{constructor(t,e,r,i,s){this.key=t,this.value=e,this.color=r!=null?r:G.RED,this.left=i!=null?i:G.EMPTY,this.right=s!=null?s:G.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,e,r,i,s){return new G(t!=null?t:this.key,e!=null?e:this.value,r!=null?r:this.color,i!=null?i:this.left,s!=null?s:this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,e,r){let i=this;const s=r(t,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(t,e,r),null):s===0?i.copy(null,e,null,null,null):i.copy(null,null,null,null,i.right.insert(t,e,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return G.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,e){let r,i=this;if(e(t,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(t,e),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),e(t,i.key)===0){if(i.right.isEmpty())return G.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(t,e))}return i.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,G.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,G.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),e=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,e)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw v();const t=this.left.check();if(t!==this.right.check())throw v();return t+(this.isRed()?0:1)}}G.EMPTY=null,G.RED=!0,G.BLACK=!1;G.EMPTY=new class{constructor(){this.size=0}get key(){throw v()}get value(){throw v()}get color(){throw v()}get left(){throw v()}get right(){throw v()}copy(t,e,r,i,s){return this}insert(t,e,r){return new G(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class X{constructor(t){this.comparator=t,this.data=new L(this.comparator)}has(t){return this.data.get(t)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal((e,r)=>(t(e),!1))}forEachInRange(t,e){const r=this.data.getIteratorFrom(t[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,t[1])>=0)return;e(i.key)}}forEachWhile(t,e){let r;for(r=e!==void 0?this.data.getIteratorFrom(e):this.data.getIterator();r.hasNext();)if(!t(r.getNext().key))return}firstAfterOrEqual(t){const e=this.data.getIteratorFrom(t);return e.hasNext()?e.getNext().key:null}getIterator(){return new Ss(this.data.getIterator())}getIteratorFrom(t){return new Ss(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let e=this;return e.size<t.size&&(e=t,t=this),t.forEach(r=>{e=e.add(r)}),e}isEqual(t){if(!(t instanceof X)||this.size!==t.size)return!1;const e=this.data.getIterator(),r=t.data.getIterator();for(;e.hasNext();){const i=e.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const t=[];return this.forEach(e=>{t.push(e)}),t}toString(){const t=[];return this.forEach(e=>t.push(e)),"SortedSet("+t.toString()+")"}copy(t){const e=new X(this.comparator);return e.data=t,e}}class Ss{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class at{constructor(t){this.fields=t,t.sort(W.comparator)}static empty(){return new at([])}unionWith(t){let e=new X(W.comparator);for(const r of this.fields)e=e.add(r);for(const r of t)e=e.add(r);return new at(e.toArray())}covers(t){for(const e of this.fields)if(e.isPrefixOf(t))return!0;return!1}isEqual(t){return ae(this.fields,t.fields,(e,r)=>e.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pa extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tt{constructor(t){this.binaryString=t}static fromBase64String(t){const e=function(i){try{return atob(i)}catch(s){throw typeof DOMException!="undefined"&&s instanceof DOMException?new pa("Invalid base64 string: "+s):s}}(t);return new tt(e)}static fromUint8Array(t){const e=function(i){let s="";for(let o=0;o<i.length;++o)s+=String.fromCharCode(i[o]);return s}(t);return new tt(e)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(e){return btoa(e)}(this.binaryString)}toUint8Array(){return function(e){const r=new Uint8Array(e.length);for(let i=0;i<e.length;i++)r[i]=e.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return C(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}tt.EMPTY_BYTE_STRING=new tt("");const ch=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Dt(n){if(D(!!n),typeof n=="string"){let t=0;const e=ch.exec(n);if(D(!!e),e[1]){let i=e[1];i=(i+"000000000").substr(0,9),t=Number(i)}const r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:t}}return{seconds:b(n.seconds),nanos:b(n.nanos)}}function b(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function zt(n){return typeof n=="string"?tt.fromBase64String(n):tt.fromUint8Array(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ci(n){var t,e;return((e=(((t=n==null?void 0:n.mapValue)===null||t===void 0?void 0:t.fields)||{}).__type__)===null||e===void 0?void 0:e.stringValue)==="server_timestamp"}function Di(n){const t=n.mapValue.fields.__previous_value__;return Ci(t)?Di(t):t}function je(n){const t=Dt(n.mapValue.fields.__local_write_time__.timestampValue);return new q(t.seconds,t.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hh{constructor(t,e,r,i,s,o,a,u,c){this.databaseId=t,this.appId=e,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=u,this.useFetchStreams=c}}class ze{constructor(t,e){this.projectId=t,this.database=e||"(default)"}static empty(){return new ze("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(t){return t instanceof ze&&t.projectId===this.projectId&&t.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tn={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function $t(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?Ci(n)?4:lh(n)?9007199254740991:10:v()}function vt(n,t){if(n===t)return!0;const e=$t(n);if(e!==$t(t))return!1;switch(e){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===t.booleanValue;case 4:return je(n).isEqual(je(t));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const o=Dt(i.timestampValue),a=Dt(s.timestampValue);return o.seconds===a.seconds&&o.nanos===a.nanos}(n,t);case 5:return n.stringValue===t.stringValue;case 6:return function(i,s){return zt(i.bytesValue).isEqual(zt(s.bytesValue))}(n,t);case 7:return n.referenceValue===t.referenceValue;case 8:return function(i,s){return b(i.geoPointValue.latitude)===b(s.geoPointValue.latitude)&&b(i.geoPointValue.longitude)===b(s.geoPointValue.longitude)}(n,t);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return b(i.integerValue)===b(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const o=b(i.doubleValue),a=b(s.doubleValue);return o===a?xn(o)===xn(a):isNaN(o)&&isNaN(a)}return!1}(n,t);case 9:return ae(n.arrayValue.values||[],t.arrayValue.values||[],vt);case 10:return function(i,s){const o=i.mapValue.fields||{},a=s.mapValue.fields||{};if(Vs(o)!==Vs(a))return!1;for(const u in o)if(o.hasOwnProperty(u)&&(a[u]===void 0||!vt(o[u],a[u])))return!1;return!0}(n,t);default:return v()}}function $e(n,t){return(n.values||[]).find(e=>vt(e,t))!==void 0}function ue(n,t){if(n===t)return 0;const e=$t(n),r=$t(t);if(e!==r)return C(e,r);switch(e){case 0:case 9007199254740991:return 0;case 1:return C(n.booleanValue,t.booleanValue);case 2:return function(s,o){const a=b(s.integerValue||s.doubleValue),u=b(o.integerValue||o.doubleValue);return a<u?-1:a>u?1:a===u?0:isNaN(a)?isNaN(u)?0:-1:1}(n,t);case 3:return Cs(n.timestampValue,t.timestampValue);case 4:return Cs(je(n),je(t));case 5:return C(n.stringValue,t.stringValue);case 6:return function(s,o){const a=zt(s),u=zt(o);return a.compareTo(u)}(n.bytesValue,t.bytesValue);case 7:return function(s,o){const a=s.split("/"),u=o.split("/");for(let c=0;c<a.length&&c<u.length;c++){const h=C(a[c],u[c]);if(h!==0)return h}return C(a.length,u.length)}(n.referenceValue,t.referenceValue);case 8:return function(s,o){const a=C(b(s.latitude),b(o.latitude));return a!==0?a:C(b(s.longitude),b(o.longitude))}(n.geoPointValue,t.geoPointValue);case 9:return function(s,o){const a=s.values||[],u=o.values||[];for(let c=0;c<a.length&&c<u.length;++c){const h=ue(a[c],u[c]);if(h)return h}return C(a.length,u.length)}(n.arrayValue,t.arrayValue);case 10:return function(s,o){if(s===Tn.mapValue&&o===Tn.mapValue)return 0;if(s===Tn.mapValue)return 1;if(o===Tn.mapValue)return-1;const a=s.fields||{},u=Object.keys(a),c=o.fields||{},h=Object.keys(c);u.sort(),h.sort();for(let l=0;l<u.length&&l<h.length;++l){const d=C(u[l],h[l]);if(d!==0)return d;const p=ue(a[u[l]],c[h[l]]);if(p!==0)return p}return C(u.length,h.length)}(n.mapValue,t.mapValue);default:throw v()}}function Cs(n,t){if(typeof n=="string"&&typeof t=="string"&&n.length===t.length)return C(n,t);const e=Dt(n),r=Dt(t),i=C(e.seconds,r.seconds);return i!==0?i:C(e.nanos,r.nanos)}function ce(n){return Qr(n)}function Qr(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(e){const r=Dt(e);return`time(${r.seconds},${r.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?function(e){return zt(e).toBase64()}(n.bytesValue):"referenceValue"in n?function(e){return E.fromName(e).toString()}(n.referenceValue):"geoPointValue"in n?function(e){return`geo(${e.latitude},${e.longitude})`}(n.geoPointValue):"arrayValue"in n?function(e){let r="[",i=!0;for(const s of e.values||[])i?i=!1:r+=",",r+=Qr(s);return r+"]"}(n.arrayValue):"mapValue"in n?function(e){const r=Object.keys(e.fields||{}).sort();let i="{",s=!0;for(const o of r)s?s=!1:i+=",",i+=`${o}:${Qr(e.fields[o])}`;return i+"}"}(n.mapValue):v()}function Ds(n,t){return{referenceValue:`projects/${n.projectId}/databases/${n.database}/documents/${t.path.canonicalString()}`}}function Gr(n){return!!n&&"integerValue"in n}function Ni(n){return!!n&&"arrayValue"in n}function Ns(n){return!!n&&"nullValue"in n}function ks(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function In(n){return!!n&&"mapValue"in n}function Ve(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const t={mapValue:{fields:{}}};return Kt(n.mapValue.fields,(e,r)=>t.mapValue.fields[e]=Ve(r)),t}if(n.arrayValue){const t={arrayValue:{values:[]}};for(let e=0;e<(n.arrayValue.values||[]).length;++e)t.arrayValue.values[e]=Ve(n.arrayValue.values[e]);return t}return Object.assign({},n)}function lh(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class et{constructor(t){this.value=t}static empty(){return new et({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let e=this.value;for(let r=0;r<t.length-1;++r)if(e=(e.mapValue.fields||{})[t.get(r)],!In(e))return null;return e=(e.mapValue.fields||{})[t.lastSegment()],e||null}}set(t,e){this.getFieldsMap(t.popLast())[t.lastSegment()]=Ve(e)}setAll(t){let e=W.emptyPath(),r={},i=[];t.forEach((o,a)=>{if(!e.isImmediateParentOf(a)){const u=this.getFieldsMap(e);this.applyChanges(u,r,i),r={},i=[],e=a.popLast()}o?r[a.lastSegment()]=Ve(o):i.push(a.lastSegment())});const s=this.getFieldsMap(e);this.applyChanges(s,r,i)}delete(t){const e=this.field(t.popLast());In(e)&&e.mapValue.fields&&delete e.mapValue.fields[t.lastSegment()]}isEqual(t){return vt(this.value,t.value)}getFieldsMap(t){let e=this.value;e.mapValue.fields||(e.mapValue={fields:{}});for(let r=0;r<t.length;++r){let i=e.mapValue.fields[t.get(r)];In(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},e.mapValue.fields[t.get(r)]=i),e=i}return e.mapValue.fields}applyChanges(t,e,r){Kt(e,(i,s)=>t[i]=s);for(const i of r)delete t[i]}clone(){return new et(Ve(this.value))}}function ga(n){const t=[];return Kt(n.fields,(e,r)=>{const i=new W([e]);if(In(r)){const s=ga(r.mapValue).fields;if(s.length===0)t.push(i);else for(const o of s)t.push(i.child(o))}else t.push(i)}),new at(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class j{constructor(t,e,r,i,s,o,a){this.key=t,this.documentType=e,this.version=r,this.readTime=i,this.createTime=s,this.data=o,this.documentState=a}static newInvalidDocument(t){return new j(t,0,I.min(),I.min(),I.min(),et.empty(),0)}static newFoundDocument(t,e,r,i){return new j(t,1,e,I.min(),r,i,0)}static newNoDocument(t,e){return new j(t,2,e,I.min(),I.min(),et.empty(),0)}static newUnknownDocument(t,e){return new j(t,3,e,I.min(),I.min(),et.empty(),2)}convertToFoundDocument(t,e){return!this.createTime.isEqual(I.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=t),this.version=t,this.documentType=1,this.data=e,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=et.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=et.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=I.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(t){return t instanceof j&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new j(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mn{constructor(t,e){this.position=t,this.inclusive=e}}function xs(n,t,e){let r=0;for(let i=0;i<n.position.length;i++){const s=t[i],o=n.position[i];if(s.field.isKeyField()?r=E.comparator(E.fromName(o.referenceValue),e.key):r=ue(o,e.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function Ms(n,t){if(n===null)return t===null;if(t===null||n.inclusive!==t.inclusive||n.position.length!==t.position.length)return!1;for(let e=0;e<n.position.length;e++)if(!vt(n.position[e],t.position[e]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ln{constructor(t,e="asc"){this.field=t,this.dir=e}}function dh(n,t){return n.dir===t.dir&&n.field.isEqual(t.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _a{}class U extends _a{constructor(t,e,r){super(),this.field=t,this.op=e,this.value=r}static create(t,e,r){return t.isKeyField()?e==="in"||e==="not-in"?this.createKeyFieldInFilter(t,e,r):new mh(t,e,r):e==="array-contains"?new _h(t,r):e==="in"?new yh(t,r):e==="not-in"?new Eh(t,r):e==="array-contains-any"?new Th(t,r):new U(t,e,r)}static createKeyFieldInFilter(t,e,r){return e==="in"?new ph(t,r):new gh(t,r)}matches(t){const e=t.data.field(this.field);return this.op==="!="?e!==null&&this.matchesComparison(ue(e,this.value)):e!==null&&$t(this.value)===$t(e)&&this.matchesComparison(ue(e,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return t===0;case"!=":return t!==0;case">":return t>0;case">=":return t>=0;default:return v()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class mt extends _a{constructor(t,e){super(),this.filters=t,this.op=e,this.ue=null}static create(t,e){return new mt(t,e)}matches(t){return ya(this)?this.filters.find(e=>!e.matches(t))===void 0:this.filters.find(e=>e.matches(t))!==void 0}getFlattenedFilters(){return this.ue!==null||(this.ue=this.filters.reduce((t,e)=>t.concat(e.getFlattenedFilters()),[])),this.ue}getFilters(){return Object.assign([],this.filters)}}function ya(n){return n.op==="and"}function Ea(n){return fh(n)&&ya(n)}function fh(n){for(const t of n.filters)if(t instanceof mt)return!1;return!0}function Kr(n){if(n instanceof U)return n.field.canonicalString()+n.op.toString()+ce(n.value);if(Ea(n))return n.filters.map(t=>Kr(t)).join(",");{const t=n.filters.map(e=>Kr(e)).join(",");return`${n.op}(${t})`}}function Ta(n,t){return n instanceof U?function(r,i){return i instanceof U&&r.op===i.op&&r.field.isEqual(i.field)&&vt(r.value,i.value)}(n,t):n instanceof mt?function(r,i){return i instanceof mt&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((s,o,a)=>s&&Ta(o,i.filters[a]),!0):!1}(n,t):void v()}function va(n){return n instanceof U?function(e){return`${e.field.canonicalString()} ${e.op} ${ce(e.value)}`}(n):n instanceof mt?function(e){return e.op.toString()+" {"+e.getFilters().map(va).join(" ,")+"}"}(n):"Filter"}class mh extends U{constructor(t,e,r){super(t,e,r),this.key=E.fromName(r.referenceValue)}matches(t){const e=E.comparator(t.key,this.key);return this.matchesComparison(e)}}class ph extends U{constructor(t,e){super(t,"in",e),this.keys=Ia("in",e)}matches(t){return this.keys.some(e=>e.isEqual(t.key))}}class gh extends U{constructor(t,e){super(t,"not-in",e),this.keys=Ia("not-in",e)}matches(t){return!this.keys.some(e=>e.isEqual(t.key))}}function Ia(n,t){var e;return(((e=t.arrayValue)===null||e===void 0?void 0:e.values)||[]).map(r=>E.fromName(r.referenceValue))}class _h extends U{constructor(t,e){super(t,"array-contains",e)}matches(t){const e=t.data.field(this.field);return Ni(e)&&$e(e.arrayValue,this.value)}}class yh extends U{constructor(t,e){super(t,"in",e)}matches(t){const e=t.data.field(this.field);return e!==null&&$e(this.value.arrayValue,e)}}class Eh extends U{constructor(t,e){super(t,"not-in",e)}matches(t){if($e(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const e=t.data.field(this.field);return e!==null&&!$e(this.value.arrayValue,e)}}class Th extends U{constructor(t,e){super(t,"array-contains-any",e)}matches(t){const e=t.data.field(this.field);return!(!Ni(e)||!e.arrayValue.values)&&e.arrayValue.values.some(r=>$e(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vh{constructor(t,e=null,r=[],i=[],s=null,o=null,a=null){this.path=t,this.collectionGroup=e,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=a,this.ce=null}}function Ls(n,t=null,e=[],r=[],i=null,s=null,o=null){return new vh(n,t,e,r,i,s,o)}function ki(n){const t=A(n);if(t.ce===null){let e=t.path.canonicalString();t.collectionGroup!==null&&(e+="|cg:"+t.collectionGroup),e+="|f:",e+=t.filters.map(r=>Kr(r)).join(","),e+="|ob:",e+=t.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),rn(t.limit)||(e+="|l:",e+=t.limit),t.startAt&&(e+="|lb:",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map(r=>ce(r)).join(",")),t.endAt&&(e+="|ub:",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map(r=>ce(r)).join(",")),t.ce=e}return t.ce}function xi(n,t){if(n.limit!==t.limit||n.orderBy.length!==t.orderBy.length)return!1;for(let e=0;e<n.orderBy.length;e++)if(!dh(n.orderBy[e],t.orderBy[e]))return!1;if(n.filters.length!==t.filters.length)return!1;for(let e=0;e<n.filters.length;e++)if(!Ta(n.filters[e],t.filters[e]))return!1;return n.collectionGroup===t.collectionGroup&&!!n.path.isEqual(t.path)&&!!Ms(n.startAt,t.startAt)&&Ms(n.endAt,t.endAt)}function Wr(n){return E.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sn{constructor(t,e=null,r=[],i=[],s=null,o="F",a=null,u=null){this.path=t,this.collectionGroup=e,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=a,this.endAt=u,this.le=null,this.he=null,this.Pe=null,this.startAt,this.endAt}}function Ih(n,t,e,r,i,s,o,a){return new sn(n,t,e,r,i,s,o,a)}function or(n){return new sn(n)}function Os(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function wa(n){return n.collectionGroup!==null}function Se(n){const t=A(n);if(t.le===null){t.le=[];const e=new Set;for(const s of t.explicitOrderBy)t.le.push(s),e.add(s.field.canonicalString());const r=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";(function(o){let a=new X(W.comparator);return o.filters.forEach(u=>{u.getFlattenedFilters().forEach(c=>{c.isInequality()&&(a=a.add(c.field))})}),a})(t).forEach(s=>{e.has(s.canonicalString())||s.isKeyField()||t.le.push(new Ln(s,r))}),e.has(W.keyField().canonicalString())||t.le.push(new Ln(W.keyField(),r))}return t.le}function yt(n){const t=A(n);return t.he||(t.he=wh(t,Se(n))),t.he}function wh(n,t){if(n.limitType==="F")return Ls(n.path,n.collectionGroup,t,n.filters,n.limit,n.startAt,n.endAt);{t=t.map(i=>{const s=i.dir==="desc"?"asc":"desc";return new Ln(i.field,s)});const e=n.endAt?new Mn(n.endAt.position,n.endAt.inclusive):null,r=n.startAt?new Mn(n.startAt.position,n.startAt.inclusive):null;return Ls(n.path,n.collectionGroup,t,n.filters,n.limit,e,r)}}function Hr(n,t){const e=n.filters.concat([t]);return new sn(n.path,n.collectionGroup,n.explicitOrderBy.slice(),e,n.limit,n.limitType,n.startAt,n.endAt)}function Xr(n,t,e){return new sn(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),t,e,n.startAt,n.endAt)}function ar(n,t){return xi(yt(n),yt(t))&&n.limitType===t.limitType}function Aa(n){return`${ki(yt(n))}|lt:${n.limitType}`}function Jt(n){return`Query(target=${function(e){let r=e.path.canonicalString();return e.collectionGroup!==null&&(r+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(r+=`, filters: [${e.filters.map(i=>va(i)).join(", ")}]`),rn(e.limit)||(r+=", limit: "+e.limit),e.orderBy.length>0&&(r+=`, orderBy: [${e.orderBy.map(i=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(i)).join(", ")}]`),e.startAt&&(r+=", startAt: ",r+=e.startAt.inclusive?"b:":"a:",r+=e.startAt.position.map(i=>ce(i)).join(",")),e.endAt&&(r+=", endAt: ",r+=e.endAt.inclusive?"a:":"b:",r+=e.endAt.position.map(i=>ce(i)).join(",")),`Target(${r})`}(yt(n))}; limitType=${n.limitType})`}function ur(n,t){return t.isFoundDocument()&&function(r,i){const s=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(s):E.isDocumentKey(r.path)?r.path.isEqual(s):r.path.isImmediateParentOf(s)}(n,t)&&function(r,i){for(const s of Se(r))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(n,t)&&function(r,i){for(const s of r.filters)if(!s.matches(i))return!1;return!0}(n,t)&&function(r,i){return!(r.startAt&&!function(o,a,u){const c=xs(o,a,u);return o.inclusive?c<=0:c<0}(r.startAt,Se(r),i)||r.endAt&&!function(o,a,u){const c=xs(o,a,u);return o.inclusive?c>=0:c>0}(r.endAt,Se(r),i))}(n,t)}function Ah(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function Ra(n){return(t,e)=>{let r=!1;for(const i of Se(n)){const s=Rh(i,t,e);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function Rh(n,t,e){const r=n.field.isKeyField()?E.comparator(t.key,e.key):function(s,o,a){const u=o.data.field(s),c=a.data.field(s);return u!==null&&c!==null?ue(u,c):v()}(n.field,t,e);switch(n.dir){case"asc":return r;case"desc":return-1*r;default:return v()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pe{constructor(t,e){this.mapKeyFn=t,this.equalsFn=e,this.inner={},this.innerSize=0}get(t){const e=this.mapKeyFn(t),r=this.inner[e];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,t))return s}}has(t){return this.get(t)!==void 0}set(t,e){const r=this.mapKeyFn(t),i=this.inner[r];if(i===void 0)return this.inner[r]=[[t,e]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],t))return void(i[s]=[t,e]);i.push([t,e]),this.innerSize++}delete(t){const e=this.mapKeyFn(t),r=this.inner[e];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],t))return r.length===1?delete this.inner[e]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(t){Kt(this.inner,(e,r)=>{for(const[i,s]of r)t(i,s)})}isEmpty(){return ma(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ph=new L(E.comparator);function Rt(){return Ph}const Pa=new L(E.comparator);function we(...n){let t=Pa;for(const e of n)t=t.insert(e.key,e);return t}function Va(n){let t=Pa;return n.forEach((e,r)=>t=t.insert(e,r.overlayedDocument)),t}function qt(){return Ce()}function Sa(){return Ce()}function Ce(){return new pe(n=>n.toString(),(n,t)=>n.isEqual(t))}const Vh=new L(E.comparator),Sh=new X(E.comparator);function V(...n){let t=Sh;for(const e of n)t=t.add(e);return t}const Ch=new X(C);function Dh(){return Ch}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ca(n,t){if(n.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:xn(t)?"-0":t}}function Da(n){return{integerValue:""+n}}function Nh(n,t){return uh(t)?Da(t):Ca(n,t)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cr{constructor(){this._=void 0}}function kh(n,t,e){return n instanceof On?function(i,s){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&Ci(s)&&(s=Di(s)),s&&(o.fields.__previous_value__=s),{mapValue:o}}(e,t):n instanceof Qe?ka(n,t):n instanceof Ge?xa(n,t):function(i,s){const o=Na(i,s),a=Fs(o)+Fs(i.Ie);return Gr(o)&&Gr(i.Ie)?Da(a):Ca(i.serializer,a)}(n,t)}function xh(n,t,e){return n instanceof Qe?ka(n,t):n instanceof Ge?xa(n,t):e}function Na(n,t){return n instanceof Fn?function(r){return Gr(r)||function(s){return!!s&&"doubleValue"in s}(r)}(t)?t:{integerValue:0}:null}class On extends cr{}class Qe extends cr{constructor(t){super(),this.elements=t}}function ka(n,t){const e=Ma(t);for(const r of n.elements)e.some(i=>vt(i,r))||e.push(r);return{arrayValue:{values:e}}}class Ge extends cr{constructor(t){super(),this.elements=t}}function xa(n,t){let e=Ma(t);for(const r of n.elements)e=e.filter(i=>!vt(i,r));return{arrayValue:{values:e}}}class Fn extends cr{constructor(t,e){super(),this.serializer=t,this.Ie=e}}function Fs(n){return b(n.integerValue||n.doubleValue)}function Ma(n){return Ni(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}function Mh(n,t){return n.field.isEqual(t.field)&&function(r,i){return r instanceof Qe&&i instanceof Qe||r instanceof Ge&&i instanceof Ge?ae(r.elements,i.elements,vt):r instanceof Fn&&i instanceof Fn?vt(r.Ie,i.Ie):r instanceof On&&i instanceof On}(n.transform,t.transform)}class Lh{constructor(t,e){this.version=t,this.transformResults=e}}class nt{constructor(t,e){this.updateTime=t,this.exists=e}static none(){return new nt}static exists(t){return new nt(void 0,t)}static updateTime(t){return new nt(t)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function wn(n,t){return n.updateTime!==void 0?t.isFoundDocument()&&t.version.isEqual(n.updateTime):n.exists===void 0||n.exists===t.isFoundDocument()}class hr{}function La(n,t){if(!n.hasLocalMutations||t&&t.fields.length===0)return null;if(t===null)return n.isNoDocument()?new lr(n.key,nt.none()):new on(n.key,n.data,nt.none());{const e=n.data,r=et.empty();let i=new X(W.comparator);for(let s of t.fields)if(!i.has(s)){let o=e.field(s);o===null&&s.length>1&&(s=s.popLast(),o=e.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new Lt(n.key,r,new at(i.toArray()),nt.none())}}function Oh(n,t,e){n instanceof on?function(i,s,o){const a=i.value.clone(),u=Us(i.fieldTransforms,s,o.transformResults);a.setAll(u),s.convertToFoundDocument(o.version,a).setHasCommittedMutations()}(n,t,e):n instanceof Lt?function(i,s,o){if(!wn(i.precondition,s))return void s.convertToUnknownDocument(o.version);const a=Us(i.fieldTransforms,s,o.transformResults),u=s.data;u.setAll(Oa(i)),u.setAll(a),s.convertToFoundDocument(o.version,u).setHasCommittedMutations()}(n,t,e):function(i,s,o){s.convertToNoDocument(o.version).setHasCommittedMutations()}(0,t,e)}function De(n,t,e,r){return n instanceof on?function(s,o,a,u){if(!wn(s.precondition,o))return a;const c=s.value.clone(),h=qs(s.fieldTransforms,u,o);return c.setAll(h),o.convertToFoundDocument(o.version,c).setHasLocalMutations(),null}(n,t,e,r):n instanceof Lt?function(s,o,a,u){if(!wn(s.precondition,o))return a;const c=qs(s.fieldTransforms,u,o),h=o.data;return h.setAll(Oa(s)),h.setAll(c),o.convertToFoundDocument(o.version,h).setHasLocalMutations(),a===null?null:a.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(l=>l.field))}(n,t,e,r):function(s,o,a){return wn(s.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):a}(n,t,e)}function Fh(n,t){let e=null;for(const r of n.fieldTransforms){const i=t.data.field(r.field),s=Na(r.transform,i||null);s!=null&&(e===null&&(e=et.empty()),e.set(r.field,s))}return e||null}function bs(n,t){return n.type===t.type&&!!n.key.isEqual(t.key)&&!!n.precondition.isEqual(t.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&ae(r,i,(s,o)=>Mh(s,o))}(n.fieldTransforms,t.fieldTransforms)&&(n.type===0?n.value.isEqual(t.value):n.type!==1||n.data.isEqual(t.data)&&n.fieldMask.isEqual(t.fieldMask))}class on extends hr{constructor(t,e,r,i=[]){super(),this.key=t,this.value=e,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class Lt extends hr{constructor(t,e,r,i,s=[]){super(),this.key=t,this.data=e,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function Oa(n){const t=new Map;return n.fieldMask.fields.forEach(e=>{if(!e.isEmpty()){const r=n.data.field(e);t.set(e,r)}}),t}function Us(n,t,e){const r=new Map;D(n.length===e.length);for(let i=0;i<e.length;i++){const s=n[i],o=s.transform,a=t.data.field(s.field);r.set(s.field,xh(o,a,e[i]))}return r}function qs(n,t,e){const r=new Map;for(const i of n){const s=i.transform,o=e.data.field(i.field);r.set(i.field,kh(s,o,t))}return r}class lr extends hr{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Fa extends hr{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bh{constructor(t,e,r,i){this.batchId=t,this.localWriteTime=e,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(t,e){const r=e.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(t.key)&&Oh(s,t,r[i])}}applyToLocalView(t,e){for(const r of this.baseMutations)r.key.isEqual(t.key)&&(e=De(r,t,e,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(t.key)&&(e=De(r,t,e,this.localWriteTime));return e}applyToLocalDocumentSet(t,e){const r=Sa();return this.mutations.forEach(i=>{const s=t.get(i.key),o=s.overlayedDocument;let a=this.applyToLocalView(o,s.mutatedFields);a=e.has(i.key)?null:a;const u=La(o,a);u!==null&&r.set(i.key,u),o.isValidDocument()||o.convertToNoDocument(I.min())}),r}keys(){return this.mutations.reduce((t,e)=>t.add(e.key),V())}isEqual(t){return this.batchId===t.batchId&&ae(this.mutations,t.mutations,(e,r)=>bs(e,r))&&ae(this.baseMutations,t.baseMutations,(e,r)=>bs(e,r))}}class Mi{constructor(t,e,r,i){this.batch=t,this.commitVersion=e,this.mutationResults=r,this.docVersions=i}static from(t,e,r){D(t.mutations.length===r.length);let i=function(){return Vh}();const s=t.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new Mi(t,e,r,i)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uh{constructor(t,e){this.largestBatchId=t,this.mutation=e}getKey(){return this.mutation.key}isEqual(t){return t!==null&&this.mutation===t.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qh{constructor(t,e){this.count=t,this.unchangedNames=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var F,S;function ba(n){switch(n){default:return v();case f.CANCELLED:case f.UNKNOWN:case f.DEADLINE_EXCEEDED:case f.RESOURCE_EXHAUSTED:case f.INTERNAL:case f.UNAVAILABLE:case f.UNAUTHENTICATED:return!1;case f.INVALID_ARGUMENT:case f.NOT_FOUND:case f.ALREADY_EXISTS:case f.PERMISSION_DENIED:case f.FAILED_PRECONDITION:case f.ABORTED:case f.OUT_OF_RANGE:case f.UNIMPLEMENTED:case f.DATA_LOSS:return!0}}function Ua(n){if(n===void 0)return Tt("GRPC error has no .code"),f.UNKNOWN;switch(n){case F.OK:return f.OK;case F.CANCELLED:return f.CANCELLED;case F.UNKNOWN:return f.UNKNOWN;case F.DEADLINE_EXCEEDED:return f.DEADLINE_EXCEEDED;case F.RESOURCE_EXHAUSTED:return f.RESOURCE_EXHAUSTED;case F.INTERNAL:return f.INTERNAL;case F.UNAVAILABLE:return f.UNAVAILABLE;case F.UNAUTHENTICATED:return f.UNAUTHENTICATED;case F.INVALID_ARGUMENT:return f.INVALID_ARGUMENT;case F.NOT_FOUND:return f.NOT_FOUND;case F.ALREADY_EXISTS:return f.ALREADY_EXISTS;case F.PERMISSION_DENIED:return f.PERMISSION_DENIED;case F.FAILED_PRECONDITION:return f.FAILED_PRECONDITION;case F.ABORTED:return f.ABORTED;case F.OUT_OF_RANGE:return f.OUT_OF_RANGE;case F.UNIMPLEMENTED:return f.UNIMPLEMENTED;case F.DATA_LOSS:return f.DATA_LOSS;default:return v()}}(S=F||(F={}))[S.OK=0]="OK",S[S.CANCELLED=1]="CANCELLED",S[S.UNKNOWN=2]="UNKNOWN",S[S.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",S[S.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",S[S.NOT_FOUND=5]="NOT_FOUND",S[S.ALREADY_EXISTS=6]="ALREADY_EXISTS",S[S.PERMISSION_DENIED=7]="PERMISSION_DENIED",S[S.UNAUTHENTICATED=16]="UNAUTHENTICATED",S[S.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",S[S.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",S[S.ABORTED=10]="ABORTED",S[S.OUT_OF_RANGE=11]="OUT_OF_RANGE",S[S.UNIMPLEMENTED=12]="UNIMPLEMENTED",S[S.INTERNAL=13]="INTERNAL",S[S.UNAVAILABLE=14]="UNAVAILABLE",S[S.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bh(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jh=new ie([4294967295,4294967295],0);function Bs(n){const t=Bh().encode(n),e=new Qc;return e.update(t),new Uint8Array(e.digest())}function js(n){const t=new DataView(n.buffer),e=t.getUint32(0,!0),r=t.getUint32(4,!0),i=t.getUint32(8,!0),s=t.getUint32(12,!0);return[new ie([e,r],0),new ie([i,s],0)]}class Li{constructor(t,e,r){if(this.bitmap=t,this.padding=e,this.hashCount=r,e<0||e>=8)throw new Ae(`Invalid padding: ${e}`);if(r<0)throw new Ae(`Invalid hash count: ${r}`);if(t.length>0&&this.hashCount===0)throw new Ae(`Invalid hash count: ${r}`);if(t.length===0&&e!==0)throw new Ae(`Invalid padding when bitmap length is 0: ${e}`);this.Te=8*t.length-e,this.Ee=ie.fromNumber(this.Te)}de(t,e,r){let i=t.add(e.multiply(ie.fromNumber(r)));return i.compare(jh)===1&&(i=new ie([i.getBits(0),i.getBits(1)],0)),i.modulo(this.Ee).toNumber()}Ae(t){return(this.bitmap[Math.floor(t/8)]&1<<t%8)!=0}mightContain(t){if(this.Te===0)return!1;const e=Bs(t),[r,i]=js(e);for(let s=0;s<this.hashCount;s++){const o=this.de(r,i,s);if(!this.Ae(o))return!1}return!0}static create(t,e,r){const i=t%8==0?0:8-t%8,s=new Uint8Array(Math.ceil(t/8)),o=new Li(s,i,e);return r.forEach(a=>o.insert(a)),o}insert(t){if(this.Te===0)return;const e=Bs(t),[r,i]=js(e);for(let s=0;s<this.hashCount;s++){const o=this.de(r,i,s);this.Re(o)}}Re(t){const e=Math.floor(t/8),r=t%8;this.bitmap[e]|=1<<r}}class Ae extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dr{constructor(t,e,r,i,s){this.snapshotVersion=t,this.targetChanges=e,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(t,e,r){const i=new Map;return i.set(t,an.createSynthesizedTargetChangeForCurrentChange(t,e,r)),new dr(I.min(),i,new L(C),Rt(),V())}}class an{constructor(t,e,r,i,s){this.resumeToken=t,this.current=e,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(t,e,r){return new an(r,e,V(),V(),V())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class An{constructor(t,e,r,i){this.Ve=t,this.removedTargetIds=e,this.key=r,this.me=i}}class qa{constructor(t,e){this.targetId=t,this.fe=e}}class Ba{constructor(t,e,r=tt.EMPTY_BYTE_STRING,i=null){this.state=t,this.targetIds=e,this.resumeToken=r,this.cause=i}}class zs{constructor(){this.ge=0,this.pe=Qs(),this.ye=tt.EMPTY_BYTE_STRING,this.we=!1,this.Se=!0}get current(){return this.we}get resumeToken(){return this.ye}get be(){return this.ge!==0}get De(){return this.Se}Ce(t){t.approximateByteSize()>0&&(this.Se=!0,this.ye=t)}ve(){let t=V(),e=V(),r=V();return this.pe.forEach((i,s)=>{switch(s){case 0:t=t.add(i);break;case 2:e=e.add(i);break;case 1:r=r.add(i);break;default:v()}}),new an(this.ye,this.we,t,e,r)}Fe(){this.Se=!1,this.pe=Qs()}Me(t,e){this.Se=!0,this.pe=this.pe.insert(t,e)}xe(t){this.Se=!0,this.pe=this.pe.remove(t)}Oe(){this.ge+=1}Ne(){this.ge-=1,D(this.ge>=0)}Be(){this.Se=!0,this.we=!0}}class zh{constructor(t){this.Le=t,this.ke=new Map,this.qe=Rt(),this.Qe=$s(),this.Ke=new L(C)}$e(t){for(const e of t.Ve)t.me&&t.me.isFoundDocument()?this.Ue(e,t.me):this.We(e,t.key,t.me);for(const e of t.removedTargetIds)this.We(e,t.key,t.me)}Ge(t){this.forEachTarget(t,e=>{const r=this.ze(e);switch(t.state){case 0:this.je(e)&&r.Ce(t.resumeToken);break;case 1:r.Ne(),r.be||r.Fe(),r.Ce(t.resumeToken);break;case 2:r.Ne(),r.be||this.removeTarget(e);break;case 3:this.je(e)&&(r.Be(),r.Ce(t.resumeToken));break;case 4:this.je(e)&&(this.He(e),r.Ce(t.resumeToken));break;default:v()}})}forEachTarget(t,e){t.targetIds.length>0?t.targetIds.forEach(e):this.ke.forEach((r,i)=>{this.je(i)&&e(i)})}Je(t){const e=t.targetId,r=t.fe.count,i=this.Ye(e);if(i){const s=i.target;if(Wr(s))if(r===0){const o=new E(s.path);this.We(e,o,j.newNoDocument(o,I.min()))}else D(r===1);else{const o=this.Ze(e);if(o!==r){const a=this.Xe(t),u=a?this.et(a,t,o):1;if(u!==0){this.He(e);const c=u===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ke=this.Ke.insert(e,c)}}}}}Xe(t){const e=t.fe.unchangedNames;if(!e||!e.bits)return null;const{bits:{bitmap:r="",padding:i=0},hashCount:s=0}=e;let o,a;try{o=zt(r).toUint8Array()}catch(u){if(u instanceof pa)return qe("Decoding the base64 bloom filter in existence filter failed ("+u.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw u}try{a=new Li(o,i,s)}catch(u){return qe(u instanceof Ae?"BloomFilter error: ":"Applying bloom filter failed: ",u),null}return a.Te===0?null:a}et(t,e,r){return e.fe.count===r-this.rt(t,e.targetId)?0:2}rt(t,e){const r=this.Le.getRemoteKeysForTarget(e);let i=0;return r.forEach(s=>{const o=this.Le.nt(),a=`projects/${o.projectId}/databases/${o.database}/documents/${s.path.canonicalString()}`;t.mightContain(a)||(this.We(e,s,null),i++)}),i}it(t){const e=new Map;this.ke.forEach((s,o)=>{const a=this.Ye(o);if(a){if(s.current&&Wr(a.target)){const u=new E(a.target.path);this.qe.get(u)!==null||this.st(o,u)||this.We(o,u,j.newNoDocument(u,t))}s.De&&(e.set(o,s.ve()),s.Fe())}});let r=V();this.Qe.forEach((s,o)=>{let a=!0;o.forEachWhile(u=>{const c=this.Ye(u);return!c||c.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(r=r.add(s))}),this.qe.forEach((s,o)=>o.setReadTime(t));const i=new dr(t,e,this.Ke,this.qe,r);return this.qe=Rt(),this.Qe=$s(),this.Ke=new L(C),i}Ue(t,e){if(!this.je(t))return;const r=this.st(t,e.key)?2:0;this.ze(t).Me(e.key,r),this.qe=this.qe.insert(e.key,e),this.Qe=this.Qe.insert(e.key,this.ot(e.key).add(t))}We(t,e,r){if(!this.je(t))return;const i=this.ze(t);this.st(t,e)?i.Me(e,1):i.xe(e),this.Qe=this.Qe.insert(e,this.ot(e).delete(t)),r&&(this.qe=this.qe.insert(e,r))}removeTarget(t){this.ke.delete(t)}Ze(t){const e=this.ze(t).ve();return this.Le.getRemoteKeysForTarget(t).size+e.addedDocuments.size-e.removedDocuments.size}Oe(t){this.ze(t).Oe()}ze(t){let e=this.ke.get(t);return e||(e=new zs,this.ke.set(t,e)),e}ot(t){let e=this.Qe.get(t);return e||(e=new X(C),this.Qe=this.Qe.insert(t,e)),e}je(t){const e=this.Ye(t)!==null;return e||_("WatchChangeAggregator","Detected inactive target",t),e}Ye(t){const e=this.ke.get(t);return e&&e.be?null:this.Le._t(t)}He(t){this.ke.set(t,new zs),this.Le.getRemoteKeysForTarget(t).forEach(e=>{this.We(t,e,null)})}st(t,e){return this.Le.getRemoteKeysForTarget(t).has(e)}}function $s(){return new L(E.comparator)}function Qs(){return new L(E.comparator)}const $h=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),Qh=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),Gh=(()=>({and:"AND",or:"OR"}))();class Kh{constructor(t,e){this.databaseId=t,this.useProto3Json=e}}function Yr(n,t){return n.useProto3Json||rn(t)?t:{value:t}}function bn(n,t){return n.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function ja(n,t){return n.useProto3Json?t.toBase64():t.toUint8Array()}function Wh(n,t){return bn(n,t.toTimestamp())}function ut(n){return D(!!n),I.fromTimestamp(function(e){const r=Dt(e);return new q(r.seconds,r.nanos)}(n))}function Oi(n,t){return Jr(n,t).canonicalString()}function Jr(n,t){const e=function(i){return new k(["projects",i.projectId,"databases",i.database])}(n).child("documents");return t===void 0?e:e.child(t)}function za(n){const t=k.fromString(n);return D(Ha(t)),t}function Un(n,t){return Oi(n.databaseId,t.path)}function Ne(n,t){const e=za(t);if(e.get(1)!==n.databaseId.projectId)throw new g(f.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+e.get(1)+" vs "+n.databaseId.projectId);if(e.get(3)!==n.databaseId.database)throw new g(f.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+e.get(3)+" vs "+n.databaseId.database);return new E(Qa(e))}function $a(n,t){return Oi(n.databaseId,t)}function Hh(n){const t=za(n);return t.length===4?k.emptyPath():Qa(t)}function Zr(n){return new k(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function Qa(n){return D(n.length>4&&n.get(4)==="documents"),n.popFirst(5)}function Gs(n,t,e){return{name:Un(n,t),fields:e.value.mapValue.fields}}function Xh(n,t){return"found"in t?function(r,i){D(!!i.found),i.found.name,i.found.updateTime;const s=Ne(r,i.found.name),o=ut(i.found.updateTime),a=i.found.createTime?ut(i.found.createTime):I.min(),u=new et({mapValue:{fields:i.found.fields}});return j.newFoundDocument(s,o,a,u)}(n,t):"missing"in t?function(r,i){D(!!i.missing),D(!!i.readTime);const s=Ne(r,i.missing),o=ut(i.readTime);return j.newNoDocument(s,o)}(n,t):v()}function Yh(n,t){let e;if("targetChange"in t){t.targetChange;const r=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:v()}(t.targetChange.targetChangeType||"NO_CHANGE"),i=t.targetChange.targetIds||[],s=function(c,h){return c.useProto3Json?(D(h===void 0||typeof h=="string"),tt.fromBase64String(h||"")):(D(h===void 0||h instanceof Uint8Array),tt.fromUint8Array(h||new Uint8Array))}(n,t.targetChange.resumeToken),o=t.targetChange.cause,a=o&&function(c){const h=c.code===void 0?f.UNKNOWN:Ua(c.code);return new g(h,c.message||"")}(o);e=new Ba(r,i,s,a||null)}else if("documentChange"in t){t.documentChange;const r=t.documentChange;r.document,r.document.name,r.document.updateTime;const i=Ne(n,r.document.name),s=ut(r.document.updateTime),o=r.document.createTime?ut(r.document.createTime):I.min(),a=new et({mapValue:{fields:r.document.fields}}),u=j.newFoundDocument(i,s,o,a),c=r.targetIds||[],h=r.removedTargetIds||[];e=new An(c,h,u.key,u)}else if("documentDelete"in t){t.documentDelete;const r=t.documentDelete;r.document;const i=Ne(n,r.document),s=r.readTime?ut(r.readTime):I.min(),o=j.newNoDocument(i,s),a=r.removedTargetIds||[];e=new An([],a,o.key,o)}else if("documentRemove"in t){t.documentRemove;const r=t.documentRemove;r.document;const i=Ne(n,r.document),s=r.removedTargetIds||[];e=new An([],s,i,null)}else{if(!("filter"in t))return v();{t.filter;const r=t.filter;r.targetId;const{count:i=0,unchangedNames:s}=r,o=new qh(i,s),a=r.targetId;e=new qa(a,o)}}return e}function Ga(n,t){let e;if(t instanceof on)e={update:Gs(n,t.key,t.value)};else if(t instanceof lr)e={delete:Un(n,t.key)};else if(t instanceof Lt)e={update:Gs(n,t.key,t.data),updateMask:ol(t.fieldMask)};else{if(!(t instanceof Fa))return v();e={verify:Un(n,t.key)}}return t.fieldTransforms.length>0&&(e.updateTransforms=t.fieldTransforms.map(r=>function(s,o){const a=o.transform;if(a instanceof On)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(a instanceof Qe)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:a.elements}};if(a instanceof Ge)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:a.elements}};if(a instanceof Fn)return{fieldPath:o.field.canonicalString(),increment:a.Ie};throw v()}(0,r))),t.precondition.isNone||(e.currentDocument=function(i,s){return s.updateTime!==void 0?{updateTime:Wh(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:v()}(n,t.precondition)),e}function Jh(n,t){return n&&n.length>0?(D(t!==void 0),n.map(e=>function(i,s){let o=i.updateTime?ut(i.updateTime):ut(s);return o.isEqual(I.min())&&(o=ut(s)),new Lh(o,i.transformResults||[])}(e,t))):[]}function Zh(n,t){return{documents:[$a(n,t.path)]}}function tl(n,t){const e={structuredQuery:{}},r=t.path;let i;t.collectionGroup!==null?(i=r,e.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(i=r.popLast(),e.structuredQuery.from=[{collectionId:r.lastSegment()}]),e.parent=$a(n,i);const s=function(c){if(c.length!==0)return Wa(mt.create(c,"and"))}(t.filters);s&&(e.structuredQuery.where=s);const o=function(c){if(c.length!==0)return c.map(h=>function(d){return{field:Zt(d.field),direction:rl(d.dir)}}(h))}(t.orderBy);o&&(e.structuredQuery.orderBy=o);const a=Yr(n,t.limit);return a!==null&&(e.structuredQuery.limit=a),t.startAt&&(e.structuredQuery.startAt=function(c){return{before:c.inclusive,values:c.position}}(t.startAt)),t.endAt&&(e.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(t.endAt)),{ut:e,parent:i}}function el(n){let t=Hh(n.parent);const e=n.structuredQuery,r=e.from?e.from.length:0;let i=null;if(r>0){D(r===1);const h=e.from[0];h.allDescendants?i=h.collectionId:t=t.child(h.collectionId)}let s=[];e.where&&(s=function(l){const d=Ka(l);return d instanceof mt&&Ea(d)?d.getFilters():[d]}(e.where));let o=[];e.orderBy&&(o=function(l){return l.map(d=>function(R){return new Ln(te(R.field),function(T){switch(T){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(R.direction))}(d))}(e.orderBy));let a=null;e.limit&&(a=function(l){let d;return d=typeof l=="object"?l.value:l,rn(d)?null:d}(e.limit));let u=null;e.startAt&&(u=function(l){const d=!!l.before,p=l.values||[];return new Mn(p,d)}(e.startAt));let c=null;return e.endAt&&(c=function(l){const d=!l.before,p=l.values||[];return new Mn(p,d)}(e.endAt)),Ih(t,i,o,s,a,"F",u,c)}function nl(n,t){const e=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return v()}}(t.purpose);return e==null?null:{"goog-listen-tags":e}}function Ka(n){return n.unaryFilter!==void 0?function(e){switch(e.unaryFilter.op){case"IS_NAN":const r=te(e.unaryFilter.field);return U.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=te(e.unaryFilter.field);return U.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=te(e.unaryFilter.field);return U.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=te(e.unaryFilter.field);return U.create(o,"!=",{nullValue:"NULL_VALUE"});default:return v()}}(n):n.fieldFilter!==void 0?function(e){return U.create(te(e.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return v()}}(e.fieldFilter.op),e.fieldFilter.value)}(n):n.compositeFilter!==void 0?function(e){return mt.create(e.compositeFilter.filters.map(r=>Ka(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return v()}}(e.compositeFilter.op))}(n):v()}function rl(n){return $h[n]}function il(n){return Qh[n]}function sl(n){return Gh[n]}function Zt(n){return{fieldPath:n.canonicalString()}}function te(n){return W.fromServerFormat(n.fieldPath)}function Wa(n){return n instanceof U?function(e){if(e.op==="=="){if(ks(e.value))return{unaryFilter:{field:Zt(e.field),op:"IS_NAN"}};if(Ns(e.value))return{unaryFilter:{field:Zt(e.field),op:"IS_NULL"}}}else if(e.op==="!="){if(ks(e.value))return{unaryFilter:{field:Zt(e.field),op:"IS_NOT_NAN"}};if(Ns(e.value))return{unaryFilter:{field:Zt(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Zt(e.field),op:il(e.op),value:e.value}}}(n):n instanceof mt?function(e){const r=e.getFilters().map(i=>Wa(i));return r.length===1?r[0]:{compositeFilter:{op:sl(e.op),filters:r}}}(n):v()}function ol(n){const t=[];return n.fields.forEach(e=>t.push(e.canonicalString())),{fieldPaths:t}}function Ha(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vt{constructor(t,e,r,i,s=I.min(),o=I.min(),a=tt.EMPTY_BYTE_STRING,u=null){this.target=t,this.targetId=e,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=u}withSequenceNumber(t){return new Vt(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(t,e){return new Vt(this.target,this.targetId,this.purpose,this.sequenceNumber,e,this.lastLimboFreeSnapshotVersion,t,null)}withExpectedCount(t){return new Vt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,t)}withLastLimboFreeSnapshotVersion(t){return new Vt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class al{constructor(t){this.ct=t}}function ul(n){const t=el({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?Xr(t,t.limit,"L"):t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cl{constructor(){this._n=new hl}addToCollectionParentIndex(t,e){return this._n.add(e),m.resolve()}getCollectionParents(t,e){return m.resolve(this._n.getEntries(e))}addFieldIndex(t,e){return m.resolve()}deleteFieldIndex(t,e){return m.resolve()}deleteAllFieldIndexes(t){return m.resolve()}createTargetIndexes(t,e){return m.resolve()}getDocumentsMatchingTarget(t,e){return m.resolve(null)}getIndexType(t,e){return m.resolve(0)}getFieldIndexes(t,e){return m.resolve([])}getNextCollectionGroupToUpdate(t){return m.resolve(null)}getMinOffset(t,e){return m.resolve(Ct.min())}getMinOffsetFromCollectionGroup(t,e){return m.resolve(Ct.min())}updateCollectionGroup(t,e,r){return m.resolve()}updateIndexEntries(t,e){return m.resolve()}}class hl{constructor(){this.index={}}add(t){const e=t.lastSegment(),r=t.popLast(),i=this.index[e]||new X(k.comparator),s=!i.has(r);return this.index[e]=i.add(r),s}has(t){const e=t.lastSegment(),r=t.popLast(),i=this.index[e];return i&&i.has(r)}getEntries(t){return(this.index[t]||new X(k.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class he{constructor(t){this.On=t}next(){return this.On+=2,this.On}static Nn(){return new he(0)}static Bn(){return new he(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ll{constructor(){this.changes=new pe(t=>t.toString(),(t,e)=>t.isEqual(e)),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,e){this.assertNotApplied(),this.changes.set(t,j.newInvalidDocument(t).setReadTime(e))}getEntry(t,e){this.assertNotApplied();const r=this.changes.get(e);return r!==void 0?m.resolve(r):this.getFromCache(t,e)}getEntries(t,e){return this.getAllFromCache(t,e)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dl{constructor(t,e){this.overlayedDocument=t,this.mutatedFields=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fl{constructor(t,e,r,i){this.remoteDocumentCache=t,this.mutationQueue=e,this.documentOverlayCache=r,this.indexManager=i}getDocument(t,e){let r=null;return this.documentOverlayCache.getOverlay(t,e).next(i=>(r=i,this.remoteDocumentCache.getEntry(t,e))).next(i=>(r!==null&&De(r.mutation,i,at.empty(),q.now()),i))}getDocuments(t,e){return this.remoteDocumentCache.getEntries(t,e).next(r=>this.getLocalViewOfDocuments(t,r,V()).next(()=>r))}getLocalViewOfDocuments(t,e,r=V()){const i=qt();return this.populateOverlays(t,i,e).next(()=>this.computeViews(t,e,i,r).next(s=>{let o=we();return s.forEach((a,u)=>{o=o.insert(a,u.overlayedDocument)}),o}))}getOverlayedDocuments(t,e){const r=qt();return this.populateOverlays(t,r,e).next(()=>this.computeViews(t,e,r,V()))}populateOverlays(t,e,r){const i=[];return r.forEach(s=>{e.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(t,i).next(s=>{s.forEach((o,a)=>{e.set(o,a)})})}computeViews(t,e,r,i){let s=Rt();const o=Ce(),a=function(){return Ce()}();return e.forEach((u,c)=>{const h=r.get(c.key);i.has(c.key)&&(h===void 0||h.mutation instanceof Lt)?s=s.insert(c.key,c):h!==void 0?(o.set(c.key,h.mutation.getFieldMask()),De(h.mutation,c,h.mutation.getFieldMask(),q.now())):o.set(c.key,at.empty())}),this.recalculateAndSaveOverlays(t,s).next(u=>(u.forEach((c,h)=>o.set(c,h)),e.forEach((c,h)=>{var l;return a.set(c,new dl(h,(l=o.get(c))!==null&&l!==void 0?l:null))}),a))}recalculateAndSaveOverlays(t,e){const r=Ce();let i=new L((o,a)=>o-a),s=V();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,e).next(o=>{for(const a of o)a.keys().forEach(u=>{const c=e.get(u);if(c===null)return;let h=r.get(u)||at.empty();h=a.applyToLocalView(c,h),r.set(u,h);const l=(i.get(a.batchId)||V()).add(u);i=i.insert(a.batchId,l)})}).next(()=>{const o=[],a=i.getReverseIterator();for(;a.hasNext();){const u=a.getNext(),c=u.key,h=u.value,l=Sa();h.forEach(d=>{if(!s.has(d)){const p=La(e.get(d),r.get(d));p!==null&&l.set(d,p),s=s.add(d)}}),o.push(this.documentOverlayCache.saveOverlays(t,c,l))}return m.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(t,e){return this.remoteDocumentCache.getEntries(t,e).next(r=>this.recalculateAndSaveOverlays(t,r))}getDocumentsMatchingQuery(t,e,r,i){return function(o){return E.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(e)?this.getDocumentsMatchingDocumentQuery(t,e.path):wa(e)?this.getDocumentsMatchingCollectionGroupQuery(t,e,r,i):this.getDocumentsMatchingCollectionQuery(t,e,r,i)}getNextDocuments(t,e,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(t,e,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,e,r.largestBatchId,i-s.size):m.resolve(qt());let a=-1,u=s;return o.next(c=>m.forEach(c,(h,l)=>(a<l.largestBatchId&&(a=l.largestBatchId),s.get(h)?m.resolve():this.remoteDocumentCache.getEntry(t,h).next(d=>{u=u.insert(h,d)}))).next(()=>this.populateOverlays(t,c,s)).next(()=>this.computeViews(t,u,c,V())).next(h=>({batchId:a,changes:Va(h)})))})}getDocumentsMatchingDocumentQuery(t,e){return this.getDocument(t,new E(e)).next(r=>{let i=we();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(t,e,r,i){const s=e.collectionGroup;let o=we();return this.indexManager.getCollectionParents(t,s).next(a=>m.forEach(a,u=>{const c=function(l,d){return new sn(d,null,l.explicitOrderBy.slice(),l.filters.slice(),l.limit,l.limitType,l.startAt,l.endAt)}(e,u.child(s));return this.getDocumentsMatchingCollectionQuery(t,c,r,i).next(h=>{h.forEach((l,d)=>{o=o.insert(l,d)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(t,e,r,i){let s;return this.documentOverlayCache.getOverlaysForCollection(t,e.path,r.largestBatchId).next(o=>(s=o,this.remoteDocumentCache.getDocumentsMatchingQuery(t,e,r,s,i))).next(o=>{s.forEach((u,c)=>{const h=c.getKey();o.get(h)===null&&(o=o.insert(h,j.newInvalidDocument(h)))});let a=we();return o.forEach((u,c)=>{const h=s.get(u);h!==void 0&&De(h.mutation,c,at.empty(),q.now()),ur(e,c)&&(a=a.insert(u,c))}),a})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ml{constructor(t){this.serializer=t,this.cr=new Map,this.lr=new Map}getBundleMetadata(t,e){return m.resolve(this.cr.get(e))}saveBundleMetadata(t,e){return this.cr.set(e.id,function(i){return{id:i.id,version:i.version,createTime:ut(i.createTime)}}(e)),m.resolve()}getNamedQuery(t,e){return m.resolve(this.lr.get(e))}saveNamedQuery(t,e){return this.lr.set(e.name,function(i){return{name:i.name,query:ul(i.bundledQuery),readTime:ut(i.readTime)}}(e)),m.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pl{constructor(){this.overlays=new L(E.comparator),this.hr=new Map}getOverlay(t,e){return m.resolve(this.overlays.get(e))}getOverlays(t,e){const r=qt();return m.forEach(e,i=>this.getOverlay(t,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(t,e,r){return r.forEach((i,s)=>{this.ht(t,e,s)}),m.resolve()}removeOverlaysForBatchId(t,e,r){const i=this.hr.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.hr.delete(r)),m.resolve()}getOverlaysForCollection(t,e,r){const i=qt(),s=e.length+1,o=new E(e.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const u=a.getNext().value,c=u.getKey();if(!e.isPrefixOf(c.path))break;c.path.length===s&&u.largestBatchId>r&&i.set(u.getKey(),u)}return m.resolve(i)}getOverlaysForCollectionGroup(t,e,r,i){let s=new L((c,h)=>c-h);const o=this.overlays.getIterator();for(;o.hasNext();){const c=o.getNext().value;if(c.getKey().getCollectionGroup()===e&&c.largestBatchId>r){let h=s.get(c.largestBatchId);h===null&&(h=qt(),s=s.insert(c.largestBatchId,h)),h.set(c.getKey(),c)}}const a=qt(),u=s.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach((c,h)=>a.set(c,h)),!(a.size()>=i)););return m.resolve(a)}ht(t,e,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.hr.get(i.largestBatchId).delete(r.key);this.hr.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new Uh(e,r));let s=this.hr.get(e);s===void 0&&(s=V(),this.hr.set(e,s)),this.hr.set(e,s.add(r.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fi{constructor(){this.Pr=new X(B.Ir),this.Tr=new X(B.Er)}isEmpty(){return this.Pr.isEmpty()}addReference(t,e){const r=new B(t,e);this.Pr=this.Pr.add(r),this.Tr=this.Tr.add(r)}dr(t,e){t.forEach(r=>this.addReference(r,e))}removeReference(t,e){this.Ar(new B(t,e))}Rr(t,e){t.forEach(r=>this.removeReference(r,e))}Vr(t){const e=new E(new k([])),r=new B(e,t),i=new B(e,t+1),s=[];return this.Tr.forEachInRange([r,i],o=>{this.Ar(o),s.push(o.key)}),s}mr(){this.Pr.forEach(t=>this.Ar(t))}Ar(t){this.Pr=this.Pr.delete(t),this.Tr=this.Tr.delete(t)}gr(t){const e=new E(new k([])),r=new B(e,t),i=new B(e,t+1);let s=V();return this.Tr.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(t){const e=new B(t,0),r=this.Pr.firstAfterOrEqual(e);return r!==null&&t.isEqual(r.key)}}class B{constructor(t,e){this.key=t,this.pr=e}static Ir(t,e){return E.comparator(t.key,e.key)||C(t.pr,e.pr)}static Er(t,e){return C(t.pr,e.pr)||E.comparator(t.key,e.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gl{constructor(t,e){this.indexManager=t,this.referenceDelegate=e,this.mutationQueue=[],this.yr=1,this.wr=new X(B.Ir)}checkEmpty(t){return m.resolve(this.mutationQueue.length===0)}addMutationBatch(t,e,r,i){const s=this.yr;this.yr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new bh(s,e,r,i);this.mutationQueue.push(o);for(const a of i)this.wr=this.wr.add(new B(a.key,s)),this.indexManager.addToCollectionParentIndex(t,a.key.path.popLast());return m.resolve(o)}lookupMutationBatch(t,e){return m.resolve(this.Sr(e))}getNextMutationBatchAfterBatchId(t,e){const r=e+1,i=this.br(r),s=i<0?0:i;return m.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return m.resolve(this.mutationQueue.length===0?-1:this.yr-1)}getAllMutationBatches(t){return m.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,e){const r=new B(e,0),i=new B(e,Number.POSITIVE_INFINITY),s=[];return this.wr.forEachInRange([r,i],o=>{const a=this.Sr(o.pr);s.push(a)}),m.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(t,e){let r=new X(C);return e.forEach(i=>{const s=new B(i,0),o=new B(i,Number.POSITIVE_INFINITY);this.wr.forEachInRange([s,o],a=>{r=r.add(a.pr)})}),m.resolve(this.Dr(r))}getAllMutationBatchesAffectingQuery(t,e){const r=e.path,i=r.length+1;let s=r;E.isDocumentKey(s)||(s=s.child(""));const o=new B(new E(s),0);let a=new X(C);return this.wr.forEachWhile(u=>{const c=u.key.path;return!!r.isPrefixOf(c)&&(c.length===i&&(a=a.add(u.pr)),!0)},o),m.resolve(this.Dr(a))}Dr(t){const e=[];return t.forEach(r=>{const i=this.Sr(r);i!==null&&e.push(i)}),e}removeMutationBatch(t,e){D(this.Cr(e.batchId,"removed")===0),this.mutationQueue.shift();let r=this.wr;return m.forEach(e.mutations,i=>{const s=new B(i.key,e.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(t,i.key)}).next(()=>{this.wr=r})}Mn(t){}containsKey(t,e){const r=new B(e,0),i=this.wr.firstAfterOrEqual(r);return m.resolve(e.isEqual(i&&i.key))}performConsistencyCheck(t){return this.mutationQueue.length,m.resolve()}Cr(t,e){return this.br(t)}br(t){return this.mutationQueue.length===0?0:t-this.mutationQueue[0].batchId}Sr(t){const e=this.br(t);return e<0||e>=this.mutationQueue.length?null:this.mutationQueue[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _l{constructor(t){this.vr=t,this.docs=function(){return new L(E.comparator)}(),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,e){const r=e.key,i=this.docs.get(r),s=i?i.size:0,o=this.vr(e);return this.docs=this.docs.insert(r,{document:e.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(t,r.path.popLast())}removeEntry(t){const e=this.docs.get(t);e&&(this.docs=this.docs.remove(t),this.size-=e.size)}getEntry(t,e){const r=this.docs.get(e);return m.resolve(r?r.document.mutableCopy():j.newInvalidDocument(e))}getEntries(t,e){let r=Rt();return e.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():j.newInvalidDocument(i))}),m.resolve(r)}getDocumentsMatchingQuery(t,e,r,i){let s=Rt();const o=e.path,a=new E(o.child("")),u=this.docs.getIteratorFrom(a);for(;u.hasNext();){const{key:c,value:{document:h}}=u.getNext();if(!o.isPrefixOf(c.path))break;c.path.length>o.length+1||rh(nh(h),r)<=0||(i.has(h.key)||ur(e,h))&&(s=s.insert(h.key,h.mutableCopy()))}return m.resolve(s)}getAllFromCollectionGroup(t,e,r,i){v()}Fr(t,e){return m.forEach(this.docs,r=>e(r))}newChangeBuffer(t){return new yl(this)}getSize(t){return m.resolve(this.size)}}class yl extends ll{constructor(t){super(),this.ar=t}applyChanges(t){const e=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?e.push(this.ar.addEntry(t,i)):this.ar.removeEntry(r)}),m.waitFor(e)}getFromCache(t,e){return this.ar.getEntry(t,e)}getAllFromCache(t,e){return this.ar.getEntries(t,e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class El{constructor(t){this.persistence=t,this.Mr=new pe(e=>ki(e),xi),this.lastRemoteSnapshotVersion=I.min(),this.highestTargetId=0,this.Or=0,this.Nr=new Fi,this.targetCount=0,this.Br=he.Nn()}forEachTarget(t,e){return this.Mr.forEach((r,i)=>e(i)),m.resolve()}getLastRemoteSnapshotVersion(t){return m.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return m.resolve(this.Or)}allocateTargetId(t){return this.highestTargetId=this.Br.next(),m.resolve(this.highestTargetId)}setTargetsMetadata(t,e,r){return r&&(this.lastRemoteSnapshotVersion=r),e>this.Or&&(this.Or=e),m.resolve()}qn(t){this.Mr.set(t.target,t);const e=t.targetId;e>this.highestTargetId&&(this.Br=new he(e),this.highestTargetId=e),t.sequenceNumber>this.Or&&(this.Or=t.sequenceNumber)}addTargetData(t,e){return this.qn(e),this.targetCount+=1,m.resolve()}updateTargetData(t,e){return this.qn(e),m.resolve()}removeTargetData(t,e){return this.Mr.delete(e.target),this.Nr.Vr(e.targetId),this.targetCount-=1,m.resolve()}removeTargets(t,e,r){let i=0;const s=[];return this.Mr.forEach((o,a)=>{a.sequenceNumber<=e&&r.get(a.targetId)===null&&(this.Mr.delete(o),s.push(this.removeMatchingKeysForTargetId(t,a.targetId)),i++)}),m.waitFor(s).next(()=>i)}getTargetCount(t){return m.resolve(this.targetCount)}getTargetData(t,e){const r=this.Mr.get(e)||null;return m.resolve(r)}addMatchingKeys(t,e,r){return this.Nr.dr(e,r),m.resolve()}removeMatchingKeys(t,e,r){this.Nr.Rr(e,r);const i=this.persistence.referenceDelegate,s=[];return i&&e.forEach(o=>{s.push(i.markPotentiallyOrphaned(t,o))}),m.waitFor(s)}removeMatchingKeysForTargetId(t,e){return this.Nr.Vr(e),m.resolve()}getMatchingKeysForTargetId(t,e){const r=this.Nr.gr(e);return m.resolve(r)}containsKey(t,e){return m.resolve(this.Nr.containsKey(e))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tl{constructor(t,e){this.Lr={},this.overlays={},this.kr=new Si(0),this.qr=!1,this.qr=!0,this.referenceDelegate=t(this),this.Qr=new El(this),this.indexManager=new cl,this.remoteDocumentCache=function(i){return new _l(i)}(r=>this.referenceDelegate.Kr(r)),this.serializer=new al(e),this.$r=new ml(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.qr=!1,Promise.resolve()}get started(){return this.qr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let e=this.overlays[t.toKey()];return e||(e=new pl,this.overlays[t.toKey()]=e),e}getMutationQueue(t,e){let r=this.Lr[t.toKey()];return r||(r=new gl(e,this.referenceDelegate),this.Lr[t.toKey()]=r),r}getTargetCache(){return this.Qr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.$r}runTransaction(t,e,r){_("MemoryPersistence","Starting transaction:",t);const i=new vl(this.kr.next());return this.referenceDelegate.Ur(),r(i).next(s=>this.referenceDelegate.Wr(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Gr(t,e){return m.or(Object.values(this.Lr).map(r=>()=>r.containsKey(t,e)))}}class vl extends sh{constructor(t){super(),this.currentSequenceNumber=t}}class bi{constructor(t){this.persistence=t,this.zr=new Fi,this.jr=null}static Hr(t){return new bi(t)}get Jr(){if(this.jr)return this.jr;throw v()}addReference(t,e,r){return this.zr.addReference(r,e),this.Jr.delete(r.toString()),m.resolve()}removeReference(t,e,r){return this.zr.removeReference(r,e),this.Jr.add(r.toString()),m.resolve()}markPotentiallyOrphaned(t,e){return this.Jr.add(e.toString()),m.resolve()}removeTarget(t,e){this.zr.Vr(e.targetId).forEach(i=>this.Jr.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(t,e.targetId).next(i=>{i.forEach(s=>this.Jr.add(s.toString()))}).next(()=>r.removeTargetData(t,e))}Ur(){this.jr=new Set}Wr(t){const e=this.persistence.getRemoteDocumentCache().newChangeBuffer();return m.forEach(this.Jr,r=>{const i=E.fromPath(r);return this.Yr(t,i).next(s=>{s||e.removeEntry(i,I.min())})}).next(()=>(this.jr=null,e.apply(t)))}updateLimboDocument(t,e){return this.Yr(t,e).next(r=>{r?this.Jr.delete(e.toString()):this.Jr.add(e.toString())})}Kr(t){return 0}Yr(t,e){return m.or([()=>m.resolve(this.zr.containsKey(e)),()=>this.persistence.getTargetCache().containsKey(t,e),()=>this.persistence.Gr(t,e)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ui{constructor(t,e,r,i){this.targetId=t,this.fromCache=e,this.qi=r,this.Qi=i}static Ki(t,e){let r=V(),i=V();for(const s of e.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new Ui(t,e.fromCache,r,i)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Il{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(t){this._documentReadCount+=t}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wl{constructor(){this.$i=!1,this.Ui=!1,this.Wi=100,this.Gi=function(){return Ou()?8:Ut.v(Pn())>0?6:4}()}initialize(t,e){this.zi=t,this.indexManager=e,this.$i=!0}getDocumentsMatchingQuery(t,e,r,i){const s={result:null};return this.ji(t,e).next(o=>{s.result=o}).next(()=>{if(!s.result)return this.Hi(t,e,i,r).next(o=>{s.result=o})}).next(()=>{if(s.result)return;const o=new Il;return this.Ji(t,e,o).next(a=>{if(s.result=a,this.Ui)return this.Yi(t,e,o,a.size)})}).next(()=>s.result)}Yi(t,e,r,i){return r.documentReadCount<this.Wi?(Ee()<=Pt.DEBUG&&_("QueryEngine","SDK will not create cache indexes for query:",Jt(e),"since it only creates cache indexes for collection contains","more than or equal to",this.Wi,"documents"),m.resolve()):(Ee()<=Pt.DEBUG&&_("QueryEngine","Query:",Jt(e),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.Gi*i?(Ee()<=Pt.DEBUG&&_("QueryEngine","The SDK decides to create cache indexes for query:",Jt(e),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(t,yt(e))):m.resolve())}ji(t,e){if(Os(e))return m.resolve(null);let r=yt(e);return this.indexManager.getIndexType(t,r).next(i=>i===0?null:(e.limit!==null&&i===1&&(e=Xr(e,null,"F"),r=yt(e)),this.indexManager.getDocumentsMatchingTarget(t,r).next(s=>{const o=V(...s);return this.zi.getDocuments(t,o).next(a=>this.indexManager.getMinOffset(t,r).next(u=>{const c=this.Zi(e,a);return this.Xi(e,c,o,u.readTime)?this.ji(t,Xr(e,null,"F")):this.es(t,c,e,u)}))})))}Hi(t,e,r,i){return Os(e)||i.isEqual(I.min())?m.resolve(null):this.zi.getDocuments(t,r).next(s=>{const o=this.Zi(e,s);return this.Xi(e,o,r,i)?m.resolve(null):(Ee()<=Pt.DEBUG&&_("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),Jt(e)),this.es(t,o,e,eh(i,-1)).next(a=>a))})}Zi(t,e){let r=new X(Ra(t));return e.forEach((i,s)=>{ur(t,s)&&(r=r.add(s))}),r}Xi(t,e,r,i){if(t.limit===null)return!1;if(r.size!==e.size)return!0;const s=t.limitType==="F"?e.last():e.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Ji(t,e,r){return Ee()<=Pt.DEBUG&&_("QueryEngine","Using full collection scan to execute query:",Jt(e)),this.zi.getDocumentsMatchingQuery(t,e,Ct.min(),r)}es(t,e,r,i){return this.zi.getDocumentsMatchingQuery(t,r,i).next(s=>(e.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Al{constructor(t,e,r,i){this.persistence=t,this.ts=e,this.serializer=i,this.ns=new L(C),this.rs=new pe(s=>ki(s),xi),this.ss=new Map,this.os=t.getRemoteDocumentCache(),this.Qr=t.getTargetCache(),this.$r=t.getBundleCache(),this._s(r)}_s(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new fl(this.os,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.os.setIndexManager(this.indexManager),this.ts.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",e=>t.collect(e,this.ns))}}function Rl(n,t,e,r){return new Al(n,t,e,r)}async function Xa(n,t){const e=A(n);return await e.persistence.runTransaction("Handle user change","readonly",r=>{let i;return e.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,e._s(t),e.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],a=[];let u=V();for(const c of i){o.push(c.batchId);for(const h of c.mutations)u=u.add(h.key)}for(const c of s){a.push(c.batchId);for(const h of c.mutations)u=u.add(h.key)}return e.localDocuments.getDocuments(r,u).next(c=>({us:c,removedBatchIds:o,addedBatchIds:a}))})})}function Pl(n,t){const e=A(n);return e.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=t.batch.keys(),s=e.os.newChangeBuffer({trackRemovals:!0});return function(a,u,c,h){const l=c.batch,d=l.keys();let p=m.resolve();return d.forEach(R=>{p=p.next(()=>h.getEntry(u,R)).next(P=>{const T=c.docVersions.get(R);D(T!==null),P.version.compareTo(T)<0&&(l.applyToRemoteDocument(P,c),P.isValidDocument()&&(P.setReadTime(c.commitVersion),h.addEntry(P)))})}),p.next(()=>a.mutationQueue.removeMutationBatch(u,l))}(e,r,t,s).next(()=>s.apply(r)).next(()=>e.mutationQueue.performConsistencyCheck(r)).next(()=>e.documentOverlayCache.removeOverlaysForBatchId(r,i,t.batch.batchId)).next(()=>e.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(a){let u=V();for(let c=0;c<a.mutationResults.length;++c)a.mutationResults[c].transformResults.length>0&&(u=u.add(a.batch.mutations[c].key));return u}(t))).next(()=>e.localDocuments.getDocuments(r,i))})}function Ya(n){const t=A(n);return t.persistence.runTransaction("Get last remote snapshot version","readonly",e=>t.Qr.getLastRemoteSnapshotVersion(e))}function Vl(n,t){const e=A(n),r=t.snapshotVersion;let i=e.ns;return e.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=e.os.newChangeBuffer({trackRemovals:!0});i=e.ns;const a=[];t.targetChanges.forEach((h,l)=>{const d=i.get(l);if(!d)return;a.push(e.Qr.removeMatchingKeys(s,h.removedDocuments,l).next(()=>e.Qr.addMatchingKeys(s,h.addedDocuments,l)));let p=d.withSequenceNumber(s.currentSequenceNumber);t.targetMismatches.get(l)!==null?p=p.withResumeToken(tt.EMPTY_BYTE_STRING,I.min()).withLastLimboFreeSnapshotVersion(I.min()):h.resumeToken.approximateByteSize()>0&&(p=p.withResumeToken(h.resumeToken,r)),i=i.insert(l,p),function(P,T,M){return P.resumeToken.approximateByteSize()===0||T.snapshotVersion.toMicroseconds()-P.snapshotVersion.toMicroseconds()>=3e8?!0:M.addedDocuments.size+M.modifiedDocuments.size+M.removedDocuments.size>0}(d,p,h)&&a.push(e.Qr.updateTargetData(s,p))});let u=Rt(),c=V();if(t.documentUpdates.forEach(h=>{t.resolvedLimboDocuments.has(h)&&a.push(e.persistence.referenceDelegate.updateLimboDocument(s,h))}),a.push(Sl(s,o,t.documentUpdates).next(h=>{u=h.cs,c=h.ls})),!r.isEqual(I.min())){const h=e.Qr.getLastRemoteSnapshotVersion(s).next(l=>e.Qr.setTargetsMetadata(s,s.currentSequenceNumber,r));a.push(h)}return m.waitFor(a).next(()=>o.apply(s)).next(()=>e.localDocuments.getLocalViewOfDocuments(s,u,c)).next(()=>u)}).then(s=>(e.ns=i,s))}function Sl(n,t,e){let r=V(),i=V();return e.forEach(s=>r=r.add(s)),t.getEntries(n,r).next(s=>{let o=Rt();return e.forEach((a,u)=>{const c=s.get(a);u.isFoundDocument()!==c.isFoundDocument()&&(i=i.add(a)),u.isNoDocument()&&u.version.isEqual(I.min())?(t.removeEntry(a,u.readTime),o=o.insert(a,u)):!c.isValidDocument()||u.version.compareTo(c.version)>0||u.version.compareTo(c.version)===0&&c.hasPendingWrites?(t.addEntry(u),o=o.insert(a,u)):_("LocalStore","Ignoring outdated watch update for ",a,". Current version:",c.version," Watch version:",u.version)}),{cs:o,ls:i}})}function Cl(n,t){const e=A(n);return e.persistence.runTransaction("Get next mutation batch","readonly",r=>(t===void 0&&(t=-1),e.mutationQueue.getNextMutationBatchAfterBatchId(r,t)))}function Dl(n,t){const e=A(n);return e.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return e.Qr.getTargetData(r,t).next(s=>s?(i=s,m.resolve(i)):e.Qr.allocateTargetId(r).next(o=>(i=new Vt(t,o,"TargetPurposeListen",r.currentSequenceNumber),e.Qr.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=e.ns.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(e.ns=e.ns.insert(r.targetId,r),e.rs.set(t,r.targetId)),r})}async function ti(n,t,e){const r=A(n),i=r.ns.get(t),s=e?"readwrite":"readwrite-primary";try{e||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!nn(o))throw o;_("LocalStore",`Failed to update sequence numbers for target ${t}: ${o}`)}r.ns=r.ns.remove(t),r.rs.delete(i.target)}function Ks(n,t,e){const r=A(n);let i=I.min(),s=V();return r.persistence.runTransaction("Execute query","readwrite",o=>function(u,c,h){const l=A(u),d=l.rs.get(h);return d!==void 0?m.resolve(l.ns.get(d)):l.Qr.getTargetData(c,h)}(r,o,yt(t)).next(a=>{if(a)return i=a.lastLimboFreeSnapshotVersion,r.Qr.getMatchingKeysForTargetId(o,a.targetId).next(u=>{s=u})}).next(()=>r.ts.getDocumentsMatchingQuery(o,t,e?i:I.min(),e?s:V())).next(a=>(Nl(r,Ah(t),a),{documents:a,hs:s})))}function Nl(n,t,e){let r=n.ss.get(t)||I.min();e.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),n.ss.set(t,r)}class Ws{constructor(){this.activeTargetIds=Dh()}As(t){this.activeTargetIds=this.activeTargetIds.add(t)}Rs(t){this.activeTargetIds=this.activeTargetIds.delete(t)}ds(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class kl{constructor(){this.no=new Ws,this.ro={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,e,r){}addLocalQueryTarget(t){return this.no.As(t),this.ro[t]||"not-current"}updateQueryState(t,e,r){this.ro[t]=e}removeLocalQueryTarget(t){this.no.Rs(t)}isLocalQueryTarget(t){return this.no.activeTargetIds.has(t)}clearQueryState(t){delete this.ro[t]}getAllActiveQueryTargets(){return this.no.activeTargetIds}isActiveQueryTarget(t){return this.no.activeTargetIds.has(t)}start(){return this.no=new Ws,Promise.resolve()}handleUserChange(t,e,r){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xl{io(t){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hs{constructor(){this.so=()=>this.oo(),this._o=()=>this.ao(),this.uo=[],this.co()}io(t){this.uo.push(t)}shutdown(){window.removeEventListener("online",this.so),window.removeEventListener("offline",this._o)}co(){window.addEventListener("online",this.so),window.addEventListener("offline",this._o)}oo(){_("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const t of this.uo)t(0)}ao(){_("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const t of this.uo)t(1)}static D(){return typeof window!="undefined"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let vn=null;function Cr(){return vn===null?vn=function(){return 268435456+Math.round(2147483648*Math.random())}():vn++,"0x"+vn.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ml={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ll{constructor(t){this.lo=t.lo,this.ho=t.ho}Po(t){this.Io=t}To(t){this.Eo=t}onMessage(t){this.Ao=t}close(){this.ho()}send(t){this.lo(t)}Ro(){this.Io()}Vo(t){this.Eo(t)}mo(t){this.Ao(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Y="WebChannelConnection";class Ol extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const r=e.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.fo=r+"://"+e.host,this.po=`projects/${i}/databases/${s}`,this.yo=this.databaseId.database==="(default)"?`project_id=${i}`:`project_id=${i}&database_id=${s}`}get wo(){return!1}So(e,r,i,s,o){const a=Cr(),u=this.bo(e,r.toUriEncodedString());_("RestConnection",`Sending RPC '${e}' ${a}:`,u,i);const c={"google-cloud-resource-prefix":this.po,"x-goog-request-params":this.yo};return this.Do(c,s,o),this.Co(e,u,c,i).then(h=>(_("RestConnection",`Received RPC '${e}' ${a}: `,h),h),h=>{throw qe("RestConnection",`RPC '${e}' ${a} failed with error: `,h,"url: ",u,"request:",i),h})}vo(e,r,i,s,o,a){return this.So(e,r,i,s,o)}Do(e,r,i){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+me}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((s,o)=>e[o]=s),i&&i.headers.forEach((s,o)=>e[o]=s)}bo(e,r){const i=Ml[e];return`${this.fo}/v1/${r}:${i}`}terminate(){}}{constructor(t){super(t),this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams,this.longPollingOptions=t.longPollingOptions}Co(t,e,r,i){const s=Cr();return new Promise((o,a)=>{const u=new $c;u.setWithCredentials(!0),u.listenOnce(jc.COMPLETE,()=>{try{switch(u.getLastErrorCode()){case Sr.NO_ERROR:const h=u.getResponseJson();_(Y,`XHR for RPC '${t}' ${s} received:`,JSON.stringify(h)),o(h);break;case Sr.TIMEOUT:_(Y,`RPC '${t}' ${s} timed out`),a(new g(f.DEADLINE_EXCEEDED,"Request time out"));break;case Sr.HTTP_ERROR:const l=u.getStatus();if(_(Y,`RPC '${t}' ${s} failed with status:`,l,"response text:",u.getResponseText()),l>0){let d=u.getResponseJson();Array.isArray(d)&&(d=d[0]);const p=d==null?void 0:d.error;if(p&&p.status&&p.message){const R=function(T){const M=T.toLowerCase().replace(/_/g,"-");return Object.values(f).indexOf(M)>=0?M:f.UNKNOWN}(p.status);a(new g(R,p.message))}else a(new g(f.UNKNOWN,"Server responded with status "+u.getStatus()))}else a(new g(f.UNAVAILABLE,"Connection failed."));break;default:v()}}finally{_(Y,`RPC '${t}' ${s} completed.`)}});const c=JSON.stringify(i);_(Y,`RPC '${t}' ${s} sending request:`,i),u.send(e,"POST",c,r,15)})}Fo(t,e,r){const i=Cr(),s=[this.fo,"/","google.firestore.v1.Firestore","/",t,"/channel"],o=qc(),a=Bc(),u={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},c=this.longPollingOptions.timeoutSeconds;c!==void 0&&(u.longPollingTimeout=Math.round(1e3*c)),this.useFetchStreams&&(u.useFetchStreams=!0),this.Do(u.initMessageHeaders,e,r),u.encodeInitMessageHeaders=!0;const h=s.join("");_(Y,`Creating RPC '${t}' stream ${i}: ${h}`,u);const l=o.createWebChannel(h,u);let d=!1,p=!1;const R=new Ll({lo:T=>{p?_(Y,`Not sending because RPC '${t}' stream ${i} is closed:`,T):(d||(_(Y,`Opening RPC '${t}' stream ${i} transport.`),l.open(),d=!0),_(Y,`RPC '${t}' stream ${i} sending:`,T),l.send(T))},ho:()=>l.close()}),P=(T,M,Q)=>{T.listen(M,ot=>{try{Q(ot)}catch(It){setTimeout(()=>{throw It},0)}})};return P(l,yn.EventType.OPEN,()=>{p||_(Y,`RPC '${t}' stream ${i} transport opened.`)}),P(l,yn.EventType.CLOSE,()=>{p||(p=!0,_(Y,`RPC '${t}' stream ${i} transport closed`),R.Vo())}),P(l,yn.EventType.ERROR,T=>{p||(p=!0,qe(Y,`RPC '${t}' stream ${i} transport errored:`,T),R.Vo(new g(f.UNAVAILABLE,"The operation could not be completed")))}),P(l,yn.EventType.MESSAGE,T=>{var M;if(!p){const Q=T.data[0];D(!!Q);const ot=Q,It=ot.error||((M=ot[0])===null||M===void 0?void 0:M.error);if(It){_(Y,`RPC '${t}' stream ${i} received error:`,It);const dn=It.status;let Xt=function(Su){const hs=F[Su];if(hs!==void 0)return Ua(hs)}(dn),fn=It.message;Xt===void 0&&(Xt=f.INTERNAL,fn="Unknown error status: "+dn+" with message "+It.message),p=!0,R.Vo(new g(Xt,fn)),l.close()}else _(Y,`RPC '${t}' stream ${i} received:`,Q),R.mo(Q)}}),P(a,zc.STAT_EVENT,T=>{T.stat===As.PROXY?_(Y,`RPC '${t}' stream ${i} detected buffering proxy`):T.stat===As.NOPROXY&&_(Y,`RPC '${t}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{R.Ro()},0),R}}function Dr(){return typeof document!="undefined"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fr(n){return new Kh(n,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qi{constructor(t,e,r=1e3,i=1.5,s=6e4){this.oi=t,this.timerId=e,this.Mo=r,this.xo=i,this.Oo=s,this.No=0,this.Bo=null,this.Lo=Date.now(),this.reset()}reset(){this.No=0}ko(){this.No=this.Oo}qo(t){this.cancel();const e=Math.floor(this.No+this.Qo()),r=Math.max(0,Date.now()-this.Lo),i=Math.max(0,e-r);i>0&&_("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.No} ms, delay with jitter: ${e} ms, last attempt: ${r} ms ago)`),this.Bo=this.oi.enqueueAfterDelay(this.timerId,i,()=>(this.Lo=Date.now(),t())),this.No*=this.xo,this.No<this.Mo&&(this.No=this.Mo),this.No>this.Oo&&(this.No=this.Oo)}Ko(){this.Bo!==null&&(this.Bo.skipDelay(),this.Bo=null)}cancel(){this.Bo!==null&&(this.Bo.cancel(),this.Bo=null)}Qo(){return(Math.random()-.5)*this.No}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ja{constructor(t,e,r,i,s,o,a,u){this.oi=t,this.$o=r,this.Uo=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=u,this.state=0,this.Wo=0,this.Go=null,this.zo=null,this.stream=null,this.jo=new qi(t,e)}Ho(){return this.state===1||this.state===5||this.Jo()}Jo(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Yo()}async stop(){this.Ho()&&await this.close(0)}Zo(){this.state=0,this.jo.reset()}Xo(){this.Jo()&&this.Go===null&&(this.Go=this.oi.enqueueAfterDelay(this.$o,6e4,()=>this.e_()))}t_(t){this.n_(),this.stream.send(t)}async e_(){if(this.Jo())return this.close(0)}n_(){this.Go&&(this.Go.cancel(),this.Go=null)}r_(){this.zo&&(this.zo.cancel(),this.zo=null)}async close(t,e){this.n_(),this.r_(),this.jo.cancel(),this.Wo++,t!==4?this.jo.reset():e&&e.code===f.RESOURCE_EXHAUSTED?(Tt(e.toString()),Tt("Using maximum backoff delay to prevent overloading the backend."),this.jo.ko()):e&&e.code===f.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.i_(),this.stream.close(),this.stream=null),this.state=t,await this.listener.To(e)}i_(){}auth(){this.state=1;const t=this.s_(this.Wo),e=this.Wo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.Wo===e&&this.o_(r,i)},r=>{t(()=>{const i=new g(f.UNKNOWN,"Fetching auth token failed: "+r.message);return this.__(i)})})}o_(t,e){const r=this.s_(this.Wo);this.stream=this.a_(t,e),this.stream.Po(()=>{r(()=>(this.state=2,this.zo=this.oi.enqueueAfterDelay(this.Uo,1e4,()=>(this.Jo()&&(this.state=3),Promise.resolve())),this.listener.Po()))}),this.stream.To(i=>{r(()=>this.__(i))}),this.stream.onMessage(i=>{r(()=>this.onMessage(i))})}Yo(){this.state=5,this.jo.qo(async()=>{this.state=0,this.start()})}__(t){return _("PersistentStream",`close with error: ${t}`),this.stream=null,this.close(4,t)}s_(t){return e=>{this.oi.enqueueAndForget(()=>this.Wo===t?e():(_("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class Fl extends Ja{constructor(t,e,r,i,s,o){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",e,r,i,o),this.serializer=s}a_(t,e){return this.connection.Fo("Listen",t,e)}onMessage(t){this.jo.reset();const e=Yh(this.serializer,t),r=function(s){if(!("targetChange"in s))return I.min();const o=s.targetChange;return o.targetIds&&o.targetIds.length?I.min():o.readTime?ut(o.readTime):I.min()}(t);return this.listener.u_(e,r)}c_(t){const e={};e.database=Zr(this.serializer),e.addTarget=function(s,o){let a;const u=o.target;if(a=Wr(u)?{documents:Zh(s,u)}:{query:tl(s,u).ut},a.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){a.resumeToken=ja(s,o.resumeToken);const c=Yr(s,o.expectedCount);c!==null&&(a.expectedCount=c)}else if(o.snapshotVersion.compareTo(I.min())>0){a.readTime=bn(s,o.snapshotVersion.toTimestamp());const c=Yr(s,o.expectedCount);c!==null&&(a.expectedCount=c)}return a}(this.serializer,t);const r=nl(this.serializer,t);r&&(e.labels=r),this.t_(e)}l_(t){const e={};e.database=Zr(this.serializer),e.removeTarget=t,this.t_(e)}}class bl extends Ja{constructor(t,e,r,i,s,o){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",e,r,i,o),this.serializer=s,this.h_=!1}get P_(){return this.h_}start(){this.h_=!1,this.lastStreamToken=void 0,super.start()}i_(){this.h_&&this.I_([])}a_(t,e){return this.connection.Fo("Write",t,e)}onMessage(t){if(D(!!t.streamToken),this.lastStreamToken=t.streamToken,this.h_){this.jo.reset();const e=Jh(t.writeResults,t.commitTime),r=ut(t.commitTime);return this.listener.T_(r,e)}return D(!t.writeResults||t.writeResults.length===0),this.h_=!0,this.listener.E_()}d_(){const t={};t.database=Zr(this.serializer),this.t_(t)}I_(t){const e={streamToken:this.lastStreamToken,writes:t.map(r=>Ga(this.serializer,r))};this.t_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ul extends class{}{constructor(t,e,r,i){super(),this.authCredentials=t,this.appCheckCredentials=e,this.connection=r,this.serializer=i,this.A_=!1}R_(){if(this.A_)throw new g(f.FAILED_PRECONDITION,"The client has already been terminated.")}So(t,e,r,i){return this.R_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.So(t,Jr(e,r),i,s,o)).catch(s=>{throw s.name==="FirebaseError"?(s.code===f.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new g(f.UNKNOWN,s.toString())})}vo(t,e,r,i,s){return this.R_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,a])=>this.connection.vo(t,Jr(e,r),i,o,a,s)).catch(o=>{throw o.name==="FirebaseError"?(o.code===f.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new g(f.UNKNOWN,o.toString())})}terminate(){this.A_=!0,this.connection.terminate()}}class ql{constructor(t,e){this.asyncQueue=t,this.onlineStateHandler=e,this.state="Unknown",this.m_=0,this.f_=null,this.g_=!0}p_(){this.m_===0&&(this.y_("Unknown"),this.f_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.f_=null,this.w_("Backend didn't respond within 10 seconds."),this.y_("Offline"),Promise.resolve())))}S_(t){this.state==="Online"?this.y_("Unknown"):(this.m_++,this.m_>=1&&(this.b_(),this.w_(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.y_("Offline")))}set(t){this.b_(),this.m_=0,t==="Online"&&(this.g_=!1),this.y_(t)}y_(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}w_(t){const e=`Could not reach Cloud Firestore backend. ${t}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.g_?(Tt(e),this.g_=!1):_("OnlineStateTracker",e)}b_(){this.f_!==null&&(this.f_.cancel(),this.f_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bl{constructor(t,e,r,i,s){this.localStore=t,this.datastore=e,this.asyncQueue=r,this.remoteSyncer={},this.D_=[],this.C_=new Map,this.v_=new Set,this.F_=[],this.M_=s,this.M_.io(o=>{r.enqueueAndForget(async()=>{Wt(this)&&(_("RemoteStore","Restarting streams for network reachability change."),await async function(u){const c=A(u);c.v_.add(4),await un(c),c.x_.set("Unknown"),c.v_.delete(4),await mr(c)}(this))})}),this.x_=new ql(r,i)}}async function mr(n){if(Wt(n))for(const t of n.F_)await t(!0)}async function un(n){for(const t of n.F_)await t(!1)}function Za(n,t){const e=A(n);e.C_.has(t.targetId)||(e.C_.set(t.targetId,t),zi(e)?ji(e):ge(e).Jo()&&Bi(e,t))}function tu(n,t){const e=A(n),r=ge(e);e.C_.delete(t),r.Jo()&&eu(e,t),e.C_.size===0&&(r.Jo()?r.Xo():Wt(e)&&e.x_.set("Unknown"))}function Bi(n,t){if(n.O_.Oe(t.targetId),t.resumeToken.approximateByteSize()>0||t.snapshotVersion.compareTo(I.min())>0){const e=n.remoteSyncer.getRemoteKeysForTarget(t.targetId).size;t=t.withExpectedCount(e)}ge(n).c_(t)}function eu(n,t){n.O_.Oe(t),ge(n).l_(t)}function ji(n){n.O_=new zh({getRemoteKeysForTarget:t=>n.remoteSyncer.getRemoteKeysForTarget(t),_t:t=>n.C_.get(t)||null,nt:()=>n.datastore.serializer.databaseId}),ge(n).start(),n.x_.p_()}function zi(n){return Wt(n)&&!ge(n).Ho()&&n.C_.size>0}function Wt(n){return A(n).v_.size===0}function nu(n){n.O_=void 0}async function jl(n){n.C_.forEach((t,e)=>{Bi(n,t)})}async function zl(n,t){nu(n),zi(n)?(n.x_.S_(t),ji(n)):n.x_.set("Unknown")}async function $l(n,t,e){if(n.x_.set("Online"),t instanceof Ba&&t.state===2&&t.cause)try{await async function(i,s){const o=s.cause;for(const a of s.targetIds)i.C_.has(a)&&(await i.remoteSyncer.rejectListen(a,o),i.C_.delete(a),i.O_.removeTarget(a))}(n,t)}catch(r){_("RemoteStore","Failed to remove targets %s: %s ",t.targetIds.join(","),r),await qn(n,r)}else if(t instanceof An?n.O_.$e(t):t instanceof qa?n.O_.Je(t):n.O_.Ge(t),!e.isEqual(I.min()))try{const r=await Ya(n.localStore);e.compareTo(r)>=0&&await function(s,o){const a=s.O_.it(o);return a.targetChanges.forEach((u,c)=>{if(u.resumeToken.approximateByteSize()>0){const h=s.C_.get(c);h&&s.C_.set(c,h.withResumeToken(u.resumeToken,o))}}),a.targetMismatches.forEach((u,c)=>{const h=s.C_.get(u);if(!h)return;s.C_.set(u,h.withResumeToken(tt.EMPTY_BYTE_STRING,h.snapshotVersion)),eu(s,u);const l=new Vt(h.target,u,c,h.sequenceNumber);Bi(s,l)}),s.remoteSyncer.applyRemoteEvent(a)}(n,e)}catch(r){_("RemoteStore","Failed to raise snapshot:",r),await qn(n,r)}}async function qn(n,t,e){if(!nn(t))throw t;n.v_.add(1),await un(n),n.x_.set("Offline"),e||(e=()=>Ya(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{_("RemoteStore","Retrying IndexedDB access"),await e(),n.v_.delete(1),await mr(n)})}function ru(n,t){return t().catch(e=>qn(n,e,t))}async function pr(n){const t=A(n),e=Nt(t);let r=t.D_.length>0?t.D_[t.D_.length-1].batchId:-1;for(;Ql(t);)try{const i=await Cl(t.localStore,r);if(i===null){t.D_.length===0&&e.Xo();break}r=i.batchId,Gl(t,i)}catch(i){await qn(t,i)}iu(t)&&su(t)}function Ql(n){return Wt(n)&&n.D_.length<10}function Gl(n,t){n.D_.push(t);const e=Nt(n);e.Jo()&&e.P_&&e.I_(t.mutations)}function iu(n){return Wt(n)&&!Nt(n).Ho()&&n.D_.length>0}function su(n){Nt(n).start()}async function Kl(n){Nt(n).d_()}async function Wl(n){const t=Nt(n);for(const e of n.D_)t.I_(e.mutations)}async function Hl(n,t,e){const r=n.D_.shift(),i=Mi.from(r,t,e);await ru(n,()=>n.remoteSyncer.applySuccessfulWrite(i)),await pr(n)}async function Xl(n,t){t&&Nt(n).P_&&await async function(r,i){if(function(o){return ba(o)&&o!==f.ABORTED}(i.code)){const s=r.D_.shift();Nt(r).Zo(),await ru(r,()=>r.remoteSyncer.rejectFailedWrite(s.batchId,i)),await pr(r)}}(n,t),iu(n)&&su(n)}async function Xs(n,t){const e=A(n);e.asyncQueue.verifyOperationInProgress(),_("RemoteStore","RemoteStore received new credentials");const r=Wt(e);e.v_.add(3),await un(e),r&&e.x_.set("Unknown"),await e.remoteSyncer.handleCredentialChange(t),e.v_.delete(3),await mr(e)}async function Yl(n,t){const e=A(n);t?(e.v_.delete(2),await mr(e)):t||(e.v_.add(2),await un(e),e.x_.set("Unknown"))}function ge(n){return n.N_||(n.N_=function(e,r,i){const s=A(e);return s.R_(),new Fl(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(n.datastore,n.asyncQueue,{Po:jl.bind(null,n),To:zl.bind(null,n),u_:$l.bind(null,n)}),n.F_.push(async t=>{t?(n.N_.Zo(),zi(n)?ji(n):n.x_.set("Unknown")):(await n.N_.stop(),nu(n))})),n.N_}function Nt(n){return n.B_||(n.B_=function(e,r,i){const s=A(e);return s.R_(),new bl(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(n.datastore,n.asyncQueue,{Po:Kl.bind(null,n),To:Xl.bind(null,n),E_:Wl.bind(null,n),T_:Hl.bind(null,n)}),n.F_.push(async t=>{t?(n.B_.Zo(),await pr(n)):(await n.B_.stop(),n.D_.length>0&&(_("RemoteStore",`Stopping write stream with ${n.D_.length} pending writes`),n.D_=[]))})),n.B_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $i{constructor(t,e,r,i,s){this.asyncQueue=t,this.timerId=e,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new lt,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(t,e,r,i,s){const o=Date.now()+r,a=new $i(t,e,o,i,s);return a.start(r),a}start(t){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new g(f.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(t=>this.deferred.resolve(t))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Qi(n,t){if(Tt("AsyncQueue",`${t}: ${n}`),nn(n))return new g(f.UNAVAILABLE,`${t}: ${n}`);throw n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class se{constructor(t){this.comparator=t?(e,r)=>t(e,r)||E.comparator(e.key,r.key):(e,r)=>E.comparator(e.key,r.key),this.keyedMap=we(),this.sortedSet=new L(this.comparator)}static emptySet(t){return new se(t.comparator)}has(t){return this.keyedMap.get(t)!=null}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const e=this.keyedMap.get(t);return e?this.sortedSet.indexOf(e):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal((e,r)=>(t(e),!1))}add(t){const e=this.delete(t.key);return e.copy(e.keyedMap.insert(t.key,t),e.sortedSet.insert(t,null))}delete(t){const e=this.get(t);return e?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(e)):this}isEqual(t){if(!(t instanceof se)||this.size!==t.size)return!1;const e=this.sortedSet.getIterator(),r=t.sortedSet.getIterator();for(;e.hasNext();){const i=e.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const t=[];return this.forEach(e=>{t.push(e.toString())}),t.length===0?"DocumentSet ()":`DocumentSet (
  `+t.join(`  
`)+`
)`}copy(t,e){const r=new se;return r.comparator=this.comparator,r.keyedMap=t,r.sortedSet=e,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ys{constructor(){this.L_=new L(E.comparator)}track(t){const e=t.doc.key,r=this.L_.get(e);r?t.type!==0&&r.type===3?this.L_=this.L_.insert(e,t):t.type===3&&r.type!==1?this.L_=this.L_.insert(e,{type:r.type,doc:t.doc}):t.type===2&&r.type===2?this.L_=this.L_.insert(e,{type:2,doc:t.doc}):t.type===2&&r.type===0?this.L_=this.L_.insert(e,{type:0,doc:t.doc}):t.type===1&&r.type===0?this.L_=this.L_.remove(e):t.type===1&&r.type===2?this.L_=this.L_.insert(e,{type:1,doc:r.doc}):t.type===0&&r.type===1?this.L_=this.L_.insert(e,{type:2,doc:t.doc}):v():this.L_=this.L_.insert(e,t)}k_(){const t=[];return this.L_.inorderTraversal((e,r)=>{t.push(r)}),t}}class le{constructor(t,e,r,i,s,o,a,u,c){this.query=t,this.docs=e,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=u,this.hasCachedResults=c}static fromInitialDocuments(t,e,r,i,s){const o=[];return e.forEach(a=>{o.push({type:0,doc:a})}),new le(t,e,se.emptySet(e),o,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.hasCachedResults===t.hasCachedResults&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&ar(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const e=this.docChanges,r=t.docChanges;if(e.length!==r.length)return!1;for(let i=0;i<e.length;i++)if(e[i].type!==r[i].type||!e[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jl{constructor(){this.q_=void 0,this.Q_=[]}}class Zl{constructor(){this.queries=new pe(t=>Aa(t),ar),this.onlineState="Unknown",this.K_=new Set}}async function Gi(n,t){const e=A(n),r=t.query;let i=!1,s=e.queries.get(r);if(s||(i=!0,s=new Jl),i)try{s.q_=await e.onListen(r)}catch(o){const a=Qi(o,`Initialization of query '${Jt(t.query)}' failed`);return void t.onError(a)}e.queries.set(r,s),s.Q_.push(t),t.U_(e.onlineState),s.q_&&t.W_(s.q_)&&Wi(e)}async function Ki(n,t){const e=A(n),r=t.query;let i=!1;const s=e.queries.get(r);if(s){const o=s.Q_.indexOf(t);o>=0&&(s.Q_.splice(o,1),i=s.Q_.length===0)}if(i)return e.queries.delete(r),e.onUnlisten(r)}function td(n,t){const e=A(n);let r=!1;for(const i of t){const s=i.query,o=e.queries.get(s);if(o){for(const a of o.Q_)a.W_(i)&&(r=!0);o.q_=i}}r&&Wi(e)}function ed(n,t,e){const r=A(n),i=r.queries.get(t);if(i)for(const s of i.Q_)s.onError(e);r.queries.delete(t)}function Wi(n){n.K_.forEach(t=>{t.next()})}class Hi{constructor(t,e,r){this.query=t,this.G_=e,this.z_=!1,this.j_=null,this.onlineState="Unknown",this.options=r||{}}W_(t){if(!this.options.includeMetadataChanges){const r=[];for(const i of t.docChanges)i.type!==3&&r.push(i);t=new le(t.query,t.docs,t.oldDocs,r,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0,t.hasCachedResults)}let e=!1;return this.z_?this.H_(t)&&(this.G_.next(t),e=!0):this.J_(t,this.onlineState)&&(this.Y_(t),e=!0),this.j_=t,e}onError(t){this.G_.error(t)}U_(t){this.onlineState=t;let e=!1;return this.j_&&!this.z_&&this.J_(this.j_,t)&&(this.Y_(this.j_),e=!0),e}J_(t,e){if(!t.fromCache)return!0;const r=e!=="Offline";return(!this.options.Z_||!r)&&(!t.docs.isEmpty()||t.hasCachedResults||e==="Offline")}H_(t){if(t.docChanges.length>0)return!0;const e=this.j_&&this.j_.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!e)&&this.options.includeMetadataChanges===!0}Y_(t){t=le.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache,t.hasCachedResults),this.z_=!0,this.G_.next(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ou{constructor(t){this.key=t}}class au{constructor(t){this.key=t}}class nd{constructor(t,e){this.query=t,this.oa=e,this._a=null,this.hasCachedResults=!1,this.current=!1,this.aa=V(),this.mutatedKeys=V(),this.ua=Ra(t),this.ca=new se(this.ua)}get la(){return this.oa}ha(t,e){const r=e?e.Pa:new Ys,i=e?e.ca:this.ca;let s=e?e.mutatedKeys:this.mutatedKeys,o=i,a=!1;const u=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,c=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(t.inorderTraversal((h,l)=>{const d=i.get(h),p=ur(this.query,l)?l:null,R=!!d&&this.mutatedKeys.has(d.key),P=!!p&&(p.hasLocalMutations||this.mutatedKeys.has(p.key)&&p.hasCommittedMutations);let T=!1;d&&p?d.data.isEqual(p.data)?R!==P&&(r.track({type:3,doc:p}),T=!0):this.Ia(d,p)||(r.track({type:2,doc:p}),T=!0,(u&&this.ua(p,u)>0||c&&this.ua(p,c)<0)&&(a=!0)):!d&&p?(r.track({type:0,doc:p}),T=!0):d&&!p&&(r.track({type:1,doc:d}),T=!0,(u||c)&&(a=!0)),T&&(p?(o=o.add(p),s=P?s.add(h):s.delete(h)):(o=o.delete(h),s=s.delete(h)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const h=this.query.limitType==="F"?o.last():o.first();o=o.delete(h.key),s=s.delete(h.key),r.track({type:1,doc:h})}return{ca:o,Pa:r,Xi:a,mutatedKeys:s}}Ia(t,e){return t.hasLocalMutations&&e.hasCommittedMutations&&!e.hasLocalMutations}applyChanges(t,e,r,i){const s=this.ca;this.ca=t.ca,this.mutatedKeys=t.mutatedKeys;const o=t.Pa.k_();o.sort((h,l)=>function(p,R){const P=T=>{switch(T){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return v()}};return P(p)-P(R)}(h.type,l.type)||this.ua(h.doc,l.doc)),this.Ta(r),i=i!=null&&i;const a=e&&!i?this.Ea():[],u=this.aa.size===0&&this.current&&!i?1:0,c=u!==this._a;return this._a=u,o.length!==0||c?{snapshot:new le(this.query,t.ca,s,o,t.mutatedKeys,u===0,c,!1,!!r&&r.resumeToken.approximateByteSize()>0),da:a}:{da:a}}U_(t){return this.current&&t==="Offline"?(this.current=!1,this.applyChanges({ca:this.ca,Pa:new Ys,mutatedKeys:this.mutatedKeys,Xi:!1},!1)):{da:[]}}Aa(t){return!this.oa.has(t)&&!!this.ca.has(t)&&!this.ca.get(t).hasLocalMutations}Ta(t){t&&(t.addedDocuments.forEach(e=>this.oa=this.oa.add(e)),t.modifiedDocuments.forEach(e=>{}),t.removedDocuments.forEach(e=>this.oa=this.oa.delete(e)),this.current=t.current)}Ea(){if(!this.current)return[];const t=this.aa;this.aa=V(),this.ca.forEach(r=>{this.Aa(r.key)&&(this.aa=this.aa.add(r.key))});const e=[];return t.forEach(r=>{this.aa.has(r)||e.push(new au(r))}),this.aa.forEach(r=>{t.has(r)||e.push(new ou(r))}),e}Ra(t){this.oa=t.hs,this.aa=V();const e=this.ha(t.documents);return this.applyChanges(e,!0)}Va(){return le.fromInitialDocuments(this.query,this.ca,this.mutatedKeys,this._a===0,this.hasCachedResults)}}class rd{constructor(t,e,r){this.query=t,this.targetId=e,this.view=r}}class id{constructor(t){this.key=t,this.ma=!1}}class sd{constructor(t,e,r,i,s,o){this.localStore=t,this.remoteStore=e,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.fa={},this.ga=new pe(a=>Aa(a),ar),this.pa=new Map,this.ya=new Set,this.wa=new L(E.comparator),this.Sa=new Map,this.ba=new Fi,this.Da={},this.Ca=new Map,this.va=he.Bn(),this.onlineState="Unknown",this.Fa=void 0}get isPrimaryClient(){return this.Fa===!0}}async function od(n,t){const e=gd(n);let r,i;const s=e.ga.get(t);if(s)r=s.targetId,e.sharedClientState.addLocalQueryTarget(r),i=s.view.Va();else{const o=await Dl(e.localStore,yt(t)),a=e.sharedClientState.addLocalQueryTarget(o.targetId);r=o.targetId,i=await ad(e,t,r,a==="current",o.resumeToken),e.isPrimaryClient&&Za(e.remoteStore,o)}return i}async function ad(n,t,e,r,i){n.Ma=(l,d,p)=>async function(P,T,M,Q){let ot=T.view.ha(M);ot.Xi&&(ot=await Ks(P.localStore,T.query,!1).then(({documents:fn})=>T.view.ha(fn,ot)));const It=Q&&Q.targetChanges.get(T.targetId),dn=Q&&Q.targetMismatches.get(T.targetId)!=null,Xt=T.view.applyChanges(ot,P.isPrimaryClient,It,dn);return Zs(P,T.targetId,Xt.da),Xt.snapshot}(n,l,d,p);const s=await Ks(n.localStore,t,!0),o=new nd(t,s.hs),a=o.ha(s.documents),u=an.createSynthesizedTargetChangeForCurrentChange(e,r&&n.onlineState!=="Offline",i),c=o.applyChanges(a,n.isPrimaryClient,u);Zs(n,e,c.da);const h=new rd(t,e,o);return n.ga.set(t,h),n.pa.has(e)?n.pa.get(e).push(t):n.pa.set(e,[t]),c.snapshot}async function ud(n,t){const e=A(n),r=e.ga.get(t),i=e.pa.get(r.targetId);if(i.length>1)return e.pa.set(r.targetId,i.filter(s=>!ar(s,t))),void e.ga.delete(t);e.isPrimaryClient?(e.sharedClientState.removeLocalQueryTarget(r.targetId),e.sharedClientState.isActiveQueryTarget(r.targetId)||await ti(e.localStore,r.targetId,!1).then(()=>{e.sharedClientState.clearQueryState(r.targetId),tu(e.remoteStore,r.targetId),ei(e,r.targetId)}).catch(en)):(ei(e,r.targetId),await ti(e.localStore,r.targetId,!0))}async function cd(n,t,e){const r=_d(n);try{const i=await function(o,a){const u=A(o),c=q.now(),h=a.reduce((p,R)=>p.add(R.key),V());let l,d;return u.persistence.runTransaction("Locally write mutations","readwrite",p=>{let R=Rt(),P=V();return u.os.getEntries(p,h).next(T=>{R=T,R.forEach((M,Q)=>{Q.isValidDocument()||(P=P.add(M))})}).next(()=>u.localDocuments.getOverlayedDocuments(p,R)).next(T=>{l=T;const M=[];for(const Q of a){const ot=Fh(Q,l.get(Q.key).overlayedDocument);ot!=null&&M.push(new Lt(Q.key,ot,ga(ot.value.mapValue),nt.exists(!0)))}return u.mutationQueue.addMutationBatch(p,c,M,a)}).next(T=>{d=T;const M=T.applyToLocalDocumentSet(l,P);return u.documentOverlayCache.saveOverlays(p,T.batchId,M)})}).then(()=>({batchId:d.batchId,changes:Va(l)}))}(r.localStore,t);r.sharedClientState.addPendingMutation(i.batchId),function(o,a,u){let c=o.Da[o.currentUser.toKey()];c||(c=new L(C)),c=c.insert(a,u),o.Da[o.currentUser.toKey()]=c}(r,i.batchId,e),await cn(r,i.changes),await pr(r.remoteStore)}catch(i){const s=Qi(i,"Failed to persist write");e.reject(s)}}async function uu(n,t){const e=A(n);try{const r=await Vl(e.localStore,t);t.targetChanges.forEach((i,s)=>{const o=e.Sa.get(s);o&&(D(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.ma=!0:i.modifiedDocuments.size>0?D(o.ma):i.removedDocuments.size>0&&(D(o.ma),o.ma=!1))}),await cn(e,r,t)}catch(r){await en(r)}}function Js(n,t,e){const r=A(n);if(r.isPrimaryClient&&e===0||!r.isPrimaryClient&&e===1){const i=[];r.ga.forEach((s,o)=>{const a=o.view.U_(t);a.snapshot&&i.push(a.snapshot)}),function(o,a){const u=A(o);u.onlineState=a;let c=!1;u.queries.forEach((h,l)=>{for(const d of l.Q_)d.U_(a)&&(c=!0)}),c&&Wi(u)}(r.eventManager,t),i.length&&r.fa.u_(i),r.onlineState=t,r.isPrimaryClient&&r.sharedClientState.setOnlineState(t)}}async function hd(n,t,e){const r=A(n);r.sharedClientState.updateQueryState(t,"rejected",e);const i=r.Sa.get(t),s=i&&i.key;if(s){let o=new L(E.comparator);o=o.insert(s,j.newNoDocument(s,I.min()));const a=V().add(s),u=new dr(I.min(),new Map,new L(C),o,a);await uu(r,u),r.wa=r.wa.remove(s),r.Sa.delete(t),Xi(r)}else await ti(r.localStore,t,!1).then(()=>ei(r,t,e)).catch(en)}async function ld(n,t){const e=A(n),r=t.batch.batchId;try{const i=await Pl(e.localStore,t);hu(e,r,null),cu(e,r),e.sharedClientState.updateMutationState(r,"acknowledged"),await cn(e,i)}catch(i){await en(i)}}async function dd(n,t,e){const r=A(n);try{const i=await function(o,a){const u=A(o);return u.persistence.runTransaction("Reject batch","readwrite-primary",c=>{let h;return u.mutationQueue.lookupMutationBatch(c,a).next(l=>(D(l!==null),h=l.keys(),u.mutationQueue.removeMutationBatch(c,l))).next(()=>u.mutationQueue.performConsistencyCheck(c)).next(()=>u.documentOverlayCache.removeOverlaysForBatchId(c,h,a)).next(()=>u.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(c,h)).next(()=>u.localDocuments.getDocuments(c,h))})}(r.localStore,t);hu(r,t,e),cu(r,t),r.sharedClientState.updateMutationState(t,"rejected",e),await cn(r,i)}catch(i){await en(i)}}function cu(n,t){(n.Ca.get(t)||[]).forEach(e=>{e.resolve()}),n.Ca.delete(t)}function hu(n,t,e){const r=A(n);let i=r.Da[r.currentUser.toKey()];if(i){const s=i.get(t);s&&(e?s.reject(e):s.resolve(),i=i.remove(t)),r.Da[r.currentUser.toKey()]=i}}function ei(n,t,e=null){n.sharedClientState.removeLocalQueryTarget(t);for(const r of n.pa.get(t))n.ga.delete(r),e&&n.fa.xa(r,e);n.pa.delete(t),n.isPrimaryClient&&n.ba.Vr(t).forEach(r=>{n.ba.containsKey(r)||lu(n,r)})}function lu(n,t){n.ya.delete(t.path.canonicalString());const e=n.wa.get(t);e!==null&&(tu(n.remoteStore,e),n.wa=n.wa.remove(t),n.Sa.delete(e),Xi(n))}function Zs(n,t,e){for(const r of e)r instanceof ou?(n.ba.addReference(r.key,t),fd(n,r)):r instanceof au?(_("SyncEngine","Document no longer in limbo: "+r.key),n.ba.removeReference(r.key,t),n.ba.containsKey(r.key)||lu(n,r.key)):v()}function fd(n,t){const e=t.key,r=e.path.canonicalString();n.wa.get(e)||n.ya.has(r)||(_("SyncEngine","New document in limbo: "+e),n.ya.add(r),Xi(n))}function Xi(n){for(;n.ya.size>0&&n.wa.size<n.maxConcurrentLimboResolutions;){const t=n.ya.values().next().value;n.ya.delete(t);const e=new E(k.fromString(t)),r=n.va.next();n.Sa.set(r,new id(e)),n.wa=n.wa.insert(e,r),Za(n.remoteStore,new Vt(yt(or(e.path)),r,"TargetPurposeLimboResolution",Si._e))}}async function cn(n,t,e){const r=A(n),i=[],s=[],o=[];r.ga.isEmpty()||(r.ga.forEach((a,u)=>{o.push(r.Ma(u,t,e).then(c=>{if((c||e)&&r.isPrimaryClient&&r.sharedClientState.updateQueryState(u.targetId,c!=null&&c.fromCache?"not-current":"current"),c){i.push(c);const h=Ui.Ki(u.targetId,c);s.push(h)}}))}),await Promise.all(o),r.fa.u_(i),await async function(u,c){const h=A(u);try{await h.persistence.runTransaction("notifyLocalViewChanges","readwrite",l=>m.forEach(c,d=>m.forEach(d.qi,p=>h.persistence.referenceDelegate.addReference(l,d.targetId,p)).next(()=>m.forEach(d.Qi,p=>h.persistence.referenceDelegate.removeReference(l,d.targetId,p)))))}catch(l){if(!nn(l))throw l;_("LocalStore","Failed to update sequence numbers: "+l)}for(const l of c){const d=l.targetId;if(!l.fromCache){const p=h.ns.get(d),R=p.snapshotVersion,P=p.withLastLimboFreeSnapshotVersion(R);h.ns=h.ns.insert(d,P)}}}(r.localStore,s))}async function md(n,t){const e=A(n);if(!e.currentUser.isEqual(t)){_("SyncEngine","User change. New user:",t.toKey());const r=await Xa(e.localStore,t);e.currentUser=t,function(s,o){s.Ca.forEach(a=>{a.forEach(u=>{u.reject(new g(f.CANCELLED,o))})}),s.Ca.clear()}(e,"'waitForPendingWrites' promise is rejected due to a user change."),e.sharedClientState.handleUserChange(t,r.removedBatchIds,r.addedBatchIds),await cn(e,r.us)}}function pd(n,t){const e=A(n),r=e.Sa.get(t);if(r&&r.ma)return V().add(r.key);{let i=V();const s=e.pa.get(t);if(!s)return i;for(const o of s){const a=e.ga.get(o);i=i.unionWith(a.view.la)}return i}}function gd(n){const t=A(n);return t.remoteStore.remoteSyncer.applyRemoteEvent=uu.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=pd.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=hd.bind(null,t),t.fa.u_=td.bind(null,t.eventManager),t.fa.xa=ed.bind(null,t.eventManager),t}function _d(n){const t=A(n);return t.remoteStore.remoteSyncer.applySuccessfulWrite=ld.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=dd.bind(null,t),t}class to{constructor(){this.synchronizeTabs=!1}async initialize(t){this.serializer=fr(t.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(t),this.persistence=this.createPersistence(t),await this.persistence.start(),this.localStore=this.createLocalStore(t),this.gcScheduler=this.createGarbageCollectionScheduler(t,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(t,this.localStore)}createGarbageCollectionScheduler(t,e){return null}createIndexBackfillerScheduler(t,e){return null}createLocalStore(t){return Rl(this.persistence,new wl,t.initialUser,this.serializer)}createPersistence(t){return new Tl(bi.Hr,this.serializer)}createSharedClientState(t){return new kl}async terminate(){var t,e;(t=this.gcScheduler)===null||t===void 0||t.stop(),(e=this.indexBackfillerScheduler)===null||e===void 0||e.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class yd{async initialize(t,e){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(e),this.remoteStore=this.createRemoteStore(e),this.eventManager=this.createEventManager(e),this.syncEngine=this.createSyncEngine(e,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Js(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=md.bind(null,this.syncEngine),await Yl(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return function(){return new Zl}()}createDatastore(t){const e=fr(t.databaseInfo.databaseId),r=function(s){return new Ol(s)}(t.databaseInfo);return function(s,o,a,u){return new Ul(s,o,a,u)}(t.authCredentials,t.appCheckCredentials,r,e)}createRemoteStore(t){return function(r,i,s,o,a){return new Bl(r,i,s,o,a)}(this.localStore,this.datastore,t.asyncQueue,e=>Js(this.syncEngine,e,0),function(){return Hs.D()?new Hs:new xl}())}createSyncEngine(t,e){return function(i,s,o,a,u,c,h){const l=new sd(i,s,o,a,u,c);return h&&(l.Fa=!0),l}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,e)}async terminate(){var t;await async function(r){const i=A(r);_("RemoteStore","RemoteStore shutting down."),i.v_.add(5),await un(i),i.M_.shutdown(),i.x_.set("Unknown")}(this.remoteStore),(t=this.datastore)===null||t===void 0||t.terminate()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yi{constructor(t){this.observer=t,this.muted=!1}next(t){this.observer.next&&this.Ba(this.observer.next,t)}error(t){this.observer.error?this.Ba(this.observer.error,t):Tt("Uncaught Error in snapshot listener:",t.toString())}La(){this.muted=!0}Ba(t,e){this.muted||setTimeout(()=>{this.muted||t(e)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ed{constructor(t){this.datastore=t,this.readVersions=new Map,this.mutations=[],this.committed=!1,this.lastTransactionError=null,this.writtenDocs=new Set}async lookup(t){if(this.ensureCommitNotCalled(),this.mutations.length>0)throw this.lastTransactionError=new g(f.INVALID_ARGUMENT,"Firestore transactions require all reads to be executed before all writes."),this.lastTransactionError;const e=await async function(i,s){const o=A(i),a={documents:s.map(l=>Un(o.serializer,l))},u=await o.vo("BatchGetDocuments",o.serializer.databaseId,k.emptyPath(),a,s.length),c=new Map;u.forEach(l=>{const d=Xh(o.serializer,l);c.set(d.key.toString(),d)});const h=[];return s.forEach(l=>{const d=c.get(l.toString());D(!!d),h.push(d)}),h}(this.datastore,t);return e.forEach(r=>this.recordVersion(r)),e}set(t,e){this.write(e.toMutation(t,this.precondition(t))),this.writtenDocs.add(t.toString())}update(t,e){try{this.write(e.toMutation(t,this.preconditionForUpdate(t)))}catch(r){this.lastTransactionError=r}this.writtenDocs.add(t.toString())}delete(t){this.write(new lr(t,this.precondition(t))),this.writtenDocs.add(t.toString())}async commit(){if(this.ensureCommitNotCalled(),this.lastTransactionError)throw this.lastTransactionError;const t=this.readVersions;this.mutations.forEach(e=>{t.delete(e.key.toString())}),t.forEach((e,r)=>{const i=E.fromPath(r);this.mutations.push(new Fa(i,this.precondition(i)))}),await async function(r,i){const s=A(r),o={writes:i.map(a=>Ga(s.serializer,a))};await s.So("Commit",s.serializer.databaseId,k.emptyPath(),o)}(this.datastore,this.mutations),this.committed=!0}recordVersion(t){let e;if(t.isFoundDocument())e=t.version;else{if(!t.isNoDocument())throw v();e=I.min()}const r=this.readVersions.get(t.key.toString());if(r){if(!e.isEqual(r))throw new g(f.ABORTED,"Document version changed between two reads.")}else this.readVersions.set(t.key.toString(),e)}precondition(t){const e=this.readVersions.get(t.toString());return!this.writtenDocs.has(t.toString())&&e?e.isEqual(I.min())?nt.exists(!1):nt.updateTime(e):nt.none()}preconditionForUpdate(t){const e=this.readVersions.get(t.toString());if(!this.writtenDocs.has(t.toString())&&e){if(e.isEqual(I.min()))throw new g(f.INVALID_ARGUMENT,"Can't update a document that doesn't exist.");return nt.updateTime(e)}return nt.exists(!0)}write(t){this.ensureCommitNotCalled(),this.mutations.push(t)}ensureCommitNotCalled(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Td{constructor(t,e,r,i,s){this.asyncQueue=t,this.datastore=e,this.options=r,this.updateFunction=i,this.deferred=s,this.za=r.maxAttempts,this.jo=new qi(this.asyncQueue,"transaction_retry")}ja(){this.za-=1,this.Ha()}Ha(){this.jo.qo(async()=>{const t=new Ed(this.datastore),e=this.Ja(t);e&&e.then(r=>{this.asyncQueue.enqueueAndForget(()=>t.commit().then(()=>{this.deferred.resolve(r)}).catch(i=>{this.Ya(i)}))}).catch(r=>{this.Ya(r)})})}Ja(t){try{const e=this.updateFunction(t);return!rn(e)&&e.catch&&e.then?e:(this.deferred.reject(Error("Transaction callback must return a Promise")),null)}catch(e){return this.deferred.reject(e),null}}Ya(t){this.za>0&&this.Za(t)?(this.za-=1,this.asyncQueue.enqueueAndForget(()=>(this.Ha(),Promise.resolve()))):this.deferred.reject(t)}Za(t){if(t.name==="FirebaseError"){const e=t.code;return e==="aborted"||e==="failed-precondition"||e==="already-exists"||!ba(e)}return!1}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vd{constructor(t,e,r,i){this.authCredentials=t,this.appCheckCredentials=e,this.asyncQueue=r,this.databaseInfo=i,this.user=st.UNAUTHENTICATED,this.clientId=fa.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async s=>{_("FirestoreClient","Received user=",s.uid),await this.authCredentialListener(s),this.user=s}),this.appCheckCredentials.start(r,s=>(_("FirestoreClient","Received new app check token=",s),this.appCheckCredentialListener(s,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new g(f.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const t=new lt;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(e){const r=Qi(e,"Failed to shutdown persistence");t.reject(r)}}),t.promise}}async function Nr(n,t){n.asyncQueue.verifyOperationInProgress(),_("FirestoreClient","Initializing OfflineComponentProvider");const e=n.configuration;await t.initialize(e);let r=e.initialUser;n.setCredentialChangeListener(async i=>{r.isEqual(i)||(await Xa(t.localStore,i),r=i)}),t.persistence.setDatabaseDeletedListener(()=>n.terminate()),n._offlineComponents=t}async function eo(n,t){n.asyncQueue.verifyOperationInProgress();const e=await wd(n);_("FirestoreClient","Initializing OnlineComponentProvider"),await t.initialize(e,n.configuration),n.setCredentialChangeListener(r=>Xs(t.remoteStore,r)),n.setAppCheckTokenChangeListener((r,i)=>Xs(t.remoteStore,i)),n._onlineComponents=t}function Id(n){return n.name==="FirebaseError"?n.code===f.FAILED_PRECONDITION||n.code===f.UNIMPLEMENTED:!(typeof DOMException!="undefined"&&n instanceof DOMException)||n.code===22||n.code===20||n.code===11}async function wd(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){_("FirestoreClient","Using user provided OfflineComponentProvider");try{await Nr(n,n._uninitializedComponentsProvider._offline)}catch(t){const e=t;if(!Id(e))throw e;qe("Error using user provided cache. Falling back to memory cache: "+e),await Nr(n,new to)}}else _("FirestoreClient","Using default OfflineComponentProvider"),await Nr(n,new to);return n._offlineComponents}async function Ji(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(_("FirestoreClient","Using user provided OnlineComponentProvider"),await eo(n,n._uninitializedComponentsProvider._online)):(_("FirestoreClient","Using default OnlineComponentProvider"),await eo(n,new yd))),n._onlineComponents}function Ad(n){return Ji(n).then(t=>t.syncEngine)}function Rd(n){return Ji(n).then(t=>t.datastore)}async function Bn(n){const t=await Ji(n),e=t.eventManager;return e.onListen=od.bind(null,t.syncEngine),e.onUnlisten=ud.bind(null,t.syncEngine),e}function Pd(n,t,e={}){const r=new lt;return n.asyncQueue.enqueueAndForget(async()=>function(s,o,a,u,c){const h=new Yi({next:d=>{o.enqueueAndForget(()=>Ki(s,l));const p=d.docs.has(a);!p&&d.fromCache?c.reject(new g(f.UNAVAILABLE,"Failed to get document because the client is offline.")):p&&d.fromCache&&u&&u.source==="server"?c.reject(new g(f.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):c.resolve(d)},error:d=>c.reject(d)}),l=new Hi(or(a.path),h,{includeMetadataChanges:!0,Z_:!0});return Gi(s,l)}(await Bn(n),n.asyncQueue,t,e,r)),r.promise}function Vd(n,t,e={}){const r=new lt;return n.asyncQueue.enqueueAndForget(async()=>function(s,o,a,u,c){const h=new Yi({next:d=>{o.enqueueAndForget(()=>Ki(s,l)),d.fromCache&&u.source==="server"?c.reject(new g(f.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):c.resolve(d)},error:d=>c.reject(d)}),l=new Hi(a,h,{includeMetadataChanges:!0,Z_:!0});return Gi(s,l)}(await Bn(n),n.asyncQueue,t,e,r)),r.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function du(n){const t={};return n.timeoutSeconds!==void 0&&(t.timeoutSeconds=n.timeoutSeconds),t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const no=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fu(n,t,e){if(!e)throw new g(f.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${t}.`)}function Sd(n,t,e,r){if(t===!0&&r===!0)throw new g(f.INVALID_ARGUMENT,`${n} and ${e} cannot be used together.`)}function ro(n){if(!E.isDocumentKey(n))throw new g(f.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function io(n){if(E.isDocumentKey(n))throw new g(f.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function gr(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const t=function(r){return r.constructor?r.constructor.name:null}(n);return t?`a custom ${t} object`:"an object"}}return typeof n=="function"?"a function":v()}function Et(n,t){if("_delegate"in n&&(n=n._delegate),!(n instanceof t)){if(t.name===n.constructor.name)throw new g(f.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const e=gr(n);throw new g(f.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${e}`)}}return n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class so{constructor(t){var e,r;if(t.host===void 0){if(t.ssl!==void 0)throw new g(f.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=(e=t.ssl)===null||e===void 0||e;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.localCache=t.localCache,t.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<1048576)throw new g(f.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}Sd("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:t.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=du((r=t.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new g(f.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new g(f.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new g(f.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,t.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}class Zi{constructor(t,e,r,i){this._authCredentials=t,this._appCheckCredentials=e,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new so({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new g(f.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(t){if(this._settingsFrozen)throw new g(f.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new so(t),t.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new Kc;switch(r.type){case"firstParty":return new Xc(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new g(f.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const r=no.get(e);r&&(_("ComponentProvider","Removing Datastore"),no.delete(e),r.terminate())}(this),Promise.resolve()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ht{constructor(t,e,r){this.converter=e,this._query=r,this.type="query",this.firestore=t}withConverter(t){return new Ht(this.firestore,t,this._query)}}class it{constructor(t,e,r){this.converter=e,this._key=r,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new St(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new it(this.firestore,t,this._key)}}class St extends Ht{constructor(t,e,r){super(t,e,or(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new it(this.firestore,null,new E(t))}withConverter(t){return new St(this.firestore,t,this._path)}}function Hd(n,t,...e){if(n=dt(n),fu("collection","path",t),n instanceof Zi){const r=k.fromString(t,...e);return io(r),new St(n,null,r)}{if(!(n instanceof it||n instanceof St))throw new g(f.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(k.fromString(t,...e));return io(r),new St(n.firestore,null,r)}}function Cd(n,t,...e){if(n=dt(n),arguments.length===1&&(t=fa.newId()),fu("doc","path",t),n instanceof Zi){const r=k.fromString(t,...e);return ro(r),new it(n,null,new E(r))}{if(!(n instanceof it||n instanceof St))throw new g(f.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(k.fromString(t,...e));return ro(r),new it(n.firestore,n instanceof St?n.converter:null,new E(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dd{constructor(){this.Xa=Promise.resolve(),this.eu=[],this.tu=!1,this.nu=[],this.ru=null,this.iu=!1,this.su=!1,this.ou=[],this.jo=new qi(this,"async_queue_retry"),this._u=()=>{const e=Dr();e&&_("AsyncQueue","Visibility state changed to "+e.visibilityState),this.jo.Ko()};const t=Dr();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this._u)}get isShuttingDown(){return this.tu}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.au(),this.uu(t)}enterRestrictedMode(t){if(!this.tu){this.tu=!0,this.su=t||!1;const e=Dr();e&&typeof e.removeEventListener=="function"&&e.removeEventListener("visibilitychange",this._u)}}enqueue(t){if(this.au(),this.tu)return new Promise(()=>{});const e=new lt;return this.uu(()=>this.tu&&this.su?Promise.resolve():(t().then(e.resolve,e.reject),e.promise)).then(()=>e.promise)}enqueueRetryable(t){this.enqueueAndForget(()=>(this.eu.push(t),this.cu()))}async cu(){if(this.eu.length!==0){try{await this.eu[0](),this.eu.shift(),this.jo.reset()}catch(t){if(!nn(t))throw t;_("AsyncQueue","Operation failed with retryable error: "+t)}this.eu.length>0&&this.jo.qo(()=>this.cu())}}uu(t){const e=this.Xa.then(()=>(this.iu=!0,t().catch(r=>{this.ru=r,this.iu=!1;const i=function(o){let a=o.message||"";return o.stack&&(a=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),a}(r);throw Tt("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.iu=!1,r))));return this.Xa=e,e}enqueueAfterDelay(t,e,r){this.au(),this.ou.indexOf(t)>-1&&(e=0);const i=$i.createAndSchedule(this,t,e,r,s=>this.lu(s));return this.nu.push(i),i}au(){this.ru&&v()}verifyOperationInProgress(){}async hu(){let t;do t=this.Xa,await t;while(t!==this.Xa)}Pu(t){for(const e of this.nu)if(e.timerId===t)return!0;return!1}Iu(t){return this.hu().then(()=>{this.nu.sort((e,r)=>e.targetTimeMs-r.targetTimeMs);for(const e of this.nu)if(e.skipDelay(),t!=="all"&&e.timerId===t)break;return this.hu()})}Tu(t){this.ou.push(t)}lu(t){const e=this.nu.indexOf(t);this.nu.splice(e,1)}}function oo(n){return function(e,r){if(typeof e!="object"||e===null)return!1;const i=e;for(const s of r)if(s in i&&typeof i[s]=="function")return!0;return!1}(n,["next","error","complete"])}class kt extends Zi{constructor(t,e,r,i){super(t,e,r,i),this.type="firestore",this._queue=function(){return new Dd}(),this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||mu(this),this._firestoreClient.terminate()}}function Xd(n,t,e){e||(e="(default)");const r=ku(n,"firestore");if(r.isInitialized(e)){const i=r.getImmediate({identifier:e}),s=r.getOptions(e);if(xu(s,t))return i;throw new g(f.FAILED_PRECONDITION,"initializeFirestore() has already been called with different options. To avoid this error, call initializeFirestore() with the same options as when it was originally called, or call getFirestore() to return the already initialized instance.")}if(t.cacheSizeBytes!==void 0&&t.localCache!==void 0)throw new g(f.INVALID_ARGUMENT,"cache and cacheSizeBytes cannot be specified at the same time as cacheSizeBytes willbe deprecated. Instead, specify the cache size in the cache object");if(t.cacheSizeBytes!==void 0&&t.cacheSizeBytes!==-1&&t.cacheSizeBytes<1048576)throw new g(f.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");return r.initialize({options:t,instanceIdentifier:e})}function hn(n){return n._firestoreClient||mu(n),n._firestoreClient.verifyNotTerminated(),n._firestoreClient}function mu(n){var t,e,r;const i=n._freezeSettings(),s=function(a,u,c,h){return new hh(a,u,c,h.host,h.ssl,h.experimentalForceLongPolling,h.experimentalAutoDetectLongPolling,du(h.experimentalLongPollingOptions),h.useFetchStreams)}(n._databaseId,((t=n._app)===null||t===void 0?void 0:t.options.appId)||"",n._persistenceKey,i);n._firestoreClient=new vd(n._authCredentials,n._appCheckCredentials,n._queue,s),((e=i.localCache)===null||e===void 0?void 0:e._offlineComponentProvider)&&((r=i.localCache)===null||r===void 0?void 0:r._onlineComponentProvider)&&(n._firestoreClient._uninitializedComponentsProvider={_offlineKind:i.localCache.kind,_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qt{constructor(t){this._byteString=t}static fromBase64String(t){try{return new Qt(tt.fromBase64String(t))}catch(e){throw new g(f.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+e)}}static fromUint8Array(t){return new Qt(tt.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _r{constructor(...t){for(let e=0;e<t.length;++e)if(t[e].length===0)throw new g(f.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new W(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ts{constructor(t){this._methodName=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class es{constructor(t,e){if(!isFinite(t)||t<-90||t>90)throw new g(f.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(e)||e<-180||e>180)throw new g(f.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+e);this._lat=t,this._long=e}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return C(this._lat,t._lat)||C(this._long,t._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nd=/^__.*__$/;class kd{constructor(t,e,r){this.data=t,this.fieldMask=e,this.fieldTransforms=r}toMutation(t,e){return this.fieldMask!==null?new Lt(t,this.data,this.fieldMask,e,this.fieldTransforms):new on(t,this.data,e,this.fieldTransforms)}}class pu{constructor(t,e,r){this.data=t,this.fieldMask=e,this.fieldTransforms=r}toMutation(t,e){return new Lt(t,this.data,this.fieldMask,e,this.fieldTransforms)}}function gu(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw v()}}class ns{constructor(t,e,r,i,s,o){this.settings=t,this.databaseId=e,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.Eu(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get du(){return this.settings.du}Au(t){return new ns(Object.assign(Object.assign({},this.settings),t),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Ru(t){var e;const r=(e=this.path)===null||e===void 0?void 0:e.child(t),i=this.Au({path:r,Vu:!1});return i.mu(t),i}fu(t){var e;const r=(e=this.path)===null||e===void 0?void 0:e.child(t),i=this.Au({path:r,Vu:!1});return i.Eu(),i}gu(t){return this.Au({path:void 0,Vu:!0})}pu(t){return jn(t,this.settings.methodName,this.settings.yu||!1,this.path,this.settings.wu)}contains(t){return this.fieldMask.find(e=>t.isPrefixOf(e))!==void 0||this.fieldTransforms.find(e=>t.isPrefixOf(e.field))!==void 0}Eu(){if(this.path)for(let t=0;t<this.path.length;t++)this.mu(this.path.get(t))}mu(t){if(t.length===0)throw this.pu("Document fields must not be empty");if(gu(this.du)&&Nd.test(t))throw this.pu('Document fields cannot begin and end with "__"')}}class xd{constructor(t,e,r){this.databaseId=t,this.ignoreUndefinedProperties=e,this.serializer=r||fr(t)}Su(t,e,r,i=!1){return new ns({du:t,methodName:e,wu:r,path:W.emptyPath(),Vu:!1,yu:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function rs(n){const t=n._freezeSettings(),e=fr(n._databaseId);return new xd(n._databaseId,!!t.ignoreUndefinedProperties,e)}function _u(n,t,e,r,i,s={}){const o=n.Su(s.merge||s.mergeFields?2:0,t,e,i);is("Data must be an object, but it was:",o,r);const a=yu(r,o);let u,c;if(s.merge)u=new at(o.fieldMask),c=o.fieldTransforms;else if(s.mergeFields){const h=[];for(const l of s.mergeFields){const d=ni(t,l,e);if(!o.contains(d))throw new g(f.INVALID_ARGUMENT,`Field '${d}' is specified in your field mask but missing from your input data.`);Tu(h,d)||h.push(d)}u=new at(h),c=o.fieldTransforms.filter(l=>u.covers(l.field))}else u=null,c=o.fieldTransforms;return new kd(new et(a),u,c)}class yr extends ts{_toFieldTransform(t){if(t.du!==2)throw t.du===1?t.pu(`${this._methodName}() can only appear at the top level of your update data`):t.pu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return t.fieldMask.push(t.path),null}isEqual(t){return t instanceof yr}}function Md(n,t,e,r){const i=n.Su(1,t,e);is("Data must be an object, but it was:",i,r);const s=[],o=et.empty();Kt(r,(u,c)=>{const h=ss(t,u,e);c=dt(c);const l=i.fu(h);if(c instanceof yr)s.push(h);else{const d=ln(c,l);d!=null&&(s.push(h),o.set(h,d))}});const a=new at(s);return new pu(o,a,i.fieldTransforms)}function Ld(n,t,e,r,i,s){const o=n.Su(1,t,e),a=[ni(t,r,e)],u=[i];if(s.length%2!=0)throw new g(f.INVALID_ARGUMENT,`Function ${t}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let d=0;d<s.length;d+=2)a.push(ni(t,s[d])),u.push(s[d+1]);const c=[],h=et.empty();for(let d=a.length-1;d>=0;--d)if(!Tu(c,a[d])){const p=a[d];let R=u[d];R=dt(R);const P=o.fu(p);if(R instanceof yr)c.push(p);else{const T=ln(R,P);T!=null&&(c.push(p),h.set(p,T))}}const l=new at(c);return new pu(h,l,o.fieldTransforms)}function Od(n,t,e,r=!1){return ln(e,n.Su(r?4:3,t))}function ln(n,t){if(Eu(n=dt(n)))return is("Unsupported field value:",t,n),yu(n,t);if(n instanceof ts)return function(r,i){if(!gu(i.du))throw i.pu(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.pu(`${r._methodName}() is not currently supported inside arrays`);const s=r._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(n,t),null;if(n===void 0&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),n instanceof Array){if(t.settings.Vu&&t.du!==4)throw t.pu("Nested arrays are not supported");return function(r,i){const s=[];let o=0;for(const a of r){let u=ln(a,i.gu(o));u==null&&(u={nullValue:"NULL_VALUE"}),s.push(u),o++}return{arrayValue:{values:s}}}(n,t)}return function(r,i){if((r=dt(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return Nh(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const s=q.fromDate(r);return{timestampValue:bn(i.serializer,s)}}if(r instanceof q){const s=new q(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:bn(i.serializer,s)}}if(r instanceof es)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Qt)return{bytesValue:ja(i.serializer,r._byteString)};if(r instanceof it){const s=i.databaseId,o=r.firestore._databaseId;if(!o.isEqual(s))throw i.pu(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:Oi(r.firestore._databaseId||i.databaseId,r._key.path)}}throw i.pu(`Unsupported field value: ${gr(r)}`)}(n,t)}function yu(n,t){const e={};return ma(n)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):Kt(n,(r,i)=>{const s=ln(i,t.Ru(r));s!=null&&(e[r]=s)}),{mapValue:{fields:e}}}function Eu(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof q||n instanceof es||n instanceof Qt||n instanceof it||n instanceof ts)}function is(n,t,e){if(!Eu(e)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(e)){const r=gr(e);throw r==="an object"?t.pu(n+" a custom object"):t.pu(n+" "+r)}}function ni(n,t,e){if((t=dt(t))instanceof _r)return t._internalPath;if(typeof t=="string")return ss(n,t);throw jn("Field path arguments must be of type string or ",n,!1,void 0,e)}const Fd=new RegExp("[~\\*/\\[\\]]");function ss(n,t,e){if(t.search(Fd)>=0)throw jn(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,e);try{return new _r(...t.split("."))._internalPath}catch{throw jn(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,e)}}function jn(n,t,e,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let a=`Function ${t}() called with invalid data`;e&&(a+=" (via `toFirestore()`)"),a+=". ";let u="";return(s||o)&&(u+=" (found",s&&(u+=` in field ${r}`),o&&(u+=` in document ${i}`),u+=")"),new g(f.INVALID_ARGUMENT,a+n+u)}function Tu(n,t){return n.some(e=>e.isEqual(t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zn{constructor(t,e,r,i,s){this._firestore=t,this._userDataWriter=e,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new it(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const t=new bd(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const e=this._document.data.field(os("DocumentSnapshot.get",t));if(e!==null)return this._userDataWriter.convertValue(e)}}}class bd extends zn{data(){return super.data()}}function os(n,t){return typeof t=="string"?ss(n,t):t instanceof _r?t._internalPath:t._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vu(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new g(f.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class as{}class Ud extends as{}function Yd(n,t,...e){let r=[];t instanceof as&&r.push(t),r=r.concat(e),function(s){const o=s.filter(u=>u instanceof us).length,a=s.filter(u=>u instanceof Er).length;if(o>1||o>0&&a>0)throw new g(f.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const i of r)n=i._apply(n);return n}class Er extends Ud{constructor(t,e,r){super(),this._field=t,this._op=e,this._value=r,this.type="where"}static _create(t,e,r){return new Er(t,e,r)}_apply(t){const e=this._parse(t);return Iu(t._query,e),new Ht(t.firestore,t.converter,Hr(t._query,e))}_parse(t){const e=rs(t.firestore);return function(s,o,a,u,c,h,l){let d;if(c.isKeyField()){if(h==="array-contains"||h==="array-contains-any")throw new g(f.INVALID_ARGUMENT,`Invalid Query. You can't perform '${h}' queries on documentId().`);if(h==="in"||h==="not-in"){uo(l,h);const p=[];for(const R of l)p.push(ao(u,s,R));d={arrayValue:{values:p}}}else d=ao(u,s,l)}else h!=="in"&&h!=="not-in"&&h!=="array-contains-any"||uo(l,h),d=Od(a,o,l,h==="in"||h==="not-in");return U.create(c,h,d)}(t._query,"where",e,t.firestore._databaseId,this._field,this._op,this._value)}}function Jd(n,t,e){const r=t,i=os("where",n);return Er._create(i,r,e)}class us extends as{constructor(t,e){super(),this.type=t,this._queryConstraints=e}static _create(t,e){return new us(t,e)}_parse(t){const e=this._queryConstraints.map(r=>r._parse(t)).filter(r=>r.getFilters().length>0);return e.length===1?e[0]:mt.create(e,this._getOperator())}_apply(t){const e=this._parse(t);return e.getFilters().length===0?t:(function(i,s){let o=i;const a=s.getFlattenedFilters();for(const u of a)Iu(o,u),o=Hr(o,u)}(t._query,e),new Ht(t.firestore,t.converter,Hr(t._query,e)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}function ao(n,t,e){if(typeof(e=dt(e))=="string"){if(e==="")throw new g(f.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!wa(t)&&e.indexOf("/")!==-1)throw new g(f.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${e}' contains a '/' character.`);const r=t.path.child(k.fromString(e));if(!E.isDocumentKey(r))throw new g(f.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return Ds(n,new E(r))}if(e instanceof it)return Ds(n,e._key);throw new g(f.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${gr(e)}.`)}function uo(n,t){if(!Array.isArray(n)||n.length===0)throw new g(f.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${t.toString()}' filters.`)}function Iu(n,t){const e=function(i,s){for(const o of i)for(const a of o.getFlattenedFilters())if(s.indexOf(a.op)>=0)return a.op;return null}(n.filters,function(i){switch(i){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(t.op));if(e!==null)throw e===t.op?new g(f.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${t.op.toString()}' filter.`):new g(f.INVALID_ARGUMENT,`Invalid query. You cannot use '${t.op.toString()}' filters with '${e.toString()}' filters.`)}class wu{convertValue(t,e="none"){switch($t(t)){case 0:return null;case 1:return t.booleanValue;case 2:return b(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,e);case 5:return t.stringValue;case 6:return this.convertBytes(zt(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,e);case 10:return this.convertObject(t.mapValue,e);default:throw v()}}convertObject(t,e){return this.convertObjectMap(t.fields,e)}convertObjectMap(t,e="none"){const r={};return Kt(t,(i,s)=>{r[i]=this.convertValue(s,e)}),r}convertGeoPoint(t){return new es(b(t.latitude),b(t.longitude))}convertArray(t,e){return(t.values||[]).map(r=>this.convertValue(r,e))}convertServerTimestamp(t,e){switch(e){case"previous":const r=Di(t);return r==null?null:this.convertValue(r,e);case"estimate":return this.convertTimestamp(je(t));default:return null}}convertTimestamp(t){const e=Dt(t);return new q(e.seconds,e.nanos)}convertDocumentKey(t,e){const r=k.fromString(t);D(Ha(r));const i=new ze(r.get(1),r.get(3)),s=new E(r.popFirst(5));return i.isEqual(e)||Tt(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${e.projectId}/${e.database}) instead.`),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Au(n,t,e){let r;return r=n?e&&(e.merge||e.mergeFields)?n.toFirestore(t,e):n.toFirestore(t):t,r}class qd extends wu{constructor(t){super(),this.firestore=t}convertBytes(t){return new Qt(t)}convertReference(t){const e=this.convertDocumentKey(t,this.firestore._databaseId);return new it(this.firestore,null,e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ne{constructor(t,e){this.hasPendingWrites=t,this.fromCache=e}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class cs extends zn{constructor(t,e,r,i,s,o){super(t,e,r,i,o),this._firestore=t,this._firestoreImpl=t,this.metadata=s}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const e=new Rn(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(e,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,e={}){if(this._document){const r=this._document.data.field(os("DocumentSnapshot.get",t));if(r!==null)return this._userDataWriter.convertValue(r,e.serverTimestamps)}}}class Rn extends cs{data(t={}){return super.data(t)}}class Ru{constructor(t,e,r,i){this._firestore=t,this._userDataWriter=e,this._snapshot=i,this.metadata=new ne(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const t=[];return this.forEach(e=>t.push(e)),t}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(t,e){this._snapshot.docs.forEach(r=>{t.call(e,new Rn(this._firestore,this._userDataWriter,r.key,r,new ne(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(t={}){const e=!!t.includeMetadataChanges;if(e&&this._snapshot.excludesMetadataChanges)throw new g(f.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===e||(this._cachedChanges=function(i,s){if(i._snapshot.oldDocs.isEmpty()){let o=0;return i._snapshot.docChanges.map(a=>{const u=new Rn(i._firestore,i._userDataWriter,a.doc.key,a.doc,new ne(i._snapshot.mutatedKeys.has(a.doc.key),i._snapshot.fromCache),i.query.converter);return a.doc,{type:"added",doc:u,oldIndex:-1,newIndex:o++}})}{let o=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(a=>s||a.type!==3).map(a=>{const u=new Rn(i._firestore,i._userDataWriter,a.doc.key,a.doc,new ne(i._snapshot.mutatedKeys.has(a.doc.key),i._snapshot.fromCache),i.query.converter);let c=-1,h=-1;return a.type!==0&&(c=o.indexOf(a.doc.key),o=o.delete(a.doc.key)),a.type!==1&&(o=o.add(a.doc),h=o.indexOf(a.doc.key)),{type:Bd(a.type),doc:u,oldIndex:c,newIndex:h}})}}(this,e),this._cachedChangesIncludeMetadataChanges=e),this._cachedChanges}}function Bd(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return v()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zd(n){n=Et(n,it);const t=Et(n.firestore,kt);return Pd(hn(t),n._key).then(e=>Vu(t,n,e))}class Tr extends wu{constructor(t){super(),this.firestore=t}convertBytes(t){return new Qt(t)}convertReference(t){const e=this.convertDocumentKey(t,this.firestore._databaseId);return new it(this.firestore,null,e)}}function tf(n){n=Et(n,Ht);const t=Et(n.firestore,kt),e=hn(t),r=new Tr(t);return vu(n._query),Vd(e,n._query).then(i=>new Ru(t,r,n,i))}function ef(n){return Pu(Et(n.firestore,kt),[new lr(n._key,nt.none())])}function nf(n,t){const e=Et(n.firestore,kt),r=Cd(n),i=Au(n.converter,t);return Pu(e,[_u(rs(n.firestore),"addDoc",r._key,i,n.converter!==null,{}).toMutation(r._key,nt.exists(!1))]).then(()=>r)}function rf(n,...t){var e,r,i;n=dt(n);let s={includeMetadataChanges:!1},o=0;typeof t[o]!="object"||oo(t[o])||(s=t[o],o++);const a={includeMetadataChanges:s.includeMetadataChanges};if(oo(t[o])){const l=t[o];t[o]=(e=l.next)===null||e===void 0?void 0:e.bind(l),t[o+1]=(r=l.error)===null||r===void 0?void 0:r.bind(l),t[o+2]=(i=l.complete)===null||i===void 0?void 0:i.bind(l)}let u,c,h;if(n instanceof it)c=Et(n.firestore,kt),h=or(n._key.path),u={next:l=>{t[o]&&t[o](Vu(c,n,l))},error:t[o+1],complete:t[o+2]};else{const l=Et(n,Ht);c=Et(l.firestore,kt),h=l._query;const d=new Tr(c);u={next:p=>{t[o]&&t[o](new Ru(c,d,l,p))},error:t[o+1],complete:t[o+2]},vu(n._query)}return function(d,p,R,P){const T=new Yi(P),M=new Hi(p,T,R);return d.asyncQueue.enqueueAndForget(async()=>Gi(await Bn(d),M)),()=>{T.La(),d.asyncQueue.enqueueAndForget(async()=>Ki(await Bn(d),M))}}(hn(c),h,a,u)}function Pu(n,t){return function(r,i){const s=new lt;return r.asyncQueue.enqueueAndForget(async()=>cd(await Ad(r),i,s)),s.promise}(hn(n),t)}function Vu(n,t,e){const r=e.docs.get(t._key),i=new Tr(n);return new cs(n,i,t._key,r,new ne(e.hasPendingWrites,e.fromCache),t.converter)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jd={maxAttempts:5};function Te(n,t){if((n=dt(n)).firestore!==t)throw new g(f.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zd extends class{constructor(e,r){this._firestore=e,this._transaction=r,this._dataReader=rs(e)}get(e){const r=Te(e,this._firestore),i=new qd(this._firestore);return this._transaction.lookup([r._key]).then(s=>{if(!s||s.length!==1)return v();const o=s[0];if(o.isFoundDocument())return new zn(this._firestore,i,o.key,o,r.converter);if(o.isNoDocument())return new zn(this._firestore,i,r._key,null,r.converter);throw v()})}set(e,r,i){const s=Te(e,this._firestore),o=Au(s.converter,r,i),a=_u(this._dataReader,"Transaction.set",s._key,o,s.converter!==null,i);return this._transaction.set(s._key,a),this}update(e,r,i,...s){const o=Te(e,this._firestore);let a;return a=typeof(r=dt(r))=="string"||r instanceof _r?Ld(this._dataReader,"Transaction.update",o._key,r,i,s):Md(this._dataReader,"Transaction.update",o._key,r),this._transaction.update(o._key,a),this}delete(e){const r=Te(e,this._firestore);return this._transaction.delete(r._key),this}}{constructor(t,e){super(t,e),this._firestore=t}get(t){const e=Te(t,this._firestore),r=new Tr(this._firestore);return super.get(t).then(i=>new cs(this._firestore,r,e._key,i._document,new ne(!1,!1),e.converter))}}function of(n,t,e){n=Et(n,kt);const r=Object.assign(Object.assign({},jd),e);return function(s){if(s.maxAttempts<1)throw new g(f.INVALID_ARGUMENT,"Max attempts must be at least 1")}(r),function(s,o,a){const u=new lt;return s.asyncQueue.enqueueAndForget(async()=>{const c=await Rd(s);new Td(s.asyncQueue,c,a,o,u).ja()}),u.promise}(hn(n),i=>t(new zd(n,i)),r)}(function(t,e=!0){(function(i){me=i})(Mu),Cu(new Du("firestore",(r,{instanceIdentifier:i,options:s})=>{const o=r.getProvider("app").getImmediate(),a=new kt(new Wc(r.getProvider("auth-internal")),new Jc(r.getProvider("app-check-internal")),function(c,h){if(!Object.prototype.hasOwnProperty.apply(c.options,["projectId"]))throw new g(f.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new ze(c.options.projectId,h)}(o,i),o);return s=Object.assign({useFetchStreams:e},s),a._setSettings(s),a},"PUBLIC").setMultipleInstances(!0)),kr(Rs,"4.4.2",t),kr(Rs,"4.4.2","esm2017")})();export{nf as a,Zd as b,Hd as c,Cd as d,ef as e,tf as g,Xd as i,rf as o,Yd as q,of as r,Jd as w};
