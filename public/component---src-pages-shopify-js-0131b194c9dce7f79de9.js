(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{"0xyJ":function(e,t,a){e.exports=a.p+"static/shopify-connect-min-cfc9974f5d44bf55ff1e4b320b486d6f.png"},COZy:function(e,t,a){e.exports=a.p+"static/image-channels-new-8e5578aeccf4bf47b95e0e3ea676b744.png"},IIuT:function(e,t,a){e.exports=a.p+"static/Box-Marie-Raleigh-min-f6daf8456b2d2524196f9aca9ed12ad3.png"},IP2g:function(e,t,a){"use strict";a.d(t,"a",(function(){return y}));a("n7j8"),a("TAD1"),a("HXzo"),a("HQhv"),a("U6Bt"),a("sC2a"),a("AqHK"),a("YbXK"),a("cFtU"),a("q8oJ"),a("C9fy"),a("MIFh"),a("sc67"),a("JHok"),a("OeI1"),a("rzGZ"),a("Dq+y"),a("8npG"),a("Ggvi"),a("R48M"),a("m210"),a("4DPX");var n=a("7O5W"),r=a("17x9"),i=a.n(r),l=a("q1tI"),o=a.n(l);function c(e){return(c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function s(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function m(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{},n=Object.keys(a);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(a).filter((function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable})))),n.forEach((function(t){s(e,t,a[t])}))}return e}function p(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}function d(e){return function(e){if(Array.isArray(e)){for(var t=0,a=new Array(e.length);t<e.length;t++)a[t]=e[t];return a}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function u(e){return t=e,(t-=0)==t?e:(e=e.replace(/[\-_\s]+(.)?/g,(function(e,t){return t?t.toUpperCase():""}))).substr(0,1).toLowerCase()+e.substr(1);var t}function f(e){return e.split(";").map((function(e){return e.trim()})).filter((function(e){return e})).reduce((function(e,t){var a,n=t.indexOf(":"),r=u(t.slice(0,n)),i=t.slice(n+1).trim();return r.startsWith("webkit")?e[(a=r,a.charAt(0).toUpperCase()+a.slice(1))]=i:e[r]=i,e}),{})}var g=!1;try{g=!0}catch(w){}function h(e){return null===e?null:"object"===c(e)&&e.prefix&&e.iconName?e:Array.isArray(e)&&2===e.length?{prefix:e[0],iconName:e[1]}:"string"==typeof e?{prefix:"fas",iconName:e}:void 0}function b(e,t){return Array.isArray(t)&&t.length>0||!Array.isArray(t)&&t?s({},e,t):{}}function y(e){var t=e.icon,a=e.mask,r=e.symbol,i=e.className,l=e.title,o=h(t),c=b("classes",[].concat(d(function(e){var t,a=e.spin,n=e.pulse,r=e.fixedWidth,i=e.inverse,l=e.border,o=e.listItem,c=e.flip,m=e.size,p=e.rotation,d=e.pull,u=(s(t={"fa-spin":a,"fa-pulse":n,"fa-fw":r,"fa-inverse":i,"fa-border":l,"fa-li":o,"fa-flip-horizontal":"horizontal"===c||"both"===c,"fa-flip-vertical":"vertical"===c||"both"===c},"fa-".concat(m),null!=m),s(t,"fa-rotate-".concat(p),null!=p),s(t,"fa-pull-".concat(d),null!=d),s(t,"fa-swap-opacity",e.swapOpacity),t);return Object.keys(u).map((function(e){return u[e]?e:null})).filter((function(e){return e}))}(e)),d(i.split(" ")))),p=b("transform","string"==typeof e.transform?n.c.transform(e.transform):e.transform),u=b("mask",h(a)),f=Object(n.a)(o,m({},c,p,u,{symbol:r,title:l}));if(!f)return function(){var e;!g&&console&&"function"==typeof console.error&&(e=console).error.apply(e,arguments)}("Could not find icon",o),null;var w=f.abstract,v={};return Object.keys(e).forEach((function(t){y.defaultProps.hasOwnProperty(t)||(v[t]=e[t])})),E(w[0],v)}y.displayName="FontAwesomeIcon",y.propTypes={border:i.a.bool,className:i.a.string,mask:i.a.oneOfType([i.a.object,i.a.array,i.a.string]),fixedWidth:i.a.bool,inverse:i.a.bool,flip:i.a.oneOf(["horizontal","vertical","both"]),icon:i.a.oneOfType([i.a.object,i.a.array,i.a.string]),listItem:i.a.bool,pull:i.a.oneOf(["right","left"]),pulse:i.a.bool,rotation:i.a.oneOf([90,180,270]),size:i.a.oneOf(["lg","xs","sm","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:i.a.bool,symbol:i.a.oneOfType([i.a.bool,i.a.string]),title:i.a.string,transform:i.a.oneOfType([i.a.string,i.a.object]),swapOpacity:i.a.bool},y.defaultProps={border:!1,className:"",mask:null,fixedWidth:!1,inverse:!1,flip:null,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,symbol:!1,title:"",transform:null,swapOpacity:!1};var E=function e(t,a){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if("string"==typeof a)return a;var r=(a.children||[]).map((function(a){return e(t,a)})),i=Object.keys(a.attributes||{}).reduce((function(e,t){var n=a.attributes[t];switch(t){case"class":e.attrs.className=n,delete a.attributes.class;break;case"style":e.attrs.style=f(n);break;default:0===t.indexOf("aria-")||0===t.indexOf("data-")?e.attrs[t.toLowerCase()]=n:e.attrs[u(t)]=n}return e}),{attrs:{}}),l=n.style,o=void 0===l?{}:l,c=p(n,["style"]);return i.attrs.style=m({},i.attrs.style,o),t.apply(void 0,[a.tag,m({},i.attrs,c)].concat(d(r)))}.bind(null,o.a.createElement)},Kri6:function(e,t,a){e.exports=a.p+"static/image-Shipping-min-95226a97f7702a301c9d95971555c3c3.png"},OkDZ:function(e,t,a){e.exports=a.p+"static/shopify-import-min-2f8c24ccda29eb0feca14f9f163e89a5.png"},QKAU:function(e,t,a){e.exports=a.p+"static/image-Products-min-aefafbf4637ae7a012386d05141586d2.png"},TAD1:function(e,t,a){"use strict";var n=a("P8UN"),r=a("kiRH"),i=a("YdGP"),l="".startsWith;n(n.P+n.F*a("h+B4")("startsWith"),"String",{startsWith:function(e){var t=i(this,e,"startsWith"),a=r(Math.min(arguments.length>1?arguments[1]:void 0,t.length)),n=String(e);return l?l.call(t,n,a):t.slice(a,a+n.length)===n}})},ZxXQ:function(e,t,a){e.exports=a.p+"static/shopify-sell-min-30565b8ecb197d0be0dc841bdad9e9dd.png"},ctt4:function(e,t,a){e.exports=a.p+"static/shopify-outshifter-min-88c9650526cff72b3773063157f36150.png"},fkkI:function(e,t,a){e.exports=a.p+"static/Box-Super-Sneakers-min-4c4a4c44736d2089196d2b84ca399ce4.png"},iAa8:function(e,t,a){e.exports=a.p+"static/Shopify-Badge-Black-6ef0461952fba91a26b158855fadb9dd.png"},kp0F:function(e,t,a){e.exports=a.p+"static/image-Network-min-2d76b0374b5609c6b0e85f7d545fbb51.png"},mewD:function(e,t,a){e.exports=a.p+"static/Banner-Blue-Wave-Phone-Case-min-ff4c0dff64471aaceb111fbbd4da661c.png"},osff:function(e,t,a){e.exports=a.p+"static/image-Analytics-new-29be92725c54ebed80eee73a8853463a.png"},rSIQ:function(e,t,a){"use strict";a.r(t);var n=a("q1tI"),r=a.n(n),i=a("Bl7J"),l=a("vrFN"),o=(a("ahRo"),a("vOnD")),c=a("Wbzz"),s=a("vGMD"),m=a("IP2g"),p=a("IIzM"),d=a("iAa8"),u=a.n(d),f=(a("wQG1"),a("mewD")),g=a.n(f),h=a("fkkI"),b=a.n(h),y=a("ctt4"),E=a.n(y),w=a("0xyJ"),v=a.n(w),x=a("ZxXQ"),N=a.n(x),O=a("OkDZ"),k=a.n(O),S=a("IIuT"),I=a.n(S),A=a("COZy"),j=a.n(A),C=a("kp0F"),P=a.n(C),z=a("QKAU"),W=a.n(z),D=a("zSVl"),F=a.n(D),G=a("Kri6"),T=a.n(G),B=a("osff"),L=a.n(B),M=a("utxc"),q=a.n(M);var Q=o.c.div.withConfig({displayName:"shopify__InnerPages",componentId:"zbqx20-0"})([".width-991{max-width:1000px;margin:0 auto;}.banner-content{max-width:400px;margin:0 auto;}.banner-title{p{color:#676767;opacity:0.84;margin-top:1rem;margin-bottom:2rem;}}.banner-extra-text{margin-top:5rem;h6{font-weight:500;color:#737070;opacity:0.84;font-size:0.8rem;margin-bottom:1rem;}p{font-weight:500;color:#999999;opacity:0.84;font-size:0.6rem;line-height:2;}}.banner-box{width:250px;display:block;}.p-sneakers{padding-top:10%;}.shopi-badge{width:200px;margin-left:25px;@media only screen and (max-width:991px){margin-left:0px;}}.shopi-icons{img{max-width:75px;}h5{font-weight:bold!important;margin-top:2rem;margin-bottom:1rem;}p{color:#737373;opacity:0.84;}@media only screen and (max-width:991px){margin-top:75px;}}.shopi-icons-arrow{position:absolute;top:15px;left:250px;.svg-inline--fa{font-size:2rem;}.fa-secondary{fill:#E3E3E3!important;color:#E3E3E3!important;}.fa-primary{fill:#E3E3E3!important;color:#E3E3E3!important;}@media only screen and (max-width:1150px){left:225px;}@media only screen and (max-width:1000px){left:200px;}@media only screen and (max-width:991px){display:none;}}.col-content{max-width:400px;p{color:#4E4046;opacity:0.84;}a{color:#444244;opacity:0.84;font-size:0.8rem;}.fa-secondary{fill:#444244!important;color:#444244!important;opacity:0.84!important;}.fa-primary{fill:#444244!important;color:#444244!important;opacity:0.84!important;}@media only screen and (max-width:991px){margin:0 auto;h3{margin-top:2rem;}}}.col-image-box{img{max-width:300px;}}.col-image-standard{img{max-width:400px;}}.col-image-channels{img{max-width:550px;@media only screen and (max-width:1200px){max-width:450px;}@media only screen and (max-width:991px){max-width:350px;}}}.col-image-analytics{img{max-width:550px;@media only screen and (max-width:991px){max-width:350px;}}}.col-image-two-box{img{max-width:450px;}}.p-channels{padding-top:200px;}.p-analytics{padding-top:200px;}.col-float-right{@media only screen and (min-width:992px){float:right;}}@media only screen and (max-width:991px){.image-wrapper-991 img{max-width:100%;height:auto;}}@media only screen and (max-width:500px){.image-wrapper img{max-width:100%;height:auto;}}"]),J=function(e){var t,a;function n(){return e.apply(this,arguments)||this}a=e,(t=n).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a;var o=n.prototype;return o.componentDidMount=function(){document.querySelector("#canvas1").style.visibility="hidden",document.querySelector("#canvas2").style.visibility="hidden"},o.render=function(){return r.a.createElement(i.a,null,r.a.createElement(l.a,{title:"Company"}),r.a.createElement(Q,null,r.a.createElement("div",null,r.a.createElement("div",{className:"masthead"},r.a.createElement("div",{className:"container h-100 "},r.a.createElement("div",{className:"row h-100 align-items-center mobile-center mt-150-mob"},r.a.createElement("div",{className:"col-12 col-lg-6 align-items-center"},r.a.createElement("div",{className:"banner-content"},r.a.createElement("div",{className:"banner-title"},r.a.createElement("h1",null,"Outshift to Shopify"),r.a.createElement("p",null,"Connect your sales community ",r.a.createElement("br",null),"and grow exponentially."),r.a.createElement(c.a,{to:"https://app.outshifter.com/"},r.a.createElement(s.a,null,"Get started"))),r.a.createElement("div",{className:"banner-extra-text"},r.a.createElement("h6",null,"Sourcing products from Outshifter is and will always be FREE."),r.a.createElement("p",null,"Outshifter launched in March 2020. We´re constantly growing and updating available channels, products and suppliers, so make sure you check out our offering regularly.")),r.a.createElement("div",{className:"no-display-desktop"},r.a.createElement("div",{className:"image-wrapper-991 mt-5 mb-5"},r.a.createElement("img",{src:q.a,alt:"shopify banner mobile"}),r.a.createElement("img",{className:"shopi-badge mt-5",src:u.a,alt:"shopify logo white"}))))),r.a.createElement("div",{className:"col-6 col-lg-3 p-sneakers align-items-center no-display-mobile"},r.a.createElement("img",{className:"banner-box",src:b.a,alt:"shopify banner"})),r.a.createElement("div",{className:"col-6 col-lg-3 align-items-center no-display-mobile"},r.a.createElement("img",{className:"banner-box",src:g.a,alt:"shopify banner"}),r.a.createElement("img",{className:"shopi-badge",src:u.a,alt:"shopify logo white"})))))),r.a.createElement("div",{className:"container shopi-icons text-center"},r.a.createElement("div",{className:"row width-991"},r.a.createElement("div",{className:"col-lg-3"},r.a.createElement("img",{src:E.a,alt:"shopify icon outshifter"}),r.a.createElement("div",{className:"shopi-icons-arrow"},r.a.createElement(m.a,{icon:p.b})),r.a.createElement("h5",null,"Sign up"),r.a.createElement("p",null,"Create your Outshifter Account")),r.a.createElement("div",{className:"col-lg-3"},r.a.createElement("img",{src:v.a,alt:"shopify icon connect"}),r.a.createElement("div",{className:"shopi-icons-arrow"},r.a.createElement(m.a,{icon:p.b})),r.a.createElement("h5",null,"Connect"),r.a.createElement("p",null,"Connect your Sales Network")),r.a.createElement("div",{className:"col-lg-3"},r.a.createElement("img",{src:k.a,alt:"shopify icon import"}),r.a.createElement("div",{className:"shopi-icons-arrow"},r.a.createElement(m.a,{icon:p.b})),r.a.createElement("h5",null,"Import"),r.a.createElement("p",null,"Import Products with One Click")),r.a.createElement("div",{className:"col-lg-3"},r.a.createElement("img",{src:N.a,alt:"shopify icon sell"}),r.a.createElement("h5",null,"Sell"),r.a.createElement("p",null,"Drive Traffic and Grow Sales")))),r.a.createElement("div",{className:"container mt-10 mobile-center"},r.a.createElement("div",{className:"row width-991 align-items-center"},r.a.createElement("div",{className:"col-lg-6 col-image-box align-items-center"},r.a.createElement("img",{src:I.a,alt:"shopify icon sell"})),r.a.createElement("div",{className:"col-lg-6 align-items-center"},r.a.createElement("div",{className:"col-content"},r.a.createElement("h3",null,"Account"),r.a.createElement("p",null,"Control your entire e-commerce from a single dashboard: Connect with suppliers, source products or create listings. Manage all sales channels and orders through one account."),r.a.createElement(c.a,{to:"/solution"},"Learn more ",r.a.createElement(m.a,{icon:p.b})))))),r.a.createElement("div",{className:"container mt-5 mobile-center"},r.a.createElement("div",{className:"row width-991 align-items-center"},r.a.createElement("div",{className:"order-2 order-lg-1 col-lg-6 align-items-center"},r.a.createElement("div",{className:"col-content"},r.a.createElement("h3",null,"Channels"),r.a.createElement("p",null,"Import physical and digital products to your sales channels, simply with one click. Outshifter´s deep integrations and powerful listing tools bridges content seamlessly."),r.a.createElement(c.a,{to:"/solution"},"Learn more ",r.a.createElement(m.a,{icon:p.b})))),r.a.createElement("div",{className:"order-1 order-lg-2 col-lg-6 col-image-channels align-items-center"},r.a.createElement("div",{className:"image-wrapper"},r.a.createElement("img",{src:j.a,alt:"shopify icon sell"}))))),r.a.createElement("div",{className:"container mt-10 mobile-center"},r.a.createElement("div",{className:"row width-991 align-items-center"},r.a.createElement("div",{className:"col-lg-6 align-items-center col-image-two-box"},r.a.createElement("div",{className:"image-wrapper"},r.a.createElement("img",{src:P.a,alt:"shopify icon sell"}))),r.a.createElement("div",{className:"col-lg-6 align-items-center"},r.a.createElement("div",{className:"col-content col-float-right"},r.a.createElement("h3",null,"Network"),r.a.createElement("p",null,"Grow sales through network effects: Connected users get access to source each other’s listings. Manage and scale your network by connecting with top suppliers and merchants."),r.a.createElement(c.a,{to:"/solution"},"Learn more ",r.a.createElement(m.a,{icon:p.b})))))),r.a.createElement("div",{className:"container mt-10 mobile-center"},r.a.createElement("div",{className:"row width-991 align-items-center"},r.a.createElement("div",{className:"order-2 order-lg-1 col-lg-6 align-items-center"},r.a.createElement("div",{className:"col-content"},r.a.createElement("h3",null,"Products"),r.a.createElement("p",null,"Quality is key. Outshifter only works with verified European suppliers of high-quality products. Exponentially grow your sales with the latest editions and newest collections."),r.a.createElement(c.a,{to:"/solution"},"Learn more ",r.a.createElement(m.a,{icon:p.b})))),r.a.createElement("div",{className:"order-1 order-lg-2 col-lg-6 align-items-center col-image-two-box"},r.a.createElement("div",{className:"image-wrapper"},r.a.createElement("img",{src:W.a,alt:"shopify icon sell"}))))),r.a.createElement("div",{className:"container mt-10 mobile-center"},r.a.createElement("div",{className:"row width-991 align-items-center"},r.a.createElement("div",{className:"col-lg-6 align-items-center col-image-standard"},r.a.createElement("div",{className:"image-wrapper"},r.a.createElement("img",{src:F.a,alt:"shopify icon sell"}))),r.a.createElement("div",{className:"col-lg-6 align-items-center"},r.a.createElement("div",{className:"col-content col-float-right"},r.a.createElement("h3",null,"Orders"),r.a.createElement("p",null,"Outshifter synchronizes inventory and updates order status in real-time. So, sit back and relax, while remaining in complete control."),r.a.createElement(c.a,{to:"/solution"},"Learn more ",r.a.createElement(m.a,{icon:p.b})))))),r.a.createElement("div",{className:"container mt-10 mobile-center"},r.a.createElement("div",{className:"row width-991 align-items-center"},r.a.createElement("div",{className:"order-2 order-lg-1 col-lg-6 align-items-center"},r.a.createElement("div",{className:"col-content"},r.a.createElement("h3",null,"Shipping"),r.a.createElement("p",null,"Fulfill orders with one click and Outshifer automates the rest. We integrate with more than 50 of the world’s leading couriers. Ensuring fast and reliable delivery for customer satisfaction."),r.a.createElement(c.a,{to:"/solution"},"Learn more ",r.a.createElement(m.a,{icon:p.b})))),r.a.createElement("div",{className:"order-1 order-lg-2 col-lg-6 align-items-center col-image-standard"},r.a.createElement("div",{className:"image-wrapper"},r.a.createElement("img",{src:T.a,alt:"shopify icon sell"}))))),r.a.createElement("div",{className:"container mt-10 mobile-center"},r.a.createElement("div",{className:"row width-991 align-items-center"},r.a.createElement("div",{className:"col-lg-6 align-items-center col-image-analytics"},r.a.createElement("div",{className:"image-wrapper"},r.a.createElement("img",{src:L.a,alt:"shopify icon sell"}))),r.a.createElement("div",{className:"col-lg-6 align-items-center"},r.a.createElement("div",{className:"col-content col-float-right"},r.a.createElement("h3",null,"Analytics"),r.a.createElement("p",null,"Empower your business with data-driven insights and analytics. Statistics and overall impact help you adjust accordingly to target the most profitable online avenues."),r.a.createElement(c.a,{to:"/solution"},"Learn more ",r.a.createElement(m.a,{icon:p.b})))))),r.a.createElement("div",{className:"container mt-10 mb-10 pb-10 mobile-center"},r.a.createElement("div",{className:"row width-991 align-items-center"},r.a.createElement("div",{className:"order-2 order-lg-1 col-lg-6 align-items-center"},r.a.createElement("div",{className:"col-content"},r.a.createElement("h3",null,"Free Forever"),r.a.createElement("p",null,"Outshifer is free, that´s it. No hidden fees or additional charges. Source and import unlimited amounts of products and generate infinite numbers of orders."),r.a.createElement(c.a,{to:"/solution"},"Learn more ",r.a.createElement(m.a,{icon:p.b})))),r.a.createElement("div",{className:"order-1 order-lg-2 col-lg-6 align-items-center col-image-standard text-center pt-5-mob pb-5-mob"},r.a.createElement(c.a,{to:"https://app.outshifter.com/"},r.a.createElement(s.a,null,"Get started")))))))},n}(r.a.Component);t.default=J},utxc:function(e,t,a){e.exports=a.p+"static/Shopify-banner-mobile-min-9bf16279b47b9daef92bd4a3011086cc.png"},wQG1:function(e,t,a){e.exports=a.p+"static/Shopify-Badge-White-3662be996c08e6a77b1b6da5ad98854f.png"},zSVl:function(e,t,a){e.exports=a.p+"static/image-Orders-min-1025fd992ecf5f39904311062e38b8e0.png"}}]);
//# sourceMappingURL=component---src-pages-shopify-js-0131b194c9dce7f79de9.js.map