(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{HuY6:function(e,t,a){e.exports=a.p+"static/world-map-838f16176e85f4e3ac84f2171463ebbd.png"},slWv:function(e,t,a){"use strict";var n=a("q1tI"),r=a.n(n);var o=a("vOnD").c.div.withConfig({displayName:"MyBox__StyledBox",componentId:"sc-13dljzt-0"})(["border-color:#EEEEEE;box-shadow:1px 1px 5px 2px #E2E2E2;padding:30px;border-radius:7px;width:100%;background:white;@media only screen and (max-width:767px){margin-bottom:15px;}"]),c=function(e){var t,a;function n(){return e.apply(this,arguments)||this}return a=e,(t=n).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a,n.prototype.render=function(){return r.a.createElement(o,null,this.props.children)},n}(r.a.Component);t.a=c},u52P:function(e,t,a){"use strict";a.r(t);var n=a("q1tI"),r=a.n(n),o=a("Bl7J"),c=a("vrFN"),l=a("vOnD"),i=(a("Wbzz"),a("LGja")),s=(a("slWv"),a("HuY6")),m=a.n(s);var d=l.c.div.withConfig({displayName:"pricing__FeatureStylePage",componentId:"sc-1x0ucqi-0"})([".pricing-cols{padding-top:10%;padding-bottom:10%;img{margin-top:5rem;max-width:100%;}h4{margin-bottom:2rem;}p{padding-bottom:2rem;max-width:300px;margin:0 auto;}button{font-size:0.8rem;}}.include-title{margin-top:1rem;margin-bottom:2rem;h5{display:inline;}svg{margin-right:20px;font-size:28px;position:relative;bottom:2px;}}"]),p=function(e){var t,a;function n(){return e.apply(this,arguments)||this}a=e,(t=n).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a;var l=n.prototype;return l.componentDidMount=function(){var e=document.createElement("script");e.async=!0,e.src="./includes/js/aftc.min.js",document.head.appendChild(e);var t=document.createElement("script");t.async=!0,t.src="./includes/js/three.min.js",document.head.appendChild(t);var a=document.createElement("script");a.async=!0,a.src="./includes/js/stats.min.js",document.head.appendChild(a);var n=document.createElement("script");n.async=!0,n.src="./includes/js/app.js",document.head.appendChild(n);var r=document.createElement("script");r.type="x-shader/x-vertex",r.id="vertexshader",document.body.appendChild(r),document.getElementById("vertexshader").append("attribute float scale;attribute vec3 customColor;varying vec3 vColor;void main() {vColor = customColor;vec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );gl_PointSize = scale * ( 100.0 / - mvPosition.z );gl_Position = projectionMatrix * mvPosition;}");var o=document.createElement("script");o.type="x-shader/x-fragment",o.id="fragmentshader",document.body.appendChild(o),document.getElementById("fragmentshader").append("uniform vec3 ccc;varying vec3 vColor;void main() {  if ( length( gl_PointCoord - vec2( 0.5, 0.5 ) ) > 0.275 ) discard;  gl_FragColor = vec4( ccc * vColor, 1.0 );}")},l.render=function(){return r.a.createElement(o.a,null,r.a.createElement(c.a,{title:"Pricing"}),r.a.createElement(d,null,r.a.createElement("div",{className:"main-banner text-center"},r.a.createElement("canvas",{id:"canvas1"}),r.a.createElement("canvas",{id:"canvas2"}),r.a.createElement("div",{className:"masthead"},r.a.createElement("div",{className:"container h-100 "},r.a.createElement("div",{className:"row h-100 main-banner no-gutters"},r.a.createElement("div",{className:"col"},r.a.createElement("h1",null,"Pricing"),r.a.createElement("p",null,"No setup costs, no monthly fees and no hidden fees.",r.a.createElement("br",null),"We only charge per transaction to ensure you ROI."),r.a.createElement("a",{href:"'https://dx6lpv6uyfg06.cloudfront.net/login"},r.a.createElement(i.a,null,"Get started for free"))))))),r.a.createElement("div",{className:"container-fluid pricing-cols back-white after-canvas"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row text-center"},r.a.createElement("div",{className:"col-md-6 col-lg-4 mb-5"},r.a.createElement("h4",null,"Sourcing"),r.a.createElement("p",null,"Sourcing products and selling through Outshifter is always completly free."),r.a.createElement("a",{href:"'https://dx6lpv6uyfg06.cloudfront.net/login"},r.a.createElement(i.a,null,"Start by Outsourcing"))),r.a.createElement("div",{className:"col-md-6 col-lg-4 mb-5"},r.a.createElement("h4",null,"Transaction Fee"),r.a.createElement("p",null,"4.8% + € 0.18  is charged from the sales of the products you list. That's it."),r.a.createElement("a",{href:"'https://dx6lpv6uyfg06.cloudfront.net/login"},r.a.createElement(i.a,null,"Start outsourcing for free"))),r.a.createElement("div",{className:"col-md-6 col-lg-4 mb-5"},r.a.createElement("h4",null,"Free Trial"),r.a.createElement("p",null,"Your first 100 sales transactions are free! Try outshifting without any catch or cost."),r.a.createElement("a",{href:"'https://dx6lpv6uyfg06.cloudfront.net/login"},r.a.createElement(i.a,null,"Create account")))),r.a.createElement("div",{className:"row text-center"},r.a.createElement("div",{className:"col"},r.a.createElement("img",{src:m.a,alt:"world map"})))))))},n}(r.a.Component);t.default=p}}]);
//# sourceMappingURL=component---src-pages-pricing-js-6e59a936caefbc5bf345.js.map