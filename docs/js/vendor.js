/*!
  * Stickyfill – `position: sticky` polyfill
  * v. 2.1.0 | https://github.com/wilddeer/stickyfill
  * MIT License
  */
!function(a,b){"use strict";function c(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}function d(a,b){for(var c in b)b.hasOwnProperty(c)&&(a[c]=b[c])}function e(a){return parseFloat(a)||0}function f(a){for(var b=0;a;)b+=a.offsetTop,a=a.offsetParent;return b}function g(){function c(){a.pageXOffset!=m.left?(m.top=a.pageYOffset,m.left=a.pageXOffset,p.refreshAll()):a.pageYOffset!=m.top&&(m.top=a.pageYOffset,m.left=a.pageXOffset,n.forEach(function(a){return a._recalcPosition()}))}function d(){f=setInterval(function(){n.forEach(function(a){return a._fastCheck()})},500)}function e(){clearInterval(f)}if(!k){k=!0,c(),a.addEventListener("scroll",c),a.addEventListener("resize",p.refreshAll),a.addEventListener("orientationchange",p.refreshAll);var f=void 0,g=void 0,h=void 0;"hidden"in b?(g="hidden",h="visibilitychange"):"webkitHidden"in b&&(g="webkitHidden",h="webkitvisibilitychange"),h?(b[g]||d(),b.addEventListener(h,function(){b[g]?e():d()})):d()}}var h=function(){function a(a,b){for(var c=0;c<b.length;c++){var d=b[c];d.enumerable=d.enumerable||!1,d.configurable=!0,"value"in d&&(d.writable=!0),Object.defineProperty(a,d.key,d)}}return function(b,c,d){return c&&a(b.prototype,c),d&&a(b,d),b}}(),i=!1,j="undefined"!=typeof a;j&&a.getComputedStyle?!function(){var a=b.createElement("div");["","-webkit-","-moz-","-ms-"].some(function(b){try{a.style.position=b+"sticky"}catch(a){}return""!=a.style.position})&&(i=!0)}():i=!0;var k=!1,l="undefined"!=typeof ShadowRoot,m={top:null,left:null},n=[],o=function(){function g(a){if(c(this,g),!(a instanceof HTMLElement))throw new Error("First argument must be HTMLElement");if(n.some(function(b){return b._node===a}))throw new Error("Stickyfill is already applied to this node");this._node=a,this._stickyMode=null,this._active=!1,n.push(this),this.refresh()}return h(g,[{key:"refresh",value:function(){if(!i&&!this._removed){this._active&&this._deactivate();var c=this._node,g=getComputedStyle(c),h={position:g.position,top:g.top,display:g.display,marginTop:g.marginTop,marginBottom:g.marginBottom,marginLeft:g.marginLeft,marginRight:g.marginRight,cssFloat:g.cssFloat};if(!isNaN(parseFloat(h.top))&&"table-cell"!=h.display&&"none"!=h.display){this._active=!0;var j=c.style.position;"sticky"!=g.position&&"-webkit-sticky"!=g.position||(c.style.position="static");var k=c.parentNode,m=l&&k instanceof ShadowRoot?k.host:k,n=c.getBoundingClientRect(),o=m.getBoundingClientRect(),p=getComputedStyle(m);this._parent={node:m,styles:{position:m.style.position},offsetHeight:m.offsetHeight},this._offsetToWindow={left:n.left,right:b.documentElement.clientWidth-n.right},this._offsetToParent={top:n.top-o.top-e(p.borderTopWidth),left:n.left-o.left-e(p.borderLeftWidth),right:-n.right+o.right-e(p.borderRightWidth)},this._styles={position:j,top:c.style.top,bottom:c.style.bottom,left:c.style.left,right:c.style.right,width:c.style.width,marginTop:c.style.marginTop,marginLeft:c.style.marginLeft,marginRight:c.style.marginRight};var q=e(h.top);this._limits={start:n.top+a.pageYOffset-q,end:o.top+a.pageYOffset+m.offsetHeight-e(p.borderBottomWidth)-c.offsetHeight-q-e(h.marginBottom)};var r=p.position;"absolute"!=r&&"relative"!=r&&(m.style.position="relative"),this._recalcPosition();var s=this._clone={};s.node=b.createElement("div"),d(s.node.style,{width:n.right-n.left+"px",height:n.bottom-n.top+"px",marginTop:h.marginTop,marginBottom:h.marginBottom,marginLeft:h.marginLeft,marginRight:h.marginRight,cssFloat:h.cssFloat,padding:0,border:0,borderSpacing:0,fontSize:"1em",position:"static"}),k.insertBefore(s.node,c),s.docOffsetTop=f(s.node)}}}},{key:"_recalcPosition",value:function(){if(this._active&&!this._removed){var a=m.top<=this._limits.start?"start":m.top>=this._limits.end?"end":"middle";if(this._stickyMode!=a){switch(a){case"start":d(this._node.style,{position:"absolute",left:this._offsetToParent.left+"px",right:this._offsetToParent.right+"px",top:this._offsetToParent.top+"px",bottom:"auto",width:"auto",marginLeft:0,marginRight:0,marginTop:0});break;case"middle":d(this._node.style,{position:"fixed",left:this._offsetToWindow.left+"px",right:this._offsetToWindow.right+"px",top:this._styles.top,bottom:"auto",width:"auto",marginLeft:0,marginRight:0,marginTop:0});break;case"end":d(this._node.style,{position:"absolute",left:this._offsetToParent.left+"px",right:this._offsetToParent.right+"px",top:"auto",bottom:0,width:"auto",marginLeft:0,marginRight:0})}this._stickyMode=a}}}},{key:"_fastCheck",value:function(){this._active&&!this._removed&&(Math.abs(f(this._clone.node)-this._clone.docOffsetTop)>1||Math.abs(this._parent.node.offsetHeight-this._parent.offsetHeight)>1)&&this.refresh()}},{key:"_deactivate",value:function(){var a=this;this._active&&!this._removed&&(this._clone.node.parentNode.removeChild(this._clone.node),delete this._clone,d(this._node.style,this._styles),delete this._styles,n.some(function(b){return b!==a&&b._parent&&b._parent.node===a._parent.node})||d(this._parent.node.style,this._parent.styles),delete this._parent,this._stickyMode=null,this._active=!1,delete this._offsetToWindow,delete this._offsetToParent,delete this._limits)}},{key:"remove",value:function(){var a=this;this._deactivate(),n.some(function(b,c){if(b._node===a._node)return n.splice(c,1),!0}),this._removed=!0}}]),g}(),p={stickies:n,Sticky:o,forceSticky:function(){i=!1,g(),this.refreshAll()},addOne:function(a){if(!(a instanceof HTMLElement)){if(!a.length||!a[0])return;a=a[0]}for(var b=0;b<n.length;b++)if(n[b]._node===a)return n[b];return new o(a)},add:function(a){if(a instanceof HTMLElement&&(a=[a]),a.length){for(var b=[],c=function(c){var d=a[c];return d instanceof HTMLElement?n.some(function(a){if(a._node===d)return b.push(a),!0})?"continue":void b.push(new o(d)):(b.push(void 0),"continue")},d=0;d<a.length;d++){c(d)}return b}},refreshAll:function(){n.forEach(function(a){return a.refresh()})},removeOne:function(a){if(!(a instanceof HTMLElement)){if(!a.length||!a[0])return;a=a[0]}n.some(function(b){if(b._node===a)return b.remove(),!0})},remove:function(a){if(a instanceof HTMLElement&&(a=[a]),a.length)for(var b=function(b){var c=a[b];n.some(function(a){if(a._node===c)return a.remove(),!0})},c=0;c<a.length;c++)b(c)},removeAll:function(){for(;n.length;)n[0].remove()}};i||g(),"undefined"!=typeof module&&module.exports?module.exports=p:j&&(a.Stickyfill=p)}(window,document);
!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(e||self).autosize=t()}(this,function(){var e,t,n="function"==typeof Map?new Map:(e=[],t=[],{has:function(t){return e.indexOf(t)>-1},get:function(n){return t[e.indexOf(n)]},set:function(n,o){-1===e.indexOf(n)&&(e.push(n),t.push(o))},delete:function(n){var o=e.indexOf(n);o>-1&&(e.splice(o,1),t.splice(o,1))}}),o=function(e){return new Event(e,{bubbles:!0})};try{new Event("test")}catch(e){o=function(e){var t=document.createEvent("Event");return t.initEvent(e,!0,!1),t}}function r(e){var t=n.get(e);t&&t.destroy()}function i(e){var t=n.get(e);t&&t.update()}var l=null;return"undefined"==typeof window||"function"!=typeof window.getComputedStyle?((l=function(e){return e}).destroy=function(e){return e},l.update=function(e){return e}):((l=function(e,t){return e&&Array.prototype.forEach.call(e.length?e:[e],function(e){return function(e){if(e&&e.nodeName&&"TEXTAREA"===e.nodeName&&!n.has(e)){var t,r=null,i=null,l=null,d=function(){e.clientWidth!==i&&c()},u=function(t){window.removeEventListener("resize",d,!1),e.removeEventListener("input",c,!1),e.removeEventListener("keyup",c,!1),e.removeEventListener("autosize:destroy",u,!1),e.removeEventListener("autosize:update",c,!1),Object.keys(t).forEach(function(n){e.style[n]=t[n]}),n.delete(e)}.bind(e,{height:e.style.height,resize:e.style.resize,overflowY:e.style.overflowY,overflowX:e.style.overflowX,wordWrap:e.style.wordWrap});e.addEventListener("autosize:destroy",u,!1),"onpropertychange"in e&&"oninput"in e&&e.addEventListener("keyup",c,!1),window.addEventListener("resize",d,!1),e.addEventListener("input",c,!1),e.addEventListener("autosize:update",c,!1),e.style.overflowX="hidden",e.style.wordWrap="break-word",n.set(e,{destroy:u,update:c}),"vertical"===(t=window.getComputedStyle(e,null)).resize?e.style.resize="none":"both"===t.resize&&(e.style.resize="horizontal"),r="content-box"===t.boxSizing?-(parseFloat(t.paddingTop)+parseFloat(t.paddingBottom)):parseFloat(t.borderTopWidth)+parseFloat(t.borderBottomWidth),isNaN(r)&&(r=0),c()}function a(t){var n=e.style.width;e.style.width="0px",e.style.width=n,e.style.overflowY=t}function s(){if(0!==e.scrollHeight){var t=function(e){for(var t=[];e&&e.parentNode&&e.parentNode instanceof Element;)e.parentNode.scrollTop&&t.push({node:e.parentNode,scrollTop:e.parentNode.scrollTop}),e=e.parentNode;return t}(e),n=document.documentElement&&document.documentElement.scrollTop;e.style.height="",e.style.height=e.scrollHeight+r+"px",i=e.clientWidth,t.forEach(function(e){e.node.scrollTop=e.scrollTop}),n&&(document.documentElement.scrollTop=n)}}function c(){s();var t=Math.round(parseFloat(e.style.height)),n=window.getComputedStyle(e,null),r="content-box"===n.boxSizing?Math.round(parseFloat(n.height)):e.offsetHeight;if(r<t?"hidden"===n.overflowY&&(a("scroll"),s(),r="content-box"===n.boxSizing?Math.round(parseFloat(window.getComputedStyle(e,null).height)):e.offsetHeight):"hidden"!==n.overflowY&&(a("hidden"),s(),r="content-box"===n.boxSizing?Math.round(parseFloat(window.getComputedStyle(e,null).height)):e.offsetHeight),l!==r){l=r;var i=o("autosize:resized");try{e.dispatchEvent(i)}catch(e){}}}}(e)}),e}).destroy=function(e){return e&&Array.prototype.forEach.call(e.length?e:[e],r),e},l.update=function(e){return e&&Array.prototype.forEach.call(e.length?e:[e],i),e}),l});
 
/*!
 * GSAP 3.9.1
 * https://greensock.com
 * 
 * @license Copyright 2021, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
 */

!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?e(exports):"function"==typeof define&&define.amd?define(["exports"],e):e((t=t||self).window=t.window||{})}(this,function(e){"use strict";function _inheritsLoose(t,e){t.prototype=Object.create(e.prototype),(t.prototype.constructor=t).__proto__=e}function _assertThisInitialized(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function o(t){return"string"==typeof t}function p(t){return"function"==typeof t}function q(t){return"number"==typeof t}function r(t){return void 0===t}function s(t){return"object"==typeof t}function t(t){return!1!==t}function u(){return"undefined"!=typeof window}function v(t){return p(t)||o(t)}function M(t){return(h=mt(t,ot))&&oe}function N(t,e){return console.warn("Invalid property",t,"set to",e,"Missing plugin? gsap.registerPlugin()")}function O(t,e){return!e&&console.warn(t)}function P(t,e){return t&&(ot[t]=e)&&h&&(h[t]=e)||ot}function Q(){return 0}function $(t){var e,r,i=t[0];if(s(i)||p(i)||(t=[t]),!(e=(i._gsap||{}).harness)){for(r=ct.length;r--&&!ct[r].targetTest(i););e=ct[r]}for(r=t.length;r--;)t[r]&&(t[r]._gsap||(t[r]._gsap=new Lt(t[r],e)))||t.splice(r,1);return t}function _(t){return t._gsap||$(xt(t))[0]._gsap}function aa(t,e,i){return(i=t[e])&&p(i)?t[e]():r(i)&&t.getAttribute&&t.getAttribute(e)||i}function ba(t,e){return(t=t.split(",")).forEach(e)||t}function ca(t){return Math.round(1e5*t)/1e5||0}function da(t){return Math.round(1e7*t)/1e7||0}function ea(t,e){for(var r=e.length,i=0;t.indexOf(e[i])<0&&++i<r;);return i<r}function fa(){var t,e,r=ht.length,i=ht.slice(0);for(lt={},t=ht.length=0;t<r;t++)(e=i[t])&&e._lazy&&(e.render(e._lazy[0],e._lazy[1],!0)._lazy=0)}function ga(t,e,r,i){ht.length&&fa(),t.render(e,r,i),ht.length&&fa()}function ha(t){var e=parseFloat(t);return(e||0===e)&&(t+"").match(at).length<2?e:o(t)?t.trim():t}function ia(t){return t}function ja(t,e){for(var r in e)r in t||(t[r]=e[r]);return t}function ma(t,e){for(var r in e)"__proto__"!==r&&"constructor"!==r&&"prototype"!==r&&(t[r]=s(e[r])?ma(t[r]||(t[r]={}),e[r]):e[r]);return t}function na(t,e){var r,i={};for(r in t)r in e||(i[r]=t[r]);return i}function oa(e){var r=e.parent||I,i=e.keyframes?function _setKeyframeDefaults(i){return function(t,e){for(var r in e)r in t||"duration"===r&&i||"ease"===r||(t[r]=e[r])}}(W(e.keyframes)):ja;if(t(e.inherit))for(;r;)i(e,r.vars.defaults),r=r.parent||r._dp;return e}function ra(t,e,r,i){void 0===r&&(r="_first"),void 0===i&&(i="_last");var n=e._prev,a=e._next;n?n._next=a:t[r]===e&&(t[r]=a),a?a._prev=n:t[i]===e&&(t[i]=n),e._next=e._prev=e.parent=null}function sa(t,e){!t.parent||e&&!t.parent.autoRemoveChildren||t.parent.remove(t),t._act=0}function ta(t,e){if(t&&(!e||e._end>t._dur||e._start<0))for(var r=t;r;)r._dirty=1,r=r.parent;return t}function wa(t){return t._repeat?gt(t._tTime,t=t.duration()+t._rDelay)*t:0}function ya(t,e){return(t-e._start)*e._ts+(0<=e._ts?0:e._dirty?e.totalDuration():e._tDur)}function za(t){return t._end=da(t._start+(t._tDur/Math.abs(t._ts||t._rts||X)||0))}function Aa(t,e){var r=t._dp;return r&&r.smoothChildTiming&&t._ts&&(t._start=da(r._time-(0<t._ts?e/t._ts:((t._dirty?t.totalDuration():t._tDur)-e)/-t._ts)),za(t),r._dirty||ta(r,t)),t}function Ba(t,e){var r;if((e._time||e._initted&&!e._dur)&&(r=ya(t.rawTime(),e),(!e._dur||Tt(0,e.totalDuration(),r)-e._tTime>X)&&e.render(r,!0)),ta(t,e)._dp&&t._initted&&t._time>=t._dur&&t._ts){if(t._dur<t.duration())for(r=t;r._dp;)0<=r.rawTime()&&r.totalTime(r._tTime),r=r._dp;t._zTime=-X}}function Ca(t,e,r,i){return e.parent&&sa(e),e._start=da((q(r)?r:r||t!==I?bt(t,r,e):t._time)+e._delay),e._end=da(e._start+(e.totalDuration()/Math.abs(e.timeScale())||0)),function _addLinkedListItem(t,e,r,i,n){void 0===r&&(r="_first"),void 0===i&&(i="_last");var a,s=t[i];if(n)for(a=e[n];s&&s[n]>a;)s=s._prev;s?(e._next=s._next,s._next=e):(e._next=t[r],t[r]=e),e._next?e._next._prev=e:t[i]=e,e._prev=s,e.parent=e._dp=t}(t,e,"_first","_last",t._sort?"_start":0),vt(e)||(t._recent=e),i||Ba(t,e),t}function Da(t,e){return(ot.ScrollTrigger||N("scrollTrigger",e))&&ot.ScrollTrigger.create(e,t)}function Ea(t,e,r,i){return jt(t,e),t._initted?!r&&t._pt&&(t._dur&&!1!==t.vars.lazy||!t._dur&&t.vars.lazy)&&f!==St.frame?(ht.push(t),t._lazy=[e,i],1):void 0:1}function Ja(t,e,r,i){var n=t._repeat,a=da(e)||0,s=t._tTime/t._tDur;return s&&!i&&(t._time*=a/t._dur),t._dur=a,t._tDur=n?n<0?1e10:da(a*(n+1)+t._rDelay*n):a,0<s&&!i?Aa(t,t._tTime=t._tDur*s):t.parent&&za(t),r||ta(t.parent,t),t}function Ka(t){return t instanceof Nt?ta(t):Ja(t,t._dur)}function Na(e,r,i){var n,a,s=q(r[1]),o=(s?2:1)+(e<2?0:1),u=r[o];if(s&&(u.duration=r[1]),u.parent=i,e){for(n=u,a=i;a&&!("immediateRender"in n);)n=a.vars.defaults||{},a=t(a.vars.inherit)&&a.parent;u.immediateRender=t(n.immediateRender),e<2?u.runBackwards=1:u.startAt=r[o-1]}return new Jt(r[0],u,r[1+o])}function Oa(t,e){return t||0===t?e(t):e}function Qa(t,e){return o(t)&&(e=st.exec(t))?t.substr(e.index+e[0].length):""}function Ta(t,e){return t&&s(t)&&"length"in t&&(!e&&!t.length||t.length-1 in t&&s(t[0]))&&!t.nodeType&&t!==i}function Xa(t){return t.sort(function(){return.5-Math.random()})}function Ya(t){if(p(t))return t;var c=s(t)?t:{each:t},_=Rt(c.ease),m=c.from||0,g=parseFloat(c.base)||0,v={},e=0<m&&m<1,y=isNaN(m)||e,b=c.axis,T=m,w=m;return o(m)?T=w={center:.5,edges:.5,end:1}[m]||0:!e&&y&&(T=m[0],w=m[1]),function(t,e,r){var i,n,a,s,o,u,h,l,f,d=(r||c).length,p=v[d];if(!p){if(!(f="auto"===c.grid?0:(c.grid||[1,j])[1])){for(h=-j;h<(h=r[f++].getBoundingClientRect().left)&&f<d;);f--}for(p=v[d]=[],i=y?Math.min(f,d)*T-.5:m%f,n=f===j?0:y?d*w/f-.5:m/f|0,l=j,u=h=0;u<d;u++)a=u%f-i,s=n-(u/f|0),p[u]=o=b?Math.abs("y"===b?s:a):G(a*a+s*s),h<o&&(h=o),o<l&&(l=o);"random"===m&&Xa(p),p.max=h-l,p.min=l,p.v=d=(parseFloat(c.amount)||parseFloat(c.each)*(d<f?d-1:b?"y"===b?d/f:f:Math.max(f,d/f))||0)*("edges"===m?-1:1),p.b=d<0?g-d:g,p.u=Qa(c.amount||c.each)||0,_=_&&d<0?Bt(_):_}return d=(p[t]-p.min)/p.max||0,da(p.b+(_?_(d):d)*p.v)+p.u}}function Za(r){var i=Math.pow(10,((r+"").split(".")[1]||"").length);return function(t){var e=Math.round(parseFloat(t)/r)*r*i;return(e-e%1)/i+(q(t)?0:Qa(t))}}function $a(u,t){var h,l,e=W(u);return!e&&s(u)&&(h=e=u.radius||j,u.values?(u=xt(u.values),(l=!q(u[0]))&&(h*=h)):u=Za(u.increment)),Oa(t,e?p(u)?function(t){return l=u(t),Math.abs(l-t)<=h?l:t}:function(t){for(var e,r,i=parseFloat(l?t.x:t),n=parseFloat(l?t.y:0),a=j,s=0,o=u.length;o--;)(e=l?(e=u[o].x-i)*e+(r=u[o].y-n)*r:Math.abs(u[o]-i))<a&&(a=e,s=o);return s=!h||a<=h?u[s]:t,l||s===t||q(t)?s:s+Qa(t)}:Za(u))}function _a(t,e,r,i){return Oa(W(t)?!e:!0===r?!!(r=0):!i,function(){return W(t)?t[~~(Math.random()*t.length)]:(r=r||1e-5)&&(i=r<1?Math.pow(10,(r+"").length-2):1)&&Math.floor(Math.round((t-r/2+Math.random()*(e-t+.99*r))/r)*r*i)/i})}function db(e,r,t){return Oa(t,function(t){return e[~~r(t)]})}function gb(t){for(var e,r,i,n,a=0,s="";~(e=t.indexOf("random(",a));)i=t.indexOf(")",e),n="["===t.charAt(e+7),r=t.substr(e+7,i-e-7).match(n?at:tt),s+=t.substr(a,e-a)+_a(n?r:+r[0],n?0:+r[1],+r[2]||1e-5),a=i+1;return s+t.substr(a,t.length-a)}function jb(t,e,r){var i,n,a,s=t.labels,o=j;for(i in s)(n=s[i]-e)<0==!!r&&n&&o>(n=Math.abs(n))&&(a=i,o=n);return a}function lb(t){return sa(t),t.scrollTrigger&&t.scrollTrigger.kill(!1),t.progress()<1&&Mt(t,"onInterrupt"),t}function qb(t,e,r){return(6*(t+=t<0?1:1<t?-1:0)<1?e+(r-e)*t*6:t<.5?r:3*t<2?e+(r-e)*(2/3-t)*6:e)*kt+.5|0}function rb(t,e,r){var i,n,a,s,o,u,h,l,f,d,p=t?q(t)?[t>>16,t>>8&kt,t&kt]:0:Ct.black;if(!p){if(","===t.substr(-1)&&(t=t.substr(0,t.length-1)),Ct[t])p=Ct[t];else if("#"===t.charAt(0)){if(t.length<6&&(t="#"+(i=t.charAt(1))+i+(n=t.charAt(2))+n+(a=t.charAt(3))+a+(5===t.length?t.charAt(4)+t.charAt(4):"")),9===t.length)return[(p=parseInt(t.substr(1,6),16))>>16,p>>8&kt,p&kt,parseInt(t.substr(7),16)/255];p=[(t=parseInt(t.substr(1),16))>>16,t>>8&kt,t&kt]}else if("hsl"===t.substr(0,3))if(p=d=t.match(tt),e){if(~t.indexOf("="))return p=t.match(et),r&&p.length<4&&(p[3]=1),p}else s=+p[0]%360/360,o=p[1]/100,i=2*(u=p[2]/100)-(n=u<=.5?u*(o+1):u+o-u*o),3<p.length&&(p[3]*=1),p[0]=qb(s+1/3,i,n),p[1]=qb(s,i,n),p[2]=qb(s-1/3,i,n);else p=t.match(tt)||Ct.transparent;p=p.map(Number)}return e&&!d&&(i=p[0]/kt,n=p[1]/kt,a=p[2]/kt,u=((h=Math.max(i,n,a))+(l=Math.min(i,n,a)))/2,h===l?s=o=0:(f=h-l,o=.5<u?f/(2-h-l):f/(h+l),s=h===i?(n-a)/f+(n<a?6:0):h===n?(a-i)/f+2:(i-n)/f+4,s*=60),p[0]=~~(s+.5),p[1]=~~(100*o+.5),p[2]=~~(100*u+.5)),r&&p.length<4&&(p[3]=1),p}function sb(t){var r=[],i=[],n=-1;return t.split(Pt).forEach(function(t){var e=t.match(rt)||[];r.push.apply(r,e),i.push(n+=e.length+1)}),r.c=i,r}function tb(t,e,r){var i,n,a,s,o="",u=(t+o).match(Pt),h=e?"hsla(":"rgba(",l=0;if(!u)return t;if(u=u.map(function(t){return(t=rb(t,e,1))&&h+(e?t[0]+","+t[1]+"%,"+t[2]+"%,"+t[3]:t.join(","))+")"}),r&&(a=sb(t),(i=r.c).join(o)!==a.c.join(o)))for(s=(n=t.replace(Pt,"1").split(rt)).length-1;l<s;l++)o+=n[l]+(~i.indexOf(l)?u.shift()||h+"0,0,0,0)":(a.length?a:u.length?u:r).shift());if(!n)for(s=(n=t.split(Pt)).length-1;l<s;l++)o+=n[l]+u[l];return o+n[s]}function wb(t){var e,r=t.join(" ");if(Pt.lastIndex=0,Pt.test(r))return e=At.test(r),t[1]=tb(t[1],e),t[0]=tb(t[0],e,sb(t[1])),!0}function Fb(t){var e=(t+"").split("("),r=zt[e[0]];return r&&1<e.length&&r.config?r.config.apply(null,~t.indexOf("{")?[function _parseObjectInString(t){for(var e,r,i,n={},a=t.substr(1,t.length-3).split(":"),s=a[0],o=1,u=a.length;o<u;o++)r=a[o],e=o!==u-1?r.lastIndexOf(","):r.length,i=r.substr(0,e),n[s]=isNaN(i)?i.replace(Et,"").trim():+i,s=r.substr(e+1).trim();return n}(e[1])]:function _valueInParentheses(t){var e=t.indexOf("(")+1,r=t.indexOf(")"),i=t.indexOf("(",e);return t.substring(e,~i&&i<r?t.indexOf(")",r+1):r)}(t).split(",").map(ha)):zt._CE&&Ft.test(t)?zt._CE("",t):r}function Hb(t,e){for(var r,i=t._first;i;)i instanceof Nt?Hb(i,e):!i.vars.yoyoEase||i._yoyo&&i._repeat||i._yoyo===e||(i.timeline?Hb(i.timeline,e):(r=i._ease,i._ease=i._yEase,i._yEase=r,i._yoyo=e)),i=i._next}function Jb(t,e,r,i){void 0===r&&(r=function easeOut(t){return 1-e(1-t)}),void 0===i&&(i=function easeInOut(t){return t<.5?e(2*t)/2:1-e(2*(1-t))/2});var n,a={easeIn:e,easeOut:r,easeInOut:i};return ba(t,function(t){for(var e in zt[t]=ot[t]=a,zt[n=t.toLowerCase()]=r,a)zt[n+("easeIn"===e?".in":"easeOut"===e?".out":".inOut")]=zt[t+"."+e]=a[e]}),a}function Kb(e){return function(t){return t<.5?(1-e(1-2*t))/2:.5+e(2*(t-.5))/2}}function Lb(r,t,e){function Sl(t){return 1===t?1:i*Math.pow(2,-10*t)*K((t-a)*n)+1}var i=1<=t?t:1,n=(e||(r?.3:.45))/(t<1?t:1),a=n/U*(Math.asin(1/i)||0),s="out"===r?Sl:"in"===r?function(t){return 1-Sl(1-t)}:Kb(Sl);return n=U/n,s.config=function(t,e){return Lb(r,t,e)},s}function Mb(e,r){function $l(t){return t?--t*t*((r+1)*t+r)+1:0}void 0===r&&(r=1.70158);var t="out"===e?$l:"in"===e?function(t){return 1-$l(1-t)}:Kb($l);return t.config=function(t){return Mb(e,t)},t}var R,I,i,n,a,h,l,f,d,c,m,g,y,b,T,w,x,k,C,A,S,D,z,F,E,B,Y={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},L={duration:.5,overwrite:!1,delay:0},j=1e8,X=1/j,U=2*Math.PI,V=U/4,J=0,G=Math.sqrt,Z=Math.cos,K=Math.sin,H="function"==typeof ArrayBuffer&&ArrayBuffer.isView||function(){},W=Array.isArray,tt=/(?:-?\.?\d|\.)+/gi,et=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,rt=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,it=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,nt=/[+-]=-?[.\d]+/,at=/[^,'"\[\]\s]+/gi,st=/[\d.+\-=]+(?:e[-+]\d*)*/i,ot={},ut={},ht=[],lt={},ft={},dt={},pt=30,ct=[],_t="",mt=function _merge(t,e){for(var r in e)t[r]=e[r];return t},gt=function _animationCycle(t,e){var r=Math.floor(t/=e);return t&&r===t?r-1:r},vt=function _isFromOrFromStart(t){var e=t.data;return"isFromStart"===e||"isStart"===e},yt={_start:0,endTime:Q,totalDuration:Q},bt=function _parsePosition(t,e,r){var i,n,a,s=t.labels,u=t._recent||yt,h=t.duration()>=j?u.endTime(!1):t._dur;return o(e)&&(isNaN(e)||e in s)?(n=e.charAt(0),a="%"===e.substr(-1),i=e.indexOf("="),"<"===n||">"===n?(0<=i&&(e=e.replace(/=/,"")),("<"===n?u._start:u.endTime(0<=u._repeat))+(parseFloat(e.substr(1))||0)*(a?(i<0?u:r).totalDuration()/100:1)):i<0?(e in s||(s[e]=h),s[e]):(n=parseFloat(e.charAt(i-1)+e.substr(i+1)),a&&r&&(n=n/100*(W(r)?r[0]:r).totalDuration()),1<i?_parsePosition(t,e.substr(0,i-1),r)+n:h+n)):null==e?h:+e},Tt=function _clamp(t,e,r){return r<t?t:e<r?e:r},wt=[].slice,xt=function toArray(t,e,r){return!o(t)||r||!n&&Dt()?W(t)?function _flatten(t,e,r){return void 0===r&&(r=[]),t.forEach(function(t){return o(t)&&!e||Ta(t,1)?r.push.apply(r,xt(t)):r.push(t)})||r}(t,r):Ta(t)?wt.call(t,0):t?[t]:[]:wt.call((e||a).querySelectorAll(t),0)},Ot=function mapRange(e,t,r,i,n){var a=t-e,s=i-r;return Oa(n,function(t){return r+((t-e)/a*s||0)})},Mt=function _callback(t,e,r){var i,n,a=t.vars,s=a[e];if(s)return i=a[e+"Params"],n=a.callbackScope||t,r&&ht.length&&fa(),i?s.apply(n,i):s.call(n)},kt=255,Ct={aqua:[0,kt,kt],lime:[0,kt,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,kt],navy:[0,0,128],white:[kt,kt,kt],olive:[128,128,0],yellow:[kt,kt,0],orange:[kt,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[kt,0,0],pink:[kt,192,203],cyan:[0,kt,kt],transparent:[kt,kt,kt,0]},Pt=function(){var t,e="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b";for(t in Ct)e+="|"+t+"\\b";return new RegExp(e+")","gi")}(),At=/hsl[a]?\(/,St=(x=Date.now,k=500,C=33,A=x(),S=A,z=D=1e3/240,b={time:0,frame:0,tick:function tick(){Ok(!0)},deltaRatio:function deltaRatio(t){return T/(1e3/(t||60))},wake:function wake(){l&&(!n&&u()&&(i=n=window,a=i.document||{},ot.gsap=oe,(i.gsapVersions||(i.gsapVersions=[])).push(oe.version),M(h||i.GreenSockGlobals||!i.gsap&&i||{}),y=i.requestAnimationFrame),m&&b.sleep(),g=y||function(t){return setTimeout(t,z-1e3*b.time+1|0)},c=1,Ok(2))},sleep:function sleep(){(y?i.cancelAnimationFrame:clearTimeout)(m),c=0,g=Q},lagSmoothing:function lagSmoothing(t,e){k=t||1e8,C=Math.min(e,k,0)},fps:function fps(t){D=1e3/(t||240),z=1e3*b.time+D},add:function add(t){F.indexOf(t)<0&&F.push(t),Dt()},remove:function remove(t,e){~(e=F.indexOf(t))&&F.splice(e,1)&&e<=w&&w--},_listeners:F=[]}),Dt=function _wake(){return!c&&St.wake()},zt={},Ft=/^[\d.\-M][\d.\-,\s]/,Et=/["']/g,Bt=function _invertEase(e){return function(t){return 1-e(1-t)}},Rt=function _parseEase(t,e){return t&&(p(t)?t:zt[t]||Fb(t))||e};function Ok(t){var e,r,i,n,a=x()-S,s=!0===t;if(k<a&&(A+=a-C),(0<(e=(i=(S+=a)-A)-z)||s)&&(n=++b.frame,T=i-1e3*b.time,b.time=i/=1e3,z+=e+(D<=e?4:D-e),r=1),s||(m=g(Ok)),r)for(w=0;w<F.length;w++)F[w](i,T,n,t)}function pm(t){return t<B?E*t*t:t<.7272727272727273?E*Math.pow(t-1.5/2.75,2)+.75:t<.9090909090909092?E*(t-=2.25/2.75)*t+.9375:E*Math.pow(t-2.625/2.75,2)+.984375}ba("Linear,Quad,Cubic,Quart,Quint,Strong",function(t,e){var r=e<5?e+1:e;Jb(t+",Power"+(r-1),e?function(t){return Math.pow(t,r)}:function(t){return t},function(t){return 1-Math.pow(1-t,r)},function(t){return t<.5?Math.pow(2*t,r)/2:1-Math.pow(2*(1-t),r)/2})}),zt.Linear.easeNone=zt.none=zt.Linear.easeIn,Jb("Elastic",Lb("in"),Lb("out"),Lb()),E=7.5625,B=1/2.75,Jb("Bounce",function(t){return 1-pm(1-t)},pm),Jb("Expo",function(t){return t?Math.pow(2,10*(t-1)):0}),Jb("Circ",function(t){return-(G(1-t*t)-1)}),Jb("Sine",function(t){return 1===t?1:1-Z(t*V)}),Jb("Back",Mb("in"),Mb("out"),Mb()),zt.SteppedEase=zt.steps=ot.SteppedEase={config:function config(t,e){void 0===t&&(t=1);var r=1/t,i=t+(e?0:1),n=e?1:0;return function(t){return((i*Tt(0,.99999999,t)|0)+n)*r}}},L.ease=zt["quad.out"],ba("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(t){return _t+=t+","+t+"Params,"});var It,Lt=function GSCache(t,e){this.id=J++,(t._gsap=this).target=t,this.harness=e,this.get=e?e.get:aa,this.set=e?e.getSetter:Kt},qt=((It=Animation.prototype).delay=function delay(t){return t||0===t?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+t-this._delay),this._delay=t,this):this._delay},It.duration=function duration(t){return arguments.length?this.totalDuration(0<this._repeat?t+(t+this._rDelay)*this._repeat:t):this.totalDuration()&&this._dur},It.totalDuration=function totalDuration(t){return arguments.length?(this._dirty=0,Ja(this,this._repeat<0?t:(t-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},It.totalTime=function totalTime(t,e){if(Dt(),!arguments.length)return this._tTime;var r=this._dp;if(r&&r.smoothChildTiming&&this._ts){for(Aa(this,t),!r._dp||r.parent||Ba(r,this);r&&r.parent;)r.parent._time!==r._start+(0<=r._ts?r._tTime/r._ts:(r.totalDuration()-r._tTime)/-r._ts)&&r.totalTime(r._tTime,!0),r=r.parent;!this.parent&&this._dp.autoRemoveChildren&&(0<this._ts&&t<this._tDur||this._ts<0&&0<t||!this._tDur&&!t)&&Ca(this._dp,this,this._start-this._delay)}return(this._tTime!==t||!this._dur&&!e||this._initted&&Math.abs(this._zTime)===X||!t&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=t),ga(this,t,e)),this},It.time=function time(t,e){return arguments.length?this.totalTime(Math.min(this.totalDuration(),t+wa(this))%(this._dur+this._rDelay)||(t?this._dur:0),e):this._time},It.totalProgress=function totalProgress(t,e){return arguments.length?this.totalTime(this.totalDuration()*t,e):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.ratio},It.progress=function progress(t,e){return arguments.length?this.totalTime(this.duration()*(!this._yoyo||1&this.iteration()?t:1-t)+wa(this),e):this.duration()?Math.min(1,this._time/this._dur):this.ratio},It.iteration=function iteration(t,e){var r=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(t-1)*r,e):this._repeat?gt(this._tTime,r)+1:1},It.timeScale=function timeScale(t){if(!arguments.length)return this._rts===-X?0:this._rts;if(this._rts===t)return this;var e=this.parent&&this._ts?ya(this.parent._time,this):this._tTime;return this._rts=+t||0,this._ts=this._ps||t===-X?0:this._rts,function _recacheAncestors(t){for(var e=t.parent;e&&e.parent;)e._dirty=1,e.totalDuration(),e=e.parent}(this.totalTime(Tt(-this._delay,this._tDur,e),!0)),za(this),this},It.paused=function paused(t){return arguments.length?(this._ps!==t&&((this._ps=t)?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(Dt(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,1===this.progress()&&Math.abs(this._zTime)!==X&&(this._tTime-=X)))),this):this._ps},It.startTime=function startTime(t){if(arguments.length){this._start=t;var e=this.parent||this._dp;return!e||!e._sort&&this.parent||Ca(e,this,t-this._delay),this}return this._start},It.endTime=function endTime(e){return this._start+(t(e)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},It.rawTime=function rawTime(t){var e=this.parent||this._dp;return e?t&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?ya(e.rawTime(t),this):this._tTime:this._tTime},It.globalTime=function globalTime(t){for(var e=this,r=arguments.length?t:e.rawTime();e;)r=e._start+r/(e._ts||1),e=e._dp;return r},It.repeat=function repeat(t){return arguments.length?(this._repeat=t===1/0?-2:t,Ka(this)):-2===this._repeat?1/0:this._repeat},It.repeatDelay=function repeatDelay(t){if(arguments.length){var e=this._time;return this._rDelay=t,Ka(this),e?this.time(e):this}return this._rDelay},It.yoyo=function yoyo(t){return arguments.length?(this._yoyo=t,this):this._yoyo},It.seek=function seek(e,r){return this.totalTime(bt(this,e),t(r))},It.restart=function restart(e,r){return this.play().totalTime(e?-this._delay:0,t(r))},It.play=function play(t,e){return null!=t&&this.seek(t,e),this.reversed(!1).paused(!1)},It.reverse=function reverse(t,e){return null!=t&&this.seek(t||this.totalDuration(),e),this.reversed(!0).paused(!1)},It.pause=function pause(t,e){return null!=t&&this.seek(t,e),this.paused(!0)},It.resume=function resume(){return this.paused(!1)},It.reversed=function reversed(t){return arguments.length?(!!t!==this.reversed()&&this.timeScale(-this._rts||(t?-X:0)),this):this._rts<0},It.invalidate=function invalidate(){return this._initted=this._act=0,this._zTime=-X,this},It.isActive=function isActive(){var t,e=this.parent||this._dp,r=this._start;return!(e&&!(this._ts&&this._initted&&e.isActive()&&(t=e.rawTime(!0))>=r&&t<this.endTime(!0)-X))},It.eventCallback=function eventCallback(t,e,r){var i=this.vars;return 1<arguments.length?(e?(i[t]=e,r&&(i[t+"Params"]=r),"onUpdate"===t&&(this._onUpdate=e)):delete i[t],this):i[t]},It.then=function then(t){var i=this;return new Promise(function(e){function Gn(){var t=i.then;i.then=null,p(r)&&(r=r(i))&&(r.then||r===i)&&(i.then=t),e(r),i.then=t}var r=p(t)?t:ia;i._initted&&1===i.totalProgress()&&0<=i._ts||!i._tTime&&i._ts<0?Gn():i._prom=Gn})},It.kill=function kill(){lb(this)},Animation);function Animation(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,Ja(this,+t.duration,1,1),this.data=t.data,c||St.wake()}ja(qt.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-X,_prom:0,_ps:!1,_rts:1});var Nt=function(n){function Timeline(e,r){var i;return void 0===e&&(e={}),(i=n.call(this,e)||this).labels={},i.smoothChildTiming=!!e.smoothChildTiming,i.autoRemoveChildren=!!e.autoRemoveChildren,i._sort=t(e.sortChildren),I&&Ca(e.parent||I,_assertThisInitialized(i),r),e.reversed&&i.reverse(),e.paused&&i.paused(!0),e.scrollTrigger&&Da(_assertThisInitialized(i),e.scrollTrigger),i}_inheritsLoose(Timeline,n);var e=Timeline.prototype;return e.to=function to(t,e,r){return Na(0,arguments,this),this},e.from=function from(t,e,r){return Na(1,arguments,this),this},e.fromTo=function fromTo(t,e,r,i){return Na(2,arguments,this),this},e.set=function set(t,e,r){return e.duration=0,e.parent=this,oa(e).repeatDelay||(e.repeat=0),e.immediateRender=!!e.immediateRender,new Jt(t,e,bt(this,r),1),this},e.call=function call(t,e,r){return Ca(this,Jt.delayedCall(0,t,e),r)},e.staggerTo=function staggerTo(t,e,r,i,n,a,s){return r.duration=e,r.stagger=r.stagger||i,r.onComplete=a,r.onCompleteParams=s,r.parent=this,new Jt(t,r,bt(this,n)),this},e.staggerFrom=function staggerFrom(e,r,i,n,a,s,o){return i.runBackwards=1,oa(i).immediateRender=t(i.immediateRender),this.staggerTo(e,r,i,n,a,s,o)},e.staggerFromTo=function staggerFromTo(e,r,i,n,a,s,o,u){return n.startAt=i,oa(n).immediateRender=t(n.immediateRender),this.staggerTo(e,r,n,a,s,o,u)},e.render=function render(t,e,r){var i,n,a,s,o,u,h,l,f,d,p,c,_=this._time,m=this._dirty?this.totalDuration():this._tDur,g=this._dur,v=t<=0?0:da(t),y=this._zTime<0!=t<0&&(this._initted||!g);if(this!==I&&m<v&&0<=t&&(v=m),v!==this._tTime||r||y){if(_!==this._time&&g&&(v+=this._time-_,t+=this._time-_),i=v,f=this._start,u=!(l=this._ts),y&&(g||(_=this._zTime),!t&&e||(this._zTime=t)),this._repeat){if(p=this._yoyo,o=g+this._rDelay,this._repeat<-1&&t<0)return this.totalTime(100*o+t,e,r);if(i=da(v%o),v===m?(s=this._repeat,i=g):((s=~~(v/o))&&s===v/o&&(i=g,s--),g<i&&(i=g)),d=gt(this._tTime,o),!_&&this._tTime&&d!==s&&(d=s),p&&1&s&&(i=g-i,c=1),s!==d&&!this._lock){var b=p&&1&d,T=b===(p&&1&s);if(s<d&&(b=!b),_=b?0:g,this._lock=1,this.render(_||(c?0:da(s*o)),e,!g)._lock=0,this._tTime=v,!e&&this.parent&&Mt(this,"onRepeat"),this.vars.repeatRefresh&&!c&&(this.invalidate()._lock=1),_&&_!==this._time||u!=!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(g=this._dur,m=this._tDur,T&&(this._lock=2,_=b?g:-1e-4,this.render(_,!0),this.vars.repeatRefresh&&!c&&this.invalidate()),this._lock=0,!this._ts&&!u)return this;Hb(this,c)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(h=function _findNextPauseTween(t,e,r){var i;if(e<r)for(i=t._first;i&&i._start<=r;){if("isPause"===i.data&&i._start>e)return i;i=i._next}else for(i=t._last;i&&i._start>=r;){if("isPause"===i.data&&i._start<e)return i;i=i._prev}}(this,da(_),da(i)))&&(v-=i-(i=h._start)),this._tTime=v,this._time=i,this._act=!l,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=t,_=0),!_&&i&&!e&&(Mt(this,"onStart"),this._tTime!==v))return this;if(_<=i&&0<=t)for(n=this._first;n;){if(a=n._next,(n._act||i>=n._start)&&n._ts&&h!==n){if(n.parent!==this)return this.render(t,e,r);if(n.render(0<n._ts?(i-n._start)*n._ts:(n._dirty?n.totalDuration():n._tDur)+(i-n._start)*n._ts,e,r),i!==this._time||!this._ts&&!u){h=0,a&&(v+=this._zTime=-X);break}}n=a}else{n=this._last;for(var w=t<0?t:i;n;){if(a=n._prev,(n._act||w<=n._end)&&n._ts&&h!==n){if(n.parent!==this)return this.render(t,e,r);if(n.render(0<n._ts?(w-n._start)*n._ts:(n._dirty?n.totalDuration():n._tDur)+(w-n._start)*n._ts,e,r),i!==this._time||!this._ts&&!u){h=0,a&&(v+=this._zTime=w?-X:X);break}}n=a}}if(h&&!e&&(this.pause(),h.render(_<=i?0:-X)._zTime=_<=i?1:-1,this._ts))return this._start=f,za(this),this.render(t,e,r);this._onUpdate&&!e&&Mt(this,"onUpdate",!0),(v===m&&m>=this.totalDuration()||!v&&_)&&(f!==this._start&&Math.abs(l)===Math.abs(this._ts)||this._lock||(!t&&g||!(v===m&&0<this._ts||!v&&this._ts<0)||sa(this,1),e||t<0&&!_||!v&&!_&&m||(Mt(this,v===m&&0<=t?"onComplete":"onReverseComplete",!0),!this._prom||v<m&&0<this.timeScale()||this._prom())))}return this},e.add=function add(t,e){var r=this;if(q(e)||(e=bt(this,e,t)),!(t instanceof qt)){if(W(t))return t.forEach(function(t){return r.add(t,e)}),this;if(o(t))return this.addLabel(t,e);if(!p(t))return this;t=Jt.delayedCall(0,t)}return this!==t?Ca(this,t,e):this},e.getChildren=function getChildren(t,e,r,i){void 0===t&&(t=!0),void 0===e&&(e=!0),void 0===r&&(r=!0),void 0===i&&(i=-j);for(var n=[],a=this._first;a;)a._start>=i&&(a instanceof Jt?e&&n.push(a):(r&&n.push(a),t&&n.push.apply(n,a.getChildren(!0,e,r)))),a=a._next;return n},e.getById=function getById(t){for(var e=this.getChildren(1,1,1),r=e.length;r--;)if(e[r].vars.id===t)return e[r]},e.remove=function remove(t){return o(t)?this.removeLabel(t):p(t)?this.killTweensOf(t):(ra(this,t),t===this._recent&&(this._recent=this._last),ta(this))},e.totalTime=function totalTime(t,e){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=da(St.time-(0<this._ts?t/this._ts:(this.totalDuration()-t)/-this._ts))),n.prototype.totalTime.call(this,t,e),this._forcing=0,this):this._tTime},e.addLabel=function addLabel(t,e){return this.labels[t]=bt(this,e),this},e.removeLabel=function removeLabel(t){return delete this.labels[t],this},e.addPause=function addPause(t,e,r){var i=Jt.delayedCall(0,e||Q,r);return i.data="isPause",this._hasPause=1,Ca(this,i,bt(this,t))},e.removePause=function removePause(t){var e=this._first;for(t=bt(this,t);e;)e._start===t&&"isPause"===e.data&&sa(e),e=e._next},e.killTweensOf=function killTweensOf(t,e,r){for(var i=this.getTweensOf(t,r),n=i.length;n--;)Qt!==i[n]&&i[n].kill(t,e);return this},e.getTweensOf=function getTweensOf(t,e){for(var r,i=[],n=xt(t),a=this._first,s=q(e);a;)a instanceof Jt?ea(a._targets,n)&&(s?(!Qt||a._initted&&a._ts)&&a.globalTime(0)<=e&&a.globalTime(a.totalDuration())>e:!e||a.isActive())&&i.push(a):(r=a.getTweensOf(n,e)).length&&i.push.apply(i,r),a=a._next;return i},e.tweenTo=function tweenTo(t,e){e=e||{};var r,i=this,n=bt(i,t),a=e.startAt,s=e.onStart,o=e.onStartParams,u=e.immediateRender,h=Jt.to(i,ja({ease:e.ease||"none",lazy:!1,immediateRender:!1,time:n,overwrite:"auto",duration:e.duration||Math.abs((n-(a&&"time"in a?a.time:i._time))/i.timeScale())||X,onStart:function onStart(){if(i.pause(),!r){var t=e.duration||Math.abs((n-(a&&"time"in a?a.time:i._time))/i.timeScale());h._dur!==t&&Ja(h,t,0,1).render(h._time,!0,!0),r=1}s&&s.apply(h,o||[])}},e));return u?h.render(0):h},e.tweenFromTo=function tweenFromTo(t,e,r){return this.tweenTo(e,ja({startAt:{time:bt(this,t)}},r))},e.recent=function recent(){return this._recent},e.nextLabel=function nextLabel(t){return void 0===t&&(t=this._time),jb(this,bt(this,t))},e.previousLabel=function previousLabel(t){return void 0===t&&(t=this._time),jb(this,bt(this,t),1)},e.currentLabel=function currentLabel(t){return arguments.length?this.seek(t,!0):this.previousLabel(this._time+X)},e.shiftChildren=function shiftChildren(t,e,r){void 0===r&&(r=0);for(var i,n=this._first,a=this.labels;n;)n._start>=r&&(n._start+=t,n._end+=t),n=n._next;if(e)for(i in a)a[i]>=r&&(a[i]+=t);return ta(this)},e.invalidate=function invalidate(){var t=this._first;for(this._lock=0;t;)t.invalidate(),t=t._next;return n.prototype.invalidate.call(this)},e.clear=function clear(t){void 0===t&&(t=!0);for(var e,r=this._first;r;)e=r._next,this.remove(r),r=e;return this._dp&&(this._time=this._tTime=this._pTime=0),t&&(this.labels={}),ta(this)},e.totalDuration=function totalDuration(t){var e,r,i,n=0,a=this,s=a._last,o=j;if(arguments.length)return a.timeScale((a._repeat<0?a.duration():a.totalDuration())/(a.reversed()?-t:t));if(a._dirty){for(i=a.parent;s;)e=s._prev,s._dirty&&s.totalDuration(),o<(r=s._start)&&a._sort&&s._ts&&!a._lock?(a._lock=1,Ca(a,s,r-s._delay,1)._lock=0):o=r,r<0&&s._ts&&(n-=r,(!i&&!a._dp||i&&i.smoothChildTiming)&&(a._start+=r/a._ts,a._time-=r,a._tTime-=r),a.shiftChildren(-r,!1,-Infinity),o=0),s._end>n&&s._ts&&(n=s._end),s=e;Ja(a,a===I&&a._time>n?a._time:n,1,1),a._dirty=0}return a._tDur},Timeline.updateRoot=function updateRoot(t){if(I._ts&&(ga(I,ya(t,I)),f=St.frame),St.frame>=pt){pt+=Y.autoSleep||120;var e=I._first;if((!e||!e._ts)&&Y.autoSleep&&St._listeners.length<2){for(;e&&!e._ts;)e=e._next;e||St.sleep()}}},Timeline}(qt);ja(Nt.prototype,{_lock:0,_hasPause:0,_forcing:0});function Tb(t,e,r,i,n,a){var u,h,l,f;if(ft[t]&&!1!==(u=new ft[t]).init(n,u.rawVars?e[t]:function _processVars(t,e,r,i,n){if(p(t)&&(t=Xt(t,n,e,r,i)),!s(t)||t.style&&t.nodeType||W(t)||H(t))return o(t)?Xt(t,n,e,r,i):t;var a,u={};for(a in t)u[a]=Xt(t[a],n,e,r,i);return u}(e[t],i,n,a,r),r,i,a)&&(r._pt=h=new ae(r._pt,n,t,0,1,u.render,u,0,u.priority),r!==d))for(l=r._ptLookup[r._targets.indexOf(n)],f=u._props.length;f--;)l[u._props[f]]=h;return u}function Xb(t,r,e,i){var n,a,s=r.ease||i||"power1.inOut";if(W(r))a=e[t]||(e[t]=[]),r.forEach(function(t,e){return a.push({t:e/(r.length-1)*100,v:t,e:s})});else for(n in r)a=e[n]||(e[n]=[]),"ease"===n||a.push({t:parseFloat(t),v:r[n],e:s})}var Qt,Yt=function _addPropTween(t,e,r,i,n,a,s,u,h){p(i)&&(i=i(n||0,t,a));var l,f=t[e],d="get"!==r?r:p(f)?h?t[e.indexOf("set")||!p(t["get"+e.substr(3)])?e:"get"+e.substr(3)](h):t[e]():f,c=p(f)?h?Zt:$t:Gt;if(o(i)&&(~i.indexOf("random(")&&(i=gb(i)),"="===i.charAt(1)&&(!(l=parseFloat(d)+parseFloat(i.substr(2))*("-"===i.charAt(0)?-1:1)+(Qa(d)||0))&&0!==l||(i=l))),d!==i)return isNaN(d*i)||""===i?(f||e in t||N(e,i),function _addComplexStringPropTween(t,e,r,i,n,a,s){var o,u,h,l,f,d,p,c,_=new ae(this._pt,t,e,0,1,te,null,n),m=0,g=0;for(_.b=r,_.e=i,r+="",(p=~(i+="").indexOf("random("))&&(i=gb(i)),a&&(a(c=[r,i],t,e),r=c[0],i=c[1]),u=r.match(it)||[];o=it.exec(i);)l=o[0],f=i.substring(m,o.index),h?h=(h+1)%5:"rgba("===f.substr(-5)&&(h=1),l!==u[g++]&&(d=parseFloat(u[g-1])||0,_._pt={_next:_._pt,p:f||1===g?f:",",s:d,c:"="===l.charAt(1)?parseFloat(l.substr(2))*("-"===l.charAt(0)?-1:1):parseFloat(l)-d,m:h&&h<4?Math.round:0},m=it.lastIndex);return _.c=m<i.length?i.substring(m,i.length):"",_.fp=s,(nt.test(i)||p)&&(_.e=0),this._pt=_}.call(this,t,e,d,i,c,u||Y.stringFilter,h)):(l=new ae(this._pt,t,e,+d||0,i-(d||0),"boolean"==typeof f?Wt:Ht,0,c),h&&(l.fp=h),s&&l.modifier(s,this,t),this._pt=l)},jt=function _initTween(e,r){var i,n,a,s,o,u,h,l,f,d,p,c,m,g=e.vars,v=g.ease,y=g.startAt,b=g.immediateRender,T=g.lazy,w=g.onUpdate,x=g.onUpdateParams,O=g.callbackScope,M=g.runBackwards,k=g.yoyoEase,C=g.keyframes,P=g.autoRevert,A=e._dur,S=e._startAt,D=e._targets,z=e.parent,F=z&&"nested"===z.data?z.parent._targets:D,E="auto"===e._overwrite&&!R,B=e.timeline;if(!B||C&&v||(v="none"),e._ease=Rt(v,L.ease),e._yEase=k?Bt(Rt(!0===k?v:k,L.ease)):0,k&&e._yoyo&&!e._repeat&&(k=e._yEase,e._yEase=e._ease,e._ease=k),e._from=!B&&!!g.runBackwards,!B||C&&!g.stagger){if(c=(l=D[0]?_(D[0]).harness:0)&&g[l.prop],i=na(g,ut),S&&sa(S.render(-1,!0)),y)if(sa(e._startAt=Jt.set(D,ja({data:"isStart",overwrite:!1,parent:z,immediateRender:!0,lazy:t(T),startAt:null,delay:0,onUpdate:w,onUpdateParams:x,callbackScope:O,stagger:0},y))),r<0&&!b&&!P&&e._startAt.render(-1,!0),b){if(0<r&&!P&&(e._startAt=0),A&&r<=0)return void(r&&(e._zTime=r))}else!1===P&&(e._startAt=0);else if(M&&A)if(S)P||(e._startAt=0);else if(r&&(b=!1),a=ja({overwrite:!1,data:"isFromStart",lazy:b&&t(T),immediateRender:b,stagger:0,parent:z},i),c&&(a[l.prop]=c),sa(e._startAt=Jt.set(D,a)),r<0&&e._startAt.render(-1,!0),e._zTime=r,b){if(!r)return}else _initTween(e._startAt,X);for(e._pt=0,T=A&&t(T)||T&&!A,n=0;n<D.length;n++){if(h=(o=D[n])._gsap||$(D)[n]._gsap,e._ptLookup[n]=d={},lt[h.id]&&ht.length&&fa(),p=F===D?n:F.indexOf(o),l&&!1!==(f=new l).init(o,c||i,e,p,F)&&(e._pt=s=new ae(e._pt,o,f.name,0,1,f.render,f,0,f.priority),f._props.forEach(function(t){d[t]=s}),f.priority&&(u=1)),!l||c)for(a in i)ft[a]&&(f=Tb(a,i,e,p,o,F))?f.priority&&(u=1):d[a]=s=Yt.call(e,o,a,"get",i[a],p,F,0,g.stringFilter);e._op&&e._op[n]&&e.kill(o,e._op[n]),E&&e._pt&&(Qt=e,I.killTweensOf(o,d,e.globalTime(r)),m=!e.parent,Qt=0),e._pt&&T&&(lt[h.id]=1)}u&&ne(e),e._onInit&&e._onInit(e)}e._onUpdate=w,e._initted=(!e._op||e._pt)&&!m,C&&r<=0&&B.render(j,!0,!0)},Xt=function _parseFuncOrString(t,e,r,i,n){return p(t)?t.call(e,r,i,n):o(t)&&~t.indexOf("random(")?gb(t):t},Ut=_t+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase",Vt={};ba(Ut+",id,stagger,delay,duration,paused,scrollTrigger",function(t){return Vt[t]=1});var Jt=function(F){function Tween(e,r,i,n){var a;"number"==typeof r&&(i.duration=r,r=i,i=null);var o,u,h,l,f,d,p,c,_=(a=F.call(this,n?r:oa(r))||this).vars,m=_.duration,g=_.delay,y=_.immediateRender,b=_.stagger,T=_.overwrite,w=_.keyframes,x=_.defaults,M=_.scrollTrigger,k=_.yoyoEase,C=r.parent||I,P=(W(e)||H(e)?q(e[0]):"length"in r)?[e]:xt(e);if(a._targets=P.length?$(P):O("GSAP target "+e+" not found. https://greensock.com",!Y.nullTargetWarn)||[],a._ptLookup=[],a._overwrite=T,w||b||v(m)||v(g)){if(r=a.vars,(o=a.timeline=new Nt({data:"nested",defaults:x||{}})).kill(),o.parent=o._dp=_assertThisInitialized(a),o._start=0,b||v(m)||v(g)){if(l=P.length,p=b&&Ya(b),s(b))for(f in b)~Ut.indexOf(f)&&((c=c||{})[f]=b[f]);for(u=0;u<l;u++)(h=na(r,Vt)).stagger=0,k&&(h.yoyoEase=k),c&&mt(h,c),d=P[u],h.duration=+Xt(m,_assertThisInitialized(a),u,d,P),h.delay=(+Xt(g,_assertThisInitialized(a),u,d,P)||0)-a._delay,!b&&1===l&&h.delay&&(a._delay=g=h.delay,a._start+=g,h.delay=0),o.to(d,h,p?p(u,d,P):0),o._ease=zt.none;o.duration()?m=g=0:a.timeline=0}else if(w){oa(ja(o.vars.defaults,{ease:"none"})),o._ease=Rt(w.ease||r.ease||"none");var A,S,D,z=0;if(W(w))w.forEach(function(t){return o.to(P,t,">")});else{for(f in h={},w)"ease"===f||"easeEach"===f||Xb(f,w[f],h,w.easeEach);for(f in h)for(A=h[f].sort(function(t,e){return t.t-e.t}),u=z=0;u<A.length;u++)(D={ease:(S=A[u]).e,duration:(S.t-(u?A[u-1].t:0))/100*m})[f]=S.v,o.to(P,D,z),z+=D.duration;o.duration()<m&&o.to({},{duration:m-o.duration()})}}m||a.duration(m=o.duration())}else a.timeline=0;return!0!==T||R||(Qt=_assertThisInitialized(a),I.killTweensOf(P),Qt=0),Ca(C,_assertThisInitialized(a),i),r.reversed&&a.reverse(),r.paused&&a.paused(!0),(y||!m&&!w&&a._start===da(C._time)&&t(y)&&function _hasNoPausedAncestors(t){return!t||t._ts&&_hasNoPausedAncestors(t.parent)}(_assertThisInitialized(a))&&"nested"!==C.data)&&(a._tTime=-X,a.render(Math.max(0,-g))),M&&Da(_assertThisInitialized(a),M),a}_inheritsLoose(Tween,F);var e=Tween.prototype;return e.render=function render(t,e,r){var i,n,a,s,o,u,h,l,f,d=this._time,p=this._tDur,c=this._dur,_=p-X<t&&0<=t?p:t<X?0:t;if(c){if(_!==this._tTime||!t||r||!this._initted&&this._tTime||this._startAt&&this._zTime<0!=t<0){if(i=_,l=this.timeline,this._repeat){if(s=c+this._rDelay,this._repeat<-1&&t<0)return this.totalTime(100*s+t,e,r);if(i=da(_%s),_===p?(a=this._repeat,i=c):((a=~~(_/s))&&a===_/s&&(i=c,a--),c<i&&(i=c)),(u=this._yoyo&&1&a)&&(f=this._yEase,i=c-i),o=gt(this._tTime,s),i===d&&!r&&this._initted)return this;a!==o&&(l&&this._yEase&&Hb(l,u),!this.vars.repeatRefresh||u||this._lock||(this._lock=r=1,this.render(da(s*a),!0).invalidate()._lock=0))}if(!this._initted){if(Ea(this,t<0?t:i,r,e))return this._tTime=0,this;if(c!==this._dur)return this.render(t,e,r)}if(this._tTime=_,this._time=i,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=h=(f||this._ease)(i/c),this._from&&(this.ratio=h=1-h),i&&!d&&!e&&(Mt(this,"onStart"),this._tTime!==_))return this;for(n=this._pt;n;)n.r(h,n.d),n=n._next;l&&l.render(t<0?t:!i&&u?-X:l._dur*l._ease(i/this._dur),e,r)||this._startAt&&(this._zTime=t),this._onUpdate&&!e&&(t<0&&this._startAt&&this._startAt.render(t,!0,r),Mt(this,"onUpdate")),this._repeat&&a!==o&&this.vars.onRepeat&&!e&&this.parent&&Mt(this,"onRepeat"),_!==this._tDur&&_||this._tTime!==_||(t<0&&this._startAt&&!this._onUpdate&&this._startAt.render(t,!0,!0),!t&&c||!(_===this._tDur&&0<this._ts||!_&&this._ts<0)||sa(this,1),e||t<0&&!d||!_&&!d||(Mt(this,_===p?"onComplete":"onReverseComplete",!0),!this._prom||_<p&&0<this.timeScale()||this._prom()))}}else!function _renderZeroDurationTween(t,e,r,i){var n,a,s,o=t.ratio,u=e<0||!e&&(!t._start&&function _parentPlayheadIsBeforeStart(t){var e=t.parent;return e&&e._ts&&e._initted&&!e._lock&&(e.rawTime()<0||_parentPlayheadIsBeforeStart(e))}(t)&&(t._initted||!vt(t))||(t._ts<0||t._dp._ts<0)&&!vt(t))?0:1,h=t._rDelay,l=0;if(h&&t._repeat&&(l=Tt(0,t._tDur,e),a=gt(l,h),t._yoyo&&1&a&&(u=1-u),a!==gt(t._tTime,h)&&(o=1-u,t.vars.repeatRefresh&&t._initted&&t.invalidate())),u!==o||i||t._zTime===X||!e&&t._zTime){if(!t._initted&&Ea(t,e,i,r))return;for(s=t._zTime,t._zTime=e||(r?X:0),r=r||e&&!s,t.ratio=u,t._from&&(u=1-u),t._time=0,t._tTime=l,n=t._pt;n;)n.r(u,n.d),n=n._next;t._startAt&&e<0&&t._startAt.render(e,!0,!0),t._onUpdate&&!r&&Mt(t,"onUpdate"),l&&t._repeat&&!r&&t.parent&&Mt(t,"onRepeat"),(e>=t._tDur||e<0)&&t.ratio===u&&(u&&sa(t,1),r||(Mt(t,u?"onComplete":"onReverseComplete",!0),t._prom&&t._prom()))}else t._zTime||(t._zTime=e)}(this,t,e,r);return this},e.targets=function targets(){return this._targets},e.invalidate=function invalidate(){return this._pt=this._op=this._startAt=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(),F.prototype.invalidate.call(this)},e.kill=function kill(t,e){if(void 0===e&&(e="all"),!(t||e&&"all"!==e))return this._lazy=this._pt=0,this.parent?lb(this):this;if(this.timeline){var r=this.timeline.totalDuration();return this.timeline.killTweensOf(t,e,Qt&&!0!==Qt.vars.overwrite)._first||lb(this),this.parent&&r!==this.timeline.totalDuration()&&Ja(this,this._dur*this.timeline._tDur/r,0,1),this}var i,n,a,s,u,h,l,f=this._targets,d=t?xt(t):f,p=this._ptLookup,c=this._pt;if((!e||"all"===e)&&function _arraysMatch(t,e){for(var r=t.length,i=r===e.length;i&&r--&&t[r]===e[r];);return r<0}(f,d))return"all"===e&&(this._pt=0),lb(this);for(i=this._op=this._op||[],"all"!==e&&(o(e)&&(u={},ba(e,function(t){return u[t]=1}),e=u),e=function _addAliasesToVars(t,e){var r,i,n,a,s=t[0]?_(t[0]).harness:0,o=s&&s.aliases;if(!o)return e;for(i in r=mt({},e),o)if(i in r)for(n=(a=o[i].split(",")).length;n--;)r[a[n]]=r[i];return r}(f,e)),l=f.length;l--;)if(~d.indexOf(f[l]))for(u in n=p[l],"all"===e?(i[l]=e,s=n,a={}):(a=i[l]=i[l]||{},s=e),s)(h=n&&n[u])&&("kill"in h.d&&!0!==h.d.kill(u)||ra(this,h,"_pt"),delete n[u]),"all"!==a&&(a[u]=1);return this._initted&&!this._pt&&c&&lb(this),this},Tween.to=function to(t,e,r){return new Tween(t,e,r)},Tween.from=function from(t,e){return Na(1,arguments)},Tween.delayedCall=function delayedCall(t,e,r,i){return new Tween(e,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:t,onComplete:e,onReverseComplete:e,onCompleteParams:r,onReverseCompleteParams:r,callbackScope:i})},Tween.fromTo=function fromTo(t,e,r){return Na(2,arguments)},Tween.set=function set(t,e){return e.duration=0,e.repeatDelay||(e.repeat=0),new Tween(t,e)},Tween.killTweensOf=function killTweensOf(t,e,r){return I.killTweensOf(t,e,r)},Tween}(qt);ja(Jt.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0}),ba("staggerTo,staggerFrom,staggerFromTo",function(r){Jt[r]=function(){var t=new Nt,e=wt.call(arguments,0);return e.splice("staggerFromTo"===r?5:4,0,0),t[r].apply(t,e)}});function dc(t,e,r){return t.setAttribute(e,r)}function lc(t,e,r,i){i.mSet(t,e,i.m.call(i.tween,r,i.mt),i)}var Gt=function _setterPlain(t,e,r){return t[e]=r},$t=function _setterFunc(t,e,r){return t[e](r)},Zt=function _setterFuncWithParam(t,e,r,i){return t[e](i.fp,r)},Kt=function _getSetter(t,e){return p(t[e])?$t:r(t[e])&&t.setAttribute?dc:Gt},Ht=function _renderPlain(t,e){return e.set(e.t,e.p,Math.round(1e6*(e.s+e.c*t))/1e6,e)},Wt=function _renderBoolean(t,e){return e.set(e.t,e.p,!!(e.s+e.c*t),e)},te=function _renderComplexString(t,e){var r=e._pt,i="";if(!t&&e.b)i=e.b;else if(1===t&&e.e)i=e.e;else{for(;r;)i=r.p+(r.m?r.m(r.s+r.c*t):Math.round(1e4*(r.s+r.c*t))/1e4)+i,r=r._next;i+=e.c}e.set(e.t,e.p,i,e)},ee=function _renderPropTweens(t,e){for(var r=e._pt;r;)r.r(t,r.d),r=r._next},re=function _addPluginModifier(t,e,r,i){for(var n,a=this._pt;a;)n=a._next,a.p===i&&a.modifier(t,e,r),a=n},ie=function _killPropTweensOf(t){for(var e,r,i=this._pt;i;)r=i._next,i.p===t&&!i.op||i.op===t?ra(this,i,"_pt"):i.dep||(e=1),i=r;return!e},ne=function _sortPropTweensByPriority(t){for(var e,r,i,n,a=t._pt;a;){for(e=a._next,r=i;r&&r.pr>a.pr;)r=r._next;(a._prev=r?r._prev:n)?a._prev._next=a:i=a,(a._next=r)?r._prev=a:n=a,a=e}t._pt=i},ae=(PropTween.prototype.modifier=function modifier(t,e,r){this.mSet=this.mSet||this.set,this.set=lc,this.m=t,this.mt=r,this.tween=e},PropTween);function PropTween(t,e,r,i,n,a,s,o,u){this.t=e,this.s=i,this.c=n,this.p=r,this.r=a||Ht,this.d=s||this,this.set=o||Gt,this.pr=u||0,(this._next=t)&&(t._prev=this)}ba(_t+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(t){return ut[t]=1}),ot.TweenMax=ot.TweenLite=Jt,ot.TimelineLite=ot.TimelineMax=Nt,I=new Nt({sortChildren:!1,defaults:L,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0}),Y.stringFilter=wb;var se={registerPlugin:function registerPlugin(){for(var t=arguments.length,e=new Array(t),r=0;r<t;r++)e[r]=arguments[r];e.forEach(function(t){return function _createPlugin(t){var e=(t=!t.name&&t.default||t).name,r=p(t),i=e&&!r&&t.init?function(){this._props=[]}:t,n={init:Q,render:ee,add:Yt,kill:ie,modifier:re,rawVars:0},a={targetTest:0,get:0,getSetter:Kt,aliases:{},register:0};if(Dt(),t!==i){if(ft[e])return;ja(i,ja(na(t,n),a)),mt(i.prototype,mt(n,na(t,a))),ft[i.prop=e]=i,t.targetTest&&(ct.push(i),ut[e]=1),e=("css"===e?"CSS":e.charAt(0).toUpperCase()+e.substr(1))+"Plugin"}P(e,i),t.register&&t.register(oe,i,ae)}(t)})},timeline:function timeline(t){return new Nt(t)},getTweensOf:function getTweensOf(t,e){return I.getTweensOf(t,e)},getProperty:function getProperty(i,t,e,r){o(i)&&(i=xt(i)[0]);var n=_(i||{}).get,a=e?ia:ha;return"native"===e&&(e=""),i?t?a((ft[t]&&ft[t].get||n)(i,t,e,r)):function(t,e,r){return a((ft[t]&&ft[t].get||n)(i,t,e,r))}:i},quickSetter:function quickSetter(r,e,i){if(1<(r=xt(r)).length){var n=r.map(function(t){return oe.quickSetter(t,e,i)}),a=n.length;return function(t){for(var e=a;e--;)n[e](t)}}r=r[0]||{};var s=ft[e],o=_(r),u=o.harness&&(o.harness.aliases||{})[e]||e,h=s?function(t){var e=new s;d._pt=0,e.init(r,i?t+i:t,d,0,[r]),e.render(1,e),d._pt&&ee(1,d)}:o.set(r,u);return s?h:function(t){return h(r,u,i?t+i:t,o,1)}},isTweening:function isTweening(t){return 0<I.getTweensOf(t,!0).length},defaults:function defaults(t){return t&&t.ease&&(t.ease=Rt(t.ease,L.ease)),ma(L,t||{})},config:function config(t){return ma(Y,t||{})},registerEffect:function registerEffect(t){var i=t.name,n=t.effect,e=t.plugins,a=t.defaults,r=t.extendTimeline;(e||"").split(",").forEach(function(t){return t&&!ft[t]&&!ot[t]&&O(i+" effect requires "+t+" plugin.")}),dt[i]=function(t,e,r){return n(xt(t),ja(e||{},a),r)},r&&(Nt.prototype[i]=function(t,e,r){return this.add(dt[i](t,s(e)?e:(r=e)&&{},this),r)})},registerEase:function registerEase(t,e){zt[t]=Rt(e)},parseEase:function parseEase(t,e){return arguments.length?Rt(t,e):zt},getById:function getById(t){return I.getById(t)},exportRoot:function exportRoot(e,r){void 0===e&&(e={});var i,n,a=new Nt(e);for(a.smoothChildTiming=t(e.smoothChildTiming),I.remove(a),a._dp=0,a._time=a._tTime=I._time,i=I._first;i;)n=i._next,!r&&!i._dur&&i instanceof Jt&&i.vars.onComplete===i._targets[0]||Ca(a,i,i._start-i._delay),i=n;return Ca(I,a,0),a},utils:{wrap:function wrap(e,t,r){var i=t-e;return W(e)?db(e,wrap(0,e.length),t):Oa(r,function(t){return(i+(t-e)%i)%i+e})},wrapYoyo:function wrapYoyo(e,t,r){var i=t-e,n=2*i;return W(e)?db(e,wrapYoyo(0,e.length-1),t):Oa(r,function(t){return e+(i<(t=(n+(t-e)%n)%n||0)?n-t:t)})},distribute:Ya,random:_a,snap:$a,normalize:function normalize(t,e,r){return Ot(t,e,0,1,r)},getUnit:Qa,clamp:function clamp(e,r,t){return Oa(t,function(t){return Tt(e,r,t)})},splitColor:rb,toArray:xt,selector:function selector(r){return r=xt(r)[0]||O("Invalid scope")||{},function(t){var e=r.current||r.nativeElement||r;return xt(t,e.querySelectorAll?e:e===r?O("Invalid scope")||a.createElement("div"):r)}},mapRange:Ot,pipe:function pipe(){for(var t=arguments.length,e=new Array(t),r=0;r<t;r++)e[r]=arguments[r];return function(t){return e.reduce(function(t,e){return e(t)},t)}},unitize:function unitize(e,r){return function(t){return e(parseFloat(t))+(r||Qa(t))}},interpolate:function interpolate(e,r,t,i){var n=isNaN(e+r)?0:function(t){return(1-t)*e+t*r};if(!n){var a,s,u,h,l,f=o(e),d={};if(!0===t&&(i=1)&&(t=null),f)e={p:e},r={p:r};else if(W(e)&&!W(r)){for(u=[],h=e.length,l=h-2,s=1;s<h;s++)u.push(interpolate(e[s-1],e[s]));h--,n=function func(t){t*=h;var e=Math.min(l,~~t);return u[e](t-e)},t=r}else i||(e=mt(W(e)?[]:{},e));if(!u){for(a in r)Yt.call(d,e,a,"get",r[a]);n=function func(t){return ee(t,d)||(f?e.p:e)}}}return Oa(t,n)},shuffle:Xa},install:M,effects:dt,ticker:St,updateRoot:Nt.updateRoot,plugins:ft,globalTimeline:I,core:{PropTween:ae,globals:P,Tween:Jt,Timeline:Nt,Animation:qt,getCache:_,_removeLinkedListItem:ra,suppressOverwrites:function suppressOverwrites(t){return R=t}}};ba("to,from,fromTo,delayedCall,set,killTweensOf",function(t){return se[t]=Jt[t]}),St.add(Nt.updateRoot),d=se.to({},{duration:0});function pc(t,e){for(var r=t._pt;r&&r.p!==e&&r.op!==e&&r.fp!==e;)r=r._next;return r}function rc(t,n){return{name:t,rawVars:1,init:function init(t,i,e){e._onInit=function(t){var e,r;if(o(i)&&(e={},ba(i,function(t){return e[t]=1}),i=e),n){for(r in e={},i)e[r]=n(i[r]);i=e}!function _addModifiers(t,e){var r,i,n,a=t._targets;for(r in e)for(i=a.length;i--;)(n=(n=t._ptLookup[i][r])&&n.d)&&(n._pt&&(n=pc(n,r)),n&&n.modifier&&n.modifier(e[r],t,a[i],r))}(t,i)}}}}var oe=se.registerPlugin({name:"attr",init:function init(t,e,r,i,n){var a,s;for(a in e)(s=this.add(t,"setAttribute",(t.getAttribute(a)||0)+"",e[a],i,n,0,0,a))&&(s.op=a),this._props.push(a)}},{name:"endArray",init:function init(t,e){for(var r=e.length;r--;)this.add(t,r,t[r]||0,e[r])}},rc("roundProps",Za),rc("modifiers"),rc("snap",$a))||se;Jt.version=Nt.version=oe.version="3.9.1",l=1,u()&&Dt();function ad(t,e){return e.set(e.t,e.p,Math.round(1e4*(e.s+e.c*t))/1e4+e.u,e)}function bd(t,e){return e.set(e.t,e.p,1===t?e.e:Math.round(1e4*(e.s+e.c*t))/1e4+e.u,e)}function cd(t,e){return e.set(e.t,e.p,t?Math.round(1e4*(e.s+e.c*t))/1e4+e.u:e.b,e)}function dd(t,e){var r=e.s+e.c*t;e.set(e.t,e.p,~~(r+(r<0?-.5:.5))+e.u,e)}function ed(t,e){return e.set(e.t,e.p,t?e.e:e.b,e)}function fd(t,e){return e.set(e.t,e.p,1!==t?e.b:e.e,e)}function gd(t,e,r){return t.style[e]=r}function hd(t,e,r){return t.style.setProperty(e,r)}function id(t,e,r){return t._gsap[e]=r}function jd(t,e,r){return t._gsap.scaleX=t._gsap.scaleY=r}function kd(t,e,r,i,n){var a=t._gsap;a.scaleX=a.scaleY=r,a.renderTransform(n,a)}function ld(t,e,r,i,n){var a=t._gsap;a[e]=r,a.renderTransform(n,a)}function pd(t,e){var r=he.createElementNS?he.createElementNS((e||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),t):he.createElement(t);return r.style?r:he.createElement(t)}function qd(t,e,r){var i=getComputedStyle(t);return i[e]||i.getPropertyValue(e.replace(Ie,"-$1").toLowerCase())||i.getPropertyValue(e)||!r&&qd(t,Xe(e)||e,1)||""}function td(){(function _windowExists(){return"undefined"!=typeof window})()&&window.document&&(ue=window,he=ue.document,le=he.documentElement,de=pd("div")||{style:{}},pd("div"),Qe=Xe(Qe),Ye=Qe+"Origin",de.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",ce=!!Xe("perspective"),fe=1)}function ud(t){var e,r=pd("svg",this.ownerSVGElement&&this.ownerSVGElement.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),i=this.parentNode,n=this.nextSibling,a=this.style.cssText;if(le.appendChild(r),r.appendChild(this),this.style.display="block",t)try{e=this.getBBox(),this._gsapBBox=this.getBBox,this.getBBox=ud}catch(t){}else this._gsapBBox&&(e=this._gsapBBox());return i&&(n?i.insertBefore(this,n):i.appendChild(this)),le.removeChild(r),this.style.cssText=a,e}function vd(t,e){for(var r=e.length;r--;)if(t.hasAttribute(e[r]))return t.getAttribute(e[r])}function wd(e){var r;try{r=e.getBBox()}catch(t){r=ud.call(e,!0)}return r&&(r.width||r.height)||e.getBBox===ud||(r=ud.call(e,!0)),!r||r.width||r.x||r.y?r:{x:+vd(e,["x","cx","x1"])||0,y:+vd(e,["y","cy","y1"])||0,width:0,height:0}}function xd(t){return!(!t.getCTM||t.parentNode&&!t.ownerSVGElement||!wd(t))}function yd(t,e){if(e){var r=t.style;e in Fe&&e!==Ye&&(e=Qe),r.removeProperty?("ms"!==e.substr(0,2)&&"webkit"!==e.substr(0,6)||(e="-"+e),r.removeProperty(e.replace(Ie,"-$1").toLowerCase())):r.removeAttribute(e)}}function zd(t,e,r,i,n,a){var s=new ae(t._pt,e,r,0,1,a?fd:ed);return(t._pt=s).b=i,s.e=n,t._props.push(r),s}function Bd(t,e,r,i){var n,a,s,o,u=parseFloat(r)||0,h=(r+"").trim().substr((u+"").length)||"px",l=de.style,f=Le.test(e),d="svg"===t.tagName.toLowerCase(),p=(d?"client":"offset")+(f?"Width":"Height"),c="px"===i,m="%"===i;return i===h||!u||Ue[i]||Ue[h]?u:("px"===h||c||(u=Bd(t,e,r,"px")),o=t.getCTM&&xd(t),!m&&"%"!==h||!Fe[e]&&!~e.indexOf("adius")?(l[f?"width":"height"]=100+(c?h:i),a=~e.indexOf("adius")||"em"===i&&t.appendChild&&!d?t:t.parentNode,o&&(a=(t.ownerSVGElement||{}).parentNode),a&&a!==he&&a.appendChild||(a=he.body),(s=a._gsap)&&m&&s.width&&f&&s.time===St.time?ca(u/s.width*100):(!m&&"%"!==h||(l.position=qd(t,"position")),a===t&&(l.position="static"),a.appendChild(de),n=de[p],a.removeChild(de),l.position="absolute",f&&m&&((s=_(a)).time=St.time,s.width=a[p]),ca(c?n*u/100:n&&u?100/n*u:0))):(n=o?t.getBBox()[f?"width":"height"]:t[p],ca(m?u/n*100:u/100*n)))}function Cd(t,e,r,i){var n;return fe||td(),e in Ne&&"transform"!==e&&~(e=Ne[e]).indexOf(",")&&(e=e.split(",")[0]),Fe[e]&&"transform"!==e?(n=Ze(t,i),n="transformOrigin"!==e?n[e]:n.svg?n.origin:Ke(qd(t,Ye))+" "+n.zOrigin+"px"):(n=t.style[e])&&"auto"!==n&&!i&&!~(n+"").indexOf("calc(")||(n=Je[e]&&Je[e](t,e,r)||qd(t,e)||aa(t,e)||("opacity"===e?1:0)),r&&!~(n+"").trim().indexOf(" ")?Bd(t,e,n,r)+r:n}function Dd(t,e,r,i){if(!r||"none"===r){var n=Xe(e,t,1),a=n&&qd(t,n,1);a&&a!==r?(e=n,r=a):"borderColor"===e&&(r=qd(t,"borderTopColor"))}var s,o,u,h,l,f,d,p,c,_,m,g,v=new ae(this._pt,t.style,e,0,1,te),y=0,b=0;if(v.b=r,v.e=i,r+="","auto"===(i+="")&&(t.style[e]=i,i=qd(t,e)||i,t.style[e]=r),wb(s=[r,i]),i=s[1],u=(r=s[0]).match(rt)||[],(i.match(rt)||[]).length){for(;o=rt.exec(i);)d=o[0],c=i.substring(y,o.index),l?l=(l+1)%5:"rgba("!==c.substr(-5)&&"hsla("!==c.substr(-5)||(l=1),d!==(f=u[b++]||"")&&(h=parseFloat(f)||0,m=f.substr((h+"").length),(g="="===d.charAt(1)?+(d.charAt(0)+"1"):0)&&(d=d.substr(2)),p=parseFloat(d),_=d.substr((p+"").length),y=rt.lastIndex-_.length,_||(_=_||Y.units[e]||m,y===i.length&&(i+=_,v.e+=_)),m!==_&&(h=Bd(t,e,f,_)||0),v._pt={_next:v._pt,p:c||1===b?c:",",s:h,c:g?g*p:p-h,m:l&&l<4||"zIndex"===e?Math.round:0});v.c=y<i.length?i.substring(y,i.length):""}else v.r="display"===e&&"none"===i?fd:ed;return nt.test(i)&&(v.e=0),this._pt=v}function Fd(t){var e=t.split(" "),r=e[0],i=e[1]||"50%";return"top"!==r&&"bottom"!==r&&"left"!==i&&"right"!==i||(t=r,r=i,i=t),e[0]=Ve[r]||r,e[1]=Ve[i]||i,e.join(" ")}function Gd(t,e){if(e.tween&&e.tween._time===e.tween._dur){var r,i,n,a=e.t,s=a.style,o=e.u,u=a._gsap;if("all"===o||!0===o)s.cssText="",i=1;else for(n=(o=o.split(",")).length;-1<--n;)r=o[n],Fe[r]&&(i=1,r="transformOrigin"===r?Ye:Qe),yd(a,r);i&&(yd(a,Qe),u&&(u.svg&&a.removeAttribute("transform"),Ze(a,1),u.uncache=1))}}function Kd(t){return"matrix(1, 0, 0, 1, 0, 0)"===t||"none"===t||!t}function Ld(t){var e=qd(t,Qe);return Kd(e)?Ge:e.substr(7).match(et).map(ca)}function Md(t,e){var r,i,n,a,s=t._gsap||_(t),o=t.style,u=Ld(t);return s.svg&&t.getAttribute("transform")?"1,0,0,1,0,0"===(u=[(n=t.transform.baseVal.consolidate().matrix).a,n.b,n.c,n.d,n.e,n.f]).join(",")?Ge:u:(u!==Ge||t.offsetParent||t===le||s.svg||(n=o.display,o.display="block",(r=t.parentNode)&&t.offsetParent||(a=1,i=t.nextSibling,le.appendChild(t)),u=Ld(t),n?o.display=n:yd(t,"display"),a&&(i?r.insertBefore(t,i):r?r.appendChild(t):le.removeChild(t))),e&&6<u.length?[u[0],u[1],u[4],u[5],u[12],u[13]]:u)}function Nd(t,e,r,i,n,a){var s,o,u,h=t._gsap,l=n||Md(t,!0),f=h.xOrigin||0,d=h.yOrigin||0,p=h.xOffset||0,c=h.yOffset||0,_=l[0],m=l[1],g=l[2],v=l[3],y=l[4],b=l[5],T=e.split(" "),w=parseFloat(T[0])||0,x=parseFloat(T[1])||0;r?l!==Ge&&(o=_*v-m*g)&&(u=w*(-m/o)+x*(_/o)-(_*b-m*y)/o,w=w*(v/o)+x*(-g/o)+(g*b-v*y)/o,x=u):(w=(s=wd(t)).x+(~T[0].indexOf("%")?w/100*s.width:w),x=s.y+(~(T[1]||T[0]).indexOf("%")?x/100*s.height:x)),i||!1!==i&&h.smooth?(y=w-f,b=x-d,h.xOffset=p+(y*_+b*g)-y,h.yOffset=c+(y*m+b*v)-b):h.xOffset=h.yOffset=0,h.xOrigin=w,h.yOrigin=x,h.smooth=!!i,h.origin=e,h.originIsAbsolute=!!r,t.style[Ye]="0px 0px",a&&(zd(a,h,"xOrigin",f,w),zd(a,h,"yOrigin",d,x),zd(a,h,"xOffset",p,h.xOffset),zd(a,h,"yOffset",c,h.yOffset)),t.setAttribute("data-svg-origin",w+" "+x)}function Qd(t,e,r){var i=Qa(e);return ca(parseFloat(e)+parseFloat(Bd(t,"x",r+"px",i)))+i}function Xd(t,e,r,i,n,a){var s,u,h=360,l=o(n),f=parseFloat(n)*(l&&~n.indexOf("rad")?Ee:1),d=a?f*a:f-i,p=i+d+"deg";return l&&("short"===(s=n.split("_")[1])&&(d%=h)!==d%180&&(d+=d<0?h:-h),"cw"===s&&d<0?d=(d+36e9)%h-~~(d/h)*h:"ccw"===s&&0<d&&(d=(d-36e9)%h-~~(d/h)*h)),t._pt=u=new ae(t._pt,e,r,i,d,bd),u.e=p,u.u="deg",t._props.push(r),u}function Yd(t,e){for(var r in e)t[r]=e[r];return t}function Zd(t,e,r){var i,n,a,s,o,u,h,l=Yd({},r._gsap),f=r.style;for(n in l.svg?(a=r.getAttribute("transform"),r.setAttribute("transform",""),f[Qe]=e,i=Ze(r,1),yd(r,Qe),r.setAttribute("transform",a)):(a=getComputedStyle(r)[Qe],f[Qe]=e,i=Ze(r,1),f[Qe]=a),Fe)(a=l[n])!==(s=i[n])&&"perspective,force3D,transformOrigin,svgOrigin".indexOf(n)<0&&(o=Qa(a)!==(h=Qa(s))?Bd(r,n,a,h):parseFloat(a),u=parseFloat(s),t._pt=new ae(t._pt,i,n,o,u-o,ad),t._pt.u=h||0,t._props.push(n));Yd(i,l)}var ue,he,le,fe,de,pe,ce,_e=zt.Power0,me=zt.Power1,ge=zt.Power2,ve=zt.Power3,ye=zt.Power4,be=zt.Linear,Te=zt.Quad,we=zt.Cubic,xe=zt.Quart,Oe=zt.Quint,Me=zt.Strong,ke=zt.Elastic,Ce=zt.Back,Pe=zt.SteppedEase,Ae=zt.Bounce,Se=zt.Sine,De=zt.Expo,ze=zt.Circ,Fe={},Ee=180/Math.PI,Be=Math.PI/180,Re=Math.atan2,Ie=/([A-Z])/g,Le=/(?:left|right|width|margin|padding|x)/i,qe=/[\s,\(]\S/,Ne={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},Qe="transform",Ye=Qe+"Origin",je="O,Moz,ms,Ms,Webkit".split(","),Xe=function _checkPropPrefix(t,e,r){var i=(e||de).style,n=5;if(t in i&&!r)return t;for(t=t.charAt(0).toUpperCase()+t.substr(1);n--&&!(je[n]+t in i););return n<0?null:(3===n?"ms":0<=n?je[n]:"")+t},Ue={deg:1,rad:1,turn:1},Ve={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},Je={clearProps:function clearProps(t,e,r,i,n){if("isFromStart"!==n.data){var a=t._pt=new ae(t._pt,e,r,0,0,Gd);return a.u=i,a.pr=-10,a.tween=n,t._props.push(r),1}}},Ge=[1,0,0,1,0,0],$e={},Ze=function _parseTransform(t,e){var r=t._gsap||new Lt(t);if("x"in r&&!e&&!r.uncache)return r;var i,n,a,s,o,u,h,l,f,d,p,c,_,m,g,v,y,b,T,w,x,O,M,k,C,P,A,S,D,z,F,E,B=t.style,R=r.scaleX<0,I="deg",L=qd(t,Ye)||"0";return i=n=a=u=h=l=f=d=p=0,s=o=1,r.svg=!(!t.getCTM||!xd(t)),m=Md(t,r.svg),r.svg&&(k=(!r.uncache||"0px 0px"===L)&&!e&&t.getAttribute("data-svg-origin"),Nd(t,k||L,!!k||r.originIsAbsolute,!1!==r.smooth,m)),c=r.xOrigin||0,_=r.yOrigin||0,m!==Ge&&(b=m[0],T=m[1],w=m[2],x=m[3],i=O=m[4],n=M=m[5],6===m.length?(s=Math.sqrt(b*b+T*T),o=Math.sqrt(x*x+w*w),u=b||T?Re(T,b)*Ee:0,(f=w||x?Re(w,x)*Ee+u:0)&&(o*=Math.abs(Math.cos(f*Be))),r.svg&&(i-=c-(c*b+_*w),n-=_-(c*T+_*x))):(E=m[6],z=m[7],A=m[8],S=m[9],D=m[10],F=m[11],i=m[12],n=m[13],a=m[14],h=(g=Re(E,D))*Ee,g&&(k=O*(v=Math.cos(-g))+A*(y=Math.sin(-g)),C=M*v+S*y,P=E*v+D*y,A=O*-y+A*v,S=M*-y+S*v,D=E*-y+D*v,F=z*-y+F*v,O=k,M=C,E=P),l=(g=Re(-w,D))*Ee,g&&(v=Math.cos(-g),F=x*(y=Math.sin(-g))+F*v,b=k=b*v-A*y,T=C=T*v-S*y,w=P=w*v-D*y),u=(g=Re(T,b))*Ee,g&&(k=b*(v=Math.cos(g))+T*(y=Math.sin(g)),C=O*v+M*y,T=T*v-b*y,M=M*v-O*y,b=k,O=C),h&&359.9<Math.abs(h)+Math.abs(u)&&(h=u=0,l=180-l),s=ca(Math.sqrt(b*b+T*T+w*w)),o=ca(Math.sqrt(M*M+E*E)),g=Re(O,M),f=2e-4<Math.abs(g)?g*Ee:0,p=F?1/(F<0?-F:F):0),r.svg&&(k=t.getAttribute("transform"),r.forceCSS=t.setAttribute("transform","")||!Kd(qd(t,Qe)),k&&t.setAttribute("transform",k))),90<Math.abs(f)&&Math.abs(f)<270&&(R?(s*=-1,f+=u<=0?180:-180,u+=u<=0?180:-180):(o*=-1,f+=f<=0?180:-180)),r.x=i-((r.xPercent=i&&(r.xPercent||(Math.round(t.offsetWidth/2)===Math.round(-i)?-50:0)))?t.offsetWidth*r.xPercent/100:0)+"px",r.y=n-((r.yPercent=n&&(r.yPercent||(Math.round(t.offsetHeight/2)===Math.round(-n)?-50:0)))?t.offsetHeight*r.yPercent/100:0)+"px",r.z=a+"px",r.scaleX=ca(s),r.scaleY=ca(o),r.rotation=ca(u)+I,r.rotationX=ca(h)+I,r.rotationY=ca(l)+I,r.skewX=f+I,r.skewY=d+I,r.transformPerspective=p+"px",(r.zOrigin=parseFloat(L.split(" ")[2])||0)&&(B[Ye]=Ke(L)),r.xOffset=r.yOffset=0,r.force3D=Y.force3D,r.renderTransform=r.svg?ir:ce?rr:He,r.uncache=0,r},Ke=function _firstTwoOnly(t){return(t=t.split(" "))[0]+" "+t[1]},He=function _renderNon3DTransforms(t,e){e.z="0px",e.rotationY=e.rotationX="0deg",e.force3D=0,rr(t,e)},We="0deg",tr="0px",er=") ",rr=function _renderCSSTransforms(t,e){var r=e||this,i=r.xPercent,n=r.yPercent,a=r.x,s=r.y,o=r.z,u=r.rotation,h=r.rotationY,l=r.rotationX,f=r.skewX,d=r.skewY,p=r.scaleX,c=r.scaleY,_=r.transformPerspective,m=r.force3D,g=r.target,v=r.zOrigin,y="",b="auto"===m&&t&&1!==t||!0===m;if(v&&(l!==We||h!==We)){var T,w=parseFloat(h)*Be,x=Math.sin(w),O=Math.cos(w);w=parseFloat(l)*Be,T=Math.cos(w),a=Qd(g,a,x*T*-v),s=Qd(g,s,-Math.sin(w)*-v),o=Qd(g,o,O*T*-v+v)}_!==tr&&(y+="perspective("+_+er),(i||n)&&(y+="translate("+i+"%, "+n+"%) "),!b&&a===tr&&s===tr&&o===tr||(y+=o!==tr||b?"translate3d("+a+", "+s+", "+o+") ":"translate("+a+", "+s+er),u!==We&&(y+="rotate("+u+er),h!==We&&(y+="rotateY("+h+er),l!==We&&(y+="rotateX("+l+er),f===We&&d===We||(y+="skew("+f+", "+d+er),1===p&&1===c||(y+="scale("+p+", "+c+er),g.style[Qe]=y||"translate(0, 0)"},ir=function _renderSVGTransforms(t,e){var r,i,n,a,s,o=e||this,u=o.xPercent,h=o.yPercent,l=o.x,f=o.y,d=o.rotation,p=o.skewX,c=o.skewY,_=o.scaleX,m=o.scaleY,g=o.target,v=o.xOrigin,y=o.yOrigin,b=o.xOffset,T=o.yOffset,w=o.forceCSS,x=parseFloat(l),O=parseFloat(f);d=parseFloat(d),p=parseFloat(p),(c=parseFloat(c))&&(p+=c=parseFloat(c),d+=c),d||p?(d*=Be,p*=Be,r=Math.cos(d)*_,i=Math.sin(d)*_,n=Math.sin(d-p)*-m,a=Math.cos(d-p)*m,p&&(c*=Be,s=Math.tan(p-c),n*=s=Math.sqrt(1+s*s),a*=s,c&&(s=Math.tan(c),r*=s=Math.sqrt(1+s*s),i*=s)),r=ca(r),i=ca(i),n=ca(n),a=ca(a)):(r=_,a=m,i=n=0),(x&&!~(l+"").indexOf("px")||O&&!~(f+"").indexOf("px"))&&(x=Bd(g,"x",l,"px"),O=Bd(g,"y",f,"px")),(v||y||b||T)&&(x=ca(x+v-(v*r+y*n)+b),O=ca(O+y-(v*i+y*a)+T)),(u||h)&&(s=g.getBBox(),x=ca(x+u/100*s.width),O=ca(O+h/100*s.height)),s="matrix("+r+","+i+","+n+","+a+","+x+","+O+")",g.setAttribute("transform",s),w&&(g.style[Qe]=s)};ba("padding,margin,Width,Radius",function(e,r){var t="Right",i="Bottom",n="Left",o=(r<3?["Top",t,i,n]:["Top"+n,"Top"+t,i+t,i+n]).map(function(t){return r<2?e+t:"border"+t+e});Je[1<r?"border"+e:e]=function(e,t,r,i,n){var a,s;if(arguments.length<4)return a=o.map(function(t){return Cd(e,t,r)}),5===(s=a.join(" ")).split(a[0]).length?a[0]:s;a=(i+"").split(" "),s={},o.forEach(function(t,e){return s[t]=a[e]=a[e]||a[(e-1)/2|0]}),e.init(t,s,n)}});var nr,ar,sr,or={name:"css",register:td,targetTest:function targetTest(t){return t.style&&t.nodeType},init:function init(t,e,r,i,n){var a,s,u,h,l,f,d,p,c,_,m,g,v,y,b,T=this._props,w=t.style,x=r.vars.startAt;for(d in fe||td(),e)if("autoRound"!==d&&(s=e[d],!ft[d]||!Tb(d,e,r,i,t,n)))if(l=typeof s,f=Je[d],"function"===l&&(l=typeof(s=s.call(r,i,t,n))),"string"===l&&~s.indexOf("random(")&&(s=gb(s)),f)f(this,t,d,s,r)&&(b=1);else if("--"===d.substr(0,2))a=(getComputedStyle(t).getPropertyValue(d)+"").trim(),s+="",Pt.lastIndex=0,Pt.test(a)||(p=Qa(a),c=Qa(s)),c?p!==c&&(a=Bd(t,d,a,c)+c):p&&(s+=p),this.add(w,"setProperty",a,s,i,n,0,0,d),T.push(d);else if("undefined"!==l){if(x&&d in x?(a="function"==typeof x[d]?x[d].call(r,i,t,n):x[d],o(a)&&~a.indexOf("random(")&&(a=gb(a)),Qa(a+"")||(a+=Y.units[d]||Qa(Cd(t,d))||""),"="===(a+"").charAt(1)&&(a=Cd(t,d))):a=Cd(t,d),h=parseFloat(a),(_="string"===l&&"="===s.charAt(1)?+(s.charAt(0)+"1"):0)&&(s=s.substr(2)),u=parseFloat(s),d in Ne&&("autoAlpha"===d&&(1===h&&"hidden"===Cd(t,"visibility")&&u&&(h=0),zd(this,w,"visibility",h?"inherit":"hidden",u?"inherit":"hidden",!u)),"scale"!==d&&"transform"!==d&&~(d=Ne[d]).indexOf(",")&&(d=d.split(",")[0])),m=d in Fe)if(g||((v=t._gsap).renderTransform&&!e.parseTransform||Ze(t,e.parseTransform),y=!1!==e.smoothOrigin&&v.smooth,(g=this._pt=new ae(this._pt,w,Qe,0,1,v.renderTransform,v,0,-1)).dep=1),"scale"===d)this._pt=new ae(this._pt,v,"scaleY",v.scaleY,(_?_*u:u-v.scaleY)||0),T.push("scaleY",d),d+="X";else{if("transformOrigin"===d){s=Fd(s),v.svg?Nd(t,s,0,y,0,this):((c=parseFloat(s.split(" ")[2])||0)!==v.zOrigin&&zd(this,v,"zOrigin",v.zOrigin,c),zd(this,w,d,Ke(a),Ke(s)));continue}if("svgOrigin"===d){Nd(t,s,1,y,0,this);continue}if(d in $e){Xd(this,v,d,h,s,_);continue}if("smoothOrigin"===d){zd(this,v,"smooth",v.smooth,s);continue}if("force3D"===d){v[d]=s;continue}if("transform"===d){Zd(this,s,t);continue}}else d in w||(d=Xe(d)||d);if(m||(u||0===u)&&(h||0===h)&&!qe.test(s)&&d in w)u=u||0,(p=(a+"").substr((h+"").length))!==(c=Qa(s)||(d in Y.units?Y.units[d]:p))&&(h=Bd(t,d,a,c)),this._pt=new ae(this._pt,m?v:w,d,h,_?_*u:u-h,m||"px"!==c&&"zIndex"!==d||!1===e.autoRound?ad:dd),this._pt.u=c||0,p!==c&&"%"!==c&&(this._pt.b=a,this._pt.r=cd);else if(d in w)Dd.call(this,t,d,a,s);else{if(!(d in t)){N(d,s);continue}this.add(t,d,a||t[d],s,i,n)}T.push(d)}b&&ne(this)},get:Cd,aliases:Ne,getSetter:function getSetter(t,e,i){var n=Ne[e];return n&&n.indexOf(",")<0&&(e=n),e in Fe&&e!==Ye&&(t._gsap.x||Cd(t,"x"))?i&&pe===i?"scale"===e?jd:id:(pe=i||{})&&("scale"===e?kd:ld):t.style&&!r(t.style[e])?gd:~e.indexOf("-")?hd:Kt(t,e)},core:{_removeProperty:yd,_getMatrix:Md}};oe.utils.checkPrefix=Xe,sr=ba((nr="x,y,z,scale,scaleX,scaleY,xPercent,yPercent")+","+(ar="rotation,rotationX,rotationY,skewX,skewY")+",transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective",function(t){Fe[t]=1}),ba(ar,function(t){Y.units[t]="deg",$e[t]=1}),Ne[sr[13]]=nr+","+ar,ba("0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY",function(t){var e=t.split(":");Ne[e[1]]=sr[e[0]]}),ba("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(t){Y.units[t]="px"}),oe.registerPlugin(or);var ur=oe.registerPlugin(or)||oe,hr=ur.core.Tween;e.Back=Ce,e.Bounce=Ae,e.CSSPlugin=or,e.Circ=ze,e.Cubic=we,e.Elastic=ke,e.Expo=De,e.Linear=be,e.Power0=_e,e.Power1=me,e.Power2=ge,e.Power3=ve,e.Power4=ye,e.Quad=Te,e.Quart=xe,e.Quint=Oe,e.Sine=Se,e.SteppedEase=Pe,e.Strong=Me,e.TimelineLite=Nt,e.TimelineMax=Nt,e.TweenLite=Jt,e.TweenMax=hr,e.default=ur,e.gsap=ur;if (typeof(window)==="undefined"||window!==e){Object.defineProperty(e,"__esModule",{value:!0})} else {delete e.default}});


!(function (e, t) {
	"object" == typeof exports && "object" == typeof module
		? (module.exports = t())
		: "function" == typeof define && define.amd
		? define([], t)
		: "object" == typeof exports
		? (exports.AirDatepicker = t())
		: (e.AirDatepicker = t());
})(this, function () {
	return (function () {
		"use strict";
		var e = {
				d: function (t, i) {
					for (var s in i)
						e.o(i, s) &&
							!e.o(t, s) &&
							Object.defineProperty(t, s, {
								enumerable: !0,
								get: i[s],
							});
				},
				o: function (e, t) {
					return Object.prototype.hasOwnProperty.call(e, t);
				},
			},
			t = {};
		e.d(t, {
			default: function () {
				return j;
			},
		});
		var i = {
				days: "days",
				months: "months",
				years: "years",
				day: "day",
				month: "month",
				year: "year",
				eventChangeViewDate: "changeViewDate",
				eventChangeCurrentView: "changeCurrentView",
				eventChangeFocusDate: "changeFocusDate",
				eventChangeSelectedDate: "changeSelectedDate",
				eventChangeTime: "changeTime",
				eventChangeLastSelectedDate: "changeLastSelectedDate",
				actionSelectDate: "selectDate",
				actionUnselectDate: "unselectDate",
				cssClassWeekend: "-weekend-",
			},
			s = {
				classes: "",
				inline: !1,
				locale: {
					days: [
						"Воскресенье",
						"Понедельник",
						"Вторник",
						"Среда",
						"Четверг",
						"Пятница",
						"Суббота",
					],
					daysShort: [
						"Вос",
						"Пон",
						"Вто",
						"Сре",
						"Чет",
						"Пят",
						"Суб",
					],
					daysMin: ["Вс", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"],
					months: [
						"Январь",
						"Февраль",
						"Март",
						"Апрель",
						"Май",
						"Июнь",
						"Июль",
						"Август",
						"Сентябрь",
						"Октябрь",
						"Ноябрь",
						"Декабрь",
					],
					monthsShort: [
						"Янв",
						"Фев",
						"Мар",
						"Апр",
						"Май",
						"Июн",
						"Июл",
						"Авг",
						"Сен",
						"Окт",
						"Ноя",
						"Дек",
					],
					today: "Сегодня",
					clear: "Очистить",
					dateFormat: "dd.MM.yyyy",
					timeFormat: "HH:mm",
					firstDay: 1,
				},
				startDate: new Date(),
				firstDay: "",
				weekends: [6, 0],
				dateFormat: "",
				altField: "",
				altFieldDateFormat: "T",
				toggleSelected: !0,
				keyboardNav: !0,
				selectedDates: !1,
				container: "",
				isMobile: !1,
				visible: !1,
				position: "bottom left",
				offset: 12,
				view: i.days,
				minView: i.days,
				showOtherMonths: !0,
				selectOtherMonths: !0,
				moveToOtherMonthsOnSelect: !0,
				showOtherYears: !0,
				selectOtherYears: !0,
				moveToOtherYearsOnSelect: !0,
				minDate: "",
				maxDate: "",
				disableNavWhenOutOfRange: !0,
				multipleDates: !1,
				multipleDatesSeparator: ", ",
				range: !1,
				dynamicRange: !0,
				buttons: !1,
				monthsField: "monthsShort",
				showEvent: "focus",
				autoClose: !1,
				prevHtml: '<svg><path d="M 17,12 l -5,5 l 5,5"></path></svg>',
				nextHtml: '<svg><path d="M 14,12 l 5,5 l -5,5"></path></svg>',
				navTitles: {
					days: "MMMM, <i>yyyy</i>",
					months: "yyyy",
					years: "yyyy1 - yyyy2",
				},
				timepicker: !1,
				onlyTimepicker: !1,
				dateTimeSeparator: " ",
				timeFormat: "",
				minHours: 0,
				maxHours: 24,
				minMinutes: 0,
				maxMinutes: 59,
				hoursStep: 1,
				minutesStep: 1,
				onSelect: !1,
				onChangeViewDate: !1,
				onChangeView: !1,
				onRenderCell: !1,
				onShow: !1,
				onHide: !1,
				onClickDayName: !1,
			};
		function a(e) {
			let t =
				arguments.length > 1 && void 0 !== arguments[1]
					? arguments[1]
					: document;
			return "string" == typeof e ? t.querySelector(e) : e;
		}
		function n() {
			let {
					tagName: e = "div",
					className: t = "",
					innerHtml: i = "",
					id: s = "",
					attrs: a = {},
				} = arguments.length > 0 && void 0 !== arguments[0]
					? arguments[0]
					: {},
				n = document.createElement(e);
			return (
				t && n.classList.add(...t.split(" ")),
				s && (n.id = s),
				i && (n.innerHTML = i),
				a && r(n, a),
				n
			);
		}
		function r(e, t) {
			for (let [i, s] of Object.entries(t))
				void 0 !== s && e.setAttribute(i, s);
			return e;
		}
		function h(e) {
			return new Date(e.getFullYear(), e.getMonth() + 1, 0).getDate();
		}
		function o(e) {
			let t = e.getHours(),
				i = t % 12 == 0 ? 12 : t % 12;
			return {
				year: e.getFullYear(),
				month: e.getMonth(),
				fullMonth:
					e.getMonth() + 1 < 10
						? "0" + (e.getMonth() + 1)
						: e.getMonth() + 1,
				date: e.getDate(),
				fullDate: e.getDate() < 10 ? "0" + e.getDate() : e.getDate(),
				day: e.getDay(),
				hours: t,
				fullHours: l(t),
				hours12: i,
				fullHours12: l(i),
				minutes: e.getMinutes(),
				fullMinutes:
					e.getMinutes() < 10 ? "0" + e.getMinutes() : e.getMinutes(),
			};
		}
		function l(e) {
			return e < 10 ? "0" + e : e;
		}
		function d(e) {
			let t = 10 * Math.floor(e.getFullYear() / 10);
			return [t, t + 9];
		}
		function c() {
			let e = [];
			for (var t = arguments.length, i = new Array(t), s = 0; s < t; s++)
				i[s] = arguments[s];
			return (
				i.forEach((t) => {
					if ("object" == typeof t)
						for (let i in t) t[i] && e.push(i);
					else t && e.push(t);
				}),
				e.join(" ")
			);
		}
		function u(e, t) {
			let s =
				arguments.length > 2 && void 0 !== arguments[2]
					? arguments[2]
					: i.days;
			if (!e || !t) return !1;
			let a = o(e),
				n = o(t),
				r = {
					[i.days]:
						a.date === n.date &&
						a.month === n.month &&
						a.year === n.year,
					[i.months]: a.month === n.month && a.year === n.year,
					[i.years]: a.year === n.year,
				};
			return r[s];
		}
		function p(e, t, i) {
			let s = g(e, !1).getTime(),
				a = g(t, !1).getTime();
			return i ? s >= a : s > a;
		}
		function m(e, t) {
			return !p(e, t, !0);
		}
		function g(e) {
			let t =
					!(arguments.length > 1 && void 0 !== arguments[1]) ||
					arguments[1],
				i = new Date(e.getTime());
			return "boolean" != typeof t || t || D(i), i;
		}
		function D(e) {
			return e.setHours(0, 0, 0, 0), e;
		}
		function v(e, t, i) {
			e.length
				? e.forEach((e) => {
						e.addEventListener(t, i);
				  })
				: e.addEventListener(t, i);
		}
		function y(e, t) {
			return (
				!(!e || e === document || e instanceof DocumentFragment) &&
				(e.matches(t) ? e : y(e.parentNode, t))
			);
		}
		function f(e, t, i) {
			return e > i ? i : e < t ? t : e;
		}
		function w(e) {
			for (
				var t = arguments.length,
					i = new Array(t > 1 ? t - 1 : 0),
					s = 1;
				s < t;
				s++
			)
				i[s - 1] = arguments[s];
			return (
				i
					.filter((e) => e)
					.forEach((t) => {
						for (let [i, s] of Object.entries(t))
							if (
								void 0 !== s &&
								"[object Object]" === s.toString()
							) {
								let t =
										void 0 !== e[i]
											? e[i].toString()
											: void 0,
									a = s.toString(),
									n = Array.isArray(s) ? [] : {};
								(e[i] = e[i] ? (t !== a ? n : e[i]) : n),
									w(e[i], s);
							} else e[i] = s;
					}),
				e
			);
		}
		function b(e) {
			let t = e;
			return (
				e instanceof Date || (t = new Date(e)),
				isNaN(t.getTime()) &&
					(console.log(
						'Unable to convert value "'.concat(
							e,
							'" to Date object'
						)
					),
					(t = !1)),
				t
			);
		}
		function k(e) {
			let t = "\\s|\\.|-|/|\\\\|,|\\$|\\!|\\?|:|;";
			return new RegExp("(^|>|" + t + ")(" + e + ")($|<|" + t + ")", "g");
		}
		function C(e, t, i) {
			return (
				t in e
					? Object.defineProperty(e, t, {
							value: i,
							enumerable: !0,
							configurable: !0,
							writable: !0,
					  })
					: (e[t] = i),
				e
			);
		}
		class _ {
			constructor() {
				let {
					type: e,
					date: t,
					dp: i,
					opts: s,
					body: a,
				} = arguments.length > 0 && void 0 !== arguments[0]
					? arguments[0]
					: {};
				C(this, "focus", () => {
					this.$cell.classList.add("-focus-"), (this.focused = !0);
				}),
					C(this, "removeFocus", () => {
						this.$cell.classList.remove("-focus-"),
							(this.focused = !1);
					}),
					C(this, "select", () => {
						this.$cell.classList.add("-selected-"),
							(this.selected = !0);
					}),
					C(this, "removeSelect", () => {
						this.$cell.classList.remove(
							"-selected-",
							"-range-from-",
							"-range-to-"
						),
							(this.selected = !1);
					}),
					C(this, "onChangeSelectedDate", () => {
						this.isDisabled ||
							(this._handleSelectedStatus(),
							this.opts.range && this._handleRangeStatus());
					}),
					C(this, "onChangeFocusDate", (e) => {
						if (!e)
							return void (this.focused && this.removeFocus());
						let t = u(e, this.date, this.type);
						t
							? this.focus()
							: !t && this.focused && this.removeFocus(),
							this.opts.range && this._handleRangeStatus();
					}),
					C(
						this,
						"render",
						() => (
							(this.$cell.innerHTML = this._getHtml()),
							(this.$cell.adpCell = this),
							this.$cell
						)
					),
					(this.type = e),
					(this.singleType = this.type.slice(0, -1)),
					(this.date = t),
					(this.dp = i),
					(this.opts = s),
					(this.body = a),
					(this.customData = !1),
					this.init();
			}
			init() {
				let { range: e, onRenderCell: t } = this.opts;
				t &&
					(this.customData = t({
						date: this.date,
						cellType: this.singleType,
						datepicker: this.dp,
					})),
					this._createElement(),
					this._bindDatepickerEvents(),
					this._handleInitialFocusStatus(),
					this.dp.hasSelectedDates &&
						(this._handleSelectedStatus(),
						e && this._handleRangeStatus());
			}
			_bindDatepickerEvents() {
				this.dp.on(
					i.eventChangeSelectedDate,
					this.onChangeSelectedDate
				),
					this.dp.on(i.eventChangeFocusDate, this.onChangeFocusDate);
			}
			unbindDatepickerEvents() {
				this.dp.off(
					i.eventChangeSelectedDate,
					this.onChangeSelectedDate
				),
					this.dp.off(i.eventChangeFocusDate, this.onChangeFocusDate);
			}
			_createElement() {
				var e;
				let { year: t, month: i, date: s } = o(this.date),
					a =
						(null === (e = this.customData) || void 0 === e
							? void 0
							: e.attrs) || {};
				this.$cell = n({
					className: this._getClassName(),
					attrs: {
						"data-year": t,
						"data-month": i,
						"data-date": s,
						...a,
					},
				});
			}
			_getClassName() {
				var e, t;
				let s = new Date(),
					{ selectOtherMonths: a, selectOtherYears: n } = this.opts,
					{ minDate: r, maxDate: h } = this.dp,
					{ day: l } = o(this.date),
					d = this._isOutOfMinMaxRange(),
					p =
						null === (e = this.customData) || void 0 === e
							? void 0
							: e.disabled,
					m = c(
						"air-datepicker-cell",
						"-".concat(this.singleType, "-"),
						{
							"-current-": u(s, this.date, this.type),
							"-min-date-": r && u(r, this.date, this.type),
							"-max-date-": h && u(h, this.date, this.type),
						}
					),
					g = "";
				switch (this.type) {
					case i.days:
						g = c({
							"-weekend-": this.dp.isWeekend(l),
							"-other-month-": this.isOtherMonth,
							"-disabled-": (this.isOtherMonth && !a) || d || p,
						});
						break;
					case i.months:
						g = c({ "-disabled-": d || p });
						break;
					case i.years:
						g = c({
							"-other-decade-": this.isOtherDecade,
							"-disabled-": d || (this.isOtherDecade && !n) || p,
						});
				}
				return c(
					m,
					g,
					null === (t = this.customData) || void 0 === t
						? void 0
						: t.classes
				);
			}
			_getHtml() {
				var e;
				let { year: t, month: s, date: a } = o(this.date),
					{ showOtherMonths: n, showOtherYears: r } = this.opts;
				if (null !== (e = this.customData) && void 0 !== e && e.html)
					return this.customData.html;
				switch (this.type) {
					case i.days:
						return !n && this.isOtherMonth ? "" : a;
					case i.months:
						return this.dp.locale[this.opts.monthsField][s];
					case i.years:
						return !r && this.isOtherDecade ? "" : t;
				}
			}
			_isOutOfMinMaxRange() {
				let { minDate: e, maxDate: t } = this.dp,
					{ type: s, date: a } = this,
					{ month: n, year: r, date: h } = o(a),
					l = s === i.days,
					d = s === i.years,
					c =
						!!e &&
						new Date(r, d ? e.getMonth() : n, l ? h : e.getDate()),
					u =
						!!t &&
						new Date(r, d ? t.getMonth() : n, l ? h : t.getDate());
				return e && t
					? m(c, e) || p(u, t)
					: e
					? m(c, e)
					: t
					? p(u, t)
					: void 0;
			}
			destroy() {
				this.unbindDatepickerEvents();
			}
			_handleRangeStatus() {
				let { rangeDateFrom: e, rangeDateTo: t } = this.dp,
					i = c({
						"-in-range-":
							e &&
							t &&
							((s = this.date),
							(a = e),
							(n = t),
							p(s, a) && m(s, n)),
						"-range-from-": e && u(this.date, e, this.type),
						"-range-to-": t && u(this.date, t, this.type),
					});
				var s, a, n;
				this.$cell.classList.remove(
					"-range-from-",
					"-range-to-",
					"-in-range-"
				),
					i && this.$cell.classList.add(...i.split(" "));
			}
			_handleSelectedStatus() {
				let e = this.dp._checkIfDateIsSelected(this.date, this.type);
				e ? this.select() : !e && this.selected && this.removeSelect();
			}
			_handleInitialFocusStatus() {
				u(this.dp.focusDate, this.date, this.type) && this.focus();
			}
			get isDisabled() {
				return this.$cell.matches(".-disabled-");
			}
			get isOtherMonth() {
				return this.dp.isOtherMonth(this.date);
			}
			get isOtherDecade() {
				return this.dp.isOtherDecade(this.date);
			}
		}
		function M(e, t, i) {
			return (
				t in e
					? Object.defineProperty(e, t, {
							value: i,
							enumerable: !0,
							configurable: !0,
							writable: !0,
					  })
					: (e[t] = i),
				e
			);
		}
		let $ = {
			[i.days]:
				'<div class="air-datepicker-body--day-names"></div>' +
				'<div class="air-datepicker-body--cells -'.concat(
					i.days,
					'-"></div>'
				),
			[i.months]: '<div class="air-datepicker-body--cells -'.concat(
				i.months,
				'-"></div>'
			),
			[i.years]: '<div class="air-datepicker-body--cells -'.concat(
				i.years,
				'-"></div>'
			),
		};
		const S = ".air-datepicker-cell";
		class T {
			constructor(e) {
				let { dp: t, type: s, opts: a } = e;
				M(this, "handleClick", (e) => {
					let t = e.target.closest(S).adpCell;
					if (t.isDisabled) return;
					if (!this.dp.isMinViewReached) return void this.dp.down();
					let i = this.dp._checkIfDateIsSelected(t.date, t.type);
					i
						? this.dp._handleAlreadySelectedDates(i, t.date)
						: this.dp.selectDate(t.date);
				}),
					M(this, "handleDayNameClick", (e) => {
						let t = e.target.getAttribute("data-day-index");
						this.opts.onClickDayName({
							dayIndex: Number(t),
							datepicker: this.dp,
						});
					}),
					M(this, "onChangeCurrentView", (e) => {
						e !== this.type
							? this.hide()
							: (this.show(), this.render());
					}),
					M(this, "onMouseOverCell", (e) => {
						let t = y(e.target, S);
						this.dp.setFocusDate(!!t && t.adpCell.date);
					}),
					M(this, "onMouseOutCell", () => {
						this.dp.setFocusDate(!1);
					}),
					M(this, "onClickBody", (e) => {
						let { onClickDayName: t } = this.opts,
							i = e.target;
						i.closest(S) && this.handleClick(e),
							t &&
								i.closest(".air-datepicker-body--day-name") &&
								this.handleDayNameClick(e);
					}),
					M(this, "onMouseDown", (e) => {
						this.pressed = !0;
						let t = y(e.target, S),
							i = t && t.adpCell;
						u(i.date, this.dp.rangeDateFrom) &&
							(this.rangeFromFocused = !0),
							u(i.date, this.dp.rangeDateTo) &&
								(this.rangeToFocused = !0);
					}),
					M(this, "onMouseMove", (e) => {
						if (!this.pressed || !this.dp.isMinViewReached) return;
						e.preventDefault();
						let t = y(e.target, S),
							i = t && t.adpCell,
							{
								selectedDates: s,
								rangeDateTo: a,
								rangeDateFrom: n,
							} = this.dp;
						if (!i || i.isDisabled) return;
						let { date: r } = i;
						if (2 === s.length) {
							if (this.rangeFromFocused && !p(r, a)) {
								let { hours: e, minutes: t } = o(n);
								r.setHours(e),
									r.setMinutes(t),
									(this.dp.rangeDateFrom = r),
									this.dp.replaceDate(n, r);
							}
							if (this.rangeToFocused && !m(r, n)) {
								let { hours: e, minutes: t } = o(a);
								r.setHours(e),
									r.setMinutes(t),
									(this.dp.rangeDateTo = r),
									this.dp.replaceDate(a, r);
							}
						}
					}),
					M(this, "onMouseUp", () => {
						(this.pressed = !1),
							(this.rangeFromFocused = !1),
							(this.rangeToFocused = !1);
					}),
					M(this, "onChangeViewDate", (e, t) => {
						if (!this.isVisible) return;
						let s = d(e),
							a = d(t);
						switch (this.dp.currentView) {
							case i.days:
								if (u(e, t, i.months)) return;
								break;
							case i.months:
								if (u(e, t, i.years)) return;
								break;
							case i.years:
								if (s[0] === a[0] && s[1] === a[1]) return;
						}
						this.render();
					}),
					M(this, "render", () => {
						this.destroyCells(),
							this._generateCells(),
							this.cells.forEach((e) => {
								this.$cells.appendChild(e.render());
							});
					}),
					(this.dp = t),
					(this.type = s),
					(this.opts = a),
					(this.cells = []),
					(this.$el = ""),
					(this.pressed = !1),
					(this.isVisible = !0),
					this.init();
			}
			init() {
				this._buildBaseHtml(),
					this.type === i.days && this.renderDayNames(),
					this.render(),
					this._bindEvents(),
					this._bindDatepickerEvents();
			}
			_bindEvents() {
				let { range: e, dynamicRange: t } = this.opts;
				v(this.$el, "mouseover", this.onMouseOverCell),
					v(this.$el, "mouseout", this.onMouseOutCell),
					v(this.$el, "click", this.onClickBody),
					e &&
						t &&
						(v(this.$el, "mousedown", this.onMouseDown),
						v(this.$el, "mousemove", this.onMouseMove),
						v(window.document, "mouseup", this.onMouseUp));
			}
			_bindDatepickerEvents() {
				this.dp.on(i.eventChangeViewDate, this.onChangeViewDate),
					this.dp.on(
						i.eventChangeCurrentView,
						this.onChangeCurrentView
					);
			}
			_buildBaseHtml() {
				(this.$el = n({
					className: "air-datepicker-body -".concat(this.type, "-"),
					innerHtml: $[this.type],
				})),
					(this.$names = a(
						".air-datepicker-body--day-names",
						this.$el
					)),
					(this.$cells = a(".air-datepicker-body--cells", this.$el));
			}
			_getDayNamesHtml() {
				let e =
						arguments.length > 0 && void 0 !== arguments[0]
							? arguments[0]
							: this.dp.locale.firstDay,
					t = "",
					s = this.dp.isWeekend,
					{ onClickDayName: a } = this.opts,
					n = e,
					r = 0;
				for (; r < 7; ) {
					let e = n % 7,
						h = c("air-datepicker-body--day-name", {
							[i.cssClassWeekend]: s(e),
							"-clickable-": !!a,
						}),
						o = this.dp.locale.daysMin[e];
					(t += '<div class="'
						.concat(h, "\" data-day-index='")
						.concat(e, "'>")
						.concat(o, "</div>")),
						r++,
						n++;
				}
				return t;
			}
			_getDaysCells() {
				let {
						viewDate: e,
						locale: { firstDay: t },
					} = this.dp,
					i = h(e),
					{ year: s, month: a } = o(e),
					n = new Date(s, a, 1),
					r = new Date(s, a, i),
					l = n.getDay() - t,
					d = 6 - r.getDay() + t;
				(l = l < 0 ? l + 7 : l), (d = d > 6 ? d - 7 : d);
				let c = (function (e, t) {
						let { year: i, month: s, date: a } = o(e);
						return new Date(i, s, a - t);
					})(n, l),
					u = i + l + d,
					p = c.getDate(),
					{ year: m, month: g } = o(c),
					D = 0;
				for (; D < u; ) {
					let e = new Date(m, g, p + D);
					this._generateCell(e), D++;
				}
			}
			_generateCell(e) {
				let { type: t, dp: i, opts: s } = this,
					a = new _({ type: t, dp: i, opts: s, date: e, body: this });
				return this.cells.push(a), a;
			}
			_generateDayCells() {
				this._getDaysCells();
			}
			_generateMonthCells() {
				let { year: e } = this.dp.parsedViewDate,
					t = 0;
				for (; t < 12; )
					this.cells.push(this._generateCell(new Date(e, t))), t++;
			}
			_generateYearCells() {
				let e = d(this.dp.viewDate),
					t = e[0] - 1,
					i = e[1] + 1,
					s = t;
				for (; s <= i; )
					this.cells.push(this._generateCell(new Date(s, 0))), s++;
			}
			renderDayNames() {
				this.$names.innerHTML = this._getDayNamesHtml();
			}
			_generateCells() {
				switch (this.type) {
					case i.days:
						this._generateDayCells();
						break;
					case i.months:
						this._generateMonthCells();
						break;
					case i.years:
						this._generateYearCells();
				}
			}
			show() {
				(this.isVisible = !0), this.$el.classList.remove("-hidden-");
			}
			hide() {
				(this.isVisible = !1), this.$el.classList.add("-hidden-");
			}
			destroyCells() {
				this.cells.forEach((e) => e.destroy()),
					(this.cells = []),
					(this.$cells.innerHTML = "");
			}
			destroy() {
				this.destroyCells(),
					this.dp.off(i.eventChangeViewDate, this.onChangeViewDate),
					this.dp.off(
						i.eventChangeCurrentView,
						this.onChangeCurrentView
					);
			}
		}
		function F(e, t, i) {
			return (
				t in e
					? Object.defineProperty(e, t, {
							value: i,
							enumerable: !0,
							configurable: !0,
							writable: !0,
					  })
					: (e[t] = i),
				e
			);
		}
		class V {
			constructor(e) {
				let { dp: t, opts: i } = e;
				F(this, "onClickNav", (e) => {
					let t = y(e.target, ".air-datepicker-nav--action");
					if (!t) return;
					let i = t.dataset.action;
					this.dp[i]();
				}),
					F(this, "onChangeViewDate", () => {
						this.render(),
							this._resetNavStatus(),
							this.handleNavStatus();
					}),
					F(this, "onChangeCurrentView", () => {
						this.render(),
							this._resetNavStatus(),
							this.handleNavStatus();
					}),
					F(this, "onClickNavTitle", () => {
						this.dp.isFinalView || this.dp.up();
					}),
					F(this, "update", () => {
						let { prevHtml: e, nextHtml: t } = this.opts;
						(this.$prev.innerHTML = e),
							(this.$next.innerHTML = t),
							this._resetNavStatus(),
							this.render(),
							this.handleNavStatus();
					}),
					F(this, "renderDelay", () => {
						setTimeout(this.render);
					}),
					F(this, "render", () => {
						(this.$title.innerHTML = this._getTitle()),
							(function (e, t) {
								for (let i in t)
									t[i]
										? e.classList.add(i)
										: e.classList.remove(i);
							})(this.$title, {
								"-disabled-": this.dp.isFinalView,
							});
					}),
					(this.dp = t),
					(this.opts = i),
					this.init();
			}
			init() {
				this._createElement(),
					this._buildBaseHtml(),
					this._defineDOM(),
					this.render(),
					this.handleNavStatus(),
					this._bindEvents(),
					this._bindDatepickerEvents();
			}
			_defineDOM() {
				(this.$title = a(".air-datepicker-nav--title", this.$el)),
					(this.$prev = a('[data-action="prev"]', this.$el)),
					(this.$next = a('[data-action="next"]', this.$el));
			}
			_bindEvents() {
				this.$el.addEventListener("click", this.onClickNav),
					this.$title.addEventListener("click", this.onClickNavTitle);
			}
			_bindDatepickerEvents() {
				this.dp.on(i.eventChangeViewDate, this.onChangeViewDate),
					this.dp.on(
						i.eventChangeCurrentView,
						this.onChangeCurrentView
					),
					this.isNavIsFunction &&
						(this.dp.on(
							i.eventChangeSelectedDate,
							this.renderDelay
						),
						this.dp.opts.timepicker &&
							this.dp.on(i.eventChangeTime, this.render));
			}
			destroy() {
				this.dp.off(i.eventChangeViewDate, this.onChangeViewDate),
					this.dp.off(
						i.eventChangeCurrentView,
						this.onChangeCurrentView
					),
					this.isNavIsFunction &&
						(this.dp.off(
							i.eventChangeSelectedDate,
							this.renderDelay
						),
						this.dp.opts.timepicker &&
							this.dp.off(i.eventChangeTime, this.render));
			}
			_createElement() {
				this.$el = n({
					tagName: "nav",
					className: "air-datepicker-nav",
				});
			}
			_getTitle() {
				let { dp: e, opts: t } = this,
					i = t.navTitles[e.currentView];
				return "function" == typeof i
					? i(e)
					: e.formatDate(e.viewDate, i);
			}
			handleNavStatus() {
				let { disableNavWhenOutOfRange: e } = this.opts,
					{ minDate: t, maxDate: s } = this.dp;
				if ((!t && !s) || !e) return;
				let { year: a, month: n } = this.dp.parsedViewDate,
					r = !!t && o(t),
					h = !!s && o(s);
				switch (this.dp.currentView) {
					case i.days:
						t &&
							r.month >= n &&
							r.year >= a &&
							this._disableNav("prev"),
							s &&
								h.month <= n &&
								h.year <= a &&
								this._disableNav("next");
						break;
					case i.months:
						t && r.year >= a && this._disableNav("prev"),
							s && h.year <= a && this._disableNav("next");
						break;
					case i.years: {
						let e = d(this.dp.viewDate);
						t && r.year >= e[0] && this._disableNav("prev"),
							s && h.year <= e[1] && this._disableNav("next");
						break;
					}
				}
			}
			_disableNav(e) {
				a('[data-action="' + e + '"]', this.$el).classList.add(
					"-disabled-"
				);
			}
			_resetNavStatus() {
				!(function (e) {
					for (
						var t = arguments.length,
							i = new Array(t > 1 ? t - 1 : 0),
							s = 1;
						s < t;
						s++
					)
						i[s - 1] = arguments[s];
					e.length
						? e.forEach((e) => {
								e.classList.remove(...i);
						  })
						: e.classList.remove(...i);
				})(
					this.$el.querySelectorAll(".air-datepicker-nav--action"),
					"-disabled-"
				);
			}
			_buildBaseHtml() {
				let { prevHtml: e, nextHtml: t } = this.opts;
				this.$el.innerHTML =
					'<div class="air-datepicker-nav--action" data-action="prev">'.concat(
						e,
						"</div>"
					) +
					'<div class="air-datepicker-nav--title"></div>' +
					'<div class="air-datepicker-nav--action" data-action="next">'.concat(
						t,
						"</div>"
					);
			}
			get isNavIsFunction() {
				let { navTitles: e } = this.opts;
				return Object.keys(e).find((t) => "function" == typeof e[t]);
			}
		}
		var x = {
			today: {
				content: (e) => e.locale.today,
				onClick: (e) => e.setViewDate(new Date()),
			},
			clear: {
				content: (e) => e.locale.clear,
				onClick: (e) => e.clear(),
			},
		};
		class H {
			constructor(e) {
				let { dp: t, opts: i } = e;
				(this.dp = t), (this.opts = i), this.init();
			}
			init() {
				this.createElement(), this.render();
			}
			createElement() {
				this.$el = n({ className: "air-datepicker-buttons" });
			}
			destroy() {
				this.$el.parentNode.removeChild(this.$el);
			}
			clearHtml() {
				return (this.$el.innerHTML = ""), this;
			}
			generateButtons() {
				let { buttons: e } = this.opts;
				Array.isArray(e) || (e = [e]),
					e.forEach((e) => {
						let t = e;
						"string" == typeof e && x[e] && (t = x[e]);
						let i = this.createButton(t);
						t.onClick && this.attachEventToButton(i, t.onClick),
							this.$el.appendChild(i);
					});
			}
			attachEventToButton(e, t) {
				e.addEventListener("click", () => {
					t(this.dp);
				});
			}
			createButton(e) {
				let {
						content: t,
						className: i,
						tagName: s = "button",
						attrs: a = {},
					} = e,
					r = "function" == typeof t ? t(this.dp) : t;
				return n({
					tagName: s,
					innerHtml: "<span tabindex='-1'>".concat(r, "</span>"),
					className: c("air-datepicker-button", i),
					attrs: a,
				});
			}
			render() {
				this.generateButtons();
			}
		}
		function L(e, t, i) {
			return (
				t in e
					? Object.defineProperty(e, t, {
							value: i,
							enumerable: !0,
							configurable: !0,
							writable: !0,
					  })
					: (e[t] = i),
				e
			);
		}
		class O {
			constructor() {
				let { opts: e, dp: t } =
					arguments.length > 0 && void 0 !== arguments[0]
						? arguments[0]
						: {};
				L(this, "toggleTimepickerIsActive", (e) => {
					this.dp.timepickerIsActive = e;
				}),
					L(this, "onChangeSelectedDate", (e) => {
						let { date: t, updateTime: i = !1 } = e;
						t &&
							(this.setMinMaxTime(t),
							this.setCurrentTime(!!i && t),
							this.addTimeToDate(t));
					}),
					L(this, "onChangeLastSelectedDate", (e) => {
						e && (this.setTime(e), this.render());
					}),
					L(this, "onChangeInputRange", (e) => {
						let t = e.target;
						(this[t.getAttribute("name")] = t.value),
							this.updateText(),
							this.dp.trigger(i.eventChangeTime, {
								hours: this.hours,
								minutes: this.minutes,
							});
					}),
					L(this, "onMouseEnterLeave", (e) => {
						let t = e.target.getAttribute("name"),
							i = this.$minutesText;
						"hours" === t && (i = this.$hoursText),
							i.classList.toggle("-focus-");
					}),
					L(this, "onFocus", () => {
						this.toggleTimepickerIsActive(!0);
					}),
					L(this, "onBlur", () => {
						this.toggleTimepickerIsActive(!1);
					}),
					(this.opts = e),
					(this.dp = t);
				let { timeFormat: s } = this.dp.locale;
				s && (s.match(k("h")) || s.match(k("hh"))) && (this.ampm = !0),
					this.init();
			}
			init() {
				this.setTime(this.dp.lastSelectedDate || this.dp.viewDate),
					this.createElement(),
					this.buildHtml(),
					this.defineDOM(),
					this.render(),
					this.bindDatepickerEvents(),
					this.bindDOMEvents();
			}
			bindDatepickerEvents() {
				this.dp.on(
					i.eventChangeSelectedDate,
					this.onChangeSelectedDate
				),
					this.dp.on(
						i.eventChangeLastSelectedDate,
						this.onChangeLastSelectedDate
					);
			}
			bindDOMEvents() {
				let e = "input";
				navigator.userAgent.match(/trident/gi) && (e = "change"),
					v(this.$ranges, e, this.onChangeInputRange),
					v(this.$ranges, "mouseenter", this.onMouseEnterLeave),
					v(this.$ranges, "mouseleave", this.onMouseEnterLeave),
					v(this.$ranges, "focus", this.onFocus),
					v(this.$ranges, "mousedown", this.onFocus),
					v(this.$ranges, "blur", this.onBlur);
			}
			createElement() {
				this.$el = n({
					className: c("air-datepicker-time", {
						"-am-pm-": this.dp.ampm,
					}),
				});
			}
			destroy() {
				this.dp.off(
					i.eventChangeSelectedDate,
					this.onChangeSelectedDate
				),
					this.dp.off(
						i.eventChangeLastSelectedDate,
						this.onChangeLastSelectedDate
					),
					this.$el.parentNode.removeChild(this.$el);
			}
			buildHtml() {
				let {
					ampm: e,
					hours: t,
					displayHours: i,
					minutes: s,
					minHours: a,
					minMinutes: n,
					maxHours: r,
					maxMinutes: h,
					dayPeriod: o,
					opts: { hoursStep: d, minutesStep: c },
				} = this;
				this.$el.innerHTML =
					'<div class="air-datepicker-time--current">' +
					'   <span class="air-datepicker-time--current-hours">'.concat(
						l(i),
						"</span>"
					) +
					'   <span class="air-datepicker-time--current-colon">:</span>' +
					'   <span class="air-datepicker-time--current-minutes">'.concat(
						l(s),
						"</span>"
					) +
					"   ".concat(
						e
							? "<span class='air-datepicker-time--current-ampm'>".concat(
									o,
									"</span>"
							  )
							: ""
					) +
					'</div><div class="air-datepicker-time--sliders">   <div class="air-datepicker-time--row">' +
					'      <input type="range" name="hours" value="'
						.concat(t, '" min="')
						.concat(a, '" max="')
						.concat(r, '" step="')
						.concat(d, '"/>') +
					'   </div>   <div class="air-datepicker-time--row">' +
					'      <input type="range" name="minutes" value="'
						.concat(s, '" min="')
						.concat(n, '" max="')
						.concat(h, '" step="')
						.concat(c, '"/>') +
					"   </div></div>";
			}
			defineDOM() {
				let e = (e) => a(e, this.$el);
				(this.$ranges = this.$el.querySelectorAll('[type="range"]')),
					(this.$hours = e('[name="hours"]')),
					(this.$minutes = e('[name="minutes"]')),
					(this.$hoursText = e(
						".air-datepicker-time--current-hours"
					)),
					(this.$minutesText = e(
						".air-datepicker-time--current-minutes"
					)),
					(this.$ampm = e(".air-datepicker-time--current-ampm"));
			}
			setTime(e) {
				this.setMinMaxTime(e), this.setCurrentTime(e);
			}
			addTimeToDate(e) {
				e && (e.setHours(this.hours), e.setMinutes(this.minutes));
			}
			setMinMaxTime(e) {
				if ((this.setMinMaxTimeFromOptions(), e)) {
					let { minDate: t, maxDate: i } = this.dp;
					t && u(e, t) && this.setMinTimeFromMinDate(t),
						i && u(e, i) && this.setMaxTimeFromMaxDate(i);
				}
			}
			setCurrentTime(e) {
				let { hours: t, minutes: i } = e ? o(e) : this;
				(this.hours = f(t, this.minHours, this.maxHours)),
					(this.minutes = f(i, this.minMinutes, this.maxMinutes));
			}
			setMinMaxTimeFromOptions() {
				let {
					minHours: e,
					minMinutes: t,
					maxHours: i,
					maxMinutes: s,
				} = this.opts;
				(this.minHours = f(e, 0, 23)),
					(this.minMinutes = f(t, 0, 59)),
					(this.maxHours = f(i, 0, 23)),
					(this.maxMinutes = f(s, 0, 59));
			}
			setMinTimeFromMinDate(e) {
				let { lastSelectedDate: t } = this.dp;
				(this.minHours = e.getHours()),
					t && t.getHours() > e.getHours()
						? (this.minMinutes = this.opts.minMinutes)
						: (this.minMinutes = e.getMinutes());
			}
			setMaxTimeFromMaxDate(e) {
				let { lastSelectedDate: t } = this.dp;
				(this.maxHours = e.getHours()),
					t && t.getHours() < e.getHours()
						? (this.maxMinutes = this.opts.maxMinutes)
						: (this.maxMinutes = e.getMinutes());
			}
			getDayPeriod(e, t) {
				let i = e,
					s = Number(e);
				e instanceof Date && ((i = o(e)), (s = Number(i.hours)));
				let a = "am";
				if (t || this.ampm) {
					switch (!0) {
						case 12 === s:
						case s > 11:
							a = "pm";
					}
					s = s % 12 == 0 ? 12 : s % 12;
				}
				return { hours: s, dayPeriod: a };
			}
			updateSliders() {
				(r(this.$hours, {
					min: this.minHours,
					max: this.maxHours,
				}).value = this.hours),
					(r(this.$minutes, {
						min: this.minMinutes,
						max: this.maxMinutes,
					}).value = this.minutes);
			}
			updateText() {
				(this.$hoursText.innerHTML = l(this.displayHours)),
					(this.$minutesText.innerHTML = l(this.minutes)),
					this.ampm && (this.$ampm.innerHTML = this.dayPeriod);
			}
			set hours(e) {
				this._hours = e;
				let { hours: t, dayPeriod: i } = this.getDayPeriod(e);
				(this.displayHours = t), (this.dayPeriod = i);
			}
			get hours() {
				return this._hours;
			}
			render() {
				this.updateSliders(), this.updateText();
			}
		}
		function E(e, t, i) {
			return (
				t in e
					? Object.defineProperty(e, t, {
							value: i,
							enumerable: !0,
							configurable: !0,
							writable: !0,
					  })
					: (e[t] = i),
				e
			);
		}
		class A {
			constructor(e) {
				let { dp: t, opts: i } = e;
				E(this, "pressedKeys", new Set()),
					E(
						this,
						"hotKeys",
						new Map([
							[
								[
									["Control", "ArrowRight"],
									["Control", "ArrowUp"],
								],
								(e) => e.month++,
							],
							[
								[
									["Control", "ArrowLeft"],
									["Control", "ArrowDown"],
								],
								(e) => e.month--,
							],
							[
								[
									["Shift", "ArrowRight"],
									["Shift", "ArrowUp"],
								],
								(e) => e.year++,
							],
							[
								[
									["Shift", "ArrowLeft"],
									["Shift", "ArrowDown"],
								],
								(e) => e.year--,
							],
							[
								[
									["Alt", "ArrowRight"],
									["Alt", "ArrowUp"],
								],
								(e) => (e.year += 10),
							],
							[
								[
									["Alt", "ArrowLeft"],
									["Alt", "ArrowDown"],
								],
								(e) => (e.year -= 10),
							],
							[["Control", "Shift", "ArrowUp"], (e, t) => t.up()],
						])
					),
					E(this, "handleHotKey", (e) => {
						let t = this.hotKeys.get(e),
							i = o(this.getInitialFocusDate());
						t(i, this.dp);
						let { year: s, month: a, date: n } = i,
							r = h(new Date(s, a));
						r < n && (n = r);
						let l = this.dp.getClampedDate(new Date(s, a, n));
						this.dp.setFocusDate(l, { viewDateTransition: !0 });
					}),
					E(this, "isHotKeyPressed", () => {
						let e = !1,
							t = this.pressedKeys.size,
							i = (e) => this.pressedKeys.has(e);
						for (let [s] of this.hotKeys) {
							if (e) break;
							if (Array.isArray(s[0]))
								s.forEach((a) => {
									e ||
										t !== a.length ||
										(e = a.every(i) && s);
								});
							else {
								if (t !== s.length) continue;
								e = s.every(i) && s;
							}
						}
						return e;
					}),
					E(this, "isArrow", (e) => e >= 37 && e <= 40),
					E(this, "onKeyDown", (e) => {
						let { key: t, which: i } = e,
							{
								dp: s,
								dp: { focusDate: a },
								opts: n,
							} = this;
						this.registerKey(t);
						let r = this.isHotKeyPressed();
						if (r)
							return (
								e.preventDefault(), void this.handleHotKey(r)
							);
						if (this.isArrow(i))
							return (
								e.preventDefault(), void this.focusNextCell(t)
							);
						if ("Enter" === t) {
							if (s.currentView !== n.minView)
								return void s.down();
							if (a) {
								let e = s._checkIfDateIsSelected(a);
								return void (e
									? s._handleAlreadySelectedDates(e, a)
									: s.selectDate(a));
							}
						}
						"Escape" === t && this.dp.hide();
					}),
					E(this, "onKeyUp", (e) => {
						this.removeKey(e.key);
					}),
					(this.dp = t),
					(this.opts = i),
					this.init();
			}
			init() {
				this.bindKeyboardEvents();
			}
			bindKeyboardEvents() {
				let { $el: e } = this.dp;
				e.addEventListener("keydown", this.onKeyDown),
					e.addEventListener("keyup", this.onKeyUp);
			}
			destroy() {
				let { $el: e } = this.dp;
				e.removeEventListener("keydown", this.onKeyDown),
					e.removeEventListener("keyup", this.onKeyUp),
					(this.hotKeys = null),
					(this.pressedKeys = null);
			}
			getInitialFocusDate() {
				let {
						focusDate: e,
						currentView: t,
						selectedDates: s,
						parsedViewDate: { year: a, month: n },
					} = this.dp,
					r = e || s[s.length - 1];
				if (!r)
					switch (t) {
						case i.days:
							r = new Date(a, n, new Date().getDate());
							break;
						case i.months:
							r = new Date(a, n, 1);
							break;
						case i.years:
							r = new Date(a, 0, 1);
					}
				return r;
			}
			focusNextCell(e) {
				let t = this.getInitialFocusDate(),
					{ currentView: s } = this.dp,
					{ days: a, months: n, years: r } = i,
					h = o(t),
					l = h.year,
					d = h.month,
					c = h.date;
				switch (e) {
					case "ArrowLeft":
						s === a && (c -= 1),
							s === n && (d -= 1),
							s === r && (l -= 1);
						break;
					case "ArrowUp":
						s === a && (c -= 7),
							s === n && (d -= 3),
							s === r && (l -= 4);
						break;
					case "ArrowRight":
						s === a && (c += 1),
							s === n && (d += 1),
							s === r && (l += 1);
						break;
					case "ArrowDown":
						s === a && (c += 7),
							s === n && (d += 3),
							s === r && (l += 4);
				}
				let u = this.dp.getClampedDate(new Date(l, d, c));
				this.dp.setFocusDate(u, { viewDateTransition: !0 });
			}
			registerKey(e) {
				this.pressedKeys.add(e);
			}
			removeKey(e) {
				this.pressedKeys.delete(e);
			}
		}
		let N = {
			on(e, t) {
				this.__events || (this.__events = {}),
					this.__events[e]
						? this.__events[e].push(t)
						: (this.__events[e] = [t]);
			},
			off(e, t) {
				this.__events &&
					this.__events[e] &&
					(this.__events[e] = this.__events[e].filter(
						(e) => e !== t
					));
			},
			removeAllEvents() {
				this.__events = {};
			},
			trigger(e) {
				for (
					var t = arguments.length,
						i = new Array(t > 1 ? t - 1 : 0),
						s = 1;
					s < t;
					s++
				)
					i[s - 1] = arguments[s];
				this.__events &&
					this.__events[e] &&
					this.__events[e].forEach((e) => {
						e(...i);
					});
			},
		};
		function I(e, t, i) {
			return (
				t in e
					? Object.defineProperty(e, t, {
							value: i,
							enumerable: !0,
							configurable: !0,
							writable: !0,
					  })
					: (e[t] = i),
				e
			);
		}
		let R = "",
			P = "",
			B = "",
			K = !1;
		class j {
			constructor(e, t) {
				var r = this;
				if (
					(I(this, "viewIndexes", [i.days, i.months, i.years]),
					I(this, "next", () => {
						let { year: e, month: t } = this.parsedViewDate;
						switch (this.currentView) {
							case i.days:
								this.setViewDate(new Date(e, t + 1, 1));
								break;
							case i.months:
								this.setViewDate(new Date(e + 1, t, 1));
								break;
							case i.years:
								this.setViewDate(new Date(e + 10, 0, 1));
						}
					}),
					I(this, "prev", () => {
						let { year: e, month: t } = this.parsedViewDate;
						switch (this.currentView) {
							case i.days:
								this.setViewDate(new Date(e, t - 1, 1));
								break;
							case i.months:
								this.setViewDate(new Date(e - 1, t, 1));
								break;
							case i.years:
								this.setViewDate(new Date(e - 10, 0, 1));
						}
					}),
					I(this, "_finishHide", () => {
						(this.hideAnimation = !1),
							this._destroyComponents(),
							this.$container.removeChild(this.$datepicker);
					}),
					I(this, "setPosition", function (e) {
						let t =
							arguments.length > 1 &&
							void 0 !== arguments[1] &&
							arguments[1];
						if ("function" == typeof (e = e || r.opts.position))
							return void (r.customHide = e({
								$datepicker: r.$datepicker,
								$target: r.$el,
								$pointer: r.$pointer,
								isViewChange: t,
								done: r._finishHide,
							}));
						let i,
							s,
							{ isMobile: a } = r.opts,
							n = r.$el.getBoundingClientRect(),
							h = r.$el.getBoundingClientRect(),
							o = r.$datepicker.offsetParent,
							l = r.$el.offsetParent,
							d = r.$datepicker.getBoundingClientRect(),
							c = e.split(" "),
							u = window.scrollY,
							p = window.scrollX,
							m = r.opts.offset,
							g = c[0],
							D = c[1];
						if (a)
							r.$datepicker.style.cssText = "left: 50%; top: 50%";
						else {
							if (
								(o === l &&
									o !== document.body &&
									((h = {
										top: r.$el.offsetTop,
										left: r.$el.offsetLeft,
										width: n.width,
										height: r.$el.offsetHeight,
									}),
									(u = 0),
									(p = 0)),
								o !== l && o !== document.body)
							) {
								let e = o.getBoundingClientRect();
								(h = {
									top: n.top - e.top,
									left: n.left - e.left,
									width: n.width,
									height: n.height,
								}),
									(u = 0),
									(p = 0);
							}
							switch (g) {
								case "top":
									i = h.top - d.height - m;
									break;
								case "right":
									s = h.left + h.width + m;
									break;
								case "bottom":
									i = h.top + h.height + m;
									break;
								case "left":
									s = h.left - d.width - m;
							}
							switch (D) {
								case "top":
									i = h.top;
									break;
								case "right":
									s = h.left + h.width - d.width;
									break;
								case "bottom":
									i = h.top + h.height - d.height;
									break;
								case "left":
									s = h.left;
									break;
								case "center":
									/left|right/.test(g)
										? (i =
												h.top +
												h.height / 2 -
												d.height / 2)
										: (s =
												h.left +
												h.width / 2 -
												d.width / 2);
							}
							r.$datepicker.style.cssText = "left: "
								.concat(s + p, "px; top: ")
								.concat(i + u, "px");
						}
					}),
					I(this, "_setInputValue", () => {
						let {
								opts: e,
								$altField: t,
								locale: { dateFormat: i },
							} = this,
							{ altFieldDateFormat: s, altField: a } = e;
						a && t && (t.value = this._getInputValue(s)),
							(this.$el.value = this._getInputValue(i));
					}),
					I(this, "_getInputValue", (e) => {
						let { selectedDates: t, opts: i } = this,
							{ multipleDates: s, multipleDatesSeparator: a } = i;
						if (!t.length) return "";
						let n = "function" == typeof e,
							r = n
								? e(s ? t : t[0])
								: t.map((t) => this.formatDate(t, e));
						return (r = n ? r : r.join(a)), r;
					}),
					I(this, "_checkIfDateIsSelected", function (e) {
						let t =
								arguments.length > 1 && void 0 !== arguments[1]
									? arguments[1]
									: i.days,
							s = !1;
						return (
							r.selectedDates.some((i) => {
								let a = u(e, i, t);
								return (s = a && i), a;
							}),
							s
						);
					}),
					I(this, "_scheduleCallAfterTransition", (e) => {
						this._cancelScheduledCall(),
							e && e(!1),
							(this._onTransitionEnd = () => {
								e && e(!0);
							}),
							this.$datepicker.addEventListener(
								"transitionend",
								this._onTransitionEnd,
								{ once: !0 }
							);
					}),
					I(this, "_cancelScheduledCall", () => {
						this.$datepicker.removeEventListener(
							"transitionend",
							this._onTransitionEnd
						);
					}),
					I(this, "setViewDate", (e) => {
						if (!((e = b(e)) instanceof Date)) return;
						if (u(e, this.viewDate)) return;
						let t = this.viewDate;
						this.viewDate = e;
						let { onChangeViewDate: s } = this.opts;
						if (s) {
							let { month: e, year: t } = this.parsedViewDate;
							s({ month: e, year: t, decade: this.curDecade });
						}
						this.trigger(i.eventChangeViewDate, e, t);
					}),
					I(this, "setFocusDate", function (e) {
						let t =
							arguments.length > 1 && void 0 !== arguments[1]
								? arguments[1]
								: {};
						(!e || (e = b(e)) instanceof Date) &&
							((r.focusDate = e),
							r.opts.range && e && r._handleRangeOnFocus(),
							r.trigger(i.eventChangeFocusDate, e, t));
					}),
					I(this, "setCurrentView", (e) => {
						if (this.viewIndexes.includes(e)) {
							if (
								((this.currentView = e),
								this.elIsInput &&
									this.visible &&
									this.setPosition(void 0, !0),
								this.trigger(i.eventChangeCurrentView, e),
								!this.views[e])
							) {
								let t = (this.views[e] = new T({
									dp: this,
									opts: this.opts,
									type: e,
								}));
								this.shouldUpdateDOM &&
									this.$content.appendChild(t.$el);
							}
							this.opts.onChangeView && this.opts.onChangeView(e);
						}
					}),
					I(this, "_updateLastSelectedDate", (e) => {
						(this.lastSelectedDate = e),
							this.trigger(i.eventChangeLastSelectedDate, e);
					}),
					I(this, "destroy", () => {
						let { showEvent: e, isMobile: t } = this.opts,
							i = this.$datepicker.parentNode;
						i && i.removeChild(this.$datepicker),
							this.$el.removeEventListener(e, this._onFocus),
							this.$el.removeEventListener("blur", this._onBlur),
							window.removeEventListener(
								"resize",
								this._onResize
							),
							t && this._removeMobileAttributes(),
							this.keyboardNav && this.keyboardNav.destroy(),
							(this.views = null),
							(this.nav = null),
							(this.$datepicker = null),
							(this.opts = null),
							(this.$customContainer = null),
							(this.viewDate = null),
							(this.focusDate = null),
							(this.selectedDates = null),
							(this.rangeDateFrom = null),
							(this.rangeDateTo = null);
					}),
					I(this, "update", (e) => {
						let t = w({}, this.opts);
						w(this.opts, e);
						let {
								timepicker: s,
								buttons: a,
								range: n,
								selectedDates: r,
								isMobile: h,
							} = this.opts,
							o = this.visible || this.treatAsInline;
						this._createMinMaxDates(),
							this._limitViewDateByMaxMinDates(),
							this._handleLocale(),
							!t.selectedDates && r && this.selectDate(r),
							e.view && this.setCurrentView(e.view),
							this._setInputValue(),
							t.range && !n
								? ((this.rangeDateTo = !1),
								  (this.rangeDateFrom = !1))
								: !t.range &&
								  n &&
								  this.selectedDates.length &&
								  ((this.rangeDateFrom = this.selectedDates[0]),
								  (this.rangeDateTo = this.selectedDates[1])),
							t.timepicker && !s
								? (o && this.timepicker.destroy(),
								  (this.timepicker = !1),
								  this.$timepicker.parentNode.removeChild(
										this.$timepicker
								  ))
								: !t.timepicker && s && this._addTimepicker(),
							!t.buttons && a
								? this._addButtons()
								: t.buttons && !a
								? (this.buttons.destroy(),
								  this.$buttons.parentNode.removeChild(
										this.$buttons
								  ))
								: o &&
								  t.buttons &&
								  a &&
								  this.buttons.clearHtml().render(),
							!t.isMobile && h
								? (this.treatAsInline ||
										B ||
										this._createMobileOverlay(),
								  this._addMobileAttributes(),
								  this.visible && this._showMobileOverlay())
								: t.isMobile &&
								  !h &&
								  (this._removeMobileAttributes(),
								  this.visible &&
										(B.classList.remove("-active-"),
										"function" !=
											typeof this.opts.position &&
											this.setPosition())),
							o &&
								(this.nav.update(),
								this.views[this.currentView].render(),
								this.currentView === i.days &&
									this.views[
										this.currentView
									].renderDayNames());
					}),
					I(this, "isOtherMonth", (e) => {
						let { month: t } = o(e);
						return t !== this.parsedViewDate.month;
					}),
					I(this, "isOtherYear", (e) => {
						let { year: t } = o(e);
						return t !== this.parsedViewDate.year;
					}),
					I(this, "isOtherDecade", (e) => {
						let { year: t } = o(e),
							[i, s] = d(this.viewDate);
						return t < i || t > s;
					}),
					I(this, "_onChangeSelectedDate", (e) => {
						let { silent: t } = e;
						setTimeout(() => {
							this._setInputValue(),
								this.opts.onSelect &&
									!t &&
									this._triggerOnSelect();
						});
					}),
					I(this, "_onChangeFocusedDate", function (e) {
						let { viewDateTransition: t } =
							arguments.length > 1 && void 0 !== arguments[1]
								? arguments[1]
								: {};
						if (!e) return;
						let i = !1;
						t &&
							(i =
								r.isOtherMonth(e) ||
								r.isOtherYear(e) ||
								r.isOtherDecade(e)),
							i && r.setViewDate(e);
					}),
					I(this, "_onChangeTime", (e) => {
						let { hours: t, minutes: i } = e,
							s = new Date(),
							{
								lastSelectedDate: a,
								opts: { onSelect: n },
							} = this,
							r = a;
						a || (r = s);
						let h = this.getCell(r, this.currentViewSingular),
							o = h && h.adpCell;
						(o && o.isDisabled) ||
							(r.setHours(t),
							r.setMinutes(i),
							a
								? (this._setInputValue(),
								  n && this._triggerOnSelect())
								: this.selectDate(r));
					}),
					I(this, "_onFocus", (e) => {
						this.visible || this.show();
					}),
					I(this, "_onBlur", (e) => {
						this.inFocus ||
							!this.visible ||
							this.opts.isMobile ||
							this.hide();
					}),
					I(this, "_onMouseDown", (e) => {
						this.inFocus = !0;
					}),
					I(this, "_onMouseUp", (e) => {
						(this.inFocus = !1), this.$el.focus();
					}),
					I(this, "_onResize", () => {
						this.visible &&
							"function" != typeof this.opts.position &&
							this.setPosition();
					}),
					I(this, "_onClickOverlay", () => {
						this.visible && this.hide();
					}),
					I(this, "isWeekend", (e) => this.opts.weekends.includes(e)),
					I(this, "getClampedDate", (e) => {
						let { minDate: t, maxDate: i } = this,
							s = e;
						return (
							i && p(e, i) ? (s = i) : t && m(e, t) && (s = t), s
						);
					}),
					(this.$el = a(e)),
					!this.$el)
				)
					return;
				(this.$datepicker = n({ className: "air-datepicker" })),
					(this.opts = w({}, s, t)),
					(this.$customContainer =
						!!this.opts.container && a(this.opts.container)),
					(this.$altField = a(this.opts.altField || !1)),
					R || (R = a("body"));
				let { view: h, startDate: l } = this.opts;
				l || (this.opts.startDate = new Date()),
					"INPUT" === this.$el.nodeName && (this.elIsInput = !0),
					(this.inited = !1),
					(this.visible = !1),
					(this.viewDate = b(this.opts.startDate)),
					(this.focusDate = !1),
					(this.initialReadonly = this.$el.getAttribute("readonly")),
					(this.customHide = !1),
					(this.currentView = h),
					(this.selectedDates = []),
					(this.views = {}),
					(this.keys = []),
					(this.rangeDateFrom = ""),
					(this.rangeDateTo = ""),
					(this.timepickerIsActive = !1),
					(this.treatAsInline = this.opts.inline || !this.elIsInput),
					this.init();
			}
			init() {
				let {
					opts: e,
					treatAsInline: t,
					opts: {
						inline: i,
						isMobile: s,
						selectedDates: a,
						keyboardNav: r,
						onlyTimepicker: h,
					},
				} = this;
				var o;
				K ||
					i ||
					!this.elIsInput ||
					((K = !0),
					(P = n({ className: (o = j.defaultContainerId), id: o })),
					R.appendChild(P)),
					!s || B || t || this._createMobileOverlay(),
					this._handleLocale(),
					this._bindSubEvents(),
					this._createMinMaxDates(),
					this._limitViewDateByMaxMinDates(),
					this.elIsInput &&
						(i || this._bindEvents(),
						r &&
							!h &&
							(this.keyboardNav = new A({ dp: this, opts: e }))),
					a && this.selectDate(a, { silent: !0 }),
					this.opts.visible && !t && this.show(),
					s && !t && this.$el.setAttribute("readonly", !0),
					t && this._createComponents();
			}
			_createMobileOverlay() {
				(B = n({ className: "air-datepicker-overlay" })),
					P.appendChild(B);
			}
			_createComponents() {
				let {
					opts: e,
					treatAsInline: t,
					opts: {
						inline: i,
						buttons: s,
						timepicker: a,
						position: n,
						classes: r,
						onlyTimepicker: h,
						isMobile: o,
					},
				} = this;
				this._buildBaseHtml(),
					this.elIsInput && (i || this._setPositionClasses(n)),
					(!i && this.elIsInput) ||
						this.$datepicker.classList.add("-inline-"),
					r && this.$datepicker.classList.add(...r.split(" ")),
					h && this.$datepicker.classList.add("-only-timepicker-"),
					o && !t && this._addMobileAttributes(),
					(this.views[this.currentView] = new T({
						dp: this,
						type: this.currentView,
						opts: e,
					})),
					(this.nav = new V({ dp: this, opts: e })),
					a && this._addTimepicker(),
					s && this._addButtons(),
					this.$content.appendChild(this.views[this.currentView].$el),
					this.$nav.appendChild(this.nav.$el);
			}
			_destroyComponents() {
				for (let e in this.views) this.views[e].destroy();
				(this.views = {}),
					this.nav.destroy(),
					this.timepicker && this.timepicker.destroy();
			}
			_addMobileAttributes() {
				B.addEventListener("click", this._onClickOverlay),
					this.$datepicker.classList.add("-is-mobile-"),
					this.$el.setAttribute("readonly", !0);
			}
			_removeMobileAttributes() {
				B.removeEventListener("click", this._onClickOverlay),
					this.$datepicker.classList.remove("-is-mobile-"),
					this.initialReadonly ||
						"" === this.initialReadonly ||
						this.$el.removeAttribute("readonly");
			}
			_createMinMaxDates() {
				let { minDate: e, maxDate: t } = this.opts;
				(this.minDate = !!e && b(e)), (this.maxDate = !!t && b(t));
			}
			_addTimepicker() {
				(this.$timepicker = n({ className: "air-datepicker--time" })),
					this.$datepicker.appendChild(this.$timepicker),
					(this.timepicker = new O({ dp: this, opts: this.opts })),
					this.$timepicker.appendChild(this.timepicker.$el);
			}
			_addButtons() {
				(this.$buttons = n({ className: "air-datepicker--buttons" })),
					this.$datepicker.appendChild(this.$buttons),
					(this.buttons = new H({ dp: this, opts: this.opts })),
					this.$buttons.appendChild(this.buttons.$el);
			}
			_bindSubEvents() {
				this.on(i.eventChangeSelectedDate, this._onChangeSelectedDate),
					this.on(i.eventChangeFocusDate, this._onChangeFocusedDate),
					this.on(i.eventChangeTime, this._onChangeTime);
			}
			_buildBaseHtml() {
				let { inline: e } = this.opts;
				var t, i;
				this.elIsInput
					? e
						? ((t = this.$datepicker),
						  (i = this.$el).parentNode.insertBefore(
								t,
								i.nextSibling
						  ))
						: this.$container.appendChild(this.$datepicker)
					: this.$el.appendChild(this.$datepicker),
					(this.$datepicker.innerHTML =
						'<i class="air-datepicker--pointer"></i><div class="air-datepicker--navigation"></div><div class="air-datepicker--content"></div>'),
					(this.$content = a(
						".air-datepicker--content",
						this.$datepicker
					)),
					(this.$pointer = a(
						".air-datepicker--pointer",
						this.$datepicker
					)),
					(this.$nav = a(
						".air-datepicker--navigation",
						this.$datepicker
					));
			}
			_handleLocale() {
				let {
					locale: e,
					dateFormat: t,
					firstDay: i,
					timepicker: s,
					onlyTimepicker: a,
					timeFormat: n,
					dateTimeSeparator: r,
				} = this.opts;
				var h;
				(this.locale = ((h = e), JSON.parse(JSON.stringify(h)))),
					t && (this.locale.dateFormat = t),
					void 0 !== n && "" !== n && (this.locale.timeFormat = n);
				let { timeFormat: o } = this.locale;
				if (
					("" !== i && (this.locale.firstDay = i),
					s && "function" != typeof t)
				) {
					let e = o ? r : "";
					this.locale.dateFormat = [
						this.locale.dateFormat,
						o || "",
					].join(e);
				}
				a &&
					"function" != typeof t &&
					(this.locale.dateFormat = this.locale.timeFormat);
			}
			_setPositionClasses(e) {
				if ("function" == typeof e)
					return void this.$datepicker.classList.add(
						"-custom-position-"
					);
				let t = (e = e.split(" "))[0],
					i = e[1],
					s = "air-datepicker -"
						.concat(t, "-")
						.concat(i, "- -from-")
						.concat(t, "-");
				this.$datepicker.classList.add(...s.split(" "));
			}
			_bindEvents() {
				this.$el.addEventListener(this.opts.showEvent, this._onFocus),
					this.$el.addEventListener("blur", this._onBlur),
					this.$datepicker.addEventListener(
						"mousedown",
						this._onMouseDown
					),
					this.$datepicker.addEventListener(
						"mouseup",
						this._onMouseUp
					),
					window.addEventListener("resize", this._onResize);
			}
			_limitViewDateByMaxMinDates() {
				let { viewDate: e, minDate: t, maxDate: i } = this;
				i && p(e, i) && this.setViewDate(i),
					t && m(e, t) && this.setViewDate(t);
			}
			formatDate() {
				let e =
						arguments.length > 0 && void 0 !== arguments[0]
							? arguments[0]
							: this.viewDate,
					t = arguments.length > 1 ? arguments[1] : void 0;
				if (((e = b(e)), !(e instanceof Date))) return;
				let i = t,
					s = this.locale,
					a = o(e),
					n = d(e),
					r = j.replacer,
					h = "am";
				this.opts.timepicker &&
					this.timepicker &&
					(h = this.timepicker.getDayPeriod(e).dayPeriod);
				let l = {
					T: e.getTime(),
					m: a.minutes,
					mm: a.fullMinutes,
					h: a.hours12,
					hh: a.fullHours12,
					H: a.hours,
					HH: a.fullHours,
					aa: h,
					AA: h.toUpperCase(),
					E: s.daysShort[a.day],
					EEEE: s.days[a.day],
					d: a.date,
					dd: a.fullDate,
					M: a.month + 1,
					MM: a.fullMonth,
					MMM: s.monthsShort[a.month],
					MMMM: s.months[a.month],
					yy: a.year.toString().slice(-2),
					yyyy: a.year,
					yyyy1: n[0],
					yyyy2: n[1],
				};
				for (let [e, t] of Object.entries(l)) i = r(i, k(e), t);
				return i;
			}
			down(e) {
				this._handleUpDownActions(e, "down");
			}
			up(e) {
				this._handleUpDownActions(e, "up");
			}
			selectDate(e) {
				let t,
					s =
						arguments.length > 1 && void 0 !== arguments[1]
							? arguments[1]
							: {},
					{
						currentView: a,
						parsedViewDate: n,
						selectedDates: r,
					} = this,
					{ updateTime: h } = s,
					{
						moveToOtherMonthsOnSelect: o,
						moveToOtherYearsOnSelect: l,
						multipleDates: d,
						range: c,
						autoClose: u,
					} = this.opts,
					m = r.length;
				if (Array.isArray(e))
					return (
						e.forEach((e) => {
							this.selectDate(e, s);
						}),
						new Promise((e) => {
							setTimeout(e);
						})
					);
				if ((e = b(e)) instanceof Date) {
					if (
						(a === i.days &&
							e.getMonth() !== n.month &&
							o &&
							(t = new Date(e.getFullYear(), e.getMonth(), 1)),
						a === i.years &&
							e.getFullYear() !== n.year &&
							l &&
							(t = new Date(e.getFullYear(), 0, 1)),
						t && this.setViewDate(t),
						d && !c)
					) {
						if (m === d) return;
						this._checkIfDateIsSelected(e) || r.push(e);
					} else if (c)
						switch (m) {
							case 1:
								r.push(e),
									this.rangeDateTo || (this.rangeDateTo = e),
									p(this.rangeDateFrom, this.rangeDateTo) &&
										((this.rangeDateTo =
											this.rangeDateFrom),
										(this.rangeDateFrom = e)),
									(this.selectedDates = [
										this.rangeDateFrom,
										this.rangeDateTo,
									]);
								break;
							case 2:
								(this.selectedDates = [e]),
									(this.rangeDateFrom = e),
									(this.rangeDateTo = "");
								break;
							default:
								(this.selectedDates = [e]),
									(this.rangeDateFrom = e);
						}
					else this.selectedDates = [e];
					return (
						this.trigger(i.eventChangeSelectedDate, {
							action: i.actionSelectDate,
							silent: null == s ? void 0 : s.silent,
							date: e,
							updateTime: h,
						}),
						this._updateLastSelectedDate(e),
						u &&
							!this.timepickerIsActive &&
							this.visible &&
							(d || c
								? c && 1 === m && this.hide()
								: this.hide()),
						new Promise((e) => {
							setTimeout(e);
						})
					);
				}
			}
			unselectDate(e) {
				let t = this.selectedDates,
					s = this;
				if ((e = b(e)) instanceof Date)
					return t.some((a, n) => {
						if (u(a, e))
							return (
								t.splice(n, 1),
								s.selectedDates.length
									? s._updateLastSelectedDate(
											s.selectedDates[
												s.selectedDates.length - 1
											]
									  )
									: ((s.rangeDateFrom = ""),
									  (s.rangeDateTo = ""),
									  s._updateLastSelectedDate(!1)),
								this.trigger(i.eventChangeSelectedDate, {
									action: i.actionUnselectDate,
									date: e,
								}),
								!0
							);
					});
			}
			replaceDate(e, t) {
				let s = this.selectedDates.find((t) =>
						u(t, e, this.currentView)
					),
					a = this.selectedDates.indexOf(s);
				a < 0 ||
					u(this.selectedDates[a], t, this.currentView) ||
					((this.selectedDates[a] = t),
					this.trigger(i.eventChangeSelectedDate, {
						action: i.actionSelectDate,
						date: t,
						updateTime: !0,
					}),
					this._updateLastSelectedDate(t));
			}
			clear() {
				let e =
					arguments.length > 0 && void 0 !== arguments[0]
						? arguments[0]
						: {};
				return (
					(this.selectedDates = []),
					(this.rangeDateFrom = !1),
					(this.rangeDateTo = !1),
					this.trigger(i.eventChangeSelectedDate, {
						action: i.actionUnselectDate,
						silent: e.silent,
					}),
					new Promise((e) => {
						setTimeout(e);
					})
				);
			}
			show() {
				let { onShow: e, isMobile: t } = this.opts;
				this._cancelScheduledCall(),
					this.visible ||
						this.hideAnimation ||
						this._createComponents(),
					this.setPosition(this.opts.position),
					this.$datepicker.classList.add("-active-"),
					(this.visible = !0),
					e && this._scheduleCallAfterTransition(e),
					t && this._showMobileOverlay();
			}
			hide() {
				let { onHide: e, isMobile: t } = this.opts,
					i = this._hasTransition();
				(this.visible = !1),
					(this.hideAnimation = !0),
					this.$datepicker.classList.remove("-active-"),
					this.customHide && this.customHide(),
					this.elIsInput && this.$el.blur(),
					this._scheduleCallAfterTransition((t) => {
						!this.customHide &&
							((t && i) || (!t && !i)) &&
							this._finishHide(),
							e && e(t);
					}),
					t && B.classList.remove("-active-");
			}
			_triggerOnSelect() {
				let e = [],
					t = [],
					{
						selectedDates: i,
						locale: s,
						opts: { onSelect: a, multipleDates: n, range: r },
					} = this,
					h = n || r,
					o = "function" == typeof s.dateFormat;
				i.length &&
					((e = i.map(g)),
					(t = o
						? n
							? s.dateFormat(e)
							: e.map((e) => s.dateFormat(e))
						: e.map((e) => this.formatDate(e, s.dateFormat)))),
					a({
						date: h ? e : e[0],
						formattedDate: h ? t : t[0],
						datepicker: this,
					});
			}
			_handleAlreadySelectedDates(e, t) {
				let { range: i, toggleSelected: s } = this.opts;
				i
					? s
						? this.unselectDate(t)
						: 2 !== this.selectedDates.length && this.selectDate(t)
					: s && this.unselectDate(t),
					s || this._updateLastSelectedDate(e);
			}
			_handleUpDownActions(e, t) {
				if (
					!(
						(e = b(e || this.focusDate || this.viewDate)) instanceof
						Date
					)
				)
					return;
				let i = "up" === t ? this.viewIndex + 1 : this.viewIndex - 1;
				i > 2 && (i = 2),
					i < 0 && (i = 0),
					this.setViewDate(
						new Date(e.getFullYear(), e.getMonth(), 1)
					),
					this.setCurrentView(this.viewIndexes[i]);
			}
			_handleRangeOnFocus() {
				1 === this.selectedDates.length &&
					(p(this.selectedDates[0], this.focusDate)
						? ((this.rangeDateTo = this.selectedDates[0]),
						  (this.rangeDateFrom = this.focusDate))
						: ((this.rangeDateTo = this.focusDate),
						  (this.rangeDateFrom = this.selectedDates[0])));
			}
			getCell(e) {
				let t =
					arguments.length > 1 && void 0 !== arguments[1]
						? arguments[1]
						: i.day;
				if (!((e = b(e)) instanceof Date)) return;
				let { year: s, month: a, date: n } = o(e),
					r = '[data-year="'.concat(s, '"]'),
					h = '[data-month="'.concat(a, '"]'),
					l = '[data-date="'.concat(n, '"]'),
					d = {
						[i.day]: "".concat(r).concat(h).concat(l),
						[i.month]: "".concat(r).concat(h),
						[i.year]: "".concat(r),
					};
				return this.views[this.currentView].$el.querySelector(d[t]);
			}
			_showMobileOverlay() {
				B.classList.add("-active-");
			}
			_hasTransition() {
				return (
					window
						.getComputedStyle(this.$datepicker)
						.getPropertyValue("transition-duration")
						.split(", ")
						.reduce((e, t) => parseFloat(t) + e, 0) > 0
				);
			}
			get shouldUpdateDOM() {
				return this.visible || this.treatAsInline;
			}
			get parsedViewDate() {
				return o(this.viewDate);
			}
			get currentViewSingular() {
				return this.currentView.slice(0, -1);
			}
			get curDecade() {
				return d(this.viewDate);
			}
			get viewIndex() {
				return this.viewIndexes.indexOf(this.currentView);
			}
			get isFinalView() {
				return this.currentView === i.years;
			}
			get hasSelectedDates() {
				return this.selectedDates.length > 0;
			}
			get isMinViewReached() {
				return (
					this.currentView === this.opts.minView ||
					this.currentView === i.days
				);
			}
			get $container() {
				return this.$customContainer || P;
			}
			static replacer(e, t, i) {
				return e.replace(t, function (e, t, s, a) {
					return t + i + a;
				});
			}
		}
		var U;
		return (
			I(j, "defaults", s),
			I(j, "version", "3.3.0"),
			I(j, "defaultContainerId", "air-datepicker-global-container"),
			(U = j.prototype),
			Object.assign(U, N),
			t.default
		);
	})();
});

/*!
 * dist/jquery.inputmask.min
 * https://github.com/RobinHerbots/Inputmask
 * Copyright (c) 2010 - 2022 Robin Herbots
 * Licensed under the MIT license
 * Version: 5.0.8-beta.25
 */
!function(e,t){if("object"==typeof exports&&"object"==typeof module)module.exports=t(require("jquery"));else if("function"==typeof define&&define.amd)define(["jquery"],t);else{var i="object"==typeof exports?t(require("jquery")):t(e.jQuery);for(var a in i)("object"==typeof exports?exports:e)[a]=i[a]}}(self||this,(function(e){return function(){"use strict";var t={3046:function(e,t,i){var a;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,i(3851),i(219),i(207),i(5296);var n=((a=i(2394))&&a.__esModule?a:{default:a}).default;t.default=n},8741:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=!("undefined"==typeof window||!window.document||!window.document.createElement);t.default=i},3976:function(e,t,i){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a,n=(a=i(5581))&&a.__esModule?a:{default:a};var r={_maxTestPos:500,placeholder:"_",optionalmarker:["[","]"],quantifiermarker:["{","}"],groupmarker:["(",")"],alternatormarker:"|",escapeChar:"\\",mask:null,regex:null,oncomplete:function(){},onincomplete:function(){},oncleared:function(){},repeat:0,greedy:!1,autoUnmask:!1,removeMaskOnSubmit:!1,clearMaskOnLostFocus:!0,insertMode:!0,insertModeVisual:!0,clearIncomplete:!1,alias:null,onKeyDown:function(){},onBeforeMask:null,onBeforePaste:function(e,t){return"function"==typeof t.onBeforeMask?t.onBeforeMask.call(this,e,t):e},onBeforeWrite:null,onUnMask:null,showMaskOnFocus:!0,showMaskOnHover:!0,onKeyValidation:function(){},skipOptionalPartCharacter:" ",numericInput:!1,rightAlign:!1,undoOnEscape:!0,radixPoint:"",_radixDance:!1,groupSeparator:"",keepStatic:null,positionCaretOnTab:!0,tabThrough:!1,supportsInputType:["text","tel","url","password","search"],ignorables:[n.default.BACKSPACE,n.default.TAB,n.default["PAUSE/BREAK"],n.default.ESCAPE,n.default.PAGE_UP,n.default.PAGE_DOWN,n.default.END,n.default.HOME,n.default.LEFT,n.default.UP,n.default.RIGHT,n.default.DOWN,n.default.INSERT,n.default.DELETE,93,112,113,114,115,116,117,118,119,120,121,122,123,0,229],isComplete:null,preValidation:null,postValidation:null,staticDefinitionSymbol:void 0,jitMasking:!1,nullable:!0,inputEventOnly:!1,noValuePatching:!1,positionCaretOnClick:"lvp",casing:null,inputmode:"text",importDataAttributes:!0,shiftPositions:!0,usePrototypeDefinitions:!0,validationEventTimeOut:3e3,substitutes:{}};t.default=r},7392:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;t.default={9:{validator:"[0-9\uff10-\uff19]",definitionSymbol:"*"},a:{validator:"[A-Za-z\u0410-\u044f\u0401\u0451\xc0-\xff\xb5]",definitionSymbol:"*"},"*":{validator:"[0-9\uff10-\uff19A-Za-z\u0410-\u044f\u0401\u0451\xc0-\xff\xb5]"}}},3287:function(e,t,i){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a,n=(a=i(7957))&&a.__esModule?a:{default:a};if(void 0===n.default)throw"jQuery not loaded!";var r=n.default;t.default=r},9845:function(e,t,i){Object.defineProperty(t,"__esModule",{value:!0}),t.mobile=t.iphone=t.iemobile=t.ie=void 0;var a,n=(a=i(9380))&&a.__esModule?a:{default:a};var r=n.default.navigator&&n.default.navigator.userAgent||"",o=r.indexOf("MSIE ")>0||r.indexOf("Trident/")>0,s=n.default.navigator&&n.default.navigator.maxTouchPoints||"ontouchstart"in n.default,l=/iemobile/i.test(r),u=/iphone/i.test(r)&&!l;t.iphone=u,t.iemobile=l,t.mobile=s,t.ie=o},7184:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return e.replace(i,"\\$1")};var i=new RegExp("(\\"+["/",".","*","+","?","|","(",")","[","]","{","}","\\","$","^"].join("|\\")+")","gim")},6030:function(e,t,i){Object.defineProperty(t,"__esModule",{value:!0}),t.EventHandlers=void 0;var a,n=i(8711),r=(a=i(5581))&&a.__esModule?a:{default:a},o=i(9845),s=i(7215),l=i(7760),u=i(4713);function c(e,t){var i="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!i){if(Array.isArray(e)||(i=function(e,t){if(!e)return;if("string"==typeof e)return f(e,t);var i=Object.prototype.toString.call(e).slice(8,-1);"Object"===i&&e.constructor&&(i=e.constructor.name);if("Map"===i||"Set"===i)return Array.from(e);if("Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i))return f(e,t)}(e))||t&&e&&"number"==typeof e.length){i&&(e=i);var a=0,n=function(){};return{s:n,n:function(){return a>=e.length?{done:!0}:{done:!1,value:e[a++]}},e:function(e){throw e},f:n}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var r,o=!0,s=!1;return{s:function(){i=i.call(e)},n:function(){var e=i.next();return o=e.done,e},e:function(e){s=!0,r=e},f:function(){try{o||null==i.return||i.return()}finally{if(s)throw r}}}}function f(e,t){(null==t||t>e.length)&&(t=e.length);for(var i=0,a=new Array(t);i<t;i++)a[i]=e[i];return a}var d={keydownEvent:function(e){var t=this.inputmask,i=t.opts,a=t.dependencyLib,c=t.maskset,f=this,d=a(f),p=e.keyCode,h=n.caret.call(t,f),v=i.onKeyDown.call(this,e,n.getBuffer.call(t),h,i);if(void 0!==v)return v;if(p===r.default.BACKSPACE||p===r.default.DELETE||o.iphone&&p===r.default.BACKSPACE_SAFARI||e.ctrlKey&&p===r.default.X&&!("oncut"in f))e.preventDefault(),s.handleRemove.call(t,f,p,h),(0,l.writeBuffer)(f,n.getBuffer.call(t,!0),c.p,e,f.inputmask._valueGet()!==n.getBuffer.call(t).join(""));else if(p===r.default.END||p===r.default.PAGE_DOWN){e.preventDefault();var m=n.seekNext.call(t,n.getLastValidPosition.call(t));n.caret.call(t,f,e.shiftKey?h.begin:m,m,!0)}else p===r.default.HOME&&!e.shiftKey||p===r.default.PAGE_UP?(e.preventDefault(),n.caret.call(t,f,0,e.shiftKey?h.begin:0,!0)):i.undoOnEscape&&p===r.default.ESCAPE&&!0!==e.altKey?((0,l.checkVal)(f,!0,!1,t.undoValue.split("")),d.trigger("click")):p!==r.default.INSERT||e.shiftKey||e.ctrlKey||void 0!==t.userOptions.insertMode?!0===i.tabThrough&&p===r.default.TAB?!0===e.shiftKey?(h.end=n.seekPrevious.call(t,h.end,!0),!0===u.getTest.call(t,h.end-1).match.static&&h.end--,h.begin=n.seekPrevious.call(t,h.end,!0),h.begin>=0&&h.end>0&&(e.preventDefault(),n.caret.call(t,f,h.begin,h.end))):(h.begin=n.seekNext.call(t,h.begin,!0),h.end=n.seekNext.call(t,h.begin,!0),h.end<c.maskLength&&h.end--,h.begin<=c.maskLength&&(e.preventDefault(),n.caret.call(t,f,h.begin,h.end))):e.shiftKey||i.insertModeVisual&&!1===i.insertMode&&(p===r.default.RIGHT?setTimeout((function(){var e=n.caret.call(t,f);n.caret.call(t,f,e.begin)}),0):p===r.default.LEFT&&setTimeout((function(){var e=n.translatePosition.call(t,f.inputmask.caretPos.begin);n.translatePosition.call(t,f.inputmask.caretPos.end);t.isRTL?n.caret.call(t,f,e+(e===c.maskLength?0:1)):n.caret.call(t,f,e-(0===e?0:1))}),0)):s.isSelection.call(t,h)?i.insertMode=!i.insertMode:(i.insertMode=!i.insertMode,n.caret.call(t,f,h.begin,h.begin));t.ignorable=i.ignorables.includes(p)},keypressEvent:function(e,t,i,a,o){var u=this.inputmask||this,c=u.opts,f=u.dependencyLib,d=u.maskset,p=u.el,h=f(p),v=e.keyCode;if(!(!0===t||e.ctrlKey&&e.altKey)&&(e.ctrlKey||e.metaKey||u.ignorable))return v===r.default.ENTER&&u.undoValue!==u._valueGet(!0)&&(u.undoValue=u._valueGet(!0),setTimeout((function(){h.trigger("change")}),0)),u.skipInputEvent=!0,!0;if(v){44!==v&&46!==v||3!==e.location||""===c.radixPoint||(v=c.radixPoint.charCodeAt(0));var m,g=t?{begin:o,end:o}:n.caret.call(u,p),k=String.fromCharCode(v);k=c.substitutes[k]||k,d.writeOutBuffer=!0;var y=s.isValid.call(u,g,k,a,void 0,void 0,void 0,t);if(!1!==y&&(n.resetMaskSet.call(u,!0),m=void 0!==y.caret?y.caret:n.seekNext.call(u,y.pos.begin?y.pos.begin:y.pos),d.p=m),m=c.numericInput&&void 0===y.caret?n.seekPrevious.call(u,m):m,!1!==i&&(setTimeout((function(){c.onKeyValidation.call(p,v,y)}),0),d.writeOutBuffer&&!1!==y)){var b=n.getBuffer.call(u);(0,l.writeBuffer)(p,b,m,e,!0!==t)}if(e.preventDefault(),t)return!1!==y&&(y.forwardPosition=m),y}},keyupEvent:function(e){var t=this.inputmask;t.isComposing&&(e.keyCode!==r.default.KEY_229&&e.keyCode!==r.default.ENTER||t.$el.trigger("input"))},pasteEvent:function(e){var t,i=this.inputmask,a=i.opts,r=i._valueGet(!0),o=n.caret.call(i,this);i.isRTL&&(t=o.end,o.end=n.translatePosition.call(i,o.begin),o.begin=n.translatePosition.call(i,t));var s=r.substr(0,o.begin),u=r.substr(o.end,r.length);if(s==(i.isRTL?n.getBufferTemplate.call(i).slice().reverse():n.getBufferTemplate.call(i)).slice(0,o.begin).join("")&&(s=""),u==(i.isRTL?n.getBufferTemplate.call(i).slice().reverse():n.getBufferTemplate.call(i)).slice(o.end).join("")&&(u=""),window.clipboardData&&window.clipboardData.getData)r=s+window.clipboardData.getData("Text")+u;else{if(!e.clipboardData||!e.clipboardData.getData)return!0;r=s+e.clipboardData.getData("text/plain")+u}var f=r;if(i.isRTL){f=f.split("");var d,p=c(n.getBufferTemplate.call(i));try{for(p.s();!(d=p.n()).done;){var h=d.value;f[0]===h&&f.shift()}}catch(e){p.e(e)}finally{p.f()}f=f.join("")}if("function"==typeof a.onBeforePaste){if(!1===(f=a.onBeforePaste.call(i,f,a)))return!1;f||(f=r)}(0,l.checkVal)(this,!0,!1,f.toString().split(""),e),e.preventDefault()},inputFallBackEvent:function(e){var t=this.inputmask,i=t.opts,a=t.dependencyLib;var s=this,c=s.inputmask._valueGet(!0),f=(t.isRTL?n.getBuffer.call(t).slice().reverse():n.getBuffer.call(t)).join(""),p=n.caret.call(t,s,void 0,void 0,!0);if(f!==c){c=function(e,i,a){if(o.iemobile){var r=i.replace(n.getBuffer.call(t).join(""),"");if(1===r.length){var s=i.split("");s.splice(a.begin,0,r),i=s.join("")}}return i}(0,c,p);var h=function(e,a,r){for(var o,s,l,c=e.substr(0,r.begin).split(""),f=e.substr(r.begin).split(""),d=a.substr(0,r.begin).split(""),p=a.substr(r.begin).split(""),h=c.length>=d.length?c.length:d.length,v=f.length>=p.length?f.length:p.length,m="",g=[],k="~";c.length<h;)c.push(k);for(;d.length<h;)d.push(k);for(;f.length<v;)f.unshift(k);for(;p.length<v;)p.unshift(k);var y=c.concat(f),b=d.concat(p);for(s=0,o=y.length;s<o;s++)switch(l=u.getPlaceholder.call(t,n.translatePosition.call(t,s)),m){case"insertText":b[s-1]===y[s]&&r.begin==y.length-1&&g.push(y[s]),s=o;break;case"insertReplacementText":case"deleteContentBackward":y[s]===k?r.end++:s=o;break;default:y[s]!==b[s]&&(y[s+1]!==k&&y[s+1]!==l&&void 0!==y[s+1]||(b[s]!==l||b[s+1]!==k)&&b[s]!==k?b[s+1]===k&&b[s]===y[s+1]?(m="insertText",g.push(y[s]),r.begin--,r.end--):y[s]!==l&&y[s]!==k&&(y[s+1]===k||b[s]!==y[s]&&b[s+1]===y[s+1])?(m="insertReplacementText",g.push(y[s]),r.begin--):y[s]===k?(m="deleteContentBackward",(n.isMask.call(t,n.translatePosition.call(t,s),!0)||b[s]===i.radixPoint)&&r.end++):s=o:(m="insertText",g.push(y[s]),r.begin--,r.end--))}return{action:m,data:g,caret:r}}(c,f,p);switch((s.inputmask.shadowRoot||s.ownerDocument).activeElement!==s&&s.focus(),(0,l.writeBuffer)(s,n.getBuffer.call(t)),n.caret.call(t,s,p.begin,p.end,!0),h.action){case"insertText":case"insertReplacementText":h.data.forEach((function(e,i){var n=new a.Event("keypress");n.keyCode=e.charCodeAt(0),t.ignorable=!1,d.keypressEvent.call(s,n)})),setTimeout((function(){t.$el.trigger("keyup")}),0);break;case"deleteContentBackward":var v=new a.Event("keydown");v.keyCode=r.default.BACKSPACE,d.keydownEvent.call(s,v);break;default:(0,l.applyInputValue)(s,c)}e.preventDefault()}},compositionendEvent:function(e){var t=this.inputmask;t.isComposing=!1,t.$el.trigger("input")},setValueEvent:function(e){var t=this.inputmask,i=this,a=e&&e.detail?e.detail[0]:arguments[1];void 0===a&&(a=i.inputmask._valueGet(!0)),(0,l.applyInputValue)(i,a),(e.detail&&void 0!==e.detail[1]||void 0!==arguments[2])&&n.caret.call(t,i,e.detail?e.detail[1]:arguments[2])},focusEvent:function(e){var t=this.inputmask,i=t.opts,a=this,r=a.inputmask._valueGet();i.showMaskOnFocus&&r!==n.getBuffer.call(t).join("")&&(0,l.writeBuffer)(a,n.getBuffer.call(t),n.seekNext.call(t,n.getLastValidPosition.call(t))),!0!==i.positionCaretOnTab||!1!==t.mouseEnter||s.isComplete.call(t,n.getBuffer.call(t))&&-1!==n.getLastValidPosition.call(t)||d.clickEvent.apply(a,[e,!0]),t.undoValue=t._valueGet(!0)},invalidEvent:function(e){this.inputmask.validationEvent=!0},mouseleaveEvent:function(){var e=this.inputmask,t=e.opts,i=this;e.mouseEnter=!1,t.clearMaskOnLostFocus&&(i.inputmask.shadowRoot||i.ownerDocument).activeElement!==i&&(0,l.HandleNativePlaceholder)(i,e.originalPlaceholder)},clickEvent:function(e,t){var i=this.inputmask,a=this;if((a.inputmask.shadowRoot||a.ownerDocument).activeElement===a){var r=n.determineNewCaretPosition.call(i,n.caret.call(i,a),t);void 0!==r&&n.caret.call(i,a,r)}},cutEvent:function(e){var t=this.inputmask,i=t.maskset,a=this,o=n.caret.call(t,a),u=t.isRTL?n.getBuffer.call(t).slice(o.end,o.begin):n.getBuffer.call(t).slice(o.begin,o.end),c=t.isRTL?u.reverse().join(""):u.join("");window.navigator.clipboard?window.navigator.clipboard.writeText(c):window.clipboardData&&window.clipboardData.getData&&window.clipboardData.setData("Text",c),s.handleRemove.call(t,a,r.default.DELETE,o),(0,l.writeBuffer)(a,n.getBuffer.call(t),i.p,e,t.undoValue!==t._valueGet(!0))},blurEvent:function(e){var t=this.inputmask,i=t.opts,a=(0,t.dependencyLib)(this),r=this;if(r.inputmask){(0,l.HandleNativePlaceholder)(r,t.originalPlaceholder);var o=r.inputmask._valueGet(),u=n.getBuffer.call(t).slice();""!==o&&(i.clearMaskOnLostFocus&&(-1===n.getLastValidPosition.call(t)&&o===n.getBufferTemplate.call(t).join("")?u=[]:l.clearOptionalTail.call(t,u)),!1===s.isComplete.call(t,u)&&(setTimeout((function(){a.trigger("incomplete")}),0),i.clearIncomplete&&(n.resetMaskSet.call(t),u=i.clearMaskOnLostFocus?[]:n.getBufferTemplate.call(t).slice())),(0,l.writeBuffer)(r,u,void 0,e)),t.undoValue!==t._valueGet(!0)&&(t.undoValue=t._valueGet(!0),a.trigger("change"))}},mouseenterEvent:function(){var e=this.inputmask,t=e.opts,i=this;if(e.mouseEnter=!0,(i.inputmask.shadowRoot||i.ownerDocument).activeElement!==i){var a=(e.isRTL?n.getBufferTemplate.call(e).slice().reverse():n.getBufferTemplate.call(e)).join("");e.placeholder!==a&&i.placeholder!==e.originalPlaceholder&&(e.originalPlaceholder=i.placeholder),t.showMaskOnHover&&(0,l.HandleNativePlaceholder)(i,a)}},submitEvent:function(){var e=this.inputmask,t=e.opts;e.undoValue!==e._valueGet(!0)&&e.$el.trigger("change"),-1===n.getLastValidPosition.call(e)&&e._valueGet&&e._valueGet()===n.getBufferTemplate.call(e).join("")&&e._valueSet(""),t.clearIncomplete&&!1===s.isComplete.call(e,n.getBuffer.call(e))&&e._valueSet(""),t.removeMaskOnSubmit&&(e._valueSet(e.unmaskedvalue(),!0),setTimeout((function(){(0,l.writeBuffer)(e.el,n.getBuffer.call(e))}),0))},resetEvent:function(){var e=this.inputmask;e.refreshValue=!0,setTimeout((function(){(0,l.applyInputValue)(e.el,e._valueGet(!0))}),0)}};t.EventHandlers=d},9716:function(e,t,i){Object.defineProperty(t,"__esModule",{value:!0}),t.EventRuler=void 0;var a=s(i(2394)),n=s(i(5581)),r=i(8711),o=i(7760);function s(e){return e&&e.__esModule?e:{default:e}}var l={on:function(e,t,i){var s=e.inputmask.dependencyLib,l=function(t){t.originalEvent&&(t=t.originalEvent||t,arguments[0]=t);var l,u=this,c=u.inputmask,f=c?c.opts:void 0;if(void 0===c&&"FORM"!==this.nodeName){var d=s.data(u,"_inputmask_opts");s(u).off(),d&&new a.default(d).mask(u)}else{if(["submit","reset","setvalue"].includes(t.type)||"FORM"===this.nodeName||!(u.disabled||u.readOnly&&!("keydown"===t.type&&t.ctrlKey&&67===t.keyCode||!1===f.tabThrough&&t.keyCode===n.default.TAB))){switch(t.type){case"input":if(!0===c.skipInputEvent||t.inputType&&"insertCompositionText"===t.inputType)return c.skipInputEvent=!1,t.preventDefault();break;case"keydown":c.skipKeyPressEvent=!1,c.skipInputEvent=c.isComposing=t.keyCode===n.default.KEY_229;break;case"keyup":case"compositionend":c.isComposing&&(c.skipInputEvent=!1);break;case"keypress":if(!0===c.skipKeyPressEvent)return t.preventDefault();c.skipKeyPressEvent=!0;break;case"click":case"focus":return c.validationEvent?(c.validationEvent=!1,e.blur(),(0,o.HandleNativePlaceholder)(e,(c.isRTL?r.getBufferTemplate.call(c).slice().reverse():r.getBufferTemplate.call(c)).join("")),setTimeout((function(){e.focus()}),f.validationEventTimeOut),!1):(l=arguments,void setTimeout((function(){e.inputmask&&i.apply(u,l)}),0))}var p=i.apply(u,arguments);return!1===p&&(t.preventDefault(),t.stopPropagation()),p}t.preventDefault()}};["submit","reset"].includes(t)?(l=l.bind(e),null!==e.form&&s(e.form).on(t,l)):s(e).on(t,l),e.inputmask.events[t]=e.inputmask.events[t]||[],e.inputmask.events[t].push(l)},off:function(e,t){if(e.inputmask&&e.inputmask.events){var i=e.inputmask.dependencyLib,a=e.inputmask.events;for(var n in t&&((a=[])[t]=e.inputmask.events[t]),a){for(var r=a[n];r.length>0;){var o=r.pop();["submit","reset"].includes(n)?null!==e.form&&i(e.form).off(n,o):i(e).off(n,o)}delete e.inputmask.events[n]}}}};t.EventRuler=l},219:function(e,t,i){var a=d(i(2394)),n=d(i(5581)),r=d(i(7184)),o=i(8711),s=i(4713);function l(e){return l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},l(e)}function u(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var i=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==i)return;var a,n,r=[],o=!0,s=!1;try{for(i=i.call(e);!(o=(a=i.next()).done)&&(r.push(a.value),!t||r.length!==t);o=!0);}catch(e){s=!0,n=e}finally{try{o||null==i.return||i.return()}finally{if(s)throw n}}return r}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return c(e,t);var i=Object.prototype.toString.call(e).slice(8,-1);"Object"===i&&e.constructor&&(i=e.constructor.name);if("Map"===i||"Set"===i)return Array.from(e);if("Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i))return c(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function c(e,t){(null==t||t>e.length)&&(t=e.length);for(var i=0,a=new Array(t);i<t;i++)a[i]=e[i];return a}function f(e,t){for(var i=0;i<t.length;i++){var a=t[i];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function d(e){return e&&e.__esModule?e:{default:e}}var p=a.default.dependencyLib,h=function(){function e(t,i,a){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.mask=t,this.format=i,this.opts=a,this._date=new Date(1,0,1),this.initDateObject(t,this.opts)}var t,i,a;return t=e,(i=[{key:"date",get:function(){return void 0===this._date&&(this._date=new Date(1,0,1),this.initDateObject(void 0,this.opts)),this._date}},{key:"initDateObject",value:function(e,t){var i;for(P(t).lastIndex=0;i=P(t).exec(this.format);){var a=new RegExp("\\d+$").exec(i[0]),n=a?i[0][0]+"x":i[0],r=void 0;if(void 0!==e){if(a){var o=P(t).lastIndex,s=O(i.index,t);P(t).lastIndex=o,r=e.slice(0,e.indexOf(s.nextMatch[0]))}else r=e.slice(0,g[n]&&g[n][4]||n.length);e=e.slice(r.length)}Object.prototype.hasOwnProperty.call(g,n)&&this.setValue(this,r,n,g[n][2],g[n][1])}}},{key:"setValue",value:function(e,t,i,a,n){if(void 0!==t&&(e[a]="ampm"===a?t:t.replace(/[^0-9]/g,"0"),e["raw"+a]=t.replace(/\s/g,"_")),void 0!==n){var r=e[a];("day"===a&&29===parseInt(r)||"month"===a&&2===parseInt(r))&&(29!==parseInt(e.day)||2!==parseInt(e.month)||""!==e.year&&void 0!==e.year||e._date.setFullYear(2012,1,29)),"day"===a&&(m=!0,0===parseInt(r)&&(r=1)),"month"===a&&(m=!0),"year"===a&&(m=!0,r.length<4&&(r=w(r,4,!0))),""===r||isNaN(r)||n.call(e._date,r),"ampm"===a&&n.call(e._date,r)}}},{key:"reset",value:function(){this._date=new Date(1,0,1)}},{key:"reInit",value:function(){this._date=void 0,this.date}}])&&f(t.prototype,i),a&&f(t,a),Object.defineProperty(t,"prototype",{writable:!1}),e}(),v=(new Date).getFullYear(),m=!1,g={d:["[1-9]|[12][0-9]|3[01]",Date.prototype.setDate,"day",Date.prototype.getDate],dd:["0[1-9]|[12][0-9]|3[01]",Date.prototype.setDate,"day",function(){return w(Date.prototype.getDate.call(this),2)}],ddd:[""],dddd:[""],m:["[1-9]|1[012]",function(e){var t=e?parseInt(e):0;return t>0&&t--,Date.prototype.setMonth.call(this,t)},"month",function(){return Date.prototype.getMonth.call(this)+1}],mm:["0[1-9]|1[012]",function(e){var t=e?parseInt(e):0;return t>0&&t--,Date.prototype.setMonth.call(this,t)},"month",function(){return w(Date.prototype.getMonth.call(this)+1,2)}],mmm:[""],mmmm:[""],yy:["[0-9]{2}",Date.prototype.setFullYear,"year",function(){return w(Date.prototype.getFullYear.call(this),2)}],yyyy:["[0-9]{4}",Date.prototype.setFullYear,"year",function(){return w(Date.prototype.getFullYear.call(this),4)}],h:["[1-9]|1[0-2]",Date.prototype.setHours,"hours",Date.prototype.getHours],hh:["0[1-9]|1[0-2]",Date.prototype.setHours,"hours",function(){return w(Date.prototype.getHours.call(this),2)}],hx:[function(e){return"[0-9]{".concat(e,"}")},Date.prototype.setHours,"hours",function(e){return Date.prototype.getHours}],H:["1?[0-9]|2[0-3]",Date.prototype.setHours,"hours",Date.prototype.getHours],HH:["0[0-9]|1[0-9]|2[0-3]",Date.prototype.setHours,"hours",function(){return w(Date.prototype.getHours.call(this),2)}],Hx:[function(e){return"[0-9]{".concat(e,"}")},Date.prototype.setHours,"hours",function(e){return function(){return w(Date.prototype.getHours.call(this),e)}}],M:["[1-5]?[0-9]",Date.prototype.setMinutes,"minutes",Date.prototype.getMinutes],MM:["0[0-9]|1[0-9]|2[0-9]|3[0-9]|4[0-9]|5[0-9]",Date.prototype.setMinutes,"minutes",function(){return w(Date.prototype.getMinutes.call(this),2)}],s:["[1-5]?[0-9]",Date.prototype.setSeconds,"seconds",Date.prototype.getSeconds],ss:["0[0-9]|1[0-9]|2[0-9]|3[0-9]|4[0-9]|5[0-9]",Date.prototype.setSeconds,"seconds",function(){return w(Date.prototype.getSeconds.call(this),2)}],l:["[0-9]{3}",Date.prototype.setMilliseconds,"milliseconds",function(){return w(Date.prototype.getMilliseconds.call(this),3)},3],L:["[0-9]{2}",Date.prototype.setMilliseconds,"milliseconds",function(){return w(Date.prototype.getMilliseconds.call(this),2)},2],t:["[ap]",y,"ampm",b,1],tt:["[ap]m",y,"ampm",b,2],T:["[AP]",y,"ampm",b,1],TT:["[AP]M",y,"ampm",b,2],Z:[".*",void 0,"Z",function(){var e=this.toString().match(/\((.+)\)/)[1];e.includes(" ")&&(e=(e=e.replace("-"," ").toUpperCase()).split(" ").map((function(e){return u(e,1)[0]})).join(""));return e}],o:[""],S:[""]},k={isoDate:"yyyy-mm-dd",isoTime:"HH:MM:ss",isoDateTime:"yyyy-mm-dd'T'HH:MM:ss",isoUtcDateTime:"UTC:yyyy-mm-dd'T'HH:MM:ss'Z'"};function y(e){var t=this.getHours();e.toLowerCase().includes("p")?this.setHours(t+12):e.toLowerCase().includes("a")&&t>=12&&this.setHours(t-12)}function b(){var e=this.getHours();return(e=e||12)>=12?"PM":"AM"}function x(e){var t=new RegExp("\\d+$").exec(e[0]);if(t&&void 0!==t[0]){var i=g[e[0][0]+"x"].slice("");return i[0]=i[0](t[0]),i[3]=i[3](t[0]),i}if(g[e[0]])return g[e[0]]}function P(e){if(!e.tokenizer){var t=[],i=[];for(var a in g)if(/\.*x$/.test(a)){var n=a[0]+"\\d+";-1===i.indexOf(n)&&i.push(n)}else-1===t.indexOf(a[0])&&t.push(a[0]);e.tokenizer="("+(i.length>0?i.join("|")+"|":"")+t.join("+|")+")+?|.",e.tokenizer=new RegExp(e.tokenizer,"g")}return e.tokenizer}function E(e,t,i){if(!m)return!0;if(void 0===e.rawday||!isFinite(e.rawday)&&new Date(e.date.getFullYear(),isFinite(e.rawmonth)?e.month:e.date.getMonth()+1,0).getDate()>=e.day||"29"==e.day&&(!isFinite(e.rawyear)||void 0===e.rawyear||""===e.rawyear)||new Date(e.date.getFullYear(),isFinite(e.rawmonth)?e.month:e.date.getMonth()+1,0).getDate()>=e.day)return t;if("29"==e.day){var a=O(t.pos,i);if("yyyy"===a.targetMatch[0]&&t.pos-a.targetMatchIndex==2)return t.remove=t.pos+1,t}else if("02"==e.month&&"30"==e.day&&void 0!==t.c)return e.day="03",e.date.setDate(3),e.date.setMonth(1),t.insert=[{pos:t.pos,c:"0"},{pos:t.pos+1,c:t.c}],t.caret=o.seekNext.call(this,t.pos+1),t;return!1}function S(e,t,i,a){var n,o,s="";for(P(i).lastIndex=0;n=P(i).exec(e);){if(void 0===t)if(o=x(n))s+="("+o[0]+")";else switch(n[0]){case"[":s+="(";break;case"]":s+=")?";break;default:s+=(0,r.default)(n[0])}else if(o=x(n))if(!0!==a&&o[3])s+=o[3].call(t.date);else o[2]?s+=t["raw"+o[2]]:s+=n[0];else s+=n[0]}return s}function w(e,t,i){for(e=String(e),t=t||2;e.length<t;)e=i?e+"0":"0"+e;return e}function _(e,t,i){return"string"==typeof e?new h(e,t,i):e&&"object"===l(e)&&Object.prototype.hasOwnProperty.call(e,"date")?e:void 0}function M(e,t){return S(t.inputFormat,{date:e},t)}function O(e,t){var i,a,n=0,r=0;for(P(t).lastIndex=0;a=P(t).exec(t.inputFormat);){var o=new RegExp("\\d+$").exec(a[0]);if((n+=r=o?parseInt(o[0]):a[0].length)>=e+1){i=a,a=P(t).exec(t.inputFormat);break}}return{targetMatchIndex:n-r,nextMatch:a,targetMatch:i}}a.default.extendAliases({datetime:{mask:function(e){return e.numericInput=!1,g.S=e.i18n.ordinalSuffix.join("|"),e.inputFormat=k[e.inputFormat]||e.inputFormat,e.displayFormat=k[e.displayFormat]||e.displayFormat||e.inputFormat,e.outputFormat=k[e.outputFormat]||e.outputFormat||e.inputFormat,e.placeholder=""!==e.placeholder?e.placeholder:e.inputFormat.replace(/[[\]]/,""),e.regex=S(e.inputFormat,void 0,e),e.min=_(e.min,e.inputFormat,e),e.max=_(e.max,e.inputFormat,e),null},placeholder:"",inputFormat:"isoDateTime",displayFormat:null,outputFormat:null,min:null,max:null,skipOptionalPartCharacter:"",i18n:{dayNames:["Mon","Tue","Wed","Thu","Fri","Sat","Sun","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],monthNames:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec","January","February","March","April","May","June","July","August","September","October","November","December"],ordinalSuffix:["st","nd","rd","th"]},preValidation:function(e,t,i,a,n,r,o,s){if(s)return!0;if(isNaN(i)&&e[t]!==i){var l=O(t,n);if(l.nextMatch&&l.nextMatch[0]===i&&l.targetMatch[0].length>1){var u=g[l.targetMatch[0]][0];if(new RegExp(u).test("0"+e[t-1]))return e[t]=e[t-1],e[t-1]="0",{fuzzy:!0,buffer:e,refreshFromBuffer:{start:t-1,end:t+1},pos:t+1}}}return!0},postValidation:function(e,t,i,a,n,r,o,l){var u,c;if(o)return!0;if(!1===a&&(((u=O(t+1,n)).targetMatch&&u.targetMatchIndex===t&&u.targetMatch[0].length>1&&void 0!==g[u.targetMatch[0]]||(u=O(t+2,n)).targetMatch&&u.targetMatchIndex===t+1&&u.targetMatch[0].length>1&&void 0!==g[u.targetMatch[0]])&&(c=g[u.targetMatch[0]][0]),void 0!==c&&(void 0!==r.validPositions[t+1]&&new RegExp(c).test(i+"0")?(e[t]=i,e[t+1]="0",a={pos:t+2,caret:t}):new RegExp(c).test("0"+i)&&(e[t]="0",e[t+1]=i,a={pos:t+2})),!1===a))return a;if(a.fuzzy&&(e=a.buffer,t=a.pos),(u=O(t,n)).targetMatch&&u.targetMatch[0]&&void 0!==g[u.targetMatch[0]]){var f=g[u.targetMatch[0]];c=f[0];var d=e.slice(u.targetMatchIndex,u.targetMatchIndex+u.targetMatch[0].length);if(!1===new RegExp(c).test(d.join(""))&&2===u.targetMatch[0].length&&r.validPositions[u.targetMatchIndex]&&r.validPositions[u.targetMatchIndex+1]&&(r.validPositions[u.targetMatchIndex+1].input="0"),"year"==f[2])for(var p=s.getMaskTemplate.call(this,!1,1,void 0,!0),h=t+1;h<e.length;h++)e[h]=p[h],delete r.validPositions[h]}var m=a,k=_(e.join(""),n.inputFormat,n);return m&&!isNaN(k.date.getTime())&&(n.prefillYear&&(m=function(e,t,i){if(e.year!==e.rawyear){var a=v.toString(),n=e.rawyear.replace(/[^0-9]/g,""),r=a.slice(0,n.length),o=a.slice(n.length);if(2===n.length&&n===r){var s=new Date(v,e.month-1,e.day);e.day==s.getDate()&&(!i.max||i.max.date.getTime()>=s.getTime())&&(e.date.setFullYear(v),e.year=a,t.insert=[{pos:t.pos+1,c:o[0]},{pos:t.pos+2,c:o[1]}])}}return t}(k,m,n)),m=function(e,t,i,a,n){if(!t)return t;if(t&&i.min&&!isNaN(i.min.date.getTime())){var r;for(e.reset(),P(i).lastIndex=0;r=P(i).exec(i.inputFormat);){var o;if((o=x(r))&&o[3]){for(var s=o[1],l=e[o[2]],u=i.min[o[2]],c=i.max?i.max[o[2]]:u,f=[],d=!1,p=0;p<u.length;p++)void 0!==a.validPositions[p+r.index]||d?(f[p]=l[p],d=d||l[p]>u[p]):(f[p]=u[p],"year"===o[2]&&l.length-1==p&&u!=c&&(f=(parseInt(f.join(""))+1).toString().split("")),"ampm"===o[2]&&u!=c&&i.min.date.getTime()>e.date.getTime()&&(f[p]=c[p]));s.call(e._date,f.join(""))}}t=i.min.date.getTime()<=e.date.getTime(),e.reInit()}return t&&i.max&&(isNaN(i.max.date.getTime())||(t=i.max.date.getTime()>=e.date.getTime())),t}(k,m=E.call(this,k,m,n),n,r)),void 0!==t&&m&&a.pos!==t?{buffer:S(n.inputFormat,k,n).split(""),refreshFromBuffer:{start:t,end:a.pos},pos:a.caret||a.pos}:m},onKeyDown:function(e,t,i,a){e.ctrlKey&&e.keyCode===n.default.RIGHT&&(this.inputmask._valueSet(M(new Date,a)),p(this).trigger("setvalue"))},onUnMask:function(e,t,i){return t?S(i.outputFormat,_(e,i.inputFormat,i),i,!0):t},casing:function(e,t,i,a){return 0==t.nativeDef.indexOf("[ap]")?e.toLowerCase():0==t.nativeDef.indexOf("[AP]")?e.toUpperCase():e},onBeforeMask:function(e,t){return"[object Date]"===Object.prototype.toString.call(e)&&(e=M(e,t)),e},insertMode:!1,shiftPositions:!1,keepStatic:!1,inputmode:"numeric",prefillYear:!0}})},3851:function(e,t,i){var a,n=(a=i(2394))&&a.__esModule?a:{default:a},r=i(8711),o=i(4713);n.default.extendDefinitions({A:{validator:"[A-Za-z\u0410-\u044f\u0401\u0451\xc0-\xff\xb5]",casing:"upper"},"&":{validator:"[0-9A-Za-z\u0410-\u044f\u0401\u0451\xc0-\xff\xb5]",casing:"upper"},"#":{validator:"[0-9A-Fa-f]",casing:"upper"}});var s=new RegExp("25[0-5]|2[0-4][0-9]|[01][0-9][0-9]");function l(e,t,i,a,n){return i-1>-1&&"."!==t.buffer[i-1]?(e=t.buffer[i-1]+e,e=i-2>-1&&"."!==t.buffer[i-2]?t.buffer[i-2]+e:"0"+e):e="00"+e,s.test(e)}n.default.extendAliases({cssunit:{regex:"[+-]?[0-9]+\\.?([0-9]+)?(px|em|rem|ex|%|in|cm|mm|pt|pc)"},url:{regex:"(https?|ftp)://.*",autoUnmask:!1,keepStatic:!1,tabThrough:!0},ip:{mask:"i{1,3}.j{1,3}.k{1,3}.l{1,3}",definitions:{i:{validator:l},j:{validator:l},k:{validator:l},l:{validator:l}},onUnMask:function(e,t,i){return e},inputmode:"decimal",substitutes:{",":"."}},email:{mask:function(e){var t="*{1,64}[.*{1,64}][.*{1,64}][.*{1,63}]@-{1,63}.-{1,63}[.-{1,63}][.-{1,63}]",i=t;if(e.separator)for(var a=0;a<e.quantifier;a++)i+="[".concat(e.separator).concat(t,"]");return i},greedy:!1,casing:"lower",separator:null,quantifier:5,skipOptionalPartCharacter:"",onBeforePaste:function(e,t){return(e=e.toLowerCase()).replace("mailto:","")},definitions:{"*":{validator:"[0-9\uff11-\uff19A-Za-z\u0410-\u044f\u0401\u0451\xc0-\xff\xb5!#$%&'*+/=?^_`{|}~-]"},"-":{validator:"[0-9A-Za-z-]"}},onUnMask:function(e,t,i){return e},inputmode:"email"},mac:{mask:"##:##:##:##:##:##"},vin:{mask:"V{13}9{4}",definitions:{V:{validator:"[A-HJ-NPR-Za-hj-npr-z\\d]",casing:"upper"}},clearIncomplete:!0,autoUnmask:!0},ssn:{mask:"999-99-9999",postValidation:function(e,t,i,a,n,s,l){var u=o.getMaskTemplate.call(this,!0,r.getLastValidPosition.call(this),!0,!0);return/^(?!219-09-9999|078-05-1120)(?!666|000|9.{2}).{3}-(?!00).{2}-(?!0{4}).{4}$/.test(u.join(""))}}})},207:function(e,t,i){var a=s(i(2394)),n=s(i(5581)),r=s(i(7184)),o=i(8711);function s(e){return e&&e.__esModule?e:{default:e}}var l=a.default.dependencyLib;function u(e,t){for(var i="",n=0;n<e.length;n++)a.default.prototype.definitions[e.charAt(n)]||t.definitions[e.charAt(n)]||t.optionalmarker[0]===e.charAt(n)||t.optionalmarker[1]===e.charAt(n)||t.quantifiermarker[0]===e.charAt(n)||t.quantifiermarker[1]===e.charAt(n)||t.groupmarker[0]===e.charAt(n)||t.groupmarker[1]===e.charAt(n)||t.alternatormarker===e.charAt(n)?i+="\\"+e.charAt(n):i+=e.charAt(n);return i}function c(e,t,i,a){if(e.length>0&&t>0&&(!i.digitsOptional||a)){var n=e.indexOf(i.radixPoint),r=!1;i.negationSymbol.back===e[e.length-1]&&(r=!0,e.length--),-1===n&&(e.push(i.radixPoint),n=e.length-1);for(var o=1;o<=t;o++)isFinite(e[n+o])||(e[n+o]="0")}return r&&e.push(i.negationSymbol.back),e}function f(e,t){var i=0;for(var a in"+"===e&&(i=o.seekNext.call(this,t.validPositions.length-1)),t.tests)if((a=parseInt(a))>=i)for(var n=0,r=t.tests[a].length;n<r;n++)if((void 0===t.validPositions[a]||"-"===e)&&t.tests[a][n].match.def===e)return a+(void 0!==t.validPositions[a]&&"-"!==e?1:0);return i}function d(e,t){for(var i=-1,a=0,n=t.validPositions.length;a<n;a++){var r=t.validPositions[a];if(r&&r.match.def===e){i=a;break}}return i}function p(e,t,i,a,n){var r=t.buffer?t.buffer.indexOf(n.radixPoint):-1,o=(-1!==r||a&&n.jitMasking)&&new RegExp(n.definitions[9].validator).test(e);return n._radixDance&&-1!==r&&o&&null==t.validPositions[r]?{insert:{pos:r===i?r+1:r,c:n.radixPoint},pos:i}:o}a.default.extendAliases({numeric:{mask:function(e){e.repeat=0,e.groupSeparator===e.radixPoint&&e.digits&&"0"!==e.digits&&("."===e.radixPoint?e.groupSeparator=",":","===e.radixPoint?e.groupSeparator=".":e.groupSeparator="")," "===e.groupSeparator&&(e.skipOptionalPartCharacter=void 0),e.placeholder.length>1&&(e.placeholder=e.placeholder.charAt(0)),"radixFocus"===e.positionCaretOnClick&&""===e.placeholder&&(e.positionCaretOnClick="lvp");var t="0",i=e.radixPoint;!0===e.numericInput&&void 0===e.__financeInput?(t="1",e.positionCaretOnClick="radixFocus"===e.positionCaretOnClick?"lvp":e.positionCaretOnClick,e.digitsOptional=!1,isNaN(e.digits)&&(e.digits=2),e._radixDance=!1,i=","===e.radixPoint?"?":"!",""!==e.radixPoint&&void 0===e.definitions[i]&&(e.definitions[i]={},e.definitions[i].validator="["+e.radixPoint+"]",e.definitions[i].placeholder=e.radixPoint,e.definitions[i].static=!0,e.definitions[i].generated=!0)):(e.__financeInput=!1,e.numericInput=!0);var a,n="[+]";if(n+=u(e.prefix,e),""!==e.groupSeparator?(void 0===e.definitions[e.groupSeparator]&&(e.definitions[e.groupSeparator]={},e.definitions[e.groupSeparator].validator="["+e.groupSeparator+"]",e.definitions[e.groupSeparator].placeholder=e.groupSeparator,e.definitions[e.groupSeparator].static=!0,e.definitions[e.groupSeparator].generated=!0),n+=e._mask(e)):n+="9{+}",void 0!==e.digits&&0!==e.digits){var o=e.digits.toString().split(",");isFinite(o[0])&&o[1]&&isFinite(o[1])?n+=i+t+"{"+e.digits+"}":(isNaN(e.digits)||parseInt(e.digits)>0)&&(e.digitsOptional||e.jitMasking?(a=n+i+t+"{0,"+e.digits+"}",e.keepStatic=!0):n+=i+t+"{"+e.digits+"}")}else e.inputmode="numeric";return n+=u(e.suffix,e),n+="[-]",a&&(n=[a+u(e.suffix,e)+"[-]",n]),e.greedy=!1,function(e){void 0===e.parseMinMaxOptions&&(null!==e.min&&(e.min=e.min.toString().replace(new RegExp((0,r.default)(e.groupSeparator),"g"),""),","===e.radixPoint&&(e.min=e.min.replace(e.radixPoint,".")),e.min=isFinite(e.min)?parseFloat(e.min):NaN,isNaN(e.min)&&(e.min=Number.MIN_VALUE)),null!==e.max&&(e.max=e.max.toString().replace(new RegExp((0,r.default)(e.groupSeparator),"g"),""),","===e.radixPoint&&(e.max=e.max.replace(e.radixPoint,".")),e.max=isFinite(e.max)?parseFloat(e.max):NaN,isNaN(e.max)&&(e.max=Number.MAX_VALUE)),e.parseMinMaxOptions="done")}(e),""!==e.radixPoint&&e.substituteRadixPoint&&(e.substitutes["."==e.radixPoint?",":"."]=e.radixPoint),n},_mask:function(e){return"("+e.groupSeparator+"999){+|1}"},digits:"*",digitsOptional:!0,enforceDigitsOnBlur:!1,radixPoint:".",positionCaretOnClick:"radixFocus",_radixDance:!0,groupSeparator:"",allowMinus:!0,negationSymbol:{front:"-",back:""},prefix:"",suffix:"",min:null,max:null,SetMaxOnOverflow:!1,step:1,inputType:"text",unmaskAsNumber:!1,roundingFN:Math.round,inputmode:"decimal",shortcuts:{k:"1000",m:"1000000"},placeholder:"0",greedy:!1,rightAlign:!0,insertMode:!0,autoUnmask:!1,skipOptionalPartCharacter:"",usePrototypeDefinitions:!1,stripLeadingZeroes:!0,substituteRadixPoint:!0,definitions:{0:{validator:p},1:{validator:p,definitionSymbol:"9"},9:{validator:"[0-9\uff10-\uff19\u0660-\u0669\u06f0-\u06f9]",definitionSymbol:"*"},"+":{validator:function(e,t,i,a,n){return n.allowMinus&&("-"===e||e===n.negationSymbol.front)}},"-":{validator:function(e,t,i,a,n){return n.allowMinus&&e===n.negationSymbol.back}}},preValidation:function(e,t,i,a,n,r,o,s){if(!1!==n.__financeInput&&i===n.radixPoint)return!1;var l=e.indexOf(n.radixPoint),u=t;if(t=function(e,t,i,a,n){return n._radixDance&&n.numericInput&&t!==n.negationSymbol.back&&e<=i&&(i>0||t==n.radixPoint)&&(void 0===a.validPositions[e-1]||a.validPositions[e-1].input!==n.negationSymbol.back)&&(e-=1),e}(t,i,l,r,n),"-"===i||i===n.negationSymbol.front){if(!0!==n.allowMinus)return!1;var c=!1,p=d("+",r),h=d("-",r);return-1!==p&&(c=[p,h]),!1!==c?{remove:c,caret:u-n.negationSymbol.back.length}:{insert:[{pos:f.call(this,"+",r),c:n.negationSymbol.front,fromIsValid:!0},{pos:f.call(this,"-",r),c:n.negationSymbol.back,fromIsValid:void 0}],caret:u+n.negationSymbol.back.length}}if(i===n.groupSeparator)return{caret:u};if(s)return!0;if(-1!==l&&!0===n._radixDance&&!1===a&&i===n.radixPoint&&void 0!==n.digits&&(isNaN(n.digits)||parseInt(n.digits)>0)&&l!==t)return{caret:n._radixDance&&t===l-1?l+1:l};if(!1===n.__financeInput)if(a){if(n.digitsOptional)return{rewritePosition:o.end};if(!n.digitsOptional){if(o.begin>l&&o.end<=l)return i===n.radixPoint?{insert:{pos:l+1,c:"0",fromIsValid:!0},rewritePosition:l}:{rewritePosition:l+1};if(o.begin<l)return{rewritePosition:o.begin-1}}}else if(!n.showMaskOnHover&&!n.showMaskOnFocus&&!n.digitsOptional&&n.digits>0&&""===this.__valueGet.call(this.el))return{rewritePosition:l};return{rewritePosition:t}},postValidation:function(e,t,i,a,n,r,o){if(!1===a)return a;if(o)return!0;if(null!==n.min||null!==n.max){var s=n.onUnMask(e.slice().reverse().join(""),void 0,l.extend({},n,{unmaskAsNumber:!0}));if(null!==n.min&&s<n.min&&(s.toString().length>n.min.toString().length||s<0))return!1;if(null!==n.max&&s>n.max)return!!n.SetMaxOnOverflow&&{refreshFromBuffer:!0,buffer:c(n.max.toString().replace(".",n.radixPoint).split(""),n.digits,n).reverse()}}return a},onUnMask:function(e,t,i){if(""===t&&!0===i.nullable)return t;var a=e.replace(i.prefix,"");return a=(a=a.replace(i.suffix,"")).replace(new RegExp((0,r.default)(i.groupSeparator),"g"),""),""!==i.placeholder.charAt(0)&&(a=a.replace(new RegExp(i.placeholder.charAt(0),"g"),"0")),i.unmaskAsNumber?(""!==i.radixPoint&&-1!==a.indexOf(i.radixPoint)&&(a=a.replace(r.default.call(this,i.radixPoint),".")),a=(a=a.replace(new RegExp("^"+(0,r.default)(i.negationSymbol.front)),"-")).replace(new RegExp((0,r.default)(i.negationSymbol.back)+"$"),""),Number(a)):a},isComplete:function(e,t){var i=(t.numericInput?e.slice().reverse():e).join("");return i=(i=(i=(i=(i=i.replace(new RegExp("^"+(0,r.default)(t.negationSymbol.front)),"-")).replace(new RegExp((0,r.default)(t.negationSymbol.back)+"$"),"")).replace(t.prefix,"")).replace(t.suffix,"")).replace(new RegExp((0,r.default)(t.groupSeparator)+"([0-9]{3})","g"),"$1"),","===t.radixPoint&&(i=i.replace((0,r.default)(t.radixPoint),".")),isFinite(i)},onBeforeMask:function(e,t){var i=t.radixPoint||",";isFinite(t.digits)&&(t.digits=parseInt(t.digits)),"number"!=typeof e&&"number"!==t.inputType||""===i||(e=e.toString().replace(".",i));var a="-"===e.charAt(0)||e.charAt(0)===t.negationSymbol.front,n=e.split(i),o=n[0].replace(/[^\-0-9]/g,""),s=n.length>1?n[1].replace(/[^0-9]/g,""):"",l=n.length>1;e=o+(""!==s?i+s:s);var u=0;if(""!==i&&(u=t.digitsOptional?t.digits<s.length?t.digits:s.length:t.digits,""!==s||!t.digitsOptional)){var f=Math.pow(10,u||1);e=e.replace((0,r.default)(i),"."),isNaN(parseFloat(e))||(e=(t.roundingFN(parseFloat(e)*f)/f).toFixed(u)),e=e.toString().replace(".",i)}if(0===t.digits&&-1!==e.indexOf(i)&&(e=e.substring(0,e.indexOf(i))),null!==t.min||null!==t.max){var d=e.toString().replace(i,".");null!==t.min&&d<t.min?e=t.min.toString().replace(".",i):null!==t.max&&d>t.max&&(e=t.max.toString().replace(".",i))}return a&&"-"!==e.charAt(0)&&(e="-"+e),c(e.toString().split(""),u,t,l).join("")},onBeforeWrite:function(e,t,i,a){function n(e,t){if(!1!==a.__financeInput||t){var i=e.indexOf(a.radixPoint);-1!==i&&e.splice(i,1)}if(""!==a.groupSeparator)for(;-1!==(i=e.indexOf(a.groupSeparator));)e.splice(i,1);return e}var o,s;if(a.stripLeadingZeroes&&(s=function(e,t){var i=new RegExp("(^"+(""!==t.negationSymbol.front?(0,r.default)(t.negationSymbol.front)+"?":"")+(0,r.default)(t.prefix)+")(.*)("+(0,r.default)(t.suffix)+(""!=t.negationSymbol.back?(0,r.default)(t.negationSymbol.back)+"?":"")+"$)").exec(e.slice().reverse().join("")),a=i?i[2]:"",n=!1;return a&&(a=a.split(t.radixPoint.charAt(0))[0],n=new RegExp("^[0"+t.groupSeparator+"]*").exec(a)),!(!n||!(n[0].length>1||n[0].length>0&&n[0].length<a.length))&&n}(t,a)))for(var u=t.join("").lastIndexOf(s[0].split("").reverse().join(""))-(s[0]==s.input?0:1),f=s[0]==s.input?1:0,d=s[0].length-f;d>0;d--)delete this.maskset.validPositions[u+d],delete t[u+d];if(e)switch(e.type){case"blur":case"checkval":if(null!==a.min){var p=a.onUnMask(t.slice().reverse().join(""),void 0,l.extend({},a,{unmaskAsNumber:!0}));if(null!==a.min&&p<a.min)return{refreshFromBuffer:!0,buffer:c(a.min.toString().replace(".",a.radixPoint).split(""),a.digits,a).reverse()}}if(t[t.length-1]===a.negationSymbol.front){var h=new RegExp("(^"+(""!=a.negationSymbol.front?(0,r.default)(a.negationSymbol.front)+"?":"")+(0,r.default)(a.prefix)+")(.*)("+(0,r.default)(a.suffix)+(""!=a.negationSymbol.back?(0,r.default)(a.negationSymbol.back)+"?":"")+"$)").exec(n(t.slice(),!0).reverse().join(""));0==(h?h[2]:"")&&(o={refreshFromBuffer:!0,buffer:[0]})}else if(""!==a.radixPoint){t.indexOf(a.radixPoint)===a.suffix.length&&(o&&o.buffer?o.buffer.splice(0,1+a.suffix.length):(t.splice(0,1+a.suffix.length),o={refreshFromBuffer:!0,buffer:n(t)}))}if(a.enforceDigitsOnBlur){var v=(o=o||{})&&o.buffer||t.slice().reverse();o.refreshFromBuffer=!0,o.buffer=c(v,a.digits,a,!0).reverse()}}return o},onKeyDown:function(e,t,i,a){var r,o=l(this);if(3!=e.location){var s,u=String.fromCharCode(e.keyCode).toLowerCase();if((s=a.shortcuts&&a.shortcuts[u])&&s.length>1)return this.inputmask.__valueSet.call(this,parseFloat(this.inputmask.unmaskedvalue())*parseInt(s)),o.trigger("setvalue"),!1}if(e.ctrlKey)switch(e.keyCode){case n.default.UP:return this.inputmask.__valueSet.call(this,parseFloat(this.inputmask.unmaskedvalue())+parseInt(a.step)),o.trigger("setvalue"),!1;case n.default.DOWN:return this.inputmask.__valueSet.call(this,parseFloat(this.inputmask.unmaskedvalue())-parseInt(a.step)),o.trigger("setvalue"),!1}if(!e.shiftKey&&(e.keyCode===n.default.DELETE||e.keyCode===n.default.BACKSPACE||e.keyCode===n.default.BACKSPACE_SAFARI)&&i.begin!==t.length){if(t[e.keyCode===n.default.DELETE?i.begin-1:i.end]===a.negationSymbol.front)return r=t.slice().reverse(),""!==a.negationSymbol.front&&r.shift(),""!==a.negationSymbol.back&&r.pop(),o.trigger("setvalue",[r.join(""),i.begin]),!1;if(!0===a._radixDance){var f=t.indexOf(a.radixPoint);if(a.digitsOptional){if(0===f)return(r=t.slice().reverse()).pop(),o.trigger("setvalue",[r.join(""),i.begin>=r.length?r.length:i.begin]),!1}else if(-1!==f&&(i.begin<f||i.end<f||e.keyCode===n.default.DELETE&&(i.begin===f||i.begin-1===f))){var d=void 0;return i.begin===i.end&&(e.keyCode===n.default.BACKSPACE||e.keyCode===n.default.BACKSPACE_SAFARI?i.begin++:e.keyCode===n.default.DELETE&&i.begin-1===f&&(d=l.extend({},i),i.begin--,i.end--)),(r=t.slice().reverse()).splice(r.length-i.begin,i.begin-i.end+1),r=c(r,a.digits,a).join(""),d&&(i=d),o.trigger("setvalue",[r,i.begin>=r.length?f+1:i.begin]),!1}}}}},currency:{prefix:"",groupSeparator:",",alias:"numeric",digits:2,digitsOptional:!1},decimal:{alias:"numeric"},integer:{alias:"numeric",inputmode:"numeric",digits:0},percentage:{alias:"numeric",min:0,max:100,suffix:" %",digits:0,allowMinus:!1},indianns:{alias:"numeric",_mask:function(e){return"("+e.groupSeparator+"99){*|1}("+e.groupSeparator+"999){1|1}"},groupSeparator:",",radixPoint:".",placeholder:"0",digits:2,digitsOptional:!1}})},9380:function(e,t,i){var a;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=((a=i(8741))&&a.__esModule?a:{default:a}).default?window:{};t.default=n},7760:function(e,t,i){Object.defineProperty(t,"__esModule",{value:!0}),t.HandleNativePlaceholder=function(e,t){var i=e?e.inputmask:this;if(l.ie){if(e.inputmask._valueGet()!==t&&(e.placeholder!==t||""===e.placeholder)){var a=o.getBuffer.call(i).slice(),n=e.inputmask._valueGet();if(n!==t){var r=o.getLastValidPosition.call(i);-1===r&&n===o.getBufferTemplate.call(i).join("")?a=[]:-1!==r&&f.call(i,a),p(e,a)}}}else e.placeholder!==t&&(e.placeholder=t,""===e.placeholder&&e.removeAttribute("placeholder"))},t.applyInputValue=c,t.checkVal=d,t.clearOptionalTail=f,t.unmaskedvalue=function(e){var t=e?e.inputmask:this,i=t.opts,a=t.maskset;if(e){if(void 0===e.inputmask)return e.value;e.inputmask&&e.inputmask.refreshValue&&c(e,e.inputmask._valueGet(!0))}for(var n=[],r=a.validPositions,s=0,l=r.length;s<l;s++)r[s]&&r[s].match&&(1!=r[s].match.static||Array.isArray(a.metadata)&&!0!==r[s].generatedInput)&&n.push(r[s].input);var u=0===n.length?"":(t.isRTL?n.reverse():n).join("");if("function"==typeof i.onUnMask){var f=(t.isRTL?o.getBuffer.call(t).slice().reverse():o.getBuffer.call(t)).join("");u=i.onUnMask.call(t,f,u,i)}return u},t.writeBuffer=p;var a,n=(a=i(5581))&&a.__esModule?a:{default:a},r=i(4713),o=i(8711),s=i(7215),l=i(9845),u=i(6030);function c(e,t){var i=e?e.inputmask:this,a=i.opts;e.inputmask.refreshValue=!1,"function"==typeof a.onBeforeMask&&(t=a.onBeforeMask.call(i,t,a)||t),d(e,!0,!1,t=t.toString().split("")),i.undoValue=i._valueGet(!0),(a.clearMaskOnLostFocus||a.clearIncomplete)&&e.inputmask._valueGet()===o.getBufferTemplate.call(i).join("")&&-1===o.getLastValidPosition.call(i)&&e.inputmask._valueSet("")}function f(e){e.length=0;for(var t,i=r.getMaskTemplate.call(this,!0,0,!0,void 0,!0);void 0!==(t=i.shift());)e.push(t);return e}function d(e,t,i,a,n){var l=e?e.inputmask:this,c=l.maskset,f=l.opts,d=l.dependencyLib,h=a.slice(),v="",m=-1,g=void 0,k=f.skipOptionalPartCharacter;f.skipOptionalPartCharacter="",o.resetMaskSet.call(l),c.tests={},m=f.radixPoint?o.determineNewCaretPosition.call(l,{begin:0,end:0},!1,!1===f.__financeInput?"radixFocus":void 0).begin:0,c.p=m,l.caretPos={begin:m};var y=[],b=l.caretPos;if(h.forEach((function(e,t){if(void 0!==e){var a=new d.Event("_checkval");a.keyCode=e.toString().charCodeAt(0),v+=e;var n=o.getLastValidPosition.call(l,void 0,!0);!function(e,t){for(var i=r.getMaskTemplate.call(l,!0,0).slice(e,o.seekNext.call(l,e,!1,!1)).join("").replace(/'/g,""),a=i.indexOf(t);a>0&&" "===i[a-1];)a--;var n=0===a&&!o.isMask.call(l,e)&&(r.getTest.call(l,e).match.nativeDef===t.charAt(0)||!0===r.getTest.call(l,e).match.static&&r.getTest.call(l,e).match.nativeDef==="'"+t.charAt(0)||" "===r.getTest.call(l,e).match.nativeDef&&(r.getTest.call(l,e+1).match.nativeDef===t.charAt(0)||!0===r.getTest.call(l,e+1).match.static&&r.getTest.call(l,e+1).match.nativeDef==="'"+t.charAt(0)));if(!n&&a>0&&!o.isMask.call(l,e,!1,!0)){var s=o.seekNext.call(l,e);l.caretPos.begin<s&&(l.caretPos={begin:s})}return n}(m,v)?(g=u.EventHandlers.keypressEvent.call(l,a,!0,!1,i,l.caretPos.begin))&&(m=l.caretPos.begin+1,v=""):g=u.EventHandlers.keypressEvent.call(l,a,!0,!1,i,n+1),g?(void 0!==g.pos&&c.validPositions[g.pos]&&!0===c.validPositions[g.pos].match.static&&void 0===c.validPositions[g.pos].alternation&&(y.push(g.pos),l.isRTL||(g.forwardPosition=g.pos+1)),p.call(l,void 0,o.getBuffer.call(l),g.forwardPosition,a,!1),l.caretPos={begin:g.forwardPosition,end:g.forwardPosition},b=l.caretPos):void 0===c.validPositions[t]&&h[t]===r.getPlaceholder.call(l,t)&&o.isMask.call(l,t,!0)?l.caretPos.begin++:l.caretPos=b}})),y.length>0){var x,P,E=o.seekNext.call(l,-1,void 0,!1);if(!s.isComplete.call(l,o.getBuffer.call(l))&&y.length<=E||s.isComplete.call(l,o.getBuffer.call(l))&&y.length>0&&y.length!==E&&0===y[0])for(var S=E;void 0!==(x=y.shift());){var w=new d.Event("_checkval");if((P=c.validPositions[x]).generatedInput=!0,w.keyCode=P.input.charCodeAt(0),(g=u.EventHandlers.keypressEvent.call(l,w,!0,!1,i,S))&&void 0!==g.pos&&g.pos!==x&&c.validPositions[g.pos]&&!0===c.validPositions[g.pos].match.static)y.push(g.pos);else if(!g)break;S++}}t&&p.call(l,e,o.getBuffer.call(l),g?g.forwardPosition:l.caretPos.begin,n||new d.Event("checkval"),n&&("input"===n.type&&l.undoValue!==o.getBuffer.call(l).join("")||"paste"===n.type)),f.skipOptionalPartCharacter=k}function p(e,t,i,a,r){var l=e?e.inputmask:this,u=l.opts,c=l.dependencyLib;if(a&&"function"==typeof u.onBeforeWrite){var f=u.onBeforeWrite.call(l,a,t,i,u);if(f){if(f.refreshFromBuffer){var d=f.refreshFromBuffer;s.refreshFromBuffer.call(l,!0===d?d:d.start,d.end,f.buffer||t),t=o.getBuffer.call(l,!0)}void 0!==i&&(i=void 0!==f.caret?f.caret:i)}}if(void 0!==e&&(e.inputmask._valueSet(t.join("")),void 0===i||void 0!==a&&"blur"===a.type||o.caret.call(l,e,i,void 0,void 0,void 0!==a&&"keydown"===a.type&&(a.keyCode===n.default.DELETE||a.keyCode===n.default.BACKSPACE)),!0===r)){var p=c(e),h=e.inputmask._valueGet();e.inputmask.skipInputEvent=!0,p.trigger("input"),setTimeout((function(){h===o.getBufferTemplate.call(l).join("")?p.trigger("cleared"):!0===s.isComplete.call(l,t)&&p.trigger("complete")}),0)}}},2394:function(e,t,i){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,i(7149),i(3194);var a=i(157),n=m(i(3287)),r=m(i(9380)),o=i(2391),s=i(4713),l=i(8711),u=i(7215),c=i(7760),f=i(9716),d=m(i(7392)),p=m(i(3976)),h=m(i(8741));function v(e){return v="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},v(e)}function m(e){return e&&e.__esModule?e:{default:e}}var g=r.default.document,k="_inputmask_opts";function y(e,t,i){if(h.default){if(!(this instanceof y))return new y(e,t,i);this.dependencyLib=n.default,this.el=void 0,this.events={},this.maskset=void 0,!0!==i&&("[object Object]"===Object.prototype.toString.call(e)?t=e:(t=t||{},e&&(t.alias=e)),this.opts=n.default.extend(!0,{},this.defaults,t),this.noMasksCache=t&&void 0!==t.definitions,this.userOptions=t||{},b(this.opts.alias,t,this.opts)),this.refreshValue=!1,this.undoValue=void 0,this.$el=void 0,this.skipKeyPressEvent=!1,this.skipInputEvent=!1,this.validationEvent=!1,this.ignorable=!1,this.maxLength,this.mouseEnter=!1,this.originalPlaceholder=void 0,this.isComposing=!1}}function b(e,t,i){var a=y.prototype.aliases[e];return a?(a.alias&&b(a.alias,void 0,i),n.default.extend(!0,i,a),n.default.extend(!0,i,t),!0):(null===i.mask&&(i.mask=e),!1)}y.prototype={dataAttribute:"data-inputmask",defaults:p.default,definitions:d.default,aliases:{},masksCache:{},get isRTL(){return this.opts.isRTL||this.opts.numericInput},mask:function(e){var t=this;return"string"==typeof e&&(e=g.getElementById(e)||g.querySelectorAll(e)),(e=e.nodeName?[e]:Array.isArray(e)?e:[].slice.call(e)).forEach((function(e,i){var s=n.default.extend(!0,{},t.opts);if(function(e,t,i,a){function o(t,n){var o=""===a?t:a+"-"+t;null!==(n=void 0!==n?n:e.getAttribute(o))&&("string"==typeof n&&(0===t.indexOf("on")?n=r.default[n]:"false"===n?n=!1:"true"===n&&(n=!0)),i[t]=n)}if(!0===t.importDataAttributes){var s,l,u,c,f=e.getAttribute(a);if(f&&""!==f&&(f=f.replace(/'/g,'"'),l=JSON.parse("{"+f+"}")),l)for(c in u=void 0,l)if("alias"===c.toLowerCase()){u=l[c];break}for(s in o("alias",u),i.alias&&b(i.alias,i,t),t){if(l)for(c in u=void 0,l)if(c.toLowerCase()===s.toLowerCase()){u=l[c];break}o(s,u)}}n.default.extend(!0,t,i),("rtl"===e.dir||t.rightAlign)&&(e.style.textAlign="right");("rtl"===e.dir||t.numericInput)&&(e.dir="ltr",e.removeAttribute("dir"),t.isRTL=!0);return Object.keys(i).length}(e,s,n.default.extend(!0,{},t.userOptions),t.dataAttribute)){var l=(0,o.generateMaskSet)(s,t.noMasksCache);void 0!==l&&(void 0!==e.inputmask&&(e.inputmask.opts.autoUnmask=!0,e.inputmask.remove()),e.inputmask=new y(void 0,void 0,!0),e.inputmask.opts=s,e.inputmask.noMasksCache=t.noMasksCache,e.inputmask.userOptions=n.default.extend(!0,{},t.userOptions),e.inputmask.el=e,e.inputmask.$el=(0,n.default)(e),e.inputmask.maskset=l,n.default.data(e,k,t.userOptions),a.mask.call(e.inputmask))}})),e&&e[0]&&e[0].inputmask||this},option:function(e,t){return"string"==typeof e?this.opts[e]:"object"===v(e)?(n.default.extend(this.userOptions,e),this.el&&!0!==t&&this.mask(this.el),this):void 0},unmaskedvalue:function(e){if(this.maskset=this.maskset||(0,o.generateMaskSet)(this.opts,this.noMasksCache),void 0===this.el||void 0!==e){var t=("function"==typeof this.opts.onBeforeMask&&this.opts.onBeforeMask.call(this,e,this.opts)||e).split("");c.checkVal.call(this,void 0,!1,!1,t),"function"==typeof this.opts.onBeforeWrite&&this.opts.onBeforeWrite.call(this,void 0,l.getBuffer.call(this),0,this.opts)}return c.unmaskedvalue.call(this,this.el)},remove:function(){if(this.el){n.default.data(this.el,k,null);var e=this.opts.autoUnmask?(0,c.unmaskedvalue)(this.el):this._valueGet(this.opts.autoUnmask);e!==l.getBufferTemplate.call(this).join("")?this._valueSet(e,this.opts.autoUnmask):this._valueSet(""),f.EventRuler.off(this.el),Object.getOwnPropertyDescriptor&&Object.getPrototypeOf?Object.getOwnPropertyDescriptor(Object.getPrototypeOf(this.el),"value")&&this.__valueGet&&Object.defineProperty(this.el,"value",{get:this.__valueGet,set:this.__valueSet,configurable:!0}):g.__lookupGetter__&&this.el.__lookupGetter__("value")&&this.__valueGet&&(this.el.__defineGetter__("value",this.__valueGet),this.el.__defineSetter__("value",this.__valueSet)),this.el.inputmask=void 0}return this.el},getemptymask:function(){return this.maskset=this.maskset||(0,o.generateMaskSet)(this.opts,this.noMasksCache),(this.isRTL?l.getBufferTemplate.call(this).reverse():l.getBufferTemplate.call(this)).join("")},hasMaskedValue:function(){return!this.opts.autoUnmask},isComplete:function(){return this.maskset=this.maskset||(0,o.generateMaskSet)(this.opts,this.noMasksCache),u.isComplete.call(this,l.getBuffer.call(this))},getmetadata:function(){if(this.maskset=this.maskset||(0,o.generateMaskSet)(this.opts,this.noMasksCache),Array.isArray(this.maskset.metadata)){var e=s.getMaskTemplate.call(this,!0,0,!1).join("");return this.maskset.metadata.forEach((function(t){return t.mask!==e||(e=t,!1)})),e}return this.maskset.metadata},isValid:function(e){if(this.maskset=this.maskset||(0,o.generateMaskSet)(this.opts,this.noMasksCache),e){var t=("function"==typeof this.opts.onBeforeMask&&this.opts.onBeforeMask.call(this,e,this.opts)||e).split("");c.checkVal.call(this,void 0,!0,!1,t)}else e=this.isRTL?l.getBuffer.call(this).slice().reverse().join(""):l.getBuffer.call(this).join("");for(var i=l.getBuffer.call(this),a=l.determineLastRequiredPosition.call(this),n=i.length-1;n>a&&!l.isMask.call(this,n);n--);return i.splice(a,n+1-a),u.isComplete.call(this,i)&&e===(this.isRTL?l.getBuffer.call(this).slice().reverse().join(""):l.getBuffer.call(this).join(""))},format:function(e,t){this.maskset=this.maskset||(0,o.generateMaskSet)(this.opts,this.noMasksCache);var i=("function"==typeof this.opts.onBeforeMask&&this.opts.onBeforeMask.call(this,e,this.opts)||e).split("");c.checkVal.call(this,void 0,!0,!1,i);var a=this.isRTL?l.getBuffer.call(this).slice().reverse().join(""):l.getBuffer.call(this).join("");return t?{value:a,metadata:this.getmetadata()}:a},setValue:function(e){this.el&&(0,n.default)(this.el).trigger("setvalue",[e])},analyseMask:o.analyseMask},y.extendDefaults=function(e){n.default.extend(!0,y.prototype.defaults,e)},y.extendDefinitions=function(e){n.default.extend(!0,y.prototype.definitions,e)},y.extendAliases=function(e){n.default.extend(!0,y.prototype.aliases,e)},y.format=function(e,t,i){return y(t).format(e,i)},y.unmask=function(e,t){return y(t).unmaskedvalue(e)},y.isValid=function(e,t){return y(t).isValid(e)},y.remove=function(e){"string"==typeof e&&(e=g.getElementById(e)||g.querySelectorAll(e)),(e=e.nodeName?[e]:e).forEach((function(e){e.inputmask&&e.inputmask.remove()}))},y.setValue=function(e,t){"string"==typeof e&&(e=g.getElementById(e)||g.querySelectorAll(e)),(e=e.nodeName?[e]:e).forEach((function(e){e.inputmask?e.inputmask.setValue(t):(0,n.default)(e).trigger("setvalue",[t])}))},y.dependencyLib=n.default,r.default.Inputmask=y;var x=y;t.default=x},5296:function(e,t,i){function a(e){return a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},a(e)}var n=h(i(9380)),r=h(i(2394)),o=h(i(8741));function s(e,t){for(var i=0;i<t.length;i++){var a=t[i];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function l(e,t){if(t&&("object"===a(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function u(e){var t="function"==typeof Map?new Map:void 0;return u=function(e){if(null===e||(i=e,-1===Function.toString.call(i).indexOf("[native code]")))return e;var i;if("function"!=typeof e)throw new TypeError("Super expression must either be null or a function");if(void 0!==t){if(t.has(e))return t.get(e);t.set(e,a)}function a(){return c(e,arguments,p(this).constructor)}return a.prototype=Object.create(e.prototype,{constructor:{value:a,enumerable:!1,writable:!0,configurable:!0}}),d(a,e)},u(e)}function c(e,t,i){return c=f()?Reflect.construct:function(e,t,i){var a=[null];a.push.apply(a,t);var n=new(Function.bind.apply(e,a));return i&&d(n,i.prototype),n},c.apply(null,arguments)}function f(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}function d(e,t){return d=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},d(e,t)}function p(e){return p=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},p(e)}function h(e){return e&&e.__esModule?e:{default:e}}var v=n.default.document;if(o.default&&v&&v.head&&v.head.attachShadow&&n.default.customElements&&void 0===n.default.customElements.get("input-mask")){var m=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&d(e,t)}(c,e);var t,i,a,n,o,u=(t=c,i=f(),function(){var e,a=p(t);if(i){var n=p(this).constructor;e=Reflect.construct(a,arguments,n)}else e=a.apply(this,arguments);return l(this,e)});function c(){var e;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,c);var t=(e=u.call(this)).getAttributeNames(),i=e.attachShadow({mode:"closed"}),a=v.createElement("input");for(var n in a.type="text",i.appendChild(a),t)Object.prototype.hasOwnProperty.call(t,n)&&a.setAttribute(t[n],e.getAttribute(t[n]));var o=new r.default;return o.dataAttribute="",o.mask(a),a.inputmask.shadowRoot=i,e}return a=c,n&&s(a.prototype,n),o&&s(a,o),Object.defineProperty(a,"prototype",{writable:!1}),a}(u(HTMLElement));n.default.customElements.define("input-mask",m)}},443:function(e,t,i){var a=o(i(7957)),n=o(i(2394));function r(e){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r(e)}function o(e){return e&&e.__esModule?e:{default:e}}void 0===a.default.fn.inputmask&&(a.default.fn.inputmask=function(e,t){var i,o=this[0];if(void 0===t&&(t={}),"string"==typeof e)switch(e){case"unmaskedvalue":return o&&o.inputmask?o.inputmask.unmaskedvalue():(0,a.default)(o).val();case"remove":return this.each((function(){this.inputmask&&this.inputmask.remove()}));case"getemptymask":return o&&o.inputmask?o.inputmask.getemptymask():"";case"hasMaskedValue":return!(!o||!o.inputmask)&&o.inputmask.hasMaskedValue();case"isComplete":return!o||!o.inputmask||o.inputmask.isComplete();case"getmetadata":return o&&o.inputmask?o.inputmask.getmetadata():void 0;case"setvalue":n.default.setValue(o,t);break;case"option":if("string"!=typeof t)return this.each((function(){if(void 0!==this.inputmask)return this.inputmask.option(t)}));if(o&&void 0!==o.inputmask)return o.inputmask.option(t);break;default:return t.alias=e,i=new n.default(t),this.each((function(){i.mask(this)}))}else{if(Array.isArray(e))return t.alias=e,i=new n.default(t),this.each((function(){i.mask(this)}));if("object"==r(e))return i=new n.default(e),void 0===e.mask&&void 0===e.alias?this.each((function(){if(void 0!==this.inputmask)return this.inputmask.option(e);i.mask(this)})):this.each((function(){i.mask(this)}));if(void 0===e)return this.each((function(){(i=new n.default(t)).mask(this)}))}})},2391:function(e,t,i){Object.defineProperty(t,"__esModule",{value:!0}),t.analyseMask=function(e,t,i){var a,o,s,l,u,c,f=/(?:[?*+]|\{[0-9+*]+(?:,[0-9+*]*)?(?:\|[0-9+*]*)?\})|[^.?*+^${[]()|\\]+|./g,d=/\[\^?]?(?:[^\\\]]+|\\[\S\s]?)*]?|\\(?:0(?:[0-3][0-7]{0,2}|[4-7][0-7]?)?|[1-9][0-9]*|x[0-9A-Fa-f]{2}|u[0-9A-Fa-f]{4}|c[A-Za-z]|[\S\s]?)|\((?:\?[:=!]?)?|(?:[?*+]|\{[0-9]+(?:,[0-9]*)?\})\??|[^.?*+^${[()|\\]+|./g,p=!1,h=new n.default,v=[],m=[],g=!1;function k(e,a,n){n=void 0!==n?n:e.matches.length;var o=e.matches[n-1];if(t)0===a.indexOf("[")||p&&/\\d|\\s|\\w/i.test(a)||"."===a?e.matches.splice(n++,0,{fn:new RegExp(a,i.casing?"i":""),static:!1,optionality:!1,newBlockMarker:void 0===o?"master":o.def!==a,casing:null,def:a,placeholder:void 0,nativeDef:a}):(p&&(a=a[a.length-1]),a.split("").forEach((function(t,a){o=e.matches[n-1],e.matches.splice(n++,0,{fn:/[a-z]/i.test(i.staticDefinitionSymbol||t)?new RegExp("["+(i.staticDefinitionSymbol||t)+"]",i.casing?"i":""):null,static:!0,optionality:!1,newBlockMarker:void 0===o?"master":o.def!==t&&!0!==o.static,casing:null,def:i.staticDefinitionSymbol||t,placeholder:void 0!==i.staticDefinitionSymbol?t:void 0,nativeDef:(p?"'":"")+t})}))),p=!1;else{var s=i.definitions&&i.definitions[a]||i.usePrototypeDefinitions&&r.default.prototype.definitions[a];s&&!p?e.matches.splice(n++,0,{fn:s.validator?"string"==typeof s.validator?new RegExp(s.validator,i.casing?"i":""):new function(){this.test=s.validator}:new RegExp("."),static:s.static||!1,optionality:s.optional||!1,defOptionality:s.optional||!1,newBlockMarker:void 0===o||s.optional?"master":o.def!==(s.definitionSymbol||a),casing:s.casing,def:s.definitionSymbol||a,placeholder:s.placeholder,nativeDef:a,generated:s.generated}):(e.matches.splice(n++,0,{fn:/[a-z]/i.test(i.staticDefinitionSymbol||a)?new RegExp("["+(i.staticDefinitionSymbol||a)+"]",i.casing?"i":""):null,static:!0,optionality:!1,newBlockMarker:void 0===o?"master":o.def!==a&&!0!==o.static,casing:null,def:i.staticDefinitionSymbol||a,placeholder:void 0!==i.staticDefinitionSymbol?a:void 0,nativeDef:(p?"'":"")+a}),p=!1)}}function y(){if(v.length>0){if(k(l=v[v.length-1],o),l.isAlternator){u=v.pop();for(var e=0;e<u.matches.length;e++)u.matches[e].isGroup&&(u.matches[e].isGroup=!1);v.length>0?(l=v[v.length-1]).matches.push(u):h.matches.push(u)}}else k(h,o)}function b(e){var t=new n.default(!0);return t.openGroup=!1,t.matches=e,t}function x(){if((s=v.pop()).openGroup=!1,void 0!==s)if(v.length>0){if((l=v[v.length-1]).matches.push(s),l.isAlternator){for(var e=(u=v.pop()).matches[0].matches?u.matches[0].matches.length:1,t=0;t<u.matches.length;t++)u.matches[t].isGroup=!1,u.matches[t].alternatorGroup=!1,null===i.keepStatic&&e<(u.matches[t].matches?u.matches[t].matches.length:1)&&(i.keepStatic=!0),e=u.matches[t].matches?u.matches[t].matches.length:1;v.length>0?(l=v[v.length-1]).matches.push(u):h.matches.push(u)}}else h.matches.push(s);else y()}function P(e){var t=e.pop();return t.isQuantifier&&(t=b([e.pop(),t])),t}t&&(i.optionalmarker[0]=void 0,i.optionalmarker[1]=void 0);for(;a=t?d.exec(e):f.exec(e);){if(o=a[0],t){switch(o.charAt(0)){case"?":o="{0,1}";break;case"+":case"*":o="{"+o+"}";break;case"|":if(0===v.length){var E=b(h.matches);E.openGroup=!0,v.push(E),h.matches=[],g=!0}}if("\\d"===o)o="[0-9]"}if(p)y();else switch(o.charAt(0)){case"$":case"^":t||y();break;case i.escapeChar:p=!0,t&&y();break;case i.optionalmarker[1]:case i.groupmarker[1]:x();break;case i.optionalmarker[0]:v.push(new n.default(!1,!0));break;case i.groupmarker[0]:v.push(new n.default(!0));break;case i.quantifiermarker[0]:var S=new n.default(!1,!1,!0),w=(o=o.replace(/[{}?]/g,"")).split("|"),_=w[0].split(","),M=isNaN(_[0])?_[0]:parseInt(_[0]),O=1===_.length?M:isNaN(_[1])?_[1]:parseInt(_[1]),T=isNaN(w[1])?w[1]:parseInt(w[1]);"*"!==M&&"+"!==M||(M="*"===O?0:1),S.quantifier={min:M,max:O,jit:T};var A=v.length>0?v[v.length-1].matches:h.matches;if((a=A.pop()).isAlternator){A.push(a),A=a.matches;var C=new n.default(!0),D=A.pop();A.push(C),A=C.matches,a=D}a.isGroup||(a=b([a])),A.push(a),A.push(S);break;case i.alternatormarker:if(v.length>0){var j=(l=v[v.length-1]).matches[l.matches.length-1];c=l.openGroup&&(void 0===j.matches||!1===j.isGroup&&!1===j.isAlternator)?v.pop():P(l.matches)}else c=P(h.matches);if(c.isAlternator)v.push(c);else if(c.alternatorGroup?(u=v.pop(),c.alternatorGroup=!1):u=new n.default(!1,!1,!1,!0),u.matches.push(c),v.push(u),c.openGroup){c.openGroup=!1;var B=new n.default(!0);B.alternatorGroup=!0,v.push(B)}break;default:y()}}g&&x();for(;v.length>0;)s=v.pop(),h.matches.push(s);h.matches.length>0&&(!function e(a){a&&a.matches&&a.matches.forEach((function(n,r){var o=a.matches[r+1];(void 0===o||void 0===o.matches||!1===o.isQuantifier)&&n&&n.isGroup&&(n.isGroup=!1,t||(k(n,i.groupmarker[0],0),!0!==n.openGroup&&k(n,i.groupmarker[1]))),e(n)}))}(h),m.push(h));(i.numericInput||i.isRTL)&&function e(t){for(var a in t.matches=t.matches.reverse(),t.matches)if(Object.prototype.hasOwnProperty.call(t.matches,a)){var n=parseInt(a);if(t.matches[a].isQuantifier&&t.matches[n+1]&&t.matches[n+1].isGroup){var r=t.matches[a];t.matches.splice(a,1),t.matches.splice(n+1,0,r)}void 0!==t.matches[a].matches?t.matches[a]=e(t.matches[a]):t.matches[a]=((o=t.matches[a])===i.optionalmarker[0]?o=i.optionalmarker[1]:o===i.optionalmarker[1]?o=i.optionalmarker[0]:o===i.groupmarker[0]?o=i.groupmarker[1]:o===i.groupmarker[1]&&(o=i.groupmarker[0]),o)}var o;return t}(m[0]);return m},t.generateMaskSet=function(e,t){var i;function n(e,i,n){var s,l,u=!1;return null!==e&&""!==e||((u=null!==n.regex)?e=(e=n.regex).replace(/^(\^)(.*)(\$)$/,"$2"):(u=!0,e=".*")),1===e.length&&!1===n.greedy&&0!==n.repeat&&(n.placeholder=""),e=function(e,t){if(t.repeat>0||"*"===t.repeat||"+"===t.repeat){var i="*"===t.repeat?0:"+"===t.repeat?1:t.repeat;e=t.groupmarker[0]+e+t.groupmarker[1]+t.quantifiermarker[0]+i+","+t.repeat+t.quantifiermarker[1]}if(!0===t.keepStatic){var a=e.match(new RegExp("(?<p1>.)\\[(?<p2>[^\\]]*)\\]","g"));a&&a.forEach((function(t,i){var a=t.split("["),n=a[0],r=a[1].replace("]","");e=e.replace(new RegExp("".concat((0,o.default)(n),"\\[").concat((0,o.default)(r),"\\]")),n.charAt(0)===r.charAt(0)?"(".concat(n,"|").concat(n).concat(r,")"):"".concat(n,"[").concat(r,"]"))}))}return e}(e,n),l=u?"regex_"+n.regex:n.numericInput?e.split("").reverse().join(""):e,null!==n.keepStatic&&(l="ks_"+n.keepStatic+l),void 0===r.default.prototype.masksCache[l]||!0===t?(s={mask:e,maskToken:r.default.prototype.analyseMask(e,u,n),validPositions:[],_buffer:void 0,buffer:void 0,tests:{},excludes:{},metadata:i,maskLength:void 0,jitOffset:{}},!0!==t&&(r.default.prototype.masksCache[l]=s,s=a.default.extend(!0,{},r.default.prototype.masksCache[l]))):s=a.default.extend(!0,{},r.default.prototype.masksCache[l]),s}"function"==typeof e.mask&&(e.mask=e.mask(e));if(Array.isArray(e.mask)){if(e.mask.length>1){null===e.keepStatic&&(e.keepStatic=!0);var s=e.groupmarker[0];return(e.isRTL?e.mask.reverse():e.mask).forEach((function(t){s.length>1&&(s+=e.alternatormarker),void 0!==t.mask&&"function"!=typeof t.mask?s+=t.mask:s+=t})),n(s+=e.groupmarker[1],e.mask,e)}e.mask=e.mask.pop()}i=e.mask&&void 0!==e.mask.mask&&"function"!=typeof e.mask.mask?n(e.mask.mask,e.mask,e):n(e.mask,e.mask,e);null===e.keepStatic&&(e.keepStatic=!1);return i};var a=s(i(3287)),n=s(i(9695)),r=s(i(2394)),o=s(i(7184));function s(e){return e&&e.__esModule?e:{default:e}}},157:function(e,t,i){Object.defineProperty(t,"__esModule",{value:!0}),t.mask=function(){var e=this,t=this.opts,i=this.el,a=this.dependencyLib;s.EventRuler.off(i);var f=function(t,i){"textarea"!==t.tagName.toLowerCase()&&i.ignorables.push(n.default.ENTER);var l=t.getAttribute("type"),u="input"===t.tagName.toLowerCase()&&i.supportsInputType.includes(l)||t.isContentEditable||"textarea"===t.tagName.toLowerCase();if(!u)if("input"===t.tagName.toLowerCase()){var c=document.createElement("input");c.setAttribute("type",l),u="text"===c.type,c=null}else u="partial";return!1!==u?function(t){var n,l;function u(){return this.inputmask?this.inputmask.opts.autoUnmask?this.inputmask.unmaskedvalue():-1!==r.getLastValidPosition.call(e)||!0!==i.nullable?(this.inputmask.shadowRoot||this.ownerDocument).activeElement===this&&i.clearMaskOnLostFocus?(e.isRTL?o.clearOptionalTail.call(e,r.getBuffer.call(e).slice()).reverse():o.clearOptionalTail.call(e,r.getBuffer.call(e).slice())).join(""):n.call(this):"":n.call(this)}function c(e){l.call(this,e),this.inputmask&&(0,o.applyInputValue)(this,e)}if(!t.inputmask.__valueGet){if(!0!==i.noValuePatching){if(Object.getOwnPropertyDescriptor){var f=Object.getPrototypeOf?Object.getOwnPropertyDescriptor(Object.getPrototypeOf(t),"value"):void 0;f&&f.get&&f.set?(n=f.get,l=f.set,Object.defineProperty(t,"value",{get:u,set:c,configurable:!0})):"input"!==t.tagName.toLowerCase()&&(n=function(){return this.textContent},l=function(e){this.textContent=e},Object.defineProperty(t,"value",{get:u,set:c,configurable:!0}))}else document.__lookupGetter__&&t.__lookupGetter__("value")&&(n=t.__lookupGetter__("value"),l=t.__lookupSetter__("value"),t.__defineGetter__("value",u),t.__defineSetter__("value",c));t.inputmask.__valueGet=n,t.inputmask.__valueSet=l}t.inputmask._valueGet=function(t){return e.isRTL&&!0!==t?n.call(this.el).split("").reverse().join(""):n.call(this.el)},t.inputmask._valueSet=function(t,i){l.call(this.el,null==t?"":!0!==i&&e.isRTL?t.split("").reverse().join(""):t)},void 0===n&&(n=function(){return this.value},l=function(e){this.value=e},function(t){if(a.valHooks&&(void 0===a.valHooks[t]||!0!==a.valHooks[t].inputmaskpatch)){var n=a.valHooks[t]&&a.valHooks[t].get?a.valHooks[t].get:function(e){return e.value},s=a.valHooks[t]&&a.valHooks[t].set?a.valHooks[t].set:function(e,t){return e.value=t,e};a.valHooks[t]={get:function(t){if(t.inputmask){if(t.inputmask.opts.autoUnmask)return t.inputmask.unmaskedvalue();var a=n(t);return-1!==r.getLastValidPosition.call(e,void 0,void 0,t.inputmask.maskset.validPositions)||!0!==i.nullable?a:""}return n(t)},set:function(e,t){var i=s(e,t);return e.inputmask&&(0,o.applyInputValue)(e,t),i},inputmaskpatch:!0}}}(t.type),function(e){s.EventRuler.on(e,"mouseenter",(function(){var e=this,t=e.inputmask._valueGet(!0);t!=(e.inputmask.isRTL?r.getBuffer.call(e.inputmask).slice().reverse():r.getBuffer.call(e.inputmask)).join("")&&(0,o.applyInputValue)(e,t)}))}(t))}}(t):t.inputmask=void 0,u}(i,t);if(!1!==f){e.originalPlaceholder=i.placeholder,e.maxLength=void 0!==i?i.maxLength:void 0,-1===e.maxLength&&(e.maxLength=void 0),"inputMode"in i&&null===i.getAttribute("inputmode")&&(i.inputMode=t.inputmode,i.setAttribute("inputmode",t.inputmode)),!0===f&&(t.showMaskOnFocus=t.showMaskOnFocus&&-1===["cc-number","cc-exp"].indexOf(i.autocomplete),l.iphone&&(t.insertModeVisual=!1,i.setAttribute("autocorrect","off")),s.EventRuler.on(i,"submit",c.EventHandlers.submitEvent),s.EventRuler.on(i,"reset",c.EventHandlers.resetEvent),s.EventRuler.on(i,"blur",c.EventHandlers.blurEvent),s.EventRuler.on(i,"focus",c.EventHandlers.focusEvent),s.EventRuler.on(i,"invalid",c.EventHandlers.invalidEvent),s.EventRuler.on(i,"click",c.EventHandlers.clickEvent),s.EventRuler.on(i,"mouseleave",c.EventHandlers.mouseleaveEvent),s.EventRuler.on(i,"mouseenter",c.EventHandlers.mouseenterEvent),s.EventRuler.on(i,"paste",c.EventHandlers.pasteEvent),s.EventRuler.on(i,"cut",c.EventHandlers.cutEvent),s.EventRuler.on(i,"complete",t.oncomplete),s.EventRuler.on(i,"incomplete",t.onincomplete),s.EventRuler.on(i,"cleared",t.oncleared),!0!==t.inputEventOnly&&(s.EventRuler.on(i,"keydown",c.EventHandlers.keydownEvent),s.EventRuler.on(i,"keypress",c.EventHandlers.keypressEvent),s.EventRuler.on(i,"keyup",c.EventHandlers.keyupEvent)),(l.mobile||t.inputEventOnly)&&i.removeAttribute("maxLength"),s.EventRuler.on(i,"input",c.EventHandlers.inputFallBackEvent),s.EventRuler.on(i,"compositionend",c.EventHandlers.compositionendEvent)),s.EventRuler.on(i,"setvalue",c.EventHandlers.setValueEvent),r.getBufferTemplate.call(e).join(""),e.undoValue=e._valueGet(!0);var d=(i.inputmask.shadowRoot||i.ownerDocument).activeElement;if(""!==i.inputmask._valueGet(!0)||!1===t.clearMaskOnLostFocus||d===i){(0,o.applyInputValue)(i,i.inputmask._valueGet(!0),t);var p=r.getBuffer.call(e).slice();!1===u.isComplete.call(e,p)&&t.clearIncomplete&&r.resetMaskSet.call(e),t.clearMaskOnLostFocus&&d!==i&&(-1===r.getLastValidPosition.call(e)?p=[]:o.clearOptionalTail.call(e,p)),(!1===t.clearMaskOnLostFocus||t.showMaskOnFocus&&d===i||""!==i.inputmask._valueGet(!0))&&(0,o.writeBuffer)(i,p),d===i&&r.caret.call(e,i,r.seekNext.call(e,r.getLastValidPosition.call(e)))}}};var a,n=(a=i(5581))&&a.__esModule?a:{default:a},r=i(8711),o=i(7760),s=i(9716),l=i(9845),u=i(7215),c=i(6030)},9695:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t,i,a){this.matches=[],this.openGroup=e||!1,this.alternatorGroup=!1,this.isGroup=e||!1,this.isOptional=t||!1,this.isQuantifier=i||!1,this.isAlternator=a||!1,this.quantifier={min:1,max:1}}},3194:function(){Array.prototype.includes||Object.defineProperty(Array.prototype,"includes",{value:function(e,t){if(null==this)throw new TypeError('"this" is null or not defined');var i=Object(this),a=i.length>>>0;if(0===a)return!1;for(var n=0|t,r=Math.max(n>=0?n:a-Math.abs(n),0);r<a;){if(i[r]===e)return!0;r++}return!1}})},7149:function(){function e(t){return e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e(t)}"function"!=typeof Object.getPrototypeOf&&(Object.getPrototypeOf="object"===e("test".__proto__)?function(e){return e.__proto__}:function(e){return e.constructor.prototype})},8711:function(e,t,i){Object.defineProperty(t,"__esModule",{value:!0}),t.caret=function(e,t,i,a,n){var r,o=this,s=this.opts;if(void 0===t)return"selectionStart"in e&&"selectionEnd"in e?(t=e.selectionStart,i=e.selectionEnd):window.getSelection?(r=window.getSelection().getRangeAt(0)).commonAncestorContainer.parentNode!==e&&r.commonAncestorContainer!==e||(t=r.startOffset,i=r.endOffset):document.selection&&document.selection.createRange&&(r=document.selection.createRange(),t=0-r.duplicate().moveStart("character",-e.inputmask._valueGet().length),i=t+r.text.length),{begin:a?t:u.call(o,t),end:a?i:u.call(o,i)};if(Array.isArray(t)&&(i=o.isRTL?t[0]:t[1],t=o.isRTL?t[1]:t[0]),void 0!==t.begin&&(i=o.isRTL?t.begin:t.end,t=o.isRTL?t.end:t.begin),"number"==typeof t){t=a?t:u.call(o,t),i="number"==typeof(i=a?i:u.call(o,i))?i:t;var l=parseInt(((e.ownerDocument.defaultView||window).getComputedStyle?(e.ownerDocument.defaultView||window).getComputedStyle(e,null):e.currentStyle).fontSize)*i;if(e.scrollLeft=l>e.scrollWidth?l:0,e.inputmask.caretPos={begin:t,end:i},s.insertModeVisual&&!1===s.insertMode&&t===i&&(n||i++),e===(e.inputmask.shadowRoot||e.ownerDocument).activeElement)if("setSelectionRange"in e)e.setSelectionRange(t,i);else if(window.getSelection){if(r=document.createRange(),void 0===e.firstChild||null===e.firstChild){var c=document.createTextNode("");e.appendChild(c)}r.setStart(e.firstChild,t<e.inputmask._valueGet().length?t:e.inputmask._valueGet().length),r.setEnd(e.firstChild,i<e.inputmask._valueGet().length?i:e.inputmask._valueGet().length),r.collapse(!0);var f=window.getSelection();f.removeAllRanges(),f.addRange(r)}else e.createTextRange&&((r=e.createTextRange()).collapse(!0),r.moveEnd("character",i),r.moveStart("character",t),r.select())}},t.determineLastRequiredPosition=function(e){var t,i,r=this,s=this.maskset,l=this.dependencyLib,u=a.getMaskTemplate.call(r,!0,o.call(r),!0,!0),c=u.length,f=o.call(r),d={},p=s.validPositions[f],h=void 0!==p?p.locator.slice():void 0;for(t=f+1;t<u.length;t++)i=a.getTestTemplate.call(r,t,h,t-1),h=i.locator.slice(),d[t]=l.extend(!0,{},i);var v=p&&void 0!==p.alternation?p.locator[p.alternation]:void 0;for(t=c-1;t>f&&(((i=d[t]).match.optionality||i.match.optionalQuantifier&&i.match.newBlockMarker||v&&(v!==d[t].locator[p.alternation]&&1!=i.match.static||!0===i.match.static&&i.locator[p.alternation]&&n.checkAlternationMatch.call(r,i.locator[p.alternation].toString().split(","),v.toString().split(","))&&""!==a.getTests.call(r,t)[0].def))&&u[t]===a.getPlaceholder.call(r,t,i.match));t--)c--;return e?{l:c,def:d[c]?d[c].match:void 0}:c},t.determineNewCaretPosition=function(e,t,i){var n=this,u=this.maskset,c=this.opts;t&&(n.isRTL?e.end=e.begin:e.begin=e.end);if(e.begin===e.end){switch(i=i||c.positionCaretOnClick){case"none":break;case"select":e={begin:0,end:r.call(n).length};break;case"ignore":e.end=e.begin=l.call(n,o.call(n));break;case"radixFocus":if(function(e){if(""!==c.radixPoint&&0!==c.digits){var t=u.validPositions;if(void 0===t[e]||t[e].input===a.getPlaceholder.call(n,e)){if(e<l.call(n,-1))return!0;var i=r.call(n).indexOf(c.radixPoint);if(-1!==i){for(var o=0,s=t.length;o<s;o++)if(t[o]&&i<o&&t[o].input!==a.getPlaceholder.call(n,o))return!1;return!0}}}return!1}(e.begin)){var f=r.call(n).join("").indexOf(c.radixPoint);e.end=e.begin=c.numericInput?l.call(n,f):f;break}default:var d=e.begin,p=o.call(n,d,!0),h=l.call(n,-1!==p||s.call(n,0)?p:-1);if(d<=h)e.end=e.begin=s.call(n,d,!1,!0)?d:l.call(n,d);else{var v=u.validPositions[p],m=a.getTestTemplate.call(n,h,v?v.match.locator:void 0,v),g=a.getPlaceholder.call(n,h,m.match);if(""!==g&&r.call(n)[h]!==g&&!0!==m.match.optionalQuantifier&&!0!==m.match.newBlockMarker||!s.call(n,h,c.keepStatic,!0)&&m.match.def===g){var k=l.call(n,h);(d>=k||d===h)&&(h=k)}e.end=e.begin=h}}return e}},t.getBuffer=r,t.getBufferTemplate=function(){var e=this.maskset;void 0===e._buffer&&(e._buffer=a.getMaskTemplate.call(this,!1,1),void 0===e.buffer&&(e.buffer=e._buffer.slice()));return e._buffer},t.getLastValidPosition=o,t.isMask=s,t.resetMaskSet=function(e){var t=this.maskset;t.buffer=void 0,!0!==e&&(t.validPositions=[],t.p=0)},t.seekNext=l,t.seekPrevious=function(e,t){var i=this,n=e-1;if(e<=0)return 0;for(;n>0&&(!0===t&&(!0!==a.getTest.call(i,n).match.newBlockMarker||!s.call(i,n,void 0,!0))||!0!==t&&!s.call(i,n,void 0,!0));)n--;return n},t.translatePosition=u;var a=i(4713),n=i(7215);function r(e){var t=this.maskset;return void 0!==t.buffer&&!0!==e||(t.buffer=a.getMaskTemplate.call(this,!0,o.call(this),!0),void 0===t._buffer&&(t._buffer=t.buffer.slice())),t.buffer}function o(e,t,i){var a=this.maskset,n=-1,r=-1,o=i||a.validPositions;void 0===e&&(e=-1);for(var s=0,l=o.length;s<l;s++)o[s]&&(t||!0!==o[s].generatedInput)&&(s<=e&&(n=s),s>=e&&(r=s));return-1===n||n==e?r:-1==r||e-n<r-e?n:r}function s(e,t,i){var n=this,r=this.maskset,o=a.getTestTemplate.call(n,e).match;if(""===o.def&&(o=a.getTest.call(n,e).match),!0!==o.static)return o.fn;if(!0===i&&void 0!==r.validPositions[e]&&!0!==r.validPositions[e].generatedInput)return!0;if(!0!==t&&e>-1){if(i){var s=a.getTests.call(n,e);return s.length>1+(""===s[s.length-1].match.def?1:0)}var l=a.determineTestTemplate.call(n,e,a.getTests.call(n,e)),u=a.getPlaceholder.call(n,e,l.match);return l.match.def!==u}return!1}function l(e,t,i){var n=this;void 0===i&&(i=!0);for(var r=e+1;""!==a.getTest.call(n,r).match.def&&(!0===t&&(!0!==a.getTest.call(n,r).match.newBlockMarker||!s.call(n,r,void 0,!0))||!0!==t&&!s.call(n,r,void 0,i));)r++;return r}function u(e){var t=this.opts,i=this.el;return!this.isRTL||"number"!=typeof e||t.greedy&&""===t.placeholder||!i||(e=this._valueGet().length-e)<0&&(e=0),e}},4713:function(e,t,i){Object.defineProperty(t,"__esModule",{value:!0}),t.determineTestTemplate=u,t.getDecisionTaker=o,t.getMaskTemplate=function(e,t,i,a,n){var r=this,o=this.opts,c=this.maskset,f=o.greedy;n&&o.greedy&&(o.greedy=!1,r.maskset.tests={});t=t||0;var p,h,v,m,g=[],k=0;do{if(!0===e&&c.validPositions[k])v=n&&c.validPositions[k].match.optionality&&void 0===c.validPositions[k+1]&&(!0===c.validPositions[k].generatedInput||c.validPositions[k].input==o.skipOptionalPartCharacter&&k>0)?u.call(r,k,d.call(r,k,p,k-1)):c.validPositions[k],h=v.match,p=v.locator.slice(),g.push(!0===i?v.input:!1===i?h.nativeDef:s.call(r,k,h));else{v=l.call(r,k,p,k-1),h=v.match,p=v.locator.slice();var y=!0!==a&&(!1!==o.jitMasking?o.jitMasking:h.jit);(m=(m&&h.static&&h.def!==o.groupSeparator&&null===h.fn||c.validPositions[k-1]&&h.static&&h.def!==o.groupSeparator&&null===h.fn)&&c.tests[k]&&1===c.tests[k].length)||!1===y||void 0===y||"number"==typeof y&&isFinite(y)&&y>k?g.push(!1===i?h.nativeDef:s.call(r,g.length,h)):m=!1}k++}while(!0!==h.static||""!==h.def||t>k);""===g[g.length-1]&&g.pop();!1===i&&void 0!==c.maskLength||(c.maskLength=k-1);return o.greedy=f,g},t.getPlaceholder=s,t.getTest=c,t.getTestTemplate=l,t.getTests=d,t.isSubsetOf=f;var a,n=(a=i(2394))&&a.__esModule?a:{default:a};function r(e,t){var i=(null!=e.alternation?e.mloc[o(e)]:e.locator).join("");if(""!==i)for(;i.length<t;)i+="0";return i}function o(e){var t=e.locator[e.alternation];return"string"==typeof t&&t.length>0&&(t=t.split(",")[0]),void 0!==t?t.toString():""}function s(e,t,i){var a=this.opts,n=this.maskset;if(void 0!==(t=t||c.call(this,e).match).placeholder||!0===i)return"function"==typeof t.placeholder?t.placeholder(a):t.placeholder;if(!0===t.static){if(e>-1&&void 0===n.validPositions[e]){var r,o=d.call(this,e),s=[];if(o.length>1+(""===o[o.length-1].match.def?1:0))for(var l=0;l<o.length;l++)if(""!==o[l].match.def&&!0!==o[l].match.optionality&&!0!==o[l].match.optionalQuantifier&&(!0===o[l].match.static||void 0===r||!1!==o[l].match.fn.test(r.match.def,n,e,!0,a))&&(s.push(o[l]),!0===o[l].match.static&&(r=o[l]),s.length>1&&/[0-9a-bA-Z]/.test(s[0].match.def)))return a.placeholder.charAt(e%a.placeholder.length)}return t.def}return a.placeholder.charAt(e%a.placeholder.length)}function l(e,t,i){return this.maskset.validPositions[e]||u.call(this,e,d.call(this,e,t?t.slice():t,i))}function u(e,t){var i=this.opts,a=function(e,t){var i=0,a=!1;t.forEach((function(e){e.match.optionality&&(0!==i&&i!==e.match.optionality&&(a=!0),(0===i||i>e.match.optionality)&&(i=e.match.optionality))})),i&&(0==e||1==t.length?i=0:a||(i=0));return i}(e,t);e=e>0?e-1:0;var n,o,s,l=r(c.call(this,e));i.greedy&&t.length>1&&""===t[t.length-1].match.def&&t.pop();for(var u=0;u<t.length;u++){var f=t[u];n=r(f,l.length);var d=Math.abs(n-l);(void 0===o||""!==n&&d<o||s&&!i.greedy&&s.match.optionality&&s.match.optionality-a>0&&"master"===s.match.newBlockMarker&&(!f.match.optionality||f.match.optionality-a<1||!f.match.newBlockMarker)||s&&!i.greedy&&s.match.optionalQuantifier&&!f.match.optionalQuantifier)&&(o=d,s=f)}return s}function c(e,t){var i=this.maskset;return i.validPositions[e]?i.validPositions[e]:(t||d.call(this,e))[0]}function f(e,t,i){function a(e){for(var t,i=[],a=-1,n=0,r=e.length;n<r;n++)if("-"===e.charAt(n))for(t=e.charCodeAt(n+1);++a<t;)i.push(String.fromCharCode(a));else a=e.charCodeAt(n),i.push(e.charAt(n));return i.join("")}return e.match.def===t.match.nativeDef||!(!(i.regex||e.match.fn instanceof RegExp&&t.match.fn instanceof RegExp)||!0===e.match.static||!0===t.match.static)&&-1!==a(t.match.fn.toString().replace(/[[\]/]/g,"")).indexOf(a(e.match.fn.toString().replace(/[[\]/]/g,"")))}function d(e,t,i){var a,r,o=this,s=this.dependencyLib,l=this.maskset,c=this.opts,d=this.el,p=l.maskToken,h=t?i:0,v=t?t.slice():[0],m=[],g=!1,k=t?t.join(""):"";function y(t,i,r,o){function s(r,o,u){function p(e,t){var i=0===t.matches.indexOf(e);return i||t.matches.every((function(a,n){return!0===a.isQuantifier?i=p(e,t.matches[n-1]):Object.prototype.hasOwnProperty.call(a,"matches")&&(i=p(e,a)),!i})),i}function v(e,t,i){var a,n;if((l.tests[e]||l.validPositions[e])&&(l.tests[e]||[l.validPositions[e]]).every((function(e,r){if(e.mloc[t])return a=e,!1;var o=void 0!==i?i:e.alternation,s=void 0!==e.locator[o]?e.locator[o].toString().indexOf(t):-1;return(void 0===n||s<n)&&-1!==s&&(a=e,n=s),!0})),a){var r=a.locator[a.alternation];return(a.mloc[t]||a.mloc[r]||a.locator).slice((void 0!==i?i:a.alternation)+1)}return void 0!==i?v(e,t):void 0}function b(e,t){var i=e.alternation,a=void 0===t||i===t.alternation&&-1===e.locator[i].toString().indexOf(t.locator[i]);if(!a&&i>t.alternation)for(var n=t.alternation;n<i;n++)if(e.locator[n]!==t.locator[n]){i=n,a=!0;break}if(a){e.mloc=e.mloc||{};var r=e.locator[i];if(void 0!==r){if("string"==typeof r&&(r=r.split(",")[0]),void 0===e.mloc[r]&&(e.mloc[r]=e.locator.slice()),void 0!==t){for(var o in t.mloc)"string"==typeof o&&(o=o.split(",")[0]),void 0===e.mloc[o]&&(e.mloc[o]=t.mloc[o]);e.locator[i]=Object.keys(e.mloc).join(",")}return!0}e.alternation=void 0}return!1}function x(e,t){if(e.locator.length!==t.locator.length)return!1;for(var i=e.alternation+1;i<e.locator.length;i++)if(e.locator[i]!==t.locator[i])return!1;return!0}if(h>e+c._maxTestPos)throw"Inputmask: There is probably an error in your mask definition or in the code. Create an issue on github with an example of the mask you are using. "+l.mask;if(h===e&&void 0===r.matches){if(m.push({match:r,locator:o.reverse(),cd:k,mloc:{}}),!r.optionality||void 0!==u||!(c.definitions&&c.definitions[r.nativeDef]&&c.definitions[r.nativeDef].optional||n.default.prototype.definitions[r.nativeDef]&&n.default.prototype.definitions[r.nativeDef].optional))return!0;g=!0,h=e}else if(void 0!==r.matches){if(r.isGroup&&u!==r){if(r=s(t.matches[t.matches.indexOf(r)+1],o,u))return!0}else if(r.isOptional){var P=r,E=m.length;if(r=y(r,i,o,u)){if(m.forEach((function(e,t){t>=E&&(e.match.optionality=e.match.optionality?e.match.optionality+1:1)})),a=m[m.length-1].match,void 0!==u||!p(a,P))return!0;g=!0,h=e}}else if(r.isAlternator){var S,w=r,_=[],M=m.slice(),O=o.length,T=!1,A=i.length>0?i.shift():-1;if(-1===A||"string"==typeof A){var C,D=h,j=i.slice(),B=[];if("string"==typeof A)B=A.split(",");else for(C=0;C<w.matches.length;C++)B.push(C.toString());if(void 0!==l.excludes[e]){for(var R=B.slice(),L=0,I=l.excludes[e].length;L<I;L++){var F=l.excludes[e][L].toString().split(":");o.length==F[1]&&B.splice(B.indexOf(F[0]),1)}0===B.length&&(delete l.excludes[e],B=R)}(!0===c.keepStatic||isFinite(parseInt(c.keepStatic))&&D>=c.keepStatic)&&(B=B.slice(0,1));for(var N=0;N<B.length;N++){C=parseInt(B[N]),m=[],i="string"==typeof A&&v(h,C,O)||j.slice();var V=w.matches[C];if(V&&s(V,[C].concat(o),u))r=!0;else if(0===N&&(T=!0),V&&V.matches&&V.matches.length>w.matches[0].matches.length)break;S=m.slice(),h=D,m=[];for(var G=0;G<S.length;G++){var H=S[G],K=!1;H.match.jit=H.match.jit||T,H.alternation=H.alternation||O,b(H);for(var U=0;U<_.length;U++){var $=_[U];if("string"!=typeof A||void 0!==H.alternation&&B.includes(H.locator[H.alternation].toString())){if(H.match.nativeDef===$.match.nativeDef){K=!0,b($,H);break}if(f(H,$,c)){b(H,$)&&(K=!0,_.splice(_.indexOf($),0,H));break}if(f($,H,c)){b($,H);break}if(Z=$,!0===(W=H).match.static&&!0!==Z.match.static&&Z.match.fn.test(W.match.def,l,e,!1,c,!1)){x(H,$)||void 0!==d.inputmask.userOptions.keepStatic?b(H,$)&&(K=!0,_.splice(_.indexOf($),0,H)):c.keepStatic=!0;break}}}K||_.push(H)}}m=M.concat(_),h=e,g=m.length>0,r=_.length>0,i=j.slice()}else r=s(w.matches[A]||t.matches[A],[A].concat(o),u);if(r)return!0}else if(r.isQuantifier&&u!==t.matches[t.matches.indexOf(r)-1])for(var q=r,z=i.length>0?i.shift():0;z<(isNaN(q.quantifier.max)?z+1:q.quantifier.max)&&h<=e;z++){var Q=t.matches[t.matches.indexOf(q)-1];if(r=s(Q,[z].concat(o),Q)){if((a=m[m.length-1].match).optionalQuantifier=z>=q.quantifier.min,a.jit=(z+1)*(Q.matches.indexOf(a)+1)>q.quantifier.jit,a.optionalQuantifier&&p(a,Q)){g=!0,h=e;break}return a.jit&&(l.jitOffset[e]=Q.matches.length-Q.matches.indexOf(a)),!0}}else if(r=y(r,i,o,u))return!0}else h++;var W,Z}for(var u=i.length>0?i.shift():0;u<t.matches.length;u++)if(!0!==t.matches[u].isQuantifier){var p=s(t.matches[u],[u].concat(r),o);if(p&&h===e)return p;if(h>e)break}}if(e>-1){if(void 0===t){for(var b,x=e-1;void 0===(b=l.validPositions[x]||l.tests[x])&&x>-1;)x--;void 0!==b&&x>-1&&(v=function(e,t){var i,a=[];return Array.isArray(t)||(t=[t]),t.length>0&&(void 0===t[0].alternation||!0===c.keepStatic?0===(a=u.call(o,e,t.slice()).locator.slice()).length&&(a=t[0].locator.slice()):t.forEach((function(e){""!==e.def&&(0===a.length?(i=e.alternation,a=e.locator.slice()):e.locator[i]&&-1===a[i].toString().indexOf(e.locator[i])&&(a[i]+=","+e.locator[i]))}))),a}(x,b),k=v.join(""),h=x)}if(l.tests[e]&&l.tests[e][0].cd===k)return l.tests[e];for(var P=v.shift();P<p.length;P++){if(y(p[P],v,[P])&&h===e||h>e)break}}return(0===m.length||g)&&m.push({match:{fn:null,static:!0,optionality:!1,casing:null,def:"",placeholder:""},locator:[],mloc:{},cd:k}),void 0!==t&&l.tests[e]?r=s.extend(!0,[],m):(l.tests[e]=s.extend(!0,[],m),r=l.tests[e]),m.forEach((function(e){e.match.optionality=e.match.defOptionality||!1})),r}},7215:function(e,t,i){Object.defineProperty(t,"__esModule",{value:!0}),t.alternate=l,t.checkAlternationMatch=function(e,t,i){for(var a,n=this.opts.greedy?t:t.slice(0,1),r=!1,o=void 0!==i?i.split(","):[],s=0;s<o.length;s++)-1!==(a=e.indexOf(o[s]))&&e.splice(a,1);for(var l=0;l<e.length;l++)if(n.includes(e[l])){r=!0;break}return r},t.handleRemove=function(e,t,i,a,s){var u=this,c=this.maskset,f=this.opts;if((f.numericInput||u.isRTL)&&(t===r.default.BACKSPACE?t=r.default.DELETE:t===r.default.DELETE&&(t=r.default.BACKSPACE),u.isRTL)){var d=i.end;i.end=i.begin,i.begin=d}var p,h=o.getLastValidPosition.call(u,void 0,!0);i.end>=o.getBuffer.call(u).length&&h>=i.end&&(i.end=h+1);t===r.default.BACKSPACE?i.end-i.begin<1&&(i.begin=o.seekPrevious.call(u,i.begin)):t===r.default.DELETE&&i.begin===i.end&&(i.end=o.isMask.call(u,i.end,!0,!0)?i.end+1:o.seekNext.call(u,i.end)+1);if(!1!==(p=m.call(u,i))){if(!0!==a&&!1!==f.keepStatic||null!==f.regex&&-1!==n.getTest.call(u,i.begin).match.def.indexOf("|")){var v=l.call(u,!0);if(v){var g=void 0!==v.caret?v.caret:v.pos?o.seekNext.call(u,v.pos.begin?v.pos.begin:v.pos):o.getLastValidPosition.call(u,-1,!0);(t!==r.default.DELETE||i.begin>g)&&i.begin}}!0!==a&&(c.p=t===r.default.DELETE?i.begin+p:i.begin,c.p=o.determineNewCaretPosition.call(u,{begin:c.p,end:c.p},!1,!1===f.insertMode&&t===r.default.BACKSPACE?"none":void 0).begin)}},t.isComplete=c,t.isSelection=f,t.isValid=d,t.refreshFromBuffer=h,t.revalidateMask=m;var a,n=i(4713),r=(a=i(5581))&&a.__esModule?a:{default:a},o=i(8711),s=i(6030);function l(e,t,i,a,r,s){var u,c,f,p,h,v,m,g,k,y,b,x=this,P=this.dependencyLib,E=this.opts,S=x.maskset,w=P.extend(!0,[],S.validPositions),_=P.extend(!0,{},S.tests),M=!1,O=!1,T=void 0!==r?r:o.getLastValidPosition.call(x);if(s&&(y=s.begin,b=s.end,s.begin>s.end&&(y=s.end,b=s.begin)),-1===T&&void 0===r)u=0,c=(p=n.getTest.call(x,u)).alternation;else for(;T>=0;T--)if((f=S.validPositions[T])&&void 0!==f.alternation){if(p&&p.locator[f.alternation]!==f.locator[f.alternation])break;u=T,c=S.validPositions[u].alternation,p=f}if(void 0!==c){m=parseInt(u),S.excludes[m]=S.excludes[m]||[],!0!==e&&S.excludes[m].push((0,n.getDecisionTaker)(p)+":"+p.alternation);var A=[],C=-1;for(h=m;h<o.getLastValidPosition.call(x,void 0,!0)+1;h++)-1===C&&e<=h&&void 0!==t&&(A.push(t),C=A.length-1),(v=S.validPositions[h])&&!0!==v.generatedInput&&(void 0===s||h<y||h>=b)&&A.push(v.input),delete S.validPositions[h];for(-1===C&&void 0!==t&&(A.push(t),C=A.length-1);void 0!==S.excludes[m]&&S.excludes[m].length<10;){for(S.tests={},o.resetMaskSet.call(x,!0),M=!0,h=0;h<A.length&&(g=M.caret||o.getLastValidPosition.call(x,void 0,!0)+1,k=A[h],M=d.call(x,g,k,!1,a,!0));h++)h===C&&(O=M),1==e&&M&&(O={caretPos:h});if(M)break;if(o.resetMaskSet.call(x),p=n.getTest.call(x,m),S.validPositions=P.extend(!0,[],w),S.tests=P.extend(!0,{},_),!S.excludes[m]){O=l.call(x,e,t,i,a,m-1,s);break}var D=(0,n.getDecisionTaker)(p);if(-1!==S.excludes[m].indexOf(D+":"+p.alternation)){O=l.call(x,e,t,i,a,m-1,s);break}for(S.excludes[m].push(D+":"+p.alternation),h=m;h<o.getLastValidPosition.call(x,void 0,!0)+1;h++)delete S.validPositions[h]}}return O&&!1===E.keepStatic||delete S.excludes[m],O}function u(e,t,i){var a=this.opts,n=this.maskset;switch(a.casing||t.casing){case"upper":e=e.toUpperCase();break;case"lower":e=e.toLowerCase();break;case"title":var o=n.validPositions[i-1];e=0===i||o&&o.input===String.fromCharCode(r.default.SPACE)?e.toUpperCase():e.toLowerCase();break;default:if("function"==typeof a.casing){var s=Array.prototype.slice.call(arguments);s.push(n.validPositions),e=a.casing.apply(this,s)}}return e}function c(e){var t=this,i=this.opts,a=this.maskset;if("function"==typeof i.isComplete)return i.isComplete(e,i);if("*"!==i.repeat){var r=!1,s=o.determineLastRequiredPosition.call(t,!0),l=o.seekPrevious.call(t,s.l);if(void 0===s.def||s.def.newBlockMarker||s.def.optionality||s.def.optionalQuantifier){r=!0;for(var u=0;u<=l;u++){var c=n.getTestTemplate.call(t,u).match;if(!0!==c.static&&void 0===a.validPositions[u]&&!0!==c.optionality&&!0!==c.optionalQuantifier||!0===c.static&&e[u]!==n.getPlaceholder.call(t,u,c)){r=!1;break}}}return r}}function f(e){var t=this.opts.insertMode?0:1;return this.isRTL?e.begin-e.end>t:e.end-e.begin>t}function d(e,t,i,a,r,s,p){var g=this,k=this.dependencyLib,y=this.opts,b=g.maskset;i=!0===i;var x=e;function P(e){if(void 0!==e){if(void 0!==e.remove&&(Array.isArray(e.remove)||(e.remove=[e.remove]),e.remove.sort((function(e,t){return g.isRTL?e.pos-t.pos:t.pos-e.pos})).forEach((function(e){m.call(g,{begin:e,end:e+1})})),e.remove=void 0),void 0!==e.insert&&(Array.isArray(e.insert)||(e.insert=[e.insert]),e.insert.sort((function(e,t){return g.isRTL?t.pos-e.pos:e.pos-t.pos})).forEach((function(e){""!==e.c&&d.call(g,e.pos,e.c,void 0===e.strict||e.strict,void 0!==e.fromIsValid?e.fromIsValid:a)})),e.insert=void 0),e.refreshFromBuffer&&e.buffer){var t=e.refreshFromBuffer;h.call(g,!0===t?t:t.start,t.end,e.buffer),e.refreshFromBuffer=void 0}void 0!==e.rewritePosition&&(x=e.rewritePosition,e=!0)}return e}function E(t,i,r){var s=!1;return n.getTests.call(g,t).every((function(l,c){var d=l.match;if(o.getBuffer.call(g,!0),!1!==(s=(!d.jit||void 0!==b.validPositions[o.seekPrevious.call(g,t)])&&(null!=d.fn?d.fn.test(i,b,t,r,y,f.call(g,e)):(i===d.def||i===y.skipOptionalPartCharacter)&&""!==d.def&&{c:n.getPlaceholder.call(g,t,d,!0)||d.def,pos:t}))){var p=void 0!==s.c?s.c:i,h=t;return p=p===y.skipOptionalPartCharacter&&!0===d.static?n.getPlaceholder.call(g,t,d,!0)||d.def:p,!0!==(s=P(s))&&void 0!==s.pos&&s.pos!==t&&(h=s.pos),!0!==s&&void 0===s.pos&&void 0===s.c?!1:(!1===m.call(g,e,k.extend({},l,{input:u.call(g,p,d,h)}),a,h)&&(s=!1),!1)}return!0})),s}void 0!==e.begin&&(x=g.isRTL?e.end:e.begin);var S=!0,w=k.extend(!0,{},b.validPositions);if(!1===y.keepStatic&&void 0!==b.excludes[x]&&!0!==r&&!0!==a)for(var _=x;_<(g.isRTL?e.begin:e.end);_++)void 0!==b.excludes[_]&&(b.excludes[_]=void 0,delete b.tests[_]);if("function"==typeof y.preValidation&&!0!==a&&!0!==s&&(S=P(S=y.preValidation.call(g,o.getBuffer.call(g),x,t,f.call(g,e),y,b,e,i||r))),!0===S){if(S=E(x,t,i),(!i||!0===a)&&!1===S&&!0!==s){var M=b.validPositions[x];if(!M||!0!==M.match.static||M.match.def!==t&&t!==y.skipOptionalPartCharacter){if(y.insertMode||void 0===b.validPositions[o.seekNext.call(g,x)]||e.end>x){var O=!1;if(b.jitOffset[x]&&void 0===b.validPositions[o.seekNext.call(g,x)]&&!1!==(S=d.call(g,x+b.jitOffset[x],t,!0,!0))&&(!0!==r&&(S.caret=x),O=!0),e.end>x&&(b.validPositions[x]=void 0),!O&&!o.isMask.call(g,x,y.keepStatic&&0===x))for(var T=x+1,A=o.seekNext.call(g,x,!1,0!==x);T<=A;T++)if(!1!==(S=E(T,t,i))){S=v.call(g,x,void 0!==S.pos?S.pos:T)||S,x=T;break}}}else S={caret:o.seekNext.call(g,x)}}!1!==S||!y.keepStatic||!c.call(g,o.getBuffer.call(g))&&0!==x||i||!0===r?f.call(g,e)&&b.tests[x]&&b.tests[x].length>1&&y.keepStatic&&!i&&!0!==r&&(S=l.call(g,!0)):S=l.call(g,x,t,i,a,void 0,e),!0===S&&(S={pos:x})}if("function"==typeof y.postValidation&&!0!==a&&!0!==s){var C=y.postValidation.call(g,o.getBuffer.call(g,!0),void 0!==e.begin?g.isRTL?e.end:e.begin:e,t,S,y,b,i,p);void 0!==C&&(S=!0===C?S:C)}S&&void 0===S.pos&&(S.pos=x),!1===S||!0===s?(o.resetMaskSet.call(g,!0),b.validPositions=k.extend(!0,[],w)):v.call(g,void 0,x,!0);var D=P(S);void 0!==g.maxLength&&(o.getBuffer.call(g).length>g.maxLength&&!a&&(o.resetMaskSet.call(g,!0),b.validPositions=k.extend(!0,[],w),D=!1));return D}function p(e,t,i){for(var a=this.maskset,r=!1,o=n.getTests.call(this,e),s=0;s<o.length;s++){if(o[s].match&&(o[s].match.nativeDef===t.match[i.shiftPositions?"def":"nativeDef"]&&(!i.shiftPositions||!t.match.static)||o[s].match.nativeDef===t.match.nativeDef||i.regex&&!o[s].match.static&&o[s].match.fn.test(t.input))){r=!0;break}if(o[s].match&&o[s].match.def===t.match.nativeDef){r=void 0;break}}return!1===r&&void 0!==a.jitOffset[e]&&(r=p.call(this,e+a.jitOffset[e],t,i)),r}function h(e,t,i){var a,n,r=this,l=this.maskset,u=this.opts,c=this.dependencyLib,f=u.skipOptionalPartCharacter,d=r.isRTL?i.slice().reverse():i;if(u.skipOptionalPartCharacter="",!0===e)o.resetMaskSet.call(r),l.tests={},e=0,t=i.length,n=o.determineNewCaretPosition.call(r,{begin:0,end:0},!1).begin;else{for(a=e;a<t;a++)delete l.validPositions[a];n=e}var p=new c.Event("keypress");for(a=e;a<t;a++){p.keyCode=d[a].toString().charCodeAt(0),r.ignorable=!1;var h=s.EventHandlers.keypressEvent.call(r,p,!0,!1,!1,n);!1!==h&&void 0!==h&&(n=h.forwardPosition)}u.skipOptionalPartCharacter=f}function v(e,t,i){var a=this,r=this.maskset,s=this.dependencyLib;if(void 0===e)for(e=t-1;e>0&&!r.validPositions[e];e--);for(var l=e;l<t;l++){if(void 0===r.validPositions[l]&&!o.isMask.call(a,l,!1))if(0==l?n.getTest.call(a,l):r.validPositions[l-1]){var u=n.getTests.call(a,l).slice();""===u[u.length-1].match.def&&u.pop();var c,f=n.determineTestTemplate.call(a,l,u);if(f&&(!0!==f.match.jit||"master"===f.match.newBlockMarker&&(c=r.validPositions[l+1])&&!0===c.match.optionalQuantifier)&&((f=s.extend({},f,{input:n.getPlaceholder.call(a,l,f.match,!0)||f.match.def})).generatedInput=!0,m.call(a,l,f,!0),!0!==i)){var p=r.validPositions[t].input;return r.validPositions[t]=void 0,d.call(a,t,p,!0,!0)}}}}function m(e,t,i,a){var r=this,s=this.maskset,l=this.opts,u=this.dependencyLib;function c(e,t,i){var a=t[e];if(void 0!==a&&!0===a.match.static&&!0!==a.match.optionality&&(void 0===t[0]||void 0===t[0].alternation)){var n=i.begin<=e-1?t[e-1]&&!0===t[e-1].match.static&&t[e-1]:t[e-1],r=i.end>e+1?t[e+1]&&!0===t[e+1].match.static&&t[e+1]:t[e+1];return n&&r}return!1}var f=0,h=void 0!==e.begin?e.begin:e,v=void 0!==e.end?e.end:e,m=!0;if(e.begin>e.end&&(h=e.end,v=e.begin),a=void 0!==a?a:h,void 0===i&&(h!==v||l.insertMode&&void 0!==s.validPositions[a]||void 0===t||t.match.optionalQuantifier||t.match.optionality)){var g,k=u.extend(!0,{},s.validPositions),y=o.getLastValidPosition.call(r,void 0,!0);for(s.p=h,g=y;g>=h;g--)delete s.validPositions[g],void 0===t&&delete s.tests[g+1];var b,x,P=a,E=P;for(t&&(s.validPositions[a]=u.extend(!0,{},t),E++,P++),g=t?v:v-1;g<=y;g++){if(void 0!==(b=k[g])&&!0!==b.generatedInput&&(g>=v||g>=h&&c(g,k,{begin:h,end:v}))){for(;""!==n.getTest.call(r,E).match.def;){if(!1!==(x=p.call(r,E,b,l))||"+"===b.match.def){"+"===b.match.def&&o.getBuffer.call(r,!0);var S=d.call(r,E,b.input,"+"!==b.match.def,!0);if(m=!1!==S,P=(S.pos||E)+1,!m&&x)break}else m=!1;if(m){void 0===t&&b.match.static&&g===e.begin&&f++;break}if(!m&&o.getBuffer.call(r),E>s.maskLength)break;E++}""==n.getTest.call(r,E).match.def&&(m=!1),E=P}if(!m)break}if(!m)return s.validPositions=u.extend(!0,[],k),o.resetMaskSet.call(r,!0),!1}else t&&n.getTest.call(r,a).match.cd===t.match.cd&&(s.validPositions[a]=u.extend(!0,{},t));return o.resetMaskSet.call(r,!0),f}},7957:function(t){t.exports=e},5581:function(e){e.exports=JSON.parse('{"BACKSPACE":8,"BACKSPACE_SAFARI":127,"DELETE":46,"DOWN":40,"END":35,"ENTER":13,"ESCAPE":27,"HOME":36,"INSERT":45,"LEFT":37,"PAGE_DOWN":34,"PAGE_UP":33,"RIGHT":39,"SPACE":32,"TAB":9,"UP":38,"X":88,"Z":90,"CONTROL":17,"PAUSE/BREAK":19,"WINDOWS_LEFT":91,"WINDOWS_RIGHT":92,"KEY_229":229}')}},i={};function a(e){var n=i[e];if(void 0!==n)return n.exports;var r=i[e]={exports:{}};return t[e](r,r.exports,a),r.exports}var n={};return function(){var e=n;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var t,i=(t=a(3046))&&t.__esModule?t:{default:t};a(443);var r=i.default;e.default=r}(),n}()}));
!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):e.AOS=t()}(this,function(){"use strict";var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},t="Expected a function",n=NaN,o="[object Symbol]",i=/^\s+|\s+$/g,a=/^[-+]0x[0-9a-f]+$/i,r=/^0b[01]+$/i,c=/^0o[0-7]+$/i,s=parseInt,u="object"==typeof e&&e&&e.Object===Object&&e,d="object"==typeof self&&self&&self.Object===Object&&self,l=u||d||Function("return this")(),f=Object.prototype.toString,m=Math.max,p=Math.min,b=function(){return l.Date.now()};function v(e,n,o){var i,a,r,c,s,u,d=0,l=!1,f=!1,v=!0;if("function"!=typeof e)throw new TypeError(t);function y(t){var n=i,o=a;return i=a=void 0,d=t,c=e.apply(o,n)}function h(e){var t=e-u;return void 0===u||t>=n||t<0||f&&e-d>=r}function k(){var e=b();if(h(e))return x(e);s=setTimeout(k,function(e){var t=n-(e-u);return f?p(t,r-(e-d)):t}(e))}function x(e){return s=void 0,v&&i?y(e):(i=a=void 0,c)}function O(){var e=b(),t=h(e);if(i=arguments,a=this,u=e,t){if(void 0===s)return function(e){return d=e,s=setTimeout(k,n),l?y(e):c}(u);if(f)return s=setTimeout(k,n),y(u)}return void 0===s&&(s=setTimeout(k,n)),c}return n=w(n)||0,g(o)&&(l=!!o.leading,r=(f="maxWait"in o)?m(w(o.maxWait)||0,n):r,v="trailing"in o?!!o.trailing:v),O.cancel=function(){void 0!==s&&clearTimeout(s),d=0,i=u=a=s=void 0},O.flush=function(){return void 0===s?c:x(b())},O}function g(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function w(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&f.call(e)==o}(e))return n;if(g(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=g(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(i,"");var u=r.test(e);return u||c.test(e)?s(e.slice(2),u?2:8):a.test(e)?n:+e}var y=function(e,n,o){var i=!0,a=!0;if("function"!=typeof e)throw new TypeError(t);return g(o)&&(i="leading"in o?!!o.leading:i,a="trailing"in o?!!o.trailing:a),v(e,n,{leading:i,maxWait:n,trailing:a})},h="Expected a function",k=NaN,x="[object Symbol]",O=/^\s+|\s+$/g,j=/^[-+]0x[0-9a-f]+$/i,E=/^0b[01]+$/i,N=/^0o[0-7]+$/i,z=parseInt,C="object"==typeof e&&e&&e.Object===Object&&e,A="object"==typeof self&&self&&self.Object===Object&&self,q=C||A||Function("return this")(),L=Object.prototype.toString,T=Math.max,M=Math.min,S=function(){return q.Date.now()};function D(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function H(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&L.call(e)==x}(e))return k;if(D(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=D(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(O,"");var n=E.test(e);return n||N.test(e)?z(e.slice(2),n?2:8):j.test(e)?k:+e}var $=function(e,t,n){var o,i,a,r,c,s,u=0,d=!1,l=!1,f=!0;if("function"!=typeof e)throw new TypeError(h);function m(t){var n=o,a=i;return o=i=void 0,u=t,r=e.apply(a,n)}function p(e){var n=e-s;return void 0===s||n>=t||n<0||l&&e-u>=a}function b(){var e=S();if(p(e))return v(e);c=setTimeout(b,function(e){var n=t-(e-s);return l?M(n,a-(e-u)):n}(e))}function v(e){return c=void 0,f&&o?m(e):(o=i=void 0,r)}function g(){var e=S(),n=p(e);if(o=arguments,i=this,s=e,n){if(void 0===c)return function(e){return u=e,c=setTimeout(b,t),d?m(e):r}(s);if(l)return c=setTimeout(b,t),m(s)}return void 0===c&&(c=setTimeout(b,t)),r}return t=H(t)||0,D(n)&&(d=!!n.leading,a=(l="maxWait"in n)?T(H(n.maxWait)||0,t):a,f="trailing"in n?!!n.trailing:f),g.cancel=function(){void 0!==c&&clearTimeout(c),u=0,o=s=i=c=void 0},g.flush=function(){return void 0===c?r:v(S())},g},W=function(){};function P(e){e&&e.forEach(function(e){var t=Array.prototype.slice.call(e.addedNodes),n=Array.prototype.slice.call(e.removedNodes);if(function e(t){var n=void 0,o=void 0;for(n=0;n<t.length;n+=1){if((o=t[n]).dataset&&o.dataset.aos)return!0;if(o.children&&e(o.children))return!0}return!1}(t.concat(n)))return W()})}function Y(){return window.MutationObserver||window.WebKitMutationObserver||window.MozMutationObserver}var _={isSupported:function(){return!!Y()},ready:function(e,t){var n=window.document,o=new(Y())(P);W=t,o.observe(n.documentElement,{childList:!0,subtree:!0,removedNodes:!0})}},B=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},F=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),I=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},K=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i,G=/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,J=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i,Q=/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i;function R(){return navigator.userAgent||navigator.vendor||window.opera||""}var U=new(function(){function e(){B(this,e)}return F(e,[{key:"phone",value:function(){var e=R();return!(!K.test(e)&&!G.test(e.substr(0,4)))}},{key:"mobile",value:function(){var e=R();return!(!J.test(e)&&!Q.test(e.substr(0,4)))}},{key:"tablet",value:function(){return this.mobile()&&!this.phone()}},{key:"ie11",value:function(){return"-ms-scroll-limit"in document.documentElement.style&&"-ms-ime-align"in document.documentElement.style}}]),e}()),V=function(e,t){var n=void 0;return U.ie11()?(n=document.createEvent("CustomEvent")).initCustomEvent(e,!0,!0,{detail:t}):n=new CustomEvent(e,{detail:t}),document.dispatchEvent(n)},X=function(e){return e.forEach(function(e,t){return function(e,t){var n=e.options,o=e.position,i=e.node,a=(e.data,function(){e.animated&&(function(e,t){t&&t.forEach(function(t){return e.classList.remove(t)})}(i,n.animatedClassNames),V("aos:out",i),e.options.id&&V("aos:in:"+e.options.id,i),e.animated=!1)});n.mirror&&t>=o.out&&!n.once?a():t>=o.in?e.animated||(function(e,t){t&&t.forEach(function(t){return e.classList.add(t)})}(i,n.animatedClassNames),V("aos:in",i),e.options.id&&V("aos:in:"+e.options.id,i),e.animated=!0):e.animated&&!n.once&&a()}(e,window.pageYOffset)})},Z=function(e){for(var t=0,n=0;e&&!isNaN(e.offsetLeft)&&!isNaN(e.offsetTop);)t+=e.offsetLeft-("BODY"!=e.tagName?e.scrollLeft:0),n+=e.offsetTop-("BODY"!=e.tagName?e.scrollTop:0),e=e.offsetParent;return{top:n,left:t}},ee=function(e,t,n){var o=e.getAttribute("data-aos-"+t);if(void 0!==o){if("true"===o)return!0;if("false"===o)return!1}return o||n},te=function(e,t){return e.forEach(function(e,n){var o=ee(e.node,"mirror",t.mirror),i=ee(e.node,"once",t.once),a=ee(e.node,"id"),r=t.useClassNames&&e.node.getAttribute("data-aos"),c=[t.animatedClassName].concat(r?r.split(" "):[]).filter(function(e){return"string"==typeof e});t.initClassName&&e.node.classList.add(t.initClassName),e.position={in:function(e,t,n){var o=window.innerHeight,i=ee(e,"anchor"),a=ee(e,"anchor-placement"),r=Number(ee(e,"offset",a?0:t)),c=a||n,s=e;i&&document.querySelectorAll(i)&&(s=document.querySelectorAll(i)[0]);var u=Z(s).top-o;switch(c){case"top-bottom":break;case"center-bottom":u+=s.offsetHeight/2;break;case"bottom-bottom":u+=s.offsetHeight;break;case"top-center":u+=o/2;break;case"center-center":u+=o/2+s.offsetHeight/2;break;case"bottom-center":u+=o/2+s.offsetHeight;break;case"top-top":u+=o;break;case"bottom-top":u+=o+s.offsetHeight;break;case"center-top":u+=o+s.offsetHeight/2}return u+r}(e.node,t.offset,t.anchorPlacement),out:o&&function(e,t){window.innerHeight;var n=ee(e,"anchor"),o=ee(e,"offset",t),i=e;return n&&document.querySelectorAll(n)&&(i=document.querySelectorAll(n)[0]),Z(i).top+i.offsetHeight-o}(e.node,t.offset)},e.options={once:i,mirror:o,animatedClassNames:c,id:a}}),e},ne=function(){var e=document.querySelectorAll("[data-aos]");return Array.prototype.map.call(e,function(e){return{node:e}})},oe=[],ie=!1,ae={offset:120,delay:0,easing:"ease",duration:400,disable:!1,once:!1,mirror:!1,anchorPlacement:"top-bottom",startEvent:"DOMContentLoaded",animatedClassName:"aos-animate",initClassName:"aos-init",useClassNames:!1,disableMutationObserver:!1,throttleDelay:99,debounceDelay:50},re=function(){return document.all&&!window.atob},ce=function(){arguments.length>0&&void 0!==arguments[0]&&arguments[0]&&(ie=!0),ie&&(oe=te(oe,ae),X(oe),window.addEventListener("scroll",y(function(){X(oe,ae.once)},ae.throttleDelay)))},se=function(){if(oe=ne(),de(ae.disable)||re())return ue();ce()},ue=function(){oe.forEach(function(e,t){e.node.removeAttribute("data-aos"),e.node.removeAttribute("data-aos-easing"),e.node.removeAttribute("data-aos-duration"),e.node.removeAttribute("data-aos-delay"),ae.initClassName&&e.node.classList.remove(ae.initClassName),ae.animatedClassName&&e.node.classList.remove(ae.animatedClassName)})},de=function(e){return!0===e||"mobile"===e&&U.mobile()||"phone"===e&&U.phone()||"tablet"===e&&U.tablet()||"function"==typeof e&&!0===e()};return{init:function(e){return ae=I(ae,e),oe=ne(),ae.disableMutationObserver||_.isSupported()||(console.info('\n      aos: MutationObserver is not supported on this browser,\n      code mutations observing has been disabled.\n      You may have to call "refreshHard()" by yourself.\n    '),ae.disableMutationObserver=!0),ae.disableMutationObserver||_.ready("[data-aos]",se),de(ae.disable)||re()?ue():(document.querySelector("body").setAttribute("data-aos-easing",ae.easing),document.querySelector("body").setAttribute("data-aos-duration",ae.duration),document.querySelector("body").setAttribute("data-aos-delay",ae.delay),-1===["DOMContentLoaded","load"].indexOf(ae.startEvent)?document.addEventListener(ae.startEvent,function(){ce(!0)}):window.addEventListener("load",function(){ce(!0)}),"DOMContentLoaded"===ae.startEvent&&["complete","interactive"].indexOf(document.readyState)>-1&&ce(!0),window.addEventListener("resize",$(ce,ae.debounceDelay,!0)),window.addEventListener("orientationchange",$(ce,ae.debounceDelay,!0)),oe)},refresh:ce,refreshHard:se}});

!function(t){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=t();else if("function"==typeof define&&define.amd)define([],t);else{("undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this).Parallax=t()}}(function(){return function t(e,i,n){function o(r,a){if(!i[r]){if(!e[r]){var l="function"==typeof require&&require;if(!a&&l)return l(r,!0);if(s)return s(r,!0);var h=new Error("Cannot find module '"+r+"'");throw h.code="MODULE_NOT_FOUND",h}var u=i[r]={exports:{}};e[r][0].call(u.exports,function(t){var i=e[r][1][t];return o(i||t)},u,u.exports,t,e,i,n)}return i[r].exports}for(var s="function"==typeof require&&require,r=0;r<n.length;r++)o(n[r]);return o}({1:[function(t,e,i){"use strict";function n(t){if(null===t||void 0===t)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(t)}var o=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,r=Object.prototype.propertyIsEnumerable;e.exports=function(){try{if(!Object.assign)return!1;var t=new String("abc");if(t[5]="de","5"===Object.getOwnPropertyNames(t)[0])return!1;for(var e={},i=0;i<10;i++)e["_"+String.fromCharCode(i)]=i;if("0123456789"!==Object.getOwnPropertyNames(e).map(function(t){return e[t]}).join(""))return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach(function(t){n[t]=t}),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},n)).join("")}catch(t){return!1}}()?Object.assign:function(t,e){for(var i,a,l=n(t),h=1;h<arguments.length;h++){i=Object(arguments[h]);for(var u in i)s.call(i,u)&&(l[u]=i[u]);if(o){a=o(i);for(var c=0;c<a.length;c++)r.call(i,a[c])&&(l[a[c]]=i[a[c]])}}return l}},{}],2:[function(t,e,i){(function(t){(function(){var i,n,o,s,r,a;"undefined"!=typeof performance&&null!==performance&&performance.now?e.exports=function(){return performance.now()}:void 0!==t&&null!==t&&t.hrtime?(e.exports=function(){return(i()-r)/1e6},n=t.hrtime,s=(i=function(){var t;return 1e9*(t=n())[0]+t[1]})(),a=1e9*t.uptime(),r=s-a):Date.now?(e.exports=function(){return Date.now()-o},o=Date.now()):(e.exports=function(){return(new Date).getTime()-o},o=(new Date).getTime())}).call(this)}).call(this,t("_process"))},{_process:3}],3:[function(t,e,i){function n(){throw new Error("setTimeout has not been defined")}function o(){throw new Error("clearTimeout has not been defined")}function s(t){if(c===setTimeout)return setTimeout(t,0);if((c===n||!c)&&setTimeout)return c=setTimeout,setTimeout(t,0);try{return c(t,0)}catch(e){try{return c.call(null,t,0)}catch(e){return c.call(this,t,0)}}}function r(t){if(d===clearTimeout)return clearTimeout(t);if((d===o||!d)&&clearTimeout)return d=clearTimeout,clearTimeout(t);try{return d(t)}catch(e){try{return d.call(null,t)}catch(e){return d.call(this,t)}}}function a(){v&&p&&(v=!1,p.length?f=p.concat(f):y=-1,f.length&&l())}function l(){if(!v){var t=s(a);v=!0;for(var e=f.length;e;){for(p=f,f=[];++y<e;)p&&p[y].run();y=-1,e=f.length}p=null,v=!1,r(t)}}function h(t,e){this.fun=t,this.array=e}function u(){}var c,d,m=e.exports={};!function(){try{c="function"==typeof setTimeout?setTimeout:n}catch(t){c=n}try{d="function"==typeof clearTimeout?clearTimeout:o}catch(t){d=o}}();var p,f=[],v=!1,y=-1;m.nextTick=function(t){var e=new Array(arguments.length-1);if(arguments.length>1)for(var i=1;i<arguments.length;i++)e[i-1]=arguments[i];f.push(new h(t,e)),1!==f.length||v||s(l)},h.prototype.run=function(){this.fun.apply(null,this.array)},m.title="browser",m.browser=!0,m.env={},m.argv=[],m.version="",m.versions={},m.on=u,m.addListener=u,m.once=u,m.off=u,m.removeListener=u,m.removeAllListeners=u,m.emit=u,m.prependListener=u,m.prependOnceListener=u,m.listeners=function(t){return[]},m.binding=function(t){throw new Error("process.binding is not supported")},m.cwd=function(){return"/"},m.chdir=function(t){throw new Error("process.chdir is not supported")},m.umask=function(){return 0}},{}],4:[function(t,e,i){(function(i){for(var n=t("performance-now"),o="undefined"==typeof window?i:window,s=["moz","webkit"],r="AnimationFrame",a=o["request"+r],l=o["cancel"+r]||o["cancelRequest"+r],h=0;!a&&h<s.length;h++)a=o[s[h]+"Request"+r],l=o[s[h]+"Cancel"+r]||o[s[h]+"CancelRequest"+r];if(!a||!l){var u=0,c=0,d=[];a=function(t){if(0===d.length){var e=n(),i=Math.max(0,1e3/60-(e-u));u=i+e,setTimeout(function(){var t=d.slice(0);d.length=0;for(var e=0;e<t.length;e++)if(!t[e].cancelled)try{t[e].callback(u)}catch(t){setTimeout(function(){throw t},0)}},Math.round(i))}return d.push({handle:++c,callback:t,cancelled:!1}),c},l=function(t){for(var e=0;e<d.length;e++)d[e].handle===t&&(d[e].cancelled=!0)}}e.exports=function(t){return a.call(o,t)},e.exports.cancel=function(){l.apply(o,arguments)},e.exports.polyfill=function(){o.requestAnimationFrame=a,o.cancelAnimationFrame=l}}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{"performance-now":2}],5:[function(t,e,i){"use strict";function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}var o=function(){function t(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,i,n){return i&&t(e.prototype,i),n&&t(e,n),e}}(),s=t("raf"),r=t("object-assign"),a={propertyCache:{},vendors:[null,["-webkit-","webkit"],["-moz-","Moz"],["-o-","O"],["-ms-","ms"]],clamp:function(t,e,i){return e<i?t<e?e:t>i?i:t:t<i?i:t>e?e:t},data:function(t,e){return a.deserialize(t.getAttribute("data-"+e))},deserialize:function(t){return"true"===t||"false"!==t&&("null"===t?null:!isNaN(parseFloat(t))&&isFinite(t)?parseFloat(t):t)},camelCase:function(t){return t.replace(/-+(.)?/g,function(t,e){return e?e.toUpperCase():""})},accelerate:function(t){a.css(t,"transform","translate3d(0,0,0) rotate(0.0001deg)"),a.css(t,"transform-style","preserve-3d"),a.css(t,"backface-visibility","hidden")},transformSupport:function(t){for(var e=document.createElement("div"),i=!1,n=null,o=!1,s=null,r=null,l=0,h=a.vendors.length;l<h;l++)if(null!==a.vendors[l]?(s=a.vendors[l][0]+"transform",r=a.vendors[l][1]+"Transform"):(s="transform",r="transform"),void 0!==e.style[r]){i=!0;break}switch(t){case"2D":o=i;break;case"3D":if(i){var u=document.body||document.createElement("body"),c=document.documentElement,d=c.style.overflow,m=!1;document.body||(m=!0,c.style.overflow="hidden",c.appendChild(u),u.style.overflow="hidden",u.style.background=""),u.appendChild(e),e.style[r]="translate3d(1px,1px,1px)",o=void 0!==(n=window.getComputedStyle(e).getPropertyValue(s))&&n.length>0&&"none"!==n,c.style.overflow=d,u.removeChild(e),m&&(u.removeAttribute("style"),u.parentNode.removeChild(u))}}return o},css:function(t,e,i){var n=a.propertyCache[e];if(!n)for(var o=0,s=a.vendors.length;o<s;o++)if(n=null!==a.vendors[o]?a.camelCase(a.vendors[o][1]+"-"+e):e,void 0!==t.style[n]){a.propertyCache[e]=n;break}t.style[n]=i}},l={relativeInput:!1,clipRelativeInput:!1,inputElement:null,hoverOnly:!1,calibrationThreshold:100,calibrationDelay:500,supportDelay:500,calibrateX:!1,calibrateY:!0,invertX:!0,invertY:!0,limitX:!1,limitY:!1,scalarX:10,scalarY:10,frictionX:.1,frictionY:.1,originX:.5,originY:.5,pointerEvents:!1,precision:1,onReady:null,selector:null},h=function(){function t(e,i){n(this,t),this.element=e;var o={calibrateX:a.data(this.element,"calibrate-x"),calibrateY:a.data(this.element,"calibrate-y"),invertX:a.data(this.element,"invert-x"),invertY:a.data(this.element,"invert-y"),limitX:a.data(this.element,"limit-x"),limitY:a.data(this.element,"limit-y"),scalarX:a.data(this.element,"scalar-x"),scalarY:a.data(this.element,"scalar-y"),frictionX:a.data(this.element,"friction-x"),frictionY:a.data(this.element,"friction-y"),originX:a.data(this.element,"origin-x"),originY:a.data(this.element,"origin-y"),pointerEvents:a.data(this.element,"pointer-events"),precision:a.data(this.element,"precision"),relativeInput:a.data(this.element,"relative-input"),clipRelativeInput:a.data(this.element,"clip-relative-input"),hoverOnly:a.data(this.element,"hover-only"),inputElement:document.querySelector(a.data(this.element,"input-element")),selector:a.data(this.element,"selector")};for(var s in o)null===o[s]&&delete o[s];r(this,l,o,i),this.inputElement||(this.inputElement=this.element),this.calibrationTimer=null,this.calibrationFlag=!0,this.enabled=!1,this.depthsX=[],this.depthsY=[],this.raf=null,this.bounds=null,this.elementPositionX=0,this.elementPositionY=0,this.elementWidth=0,this.elementHeight=0,this.elementCenterX=0,this.elementCenterY=0,this.elementRangeX=0,this.elementRangeY=0,this.calibrationX=0,this.calibrationY=0,this.inputX=0,this.inputY=0,this.motionX=0,this.motionY=0,this.velocityX=0,this.velocityY=0,this.onMouseMove=this.onMouseMove.bind(this),this.onDeviceOrientation=this.onDeviceOrientation.bind(this),this.onDeviceMotion=this.onDeviceMotion.bind(this),this.onOrientationTimer=this.onOrientationTimer.bind(this),this.onMotionTimer=this.onMotionTimer.bind(this),this.onCalibrationTimer=this.onCalibrationTimer.bind(this),this.onAnimationFrame=this.onAnimationFrame.bind(this),this.onWindowResize=this.onWindowResize.bind(this),this.windowWidth=null,this.windowHeight=null,this.windowCenterX=null,this.windowCenterY=null,this.windowRadiusX=null,this.windowRadiusY=null,this.portrait=!1,this.desktop=!navigator.userAgent.match(/(iPhone|iPod|iPad|Android|BlackBerry|BB10|mobi|tablet|opera mini|nexus 7)/i),this.motionSupport=!!window.DeviceMotionEvent&&!this.desktop,this.orientationSupport=!!window.DeviceOrientationEvent&&!this.desktop,this.orientationStatus=0,this.motionStatus=0,this.initialise()}return o(t,[{key:"initialise",value:function(){void 0===this.transform2DSupport&&(this.transform2DSupport=a.transformSupport("2D"),this.transform3DSupport=a.transformSupport("3D")),this.transform3DSupport&&a.accelerate(this.element),"static"===window.getComputedStyle(this.element).getPropertyValue("position")&&(this.element.style.position="relative"),this.pointerEvents||(this.element.style.pointerEvents="none"),this.updateLayers(),this.updateDimensions(),this.enable(),this.queueCalibration(this.calibrationDelay)}},{key:"doReadyCallback",value:function(){this.onReady&&this.onReady()}},{key:"updateLayers",value:function(){this.selector?this.layers=this.element.querySelectorAll(this.selector):this.layers=this.element.children,this.layers.length||console.warn("ParallaxJS: Your scene does not have any layers."),this.depthsX=[],this.depthsY=[];for(var t=0;t<this.layers.length;t++){var e=this.layers[t];this.transform3DSupport&&a.accelerate(e),e.style.position=t?"absolute":"relative",e.style.display="block",e.style.left=0,e.style.top=0;var i=a.data(e,"depth")||0;this.depthsX.push(a.data(e,"depth-x")||i),this.depthsY.push(a.data(e,"depth-y")||i)}}},{key:"updateDimensions",value:function(){this.windowWidth=window.innerWidth,this.windowHeight=window.innerHeight,this.windowCenterX=this.windowWidth*this.originX,this.windowCenterY=this.windowHeight*this.originY,this.windowRadiusX=Math.max(this.windowCenterX,this.windowWidth-this.windowCenterX),this.windowRadiusY=Math.max(this.windowCenterY,this.windowHeight-this.windowCenterY)}},{key:"updateBounds",value:function(){this.bounds=this.inputElement.getBoundingClientRect(),this.elementPositionX=this.bounds.left,this.elementPositionY=this.bounds.top,this.elementWidth=this.bounds.width,this.elementHeight=this.bounds.height,this.elementCenterX=this.elementWidth*this.originX,this.elementCenterY=this.elementHeight*this.originY,this.elementRangeX=Math.max(this.elementCenterX,this.elementWidth-this.elementCenterX),this.elementRangeY=Math.max(this.elementCenterY,this.elementHeight-this.elementCenterY)}},{key:"queueCalibration",value:function(t){clearTimeout(this.calibrationTimer),this.calibrationTimer=setTimeout(this.onCalibrationTimer,t)}},{key:"enable",value:function(){this.enabled||(this.enabled=!0,this.orientationSupport?(this.portrait=!1,window.addEventListener("deviceorientation",this.onDeviceOrientation),this.detectionTimer=setTimeout(this.onOrientationTimer,this.supportDelay)):this.motionSupport?(this.portrait=!1,window.addEventListener("devicemotion",this.onDeviceMotion),this.detectionTimer=setTimeout(this.onMotionTimer,this.supportDelay)):(this.calibrationX=0,this.calibrationY=0,this.portrait=!1,window.addEventListener("mousemove",this.onMouseMove),this.doReadyCallback()),window.addEventListener("resize",this.onWindowResize),this.raf=s(this.onAnimationFrame))}},{key:"disable",value:function(){this.enabled&&(this.enabled=!1,this.orientationSupport?window.removeEventListener("deviceorientation",this.onDeviceOrientation):this.motionSupport?window.removeEventListener("devicemotion",this.onDeviceMotion):window.removeEventListener("mousemove",this.onMouseMove),window.removeEventListener("resize",this.onWindowResize),s.cancel(this.raf))}},{key:"calibrate",value:function(t,e){this.calibrateX=void 0===t?this.calibrateX:t,this.calibrateY=void 0===e?this.calibrateY:e}},{key:"invert",value:function(t,e){this.invertX=void 0===t?this.invertX:t,this.invertY=void 0===e?this.invertY:e}},{key:"friction",value:function(t,e){this.frictionX=void 0===t?this.frictionX:t,this.frictionY=void 0===e?this.frictionY:e}},{key:"scalar",value:function(t,e){this.scalarX=void 0===t?this.scalarX:t,this.scalarY=void 0===e?this.scalarY:e}},{key:"limit",value:function(t,e){this.limitX=void 0===t?this.limitX:t,this.limitY=void 0===e?this.limitY:e}},{key:"origin",value:function(t,e){this.originX=void 0===t?this.originX:t,this.originY=void 0===e?this.originY:e}},{key:"setInputElement",value:function(t){this.inputElement=t,this.updateDimensions()}},{key:"setPosition",value:function(t,e,i){e=e.toFixed(this.precision)+"px",i=i.toFixed(this.precision)+"px",this.transform3DSupport?a.css(t,"transform","translate3d("+e+","+i+",0)"):this.transform2DSupport?a.css(t,"transform","translate("+e+","+i+")"):(t.style.left=e,t.style.top=i)}},{key:"onOrientationTimer",value:function(){this.orientationSupport&&0===this.orientationStatus?(this.disable(),this.orientationSupport=!1,this.enable()):this.doReadyCallback()}},{key:"onMotionTimer",value:function(){this.motionSupport&&0===this.motionStatus?(this.disable(),this.motionSupport=!1,this.enable()):this.doReadyCallback()}},{key:"onCalibrationTimer",value:function(){this.calibrationFlag=!0}},{key:"onWindowResize",value:function(){this.updateDimensions()}},{key:"onAnimationFrame",value:function(){this.updateBounds();var t=this.inputX-this.calibrationX,e=this.inputY-this.calibrationY;(Math.abs(t)>this.calibrationThreshold||Math.abs(e)>this.calibrationThreshold)&&this.queueCalibration(0),this.portrait?(this.motionX=this.calibrateX?e:this.inputY,this.motionY=this.calibrateY?t:this.inputX):(this.motionX=this.calibrateX?t:this.inputX,this.motionY=this.calibrateY?e:this.inputY),this.motionX*=this.elementWidth*(this.scalarX/100),this.motionY*=this.elementHeight*(this.scalarY/100),isNaN(parseFloat(this.limitX))||(this.motionX=a.clamp(this.motionX,-this.limitX,this.limitX)),isNaN(parseFloat(this.limitY))||(this.motionY=a.clamp(this.motionY,-this.limitY,this.limitY)),this.velocityX+=(this.motionX-this.velocityX)*this.frictionX,this.velocityY+=(this.motionY-this.velocityY)*this.frictionY;for(var i=0;i<this.layers.length;i++){var n=this.layers[i],o=this.depthsX[i],r=this.depthsY[i],l=this.velocityX*(o*(this.invertX?-1:1)),h=this.velocityY*(r*(this.invertY?-1:1));this.setPosition(n,l,h)}this.raf=s(this.onAnimationFrame)}},{key:"rotate",value:function(t,e){var i=(t||0)/30,n=(e||0)/30,o=this.windowHeight>this.windowWidth;this.portrait!==o&&(this.portrait=o,this.calibrationFlag=!0),this.calibrationFlag&&(this.calibrationFlag=!1,this.calibrationX=i,this.calibrationY=n),this.inputX=i,this.inputY=n}},{key:"onDeviceOrientation",value:function(t){var e=t.beta,i=t.gamma;null!==e&&null!==i&&(this.orientationStatus=1,this.rotate(e,i))}},{key:"onDeviceMotion",value:function(t){var e=t.rotationRate.beta,i=t.rotationRate.gamma;null!==e&&null!==i&&(this.motionStatus=1,this.rotate(e,i))}},{key:"onMouseMove",value:function(t){var e=t.clientX,i=t.clientY;if(this.hoverOnly&&(e<this.elementPositionX||e>this.elementPositionX+this.elementWidth||i<this.elementPositionY||i>this.elementPositionY+this.elementHeight))return this.inputX=0,void(this.inputY=0);this.relativeInput?(this.clipRelativeInput&&(e=Math.max(e,this.elementPositionX),e=Math.min(e,this.elementPositionX+this.elementWidth),i=Math.max(i,this.elementPositionY),i=Math.min(i,this.elementPositionY+this.elementHeight)),this.elementRangeX&&this.elementRangeY&&(this.inputX=(e-this.elementPositionX-this.elementCenterX)/this.elementRangeX,this.inputY=(i-this.elementPositionY-this.elementCenterY)/this.elementRangeY)):this.windowRadiusX&&this.windowRadiusY&&(this.inputX=(e-this.windowCenterX)/this.windowRadiusX,this.inputY=(i-this.windowCenterY)/this.windowRadiusY)}},{key:"destroy",value:function(){this.disable(),clearTimeout(this.calibrationTimer),clearTimeout(this.detectionTimer),this.element.removeAttribute("style");for(var t=0;t<this.layers.length;t++)this.layers[t].removeAttribute("style");delete this.element,delete this.layers}},{key:"version",value:function(){return"3.1.0"}}]),t}();e.exports=h},{"object-assign":1,raf:4}]},{},[5])(5)});
//# sourceMappingURL=parallax.min.js.map

(function (q, g) {
	"function" === typeof define && define.amd
		? define([], g)
		: "object" === typeof module && module.exports
		? (module.exports = g())
		: (q.Rellax = g());
})("undefined" !== typeof window ? window : global, function () {
	var q = function (g, u) {
		function C() {
			if (
				3 === a.options.breakpoints.length &&
				Array.isArray(a.options.breakpoints)
			) {
				var f = !0,
					c = !0,
					b;
				a.options.breakpoints.forEach(function (a) {
					"number" !== typeof a && (c = !1);
					null !== b && a < b && (f = !1);
					b = a;
				});
				if (f && c) return;
			}
			a.options.breakpoints = [576, 768, 1201];
			console.warn(
				"Rellax: You must pass an array of 3 numbers in ascending order to the breakpoints option. Defaults reverted"
			);
		}
		var a = Object.create(q.prototype),
			l = 0,
			v = 0,
			m = 0,
			n = 0,
			d = [],
			w = !0,
			A =
				window.requestAnimationFrame ||
				window.webkitRequestAnimationFrame ||
				window.mozRequestAnimationFrame ||
				window.msRequestAnimationFrame ||
				window.oRequestAnimationFrame ||
				function (a) {
					return setTimeout(a, 1e3 / 60);
				},
			p = null,
			x = !1;
		try {
			var k = Object.defineProperty({}, "passive", {
				get: function () {
					x = !0;
				},
			});
			window.addEventListener("testPassive", null, k);
			window.removeEventListener("testPassive", null, k);
		} catch (f) {}
		var D =
				window.cancelAnimationFrame ||
				window.mozCancelAnimationFrame ||
				clearTimeout,
			E =
				window.transformProp ||
				(function () {
					var a = document.createElement("div");
					if (null === a.style.transform) {
						var c = ["Webkit", "Moz", "ms"],
							b;
						for (b in c)
							if (void 0 !== a.style[c[b] + "Transform"])
								return c[b] + "Transform";
					}
					return "transform";
				})();
		a.options = {
			speed: -2,
			verticalSpeed: null,
			horizontalSpeed: null,
			breakpoints: [576, 768, 1201],
			center: !1,
			wrapper: null,
			relativeToWrapper: !1,
			round: !0,
			vertical: !0,
			horizontal: !1,
			verticalScrollAxis: "y",
			horizontalScrollAxis: "x",
			callback: function () {},
		};
		u &&
			Object.keys(u).forEach(function (d) {
				a.options[d] = u[d];
			});
		u && u.breakpoints && C();
		g || (g = ".rellax");
		k = "string" === typeof g ? document.querySelectorAll(g) : [g];
		if (0 < k.length) {
			a.elems = k;
			if (a.options.wrapper && !a.options.wrapper.nodeType)
				if ((k = document.querySelector(a.options.wrapper)))
					a.options.wrapper = k;
				else {
					console.warn(
						"Rellax: The wrapper you're trying to use doesn't exist."
					);
					return;
				}
			var F,
				B = function () {
					for (var f = 0; f < d.length; f++)
						a.elems[f].style.cssText = d[f].style;
					d = [];
					v = window.innerHeight;
					n = window.innerWidth;
					f = a.options.breakpoints;
					F =
						n < f[0]
							? "xs"
							: n >= f[0] && n < f[1]
							? "sm"
							: n >= f[1] && n < f[2]
							? "md"
							: "lg";
					H();
					for (f = 0; f < a.elems.length; f++) {
						var c = void 0,
							b = a.elems[f],
							e = b.getAttribute("data-rellax-percentage"),
							y = b.getAttribute("data-rellax-speed"),
							t = b.getAttribute("data-rellax-xs-speed"),
							g = b.getAttribute("data-rellax-mobile-speed"),
							h = b.getAttribute("data-rellax-tablet-speed"),
							k = b.getAttribute("data-rellax-desktop-speed"),
							l = b.getAttribute("data-rellax-vertical-speed"),
							m = b.getAttribute("data-rellax-horizontal-speed"),
							p = b.getAttribute(
								"data-rellax-vertical-scroll-axis"
							),
							q = b.getAttribute(
								"data-rellax-horizontal-scroll-axis"
							),
							u = b.getAttribute("data-rellax-zindex") || 0,
							x = b.getAttribute("data-rellax-min"),
							A = b.getAttribute("data-rellax-max"),
							C = b.getAttribute("data-rellax-min-x"),
							D = b.getAttribute("data-rellax-max-x"),
							E = b.getAttribute("data-rellax-min-y"),
							L = b.getAttribute("data-rellax-max-y"),
							r = !0;
						t || g || h || k
							? (c = { xs: t, sm: g, md: h, lg: k })
							: (r = !1);
						t = a.options.wrapper
							? a.options.wrapper.scrollTop
							: window.pageYOffset ||
							  document.documentElement.scrollTop ||
							  document.body.scrollTop;
						a.options.relativeToWrapper &&
							(t =
								(window.pageYOffset ||
									document.documentElement.scrollTop ||
									document.body.scrollTop) -
								a.options.wrapper.offsetTop);
						var z = a.options.vertical
								? e || a.options.center
									? t
									: 0
								: 0,
							I = a.options.horizontal
								? e || a.options.center
									? a.options.wrapper
										? a.options.wrapper.scrollLeft
										: window.pageXOffset ||
										  document.documentElement.scrollLeft ||
										  document.body.scrollLeft
									: 0
								: 0;
						t = z + b.getBoundingClientRect().top;
						g = b.clientHeight || b.offsetHeight || b.scrollHeight;
						h = I + b.getBoundingClientRect().left;
						k = b.clientWidth || b.offsetWidth || b.scrollWidth;
						z = e ? e : (z - t + v) / (g + v);
						e = e ? e : (I - h + n) / (k + n);
						a.options.center && (z = e = 0.5);
						c =
							r && null !== c[F]
								? Number(c[F])
								: y
								? y
								: a.options.speed;
						l = l ? l : a.options.verticalSpeed;
						m = m ? m : a.options.horizontalSpeed;
						p = p ? p : a.options.verticalScrollAxis;
						q = q ? q : a.options.horizontalScrollAxis;
						y = J(e, z, c, l, m);
						b = b.style.cssText;
						r = "";
						if ((e = /transform\s*:/i.exec(b)))
							(r = b.slice(e.index)),
								(r = (e = r.indexOf(";"))
									? " " + r.slice(11, e).replace(/\s/g, "")
									: " " + r.slice(11).replace(/\s/g, ""));
						d.push({
							baseX: y.x,
							baseY: y.y,
							top: t,
							left: h,
							height: g,
							width: k,
							speed: c,
							verticalSpeed: l,
							horizontalSpeed: m,
							verticalScrollAxis: p,
							horizontalScrollAxis: q,
							style: b,
							transform: r,
							zindex: u,
							min: x,
							max: A,
							minX: C,
							maxX: D,
							minY: E,
							maxY: L,
						});
					}
					K();
					w && (window.addEventListener("resize", B), (w = !1), G());
				},
				H = function () {
					var d = l,
						c = m;
					l = a.options.wrapper
						? a.options.wrapper.scrollTop
						: (
								document.documentElement ||
								document.body.parentNode ||
								document.body
						  ).scrollTop || window.pageYOffset;
					m = a.options.wrapper
						? a.options.wrapper.scrollLeft
						: (
								document.documentElement ||
								document.body.parentNode ||
								document.body
						  ).scrollLeft || window.pageXOffset;
					a.options.relativeToWrapper &&
						(l =
							((
								document.documentElement ||
								document.body.parentNode ||
								document.body
							).scrollTop || window.pageYOffset) -
							a.options.wrapper.offsetTop);
					return (d != l && a.options.vertical) ||
						(c != m && a.options.horizontal)
						? !0
						: !1;
				},
				J = function (d, c, b, e, g) {
					var f = {};
					d = 100 * (g ? g : b) * (1 - d);
					c = 100 * (e ? e : b) * (1 - c);
					f.x = a.options.round
						? Math.round(d)
						: Math.round(100 * d) / 100;
					f.y = a.options.round
						? Math.round(c)
						: Math.round(100 * c) / 100;
					return f;
				},
				h = function () {
					window.removeEventListener("resize", h);
					window.removeEventListener("orientationchange", h);
					(a.options.wrapper
						? a.options.wrapper
						: window
					).removeEventListener("scroll", h);
					(a.options.wrapper
						? a.options.wrapper
						: document
					).removeEventListener("touchmove", h);
					p = A(G);
				},
				G = function () {
					H() && !1 === w
						? (K(), (p = A(G)))
						: ((p = null),
						  window.addEventListener("resize", h),
						  window.addEventListener("orientationchange", h),
						  (a.options.wrapper
								? a.options.wrapper
								: window
						  ).addEventListener(
								"scroll",
								h,
								x ? { passive: !0 } : !1
						  ),
						  (a.options.wrapper
								? a.options.wrapper
								: document
						  ).addEventListener(
								"touchmove",
								h,
								x ? { passive: !0 } : !1
						  ));
				},
				K = function () {
					for (var f, c = 0; c < a.elems.length; c++) {
						var b = d[c].verticalScrollAxis.toLowerCase(),
							e = d[c].horizontalScrollAxis.toLowerCase();
						f = -1 != b.indexOf("x") ? l : 0;
						b = -1 != b.indexOf("y") ? l : 0;
						var g = -1 != e.indexOf("x") ? m : 0;
						e = -1 != e.indexOf("y") ? m : 0;
						f = J(
							(f + g - d[c].left + n) / (d[c].width + n),
							(b + e - d[c].top + v) / (d[c].height + v),
							d[c].speed,
							d[c].verticalSpeed,
							d[c].horizontalSpeed
						);
						e = f.y - d[c].baseY;
						b = f.x - d[c].baseX;
						null !== d[c].min &&
							(a.options.vertical &&
								!a.options.horizontal &&
								(e = e <= d[c].min ? d[c].min : e),
							a.options.horizontal &&
								!a.options.vertical &&
								(b = b <= d[c].min ? d[c].min : b));
						null != d[c].minY &&
							(e = e <= d[c].minY ? d[c].minY : e);
						null != d[c].minX &&
							(b = b <= d[c].minX ? d[c].minX : b);
						null !== d[c].max &&
							(a.options.vertical &&
								!a.options.horizontal &&
								(e = e >= d[c].max ? d[c].max : e),
							a.options.horizontal &&
								!a.options.vertical &&
								(b = b >= d[c].max ? d[c].max : b));
						null != d[c].maxY &&
							(e = e >= d[c].maxY ? d[c].maxY : e);
						null != d[c].maxX &&
							(b = b >= d[c].maxX ? d[c].maxX : b);
						a.elems[c].style[E] =
							"translate3d(" +
							(a.options.horizontal ? b : "0") +
							"px," +
							(a.options.vertical ? e : "0") +
							"px," +
							d[c].zindex +
							"px) " +
							d[c].transform;
					}
					a.options.callback(f);
				};
			a.destroy = function () {
				for (var f = 0; f < a.elems.length; f++)
					a.elems[f].style.cssText = d[f].style;
				w || (window.removeEventListener("resize", B), (w = !0));
				D(p);
				p = null;
			};
			B();
			a.refresh = B;
			return a;
		}
		console.warn(
			"Rellax: The elements you're trying to select don't exist."
		);
	};
	return q;
});

/*! ScrollMagic v2.0.8 | (c) 2020 Jan Paepke (@janpaepke) | license & info: http://scrollmagic.io */
!function(e,t){"function"==typeof define&&define.amd?define(t):"object"==typeof exports?module.exports=t():e.ScrollMagic=t()}(this,function(){"use strict";function _(){}_.version="2.0.8","undefined"!=typeof window&&window.addEventListener("mousewheel",void 0);var P="data-scrollmagic-pin-spacer";_.Controller=function(e){function t(){var e,t,n;v&&u&&(e=R.type.Array(u)?u:f.slice(0),u=!1,t=d,0!=(n=(d=l.scrollPos())-t)&&(h=0<n?"FORWARD":i),h===i&&e.reverse(),e.forEach(function(e,t){e.update(!0)}))}function r(){n=R.rAF(t)}var n,o,i="REVERSE",s="PAUSED",a=z.defaults,l=this,c=R.extend({},a,e),f=[],u=!1,d=0,h=s,p=!0,g=0,v=!0,m=function(){0<c.refreshInterval&&(o=window.setTimeout(E,c.refreshInterval))},w=function(){return c.vertical?R.get.scrollTop(c.container):R.get.scrollLeft(c.container)},y=function(){return c.vertical?R.get.height(c.container):R.get.width(c.container)},S=this._setScrollPos=function(e){c.vertical?p?window.scrollTo(R.get.scrollLeft(),e):c.container.scrollTop=e:p?window.scrollTo(e,R.get.scrollTop()):c.container.scrollLeft=e},b=function(e){"resize"==e.type&&(g=y(),h=s),!0!==u&&(u=!0,r())},E=function(){if(!p&&g!=y()){var t;try{t=new Event("resize",{bubbles:!1,cancelable:!1})}catch(e){(t=document.createEvent("Event")).initEvent("resize",!1,!1)}c.container.dispatchEvent(t)}f.forEach(function(e,t){e.refresh()}),m()};this._options=c;function x(e){if(e.length<=1)return e;var t=e.slice(0);return t.sort(function(e,t){return e.scrollOffset()>t.scrollOffset()?1:-1}),t}return this.addScene=function(e){if(R.type.Array(e))e.forEach(function(e,t){l.addScene(e)});else if(e instanceof _.Scene)if(e.controller()!==l)e.addTo(l);else if(!~f.indexOf(e))for(var t in f.push(e),f=x(f),e.on("shift.controller_sort",function(){f=x(f)}),c.globalSceneOptions)e[t]&&e[t].call(e,c.globalSceneOptions[t]);return l},this.removeScene=function(e){var t;return R.type.Array(e)?e.forEach(function(e,t){l.removeScene(e)}):-1<(t=f.indexOf(e))&&(e.off("shift.controller_sort"),f.splice(t,1),e.remove()),l},this.updateScene=function(e,n){return R.type.Array(e)?e.forEach(function(e,t){l.updateScene(e,n)}):n?e.update(!0):!0!==u&&e instanceof _.Scene&&(~(u=u||[]).indexOf(e)||u.push(e),u=x(u),r()),l},this.update=function(e){return b({type:"resize"}),e&&t(),l},this.scrollTo=function(e,t){if(R.type.Number(e))S.call(c.container,e,t);else if(e instanceof _.Scene)e.controller()===l&&l.scrollTo(e.scrollOffset(),t);else if(R.type.Function(e))S=e;else{var n=R.get.elements(e)[0];if(n){for(;n.parentNode.hasAttribute(P);)n=n.parentNode;var r=c.vertical?"top":"left",o=R.get.offset(c.container),i=R.get.offset(n);p||(o[r]-=l.scrollPos()),l.scrollTo(i[r]-o[r],t)}}return l},this.scrollPos=function(e){return arguments.length?(R.type.Function(e)&&(w=e),l):w.call(l)},this.info=function(e){var t={size:g,vertical:c.vertical,scrollPos:d,scrollDirection:h,container:c.container,isDocument:p};return arguments.length?void 0!==t[e]?t[e]:void 0:t},this.loglevel=function(e){return l},this.enabled=function(e){return arguments.length?(v!=e&&(v=!!e,l.updateScene(f,!0)),l):v},this.destroy=function(e){window.clearTimeout(o);for(var t=f.length;t--;)f[t].destroy(e);return c.container.removeEventListener("resize",b),c.container.removeEventListener("scroll",b),R.cAF(n),null},function(){for(var e in c)a.hasOwnProperty(e)||delete c[e];if(c.container=R.get.elements(c.container)[0],!c.container)throw"ScrollMagic.Controller init failed.";(p=c.container===window||c.container===document.body||!document.body.contains(c.container))&&(c.container=window),g=y(),c.container.addEventListener("resize",b),c.container.addEventListener("scroll",b);var t=parseInt(c.refreshInterval,10);c.refreshInterval=R.type.Number(t)?t:a.refreshInterval,m()}(),l};var z={defaults:{container:window,vertical:!0,globalSceneOptions:{},loglevel:2,refreshInterval:100}};_.Controller.addOption=function(e,t){z.defaults[e]=t},_.Controller.extend=function(e){var t=this;_.Controller=function(){return t.apply(this,arguments),this.$super=R.extend({},this),e.apply(this,arguments)||this},R.extend(_.Controller,t),_.Controller.prototype=t.prototype,_.Controller.prototype.constructor=_.Controller},_.Scene=function(e){var n,l,c="BEFORE",f="DURING",u="AFTER",r=D.defaults,d=this,h=R.extend({},r,e),p=c,g=0,a={start:0,end:0},v=0,o=!0,s={};this.on=function(e,o){return R.type.Function(o)&&(e=e.trim().split(" ")).forEach(function(e){var t=e.split("."),n=t[0],r=t[1];"*"!=n&&(s[n]||(s[n]=[]),s[n].push({namespace:r||"",callback:o}))}),d},this.off=function(e,i){return e&&(e=e.trim().split(" ")).forEach(function(e,t){var n=e.split("."),r=n[0],o=n[1]||"";("*"===r?Object.keys(s):[r]).forEach(function(e){for(var t=s[e]||[],n=t.length;n--;){var r=t[n];!r||o!==r.namespace&&"*"!==o||i&&i!=r.callback||t.splice(n,1)}t.length||delete s[e]})}),d},this.trigger=function(e,n){var t,r,o,i;return e&&(t=e.trim().split("."),r=t[0],o=t[1],(i=s[r])&&i.forEach(function(e,t){o&&o!==e.namespace||e.callback.call(d,new _.Event(r,e.namespace,d,n))})),d},d.on("change.internal",function(e){"loglevel"!==e.what&&"tweenChanges"!==e.what&&("triggerElement"===e.what?y():"reverse"===e.what&&d.update())}).on("shift.internal",function(e){t(),d.update()}),this.addTo=function(e){return e instanceof _.Controller&&l!=e&&(l&&l.removeScene(d),l=e,E(),i(!0),y(!0),t(),l.info("container").addEventListener("resize",S),e.addScene(d),d.trigger("add",{controller:l}),d.update()),d},this.enabled=function(e){return arguments.length?(o!=e&&(o=!!e,d.update(!0)),d):o},this.remove=function(){var e;return l&&(l.info("container").removeEventListener("resize",S),e=l,l=void 0,e.removeScene(d),d.trigger("remove")),d},this.destroy=function(e){return d.trigger("destroy",{reset:e}),d.remove(),d.off("*.*"),null},this.update=function(e){var t,n;return l&&(e?l.enabled()&&o?(t=l.info("scrollPos"),n=0<h.duration?(t-a.start)/(a.end-a.start):t>=a.start?1:0,d.trigger("update",{startPos:a.start,endPos:a.end,scrollPos:t}),d.progress(n)):m&&p===f&&T(!0):l.updateScene(d,!1)),d},this.refresh=function(){return i(),y(),d},this.progress=function(e){if(arguments.length){var t,n,r,o=!1,i=p,s=l?l.info("scrollDirection"):"PAUSED",a=h.reverse||g<=e;return 0===h.duration?(o=g!=e,p=0===(g=e<1&&a?0:1)?c:f):e<0&&p!==c&&a?(p=c,o=!(g=0)):0<=e&&e<1&&a?(g=e,p=f,o=!0):1<=e&&p!==u?(g=1,p=u,o=!0):p!==f||a||T(),o&&(t={progress:g,state:p,scrollDirection:s},r=function(e){d.trigger(e,t)},(n=p!=i)&&i!==f&&(r("enter"),r(i===c?"start":"end")),r("progress"),n&&p!==f&&(r(p===c?"start":"end"),r("leave"))),d}return g};var m,w,t=function(){a={start:v+h.offset},l&&h.triggerElement&&(a.start-=l.info("size")*h.triggerHook),a.end=a.start+h.duration},i=function(e){var t;!n||x(t="duration",n.call(d))&&!e&&(d.trigger("change",{what:t,newval:h[t]}),d.trigger("shift",{reason:t}))},y=function(e){var t=0,n=h.triggerElement;if(l&&(n||0<v)){if(n)if(n.parentNode){for(var r=l.info(),o=R.get.offset(r.container),i=r.vertical?"top":"left";n.parentNode.hasAttribute(P);)n=n.parentNode;var s=R.get.offset(n);r.isDocument||(o[i]-=l.scrollPos()),t=s[i]-o[i]}else d.triggerElement(void 0);var a=t!=v;v=t,a&&!e&&d.trigger("shift",{reason:"triggerElementPosition"})}},S=function(e){0<h.triggerHook&&d.trigger("shift",{reason:"containerResize"})},b=R.extend(D.validate,{duration:function(t){var e;if(R.type.String(t)&&t.match(/^(\.|\d)*\d+%$/)&&(e=parseFloat(t)/100,t=function(){return l?l.info("size")*e:0}),R.type.Function(t)){n=t;try{t=parseFloat(n.call(d))}catch(e){t=-1}}if(t=parseFloat(t),!R.type.Number(t)||t<0)throw n=n&&void 0,0;return t}}),E=function(e){(e=arguments.length?[e]:Object.keys(b)).forEach(function(t,e){var n;if(b[t])try{n=b[t](h[t])}catch(e){n=r[t]}finally{h[t]=n}})},x=function(e,t){var n=!1,r=h[e];return h[e]!=t&&(h[e]=t,E(e),n=r!=h[e]),n},z=function(t){d[t]||(d[t]=function(e){return arguments.length?("duration"===t&&(n=void 0),x(t,e)&&(d.trigger("change",{what:t,newval:h[t]}),~D.shifts.indexOf(t)&&d.trigger("shift",{reason:t})),d):h[t]})};this.controller=function(){return l},this.state=function(){return p},this.scrollOffset=function(){return a.start},this.triggerPosition=function(){var e=h.offset;return l&&(h.triggerElement?e+=v:e+=l.info("size")*d.triggerHook()),e},d.on("shift.internal",function(e){var t="duration"===e.reason;(p===u&&t||p===f&&0===h.duration)&&T(),t&&A()}).on("progress.internal",function(e){T()}).on("add.internal",function(e){A()}).on("destroy.internal",function(e){d.removePin(e.reset)});function C(){l&&m&&p===f&&!l.info("isDocument")&&T()}function F(){l&&m&&p===f&&((w.relSize.width||w.relSize.autoFullWidth)&&R.get.width(window)!=R.get.width(w.spacer.parentNode)||w.relSize.height&&R.get.height(window)!=R.get.height(w.spacer.parentNode))&&A()}function L(e){l&&m&&p===f&&!l.info("isDocument")&&(e.preventDefault(),l._setScrollPos(l.info("scrollPos")-((e.wheelDelta||e[l.info("vertical")?"wheelDeltaY":"wheelDeltaX"])/3||30*-e.detail)))}var T=function(e){var t,n,r,o,i,s;m&&l&&(t=l.info(),n=w.spacer.firstChild,e||p!==f?(r={position:w.inFlow?"relative":"absolute",top:0,left:0},o=R.css(n,"position")!=r.position,w.pushFollowers?0<h.duration&&(p===u&&0===parseFloat(R.css(w.spacer,"padding-top"))||p===c&&0===parseFloat(R.css(w.spacer,"padding-bottom")))&&(o=!0):r[t.vertical?"top":"left"]=h.duration*g,R.css(n,r),o&&A()):("fixed"!=R.css(n,"position")&&(R.css(n,{position:"fixed"}),A()),i=R.get.offset(w.spacer,!0),s=h.reverse||0===h.duration?t.scrollPos-a.start:Math.round(g*h.duration*10)/10,i[t.vertical?"top":"left"]+=s,R.css(w.spacer.firstChild,{top:i.top,left:i.left})))},A=function(){var e,t,n,r,o;m&&l&&w.inFlow&&(e=p===f,t=l.info("vertical"),n=w.spacer.firstChild,r=R.isMarginCollapseType(R.css(w.spacer,"display")),o={},w.relSize.width||w.relSize.autoFullWidth?e?R.css(m,{width:R.get.width(w.spacer)}):R.css(m,{width:"100%"}):(o["min-width"]=R.get.width(t?m:n,!0,!0),o.width=e?o["min-width"]:"auto"),w.relSize.height?e?R.css(m,{height:R.get.height(w.spacer)-(w.pushFollowers?h.duration:0)}):R.css(m,{height:"100%"}):(o["min-height"]=R.get.height(t?n:m,!0,!r),o.height=e?o["min-height"]:"auto"),w.pushFollowers&&(o["padding"+(t?"Top":"Left")]=h.duration*g,o["padding"+(t?"Bottom":"Right")]=h.duration*(1-g)),R.css(w.spacer,o))};this.setPin=function(e,t){if(t=R.extend({},{pushFollowers:!0,spacerClass:"scrollmagic-pin-spacer"},t),!(e=R.get.elements(e)[0]))return d;if("fixed"===R.css(e,"position"))return d;if(m){if(m===e)return d;d.removePin()}var n=(m=e).parentNode.style.display,r=["top","left","bottom","right","margin","marginLeft","marginRight","marginTop","marginBottom"];m.parentNode.style.display="none";var o="absolute"!=R.css(m,"position"),i=R.css(m,r.concat(["display"])),s=R.css(m,["width","height"]);m.parentNode.style.display=n,!o&&t.pushFollowers&&(t.pushFollowers=!1);var a,l=m.parentNode.insertBefore(document.createElement("div"),m),c=R.extend(i,{position:o?"relative":"absolute",boxSizing:"content-box",mozBoxSizing:"content-box",webkitBoxSizing:"content-box"});return o||R.extend(c,R.css(m,["width","height"])),R.css(l,c),l.setAttribute(P,""),R.addClass(l,t.spacerClass),w={spacer:l,relSize:{width:"%"===s.width.slice(-1),height:"%"===s.height.slice(-1),autoFullWidth:"auto"===s.width&&o&&R.isMarginCollapseType(i.display)},pushFollowers:t.pushFollowers,inFlow:o},m.___origStyle||(m.___origStyle={},a=m.style,r.concat(["width","height","position","boxSizing","mozBoxSizing","webkitBoxSizing"]).forEach(function(e){m.___origStyle[e]=a[e]||""})),w.relSize.width&&R.css(l,{width:s.width}),w.relSize.height&&R.css(l,{height:s.height}),l.appendChild(m),R.css(m,{position:o?"relative":"absolute",margin:"auto",top:"auto",left:"auto",bottom:"auto",right:"auto"}),(w.relSize.width||w.relSize.autoFullWidth)&&R.css(m,{boxSizing:"border-box",mozBoxSizing:"border-box",webkitBoxSizing:"border-box"}),window.addEventListener("scroll",C),window.addEventListener("resize",C),window.addEventListener("resize",F),m.addEventListener("mousewheel",L),m.addEventListener("DOMMouseScroll",L),T(),d},this.removePin=function(e){var t,n,r;return m&&(p===f&&T(!0),!e&&l||((t=w.spacer.firstChild).hasAttribute(P)&&(n=w.spacer.style,r={},["margin","marginLeft","marginRight","marginTop","marginBottom"].forEach(function(e){r[e]=n[e]||""}),R.css(t,r)),w.spacer.parentNode.insertBefore(t,w.spacer),w.spacer.parentNode.removeChild(w.spacer),m.parentNode.hasAttribute(P)||(R.css(m,m.___origStyle),delete m.___origStyle)),window.removeEventListener("scroll",C),window.removeEventListener("resize",C),window.removeEventListener("resize",F),m.removeEventListener("mousewheel",L),m.removeEventListener("DOMMouseScroll",L),m=void 0),d};var N,O=[];return d.on("destroy.internal",function(e){d.removeClassToggle(e.reset)}),this.setClassToggle=function(e,t){var n=R.get.elements(e);return 0!==n.length&&R.type.String(t)&&(0<O.length&&d.removeClassToggle(),N=t,O=n,d.on("enter.internal_class leave.internal_class",function(e){var n="enter"===e.type?R.addClass:R.removeClass;O.forEach(function(e,t){n(e,N)})})),d},this.removeClassToggle=function(e){return e&&O.forEach(function(e,t){R.removeClass(e,N)}),d.off("start.internal_class end.internal_class"),N=void 0,O=[],d},function(){for(var e in h)r.hasOwnProperty(e)||delete h[e];for(var t in r)z(t);E()}(),d};var D={defaults:{duration:0,offset:0,triggerElement:void 0,triggerHook:.5,reverse:!0,loglevel:2},validate:{offset:function(e){if(e=parseFloat(e),!R.type.Number(e))throw 0;return e},triggerElement:function(e){if(e=e||void 0){var t=R.get.elements(e)[0];if(!t||!t.parentNode)throw 0;e=t}return e},triggerHook:function(e){var t={onCenter:.5,onEnter:1,onLeave:0};if(R.type.Number(e))e=Math.max(0,Math.min(parseFloat(e),1));else{if(!(e in t))throw 0;e=t[e]}return e},reverse:function(e){return!!e}},shifts:["duration","offset","triggerHook"]};_.Scene.addOption=function(e,t,n,r){e in D.defaults||(D.defaults[e]=t,D.validate[e]=n,r&&D.shifts.push(e))},_.Scene.extend=function(e){var t=this;_.Scene=function(){return t.apply(this,arguments),this.$super=R.extend({},this),e.apply(this,arguments)||this},R.extend(_.Scene,t),_.Scene.prototype=t.prototype,_.Scene.prototype.constructor=_.Scene},_.Event=function(e,t,n,r){for(var o in r=r||{})this[o]=r[o];return this.type=e,this.target=this.currentTarget=n,this.namespace=t||"",this.timeStamp=this.timestamp=Date.now(),this};var R=_._util=function(s){function a(e){return parseFloat(e)||0}function l(e){return e.currentStyle?e.currentStyle:s.getComputedStyle(e)}function r(e,t,n,r){if((t=t===document?s:t)===s)r=!1;else if(!u.DomElement(t))return 0;e=e[0].toUpperCase()+e.substr(1).toLowerCase();var o,i=(n?t["offset"+e]||t["outer"+e]:t["client"+e]||t["inner"+e])||0;return n&&r&&(o=l(t),i+="Height"===e?a(o.marginTop)+a(o.marginBottom):a(o.marginLeft)+a(o.marginRight)),i}function c(e){return e.replace(/^[^a-z]+([a-z])/g,"$1").replace(/-([a-z])/g,function(e){return e[1].toUpperCase()})}var e={};e.extend=function(e){for(e=e||{},f=1;f<arguments.length;f++)if(arguments[f])for(var t in arguments[f])arguments[f].hasOwnProperty(t)&&(e[t]=arguments[f][t]);return e},e.isMarginCollapseType=function(e){return!!~["block","flex","list-item","table","-webkit-box"].indexOf(e)};for(var o=0,t=["ms","moz","webkit","o"],n=s.requestAnimationFrame,i=s.cancelAnimationFrame,f=0;!n&&f<4;++f)n=s[t[f]+"RequestAnimationFrame"],i=s[t[f]+"CancelAnimationFrame"]||s[t[f]+"CancelRequestAnimationFrame"];n=n||function(e){var t=(new Date).getTime(),n=Math.max(0,16-(t-o)),r=s.setTimeout(function(){e(t+n)},n);return o=t+n,r},i=i||function(e){s.clearTimeout(e)},e.rAF=n.bind(s),e.cAF=i.bind(s);var u=e.type=function(e){return Object.prototype.toString.call(e).replace(/^\[object (.+)\]$/,"$1").toLowerCase()};u.String=function(e){return"string"===u(e)},u.Function=function(e){return"function"===u(e)},u.Array=function(e){return Array.isArray(e)},u.Number=function(e){return!u.Array(e)&&0<=e-parseFloat(e)+1},u.DomElement=function(e){return"object"==typeof HTMLElement||"function"==typeof HTMLElement?e instanceof HTMLElement||e instanceof SVGElement:e&&"object"==typeof e&&null!==e&&1===e.nodeType&&"string"==typeof e.nodeName};var d=e.get={};return d.elements=function(e){var t=[];if(u.String(e))try{e=document.querySelectorAll(e)}catch(e){return t}if("nodelist"===u(e)||u.Array(e)||e instanceof NodeList)for(var n=0,r=t.length=e.length;n<r;n++){var o=e[n];t[n]=u.DomElement(o)?o:d.elements(o)}else!u.DomElement(e)&&e!==document&&e!==s||(t=[e]);return t},d.scrollTop=function(e){return e&&"number"==typeof e.scrollTop?e.scrollTop:s.pageYOffset||0},d.scrollLeft=function(e){return e&&"number"==typeof e.scrollLeft?e.scrollLeft:s.pageXOffset||0},d.width=function(e,t,n){return r("width",e,t,n)},d.height=function(e,t,n){return r("height",e,t,n)},d.offset=function(e,t){var n,r={top:0,left:0};return e&&e.getBoundingClientRect&&(n=e.getBoundingClientRect(),r.top=n.top,r.left=n.left,t||(r.top+=d.scrollTop(),r.left+=d.scrollLeft())),r},e.addClass=function(e,t){t&&(e.classList?e.classList.add(t):e.className+=" "+t)},e.removeClass=function(e,t){t&&(e.classList?e.classList.remove(t):e.className=e.className.replace(RegExp("(^|\\b)"+t.split(" ").join("|")+"(\\b|$)","gi")," "))},e.css=function(e,t){if(u.String(t))return l(e)[c(t)];if(u.Array(t)){var n={},r=l(e);return t.forEach(function(e,t){n[e]=r[c(e)]}),n}for(var o in t){var i=t[o];i==parseFloat(i)&&(i+="px"),e.style[c(o)]=i}},e}(window||{});return _});
/*!  ScrollMagic v2.0.8 | (c) 2020 Jan Paepke (@janpaepke) | license & info: http://scrollmagic.io */
!function(e,n){var r;"function"==typeof define&&define.amd?define(["ScrollMagic","gsap","TweenMax","TimelineMax"],n):"object"==typeof exports?(r=require("gsap/dist/gsap")||require("gsap"),n(require("scrollmagic"),r,TweenMax||r,TimelineMax||r)):n(e.ScrollMagic||e.jQuery&&e.jQuery.ScrollMagic,e.gsap,e.gsap||e.TweenMax||e.TweenLite,e.gsap||e.TimelineMax||e.TimelineLite)}(this,function(e,n,p,u){"use strict";var g=n&&3<=parseFloat(n.version);e.Scene.addOption("tweenChanges",!1,function(e){return!!e}),e.Scene.extend(function(){var o,i=this;i.on("progress.plugin_gsap",function(){s()}),i.on("destroy.plugin_gsap",function(e){i.removeTween(e.reset)});var s=function(){var e,n;o&&(e=i.progress(),n=i.state(),o.repeat&&-1===o.repeat()?"DURING"===n&&o.paused()?o.play():"DURING"===n||o.paused()||o.pause():e!=o.progress()&&(0===i.duration()?0<e?o.play():o.reverse():i.tweenChanges()&&o.tweenTo?o.tweenTo(e*o.duration()):o.progress(e).pause()))};i.setTween=function(e,n,r){var t,a;1<arguments.length&&(a="number"==typeof arguments[1],g?(a||(r=n),r.hasOwnProperty("duration")||(r.duration=a?n:1)):arguments.length<3&&(r=n,n=1),e=g?p.to(e,r):p.to(e,n,r));try{(t=u&&!g?new u({smoothChildTiming:!0}).add(e):e).pause()}catch(e){return i}return o&&i.removeTween(),o=t,e.repeat&&-1===e.repeat()&&(o.repeat(-1),o.yoyo(e.yoyo())),s(),i},i.removeTween=function(e){return o&&(e&&o.progress(0).pause(),o.kill(),o=void 0),i}})});
 /*! ScrollMagic v2.0.8 | (c) 2020 Jan Paepke (@janpaepke) | license & info: http://scrollmagic.io */
!function(e,i){"function"==typeof define&&define.amd?define(["ScrollMagic","velocity"],i):"object"==typeof exports?i(require("scrollmagic"),require("velocity")):i(e.ScrollMagic||e.jQuery&&e.jQuery.ScrollMagic,e.Velocity||e.jQuery&&e.jQuery.Velocity)}(this,function(e,y){"use strict";var v=0;e.Scene.extend(function(){var o,r,u,n,c=this,l=e._util,i=0;c.on("progress.plugin_velocity",function(){f()}),c.on("destroy.plugin_velocity",function(e){c.off("*.plugin_velocity"),c.removeVelocity(e.reset)});var s=function(e,i,t){l.type.Array(e)?e.forEach(function(e){s(e,i,t)}):(y.Utilities.data(e,n)||y.Utilities.data(e,n,{reverseProps:l.css(e,Object.keys(r))}),y(e,i,t),void 0!==t.queue&&y.Utilities.dequeue(e,t.queue))},a=function(e,i){var t;l.type.Array(e)?e.forEach(function(e){a(e,i)}):(t=y.Utilities.data(e,n))&&t.reverseProps&&(y(e,t.reverseProps,i),void 0!==i.queue&&y.Utilities.dequeue(e,i.queue))},f=function(){var e;!o||(e=c.progress())!=i&&(0===c.duration()&&(0<e?s(o,r,u):a(o,u)),i=e)};c.setVelocity=function(e,i,t){return o&&c.removeVelocity(),o=l.get.elements(e),r=i||{},n="ScrollMagic.animation.velocity["+v+++"]",void 0!==(u=t||{}).queue&&(u.queue=n+"_queue"),f(),c},c.removeVelocity=function(e){return o&&(void 0!==u.queue&&y(o,"stop",u.queue),e&&a(o,{duration:0}),o.forEach(function(e){y.Utilities.removeData(e,n)}),o=r=u=n=void 0),c}})});
/*! ScrollMagic v2.0.8  | (c) 2020 Jan Paepke (@janpaepke) | license & info: http://scrollmagic.io */
!(function (e, r) {
	"function" == typeof define && define.amd
		? define(["ScrollMagic"], r)
		: "object" == typeof exports
		? r(require("scrollmagic"))
		: r(e.ScrollMagic || (e.jQuery && e.jQuery.ScrollMagic));
})(this, function (i) {
	"use strict";
	var o = "0.85em",
		n = "9999",
		v = i._util,
		h = 0;
	i.Scene.extend(function () {
		var t,
			i = this;
		(i.addIndicators = function (e) {
			var r;
			return (
				t ||
					((r = {
						name: "",
						indent: 0,
						parent: void 0,
						colorStart: "green",
						colorEnd: "red",
						colorTrigger: "blue",
					}),
					(e = v.extend({}, r, e)),
					h++,
					(t = new s(i, e)),
					i.on("add.plugin_addIndicators", t.add),
					i.on("remove.plugin_addIndicators", t.remove),
					i.on("destroy.plugin_addIndicators", i.removeIndicators),
					i.controller() && t.add()),
				i
			);
		}),
			(i.removeIndicators = function () {
				return (
					t &&
						(t.remove(),
						this.off("*.plugin_addIndicators"),
						(t = void 0)),
					i
				);
			});
	}),
		i.Controller.addOption("addIndicators", !1),
		i.Controller.extend(function () {
			var c = this,
				e = c.info(),
				l = e.container,
				f = e.isDocument,
				m = e.vertical,
				h = { groups: [] };
			this._indicators = h;
			function r() {
				h.updateBoundsPositions();
			}
			function t() {
				h.updateTriggerGroupPositions();
			}
			return (
				l.addEventListener("resize", t),
				f ||
					(window.addEventListener("resize", t),
					window.addEventListener("scroll", t)),
				l.addEventListener("resize", r),
				l.addEventListener("scroll", r),
				(this._indicators.updateBoundsPositions = function (e) {
					for (
						var r,
							t,
							i,
							o = e
								? [
										v.extend({}, e.triggerGroup, {
											members: [e],
										}),
								  ]
								: h.groups,
							n = o.length,
							s = {},
							d = m ? "left" : "top",
							a = m ? "width" : "height",
							g = m
								? v.get.scrollLeft(l) + v.get.width(l) - 15
								: v.get.scrollTop(l) + v.get.height(l) - 15;
						n--;

					)
						for (
							r = (i = o[n]).members.length,
								t = v.get[a](i.element.firstChild);
							r--;

						)
							(s[d] = g - t), v.css(i.members[r].bounds, s);
				}),
				(this._indicators.updateTriggerGroupPositions = function (e) {
					for (
						var r,
							t,
							i,
							o,
							n = e ? [e] : h.groups,
							s = n.length,
							d = f ? document.body : l,
							a = f ? { top: 0, left: 0 } : v.get.offset(d, !0),
							g = m ? v.get.width(l) - 15 : v.get.height(l) - 15,
							p = m ? "width" : "height",
							u = m ? "Y" : "X";
						s--;

					)
						(t = (r = n[s]).element),
							(i = r.triggerHook * c.info("size")),
							(o =
								v.get[p](t.firstChild.firstChild) < i
									? "translate" + u + "(-100%)"
									: ""),
							v.css(t, {
								top:
									a.top +
									(m ? i : g - r.members[0].options.indent),
								left:
									a.left +
									(m ? g - r.members[0].options.indent : i),
							}),
							v.css(t.firstChild.firstChild, {
								"-ms-transform": o,
								"-webkit-transform": o,
								transform: o,
							});
				}),
				(this._indicators.updateTriggerGroupLabel = function (e) {
					var r =
							"trigger" +
							(1 < e.members.length
								? ""
								: " " + e.members[0].options.name),
						t = e.element.firstChild.firstChild;
					t.textContent !== r &&
						((t.textContent = r), m && h.updateBoundsPositions());
				}),
				(this.addScene = function (e) {
					this._options.addIndicators &&
						e instanceof i.Scene &&
						e.controller() === c &&
						e.addIndicators(),
						this.$super.addScene.apply(this, arguments);
				}),
				(this.destroy = function () {
					l.removeEventListener("resize", t),
						f ||
							(window.removeEventListener("resize", t),
							window.removeEventListener("scroll", t)),
						l.removeEventListener("resize", r),
						l.removeEventListener("scroll", r),
						this.$super.destroy.apply(this, arguments);
				}),
				c
			);
		});
	var s = function (o, n) {
			var s,
				d,
				a = this,
				t = b.bounds(),
				i = b.start(n.colorStart),
				g = b.end(n.colorEnd),
				p = n.parent && v.get.elements(n.parent)[0];
			(n.name = n.name || h),
				(i.firstChild.textContent += " " + n.name),
				(g.textContent += " " + n.name),
				t.appendChild(i),
				t.appendChild(g),
				(a.options = n),
				(a.bounds = t),
				(a.triggerGroup = void 0),
				(this.add = function () {
					(d = o.controller()), (s = d.info("vertical"));
					var e = d.info("isDocument");
					(p = p || (e ? document.body : d.info("container"))),
						e ||
							"static" !== v.css(p, "position") ||
							v.css(p, { position: "relative" }),
						o.on("change.plugin_addIndicators", u),
						o.on("shift.plugin_addIndicators", r),
						m(),
						l(),
						setTimeout(function () {
							d._indicators.updateBoundsPositions(a);
						}, 0);
				}),
				(this.remove = function () {
					var e;
					a.triggerGroup &&
						(o.off("change.plugin_addIndicators", u),
						o.off("shift.plugin_addIndicators", r),
						1 < a.triggerGroup.members.length
							? ((e = a.triggerGroup).members.splice(
									e.members.indexOf(a),
									1
							  ),
							  d._indicators.updateTriggerGroupLabel(e),
							  d._indicators.updateTriggerGroupPositions(e),
							  (a.triggerGroup = void 0))
							: f(),
						c());
				});
			var r = function () {
					l();
				},
				u = function (e) {
					"triggerHook" === e.what && m();
				},
				c = function () {
					t.parentNode.removeChild(t);
				},
				l = function () {
					var e;
					t.parentNode !== p &&
						((e = d.info("vertical")),
						v.css(i.firstChild, {
							"border-bottom-width": e ? 1 : 0,
							"border-right-width": e ? 0 : 1,
							bottom: e ? -1 : n.indent,
							right: e ? n.indent : -1,
							padding: e ? "0 8px" : "2px 4px",
						}),
						v.css(g, {
							"border-top-width": e ? 1 : 0,
							"border-left-width": e ? 0 : 1,
							top: e ? "100%" : "",
							right: e ? n.indent : "",
							bottom: e ? "" : n.indent,
							left: e ? "" : "100%",
							padding: e ? "0 8px" : "2px 4px",
						}),
						p.appendChild(t));
					var r = {};
					(r[s ? "top" : "left"] = o.triggerPosition()),
						(r[s ? "height" : "width"] = o.duration()),
						v.css(t, r),
						v.css(g, { display: 0 < o.duration() ? "" : "none" });
				},
				f = function () {
					d._indicators.groups.splice(
						d._indicators.groups.indexOf(a.triggerGroup),
						1
					),
						a.triggerGroup.element.parentNode.removeChild(
							a.triggerGroup.element
						),
						(a.triggerGroup = void 0);
				},
				m = function () {
					var e = o.triggerHook();
					if (
						!(
							a.triggerGroup &&
							Math.abs(a.triggerGroup.triggerHook - e) < 1e-4
						)
					) {
						for (
							var r, t = d._indicators.groups, i = t.length;
							i--;

						)
							if (
								((r = t[i]), Math.abs(r.triggerHook - e) < 1e-4)
							)
								return (
									a.triggerGroup &&
										(1 === a.triggerGroup.members.length
											? f()
											: (a.triggerGroup.members.splice(
													a.triggerGroup.members.indexOf(
														a
													),
													1
											  ),
											  d._indicators.updateTriggerGroupLabel(
													a.triggerGroup
											  ),
											  d._indicators.updateTriggerGroupPositions(
													a.triggerGroup
											  ))),
									r.members.push(a),
									(a.triggerGroup = r),
									void d._indicators.updateTriggerGroupLabel(
										r
									)
								);
						if (a.triggerGroup) {
							if (1 === a.triggerGroup.members.length)
								return (
									(a.triggerGroup.triggerHook = e),
									void d._indicators.updateTriggerGroupPositions(
										a.triggerGroup
									)
								);
							a.triggerGroup.members.splice(
								a.triggerGroup.members.indexOf(a),
								1
							),
								d._indicators.updateTriggerGroupLabel(
									a.triggerGroup
								),
								d._indicators.updateTriggerGroupPositions(
									a.triggerGroup
								),
								(a.triggerGroup = void 0);
						}
						!(function () {
							var e = b.trigger(n.colorTrigger),
								r = {};
							(r[s ? "right" : "bottom"] = 0),
								(r[
									s ? "border-top-width" : "border-left-width"
								] = 1),
								v.css(e.firstChild, r),
								v.css(e.firstChild.firstChild, {
									padding: s ? "0 8px 3px 8px" : "3px 4px",
								}),
								document.body.appendChild(e);
							var t = {
								triggerHook: o.triggerHook(),
								element: e,
								members: [a],
							};
							d._indicators.groups.push(t),
								(a.triggerGroup = t),
								d._indicators.updateTriggerGroupLabel(t),
								d._indicators.updateTriggerGroupPositions(t);
						})();
					}
				};
		},
		b = {
			start: function (e) {
				var r = document.createElement("div");
				(r.textContent = "start"),
					v.css(r, {
						position: "absolute",
						overflow: "visible",
						"border-width": 0,
						"border-style": "solid",
						color: e,
						"border-color": e,
					});
				var t = document.createElement("div");
				return (
					v.css(t, {
						position: "absolute",
						overflow: "visible",
						width: 0,
						height: 0,
					}),
					t.appendChild(r),
					t
				);
			},
			end: function (e) {
				var r = document.createElement("div");
				return (
					(r.textContent = "end"),
					v.css(r, {
						position: "absolute",
						overflow: "visible",
						"border-width": 0,
						"border-style": "solid",
						color: e,
						"border-color": e,
					}),
					r
				);
			},
			bounds: function () {
				var e = document.createElement("div");
				return (
					v.css(e, {
						position: "absolute",
						overflow: "visible",
						"white-space": "nowrap",
						"pointer-events": "none",
						"font-size": o,
					}),
					(e.style.zIndex = n),
					e
				);
			},
			trigger: function (e) {
				var r = document.createElement("div");
				(r.textContent = "trigger"), v.css(r, { position: "relative" });
				var t = document.createElement("div");
				v.css(t, {
					position: "absolute",
					overflow: "visible",
					"border-width": 0,
					"border-style": "solid",
					color: e,
					"border-color": e,
				}),
					t.appendChild(r);
				var i = document.createElement("div");
				return (
					v.css(i, {
						position: "fixed",
						overflow: "visible",
						"white-space": "nowrap",
						"pointer-events": "none",
						"font-size": o,
					}),
					(i.style.zIndex = n),
					i.appendChild(t),
					i
				);
			},
		};
});

/*! ScrollMagic v2.0.8 | (c) 2020 Jan Paepke (@janpaepke) | license & info: http://scrollmagic.io */
!function(e,i){"function"==typeof define&&define.amd?define(["ScrollMagic","jquery"],i):"object"==typeof exports?i(require("scrollmagic"),require("jquery")):i(e.ScrollMagic,e.jQuery)}(this,function(e,t){"use strict";e._util.get.elements=function(e){return t(e).toArray()},e._util.addClass=function(e,i){t(e).addClass(i)},e._util.removeClass=function(e,i){t(e).removeClass(i)},t.ScrollMagic=e});
/**
 * Swiper 8.3.2
 * Most modern mobile touch slider and framework with hardware accelerated transitions
 * https://swiperjs.com
 *
 * Copyright 2014-2022 Vladimir Kharlampidi
 *
 * Released under the MIT License
 *
 * Released on: July 26, 2022
 */

!(function (e, t) {
	"object" == typeof exports && "undefined" != typeof module
		? (module.exports = t())
		: "function" == typeof define && define.amd
		? define(t)
		: ((e =
				"undefined" != typeof globalThis
					? globalThis
					: e || self).Swiper = t());
})(this, function () {
	"use strict";
	function e(e) {
		return (
			null !== e &&
			"object" == typeof e &&
			"constructor" in e &&
			e.constructor === Object
		);
	}
	function t(s, a) {
		void 0 === s && (s = {}),
			void 0 === a && (a = {}),
			Object.keys(a).forEach((i) => {
				void 0 === s[i]
					? (s[i] = a[i])
					: e(a[i]) &&
					  e(s[i]) &&
					  Object.keys(a[i]).length > 0 &&
					  t(s[i], a[i]);
			});
	}
	const s = {
		body: {},
		addEventListener() {},
		removeEventListener() {},
		activeElement: { blur() {}, nodeName: "" },
		querySelector: () => null,
		querySelectorAll: () => [],
		getElementById: () => null,
		createEvent: () => ({ initEvent() {} }),
		createElement: () => ({
			children: [],
			childNodes: [],
			style: {},
			setAttribute() {},
			getElementsByTagName: () => [],
		}),
		createElementNS: () => ({}),
		importNode: () => null,
		location: {
			hash: "",
			host: "",
			hostname: "",
			href: "",
			origin: "",
			pathname: "",
			protocol: "",
			search: "",
		},
	};
	function a() {
		const e = "undefined" != typeof document ? document : {};
		return t(e, s), e;
	}
	const i = {
		document: s,
		navigator: { userAgent: "" },
		location: {
			hash: "",
			host: "",
			hostname: "",
			href: "",
			origin: "",
			pathname: "",
			protocol: "",
			search: "",
		},
		history: { replaceState() {}, pushState() {}, go() {}, back() {} },
		CustomEvent: function () {
			return this;
		},
		addEventListener() {},
		removeEventListener() {},
		getComputedStyle: () => ({ getPropertyValue: () => "" }),
		Image() {},
		Date() {},
		screen: {},
		setTimeout() {},
		clearTimeout() {},
		matchMedia: () => ({}),
		requestAnimationFrame: (e) =>
			"undefined" == typeof setTimeout ? (e(), null) : setTimeout(e, 0),
		cancelAnimationFrame(e) {
			"undefined" != typeof setTimeout && clearTimeout(e);
		},
	};
	function r() {
		const e = "undefined" != typeof window ? window : {};
		return t(e, i), e;
	}
	class n extends Array {
		constructor(e) {
			"number" == typeof e
				? super(e)
				: (super(...(e || [])),
				  (function (e) {
						const t = e.__proto__;
						Object.defineProperty(e, "__proto__", {
							get: () => t,
							set(e) {
								t.__proto__ = e;
							},
						});
				  })(this));
		}
	}
	function l(e) {
		void 0 === e && (e = []);
		const t = [];
		return (
			e.forEach((e) => {
				Array.isArray(e) ? t.push(...l(e)) : t.push(e);
			}),
			t
		);
	}
	function o(e, t) {
		return Array.prototype.filter.call(e, t);
	}
	function d(e, t) {
		const s = r(),
			i = a();
		let l = [];
		if (!t && e instanceof n) return e;
		if (!e) return new n(l);
		if ("string" == typeof e) {
			const s = e.trim();
			if (s.indexOf("<") >= 0 && s.indexOf(">") >= 0) {
				let e = "div";
				0 === s.indexOf("<li") && (e = "ul"),
					0 === s.indexOf("<tr") && (e = "tbody"),
					(0 !== s.indexOf("<td") && 0 !== s.indexOf("<th")) ||
						(e = "tr"),
					0 === s.indexOf("<tbody") && (e = "table"),
					0 === s.indexOf("<option") && (e = "select");
				const t = i.createElement(e);
				t.innerHTML = s;
				for (let e = 0; e < t.childNodes.length; e += 1)
					l.push(t.childNodes[e]);
			} else
				l = (function (e, t) {
					if ("string" != typeof e) return [e];
					const s = [],
						a = t.querySelectorAll(e);
					for (let e = 0; e < a.length; e += 1) s.push(a[e]);
					return s;
				})(e.trim(), t || i);
		} else if (e.nodeType || e === s || e === i) l.push(e);
		else if (Array.isArray(e)) {
			if (e instanceof n) return e;
			l = e;
		}
		return new n(
			(function (e) {
				const t = [];
				for (let s = 0; s < e.length; s += 1)
					-1 === t.indexOf(e[s]) && t.push(e[s]);
				return t;
			})(l)
		);
	}
	d.fn = n.prototype;
	const c = {
		addClass: function () {
			for (var e = arguments.length, t = new Array(e), s = 0; s < e; s++)
				t[s] = arguments[s];
			const a = l(t.map((e) => e.split(" ")));
			return (
				this.forEach((e) => {
					e.classList.add(...a);
				}),
				this
			);
		},
		removeClass: function () {
			for (var e = arguments.length, t = new Array(e), s = 0; s < e; s++)
				t[s] = arguments[s];
			const a = l(t.map((e) => e.split(" ")));
			return (
				this.forEach((e) => {
					e.classList.remove(...a);
				}),
				this
			);
		},
		hasClass: function () {
			for (var e = arguments.length, t = new Array(e), s = 0; s < e; s++)
				t[s] = arguments[s];
			const a = l(t.map((e) => e.split(" ")));
			return (
				o(
					this,
					(e) => a.filter((t) => e.classList.contains(t)).length > 0
				).length > 0
			);
		},
		toggleClass: function () {
			for (var e = arguments.length, t = new Array(e), s = 0; s < e; s++)
				t[s] = arguments[s];
			const a = l(t.map((e) => e.split(" ")));
			this.forEach((e) => {
				a.forEach((t) => {
					e.classList.toggle(t);
				});
			});
		},
		attr: function (e, t) {
			if (1 === arguments.length && "string" == typeof e)
				return this[0] ? this[0].getAttribute(e) : void 0;
			for (let s = 0; s < this.length; s += 1)
				if (2 === arguments.length) this[s].setAttribute(e, t);
				else
					for (const t in e)
						(this[s][t] = e[t]), this[s].setAttribute(t, e[t]);
			return this;
		},
		removeAttr: function (e) {
			for (let t = 0; t < this.length; t += 1) this[t].removeAttribute(e);
			return this;
		},
		transform: function (e) {
			for (let t = 0; t < this.length; t += 1)
				this[t].style.transform = e;
			return this;
		},
		transition: function (e) {
			for (let t = 0; t < this.length; t += 1)
				this[t].style.transitionDuration =
					"string" != typeof e ? `${e}ms` : e;
			return this;
		},
		on: function () {
			for (var e = arguments.length, t = new Array(e), s = 0; s < e; s++)
				t[s] = arguments[s];
			let [a, i, r, n] = t;
			function l(e) {
				const t = e.target;
				if (!t) return;
				const s = e.target.dom7EventData || [];
				if ((s.indexOf(e) < 0 && s.unshift(e), d(t).is(i)))
					r.apply(t, s);
				else {
					const e = d(t).parents();
					for (let t = 0; t < e.length; t += 1)
						d(e[t]).is(i) && r.apply(e[t], s);
				}
			}
			function o(e) {
				const t = (e && e.target && e.target.dom7EventData) || [];
				t.indexOf(e) < 0 && t.unshift(e), r.apply(this, t);
			}
			"function" == typeof t[1] && (([a, r, n] = t), (i = void 0)),
				n || (n = !1);
			const c = a.split(" ");
			let p;
			for (let e = 0; e < this.length; e += 1) {
				const t = this[e];
				if (i)
					for (p = 0; p < c.length; p += 1) {
						const e = c[p];
						t.dom7LiveListeners || (t.dom7LiveListeners = {}),
							t.dom7LiveListeners[e] ||
								(t.dom7LiveListeners[e] = []),
							t.dom7LiveListeners[e].push({
								listener: r,
								proxyListener: l,
							}),
							t.addEventListener(e, l, n);
					}
				else
					for (p = 0; p < c.length; p += 1) {
						const e = c[p];
						t.dom7Listeners || (t.dom7Listeners = {}),
							t.dom7Listeners[e] || (t.dom7Listeners[e] = []),
							t.dom7Listeners[e].push({
								listener: r,
								proxyListener: o,
							}),
							t.addEventListener(e, o, n);
					}
			}
			return this;
		},
		off: function () {
			for (var e = arguments.length, t = new Array(e), s = 0; s < e; s++)
				t[s] = arguments[s];
			let [a, i, r, n] = t;
			"function" == typeof t[1] && (([a, r, n] = t), (i = void 0)),
				n || (n = !1);
			const l = a.split(" ");
			for (let e = 0; e < l.length; e += 1) {
				const t = l[e];
				for (let e = 0; e < this.length; e += 1) {
					const s = this[e];
					let a;
					if (
						(!i && s.dom7Listeners
							? (a = s.dom7Listeners[t])
							: i &&
							  s.dom7LiveListeners &&
							  (a = s.dom7LiveListeners[t]),
						a && a.length)
					)
						for (let e = a.length - 1; e >= 0; e -= 1) {
							const i = a[e];
							(r && i.listener === r) ||
							(r &&
								i.listener &&
								i.listener.dom7proxy &&
								i.listener.dom7proxy === r)
								? (s.removeEventListener(t, i.proxyListener, n),
								  a.splice(e, 1))
								: r ||
								  (s.removeEventListener(t, i.proxyListener, n),
								  a.splice(e, 1));
						}
				}
			}
			return this;
		},
		trigger: function () {
			const e = r();
			for (var t = arguments.length, s = new Array(t), a = 0; a < t; a++)
				s[a] = arguments[a];
			const i = s[0].split(" "),
				n = s[1];
			for (let t = 0; t < i.length; t += 1) {
				const a = i[t];
				for (let t = 0; t < this.length; t += 1) {
					const i = this[t];
					if (e.CustomEvent) {
						const t = new e.CustomEvent(a, {
							detail: n,
							bubbles: !0,
							cancelable: !0,
						});
						(i.dom7EventData = s.filter((e, t) => t > 0)),
							i.dispatchEvent(t),
							(i.dom7EventData = []),
							delete i.dom7EventData;
					}
				}
			}
			return this;
		},
		transitionEnd: function (e) {
			const t = this;
			return (
				e &&
					t.on("transitionend", function s(a) {
						a.target === this &&
							(e.call(this, a), t.off("transitionend", s));
					}),
				this
			);
		},
		outerWidth: function (e) {
			if (this.length > 0) {
				if (e) {
					const e = this.styles();
					return (
						this[0].offsetWidth +
						parseFloat(e.getPropertyValue("margin-right")) +
						parseFloat(e.getPropertyValue("margin-left"))
					);
				}
				return this[0].offsetWidth;
			}
			return null;
		},
		outerHeight: function (e) {
			if (this.length > 0) {
				if (e) {
					const e = this.styles();
					return (
						this[0].offsetHeight +
						parseFloat(e.getPropertyValue("margin-top")) +
						parseFloat(e.getPropertyValue("margin-bottom"))
					);
				}
				return this[0].offsetHeight;
			}
			return null;
		},
		styles: function () {
			const e = r();
			return this[0] ? e.getComputedStyle(this[0], null) : {};
		},
		offset: function () {
			if (this.length > 0) {
				const e = r(),
					t = a(),
					s = this[0],
					i = s.getBoundingClientRect(),
					n = t.body,
					l = s.clientTop || n.clientTop || 0,
					o = s.clientLeft || n.clientLeft || 0,
					d = s === e ? e.scrollY : s.scrollTop,
					c = s === e ? e.scrollX : s.scrollLeft;
				return { top: i.top + d - l, left: i.left + c - o };
			}
			return null;
		},
		css: function (e, t) {
			const s = r();
			let a;
			if (1 === arguments.length) {
				if ("string" != typeof e) {
					for (a = 0; a < this.length; a += 1)
						for (const t in e) this[a].style[t] = e[t];
					return this;
				}
				if (this[0])
					return s
						.getComputedStyle(this[0], null)
						.getPropertyValue(e);
			}
			if (2 === arguments.length && "string" == typeof e) {
				for (a = 0; a < this.length; a += 1) this[a].style[e] = t;
				return this;
			}
			return this;
		},
		each: function (e) {
			return e
				? (this.forEach((t, s) => {
						e.apply(t, [t, s]);
				  }),
				  this)
				: this;
		},
		html: function (e) {
			if (void 0 === e) return this[0] ? this[0].innerHTML : null;
			for (let t = 0; t < this.length; t += 1) this[t].innerHTML = e;
			return this;
		},
		text: function (e) {
			if (void 0 === e)
				return this[0] ? this[0].textContent.trim() : null;
			for (let t = 0; t < this.length; t += 1) this[t].textContent = e;
			return this;
		},
		is: function (e) {
			const t = r(),
				s = a(),
				i = this[0];
			let l, o;
			if (!i || void 0 === e) return !1;
			if ("string" == typeof e) {
				if (i.matches) return i.matches(e);
				if (i.webkitMatchesSelector) return i.webkitMatchesSelector(e);
				if (i.msMatchesSelector) return i.msMatchesSelector(e);
				for (l = d(e), o = 0; o < l.length; o += 1)
					if (l[o] === i) return !0;
				return !1;
			}
			if (e === s) return i === s;
			if (e === t) return i === t;
			if (e.nodeType || e instanceof n) {
				for (l = e.nodeType ? [e] : e, o = 0; o < l.length; o += 1)
					if (l[o] === i) return !0;
				return !1;
			}
			return !1;
		},
		index: function () {
			let e,
				t = this[0];
			if (t) {
				for (e = 0; null !== (t = t.previousSibling); )
					1 === t.nodeType && (e += 1);
				return e;
			}
		},
		eq: function (e) {
			if (void 0 === e) return this;
			const t = this.length;
			if (e > t - 1) return d([]);
			if (e < 0) {
				const s = t + e;
				return d(s < 0 ? [] : [this[s]]);
			}
			return d([this[e]]);
		},
		append: function () {
			let e;
			const t = a();
			for (let s = 0; s < arguments.length; s += 1) {
				e = s < 0 || arguments.length <= s ? void 0 : arguments[s];
				for (let s = 0; s < this.length; s += 1)
					if ("string" == typeof e) {
						const a = t.createElement("div");
						for (a.innerHTML = e; a.firstChild; )
							this[s].appendChild(a.firstChild);
					} else if (e instanceof n)
						for (let t = 0; t < e.length; t += 1)
							this[s].appendChild(e[t]);
					else this[s].appendChild(e);
			}
			return this;
		},
		prepend: function (e) {
			const t = a();
			let s, i;
			for (s = 0; s < this.length; s += 1)
				if ("string" == typeof e) {
					const a = t.createElement("div");
					for (
						a.innerHTML = e, i = a.childNodes.length - 1;
						i >= 0;
						i -= 1
					)
						this[s].insertBefore(
							a.childNodes[i],
							this[s].childNodes[0]
						);
				} else if (e instanceof n)
					for (i = 0; i < e.length; i += 1)
						this[s].insertBefore(e[i], this[s].childNodes[0]);
				else this[s].insertBefore(e, this[s].childNodes[0]);
			return this;
		},
		next: function (e) {
			return this.length > 0
				? e
					? this[0].nextElementSibling &&
					  d(this[0].nextElementSibling).is(e)
						? d([this[0].nextElementSibling])
						: d([])
					: this[0].nextElementSibling
					? d([this[0].nextElementSibling])
					: d([])
				: d([]);
		},
		nextAll: function (e) {
			const t = [];
			let s = this[0];
			if (!s) return d([]);
			for (; s.nextElementSibling; ) {
				const a = s.nextElementSibling;
				e ? d(a).is(e) && t.push(a) : t.push(a), (s = a);
			}
			return d(t);
		},
		prev: function (e) {
			if (this.length > 0) {
				const t = this[0];
				return e
					? t.previousElementSibling &&
					  d(t.previousElementSibling).is(e)
						? d([t.previousElementSibling])
						: d([])
					: t.previousElementSibling
					? d([t.previousElementSibling])
					: d([]);
			}
			return d([]);
		},
		prevAll: function (e) {
			const t = [];
			let s = this[0];
			if (!s) return d([]);
			for (; s.previousElementSibling; ) {
				const a = s.previousElementSibling;
				e ? d(a).is(e) && t.push(a) : t.push(a), (s = a);
			}
			return d(t);
		},
		parent: function (e) {
			const t = [];
			for (let s = 0; s < this.length; s += 1)
				null !== this[s].parentNode &&
					(e
						? d(this[s].parentNode).is(e) &&
						  t.push(this[s].parentNode)
						: t.push(this[s].parentNode));
			return d(t);
		},
		parents: function (e) {
			const t = [];
			for (let s = 0; s < this.length; s += 1) {
				let a = this[s].parentNode;
				for (; a; )
					e ? d(a).is(e) && t.push(a) : t.push(a), (a = a.parentNode);
			}
			return d(t);
		},
		closest: function (e) {
			let t = this;
			return void 0 === e
				? d([])
				: (t.is(e) || (t = t.parents(e).eq(0)), t);
		},
		find: function (e) {
			const t = [];
			for (let s = 0; s < this.length; s += 1) {
				const a = this[s].querySelectorAll(e);
				for (let e = 0; e < a.length; e += 1) t.push(a[e]);
			}
			return d(t);
		},
		children: function (e) {
			const t = [];
			for (let s = 0; s < this.length; s += 1) {
				const a = this[s].children;
				for (let s = 0; s < a.length; s += 1)
					(e && !d(a[s]).is(e)) || t.push(a[s]);
			}
			return d(t);
		},
		filter: function (e) {
			return d(o(this, e));
		},
		remove: function () {
			for (let e = 0; e < this.length; e += 1)
				this[e].parentNode && this[e].parentNode.removeChild(this[e]);
			return this;
		},
	};
	function p(e, t) {
		return void 0 === t && (t = 0), setTimeout(e, t);
	}
	function u() {
		return Date.now();
	}
	function h(e, t) {
		void 0 === t && (t = "x");
		const s = r();
		let a, i, n;
		const l = (function (e) {
			const t = r();
			let s;
			return (
				t.getComputedStyle && (s = t.getComputedStyle(e, null)),
				!s && e.currentStyle && (s = e.currentStyle),
				s || (s = e.style),
				s
			);
		})(e);
		return (
			s.WebKitCSSMatrix
				? ((i = l.transform || l.webkitTransform),
				  i.split(",").length > 6 &&
						(i = i
							.split(", ")
							.map((e) => e.replace(",", "."))
							.join(", ")),
				  (n = new s.WebKitCSSMatrix("none" === i ? "" : i)))
				: ((n =
						l.MozTransform ||
						l.OTransform ||
						l.MsTransform ||
						l.msTransform ||
						l.transform ||
						l
							.getPropertyValue("transform")
							.replace("translate(", "matrix(1, 0, 0, 1,")),
				  (a = n.toString().split(","))),
			"x" === t &&
				(i = s.WebKitCSSMatrix
					? n.m41
					: 16 === a.length
					? parseFloat(a[12])
					: parseFloat(a[4])),
			"y" === t &&
				(i = s.WebKitCSSMatrix
					? n.m42
					: 16 === a.length
					? parseFloat(a[13])
					: parseFloat(a[5])),
			i || 0
		);
	}
	function m(e) {
		return (
			"object" == typeof e &&
			null !== e &&
			e.constructor &&
			"Object" === Object.prototype.toString.call(e).slice(8, -1)
		);
	}
	function f(e) {
		return "undefined" != typeof window && void 0 !== window.HTMLElement
			? e instanceof HTMLElement
			: e && (1 === e.nodeType || 11 === e.nodeType);
	}
	function g() {
		const e = Object(arguments.length <= 0 ? void 0 : arguments[0]),
			t = ["__proto__", "constructor", "prototype"];
		for (let s = 1; s < arguments.length; s += 1) {
			const a = s < 0 || arguments.length <= s ? void 0 : arguments[s];
			if (null != a && !f(a)) {
				const s = Object.keys(Object(a)).filter(
					(e) => t.indexOf(e) < 0
				);
				for (let t = 0, i = s.length; t < i; t += 1) {
					const i = s[t],
						r = Object.getOwnPropertyDescriptor(a, i);
					void 0 !== r &&
						r.enumerable &&
						(m(e[i]) && m(a[i])
							? a[i].__swiper__
								? (e[i] = a[i])
								: g(e[i], a[i])
							: !m(e[i]) && m(a[i])
							? ((e[i] = {}),
							  a[i].__swiper__ ? (e[i] = a[i]) : g(e[i], a[i]))
							: (e[i] = a[i]));
				}
			}
		}
		return e;
	}
	function v(e, t, s) {
		e.style.setProperty(t, s);
	}
	function w(e) {
		let { swiper: t, targetPosition: s, side: a } = e;
		const i = r(),
			n = -t.translate;
		let l,
			o = null;
		const d = t.params.speed;
		(t.wrapperEl.style.scrollSnapType = "none"),
			i.cancelAnimationFrame(t.cssModeFrameID);
		const c = s > n ? "next" : "prev",
			p = (e, t) => ("next" === c && e >= t) || ("prev" === c && e <= t),
			u = () => {
				(l = new Date().getTime()), null === o && (o = l);
				const e = Math.max(Math.min((l - o) / d, 1), 0),
					r = 0.5 - Math.cos(e * Math.PI) / 2;
				let c = n + r * (s - n);
				if (
					(p(c, s) && (c = s),
					t.wrapperEl.scrollTo({ [a]: c }),
					p(c, s))
				)
					return (
						(t.wrapperEl.style.overflow = "hidden"),
						(t.wrapperEl.style.scrollSnapType = ""),
						setTimeout(() => {
							(t.wrapperEl.style.overflow = ""),
								t.wrapperEl.scrollTo({ [a]: c });
						}),
						void i.cancelAnimationFrame(t.cssModeFrameID)
					);
				t.cssModeFrameID = i.requestAnimationFrame(u);
			};
		u();
	}
	let b, x, y;
	function E() {
		return (
			b ||
				(b = (function () {
					const e = r(),
						t = a();
					return {
						smoothScroll:
							t.documentElement &&
							"scrollBehavior" in t.documentElement.style,
						touch: !!(
							"ontouchstart" in e ||
							(e.DocumentTouch && t instanceof e.DocumentTouch)
						),
						passiveListener: (function () {
							let t = !1;
							try {
								const s = Object.defineProperty({}, "passive", {
									get() {
										t = !0;
									},
								});
								e.addEventListener(
									"testPassiveListener",
									null,
									s
								);
							} catch (e) {}
							return t;
						})(),
						gestures: "ongesturestart" in e,
					};
				})()),
			b
		);
	}
	function C(e) {
		return (
			void 0 === e && (e = {}),
			x ||
				(x = (function (e) {
					let { userAgent: t } = void 0 === e ? {} : e;
					const s = E(),
						a = r(),
						i = a.navigator.platform,
						n = t || a.navigator.userAgent,
						l = { ios: !1, android: !1 },
						o = a.screen.width,
						d = a.screen.height,
						c = n.match(/(Android);?[\s\/]+([\d.]+)?/);
					let p = n.match(/(iPad).*OS\s([\d_]+)/);
					const u = n.match(/(iPod)(.*OS\s([\d_]+))?/),
						h = !p && n.match(/(iPhone\sOS|iOS)\s([\d_]+)/),
						m = "Win32" === i;
					let f = "MacIntel" === i;
					return (
						!p &&
							f &&
							s.touch &&
							[
								"1024x1366",
								"1366x1024",
								"834x1194",
								"1194x834",
								"834x1112",
								"1112x834",
								"768x1024",
								"1024x768",
								"820x1180",
								"1180x820",
								"810x1080",
								"1080x810",
							].indexOf(`${o}x${d}`) >= 0 &&
							((p = n.match(/(Version)\/([\d.]+)/)),
							p || (p = [0, 1, "13_0_0"]),
							(f = !1)),
						c && !m && ((l.os = "android"), (l.android = !0)),
						(p || h || u) && ((l.os = "ios"), (l.ios = !0)),
						l
					);
				})(e)),
			x
		);
	}
	function T() {
		return (
			y ||
				(y = (function () {
					const e = r();
					return {
						isSafari: (function () {
							const t = e.navigator.userAgent.toLowerCase();
							return (
								t.indexOf("safari") >= 0 &&
								t.indexOf("chrome") < 0 &&
								t.indexOf("android") < 0
							);
						})(),
						isWebView:
							/(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(
								e.navigator.userAgent
							),
					};
				})()),
			y
		);
	}
	Object.keys(c).forEach((e) => {
		Object.defineProperty(d.fn, e, { value: c[e], writable: !0 });
	});
	var $ = {
		on(e, t, s) {
			const a = this;
			if (!a.eventsListeners || a.destroyed) return a;
			if ("function" != typeof t) return a;
			const i = s ? "unshift" : "push";
			return (
				e.split(" ").forEach((e) => {
					a.eventsListeners[e] || (a.eventsListeners[e] = []),
						a.eventsListeners[e][i](t);
				}),
				a
			);
		},
		once(e, t, s) {
			const a = this;
			if (!a.eventsListeners || a.destroyed) return a;
			if ("function" != typeof t) return a;
			function i() {
				a.off(e, i), i.__emitterProxy && delete i.__emitterProxy;
				for (
					var s = arguments.length, r = new Array(s), n = 0;
					n < s;
					n++
				)
					r[n] = arguments[n];
				t.apply(a, r);
			}
			return (i.__emitterProxy = t), a.on(e, i, s);
		},
		onAny(e, t) {
			const s = this;
			if (!s.eventsListeners || s.destroyed) return s;
			if ("function" != typeof e) return s;
			const a = t ? "unshift" : "push";
			return (
				s.eventsAnyListeners.indexOf(e) < 0 &&
					s.eventsAnyListeners[a](e),
				s
			);
		},
		offAny(e) {
			const t = this;
			if (!t.eventsListeners || t.destroyed) return t;
			if (!t.eventsAnyListeners) return t;
			const s = t.eventsAnyListeners.indexOf(e);
			return s >= 0 && t.eventsAnyListeners.splice(s, 1), t;
		},
		off(e, t) {
			const s = this;
			return !s.eventsListeners || s.destroyed
				? s
				: s.eventsListeners
				? (e.split(" ").forEach((e) => {
						void 0 === t
							? (s.eventsListeners[e] = [])
							: s.eventsListeners[e] &&
							  s.eventsListeners[e].forEach((a, i) => {
									(a === t ||
										(a.__emitterProxy &&
											a.__emitterProxy === t)) &&
										s.eventsListeners[e].splice(i, 1);
							  });
				  }),
				  s)
				: s;
		},
		emit() {
			const e = this;
			if (!e.eventsListeners || e.destroyed) return e;
			if (!e.eventsListeners) return e;
			let t, s, a;
			for (var i = arguments.length, r = new Array(i), n = 0; n < i; n++)
				r[n] = arguments[n];
			"string" == typeof r[0] || Array.isArray(r[0])
				? ((t = r[0]), (s = r.slice(1, r.length)), (a = e))
				: ((t = r[0].events), (s = r[0].data), (a = r[0].context || e)),
				s.unshift(a);
			return (
				(Array.isArray(t) ? t : t.split(" ")).forEach((t) => {
					e.eventsAnyListeners &&
						e.eventsAnyListeners.length &&
						e.eventsAnyListeners.forEach((e) => {
							e.apply(a, [t, ...s]);
						}),
						e.eventsListeners &&
							e.eventsListeners[t] &&
							e.eventsListeners[t].forEach((e) => {
								e.apply(a, s);
							});
				}),
				e
			);
		},
	};
	var S = {
		updateSize: function () {
			const e = this;
			let t, s;
			const a = e.$el;
			(t =
				void 0 !== e.params.width && null !== e.params.width
					? e.params.width
					: a[0].clientWidth),
				(s =
					void 0 !== e.params.height && null !== e.params.height
						? e.params.height
						: a[0].clientHeight),
				(0 === t && e.isHorizontal()) ||
					(0 === s && e.isVertical()) ||
					((t =
						t -
						parseInt(a.css("padding-left") || 0, 10) -
						parseInt(a.css("padding-right") || 0, 10)),
					(s =
						s -
						parseInt(a.css("padding-top") || 0, 10) -
						parseInt(a.css("padding-bottom") || 0, 10)),
					Number.isNaN(t) && (t = 0),
					Number.isNaN(s) && (s = 0),
					Object.assign(e, {
						width: t,
						height: s,
						size: e.isHorizontal() ? t : s,
					}));
		},
		updateSlides: function () {
			const e = this;
			function t(t) {
				return e.isHorizontal()
					? t
					: {
							width: "height",
							"margin-top": "margin-left",
							"margin-bottom ": "margin-right",
							"margin-left": "margin-top",
							"margin-right": "margin-bottom",
							"padding-left": "padding-top",
							"padding-right": "padding-bottom",
							marginRight: "marginBottom",
					  }[t];
			}
			function s(e, s) {
				return parseFloat(e.getPropertyValue(t(s)) || 0);
			}
			const a = e.params,
				{ $wrapperEl: i, size: r, rtlTranslate: n, wrongRTL: l } = e,
				o = e.virtual && a.virtual.enabled,
				d = o ? e.virtual.slides.length : e.slides.length,
				c = i.children(`.${e.params.slideClass}`),
				p = o ? e.virtual.slides.length : c.length;
			let u = [];
			const h = [],
				m = [];
			let f = a.slidesOffsetBefore;
			"function" == typeof f && (f = a.slidesOffsetBefore.call(e));
			let g = a.slidesOffsetAfter;
			"function" == typeof g && (g = a.slidesOffsetAfter.call(e));
			const w = e.snapGrid.length,
				b = e.slidesGrid.length;
			let x = a.spaceBetween,
				y = -f,
				E = 0,
				C = 0;
			if (void 0 === r) return;
			"string" == typeof x &&
				x.indexOf("%") >= 0 &&
				(x = (parseFloat(x.replace("%", "")) / 100) * r),
				(e.virtualSize = -x),
				n
					? c.css({ marginLeft: "", marginBottom: "", marginTop: "" })
					: c.css({
							marginRight: "",
							marginBottom: "",
							marginTop: "",
					  }),
				a.centeredSlides &&
					a.cssMode &&
					(v(e.wrapperEl, "--swiper-centered-offset-before", ""),
					v(e.wrapperEl, "--swiper-centered-offset-after", ""));
			const T = a.grid && a.grid.rows > 1 && e.grid;
			let $;
			T && e.grid.initSlides(p);
			const S =
				"auto" === a.slidesPerView &&
				a.breakpoints &&
				Object.keys(a.breakpoints).filter(
					(e) => void 0 !== a.breakpoints[e].slidesPerView
				).length > 0;
			for (let i = 0; i < p; i += 1) {
				$ = 0;
				const n = c.eq(i);
				if (
					(T && e.grid.updateSlide(i, n, p, t),
					"none" !== n.css("display"))
				) {
					if ("auto" === a.slidesPerView) {
						S && (c[i].style[t("width")] = "");
						const r = getComputedStyle(n[0]),
							l = n[0].style.transform,
							o = n[0].style.webkitTransform;
						if (
							(l && (n[0].style.transform = "none"),
							o && (n[0].style.webkitTransform = "none"),
							a.roundLengths)
						)
							$ = e.isHorizontal()
								? n.outerWidth(!0)
								: n.outerHeight(!0);
						else {
							const e = s(r, "width"),
								t = s(r, "padding-left"),
								a = s(r, "padding-right"),
								i = s(r, "margin-left"),
								l = s(r, "margin-right"),
								o = r.getPropertyValue("box-sizing");
							if (o && "border-box" === o) $ = e + i + l;
							else {
								const { clientWidth: s, offsetWidth: r } = n[0];
								$ = e + t + a + i + l + (r - s);
							}
						}
						l && (n[0].style.transform = l),
							o && (n[0].style.webkitTransform = o),
							a.roundLengths && ($ = Math.floor($));
					} else
						($ = (r - (a.slidesPerView - 1) * x) / a.slidesPerView),
							a.roundLengths && ($ = Math.floor($)),
							c[i] && (c[i].style[t("width")] = `${$}px`);
					c[i] && (c[i].swiperSlideSize = $),
						m.push($),
						a.centeredSlides
							? ((y = y + $ / 2 + E / 2 + x),
							  0 === E && 0 !== i && (y = y - r / 2 - x),
							  0 === i && (y = y - r / 2 - x),
							  Math.abs(y) < 0.001 && (y = 0),
							  a.roundLengths && (y = Math.floor(y)),
							  C % a.slidesPerGroup == 0 && u.push(y),
							  h.push(y))
							: (a.roundLengths && (y = Math.floor(y)),
							  (C - Math.min(e.params.slidesPerGroupSkip, C)) %
									e.params.slidesPerGroup ==
									0 && u.push(y),
							  h.push(y),
							  (y = y + $ + x)),
						(e.virtualSize += $ + x),
						(E = $),
						(C += 1);
				}
			}
			if (
				((e.virtualSize = Math.max(e.virtualSize, r) + g),
				n &&
					l &&
					("slide" === a.effect || "coverflow" === a.effect) &&
					i.css({ width: `${e.virtualSize + a.spaceBetween}px` }),
				a.setWrapperSize &&
					i.css({
						[t("width")]: `${e.virtualSize + a.spaceBetween}px`,
					}),
				T && e.grid.updateWrapperSize($, u, t),
				!a.centeredSlides)
			) {
				const t = [];
				for (let s = 0; s < u.length; s += 1) {
					let i = u[s];
					a.roundLengths && (i = Math.floor(i)),
						u[s] <= e.virtualSize - r && t.push(i);
				}
				(u = t),
					Math.floor(e.virtualSize - r) -
						Math.floor(u[u.length - 1]) >
						1 && u.push(e.virtualSize - r);
			}
			if ((0 === u.length && (u = [0]), 0 !== a.spaceBetween)) {
				const s =
					e.isHorizontal() && n ? "marginLeft" : t("marginRight");
				c.filter((e, t) => !a.cssMode || t !== c.length - 1).css({
					[s]: `${x}px`,
				});
			}
			if (a.centeredSlides && a.centeredSlidesBounds) {
				let e = 0;
				m.forEach((t) => {
					e += t + (a.spaceBetween ? a.spaceBetween : 0);
				}),
					(e -= a.spaceBetween);
				const t = e - r;
				u = u.map((e) => (e < 0 ? -f : e > t ? t + g : e));
			}
			if (a.centerInsufficientSlides) {
				let e = 0;
				if (
					(m.forEach((t) => {
						e += t + (a.spaceBetween ? a.spaceBetween : 0);
					}),
					(e -= a.spaceBetween),
					e < r)
				) {
					const t = (r - e) / 2;
					u.forEach((e, s) => {
						u[s] = e - t;
					}),
						h.forEach((e, s) => {
							h[s] = e + t;
						});
				}
			}
			if (
				(Object.assign(e, {
					slides: c,
					snapGrid: u,
					slidesGrid: h,
					slidesSizesGrid: m,
				}),
				a.centeredSlides && a.cssMode && !a.centeredSlidesBounds)
			) {
				v(e.wrapperEl, "--swiper-centered-offset-before", -u[0] + "px"),
					v(
						e.wrapperEl,
						"--swiper-centered-offset-after",
						e.size / 2 - m[m.length - 1] / 2 + "px"
					);
				const t = -e.snapGrid[0],
					s = -e.slidesGrid[0];
				(e.snapGrid = e.snapGrid.map((e) => e + t)),
					(e.slidesGrid = e.slidesGrid.map((e) => e + s));
			}
			if (
				(p !== d && e.emit("slidesLengthChange"),
				u.length !== w &&
					(e.params.watchOverflow && e.checkOverflow(),
					e.emit("snapGridLengthChange")),
				h.length !== b && e.emit("slidesGridLengthChange"),
				a.watchSlidesProgress && e.updateSlidesOffset(),
				!(
					o ||
					a.cssMode ||
					("slide" !== a.effect && "fade" !== a.effect)
				))
			) {
				const t = `${a.containerModifierClass}backface-hidden`,
					s = e.$el.hasClass(t);
				p <= a.maxBackfaceHiddenSlides
					? s || e.$el.addClass(t)
					: s && e.$el.removeClass(t);
			}
		},
		updateAutoHeight: function (e) {
			const t = this,
				s = [],
				a = t.virtual && t.params.virtual.enabled;
			let i,
				r = 0;
			"number" == typeof e
				? t.setTransition(e)
				: !0 === e && t.setTransition(t.params.speed);
			const n = (e) =>
				a
					? t.slides.filter(
							(t) =>
								parseInt(
									t.getAttribute("data-swiper-slide-index"),
									10
								) === e
					  )[0]
					: t.slides.eq(e)[0];
			if ("auto" !== t.params.slidesPerView && t.params.slidesPerView > 1)
				if (t.params.centeredSlides)
					(t.visibleSlides || d([])).each((e) => {
						s.push(e);
					});
				else
					for (i = 0; i < Math.ceil(t.params.slidesPerView); i += 1) {
						const e = t.activeIndex + i;
						if (e > t.slides.length && !a) break;
						s.push(n(e));
					}
			else s.push(n(t.activeIndex));
			for (i = 0; i < s.length; i += 1)
				if (void 0 !== s[i]) {
					const e = s[i].offsetHeight;
					r = e > r ? e : r;
				}
			(r || 0 === r) && t.$wrapperEl.css("height", `${r}px`);
		},
		updateSlidesOffset: function () {
			const e = this,
				t = e.slides;
			for (let s = 0; s < t.length; s += 1)
				t[s].swiperSlideOffset = e.isHorizontal()
					? t[s].offsetLeft
					: t[s].offsetTop;
		},
		updateSlidesProgress: function (e) {
			void 0 === e && (e = (this && this.translate) || 0);
			const t = this,
				s = t.params,
				{ slides: a, rtlTranslate: i, snapGrid: r } = t;
			if (0 === a.length) return;
			void 0 === a[0].swiperSlideOffset && t.updateSlidesOffset();
			let n = -e;
			i && (n = e),
				a.removeClass(s.slideVisibleClass),
				(t.visibleSlidesIndexes = []),
				(t.visibleSlides = []);
			for (let e = 0; e < a.length; e += 1) {
				const l = a[e];
				let o = l.swiperSlideOffset;
				s.cssMode && s.centeredSlides && (o -= a[0].swiperSlideOffset);
				const d =
						(n + (s.centeredSlides ? t.minTranslate() : 0) - o) /
						(l.swiperSlideSize + s.spaceBetween),
					c =
						(n -
							r[0] +
							(s.centeredSlides ? t.minTranslate() : 0) -
							o) /
						(l.swiperSlideSize + s.spaceBetween),
					p = -(n - o),
					u = p + t.slidesSizesGrid[e];
				((p >= 0 && p < t.size - 1) ||
					(u > 1 && u <= t.size) ||
					(p <= 0 && u >= t.size)) &&
					(t.visibleSlides.push(l),
					t.visibleSlidesIndexes.push(e),
					a.eq(e).addClass(s.slideVisibleClass)),
					(l.progress = i ? -d : d),
					(l.originalProgress = i ? -c : c);
			}
			t.visibleSlides = d(t.visibleSlides);
		},
		updateProgress: function (e) {
			const t = this;
			if (void 0 === e) {
				const s = t.rtlTranslate ? -1 : 1;
				e = (t && t.translate && t.translate * s) || 0;
			}
			const s = t.params,
				a = t.maxTranslate() - t.minTranslate();
			let { progress: i, isBeginning: r, isEnd: n } = t;
			const l = r,
				o = n;
			0 === a
				? ((i = 0), (r = !0), (n = !0))
				: ((i = (e - t.minTranslate()) / a),
				  (r = i <= 0),
				  (n = i >= 1)),
				Object.assign(t, { progress: i, isBeginning: r, isEnd: n }),
				(s.watchSlidesProgress || (s.centeredSlides && s.autoHeight)) &&
					t.updateSlidesProgress(e),
				r && !l && t.emit("reachBeginning toEdge"),
				n && !o && t.emit("reachEnd toEdge"),
				((l && !r) || (o && !n)) && t.emit("fromEdge"),
				t.emit("progress", i);
		},
		updateSlidesClasses: function () {
			const e = this,
				{
					slides: t,
					params: s,
					$wrapperEl: a,
					activeIndex: i,
					realIndex: r,
				} = e,
				n = e.virtual && s.virtual.enabled;
			let l;
			t.removeClass(
				`${s.slideActiveClass} ${s.slideNextClass} ${s.slidePrevClass} ${s.slideDuplicateActiveClass} ${s.slideDuplicateNextClass} ${s.slideDuplicatePrevClass}`
			),
				(l = n
					? e.$wrapperEl.find(
							`.${s.slideClass}[data-swiper-slide-index="${i}"]`
					  )
					: t.eq(i)),
				l.addClass(s.slideActiveClass),
				s.loop &&
					(l.hasClass(s.slideDuplicateClass)
						? a
								.children(
									`.${s.slideClass}:not(.${s.slideDuplicateClass})[data-swiper-slide-index="${r}"]`
								)
								.addClass(s.slideDuplicateActiveClass)
						: a
								.children(
									`.${s.slideClass}.${s.slideDuplicateClass}[data-swiper-slide-index="${r}"]`
								)
								.addClass(s.slideDuplicateActiveClass));
			let o = l
				.nextAll(`.${s.slideClass}`)
				.eq(0)
				.addClass(s.slideNextClass);
			s.loop &&
				0 === o.length &&
				((o = t.eq(0)), o.addClass(s.slideNextClass));
			let d = l
				.prevAll(`.${s.slideClass}`)
				.eq(0)
				.addClass(s.slidePrevClass);
			s.loop &&
				0 === d.length &&
				((d = t.eq(-1)), d.addClass(s.slidePrevClass)),
				s.loop &&
					(o.hasClass(s.slideDuplicateClass)
						? a
								.children(
									`.${s.slideClass}:not(.${
										s.slideDuplicateClass
									})[data-swiper-slide-index="${o.attr(
										"data-swiper-slide-index"
									)}"]`
								)
								.addClass(s.slideDuplicateNextClass)
						: a
								.children(
									`.${s.slideClass}.${
										s.slideDuplicateClass
									}[data-swiper-slide-index="${o.attr(
										"data-swiper-slide-index"
									)}"]`
								)
								.addClass(s.slideDuplicateNextClass),
					d.hasClass(s.slideDuplicateClass)
						? a
								.children(
									`.${s.slideClass}:not(.${
										s.slideDuplicateClass
									})[data-swiper-slide-index="${d.attr(
										"data-swiper-slide-index"
									)}"]`
								)
								.addClass(s.slideDuplicatePrevClass)
						: a
								.children(
									`.${s.slideClass}.${
										s.slideDuplicateClass
									}[data-swiper-slide-index="${d.attr(
										"data-swiper-slide-index"
									)}"]`
								)
								.addClass(s.slideDuplicatePrevClass)),
				e.emitSlidesClasses();
		},
		updateActiveIndex: function (e) {
			const t = this,
				s = t.rtlTranslate ? t.translate : -t.translate,
				{
					slidesGrid: a,
					snapGrid: i,
					params: r,
					activeIndex: n,
					realIndex: l,
					snapIndex: o,
				} = t;
			let d,
				c = e;
			if (void 0 === c) {
				for (let e = 0; e < a.length; e += 1)
					void 0 !== a[e + 1]
						? s >= a[e] && s < a[e + 1] - (a[e + 1] - a[e]) / 2
							? (c = e)
							: s >= a[e] && s < a[e + 1] && (c = e + 1)
						: s >= a[e] && (c = e);
				r.normalizeSlideIndex && (c < 0 || void 0 === c) && (c = 0);
			}
			if (i.indexOf(s) >= 0) d = i.indexOf(s);
			else {
				const e = Math.min(r.slidesPerGroupSkip, c);
				d = e + Math.floor((c - e) / r.slidesPerGroup);
			}
			if ((d >= i.length && (d = i.length - 1), c === n))
				return void (
					d !== o && ((t.snapIndex = d), t.emit("snapIndexChange"))
				);
			const p = parseInt(
				t.slides.eq(c).attr("data-swiper-slide-index") || c,
				10
			);
			Object.assign(t, {
				snapIndex: d,
				realIndex: p,
				previousIndex: n,
				activeIndex: c,
			}),
				t.emit("activeIndexChange"),
				t.emit("snapIndexChange"),
				l !== p && t.emit("realIndexChange"),
				(t.initialized || t.params.runCallbacksOnInit) &&
					t.emit("slideChange");
		},
		updateClickedSlide: function (e) {
			const t = this,
				s = t.params,
				a = d(e).closest(`.${s.slideClass}`)[0];
			let i,
				r = !1;
			if (a)
				for (let e = 0; e < t.slides.length; e += 1)
					if (t.slides[e] === a) {
						(r = !0), (i = e);
						break;
					}
			if (!a || !r)
				return (
					(t.clickedSlide = void 0), void (t.clickedIndex = void 0)
				);
			(t.clickedSlide = a),
				t.virtual && t.params.virtual.enabled
					? (t.clickedIndex = parseInt(
							d(a).attr("data-swiper-slide-index"),
							10
					  ))
					: (t.clickedIndex = i),
				s.slideToClickedSlide &&
					void 0 !== t.clickedIndex &&
					t.clickedIndex !== t.activeIndex &&
					t.slideToClickedSlide();
		},
	};
	var M = {
		getTranslate: function (e) {
			void 0 === e && (e = this.isHorizontal() ? "x" : "y");
			const {
				params: t,
				rtlTranslate: s,
				translate: a,
				$wrapperEl: i,
			} = this;
			if (t.virtualTranslate) return s ? -a : a;
			if (t.cssMode) return a;
			let r = h(i[0], e);
			return s && (r = -r), r || 0;
		},
		setTranslate: function (e, t) {
			const s = this,
				{
					rtlTranslate: a,
					params: i,
					$wrapperEl: r,
					wrapperEl: n,
					progress: l,
				} = s;
			let o,
				d = 0,
				c = 0;
			s.isHorizontal() ? (d = a ? -e : e) : (c = e),
				i.roundLengths && ((d = Math.floor(d)), (c = Math.floor(c))),
				i.cssMode
					? (n[s.isHorizontal() ? "scrollLeft" : "scrollTop"] =
							s.isHorizontal() ? -d : -c)
					: i.virtualTranslate ||
					  r.transform(`translate3d(${d}px, ${c}px, 0px)`),
				(s.previousTranslate = s.translate),
				(s.translate = s.isHorizontal() ? d : c);
			const p = s.maxTranslate() - s.minTranslate();
			(o = 0 === p ? 0 : (e - s.minTranslate()) / p),
				o !== l && s.updateProgress(e),
				s.emit("setTranslate", s.translate, t);
		},
		minTranslate: function () {
			return -this.snapGrid[0];
		},
		maxTranslate: function () {
			return -this.snapGrid[this.snapGrid.length - 1];
		},
		translateTo: function (e, t, s, a, i) {
			void 0 === e && (e = 0),
				void 0 === t && (t = this.params.speed),
				void 0 === s && (s = !0),
				void 0 === a && (a = !0);
			const r = this,
				{ params: n, wrapperEl: l } = r;
			if (r.animating && n.preventInteractionOnTransition) return !1;
			const o = r.minTranslate(),
				d = r.maxTranslate();
			let c;
			if (
				((c = a && e > o ? o : a && e < d ? d : e),
				r.updateProgress(c),
				n.cssMode)
			) {
				const e = r.isHorizontal();
				if (0 === t) l[e ? "scrollLeft" : "scrollTop"] = -c;
				else {
					if (!r.support.smoothScroll)
						return (
							w({
								swiper: r,
								targetPosition: -c,
								side: e ? "left" : "top",
							}),
							!0
						);
					l.scrollTo({
						[e ? "left" : "top"]: -c,
						behavior: "smooth",
					});
				}
				return !0;
			}
			return (
				0 === t
					? (r.setTransition(0),
					  r.setTranslate(c),
					  s &&
							(r.emit("beforeTransitionStart", t, i),
							r.emit("transitionEnd")))
					: (r.setTransition(t),
					  r.setTranslate(c),
					  s &&
							(r.emit("beforeTransitionStart", t, i),
							r.emit("transitionStart")),
					  r.animating ||
							((r.animating = !0),
							r.onTranslateToWrapperTransitionEnd ||
								(r.onTranslateToWrapperTransitionEnd =
									function (e) {
										r &&
											!r.destroyed &&
											e.target === this &&
											(r.$wrapperEl[0].removeEventListener(
												"transitionend",
												r.onTranslateToWrapperTransitionEnd
											),
											r.$wrapperEl[0].removeEventListener(
												"webkitTransitionEnd",
												r.onTranslateToWrapperTransitionEnd
											),
											(r.onTranslateToWrapperTransitionEnd =
												null),
											delete r.onTranslateToWrapperTransitionEnd,
											s && r.emit("transitionEnd"));
									}),
							r.$wrapperEl[0].addEventListener(
								"transitionend",
								r.onTranslateToWrapperTransitionEnd
							),
							r.$wrapperEl[0].addEventListener(
								"webkitTransitionEnd",
								r.onTranslateToWrapperTransitionEnd
							))),
				!0
			);
		},
	};
	function P(e) {
		let { swiper: t, runCallbacks: s, direction: a, step: i } = e;
		const { activeIndex: r, previousIndex: n } = t;
		let l = a;
		if (
			(l || (l = r > n ? "next" : r < n ? "prev" : "reset"),
			t.emit(`transition${i}`),
			s && r !== n)
		) {
			if ("reset" === l) return void t.emit(`slideResetTransition${i}`);
			t.emit(`slideChangeTransition${i}`),
				"next" === l
					? t.emit(`slideNextTransition${i}`)
					: t.emit(`slidePrevTransition${i}`);
		}
	}
	var k = {
		slideTo: function (e, t, s, a, i) {
			if (
				(void 0 === e && (e = 0),
				void 0 === t && (t = this.params.speed),
				void 0 === s && (s = !0),
				"number" != typeof e && "string" != typeof e)
			)
				throw new Error(
					`The 'index' argument cannot have type other than 'number' or 'string'. [${typeof e}] given.`
				);
			if ("string" == typeof e) {
				const t = parseInt(e, 10);
				if (!isFinite(t))
					throw new Error(
						`The passed-in 'index' (string) couldn't be converted to 'number'. [${e}] given.`
					);
				e = t;
			}
			const r = this;
			let n = e;
			n < 0 && (n = 0);
			const {
				params: l,
				snapGrid: o,
				slidesGrid: d,
				previousIndex: c,
				activeIndex: p,
				rtlTranslate: u,
				wrapperEl: h,
				enabled: m,
			} = r;
			if (
				(r.animating && l.preventInteractionOnTransition) ||
				(!m && !a && !i)
			)
				return !1;
			const f = Math.min(r.params.slidesPerGroupSkip, n);
			let g = f + Math.floor((n - f) / r.params.slidesPerGroup);
			g >= o.length && (g = o.length - 1),
				(p || l.initialSlide || 0) === (c || 0) &&
					s &&
					r.emit("beforeSlideChangeStart");
			const v = -o[g];
			if ((r.updateProgress(v), l.normalizeSlideIndex))
				for (let e = 0; e < d.length; e += 1) {
					const t = -Math.floor(100 * v),
						s = Math.floor(100 * d[e]),
						a = Math.floor(100 * d[e + 1]);
					void 0 !== d[e + 1]
						? t >= s && t < a - (a - s) / 2
							? (n = e)
							: t >= s && t < a && (n = e + 1)
						: t >= s && (n = e);
				}
			if (r.initialized && n !== p) {
				if (
					!r.allowSlideNext &&
					v < r.translate &&
					v < r.minTranslate()
				)
					return !1;
				if (
					!r.allowSlidePrev &&
					v > r.translate &&
					v > r.maxTranslate() &&
					(p || 0) !== n
				)
					return !1;
			}
			let b;
			if (
				((b = n > p ? "next" : n < p ? "prev" : "reset"),
				(u && -v === r.translate) || (!u && v === r.translate))
			)
				return (
					r.updateActiveIndex(n),
					l.autoHeight && r.updateAutoHeight(),
					r.updateSlidesClasses(),
					"slide" !== l.effect && r.setTranslate(v),
					"reset" !== b &&
						(r.transitionStart(s, b), r.transitionEnd(s, b)),
					!1
				);
			if (l.cssMode) {
				const e = r.isHorizontal(),
					s = u ? v : -v;
				if (0 === t) {
					const t = r.virtual && r.params.virtual.enabled;
					t &&
						((r.wrapperEl.style.scrollSnapType = "none"),
						(r._immediateVirtual = !0)),
						(h[e ? "scrollLeft" : "scrollTop"] = s),
						t &&
							requestAnimationFrame(() => {
								(r.wrapperEl.style.scrollSnapType = ""),
									(r._swiperImmediateVirtual = !1);
							});
				} else {
					if (!r.support.smoothScroll)
						return (
							w({
								swiper: r,
								targetPosition: s,
								side: e ? "left" : "top",
							}),
							!0
						);
					h.scrollTo({ [e ? "left" : "top"]: s, behavior: "smooth" });
				}
				return !0;
			}
			return (
				r.setTransition(t),
				r.setTranslate(v),
				r.updateActiveIndex(n),
				r.updateSlidesClasses(),
				r.emit("beforeTransitionStart", t, a),
				r.transitionStart(s, b),
				0 === t
					? r.transitionEnd(s, b)
					: r.animating ||
					  ((r.animating = !0),
					  r.onSlideToWrapperTransitionEnd ||
							(r.onSlideToWrapperTransitionEnd = function (e) {
								r &&
									!r.destroyed &&
									e.target === this &&
									(r.$wrapperEl[0].removeEventListener(
										"transitionend",
										r.onSlideToWrapperTransitionEnd
									),
									r.$wrapperEl[0].removeEventListener(
										"webkitTransitionEnd",
										r.onSlideToWrapperTransitionEnd
									),
									(r.onSlideToWrapperTransitionEnd = null),
									delete r.onSlideToWrapperTransitionEnd,
									r.transitionEnd(s, b));
							}),
					  r.$wrapperEl[0].addEventListener(
							"transitionend",
							r.onSlideToWrapperTransitionEnd
					  ),
					  r.$wrapperEl[0].addEventListener(
							"webkitTransitionEnd",
							r.onSlideToWrapperTransitionEnd
					  )),
				!0
			);
		},
		slideToLoop: function (e, t, s, a) {
			if (
				(void 0 === e && (e = 0),
				void 0 === t && (t = this.params.speed),
				void 0 === s && (s = !0),
				"string" == typeof e)
			) {
				const t = parseInt(e, 10);
				if (!isFinite(t))
					throw new Error(
						`The passed-in 'index' (string) couldn't be converted to 'number'. [${e}] given.`
					);
				e = t;
			}
			const i = this;
			let r = e;
			return (
				i.params.loop && (r += i.loopedSlides), i.slideTo(r, t, s, a)
			);
		},
		slideNext: function (e, t, s) {
			void 0 === e && (e = this.params.speed), void 0 === t && (t = !0);
			const a = this,
				{ animating: i, enabled: r, params: n } = a;
			if (!r) return a;
			let l = n.slidesPerGroup;
			"auto" === n.slidesPerView &&
				1 === n.slidesPerGroup &&
				n.slidesPerGroupAuto &&
				(l = Math.max(a.slidesPerViewDynamic("current", !0), 1));
			const o = a.activeIndex < n.slidesPerGroupSkip ? 1 : l;
			if (n.loop) {
				if (i && n.loopPreventsSlide) return !1;
				a.loopFix(), (a._clientLeft = a.$wrapperEl[0].clientLeft);
			}
			return n.rewind && a.isEnd
				? a.slideTo(0, e, t, s)
				: a.slideTo(a.activeIndex + o, e, t, s);
		},
		slidePrev: function (e, t, s) {
			void 0 === e && (e = this.params.speed), void 0 === t && (t = !0);
			const a = this,
				{
					params: i,
					animating: r,
					snapGrid: n,
					slidesGrid: l,
					rtlTranslate: o,
					enabled: d,
				} = a;
			if (!d) return a;
			if (i.loop) {
				if (r && i.loopPreventsSlide) return !1;
				a.loopFix(), (a._clientLeft = a.$wrapperEl[0].clientLeft);
			}
			function c(e) {
				return e < 0 ? -Math.floor(Math.abs(e)) : Math.floor(e);
			}
			const p = c(o ? a.translate : -a.translate),
				u = n.map((e) => c(e));
			let h = n[u.indexOf(p) - 1];
			if (void 0 === h && i.cssMode) {
				let e;
				n.forEach((t, s) => {
					p >= t && (e = s);
				}),
					void 0 !== e && (h = n[e > 0 ? e - 1 : e]);
			}
			let m = 0;
			if (
				(void 0 !== h &&
					((m = l.indexOf(h)),
					m < 0 && (m = a.activeIndex - 1),
					"auto" === i.slidesPerView &&
						1 === i.slidesPerGroup &&
						i.slidesPerGroupAuto &&
						((m = m - a.slidesPerViewDynamic("previous", !0) + 1),
						(m = Math.max(m, 0)))),
				i.rewind && a.isBeginning)
			) {
				const i =
					a.params.virtual && a.params.virtual.enabled && a.virtual
						? a.virtual.slides.length - 1
						: a.slides.length - 1;
				return a.slideTo(i, e, t, s);
			}
			return a.slideTo(m, e, t, s);
		},
		slideReset: function (e, t, s) {
			return (
				void 0 === e && (e = this.params.speed),
				void 0 === t && (t = !0),
				this.slideTo(this.activeIndex, e, t, s)
			);
		},
		slideToClosest: function (e, t, s, a) {
			void 0 === e && (e = this.params.speed),
				void 0 === t && (t = !0),
				void 0 === a && (a = 0.5);
			const i = this;
			let r = i.activeIndex;
			const n = Math.min(i.params.slidesPerGroupSkip, r),
				l = n + Math.floor((r - n) / i.params.slidesPerGroup),
				o = i.rtlTranslate ? i.translate : -i.translate;
			if (o >= i.snapGrid[l]) {
				const e = i.snapGrid[l];
				o - e > (i.snapGrid[l + 1] - e) * a &&
					(r += i.params.slidesPerGroup);
			} else {
				const e = i.snapGrid[l - 1];
				o - e <= (i.snapGrid[l] - e) * a &&
					(r -= i.params.slidesPerGroup);
			}
			return (
				(r = Math.max(r, 0)),
				(r = Math.min(r, i.slidesGrid.length - 1)),
				i.slideTo(r, e, t, s)
			);
		},
		slideToClickedSlide: function () {
			const e = this,
				{ params: t, $wrapperEl: s } = e,
				a =
					"auto" === t.slidesPerView
						? e.slidesPerViewDynamic()
						: t.slidesPerView;
			let i,
				r = e.clickedIndex;
			if (t.loop) {
				if (e.animating) return;
				(i = parseInt(
					d(e.clickedSlide).attr("data-swiper-slide-index"),
					10
				)),
					t.centeredSlides
						? r < e.loopedSlides - a / 2 ||
						  r > e.slides.length - e.loopedSlides + a / 2
							? (e.loopFix(),
							  (r = s
									.children(
										`.${t.slideClass}[data-swiper-slide-index="${i}"]:not(.${t.slideDuplicateClass})`
									)
									.eq(0)
									.index()),
							  p(() => {
									e.slideTo(r);
							  }))
							: e.slideTo(r)
						: r > e.slides.length - a
						? (e.loopFix(),
						  (r = s
								.children(
									`.${t.slideClass}[data-swiper-slide-index="${i}"]:not(.${t.slideDuplicateClass})`
								)
								.eq(0)
								.index()),
						  p(() => {
								e.slideTo(r);
						  }))
						: e.slideTo(r);
			} else e.slideTo(r);
		},
	};
	var z = {
		loopCreate: function () {
			const e = this,
				t = a(),
				{ params: s, $wrapperEl: i } = e,
				r = i.children().length > 0 ? d(i.children()[0].parentNode) : i;
			r.children(`.${s.slideClass}.${s.slideDuplicateClass}`).remove();
			let n = r.children(`.${s.slideClass}`);
			if (s.loopFillGroupWithBlank) {
				const e = s.slidesPerGroup - (n.length % s.slidesPerGroup);
				if (e !== s.slidesPerGroup) {
					for (let a = 0; a < e; a += 1) {
						const e = d(t.createElement("div")).addClass(
							`${s.slideClass} ${s.slideBlankClass}`
						);
						r.append(e);
					}
					n = r.children(`.${s.slideClass}`);
				}
			}
			"auto" !== s.slidesPerView ||
				s.loopedSlides ||
				(s.loopedSlides = n.length),
				(e.loopedSlides = Math.ceil(
					parseFloat(s.loopedSlides || s.slidesPerView, 10)
				)),
				(e.loopedSlides += s.loopAdditionalSlides),
				e.loopedSlides > n.length &&
					e.params.loopedSlidesLimit &&
					(e.loopedSlides = n.length);
			const l = [],
				o = [];
			n.each((e, t) => {
				d(e).attr("data-swiper-slide-index", t);
			});
			for (let t = 0; t < e.loopedSlides; t += 1) {
				const e = t - Math.floor(t / n.length) * n.length;
				o.push(n.eq(e)[0]), l.unshift(n.eq(n.length - e - 1)[0]);
			}
			for (let e = 0; e < o.length; e += 1)
				r.append(d(o[e].cloneNode(!0)).addClass(s.slideDuplicateClass));
			for (let e = l.length - 1; e >= 0; e -= 1)
				r.prepend(
					d(l[e].cloneNode(!0)).addClass(s.slideDuplicateClass)
				);
		},
		loopFix: function () {
			const e = this;
			e.emit("beforeLoopFix");
			const {
				activeIndex: t,
				slides: s,
				loopedSlides: a,
				allowSlidePrev: i,
				allowSlideNext: r,
				snapGrid: n,
				rtlTranslate: l,
			} = e;
			let o;
			(e.allowSlidePrev = !0), (e.allowSlideNext = !0);
			const d = -n[t] - e.getTranslate();
			if (t < a) {
				(o = s.length - 3 * a + t), (o += a);
				e.slideTo(o, 0, !1, !0) &&
					0 !== d &&
					e.setTranslate((l ? -e.translate : e.translate) - d);
			} else if (t >= s.length - a) {
				(o = -s.length + t + a), (o += a);
				e.slideTo(o, 0, !1, !0) &&
					0 !== d &&
					e.setTranslate((l ? -e.translate : e.translate) - d);
			}
			(e.allowSlidePrev = i), (e.allowSlideNext = r), e.emit("loopFix");
		},
		loopDestroy: function () {
			const { $wrapperEl: e, params: t, slides: s } = this;
			e
				.children(
					`.${t.slideClass}.${t.slideDuplicateClass},.${t.slideClass}.${t.slideBlankClass}`
				)
				.remove(),
				s.removeAttr("data-swiper-slide-index");
		},
	};
	function L(e) {
		const t = this,
			s = a(),
			i = r(),
			n = t.touchEventsData,
			{ params: l, touches: o, enabled: c } = t;
		if (!c) return;
		if (t.animating && l.preventInteractionOnTransition) return;
		!t.animating && l.cssMode && l.loop && t.loopFix();
		let p = e;
		p.originalEvent && (p = p.originalEvent);
		let h = d(p.target);
		if ("wrapper" === l.touchEventsTarget && !h.closest(t.wrapperEl).length)
			return;
		if (
			((n.isTouchEvent = "touchstart" === p.type),
			!n.isTouchEvent && "which" in p && 3 === p.which)
		)
			return;
		if (!n.isTouchEvent && "button" in p && p.button > 0) return;
		if (n.isTouched && n.isMoved) return;
		!!l.noSwipingClass &&
			"" !== l.noSwipingClass &&
			p.target &&
			p.target.shadowRoot &&
			e.path &&
			e.path[0] &&
			(h = d(e.path[0]));
		const m = l.noSwipingSelector
				? l.noSwipingSelector
				: `.${l.noSwipingClass}`,
			f = !(!p.target || !p.target.shadowRoot);
		if (
			l.noSwiping &&
			(f
				? (function (e, t) {
						return (
							void 0 === t && (t = this),
							(function t(s) {
								if (!s || s === a() || s === r()) return null;
								s.assignedSlot && (s = s.assignedSlot);
								const i = s.closest(e);
								return i || s.getRootNode
									? i || t(s.getRootNode().host)
									: null;
							})(t)
						);
				  })(m, h[0])
				: h.closest(m)[0])
		)
			return void (t.allowClick = !0);
		if (l.swipeHandler && !h.closest(l.swipeHandler)[0]) return;
		(o.currentX =
			"touchstart" === p.type ? p.targetTouches[0].pageX : p.pageX),
			(o.currentY =
				"touchstart" === p.type ? p.targetTouches[0].pageY : p.pageY);
		const g = o.currentX,
			v = o.currentY,
			w = l.edgeSwipeDetection || l.iOSEdgeSwipeDetection,
			b = l.edgeSwipeThreshold || l.iOSEdgeSwipeThreshold;
		if (w && (g <= b || g >= i.innerWidth - b)) {
			if ("prevent" !== w) return;
			e.preventDefault();
		}
		if (
			(Object.assign(n, {
				isTouched: !0,
				isMoved: !1,
				allowTouchCallbacks: !0,
				isScrolling: void 0,
				startMoving: void 0,
			}),
			(o.startX = g),
			(o.startY = v),
			(n.touchStartTime = u()),
			(t.allowClick = !0),
			t.updateSize(),
			(t.swipeDirection = void 0),
			l.threshold > 0 && (n.allowThresholdMove = !1),
			"touchstart" !== p.type)
		) {
			let e = !0;
			h.is(n.focusableElements) &&
				((e = !1), "SELECT" === h[0].nodeName && (n.isTouched = !1)),
				s.activeElement &&
					d(s.activeElement).is(n.focusableElements) &&
					s.activeElement !== h[0] &&
					s.activeElement.blur();
			const a = e && t.allowTouchMove && l.touchStartPreventDefault;
			(!l.touchStartForcePreventDefault && !a) ||
				h[0].isContentEditable ||
				p.preventDefault();
		}
		t.params.freeMode &&
			t.params.freeMode.enabled &&
			t.freeMode &&
			t.animating &&
			!l.cssMode &&
			t.freeMode.onTouchStart(),
			t.emit("touchStart", p);
	}
	function O(e) {
		const t = a(),
			s = this,
			i = s.touchEventsData,
			{ params: r, touches: n, rtlTranslate: l, enabled: o } = s;
		if (!o) return;
		let c = e;
		if ((c.originalEvent && (c = c.originalEvent), !i.isTouched))
			return void (
				i.startMoving &&
				i.isScrolling &&
				s.emit("touchMoveOpposite", c)
			);
		if (i.isTouchEvent && "touchmove" !== c.type) return;
		const p =
				"touchmove" === c.type &&
				c.targetTouches &&
				(c.targetTouches[0] || c.changedTouches[0]),
			h = "touchmove" === c.type ? p.pageX : c.pageX,
			m = "touchmove" === c.type ? p.pageY : c.pageY;
		if (c.preventedByNestedSwiper)
			return (n.startX = h), void (n.startY = m);
		if (!s.allowTouchMove)
			return (
				d(c.target).is(i.focusableElements) || (s.allowClick = !1),
				void (
					i.isTouched &&
					(Object.assign(n, {
						startX: h,
						startY: m,
						currentX: h,
						currentY: m,
					}),
					(i.touchStartTime = u()))
				)
			);
		if (i.isTouchEvent && r.touchReleaseOnEdges && !r.loop)
			if (s.isVertical()) {
				if (
					(m < n.startY && s.translate <= s.maxTranslate()) ||
					(m > n.startY && s.translate >= s.minTranslate())
				)
					return (i.isTouched = !1), void (i.isMoved = !1);
			} else if (
				(h < n.startX && s.translate <= s.maxTranslate()) ||
				(h > n.startX && s.translate >= s.minTranslate())
			)
				return;
		if (
			i.isTouchEvent &&
			t.activeElement &&
			c.target === t.activeElement &&
			d(c.target).is(i.focusableElements)
		)
			return (i.isMoved = !0), void (s.allowClick = !1);
		if (
			(i.allowTouchCallbacks && s.emit("touchMove", c),
			c.targetTouches && c.targetTouches.length > 1)
		)
			return;
		(n.currentX = h), (n.currentY = m);
		const f = n.currentX - n.startX,
			g = n.currentY - n.startY;
		if (
			s.params.threshold &&
			Math.sqrt(f ** 2 + g ** 2) < s.params.threshold
		)
			return;
		if (void 0 === i.isScrolling) {
			let e;
			(s.isHorizontal() && n.currentY === n.startY) ||
			(s.isVertical() && n.currentX === n.startX)
				? (i.isScrolling = !1)
				: f * f + g * g >= 25 &&
				  ((e = (180 * Math.atan2(Math.abs(g), Math.abs(f))) / Math.PI),
				  (i.isScrolling = s.isHorizontal()
						? e > r.touchAngle
						: 90 - e > r.touchAngle));
		}
		if (
			(i.isScrolling && s.emit("touchMoveOpposite", c),
			void 0 === i.startMoving &&
				((n.currentX === n.startX && n.currentY === n.startY) ||
					(i.startMoving = !0)),
			i.isScrolling)
		)
			return void (i.isTouched = !1);
		if (!i.startMoving) return;
		(s.allowClick = !1),
			!r.cssMode && c.cancelable && c.preventDefault(),
			r.touchMoveStopPropagation && !r.nested && c.stopPropagation(),
			i.isMoved ||
				(r.loop && !r.cssMode && s.loopFix(),
				(i.startTranslate = s.getTranslate()),
				s.setTransition(0),
				s.animating &&
					s.$wrapperEl.trigger("webkitTransitionEnd transitionend"),
				(i.allowMomentumBounce = !1),
				!r.grabCursor ||
					(!0 !== s.allowSlideNext && !0 !== s.allowSlidePrev) ||
					s.setGrabCursor(!0),
				s.emit("sliderFirstMove", c)),
			s.emit("sliderMove", c),
			(i.isMoved = !0);
		let v = s.isHorizontal() ? f : g;
		(n.diff = v),
			(v *= r.touchRatio),
			l && (v = -v),
			(s.swipeDirection = v > 0 ? "prev" : "next"),
			(i.currentTranslate = v + i.startTranslate);
		let w = !0,
			b = r.resistanceRatio;
		if (
			(r.touchReleaseOnEdges && (b = 0),
			v > 0 && i.currentTranslate > s.minTranslate()
				? ((w = !1),
				  r.resistance &&
						(i.currentTranslate =
							s.minTranslate() -
							1 +
							(-s.minTranslate() + i.startTranslate + v) ** b))
				: v < 0 &&
				  i.currentTranslate < s.maxTranslate() &&
				  ((w = !1),
				  r.resistance &&
						(i.currentTranslate =
							s.maxTranslate() +
							1 -
							(s.maxTranslate() - i.startTranslate - v) ** b)),
			w && (c.preventedByNestedSwiper = !0),
			!s.allowSlideNext &&
				"next" === s.swipeDirection &&
				i.currentTranslate < i.startTranslate &&
				(i.currentTranslate = i.startTranslate),
			!s.allowSlidePrev &&
				"prev" === s.swipeDirection &&
				i.currentTranslate > i.startTranslate &&
				(i.currentTranslate = i.startTranslate),
			s.allowSlidePrev ||
				s.allowSlideNext ||
				(i.currentTranslate = i.startTranslate),
			r.threshold > 0)
		) {
			if (!(Math.abs(v) > r.threshold || i.allowThresholdMove))
				return void (i.currentTranslate = i.startTranslate);
			if (!i.allowThresholdMove)
				return (
					(i.allowThresholdMove = !0),
					(n.startX = n.currentX),
					(n.startY = n.currentY),
					(i.currentTranslate = i.startTranslate),
					void (n.diff = s.isHorizontal()
						? n.currentX - n.startX
						: n.currentY - n.startY)
				);
		}
		r.followFinger &&
			!r.cssMode &&
			(((r.freeMode && r.freeMode.enabled && s.freeMode) ||
				r.watchSlidesProgress) &&
				(s.updateActiveIndex(), s.updateSlidesClasses()),
			s.params.freeMode &&
				r.freeMode.enabled &&
				s.freeMode &&
				s.freeMode.onTouchMove(),
			s.updateProgress(i.currentTranslate),
			s.setTranslate(i.currentTranslate));
	}
	function I(e) {
		const t = this,
			s = t.touchEventsData,
			{
				params: a,
				touches: i,
				rtlTranslate: r,
				slidesGrid: n,
				enabled: l,
			} = t;
		if (!l) return;
		let o = e;
		if (
			(o.originalEvent && (o = o.originalEvent),
			s.allowTouchCallbacks && t.emit("touchEnd", o),
			(s.allowTouchCallbacks = !1),
			!s.isTouched)
		)
			return (
				s.isMoved && a.grabCursor && t.setGrabCursor(!1),
				(s.isMoved = !1),
				void (s.startMoving = !1)
			);
		a.grabCursor &&
			s.isMoved &&
			s.isTouched &&
			(!0 === t.allowSlideNext || !0 === t.allowSlidePrev) &&
			t.setGrabCursor(!1);
		const d = u(),
			c = d - s.touchStartTime;
		if (t.allowClick) {
			const e = o.path || (o.composedPath && o.composedPath());
			t.updateClickedSlide((e && e[0]) || o.target),
				t.emit("tap click", o),
				c < 300 &&
					d - s.lastClickTime < 300 &&
					t.emit("doubleTap doubleClick", o);
		}
		if (
			((s.lastClickTime = u()),
			p(() => {
				t.destroyed || (t.allowClick = !0);
			}),
			!s.isTouched ||
				!s.isMoved ||
				!t.swipeDirection ||
				0 === i.diff ||
				s.currentTranslate === s.startTranslate)
		)
			return (
				(s.isTouched = !1), (s.isMoved = !1), void (s.startMoving = !1)
			);
		let h;
		if (
			((s.isTouched = !1),
			(s.isMoved = !1),
			(s.startMoving = !1),
			(h = a.followFinger
				? r
					? t.translate
					: -t.translate
				: -s.currentTranslate),
			a.cssMode)
		)
			return;
		if (t.params.freeMode && a.freeMode.enabled)
			return void t.freeMode.onTouchEnd({ currentPos: h });
		let m = 0,
			f = t.slidesSizesGrid[0];
		for (
			let e = 0;
			e < n.length;
			e += e < a.slidesPerGroupSkip ? 1 : a.slidesPerGroup
		) {
			const t = e < a.slidesPerGroupSkip - 1 ? 1 : a.slidesPerGroup;
			void 0 !== n[e + t]
				? h >= n[e] && h < n[e + t] && ((m = e), (f = n[e + t] - n[e]))
				: h >= n[e] &&
				  ((m = e), (f = n[n.length - 1] - n[n.length - 2]));
		}
		let g = null,
			v = null;
		a.rewind &&
			(t.isBeginning
				? (v =
						t.params.virtual &&
						t.params.virtual.enabled &&
						t.virtual
							? t.virtual.slides.length - 1
							: t.slides.length - 1)
				: t.isEnd && (g = 0));
		const w = (h - n[m]) / f,
			b = m < a.slidesPerGroupSkip - 1 ? 1 : a.slidesPerGroup;
		if (c > a.longSwipesMs) {
			if (!a.longSwipes) return void t.slideTo(t.activeIndex);
			"next" === t.swipeDirection &&
				(w >= a.longSwipesRatio
					? t.slideTo(a.rewind && t.isEnd ? g : m + b)
					: t.slideTo(m)),
				"prev" === t.swipeDirection &&
					(w > 1 - a.longSwipesRatio
						? t.slideTo(m + b)
						: null !== v && w < 0 && Math.abs(w) > a.longSwipesRatio
						? t.slideTo(v)
						: t.slideTo(m));
		} else {
			if (!a.shortSwipes) return void t.slideTo(t.activeIndex);
			t.navigation &&
			(o.target === t.navigation.nextEl ||
				o.target === t.navigation.prevEl)
				? o.target === t.navigation.nextEl
					? t.slideTo(m + b)
					: t.slideTo(m)
				: ("next" === t.swipeDirection &&
						t.slideTo(null !== g ? g : m + b),
				  "prev" === t.swipeDirection && t.slideTo(null !== v ? v : m));
		}
	}
	function A() {
		const e = this,
			{ params: t, el: s } = e;
		if (s && 0 === s.offsetWidth) return;
		t.breakpoints && e.setBreakpoint();
		const { allowSlideNext: a, allowSlidePrev: i, snapGrid: r } = e;
		(e.allowSlideNext = !0),
			(e.allowSlidePrev = !0),
			e.updateSize(),
			e.updateSlides(),
			e.updateSlidesClasses(),
			("auto" === t.slidesPerView || t.slidesPerView > 1) &&
			e.isEnd &&
			!e.isBeginning &&
			!e.params.centeredSlides
				? e.slideTo(e.slides.length - 1, 0, !1, !0)
				: e.slideTo(e.activeIndex, 0, !1, !0),
			e.autoplay &&
				e.autoplay.running &&
				e.autoplay.paused &&
				e.autoplay.run(),
			(e.allowSlidePrev = i),
			(e.allowSlideNext = a),
			e.params.watchOverflow && r !== e.snapGrid && e.checkOverflow();
	}
	function D(e) {
		const t = this;
		t.enabled &&
			(t.allowClick ||
				(t.params.preventClicks && e.preventDefault(),
				t.params.preventClicksPropagation &&
					t.animating &&
					(e.stopPropagation(), e.stopImmediatePropagation())));
	}
	function G() {
		const e = this,
			{ wrapperEl: t, rtlTranslate: s, enabled: a } = e;
		if (!a) return;
		let i;
		(e.previousTranslate = e.translate),
			e.isHorizontal()
				? (e.translate = -t.scrollLeft)
				: (e.translate = -t.scrollTop),
			0 === e.translate && (e.translate = 0),
			e.updateActiveIndex(),
			e.updateSlidesClasses();
		const r = e.maxTranslate() - e.minTranslate();
		(i = 0 === r ? 0 : (e.translate - e.minTranslate()) / r),
			i !== e.progress &&
				e.updateProgress(s ? -e.translate : e.translate),
			e.emit("setTranslate", e.translate, !1);
	}
	let N = !1;
	function B() {}
	const H = (e, t) => {
		const s = a(),
			{
				params: i,
				touchEvents: r,
				el: n,
				wrapperEl: l,
				device: o,
				support: d,
			} = e,
			c = !!i.nested,
			p = "on" === t ? "addEventListener" : "removeEventListener",
			u = t;
		if (d.touch) {
			const t = !(
				"touchstart" !== r.start ||
				!d.passiveListener ||
				!i.passiveListeners
			) && { passive: !0, capture: !1 };
			n[p](r.start, e.onTouchStart, t),
				n[p](
					r.move,
					e.onTouchMove,
					d.passiveListener ? { passive: !1, capture: c } : c
				),
				n[p](r.end, e.onTouchEnd, t),
				r.cancel && n[p](r.cancel, e.onTouchEnd, t);
		} else
			n[p](r.start, e.onTouchStart, !1),
				s[p](r.move, e.onTouchMove, c),
				s[p](r.end, e.onTouchEnd, !1);
		(i.preventClicks || i.preventClicksPropagation) &&
			n[p]("click", e.onClick, !0),
			i.cssMode && l[p]("scroll", e.onScroll),
			i.updateOnWindowResize
				? e[u](
						o.ios || o.android
							? "resize orientationchange observerUpdate"
							: "resize observerUpdate",
						A,
						!0
				  )
				: e[u]("observerUpdate", A, !0);
	};
	var X = {
		attachEvents: function () {
			const e = this,
				t = a(),
				{ params: s, support: i } = e;
			(e.onTouchStart = L.bind(e)),
				(e.onTouchMove = O.bind(e)),
				(e.onTouchEnd = I.bind(e)),
				s.cssMode && (e.onScroll = G.bind(e)),
				(e.onClick = D.bind(e)),
				i.touch &&
					!N &&
					(t.addEventListener("touchstart", B), (N = !0)),
				H(e, "on");
		},
		detachEvents: function () {
			H(this, "off");
		},
	};
	const Y = (e, t) => e.grid && t.grid && t.grid.rows > 1;
	var R = {
		addClasses: function () {
			const e = this,
				{
					classNames: t,
					params: s,
					rtl: a,
					$el: i,
					device: r,
					support: n,
				} = e,
				l = (function (e, t) {
					const s = [];
					return (
						e.forEach((e) => {
							"object" == typeof e
								? Object.keys(e).forEach((a) => {
										e[a] && s.push(t + a);
								  })
								: "string" == typeof e && s.push(t + e);
						}),
						s
					);
				})(
					[
						"initialized",
						s.direction,
						{ "pointer-events": !n.touch },
						{
							"free-mode":
								e.params.freeMode && s.freeMode.enabled,
						},
						{ autoheight: s.autoHeight },
						{ rtl: a },
						{ grid: s.grid && s.grid.rows > 1 },
						{
							"grid-column":
								s.grid &&
								s.grid.rows > 1 &&
								"column" === s.grid.fill,
						},
						{ android: r.android },
						{ ios: r.ios },
						{ "css-mode": s.cssMode },
						{ centered: s.cssMode && s.centeredSlides },
						{ "watch-progress": s.watchSlidesProgress },
					],
					s.containerModifierClass
				);
			t.push(...l),
				i.addClass([...t].join(" ")),
				e.emitContainerClasses();
		},
		removeClasses: function () {
			const { $el: e, classNames: t } = this;
			e.removeClass(t.join(" ")), this.emitContainerClasses();
		},
	};
	var W = {
		init: !0,
		direction: "horizontal",
		touchEventsTarget: "wrapper",
		initialSlide: 0,
		speed: 300,
		cssMode: !1,
		updateOnWindowResize: !0,
		resizeObserver: !0,
		nested: !1,
		createElements: !1,
		enabled: !0,
		focusableElements:
			"input, select, option, textarea, button, video, label",
		width: null,
		height: null,
		preventInteractionOnTransition: !1,
		userAgent: null,
		url: null,
		edgeSwipeDetection: !1,
		edgeSwipeThreshold: 20,
		autoHeight: !1,
		setWrapperSize: !1,
		virtualTranslate: !1,
		effect: "slide",
		breakpoints: void 0,
		breakpointsBase: "window",
		spaceBetween: 0,
		slidesPerView: 1,
		slidesPerGroup: 1,
		slidesPerGroupSkip: 0,
		slidesPerGroupAuto: !1,
		centeredSlides: !1,
		centeredSlidesBounds: !1,
		slidesOffsetBefore: 0,
		slidesOffsetAfter: 0,
		normalizeSlideIndex: !0,
		centerInsufficientSlides: !1,
		watchOverflow: !0,
		roundLengths: !1,
		touchRatio: 1,
		touchAngle: 45,
		simulateTouch: !0,
		shortSwipes: !0,
		longSwipes: !0,
		longSwipesRatio: 0.5,
		longSwipesMs: 300,
		followFinger: !0,
		allowTouchMove: !0,
		threshold: 0,
		touchMoveStopPropagation: !1,
		touchStartPreventDefault: !0,
		touchStartForcePreventDefault: !1,
		touchReleaseOnEdges: !1,
		uniqueNavElements: !0,
		resistance: !0,
		resistanceRatio: 0.85,
		watchSlidesProgress: !1,
		grabCursor: !1,
		preventClicks: !0,
		preventClicksPropagation: !0,
		slideToClickedSlide: !1,
		preloadImages: !0,
		updateOnImagesReady: !0,
		loop: !1,
		loopAdditionalSlides: 0,
		loopedSlides: null,
		loopedSlidesLimit: !0,
		loopFillGroupWithBlank: !1,
		loopPreventsSlide: !0,
		rewind: !1,
		allowSlidePrev: !0,
		allowSlideNext: !0,
		swipeHandler: null,
		noSwiping: !0,
		noSwipingClass: "swiper-no-swiping",
		noSwipingSelector: null,
		passiveListeners: !0,
		maxBackfaceHiddenSlides: 10,
		containerModifierClass: "swiper-",
		slideClass: "swiper-slide",
		slideBlankClass: "swiper-slide-invisible-blank",
		slideActiveClass: "swiper-slide-active",
		slideDuplicateActiveClass: "swiper-slide-duplicate-active",
		slideVisibleClass: "swiper-slide-visible",
		slideDuplicateClass: "swiper-slide-duplicate",
		slideNextClass: "swiper-slide-next",
		slideDuplicateNextClass: "swiper-slide-duplicate-next",
		slidePrevClass: "swiper-slide-prev",
		slideDuplicatePrevClass: "swiper-slide-duplicate-prev",
		wrapperClass: "swiper-wrapper",
		runCallbacksOnInit: !0,
		_emitClasses: !1,
	};
	function j(e, t) {
		return function (s) {
			void 0 === s && (s = {});
			const a = Object.keys(s)[0],
				i = s[a];
			"object" == typeof i && null !== i
				? (["navigation", "pagination", "scrollbar"].indexOf(a) >= 0 &&
						!0 === e[a] &&
						(e[a] = { auto: !0 }),
				  a in e && "enabled" in i
						? (!0 === e[a] && (e[a] = { enabled: !0 }),
						  "object" != typeof e[a] ||
								"enabled" in e[a] ||
								(e[a].enabled = !0),
						  e[a] || (e[a] = { enabled: !1 }),
						  g(t, s))
						: g(t, s))
				: g(t, s);
		};
	}
	const q = {
			eventsEmitter: $,
			update: S,
			translate: M,
			transition: {
				setTransition: function (e, t) {
					const s = this;
					s.params.cssMode || s.$wrapperEl.transition(e),
						s.emit("setTransition", e, t);
				},
				transitionStart: function (e, t) {
					void 0 === e && (e = !0);
					const s = this,
						{ params: a } = s;
					a.cssMode ||
						(a.autoHeight && s.updateAutoHeight(),
						P({
							swiper: s,
							runCallbacks: e,
							direction: t,
							step: "Start",
						}));
				},
				transitionEnd: function (e, t) {
					void 0 === e && (e = !0);
					const s = this,
						{ params: a } = s;
					(s.animating = !1),
						a.cssMode ||
							(s.setTransition(0),
							P({
								swiper: s,
								runCallbacks: e,
								direction: t,
								step: "End",
							}));
				},
			},
			slide: k,
			loop: z,
			grabCursor: {
				setGrabCursor: function (e) {
					const t = this;
					if (
						t.support.touch ||
						!t.params.simulateTouch ||
						(t.params.watchOverflow && t.isLocked) ||
						t.params.cssMode
					)
						return;
					const s =
						"container" === t.params.touchEventsTarget
							? t.el
							: t.wrapperEl;
					(s.style.cursor = "move"),
						(s.style.cursor = e ? "grabbing" : "grab");
				},
				unsetGrabCursor: function () {
					const e = this;
					e.support.touch ||
						(e.params.watchOverflow && e.isLocked) ||
						e.params.cssMode ||
						(e[
							"container" === e.params.touchEventsTarget
								? "el"
								: "wrapperEl"
						].style.cursor = "");
				},
			},
			events: X,
			breakpoints: {
				setBreakpoint: function () {
					const e = this,
						{
							activeIndex: t,
							initialized: s,
							loopedSlides: a = 0,
							params: i,
							$el: r,
						} = e,
						n = i.breakpoints;
					if (!n || (n && 0 === Object.keys(n).length)) return;
					const l = e.getBreakpoint(
						n,
						e.params.breakpointsBase,
						e.el
					);
					if (!l || e.currentBreakpoint === l) return;
					const o = (l in n ? n[l] : void 0) || e.originalParams,
						d = Y(e, i),
						c = Y(e, o),
						p = i.enabled;
					d && !c
						? (r.removeClass(
								`${i.containerModifierClass}grid ${i.containerModifierClass}grid-column`
						  ),
						  e.emitContainerClasses())
						: !d &&
						  c &&
						  (r.addClass(`${i.containerModifierClass}grid`),
						  ((o.grid.fill && "column" === o.grid.fill) ||
								(!o.grid.fill && "column" === i.grid.fill)) &&
								r.addClass(
									`${i.containerModifierClass}grid-column`
								),
						  e.emitContainerClasses()),
						["navigation", "pagination", "scrollbar"].forEach(
							(t) => {
								const s = i[t] && i[t].enabled,
									a = o[t] && o[t].enabled;
								s && !a && e[t].disable(),
									!s && a && e[t].enable();
							}
						);
					const u = o.direction && o.direction !== i.direction,
						h =
							i.loop &&
							(o.slidesPerView !== i.slidesPerView || u);
					u && s && e.changeDirection(), g(e.params, o);
					const m = e.params.enabled;
					Object.assign(e, {
						allowTouchMove: e.params.allowTouchMove,
						allowSlideNext: e.params.allowSlideNext,
						allowSlidePrev: e.params.allowSlidePrev,
					}),
						p && !m ? e.disable() : !p && m && e.enable(),
						(e.currentBreakpoint = l),
						e.emit("_beforeBreakpoint", o),
						h &&
							s &&
							(e.loopDestroy(),
							e.loopCreate(),
							e.updateSlides(),
							e.slideTo(t - a + e.loopedSlides, 0, !1)),
						e.emit("breakpoint", o);
				},
				getBreakpoint: function (e, t, s) {
					if (
						(void 0 === t && (t = "window"),
						!e || ("container" === t && !s))
					)
						return;
					let a = !1;
					const i = r(),
						n = "window" === t ? i.innerHeight : s.clientHeight,
						l = Object.keys(e).map((e) => {
							if ("string" == typeof e && 0 === e.indexOf("@")) {
								const t = parseFloat(e.substr(1));
								return { value: n * t, point: e };
							}
							return { value: e, point: e };
						});
					l.sort(
						(e, t) => parseInt(e.value, 10) - parseInt(t.value, 10)
					);
					for (let e = 0; e < l.length; e += 1) {
						const { point: r, value: n } = l[e];
						"window" === t
							? i.matchMedia(`(min-width: ${n}px)`).matches &&
							  (a = r)
							: n <= s.clientWidth && (a = r);
					}
					return a || "max";
				},
			},
			checkOverflow: {
				checkOverflow: function () {
					const e = this,
						{ isLocked: t, params: s } = e,
						{ slidesOffsetBefore: a } = s;
					if (a) {
						const t = e.slides.length - 1,
							s = e.slidesGrid[t] + e.slidesSizesGrid[t] + 2 * a;
						e.isLocked = e.size > s;
					} else e.isLocked = 1 === e.snapGrid.length;
					!0 === s.allowSlideNext && (e.allowSlideNext = !e.isLocked),
						!0 === s.allowSlidePrev &&
							(e.allowSlidePrev = !e.isLocked),
						t && t !== e.isLocked && (e.isEnd = !1),
						t !== e.isLocked &&
							e.emit(e.isLocked ? "lock" : "unlock");
				},
			},
			classes: R,
			images: {
				loadImage: function (e, t, s, a, i, n) {
					const l = r();
					let o;
					function c() {
						n && n();
					}
					d(e).parent("picture")[0] || (e.complete && i)
						? c()
						: t
						? ((o = new l.Image()),
						  (o.onload = c),
						  (o.onerror = c),
						  a && (o.sizes = a),
						  s && (o.srcset = s),
						  t && (o.src = t))
						: c();
				},
				preloadImages: function () {
					const e = this;
					function t() {
						null != e &&
							e &&
							!e.destroyed &&
							(void 0 !== e.imagesLoaded && (e.imagesLoaded += 1),
							e.imagesLoaded === e.imagesToLoad.length &&
								(e.params.updateOnImagesReady && e.update(),
								e.emit("imagesReady")));
					}
					e.imagesToLoad = e.$el.find("img");
					for (let s = 0; s < e.imagesToLoad.length; s += 1) {
						const a = e.imagesToLoad[s];
						e.loadImage(
							a,
							a.currentSrc || a.getAttribute("src"),
							a.srcset || a.getAttribute("srcset"),
							a.sizes || a.getAttribute("sizes"),
							!0,
							t
						);
					}
				},
			},
		},
		_ = {};
	class V {
		constructor() {
			let e, t;
			for (var s = arguments.length, a = new Array(s), i = 0; i < s; i++)
				a[i] = arguments[i];
			if (
				(1 === a.length &&
				a[0].constructor &&
				"Object" === Object.prototype.toString.call(a[0]).slice(8, -1)
					? (t = a[0])
					: ([e, t] = a),
				t || (t = {}),
				(t = g({}, t)),
				e && !t.el && (t.el = e),
				t.el && d(t.el).length > 1)
			) {
				const e = [];
				return (
					d(t.el).each((s) => {
						const a = g({}, t, { el: s });
						e.push(new V(a));
					}),
					e
				);
			}
			const r = this;
			(r.__swiper__ = !0),
				(r.support = E()),
				(r.device = C({ userAgent: t.userAgent })),
				(r.browser = T()),
				(r.eventsListeners = {}),
				(r.eventsAnyListeners = []),
				(r.modules = [...r.__modules__]),
				t.modules &&
					Array.isArray(t.modules) &&
					r.modules.push(...t.modules);
			const n = {};
			r.modules.forEach((e) => {
				e({
					swiper: r,
					extendParams: j(t, n),
					on: r.on.bind(r),
					once: r.once.bind(r),
					off: r.off.bind(r),
					emit: r.emit.bind(r),
				});
			});
			const l = g({}, W, n);
			return (
				(r.params = g({}, l, _, t)),
				(r.originalParams = g({}, r.params)),
				(r.passedParams = g({}, t)),
				r.params &&
					r.params.on &&
					Object.keys(r.params.on).forEach((e) => {
						r.on(e, r.params.on[e]);
					}),
				r.params && r.params.onAny && r.onAny(r.params.onAny),
				(r.$ = d),
				Object.assign(r, {
					enabled: r.params.enabled,
					el: e,
					classNames: [],
					slides: d(),
					slidesGrid: [],
					snapGrid: [],
					slidesSizesGrid: [],
					isHorizontal: () => "horizontal" === r.params.direction,
					isVertical: () => "vertical" === r.params.direction,
					activeIndex: 0,
					realIndex: 0,
					isBeginning: !0,
					isEnd: !1,
					translate: 0,
					previousTranslate: 0,
					progress: 0,
					velocity: 0,
					animating: !1,
					allowSlideNext: r.params.allowSlideNext,
					allowSlidePrev: r.params.allowSlidePrev,
					touchEvents: (function () {
						const e = [
								"touchstart",
								"touchmove",
								"touchend",
								"touchcancel",
							],
							t = ["pointerdown", "pointermove", "pointerup"];
						return (
							(r.touchEventsTouch = {
								start: e[0],
								move: e[1],
								end: e[2],
								cancel: e[3],
							}),
							(r.touchEventsDesktop = {
								start: t[0],
								move: t[1],
								end: t[2],
							}),
							r.support.touch || !r.params.simulateTouch
								? r.touchEventsTouch
								: r.touchEventsDesktop
						);
					})(),
					touchEventsData: {
						isTouched: void 0,
						isMoved: void 0,
						allowTouchCallbacks: void 0,
						touchStartTime: void 0,
						isScrolling: void 0,
						currentTranslate: void 0,
						startTranslate: void 0,
						allowThresholdMove: void 0,
						focusableElements: r.params.focusableElements,
						lastClickTime: u(),
						clickTimeout: void 0,
						velocities: [],
						allowMomentumBounce: void 0,
						isTouchEvent: void 0,
						startMoving: void 0,
					},
					allowClick: !0,
					allowTouchMove: r.params.allowTouchMove,
					touches: {
						startX: 0,
						startY: 0,
						currentX: 0,
						currentY: 0,
						diff: 0,
					},
					imagesToLoad: [],
					imagesLoaded: 0,
				}),
				r.emit("_swiper"),
				r.params.init && r.init(),
				r
			);
		}
		enable() {
			const e = this;
			e.enabled ||
				((e.enabled = !0),
				e.params.grabCursor && e.setGrabCursor(),
				e.emit("enable"));
		}
		disable() {
			const e = this;
			e.enabled &&
				((e.enabled = !1),
				e.params.grabCursor && e.unsetGrabCursor(),
				e.emit("disable"));
		}
		setProgress(e, t) {
			const s = this;
			e = Math.min(Math.max(e, 0), 1);
			const a = s.minTranslate(),
				i = (s.maxTranslate() - a) * e + a;
			s.translateTo(i, void 0 === t ? 0 : t),
				s.updateActiveIndex(),
				s.updateSlidesClasses();
		}
		emitContainerClasses() {
			const e = this;
			if (!e.params._emitClasses || !e.el) return;
			const t = e.el.className
				.split(" ")
				.filter(
					(t) =>
						0 === t.indexOf("swiper") ||
						0 === t.indexOf(e.params.containerModifierClass)
				);
			e.emit("_containerClasses", t.join(" "));
		}
		getSlideClasses(e) {
			const t = this;
			return t.destroyed
				? ""
				: e.className
						.split(" ")
						.filter(
							(e) =>
								0 === e.indexOf("swiper-slide") ||
								0 === e.indexOf(t.params.slideClass)
						)
						.join(" ");
		}
		emitSlidesClasses() {
			const e = this;
			if (!e.params._emitClasses || !e.el) return;
			const t = [];
			e.slides.each((s) => {
				const a = e.getSlideClasses(s);
				t.push({ slideEl: s, classNames: a }),
					e.emit("_slideClass", s, a);
			}),
				e.emit("_slideClasses", t);
		}
		slidesPerViewDynamic(e, t) {
			void 0 === e && (e = "current"), void 0 === t && (t = !1);
			const {
				params: s,
				slides: a,
				slidesGrid: i,
				slidesSizesGrid: r,
				size: n,
				activeIndex: l,
			} = this;
			let o = 1;
			if (s.centeredSlides) {
				let e,
					t = a[l].swiperSlideSize;
				for (let s = l + 1; s < a.length; s += 1)
					a[s] &&
						!e &&
						((t += a[s].swiperSlideSize),
						(o += 1),
						t > n && (e = !0));
				for (let s = l - 1; s >= 0; s -= 1)
					a[s] &&
						!e &&
						((t += a[s].swiperSlideSize),
						(o += 1),
						t > n && (e = !0));
			} else if ("current" === e)
				for (let e = l + 1; e < a.length; e += 1) {
					(t ? i[e] + r[e] - i[l] < n : i[e] - i[l] < n) && (o += 1);
				}
			else
				for (let e = l - 1; e >= 0; e -= 1) {
					i[l] - i[e] < n && (o += 1);
				}
			return o;
		}
		update() {
			const e = this;
			if (!e || e.destroyed) return;
			const { snapGrid: t, params: s } = e;
			function a() {
				const t = e.rtlTranslate ? -1 * e.translate : e.translate,
					s = Math.min(
						Math.max(t, e.maxTranslate()),
						e.minTranslate()
					);
				e.setTranslate(s),
					e.updateActiveIndex(),
					e.updateSlidesClasses();
			}
			let i;
			s.breakpoints && e.setBreakpoint(),
				e.updateSize(),
				e.updateSlides(),
				e.updateProgress(),
				e.updateSlidesClasses(),
				e.params.freeMode && e.params.freeMode.enabled
					? (a(), e.params.autoHeight && e.updateAutoHeight())
					: ((i =
							("auto" === e.params.slidesPerView ||
								e.params.slidesPerView > 1) &&
							e.isEnd &&
							!e.params.centeredSlides
								? e.slideTo(e.slides.length - 1, 0, !1, !0)
								: e.slideTo(e.activeIndex, 0, !1, !0)),
					  i || a()),
				s.watchOverflow && t !== e.snapGrid && e.checkOverflow(),
				e.emit("update");
		}
		changeDirection(e, t) {
			void 0 === t && (t = !0);
			const s = this,
				a = s.params.direction;
			return (
				e || (e = "horizontal" === a ? "vertical" : "horizontal"),
				e === a ||
					("horizontal" !== e && "vertical" !== e) ||
					(s.$el
						.removeClass(`${s.params.containerModifierClass}${a}`)
						.addClass(`${s.params.containerModifierClass}${e}`),
					s.emitContainerClasses(),
					(s.params.direction = e),
					s.slides.each((t) => {
						"vertical" === e
							? (t.style.width = "")
							: (t.style.height = "");
					}),
					s.emit("changeDirection"),
					t && s.update()),
				s
			);
		}
		changeLanguageDirection(e) {
			const t = this;
			(t.rtl && "rtl" === e) ||
				(!t.rtl && "ltr" === e) ||
				((t.rtl = "rtl" === e),
				(t.rtlTranslate = "horizontal" === t.params.direction && t.rtl),
				t.rtl
					? (t.$el.addClass(`${t.params.containerModifierClass}rtl`),
					  (t.el.dir = "rtl"))
					: (t.$el.removeClass(
							`${t.params.containerModifierClass}rtl`
					  ),
					  (t.el.dir = "ltr")),
				t.update());
		}
		mount(e) {
			const t = this;
			if (t.mounted) return !0;
			const s = d(e || t.params.el);
			if (!(e = s[0])) return !1;
			e.swiper = t;
			const i = () =>
				`.${(t.params.wrapperClass || "").trim().split(" ").join(".")}`;
			let r = (() => {
				if (e && e.shadowRoot && e.shadowRoot.querySelector) {
					const t = d(e.shadowRoot.querySelector(i()));
					return (t.children = (e) => s.children(e)), t;
				}
				return s.children ? s.children(i()) : d(s).children(i());
			})();
			if (0 === r.length && t.params.createElements) {
				const e = a().createElement("div");
				(r = d(e)),
					(e.className = t.params.wrapperClass),
					s.append(e),
					s.children(`.${t.params.slideClass}`).each((e) => {
						r.append(e);
					});
			}
			return (
				Object.assign(t, {
					$el: s,
					el: e,
					$wrapperEl: r,
					wrapperEl: r[0],
					mounted: !0,
					rtl:
						"rtl" === e.dir.toLowerCase() ||
						"rtl" === s.css("direction"),
					rtlTranslate:
						"horizontal" === t.params.direction &&
						("rtl" === e.dir.toLowerCase() ||
							"rtl" === s.css("direction")),
					wrongRTL: "-webkit-box" === r.css("display"),
				}),
				!0
			);
		}
		init(e) {
			const t = this;
			if (t.initialized) return t;
			return (
				!1 === t.mount(e) ||
					(t.emit("beforeInit"),
					t.params.breakpoints && t.setBreakpoint(),
					t.addClasses(),
					t.params.loop && t.loopCreate(),
					t.updateSize(),
					t.updateSlides(),
					t.params.watchOverflow && t.checkOverflow(),
					t.params.grabCursor && t.enabled && t.setGrabCursor(),
					t.params.preloadImages && t.preloadImages(),
					t.params.loop
						? t.slideTo(
								t.params.initialSlide + t.loopedSlides,
								0,
								t.params.runCallbacksOnInit,
								!1,
								!0
						  )
						: t.slideTo(
								t.params.initialSlide,
								0,
								t.params.runCallbacksOnInit,
								!1,
								!0
						  ),
					t.attachEvents(),
					(t.initialized = !0),
					t.emit("init"),
					t.emit("afterInit")),
				t
			);
		}
		destroy(e, t) {
			void 0 === e && (e = !0), void 0 === t && (t = !0);
			const s = this,
				{ params: a, $el: i, $wrapperEl: r, slides: n } = s;
			return (
				void 0 === s.params ||
					s.destroyed ||
					(s.emit("beforeDestroy"),
					(s.initialized = !1),
					s.detachEvents(),
					a.loop && s.loopDestroy(),
					t &&
						(s.removeClasses(),
						i.removeAttr("style"),
						r.removeAttr("style"),
						n &&
							n.length &&
							n
								.removeClass(
									[
										a.slideVisibleClass,
										a.slideActiveClass,
										a.slideNextClass,
										a.slidePrevClass,
									].join(" ")
								)
								.removeAttr("style")
								.removeAttr("data-swiper-slide-index")),
					s.emit("destroy"),
					Object.keys(s.eventsListeners).forEach((e) => {
						s.off(e);
					}),
					!1 !== e &&
						((s.$el[0].swiper = null),
						(function (e) {
							const t = e;
							Object.keys(t).forEach((e) => {
								try {
									t[e] = null;
								} catch (e) {}
								try {
									delete t[e];
								} catch (e) {}
							});
						})(s)),
					(s.destroyed = !0)),
				null
			);
		}
		static extendDefaults(e) {
			g(_, e);
		}
		static get extendedDefaults() {
			return _;
		}
		static get defaults() {
			return W;
		}
		static installModule(e) {
			V.prototype.__modules__ || (V.prototype.__modules__ = []);
			const t = V.prototype.__modules__;
			"function" == typeof e && t.indexOf(e) < 0 && t.push(e);
		}
		static use(e) {
			return Array.isArray(e)
				? (e.forEach((e) => V.installModule(e)), V)
				: (V.installModule(e), V);
		}
	}
	function F(e, t, s, i) {
		const r = a();
		return (
			e.params.createElements &&
				Object.keys(i).forEach((a) => {
					if (!s[a] && !0 === s.auto) {
						let n = e.$el.children(`.${i[a]}`)[0];
						n ||
							((n = r.createElement("div")),
							(n.className = i[a]),
							e.$el.append(n)),
							(s[a] = n),
							(t[a] = n);
					}
				}),
			s
		);
	}
	function U(e) {
		return (
			void 0 === e && (e = ""),
			`.${e
				.trim()
				.replace(/([\.:!\/])/g, "\\$1")
				.replace(/ /g, ".")}`
		);
	}
	function K(e) {
		const t = this,
			{ $wrapperEl: s, params: a } = t;
		if ((a.loop && t.loopDestroy(), "object" == typeof e && "length" in e))
			for (let t = 0; t < e.length; t += 1) e[t] && s.append(e[t]);
		else s.append(e);
		a.loop && t.loopCreate(), a.observer || t.update();
	}
	function Z(e) {
		const t = this,
			{ params: s, $wrapperEl: a, activeIndex: i } = t;
		s.loop && t.loopDestroy();
		let r = i + 1;
		if ("object" == typeof e && "length" in e) {
			for (let t = 0; t < e.length; t += 1) e[t] && a.prepend(e[t]);
			r = i + e.length;
		} else a.prepend(e);
		s.loop && t.loopCreate(), s.observer || t.update(), t.slideTo(r, 0, !1);
	}
	function Q(e, t) {
		const s = this,
			{ $wrapperEl: a, params: i, activeIndex: r } = s;
		let n = r;
		i.loop &&
			((n -= s.loopedSlides),
			s.loopDestroy(),
			(s.slides = a.children(`.${i.slideClass}`)));
		const l = s.slides.length;
		if (e <= 0) return void s.prependSlide(t);
		if (e >= l) return void s.appendSlide(t);
		let o = n > e ? n + 1 : n;
		const d = [];
		for (let t = l - 1; t >= e; t -= 1) {
			const e = s.slides.eq(t);
			e.remove(), d.unshift(e);
		}
		if ("object" == typeof t && "length" in t) {
			for (let e = 0; e < t.length; e += 1) t[e] && a.append(t[e]);
			o = n > e ? n + t.length : n;
		} else a.append(t);
		for (let e = 0; e < d.length; e += 1) a.append(d[e]);
		i.loop && s.loopCreate(),
			i.observer || s.update(),
			i.loop ? s.slideTo(o + s.loopedSlides, 0, !1) : s.slideTo(o, 0, !1);
	}
	function J(e) {
		const t = this,
			{ params: s, $wrapperEl: a, activeIndex: i } = t;
		let r = i;
		s.loop &&
			((r -= t.loopedSlides),
			t.loopDestroy(),
			(t.slides = a.children(`.${s.slideClass}`)));
		let n,
			l = r;
		if ("object" == typeof e && "length" in e) {
			for (let s = 0; s < e.length; s += 1)
				(n = e[s]),
					t.slides[n] && t.slides.eq(n).remove(),
					n < l && (l -= 1);
			l = Math.max(l, 0);
		} else (n = e), t.slides[n] && t.slides.eq(n).remove(), n < l && (l -= 1), (l = Math.max(l, 0));
		s.loop && t.loopCreate(),
			s.observer || t.update(),
			s.loop ? t.slideTo(l + t.loopedSlides, 0, !1) : t.slideTo(l, 0, !1);
	}
	function ee() {
		const e = this,
			t = [];
		for (let s = 0; s < e.slides.length; s += 1) t.push(s);
		e.removeSlide(t);
	}
	function te(e) {
		const {
			effect: t,
			swiper: s,
			on: a,
			setTranslate: i,
			setTransition: r,
			overwriteParams: n,
			perspective: l,
			recreateShadows: o,
			getEffectParams: d,
		} = e;
		let c;
		a("beforeInit", () => {
			if (s.params.effect !== t) return;
			s.classNames.push(`${s.params.containerModifierClass}${t}`),
				l &&
					l() &&
					s.classNames.push(`${s.params.containerModifierClass}3d`);
			const e = n ? n() : {};
			Object.assign(s.params, e), Object.assign(s.originalParams, e);
		}),
			a("setTranslate", () => {
				s.params.effect === t && i();
			}),
			a("setTransition", (e, a) => {
				s.params.effect === t && r(a);
			}),
			a("transitionEnd", () => {
				if (s.params.effect === t && o) {
					if (!d || !d().slideShadows) return;
					s.slides.each((e) => {
						s.$(e)
							.find(
								".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left"
							)
							.remove();
					}),
						o();
				}
			}),
			a("virtualUpdate", () => {
				s.params.effect === t &&
					(s.slides.length || (c = !0),
					requestAnimationFrame(() => {
						c && s.slides && s.slides.length && (i(), (c = !1));
					}));
			});
	}
	function se(e, t) {
		return e.transformEl
			? t
					.find(e.transformEl)
					.css({
						"backface-visibility": "hidden",
						"-webkit-backface-visibility": "hidden",
					})
			: t;
	}
	function ae(e) {
		let { swiper: t, duration: s, transformEl: a, allSlides: i } = e;
		const { slides: r, activeIndex: n, $wrapperEl: l } = t;
		if (t.params.virtualTranslate && 0 !== s) {
			let e,
				s = !1;
			(e = i ? (a ? r.find(a) : r) : a ? r.eq(n).find(a) : r.eq(n)),
				e.transitionEnd(() => {
					if (s) return;
					if (!t || t.destroyed) return;
					(s = !0), (t.animating = !1);
					const e = ["webkitTransitionEnd", "transitionend"];
					for (let t = 0; t < e.length; t += 1) l.trigger(e[t]);
				});
		}
	}
	function ie(e, t, s) {
		const a = "swiper-slide-shadow" + (s ? `-${s}` : ""),
			i = e.transformEl ? t.find(e.transformEl) : t;
		let r = i.children(`.${a}`);
		return (
			r.length ||
				((r = d(
					`<div class="swiper-slide-shadow${s ? `-${s}` : ""}"></div>`
				)),
				i.append(r)),
			r
		);
	}
	Object.keys(q).forEach((e) => {
		Object.keys(q[e]).forEach((t) => {
			V.prototype[t] = q[e][t];
		});
	}),
		V.use([
			function (e) {
				let { swiper: t, on: s, emit: a } = e;
				const i = r();
				let n = null,
					l = null;
				const o = () => {
						t &&
							!t.destroyed &&
							t.initialized &&
							(a("beforeResize"), a("resize"));
					},
					d = () => {
						t &&
							!t.destroyed &&
							t.initialized &&
							a("orientationchange");
					};
				s("init", () => {
					t.params.resizeObserver && void 0 !== i.ResizeObserver
						? t &&
						  !t.destroyed &&
						  t.initialized &&
						  ((n = new ResizeObserver((e) => {
								l = i.requestAnimationFrame(() => {
									const { width: s, height: a } = t;
									let i = s,
										r = a;
									e.forEach((e) => {
										let {
											contentBoxSize: s,
											contentRect: a,
											target: n,
										} = e;
										(n && n !== t.el) ||
											((i = a
												? a.width
												: (s[0] || s).inlineSize),
											(r = a
												? a.height
												: (s[0] || s).blockSize));
									}),
										(i === s && r === a) || o();
								});
						  })),
						  n.observe(t.el))
						: (i.addEventListener("resize", o),
						  i.addEventListener("orientationchange", d));
				}),
					s("destroy", () => {
						l && i.cancelAnimationFrame(l),
							n &&
								n.unobserve &&
								t.el &&
								(n.unobserve(t.el), (n = null)),
							i.removeEventListener("resize", o),
							i.removeEventListener("orientationchange", d);
					});
			},
			function (e) {
				let { swiper: t, extendParams: s, on: a, emit: i } = e;
				const n = [],
					l = r(),
					o = function (e, t) {
						void 0 === t && (t = {});
						const s = new (l.MutationObserver ||
							l.WebkitMutationObserver)((e) => {
							if (1 === e.length)
								return void i("observerUpdate", e[0]);
							const t = function () {
								i("observerUpdate", e[0]);
							};
							l.requestAnimationFrame
								? l.requestAnimationFrame(t)
								: l.setTimeout(t, 0);
						});
						s.observe(e, {
							attributes: void 0 === t.attributes || t.attributes,
							childList: void 0 === t.childList || t.childList,
							characterData:
								void 0 === t.characterData || t.characterData,
						}),
							n.push(s);
					};
				s({
					observer: !1,
					observeParents: !1,
					observeSlideChildren: !1,
				}),
					a("init", () => {
						if (t.params.observer) {
							if (t.params.observeParents) {
								const e = t.$el.parents();
								for (let t = 0; t < e.length; t += 1) o(e[t]);
							}
							o(t.$el[0], {
								childList: t.params.observeSlideChildren,
							}),
								o(t.$wrapperEl[0], { attributes: !1 });
						}
					}),
					a("destroy", () => {
						n.forEach((e) => {
							e.disconnect();
						}),
							n.splice(0, n.length);
					});
			},
		]);
	const re = [
		function (e) {
			let t,
				{ swiper: s, extendParams: a, on: i, emit: r } = e;
			function n(e, t) {
				const a = s.params.virtual;
				if (a.cache && s.virtual.cache[t]) return s.virtual.cache[t];
				const i = a.renderSlide
					? d(a.renderSlide.call(s, e, t))
					: d(
							`<div class="${s.params.slideClass}" data-swiper-slide-index="${t}">${e}</div>`
					  );
				return (
					i.attr("data-swiper-slide-index") ||
						i.attr("data-swiper-slide-index", t),
					a.cache && (s.virtual.cache[t] = i),
					i
				);
			}
			function l(e) {
				const {
						slidesPerView: t,
						slidesPerGroup: a,
						centeredSlides: i,
					} = s.params,
					{ addSlidesBefore: l, addSlidesAfter: o } =
						s.params.virtual,
					{
						from: d,
						to: c,
						slides: p,
						slidesGrid: u,
						offset: h,
					} = s.virtual;
				s.params.cssMode || s.updateActiveIndex();
				const m = s.activeIndex || 0;
				let f, g, v;
				(f = s.rtlTranslate
					? "right"
					: s.isHorizontal()
					? "left"
					: "top"),
					i
						? ((g = Math.floor(t / 2) + a + o),
						  (v = Math.floor(t / 2) + a + l))
						: ((g = t + (a - 1) + o), (v = a + l));
				const w = Math.max((m || 0) - v, 0),
					b = Math.min((m || 0) + g, p.length - 1),
					x = (s.slidesGrid[w] || 0) - (s.slidesGrid[0] || 0);
				function y() {
					s.updateSlides(),
						s.updateProgress(),
						s.updateSlidesClasses(),
						s.lazy && s.params.lazy.enabled && s.lazy.load(),
						r("virtualUpdate");
				}
				if (
					(Object.assign(s.virtual, {
						from: w,
						to: b,
						offset: x,
						slidesGrid: s.slidesGrid,
					}),
					d === w && c === b && !e)
				)
					return (
						s.slidesGrid !== u &&
							x !== h &&
							s.slides.css(f, `${x}px`),
						s.updateProgress(),
						void r("virtualUpdate")
					);
				if (s.params.virtual.renderExternal)
					return (
						s.params.virtual.renderExternal.call(s, {
							offset: x,
							from: w,
							to: b,
							slides: (function () {
								const e = [];
								for (let t = w; t <= b; t += 1) e.push(p[t]);
								return e;
							})(),
						}),
						void (s.params.virtual.renderExternalUpdate
							? y()
							: r("virtualUpdate"))
					);
				const E = [],
					C = [];
				if (e) s.$wrapperEl.find(`.${s.params.slideClass}`).remove();
				else
					for (let e = d; e <= c; e += 1)
						(e < w || e > b) &&
							s.$wrapperEl
								.find(
									`.${s.params.slideClass}[data-swiper-slide-index="${e}"]`
								)
								.remove();
				for (let t = 0; t < p.length; t += 1)
					t >= w &&
						t <= b &&
						(void 0 === c || e
							? C.push(t)
							: (t > c && C.push(t), t < d && E.push(t)));
				C.forEach((e) => {
					s.$wrapperEl.append(n(p[e], e));
				}),
					E.sort((e, t) => t - e).forEach((e) => {
						s.$wrapperEl.prepend(n(p[e], e));
					}),
					s.$wrapperEl.children(".swiper-slide").css(f, `${x}px`),
					y();
			}
			a({
				virtual: {
					enabled: !1,
					slides: [],
					cache: !0,
					renderSlide: null,
					renderExternal: null,
					renderExternalUpdate: !0,
					addSlidesBefore: 0,
					addSlidesAfter: 0,
				},
			}),
				(s.virtual = {
					cache: {},
					from: void 0,
					to: void 0,
					slides: [],
					offset: 0,
					slidesGrid: [],
				}),
				i("beforeInit", () => {
					s.params.virtual.enabled &&
						((s.virtual.slides = s.params.virtual.slides),
						s.classNames.push(
							`${s.params.containerModifierClass}virtual`
						),
						(s.params.watchSlidesProgress = !0),
						(s.originalParams.watchSlidesProgress = !0),
						s.params.initialSlide || l());
				}),
				i("setTranslate", () => {
					s.params.virtual.enabled &&
						(s.params.cssMode && !s._immediateVirtual
							? (clearTimeout(t),
							  (t = setTimeout(() => {
									l();
							  }, 100)))
							: l());
				}),
				i("init update resize", () => {
					s.params.virtual.enabled &&
						s.params.cssMode &&
						v(
							s.wrapperEl,
							"--swiper-virtual-size",
							`${s.virtualSize}px`
						);
				}),
				Object.assign(s.virtual, {
					appendSlide: function (e) {
						if ("object" == typeof e && "length" in e)
							for (let t = 0; t < e.length; t += 1)
								e[t] && s.virtual.slides.push(e[t]);
						else s.virtual.slides.push(e);
						l(!0);
					},
					prependSlide: function (e) {
						const t = s.activeIndex;
						let a = t + 1,
							i = 1;
						if (Array.isArray(e)) {
							for (let t = 0; t < e.length; t += 1)
								e[t] && s.virtual.slides.unshift(e[t]);
							(a = t + e.length), (i = e.length);
						} else s.virtual.slides.unshift(e);
						if (s.params.virtual.cache) {
							const e = s.virtual.cache,
								t = {};
							Object.keys(e).forEach((s) => {
								const a = e[s],
									r = a.attr("data-swiper-slide-index");
								r &&
									a.attr(
										"data-swiper-slide-index",
										parseInt(r, 10) + i
									),
									(t[parseInt(s, 10) + i] = a);
							}),
								(s.virtual.cache = t);
						}
						l(!0), s.slideTo(a, 0);
					},
					removeSlide: function (e) {
						if (null == e) return;
						let t = s.activeIndex;
						if (Array.isArray(e))
							for (let a = e.length - 1; a >= 0; a -= 1)
								s.virtual.slides.splice(e[a], 1),
									s.params.virtual.cache &&
										delete s.virtual.cache[e[a]],
									e[a] < t && (t -= 1),
									(t = Math.max(t, 0));
						else
							s.virtual.slides.splice(e, 1),
								s.params.virtual.cache &&
									delete s.virtual.cache[e],
								e < t && (t -= 1),
								(t = Math.max(t, 0));
						l(!0), s.slideTo(t, 0);
					},
					removeAllSlides: function () {
						(s.virtual.slides = []),
							s.params.virtual.cache && (s.virtual.cache = {}),
							l(!0),
							s.slideTo(0, 0);
					},
					update: l,
				});
		},
		function (e) {
			let { swiper: t, extendParams: s, on: i, emit: n } = e;
			const l = a(),
				o = r();
			function c(e) {
				if (!t.enabled) return;
				const { rtlTranslate: s } = t;
				let a = e;
				a.originalEvent && (a = a.originalEvent);
				const i = a.keyCode || a.charCode,
					r = t.params.keyboard.pageUpDown,
					d = r && 33 === i,
					c = r && 34 === i,
					p = 37 === i,
					u = 39 === i,
					h = 38 === i,
					m = 40 === i;
				if (
					!t.allowSlideNext &&
					((t.isHorizontal() && u) || (t.isVertical() && m) || c)
				)
					return !1;
				if (
					!t.allowSlidePrev &&
					((t.isHorizontal() && p) || (t.isVertical() && h) || d)
				)
					return !1;
				if (
					!(
						a.shiftKey ||
						a.altKey ||
						a.ctrlKey ||
						a.metaKey ||
						(l.activeElement &&
							l.activeElement.nodeName &&
							("input" ===
								l.activeElement.nodeName.toLowerCase() ||
								"textarea" ===
									l.activeElement.nodeName.toLowerCase()))
					)
				) {
					if (
						t.params.keyboard.onlyInViewport &&
						(d || c || p || u || h || m)
					) {
						let e = !1;
						if (
							t.$el.parents(`.${t.params.slideClass}`).length >
								0 &&
							0 ===
								t.$el.parents(`.${t.params.slideActiveClass}`)
									.length
						)
							return;
						const a = t.$el,
							i = a[0].clientWidth,
							r = a[0].clientHeight,
							n = o.innerWidth,
							l = o.innerHeight,
							d = t.$el.offset();
						s && (d.left -= t.$el[0].scrollLeft);
						const c = [
							[d.left, d.top],
							[d.left + i, d.top],
							[d.left, d.top + r],
							[d.left + i, d.top + r],
						];
						for (let t = 0; t < c.length; t += 1) {
							const s = c[t];
							if (
								s[0] >= 0 &&
								s[0] <= n &&
								s[1] >= 0 &&
								s[1] <= l
							) {
								if (0 === s[0] && 0 === s[1]) continue;
								e = !0;
							}
						}
						if (!e) return;
					}
					t.isHorizontal()
						? ((d || c || p || u) &&
								(a.preventDefault
									? a.preventDefault()
									: (a.returnValue = !1)),
						  (((c || u) && !s) || ((d || p) && s)) &&
								t.slideNext(),
						  (((d || p) && !s) || ((c || u) && s)) &&
								t.slidePrev())
						: ((d || c || h || m) &&
								(a.preventDefault
									? a.preventDefault()
									: (a.returnValue = !1)),
						  (c || m) && t.slideNext(),
						  (d || h) && t.slidePrev()),
						n("keyPress", i);
				}
			}
			function p() {
				t.keyboard.enabled ||
					(d(l).on("keydown", c), (t.keyboard.enabled = !0));
			}
			function u() {
				t.keyboard.enabled &&
					(d(l).off("keydown", c), (t.keyboard.enabled = !1));
			}
			(t.keyboard = { enabled: !1 }),
				s({
					keyboard: {
						enabled: !1,
						onlyInViewport: !0,
						pageUpDown: !0,
					},
				}),
				i("init", () => {
					t.params.keyboard.enabled && p();
				}),
				i("destroy", () => {
					t.keyboard.enabled && u();
				}),
				Object.assign(t.keyboard, { enable: p, disable: u });
		},
		function (e) {
			let { swiper: t, extendParams: s, on: a, emit: i } = e;
			const n = r();
			let l;
			s({
				mousewheel: {
					enabled: !1,
					releaseOnEdges: !1,
					invert: !1,
					forceToAxis: !1,
					sensitivity: 1,
					eventsTarget: "container",
					thresholdDelta: null,
					thresholdTime: null,
				},
			}),
				(t.mousewheel = { enabled: !1 });
			let o,
				c = u();
			const h = [];
			function m() {
				t.enabled && (t.mouseEntered = !0);
			}
			function f() {
				t.enabled && (t.mouseEntered = !1);
			}
			function g(e) {
				return (
					!(
						t.params.mousewheel.thresholdDelta &&
						e.delta < t.params.mousewheel.thresholdDelta
					) &&
					!(
						t.params.mousewheel.thresholdTime &&
						u() - c < t.params.mousewheel.thresholdTime
					) &&
					((e.delta >= 6 && u() - c < 60) ||
						(e.direction < 0
							? (t.isEnd && !t.params.loop) ||
							  t.animating ||
							  (t.slideNext(), i("scroll", e.raw))
							: (t.isBeginning && !t.params.loop) ||
							  t.animating ||
							  (t.slidePrev(), i("scroll", e.raw)),
						(c = new n.Date().getTime()),
						!1))
				);
			}
			function v(e) {
				let s = e,
					a = !0;
				if (!t.enabled) return;
				const r = t.params.mousewheel;
				t.params.cssMode && s.preventDefault();
				let n = t.$el;
				if (
					("container" !== t.params.mousewheel.eventsTarget &&
						(n = d(t.params.mousewheel.eventsTarget)),
					!t.mouseEntered &&
						!n[0].contains(s.target) &&
						!r.releaseOnEdges)
				)
					return !0;
				s.originalEvent && (s = s.originalEvent);
				let c = 0;
				const m = t.rtlTranslate ? -1 : 1,
					f = (function (e) {
						let t = 0,
							s = 0,
							a = 0,
							i = 0;
						return (
							"detail" in e && (s = e.detail),
							"wheelDelta" in e && (s = -e.wheelDelta / 120),
							"wheelDeltaY" in e && (s = -e.wheelDeltaY / 120),
							"wheelDeltaX" in e && (t = -e.wheelDeltaX / 120),
							"axis" in e &&
								e.axis === e.HORIZONTAL_AXIS &&
								((t = s), (s = 0)),
							(a = 10 * t),
							(i = 10 * s),
							"deltaY" in e && (i = e.deltaY),
							"deltaX" in e && (a = e.deltaX),
							e.shiftKey && !a && ((a = i), (i = 0)),
							(a || i) &&
								e.deltaMode &&
								(1 === e.deltaMode
									? ((a *= 40), (i *= 40))
									: ((a *= 800), (i *= 800))),
							a && !t && (t = a < 1 ? -1 : 1),
							i && !s && (s = i < 1 ? -1 : 1),
							{ spinX: t, spinY: s, pixelX: a, pixelY: i }
						);
					})(s);
				if (r.forceToAxis)
					if (t.isHorizontal()) {
						if (!(Math.abs(f.pixelX) > Math.abs(f.pixelY)))
							return !0;
						c = -f.pixelX * m;
					} else {
						if (!(Math.abs(f.pixelY) > Math.abs(f.pixelX)))
							return !0;
						c = -f.pixelY;
					}
				else
					c =
						Math.abs(f.pixelX) > Math.abs(f.pixelY)
							? -f.pixelX * m
							: -f.pixelY;
				if (0 === c) return !0;
				r.invert && (c = -c);
				let v = t.getTranslate() + c * r.sensitivity;
				if (
					(v >= t.minTranslate() && (v = t.minTranslate()),
					v <= t.maxTranslate() && (v = t.maxTranslate()),
					(a =
						!!t.params.loop ||
						!(v === t.minTranslate() || v === t.maxTranslate())),
					a && t.params.nested && s.stopPropagation(),
					t.params.freeMode && t.params.freeMode.enabled)
				) {
					const e = {
							time: u(),
							delta: Math.abs(c),
							direction: Math.sign(c),
						},
						a =
							o &&
							e.time < o.time + 500 &&
							e.delta <= o.delta &&
							e.direction === o.direction;
					if (!a) {
						(o = void 0), t.params.loop && t.loopFix();
						let n = t.getTranslate() + c * r.sensitivity;
						const d = t.isBeginning,
							u = t.isEnd;
						if (
							(n >= t.minTranslate() && (n = t.minTranslate()),
							n <= t.maxTranslate() && (n = t.maxTranslate()),
							t.setTransition(0),
							t.setTranslate(n),
							t.updateProgress(),
							t.updateActiveIndex(),
							t.updateSlidesClasses(),
							((!d && t.isBeginning) || (!u && t.isEnd)) &&
								t.updateSlidesClasses(),
							t.params.freeMode.sticky)
						) {
							clearTimeout(l),
								(l = void 0),
								h.length >= 15 && h.shift();
							const s = h.length ? h[h.length - 1] : void 0,
								a = h[0];
							if (
								(h.push(e),
								s &&
									(e.delta > s.delta ||
										e.direction !== s.direction))
							)
								h.splice(0);
							else if (
								h.length >= 15 &&
								e.time - a.time < 500 &&
								a.delta - e.delta >= 1 &&
								e.delta <= 6
							) {
								const s = c > 0 ? 0.8 : 0.2;
								(o = e),
									h.splice(0),
									(l = p(() => {
										t.slideToClosest(
											t.params.speed,
											!0,
											void 0,
											s
										);
									}, 0));
							}
							l ||
								(l = p(() => {
									(o = e),
										h.splice(0),
										t.slideToClosest(
											t.params.speed,
											!0,
											void 0,
											0.5
										);
								}, 500));
						}
						if (
							(a || i("scroll", s),
							t.params.autoplay &&
								t.params.autoplayDisableOnInteraction &&
								t.autoplay.stop(),
							n === t.minTranslate() || n === t.maxTranslate())
						)
							return !0;
					}
				} else {
					const s = {
						time: u(),
						delta: Math.abs(c),
						direction: Math.sign(c),
						raw: e,
					};
					h.length >= 2 && h.shift();
					const a = h.length ? h[h.length - 1] : void 0;
					if (
						(h.push(s),
						a
							? (s.direction !== a.direction ||
									s.delta > a.delta ||
									s.time > a.time + 150) &&
							  g(s)
							: g(s),
						(function (e) {
							const s = t.params.mousewheel;
							if (e.direction < 0) {
								if (
									t.isEnd &&
									!t.params.loop &&
									s.releaseOnEdges
								)
									return !0;
							} else if (
								t.isBeginning &&
								!t.params.loop &&
								s.releaseOnEdges
							)
								return !0;
							return !1;
						})(s))
					)
						return !0;
				}
				return (
					s.preventDefault
						? s.preventDefault()
						: (s.returnValue = !1),
					!1
				);
			}
			function w(e) {
				let s = t.$el;
				"container" !== t.params.mousewheel.eventsTarget &&
					(s = d(t.params.mousewheel.eventsTarget)),
					s[e]("mouseenter", m),
					s[e]("mouseleave", f),
					s[e]("wheel", v);
			}
			function b() {
				return t.params.cssMode
					? (t.wrapperEl.removeEventListener("wheel", v), !0)
					: !t.mousewheel.enabled &&
							(w("on"), (t.mousewheel.enabled = !0), !0);
			}
			function x() {
				return t.params.cssMode
					? (t.wrapperEl.addEventListener(event, v), !0)
					: !!t.mousewheel.enabled &&
							(w("off"), (t.mousewheel.enabled = !1), !0);
			}
			a("init", () => {
				!t.params.mousewheel.enabled && t.params.cssMode && x(),
					t.params.mousewheel.enabled && b();
			}),
				a("destroy", () => {
					t.params.cssMode && b(), t.mousewheel.enabled && x();
				}),
				Object.assign(t.mousewheel, { enable: b, disable: x });
		},
		function (e) {
			let { swiper: t, extendParams: s, on: a, emit: i } = e;
			function r(e) {
				let s;
				return (
					e &&
						((s = d(e)),
						t.params.uniqueNavElements &&
							"string" == typeof e &&
							s.length > 1 &&
							1 === t.$el.find(e).length &&
							(s = t.$el.find(e))),
					s
				);
			}
			function n(e, s) {
				const a = t.params.navigation;
				e &&
					e.length > 0 &&
					(e[s ? "addClass" : "removeClass"](a.disabledClass),
					e[0] && "BUTTON" === e[0].tagName && (e[0].disabled = s),
					t.params.watchOverflow &&
						t.enabled &&
						e[t.isLocked ? "addClass" : "removeClass"](
							a.lockClass
						));
			}
			function l() {
				if (t.params.loop) return;
				const { $nextEl: e, $prevEl: s } = t.navigation;
				n(s, t.isBeginning && !t.params.rewind),
					n(e, t.isEnd && !t.params.rewind);
			}
			function o(e) {
				e.preventDefault(),
					(!t.isBeginning || t.params.loop || t.params.rewind) &&
						(t.slidePrev(), i("navigationPrev"));
			}
			function c(e) {
				e.preventDefault(),
					(!t.isEnd || t.params.loop || t.params.rewind) &&
						(t.slideNext(), i("navigationNext"));
			}
			function p() {
				const e = t.params.navigation;
				if (
					((t.params.navigation = F(
						t,
						t.originalParams.navigation,
						t.params.navigation,
						{
							nextEl: "swiper-button-next",
							prevEl: "swiper-button-prev",
						}
					)),
					!e.nextEl && !e.prevEl)
				)
					return;
				const s = r(e.nextEl),
					a = r(e.prevEl);
				s && s.length > 0 && s.on("click", c),
					a && a.length > 0 && a.on("click", o),
					Object.assign(t.navigation, {
						$nextEl: s,
						nextEl: s && s[0],
						$prevEl: a,
						prevEl: a && a[0],
					}),
					t.enabled ||
						(s && s.addClass(e.lockClass),
						a && a.addClass(e.lockClass));
			}
			function u() {
				const { $nextEl: e, $prevEl: s } = t.navigation;
				e &&
					e.length &&
					(e.off("click", c),
					e.removeClass(t.params.navigation.disabledClass)),
					s &&
						s.length &&
						(s.off("click", o),
						s.removeClass(t.params.navigation.disabledClass));
			}
			s({
				navigation: {
					nextEl: null,
					prevEl: null,
					hideOnClick: !1,
					disabledClass: "swiper-button-disabled",
					hiddenClass: "swiper-button-hidden",
					lockClass: "swiper-button-lock",
					navigationDisabledClass: "swiper-navigation-disabled",
				},
			}),
				(t.navigation = {
					nextEl: null,
					$nextEl: null,
					prevEl: null,
					$prevEl: null,
				}),
				a("init", () => {
					!1 === t.params.navigation.enabled ? h() : (p(), l());
				}),
				a("toEdge fromEdge lock unlock", () => {
					l();
				}),
				a("destroy", () => {
					u();
				}),
				a("enable disable", () => {
					const { $nextEl: e, $prevEl: s } = t.navigation;
					e &&
						e[t.enabled ? "removeClass" : "addClass"](
							t.params.navigation.lockClass
						),
						s &&
							s[t.enabled ? "removeClass" : "addClass"](
								t.params.navigation.lockClass
							);
				}),
				a("click", (e, s) => {
					const { $nextEl: a, $prevEl: r } = t.navigation,
						n = s.target;
					if (
						t.params.navigation.hideOnClick &&
						!d(n).is(r) &&
						!d(n).is(a)
					) {
						if (
							t.pagination &&
							t.params.pagination &&
							t.params.pagination.clickable &&
							(t.pagination.el === n ||
								t.pagination.el.contains(n))
						)
							return;
						let e;
						a
							? (e = a.hasClass(t.params.navigation.hiddenClass))
							: r &&
							  (e = r.hasClass(t.params.navigation.hiddenClass)),
							i(!0 === e ? "navigationShow" : "navigationHide"),
							a && a.toggleClass(t.params.navigation.hiddenClass),
							r && r.toggleClass(t.params.navigation.hiddenClass);
					}
				});
			const h = () => {
				t.$el.addClass(t.params.navigation.navigationDisabledClass),
					u();
			};
			Object.assign(t.navigation, {
				enable: () => {
					t.$el.removeClass(
						t.params.navigation.navigationDisabledClass
					),
						p(),
						l();
				},
				disable: h,
				update: l,
				init: p,
				destroy: u,
			});
		},
		function (e) {
			let { swiper: t, extendParams: s, on: a, emit: i } = e;
			const r = "swiper-pagination";
			let n;
			s({
				pagination: {
					el: null,
					bulletElement: "span",
					clickable: !1,
					hideOnClick: !1,
					renderBullet: null,
					renderProgressbar: null,
					renderFraction: null,
					renderCustom: null,
					progressbarOpposite: !1,
					type: "bullets",
					dynamicBullets: !1,
					dynamicMainBullets: 1,
					formatFractionCurrent: (e) => e,
					formatFractionTotal: (e) => e,
					bulletClass: `${r}-bullet`,
					bulletActiveClass: `${r}-bullet-active`,
					modifierClass: `${r}-`,
					currentClass: `${r}-current`,
					totalClass: `${r}-total`,
					hiddenClass: `${r}-hidden`,
					progressbarFillClass: `${r}-progressbar-fill`,
					progressbarOppositeClass: `${r}-progressbar-opposite`,
					clickableClass: `${r}-clickable`,
					lockClass: `${r}-lock`,
					horizontalClass: `${r}-horizontal`,
					verticalClass: `${r}-vertical`,
					paginationDisabledClass: `${r}-disabled`,
				},
			}),
				(t.pagination = { el: null, $el: null, bullets: [] });
			let l = 0;
			function o() {
				return (
					!t.params.pagination.el ||
					!t.pagination.el ||
					!t.pagination.$el ||
					0 === t.pagination.$el.length
				);
			}
			function c(e, s) {
				const { bulletActiveClass: a } = t.params.pagination;
				e[s]().addClass(`${a}-${s}`)[s]().addClass(`${a}-${s}-${s}`);
			}
			function p() {
				const e = t.rtl,
					s = t.params.pagination;
				if (o()) return;
				const a =
						t.virtual && t.params.virtual.enabled
							? t.virtual.slides.length
							: t.slides.length,
					r = t.pagination.$el;
				let p;
				const u = t.params.loop
					? Math.ceil(
							(a - 2 * t.loopedSlides) / t.params.slidesPerGroup
					  )
					: t.snapGrid.length;
				if (
					(t.params.loop
						? ((p = Math.ceil(
								(t.activeIndex - t.loopedSlides) /
									t.params.slidesPerGroup
						  )),
						  p > a - 1 - 2 * t.loopedSlides &&
								(p -= a - 2 * t.loopedSlides),
						  p > u - 1 && (p -= u),
						  p < 0 &&
								"bullets" !== t.params.paginationType &&
								(p = u + p))
						: (p =
								void 0 !== t.snapIndex
									? t.snapIndex
									: t.activeIndex || 0),
					"bullets" === s.type &&
						t.pagination.bullets &&
						t.pagination.bullets.length > 0)
				) {
					const a = t.pagination.bullets;
					let i, o, u;
					if (
						(s.dynamicBullets &&
							((n = a
								.eq(0)
								[
									t.isHorizontal()
										? "outerWidth"
										: "outerHeight"
								](!0)),
							r.css(
								t.isHorizontal() ? "width" : "height",
								n * (s.dynamicMainBullets + 4) + "px"
							),
							s.dynamicMainBullets > 1 &&
								void 0 !== t.previousIndex &&
								((l +=
									p -
									(t.previousIndex - t.loopedSlides || 0)),
								l > s.dynamicMainBullets - 1
									? (l = s.dynamicMainBullets - 1)
									: l < 0 && (l = 0)),
							(i = Math.max(p - l, 0)),
							(o =
								i +
								(Math.min(a.length, s.dynamicMainBullets) - 1)),
							(u = (o + i) / 2)),
						a.removeClass(
							[
								"",
								"-next",
								"-next-next",
								"-prev",
								"-prev-prev",
								"-main",
							]
								.map((e) => `${s.bulletActiveClass}${e}`)
								.join(" ")
						),
						r.length > 1)
					)
						a.each((e) => {
							const t = d(e),
								a = t.index();
							a === p && t.addClass(s.bulletActiveClass),
								s.dynamicBullets &&
									(a >= i &&
										a <= o &&
										t.addClass(
											`${s.bulletActiveClass}-main`
										),
									a === i && c(t, "prev"),
									a === o && c(t, "next"));
						});
					else {
						const e = a.eq(p),
							r = e.index();
						if (
							(e.addClass(s.bulletActiveClass), s.dynamicBullets)
						) {
							const e = a.eq(i),
								n = a.eq(o);
							for (let e = i; e <= o; e += 1)
								a.eq(e).addClass(`${s.bulletActiveClass}-main`);
							if (t.params.loop)
								if (r >= a.length) {
									for (
										let e = s.dynamicMainBullets;
										e >= 0;
										e -= 1
									)
										a.eq(a.length - e).addClass(
											`${s.bulletActiveClass}-main`
										);
									a.eq(
										a.length - s.dynamicMainBullets - 1
									).addClass(`${s.bulletActiveClass}-prev`);
								} else c(e, "prev"), c(n, "next");
							else c(e, "prev"), c(n, "next");
						}
					}
					if (s.dynamicBullets) {
						const i = Math.min(a.length, s.dynamicMainBullets + 4),
							r = (n * i - n) / 2 - u * n,
							l = e ? "right" : "left";
						a.css(t.isHorizontal() ? l : "top", `${r}px`);
					}
				}
				if (
					("fraction" === s.type &&
						(r
							.find(U(s.currentClass))
							.text(s.formatFractionCurrent(p + 1)),
						r.find(U(s.totalClass)).text(s.formatFractionTotal(u))),
					"progressbar" === s.type)
				) {
					let e;
					e = s.progressbarOpposite
						? t.isHorizontal()
							? "vertical"
							: "horizontal"
						: t.isHorizontal()
						? "horizontal"
						: "vertical";
					const a = (p + 1) / u;
					let i = 1,
						n = 1;
					"horizontal" === e ? (i = a) : (n = a),
						r
							.find(U(s.progressbarFillClass))
							.transform(
								`translate3d(0,0,0) scaleX(${i}) scaleY(${n})`
							)
							.transition(t.params.speed);
				}
				"custom" === s.type && s.renderCustom
					? (r.html(s.renderCustom(t, p + 1, u)),
					  i("paginationRender", r[0]))
					: i("paginationUpdate", r[0]),
					t.params.watchOverflow &&
						t.enabled &&
						r[t.isLocked ? "addClass" : "removeClass"](s.lockClass);
			}
			function u() {
				const e = t.params.pagination;
				if (o()) return;
				const s =
						t.virtual && t.params.virtual.enabled
							? t.virtual.slides.length
							: t.slides.length,
					a = t.pagination.$el;
				let r = "";
				if ("bullets" === e.type) {
					let i = t.params.loop
						? Math.ceil(
								(s - 2 * t.loopedSlides) /
									t.params.slidesPerGroup
						  )
						: t.snapGrid.length;
					t.params.freeMode &&
						t.params.freeMode.enabled &&
						!t.params.loop &&
						i > s &&
						(i = s);
					for (let s = 0; s < i; s += 1)
						e.renderBullet
							? (r += e.renderBullet.call(t, s, e.bulletClass))
							: (r += `<${e.bulletElement} class="${e.bulletClass}"></${e.bulletElement}>`);
					a.html(r),
						(t.pagination.bullets = a.find(U(e.bulletClass)));
				}
				"fraction" === e.type &&
					((r = e.renderFraction
						? e.renderFraction.call(t, e.currentClass, e.totalClass)
						: `<span class="${e.currentClass}"></span> / <span class="${e.totalClass}"></span>`),
					a.html(r)),
					"progressbar" === e.type &&
						((r = e.renderProgressbar
							? e.renderProgressbar.call(
									t,
									e.progressbarFillClass
							  )
							: `<span class="${e.progressbarFillClass}"></span>`),
						a.html(r)),
					"custom" !== e.type &&
						i("paginationRender", t.pagination.$el[0]);
			}
			function h() {
				t.params.pagination = F(
					t,
					t.originalParams.pagination,
					t.params.pagination,
					{ el: "swiper-pagination" }
				);
				const e = t.params.pagination;
				if (!e.el) return;
				let s = d(e.el);
				0 !== s.length &&
					(t.params.uniqueNavElements &&
						"string" == typeof e.el &&
						s.length > 1 &&
						((s = t.$el.find(e.el)),
						s.length > 1 &&
							(s = s.filter(
								(e) => d(e).parents(".swiper")[0] === t.el
							))),
					"bullets" === e.type &&
						e.clickable &&
						s.addClass(e.clickableClass),
					s.addClass(e.modifierClass + e.type),
					s.addClass(
						t.isHorizontal() ? e.horizontalClass : e.verticalClass
					),
					"bullets" === e.type &&
						e.dynamicBullets &&
						(s.addClass(`${e.modifierClass}${e.type}-dynamic`),
						(l = 0),
						e.dynamicMainBullets < 1 && (e.dynamicMainBullets = 1)),
					"progressbar" === e.type &&
						e.progressbarOpposite &&
						s.addClass(e.progressbarOppositeClass),
					e.clickable &&
						s.on("click", U(e.bulletClass), function (e) {
							e.preventDefault();
							let s = d(this).index() * t.params.slidesPerGroup;
							t.params.loop && (s += t.loopedSlides),
								t.slideTo(s);
						}),
					Object.assign(t.pagination, { $el: s, el: s[0] }),
					t.enabled || s.addClass(e.lockClass));
			}
			function m() {
				const e = t.params.pagination;
				if (o()) return;
				const s = t.pagination.$el;
				s.removeClass(e.hiddenClass),
					s.removeClass(e.modifierClass + e.type),
					s.removeClass(
						t.isHorizontal() ? e.horizontalClass : e.verticalClass
					),
					t.pagination.bullets &&
						t.pagination.bullets.removeClass &&
						t.pagination.bullets.removeClass(e.bulletActiveClass),
					e.clickable && s.off("click", U(e.bulletClass));
			}
			a("init", () => {
				!1 === t.params.pagination.enabled ? f() : (h(), u(), p());
			}),
				a("activeIndexChange", () => {
					(t.params.loop || void 0 === t.snapIndex) && p();
				}),
				a("snapIndexChange", () => {
					t.params.loop || p();
				}),
				a("slidesLengthChange", () => {
					t.params.loop && (u(), p());
				}),
				a("snapGridLengthChange", () => {
					t.params.loop || (u(), p());
				}),
				a("destroy", () => {
					m();
				}),
				a("enable disable", () => {
					const { $el: e } = t.pagination;
					e &&
						e[t.enabled ? "removeClass" : "addClass"](
							t.params.pagination.lockClass
						);
				}),
				a("lock unlock", () => {
					p();
				}),
				a("click", (e, s) => {
					const a = s.target,
						{ $el: r } = t.pagination;
					if (
						t.params.pagination.el &&
						t.params.pagination.hideOnClick &&
						r &&
						r.length > 0 &&
						!d(a).hasClass(t.params.pagination.bulletClass)
					) {
						if (
							t.navigation &&
							((t.navigation.nextEl &&
								a === t.navigation.nextEl) ||
								(t.navigation.prevEl &&
									a === t.navigation.prevEl))
						)
							return;
						const e = r.hasClass(t.params.pagination.hiddenClass);
						i(!0 === e ? "paginationShow" : "paginationHide"),
							r.toggleClass(t.params.pagination.hiddenClass);
					}
				});
			const f = () => {
				t.$el.addClass(t.params.pagination.paginationDisabledClass),
					t.pagination.$el &&
						t.pagination.$el.addClass(
							t.params.pagination.paginationDisabledClass
						),
					m();
			};
			Object.assign(t.pagination, {
				enable: () => {
					t.$el.removeClass(
						t.params.pagination.paginationDisabledClass
					),
						t.pagination.$el &&
							t.pagination.$el.removeClass(
								t.params.pagination.paginationDisabledClass
							),
						h(),
						u(),
						p();
				},
				disable: f,
				render: u,
				update: p,
				init: h,
				destroy: m,
			});
		},
		function (e) {
			let { swiper: t, extendParams: s, on: i, emit: r } = e;
			const n = a();
			let l,
				o,
				c,
				u,
				h = !1,
				m = null,
				f = null;
			function g() {
				if (!t.params.scrollbar.el || !t.scrollbar.el) return;
				const { scrollbar: e, rtlTranslate: s, progress: a } = t,
					{ $dragEl: i, $el: r } = e,
					n = t.params.scrollbar;
				let l = o,
					d = (c - o) * a;
				s
					? ((d = -d),
					  d > 0
							? ((l = o - d), (d = 0))
							: -d + o > c && (l = c + d))
					: d < 0
					? ((l = o + d), (d = 0))
					: d + o > c && (l = c - d),
					t.isHorizontal()
						? (i.transform(`translate3d(${d}px, 0, 0)`),
						  (i[0].style.width = `${l}px`))
						: (i.transform(`translate3d(0px, ${d}px, 0)`),
						  (i[0].style.height = `${l}px`)),
					n.hide &&
						(clearTimeout(m),
						(r[0].style.opacity = 1),
						(m = setTimeout(() => {
							(r[0].style.opacity = 0), r.transition(400);
						}, 1e3)));
			}
			function v() {
				if (!t.params.scrollbar.el || !t.scrollbar.el) return;
				const { scrollbar: e } = t,
					{ $dragEl: s, $el: a } = e;
				(s[0].style.width = ""),
					(s[0].style.height = ""),
					(c = t.isHorizontal()
						? a[0].offsetWidth
						: a[0].offsetHeight),
					(u =
						t.size /
						(t.virtualSize +
							t.params.slidesOffsetBefore -
							(t.params.centeredSlides ? t.snapGrid[0] : 0))),
					(o =
						"auto" === t.params.scrollbar.dragSize
							? c * u
							: parseInt(t.params.scrollbar.dragSize, 10)),
					t.isHorizontal()
						? (s[0].style.width = `${o}px`)
						: (s[0].style.height = `${o}px`),
					(a[0].style.display = u >= 1 ? "none" : ""),
					t.params.scrollbar.hide && (a[0].style.opacity = 0),
					t.params.watchOverflow &&
						t.enabled &&
						e.$el[t.isLocked ? "addClass" : "removeClass"](
							t.params.scrollbar.lockClass
						);
			}
			function w(e) {
				return t.isHorizontal()
					? "touchstart" === e.type || "touchmove" === e.type
						? e.targetTouches[0].clientX
						: e.clientX
					: "touchstart" === e.type || "touchmove" === e.type
					? e.targetTouches[0].clientY
					: e.clientY;
			}
			function b(e) {
				const { scrollbar: s, rtlTranslate: a } = t,
					{ $el: i } = s;
				let r;
				(r =
					(w(e) -
						i.offset()[t.isHorizontal() ? "left" : "top"] -
						(null !== l ? l : o / 2)) /
					(c - o)),
					(r = Math.max(Math.min(r, 1), 0)),
					a && (r = 1 - r);
				const n =
					t.minTranslate() +
					(t.maxTranslate() - t.minTranslate()) * r;
				t.updateProgress(n),
					t.setTranslate(n),
					t.updateActiveIndex(),
					t.updateSlidesClasses();
			}
			function x(e) {
				const s = t.params.scrollbar,
					{ scrollbar: a, $wrapperEl: i } = t,
					{ $el: n, $dragEl: o } = a;
				(h = !0),
					(l =
						e.target === o[0] || e.target === o
							? w(e) -
							  e.target.getBoundingClientRect()[
									t.isHorizontal() ? "left" : "top"
							  ]
							: null),
					e.preventDefault(),
					e.stopPropagation(),
					i.transition(100),
					o.transition(100),
					b(e),
					clearTimeout(f),
					n.transition(0),
					s.hide && n.css("opacity", 1),
					t.params.cssMode &&
						t.$wrapperEl.css("scroll-snap-type", "none"),
					r("scrollbarDragStart", e);
			}
			function y(e) {
				const { scrollbar: s, $wrapperEl: a } = t,
					{ $el: i, $dragEl: n } = s;
				h &&
					(e.preventDefault
						? e.preventDefault()
						: (e.returnValue = !1),
					b(e),
					a.transition(0),
					i.transition(0),
					n.transition(0),
					r("scrollbarDragMove", e));
			}
			function E(e) {
				const s = t.params.scrollbar,
					{ scrollbar: a, $wrapperEl: i } = t,
					{ $el: n } = a;
				h &&
					((h = !1),
					t.params.cssMode &&
						(t.$wrapperEl.css("scroll-snap-type", ""),
						i.transition("")),
					s.hide &&
						(clearTimeout(f),
						(f = p(() => {
							n.css("opacity", 0), n.transition(400);
						}, 1e3))),
					r("scrollbarDragEnd", e),
					s.snapOnRelease && t.slideToClosest());
			}
			function C(e) {
				const {
						scrollbar: s,
						touchEventsTouch: a,
						touchEventsDesktop: i,
						params: r,
						support: l,
					} = t,
					o = s.$el;
				if (!o) return;
				const d = o[0],
					c = !(!l.passiveListener || !r.passiveListeners) && {
						passive: !1,
						capture: !1,
					},
					p = !(!l.passiveListener || !r.passiveListeners) && {
						passive: !0,
						capture: !1,
					};
				if (!d) return;
				const u =
					"on" === e ? "addEventListener" : "removeEventListener";
				l.touch
					? (d[u](a.start, x, c),
					  d[u](a.move, y, c),
					  d[u](a.end, E, p))
					: (d[u](i.start, x, c),
					  n[u](i.move, y, c),
					  n[u](i.end, E, p));
			}
			function T() {
				const { scrollbar: e, $el: s } = t;
				t.params.scrollbar = F(
					t,
					t.originalParams.scrollbar,
					t.params.scrollbar,
					{ el: "swiper-scrollbar" }
				);
				const a = t.params.scrollbar;
				if (!a.el) return;
				let i = d(a.el);
				t.params.uniqueNavElements &&
					"string" == typeof a.el &&
					i.length > 1 &&
					1 === s.find(a.el).length &&
					(i = s.find(a.el)),
					i.addClass(
						t.isHorizontal() ? a.horizontalClass : a.verticalClass
					);
				let r = i.find(`.${t.params.scrollbar.dragClass}`);
				0 === r.length &&
					((r = d(
						`<div class="${t.params.scrollbar.dragClass}"></div>`
					)),
					i.append(r)),
					Object.assign(e, {
						$el: i,
						el: i[0],
						$dragEl: r,
						dragEl: r[0],
					}),
					a.draggable &&
						t.params.scrollbar.el &&
						t.scrollbar.el &&
						C("on"),
					i &&
						i[t.enabled ? "removeClass" : "addClass"](
							t.params.scrollbar.lockClass
						);
			}
			function $() {
				const e = t.params.scrollbar,
					s = t.scrollbar.$el;
				s &&
					s.removeClass(
						t.isHorizontal() ? e.horizontalClass : e.verticalClass
					),
					t.params.scrollbar.el && t.scrollbar.el && C("off");
			}
			s({
				scrollbar: {
					el: null,
					dragSize: "auto",
					hide: !1,
					draggable: !1,
					snapOnRelease: !0,
					lockClass: "swiper-scrollbar-lock",
					dragClass: "swiper-scrollbar-drag",
					scrollbarDisabledClass: "swiper-scrollbar-disabled",
					horizontalClass: "swiper-scrollbar-horizontal",
					verticalClass: "swiper-scrollbar-vertical",
				},
			}),
				(t.scrollbar = {
					el: null,
					dragEl: null,
					$el: null,
					$dragEl: null,
				}),
				i("init", () => {
					!1 === t.params.scrollbar.enabled ? S() : (T(), v(), g());
				}),
				i("update resize observerUpdate lock unlock", () => {
					v();
				}),
				i("setTranslate", () => {
					g();
				}),
				i("setTransition", (e, s) => {
					!(function (e) {
						t.params.scrollbar.el &&
							t.scrollbar.el &&
							t.scrollbar.$dragEl.transition(e);
					})(s);
				}),
				i("enable disable", () => {
					const { $el: e } = t.scrollbar;
					e &&
						e[t.enabled ? "removeClass" : "addClass"](
							t.params.scrollbar.lockClass
						);
				}),
				i("destroy", () => {
					$();
				});
			const S = () => {
				t.$el.addClass(t.params.scrollbar.scrollbarDisabledClass),
					t.scrollbar.$el &&
						t.scrollbar.$el.addClass(
							t.params.scrollbar.scrollbarDisabledClass
						),
					$();
			};
			Object.assign(t.scrollbar, {
				enable: () => {
					t.$el.removeClass(
						t.params.scrollbar.scrollbarDisabledClass
					),
						t.scrollbar.$el &&
							t.scrollbar.$el.removeClass(
								t.params.scrollbar.scrollbarDisabledClass
							),
						T(),
						v(),
						g();
				},
				disable: S,
				updateSize: v,
				setTranslate: g,
				init: T,
				destroy: $,
			});
		},
		function (e) {
			let { swiper: t, extendParams: s, on: a } = e;
			s({ parallax: { enabled: !1 } });
			const i = (e, s) => {
					const { rtl: a } = t,
						i = d(e),
						r = a ? -1 : 1,
						n = i.attr("data-swiper-parallax") || "0";
					let l = i.attr("data-swiper-parallax-x"),
						o = i.attr("data-swiper-parallax-y");
					const c = i.attr("data-swiper-parallax-scale"),
						p = i.attr("data-swiper-parallax-opacity");
					if (
						(l || o
							? ((l = l || "0"), (o = o || "0"))
							: t.isHorizontal()
							? ((l = n), (o = "0"))
							: ((o = n), (l = "0")),
						(l =
							l.indexOf("%") >= 0
								? parseInt(l, 10) * s * r + "%"
								: l * s * r + "px"),
						(o =
							o.indexOf("%") >= 0
								? parseInt(o, 10) * s + "%"
								: o * s + "px"),
						null != p)
					) {
						const e = p - (p - 1) * (1 - Math.abs(s));
						i[0].style.opacity = e;
					}
					if (null == c) i.transform(`translate3d(${l}, ${o}, 0px)`);
					else {
						const e = c - (c - 1) * (1 - Math.abs(s));
						i.transform(`translate3d(${l}, ${o}, 0px) scale(${e})`);
					}
				},
				r = () => {
					const { $el: e, slides: s, progress: a, snapGrid: r } = t;
					e
						.children(
							"[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]"
						)
						.each((e) => {
							i(e, a);
						}),
						s.each((e, s) => {
							let n = e.progress;
							t.params.slidesPerGroup > 1 &&
								"auto" !== t.params.slidesPerView &&
								(n += Math.ceil(s / 2) - a * (r.length - 1)),
								(n = Math.min(Math.max(n, -1), 1)),
								d(e)
									.find(
										"[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]"
									)
									.each((e) => {
										i(e, n);
									});
						});
				};
			a("beforeInit", () => {
				t.params.parallax.enabled &&
					((t.params.watchSlidesProgress = !0),
					(t.originalParams.watchSlidesProgress = !0));
			}),
				a("init", () => {
					t.params.parallax.enabled && r();
				}),
				a("setTranslate", () => {
					t.params.parallax.enabled && r();
				}),
				a("setTransition", (e, s) => {
					t.params.parallax.enabled &&
						(function (e) {
							void 0 === e && (e = t.params.speed);
							const { $el: s } = t;
							s.find(
								"[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]"
							).each((t) => {
								const s = d(t);
								let a =
									parseInt(
										s.attr("data-swiper-parallax-duration"),
										10
									) || e;
								0 === e && (a = 0), s.transition(a);
							});
						})(s);
				});
		},
		function (e) {
			let { swiper: t, extendParams: s, on: a, emit: i } = e;
			const n = r();
			s({
				zoom: {
					enabled: !1,
					maxRatio: 3,
					minRatio: 1,
					toggle: !0,
					containerClass: "swiper-zoom-container",
					zoomedSlideClass: "swiper-slide-zoomed",
				},
			}),
				(t.zoom = { enabled: !1 });
			let l,
				o,
				c,
				p = 1,
				u = !1;
			const m = {
					$slideEl: void 0,
					slideWidth: void 0,
					slideHeight: void 0,
					$imageEl: void 0,
					$imageWrapEl: void 0,
					maxRatio: 3,
				},
				f = {
					isTouched: void 0,
					isMoved: void 0,
					currentX: void 0,
					currentY: void 0,
					minX: void 0,
					minY: void 0,
					maxX: void 0,
					maxY: void 0,
					width: void 0,
					height: void 0,
					startX: void 0,
					startY: void 0,
					touchesStart: {},
					touchesCurrent: {},
				},
				g = {
					x: void 0,
					y: void 0,
					prevPositionX: void 0,
					prevPositionY: void 0,
					prevTime: void 0,
				};
			let v = 1;
			function w(e) {
				if (e.targetTouches.length < 2) return 1;
				const t = e.targetTouches[0].pageX,
					s = e.targetTouches[0].pageY,
					a = e.targetTouches[1].pageX,
					i = e.targetTouches[1].pageY;
				return Math.sqrt((a - t) ** 2 + (i - s) ** 2);
			}
			function b(e) {
				const s = t.support,
					a = t.params.zoom;
				if (((o = !1), (c = !1), !s.gestures)) {
					if (
						"touchstart" !== e.type ||
						("touchstart" === e.type && e.targetTouches.length < 2)
					)
						return;
					(o = !0), (m.scaleStart = w(e));
				}
				(m.$slideEl && m.$slideEl.length) ||
				((m.$slideEl = d(e.target).closest(`.${t.params.slideClass}`)),
				0 === m.$slideEl.length &&
					(m.$slideEl = t.slides.eq(t.activeIndex)),
				(m.$imageEl = m.$slideEl
					.find(`.${a.containerClass}`)
					.eq(0)
					.find("picture, img, svg, canvas, .swiper-zoom-target")
					.eq(0)),
				(m.$imageWrapEl = m.$imageEl.parent(`.${a.containerClass}`)),
				(m.maxRatio =
					m.$imageWrapEl.attr("data-swiper-zoom") || a.maxRatio),
				0 !== m.$imageWrapEl.length)
					? (m.$imageEl && m.$imageEl.transition(0), (u = !0))
					: (m.$imageEl = void 0);
			}
			function x(e) {
				const s = t.support,
					a = t.params.zoom,
					i = t.zoom;
				if (!s.gestures) {
					if (
						"touchmove" !== e.type ||
						("touchmove" === e.type && e.targetTouches.length < 2)
					)
						return;
					(c = !0), (m.scaleMove = w(e));
				}
				m.$imageEl && 0 !== m.$imageEl.length
					? (s.gestures
							? (i.scale = e.scale * p)
							: (i.scale = (m.scaleMove / m.scaleStart) * p),
					  i.scale > m.maxRatio &&
							(i.scale =
								m.maxRatio -
								1 +
								(i.scale - m.maxRatio + 1) ** 0.5),
					  i.scale < a.minRatio &&
							(i.scale =
								a.minRatio +
								1 -
								(a.minRatio - i.scale + 1) ** 0.5),
					  m.$imageEl.transform(
							`translate3d(0,0,0) scale(${i.scale})`
					  ))
					: "gesturechange" === e.type && b(e);
			}
			function y(e) {
				const s = t.device,
					a = t.support,
					i = t.params.zoom,
					r = t.zoom;
				if (!a.gestures) {
					if (!o || !c) return;
					if (
						"touchend" !== e.type ||
						("touchend" === e.type &&
							e.changedTouches.length < 2 &&
							!s.android)
					)
						return;
					(o = !1), (c = !1);
				}
				m.$imageEl &&
					0 !== m.$imageEl.length &&
					((r.scale = Math.max(
						Math.min(r.scale, m.maxRatio),
						i.minRatio
					)),
					m.$imageEl
						.transition(t.params.speed)
						.transform(`translate3d(0,0,0) scale(${r.scale})`),
					(p = r.scale),
					(u = !1),
					1 === r.scale && (m.$slideEl = void 0));
			}
			function E(e) {
				const s = t.zoom;
				if (!m.$imageEl || 0 === m.$imageEl.length) return;
				if (((t.allowClick = !1), !f.isTouched || !m.$slideEl)) return;
				f.isMoved ||
					((f.width = m.$imageEl[0].offsetWidth),
					(f.height = m.$imageEl[0].offsetHeight),
					(f.startX = h(m.$imageWrapEl[0], "x") || 0),
					(f.startY = h(m.$imageWrapEl[0], "y") || 0),
					(m.slideWidth = m.$slideEl[0].offsetWidth),
					(m.slideHeight = m.$slideEl[0].offsetHeight),
					m.$imageWrapEl.transition(0));
				const a = f.width * s.scale,
					i = f.height * s.scale;
				if (!(a < m.slideWidth && i < m.slideHeight)) {
					if (
						((f.minX = Math.min(m.slideWidth / 2 - a / 2, 0)),
						(f.maxX = -f.minX),
						(f.minY = Math.min(m.slideHeight / 2 - i / 2, 0)),
						(f.maxY = -f.minY),
						(f.touchesCurrent.x =
							"touchmove" === e.type
								? e.targetTouches[0].pageX
								: e.pageX),
						(f.touchesCurrent.y =
							"touchmove" === e.type
								? e.targetTouches[0].pageY
								: e.pageY),
						!f.isMoved && !u)
					) {
						if (
							t.isHorizontal() &&
							((Math.floor(f.minX) === Math.floor(f.startX) &&
								f.touchesCurrent.x < f.touchesStart.x) ||
								(Math.floor(f.maxX) === Math.floor(f.startX) &&
									f.touchesCurrent.x > f.touchesStart.x))
						)
							return void (f.isTouched = !1);
						if (
							!t.isHorizontal() &&
							((Math.floor(f.minY) === Math.floor(f.startY) &&
								f.touchesCurrent.y < f.touchesStart.y) ||
								(Math.floor(f.maxY) === Math.floor(f.startY) &&
									f.touchesCurrent.y > f.touchesStart.y))
						)
							return void (f.isTouched = !1);
					}
					e.cancelable && e.preventDefault(),
						e.stopPropagation(),
						(f.isMoved = !0),
						(f.currentX =
							f.touchesCurrent.x - f.touchesStart.x + f.startX),
						(f.currentY =
							f.touchesCurrent.y - f.touchesStart.y + f.startY),
						f.currentX < f.minX &&
							(f.currentX =
								f.minX + 1 - (f.minX - f.currentX + 1) ** 0.8),
						f.currentX > f.maxX &&
							(f.currentX =
								f.maxX - 1 + (f.currentX - f.maxX + 1) ** 0.8),
						f.currentY < f.minY &&
							(f.currentY =
								f.minY + 1 - (f.minY - f.currentY + 1) ** 0.8),
						f.currentY > f.maxY &&
							(f.currentY =
								f.maxY - 1 + (f.currentY - f.maxY + 1) ** 0.8),
						g.prevPositionX ||
							(g.prevPositionX = f.touchesCurrent.x),
						g.prevPositionY ||
							(g.prevPositionY = f.touchesCurrent.y),
						g.prevTime || (g.prevTime = Date.now()),
						(g.x =
							(f.touchesCurrent.x - g.prevPositionX) /
							(Date.now() - g.prevTime) /
							2),
						(g.y =
							(f.touchesCurrent.y - g.prevPositionY) /
							(Date.now() - g.prevTime) /
							2),
						Math.abs(f.touchesCurrent.x - g.prevPositionX) < 2 &&
							(g.x = 0),
						Math.abs(f.touchesCurrent.y - g.prevPositionY) < 2 &&
							(g.y = 0),
						(g.prevPositionX = f.touchesCurrent.x),
						(g.prevPositionY = f.touchesCurrent.y),
						(g.prevTime = Date.now()),
						m.$imageWrapEl.transform(
							`translate3d(${f.currentX}px, ${f.currentY}px,0)`
						);
				}
			}
			function C() {
				const e = t.zoom;
				m.$slideEl &&
					t.previousIndex !== t.activeIndex &&
					(m.$imageEl &&
						m.$imageEl.transform("translate3d(0,0,0) scale(1)"),
					m.$imageWrapEl &&
						m.$imageWrapEl.transform("translate3d(0,0,0)"),
					(e.scale = 1),
					(p = 1),
					(m.$slideEl = void 0),
					(m.$imageEl = void 0),
					(m.$imageWrapEl = void 0));
			}
			function T(e) {
				const s = t.zoom,
					a = t.params.zoom;
				if (
					(m.$slideEl ||
						(e &&
							e.target &&
							(m.$slideEl = d(e.target).closest(
								`.${t.params.slideClass}`
							)),
						m.$slideEl ||
							(t.params.virtual &&
							t.params.virtual.enabled &&
							t.virtual
								? (m.$slideEl = t.$wrapperEl.children(
										`.${t.params.slideActiveClass}`
								  ))
								: (m.$slideEl = t.slides.eq(t.activeIndex))),
						(m.$imageEl = m.$slideEl
							.find(`.${a.containerClass}`)
							.eq(0)
							.find(
								"picture, img, svg, canvas, .swiper-zoom-target"
							)
							.eq(0)),
						(m.$imageWrapEl = m.$imageEl.parent(
							`.${a.containerClass}`
						))),
					!m.$imageEl ||
						0 === m.$imageEl.length ||
						!m.$imageWrapEl ||
						0 === m.$imageWrapEl.length)
				)
					return;
				let i, r, l, o, c, u, h, g, v, w, b, x, y, E, C, T, $, S;
				t.params.cssMode &&
					((t.wrapperEl.style.overflow = "hidden"),
					(t.wrapperEl.style.touchAction = "none")),
					m.$slideEl.addClass(`${a.zoomedSlideClass}`),
					void 0 === f.touchesStart.x && e
						? ((i =
								"touchend" === e.type
									? e.changedTouches[0].pageX
									: e.pageX),
						  (r =
								"touchend" === e.type
									? e.changedTouches[0].pageY
									: e.pageY))
						: ((i = f.touchesStart.x), (r = f.touchesStart.y)),
					(s.scale =
						m.$imageWrapEl.attr("data-swiper-zoom") || a.maxRatio),
					(p = m.$imageWrapEl.attr("data-swiper-zoom") || a.maxRatio),
					e
						? (($ = m.$slideEl[0].offsetWidth),
						  (S = m.$slideEl[0].offsetHeight),
						  (l = m.$slideEl.offset().left + n.scrollX),
						  (o = m.$slideEl.offset().top + n.scrollY),
						  (c = l + $ / 2 - i),
						  (u = o + S / 2 - r),
						  (v = m.$imageEl[0].offsetWidth),
						  (w = m.$imageEl[0].offsetHeight),
						  (b = v * s.scale),
						  (x = w * s.scale),
						  (y = Math.min($ / 2 - b / 2, 0)),
						  (E = Math.min(S / 2 - x / 2, 0)),
						  (C = -y),
						  (T = -E),
						  (h = c * s.scale),
						  (g = u * s.scale),
						  h < y && (h = y),
						  h > C && (h = C),
						  g < E && (g = E),
						  g > T && (g = T))
						: ((h = 0), (g = 0)),
					m.$imageWrapEl
						.transition(300)
						.transform(`translate3d(${h}px, ${g}px,0)`),
					m.$imageEl
						.transition(300)
						.transform(`translate3d(0,0,0) scale(${s.scale})`);
			}
			function $() {
				const e = t.zoom,
					s = t.params.zoom;
				m.$slideEl ||
					(t.params.virtual && t.params.virtual.enabled && t.virtual
						? (m.$slideEl = t.$wrapperEl.children(
								`.${t.params.slideActiveClass}`
						  ))
						: (m.$slideEl = t.slides.eq(t.activeIndex)),
					(m.$imageEl = m.$slideEl
						.find(`.${s.containerClass}`)
						.eq(0)
						.find("picture, img, svg, canvas, .swiper-zoom-target")
						.eq(0)),
					(m.$imageWrapEl = m.$imageEl.parent(
						`.${s.containerClass}`
					))),
					m.$imageEl &&
						0 !== m.$imageEl.length &&
						m.$imageWrapEl &&
						0 !== m.$imageWrapEl.length &&
						(t.params.cssMode &&
							((t.wrapperEl.style.overflow = ""),
							(t.wrapperEl.style.touchAction = "")),
						(e.scale = 1),
						(p = 1),
						m.$imageWrapEl
							.transition(300)
							.transform("translate3d(0,0,0)"),
						m.$imageEl
							.transition(300)
							.transform("translate3d(0,0,0) scale(1)"),
						m.$slideEl.removeClass(`${s.zoomedSlideClass}`),
						(m.$slideEl = void 0));
			}
			function S(e) {
				const s = t.zoom;
				s.scale && 1 !== s.scale ? $() : T(e);
			}
			function M() {
				const e = t.support;
				return {
					passiveListener: !(
						"touchstart" !== t.touchEvents.start ||
						!e.passiveListener ||
						!t.params.passiveListeners
					) && { passive: !0, capture: !1 },
					activeListenerWithCapture: !e.passiveListener || {
						passive: !1,
						capture: !0,
					},
				};
			}
			function P() {
				return `.${t.params.slideClass}`;
			}
			function k(e) {
				const { passiveListener: s } = M(),
					a = P();
				t.$wrapperEl[e]("gesturestart", a, b, s),
					t.$wrapperEl[e]("gesturechange", a, x, s),
					t.$wrapperEl[e]("gestureend", a, y, s);
			}
			function z() {
				l || ((l = !0), k("on"));
			}
			function L() {
				l && ((l = !1), k("off"));
			}
			function O() {
				const e = t.zoom;
				if (e.enabled) return;
				e.enabled = !0;
				const s = t.support,
					{ passiveListener: a, activeListenerWithCapture: i } = M(),
					r = P();
				s.gestures
					? (t.$wrapperEl.on(t.touchEvents.start, z, a),
					  t.$wrapperEl.on(t.touchEvents.end, L, a))
					: "touchstart" === t.touchEvents.start &&
					  (t.$wrapperEl.on(t.touchEvents.start, r, b, a),
					  t.$wrapperEl.on(t.touchEvents.move, r, x, i),
					  t.$wrapperEl.on(t.touchEvents.end, r, y, a),
					  t.touchEvents.cancel &&
							t.$wrapperEl.on(t.touchEvents.cancel, r, y, a)),
					t.$wrapperEl.on(
						t.touchEvents.move,
						`.${t.params.zoom.containerClass}`,
						E,
						i
					);
			}
			function I() {
				const e = t.zoom;
				if (!e.enabled) return;
				const s = t.support;
				e.enabled = !1;
				const { passiveListener: a, activeListenerWithCapture: i } =
						M(),
					r = P();
				s.gestures
					? (t.$wrapperEl.off(t.touchEvents.start, z, a),
					  t.$wrapperEl.off(t.touchEvents.end, L, a))
					: "touchstart" === t.touchEvents.start &&
					  (t.$wrapperEl.off(t.touchEvents.start, r, b, a),
					  t.$wrapperEl.off(t.touchEvents.move, r, x, i),
					  t.$wrapperEl.off(t.touchEvents.end, r, y, a),
					  t.touchEvents.cancel &&
							t.$wrapperEl.off(t.touchEvents.cancel, r, y, a)),
					t.$wrapperEl.off(
						t.touchEvents.move,
						`.${t.params.zoom.containerClass}`,
						E,
						i
					);
			}
			Object.defineProperty(t.zoom, "scale", {
				get: () => v,
				set(e) {
					if (v !== e) {
						const t = m.$imageEl ? m.$imageEl[0] : void 0,
							s = m.$slideEl ? m.$slideEl[0] : void 0;
						i("zoomChange", e, t, s);
					}
					v = e;
				},
			}),
				a("init", () => {
					t.params.zoom.enabled && O();
				}),
				a("destroy", () => {
					I();
				}),
				a("touchStart", (e, s) => {
					t.zoom.enabled &&
						(function (e) {
							const s = t.device;
							m.$imageEl &&
								0 !== m.$imageEl.length &&
								(f.isTouched ||
									(s.android &&
										e.cancelable &&
										e.preventDefault(),
									(f.isTouched = !0),
									(f.touchesStart.x =
										"touchstart" === e.type
											? e.targetTouches[0].pageX
											: e.pageX),
									(f.touchesStart.y =
										"touchstart" === e.type
											? e.targetTouches[0].pageY
											: e.pageY)));
						})(s);
				}),
				a("touchEnd", (e, s) => {
					t.zoom.enabled &&
						(function () {
							const e = t.zoom;
							if (!m.$imageEl || 0 === m.$imageEl.length) return;
							if (!f.isTouched || !f.isMoved)
								return (
									(f.isTouched = !1), void (f.isMoved = !1)
								);
							(f.isTouched = !1), (f.isMoved = !1);
							let s = 300,
								a = 300;
							const i = g.x * s,
								r = f.currentX + i,
								n = g.y * a,
								l = f.currentY + n;
							0 !== g.x && (s = Math.abs((r - f.currentX) / g.x)),
								0 !== g.y &&
									(a = Math.abs((l - f.currentY) / g.y));
							const o = Math.max(s, a);
							(f.currentX = r), (f.currentY = l);
							const d = f.width * e.scale,
								c = f.height * e.scale;
							(f.minX = Math.min(m.slideWidth / 2 - d / 2, 0)),
								(f.maxX = -f.minX),
								(f.minY = Math.min(
									m.slideHeight / 2 - c / 2,
									0
								)),
								(f.maxY = -f.minY),
								(f.currentX = Math.max(
									Math.min(f.currentX, f.maxX),
									f.minX
								)),
								(f.currentY = Math.max(
									Math.min(f.currentY, f.maxY),
									f.minY
								)),
								m.$imageWrapEl
									.transition(o)
									.transform(
										`translate3d(${f.currentX}px, ${f.currentY}px,0)`
									);
						})();
				}),
				a("doubleTap", (e, s) => {
					!t.animating &&
						t.params.zoom.enabled &&
						t.zoom.enabled &&
						t.params.zoom.toggle &&
						S(s);
				}),
				a("transitionEnd", () => {
					t.zoom.enabled && t.params.zoom.enabled && C();
				}),
				a("slideChange", () => {
					t.zoom.enabled &&
						t.params.zoom.enabled &&
						t.params.cssMode &&
						C();
				}),
				Object.assign(t.zoom, {
					enable: O,
					disable: I,
					in: T,
					out: $,
					toggle: S,
				});
		},
		function (e) {
			let { swiper: t, extendParams: s, on: a, emit: i } = e;
			s({
				lazy: {
					checkInView: !1,
					enabled: !1,
					loadPrevNext: !1,
					loadPrevNextAmount: 1,
					loadOnTransitionStart: !1,
					scrollingElement: "",
					elementClass: "swiper-lazy",
					loadingClass: "swiper-lazy-loading",
					loadedClass: "swiper-lazy-loaded",
					preloaderClass: "swiper-lazy-preloader",
				},
			}),
				(t.lazy = {});
			let n = !1,
				l = !1;
			function o(e, s) {
				void 0 === s && (s = !0);
				const a = t.params.lazy;
				if (void 0 === e) return;
				if (0 === t.slides.length) return;
				const r =
						t.virtual && t.params.virtual.enabled
							? t.$wrapperEl.children(
									`.${t.params.slideClass}[data-swiper-slide-index="${e}"]`
							  )
							: t.slides.eq(e),
					n = r.find(
						`.${a.elementClass}:not(.${a.loadedClass}):not(.${a.loadingClass})`
					);
				!r.hasClass(a.elementClass) ||
					r.hasClass(a.loadedClass) ||
					r.hasClass(a.loadingClass) ||
					n.push(r[0]),
					0 !== n.length &&
						n.each((e) => {
							const n = d(e);
							n.addClass(a.loadingClass);
							const l = n.attr("data-background"),
								c = n.attr("data-src"),
								p = n.attr("data-srcset"),
								u = n.attr("data-sizes"),
								h = n.parent("picture");
							t.loadImage(n[0], c || l, p, u, !1, () => {
								if (
									null != t &&
									t &&
									(!t || t.params) &&
									!t.destroyed
								) {
									if (
										(l
											? (n.css(
													"background-image",
													`url("${l}")`
											  ),
											  n.removeAttr("data-background"))
											: (p &&
													(n.attr("srcset", p),
													n.removeAttr(
														"data-srcset"
													)),
											  u &&
													(n.attr("sizes", u),
													n.removeAttr("data-sizes")),
											  h.length &&
													h
														.children("source")
														.each((e) => {
															const t = d(e);
															t.attr(
																"data-srcset"
															) &&
																(t.attr(
																	"srcset",
																	t.attr(
																		"data-srcset"
																	)
																),
																t.removeAttr(
																	"data-srcset"
																));
														}),
											  c &&
													(n.attr("src", c),
													n.removeAttr("data-src"))),
										n
											.addClass(a.loadedClass)
											.removeClass(a.loadingClass),
										r.find(`.${a.preloaderClass}`).remove(),
										t.params.loop && s)
									) {
										const e = r.attr(
											"data-swiper-slide-index"
										);
										if (
											r.hasClass(
												t.params.slideDuplicateClass
											)
										) {
											o(
												t.$wrapperEl
													.children(
														`[data-swiper-slide-index="${e}"]:not(.${t.params.slideDuplicateClass})`
													)
													.index(),
												!1
											);
										} else {
											o(
												t.$wrapperEl
													.children(
														`.${t.params.slideDuplicateClass}[data-swiper-slide-index="${e}"]`
													)
													.index(),
												!1
											);
										}
									}
									i("lazyImageReady", r[0], n[0]),
										t.params.autoHeight &&
											t.updateAutoHeight();
								}
							}),
								i("lazyImageLoad", r[0], n[0]);
						});
			}
			function c() {
				const {
						$wrapperEl: e,
						params: s,
						slides: a,
						activeIndex: i,
					} = t,
					r = t.virtual && s.virtual.enabled,
					n = s.lazy;
				let c = s.slidesPerView;
				function p(t) {
					if (r) {
						if (
							e.children(
								`.${s.slideClass}[data-swiper-slide-index="${t}"]`
							).length
						)
							return !0;
					} else if (a[t]) return !0;
					return !1;
				}
				function u(e) {
					return r
						? d(e).attr("data-swiper-slide-index")
						: d(e).index();
				}
				if (
					("auto" === c && (c = 0),
					l || (l = !0),
					t.params.watchSlidesProgress)
				)
					e.children(`.${s.slideVisibleClass}`).each((e) => {
						o(
							r
								? d(e).attr("data-swiper-slide-index")
								: d(e).index()
						);
					});
				else if (c > 1) for (let e = i; e < i + c; e += 1) p(e) && o(e);
				else o(i);
				if (n.loadPrevNext)
					if (
						c > 1 ||
						(n.loadPrevNextAmount && n.loadPrevNextAmount > 1)
					) {
						const e = n.loadPrevNextAmount,
							t = Math.ceil(c),
							s = Math.min(i + t + Math.max(e, t), a.length),
							r = Math.max(i - Math.max(t, e), 0);
						for (let e = i + t; e < s; e += 1) p(e) && o(e);
						for (let e = r; e < i; e += 1) p(e) && o(e);
					} else {
						const t = e.children(`.${s.slideNextClass}`);
						t.length > 0 && o(u(t));
						const a = e.children(`.${s.slidePrevClass}`);
						a.length > 0 && o(u(a));
					}
			}
			function p() {
				const e = r();
				if (!t || t.destroyed) return;
				const s = t.params.lazy.scrollingElement
						? d(t.params.lazy.scrollingElement)
						: d(e),
					a = s[0] === e,
					i = a ? e.innerWidth : s[0].offsetWidth,
					l = a ? e.innerHeight : s[0].offsetHeight,
					o = t.$el.offset(),
					{ rtlTranslate: u } = t;
				let h = !1;
				u && (o.left -= t.$el[0].scrollLeft);
				const m = [
					[o.left, o.top],
					[o.left + t.width, o.top],
					[o.left, o.top + t.height],
					[o.left + t.width, o.top + t.height],
				];
				for (let e = 0; e < m.length; e += 1) {
					const t = m[e];
					if (t[0] >= 0 && t[0] <= i && t[1] >= 0 && t[1] <= l) {
						if (0 === t[0] && 0 === t[1]) continue;
						h = !0;
					}
				}
				const f = !(
					"touchstart" !== t.touchEvents.start ||
					!t.support.passiveListener ||
					!t.params.passiveListeners
				) && { passive: !0, capture: !1 };
				h
					? (c(), s.off("scroll", p, f))
					: n || ((n = !0), s.on("scroll", p, f));
			}
			a("beforeInit", () => {
				t.params.lazy.enabled &&
					t.params.preloadImages &&
					(t.params.preloadImages = !1);
			}),
				a("init", () => {
					t.params.lazy.enabled &&
						(t.params.lazy.checkInView ? p() : c());
				}),
				a("scroll", () => {
					t.params.freeMode &&
						t.params.freeMode.enabled &&
						!t.params.freeMode.sticky &&
						c();
				}),
				a("scrollbarDragMove resize _freeModeNoMomentumRelease", () => {
					t.params.lazy.enabled &&
						(t.params.lazy.checkInView ? p() : c());
				}),
				a("transitionStart", () => {
					t.params.lazy.enabled &&
						(t.params.lazy.loadOnTransitionStart ||
							(!t.params.lazy.loadOnTransitionStart && !l)) &&
						(t.params.lazy.checkInView ? p() : c());
				}),
				a("transitionEnd", () => {
					t.params.lazy.enabled &&
						!t.params.lazy.loadOnTransitionStart &&
						(t.params.lazy.checkInView ? p() : c());
				}),
				a("slideChange", () => {
					const {
						lazy: e,
						cssMode: s,
						watchSlidesProgress: a,
						touchReleaseOnEdges: i,
						resistanceRatio: r,
					} = t.params;
					e.enabled && (s || (a && (i || 0 === r))) && c();
				}),
				a("destroy", () => {
					t.$el &&
						t.$el
							.find(`.${t.params.lazy.loadingClass}`)
							.removeClass(t.params.lazy.loadingClass);
				}),
				Object.assign(t.lazy, { load: c, loadInSlide: o });
		},
		function (e) {
			let { swiper: t, extendParams: s, on: a } = e;
			function i(e, t) {
				const s = (function () {
					let e, t, s;
					return (a, i) => {
						for (t = -1, e = a.length; e - t > 1; )
							(s = (e + t) >> 1), a[s] <= i ? (t = s) : (e = s);
						return e;
					};
				})();
				let a, i;
				return (
					(this.x = e),
					(this.y = t),
					(this.lastIndex = e.length - 1),
					(this.interpolate = function (e) {
						return e
							? ((i = s(this.x, e)),
							  (a = i - 1),
							  ((e - this.x[a]) * (this.y[i] - this.y[a])) /
									(this.x[i] - this.x[a]) +
									this.y[a])
							: 0;
					}),
					this
				);
			}
			function r() {
				t.controller.control &&
					t.controller.spline &&
					((t.controller.spline = void 0),
					delete t.controller.spline);
			}
			s({ controller: { control: void 0, inverse: !1, by: "slide" } }),
				(t.controller = { control: void 0 }),
				a("beforeInit", () => {
					t.controller.control = t.params.controller.control;
				}),
				a("update", () => {
					r();
				}),
				a("resize", () => {
					r();
				}),
				a("observerUpdate", () => {
					r();
				}),
				a("setTranslate", (e, s, a) => {
					t.controller.control && t.controller.setTranslate(s, a);
				}),
				a("setTransition", (e, s, a) => {
					t.controller.control && t.controller.setTransition(s, a);
				}),
				Object.assign(t.controller, {
					setTranslate: function (e, s) {
						const a = t.controller.control;
						let r, n;
						const l = t.constructor;
						function o(e) {
							const s = t.rtlTranslate
								? -t.translate
								: t.translate;
							"slide" === t.params.controller.by &&
								(!(function (e) {
									t.controller.spline ||
										(t.controller.spline = t.params.loop
											? new i(t.slidesGrid, e.slidesGrid)
											: new i(t.snapGrid, e.snapGrid));
								})(e),
								(n = -t.controller.spline.interpolate(-s))),
								(n && "container" !== t.params.controller.by) ||
									((r =
										(e.maxTranslate() - e.minTranslate()) /
										(t.maxTranslate() - t.minTranslate())),
									(n =
										(s - t.minTranslate()) * r +
										e.minTranslate())),
								t.params.controller.inverse &&
									(n = e.maxTranslate() - n),
								e.updateProgress(n),
								e.setTranslate(n, t),
								e.updateActiveIndex(),
								e.updateSlidesClasses();
						}
						if (Array.isArray(a))
							for (let e = 0; e < a.length; e += 1)
								a[e] !== s && a[e] instanceof l && o(a[e]);
						else a instanceof l && s !== a && o(a);
					},
					setTransition: function (e, s) {
						const a = t.constructor,
							i = t.controller.control;
						let r;
						function n(s) {
							s.setTransition(e, t),
								0 !== e &&
									(s.transitionStart(),
									s.params.autoHeight &&
										p(() => {
											s.updateAutoHeight();
										}),
									s.$wrapperEl.transitionEnd(() => {
										i &&
											(s.params.loop &&
												"slide" ===
													t.params.controller.by &&
												s.loopFix(),
											s.transitionEnd());
									}));
						}
						if (Array.isArray(i))
							for (r = 0; r < i.length; r += 1)
								i[r] !== s && i[r] instanceof a && n(i[r]);
						else i instanceof a && s !== i && n(i);
					},
				});
		},
		function (e) {
			let { swiper: t, extendParams: s, on: a } = e;
			s({
				a11y: {
					enabled: !0,
					notificationClass: "swiper-notification",
					prevSlideMessage: "Previous slide",
					nextSlideMessage: "Next slide",
					firstSlideMessage: "This is the first slide",
					lastSlideMessage: "This is the last slide",
					paginationBulletMessage: "Go to slide {{index}}",
					slideLabelMessage: "{{index}} / {{slidesLength}}",
					containerMessage: null,
					containerRoleDescriptionMessage: null,
					itemRoleDescriptionMessage: null,
					slideRole: "group",
					id: null,
				},
			});
			let i = null;
			function r(e) {
				const t = i;
				0 !== t.length && (t.html(""), t.html(e));
			}
			function n(e) {
				e.attr("tabIndex", "0");
			}
			function l(e) {
				e.attr("tabIndex", "-1");
			}
			function o(e, t) {
				e.attr("role", t);
			}
			function c(e, t) {
				e.attr("aria-roledescription", t);
			}
			function p(e, t) {
				e.attr("aria-label", t);
			}
			function u(e) {
				e.attr("aria-disabled", !0);
			}
			function h(e) {
				e.attr("aria-disabled", !1);
			}
			function m(e) {
				if (13 !== e.keyCode && 32 !== e.keyCode) return;
				const s = t.params.a11y,
					a = d(e.target);
				t.navigation &&
					t.navigation.$nextEl &&
					a.is(t.navigation.$nextEl) &&
					((t.isEnd && !t.params.loop) || t.slideNext(),
					t.isEnd ? r(s.lastSlideMessage) : r(s.nextSlideMessage)),
					t.navigation &&
						t.navigation.$prevEl &&
						a.is(t.navigation.$prevEl) &&
						((t.isBeginning && !t.params.loop) || t.slidePrev(),
						t.isBeginning
							? r(s.firstSlideMessage)
							: r(s.prevSlideMessage)),
					t.pagination &&
						a.is(U(t.params.pagination.bulletClass)) &&
						a[0].click();
			}
			function f() {
				return (
					t.pagination &&
					t.pagination.bullets &&
					t.pagination.bullets.length
				);
			}
			function g() {
				return f() && t.params.pagination.clickable;
			}
			const v = (e, t, s) => {
					n(e),
						"BUTTON" !== e[0].tagName &&
							(o(e, "button"), e.on("keydown", m)),
						p(e, s),
						(function (e, t) {
							e.attr("aria-controls", t);
						})(e, t);
				},
				w = (e) => {
					const s = e.target.closest(`.${t.params.slideClass}`);
					if (!s || !t.slides.includes(s)) return;
					const a = t.slides.indexOf(s) === t.activeIndex,
						i =
							t.params.watchSlidesProgress &&
							t.visibleSlides &&
							t.visibleSlides.includes(s);
					a ||
						i ||
						(t.isHorizontal()
							? (t.el.scrollLeft = 0)
							: (t.el.scrollTop = 0),
						t.slideTo(t.slides.indexOf(s), 0));
				},
				b = () => {
					const e = t.params.a11y;
					e.itemRoleDescriptionMessage &&
						c(d(t.slides), e.itemRoleDescriptionMessage),
						e.slideRole && o(d(t.slides), e.slideRole);
					const s = t.params.loop
						? t.slides.filter(
								(e) =>
									!e.classList.contains(
										t.params.slideDuplicateClass
									)
						  ).length
						: t.slides.length;
					e.slideLabelMessage &&
						t.slides.each((a, i) => {
							const r = d(a),
								n = t.params.loop
									? parseInt(
											r.attr("data-swiper-slide-index"),
											10
									  )
									: i;
							p(
								r,
								e.slideLabelMessage
									.replace(/\{\{index\}\}/, n + 1)
									.replace(/\{\{slidesLength\}\}/, s)
							);
						});
				},
				x = () => {
					const e = t.params.a11y;
					t.$el.append(i);
					const s = t.$el;
					e.containerRoleDescriptionMessage &&
						c(s, e.containerRoleDescriptionMessage),
						e.containerMessage && p(s, e.containerMessage);
					const a = t.$wrapperEl,
						r =
							e.id ||
							a.attr("id") ||
							`swiper-wrapper-${
								((n = 16),
								void 0 === n && (n = 16),
								"x"
									.repeat(n)
									.replace(/x/g, () =>
										Math.round(16 * Math.random()).toString(
											16
										)
									))
							}`;
					var n;
					const l =
						t.params.autoplay && t.params.autoplay.enabled
							? "off"
							: "polite";
					var o;
					let d, u;
					(o = r),
						a.attr("id", o),
						(function (e, t) {
							e.attr("aria-live", t);
						})(a, l),
						b(),
						t.navigation &&
							t.navigation.$nextEl &&
							(d = t.navigation.$nextEl),
						t.navigation &&
							t.navigation.$prevEl &&
							(u = t.navigation.$prevEl),
						d && d.length && v(d, r, e.nextSlideMessage),
						u && u.length && v(u, r, e.prevSlideMessage),
						g() &&
							t.pagination.$el.on(
								"keydown",
								U(t.params.pagination.bulletClass),
								m
							),
						t.$el.on("focus", w, !0);
				};
			a("beforeInit", () => {
				i = d(
					`<span class="${t.params.a11y.notificationClass}" aria-live="assertive" aria-atomic="true"></span>`
				);
			}),
				a("afterInit", () => {
					t.params.a11y.enabled && x();
				}),
				a(
					"slidesLengthChange snapGridLengthChange slidesGridLengthChange",
					() => {
						t.params.a11y.enabled && b();
					}
				),
				a("fromEdge toEdge afterInit lock unlock", () => {
					t.params.a11y.enabled &&
						(function () {
							if (
								t.params.loop ||
								t.params.rewind ||
								!t.navigation
							)
								return;
							const { $nextEl: e, $prevEl: s } = t.navigation;
							s &&
								s.length > 0 &&
								(t.isBeginning ? (u(s), l(s)) : (h(s), n(s))),
								e &&
									e.length > 0 &&
									(t.isEnd ? (u(e), l(e)) : (h(e), n(e)));
						})();
				}),
				a("paginationUpdate", () => {
					t.params.a11y.enabled &&
						(function () {
							const e = t.params.a11y;
							f() &&
								t.pagination.bullets.each((s) => {
									const a = d(s);
									t.params.pagination.clickable &&
										(n(a),
										t.params.pagination.renderBullet ||
											(o(a, "button"),
											p(
												a,
												e.paginationBulletMessage.replace(
													/\{\{index\}\}/,
													a.index() + 1
												)
											))),
										a.is(
											`.${t.params.pagination.bulletActiveClass}`
										)
											? a.attr("aria-current", "true")
											: a.removeAttr("aria-current");
								});
						})();
				}),
				a("destroy", () => {
					t.params.a11y.enabled &&
						(function () {
							let e, s;
							i && i.length > 0 && i.remove(),
								t.navigation &&
									t.navigation.$nextEl &&
									(e = t.navigation.$nextEl),
								t.navigation &&
									t.navigation.$prevEl &&
									(s = t.navigation.$prevEl),
								e && e.off("keydown", m),
								s && s.off("keydown", m),
								g() &&
									t.pagination.$el.off(
										"keydown",
										U(t.params.pagination.bulletClass),
										m
									),
								t.$el.off("focus", w, !0);
						})();
				});
		},
		function (e) {
			let { swiper: t, extendParams: s, on: a } = e;
			s({
				history: {
					enabled: !1,
					root: "",
					replaceState: !1,
					key: "slides",
					keepQuery: !1,
				},
			});
			let i = !1,
				n = {};
			const l = (e) =>
					e
						.toString()
						.replace(/\s+/g, "-")
						.replace(/[^\w-]+/g, "")
						.replace(/--+/g, "-")
						.replace(/^-+/, "")
						.replace(/-+$/, ""),
				o = (e) => {
					const t = r();
					let s;
					s = e ? new URL(e) : t.location;
					const a = s.pathname
							.slice(1)
							.split("/")
							.filter((e) => "" !== e),
						i = a.length;
					return { key: a[i - 2], value: a[i - 1] };
				},
				d = (e, s) => {
					const a = r();
					if (!i || !t.params.history.enabled) return;
					let n;
					n = t.params.url ? new URL(t.params.url) : a.location;
					const o = t.slides.eq(s);
					let d = l(o.attr("data-history"));
					if (t.params.history.root.length > 0) {
						let s = t.params.history.root;
						"/" === s[s.length - 1] &&
							(s = s.slice(0, s.length - 1)),
							(d = `${s}/${e}/${d}`);
					} else n.pathname.includes(e) || (d = `${e}/${d}`);
					t.params.history.keepQuery && (d += n.search);
					const c = a.history.state;
					(c && c.value === d) ||
						(t.params.history.replaceState
							? a.history.replaceState({ value: d }, null, d)
							: a.history.pushState({ value: d }, null, d));
				},
				c = (e, s, a) => {
					if (s)
						for (let i = 0, r = t.slides.length; i < r; i += 1) {
							const r = t.slides.eq(i);
							if (
								l(r.attr("data-history")) === s &&
								!r.hasClass(t.params.slideDuplicateClass)
							) {
								const s = r.index();
								t.slideTo(s, e, a);
							}
						}
					else t.slideTo(0, e, a);
				},
				p = () => {
					(n = o(t.params.url)), c(t.params.speed, n.value, !1);
				};
			a("init", () => {
				t.params.history.enabled &&
					(() => {
						const e = r();
						if (t.params.history) {
							if (!e.history || !e.history.pushState)
								return (
									(t.params.history.enabled = !1),
									void (t.params.hashNavigation.enabled = !0)
								);
							(i = !0),
								(n = o(t.params.url)),
								(n.key || n.value) &&
									(c(0, n.value, t.params.runCallbacksOnInit),
									t.params.history.replaceState ||
										e.addEventListener("popstate", p));
						}
					})();
			}),
				a("destroy", () => {
					t.params.history.enabled &&
						(() => {
							const e = r();
							t.params.history.replaceState ||
								e.removeEventListener("popstate", p);
						})();
				}),
				a("transitionEnd _freeModeNoMomentumRelease", () => {
					i && d(t.params.history.key, t.activeIndex);
				}),
				a("slideChange", () => {
					i &&
						t.params.cssMode &&
						d(t.params.history.key, t.activeIndex);
				});
		},
		function (e) {
			let { swiper: t, extendParams: s, emit: i, on: n } = e,
				l = !1;
			const o = a(),
				c = r();
			s({
				hashNavigation: {
					enabled: !1,
					replaceState: !1,
					watchState: !1,
				},
			});
			const p = () => {
					i("hashChange");
					const e = o.location.hash.replace("#", "");
					if (e !== t.slides.eq(t.activeIndex).attr("data-hash")) {
						const s = t.$wrapperEl
							.children(
								`.${t.params.slideClass}[data-hash="${e}"]`
							)
							.index();
						if (void 0 === s) return;
						t.slideTo(s);
					}
				},
				u = () => {
					if (l && t.params.hashNavigation.enabled)
						if (
							t.params.hashNavigation.replaceState &&
							c.history &&
							c.history.replaceState
						)
							c.history.replaceState(
								null,
								null,
								`#${t.slides
									.eq(t.activeIndex)
									.attr("data-hash")}` || ""
							),
								i("hashSet");
						else {
							const e = t.slides.eq(t.activeIndex),
								s =
									e.attr("data-hash") ||
									e.attr("data-history");
							(o.location.hash = s || ""), i("hashSet");
						}
				};
			n("init", () => {
				t.params.hashNavigation.enabled &&
					(() => {
						if (
							!t.params.hashNavigation.enabled ||
							(t.params.history && t.params.history.enabled)
						)
							return;
						l = !0;
						const e = o.location.hash.replace("#", "");
						if (e) {
							const s = 0;
							for (
								let a = 0, i = t.slides.length;
								a < i;
								a += 1
							) {
								const i = t.slides.eq(a);
								if (
									(i.attr("data-hash") ||
										i.attr("data-history")) === e &&
									!i.hasClass(t.params.slideDuplicateClass)
								) {
									const e = i.index();
									t.slideTo(
										e,
										s,
										t.params.runCallbacksOnInit,
										!0
									);
								}
							}
						}
						t.params.hashNavigation.watchState &&
							d(c).on("hashchange", p);
					})();
			}),
				n("destroy", () => {
					t.params.hashNavigation.enabled &&
						t.params.hashNavigation.watchState &&
						d(c).off("hashchange", p);
				}),
				n("transitionEnd _freeModeNoMomentumRelease", () => {
					l && u();
				}),
				n("slideChange", () => {
					l && t.params.cssMode && u();
				});
		},
		function (e) {
			let t,
				{ swiper: s, extendParams: i, on: r, emit: n } = e;
			function l() {
				if (!s.size)
					return (
						(s.autoplay.running = !1), void (s.autoplay.paused = !1)
					);
				const e = s.slides.eq(s.activeIndex);
				let a = s.params.autoplay.delay;
				e.attr("data-swiper-autoplay") &&
					(a =
						e.attr("data-swiper-autoplay") ||
						s.params.autoplay.delay),
					clearTimeout(t),
					(t = p(() => {
						let e;
						s.params.autoplay.reverseDirection
							? s.params.loop
								? (s.loopFix(),
								  (e = s.slidePrev(s.params.speed, !0, !0)),
								  n("autoplay"))
								: s.isBeginning
								? s.params.autoplay.stopOnLastSlide
									? d()
									: ((e = s.slideTo(
											s.slides.length - 1,
											s.params.speed,
											!0,
											!0
									  )),
									  n("autoplay"))
								: ((e = s.slidePrev(s.params.speed, !0, !0)),
								  n("autoplay"))
							: s.params.loop
							? (s.loopFix(),
							  (e = s.slideNext(s.params.speed, !0, !0)),
							  n("autoplay"))
							: s.isEnd
							? s.params.autoplay.stopOnLastSlide
								? d()
								: ((e = s.slideTo(0, s.params.speed, !0, !0)),
								  n("autoplay"))
							: ((e = s.slideNext(s.params.speed, !0, !0)),
							  n("autoplay")),
							((s.params.cssMode && s.autoplay.running) ||
								!1 === e) &&
								l();
					}, a));
			}
			function o() {
				return (
					void 0 === t &&
					!s.autoplay.running &&
					((s.autoplay.running = !0), n("autoplayStart"), l(), !0)
				);
			}
			function d() {
				return (
					!!s.autoplay.running &&
					void 0 !== t &&
					(t && (clearTimeout(t), (t = void 0)),
					(s.autoplay.running = !1),
					n("autoplayStop"),
					!0)
				);
			}
			function c(e) {
				s.autoplay.running &&
					(s.autoplay.paused ||
						(t && clearTimeout(t),
						(s.autoplay.paused = !0),
						0 !== e && s.params.autoplay.waitForTransition
							? ["transitionend", "webkitTransitionEnd"].forEach(
									(e) => {
										s.$wrapperEl[0].addEventListener(e, h);
									}
							  )
							: ((s.autoplay.paused = !1), l())));
			}
			function u() {
				const e = a();
				"hidden" === e.visibilityState && s.autoplay.running && c(),
					"visible" === e.visibilityState &&
						s.autoplay.paused &&
						(l(), (s.autoplay.paused = !1));
			}
			function h(e) {
				s &&
					!s.destroyed &&
					s.$wrapperEl &&
					e.target === s.$wrapperEl[0] &&
					(["transitionend", "webkitTransitionEnd"].forEach((e) => {
						s.$wrapperEl[0].removeEventListener(e, h);
					}),
					(s.autoplay.paused = !1),
					s.autoplay.running ? l() : d());
			}
			function m() {
				s.params.autoplay.disableOnInteraction
					? d()
					: (n("autoplayPause"), c()),
					["transitionend", "webkitTransitionEnd"].forEach((e) => {
						s.$wrapperEl[0].removeEventListener(e, h);
					});
			}
			function f() {
				s.params.autoplay.disableOnInteraction ||
					((s.autoplay.paused = !1), n("autoplayResume"), l());
			}
			(s.autoplay = { running: !1, paused: !1 }),
				i({
					autoplay: {
						enabled: !1,
						delay: 3e3,
						waitForTransition: !0,
						disableOnInteraction: !0,
						stopOnLastSlide: !1,
						reverseDirection: !1,
						pauseOnMouseEnter: !1,
					},
				}),
				r("init", () => {
					if (s.params.autoplay.enabled) {
						o();
						a().addEventListener("visibilitychange", u),
							s.params.autoplay.pauseOnMouseEnter &&
								(s.$el.on("mouseenter", m),
								s.$el.on("mouseleave", f));
					}
				}),
				r("beforeTransitionStart", (e, t, a) => {
					s.autoplay.running &&
						(a || !s.params.autoplay.disableOnInteraction
							? s.autoplay.pause(t)
							: d());
				}),
				r("sliderFirstMove", () => {
					s.autoplay.running &&
						(s.params.autoplay.disableOnInteraction ? d() : c());
				}),
				r("touchEnd", () => {
					s.params.cssMode &&
						s.autoplay.paused &&
						!s.params.autoplay.disableOnInteraction &&
						l();
				}),
				r("destroy", () => {
					s.$el.off("mouseenter", m),
						s.$el.off("mouseleave", f),
						s.autoplay.running && d();
					a().removeEventListener("visibilitychange", u);
				}),
				Object.assign(s.autoplay, {
					pause: c,
					run: l,
					start: o,
					stop: d,
				});
		},
		function (e) {
			let { swiper: t, extendParams: s, on: a } = e;
			s({
				thumbs: {
					swiper: null,
					multipleActiveThumbs: !0,
					autoScrollOffset: 0,
					slideThumbActiveClass: "swiper-slide-thumb-active",
					thumbsContainerClass: "swiper-thumbs",
				},
			});
			let i = !1,
				r = !1;
			function n() {
				const e = t.thumbs.swiper;
				if (!e || e.destroyed) return;
				const s = e.clickedIndex,
					a = e.clickedSlide;
				if (a && d(a).hasClass(t.params.thumbs.slideThumbActiveClass))
					return;
				if (null == s) return;
				let i;
				if (
					((i = e.params.loop
						? parseInt(
								d(e.clickedSlide).attr(
									"data-swiper-slide-index"
								),
								10
						  )
						: s),
					t.params.loop)
				) {
					let e = t.activeIndex;
					t.slides.eq(e).hasClass(t.params.slideDuplicateClass) &&
						(t.loopFix(),
						(t._clientLeft = t.$wrapperEl[0].clientLeft),
						(e = t.activeIndex));
					const s = t.slides
							.eq(e)
							.prevAll(`[data-swiper-slide-index="${i}"]`)
							.eq(0)
							.index(),
						a = t.slides
							.eq(e)
							.nextAll(`[data-swiper-slide-index="${i}"]`)
							.eq(0)
							.index();
					i =
						void 0 === s
							? a
							: void 0 === a
							? s
							: a - e < e - s
							? a
							: s;
				}
				t.slideTo(i);
			}
			function l() {
				const { thumbs: e } = t.params;
				if (i) return !1;
				i = !0;
				const s = t.constructor;
				if (e.swiper instanceof s)
					(t.thumbs.swiper = e.swiper),
						Object.assign(t.thumbs.swiper.originalParams, {
							watchSlidesProgress: !0,
							slideToClickedSlide: !1,
						}),
						Object.assign(t.thumbs.swiper.params, {
							watchSlidesProgress: !0,
							slideToClickedSlide: !1,
						});
				else if (m(e.swiper)) {
					const a = Object.assign({}, e.swiper);
					Object.assign(a, {
						watchSlidesProgress: !0,
						slideToClickedSlide: !1,
					}),
						(t.thumbs.swiper = new s(a)),
						(r = !0);
				}
				return (
					t.thumbs.swiper.$el.addClass(
						t.params.thumbs.thumbsContainerClass
					),
					t.thumbs.swiper.on("tap", n),
					!0
				);
			}
			function o(e) {
				const s = t.thumbs.swiper;
				if (!s || s.destroyed) return;
				const a =
					"auto" === s.params.slidesPerView
						? s.slidesPerViewDynamic()
						: s.params.slidesPerView;
				let i = 1;
				const r = t.params.thumbs.slideThumbActiveClass;
				if (
					(t.params.slidesPerView > 1 &&
						!t.params.centeredSlides &&
						(i = t.params.slidesPerView),
					t.params.thumbs.multipleActiveThumbs || (i = 1),
					(i = Math.floor(i)),
					s.slides.removeClass(r),
					s.params.loop ||
						(s.params.virtual && s.params.virtual.enabled))
				)
					for (let e = 0; e < i; e += 1)
						s.$wrapperEl
							.children(
								`[data-swiper-slide-index="${t.realIndex + e}"]`
							)
							.addClass(r);
				else
					for (let e = 0; e < i; e += 1)
						s.slides.eq(t.realIndex + e).addClass(r);
				const n = t.params.thumbs.autoScrollOffset,
					l = n && !s.params.loop;
				if (t.realIndex !== s.realIndex || l) {
					let i,
						r,
						o = s.activeIndex;
					if (s.params.loop) {
						s.slides.eq(o).hasClass(s.params.slideDuplicateClass) &&
							(s.loopFix(),
							(s._clientLeft = s.$wrapperEl[0].clientLeft),
							(o = s.activeIndex));
						const e = s.slides
								.eq(o)
								.prevAll(
									`[data-swiper-slide-index="${t.realIndex}"]`
								)
								.eq(0)
								.index(),
							a = s.slides
								.eq(o)
								.nextAll(
									`[data-swiper-slide-index="${t.realIndex}"]`
								)
								.eq(0)
								.index();
						(i =
							void 0 === e
								? a
								: void 0 === a
								? e
								: a - o == o - e
								? s.params.slidesPerGroup > 1
									? a
									: o
								: a - o < o - e
								? a
								: e),
							(r =
								t.activeIndex > t.previousIndex
									? "next"
									: "prev");
					} else
						(i = t.realIndex),
							(r = i > t.previousIndex ? "next" : "prev");
					l && (i += "next" === r ? n : -1 * n),
						s.visibleSlidesIndexes &&
							s.visibleSlidesIndexes.indexOf(i) < 0 &&
							(s.params.centeredSlides
								? (i =
										i > o
											? i - Math.floor(a / 2) + 1
											: i + Math.floor(a / 2) - 1)
								: i > o && s.params.slidesPerGroup,
							s.slideTo(i, e ? 0 : void 0));
				}
			}
			(t.thumbs = { swiper: null }),
				a("beforeInit", () => {
					const { thumbs: e } = t.params;
					e && e.swiper && (l(), o(!0));
				}),
				a("slideChange update resize observerUpdate", () => {
					o();
				}),
				a("setTransition", (e, s) => {
					const a = t.thumbs.swiper;
					a && !a.destroyed && a.setTransition(s);
				}),
				a("beforeDestroy", () => {
					const e = t.thumbs.swiper;
					e && !e.destroyed && r && e.destroy();
				}),
				Object.assign(t.thumbs, { init: l, update: o });
		},
		function (e) {
			let { swiper: t, extendParams: s, emit: a, once: i } = e;
			s({
				freeMode: {
					enabled: !1,
					momentum: !0,
					momentumRatio: 1,
					momentumBounce: !0,
					momentumBounceRatio: 1,
					momentumVelocityRatio: 1,
					sticky: !1,
					minimumVelocity: 0.02,
				},
			}),
				Object.assign(t, {
					freeMode: {
						onTouchStart: function () {
							const e = t.getTranslate();
							t.setTranslate(e),
								t.setTransition(0),
								(t.touchEventsData.velocities.length = 0),
								t.freeMode.onTouchEnd({
									currentPos: t.rtl
										? t.translate
										: -t.translate,
								});
						},
						onTouchMove: function () {
							const { touchEventsData: e, touches: s } = t;
							0 === e.velocities.length &&
								e.velocities.push({
									position:
										s[
											t.isHorizontal()
												? "startX"
												: "startY"
										],
									time: e.touchStartTime,
								}),
								e.velocities.push({
									position:
										s[
											t.isHorizontal()
												? "currentX"
												: "currentY"
										],
									time: u(),
								});
						},
						onTouchEnd: function (e) {
							let { currentPos: s } = e;
							const {
									params: r,
									$wrapperEl: n,
									rtlTranslate: l,
									snapGrid: o,
									touchEventsData: d,
								} = t,
								c = u() - d.touchStartTime;
							if (s < -t.minTranslate()) t.slideTo(t.activeIndex);
							else if (s > -t.maxTranslate())
								t.slides.length < o.length
									? t.slideTo(o.length - 1)
									: t.slideTo(t.slides.length - 1);
							else {
								if (r.freeMode.momentum) {
									if (d.velocities.length > 1) {
										const e = d.velocities.pop(),
											s = d.velocities.pop(),
											a = e.position - s.position,
											i = e.time - s.time;
										(t.velocity = a / i),
											(t.velocity /= 2),
											Math.abs(t.velocity) <
												r.freeMode.minimumVelocity &&
												(t.velocity = 0),
											(i > 150 || u() - e.time > 300) &&
												(t.velocity = 0);
									} else t.velocity = 0;
									(t.velocity *=
										r.freeMode.momentumVelocityRatio),
										(d.velocities.length = 0);
									let e = 1e3 * r.freeMode.momentumRatio;
									const s = t.velocity * e;
									let c = t.translate + s;
									l && (c = -c);
									let p,
										h = !1;
									const m =
										20 *
										Math.abs(t.velocity) *
										r.freeMode.momentumBounceRatio;
									let f;
									if (c < t.maxTranslate())
										r.freeMode.momentumBounce
											? (c + t.maxTranslate() < -m &&
													(c = t.maxTranslate() - m),
											  (p = t.maxTranslate()),
											  (h = !0),
											  (d.allowMomentumBounce = !0))
											: (c = t.maxTranslate()),
											r.loop &&
												r.centeredSlides &&
												(f = !0);
									else if (c > t.minTranslate())
										r.freeMode.momentumBounce
											? (c - t.minTranslate() > m &&
													(c = t.minTranslate() + m),
											  (p = t.minTranslate()),
											  (h = !0),
											  (d.allowMomentumBounce = !0))
											: (c = t.minTranslate()),
											r.loop &&
												r.centeredSlides &&
												(f = !0);
									else if (r.freeMode.sticky) {
										let e;
										for (let t = 0; t < o.length; t += 1)
											if (o[t] > -c) {
												e = t;
												break;
											}
										(c =
											Math.abs(o[e] - c) <
												Math.abs(o[e - 1] - c) ||
											"next" === t.swipeDirection
												? o[e]
												: o[e - 1]),
											(c = -c);
									}
									if (
										(f &&
											i("transitionEnd", () => {
												t.loopFix();
											}),
										0 !== t.velocity)
									) {
										if (
											((e = l
												? Math.abs(
														(-c - t.translate) /
															t.velocity
												  )
												: Math.abs(
														(c - t.translate) /
															t.velocity
												  )),
											r.freeMode.sticky)
										) {
											const s = Math.abs(
													(l ? -c : c) - t.translate
												),
												a =
													t.slidesSizesGrid[
														t.activeIndex
													];
											e =
												s < a
													? r.speed
													: s < 2 * a
													? 1.5 * r.speed
													: 2.5 * r.speed;
										}
									} else if (r.freeMode.sticky)
										return void t.slideToClosest();
									r.freeMode.momentumBounce && h
										? (t.updateProgress(p),
										  t.setTransition(e),
										  t.setTranslate(c),
										  t.transitionStart(
												!0,
												t.swipeDirection
										  ),
										  (t.animating = !0),
										  n.transitionEnd(() => {
												t &&
													!t.destroyed &&
													d.allowMomentumBounce &&
													(a("momentumBounce"),
													t.setTransition(r.speed),
													setTimeout(() => {
														t.setTranslate(p),
															n.transitionEnd(
																() => {
																	t &&
																		!t.destroyed &&
																		t.transitionEnd();
																}
															);
													}, 0));
										  }))
										: t.velocity
										? (a("_freeModeNoMomentumRelease"),
										  t.updateProgress(c),
										  t.setTransition(e),
										  t.setTranslate(c),
										  t.transitionStart(
												!0,
												t.swipeDirection
										  ),
										  t.animating ||
												((t.animating = !0),
												n.transitionEnd(() => {
													t &&
														!t.destroyed &&
														t.transitionEnd();
												})))
										: t.updateProgress(c),
										t.updateActiveIndex(),
										t.updateSlidesClasses();
								} else {
									if (r.freeMode.sticky)
										return void t.slideToClosest();
									r.freeMode &&
										a("_freeModeNoMomentumRelease");
								}
								(!r.freeMode.momentum || c >= r.longSwipesMs) &&
									(t.updateProgress(),
									t.updateActiveIndex(),
									t.updateSlidesClasses());
							}
						},
					},
				});
		},
		function (e) {
			let t,
				s,
				a,
				{ swiper: i, extendParams: r } = e;
			r({ grid: { rows: 1, fill: "column" } }),
				(i.grid = {
					initSlides: (e) => {
						const { slidesPerView: r } = i.params,
							{ rows: n, fill: l } = i.params.grid;
						(s = t / n),
							(a = Math.floor(e / n)),
							(t =
								Math.floor(e / n) === e / n
									? e
									: Math.ceil(e / n) * n),
							"auto" !== r &&
								"row" === l &&
								(t = Math.max(t, r * n));
					},
					updateSlide: (e, r, n, l) => {
						const { slidesPerGroup: o, spaceBetween: d } = i.params,
							{ rows: c, fill: p } = i.params.grid;
						let u, h, m;
						if ("row" === p && o > 1) {
							const s = Math.floor(e / (o * c)),
								a = e - c * o * s,
								i =
									0 === s
										? o
										: Math.min(
												Math.ceil((n - s * c * o) / c),
												o
										  );
							(m = Math.floor(a / i)),
								(h = a - m * i + s * o),
								(u = h + (m * t) / c),
								r.css({ "-webkit-order": u, order: u });
						} else
							"column" === p
								? ((h = Math.floor(e / c)),
								  (m = e - h * c),
								  (h > a || (h === a && m === c - 1)) &&
										((m += 1),
										m >= c && ((m = 0), (h += 1))))
								: ((m = Math.floor(e / s)), (h = e - m * s));
						r.css(l("margin-top"), 0 !== m ? d && `${d}px` : "");
					},
					updateWrapperSize: (e, s, a) => {
						const {
								spaceBetween: r,
								centeredSlides: n,
								roundLengths: l,
							} = i.params,
							{ rows: o } = i.params.grid;
						if (
							((i.virtualSize = (e + r) * t),
							(i.virtualSize = Math.ceil(i.virtualSize / o) - r),
							i.$wrapperEl.css({
								[a("width")]: `${i.virtualSize + r}px`,
							}),
							n)
						) {
							s.splice(0, s.length);
							const e = [];
							for (let t = 0; t < s.length; t += 1) {
								let a = s[t];
								l && (a = Math.floor(a)),
									s[t] < i.virtualSize + s[0] && e.push(a);
							}
							s.push(...e);
						}
					},
				});
		},
		function (e) {
			let { swiper: t } = e;
			Object.assign(t, {
				appendSlide: K.bind(t),
				prependSlide: Z.bind(t),
				addSlide: Q.bind(t),
				removeSlide: J.bind(t),
				removeAllSlides: ee.bind(t),
			});
		},
		function (e) {
			let { swiper: t, extendParams: s, on: a } = e;
			s({ fadeEffect: { crossFade: !1, transformEl: null } }),
				te({
					effect: "fade",
					swiper: t,
					on: a,
					setTranslate: () => {
						const { slides: e } = t,
							s = t.params.fadeEffect;
						for (let a = 0; a < e.length; a += 1) {
							const e = t.slides.eq(a);
							let i = -e[0].swiperSlideOffset;
							t.params.virtualTranslate || (i -= t.translate);
							let r = 0;
							t.isHorizontal() || ((r = i), (i = 0));
							const n = t.params.fadeEffect.crossFade
								? Math.max(1 - Math.abs(e[0].progress), 0)
								: 1 + Math.min(Math.max(e[0].progress, -1), 0);
							se(s, e)
								.css({ opacity: n })
								.transform(`translate3d(${i}px, ${r}px, 0px)`);
						}
					},
					setTransition: (e) => {
						const { transformEl: s } = t.params.fadeEffect;
						(s ? t.slides.find(s) : t.slides).transition(e),
							ae({
								swiper: t,
								duration: e,
								transformEl: s,
								allSlides: !0,
							});
					},
					overwriteParams: () => ({
						slidesPerView: 1,
						slidesPerGroup: 1,
						watchSlidesProgress: !0,
						spaceBetween: 0,
						virtualTranslate: !t.params.cssMode,
					}),
				});
		},
		function (e) {
			let { swiper: t, extendParams: s, on: a } = e;
			s({
				cubeEffect: {
					slideShadows: !0,
					shadow: !0,
					shadowOffset: 20,
					shadowScale: 0.94,
				},
			});
			const i = (e, t, s) => {
				let a = s
						? e.find(".swiper-slide-shadow-left")
						: e.find(".swiper-slide-shadow-top"),
					i = s
						? e.find(".swiper-slide-shadow-right")
						: e.find(".swiper-slide-shadow-bottom");
				0 === a.length &&
					((a = d(
						`<div class="swiper-slide-shadow-${
							s ? "left" : "top"
						}"></div>`
					)),
					e.append(a)),
					0 === i.length &&
						((i = d(
							`<div class="swiper-slide-shadow-${
								s ? "right" : "bottom"
							}"></div>`
						)),
						e.append(i)),
					a.length && (a[0].style.opacity = Math.max(-t, 0)),
					i.length && (i[0].style.opacity = Math.max(t, 0));
			};
			te({
				effect: "cube",
				swiper: t,
				on: a,
				setTranslate: () => {
					const {
							$el: e,
							$wrapperEl: s,
							slides: a,
							width: r,
							height: n,
							rtlTranslate: l,
							size: o,
							browser: c,
						} = t,
						p = t.params.cubeEffect,
						u = t.isHorizontal(),
						h = t.virtual && t.params.virtual.enabled;
					let m,
						f = 0;
					p.shadow &&
						(u
							? ((m = s.find(".swiper-cube-shadow")),
							  0 === m.length &&
									((m = d(
										'<div class="swiper-cube-shadow"></div>'
									)),
									s.append(m)),
							  m.css({ height: `${r}px` }))
							: ((m = e.find(".swiper-cube-shadow")),
							  0 === m.length &&
									((m = d(
										'<div class="swiper-cube-shadow"></div>'
									)),
									e.append(m))));
					for (let e = 0; e < a.length; e += 1) {
						const t = a.eq(e);
						let s = e;
						h &&
							(s = parseInt(
								t.attr("data-swiper-slide-index"),
								10
							));
						let r = 90 * s,
							n = Math.floor(r / 360);
						l && ((r = -r), (n = Math.floor(-r / 360)));
						const d = Math.max(Math.min(t[0].progress, 1), -1);
						let c = 0,
							m = 0,
							g = 0;
						s % 4 == 0
							? ((c = 4 * -n * o), (g = 0))
							: (s - 1) % 4 == 0
							? ((c = 0), (g = 4 * -n * o))
							: (s - 2) % 4 == 0
							? ((c = o + 4 * n * o), (g = o))
							: (s - 3) % 4 == 0 &&
							  ((c = -o), (g = 3 * o + 4 * o * n)),
							l && (c = -c),
							u || ((m = c), (c = 0));
						const v = `rotateX(${u ? 0 : -r}deg) rotateY(${
							u ? r : 0
						}deg) translate3d(${c}px, ${m}px, ${g}px)`;
						d <= 1 &&
							d > -1 &&
							((f = 90 * s + 90 * d),
							l && (f = 90 * -s - 90 * d)),
							t.transform(v),
							p.slideShadows && i(t, d, u);
					}
					if (
						(s.css({
							"-webkit-transform-origin": `50% 50% -${o / 2}px`,
							"transform-origin": `50% 50% -${o / 2}px`,
						}),
						p.shadow)
					)
						if (u)
							m.transform(
								`translate3d(0px, ${
									r / 2 + p.shadowOffset
								}px, ${
									-r / 2
								}px) rotateX(90deg) rotateZ(0deg) scale(${
									p.shadowScale
								})`
							);
						else {
							const e =
									Math.abs(f) -
									90 * Math.floor(Math.abs(f) / 90),
								t =
									1.5 -
									(Math.sin((2 * e * Math.PI) / 360) / 2 +
										Math.cos((2 * e * Math.PI) / 360) / 2),
								s = p.shadowScale,
								a = p.shadowScale / t,
								i = p.shadowOffset;
							m.transform(
								`scale3d(${s}, 1, ${a}) translate3d(0px, ${
									n / 2 + i
								}px, ${-n / 2 / a}px) rotateX(-90deg)`
							);
						}
					const g = c.isSafari || c.isWebView ? -o / 2 : 0;
					s.transform(
						`translate3d(0px,0,${g}px) rotateX(${
							t.isHorizontal() ? 0 : f
						}deg) rotateY(${t.isHorizontal() ? -f : 0}deg)`
					),
						s[0].style.setProperty(
							"--swiper-cube-translate-z",
							`${g}px`
						);
				},
				setTransition: (e) => {
					const { $el: s, slides: a } = t;
					a
						.transition(e)
						.find(
							".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left"
						)
						.transition(e),
						t.params.cubeEffect.shadow &&
							!t.isHorizontal() &&
							s.find(".swiper-cube-shadow").transition(e);
				},
				recreateShadows: () => {
					const e = t.isHorizontal();
					t.slides.each((t) => {
						const s = Math.max(Math.min(t.progress, 1), -1);
						i(d(t), s, e);
					});
				},
				getEffectParams: () => t.params.cubeEffect,
				perspective: () => !0,
				overwriteParams: () => ({
					slidesPerView: 1,
					slidesPerGroup: 1,
					watchSlidesProgress: !0,
					resistanceRatio: 0,
					spaceBetween: 0,
					centeredSlides: !1,
					virtualTranslate: !0,
				}),
			});
		},
		function (e) {
			let { swiper: t, extendParams: s, on: a } = e;
			s({
				flipEffect: {
					slideShadows: !0,
					limitRotation: !0,
					transformEl: null,
				},
			});
			const i = (e, s, a) => {
				let i = t.isHorizontal()
						? e.find(".swiper-slide-shadow-left")
						: e.find(".swiper-slide-shadow-top"),
					r = t.isHorizontal()
						? e.find(".swiper-slide-shadow-right")
						: e.find(".swiper-slide-shadow-bottom");
				0 === i.length &&
					(i = ie(a, e, t.isHorizontal() ? "left" : "top")),
					0 === r.length &&
						(r = ie(a, e, t.isHorizontal() ? "right" : "bottom")),
					i.length && (i[0].style.opacity = Math.max(-s, 0)),
					r.length && (r[0].style.opacity = Math.max(s, 0));
			};
			te({
				effect: "flip",
				swiper: t,
				on: a,
				setTranslate: () => {
					const { slides: e, rtlTranslate: s } = t,
						a = t.params.flipEffect;
					for (let r = 0; r < e.length; r += 1) {
						const n = e.eq(r);
						let l = n[0].progress;
						t.params.flipEffect.limitRotation &&
							(l = Math.max(Math.min(n[0].progress, 1), -1));
						const o = n[0].swiperSlideOffset;
						let d = -180 * l,
							c = 0,
							p = t.params.cssMode ? -o - t.translate : -o,
							u = 0;
						t.isHorizontal()
							? s && (d = -d)
							: ((u = p), (p = 0), (c = -d), (d = 0)),
							(n[0].style.zIndex =
								-Math.abs(Math.round(l)) + e.length),
							a.slideShadows && i(n, l, a);
						const h = `translate3d(${p}px, ${u}px, 0px) rotateX(${c}deg) rotateY(${d}deg)`;
						se(a, n).transform(h);
					}
				},
				setTransition: (e) => {
					const { transformEl: s } = t.params.flipEffect;
					(s ? t.slides.find(s) : t.slides)
						.transition(e)
						.find(
							".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left"
						)
						.transition(e),
						ae({ swiper: t, duration: e, transformEl: s });
				},
				recreateShadows: () => {
					const e = t.params.flipEffect;
					t.slides.each((s) => {
						const a = d(s);
						let r = a[0].progress;
						t.params.flipEffect.limitRotation &&
							(r = Math.max(Math.min(s.progress, 1), -1)),
							i(a, r, e);
					});
				},
				getEffectParams: () => t.params.flipEffect,
				perspective: () => !0,
				overwriteParams: () => ({
					slidesPerView: 1,
					slidesPerGroup: 1,
					watchSlidesProgress: !0,
					spaceBetween: 0,
					virtualTranslate: !t.params.cssMode,
				}),
			});
		},
		function (e) {
			let { swiper: t, extendParams: s, on: a } = e;
			s({
				coverflowEffect: {
					rotate: 50,
					stretch: 0,
					depth: 100,
					scale: 1,
					modifier: 1,
					slideShadows: !0,
					transformEl: null,
				},
			}),
				te({
					effect: "coverflow",
					swiper: t,
					on: a,
					setTranslate: () => {
						const {
								width: e,
								height: s,
								slides: a,
								slidesSizesGrid: i,
							} = t,
							r = t.params.coverflowEffect,
							n = t.isHorizontal(),
							l = t.translate,
							o = n ? e / 2 - l : s / 2 - l,
							d = n ? r.rotate : -r.rotate,
							c = r.depth;
						for (let e = 0, t = a.length; e < t; e += 1) {
							const t = a.eq(e),
								s = i[e],
								l = (o - t[0].swiperSlideOffset - s / 2) / s,
								p =
									"function" == typeof r.modifier
										? r.modifier(l)
										: l * r.modifier;
							let u = n ? d * p : 0,
								h = n ? 0 : d * p,
								m = -c * Math.abs(p),
								f = r.stretch;
							"string" == typeof f &&
								-1 !== f.indexOf("%") &&
								(f = (parseFloat(r.stretch) / 100) * s);
							let g = n ? 0 : f * p,
								v = n ? f * p : 0,
								w = 1 - (1 - r.scale) * Math.abs(p);
							Math.abs(v) < 0.001 && (v = 0),
								Math.abs(g) < 0.001 && (g = 0),
								Math.abs(m) < 0.001 && (m = 0),
								Math.abs(u) < 0.001 && (u = 0),
								Math.abs(h) < 0.001 && (h = 0),
								Math.abs(w) < 0.001 && (w = 0);
							const b = `translate3d(${v}px,${g}px,${m}px)  rotateX(${h}deg) rotateY(${u}deg) scale(${w})`;
							if (
								(se(r, t).transform(b),
								(t[0].style.zIndex =
									1 - Math.abs(Math.round(p))),
								r.slideShadows)
							) {
								let e = n
										? t.find(".swiper-slide-shadow-left")
										: t.find(".swiper-slide-shadow-top"),
									s = n
										? t.find(".swiper-slide-shadow-right")
										: t.find(".swiper-slide-shadow-bottom");
								0 === e.length &&
									(e = ie(r, t, n ? "left" : "top")),
									0 === s.length &&
										(s = ie(r, t, n ? "right" : "bottom")),
									e.length &&
										(e[0].style.opacity = p > 0 ? p : 0),
									s.length &&
										(s[0].style.opacity = -p > 0 ? -p : 0);
							}
						}
					},
					setTransition: (e) => {
						const { transformEl: s } = t.params.coverflowEffect;
						(s ? t.slides.find(s) : t.slides)
							.transition(e)
							.find(
								".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left"
							)
							.transition(e);
					},
					perspective: () => !0,
					overwriteParams: () => ({ watchSlidesProgress: !0 }),
				});
		},
		function (e) {
			let { swiper: t, extendParams: s, on: a } = e;
			s({
				creativeEffect: {
					transformEl: null,
					limitProgress: 1,
					shadowPerProgress: !1,
					progressMultiplier: 1,
					perspective: !0,
					prev: {
						translate: [0, 0, 0],
						rotate: [0, 0, 0],
						opacity: 1,
						scale: 1,
					},
					next: {
						translate: [0, 0, 0],
						rotate: [0, 0, 0],
						opacity: 1,
						scale: 1,
					},
				},
			});
			const i = (e) => ("string" == typeof e ? e : `${e}px`);
			te({
				effect: "creative",
				swiper: t,
				on: a,
				setTranslate: () => {
					const { slides: e, $wrapperEl: s, slidesSizesGrid: a } = t,
						r = t.params.creativeEffect,
						{ progressMultiplier: n } = r,
						l = t.params.centeredSlides;
					if (l) {
						const e = a[0] / 2 - t.params.slidesOffsetBefore || 0;
						s.transform(`translateX(calc(50% - ${e}px))`);
					}
					for (let s = 0; s < e.length; s += 1) {
						const a = e.eq(s),
							o = a[0].progress,
							d = Math.min(
								Math.max(a[0].progress, -r.limitProgress),
								r.limitProgress
							);
						let c = d;
						l ||
							(c = Math.min(
								Math.max(
									a[0].originalProgress,
									-r.limitProgress
								),
								r.limitProgress
							));
						const p = a[0].swiperSlideOffset,
							u = [
								t.params.cssMode ? -p - t.translate : -p,
								0,
								0,
							],
							h = [0, 0, 0];
						let m = !1;
						t.isHorizontal() || ((u[1] = u[0]), (u[0] = 0));
						let f = {
							translate: [0, 0, 0],
							rotate: [0, 0, 0],
							scale: 1,
							opacity: 1,
						};
						d < 0
							? ((f = r.next), (m = !0))
							: d > 0 && ((f = r.prev), (m = !0)),
							u.forEach((e, t) => {
								u[t] = `calc(${e}px + (${i(
									f.translate[t]
								)} * ${Math.abs(d * n)}))`;
							}),
							h.forEach((e, t) => {
								h[t] = f.rotate[t] * Math.abs(d * n);
							}),
							(a[0].style.zIndex =
								-Math.abs(Math.round(o)) + e.length);
						const g = u.join(", "),
							v = `rotateX(${h[0]}deg) rotateY(${h[1]}deg) rotateZ(${h[2]}deg)`,
							w =
								c < 0
									? `scale(${1 + (1 - f.scale) * c * n})`
									: `scale(${1 - (1 - f.scale) * c * n})`,
							b =
								c < 0
									? 1 + (1 - f.opacity) * c * n
									: 1 - (1 - f.opacity) * c * n,
							x = `translate3d(${g}) ${v} ${w}`;
						if ((m && f.shadow) || !m) {
							let e = a.children(".swiper-slide-shadow");
							if (
								(0 === e.length && f.shadow && (e = ie(r, a)),
								e.length)
							) {
								const t = r.shadowPerProgress
									? d * (1 / r.limitProgress)
									: d;
								e[0].style.opacity = Math.min(
									Math.max(Math.abs(t), 0),
									1
								);
							}
						}
						const y = se(r, a);
						y.transform(x).css({ opacity: b }),
							f.origin && y.css("transform-origin", f.origin);
					}
				},
				setTransition: (e) => {
					const { transformEl: s } = t.params.creativeEffect;
					(s ? t.slides.find(s) : t.slides)
						.transition(e)
						.find(".swiper-slide-shadow")
						.transition(e),
						ae({
							swiper: t,
							duration: e,
							transformEl: s,
							allSlides: !0,
						});
				},
				perspective: () => t.params.creativeEffect.perspective,
				overwriteParams: () => ({
					watchSlidesProgress: !0,
					virtualTranslate: !t.params.cssMode,
				}),
			});
		},
		function (e) {
			let { swiper: t, extendParams: s, on: a } = e;
			s({
				cardsEffect: {
					slideShadows: !0,
					transformEl: null,
					rotate: !0,
				},
			}),
				te({
					effect: "cards",
					swiper: t,
					on: a,
					setTranslate: () => {
						const { slides: e, activeIndex: s } = t,
							a = t.params.cardsEffect,
							{ startTranslate: i, isTouched: r } =
								t.touchEventsData,
							n = t.translate;
						for (let l = 0; l < e.length; l += 1) {
							const o = e.eq(l),
								d = o[0].progress,
								c = Math.min(Math.max(d, -4), 4);
							let p = o[0].swiperSlideOffset;
							t.params.centeredSlides &&
								!t.params.cssMode &&
								t.$wrapperEl.transform(
									`translateX(${t.minTranslate()}px)`
								),
								t.params.centeredSlides &&
									t.params.cssMode &&
									(p -= e[0].swiperSlideOffset);
							let u = t.params.cssMode ? -p - t.translate : -p,
								h = 0;
							const m = -100 * Math.abs(c);
							let f = 1,
								g = -2 * c,
								v = 8 - 0.75 * Math.abs(c);
							const w =
									t.virtual && t.params.virtual.enabled
										? t.virtual.from + l
										: l,
								b =
									(w === s || w === s - 1) &&
									c > 0 &&
									c < 1 &&
									(r || t.params.cssMode) &&
									n < i,
								x =
									(w === s || w === s + 1) &&
									c < 0 &&
									c > -1 &&
									(r || t.params.cssMode) &&
									n > i;
							if (b || x) {
								const e =
									(1 - Math.abs((Math.abs(c) - 0.5) / 0.5)) **
									0.5;
								(g += -28 * c * e),
									(f += -0.5 * e),
									(v += 96 * e),
									(h = -25 * e * Math.abs(c) + "%");
							}
							if (
								((u =
									c < 0
										? `calc(${u}px + (${v * Math.abs(c)}%))`
										: c > 0
										? `calc(${u}px + (-${
												v * Math.abs(c)
										  }%))`
										: `${u}px`),
								!t.isHorizontal())
							) {
								const e = h;
								(h = u), (u = e);
							}
							const y =
									c < 0
										? "" + (1 + (1 - f) * c)
										: "" + (1 - (1 - f) * c),
								E = `\n        translate3d(${u}, ${h}, ${m}px)\n        rotateZ(${
									a.rotate ? g : 0
								}deg)\n        scale(${y})\n      `;
							if (a.slideShadows) {
								let e = o.find(".swiper-slide-shadow");
								0 === e.length && (e = ie(a, o)),
									e.length &&
										(e[0].style.opacity = Math.min(
											Math.max(
												(Math.abs(c) - 0.5) / 0.5,
												0
											),
											1
										));
							}
							o[0].style.zIndex =
								-Math.abs(Math.round(d)) + e.length;
							se(a, o).transform(E);
						}
					},
					setTransition: (e) => {
						const { transformEl: s } = t.params.cardsEffect;
						(s ? t.slides.find(s) : t.slides)
							.transition(e)
							.find(".swiper-slide-shadow")
							.transition(e),
							ae({ swiper: t, duration: e, transformEl: s });
					},
					perspective: () => !0,
					overwriteParams: () => ({
						watchSlidesProgress: !0,
						virtualTranslate: !t.params.cssMode,
					}),
				});
		},
	];
	return V.use(re), V;
});
//# sourceMappingURL=swiper-bundle.min.js.map

/*!
 * @fileOverview TouchSwipe - jQuery Plugin
 * @version 1.6.18
 *
 * @author Matt Bryson http://www.github.com/mattbryson
 * @see https://github.com/mattbryson/TouchSwipe-Jquery-Plugin
 * @see http://labs.rampinteractive.co.uk/touchSwipe/
 * @see http://plugins.jquery.com/project/touchSwipe
 * @license
 * Copyright (c) 2010-2015 Matt Bryson
 * Dual licensed under the MIT or GPL Version 2 licenses.
 *
 */

!(function (factory) {
	"function" == typeof define && define.amd && define.amd.jQuery
		? define(["jquery"], factory)
		: factory(
				"undefined" != typeof module && module.exports
					? require("jquery")
					: jQuery
		  );
})(function ($) {
	"use strict";
	function init(options) {
		return (
			!options ||
				void 0 !== options.allowPageScroll ||
				(void 0 === options.swipe && void 0 === options.swipeStatus) ||
				(options.allowPageScroll = NONE),
			void 0 !== options.click &&
				void 0 === options.tap &&
				(options.tap = options.click),
			options || (options = {}),
			(options = $.extend({}, $.fn.swipe.defaults, options)),
			this.each(function () {
				var $this = $(this),
					plugin = $this.data(PLUGIN_NS);
				plugin ||
					((plugin = new TouchSwipe(this, options)),
					$this.data(PLUGIN_NS, plugin));
			})
		);
	}
	function TouchSwipe(element, options) {
		function touchStart(jqEvent) {
			if (
				!(
					getTouchInProgress() ||
					$(jqEvent.target).closest(
						options.excludedElements,
						$element
					).length > 0
				)
			) {
				var event = jqEvent.originalEvent
					? jqEvent.originalEvent
					: jqEvent;
				if (
					!event.pointerType ||
					"mouse" != event.pointerType ||
					0 != options.fallbackToMouseEvents
				) {
					var ret,
						touches = event.touches,
						evt = touches ? touches[0] : event;
					return (
						(phase = PHASE_START),
						touches
							? (fingerCount = touches.length)
							: options.preventDefaultEvents !== !1 &&
							  jqEvent.preventDefault(),
						(distance = 0),
						(direction = null),
						(currentDirection = null),
						(pinchDirection = null),
						(duration = 0),
						(startTouchesDistance = 0),
						(endTouchesDistance = 0),
						(pinchZoom = 1),
						(pinchDistance = 0),
						(maximumsMap = createMaximumsData()),
						cancelMultiFingerRelease(),
						createFingerData(0, evt),
						!touches ||
						fingerCount === options.fingers ||
						options.fingers === ALL_FINGERS ||
						hasPinches()
							? ((startTime = getTimeStamp()),
							  2 == fingerCount &&
									(createFingerData(1, touches[1]),
									(startTouchesDistance = endTouchesDistance =
										calculateTouchesDistance(
											fingerData[0].start,
											fingerData[1].start
										))),
							  (options.swipeStatus || options.pinchStatus) &&
									(ret = triggerHandler(event, phase)))
							: (ret = !1),
						ret === !1
							? ((phase = PHASE_CANCEL),
							  triggerHandler(event, phase),
							  ret)
							: (options.hold &&
									(holdTimeout = setTimeout(
										$.proxy(function () {
											$element.trigger("hold", [
												event.target,
											]),
												options.hold &&
													(ret = options.hold.call(
														$element,
														event,
														event.target
													));
										}, this),
										options.longTapThreshold
									)),
							  setTouchInProgress(!0),
							  null)
					);
				}
			}
		}
		function touchMove(jqEvent) {
			var event = jqEvent.originalEvent ? jqEvent.originalEvent : jqEvent;
			if (
				phase !== PHASE_END &&
				phase !== PHASE_CANCEL &&
				!inMultiFingerRelease()
			) {
				var ret,
					touches = event.touches,
					evt = touches ? touches[0] : event,
					currentFinger = updateFingerData(evt);
				if (
					((endTime = getTimeStamp()),
					touches && (fingerCount = touches.length),
					options.hold && clearTimeout(holdTimeout),
					(phase = PHASE_MOVE),
					2 == fingerCount &&
						(0 == startTouchesDistance
							? (createFingerData(1, touches[1]),
							  (startTouchesDistance = endTouchesDistance =
									calculateTouchesDistance(
										fingerData[0].start,
										fingerData[1].start
									)))
							: (updateFingerData(touches[1]),
							  (endTouchesDistance = calculateTouchesDistance(
									fingerData[0].end,
									fingerData[1].end
							  )),
							  (pinchDirection = calculatePinchDirection(
									fingerData[0].end,
									fingerData[1].end
							  ))),
						(pinchZoom = calculatePinchZoom(
							startTouchesDistance,
							endTouchesDistance
						)),
						(pinchDistance = Math.abs(
							startTouchesDistance - endTouchesDistance
						))),
					fingerCount === options.fingers ||
						options.fingers === ALL_FINGERS ||
						!touches ||
						hasPinches())
				) {
					if (
						((direction = calculateDirection(
							currentFinger.start,
							currentFinger.end
						)),
						(currentDirection = calculateDirection(
							currentFinger.last,
							currentFinger.end
						)),
						validateDefaultEvent(jqEvent, currentDirection),
						(distance = calculateDistance(
							currentFinger.start,
							currentFinger.end
						)),
						(duration = calculateDuration()),
						setMaxDistance(direction, distance),
						(ret = triggerHandler(event, phase)),
						!options.triggerOnTouchEnd ||
							options.triggerOnTouchLeave)
					) {
						var inBounds = !0;
						if (options.triggerOnTouchLeave) {
							var bounds = getbounds(this);
							inBounds = isInBounds(currentFinger.end, bounds);
						}
						!options.triggerOnTouchEnd && inBounds
							? (phase = getNextPhase(PHASE_MOVE))
							: options.triggerOnTouchLeave &&
							  !inBounds &&
							  (phase = getNextPhase(PHASE_END)),
							(phase != PHASE_CANCEL && phase != PHASE_END) ||
								triggerHandler(event, phase);
					}
				} else (phase = PHASE_CANCEL), triggerHandler(event, phase);
				ret === !1 &&
					((phase = PHASE_CANCEL), triggerHandler(event, phase));
			}
		}
		function touchEnd(jqEvent) {
			var event = jqEvent.originalEvent ? jqEvent.originalEvent : jqEvent,
				touches = event.touches;
			if (touches) {
				if (touches.length && !inMultiFingerRelease())
					return startMultiFingerRelease(event), !0;
				if (touches.length && inMultiFingerRelease()) return !0;
			}
			return (
				inMultiFingerRelease() && (fingerCount = fingerCountAtRelease),
				(endTime = getTimeStamp()),
				(duration = calculateDuration()),
				didSwipeBackToCancel() || !validateSwipeDistance()
					? ((phase = PHASE_CANCEL), triggerHandler(event, phase))
					: options.triggerOnTouchEnd ||
					  (options.triggerOnTouchEnd === !1 && phase === PHASE_MOVE)
					? (options.preventDefaultEvents !== !1 &&
							jqEvent.preventDefault(),
					  (phase = PHASE_END),
					  triggerHandler(event, phase))
					: !options.triggerOnTouchEnd && hasTap()
					? ((phase = PHASE_END),
					  triggerHandlerForGesture(event, phase, TAP))
					: phase === PHASE_MOVE &&
					  ((phase = PHASE_CANCEL), triggerHandler(event, phase)),
				setTouchInProgress(!1),
				null
			);
		}
		function touchCancel() {
			(fingerCount = 0),
				(endTime = 0),
				(startTime = 0),
				(startTouchesDistance = 0),
				(endTouchesDistance = 0),
				(pinchZoom = 1),
				cancelMultiFingerRelease(),
				setTouchInProgress(!1);
		}
		function touchLeave(jqEvent) {
			var event = jqEvent.originalEvent ? jqEvent.originalEvent : jqEvent;
			options.triggerOnTouchLeave &&
				((phase = getNextPhase(PHASE_END)),
				triggerHandler(event, phase));
		}
		function removeListeners() {
			$element.unbind(START_EV, touchStart),
				$element.unbind(CANCEL_EV, touchCancel),
				$element.unbind(MOVE_EV, touchMove),
				$element.unbind(END_EV, touchEnd),
				LEAVE_EV && $element.unbind(LEAVE_EV, touchLeave),
				setTouchInProgress(!1);
		}
		function getNextPhase(currentPhase) {
			var nextPhase = currentPhase,
				validTime = validateSwipeTime(),
				validDistance = validateSwipeDistance(),
				didCancel = didSwipeBackToCancel();
			return (
				!validTime || didCancel
					? (nextPhase = PHASE_CANCEL)
					: !validDistance ||
					  currentPhase != PHASE_MOVE ||
					  (options.triggerOnTouchEnd &&
							!options.triggerOnTouchLeave)
					? !validDistance &&
					  currentPhase == PHASE_END &&
					  options.triggerOnTouchLeave &&
					  (nextPhase = PHASE_CANCEL)
					: (nextPhase = PHASE_END),
				nextPhase
			);
		}
		function triggerHandler(event, phase) {
			var ret,
				touches = event.touches;
			return (
				(didSwipe() || hasSwipes()) &&
					(ret = triggerHandlerForGesture(event, phase, SWIPE)),
				(didPinch() || hasPinches()) &&
					ret !== !1 &&
					(ret = triggerHandlerForGesture(event, phase, PINCH)),
				didDoubleTap() && ret !== !1
					? (ret = triggerHandlerForGesture(event, phase, DOUBLE_TAP))
					: didLongTap() && ret !== !1
					? (ret = triggerHandlerForGesture(event, phase, LONG_TAP))
					: didTap() &&
					  ret !== !1 &&
					  (ret = triggerHandlerForGesture(event, phase, TAP)),
				phase === PHASE_CANCEL && touchCancel(event),
				phase === PHASE_END &&
					(touches
						? touches.length || touchCancel(event)
						: touchCancel(event)),
				ret
			);
		}
		function triggerHandlerForGesture(event, phase, gesture) {
			var ret;
			if (gesture == SWIPE) {
				if (
					($element.trigger("swipeStatus", [
						phase,
						direction || null,
						distance || 0,
						duration || 0,
						fingerCount,
						fingerData,
						currentDirection,
					]),
					options.swipeStatus &&
						((ret = options.swipeStatus.call(
							$element,
							event,
							phase,
							direction || null,
							distance || 0,
							duration || 0,
							fingerCount,
							fingerData,
							currentDirection
						)),
						ret === !1))
				)
					return !1;
				if (phase == PHASE_END && validateSwipe()) {
					if (
						(clearTimeout(singleTapTimeout),
						clearTimeout(holdTimeout),
						$element.trigger("swipe", [
							direction,
							distance,
							duration,
							fingerCount,
							fingerData,
							currentDirection,
						]),
						options.swipe &&
							((ret = options.swipe.call(
								$element,
								event,
								direction,
								distance,
								duration,
								fingerCount,
								fingerData,
								currentDirection
							)),
							ret === !1))
					)
						return !1;
					switch (direction) {
						case LEFT:
							$element.trigger("swipeLeft", [
								direction,
								distance,
								duration,
								fingerCount,
								fingerData,
								currentDirection,
							]),
								options.swipeLeft &&
									(ret = options.swipeLeft.call(
										$element,
										event,
										direction,
										distance,
										duration,
										fingerCount,
										fingerData,
										currentDirection
									));
							break;
						case RIGHT:
							$element.trigger("swipeRight", [
								direction,
								distance,
								duration,
								fingerCount,
								fingerData,
								currentDirection,
							]),
								options.swipeRight &&
									(ret = options.swipeRight.call(
										$element,
										event,
										direction,
										distance,
										duration,
										fingerCount,
										fingerData,
										currentDirection
									));
							break;
						case UP:
							$element.trigger("swipeUp", [
								direction,
								distance,
								duration,
								fingerCount,
								fingerData,
								currentDirection,
							]),
								options.swipeUp &&
									(ret = options.swipeUp.call(
										$element,
										event,
										direction,
										distance,
										duration,
										fingerCount,
										fingerData,
										currentDirection
									));
							break;
						case DOWN:
							$element.trigger("swipeDown", [
								direction,
								distance,
								duration,
								fingerCount,
								fingerData,
								currentDirection,
							]),
								options.swipeDown &&
									(ret = options.swipeDown.call(
										$element,
										event,
										direction,
										distance,
										duration,
										fingerCount,
										fingerData,
										currentDirection
									));
					}
				}
			}
			if (gesture == PINCH) {
				if (
					($element.trigger("pinchStatus", [
						phase,
						pinchDirection || null,
						pinchDistance || 0,
						duration || 0,
						fingerCount,
						pinchZoom,
						fingerData,
					]),
					options.pinchStatus &&
						((ret = options.pinchStatus.call(
							$element,
							event,
							phase,
							pinchDirection || null,
							pinchDistance || 0,
							duration || 0,
							fingerCount,
							pinchZoom,
							fingerData
						)),
						ret === !1))
				)
					return !1;
				if (phase == PHASE_END && validatePinch())
					switch (pinchDirection) {
						case IN:
							$element.trigger("pinchIn", [
								pinchDirection || null,
								pinchDistance || 0,
								duration || 0,
								fingerCount,
								pinchZoom,
								fingerData,
							]),
								options.pinchIn &&
									(ret = options.pinchIn.call(
										$element,
										event,
										pinchDirection || null,
										pinchDistance || 0,
										duration || 0,
										fingerCount,
										pinchZoom,
										fingerData
									));
							break;
						case OUT:
							$element.trigger("pinchOut", [
								pinchDirection || null,
								pinchDistance || 0,
								duration || 0,
								fingerCount,
								pinchZoom,
								fingerData,
							]),
								options.pinchOut &&
									(ret = options.pinchOut.call(
										$element,
										event,
										pinchDirection || null,
										pinchDistance || 0,
										duration || 0,
										fingerCount,
										pinchZoom,
										fingerData
									));
					}
			}
			return (
				gesture == TAP
					? (phase !== PHASE_CANCEL && phase !== PHASE_END) ||
					  (clearTimeout(singleTapTimeout),
					  clearTimeout(holdTimeout),
					  hasDoubleTap() && !inDoubleTap()
							? ((doubleTapStartTime = getTimeStamp()),
							  (singleTapTimeout = setTimeout(
									$.proxy(function () {
										(doubleTapStartTime = null),
											$element.trigger("tap", [
												event.target,
											]),
											options.tap &&
												(ret = options.tap.call(
													$element,
													event,
													event.target
												));
									}, this),
									options.doubleTapThreshold
							  )))
							: ((doubleTapStartTime = null),
							  $element.trigger("tap", [event.target]),
							  options.tap &&
									(ret = options.tap.call(
										$element,
										event,
										event.target
									))))
					: gesture == DOUBLE_TAP
					? (phase !== PHASE_CANCEL && phase !== PHASE_END) ||
					  (clearTimeout(singleTapTimeout),
					  clearTimeout(holdTimeout),
					  (doubleTapStartTime = null),
					  $element.trigger("doubletap", [event.target]),
					  options.doubleTap &&
							(ret = options.doubleTap.call(
								$element,
								event,
								event.target
							)))
					: gesture == LONG_TAP &&
					  ((phase !== PHASE_CANCEL && phase !== PHASE_END) ||
							(clearTimeout(singleTapTimeout),
							(doubleTapStartTime = null),
							$element.trigger("longtap", [event.target]),
							options.longTap &&
								(ret = options.longTap.call(
									$element,
									event,
									event.target
								)))),
				ret
			);
		}
		function validateSwipeDistance() {
			var valid = !0;
			return (
				null !== options.threshold &&
					(valid = distance >= options.threshold),
				valid
			);
		}
		function didSwipeBackToCancel() {
			var cancelled = !1;
			return (
				null !== options.cancelThreshold &&
					null !== direction &&
					(cancelled =
						getMaxDistance(direction) - distance >=
						options.cancelThreshold),
				cancelled
			);
		}
		function validatePinchDistance() {
			return (
				null === options.pinchThreshold ||
				pinchDistance >= options.pinchThreshold
			);
		}
		function validateSwipeTime() {
			var result;
			return (result =
				!options.maxTimeThreshold ||
				!(duration >= options.maxTimeThreshold));
		}
		function validateDefaultEvent(jqEvent, direction) {
			if (options.preventDefaultEvents !== !1)
				if (options.allowPageScroll === NONE) jqEvent.preventDefault();
				else {
					var auto = options.allowPageScroll === AUTO;
					switch (direction) {
						case LEFT:
							((options.swipeLeft && auto) ||
								(!auto &&
									options.allowPageScroll != HORIZONTAL)) &&
								jqEvent.preventDefault();
							break;
						case RIGHT:
							((options.swipeRight && auto) ||
								(!auto &&
									options.allowPageScroll != HORIZONTAL)) &&
								jqEvent.preventDefault();
							break;
						case UP:
							((options.swipeUp && auto) ||
								(!auto &&
									options.allowPageScroll != VERTICAL)) &&
								jqEvent.preventDefault();
							break;
						case DOWN:
							((options.swipeDown && auto) ||
								(!auto &&
									options.allowPageScroll != VERTICAL)) &&
								jqEvent.preventDefault();
							break;
						case NONE:
					}
				}
		}
		function validatePinch() {
			var hasCorrectFingerCount = validateFingers(),
				hasEndPoint = validateEndPoint(),
				hasCorrectDistance = validatePinchDistance();
			return hasCorrectFingerCount && hasEndPoint && hasCorrectDistance;
		}
		function hasPinches() {
			return !!(
				options.pinchStatus ||
				options.pinchIn ||
				options.pinchOut
			);
		}
		function didPinch() {
			return !(!validatePinch() || !hasPinches());
		}
		function validateSwipe() {
			var hasValidTime = validateSwipeTime(),
				hasValidDistance = validateSwipeDistance(),
				hasCorrectFingerCount = validateFingers(),
				hasEndPoint = validateEndPoint(),
				didCancel = didSwipeBackToCancel(),
				valid =
					!didCancel &&
					hasEndPoint &&
					hasCorrectFingerCount &&
					hasValidDistance &&
					hasValidTime;
			return valid;
		}
		function hasSwipes() {
			return !!(
				options.swipe ||
				options.swipeStatus ||
				options.swipeLeft ||
				options.swipeRight ||
				options.swipeUp ||
				options.swipeDown
			);
		}
		function didSwipe() {
			return !(!validateSwipe() || !hasSwipes());
		}
		function validateFingers() {
			return (
				fingerCount === options.fingers ||
				options.fingers === ALL_FINGERS ||
				!SUPPORTS_TOUCH
			);
		}
		function validateEndPoint() {
			return 0 !== fingerData[0].end.x;
		}
		function hasTap() {
			return !!options.tap;
		}
		function hasDoubleTap() {
			return !!options.doubleTap;
		}
		function hasLongTap() {
			return !!options.longTap;
		}
		function validateDoubleTap() {
			if (null == doubleTapStartTime) return !1;
			var now = getTimeStamp();
			return (
				hasDoubleTap() &&
				now - doubleTapStartTime <= options.doubleTapThreshold
			);
		}
		function inDoubleTap() {
			return validateDoubleTap();
		}
		function validateTap() {
			return (
				(1 === fingerCount || !SUPPORTS_TOUCH) &&
				(isNaN(distance) || distance < options.threshold)
			);
		}
		function validateLongTap() {
			return (
				duration > options.longTapThreshold &&
				distance < DOUBLE_TAP_THRESHOLD
			);
		}
		function didTap() {
			return !(!validateTap() || !hasTap());
		}
		function didDoubleTap() {
			return !(!validateDoubleTap() || !hasDoubleTap());
		}
		function didLongTap() {
			return !(!validateLongTap() || !hasLongTap());
		}
		function startMultiFingerRelease(event) {
			(previousTouchEndTime = getTimeStamp()),
				(fingerCountAtRelease = event.touches.length + 1);
		}
		function cancelMultiFingerRelease() {
			(previousTouchEndTime = 0), (fingerCountAtRelease = 0);
		}
		function inMultiFingerRelease() {
			var withinThreshold = !1;
			if (previousTouchEndTime) {
				var diff = getTimeStamp() - previousTouchEndTime;
				diff <= options.fingerReleaseThreshold &&
					(withinThreshold = !0);
			}
			return withinThreshold;
		}
		function getTouchInProgress() {
			return !($element.data(PLUGIN_NS + "_intouch") !== !0);
		}
		function setTouchInProgress(val) {
			$element &&
				(val === !0
					? ($element.bind(MOVE_EV, touchMove),
					  $element.bind(END_EV, touchEnd),
					  LEAVE_EV && $element.bind(LEAVE_EV, touchLeave))
					: ($element.unbind(MOVE_EV, touchMove, !1),
					  $element.unbind(END_EV, touchEnd, !1),
					  LEAVE_EV && $element.unbind(LEAVE_EV, touchLeave, !1)),
				$element.data(PLUGIN_NS + "_intouch", val === !0));
		}
		function createFingerData(id, evt) {
			var f = {
				start: { x: 0, y: 0 },
				last: { x: 0, y: 0 },
				end: { x: 0, y: 0 },
			};
			return (
				(f.start.x = f.last.x = f.end.x = evt.pageX || evt.clientX),
				(f.start.y = f.last.y = f.end.y = evt.pageY || evt.clientY),
				(fingerData[id] = f),
				f
			);
		}
		function updateFingerData(evt) {
			var id = void 0 !== evt.identifier ? evt.identifier : 0,
				f = getFingerData(id);
			return (
				null === f && (f = createFingerData(id, evt)),
				(f.last.x = f.end.x),
				(f.last.y = f.end.y),
				(f.end.x = evt.pageX || evt.clientX),
				(f.end.y = evt.pageY || evt.clientY),
				f
			);
		}
		function getFingerData(id) {
			return fingerData[id] || null;
		}
		function setMaxDistance(direction, distance) {
			direction != NONE &&
				((distance = Math.max(distance, getMaxDistance(direction))),
				(maximumsMap[direction].distance = distance));
		}
		function getMaxDistance(direction) {
			if (maximumsMap[direction]) return maximumsMap[direction].distance;
		}
		function createMaximumsData() {
			var maxData = {};
			return (
				(maxData[LEFT] = createMaximumVO(LEFT)),
				(maxData[RIGHT] = createMaximumVO(RIGHT)),
				(maxData[UP] = createMaximumVO(UP)),
				(maxData[DOWN] = createMaximumVO(DOWN)),
				maxData
			);
		}
		function createMaximumVO(dir) {
			return { direction: dir, distance: 0 };
		}
		function calculateDuration() {
			return endTime - startTime;
		}
		function calculateTouchesDistance(startPoint, endPoint) {
			var diffX = Math.abs(startPoint.x - endPoint.x),
				diffY = Math.abs(startPoint.y - endPoint.y);
			return Math.round(Math.sqrt(diffX * diffX + diffY * diffY));
		}
		function calculatePinchZoom(startDistance, endDistance) {
			var percent = (endDistance / startDistance) * 1;
			return percent.toFixed(2);
		}
		function calculatePinchDirection() {
			return pinchZoom < 1 ? OUT : IN;
		}
		function calculateDistance(startPoint, endPoint) {
			return Math.round(
				Math.sqrt(
					Math.pow(endPoint.x - startPoint.x, 2) +
						Math.pow(endPoint.y - startPoint.y, 2)
				)
			);
		}
		function calculateAngle(startPoint, endPoint) {
			var x = startPoint.x - endPoint.x,
				y = endPoint.y - startPoint.y,
				r = Math.atan2(y, x),
				angle = Math.round((180 * r) / Math.PI);
			return angle < 0 && (angle = 360 - Math.abs(angle)), angle;
		}
		function calculateDirection(startPoint, endPoint) {
			if (comparePoints(startPoint, endPoint)) return NONE;
			var angle = calculateAngle(startPoint, endPoint);
			return angle <= 45 && angle >= 0
				? LEFT
				: angle <= 360 && angle >= 315
				? LEFT
				: angle >= 135 && angle <= 225
				? RIGHT
				: angle > 45 && angle < 135
				? DOWN
				: UP;
		}
		function getTimeStamp() {
			var now = new Date();
			return now.getTime();
		}
		function getbounds(el) {
			el = $(el);
			var offset = el.offset(),
				bounds = {
					left: offset.left,
					right: offset.left + el.outerWidth(),
					top: offset.top,
					bottom: offset.top + el.outerHeight(),
				};
			return bounds;
		}
		function isInBounds(point, bounds) {
			return (
				point.x > bounds.left &&
				point.x < bounds.right &&
				point.y > bounds.top &&
				point.y < bounds.bottom
			);
		}
		function comparePoints(pointA, pointB) {
			return pointA.x == pointB.x && pointA.y == pointB.y;
		}
		var options = $.extend({}, options),
			useTouchEvents =
				SUPPORTS_TOUCH ||
				SUPPORTS_POINTER ||
				!options.fallbackToMouseEvents,
			START_EV = useTouchEvents
				? SUPPORTS_POINTER
					? SUPPORTS_POINTER_IE10
						? "MSPointerDown"
						: "pointerdown"
					: "touchstart"
				: "mousedown",
			MOVE_EV = useTouchEvents
				? SUPPORTS_POINTER
					? SUPPORTS_POINTER_IE10
						? "MSPointerMove"
						: "pointermove"
					: "touchmove"
				: "mousemove",
			END_EV = useTouchEvents
				? SUPPORTS_POINTER
					? SUPPORTS_POINTER_IE10
						? "MSPointerUp"
						: "pointerup"
					: "touchend"
				: "mouseup",
			LEAVE_EV = useTouchEvents
				? SUPPORTS_POINTER
					? "mouseleave"
					: null
				: "mouseleave",
			CANCEL_EV = SUPPORTS_POINTER
				? SUPPORTS_POINTER_IE10
					? "MSPointerCancel"
					: "pointercancel"
				: "touchcancel",
			distance = 0,
			direction = null,
			currentDirection = null,
			duration = 0,
			startTouchesDistance = 0,
			endTouchesDistance = 0,
			pinchZoom = 1,
			pinchDistance = 0,
			pinchDirection = 0,
			maximumsMap = null,
			$element = $(element),
			phase = "start",
			fingerCount = 0,
			fingerData = {},
			startTime = 0,
			endTime = 0,
			previousTouchEndTime = 0,
			fingerCountAtRelease = 0,
			doubleTapStartTime = 0,
			singleTapTimeout = null,
			holdTimeout = null;
		try {
			$element.bind(START_EV, touchStart),
				$element.bind(CANCEL_EV, touchCancel);
		} catch (e) {
			$.error(
				"events not supported " +
					START_EV +
					"," +
					CANCEL_EV +
					" on jQuery.swipe"
			);
		}
		(this.enable = function () {
			return (
				this.disable(),
				$element.bind(START_EV, touchStart),
				$element.bind(CANCEL_EV, touchCancel),
				$element
			);
		}),
			(this.disable = function () {
				return removeListeners(), $element;
			}),
			(this.destroy = function () {
				removeListeners(),
					$element.data(PLUGIN_NS, null),
					($element = null);
			}),
			(this.option = function (property, value) {
				if ("object" == typeof property)
					options = $.extend(options, property);
				else if (void 0 !== options[property]) {
					if (void 0 === value) return options[property];
					options[property] = value;
				} else {
					if (!property) return options;
					$.error(
						"Option " +
							property +
							" does not exist on jQuery.swipe.options"
					);
				}
				return null;
			});
	}
	var VERSION = "1.6.18",
		LEFT = "left",
		RIGHT = "right",
		UP = "up",
		DOWN = "down",
		IN = "in",
		OUT = "out",
		NONE = "none",
		AUTO = "auto",
		SWIPE = "swipe",
		PINCH = "pinch",
		TAP = "tap",
		DOUBLE_TAP = "doubletap",
		LONG_TAP = "longtap",
		HORIZONTAL = "horizontal",
		VERTICAL = "vertical",
		ALL_FINGERS = "all",
		DOUBLE_TAP_THRESHOLD = 10,
		PHASE_START = "start",
		PHASE_MOVE = "move",
		PHASE_END = "end",
		PHASE_CANCEL = "cancel",
		SUPPORTS_TOUCH = "ontouchstart" in window,
		SUPPORTS_POINTER_IE10 =
			window.navigator.msPointerEnabled &&
			!window.PointerEvent &&
			!SUPPORTS_TOUCH,
		SUPPORTS_POINTER =
			(window.PointerEvent || window.navigator.msPointerEnabled) &&
			!SUPPORTS_TOUCH,
		PLUGIN_NS = "TouchSwipe",
		defaults = {
			fingers: 1,
			threshold: 75,
			cancelThreshold: null,
			pinchThreshold: 20,
			maxTimeThreshold: null,
			fingerReleaseThreshold: 250,
			longTapThreshold: 500,
			doubleTapThreshold: 200,
			swipe: null,
			swipeLeft: null,
			swipeRight: null,
			swipeUp: null,
			swipeDown: null,
			swipeStatus: null,
			pinchIn: null,
			pinchOut: null,
			pinchStatus: null,
			click: null,
			tap: null,
			doubleTap: null,
			longTap: null,
			hold: null,
			triggerOnTouchEnd: !0,
			triggerOnTouchLeave: !1,
			allowPageScroll: "auto",
			fallbackToMouseEvents: !0,
			excludedElements: ".noSwipe",
			preventDefaultEvents: !0,
		};
	($.fn.swipe = function (method) {
		var $this = $(this),
			plugin = $this.data(PLUGIN_NS);
		if (plugin && "string" == typeof method) {
			if (plugin[method])
				return plugin[method].apply(
					plugin,
					Array.prototype.slice.call(arguments, 1)
				);
			$.error("Method " + method + " does not exist on jQuery.swipe");
		} else if (plugin && "object" == typeof method)
			plugin.option.apply(plugin, arguments);
		else if (!(plugin || ("object" != typeof method && method)))
			return init.apply(this, arguments);
		return $this;
	}),
		($.fn.swipe.version = VERSION),
		($.fn.swipe.defaults = defaults),
		($.fn.swipe.phases = {
			PHASE_START: PHASE_START,
			PHASE_MOVE: PHASE_MOVE,
			PHASE_END: PHASE_END,
			PHASE_CANCEL: PHASE_CANCEL,
		}),
		($.fn.swipe.directions = {
			LEFT: LEFT,
			RIGHT: RIGHT,
			UP: UP,
			DOWN: DOWN,
			IN: IN,
			OUT: OUT,
		}),
		($.fn.swipe.pageScroll = {
			NONE: NONE,
			HORIZONTAL: HORIZONTAL,
			VERTICAL: VERTICAL,
			AUTO: AUTO,
		}),
		($.fn.swipe.fingers = {
			ONE: 1,
			TWO: 2,
			THREE: 3,
			FOUR: 4,
			FIVE: 5,
			ALL: ALL_FINGERS,
		});
});

/*!
 * jQuery Validation Plugin v1.19.3
 *
 * https://jqueryvalidation.org/
 * 
 * Copyright (c) 2021 Jörn Zaefferer
 * Released under the MIT license
 */
(function( factory ) {
	if ( typeof define === "function" && define.amd ) {
		define( ["jquery"], factory );
	} else if (typeof module === "object" && module.exports) {
		module.exports = factory( require( "jquery" ) );
	} else {
		factory( jQuery );
	}
}(function( $ ) {

$.extend( $.fn, {

	// https://jqueryvalidation.org/validate/
	validate: function( options ) {

		// If nothing is selected, return nothing; can't chain anyway
		if ( !this.length ) {
			if ( options && options.debug && window.console ) {
				console.warn( "Nothing selected, can't validate, returning nothing." );
			}
			return;
		}

		// Check if a validator for this form was already created
		var validator = $.data( this[ 0 ], "validator" );
		if ( validator ) {
			return validator;
		}

		// Add novalidate tag if HTML5.
		this.attr( "novalidate", "novalidate" );

		validator = new $.validator( options, this[ 0 ] );
		$.data( this[ 0 ], "validator", validator );

		if ( validator.settings.onsubmit ) {

			this.on( "click.validate", ":submit", function( event ) {

				// Track the used submit button to properly handle scripted
				// submits later.
				validator.submitButton = event.currentTarget;

				// Allow suppressing validation by adding a cancel class to the submit button
				if ( $( this ).hasClass( "cancel" ) ) {
					validator.cancelSubmit = true;
				}

				// Allow suppressing validation by adding the html5 formnovalidate attribute to the submit button
				if ( $( this ).attr( "formnovalidate" ) !== undefined ) {
					validator.cancelSubmit = true;
				}
			} );

			// Validate the form on submit
			this.on( "submit.validate", function( event ) {
				if ( validator.settings.debug ) {

					// Prevent form submit to be able to see console output
					event.preventDefault();
				}

				function handle() {
					var hidden, result;

					// Insert a hidden input as a replacement for the missing submit button
					// The hidden input is inserted in two cases:
					//   - A user defined a `submitHandler`
					//   - There was a pending request due to `remote` method and `stopRequest()`
					//     was called to submit the form in case it's valid
					if ( validator.submitButton && ( validator.settings.submitHandler || validator.formSubmitted ) ) {
						hidden = $( "<input type='hidden'/>" )
							.attr( "name", validator.submitButton.name )
							.val( $( validator.submitButton ).val() )
							.appendTo( validator.currentForm );
					}

					if ( validator.settings.submitHandler && !validator.settings.debug ) {
						result = validator.settings.submitHandler.call( validator, validator.currentForm, event );
						if ( hidden ) {

							// And clean up afterwards; thanks to no-block-scope, hidden can be referenced
							hidden.remove();
						}
						if ( result !== undefined ) {
							return result;
						}
						return false;
					}
					return true;
				}

				// Prevent submit for invalid forms or custom submit handlers
				if ( validator.cancelSubmit ) {
					validator.cancelSubmit = false;
					return handle();
				}
				if ( validator.form() ) {
					if ( validator.pendingRequest ) {
						validator.formSubmitted = true;
						return false;
					}
					return handle();
				} else {
					validator.focusInvalid();
					return false;
				}
			} );
		}

		return validator;
	},

	// https://jqueryvalidation.org/valid/
	valid: function() {
		var valid, validator, errorList;

		if ( $( this[ 0 ] ).is( "form" ) ) {
			valid = this.validate().form();
		} else {
			errorList = [];
			valid = true;
			validator = $( this[ 0 ].form ).validate();
			this.each( function() {
				valid = validator.element( this ) && valid;
				if ( !valid ) {
					errorList = errorList.concat( validator.errorList );
				}
			} );
			validator.errorList = errorList;
		}
		return valid;
	},

	// https://jqueryvalidation.org/rules/
	rules: function( command, argument ) {
		var element = this[ 0 ],
			isContentEditable = typeof this.attr( "contenteditable" ) !== "undefined" && this.attr( "contenteditable" ) !== "false",
			settings, staticRules, existingRules, data, param, filtered;

		// If nothing is selected, return empty object; can't chain anyway
		if ( element == null ) {
			return;
		}

		if ( !element.form && isContentEditable ) {
			element.form = this.closest( "form" )[ 0 ];
			element.name = this.attr( "name" );
		}

		if ( element.form == null ) {
			return;
		}

		if ( command ) {
			settings = $.data( element.form, "validator" ).settings;
			staticRules = settings.rules;
			existingRules = $.validator.staticRules( element );
			switch ( command ) {
			case "add":
				$.extend( existingRules, $.validator.normalizeRule( argument ) );

				// Remove messages from rules, but allow them to be set separately
				delete existingRules.messages;
				staticRules[ element.name ] = existingRules;
				if ( argument.messages ) {
					settings.messages[ element.name ] = $.extend( settings.messages[ element.name ], argument.messages );
				}
				break;
			case "remove":
				if ( !argument ) {
					delete staticRules[ element.name ];
					return existingRules;
				}
				filtered = {};
				$.each( argument.split( /\s/ ), function( index, method ) {
					filtered[ method ] = existingRules[ method ];
					delete existingRules[ method ];
				} );
				return filtered;
			}
		}

		data = $.validator.normalizeRules(
		$.extend(
			{},
			$.validator.classRules( element ),
			$.validator.attributeRules( element ),
			$.validator.dataRules( element ),
			$.validator.staticRules( element )
		), element );

		// Make sure required is at front
		if ( data.required ) {
			param = data.required;
			delete data.required;
			data = $.extend( { required: param }, data );
		}

		// Make sure remote is at back
		if ( data.remote ) {
			param = data.remote;
			delete data.remote;
			data = $.extend( data, { remote: param } );
		}

		return data;
	}
} );

// JQuery trim is deprecated, provide a trim method based on String.prototype.trim
var trim = function( str ) {

	// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/trim#Polyfill
	return str.replace( /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "" );
};

// Custom selectors
$.extend( $.expr.pseudos || $.expr[ ":" ], {		// '|| $.expr[ ":" ]' here enables backwards compatibility to jQuery 1.7. Can be removed when dropping jQ 1.7.x support

	// https://jqueryvalidation.org/blank-selector/
	blank: function( a ) {
		return !trim( "" + $( a ).val() );
	},

	// https://jqueryvalidation.org/filled-selector/
	filled: function( a ) {
		var val = $( a ).val();
		return val !== null && !!trim( "" + val );
	},

	// https://jqueryvalidation.org/unchecked-selector/
	unchecked: function( a ) {
		return !$( a ).prop( "checked" );
	}
} );

// Constructor for validator
$.validator = function( options, form ) {
	this.settings = $.extend( true, {}, $.validator.defaults, options );
	this.currentForm = form;
	this.init();
};

// https://jqueryvalidation.org/jQuery.validator.format/
$.validator.format = function( source, params ) {
	if ( arguments.length === 1 ) {
		return function() {
			var args = $.makeArray( arguments );
			args.unshift( source );
			return $.validator.format.apply( this, args );
		};
	}
	if ( params === undefined ) {
		return source;
	}
	if ( arguments.length > 2 && params.constructor !== Array  ) {
		params = $.makeArray( arguments ).slice( 1 );
	}
	if ( params.constructor !== Array ) {
		params = [ params ];
	}
	$.each( params, function( i, n ) {
		source = source.replace( new RegExp( "\\{" + i + "\\}", "g" ), function() {
			return n;
		} );
	} );
	return source;
};

$.extend( $.validator, {

	defaults: {
		messages: {},
		groups: {},
		rules: {},
		errorClass: "error",
		pendingClass: "pending",
		validClass: "valid",
		errorElement: "label",
		focusCleanup: false,
		focusInvalid: true,
		errorContainer: $( [] ),
		errorLabelContainer: $( [] ),
		onsubmit: true,
		ignore: ":hidden",
		ignoreTitle: false,
		onfocusin: function( element ) {
			this.lastActive = element;

			// Hide error label and remove error class on focus if enabled
			if ( this.settings.focusCleanup ) {
				if ( this.settings.unhighlight ) {
					this.settings.unhighlight.call( this, element, this.settings.errorClass, this.settings.validClass );
				}
				this.hideThese( this.errorsFor( element ) );
			}
		},
		onfocusout: function( element ) {
			if ( !this.checkable( element ) && ( element.name in this.submitted || !this.optional( element ) ) ) {
				this.element( element );
			}
		},
		onkeyup: function( element, event ) {

			// Avoid revalidate the field when pressing one of the following keys
			// Shift       => 16
			// Ctrl        => 17
			// Alt         => 18
			// Caps lock   => 20
			// End         => 35
			// Home        => 36
			// Left arrow  => 37
			// Up arrow    => 38
			// Right arrow => 39
			// Down arrow  => 40
			// Insert      => 45
			// Num lock    => 144
			// AltGr key   => 225
			var excludedKeys = [
				16, 17, 18, 20, 35, 36, 37,
				38, 39, 40, 45, 144, 225
			];

			if ( event.which === 9 && this.elementValue( element ) === "" || $.inArray( event.keyCode, excludedKeys ) !== -1 ) {
				return;
			} else if ( element.name in this.submitted || element.name in this.invalid ) {
				this.element( element );
			}
		},
		onclick: function( element ) {

			// Click on selects, radiobuttons and checkboxes
			if ( element.name in this.submitted ) {
				this.element( element );

			// Or option elements, check parent select in that case
			} else if ( element.parentNode.name in this.submitted ) {
				this.element( element.parentNode );
			}
		},
		highlight: function( element, errorClass, validClass ) {
			if ( element.type === "radio" ) {
				this.findByName( element.name ).addClass( errorClass ).removeClass( validClass );
			} else {
				$( element ).addClass( errorClass ).removeClass( validClass );
			}
		},
		unhighlight: function( element, errorClass, validClass ) {
			if ( element.type === "radio" ) {
				this.findByName( element.name ).removeClass( errorClass ).addClass( validClass );
			} else {
				$( element ).removeClass( errorClass ).addClass( validClass );
			}
		}
	},

	// https://jqueryvalidation.org/jQuery.validator.setDefaults/
	setDefaults: function( settings ) {
		$.extend( $.validator.defaults, settings );
	},

	messages: {
		required: "This field is required.",
		remote: "Please fix this field.",
		email: "Please enter a valid email address.",
		url: "Please enter a valid URL.",
		date: "Please enter a valid date.",
		dateISO: "Please enter a valid date (ISO).",
		number: "Please enter a valid number.",
		digits: "Please enter only digits.",
		equalTo: "Please enter the same value again.",
		maxlength: $.validator.format( "Please enter no more than {0} characters." ),
		minlength: $.validator.format( "Please enter at least {0} characters." ),
		rangelength: $.validator.format( "Please enter a value between {0} and {1} characters long." ),
		range: $.validator.format( "Please enter a value between {0} and {1}." ),
		max: $.validator.format( "Please enter a value less than or equal to {0}." ),
		min: $.validator.format( "Please enter a value greater than or equal to {0}." ),
		step: $.validator.format( "Please enter a multiple of {0}." )
	},

	autoCreateRanges: false,

	prototype: {

		init: function() {
			this.labelContainer = $( this.settings.errorLabelContainer );
			this.errorContext = this.labelContainer.length && this.labelContainer || $( this.currentForm );
			this.containers = $( this.settings.errorContainer ).add( this.settings.errorLabelContainer );
			this.submitted = {};
			this.valueCache = {};
			this.pendingRequest = 0;
			this.pending = {};
			this.invalid = {};
			this.reset();

			var currentForm = this.currentForm,
				groups = ( this.groups = {} ),
				rules;
			$.each( this.settings.groups, function( key, value ) {
				if ( typeof value === "string" ) {
					value = value.split( /\s/ );
				}
				$.each( value, function( index, name ) {
					groups[ name ] = key;
				} );
			} );
			rules = this.settings.rules;
			$.each( rules, function( key, value ) {
				rules[ key ] = $.validator.normalizeRule( value );
			} );

			function delegate( event ) {
				var isContentEditable = typeof $( this ).attr( "contenteditable" ) !== "undefined" && $( this ).attr( "contenteditable" ) !== "false";

				// Set form expando on contenteditable
				if ( !this.form && isContentEditable ) {
					this.form = $( this ).closest( "form" )[ 0 ];
					this.name = $( this ).attr( "name" );
				}

				// Ignore the element if it belongs to another form. This will happen mainly
				// when setting the `form` attribute of an input to the id of another form.
				if ( currentForm !== this.form ) {
					return;
				}

				var validator = $.data( this.form, "validator" ),
					eventType = "on" + event.type.replace( /^validate/, "" ),
					settings = validator.settings;
				if ( settings[ eventType ] && !$( this ).is( settings.ignore ) ) {
					settings[ eventType ].call( validator, this, event );
				}
			}

			$( this.currentForm )
				.on( "focusin.validate focusout.validate keyup.validate",
					":text, [type='password'], [type='file'], select, textarea, [type='number'], [type='search'], " +
					"[type='tel'], [type='url'], [type='email'], [type='datetime'], [type='date'], [type='month'], " +
					"[type='week'], [type='time'], [type='datetime-local'], [type='range'], [type='color'], " +
					"[type='radio'], [type='checkbox'], [contenteditable], [type='button']", delegate )

				// Support: Chrome, oldIE
				// "select" is provided as event.target when clicking a option
				.on( "click.validate", "select, option, [type='radio'], [type='checkbox']", delegate );

			if ( this.settings.invalidHandler ) {
				$( this.currentForm ).on( "invalid-form.validate", this.settings.invalidHandler );
			}
		},

		// https://jqueryvalidation.org/Validator.form/
		form: function() {
			this.checkForm();
			$.extend( this.submitted, this.errorMap );
			this.invalid = $.extend( {}, this.errorMap );
			if ( !this.valid() ) {
				$( this.currentForm ).triggerHandler( "invalid-form", [ this ] );
			}
			this.showErrors();
			return this.valid();
		},

		checkForm: function() {
			this.prepareForm();
			for ( var i = 0, elements = ( this.currentElements = this.elements() ); elements[ i ]; i++ ) {
				this.check( elements[ i ] );
			}
			return this.valid();
		},

		// https://jqueryvalidation.org/Validator.element/
		element: function( element ) {
			var cleanElement = this.clean( element ),
				checkElement = this.validationTargetFor( cleanElement ),
				v = this,
				result = true,
				rs, group;

			if ( checkElement === undefined ) {
				delete this.invalid[ cleanElement.name ];
			} else {
				this.prepareElement( checkElement );
				this.currentElements = $( checkElement );

				// If this element is grouped, then validate all group elements already
				// containing a value
				group = this.groups[ checkElement.name ];
				if ( group ) {
					$.each( this.groups, function( name, testgroup ) {
						if ( testgroup === group && name !== checkElement.name ) {
							cleanElement = v.validationTargetFor( v.clean( v.findByName( name ) ) );
							if ( cleanElement && cleanElement.name in v.invalid ) {
								v.currentElements.push( cleanElement );
								result = v.check( cleanElement ) && result;
							}
						}
					} );
				}

				rs = this.check( checkElement ) !== false;
				result = result && rs;
				if ( rs ) {
					this.invalid[ checkElement.name ] = false;
				} else {
					this.invalid[ checkElement.name ] = true;
				}

				if ( !this.numberOfInvalids() ) {

					// Hide error containers on last error
					this.toHide = this.toHide.add( this.containers );
				}
				this.showErrors();

				// Add aria-invalid status for screen readers
				$( element ).attr( "aria-invalid", !rs );
			}

			return result;
		},

		// https://jqueryvalidation.org/Validator.showErrors/
		showErrors: function( errors ) {
			if ( errors ) {
				var validator = this;

				// Add items to error list and map
				$.extend( this.errorMap, errors );
				this.errorList = $.map( this.errorMap, function( message, name ) {
					return {
						message: message,
						element: validator.findByName( name )[ 0 ]
					};
				} );

				// Remove items from success list
				this.successList = $.grep( this.successList, function( element ) {
					return !( element.name in errors );
				} );
			}
			if ( this.settings.showErrors ) {
				this.settings.showErrors.call( this, this.errorMap, this.errorList );
			} else {
				this.defaultShowErrors();
			}
		},

		// https://jqueryvalidation.org/Validator.resetForm/
		resetForm: function() {
			if ( $.fn.resetForm ) {
				$( this.currentForm ).resetForm();
			}
			this.invalid = {};
			this.submitted = {};
			this.prepareForm();
			this.hideErrors();
			var elements = this.elements()
				.removeData( "previousValue" )
				.removeAttr( "aria-invalid" );

			this.resetElements( elements );
		},

		resetElements: function( elements ) {
			var i;

			if ( this.settings.unhighlight ) {
				for ( i = 0; elements[ i ]; i++ ) {
					this.settings.unhighlight.call( this, elements[ i ],
						this.settings.errorClass, "" );
					this.findByName( elements[ i ].name ).removeClass( this.settings.validClass );
				}
			} else {
				elements
					.removeClass( this.settings.errorClass )
					.removeClass( this.settings.validClass );
			}
		},

		numberOfInvalids: function() {
			return this.objectLength( this.invalid );
		},

		objectLength: function( obj ) {
			/* jshint unused: false */
			var count = 0,
				i;
			for ( i in obj ) {

				// This check allows counting elements with empty error
				// message as invalid elements
				if ( obj[ i ] !== undefined && obj[ i ] !== null && obj[ i ] !== false ) {
					count++;
				}
			}
			return count;
		},

		hideErrors: function() {
			this.hideThese( this.toHide );
		},

		hideThese: function( errors ) {
			errors.not( this.containers ).text( "" );
			this.addWrapper( errors ).hide();
		},

		valid: function() {
			return this.size() === 0;
		},

		size: function() {
			return this.errorList.length;
		},

		focusInvalid: function() {
			if ( this.settings.focusInvalid ) {
				try {
					$( this.findLastActive() || this.errorList.length && this.errorList[ 0 ].element || [] )
					.filter( ":visible" )
					.trigger( "focus" )

					// Manually trigger focusin event; without it, focusin handler isn't called, findLastActive won't have anything to find
					.trigger( "focusin" );
				} catch ( e ) {

					// Ignore IE throwing errors when focusing hidden elements
				}
			}
		},

		findLastActive: function() {
			var lastActive = this.lastActive;
			return lastActive && $.grep( this.errorList, function( n ) {
				return n.element.name === lastActive.name;
			} ).length === 1 && lastActive;
		},

		elements: function() {
			var validator = this,
				rulesCache = {};

			// Select all valid inputs inside the form (no submit or reset buttons)
			return $( this.currentForm )
			.find( "input, select, textarea, [contenteditable]" )
			.not( ":submit, :reset, :image, :disabled" )
			.not( this.settings.ignore )
			.filter( function() {
				var name = this.name || $( this ).attr( "name" ); // For contenteditable
				var isContentEditable = typeof $( this ).attr( "contenteditable" ) !== "undefined" && $( this ).attr( "contenteditable" ) !== "false";

				if ( !name && validator.settings.debug && window.console ) {
					console.error( "%o has no name assigned", this );
				}

				// Set form expando on contenteditable
				if ( isContentEditable ) {
					this.form = $( this ).closest( "form" )[ 0 ];
					this.name = name;
				}

				// Ignore elements that belong to other/nested forms
				if ( this.form !== validator.currentForm ) {
					return false;
				}

				// Select only the first element for each name, and only those with rules specified
				if ( name in rulesCache || !validator.objectLength( $( this ).rules() ) ) {
					return false;
				}

				rulesCache[ name ] = true;
				return true;
			} );
		},

		clean: function( selector ) {
			return $( selector )[ 0 ];
		},

		errors: function() {
			var errorClass = this.settings.errorClass.split( " " ).join( "." );
			return $( this.settings.errorElement + "." + errorClass, this.errorContext );
		},

		resetInternals: function() {
			this.successList = [];
			this.errorList = [];
			this.errorMap = {};
			this.toShow = $( [] );
			this.toHide = $( [] );
		},

		reset: function() {
			this.resetInternals();
			this.currentElements = $( [] );
		},

		prepareForm: function() {
			this.reset();
			this.toHide = this.errors().add( this.containers );
		},

		prepareElement: function( element ) {
			this.reset();
			this.toHide = this.errorsFor( element );
		},

		elementValue: function( element ) {
			var $element = $( element ),
				type = element.type,
				isContentEditable = typeof $element.attr( "contenteditable" ) !== "undefined" && $element.attr( "contenteditable" ) !== "false",
				val, idx;

			if ( type === "radio" || type === "checkbox" ) {
				return this.findByName( element.name ).filter( ":checked" ).val();
			} else if ( type === "number" && typeof element.validity !== "undefined" ) {
				return element.validity.badInput ? "NaN" : $element.val();
			}

			if ( isContentEditable ) {
				val = $element.text();
			} else {
				val = $element.val();
			}

			if ( type === "file" ) {

				// Modern browser (chrome & safari)
				if ( val.substr( 0, 12 ) === "C:\\fakepath\\" ) {
					return val.substr( 12 );
				}

				// Legacy browsers
				// Unix-based path
				idx = val.lastIndexOf( "/" );
				if ( idx >= 0 ) {
					return val.substr( idx + 1 );
				}

				// Windows-based path
				idx = val.lastIndexOf( "\\" );
				if ( idx >= 0 ) {
					return val.substr( idx + 1 );
				}

				// Just the file name
				return val;
			}

			if ( typeof val === "string" ) {
				return val.replace( /\r/g, "" );
			}
			return val;
		},

		check: function( element ) {
			element = this.validationTargetFor( this.clean( element ) );

			var rules = $( element ).rules(),
				rulesCount = $.map( rules, function( n, i ) {
					return i;
				} ).length,
				dependencyMismatch = false,
				val = this.elementValue( element ),
				result, method, rule, normalizer;

			// Prioritize the local normalizer defined for this element over the global one
			// if the former exists, otherwise user the global one in case it exists.
			if ( typeof rules.normalizer === "function" ) {
				normalizer = rules.normalizer;
			} else if (	typeof this.settings.normalizer === "function" ) {
				normalizer = this.settings.normalizer;
			}

			// If normalizer is defined, then call it to retreive the changed value instead
			// of using the real one.
			// Note that `this` in the normalizer is `element`.
			if ( normalizer ) {
				val = normalizer.call( element, val );

				// Delete the normalizer from rules to avoid treating it as a pre-defined method.
				delete rules.normalizer;
			}

			for ( method in rules ) {
				rule = { method: method, parameters: rules[ method ] };
				try {
					result = $.validator.methods[ method ].call( this, val, element, rule.parameters );

					// If a method indicates that the field is optional and therefore valid,
					// don't mark it as valid when there are no other rules
					if ( result === "dependency-mismatch" && rulesCount === 1 ) {
						dependencyMismatch = true;
						continue;
					}
					dependencyMismatch = false;

					if ( result === "pending" ) {
						this.toHide = this.toHide.not( this.errorsFor( element ) );
						return;
					}

					if ( !result ) {
						this.formatAndAdd( element, rule );
						return false;
					}
				} catch ( e ) {
					if ( this.settings.debug && window.console ) {
						console.log( "Exception occurred when checking element " + element.id + ", check the '" + rule.method + "' method.", e );
					}
					if ( e instanceof TypeError ) {
						e.message += ".  Exception occurred when checking element " + element.id + ", check the '" + rule.method + "' method.";
					}

					throw e;
				}
			}
			if ( dependencyMismatch ) {
				return;
			}
			if ( this.objectLength( rules ) ) {
				this.successList.push( element );
			}
			return true;
		},

		// Return the custom message for the given element and validation method
		// specified in the element's HTML5 data attribute
		// return the generic message if present and no method specific message is present
		customDataMessage: function( element, method ) {
			return $( element ).data( "msg" + method.charAt( 0 ).toUpperCase() +
				method.substring( 1 ).toLowerCase() ) || $( element ).data( "msg" );
		},

		// Return the custom message for the given element name and validation method
		customMessage: function( name, method ) {
			var m = this.settings.messages[ name ];
			return m && ( m.constructor === String ? m : m[ method ] );
		},

		// Return the first defined argument, allowing empty strings
		findDefined: function() {
			for ( var i = 0; i < arguments.length; i++ ) {
				if ( arguments[ i ] !== undefined ) {
					return arguments[ i ];
				}
			}
			return undefined;
		},

		// The second parameter 'rule' used to be a string, and extended to an object literal
		// of the following form:
		// rule = {
		//     method: "method name",
		//     parameters: "the given method parameters"
		// }
		//
		// The old behavior still supported, kept to maintain backward compatibility with
		// old code, and will be removed in the next major release.
		defaultMessage: function( element, rule ) {
			if ( typeof rule === "string" ) {
				rule = { method: rule };
			}

			var message = this.findDefined(
					this.customMessage( element.name, rule.method ),
					this.customDataMessage( element, rule.method ),

					// 'title' is never undefined, so handle empty string as undefined
					!this.settings.ignoreTitle && element.title || undefined,
					$.validator.messages[ rule.method ],
					"<strong>Warning: No message defined for " + element.name + "</strong>"
				),
				theregex = /\$?\{(\d+)\}/g;
			if ( typeof message === "function" ) {
				message = message.call( this, rule.parameters, element );
			} else if ( theregex.test( message ) ) {
				message = $.validator.format( message.replace( theregex, "{$1}" ), rule.parameters );
			}

			return message;
		},

		formatAndAdd: function( element, rule ) {
			var message = this.defaultMessage( element, rule );

			this.errorList.push( {
				message: message,
				element: element,
				method: rule.method
			} );

			this.errorMap[ element.name ] = message;
			this.submitted[ element.name ] = message;
		},

		addWrapper: function( toToggle ) {
			if ( this.settings.wrapper ) {
				toToggle = toToggle.add( toToggle.parent( this.settings.wrapper ) );
			}
			return toToggle;
		},

		defaultShowErrors: function() {
			var i, elements, error;
			for ( i = 0; this.errorList[ i ]; i++ ) {
				error = this.errorList[ i ];
				if ( this.settings.highlight ) {
					this.settings.highlight.call( this, error.element, this.settings.errorClass, this.settings.validClass );
				}
				this.showLabel( error.element, error.message );
			}
			if ( this.errorList.length ) {
				this.toShow = this.toShow.add( this.containers );
			}
			if ( this.settings.success ) {
				for ( i = 0; this.successList[ i ]; i++ ) {
					this.showLabel( this.successList[ i ] );
				}
			}
			if ( this.settings.unhighlight ) {
				for ( i = 0, elements = this.validElements(); elements[ i ]; i++ ) {
					this.settings.unhighlight.call( this, elements[ i ], this.settings.errorClass, this.settings.validClass );
				}
			}
			this.toHide = this.toHide.not( this.toShow );
			this.hideErrors();
			this.addWrapper( this.toShow ).show();
		},

		validElements: function() {
			return this.currentElements.not( this.invalidElements() );
		},

		invalidElements: function() {
			return $( this.errorList ).map( function() {
				return this.element;
			} );
		},

		showLabel: function( element, message ) {
			var place, group, errorID, v,
				error = this.errorsFor( element ),
				elementID = this.idOrName( element ),
				describedBy = $( element ).attr( "aria-describedby" );

			if ( error.length ) {

				// Refresh error/success class
				error.removeClass( this.settings.validClass ).addClass( this.settings.errorClass );

				// Replace message on existing label
				error.html( message );
			} else {

				// Create error element
				error = $( "<" + this.settings.errorElement + ">" )
					.attr( "id", elementID + "-error" )
					.addClass( this.settings.errorClass )
					.html( message || "" );

				// Maintain reference to the element to be placed into the DOM
				place = error;
				if ( this.settings.wrapper ) {

					// Make sure the element is visible, even in IE
					// actually showing the wrapped element is handled elsewhere
					place = error.hide().show().wrap( "<" + this.settings.wrapper + "/>" ).parent();
				}
				if ( this.labelContainer.length ) {
					this.labelContainer.append( place );
				} else if ( this.settings.errorPlacement ) {
					this.settings.errorPlacement.call( this, place, $( element ) );
				} else {
					place.insertAfter( element );
				}

				// Link error back to the element
				if ( error.is( "label" ) ) {

					// If the error is a label, then associate using 'for'
					error.attr( "for", elementID );

					// If the element is not a child of an associated label, then it's necessary
					// to explicitly apply aria-describedby
				} else if ( error.parents( "label[for='" + this.escapeCssMeta( elementID ) + "']" ).length === 0 ) {
					errorID = error.attr( "id" );

					// Respect existing non-error aria-describedby
					if ( !describedBy ) {
						describedBy = errorID;
					} else if ( !describedBy.match( new RegExp( "\\b" + this.escapeCssMeta( errorID ) + "\\b" ) ) ) {

						// Add to end of list if not already present
						describedBy += " " + errorID;
					}
					$( element ).attr( "aria-describedby", describedBy );

					// If this element is grouped, then assign to all elements in the same group
					group = this.groups[ element.name ];
					if ( group ) {
						v = this;
						$.each( v.groups, function( name, testgroup ) {
							if ( testgroup === group ) {
								$( "[name='" + v.escapeCssMeta( name ) + "']", v.currentForm )
									.attr( "aria-describedby", error.attr( "id" ) );
							}
						} );
					}
				}
			}
			if ( !message && this.settings.success ) {
				error.text( "" );
				if ( typeof this.settings.success === "string" ) {
					error.addClass( this.settings.success );
				} else {
					this.settings.success( error, element );
				}
			}
			this.toShow = this.toShow.add( error );
		},

		errorsFor: function( element ) {
			var name = this.escapeCssMeta( this.idOrName( element ) ),
				describer = $( element ).attr( "aria-describedby" ),
				selector = "label[for='" + name + "'], label[for='" + name + "'] *";

			// 'aria-describedby' should directly reference the error element
			if ( describer ) {
				selector = selector + ", #" + this.escapeCssMeta( describer )
					.replace( /\s+/g, ", #" );
			}

			return this
				.errors()
				.filter( selector );
		},

		// See https://api.jquery.com/category/selectors/, for CSS
		// meta-characters that should be escaped in order to be used with JQuery
		// as a literal part of a name/id or any selector.
		escapeCssMeta: function( string ) {
			return string.replace( /([\\!"#$%&'()*+,./:;<=>?@\[\]^`{|}~])/g, "\\$1" );
		},

		idOrName: function( element ) {
			return this.groups[ element.name ] || ( this.checkable( element ) ? element.name : element.id || element.name );
		},

		validationTargetFor: function( element ) {

			// If radio/checkbox, validate first element in group instead
			if ( this.checkable( element ) ) {
				element = this.findByName( element.name );
			}

			// Always apply ignore filter
			return $( element ).not( this.settings.ignore )[ 0 ];
		},

		checkable: function( element ) {
			return ( /radio|checkbox/i ).test( element.type );
		},

		findByName: function( name ) {
			return $( this.currentForm ).find( "[name='" + this.escapeCssMeta( name ) + "']" );
		},

		getLength: function( value, element ) {
			switch ( element.nodeName.toLowerCase() ) {
			case "select":
				return $( "option:selected", element ).length;
			case "input":
				if ( this.checkable( element ) ) {
					return this.findByName( element.name ).filter( ":checked" ).length;
				}
			}
			return value.length;
		},

		depend: function( param, element ) {
			return this.dependTypes[ typeof param ] ? this.dependTypes[ typeof param ]( param, element ) : true;
		},

		dependTypes: {
			"boolean": function( param ) {
				return param;
			},
			"string": function( param, element ) {
				return !!$( param, element.form ).length;
			},
			"function": function( param, element ) {
				return param( element );
			}
		},

		optional: function( element ) {
			var val = this.elementValue( element );
			return !$.validator.methods.required.call( this, val, element ) && "dependency-mismatch";
		},

		startRequest: function( element ) {
			if ( !this.pending[ element.name ] ) {
				this.pendingRequest++;
				$( element ).addClass( this.settings.pendingClass );
				this.pending[ element.name ] = true;
			}
		},

		stopRequest: function( element, valid ) {
			this.pendingRequest--;

			// Sometimes synchronization fails, make sure pendingRequest is never < 0
			if ( this.pendingRequest < 0 ) {
				this.pendingRequest = 0;
			}
			delete this.pending[ element.name ];
			$( element ).removeClass( this.settings.pendingClass );
			if ( valid && this.pendingRequest === 0 && this.formSubmitted && this.form() ) {
				$( this.currentForm ).submit();

				// Remove the hidden input that was used as a replacement for the
				// missing submit button. The hidden input is added by `handle()`
				// to ensure that the value of the used submit button is passed on
				// for scripted submits triggered by this method
				if ( this.submitButton ) {
					$( "input:hidden[name='" + this.submitButton.name + "']", this.currentForm ).remove();
				}

				this.formSubmitted = false;
			} else if ( !valid && this.pendingRequest === 0 && this.formSubmitted ) {
				$( this.currentForm ).triggerHandler( "invalid-form", [ this ] );
				this.formSubmitted = false;
			}
		},

		previousValue: function( element, method ) {
			method = typeof method === "string" && method || "remote";

			return $.data( element, "previousValue" ) || $.data( element, "previousValue", {
				old: null,
				valid: true,
				message: this.defaultMessage( element, { method: method } )
			} );
		},

		// Cleans up all forms and elements, removes validator-specific events
		destroy: function() {
			this.resetForm();

			$( this.currentForm )
				.off( ".validate" )
				.removeData( "validator" )
				.find( ".validate-equalTo-blur" )
					.off( ".validate-equalTo" )
					.removeClass( "validate-equalTo-blur" )
				.find( ".validate-lessThan-blur" )
					.off( ".validate-lessThan" )
					.removeClass( "validate-lessThan-blur" )
				.find( ".validate-lessThanEqual-blur" )
					.off( ".validate-lessThanEqual" )
					.removeClass( "validate-lessThanEqual-blur" )
				.find( ".validate-greaterThanEqual-blur" )
					.off( ".validate-greaterThanEqual" )
					.removeClass( "validate-greaterThanEqual-blur" )
				.find( ".validate-greaterThan-blur" )
					.off( ".validate-greaterThan" )
					.removeClass( "validate-greaterThan-blur" );
		}

	},

	classRuleSettings: {
		required: { required: true },
		email: { email: true },
		url: { url: true },
		date: { date: true },
		dateISO: { dateISO: true },
		number: { number: true },
		digits: { digits: true },
		creditcard: { creditcard: true }
	},

	addClassRules: function( className, rules ) {
		if ( className.constructor === String ) {
			this.classRuleSettings[ className ] = rules;
		} else {
			$.extend( this.classRuleSettings, className );
		}
	},

	classRules: function( element ) {
		var rules = {},
			classes = $( element ).attr( "class" );

		if ( classes ) {
			$.each( classes.split( " " ), function() {
				if ( this in $.validator.classRuleSettings ) {
					$.extend( rules, $.validator.classRuleSettings[ this ] );
				}
			} );
		}
		return rules;
	},

	normalizeAttributeRule: function( rules, type, method, value ) {

		// Convert the value to a number for number inputs, and for text for backwards compability
		// allows type="date" and others to be compared as strings
		if ( /min|max|step/.test( method ) && ( type === null || /number|range|text/.test( type ) ) ) {
			value = Number( value );

			// Support Opera Mini, which returns NaN for undefined minlength
			if ( isNaN( value ) ) {
				value = undefined;
			}
		}

		if ( value || value === 0 ) {
			rules[ method ] = value;
		} else if ( type === method && type !== "range" ) {

			// Exception: the jquery validate 'range' method
			// does not test for the html5 'range' type
			rules[ method ] = true;
		}
	},

	attributeRules: function( element ) {
		var rules = {},
			$element = $( element ),
			type = element.getAttribute( "type" ),
			method, value;

		for ( method in $.validator.methods ) {

			// Support for <input required> in both html5 and older browsers
			if ( method === "required" ) {
				value = element.getAttribute( method );

				// Some browsers return an empty string for the required attribute
				// and non-HTML5 browsers might have required="" markup
				if ( value === "" ) {
					value = true;
				}

				// Force non-HTML5 browsers to return bool
				value = !!value;
			} else {
				value = $element.attr( method );
			}

			this.normalizeAttributeRule( rules, type, method, value );
		}

		// 'maxlength' may be returned as -1, 2147483647 ( IE ) and 524288 ( safari ) for text inputs
		if ( rules.maxlength && /-1|2147483647|524288/.test( rules.maxlength ) ) {
			delete rules.maxlength;
		}

		return rules;
	},

	dataRules: function( element ) {
		var rules = {},
			$element = $( element ),
			type = element.getAttribute( "type" ),
			method, value;

		for ( method in $.validator.methods ) {
			value = $element.data( "rule" + method.charAt( 0 ).toUpperCase() + method.substring( 1 ).toLowerCase() );

			// Cast empty attributes like `data-rule-required` to `true`
			if ( value === "" ) {
				value = true;
			}

			this.normalizeAttributeRule( rules, type, method, value );
		}
		return rules;
	},

	staticRules: function( element ) {
		var rules = {},
			validator = $.data( element.form, "validator" );

		if ( validator.settings.rules ) {
			rules = $.validator.normalizeRule( validator.settings.rules[ element.name ] ) || {};
		}
		return rules;
	},

	normalizeRules: function( rules, element ) {

		// Handle dependency check
		$.each( rules, function( prop, val ) {

			// Ignore rule when param is explicitly false, eg. required:false
			if ( val === false ) {
				delete rules[ prop ];
				return;
			}
			if ( val.param || val.depends ) {
				var keepRule = true;
				switch ( typeof val.depends ) {
				case "string":
					keepRule = !!$( val.depends, element.form ).length;
					break;
				case "function":
					keepRule = val.depends.call( element, element );
					break;
				}
				if ( keepRule ) {
					rules[ prop ] = val.param !== undefined ? val.param : true;
				} else {
					$.data( element.form, "validator" ).resetElements( $( element ) );
					delete rules[ prop ];
				}
			}
		} );

		// Evaluate parameters
		$.each( rules, function( rule, parameter ) {
			rules[ rule ] = typeof parameter === "function" && rule !== "normalizer" ? parameter( element ) : parameter;
		} );

		// Clean number parameters
		$.each( [ "minlength", "maxlength" ], function() {
			if ( rules[ this ] ) {
				rules[ this ] = Number( rules[ this ] );
			}
		} );
		$.each( [ "rangelength", "range" ], function() {
			var parts;
			if ( rules[ this ] ) {
				if ( Array.isArray( rules[ this ] ) ) {
					rules[ this ] = [ Number( rules[ this ][ 0 ] ), Number( rules[ this ][ 1 ] ) ];
				} else if ( typeof rules[ this ] === "string" ) {
					parts = rules[ this ].replace( /[\[\]]/g, "" ).split( /[\s,]+/ );
					rules[ this ] = [ Number( parts[ 0 ] ), Number( parts[ 1 ] ) ];
				}
			}
		} );

		if ( $.validator.autoCreateRanges ) {

			// Auto-create ranges
			if ( rules.min != null && rules.max != null ) {
				rules.range = [ rules.min, rules.max ];
				delete rules.min;
				delete rules.max;
			}
			if ( rules.minlength != null && rules.maxlength != null ) {
				rules.rangelength = [ rules.minlength, rules.maxlength ];
				delete rules.minlength;
				delete rules.maxlength;
			}
		}

		return rules;
	},

	// Converts a simple string to a {string: true} rule, e.g., "required" to {required:true}
	normalizeRule: function( data ) {
		if ( typeof data === "string" ) {
			var transformed = {};
			$.each( data.split( /\s/ ), function() {
				transformed[ this ] = true;
			} );
			data = transformed;
		}
		return data;
	},

	// https://jqueryvalidation.org/jQuery.validator.addMethod/
	addMethod: function( name, method, message ) {
		$.validator.methods[ name ] = method;
		$.validator.messages[ name ] = message !== undefined ? message : $.validator.messages[ name ];
		if ( method.length < 3 ) {
			$.validator.addClassRules( name, $.validator.normalizeRule( name ) );
		}
	},

	// https://jqueryvalidation.org/jQuery.validator.methods/
	methods: {

		// https://jqueryvalidation.org/required-method/
		required: function( value, element, param ) {

			// Check if dependency is met
			if ( !this.depend( param, element ) ) {
				return "dependency-mismatch";
			}
			if ( element.nodeName.toLowerCase() === "select" ) {

				// Could be an array for select-multiple or a string, both are fine this way
				var val = $( element ).val();
				return val && val.length > 0;
			}
			if ( this.checkable( element ) ) {
				return this.getLength( value, element ) > 0;
			}
			return value !== undefined && value !== null && value.length > 0;
		},

		// https://jqueryvalidation.org/email-method/
		email: function( value, element ) {

			// From https://html.spec.whatwg.org/multipage/forms.html#valid-e-mail-address
			// Retrieved 2014-01-14
			// If you have a problem with this implementation, report a bug against the above spec
			// Or use custom methods to implement your own email validation
			return this.optional( element ) || /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test( value );
		},

		// https://jqueryvalidation.org/url-method/
		url: function( value, element ) {

			// Copyright (c) 2010-2013 Diego Perini, MIT licensed
			// https://gist.github.com/dperini/729294
			// see also https://mathiasbynens.be/demo/url-regex
			// modified to allow protocol-relative URLs
			return this.optional( element ) || /^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z0-9\u00a1-\uffff][a-z0-9\u00a1-\uffff_-]{0,62})?[a-z0-9\u00a1-\uffff]\.)+(?:[a-z\u00a1-\uffff]{2,}\.?))(?::\d{2,5})?(?:[/?#]\S*)?$/i.test( value );
		},

		// https://jqueryvalidation.org/date-method/
		date: ( function() {
			var called = false;

			return function( value, element ) {
				if ( !called ) {
					called = true;
					if ( this.settings.debug && window.console ) {
						console.warn(
							"The `date` method is deprecated and will be removed in version '2.0.0'.\n" +
							"Please don't use it, since it relies on the Date constructor, which\n" +
							"behaves very differently across browsers and locales. Use `dateISO`\n" +
							"instead or one of the locale specific methods in `localizations/`\n" +
							"and `additional-methods.js`."
						);
					}
				}

				return this.optional( element ) || !/Invalid|NaN/.test( new Date( value ).toString() );
			};
		}() ),

		// https://jqueryvalidation.org/dateISO-method/
		dateISO: function( value, element ) {
			return this.optional( element ) || /^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$/.test( value );
		},

		// https://jqueryvalidation.org/number-method/
		number: function( value, element ) {
			return this.optional( element ) || /^(?:-?\d+|-?\d{1,3}(?:,\d{3})+)?(?:\.\d+)?$/.test( value );
		},

		// https://jqueryvalidation.org/digits-method/
		digits: function( value, element ) {
			return this.optional( element ) || /^\d+$/.test( value );
		},

		// https://jqueryvalidation.org/minlength-method/
		minlength: function( value, element, param ) {
			var length = Array.isArray( value ) ? value.length : this.getLength( value, element );
			return this.optional( element ) || length >= param;
		},

		// https://jqueryvalidation.org/maxlength-method/
		maxlength: function( value, element, param ) {
			var length = Array.isArray( value ) ? value.length : this.getLength( value, element );
			return this.optional( element ) || length <= param;
		},

		// https://jqueryvalidation.org/rangelength-method/
		rangelength: function( value, element, param ) {
			var length = Array.isArray( value ) ? value.length : this.getLength( value, element );
			return this.optional( element ) || ( length >= param[ 0 ] && length <= param[ 1 ] );
		},

		// https://jqueryvalidation.org/min-method/
		min: function( value, element, param ) {
			return this.optional( element ) || value >= param;
		},

		// https://jqueryvalidation.org/max-method/
		max: function( value, element, param ) {
			return this.optional( element ) || value <= param;
		},

		// https://jqueryvalidation.org/range-method/
		range: function( value, element, param ) {
			return this.optional( element ) || ( value >= param[ 0 ] && value <= param[ 1 ] );
		},

		// https://jqueryvalidation.org/step-method/
		step: function( value, element, param ) {
			var type = $( element ).attr( "type" ),
				errorMessage = "Step attribute on input type " + type + " is not supported.",
				supportedTypes = [ "text", "number", "range" ],
				re = new RegExp( "\\b" + type + "\\b" ),
				notSupported = type && !re.test( supportedTypes.join() ),
				decimalPlaces = function( num ) {
					var match = ( "" + num ).match( /(?:\.(\d+))?$/ );
					if ( !match ) {
						return 0;
					}

					// Number of digits right of decimal point.
					return match[ 1 ] ? match[ 1 ].length : 0;
				},
				toInt = function( num ) {
					return Math.round( num * Math.pow( 10, decimals ) );
				},
				valid = true,
				decimals;

			// Works only for text, number and range input types
			// TODO find a way to support input types date, datetime, datetime-local, month, time and week
			if ( notSupported ) {
				throw new Error( errorMessage );
			}

			decimals = decimalPlaces( param );

			// Value can't have too many decimals
			if ( decimalPlaces( value ) > decimals || toInt( value ) % toInt( param ) !== 0 ) {
				valid = false;
			}

			return this.optional( element ) || valid;
		},

		// https://jqueryvalidation.org/equalTo-method/
		equalTo: function( value, element, param ) {

			// Bind to the blur event of the target in order to revalidate whenever the target field is updated
			var target = $( param );
			if ( this.settings.onfocusout && target.not( ".validate-equalTo-blur" ).length ) {
				target.addClass( "validate-equalTo-blur" ).on( "blur.validate-equalTo", function() {
					$( element ).valid();
				} );
			}
			return value === target.val();
		},

		// https://jqueryvalidation.org/remote-method/
		remote: function( value, element, param, method ) {
			if ( this.optional( element ) ) {
				return "dependency-mismatch";
			}

			method = typeof method === "string" && method || "remote";

			var previous = this.previousValue( element, method ),
				validator, data, optionDataString;

			if ( !this.settings.messages[ element.name ] ) {
				this.settings.messages[ element.name ] = {};
			}
			previous.originalMessage = previous.originalMessage || this.settings.messages[ element.name ][ method ];
			this.settings.messages[ element.name ][ method ] = previous.message;

			param = typeof param === "string" && { url: param } || param;
			optionDataString = $.param( $.extend( { data: value }, param.data ) );
			if ( previous.old === optionDataString ) {
				return previous.valid;
			}

			previous.old = optionDataString;
			validator = this;
			this.startRequest( element );
			data = {};
			data[ element.name ] = value;
			$.ajax( $.extend( true, {
				mode: "abort",
				port: "validate" + element.name,
				dataType: "json",
				data: data,
				context: validator.currentForm,
				success: function( response ) {
					var valid = response === true || response === "true",
						errors, message, submitted;

					validator.settings.messages[ element.name ][ method ] = previous.originalMessage;
					if ( valid ) {
						submitted = validator.formSubmitted;
						validator.resetInternals();
						validator.toHide = validator.errorsFor( element );
						validator.formSubmitted = submitted;
						validator.successList.push( element );
						validator.invalid[ element.name ] = false;
						validator.showErrors();
					} else {
						errors = {};
						message = response || validator.defaultMessage( element, { method: method, parameters: value } );
						errors[ element.name ] = previous.message = message;
						validator.invalid[ element.name ] = true;
						validator.showErrors( errors );
					}
					previous.valid = valid;
					validator.stopRequest( element, valid );
				}
			}, param ) );
			return "pending";
		}
	}

} );

// Ajax mode: abort
// usage: $.ajax({ mode: "abort"[, port: "uniqueport"]});
// if mode:"abort" is used, the previous request on that port (port can be undefined) is aborted via XMLHttpRequest.abort()

var pendingRequests = {},
	ajax;

// Use a prefilter if available (1.5+)
if ( $.ajaxPrefilter ) {
	$.ajaxPrefilter( function( settings, _, xhr ) {
		var port = settings.port;
		if ( settings.mode === "abort" ) {
			if ( pendingRequests[ port ] ) {
				pendingRequests[ port ].abort();
			}
			pendingRequests[ port ] = xhr;
		}
	} );
} else {

	// Proxy ajax
	ajax = $.ajax;
	$.ajax = function( settings ) {
		var mode = ( "mode" in settings ? settings : $.ajaxSettings ).mode,
			port = ( "port" in settings ? settings : $.ajaxSettings ).port;
		if ( mode === "abort" ) {
			if ( pendingRequests[ port ] ) {
				pendingRequests[ port ].abort();
			}
			pendingRequests[ port ] = ajax.apply( this, arguments );
			return pendingRequests[ port ];
		}
		return ajax.apply( this, arguments );
	};
}
return $;
}));