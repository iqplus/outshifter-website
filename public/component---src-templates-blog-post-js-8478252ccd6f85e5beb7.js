(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{"+ar0":function(e,t,n){var r=n("P8UN");r(r.S+r.F*!n("QPJK"),"Object",{defineProperties:n("YmeT")})},R8uD:function(e,t,n){"use strict";(function(e){n("U6Bt"),n("AqHK"),n("DrhF"),n("cxuS"),n("gu/5"),n("eoYm"),n("pS08"),n("+ar0"),n("m210"),n("rzGZ"),n("Dq+y"),n("Ggvi"),n("sC2a"),n("4DPX"),n("sc67"),n("HQhv"),n("q8oJ"),n("C9fy"),n("8npG"),n("E5k/"),n("R48M"),Object.defineProperty(t,"__esModule",{value:!0});var r,o=n("q1tI"),i=(r=o)&&"object"==typeof r&&"default"in r?r.default:r,u=function(){return(u=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)},c="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:void 0!==e?e:"undefined"!=typeof self?self:{};var a,l=function(e,t){return e(t={exports:{}},t.exports),t.exports}((function(e,t){Object.defineProperty(t,"__esModule",{value:!0});var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:void 0!==c?c:"undefined"!=typeof self?self:{};function r(e,t){return e(t={exports:{}},t.exports),t.exports}var o,i,u,a="object",l=function(e){return e&&e.Math==Math&&e},f=l(typeof globalThis==a&&globalThis)||l(typeof window==a&&window)||l(typeof self==a&&self)||l(typeof n==a&&n)||Function("return this")(),s=function(e){try{return!!e()}catch(t){return!0}},p=!s((function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})),d={}.propertyIsEnumerable,E=Object.getOwnPropertyDescriptor,y={f:E&&!d.call({1:2},1)?function(e){var t=E(this,e);return!!t&&t.enumerable}:d},h=function(e,t){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:t}},m={}.toString,g="".split,v=s((function(){return!Object("z").propertyIsEnumerable(0)}))?function(e){return"String"==function(e){return m.call(e).slice(8,-1)}(e)?g.call(e,""):Object(e)}:Object,b=function(e){return v(function(e){if(null==e)throw TypeError("Can't call method on "+e);return e}(e))},T=function(e){return"object"==typeof e?null!==e:"function"==typeof e},O=function(e,t){if(!T(e))return e;var n,r;if(t&&"function"==typeof(n=e.toString)&&!T(r=n.call(e)))return r;if("function"==typeof(n=e.valueOf)&&!T(r=n.call(e)))return r;if(!t&&"function"==typeof(n=e.toString)&&!T(r=n.call(e)))return r;throw TypeError("Can't convert object to primitive value")},S={}.hasOwnProperty,_=function(e,t){return S.call(e,t)},I=f.document,D=T(I)&&T(I.createElement),N=function(e){return D?I.createElement(e):{}},L=!p&&!s((function(){return 7!=Object.defineProperty(N("div"),"a",{get:function(){return 7}}).a})),w=Object.getOwnPropertyDescriptor,A={f:p?w:function(e,t){if(e=b(e),t=O(t,!0),L)try{return w(e,t)}catch(n){}if(_(e,t))return h(!y.f.call(e,t),e[t])}},P=function(e){if(!T(e))throw TypeError(String(e)+" is not an object");return e},j=Object.defineProperty,R={f:p?j:function(e,t,n){if(P(e),t=O(t,!0),P(n),L)try{return j(e,t,n)}catch(r){}if("get"in n||"set"in n)throw TypeError("Accessors not supported");return"value"in n&&(e[t]=n.value),e}},M=p?function(e,t,n){return R.f(e,t,h(1,n))}:function(e,t,n){return e[t]=n,e},x=function(e,t){try{M(f,e,t)}catch(n){f[e]=t}return t},H=r((function(e){var t=f["__core-js_shared__"]||x("__core-js_shared__",{});(e.exports=function(e,n){return t[e]||(t[e]=void 0!==n?n:{})})("versions",[]).push({version:"3.1.3",mode:"global",copyright:"© 2019 Denis Pushkarev (zloirock.ru)"})})),G=H("native-function-to-string",Function.toString),C=f.WeakMap,k="function"==typeof C&&/native code/.test(G.call(C)),B=0,Y=Math.random(),K=function(e){return"Symbol("+String(void 0===e?"":e)+")_"+(++B+Y).toString(36)},U=H("keys"),F=function(e){return U[e]||(U[e]=K(e))},z={},q=f.WeakMap;if(k){var Q=new q,W=Q.get,J=Q.has,V=Q.set;o=function(e,t){return V.call(Q,e,t),t},i=function(e){return W.call(Q,e)||{}},u=function(e){return J.call(Q,e)}}else{var X=F("state");z[X]=!0,o=function(e,t){return M(e,X,t),t},i=function(e){return _(e,X)?e[X]:{}},u=function(e){return _(e,X)}}var Z={set:o,get:i,has:u,enforce:function(e){return u(e)?i(e):o(e,{})},getterFor:function(e){return function(t){var n;if(!T(t)||(n=i(t)).type!==e)throw TypeError("Incompatible receiver, "+e+" required");return n}}},$=r((function(e){var t=Z.get,n=Z.enforce,r=String(G).split("toString");H("inspectSource",(function(e){return G.call(e)})),(e.exports=function(e,t,o,i){var u=!!i&&!!i.unsafe,c=!!i&&!!i.enumerable,a=!!i&&!!i.noTargetGet;"function"==typeof o&&("string"!=typeof t||_(o,"name")||M(o,"name",t),n(o).source=r.join("string"==typeof t?t:"")),e!==f?(u?!a&&e[t]&&(c=!0):delete e[t],c?e[t]=o:M(e,t,o)):c?e[t]=o:x(t,o)})(Function.prototype,"toString",(function(){return"function"==typeof this&&t(this).source||G.call(this)}))})),ee=f,te=function(e){return"function"==typeof e?e:void 0},ne=function(e,t){return arguments.length<2?te(ee[e])||te(f[e]):ee[e]&&ee[e][t]||f[e]&&f[e][t]},re=Math.ceil,oe=Math.floor,ie=function(e){return isNaN(e=+e)?0:(e>0?oe:re)(e)},ue=Math.min,ce=Math.max,ae=Math.min,le=function(e){return function(t,n,r){var o,i,u=b(t),c=(o=u.length)>0?ue(ie(o),9007199254740991):0,a=function(e,t){var n=ie(e);return n<0?ce(n+t,0):ae(n,t)}(r,c);if(e&&n!=n){for(;c>a;)if((i=u[a++])!=i)return!0}else for(;c>a;a++)if((e||a in u)&&u[a]===n)return e||a||0;return!e&&-1}},fe={includes:le(!0),indexOf:le(!1)},se=fe.indexOf,pe=function(e,t){var n,r=b(e),o=0,i=[];for(n in r)!_(z,n)&&_(r,n)&&i.push(n);for(;t.length>o;)_(r,n=t[o++])&&(~se(i,n)||i.push(n));return i},de=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"],Ee=de.concat("length","prototype"),ye={f:Object.getOwnPropertyNames||function(e){return pe(e,Ee)}},he={f:Object.getOwnPropertySymbols},me=ne("Reflect","ownKeys")||function(e){var t=ye.f(P(e)),n=he.f;return n?t.concat(n(e)):t},ge=function(e,t){for(var n=me(t),r=R.f,o=A.f,i=0;i<n.length;i++){var u=n[i];_(e,u)||r(e,u,o(t,u))}},ve=/#|\.prototype\./,be=function(e,t){var n=Oe[Te(e)];return n==_e||n!=Se&&("function"==typeof t?s(t):!!t)},Te=be.normalize=function(e){return String(e).replace(ve,".").toLowerCase()},Oe=be.data={},Se=be.NATIVE="N",_e=be.POLYFILL="P",Ie=be,De=A.f,Ne=function(e,t){var n,r,o,i,u,c=e.target,a=e.global,l=e.stat;if(n=a?f:l?f[c]||x(c,{}):(f[c]||{}).prototype)for(r in t){if(i=t[r],o=e.noTargetGet?(u=De(n,r))&&u.value:n[r],!Ie(a?r:c+(l?".":"#")+r,e.forced)&&void 0!==o){if(typeof i==typeof o)continue;ge(i,o)}(e.sham||o&&o.sham)&&M(i,"sham",!0),$(n,r,i,e)}},Le=Object.keys||function(e){return pe(e,de)},we=y.f,Ae=function(e){return function(t){for(var n,r=b(t),o=Le(r),i=o.length,u=0,c=[];i>u;)n=o[u++],p&&!we.call(r,n)||c.push(e?[n,r[n]]:r[n]);return c}},Pe={entries:Ae(!0),values:Ae(!1)}.values;Ne({target:"Object",stat:!0},{values:function(e){return Pe(e)}});ee.Object.values;var je=!!Object.getOwnPropertySymbols&&!s((function(){return!String(Symbol())})),Re=f.Symbol,Me=H("wks"),xe=p?Object.defineProperties:function(e,t){P(e);for(var n,r=Le(t),o=r.length,i=0;o>i;)R.f(e,n=r[i++],t[n]);return e},He=ne("document","documentElement"),Ge=F("IE_PROTO"),Ce=function(){},ke=function(){var e,t=N("iframe"),n=de.length;for(t.style.display="none",He.appendChild(t),t.src=String("javascript:"),(e=t.contentWindow.document).open(),e.write("<script>document.F=Object<\/script>"),e.close(),ke=e.F;n--;)delete ke.prototype[de[n]];return ke()},Be=Object.create||function(e,t){var n;return null!==e?(Ce.prototype=P(e),n=new Ce,Ce.prototype=null,n[Ge]=e):n=ke(),void 0===t?n:xe(n,t)};z[Ge]=!0;var Ye,Ke=Me[Ye="unscopables"]||(Me[Ye]=je&&Re[Ye]||(je?Re:K)("Symbol."+Ye)),Ue=Array.prototype;null==Ue[Ke]&&M(Ue,Ke,Be(null));var Fe,ze=fe.includes;Ne({target:"Array",proto:!0},{includes:function(e){return ze(this,e,arguments.length>1?arguments[1]:void 0)}}),Fe="includes",Ue[Ke][Fe]=!0;var qe,Qe,We,Je=function(e,t,n){if(function(e){if("function"!=typeof e)throw TypeError(String(e)+" is not a function")}(e),void 0===t)return e;switch(n){case 0:return function(){return e.call(t)};case 1:return function(n){return e.call(t,n)};case 2:return function(n,r){return e.call(t,n,r)};case 3:return function(n,r,o){return e.call(t,n,r,o)}}return function(){return e.apply(t,arguments)}},Ve=Function.call;qe="includes",Je(Ve,f["Array"].prototype[qe],Qe);!function(e){e.DOCUMENT="document",e.PARAGRAPH="paragraph",e.HEADING_1="heading-1",e.HEADING_2="heading-2",e.HEADING_3="heading-3",e.HEADING_4="heading-4",e.HEADING_5="heading-5",e.HEADING_6="heading-6",e.OL_LIST="ordered-list",e.UL_LIST="unordered-list",e.LIST_ITEM="list-item",e.HR="hr",e.QUOTE="blockquote",e.EMBEDDED_ENTRY="embedded-entry-block",e.EMBEDDED_ASSET="embedded-asset-block"}(We||(We={}));var Xe,Ze=We;!function(e){e.HYPERLINK="hyperlink",e.ENTRY_HYPERLINK="entry-hyperlink",e.ASSET_HYPERLINK="asset-hyperlink",e.EMBEDDED_ENTRY="embedded-entry-inline"}(Xe||(Xe={}));var $e,et=Xe,tt=[Ze.PARAGRAPH,Ze.HEADING_1,Ze.HEADING_2,Ze.HEADING_3,Ze.HEADING_4,Ze.HEADING_5,Ze.HEADING_6,Ze.OL_LIST,Ze.UL_LIST,Ze.HR,Ze.QUOTE,Ze.EMBEDDED_ENTRY,Ze.EMBEDDED_ASSET],nt=[Ze.HR,Ze.EMBEDDED_ENTRY,Ze.EMBEDDED_ASSET],rt=(($e={})[Ze.OL_LIST]=[Ze.LIST_ITEM],$e[Ze.UL_LIST]=[Ze.LIST_ITEM],$e[Ze.LIST_ITEM]=tt.slice(),$e[Ze.QUOTE]=[Ze.PARAGRAPH],$e);var ot=Object.freeze({isInline:function(e){return Object.values(et).includes(e.nodeType)},isBlock:function(e){return Object.values(Ze).includes(e.nodeType)},isText:function(e){return"text"===e.nodeType}});t.BLOCKS=Ze,t.CONTAINERS=rt,t.INLINES=et,t.MARKS={BOLD:"bold",ITALIC:"italic",UNDERLINE:"underline",CODE:"code"},t.TOP_LEVEL_BLOCKS=tt,t.VOID_BLOCKS=nt,t.helpers=ot}));(a=l)&&a.__esModule&&Object.prototype.hasOwnProperty.call(a,"default")&&a.default;var f,s,p=l.BLOCKS,d=(l.CONTAINERS,l.INLINES),E=l.MARKS,y=(l.TOP_LEVEL_BLOCKS,l.VOID_BLOCKS,l.helpers);function h(e,t){return e.map((function(e,n){return r=m(e,t),i=n,o.isValidElement(r)&&null===r.key?o.cloneElement(r,{key:i}):r;var r,i}))}function m(e,t){var n=t.renderNode,r=t.renderMark,o=t.renderText;if(y.isText(e))return e.marks.reduce((function(e,t){return r[t.type]?r[t.type](e):e}),o?o(e.value):e.value);var u=h(e.content,t);return e.nodeType&&n[e.nodeType]?n[e.nodeType](e,u):i.createElement(i.Fragment,null,u)}var g=((f={})[p.DOCUMENT]=function(e,t){return t},f[p.PARAGRAPH]=function(e,t){return i.createElement("p",null,t)},f[p.HEADING_1]=function(e,t){return i.createElement("h1",null,t)},f[p.HEADING_2]=function(e,t){return i.createElement("h2",null,t)},f[p.HEADING_3]=function(e,t){return i.createElement("h3",null,t)},f[p.HEADING_4]=function(e,t){return i.createElement("h4",null,t)},f[p.HEADING_5]=function(e,t){return i.createElement("h5",null,t)},f[p.HEADING_6]=function(e,t){return i.createElement("h6",null,t)},f[p.EMBEDDED_ENTRY]=function(e,t){return i.createElement("div",null,t)},f[p.UL_LIST]=function(e,t){return i.createElement("ul",null,t)},f[p.OL_LIST]=function(e,t){return i.createElement("ol",null,t)},f[p.LIST_ITEM]=function(e,t){return i.createElement("li",null,t)},f[p.QUOTE]=function(e,t){return i.createElement("blockquote",null,t)},f[p.HR]=function(){return i.createElement("hr",null)},f[d.ASSET_HYPERLINK]=function(e){return b(d.ASSET_HYPERLINK,e)},f[d.ENTRY_HYPERLINK]=function(e){return b(d.ENTRY_HYPERLINK,e)},f[d.EMBEDDED_ENTRY]=function(e){return b(d.EMBEDDED_ENTRY,e)},f[d.HYPERLINK]=function(e,t){return i.createElement("a",{href:e.data.uri},t)},f),v=((s={})[E.BOLD]=function(e){return i.createElement("b",null,e)},s[E.ITALIC]=function(e){return i.createElement("i",null,e)},s[E.UNDERLINE]=function(e){return i.createElement("u",null,e)},s[E.CODE]=function(e){return i.createElement("code",null,e)},s);function b(e,t){return i.createElement("span",{key:t.data.target.sys.id},"type: ",t.nodeType," id: ",t.data.target.sys.id)}t.documentToReactComponents=function(e,t){return void 0===t&&(t={}),e?m(e,{renderNode:u({},g,t.renderNode),renderMark:u({},v,t.renderMark),renderText:t.renderText}):null}}).call(this,n("yLpj"))},cxuS:function(e,t,n){var r=n("P8UN"),o=n("ys0W")(!1);r(r.S,"Object",{values:function(e){return o(e)}})},vbKG:function(e,t,n){"use strict";(function(e){n("DrhF"),n("cxuS"),n("gu/5"),n("eoYm"),n("pS08"),n("+ar0"),n("m210"),n("rzGZ"),n("Dq+y"),n("Ggvi"),n("sC2a"),n("4DPX"),n("sc67"),n("HQhv"),n("q8oJ"),n("C9fy"),n("8npG"),n("R48M"),Object.defineProperty(t,"__esModule",{value:!0});var r="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:void 0!==e?e:"undefined"!=typeof self?self:{};function o(e,t){return e(t={exports:{}},t.exports),t.exports}var i,u,c,a="object",l=function(e){return e&&e.Math==Math&&e},f=l(typeof globalThis==a&&globalThis)||l(typeof window==a&&window)||l(typeof self==a&&self)||l(typeof r==a&&r)||Function("return this")(),s=function(e){try{return!!e()}catch(t){return!0}},p=!s((function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})),d={}.propertyIsEnumerable,E=Object.getOwnPropertyDescriptor,y={f:E&&!d.call({1:2},1)?function(e){var t=E(this,e);return!!t&&t.enumerable}:d},h=function(e,t){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:t}},m={}.toString,g="".split,v=s((function(){return!Object("z").propertyIsEnumerable(0)}))?function(e){return"String"==function(e){return m.call(e).slice(8,-1)}(e)?g.call(e,""):Object(e)}:Object,b=function(e){return v(function(e){if(null==e)throw TypeError("Can't call method on "+e);return e}(e))},T=function(e){return"object"==typeof e?null!==e:"function"==typeof e},O=function(e,t){if(!T(e))return e;var n,r;if(t&&"function"==typeof(n=e.toString)&&!T(r=n.call(e)))return r;if("function"==typeof(n=e.valueOf)&&!T(r=n.call(e)))return r;if(!t&&"function"==typeof(n=e.toString)&&!T(r=n.call(e)))return r;throw TypeError("Can't convert object to primitive value")},S={}.hasOwnProperty,_=function(e,t){return S.call(e,t)},I=f.document,D=T(I)&&T(I.createElement),N=function(e){return D?I.createElement(e):{}},L=!p&&!s((function(){return 7!=Object.defineProperty(N("div"),"a",{get:function(){return 7}}).a})),w=Object.getOwnPropertyDescriptor,A={f:p?w:function(e,t){if(e=b(e),t=O(t,!0),L)try{return w(e,t)}catch(n){}if(_(e,t))return h(!y.f.call(e,t),e[t])}},P=function(e){if(!T(e))throw TypeError(String(e)+" is not an object");return e},j=Object.defineProperty,R={f:p?j:function(e,t,n){if(P(e),t=O(t,!0),P(n),L)try{return j(e,t,n)}catch(r){}if("get"in n||"set"in n)throw TypeError("Accessors not supported");return"value"in n&&(e[t]=n.value),e}},M=p?function(e,t,n){return R.f(e,t,h(1,n))}:function(e,t,n){return e[t]=n,e},x=function(e,t){try{M(f,e,t)}catch(n){f[e]=t}return t},H=o((function(e){var t=f["__core-js_shared__"]||x("__core-js_shared__",{});(e.exports=function(e,n){return t[e]||(t[e]=void 0!==n?n:{})})("versions",[]).push({version:"3.1.3",mode:"global",copyright:"© 2019 Denis Pushkarev (zloirock.ru)"})})),G=H("native-function-to-string",Function.toString),C=f.WeakMap,k="function"==typeof C&&/native code/.test(G.call(C)),B=0,Y=Math.random(),K=function(e){return"Symbol("+String(void 0===e?"":e)+")_"+(++B+Y).toString(36)},U=H("keys"),F=function(e){return U[e]||(U[e]=K(e))},z={},q=f.WeakMap;if(k){var Q=new q,W=Q.get,J=Q.has,V=Q.set;i=function(e,t){return V.call(Q,e,t),t},u=function(e){return W.call(Q,e)||{}},c=function(e){return J.call(Q,e)}}else{var X=F("state");z[X]=!0,i=function(e,t){return M(e,X,t),t},u=function(e){return _(e,X)?e[X]:{}},c=function(e){return _(e,X)}}var Z={set:i,get:u,has:c,enforce:function(e){return c(e)?u(e):i(e,{})},getterFor:function(e){return function(t){var n;if(!T(t)||(n=u(t)).type!==e)throw TypeError("Incompatible receiver, "+e+" required");return n}}},$=o((function(e){var t=Z.get,n=Z.enforce,r=String(G).split("toString");H("inspectSource",(function(e){return G.call(e)})),(e.exports=function(e,t,o,i){var u=!!i&&!!i.unsafe,c=!!i&&!!i.enumerable,a=!!i&&!!i.noTargetGet;"function"==typeof o&&("string"!=typeof t||_(o,"name")||M(o,"name",t),n(o).source=r.join("string"==typeof t?t:"")),e!==f?(u?!a&&e[t]&&(c=!0):delete e[t],c?e[t]=o:M(e,t,o)):c?e[t]=o:x(t,o)})(Function.prototype,"toString",(function(){return"function"==typeof this&&t(this).source||G.call(this)}))})),ee=f,te=function(e){return"function"==typeof e?e:void 0},ne=function(e,t){return arguments.length<2?te(ee[e])||te(f[e]):ee[e]&&ee[e][t]||f[e]&&f[e][t]},re=Math.ceil,oe=Math.floor,ie=function(e){return isNaN(e=+e)?0:(e>0?oe:re)(e)},ue=Math.min,ce=Math.max,ae=Math.min,le=function(e){return function(t,n,r){var o,i,u=b(t),c=(o=u.length)>0?ue(ie(o),9007199254740991):0,a=function(e,t){var n=ie(e);return n<0?ce(n+t,0):ae(n,t)}(r,c);if(e&&n!=n){for(;c>a;)if((i=u[a++])!=i)return!0}else for(;c>a;a++)if((e||a in u)&&u[a]===n)return e||a||0;return!e&&-1}},fe={includes:le(!0),indexOf:le(!1)},se=fe.indexOf,pe=function(e,t){var n,r=b(e),o=0,i=[];for(n in r)!_(z,n)&&_(r,n)&&i.push(n);for(;t.length>o;)_(r,n=t[o++])&&(~se(i,n)||i.push(n));return i},de=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"],Ee=de.concat("length","prototype"),ye={f:Object.getOwnPropertyNames||function(e){return pe(e,Ee)}},he={f:Object.getOwnPropertySymbols},me=ne("Reflect","ownKeys")||function(e){var t=ye.f(P(e)),n=he.f;return n?t.concat(n(e)):t},ge=function(e,t){for(var n=me(t),r=R.f,o=A.f,i=0;i<n.length;i++){var u=n[i];_(e,u)||r(e,u,o(t,u))}},ve=/#|\.prototype\./,be=function(e,t){var n=Oe[Te(e)];return n==_e||n!=Se&&("function"==typeof t?s(t):!!t)},Te=be.normalize=function(e){return String(e).replace(ve,".").toLowerCase()},Oe=be.data={},Se=be.NATIVE="N",_e=be.POLYFILL="P",Ie=be,De=A.f,Ne=function(e,t){var n,r,o,i,u,c=e.target,a=e.global,l=e.stat;if(n=a?f:l?f[c]||x(c,{}):(f[c]||{}).prototype)for(r in t){if(i=t[r],o=e.noTargetGet?(u=De(n,r))&&u.value:n[r],!Ie(a?r:c+(l?".":"#")+r,e.forced)&&void 0!==o){if(typeof i==typeof o)continue;ge(i,o)}(e.sham||o&&o.sham)&&M(i,"sham",!0),$(n,r,i,e)}},Le=Object.keys||function(e){return pe(e,de)},we=y.f,Ae=function(e){return function(t){for(var n,r=b(t),o=Le(r),i=o.length,u=0,c=[];i>u;)n=o[u++],p&&!we.call(r,n)||c.push(e?[n,r[n]]:r[n]);return c}},Pe={entries:Ae(!0),values:Ae(!1)}.values;Ne({target:"Object",stat:!0},{values:function(e){return Pe(e)}});ee.Object.values;var je=!!Object.getOwnPropertySymbols&&!s((function(){return!String(Symbol())})),Re=f.Symbol,Me=H("wks"),xe=p?Object.defineProperties:function(e,t){P(e);for(var n,r=Le(t),o=r.length,i=0;o>i;)R.f(e,n=r[i++],t[n]);return e},He=ne("document","documentElement"),Ge=F("IE_PROTO"),Ce=function(){},ke=function(){var e,t=N("iframe"),n=de.length;for(t.style.display="none",He.appendChild(t),t.src=String("javascript:"),(e=t.contentWindow.document).open(),e.write("<script>document.F=Object<\/script>"),e.close(),ke=e.F;n--;)delete ke.prototype[de[n]];return ke()},Be=Object.create||function(e,t){var n;return null!==e?(Ce.prototype=P(e),n=new Ce,Ce.prototype=null,n[Ge]=e):n=ke(),void 0===t?n:xe(n,t)};z[Ge]=!0;var Ye,Ke=Me[Ye="unscopables"]||(Me[Ye]=je&&Re[Ye]||(je?Re:K)("Symbol."+Ye)),Ue=Array.prototype;null==Ue[Ke]&&M(Ue,Ke,Be(null));var Fe,ze=fe.includes;Ne({target:"Array",proto:!0},{includes:function(e){return ze(this,e,arguments.length>1?arguments[1]:void 0)}}),Fe="includes",Ue[Ke][Fe]=!0;var qe,Qe,We,Je=function(e,t,n){if(function(e){if("function"!=typeof e)throw TypeError(String(e)+" is not a function")}(e),void 0===t)return e;switch(n){case 0:return function(){return e.call(t)};case 1:return function(n){return e.call(t,n)};case 2:return function(n,r){return e.call(t,n,r)};case 3:return function(n,r,o){return e.call(t,n,r,o)}}return function(){return e.apply(t,arguments)}},Ve=Function.call;qe="includes",Je(Ve,f["Array"].prototype[qe],Qe);!function(e){e.DOCUMENT="document",e.PARAGRAPH="paragraph",e.HEADING_1="heading-1",e.HEADING_2="heading-2",e.HEADING_3="heading-3",e.HEADING_4="heading-4",e.HEADING_5="heading-5",e.HEADING_6="heading-6",e.OL_LIST="ordered-list",e.UL_LIST="unordered-list",e.LIST_ITEM="list-item",e.HR="hr",e.QUOTE="blockquote",e.EMBEDDED_ENTRY="embedded-entry-block",e.EMBEDDED_ASSET="embedded-asset-block"}(We||(We={}));var Xe,Ze=We;!function(e){e.HYPERLINK="hyperlink",e.ENTRY_HYPERLINK="entry-hyperlink",e.ASSET_HYPERLINK="asset-hyperlink",e.EMBEDDED_ENTRY="embedded-entry-inline"}(Xe||(Xe={}));var $e,et=Xe,tt=[Ze.PARAGRAPH,Ze.HEADING_1,Ze.HEADING_2,Ze.HEADING_3,Ze.HEADING_4,Ze.HEADING_5,Ze.HEADING_6,Ze.OL_LIST,Ze.UL_LIST,Ze.HR,Ze.QUOTE,Ze.EMBEDDED_ENTRY,Ze.EMBEDDED_ASSET],nt=[Ze.HR,Ze.EMBEDDED_ENTRY,Ze.EMBEDDED_ASSET],rt=(($e={})[Ze.OL_LIST]=[Ze.LIST_ITEM],$e[Ze.UL_LIST]=[Ze.LIST_ITEM],$e[Ze.LIST_ITEM]=tt.slice(),$e[Ze.QUOTE]=[Ze.PARAGRAPH],$e);var ot=Object.freeze({isInline:function(e){return Object.values(et).includes(e.nodeType)},isBlock:function(e){return Object.values(Ze).includes(e.nodeType)},isText:function(e){return"text"===e.nodeType}});t.BLOCKS=Ze,t.CONTAINERS=rt,t.INLINES=et,t.MARKS={BOLD:"bold",ITALIC:"italic",UNDERLINE:"underline",CODE:"code"},t.TOP_LEVEL_BLOCKS=tt,t.VOID_BLOCKS=nt,t.helpers=ot}).call(this,n("yLpj"))},yZlL:function(e,t,n){"use strict";n.r(t),n.d(t,"pageQuery",(function(){return f}));n("pJf4");var r=n("q1tI"),o=n.n(r),i=(n("Bl7J"),n("vrFN")),u=(n("Wbzz"),n("vOnD")),c=(n("TJpk"),n("vGMD")),a=n("R8uD"),l=(n("vbKG"),n("LbRr"),n("W/9C"),u.c.div.withConfig({displayName:"blog-post__BlogPostStyled",componentId:"sc-1g2ojw6-0"})(["padding-top:50px;margin-bottom:150px;.width-blog{max-width:800px;margin:0 auto;}.image-wrapper img{max-width:100%;height:auto;}img{box-shadow:0 0 0 1px rgba(50,50,93,.05),0 2px 5px 0 rgba(50,50,93,.1),0 1px 1px 0 rgba(0,0,0,.07);border-radius:6px;}.blog-post-title{color:#4E4E4E;margin-top:3rem;}.blog-post-date-author{color:#C0C0C0;a{color:#C0C0C0;}}p{font-size:1rem;margin-top:2rem;}.outshifter-blog-box{box-shadow:0 0 0 1px rgba(50,50,93,.05),0 2px 5px 0 rgba(50,50,93,.1),0 1px 1px 0 rgba(0,0,0,.07);padding:35px;border-radius:6px;h2{font-size:1.5rem;color:#4E4E4E;}p{margin-top:1rem;margin-bottom:1.5rem;color:#676767;font-size:0.8rem;}button{padding-top:15px;padding-bottom:15px;font-size:0.8rem;}}"]));t.default=function(e){var t=e.data.contentfulBlogPost;return Object(r.useEffect)((function(){document.querySelector("#canvas1").style.visibility="hidden",document.querySelector("#canvas2").style.visibility="hidden"})),o.a.createElement(o.a.Fragment,null,o.a.createElement(i.a,{title:t.title,description:t.seoDescription,imageProp:t.featuredImage.file.url,urlMeta:"https://outshifter.com/blog/"+t.slug+"/"}),o.a.createElement(l,null,o.a.createElement("div",{className:"container"},o.a.createElement("div",{className:"row width-blog"},o.a.createElement("div",{className:"col"},o.a.createElement("div",{className:"image-wrapper text-center"},o.a.createElement("img",{src:t.featuredImage.file.url,alt:t.title})),o.a.createElement("h1",{className:"blog-post-title"},t.title),o.a.createElement("div",{className:"blog-post-date-author"},o.a.createElement("span",null,t.date),"  By  ",o.a.createElement("a",{href:t.author.linkedIn},o.a.createElement("span",null,t.author.name))),o.a.createElement("div",null,Object(a.documentToReactComponents)(t.content.json))))),o.a.createElement("div",{className:"container mt-5"},o.a.createElement("div",{className:"row width-blog"},o.a.createElement("div",{className:"col"},o.a.createElement("div",{className:"outshifter-blog-box text-center"},o.a.createElement("h2",null,"The Sales Network"),o.a.createElement("p",null,"Connect your sales community and grow exponentially"),o.a.createElement("a",{href:"https://app.outshifter.com/"},o.a.createElement(c.a,null,"Start outshifting for free"))))))))};var f="795876245"},ys0W:function(e,t,n){var r=n("QPJK"),o=n("2mBY"),i=n("5SQf"),u=n("BnbX").f;e.exports=function(e){return function(t){for(var n,c=i(t),a=o(c),l=a.length,f=0,s=[];l>f;)n=a[f++],r&&!u.call(c,n)||s.push(e?[n,c[n]]:c[n]);return s}}}}]);
//# sourceMappingURL=component---src-templates-blog-post-js-8478252ccd6f85e5beb7.js.map