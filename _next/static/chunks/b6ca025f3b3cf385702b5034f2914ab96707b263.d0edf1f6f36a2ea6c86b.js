(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[6],{"52DT":function(n,t,e){"use strict";e.d(t,"a",(function(){return W}));var r=e("nKUr"),a=e("q1tI"),i=e.n(a),o=e("b0ys"),s=e("HLtD"),c=e("X8++"),l=e("MX0m"),f=e.n(l),u=e("nOHt"),d=e("YFqc"),m=e.n(d),p=e("QkPg"),h=function(){var n=Object(u.useRouter)();return Object(r.jsxs)("nav",{className:"jsx-3842364140 mb-4",children:[Object(r.jsx)("ul",{className:"jsx-3842364140 list-style-none text-center md:text-left",children:p.a.map((function(t){var e=t.link===n.asPath?"active":"";return Object(r.jsx)("li",{className:"jsx-3842364140",children:Object(r.jsx)(m.a,{href:t.link,children:Object(r.jsx)("a",{className:"jsx-3842364140 "+(e||""),children:t.title})})},t.link)}))}),Object(r.jsx)(f.a,{id:"3842364140",children:["nav.jsx-3842364140 a{--text-opacity:1;color:#2d3748;color:rgba(45,55,72,var(--text-opacity));}","nav.jsx-3842364140 a:hover,nav.jsx-3842364140 a.active{--text-opacity:1;color:#4299e1;color:rgba(66,153,225,var(--text-opacity));border-bottom-width:1px;--border-opacity:1;border-color:#4299e1;border-color:rgba(66,153,225,var(--border-opacity));}","nav.jsx-3842364140 ul li{margin-left:0;padding-top:0.25rem;padding-bottom:0.25rem;list-style-type:none;}"]})]})},b=e("7O5W"),g=e("8tEE"),y=e("wHSu"),v=e("17x9"),w=e.n(v);function x(n){return(x="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(n){return typeof n}:function(n){return n&&"function"===typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n})(n)}function O(n,t,e){return t in n?Object.defineProperty(n,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):n[t]=e,n}function k(n,t){var e=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),e.push.apply(e,r)}return e}function j(n){for(var t=1;t<arguments.length;t++){var e=null!=arguments[t]?arguments[t]:{};t%2?k(Object(e),!0).forEach((function(t){O(n,t,e[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(e)):k(Object(e)).forEach((function(t){Object.defineProperty(n,t,Object.getOwnPropertyDescriptor(e,t))}))}return n}function _(n,t){if(null==n)return{};var e,r,a=function(n,t){if(null==n)return{};var e,r,a={},i=Object.keys(n);for(r=0;r<i.length;r++)e=i[r],t.indexOf(e)>=0||(a[e]=n[e]);return a}(n,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);for(r=0;r<i.length;r++)e=i[r],t.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(n,e)&&(a[e]=n[e])}return a}function E(n){return function(n){if(Array.isArray(n)){for(var t=0,e=new Array(n.length);t<n.length;t++)e[t]=n[t];return e}}(n)||function(n){if(Symbol.iterator in Object(n)||"[object Arguments]"===Object.prototype.toString.call(n))return Array.from(n)}(n)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function N(n){return t=n,(t-=0)===t?n:(n=n.replace(/[\-_\s]+(.)?/g,(function(n,t){return t?t.toUpperCase():""}))).substr(0,1).toLowerCase()+n.substr(1);var t}function A(n){return n.split(";").map((function(n){return n.trim()})).filter((function(n){return n})).reduce((function(n,t){var e,r=t.indexOf(":"),a=N(t.slice(0,r)),i=t.slice(r+1).trim();return a.startsWith("webkit")?n[(e=a,e.charAt(0).toUpperCase()+e.slice(1))]=i:n[a]=i,n}),{})}var P=!1;try{P=!0}catch(R){}function z(n){return null===n?null:"object"===x(n)&&n.prefix&&n.iconName?n:Array.isArray(n)&&2===n.length?{prefix:n[0],iconName:n[1]}:"string"===typeof n?{prefix:"fas",iconName:n}:void 0}function M(n,t){return Array.isArray(t)&&t.length>0||!Array.isArray(t)&&t?O({},n,t):{}}function S(n){var t=n.forwardedRef,e=_(n,["forwardedRef"]),r=e.icon,a=e.mask,i=e.symbol,o=e.className,s=e.title,c=z(r),l=M("classes",[].concat(E(function(n){var t,e=n.spin,r=n.pulse,a=n.fixedWidth,i=n.inverse,o=n.border,s=n.listItem,c=n.flip,l=n.size,f=n.rotation,u=n.pull,d=(O(t={"fa-spin":e,"fa-pulse":r,"fa-fw":a,"fa-inverse":i,"fa-border":o,"fa-li":s,"fa-flip-horizontal":"horizontal"===c||"both"===c,"fa-flip-vertical":"vertical"===c||"both"===c},"fa-".concat(l),"undefined"!==typeof l&&null!==l),O(t,"fa-rotate-".concat(f),"undefined"!==typeof f&&null!==f&&0!==f),O(t,"fa-pull-".concat(u),"undefined"!==typeof u&&null!==u),O(t,"fa-swap-opacity",n.swapOpacity),t);return Object.keys(d).map((function(n){return d[n]?n:null})).filter((function(n){return n}))}(e)),E(o.split(" ")))),f=M("transform","string"===typeof e.transform?b.c.transform(e.transform):e.transform),u=M("mask",z(a)),d=Object(b.a)(c,j({},l,{},f,{},u,{symbol:i,title:s}));if(!d)return function(){var n;!P&&console&&"function"===typeof console.error&&(n=console).error.apply(n,arguments)}("Could not find icon",c),null;var m=d.abstract,p={ref:t};return Object.keys(e).forEach((function(n){S.defaultProps.hasOwnProperty(n)||(p[n]=e[n])})),C(m[0],p)}S.displayName="FontAwesomeIcon",S.propTypes={border:w.a.bool,className:w.a.string,mask:w.a.oneOfType([w.a.object,w.a.array,w.a.string]),fixedWidth:w.a.bool,inverse:w.a.bool,flip:w.a.oneOf(["horizontal","vertical","both"]),icon:w.a.oneOfType([w.a.object,w.a.array,w.a.string]),listItem:w.a.bool,pull:w.a.oneOf(["right","left"]),pulse:w.a.bool,rotation:w.a.oneOf([0,90,180,270]),size:w.a.oneOf(["lg","xs","sm","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:w.a.bool,symbol:w.a.oneOfType([w.a.bool,w.a.string]),title:w.a.string,transform:w.a.oneOfType([w.a.string,w.a.object]),swapOpacity:w.a.bool},S.defaultProps={border:!1,className:"",mask:null,fixedWidth:!1,inverse:!1,flip:null,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,symbol:!1,title:"",transform:null,swapOpacity:!1};var C=function n(t,e){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if("string"===typeof e)return e;var a=(e.children||[]).map((function(e){return n(t,e)})),i=Object.keys(e.attributes||{}).reduce((function(n,t){var r=e.attributes[t];switch(t){case"class":n.attrs.className=r,delete e.attributes.class;break;case"style":n.attrs.style=A(r);break;default:0===t.indexOf("aria-")||0===t.indexOf("data-")?n.attrs[t.toLowerCase()]=r:n.attrs[N(t)]=r}return n}),{attrs:{}}),o=r.style,s=void 0===o?{}:o,c=_(r,["style"]);return i.attrs.style=j({},i.attrs.style,{},s),t.apply(void 0,[e.tag,j({},i.attrs,{},c)].concat(E(a)))}.bind(null,i.a.createElement);b.b.add(g.a,y.a);var I=function(n){return Object(r.jsx)("li",{className:"box-border w-8 h-8 leading-8 border border-gray-400 rounded-full text-center inline-block mb-2 ml-0",children:Object(r.jsx)("a",{href:n.link,target:"_blank",rel:"noreferrer",className:"text-gray-900 hover:text-blue-500 hover:border-transparent",children:Object(r.jsx)(S,{icon:n.icon})})})},T=function(){return Object(r.jsx)("ul",{className:"list-style-none mb-4 w-32 grid grid-flow-row grid-cols-3 mx-auto md:mx-0",children:s.blogger_social_contacts.map((function(n){return Object(r.jsx)(I,{icon:[n.icon_prefix,n.icon_name],link:n.link},n.link)}))})},L=function(){return Object(r.jsxs)("div",{className:"w-full border-r-0 border-b md:border-r md:border-b-0 border-gray-300",children:[Object(r.jsx)("img",{src:s.blogger_photo,alt:"Blogger",className:"w-20 h-20 rounded-full mx-auto md:mx-0"}),Object(r.jsx)("h2",{className:"text-xl font-bold mt-4 text-center md:text-left",children:s.blogger_name}),Object(r.jsx)("div",{className:"text-gray-500 my-4 sm:pr-4 text-center md:text-left",children:s.blogger_description}),Object(r.jsx)(h,{}),Object(r.jsx)(T,{}),Object(r.jsx)(c.a,{className:"hidden md:block"})]})},W=function(n){return Object(r.jsx)("div",{className:"antialiased w-full text-gray-700",children:Object(r.jsxs)("div",{className:"lg:max-w-5xl mx-auto mt-6 px-4 lg:px-0",children:[Object(r.jsxs)("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-4",children:[Object(r.jsx)("div",{className:"col-span-1 p-4 md:p-0",children:Object(r.jsx)(L,{})}),Object(r.jsx)("div",{className:"col-span-2 p-4 md:pl-6",children:n.children})]}),Object(r.jsx)(o.a,{className:"block md:hidden"})]})})}},"7O5W":function(n,t,e){"use strict";(function(n){function r(n){return(r="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(n){return typeof n}:function(n){return n&&"function"===typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n})(n)}function a(n,t){for(var e=0;e<t.length;e++){var r=t[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(n,r.key,r)}}function i(n,t,e){return t in n?Object.defineProperty(n,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):n[t]=e,n}function o(n){for(var t=1;t<arguments.length;t++){var e=null!=arguments[t]?arguments[t]:{},r=Object.keys(e);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(e).filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable})))),r.forEach((function(t){i(n,t,e[t])}))}return n}function s(n,t){return function(n){if(Array.isArray(n))return n}(n)||function(n,t){var e=[],r=!0,a=!1,i=void 0;try{for(var o,s=n[Symbol.iterator]();!(r=(o=s.next()).done)&&(e.push(o.value),!t||e.length!==t);r=!0);}catch(c){a=!0,i=c}finally{try{r||null==s.return||s.return()}finally{if(a)throw i}}return e}(n,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}e.d(t,"a",(function(){return jn})),e.d(t,"b",(function(){return xn})),e.d(t,"c",(function(){return kn}));var c=function(){},l={},f={},u={mark:c,measure:c};try{"undefined"!==typeof window&&(l=window),"undefined"!==typeof document&&(f=document),"undefined"!==typeof MutationObserver&&MutationObserver,"undefined"!==typeof performance&&(u=performance)}catch(_n){}var d=(l.navigator||{}).userAgent,m=void 0===d?"":d,p=l,h=f,b=u,g=(p.document,!!h.documentElement&&!!h.head&&"function"===typeof h.addEventListener&&"function"===typeof h.createElement),y=(~m.indexOf("MSIE")||m.indexOf("Trident/"),function(){try{}catch(_n){return!1}}(),[1,2,3,4,5,6,7,8,9,10]),v=y.concat([11,12,13,14,15,16,17,18,19,20]),w={GROUP:"group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},x=(["xs","sm","lg","fw","ul","li","border","pull-left","pull-right","spin","pulse","rotate-90","rotate-180","rotate-270","flip-horizontal","flip-vertical","flip-both","stack","stack-1x","stack-2x","inverse","layers","layers-text","layers-counter",w.GROUP,w.SWAP_OPACITY,w.PRIMARY,w.SECONDARY].concat(y.map((function(n){return"".concat(n,"x")}))).concat(v.map((function(n){return"w-".concat(n)}))),p.FontAwesomeConfig||{});if(h&&"function"===typeof h.querySelector){[["data-family-prefix","familyPrefix"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]].forEach((function(n){var t=s(n,2),e=t[0],r=t[1],a=function(n){return""===n||"false"!==n&&("true"===n||n)}(function(n){var t=h.querySelector("script["+n+"]");if(t)return t.getAttribute(n)}(e));void 0!==a&&null!==a&&(x[r]=a)}))}var O=o({},{familyPrefix:"fa",replacementClass:"svg-inline--fa",autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0},x);O.autoReplaceSvg||(O.observeMutations=!1);var k=o({},O);p.FontAwesomeConfig=k;var j=p||{};j.___FONT_AWESOME___||(j.___FONT_AWESOME___={}),j.___FONT_AWESOME___.styles||(j.___FONT_AWESOME___.styles={}),j.___FONT_AWESOME___.hooks||(j.___FONT_AWESOME___.hooks={}),j.___FONT_AWESOME___.shims||(j.___FONT_AWESOME___.shims=[]);var _=j.___FONT_AWESOME___,E=[];g&&((h.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(h.readyState)||h.addEventListener("DOMContentLoaded",(function n(){h.removeEventListener("DOMContentLoaded",n),1,E.map((function(n){return n()}))})));var N,A=function(){},P="undefined"!==typeof n&&"undefined"!==typeof n.process&&"function"===typeof n.process.emit,z="undefined"===typeof setImmediate?setTimeout:setImmediate,M=[];function S(){for(var n=0;n<M.length;n++)M[n][0](M[n][1]);M=[],N=!1}function C(n,t){M.push([n,t]),N||(N=!0,z(S,0))}function I(n){var t=n.owner,e=t._state,r=t._data,a=n[e],i=n.then;if("function"===typeof a){e="fulfilled";try{r=a(r)}catch(_n){R(i,_n)}}T(i,r)||("fulfilled"===e&&L(i,r),"rejected"===e&&R(i,r))}function T(n,t){var e;try{if(n===t)throw new TypeError("A promises callback cannot return that same promise.");if(t&&("function"===typeof t||"object"===r(t))){var a=t.then;if("function"===typeof a)return a.call(t,(function(r){e||(e=!0,t===r?W(n,r):L(n,r))}),(function(t){e||(e=!0,R(n,t))})),!0}}catch(_n){return e||R(n,_n),!0}return!1}function L(n,t){n!==t&&T(n,t)||W(n,t)}function W(n,t){"pending"===n._state&&(n._state="settled",n._data=t,C(Y,n))}function R(n,t){"pending"===n._state&&(n._state="settled",n._data=t,C(F,n))}function D(n){n._then=n._then.forEach(I)}function Y(n){n._state="fulfilled",D(n)}function F(t){t._state="rejected",D(t),!t._handled&&P&&n.process.emit("unhandledRejection",t._data,t)}function X(t){n.process.emit("rejectionHandled",t)}function U(n){if("function"!==typeof n)throw new TypeError("Promise resolver "+n+" is not a function");if(this instanceof U===!1)throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.");this._then=[],function(n,t){function e(n){R(t,n)}try{n((function(n){L(t,n)}),e)}catch(_n){e(_n)}}(n,this)}U.prototype={constructor:U,_state:"pending",_then:null,_data:void 0,_handled:!1,then:function(n,t){var e={owner:this,then:new this.constructor(A),fulfilled:n,rejected:t};return!t&&!n||this._handled||(this._handled=!0,"rejected"===this._state&&P&&C(X,this)),"fulfilled"===this._state||"rejected"===this._state?C(I,e):this._then.push(e),e.then},catch:function(n){return this.then(null,n)}},U.all=function(n){if(!Array.isArray(n))throw new TypeError("You must pass an array to Promise.all().");return new U((function(t,e){var r=[],a=0;function i(n){return a++,function(e){r[n]=e,--a||t(r)}}for(var o,s=0;s<n.length;s++)(o=n[s])&&"function"===typeof o.then?o.then(i(s),e):r[s]=o;a||t(r)}))},U.race=function(n){if(!Array.isArray(n))throw new TypeError("You must pass an array to Promise.race().");return new U((function(t,e){for(var r,a=0;a<n.length;a++)(r=n[a])&&"function"===typeof r.then?r.then(t,e):t(r)}))},U.resolve=function(n){return n&&"object"===r(n)&&n.constructor===U?n:new U((function(t){t(n)}))},U.reject=function(n){return new U((function(t,e){e(n)}))};var B={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function H(n){if(n&&g){var t=h.createElement("style");t.setAttribute("type","text/css"),t.innerHTML=n;for(var e=h.head.childNodes,r=null,a=e.length-1;a>-1;a--){var i=e[a],o=(i.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(r=i)}return h.head.insertBefore(t,r),n}}function q(){for(var n=12,t="";n-- >0;)t+="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"[62*Math.random()|0];return t}function G(n){return"".concat(n).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function J(n){return Object.keys(n||{}).reduce((function(t,e){return t+"".concat(e,": ").concat(n[e],";")}),"")}function V(n){return n.size!==B.size||n.x!==B.x||n.y!==B.y||n.rotate!==B.rotate||n.flipX||n.flipY}function K(n){var t=n.transform,e=n.containerWidth,r=n.iconWidth,a={transform:"translate(".concat(e/2," 256)")},i="translate(".concat(32*t.x,", ").concat(32*t.y,") "),o="scale(".concat(t.size/16*(t.flipX?-1:1),", ").concat(t.size/16*(t.flipY?-1:1),") "),s="rotate(".concat(t.rotate," 0 0)");return{outer:a,inner:{transform:"".concat(i," ").concat(o," ").concat(s)},path:{transform:"translate(".concat(r/2*-1," -256)")}}}var Q={x:0,y:0,width:"100%",height:"100%"};function Z(n){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return n.attributes&&(n.attributes.fill||t)&&(n.attributes.fill="black"),n}function $(n){var t=n.icons,e=t.main,r=t.mask,a=n.prefix,i=n.iconName,s=n.transform,c=n.symbol,l=n.title,f=n.maskId,u=n.titleId,d=n.extra,m=n.watchable,p=void 0!==m&&m,h=r.found?r:e,b=h.width,g=h.height,y="fak"===a,v=y?"":"fa-w-".concat(Math.ceil(b/g*16)),w=[k.replacementClass,i?"".concat(k.familyPrefix,"-").concat(i):"",v].filter((function(n){return-1===d.classes.indexOf(n)})).filter((function(n){return""!==n||!!n})).concat(d.classes).join(" "),x={children:[],attributes:o({},d.attributes,{"data-prefix":a,"data-icon":i,class:w,role:d.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(b," ").concat(g)})},O=y&&!~d.classes.indexOf("fa-fw")?{width:"".concat(b/g*16*.0625,"em")}:{};p&&(x.attributes["data-fa-i2svg"]=""),l&&x.children.push({tag:"title",attributes:{id:x.attributes["aria-labelledby"]||"title-".concat(u||q())},children:[l]});var j=o({},x,{prefix:a,iconName:i,main:e,mask:r,maskId:f,transform:s,symbol:c,styles:o({},O,d.styles)}),_=r.found&&e.found?function(n){var t,e=n.children,r=n.attributes,a=n.main,i=n.mask,s=n.maskId,c=n.transform,l=a.width,f=a.icon,u=i.width,d=i.icon,m=K({transform:c,containerWidth:u,iconWidth:l}),p={tag:"rect",attributes:o({},Q,{fill:"white"})},h=f.children?{children:f.children.map(Z)}:{},b={tag:"g",attributes:o({},m.inner),children:[Z(o({tag:f.tag,attributes:o({},f.attributes,m.path)},h))]},g={tag:"g",attributes:o({},m.outer),children:[b]},y="mask-".concat(s||q()),v="clip-".concat(s||q()),w={tag:"mask",attributes:o({},Q,{id:y,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[p,g]},x={tag:"defs",children:[{tag:"clipPath",attributes:{id:v},children:(t=d,"g"===t.tag?t.children:[t])},w]};return e.push(x,{tag:"rect",attributes:o({fill:"currentColor","clip-path":"url(#".concat(v,")"),mask:"url(#".concat(y,")")},Q)}),{children:e,attributes:r}}(j):function(n){var t=n.children,e=n.attributes,r=n.main,a=n.transform,i=J(n.styles);if(i.length>0&&(e.style=i),V(a)){var s=K({transform:a,containerWidth:r.width,iconWidth:r.width});t.push({tag:"g",attributes:o({},s.outer),children:[{tag:"g",attributes:o({},s.inner),children:[{tag:r.icon.tag,children:r.icon.children,attributes:o({},r.icon.attributes,s.path)}]}]})}else t.push(r.icon);return{children:t,attributes:e}}(j),E=_.children,N=_.attributes;return j.children=E,j.attributes=N,c?function(n){var t=n.prefix,e=n.iconName,r=n.children,a=n.attributes,i=n.symbol;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:o({},a,{id:!0===i?"".concat(t,"-").concat(k.familyPrefix,"-").concat(e):i}),children:r}]}]}(j):function(n){var t=n.children,e=n.main,r=n.mask,a=n.attributes,i=n.styles,s=n.transform;if(V(s)&&e.found&&!r.found){var c={x:e.width/e.height/2,y:.5};a.style=J(o({},i,{"transform-origin":"".concat(c.x+s.x/16,"em ").concat(c.y+s.y/16,"em")}))}return[{tag:"svg",attributes:a,children:t}]}(j)}var nn=function(){},tn=(k.measurePerformance&&b&&b.mark&&b.measure,function(n,t,e,r){var a,i,o,s=Object.keys(n),c=s.length,l=void 0!==r?function(n,t){return function(e,r,a,i){return n.call(t,e,r,a,i)}}(t,r):t;for(void 0===e?(a=1,o=n[s[0]]):(a=0,o=e);a<c;a++)o=l(o,n[i=s[a]],i,n);return o});function en(n,t){var e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=e.skipHooks,a=void 0!==r&&r,i=Object.keys(t).reduce((function(n,e){var r=t[e];return!!r.icon?n[r.iconName]=r.icon:n[e]=r,n}),{});"function"!==typeof _.hooks.addPack||a?_.styles[n]=o({},_.styles[n]||{},i):_.hooks.addPack(n,i),"fas"===n&&en("fa",t)}var rn=_.styles,an=_.shims,on=function(){var n=function(n){return tn(rn,(function(t,e,r){return t[r]=tn(e,n,{}),t}),{})};n((function(n,t,e){return t[3]&&(n[t[3]]=e),n})),n((function(n,t,e){var r=t[2];return n[e]=e,r.forEach((function(t){n[t]=e})),n}));var t="far"in rn;tn(an,(function(n,e){var r=e[0],a=e[1],i=e[2];return"far"!==a||t||(a="fas"),n[r]={prefix:a,iconName:i},n}),{})};on();_.styles;function sn(n,t,e){if(n&&n[t]&&n[t][e])return{prefix:t,iconName:e,icon:n[t][e]}}function cn(n){var t=n.tag,e=n.attributes,r=void 0===e?{}:e,a=n.children,i=void 0===a?[]:a;return"string"===typeof n?G(n):"<".concat(t," ").concat(function(n){return Object.keys(n||{}).reduce((function(t,e){return t+"".concat(e,'="').concat(G(n[e]),'" ')}),"").trim()}(r),">").concat(i.map(cn).join(""),"</").concat(t,">")}var ln=function(n){var t={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return n?n.toLowerCase().split(" ").reduce((function(n,t){var e=t.toLowerCase().split("-"),r=e[0],a=e.slice(1).join("-");if(r&&"h"===a)return n.flipX=!0,n;if(r&&"v"===a)return n.flipY=!0,n;if(a=parseFloat(a),isNaN(a))return n;switch(r){case"grow":n.size=n.size+a;break;case"shrink":n.size=n.size-a;break;case"left":n.x=n.x-a;break;case"right":n.x=n.x+a;break;case"up":n.y=n.y-a;break;case"down":n.y=n.y+a;break;case"rotate":n.rotate=n.rotate+a}return n}),t):t};function fn(n){this.name="MissingIcon",this.message=n||"Icon unavailable",this.stack=(new Error).stack}fn.prototype=Object.create(Error.prototype),fn.prototype.constructor=fn;var un={fill:"currentColor"},dn={attributeType:"XML",repeatCount:"indefinite",dur:"2s"},mn={tag:"path",attributes:o({},un,{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})},pn=o({},dn,{attributeName:"opacity"});o({},un,{cx:"256",cy:"364",r:"28"}),o({},dn,{attributeName:"r",values:"28;14;28;28;14;28;"}),o({},pn,{values:"1;0;1;1;0;1;"}),o({},un,{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),o({},pn,{values:"1;0;0;0;0;1;"}),o({},un,{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),o({},pn,{values:"0;0;1;1;0;0;"}),_.styles;function hn(n){var t=n[0],e=n[1],r=s(n.slice(4),1)[0];return{found:!0,width:t,height:e,icon:Array.isArray(r)?{tag:"g",attributes:{class:"".concat(k.familyPrefix,"-").concat(w.GROUP)},children:[{tag:"path",attributes:{class:"".concat(k.familyPrefix,"-").concat(w.SECONDARY),fill:"currentColor",d:r[0]}},{tag:"path",attributes:{class:"".concat(k.familyPrefix,"-").concat(w.PRIMARY),fill:"currentColor",d:r[1]}}]}:{tag:"path",attributes:{fill:"currentColor",d:r}}}}_.styles;function bn(){var n="svg-inline--fa",t=k.familyPrefix,e=k.replacementClass,r='svg:not(:root).svg-inline--fa {\n  overflow: visible;\n}\n\n.svg-inline--fa {\n  display: inline-block;\n  font-size: inherit;\n  height: 1em;\n  overflow: visible;\n  vertical-align: -0.125em;\n}\n.svg-inline--fa.fa-lg {\n  vertical-align: -0.225em;\n}\n.svg-inline--fa.fa-w-1 {\n  width: 0.0625em;\n}\n.svg-inline--fa.fa-w-2 {\n  width: 0.125em;\n}\n.svg-inline--fa.fa-w-3 {\n  width: 0.1875em;\n}\n.svg-inline--fa.fa-w-4 {\n  width: 0.25em;\n}\n.svg-inline--fa.fa-w-5 {\n  width: 0.3125em;\n}\n.svg-inline--fa.fa-w-6 {\n  width: 0.375em;\n}\n.svg-inline--fa.fa-w-7 {\n  width: 0.4375em;\n}\n.svg-inline--fa.fa-w-8 {\n  width: 0.5em;\n}\n.svg-inline--fa.fa-w-9 {\n  width: 0.5625em;\n}\n.svg-inline--fa.fa-w-10 {\n  width: 0.625em;\n}\n.svg-inline--fa.fa-w-11 {\n  width: 0.6875em;\n}\n.svg-inline--fa.fa-w-12 {\n  width: 0.75em;\n}\n.svg-inline--fa.fa-w-13 {\n  width: 0.8125em;\n}\n.svg-inline--fa.fa-w-14 {\n  width: 0.875em;\n}\n.svg-inline--fa.fa-w-15 {\n  width: 0.9375em;\n}\n.svg-inline--fa.fa-w-16 {\n  width: 1em;\n}\n.svg-inline--fa.fa-w-17 {\n  width: 1.0625em;\n}\n.svg-inline--fa.fa-w-18 {\n  width: 1.125em;\n}\n.svg-inline--fa.fa-w-19 {\n  width: 1.1875em;\n}\n.svg-inline--fa.fa-w-20 {\n  width: 1.25em;\n}\n.svg-inline--fa.fa-pull-left {\n  margin-right: 0.3em;\n  width: auto;\n}\n.svg-inline--fa.fa-pull-right {\n  margin-left: 0.3em;\n  width: auto;\n}\n.svg-inline--fa.fa-border {\n  height: 1.5em;\n}\n.svg-inline--fa.fa-li {\n  width: 2em;\n}\n.svg-inline--fa.fa-fw {\n  width: 1.25em;\n}\n\n.fa-layers svg.svg-inline--fa {\n  bottom: 0;\n  left: 0;\n  margin: auto;\n  position: absolute;\n  right: 0;\n  top: 0;\n}\n\n.fa-layers {\n  display: inline-block;\n  height: 1em;\n  position: relative;\n  text-align: center;\n  vertical-align: -0.125em;\n  width: 1em;\n}\n.fa-layers svg.svg-inline--fa {\n  -webkit-transform-origin: center center;\n          transform-origin: center center;\n}\n\n.fa-layers-counter, .fa-layers-text {\n  display: inline-block;\n  position: absolute;\n  text-align: center;\n}\n\n.fa-layers-text {\n  left: 50%;\n  top: 50%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n  -webkit-transform-origin: center center;\n          transform-origin: center center;\n}\n\n.fa-layers-counter {\n  background-color: #ff253a;\n  border-radius: 1em;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  color: #fff;\n  height: 1.5em;\n  line-height: 1;\n  max-width: 5em;\n  min-width: 1.5em;\n  overflow: hidden;\n  padding: 0.25em;\n  right: 0;\n  text-overflow: ellipsis;\n  top: 0;\n  -webkit-transform: scale(0.25);\n          transform: scale(0.25);\n  -webkit-transform-origin: top right;\n          transform-origin: top right;\n}\n\n.fa-layers-bottom-right {\n  bottom: 0;\n  right: 0;\n  top: auto;\n  -webkit-transform: scale(0.25);\n          transform: scale(0.25);\n  -webkit-transform-origin: bottom right;\n          transform-origin: bottom right;\n}\n\n.fa-layers-bottom-left {\n  bottom: 0;\n  left: 0;\n  right: auto;\n  top: auto;\n  -webkit-transform: scale(0.25);\n          transform: scale(0.25);\n  -webkit-transform-origin: bottom left;\n          transform-origin: bottom left;\n}\n\n.fa-layers-top-right {\n  right: 0;\n  top: 0;\n  -webkit-transform: scale(0.25);\n          transform: scale(0.25);\n  -webkit-transform-origin: top right;\n          transform-origin: top right;\n}\n\n.fa-layers-top-left {\n  left: 0;\n  right: auto;\n  top: 0;\n  -webkit-transform: scale(0.25);\n          transform: scale(0.25);\n  -webkit-transform-origin: top left;\n          transform-origin: top left;\n}\n\n.fa-lg {\n  font-size: 1.3333333333em;\n  line-height: 0.75em;\n  vertical-align: -0.0667em;\n}\n\n.fa-xs {\n  font-size: 0.75em;\n}\n\n.fa-sm {\n  font-size: 0.875em;\n}\n\n.fa-1x {\n  font-size: 1em;\n}\n\n.fa-2x {\n  font-size: 2em;\n}\n\n.fa-3x {\n  font-size: 3em;\n}\n\n.fa-4x {\n  font-size: 4em;\n}\n\n.fa-5x {\n  font-size: 5em;\n}\n\n.fa-6x {\n  font-size: 6em;\n}\n\n.fa-7x {\n  font-size: 7em;\n}\n\n.fa-8x {\n  font-size: 8em;\n}\n\n.fa-9x {\n  font-size: 9em;\n}\n\n.fa-10x {\n  font-size: 10em;\n}\n\n.fa-fw {\n  text-align: center;\n  width: 1.25em;\n}\n\n.fa-ul {\n  list-style-type: none;\n  margin-left: 2.5em;\n  padding-left: 0;\n}\n.fa-ul > li {\n  position: relative;\n}\n\n.fa-li {\n  left: -2em;\n  position: absolute;\n  text-align: center;\n  width: 2em;\n  line-height: inherit;\n}\n\n.fa-border {\n  border: solid 0.08em #eee;\n  border-radius: 0.1em;\n  padding: 0.2em 0.25em 0.15em;\n}\n\n.fa-pull-left {\n  float: left;\n}\n\n.fa-pull-right {\n  float: right;\n}\n\n.fa.fa-pull-left,\n.fas.fa-pull-left,\n.far.fa-pull-left,\n.fal.fa-pull-left,\n.fab.fa-pull-left {\n  margin-right: 0.3em;\n}\n.fa.fa-pull-right,\n.fas.fa-pull-right,\n.far.fa-pull-right,\n.fal.fa-pull-right,\n.fab.fa-pull-right {\n  margin-left: 0.3em;\n}\n\n.fa-spin {\n  -webkit-animation: fa-spin 2s infinite linear;\n          animation: fa-spin 2s infinite linear;\n}\n\n.fa-pulse {\n  -webkit-animation: fa-spin 1s infinite steps(8);\n          animation: fa-spin 1s infinite steps(8);\n}\n\n@-webkit-keyframes fa-spin {\n  0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n  }\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n  }\n}\n\n@keyframes fa-spin {\n  0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n  }\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n  }\n}\n.fa-rotate-90 {\n  -ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=1)";\n  -webkit-transform: rotate(90deg);\n          transform: rotate(90deg);\n}\n\n.fa-rotate-180 {\n  -ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=2)";\n  -webkit-transform: rotate(180deg);\n          transform: rotate(180deg);\n}\n\n.fa-rotate-270 {\n  -ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=3)";\n  -webkit-transform: rotate(270deg);\n          transform: rotate(270deg);\n}\n\n.fa-flip-horizontal {\n  -ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=0, mirror=1)";\n  -webkit-transform: scale(-1, 1);\n          transform: scale(-1, 1);\n}\n\n.fa-flip-vertical {\n  -ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=2, mirror=1)";\n  -webkit-transform: scale(1, -1);\n          transform: scale(1, -1);\n}\n\n.fa-flip-both, .fa-flip-horizontal.fa-flip-vertical {\n  -ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=2, mirror=1)";\n  -webkit-transform: scale(-1, -1);\n          transform: scale(-1, -1);\n}\n\n:root .fa-rotate-90,\n:root .fa-rotate-180,\n:root .fa-rotate-270,\n:root .fa-flip-horizontal,\n:root .fa-flip-vertical,\n:root .fa-flip-both {\n  -webkit-filter: none;\n          filter: none;\n}\n\n.fa-stack {\n  display: inline-block;\n  height: 2em;\n  position: relative;\n  width: 2.5em;\n}\n\n.fa-stack-1x,\n.fa-stack-2x {\n  bottom: 0;\n  left: 0;\n  margin: auto;\n  position: absolute;\n  right: 0;\n  top: 0;\n}\n\n.svg-inline--fa.fa-stack-1x {\n  height: 1em;\n  width: 1.25em;\n}\n.svg-inline--fa.fa-stack-2x {\n  height: 2em;\n  width: 2.5em;\n}\n\n.fa-inverse {\n  color: #fff;\n}\n\n.sr-only {\n  border: 0;\n  clip: rect(0, 0, 0, 0);\n  height: 1px;\n  margin: -1px;\n  overflow: hidden;\n  padding: 0;\n  position: absolute;\n  width: 1px;\n}\n\n.sr-only-focusable:active, .sr-only-focusable:focus {\n  clip: auto;\n  height: auto;\n  margin: 0;\n  overflow: visible;\n  position: static;\n  width: auto;\n}\n\n.svg-inline--fa .fa-primary {\n  fill: var(--fa-primary-color, currentColor);\n  opacity: 1;\n  opacity: var(--fa-primary-opacity, 1);\n}\n\n.svg-inline--fa .fa-secondary {\n  fill: var(--fa-secondary-color, currentColor);\n  opacity: 0.4;\n  opacity: var(--fa-secondary-opacity, 0.4);\n}\n\n.svg-inline--fa.fa-swap-opacity .fa-primary {\n  opacity: 0.4;\n  opacity: var(--fa-secondary-opacity, 0.4);\n}\n\n.svg-inline--fa.fa-swap-opacity .fa-secondary {\n  opacity: 1;\n  opacity: var(--fa-primary-opacity, 1);\n}\n\n.svg-inline--fa mask .fa-primary,\n.svg-inline--fa mask .fa-secondary {\n  fill: black;\n}\n\n.fad.fa-inverse {\n  color: #fff;\n}';if("fa"!==t||e!==n){var a=new RegExp("\\.".concat("fa","\\-"),"g"),i=new RegExp("\\--".concat("fa","\\-"),"g"),o=new RegExp("\\.".concat(n),"g");r=r.replace(a,".".concat(t,"-")).replace(i,"--".concat(t,"-")).replace(o,".".concat(e))}return r}function gn(){k.autoAddCss&&!On&&(H(bn()),On=!0)}function yn(n,t){return Object.defineProperty(n,"abstract",{get:t}),Object.defineProperty(n,"html",{get:function(){return n.abstract.map((function(n){return cn(n)}))}}),Object.defineProperty(n,"node",{get:function(){if(g){var t=h.createElement("div");return t.innerHTML=n.html,t.children}}}),n}function vn(n){var t=n.prefix,e=void 0===t?"fa":t,r=n.iconName;if(r)return sn(xn.definitions,e,r)||sn(_.styles,e,r)}var wn,xn=new(function(){function n(){!function(n,t){if(!(n instanceof t))throw new TypeError("Cannot call a class as a function")}(this,n),this.definitions={}}var t,e,r;return t=n,(e=[{key:"add",value:function(){for(var n=this,t=arguments.length,e=new Array(t),r=0;r<t;r++)e[r]=arguments[r];var a=e.reduce(this._pullDefinitions,{});Object.keys(a).forEach((function(t){n.definitions[t]=o({},n.definitions[t]||{},a[t]),en(t,a[t]),on()}))}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(n,t){var e=t.prefix&&t.iconName&&t.icon?{0:t}:t;return Object.keys(e).map((function(t){var r=e[t],a=r.prefix,i=r.iconName,o=r.icon;n[a]||(n[a]={}),n[a][i]=o})),n}}])&&a(t.prototype,e),r&&a(t,r),n}()),On=!1,kn={transform:function(n){return ln(n)}},jn=(wn=function(n){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},e=t.transform,r=void 0===e?B:e,a=t.symbol,i=void 0!==a&&a,s=t.mask,c=void 0===s?null:s,l=t.maskId,f=void 0===l?null:l,u=t.title,d=void 0===u?null:u,m=t.titleId,p=void 0===m?null:m,h=t.classes,b=void 0===h?[]:h,g=t.attributes,y=void 0===g?{}:g,v=t.styles,w=void 0===v?{}:v;if(n){var x=n.prefix,O=n.iconName,j=n.icon;return yn(o({type:"icon"},n),(function(){return gn(),k.autoA11y&&(d?y["aria-labelledby"]="".concat(k.replacementClass,"-title-").concat(p||q()):(y["aria-hidden"]="true",y.focusable="false")),$({icons:{main:hn(j),mask:c?hn(c.icon):{found:!1,width:null,height:null,icon:{}}},prefix:x,iconName:O,transform:o({},B,r),symbol:i,title:d,maskId:f,titleId:p,extra:{attributes:y,styles:w,classes:b}})}))}},function(n){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},e=(n||{}).icon?n:vn(n||{}),r=t.mask;return r&&(r=(r||{}).icon?r:vn(r||{})),wn(e,o({},t,{mask:r}))})}).call(this,e("yLpj"))},QkPg:function(n){n.exports=JSON.parse('{"a":[{"title":"Blog","link":"/"},{"title":"About me","link":"/about/"}]}')},yLpj:function(n,t){var e;e=function(){return this}();try{e=e||new Function("return this")()}catch(r){"object"===typeof window&&(e=window)}n.exports=e}}]);