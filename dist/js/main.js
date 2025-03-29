/*! For license information please see main.js.LICENSE.txt */
(()=>{"use strict";const t=(t,n,e,o)=>{const i=document.querySelector(n),r=document.querySelector(t);let c=!1;const s=()=>{i.style.display="",r.style.display="",document.body.style.overflow="",c=!1};document.addEventListener("click",(t=>{t.target.closest(e)?(i.style.display="block",r.style.display="block",document.body.style.overflow="hidden",c=!0):c&&(t.target===i||t.target.closest(o))&&s()})),document.addEventListener("keydown",(t=>{"Escape"===t.key&&c&&s()}))};function n(t,n){for(var e=0;e<n.length;e++){var o=n[e];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}var e="(prefers-reduced-motion: reduce)";function o(t){t.length=0}function i(t,n,e){return Array.prototype.slice.call(t,n,e)}function r(t){return t.bind.apply(t,[null].concat(i(arguments,1)))}var c=setTimeout,s=function(){};function u(t){return requestAnimationFrame(t)}function a(t,n){return typeof n===t}function l(t){return!m(t)&&a("object",t)}var d=Array.isArray,f=r(a,"function"),p=r(a,"string"),v=r(a,"undefined");function m(t){return null===t}function g(t){try{return t instanceof(t.ownerDocument.defaultView||window).HTMLElement}catch(t){return!1}}function h(t){return d(t)?t:[t]}function y(t,n){h(t).forEach(n)}function b(t,n){return t.indexOf(n)>-1}function E(t,n){return t.push.apply(t,h(n)),t}function w(t,n,e){t&&y(n,(function(n){n&&t.classList[e?"add":"remove"](n)}))}function x(t,n){w(t,p(n)?n.split(" "):n,!0)}function S(t,n){y(n,t.appendChild.bind(t))}function k(t,n){y(t,(function(t){var e=(n||t).parentNode;e&&e.insertBefore(t,n)}))}function C(t,n){return g(t)&&(t.msMatchesSelector||t.matches).call(t,n)}function L(t,n){var e=t?i(t.children):[];return n?e.filter((function(t){return C(t,n)})):e}function _(t,n){return n?L(t,n)[0]:t.firstElementChild}var P=Object.keys;function A(t,n,e){return t&&(e?P(t).reverse():P(t)).forEach((function(e){"__proto__"!==e&&n(t[e],e)})),t}function M(t){return i(arguments,1).forEach((function(n){A(n,(function(e,o){t[o]=n[o]}))})),t}function D(t){return i(arguments,1).forEach((function(n){A(n,(function(n,e){d(n)?t[e]=n.slice():l(n)?t[e]=D({},l(t[e])?t[e]:{},n):t[e]=n}))})),t}function T(t,n){y(n||P(t),(function(n){delete t[n]}))}function I(t,n){y(t,(function(t){y(n,(function(n){t&&t.removeAttribute(n)}))}))}function z(t,n,e){l(n)?A(n,(function(n,e){z(t,e,n)})):y(t,(function(t){m(e)||""===e?I(t,n):t.setAttribute(n,String(e))}))}function O(t,n,e){var o=document.createElement(t);return n&&(p(n)?x(o,n):z(o,n)),e&&S(e,o),o}function N(t,n,e){if(v(e))return getComputedStyle(t)[n];m(e)||(t.style[n]=""+e)}function q(t,n){N(t,"display",n)}function F(t){t.setActive&&t.setActive()||t.focus({preventScroll:!0})}function j(t,n){return t.getAttribute(n)}function R(t,n){return t&&t.classList.contains(n)}function B(t){return t.getBoundingClientRect()}function W(t){y(t,(function(t){t&&t.parentNode&&t.parentNode.removeChild(t)}))}function X(t){return _((new DOMParser).parseFromString(t,"text/html").body)}function G(t,n){t.preventDefault(),n&&(t.stopPropagation(),t.stopImmediatePropagation())}function H(t,n){return t&&t.querySelector(n)}function Y(t,n){return n?i(t.querySelectorAll(n)):[]}function $(t,n){w(t,n,!1)}function U(t){return t.timeStamp}function J(t){return p(t)?t:t?t+"px":""}var K="splide",V="data-"+K;function Q(t,n){if(!t)throw new Error("["+K+"] "+(n||""))}var Z=Math.min,tt=Math.max,nt=Math.floor,et=Math.ceil,ot=Math.abs;function it(t,n,e){return ot(t-n)<e}function rt(t,n,e,o){var i=Z(n,e),r=tt(n,e);return o?i<t&&t<r:i<=t&&t<=r}function ct(t,n,e){var o=Z(n,e),i=tt(n,e);return Z(tt(o,t),i)}function st(t){return+(t>0)-+(t<0)}function ut(t,n){return y(n,(function(n){t=t.replace("%s",""+n)})),t}function at(t){return t<10?"0"+t:""+t}var lt={};function dt(){var t=[];function n(t,n,e){y(t,(function(t){t&&y(n,(function(n){n.split(" ").forEach((function(n){var o=n.split(".");e(t,o[0],o[1])}))}))}))}return{bind:function(e,o,i,r){n(e,o,(function(n,e,o){var c="addEventListener"in n,s=c?n.removeEventListener.bind(n,e,i,r):n.removeListener.bind(n,i);c?n.addEventListener(e,i,r):n.addListener(i),t.push([n,e,o,i,s])}))},unbind:function(e,o,i){n(e,o,(function(n,e,o){t=t.filter((function(t){return!!(t[0]!==n||t[1]!==e||t[2]!==o||i&&t[3]!==i)||(t[4](),!1)}))}))},dispatch:function(t,n,e){var o,i=!0;return"function"==typeof CustomEvent?o=new CustomEvent(n,{bubbles:i,detail:e}):(o=document.createEvent("CustomEvent")).initCustomEvent(n,i,!1,e),t.dispatchEvent(o),o},destroy:function(){t.forEach((function(t){t[4]()})),o(t)}}}var ft="mounted",pt="ready",vt="move",mt="moved",gt="click",ht="refresh",yt="updated",bt="resize",Et="resized",wt="scroll",xt="scrolled",St="destroy",kt="navigation:mounted",Ct="autoplay:play",Lt="autoplay:pause",_t="lazyload:loaded",Pt="ei";function At(t){var n=t?t.event.bus:document.createDocumentFragment(),e=dt();return t&&t.event.on(St,e.destroy),M(e,{bus:n,on:function(t,o){e.bind(n,h(t).join(" "),(function(t){o.apply(o,d(t.detail)?t.detail:[])}))},off:r(e.unbind,n),emit:function(t){e.dispatch(n,t,i(arguments,1))}})}function Mt(t,n,e,o){var i,r,c=Date.now,s=0,a=!0,l=0;function d(){if(!a){if(s=t?Z((c()-i)/t,1):1,e&&e(s),s>=1&&(n(),i=c(),o&&++l>=o))return f();r=u(d)}}function f(){a=!0}function p(){r&&cancelAnimationFrame(r),s=0,r=0,a=!0}return{start:function(n){n||p(),i=c()-(n?s*t:0),a=!1,r=u(d)},rewind:function(){i=c(),s=0,e&&e(s)},pause:f,cancel:p,set:function(n){t=n},isPaused:function(){return a}}}var Dt="Arrow",Tt=Dt+"Left",It=Dt+"Right",zt=Dt+"Up",Ot=Dt+"Down",Nt="ttb",qt={width:["height"],left:["top","right"],right:["bottom","left"],x:["y"],X:["Y"],Y:["X"],ArrowLeft:[zt,It],ArrowRight:[Ot,Tt]};var Ft="role",jt="tabindex",Rt="aria-",Bt=Rt+"controls",Wt=Rt+"current",Xt=Rt+"selected",Gt=Rt+"label",Ht=Rt+"labelledby",Yt=Rt+"hidden",$t=Rt+"orientation",Ut=Rt+"roledescription",Jt=Rt+"live",Kt=Rt+"busy",Vt=Rt+"atomic",Qt=[Ft,jt,"disabled",Bt,Wt,Gt,Ht,Yt,$t,Ut],Zt=K+"__",tn="is-",nn=K,en=Zt+"track",on=Zt+"list",rn=Zt+"slide",cn=rn+"--clone",sn=rn+"__container",un=Zt+"arrows",an=Zt+"arrow",ln=an+"--prev",dn=an+"--next",fn=Zt+"pagination",pn=fn+"__page",vn=Zt+"progress__bar",mn=Zt+"toggle",gn=Zt+"sr",hn=tn+"initialized",yn=tn+"active",bn=tn+"prev",En=tn+"next",wn=tn+"visible",xn=tn+"loading",Sn=tn+"focus-in",kn=tn+"overflow",Cn=[yn,wn,bn,En,xn,Sn,kn],Ln={slide:rn,clone:cn,arrows:un,arrow:an,prev:ln,next:dn,pagination:fn,page:pn,spinner:Zt+"spinner"},_n="touchstart mousedown",Pn="touchmove mousemove",An="touchend touchcancel mouseup click",Mn="slide",Dn="loop",Tn="fade";var In=V+"-interval",zn={passive:!1,capture:!0},On={Spacebar:" ",Right:It,Left:Tt,Up:zt,Down:Ot};function Nn(t){return t=p(t)?t:t.key,On[t]||t}var qn="keydown",Fn=V+"-lazy",jn=Fn+"-srcset",Rn="["+Fn+"], ["+jn+"]",Bn=[" ","Enter"],Wn=Object.freeze({__proto__:null,Media:function(t,n,o){var i=t.state,r=o.breakpoints||{},c=o.reducedMotion||{},s=dt(),u=[];function a(t){t&&s.destroy()}function l(t,n){var e=matchMedia(n);s.bind(e,"change",d),u.push([t,e])}function d(){var n=i.is(7),e=o.direction,r=u.reduce((function(t,n){return D(t,n[1].matches?n[0]:{})}),{});T(o),f(r),o.destroy?t.destroy("completely"===o.destroy):n?(a(!0),t.mount()):e!==o.direction&&t.refresh()}function f(n,e,r){D(o,n),e&&D(Object.getPrototypeOf(o),n),!r&&i.is(1)||t.emit(yt,o)}return{setup:function(){var t="min"===o.mediaQuery;P(r).sort((function(n,e){return t?+n-+e:+e-+n})).forEach((function(n){l(r[n],"("+(t?"min":"max")+"-width:"+n+"px)")})),l(c,e),d()},destroy:a,reduce:function(t){matchMedia(e).matches&&(t?D(o,c):T(o,P(c)))},set:f}},Direction:function(t,n,e){return{resolve:function(t,n,o){var i="rtl"!==(o=o||e.direction)||n?o===Nt?0:-1:1;return qt[t]&&qt[t][i]||t.replace(/width|left|right/i,(function(t,n){var e=qt[t.toLowerCase()][i]||t;return n>0?e.charAt(0).toUpperCase()+e.slice(1):e}))},orient:function(t){return t*("rtl"===e.direction?1:-1)}}},Elements:function(t,n,e){var i,r,c,s=At(t),u=s.on,a=s.bind,l=t.root,d=e.i18n,p={},v=[],m=[],g=[];function h(){var t,n,o;i=S("."+en),r=_(i,"."+on),Q(i&&r,"A track/list element is missing."),E(v,L(r,"."+rn+":not(."+cn+")")),A({arrows:un,pagination:fn,prev:ln,next:dn,bar:vn,toggle:mn},(function(t,n){p[n]=S("."+t)})),M(p,{root:l,track:i,list:r,slides:v}),n=l.id||""+(t=K)+at(lt[t]=(lt[t]||0)+1),o=e.role,l.id=n,i.id=i.id||n+"-track",r.id=r.id||n+"-list",!j(l,Ft)&&"SECTION"!==l.tagName&&o&&z(l,Ft,o),z(l,Ut,d.carousel),z(r,Ft,"presentation"),b()}function y(t){var n=Qt.concat("style");o(v),$(l,m),$(i,g),I([i,r],n),I(l,t?n:["style",Ut])}function b(){$(l,m),$(i,g),m=k(nn),g=k(en),x(l,m),x(i,g),z(l,Gt,e.label),z(l,Ht,e.labelledby)}function S(t){var n=H(l,t);return n&&function(t,n){if(f(t.closest))return t.closest(n);for(var e=t;e&&1===e.nodeType&&!C(e,n);)e=e.parentElement;return e}(n,"."+nn)===l?n:void 0}function k(t){return[t+"--"+e.type,t+"--"+e.direction,e.drag&&t+"--draggable",e.isNavigation&&t+"--nav",t===nn&&yn]}return M(p,{setup:h,mount:function(){u(ht,y),u(ht,h),u(yt,b),a(document,_n+" keydown",(function(t){c="keydown"===t.type}),{capture:!0}),a(l,"focusin",(function(){w(l,Sn,!!c)}))},destroy:y})},Slides:function(t,n,e){var i=At(t),c=i.on,s=i.emit,u=i.bind,a=n.Elements,l=a.slides,d=a.list,v=[];function m(){l.forEach((function(t,n){L(t,n,-1)}))}function E(){A((function(t){t.destroy()})),o(v)}function L(n,e,o){var i=function(t,n,e,o){var i,c=At(t),s=c.on,u=c.emit,a=c.bind,l=t.Components,d=t.root,f=t.options,p=f.isNavigation,v=f.updateOnMove,m=f.i18n,g=f.pagination,h=f.slideFocus,y=l.Direction.resolve,b=j(o,"style"),E=j(o,Gt),x=e>-1,S=_(o,"."+sn);function k(){var i=t.splides.map((function(t){var e=t.splide.Components.Slides.getAt(n);return e?e.slide.id:""})).join(" ");z(o,Gt,ut(m.slideX,(x?e:n)+1)),z(o,Bt,i),z(o,Ft,h?"button":""),h&&I(o,Ut)}function C(){i||L()}function L(){if(!i){var e=t.index;(r=P())!==R(o,yn)&&(w(o,yn,r),z(o,Wt,p&&r||""),u(r?"active":"inactive",A)),function(){var n=function(){if(t.is(Tn))return P();var n=B(l.Elements.track),e=B(o),i=y("left",!0),r=y("right",!0);return nt(n[i])<=et(e[i])&&nt(e[r])<=et(n[r])}(),e=!n&&(!P()||x);if(t.state.is([4,5])||z(o,Yt,e||""),z(Y(o,f.focusableNodes||""),jt,e?-1:""),h&&z(o,jt,e?-1:0),n!==R(o,wn)&&(w(o,wn,n),u(n?"visible":"hidden",A)),!n&&document.activeElement===o){var i=l.Slides.getAt(t.index);i&&F(i.slide)}}(),w(o,bn,n===e-1),w(o,En,n===e+1)}var r}function P(){var o=t.index;return o===n||f.cloneStatus&&o===e}var A={index:n,slideIndex:e,slide:o,container:S,isClone:x,mount:function(){x||(o.id=d.id+"-slide"+at(n+1),z(o,Ft,g?"tabpanel":"group"),z(o,Ut,m.slide),z(o,Gt,E||ut(m.slideLabel,[n+1,t.length]))),a(o,"click",r(u,gt,A)),a(o,"keydown",r(u,"sk",A)),s([mt,"sh",xt],L),s(kt,k),v&&s(vt,C)},destroy:function(){i=!0,c.destroy(),$(o,Cn),I(o,Qt),z(o,"style",b),z(o,Gt,E||"")},update:L,style:function(t,n,e){N(e&&S||o,t,n)},isWithin:function(e,o){var i=ot(e-n);return x||!f.rewind&&!t.is(Dn)||(i=Z(i,t.length-i)),i<=o}};return A}(t,e,o,n);i.mount(),v.push(i),v.sort((function(t,n){return t.index-n.index}))}function P(t){return t?M((function(t){return!t.isClone})):v}function A(t,n){P(n).forEach(t)}function M(t){return v.filter(f(t)?t:function(n){return p(t)?C(n.slide,t):b(h(t),n.index)})}return{mount:function(){m(),c(ht,E),c(ht,m)},destroy:E,update:function(){A((function(t){t.update()}))},register:L,get:P,getIn:function(t){var o=n.Controller,i=o.toIndex(t),r=o.hasFocus()?1:e.perPage;return M((function(t){return rt(t.index,i,i+r-1)}))},getAt:function(t){return M(t)[0]},add:function(t,n){y(t,(function(t){if(p(t)&&(t=X(t)),g(t)){var o=l[n];o?k(t,o):S(d,t),x(t,e.classes.slide),i=t,c=r(s,bt),a=Y(i,"img"),(f=a.length)?a.forEach((function(t){u(t,"load error",(function(){--f||c()}))})):c()}var i,c,a,f})),s(ht)},remove:function(t){W(M(t).map((function(t){return t.slide}))),s(ht)},forEach:A,filter:M,style:function(t,n,e){A((function(o){o.style(t,n,e)}))},getLength:function(t){return t?l.length:v.length},isEnough:function(){return v.length>e.perPage}}},Layout:function(t,n,e){var o,i,c,s=At(t),u=s.on,a=s.bind,d=s.emit,f=n.Slides,p=n.Direction.resolve,v=n.Elements,m=v.root,g=v.track,h=v.list,y=f.getAt,b=f.style;function E(){o=e.direction===Nt,N(m,"maxWidth",J(e.width)),N(g,p("paddingLeft"),S(!1)),N(g,p("paddingRight"),S(!0)),x(!0)}function x(t){var n,r=B(m);(t||i.width!==r.width||i.height!==r.height)&&(N(g,"height",(n="",o&&(Q(n=k(),"height or heightRatio is missing."),n="calc("+n+" - "+S(!1)+" - "+S(!0)+")"),n)),b(p("marginRight"),J(e.gap)),b("width",e.autoWidth?null:J(e.fixedWidth)||(o?"":C())),b("height",J(e.fixedHeight)||(o?e.autoHeight?null:C():k()),!0),i=r,d(Et),c!==(c=D())&&(w(m,kn,c),d("overflow",c)))}function S(t){var n=e.padding,o=p(t?"right":"left");return n&&J(n[o]||(l(n)?0:n))||"0px"}function k(){return J(e.height||B(h).width*e.heightRatio)}function C(){var t=J(e.gap);return"calc((100%"+(t&&" + "+t)+")/"+(e.perPage||1)+(t&&" - "+t)+")"}function L(){return B(h)[p("width")]}function _(t,n){var e=y(t||0);return e?B(e.slide)[p("width")]+(n?0:M()):0}function P(t,n){var e=y(t);if(e){var o=B(e.slide)[p("right")],i=B(h)[p("left")];return ot(o-i)+(n?0:M())}return 0}function A(n){return P(t.length-1)-P(0)+_(0,n)}function M(){var t=y(0);return t&&parseFloat(N(t.slide,p("marginRight")))||0}function D(){return t.is(Tn)||A(!0)>L()}return{mount:function(){var t,n;E(),a(window,"resize load",(t=r(d,bt),n=Mt(0,t,null,1),function(){n.isPaused()&&n.start()})),u([yt,ht],E),u(bt,x)},resize:x,listSize:L,slideSize:_,sliderSize:A,totalSize:P,getPadding:function(t){return parseFloat(N(g,p("padding"+(t?"Right":"Left"))))||0},isOverflow:D}},Clones:function(t,n,e){var i,r=At(t),c=r.on,s=n.Elements,u=n.Slides,a=n.Direction.resolve,l=[];function d(){c(ht,f),c([yt,bt],m),(i=g())&&(function(n){var o=u.get().slice(),i=o.length;if(i){for(;o.length<n;)E(o,o);E(o.slice(-n),o.slice(0,n)).forEach((function(r,c){var a=c<n,d=function(n,o){var i=n.cloneNode(!0);return x(i,e.classes.clone),i.id=t.root.id+"-clone"+at(o+1),i}(r.slide,c);a?k(d,o[0].slide):S(s.list,d),E(l,d),u.register(d,c-n+(a?0:i),r.index)}))}}(i),n.Layout.resize(!0))}function f(){p(),d()}function p(){W(l),o(l),r.destroy()}function m(){var t=g();i!==t&&(i<t||!t)&&r.emit(ht)}function g(){var o=e.clones;if(t.is(Dn)){if(v(o)){var i=e[a("fixedWidth")]&&n.Layout.slideSize(0);o=i&&et(B(s.track)[a("width")]/i)||e[a("autoWidth")]&&t.length||2*e.perPage}}else o=0;return o}return{mount:d,destroy:p}},Move:function(t,n,e){var o,i=At(t),r=i.on,c=i.emit,s=t.state.set,u=n.Layout,a=u.slideSize,l=u.getPadding,d=u.totalSize,f=u.listSize,p=u.sliderSize,m=n.Direction,g=m.resolve,h=m.orient,y=n.Elements,b=y.list,E=y.track;function w(){n.Controller.isBusy()||(n.Scroll.cancel(),x(t.index),n.Slides.update())}function x(t){S(_(t,!0))}function S(e,o){if(!t.is(Tn)){var i=o?e:function(e){if(t.is(Dn)){var o=L(e),i=o>n.Controller.getEnd();(o<0||i)&&(e=k(e,i))}return e}(e);N(b,"transform","translate"+g("X")+"("+i+"px)"),e!==i&&c("sh")}}function k(t,n){var e=t-A(n),o=p();return t-h(o*(et(ot(e)/o)||1))*(n?1:-1)}function C(){S(P(),!0),o.cancel()}function L(t){for(var e=n.Slides.get(),o=0,i=1/0,r=0;r<e.length;r++){var c=e[r].index,s=ot(_(c,!0)-t);if(!(s<=i))break;i=s,o=c}return o}function _(n,o){var i=h(d(n-1)-function(t){var n=e.focus;return"center"===n?(f()-a(t,!0))/2:+n*a(t)||0}(n));return o?function(n){return e.trimSpace&&t.is(Mn)&&(n=ct(n,0,h(p(!0)-f()))),n}(i):i}function P(){var t=g("left");return B(b)[t]-B(E)[t]+h(l(!1))}function A(t){return _(t?n.Controller.getEnd():0,!!e.trimSpace)}return{mount:function(){o=n.Transition,r([ft,Et,yt,ht],w)},move:function(t,n,e,i){var r,u;t!==n&&(r=t>e,u=h(k(P(),r)),r?u>=0:u<=b[g("scrollWidth")]-B(E)[g("width")])&&(C(),S(k(P(),t>e),!0)),s(4),c(vt,n,e,t),o.start(n,(function(){s(3),c(mt,n,e,t),i&&i()}))},jump:x,translate:S,shift:k,cancel:C,toIndex:L,toPosition:_,getPosition:P,getLimit:A,exceededLimit:function(t,n){n=v(n)?P():n;var e=!0!==t&&h(n)<h(A(!1)),o=!1!==t&&h(n)>h(A(!0));return e||o},reposition:w}},Controller:function(t,n,e){var o,i,c,s,u=At(t),a=u.on,l=u.emit,d=n.Move,f=d.getPosition,m=d.getLimit,g=d.toPosition,h=n.Slides,y=h.isEnough,b=h.getLength,E=e.omitEnd,w=t.is(Dn),x=t.is(Mn),S=r(A,!1),k=r(A,!0),C=e.start||0,L=C;function _(){i=b(!0),c=e.perMove,s=e.perPage,o=T();var t=ct(C,0,E?o:i-1);t!==C&&(C=t,d.reposition())}function P(){o!==T()&&l(Pt)}function A(t,n){var e=c||(N()?1:s),i=M(C+e*(t?-1:1),C,!(c||N()));return-1===i&&x&&!it(f(),m(!t),1)?t?0:o:n?i:D(i)}function M(n,r,u){if(y()||N()){var a=function(n){if(x&&"move"===e.trimSpace&&n!==C)for(var o=f();o===g(n,!0)&&rt(n,0,t.length-1,!e.rewind);)n<C?--n:++n;return n}(n);a!==n&&(r=n,n=a,u=!1),n<0||n>o?n=c||!rt(0,n,r,!0)&&!rt(o,r,n,!0)?w?u?n<0?-(i%s||s):i:n:e.rewind?n<0?o:0:-1:I(z(n)):u&&n!==r&&(n=I(z(r)+(n<r?-1:1)))}else n=-1;return n}function D(t){return w?(t+i)%i||0:t}function T(){for(var t=i-(N()||w&&c?1:s);E&&t-- >0;)if(g(i-1,!0)!==g(t,!0)){t++;break}return ct(t,0,i-1)}function I(t){return ct(N()?t:s*t,0,o)}function z(t){return N()?Z(t,o):nt((t>=o?i-1:t)/s)}function O(t){t!==C&&(L=C,C=t)}function N(){return!v(e.focus)||e.isNavigation}function q(){return t.state.is([4,5])&&!!e.waitForTransition}return{mount:function(){_(),a([yt,ht,Pt],_),a(Et,P)},go:function(t,n,e){if(!q()){var i=function(t){var n=C;if(p(t)){var e=t.match(/([+\-<>])(\d+)?/)||[],i=e[1],r=e[2];"+"===i||"-"===i?n=M(C+ +(""+i+(+r||1)),C):">"===i?n=r?I(+r):S(!0):"<"===i&&(n=k(!0))}else n=w?t:ct(t,0,o);return n}(t),r=D(i);r>-1&&(n||r!==C)&&(O(r),d.move(i,r,L,e))}},scroll:function(t,e,i,r){n.Scroll.scroll(t,e,i,(function(){var t=D(d.toIndex(f()));O(E?Z(t,o):t),r&&r()}))},getNext:S,getPrev:k,getAdjacent:A,getEnd:T,setIndex:O,getIndex:function(t){return t?L:C},toIndex:I,toPage:z,toDest:function(t){var n=d.toIndex(t);return x?ct(n,0,o):n},hasFocus:N,isBusy:q}},Arrows:function(t,n,e){var o,i,c=At(t),s=c.on,u=c.bind,a=c.emit,l=e.classes,d=e.i18n,f=n.Elements,p=n.Controller,v=f.arrows,m=f.track,g=v,h=f.prev,y=f.next,b={};function E(){var t;!(t=e.arrows)||h&&y||(g=v||O("div",l.arrows),h=_(!0),y=_(!1),o=!0,S(g,[h,y]),!v&&k(g,m)),h&&y&&(M(b,{prev:h,next:y}),q(g,t?"":"none"),x(g,i=un+"--"+e.direction),t&&(s([ft,mt,ht,xt,Pt],P),u(y,"click",r(L,">")),u(h,"click",r(L,"<")),P(),z([h,y],Bt,m.id),a("arrows:mounted",h,y))),s(yt,w)}function w(){C(),E()}function C(){c.destroy(),$(g,i),o?(W(v?[h,y]:g),h=y=null):I([h,y],Qt)}function L(t){p.go(t,!0)}function _(t){return X('<button class="'+l.arrow+" "+(t?l.prev:l.next)+'" type="button"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40" width="40" height="40" focusable="false"><path d="'+(e.arrowPath||"m15.5 0.932-4.3 4.38 14.5 14.6-14.5 14.5 4.3 4.4 14.6-14.6 4.4-4.3-4.4-4.4-14.6-14.6z")+'" />')}function P(){if(h&&y){var n=t.index,e=p.getPrev(),o=p.getNext(),i=e>-1&&n<e?d.last:d.prev,r=o>-1&&n>o?d.first:d.next;h.disabled=e<0,y.disabled=o<0,z(h,Gt,i),z(y,Gt,r),a("arrows:updated",h,y,e,o)}}return{arrows:b,mount:E,destroy:C,update:P}},Autoplay:function(t,n,e){var o,i,r=At(t),c=r.on,s=r.bind,u=r.emit,a=Mt(e.interval,t.go.bind(t,">"),(function(t){var n=d.bar;n&&N(n,"width",100*t+"%"),u("autoplay:playing",t)})),l=a.isPaused,d=n.Elements,f=n.Elements,p=f.root,v=f.toggle,m=e.autoplay,g="pause"===m;function h(){l()&&n.Slides.isEnough()&&(a.start(!e.resetProgress),i=o=g=!1,E(),u(Ct))}function y(t){void 0===t&&(t=!0),g=!!t,E(),l()||(a.pause(),u(Lt))}function b(){g||(o||i?y(!1):h())}function E(){v&&(w(v,yn,!g),z(v,Gt,e.i18n[g?"play":"pause"]))}function x(t){var o=n.Slides.getAt(t);a.set(o&&+j(o.slide,In)||e.interval)}return{mount:function(){m&&(e.pauseOnHover&&s(p,"mouseenter mouseleave",(function(t){o="mouseenter"===t.type,b()})),e.pauseOnFocus&&s(p,"focusin focusout",(function(t){i="focusin"===t.type,b()})),v&&s(v,"click",(function(){g?h():y(!0)})),c([vt,wt,ht],a.rewind),c(vt,x),v&&z(v,Bt,d.track.id),g||h(),E())},destroy:a.cancel,play:h,pause:y,isPaused:l}},Cover:function(t,n,e){var o=At(t).on;function i(t){n.Slides.forEach((function(n){var e=_(n.container||n.slide,"img");e&&e.src&&c(t,e,n)}))}function c(t,n,e){e.style("background",t?'center/cover no-repeat url("'+n.src+'")':"",!0),q(n,t?"none":"")}return{mount:function(){e.cover&&(o(_t,r(c,!0)),o([ft,yt,ht],r(i,!0)))},destroy:r(i,!1)}},Scroll:function(t,n,e){var o,i,c=At(t),s=c.on,u=c.emit,a=t.state.set,l=n.Move,d=l.getPosition,f=l.getLimit,p=l.exceededLimit,v=l.translate,m=t.is(Mn),g=1;function h(t,e,c,s,f){var v=d();if(E(),c&&(!m||!p())){var h=n.Layout.sliderSize(),w=st(t)*h*nt(ot(t)/h)||0;t=l.toPosition(n.Controller.toDest(t%h))+w}var x=it(v,t,1);g=1,e=x?0:e||tt(ot(t-v)/1.5,800),i=s,o=Mt(e,y,r(b,v,t,f),1),a(5),u(wt),o.start()}function y(){a(3),i&&i(),u(xt)}function b(t,n,o,r){var c,s,u=d(),a=(t+(n-t)*(c=r,(s=e.easingFunc)?s(c):1-Math.pow(1-c,4))-u)*g;v(u+a),m&&!o&&p()&&(g*=.6,ot(a)<10&&h(f(p(!0)),600,!1,i,!0))}function E(){o&&o.cancel()}function w(){o&&!o.isPaused()&&(E(),y())}return{mount:function(){s(vt,E),s([yt,ht],w)},destroy:E,scroll:h,cancel:w}},Drag:function(t,n,e){var o,i,r,c,u,a,d,f,p=At(t),v=p.on,m=p.emit,g=p.bind,h=p.unbind,y=t.state,b=n.Move,E=n.Scroll,w=n.Controller,x=n.Elements.track,S=n.Media.reduce,k=n.Direction,L=k.resolve,_=k.orient,P=b.getPosition,A=b.exceededLimit,M=!1;function D(){var t=e.drag;W(!t),c="free"===t}function T(t){if(a=!1,!d){var n=B(t);o=t.target,i=e.noDrag,C(o,"."+pn+", ."+an)||i&&C(o,i)||!n&&t.button||(w.isBusy()?G(t,!0):(f=n?x:window,u=y.is([4,5]),r=null,g(f,Pn,I,zn),g(f,An,z,zn),b.cancel(),E.cancel(),N(t)))}var o,i}function I(n){if(y.is(6)||(y.set(6),m("drag")),n.cancelable)if(u){b.translate(o+q(n)/(M&&t.is(Mn)?5:1));var i=F(n)>200,r=M!==(M=A());(i||r)&&N(n),a=!0,m("dragging"),G(n)}else(function(t){return ot(q(t))>ot(q(t,!0))})(n)&&(u=function(t){var n=e.dragMinThreshold,o=l(n),i=o&&n.mouse||0,r=(o?n.touch:+n)||10;return ot(q(t))>(B(t)?r:i)}(n),G(n))}function z(o){y.is(6)&&(y.set(3),m("dragged")),u&&(function(o){var i=function(n){if(t.is(Dn)||!M){var e=F(n);if(e&&e<200)return q(n)/e}return 0}(o),r=function(t){return P()+st(t)*Z(ot(t)*(e.flickPower||600),c?1/0:n.Layout.listSize()*(e.flickMaxPages||1))}(i),s=e.rewind&&e.rewindByDrag;S(!1),c?w.scroll(r,0,e.snap):t.is(Tn)?w.go(_(st(i))<0?s?"<":"-":s?">":"+"):t.is(Mn)&&M&&s?w.go(A(!0)?">":"<"):w.go(w.toDest(r),!0),S(!0)}(o),G(o)),h(f,Pn,I),h(f,An,z),u=!1}function O(t){!d&&a&&G(t,!0)}function N(t){r=i,i=t,o=P()}function q(t,n){return R(t,n)-R(j(t),n)}function F(t){return U(t)-U(j(t))}function j(t){return i===t&&r||i}function R(t,n){return(B(t)?t.changedTouches[0]:t)["page"+L(n?"Y":"X")]}function B(t){return"undefined"!=typeof TouchEvent&&t instanceof TouchEvent}function W(t){d=t}return{mount:function(){g(x,Pn,s,zn),g(x,An,s,zn),g(x,_n,T,zn),g(x,"click",O,{capture:!0}),g(x,"dragstart",G),v([ft,yt],D)},disable:W,isDragging:function(){return u}}},Keyboard:function(t,n,e){var o,i,r=At(t),s=r.on,u=r.bind,a=r.unbind,l=t.root,d=n.Direction.resolve;function f(){var t=e.keyboard;t&&(o="global"===t?window:l,u(o,qn,m))}function p(){a(o,qn)}function v(){var t=i;i=!0,c((function(){i=t}))}function m(n){if(!i){var e=Nn(n);e===d(Tt)?t.go("<"):e===d(It)&&t.go(">")}}return{mount:function(){f(),s(yt,p),s(yt,f),s(vt,v)},destroy:p,disable:function(t){i=t}}},LazyLoad:function(t,n,e){var i=At(t),c=i.on,s=i.off,u=i.bind,a=i.emit,l="sequential"===e.lazyLoad,d=[mt,xt],f=[];function p(){o(f),n.Slides.forEach((function(t){Y(t.slide,Rn).forEach((function(n){var o=j(n,Fn),i=j(n,jn);if(o!==n.src||i!==n.srcset){var r=e.classes.spinner,c=n.parentElement,s=_(c,"."+r)||O("span",r,c);f.push([n,t,s]),n.src||q(n,"none")}}))})),l?h():(s(d),c(d,v),v())}function v(){(f=f.filter((function(n){var o=e.perPage*((e.preloadPages||1)+1)-1;return!n[1].isWithin(t.index,o)||m(n)}))).length||s(d)}function m(t){var n=t[0];x(t[1].slide,xn),u(n,"load error",r(g,t)),z(n,"src",j(n,Fn)),z(n,"srcset",j(n,jn)),I(n,Fn),I(n,jn)}function g(t,n){var e=t[0],o=t[1];$(o.slide,xn),"error"!==n.type&&(W(t[2]),q(e,""),a(_t,e,o),a(bt)),l&&h()}function h(){f.length&&m(f.shift())}return{mount:function(){e.lazyLoad&&(p(),c(ht,p))},destroy:r(o,f),check:v}},Pagination:function(t,n,e){var c,s,u=At(t),a=u.on,l=u.emit,d=u.bind,f=n.Slides,p=n.Elements,v=n.Controller,m=v.hasFocus,g=v.getIndex,h=v.go,y=n.Direction.resolve,b=p.pagination,E=[];function w(){c&&(W(b?i(c.children):c),$(c,s),o(E),c=null),u.destroy()}function S(t){h(">"+t,!0)}function k(t,n){var e=E.length,o=Nn(n),i=C(),r=-1;o===y(It,!1,i)?r=++t%e:o===y(Tt,!1,i)?r=(--t+e)%e:"Home"===o?r=0:"End"===o&&(r=e-1);var c=E[r];c&&(F(c.button),h(">"+r),G(n,!0))}function C(){return e.paginationDirection||e.direction}function L(t){return E[v.toPage(t)]}function _(){var t=L(g(!0)),n=L(g());if(t){var e=t.button;$(e,yn),I(e,Xt),z(e,jt,-1)}if(n){var o=n.button;x(o,yn),z(o,Xt,!0),z(o,jt,"")}l("pagination:updated",{list:c,items:E},t,n)}return{items:E,mount:function n(){w(),a([yt,ht,Pt],n);var o=e.pagination;b&&q(b,o?"":"none"),o&&(a([vt,wt,xt],_),function(){var n=t.length,o=e.classes,i=e.i18n,u=e.perPage,a=m()?v.getEnd()+1:et(n/u);x(c=b||O("ul",o.pagination,p.track.parentElement),s=fn+"--"+C()),z(c,Ft,"tablist"),z(c,Gt,i.select),z(c,$t,C()===Nt?"vertical":"");for(var l=0;l<a;l++){var g=O("li",null,c),h=O("button",{class:o.page,type:"button"},g),y=f.getIn(l).map((function(t){return t.slide.id})),w=!m()&&u>1?i.pageX:i.slideX;d(h,"click",r(S,l)),e.paginationKeyboard&&d(h,"keydown",r(k,l)),z(g,Ft,"presentation"),z(h,Ft,"tab"),z(h,Bt,y.join(" ")),z(h,Gt,ut(w,l+1)),z(h,jt,-1),E.push({li:g,button:h,page:l})}}(),_(),l("pagination:mounted",{list:c,items:E},L(t.index)))},destroy:w,getAt:L,update:_}},Sync:function(t,n,e){var i=e.isNavigation,c=e.slideFocus,s=[];function u(){var n,e;t.splides.forEach((function(n){n.isParent||(l(t,n.splide),l(n.splide,t))})),i&&((e=(n=At(t)).on)(gt,f),e("sk",p),e([ft,yt],d),s.push(n),n.emit(kt,t.splides))}function a(){s.forEach((function(t){t.destroy()})),o(s)}function l(t,n){var e=At(t);e.on(vt,(function(t,e,o){n.go(n.is(Dn)?o:t)})),s.push(e)}function d(){z(n.Elements.list,$t,e.direction===Nt?"vertical":"")}function f(n){t.go(n.index)}function p(t,n){b(Bn,Nn(n))&&(f(t),G(n))}return{setup:r(n.Media.set,{slideFocus:v(c)?i:c},!0),mount:u,destroy:a,remount:function(){a(),u()}}},Wheel:function(t,n,e){var o=At(t).bind,i=0;function r(o){if(o.cancelable){var r=o.deltaY,c=r<0,s=U(o),u=e.wheelMinThreshold||0,a=e.wheelSleep||0;ot(r)>u&&s-i>a&&(t.go(c?"<":">"),i=s),function(o){return!e.releaseWheel||t.state.is(4)||-1!==n.Controller.getAdjacent(o)}(c)&&G(o)}}return{mount:function(){e.wheel&&o(n.Elements.track,"wheel",r,zn)}}},Live:function(t,n,e){var o=At(t).on,i=n.Elements.track,c=e.live&&!e.isNavigation,s=O("span",gn),u=Mt(90,r(a,!1));function a(t){z(i,Kt,t),t?(S(i,s),u.start()):(W(s),u.cancel())}function l(t){c&&z(i,Jt,t?"off":"polite")}return{mount:function(){c&&(l(!n.Autoplay.isPaused()),z(i,Vt,!0),s.textContent="…",o(Ct,r(l,!0)),o(Lt,r(l,!1)),o([mt,xt],r(a,!0)))},disable:l,destroy:function(){I(i,[Jt,Vt,Kt]),W(s)}}}}),Xn={type:"slide",role:"region",speed:400,perPage:1,cloneStatus:!0,arrows:!0,pagination:!0,paginationKeyboard:!0,interval:5e3,pauseOnHover:!0,pauseOnFocus:!0,resetProgress:!0,easing:"cubic-bezier(0.25, 1, 0.5, 1)",drag:!0,direction:"ltr",trimSpace:!0,focusableNodes:"a, button, textarea, input, select, iframe",live:!0,classes:Ln,i18n:{prev:"Previous slide",next:"Next slide",first:"Go to first slide",last:"Go to last slide",slideX:"Go to slide %s",pageX:"Go to page %s",play:"Start autoplay",pause:"Pause autoplay",carousel:"carousel",slide:"slide",select:"Select a slide to show",slideLabel:"%s of %s"},reducedMotion:{speed:0,rewindSpeed:0,autoplay:"pause"}};function Gn(t,n,e){var o=n.Slides;function i(){o.forEach((function(t){t.style("transform","translateX(-"+100*t.index+"%)")}))}return{mount:function(){At(t).on([ft,ht],i)},start:function(t,n){o.style("transition","opacity "+e.speed+"ms "+e.easing),c(n)},cancel:s}}function Hn(t,n,e){var o,i=n.Move,c=n.Controller,s=n.Scroll,u=n.Elements.list,a=r(N,u,"transition");function l(){a(""),s.cancel()}return{mount:function(){At(t).bind(u,"transitionend",(function(t){t.target===u&&o&&(l(),o())}))},start:function(n,r){var u=i.toPosition(n,!0),l=i.getPosition(),d=function(n){var o=e.rewindSpeed;if(t.is(Mn)&&o){var i=c.getIndex(!0),r=c.getEnd();if(0===i&&n>=r||i>=r&&0===n)return o}return e.speed}(n);ot(u-l)>=1&&d>=1?e.useScroll?s.scroll(u,d,!1,r):(a("transform "+d+"ms "+e.easing),i.translate(u,!0),o=r):(i.jump(n),r())},cancel:l}}var Yn=function(){function t(n,e){var o;this.event=At(),this.Components={},this.state=(o=1,{set:function(t){o=t},is:function(t){return b(h(t),o)}}),this.splides=[],this._o={},this._E={};var i=p(n)?H(document,n):n;Q(i,i+" is invalid."),this.root=i,e=D({label:j(i,Gt)||"",labelledby:j(i,Ht)||""},Xn,t.defaults,e||{});try{D(e,JSON.parse(j(i,V)))}catch(t){Q(!1,"Invalid JSON")}this._o=Object.create(D({},e))}var e,r,c=t.prototype;return c.mount=function(t,n){var e=this,o=this.state,i=this.Components;return Q(o.is([1,7]),"Already mounted!"),o.set(1),this._C=i,this._T=n||this._T||(this.is(Tn)?Gn:Hn),this._E=t||this._E,A(M({},Wn,this._E,{Transition:this._T}),(function(t,n){var o=t(e,i,e._o);i[n]=o,o.setup&&o.setup()})),A(i,(function(t){t.mount&&t.mount()})),this.emit(ft),x(this.root,hn),o.set(3),this.emit(pt),this},c.sync=function(t){return this.splides.push({splide:t}),t.splides.push({splide:this,isParent:!0}),this.state.is(3)&&(this._C.Sync.remount(),t.Components.Sync.remount()),this},c.go=function(t){return this._C.Controller.go(t),this},c.on=function(t,n){return this.event.on(t,n),this},c.off=function(t){return this.event.off(t),this},c.emit=function(t){var n;return(n=this.event).emit.apply(n,[t].concat(i(arguments,1))),this},c.add=function(t,n){return this._C.Slides.add(t,n),this},c.remove=function(t){return this._C.Slides.remove(t),this},c.is=function(t){return this._o.type===t},c.refresh=function(){return this.emit(ht),this},c.destroy=function(t){void 0===t&&(t=!0);var n=this.event,e=this.state;return e.is(1)?At(this).on(pt,this.destroy.bind(this,t)):(A(this._C,(function(n){n.destroy&&n.destroy(t)}),!0),n.emit(St),n.destroy(),t&&o(this.splides),e.set(7)),this},e=t,(r=[{key:"options",get:function(){return this._o},set:function(t){this._C.Media.set(t,!0,!0)}},{key:"length",get:function(){return this._C.Slides.getLength(!0)}},{key:"index",get:function(){return this._C.Controller.getIndex()}}])&&n(e.prototype,r),Object.defineProperty(e,"prototype",{writable:!1}),t}();Yn.defaults={},Yn.STATES={CREATED:1,MOUNTED:2,IDLE:3,MOVING:4,SCROLLING:5,DRAGGING:6,DESTROYED:7};const $n=(t,n,e,o,i)=>{const r=document.querySelector(n),c=new Yn(t,{pagination:!1,arrows:!1,type:"loop",perPage:i,gap:10,breakpoints:{576:{perPage:1,gap:0}}}).mount();r.addEventListener("click",(t=>{t.target.closest(e)&&c.go("-1"),t.target.closest(o)&&c.go("+1")}))},Un=t=>{const n=document.querySelector(t),e=/^[а-яА-ЯёЁa-zA-Z\s]+$/,o=/^\+?\d{1,16}$/,i=(t,n)=>t.test(n.value.trim()),r=(t,n)=>{t.style.border=n?"2px solid green":"2px solid red",t.classList.toggle("success",n)};n.addEventListener("blur",(t=>{const n=t.target;n.matches("input[placeholder='ваше имя']")&&r(n,i(e,n)),n.matches("input[placeholder='ваш телефон']")&&r(n,i(o,n))}),!0)},Jn=({timing:t,draw:n,duration:e})=>{const o=performance.now();requestAnimationFrame((function i(r){let c=(r-o)/e;c>1&&(c=1);const s=t(c);n(s),c<1&&requestAnimationFrame(i)}))},Kn=({formSelector:t,additionalElem:n=[]})=>{const e=document.querySelector(t),o=document.createElement("p");let i=!0;const r=()=>{const t=document.createElement("div");t.style.cssText="\n      width: 40px;\n      height: 40px;\n      margin: auto;\n      background-image: linear-gradient(to bottom, #ffb336, #ff8a17);\n      border-radius: 50%;\n      transform: translate(-50%, -50%) scale(0);\n    ",o.innerHTML="",o.append(t),Jn({duration:2e3,timing:t=>t,draw(n){t.style.transform=n<.5?`scale(${2*n})`:`scale(${1-2*(n-.5)})`,1===n&&i&&r()}})};try{if(!e)throw new Error("Форма сбежала :(");e.addEventListener("submit",(t=>{t.preventDefault(),(()=>{const t=e.querySelectorAll("input"),c=new FormData(e),s={};r(),e.insertAdjacentElement("beforeend",o),o.style.fontWeight="bold",o.style.textAlign="center",o.style.marginTop="10px",o.style.marginBottom="-25px",c.forEach(((t,n)=>{s[n]=t})),n.forEach((t=>{const n=document.getElementById(t.id);n&&("block"===t.type?s[t.id]=n.textContent:"input"===t.type&&(s[t.id]=n.value))})),(t=>{let n=!0;return t.forEach((t=>{"hidden"===t.type||t.classList.contains("success")||(n=!1)})),n})(t)?(async t=>{const n=await fetch("https://jsonplaceholder.typicode.com/posts",{method:"POST",body:JSON.stringify(t),headers:{"Content-Type":"application/json"}});return await n.json()})(s).then((()=>{var n;o.textContent="Спасибо! Наш менеджер с вами свяжется.",o.style.color="green",t.forEach((t=>{t.value="",t.style.border="",t.classList.remove("success")})),i=!1,n=o,setTimeout((()=>{n.textContent=""}),3e3)})).catch((t=>{o.textContent="Ошибка при отправке данных",o.style.color="red",console.log(t.message),i=!1})):(o.textContent="Данные не валидны",o.style.color="red",t.forEach((t=>{t.style.border="2px solid red"})),i=!1)})()}))}catch(t){console.log(t.message)}};t(".header-modal",".overlay",".open-btn-call",".header-modal__close"),t(".services-modal",".overlay",".service-button",".services-modal__close"),$n(".benefits-inner--splide",".benefits-arrows",".benefits__arrow--left",".benefits__arrow--right",3),$n(".services-block--splide",".services-arrows",".services__arrow--left",".services__arrow--right",2),(()=>{const t=document.querySelector(".count_1 span"),n=document.querySelector(".count_2 span"),e=document.querySelector(".count_3 span"),o=document.querySelector(".count_4 span");let i;const r=t=>t<10?"0"+t:t,c=()=>{const c=(()=>{const t=(new Date("30 April 2025").getTime()-(new Date).getTime())/1e3;return{timeRemaining:t,days:Math.floor(t/60/60/24),hours:Math.floor(t/60/60%24),minutes:Math.floor(t/60%60),seconds:Math.floor(t%60)}})();t.textContent=r(c.days),n.textContent=r(c.hours),e.textContent=r(c.minutes),o.textContent=r(c.seconds),c.timeRemaining<0&&(clearInterval(i),t.textContent="00",n.textContent="00",e.textContent="00",o.textContent="00")};i=setInterval(c,1e3),c()})(),Un("[name=action-form]"),Un("[name=action-form2]"),Kn({formSelector:"[name=action-form]",additionalElem:[{type:"input",id:"calc-total"}]}),Kn({formSelector:"[name=action-form2]",additionalElem:[{type:"input",id:"calc-total"}]}),document.querySelectorAll(".sertificate-document").forEach((t=>{t.classList.add("document-inner"),t.addEventListener("click",(n=>{n.preventDefault();const e=document.createElement("div"),o=t.getAttribute("href");e.style.cssText=`\n      position: fixed;\n      top: 0;\n      left: 0;\n      width: 100%;\n      height: 100%;\n      background-color: rgba(0, 0, 0, 0.9);\n      background-image: url(${o});\n      background-size: contain;\n      background-repeat: no-repeat;\n      background-position: center;\n      `,document.body.append(e),document.documentElement.style.overflow="hidden",e.addEventListener("click",(()=>{e.remove(),document.documentElement.style.overflow=""}))}))})),(()=>{const t=document.querySelector(".smooth-scroll");t.style.display="none",document.addEventListener("scroll",(()=>{const n=document.documentElement.scrollTop>700;t.style.display=n?"":"none",t.style.cursor=n?"pointer":""}))})(),document.querySelector(".smooth-scroll").addEventListener("click",(()=>{Jn({duration:1500,timing:t=>1-Math.sin(Math.acos(t)),draw(t){const n=document.documentElement.scrollTop;document.documentElement.scrollTop=n-t*n}})})),((t=1e4)=>{const n=document.getElementById("calc"),e=document.getElementById("calc-type"),o=document.getElementById("calc-type-material"),i=document.getElementById("calc-input"),r=document.getElementById("calc-total");n&&n.addEventListener("input",(n=>{n.target!==e&&n.target!==i&&n.target!==o||(()=>{const n=+e.options[e.selectedIndex].value,c=+o.options[o.selectedIndex].value,s=i.value;let u;n&&s?(c?u=t*n*s*c:c||(u=t*n*s),r.value=u):r.value=""})()}))})(1e4)})();