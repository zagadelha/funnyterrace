(self.webpackChunkrishi_companion=self.webpackChunkrishi_companion||[]).push([[839],{839:(e,n,t)=>{"use strict";t.r(n),t.d(n,{handleClick:()=>oe,mount:()=>re});var o=t(62);function r(e){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r(e)}function i(e,n,t){return(n=function(e){var n=function(e,n){if("object"!==r(e)||null===e)return e;var t=e[Symbol.toPrimitive];if(void 0!==t){var o=t.call(e,"string");if("object"!==r(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"===r(n)?n:String(n)}(n))in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}var c=t(891),u="data-focus-lock",a=function(e){for(var n=Array(e.length),t=0;t<e.length;++t)n[t]=e[t];return n},l=function(e){return Array.isArray(e)?e:[e]},d=function(e){return Array.isArray(e)?e[0]:e},f=function(e){return e.parentNode&&e.parentNode.nodeType===Node.DOCUMENT_FRAGMENT_NODE?e.parentNode.host:e.parentNode},s=function(e){return e===document||e&&e.nodeType===Node.DOCUMENT_NODE},v=function(e,n){var t=e.get(n);if(void 0!==t)return t;var o=function(e,n){return!e||s(e)||!function(e){if(e.nodeType!==Node.ELEMENT_NODE)return!1;var n=window.getComputedStyle(e,null);return!(!n||!n.getPropertyValue||"none"!==n.getPropertyValue("display")&&"hidden"!==n.getPropertyValue("visibility"))}(e)&&n(f(e))}(n,v.bind(void 0,e));return e.set(n,o),o},m=function(e,n){var t=e.get(n);if(void 0!==t)return t;var o=function(e,n){return!(e&&!s(e))||!!b(e)&&n(f(e))}(n,m.bind(void 0,e));return e.set(n,o),o},p=function(e){return e.dataset},y=function(e){return"INPUT"===e.tagName},h=function(e){return y(e)&&"radio"===e.type},b=function(e){var n=e.getAttribute("data-no-autofocus");return![!0,"true",""].includes(n)},g=function(e){var n;return Boolean(e&&(null===(n=p(e))||void 0===n?void 0:n.focusGuard))},w=function(e){return!g(e)},O=function(e){return Boolean(e)},S=function(e,n){var t=e.tabIndex-n.tabIndex,o=e.index-n.index;if(t){if(!e.tabIndex)return 1;if(!n.tabIndex)return-1}return t||o},E=function(e,n,t){return a(e).map((function(e,n){return{node:e,index:n,tabIndex:t&&-1===e.tabIndex?(e.dataset||{}).focusGuard?0:-1:e.tabIndex}})).filter((function(e){return!n||e.tabIndex>=0})).sort(S)},_=["button:enabled","select:enabled","textarea:enabled","input:enabled","a[href]","area[href]","summary","iframe","object","embed","audio[controls]","video[controls]","[tabindex]","[contenteditable]","[autofocus]"].join(","),N="".concat(_,", [data-focus-guard]"),T=function(e,n){var t;return a((null===(t=e.shadowRoot)||void 0===t?void 0:t.children)||e.children).reduce((function(e,t){return e.concat(t.matches(n?N:_)?[t]:[],T(t))}),[])},k=function(e,n){return e.reduce((function(e,t){var o,r=T(t,n),i=(o=[]).concat.apply(o,r.map((function(e){return function(e,n){return e instanceof HTMLIFrameElement&&e.contentDocument?k([e.contentDocument.body],n):[e]}(e,n)})));return e.concat(i,t.parentNode?a(t.parentNode.querySelectorAll(_)).filter((function(e){return e===t})):[])}),[])},x=function(e,n){return a(e).filter((function(e){return v(n,e)})).filter((function(e){return function(e){return!((y(e)||function(e){return"BUTTON"===e.tagName}(e))&&("hidden"===e.type||e.disabled))}(e)}))},A=function(e,n){return void 0===n&&(n=new Map),a(e).filter((function(e){return m(n,e)}))},C=function(e,n){return E(x(k(e),n),!1)},L=function(e,n){return e.shadowRoot?L(e.shadowRoot,n):!(void 0===Object.getPrototypeOf(e).contains||!Object.getPrototypeOf(e).contains.call(e,n))||a(e.children).some((function(e){var t;if(e instanceof HTMLIFrameElement){var o=null===(t=e.contentDocument)||void 0===t?void 0:t.body;return!!o&&L(o,n)}return L(e,n)}))},P=function(e){var n;if(void 0===e&&(e=document),e&&e.activeElement){var t=e.activeElement;return t.shadowRoot?P(t.shadowRoot):t instanceof HTMLIFrameElement&&(null===(n=t.contentWindow)||void 0===n?void 0:n.document)?P(t.contentWindow.document):t}},q=function(e){return e.parentNode?q(e.parentNode):e},D=function(e){return l(e).filter(Boolean).reduce((function(e,n){var t=n.getAttribute(u);return e.push.apply(e,t?function(e){for(var n=new Set,t=e.length,o=0;o<t;o+=1)for(var r=o+1;r<t;r+=1){var i=e[o].compareDocumentPosition(e[r]);(i&Node.DOCUMENT_POSITION_CONTAINED_BY)>0&&n.add(r),(i&Node.DOCUMENT_POSITION_CONTAINS)>0&&n.add(o)}return e.filter((function(e,t){return!n.has(t)}))}(a(q(n).querySelectorAll("[".concat(u,'="').concat(t,'"]:not([').concat("data-focus-lock-disabled",'="disabled"])')))):[n]),e}),[])},M=function(e,n){return h(e)&&e.name?function(e,n){return n.filter(h).filter((function(n){return n.name===e.name})).filter((function(e){return e.checked}))[0]||e}(e,n):e},I=function(e){return e[0]&&e.length>1?M(e[0],e):e[0]},B=function(e,n){return e.length>1?e.indexOf(M(e[n],e)):n},j="NEW_FOCUS",W=function(e,n){return void 0===n&&(n=[]),n.push(e),e.parentNode&&W(e.parentNode.host||e.parentNode,n),n},R=function(e,n){for(var t=W(e),o=W(n),r=0;r<t.length;r+=1){var i=t[r];if(o.indexOf(i)>=0)return i}return!1},F=function(e,n){var t,o,r,i,c,u,f=P(l(e).length>0?document:d(e).ownerDocument),s=D(e).filter(w),v=function(e,n,t){var o=l(e),r=l(n),i=o[0],c=!1;return r.filter(Boolean).forEach((function(e){c=R(c||e,e)||c,t.filter(Boolean).forEach((function(e){var n=R(i,e);n&&(c=!c||L(n,c)?n:R(n,c))}))})),c}(f||e,e,s),m=new Map,y=C(s,m),h=function(e,n,t){return E(x(k(e,t),n),!0,t)}(s,m).filter((function(e){var n=e.node;return w(n)}));if(h[0]||(h=y)[0]){var b,S,_,N=C([v],m).map((function(e){return e.node})),T=(b=N,S=h,_=new Map,S.forEach((function(e){return _.set(e.node,e)})),b.map((function(e){return _.get(e)})).filter(O)),q=T.map((function(e){return e.node})),W=function(e,n,t,o){var r=e.length,i=e[0],c=e[r-1],u=g(t);if(!(t&&e.indexOf(t)>=0)){var a,l,d=void 0!==t?n.indexOf(t):-1,f=o?n.indexOf(o):d,s=o?e.indexOf(o):-1,v=d-f,m=n.indexOf(i),p=n.indexOf(c),y=(a=n,l=new Set,a.forEach((function(e){return l.add(M(e,a))})),a.filter((function(e){return l.has(e)}))),h=(void 0!==t?y.indexOf(t):-1)-(o?y.indexOf(o):d),b=B(e,0),w=B(e,r-1);return-1===d||-1===s?j:!v&&s>=0?s:d<=m&&u&&Math.abs(v)>1?w:d>=p&&u&&Math.abs(v)>1?b:v&&Math.abs(h)>1?s:d<=m?w:d>p?b:v?Math.abs(v)>1?s:(r+s+v)%r:void 0}}(q,N,f,n);if(W===j){var F=(t=y,o=q,r=function(e,n){return e.reduce((function(e,t){return e.concat(function(e,n){return x((t=e.querySelectorAll("[".concat("data-autofocus-inside","]")),a(t).map((function(e){return k([e])})).reduce((function(e,n){return e.concat(n)}),[])),n);var t}(t,n))}),[])}(s,m),c=t.map((function(e){return e.node})),(u=A(c.filter((i=r,function(e){var n,t=null===(n=p(e))||void 0===n?void 0:n.autofocus;return e.autofocus||void 0!==t&&"false"!==t||i.indexOf(e)>=0}))))&&u.length?I(u):I(A(o)));return F?{node:F}:void console.warn("focus-lock: cannot find any node to move focus into")}return void 0===W?W:T[W]}},G=0,U=!1;var H=0,V=null,Y=function(e){H=e,e&&function(){var e,n;if(H){var t=H;document&&document.activeElement===document.body||function(e){void 0===e&&(e=document);var n=P(e);return!!n&&a(e.querySelectorAll("[".concat("data-no-focus-lock","]"))).some((function(e){return L(e,n)}))}()||(t&&(e=t,void 0===n&&(n=P(d(e).ownerDocument)),!(!(!n||n.dataset&&n.dataset.focusGuard)&&D(e).some((function(e){return L(e,n)||function(e,n){return Boolean(a(e.querySelectorAll("iframe")).some((function(e){return function(e,n){return e===n}(e,n)})))}(e,n)}))))&&function(e,n,t){void 0===t&&(t={});var o,r,i=F(e,n);if(!U&&i){if(G>2)return console.error("FocusLock: focus-fighting detected. Only one focus management system could be active. See https://github.com/theKashey/focus-lock/#focus-fighting"),U=!0,void setTimeout((function(){U=!1}),1);G++,o=i.node,r=t.focusOptions,"focus"in o&&o.focus(r),"contentWindow"in o&&o.contentWindow&&o.contentWindow.focus(),G--}}(t,V),V=document.activeElement)}}()},Z=[],K=function(e){return!!Y((n=Z,n.filter((function(e){return e})).slice(-1)[0]))&&(e&&e.preventDefault(),!0);var n};const z=function(e){0===Z.length&&document.addEventListener("focusin",K),Z.indexOf(e)<0&&(Z.push(e),K())},J=function(e){Z=Z.filter((function(n){return n!==e})),K(),0===Z.length&&document.removeEventListener("focusin",K)};var Q=t(652),X=t.n(Q);function $(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function ee(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?$(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):$(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var ne=function(e){var n;e=ee({onClose:function(){},container:null,forceOpen:!1,focus:!0},e),(0,o.Z)(document.querySelectorAll('[href*="'.concat(e.container.id,'"]'))).map((function(e){e.classList.add("active")})),e.container&&e.container.classList.add("active"),e.focus&&setTimeout((function(){e.container.querySelector("input")&&e.container.querySelector("input").focus()}),200),e.container.querySelector(".cb__panel_content")&&e.container.querySelector(".cb__panel_content").addEventListener("click",(function(n){Array.from(e.container.querySelectorAll("select")).map((function(e){return e.selectr&&e.selectr.events.dismiss(n)}))})),e.clickOutside&&e.container.querySelector(".cb__panel_content")&&e.container.addEventListener("click",e.handleContainerClick),e.forceOpen||(document.body.dataset.panel="in".concat(e.container.dataset.behaviour.indexOf("left")>-1?":left":e.container.dataset.behaviour.indexOf("right")>-1?":right":"")),e.container.addEventListener(e.container.dataset.behaviour.indexOf("side")>-1?"transitionend":"animationend",(function(){}),{once:!0}),e.forceOpen||document.addEventListener("keyup",(function(n){var t=n.keyCode;n.target,27===t&&(n.preventDefault(),document.body.hasAttribute("data-panel")&&te(e))}),{once:!0}),e.container&&e.container.querySelector(".close-button")&&e.container.querySelector(".close-button").addEventListener("click",(function(n){n.preventDefault(),te(e)}),{once:!0}),(e.scrollContainer||e.container.querySelector(".cb__panel_content"))&&(n=e.scrollContainer||e.container.querySelector(".cb__panel_content"),(0,c.disableBodyScroll)(n,{reserveScrollBarGap:!0}),z(e.container.querySelector(".cb__panel_content"))),e.forceOpen||requestAnimationFrame((function(){return window.addEventListener("click",e.handleWindowClick)}))},te=function(e){if(e=ee({onClose:function(){},container:null},e),!document.body.hasAttribute("data-panel"))return e.container.classList.remove("active"),void e.onClose();(0,o.Z)(document.querySelectorAll('[href*="'.concat(e.container.id,'"]'))).map((function(e){e.classList.remove("active")})),e.container.classList.remove("active"),document.body.dataset.panel="out",setTimeout((function(){var n;document.body.removeAttribute("data-panel"),X().trigger("ct:modal:closed",e.container),n=e.scrollContainer||e.container.querySelector(".cb__panel_content"),(0,c.enableBodyScroll)(n,{reserveScrollBarGap:!0}),J(e.container.querySelector(".cb__panel_content"))}),300),window.removeEventListener("click",e.handleWindowClick),e.container.removeEventListener("click",e.handleContainerClick),e.onClose()},oe=function(e,n){if(e.preventDefault(),n=ee({onClose:function(){},container:null,focus:!0,clickOutside:!0,isModal:!1,forceOpen:!1,scrollContainer:null,handleContainerClick:function(e){e.target!==n.container.querySelector(".cb__panel_content")&&e.target.closest(".cb__panel_content")||document.body.hasAttribute("data-panel")&&te(n)},handleWindowClick:function(e){n.container.contains(e.target)||e.target===document.body||document.body.hasAttribute("data-panel")&&te(n)}},n),document.body.hasAttribute("data-panel")&&!n.forceOpen)if(n.isModal&&!n.container.classList.contains("active")){var t=document.querySelector(".cb__header-trigger");t&&t.click(),setTimeout((function(){ne(n)}),600)}else te(n);else ne(n)};X().on("ct:offcanvas:force-close",(function(e){return te(e)}));var re=function(e){e.hasSearchEventListener||(e.hasSearchEventListener=!0,e.addEventListener("click",(function(n){oe(n,{isModal:!0,container:document.querySelector(e.hash),clickOutside:!0})})))}},891:function(e,n){var t,o;t=function(e){"use strict";function n(e){if(Array.isArray(e)){for(var n=0,t=Array(e.length);n<e.length;n++)t[n]=e[n];return t}return Array.from(e)}Object.defineProperty(e,"__esModule",{value:!0});var t=!1;if("undefined"!=typeof window){var o={get passive(){t=!0}};window.addEventListener("testPassive",null,o),window.removeEventListener("testPassive",null,o)}function r(e){return a.some((function(n){return!(!n.options.allowTouchMove||!n.options.allowTouchMove(e))}))}function i(e){var n=e||window.event;return!!r(n.target)||1<n.touches.length||(n.preventDefault&&n.preventDefault(),!1)}function c(){setTimeout((function(){void 0!==s&&(document.body.style.paddingRight=s,s=void 0),void 0!==f&&(document.body.style.overflow=f,f=void 0)}))}var u="undefined"!=typeof window&&window.navigator&&window.navigator.platform&&(/iP(ad|hone|od)/.test(window.navigator.platform)||"MacIntel"===window.navigator.platform&&1<window.navigator.maxTouchPoints),a=[],l=!1,d=-1,f=void 0,s=void 0;e.disableBodyScroll=function(e,o){if(u){if(!e)return void console.error("disableBodyScroll unsuccessful - targetElement must be provided when calling disableBodyScroll on IOS devices.");if(e&&!a.some((function(n){return n.targetElement===e}))){var c={targetElement:e,options:o||{}};a=[].concat(n(a),[c]),e.ontouchstart=function(e){1===e.targetTouches.length&&(d=e.targetTouches[0].clientY)},e.ontouchmove=function(n){var t,o,c,u;1===n.targetTouches.length&&(o=e,u=(t=n).targetTouches[0].clientY-d,r(t.target)||(o&&0===o.scrollTop&&0<u||(c=o)&&c.scrollHeight-c.scrollTop<=c.clientHeight&&u<0?i(t):t.stopPropagation()))},l||(document.addEventListener("touchmove",i,t?{passive:!1}:void 0),l=!0)}}else{m=o,setTimeout((function(){if(void 0===s){var e=!!m&&!0===m.reserveScrollBarGap,n=window.innerWidth-document.documentElement.clientWidth;e&&0<n&&(s=document.body.style.paddingRight,document.body.style.paddingRight=n+"px")}void 0===f&&(f=document.body.style.overflow,document.body.style.overflow="hidden")}));var v={targetElement:e,options:o||{}};a=[].concat(n(a),[v])}var m},e.clearAllBodyScrollLocks=function(){u?(a.forEach((function(e){e.targetElement.ontouchstart=null,e.targetElement.ontouchmove=null})),l&&(document.removeEventListener("touchmove",i,t?{passive:!1}:void 0),l=!1),a=[],d=-1):(c(),a=[])},e.enableBodyScroll=function(e){if(u){if(!e)return void console.error("enableBodyScroll unsuccessful - targetElement must be provided when calling enableBodyScroll on IOS devices.");e.ontouchstart=null,e.ontouchmove=null,a=a.filter((function(n){return n.targetElement!==e})),l&&0===a.length&&(document.removeEventListener("touchmove",i,t?{passive:!1}:void 0),l=!1)}else(a=a.filter((function(n){return n.targetElement!==e}))).length||c()}},void 0===(o=t.apply(n,[n]))||(e.exports=o)}}]);