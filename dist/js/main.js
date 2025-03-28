/*! For license information please see main.js.LICENSE.txt */
(()=>{"use strict";const t=(t,n,e)=>{const i=document.querySelector(".overlay"),o=document.querySelector(t),r=()=>{i.style.display="",o.style.display="",document.body.style.overflow=""};document.addEventListener("click",(s=>{s.target.closest(n)?(i.style.display="block",o.style.display="block",document.body.style.overflow="hidden"):s.target.closest(t)&&!s.target.closest(e)||r()})),document.addEventListener("keydown",(t=>{"Escape"===t.key&&r()}))};function n(t,n){for(var e=0;e<n.length;e++){var i=n[e];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}var e="(prefers-reduced-motion: reduce)";function i(t){t.length=0}function o(t,n,e){return Array.prototype.slice.call(t,n,e)}function r(t){return t.bind.apply(t,[null].concat(o(arguments,1)))}var s=setTimeout,u=function(){};function c(t){return requestAnimationFrame(t)}function a(t,n){return typeof n===t}function l(t){return!m(t)&&a("object",t)}var d=Array.isArray,f=r(a,"function"),p=r(a,"string"),v=r(a,"undefined");function m(t){return null===t}function g(t){try{return t instanceof(t.ownerDocument.defaultView||window).HTMLElement}catch(t){return!1}}function h(t){return d(t)?t:[t]}function y(t,n){h(t).forEach(n)}function b(t,n){return t.indexOf(n)>-1}function w(t,n){return t.push.apply(t,h(n)),t}function E(t,n,e){t&&y(n,(function(n){n&&t.classList[e?"add":"remove"](n)}))}function x(t,n){E(t,p(n)?n.split(" "):n,!0)}function S(t,n){y(n,t.appendChild.bind(t))}function k(t,n){y(t,(function(t){var e=(n||t).parentNode;e&&e.insertBefore(t,n)}))}function C(t,n){return g(t)&&(t.msMatchesSelector||t.matches).call(t,n)}function _(t,n){var e=t?o(t.children):[];return n?e.filter((function(t){return C(t,n)})):e}function L(t,n){return n?_(t,n)[0]:t.firstElementChild}var P=Object.keys;function A(t,n,e){return t&&(e?P(t).reverse():P(t)).forEach((function(e){"__proto__"!==e&&n(t[e],e)})),t}function D(t){return o(arguments,1).forEach((function(n){A(n,(function(e,i){t[i]=n[i]}))})),t}function M(t){return o(arguments,1).forEach((function(n){A(n,(function(n,e){d(n)?t[e]=n.slice():l(n)?t[e]=M({},l(t[e])?t[e]:{},n):t[e]=n}))})),t}function T(t,n){y(n||P(t),(function(n){delete t[n]}))}function z(t,n){y(t,(function(t){y(n,(function(n){t&&t.removeAttribute(n)}))}))}function O(t,n,e){l(n)?A(n,(function(n,e){O(t,e,n)})):y(t,(function(t){m(e)||""===e?z(t,n):t.setAttribute(n,String(e))}))}function N(t,n,e){var i=document.createElement(t);return n&&(p(n)?x(i,n):O(i,n)),e&&S(e,i),i}function I(t,n,e){if(v(e))return getComputedStyle(t)[n];m(e)||(t.style[n]=""+e)}function F(t,n){I(t,"display",n)}function j(t){t.setActive&&t.setActive()||t.focus({preventScroll:!0})}function q(t,n){return t.getAttribute(n)}function R(t,n){return t&&t.classList.contains(n)}function W(t){return t.getBoundingClientRect()}function X(t){y(t,(function(t){t&&t.parentNode&&t.parentNode.removeChild(t)}))}function G(t){return L((new DOMParser).parseFromString(t,"text/html").body)}function B(t,n){t.preventDefault(),n&&(t.stopPropagation(),t.stopImmediatePropagation())}function H(t,n){return t&&t.querySelector(n)}function Y(t,n){return n?o(t.querySelectorAll(n)):[]}function $(t,n){E(t,n,!1)}function U(t){return t.timeStamp}function J(t){return p(t)?t:t?t+"px":""}var K="splide",V="data-"+K;function Q(t,n){if(!t)throw new Error("["+K+"] "+(n||""))}var Z=Math.min,tt=Math.max,nt=Math.floor,et=Math.ceil,it=Math.abs;function ot(t,n,e){return it(t-n)<e}function rt(t,n,e,i){var o=Z(n,e),r=tt(n,e);return i?o<t&&t<r:o<=t&&t<=r}function st(t,n,e){var i=Z(n,e),o=tt(n,e);return Z(tt(i,t),o)}function ut(t){return+(t>0)-+(t<0)}function ct(t,n){return y(n,(function(n){t=t.replace("%s",""+n)})),t}function at(t){return t<10?"0"+t:""+t}var lt={};function dt(){var t=[];function n(t,n,e){y(t,(function(t){t&&y(n,(function(n){n.split(" ").forEach((function(n){var i=n.split(".");e(t,i[0],i[1])}))}))}))}return{bind:function(e,i,o,r){n(e,i,(function(n,e,i){var s="addEventListener"in n,u=s?n.removeEventListener.bind(n,e,o,r):n.removeListener.bind(n,o);s?n.addEventListener(e,o,r):n.addListener(o),t.push([n,e,i,o,u])}))},unbind:function(e,i,o){n(e,i,(function(n,e,i){t=t.filter((function(t){return!!(t[0]!==n||t[1]!==e||t[2]!==i||o&&t[3]!==o)||(t[4](),!1)}))}))},dispatch:function(t,n,e){var i,o=!0;return"function"==typeof CustomEvent?i=new CustomEvent(n,{bubbles:o,detail:e}):(i=document.createEvent("CustomEvent")).initCustomEvent(n,o,!1,e),t.dispatchEvent(i),i},destroy:function(){t.forEach((function(t){t[4]()})),i(t)}}}var ft="mounted",pt="ready",vt="move",mt="moved",gt="click",ht="refresh",yt="updated",bt="resize",wt="resized",Et="scroll",xt="scrolled",St="destroy",kt="navigation:mounted",Ct="autoplay:play",_t="autoplay:pause",Lt="lazyload:loaded",Pt="ei";function At(t){var n=t?t.event.bus:document.createDocumentFragment(),e=dt();return t&&t.event.on(St,e.destroy),D(e,{bus:n,on:function(t,i){e.bind(n,h(t).join(" "),(function(t){i.apply(i,d(t.detail)?t.detail:[])}))},off:r(e.unbind,n),emit:function(t){e.dispatch(n,t,o(arguments,1))}})}function Dt(t,n,e,i){var o,r,s=Date.now,u=0,a=!0,l=0;function d(){if(!a){if(u=t?Z((s()-o)/t,1):1,e&&e(u),u>=1&&(n(),o=s(),i&&++l>=i))return f();r=c(d)}}function f(){a=!0}function p(){r&&cancelAnimationFrame(r),u=0,r=0,a=!0}return{start:function(n){n||p(),o=s()-(n?u*t:0),a=!1,r=c(d)},rewind:function(){o=s(),u=0,e&&e(u)},pause:f,cancel:p,set:function(n){t=n},isPaused:function(){return a}}}var Mt="Arrow",Tt=Mt+"Left",zt=Mt+"Right",Ot=Mt+"Up",Nt=Mt+"Down",It="ttb",Ft={width:["height"],left:["top","right"],right:["bottom","left"],x:["y"],X:["Y"],Y:["X"],ArrowLeft:[Ot,zt],ArrowRight:[Nt,Tt]};var jt="role",qt="tabindex",Rt="aria-",Wt=Rt+"controls",Xt=Rt+"current",Gt=Rt+"selected",Bt=Rt+"label",Ht=Rt+"labelledby",Yt=Rt+"hidden",$t=Rt+"orientation",Ut=Rt+"roledescription",Jt=Rt+"live",Kt=Rt+"busy",Vt=Rt+"atomic",Qt=[jt,qt,"disabled",Wt,Xt,Bt,Ht,Yt,$t,Ut],Zt=K+"__",tn="is-",nn=K,en=Zt+"track",on=Zt+"list",rn=Zt+"slide",sn=rn+"--clone",un=rn+"__container",cn=Zt+"arrows",an=Zt+"arrow",ln=an+"--prev",dn=an+"--next",fn=Zt+"pagination",pn=fn+"__page",vn=Zt+"progress__bar",mn=Zt+"toggle",gn=Zt+"sr",hn=tn+"initialized",yn=tn+"active",bn=tn+"prev",wn=tn+"next",En=tn+"visible",xn=tn+"loading",Sn=tn+"focus-in",kn=tn+"overflow",Cn=[yn,En,bn,wn,xn,Sn,kn],_n={slide:rn,clone:sn,arrows:cn,arrow:an,prev:ln,next:dn,pagination:fn,page:pn,spinner:Zt+"spinner"},Ln="touchstart mousedown",Pn="touchmove mousemove",An="touchend touchcancel mouseup click",Dn="slide",Mn="loop",Tn="fade";var zn=V+"-interval",On={passive:!1,capture:!0},Nn={Spacebar:" ",Right:zt,Left:Tt,Up:Ot,Down:Nt};function In(t){return t=p(t)?t:t.key,Nn[t]||t}var Fn="keydown",jn=V+"-lazy",qn=jn+"-srcset",Rn="["+jn+"], ["+qn+"]",Wn=[" ","Enter"],Xn=Object.freeze({__proto__:null,Media:function(t,n,i){var o=t.state,r=i.breakpoints||{},s=i.reducedMotion||{},u=dt(),c=[];function a(t){t&&u.destroy()}function l(t,n){var e=matchMedia(n);u.bind(e,"change",d),c.push([t,e])}function d(){var n=o.is(7),e=i.direction,r=c.reduce((function(t,n){return M(t,n[1].matches?n[0]:{})}),{});T(i),f(r),i.destroy?t.destroy("completely"===i.destroy):n?(a(!0),t.mount()):e!==i.direction&&t.refresh()}function f(n,e,r){M(i,n),e&&M(Object.getPrototypeOf(i),n),!r&&o.is(1)||t.emit(yt,i)}return{setup:function(){var t="min"===i.mediaQuery;P(r).sort((function(n,e){return t?+n-+e:+e-+n})).forEach((function(n){l(r[n],"("+(t?"min":"max")+"-width:"+n+"px)")})),l(s,e),d()},destroy:a,reduce:function(t){matchMedia(e).matches&&(t?M(i,s):T(i,P(s)))},set:f}},Direction:function(t,n,e){return{resolve:function(t,n,i){var o="rtl"!==(i=i||e.direction)||n?i===It?0:-1:1;return Ft[t]&&Ft[t][o]||t.replace(/width|left|right/i,(function(t,n){var e=Ft[t.toLowerCase()][o]||t;return n>0?e.charAt(0).toUpperCase()+e.slice(1):e}))},orient:function(t){return t*("rtl"===e.direction?1:-1)}}},Elements:function(t,n,e){var o,r,s,u=At(t),c=u.on,a=u.bind,l=t.root,d=e.i18n,p={},v=[],m=[],g=[];function h(){var t,n,i;o=S("."+en),r=L(o,"."+on),Q(o&&r,"A track/list element is missing."),w(v,_(r,"."+rn+":not(."+sn+")")),A({arrows:cn,pagination:fn,prev:ln,next:dn,bar:vn,toggle:mn},(function(t,n){p[n]=S("."+t)})),D(p,{root:l,track:o,list:r,slides:v}),n=l.id||""+(t=K)+at(lt[t]=(lt[t]||0)+1),i=e.role,l.id=n,o.id=o.id||n+"-track",r.id=r.id||n+"-list",!q(l,jt)&&"SECTION"!==l.tagName&&i&&O(l,jt,i),O(l,Ut,d.carousel),O(r,jt,"presentation"),b()}function y(t){var n=Qt.concat("style");i(v),$(l,m),$(o,g),z([o,r],n),z(l,t?n:["style",Ut])}function b(){$(l,m),$(o,g),m=k(nn),g=k(en),x(l,m),x(o,g),O(l,Bt,e.label),O(l,Ht,e.labelledby)}function S(t){var n=H(l,t);return n&&function(t,n){if(f(t.closest))return t.closest(n);for(var e=t;e&&1===e.nodeType&&!C(e,n);)e=e.parentElement;return e}(n,"."+nn)===l?n:void 0}function k(t){return[t+"--"+e.type,t+"--"+e.direction,e.drag&&t+"--draggable",e.isNavigation&&t+"--nav",t===nn&&yn]}return D(p,{setup:h,mount:function(){c(ht,y),c(ht,h),c(yt,b),a(document,Ln+" keydown",(function(t){s="keydown"===t.type}),{capture:!0}),a(l,"focusin",(function(){E(l,Sn,!!s)}))},destroy:y})},Slides:function(t,n,e){var o=At(t),s=o.on,u=o.emit,c=o.bind,a=n.Elements,l=a.slides,d=a.list,v=[];function m(){l.forEach((function(t,n){_(t,n,-1)}))}function w(){A((function(t){t.destroy()})),i(v)}function _(n,e,i){var o=function(t,n,e,i){var o,s=At(t),u=s.on,c=s.emit,a=s.bind,l=t.Components,d=t.root,f=t.options,p=f.isNavigation,v=f.updateOnMove,m=f.i18n,g=f.pagination,h=f.slideFocus,y=l.Direction.resolve,b=q(i,"style"),w=q(i,Bt),x=e>-1,S=L(i,"."+un);function k(){var o=t.splides.map((function(t){var e=t.splide.Components.Slides.getAt(n);return e?e.slide.id:""})).join(" ");O(i,Bt,ct(m.slideX,(x?e:n)+1)),O(i,Wt,o),O(i,jt,h?"button":""),h&&z(i,Ut)}function C(){o||_()}function _(){if(!o){var e=t.index;(r=P())!==R(i,yn)&&(E(i,yn,r),O(i,Xt,p&&r||""),c(r?"active":"inactive",A)),function(){var n=function(){if(t.is(Tn))return P();var n=W(l.Elements.track),e=W(i),o=y("left",!0),r=y("right",!0);return nt(n[o])<=et(e[o])&&nt(e[r])<=et(n[r])}(),e=!n&&(!P()||x);if(t.state.is([4,5])||O(i,Yt,e||""),O(Y(i,f.focusableNodes||""),qt,e?-1:""),h&&O(i,qt,e?-1:0),n!==R(i,En)&&(E(i,En,n),c(n?"visible":"hidden",A)),!n&&document.activeElement===i){var o=l.Slides.getAt(t.index);o&&j(o.slide)}}(),E(i,bn,n===e-1),E(i,wn,n===e+1)}var r}function P(){var i=t.index;return i===n||f.cloneStatus&&i===e}var A={index:n,slideIndex:e,slide:i,container:S,isClone:x,mount:function(){x||(i.id=d.id+"-slide"+at(n+1),O(i,jt,g?"tabpanel":"group"),O(i,Ut,m.slide),O(i,Bt,w||ct(m.slideLabel,[n+1,t.length]))),a(i,"click",r(c,gt,A)),a(i,"keydown",r(c,"sk",A)),u([mt,"sh",xt],_),u(kt,k),v&&u(vt,C)},destroy:function(){o=!0,s.destroy(),$(i,Cn),z(i,Qt),O(i,"style",b),O(i,Bt,w||"")},update:_,style:function(t,n,e){I(e&&S||i,t,n)},isWithin:function(e,i){var o=it(e-n);return x||!f.rewind&&!t.is(Mn)||(o=Z(o,t.length-o)),o<=i}};return A}(t,e,i,n);o.mount(),v.push(o),v.sort((function(t,n){return t.index-n.index}))}function P(t){return t?D((function(t){return!t.isClone})):v}function A(t,n){P(n).forEach(t)}function D(t){return v.filter(f(t)?t:function(n){return p(t)?C(n.slide,t):b(h(t),n.index)})}return{mount:function(){m(),s(ht,w),s(ht,m)},destroy:w,update:function(){A((function(t){t.update()}))},register:_,get:P,getIn:function(t){var i=n.Controller,o=i.toIndex(t),r=i.hasFocus()?1:e.perPage;return D((function(t){return rt(t.index,o,o+r-1)}))},getAt:function(t){return D(t)[0]},add:function(t,n){y(t,(function(t){if(p(t)&&(t=G(t)),g(t)){var i=l[n];i?k(t,i):S(d,t),x(t,e.classes.slide),o=t,s=r(u,bt),a=Y(o,"img"),(f=a.length)?a.forEach((function(t){c(t,"load error",(function(){--f||s()}))})):s()}var o,s,a,f})),u(ht)},remove:function(t){X(D(t).map((function(t){return t.slide}))),u(ht)},forEach:A,filter:D,style:function(t,n,e){A((function(i){i.style(t,n,e)}))},getLength:function(t){return t?l.length:v.length},isEnough:function(){return v.length>e.perPage}}},Layout:function(t,n,e){var i,o,s,u=At(t),c=u.on,a=u.bind,d=u.emit,f=n.Slides,p=n.Direction.resolve,v=n.Elements,m=v.root,g=v.track,h=v.list,y=f.getAt,b=f.style;function w(){i=e.direction===It,I(m,"maxWidth",J(e.width)),I(g,p("paddingLeft"),S(!1)),I(g,p("paddingRight"),S(!0)),x(!0)}function x(t){var n,r=W(m);(t||o.width!==r.width||o.height!==r.height)&&(I(g,"height",(n="",i&&(Q(n=k(),"height or heightRatio is missing."),n="calc("+n+" - "+S(!1)+" - "+S(!0)+")"),n)),b(p("marginRight"),J(e.gap)),b("width",e.autoWidth?null:J(e.fixedWidth)||(i?"":C())),b("height",J(e.fixedHeight)||(i?e.autoHeight?null:C():k()),!0),o=r,d(wt),s!==(s=M())&&(E(m,kn,s),d("overflow",s)))}function S(t){var n=e.padding,i=p(t?"right":"left");return n&&J(n[i]||(l(n)?0:n))||"0px"}function k(){return J(e.height||W(h).width*e.heightRatio)}function C(){var t=J(e.gap);return"calc((100%"+(t&&" + "+t)+")/"+(e.perPage||1)+(t&&" - "+t)+")"}function _(){return W(h)[p("width")]}function L(t,n){var e=y(t||0);return e?W(e.slide)[p("width")]+(n?0:D()):0}function P(t,n){var e=y(t);if(e){var i=W(e.slide)[p("right")],o=W(h)[p("left")];return it(i-o)+(n?0:D())}return 0}function A(n){return P(t.length-1)-P(0)+L(0,n)}function D(){var t=y(0);return t&&parseFloat(I(t.slide,p("marginRight")))||0}function M(){return t.is(Tn)||A(!0)>_()}return{mount:function(){var t,n;w(),a(window,"resize load",(t=r(d,bt),n=Dt(0,t,null,1),function(){n.isPaused()&&n.start()})),c([yt,ht],w),c(bt,x)},resize:x,listSize:_,slideSize:L,sliderSize:A,totalSize:P,getPadding:function(t){return parseFloat(I(g,p("padding"+(t?"Right":"Left"))))||0},isOverflow:M}},Clones:function(t,n,e){var o,r=At(t),s=r.on,u=n.Elements,c=n.Slides,a=n.Direction.resolve,l=[];function d(){s(ht,f),s([yt,bt],m),(o=g())&&(function(n){var i=c.get().slice(),o=i.length;if(o){for(;i.length<n;)w(i,i);w(i.slice(-n),i.slice(0,n)).forEach((function(r,s){var a=s<n,d=function(n,i){var o=n.cloneNode(!0);return x(o,e.classes.clone),o.id=t.root.id+"-clone"+at(i+1),o}(r.slide,s);a?k(d,i[0].slide):S(u.list,d),w(l,d),c.register(d,s-n+(a?0:o),r.index)}))}}(o),n.Layout.resize(!0))}function f(){p(),d()}function p(){X(l),i(l),r.destroy()}function m(){var t=g();o!==t&&(o<t||!t)&&r.emit(ht)}function g(){var i=e.clones;if(t.is(Mn)){if(v(i)){var o=e[a("fixedWidth")]&&n.Layout.slideSize(0);i=o&&et(W(u.track)[a("width")]/o)||e[a("autoWidth")]&&t.length||2*e.perPage}}else i=0;return i}return{mount:d,destroy:p}},Move:function(t,n,e){var i,o=At(t),r=o.on,s=o.emit,u=t.state.set,c=n.Layout,a=c.slideSize,l=c.getPadding,d=c.totalSize,f=c.listSize,p=c.sliderSize,m=n.Direction,g=m.resolve,h=m.orient,y=n.Elements,b=y.list,w=y.track;function E(){n.Controller.isBusy()||(n.Scroll.cancel(),x(t.index),n.Slides.update())}function x(t){S(L(t,!0))}function S(e,i){if(!t.is(Tn)){var o=i?e:function(e){if(t.is(Mn)){var i=_(e),o=i>n.Controller.getEnd();(i<0||o)&&(e=k(e,o))}return e}(e);I(b,"transform","translate"+g("X")+"("+o+"px)"),e!==o&&s("sh")}}function k(t,n){var e=t-A(n),i=p();return t-h(i*(et(it(e)/i)||1))*(n?1:-1)}function C(){S(P(),!0),i.cancel()}function _(t){for(var e=n.Slides.get(),i=0,o=1/0,r=0;r<e.length;r++){var s=e[r].index,u=it(L(s,!0)-t);if(!(u<=o))break;o=u,i=s}return i}function L(n,i){var o=h(d(n-1)-function(t){var n=e.focus;return"center"===n?(f()-a(t,!0))/2:+n*a(t)||0}(n));return i?function(n){return e.trimSpace&&t.is(Dn)&&(n=st(n,0,h(p(!0)-f()))),n}(o):o}function P(){var t=g("left");return W(b)[t]-W(w)[t]+h(l(!1))}function A(t){return L(t?n.Controller.getEnd():0,!!e.trimSpace)}return{mount:function(){i=n.Transition,r([ft,wt,yt,ht],E)},move:function(t,n,e,o){var r,c;t!==n&&(r=t>e,c=h(k(P(),r)),r?c>=0:c<=b[g("scrollWidth")]-W(w)[g("width")])&&(C(),S(k(P(),t>e),!0)),u(4),s(vt,n,e,t),i.start(n,(function(){u(3),s(mt,n,e,t),o&&o()}))},jump:x,translate:S,shift:k,cancel:C,toIndex:_,toPosition:L,getPosition:P,getLimit:A,exceededLimit:function(t,n){n=v(n)?P():n;var e=!0!==t&&h(n)<h(A(!1)),i=!1!==t&&h(n)>h(A(!0));return e||i},reposition:E}},Controller:function(t,n,e){var i,o,s,u,c=At(t),a=c.on,l=c.emit,d=n.Move,f=d.getPosition,m=d.getLimit,g=d.toPosition,h=n.Slides,y=h.isEnough,b=h.getLength,w=e.omitEnd,E=t.is(Mn),x=t.is(Dn),S=r(A,!1),k=r(A,!0),C=e.start||0,_=C;function L(){o=b(!0),s=e.perMove,u=e.perPage,i=T();var t=st(C,0,w?i:o-1);t!==C&&(C=t,d.reposition())}function P(){i!==T()&&l(Pt)}function A(t,n){var e=s||(I()?1:u),o=D(C+e*(t?-1:1),C,!(s||I()));return-1===o&&x&&!ot(f(),m(!t),1)?t?0:i:n?o:M(o)}function D(n,r,c){if(y()||I()){var a=function(n){if(x&&"move"===e.trimSpace&&n!==C)for(var i=f();i===g(n,!0)&&rt(n,0,t.length-1,!e.rewind);)n<C?--n:++n;return n}(n);a!==n&&(r=n,n=a,c=!1),n<0||n>i?n=s||!rt(0,n,r,!0)&&!rt(i,r,n,!0)?E?c?n<0?-(o%u||u):o:n:e.rewind?n<0?i:0:-1:z(O(n)):c&&n!==r&&(n=z(O(r)+(n<r?-1:1)))}else n=-1;return n}function M(t){return E?(t+o)%o||0:t}function T(){for(var t=o-(I()||E&&s?1:u);w&&t-- >0;)if(g(o-1,!0)!==g(t,!0)){t++;break}return st(t,0,o-1)}function z(t){return st(I()?t:u*t,0,i)}function O(t){return I()?Z(t,i):nt((t>=i?o-1:t)/u)}function N(t){t!==C&&(_=C,C=t)}function I(){return!v(e.focus)||e.isNavigation}function F(){return t.state.is([4,5])&&!!e.waitForTransition}return{mount:function(){L(),a([yt,ht,Pt],L),a(wt,P)},go:function(t,n,e){if(!F()){var o=function(t){var n=C;if(p(t)){var e=t.match(/([+\-<>])(\d+)?/)||[],o=e[1],r=e[2];"+"===o||"-"===o?n=D(C+ +(""+o+(+r||1)),C):">"===o?n=r?z(+r):S(!0):"<"===o&&(n=k(!0))}else n=E?t:st(t,0,i);return n}(t),r=M(o);r>-1&&(n||r!==C)&&(N(r),d.move(o,r,_,e))}},scroll:function(t,e,o,r){n.Scroll.scroll(t,e,o,(function(){var t=M(d.toIndex(f()));N(w?Z(t,i):t),r&&r()}))},getNext:S,getPrev:k,getAdjacent:A,getEnd:T,setIndex:N,getIndex:function(t){return t?_:C},toIndex:z,toPage:O,toDest:function(t){var n=d.toIndex(t);return x?st(n,0,i):n},hasFocus:I,isBusy:F}},Arrows:function(t,n,e){var i,o,s=At(t),u=s.on,c=s.bind,a=s.emit,l=e.classes,d=e.i18n,f=n.Elements,p=n.Controller,v=f.arrows,m=f.track,g=v,h=f.prev,y=f.next,b={};function w(){var t;!(t=e.arrows)||h&&y||(g=v||N("div",l.arrows),h=L(!0),y=L(!1),i=!0,S(g,[h,y]),!v&&k(g,m)),h&&y&&(D(b,{prev:h,next:y}),F(g,t?"":"none"),x(g,o=cn+"--"+e.direction),t&&(u([ft,mt,ht,xt,Pt],P),c(y,"click",r(_,">")),c(h,"click",r(_,"<")),P(),O([h,y],Wt,m.id),a("arrows:mounted",h,y))),u(yt,E)}function E(){C(),w()}function C(){s.destroy(),$(g,o),i?(X(v?[h,y]:g),h=y=null):z([h,y],Qt)}function _(t){p.go(t,!0)}function L(t){return G('<button class="'+l.arrow+" "+(t?l.prev:l.next)+'" type="button"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40" width="40" height="40" focusable="false"><path d="'+(e.arrowPath||"m15.5 0.932-4.3 4.38 14.5 14.6-14.5 14.5 4.3 4.4 14.6-14.6 4.4-4.3-4.4-4.4-14.6-14.6z")+'" />')}function P(){if(h&&y){var n=t.index,e=p.getPrev(),i=p.getNext(),o=e>-1&&n<e?d.last:d.prev,r=i>-1&&n>i?d.first:d.next;h.disabled=e<0,y.disabled=i<0,O(h,Bt,o),O(y,Bt,r),a("arrows:updated",h,y,e,i)}}return{arrows:b,mount:w,destroy:C,update:P}},Autoplay:function(t,n,e){var i,o,r=At(t),s=r.on,u=r.bind,c=r.emit,a=Dt(e.interval,t.go.bind(t,">"),(function(t){var n=d.bar;n&&I(n,"width",100*t+"%"),c("autoplay:playing",t)})),l=a.isPaused,d=n.Elements,f=n.Elements,p=f.root,v=f.toggle,m=e.autoplay,g="pause"===m;function h(){l()&&n.Slides.isEnough()&&(a.start(!e.resetProgress),o=i=g=!1,w(),c(Ct))}function y(t){void 0===t&&(t=!0),g=!!t,w(),l()||(a.pause(),c(_t))}function b(){g||(i||o?y(!1):h())}function w(){v&&(E(v,yn,!g),O(v,Bt,e.i18n[g?"play":"pause"]))}function x(t){var i=n.Slides.getAt(t);a.set(i&&+q(i.slide,zn)||e.interval)}return{mount:function(){m&&(e.pauseOnHover&&u(p,"mouseenter mouseleave",(function(t){i="mouseenter"===t.type,b()})),e.pauseOnFocus&&u(p,"focusin focusout",(function(t){o="focusin"===t.type,b()})),v&&u(v,"click",(function(){g?h():y(!0)})),s([vt,Et,ht],a.rewind),s(vt,x),v&&O(v,Wt,d.track.id),g||h(),w())},destroy:a.cancel,play:h,pause:y,isPaused:l}},Cover:function(t,n,e){var i=At(t).on;function o(t){n.Slides.forEach((function(n){var e=L(n.container||n.slide,"img");e&&e.src&&s(t,e,n)}))}function s(t,n,e){e.style("background",t?'center/cover no-repeat url("'+n.src+'")':"",!0),F(n,t?"none":"")}return{mount:function(){e.cover&&(i(Lt,r(s,!0)),i([ft,yt,ht],r(o,!0)))},destroy:r(o,!1)}},Scroll:function(t,n,e){var i,o,s=At(t),u=s.on,c=s.emit,a=t.state.set,l=n.Move,d=l.getPosition,f=l.getLimit,p=l.exceededLimit,v=l.translate,m=t.is(Dn),g=1;function h(t,e,s,u,f){var v=d();if(w(),s&&(!m||!p())){var h=n.Layout.sliderSize(),E=ut(t)*h*nt(it(t)/h)||0;t=l.toPosition(n.Controller.toDest(t%h))+E}var x=ot(v,t,1);g=1,e=x?0:e||tt(it(t-v)/1.5,800),o=u,i=Dt(e,y,r(b,v,t,f),1),a(5),c(Et),i.start()}function y(){a(3),o&&o(),c(xt)}function b(t,n,i,r){var s,u,c=d(),a=(t+(n-t)*(s=r,(u=e.easingFunc)?u(s):1-Math.pow(1-s,4))-c)*g;v(c+a),m&&!i&&p()&&(g*=.6,it(a)<10&&h(f(p(!0)),600,!1,o,!0))}function w(){i&&i.cancel()}function E(){i&&!i.isPaused()&&(w(),y())}return{mount:function(){u(vt,w),u([yt,ht],E)},destroy:w,scroll:h,cancel:E}},Drag:function(t,n,e){var i,o,r,s,c,a,d,f,p=At(t),v=p.on,m=p.emit,g=p.bind,h=p.unbind,y=t.state,b=n.Move,w=n.Scroll,E=n.Controller,x=n.Elements.track,S=n.Media.reduce,k=n.Direction,_=k.resolve,L=k.orient,P=b.getPosition,A=b.exceededLimit,D=!1;function M(){var t=e.drag;X(!t),s="free"===t}function T(t){if(a=!1,!d){var n=W(t);i=t.target,o=e.noDrag,C(i,"."+pn+", ."+an)||o&&C(i,o)||!n&&t.button||(E.isBusy()?B(t,!0):(f=n?x:window,c=y.is([4,5]),r=null,g(f,Pn,z,On),g(f,An,O,On),b.cancel(),w.cancel(),I(t)))}var i,o}function z(n){if(y.is(6)||(y.set(6),m("drag")),n.cancelable)if(c){b.translate(i+F(n)/(D&&t.is(Dn)?5:1));var o=j(n)>200,r=D!==(D=A());(o||r)&&I(n),a=!0,m("dragging"),B(n)}else(function(t){return it(F(t))>it(F(t,!0))})(n)&&(c=function(t){var n=e.dragMinThreshold,i=l(n),o=i&&n.mouse||0,r=(i?n.touch:+n)||10;return it(F(t))>(W(t)?r:o)}(n),B(n))}function O(i){y.is(6)&&(y.set(3),m("dragged")),c&&(function(i){var o=function(n){if(t.is(Mn)||!D){var e=j(n);if(e&&e<200)return F(n)/e}return 0}(i),r=function(t){return P()+ut(t)*Z(it(t)*(e.flickPower||600),s?1/0:n.Layout.listSize()*(e.flickMaxPages||1))}(o),u=e.rewind&&e.rewindByDrag;S(!1),s?E.scroll(r,0,e.snap):t.is(Tn)?E.go(L(ut(o))<0?u?"<":"-":u?">":"+"):t.is(Dn)&&D&&u?E.go(A(!0)?">":"<"):E.go(E.toDest(r),!0),S(!0)}(i),B(i)),h(f,Pn,z),h(f,An,O),c=!1}function N(t){!d&&a&&B(t,!0)}function I(t){r=o,o=t,i=P()}function F(t,n){return R(t,n)-R(q(t),n)}function j(t){return U(t)-U(q(t))}function q(t){return o===t&&r||o}function R(t,n){return(W(t)?t.changedTouches[0]:t)["page"+_(n?"Y":"X")]}function W(t){return"undefined"!=typeof TouchEvent&&t instanceof TouchEvent}function X(t){d=t}return{mount:function(){g(x,Pn,u,On),g(x,An,u,On),g(x,Ln,T,On),g(x,"click",N,{capture:!0}),g(x,"dragstart",B),v([ft,yt],M)},disable:X,isDragging:function(){return c}}},Keyboard:function(t,n,e){var i,o,r=At(t),u=r.on,c=r.bind,a=r.unbind,l=t.root,d=n.Direction.resolve;function f(){var t=e.keyboard;t&&(i="global"===t?window:l,c(i,Fn,m))}function p(){a(i,Fn)}function v(){var t=o;o=!0,s((function(){o=t}))}function m(n){if(!o){var e=In(n);e===d(Tt)?t.go("<"):e===d(zt)&&t.go(">")}}return{mount:function(){f(),u(yt,p),u(yt,f),u(vt,v)},destroy:p,disable:function(t){o=t}}},LazyLoad:function(t,n,e){var o=At(t),s=o.on,u=o.off,c=o.bind,a=o.emit,l="sequential"===e.lazyLoad,d=[mt,xt],f=[];function p(){i(f),n.Slides.forEach((function(t){Y(t.slide,Rn).forEach((function(n){var i=q(n,jn),o=q(n,qn);if(i!==n.src||o!==n.srcset){var r=e.classes.spinner,s=n.parentElement,u=L(s,"."+r)||N("span",r,s);f.push([n,t,u]),n.src||F(n,"none")}}))})),l?h():(u(d),s(d,v),v())}function v(){(f=f.filter((function(n){var i=e.perPage*((e.preloadPages||1)+1)-1;return!n[1].isWithin(t.index,i)||m(n)}))).length||u(d)}function m(t){var n=t[0];x(t[1].slide,xn),c(n,"load error",r(g,t)),O(n,"src",q(n,jn)),O(n,"srcset",q(n,qn)),z(n,jn),z(n,qn)}function g(t,n){var e=t[0],i=t[1];$(i.slide,xn),"error"!==n.type&&(X(t[2]),F(e,""),a(Lt,e,i),a(bt)),l&&h()}function h(){f.length&&m(f.shift())}return{mount:function(){e.lazyLoad&&(p(),s(ht,p))},destroy:r(i,f),check:v}},Pagination:function(t,n,e){var s,u,c=At(t),a=c.on,l=c.emit,d=c.bind,f=n.Slides,p=n.Elements,v=n.Controller,m=v.hasFocus,g=v.getIndex,h=v.go,y=n.Direction.resolve,b=p.pagination,w=[];function E(){s&&(X(b?o(s.children):s),$(s,u),i(w),s=null),c.destroy()}function S(t){h(">"+t,!0)}function k(t,n){var e=w.length,i=In(n),o=C(),r=-1;i===y(zt,!1,o)?r=++t%e:i===y(Tt,!1,o)?r=(--t+e)%e:"Home"===i?r=0:"End"===i&&(r=e-1);var s=w[r];s&&(j(s.button),h(">"+r),B(n,!0))}function C(){return e.paginationDirection||e.direction}function _(t){return w[v.toPage(t)]}function L(){var t=_(g(!0)),n=_(g());if(t){var e=t.button;$(e,yn),z(e,Gt),O(e,qt,-1)}if(n){var i=n.button;x(i,yn),O(i,Gt,!0),O(i,qt,"")}l("pagination:updated",{list:s,items:w},t,n)}return{items:w,mount:function n(){E(),a([yt,ht,Pt],n);var i=e.pagination;b&&F(b,i?"":"none"),i&&(a([vt,Et,xt],L),function(){var n=t.length,i=e.classes,o=e.i18n,c=e.perPage,a=m()?v.getEnd()+1:et(n/c);x(s=b||N("ul",i.pagination,p.track.parentElement),u=fn+"--"+C()),O(s,jt,"tablist"),O(s,Bt,o.select),O(s,$t,C()===It?"vertical":"");for(var l=0;l<a;l++){var g=N("li",null,s),h=N("button",{class:i.page,type:"button"},g),y=f.getIn(l).map((function(t){return t.slide.id})),E=!m()&&c>1?o.pageX:o.slideX;d(h,"click",r(S,l)),e.paginationKeyboard&&d(h,"keydown",r(k,l)),O(g,jt,"presentation"),O(h,jt,"tab"),O(h,Wt,y.join(" ")),O(h,Bt,ct(E,l+1)),O(h,qt,-1),w.push({li:g,button:h,page:l})}}(),L(),l("pagination:mounted",{list:s,items:w},_(t.index)))},destroy:E,getAt:_,update:L}},Sync:function(t,n,e){var o=e.isNavigation,s=e.slideFocus,u=[];function c(){var n,e;t.splides.forEach((function(n){n.isParent||(l(t,n.splide),l(n.splide,t))})),o&&((e=(n=At(t)).on)(gt,f),e("sk",p),e([ft,yt],d),u.push(n),n.emit(kt,t.splides))}function a(){u.forEach((function(t){t.destroy()})),i(u)}function l(t,n){var e=At(t);e.on(vt,(function(t,e,i){n.go(n.is(Mn)?i:t)})),u.push(e)}function d(){O(n.Elements.list,$t,e.direction===It?"vertical":"")}function f(n){t.go(n.index)}function p(t,n){b(Wn,In(n))&&(f(t),B(n))}return{setup:r(n.Media.set,{slideFocus:v(s)?o:s},!0),mount:c,destroy:a,remount:function(){a(),c()}}},Wheel:function(t,n,e){var i=At(t).bind,o=0;function r(i){if(i.cancelable){var r=i.deltaY,s=r<0,u=U(i),c=e.wheelMinThreshold||0,a=e.wheelSleep||0;it(r)>c&&u-o>a&&(t.go(s?"<":">"),o=u),function(i){return!e.releaseWheel||t.state.is(4)||-1!==n.Controller.getAdjacent(i)}(s)&&B(i)}}return{mount:function(){e.wheel&&i(n.Elements.track,"wheel",r,On)}}},Live:function(t,n,e){var i=At(t).on,o=n.Elements.track,s=e.live&&!e.isNavigation,u=N("span",gn),c=Dt(90,r(a,!1));function a(t){O(o,Kt,t),t?(S(o,u),c.start()):(X(u),c.cancel())}function l(t){s&&O(o,Jt,t?"off":"polite")}return{mount:function(){s&&(l(!n.Autoplay.isPaused()),O(o,Vt,!0),u.textContent="…",i(Ct,r(l,!0)),i(_t,r(l,!1)),i([mt,xt],r(a,!0)))},disable:l,destroy:function(){z(o,[Jt,Vt,Kt]),X(u)}}}}),Gn={type:"slide",role:"region",speed:400,perPage:1,cloneStatus:!0,arrows:!0,pagination:!0,paginationKeyboard:!0,interval:5e3,pauseOnHover:!0,pauseOnFocus:!0,resetProgress:!0,easing:"cubic-bezier(0.25, 1, 0.5, 1)",drag:!0,direction:"ltr",trimSpace:!0,focusableNodes:"a, button, textarea, input, select, iframe",live:!0,classes:_n,i18n:{prev:"Previous slide",next:"Next slide",first:"Go to first slide",last:"Go to last slide",slideX:"Go to slide %s",pageX:"Go to page %s",play:"Start autoplay",pause:"Pause autoplay",carousel:"carousel",slide:"slide",select:"Select a slide to show",slideLabel:"%s of %s"},reducedMotion:{speed:0,rewindSpeed:0,autoplay:"pause"}};function Bn(t,n,e){var i=n.Slides;function o(){i.forEach((function(t){t.style("transform","translateX(-"+100*t.index+"%)")}))}return{mount:function(){At(t).on([ft,ht],o)},start:function(t,n){i.style("transition","opacity "+e.speed+"ms "+e.easing),s(n)},cancel:u}}function Hn(t,n,e){var i,o=n.Move,s=n.Controller,u=n.Scroll,c=n.Elements.list,a=r(I,c,"transition");function l(){a(""),u.cancel()}return{mount:function(){At(t).bind(c,"transitionend",(function(t){t.target===c&&i&&(l(),i())}))},start:function(n,r){var c=o.toPosition(n,!0),l=o.getPosition(),d=function(n){var i=e.rewindSpeed;if(t.is(Dn)&&i){var o=s.getIndex(!0),r=s.getEnd();if(0===o&&n>=r||o>=r&&0===n)return i}return e.speed}(n);it(c-l)>=1&&d>=1?e.useScroll?u.scroll(c,d,!1,r):(a("transform "+d+"ms "+e.easing),o.translate(c,!0),i=r):(o.jump(n),r())},cancel:l}}var Yn=function(){function t(n,e){var i;this.event=At(),this.Components={},this.state=(i=1,{set:function(t){i=t},is:function(t){return b(h(t),i)}}),this.splides=[],this._o={},this._E={};var o=p(n)?H(document,n):n;Q(o,o+" is invalid."),this.root=o,e=M({label:q(o,Bt)||"",labelledby:q(o,Ht)||""},Gn,t.defaults,e||{});try{M(e,JSON.parse(q(o,V)))}catch(t){Q(!1,"Invalid JSON")}this._o=Object.create(M({},e))}var e,r,s=t.prototype;return s.mount=function(t,n){var e=this,i=this.state,o=this.Components;return Q(i.is([1,7]),"Already mounted!"),i.set(1),this._C=o,this._T=n||this._T||(this.is(Tn)?Bn:Hn),this._E=t||this._E,A(D({},Xn,this._E,{Transition:this._T}),(function(t,n){var i=t(e,o,e._o);o[n]=i,i.setup&&i.setup()})),A(o,(function(t){t.mount&&t.mount()})),this.emit(ft),x(this.root,hn),i.set(3),this.emit(pt),this},s.sync=function(t){return this.splides.push({splide:t}),t.splides.push({splide:this,isParent:!0}),this.state.is(3)&&(this._C.Sync.remount(),t.Components.Sync.remount()),this},s.go=function(t){return this._C.Controller.go(t),this},s.on=function(t,n){return this.event.on(t,n),this},s.off=function(t){return this.event.off(t),this},s.emit=function(t){var n;return(n=this.event).emit.apply(n,[t].concat(o(arguments,1))),this},s.add=function(t,n){return this._C.Slides.add(t,n),this},s.remove=function(t){return this._C.Slides.remove(t),this},s.is=function(t){return this._o.type===t},s.refresh=function(){return this.emit(ht),this},s.destroy=function(t){void 0===t&&(t=!0);var n=this.event,e=this.state;return e.is(1)?At(this).on(pt,this.destroy.bind(this,t)):(A(this._C,(function(n){n.destroy&&n.destroy(t)}),!0),n.emit(St),n.destroy(),t&&i(this.splides),e.set(7)),this},e=t,(r=[{key:"options",get:function(){return this._o},set:function(t){this._C.Media.set(t,!0,!0)}},{key:"length",get:function(){return this._C.Slides.getLength(!0)}},{key:"index",get:function(){return this._C.Controller.getIndex()}}])&&n(e.prototype,r),Object.defineProperty(e,"prototype",{writable:!1}),t}();Yn.defaults={},Yn.STATES={CREATED:1,MOUNTED:2,IDLE:3,MOVING:4,SCROLLING:5,DRAGGING:6,DESTROYED:7};const $n=(t,n,e,i,o)=>{const r=document.querySelector(n),s=new Yn(t,{pagination:!1,arrows:!1,type:"loop",perPage:o,gap:10,breakpoints:{576:{perPage:1,gap:0}}}).mount();r.addEventListener("click",(t=>{t.target.closest(e)&&s.go("-1"),t.target.closest(i)&&s.go("+1")}))},Un=t=>{const n=document.querySelector(t),e=/^[а-яА-ЯёЁa-zA-Z\s]+$/,i=/^\+?\d{1,16}$/,o=(t,n)=>t.test(n.value.trim()),r=(t,n)=>{t.style.border=n?"2px solid green":"2px solid red",t.classList.toggle("success",n)};n.addEventListener("blur",(t=>{const n=t.target;n.matches("input[placeholder='ваше имя']")&&r(n,o(e,n)),n.matches("input[placeholder='ваш телефон']")&&r(n,o(i,n))}),!0)},Jn=t=>{const n=document.querySelector(t),e=document.createElement("p");let i=!0;const o=()=>{const t=document.createElement("div");t.style.cssText="\n      width: 40px;\n      height: 40px;\n      margin: auto;\n      background-image: linear-gradient(to bottom, #ffb336, #ff8a17);\n      border-radius: 50%;\n      transform: translate(-50%, -50%) scale(0);\n    ",e.innerHTML="",e.append(t),(({timing:t,draw:n,duration:e})=>{const i=performance.now();requestAnimationFrame((function o(r){let s=(r-i)/e;s>1&&(s=1);const u=t(s);n(u),s<1&&requestAnimationFrame(o)}))})({duration:2e3,timing:t=>t,draw(n){t.style.transform=n<.5?`scale(${2*n})`:`scale(${1-2*(n-.5)})`,1===n&&i&&o()}})};try{if(!n)throw new Error("Форма сбежала :(");n.addEventListener("submit",(t=>{t.preventDefault(),(()=>{const t=n.querySelectorAll("input"),r=new FormData(n),s={};o(),n.insertAdjacentElement("beforeend",e),e.style.fontWeight="bold",e.style.textAlign="center",e.style.marginTop="10px",e.style.marginBottom="-25px",r.forEach(((t,n)=>{s[n]=t})),(t=>{let n=!0;return t.forEach((t=>{"hidden"===t.type||t.classList.contains("success")||(n=!1)})),n})(t)?(async t=>{const n=await fetch("https://jsonplaceholder.typicode.com/posts",{method:"POST",body:JSON.stringify(t),headers:{"Content-Type":"application/json"}});return await n.json()})(s).then((()=>{e.textContent="Спасибо! Наш менеджер с вами свяжется.",e.style.color="green",t.forEach((t=>{t.value="",t.style.border="",t.classList.remove("success")})),i=!1,setTimeout((()=>{e.textContent=""}),3e3)})).catch((t=>{e.textContent="Ошибка при отправке данных",e.style.color="red",console.log(t.message),i=!1})):(e.textContent="Данные не валидны",e.style.color="red",t.forEach((t=>{t.style.border="2px solid red"})),i=!1)})()}))}catch(t){console.log(t.message)}};t(".header-modal",".open-btn-call",".header-modal__close"),t(".services-modal",".service-button",".services-modal__close"),$n(".benefits-inner--splide",".benefits-arrows",".benefits__arrow--left",".benefits__arrow--right",3),$n(".services-block--splide",".services-arrows",".services__arrow--left",".services__arrow--right",2),(()=>{const t=document.querySelector(".count_1 span"),n=document.querySelector(".count_2 span"),e=document.querySelector(".count_3 span"),i=document.querySelector(".count_4 span");let o;const r=t=>t<10?"0"+t:t,s=()=>{const s=(()=>{const t=(new Date("30 April 2025").getTime()-(new Date).getTime())/1e3;return{timeRemaining:t,days:Math.floor(t/60/60/24),hours:Math.floor(t/60/60%24),minutes:Math.floor(t/60%60),seconds:Math.floor(t%60)}})();t.textContent=r(s.days),n.textContent=r(s.hours),e.textContent=r(s.minutes),i.textContent=r(s.seconds),s.timeRemaining<0&&(clearInterval(o),t.textContent="00",n.textContent="00",e.textContent="00",i.textContent="00")};o=setInterval(s,1e3),s()})(),Un("[name=action-form]"),Un("[name=action-form2]"),Jn("[name=action-form]"),Jn("[name=action-form2]"),document.querySelectorAll(".sertificate-document").forEach((t=>{t.classList.add("document-inner"),t.addEventListener("click",(n=>{n.preventDefault();const e=document.createElement("div"),i=t.getAttribute("href");e.style.cssText=`\n      position: fixed;\n      top: 0;\n      left: 0;\n      width: 100%;\n      height: 100%;\n      background-color: rgba(0, 0, 0, 0.9);\n      background-image: url(${i});\n      background-size: contain;\n      background-repeat: no-repeat;\n      background-position: center;\n      `,document.body.append(e),document.documentElement.style.overflow="hidden",e.addEventListener("click",(()=>{e.remove(),document.documentElement.style.overflow=""}))}))})),(()=>{const t=document.querySelector(".smooth-scroll");t.style.display="none",document.addEventListener("scroll",(()=>{const n=document.documentElement.scrollTop>700;t.style.display=n?"":"none",t.style.cursor=n?"pointer":""}))})()})();