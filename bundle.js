(()=>{"use strict";var e={426:(e,n,t)=>{t.d(n,{Z:()=>u});var a=t(81),o=t.n(a),r=t(645),i=t.n(r),d=t(667),c=t.n(d),s=new URL(t(613),t.b),l=i()(o()),p=c()(s);l.push([e.id,`/* http://meyerweb.com/eric/tools/css/reset/ \n   v2.0 | 20110126\n   License: none (public domain)\n*/\n\nhtml, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed, \nfigure, figcaption, footer, header, hgroup, \nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n\tmargin: 0;\n\tpadding: 0;\n\tborder: 0;\n\tfont-size: 100%;\n\tfont: inherit;\n\tvertical-align: baseline;\n}\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure, \nfooter, header, hgroup, menu, nav, section {\n\tdisplay: block;\n}\nbody {\n\tline-height: 1;\n}\nol, ul {\n\tlist-style: none;\n}\nblockquote, q {\n\tquotes: none;\n}\nblockquote:before, blockquote:after,\nq:before, q:after {\n\tcontent: '';\n\tcontent: none;\n}\ntable {\n\tborder-collapse: collapse;\n\tborder-spacing: 0;\n}\n\n/*======================================================================*/\n/* Implemented CSS begins here! */\n.footer_logos {\n    height: 25px;\n    width: 25px;\n}\n\n#content {\n\tdisplay: grid;\n\tgrid-template-rows: auto;\n\theight: 100vh;\n\tfont-family: sans-serif;\n\tbackground-color: #393838;\n}\n\n.header {\n\tborder: 1px solid;\n\tdisplay: flex;\n\tjustify-content: space-evenly;\n\talign-items: center;\n\tpadding: 0.5em;\n\tbackground-color: #393838;\n}\n\n.timsDiner {\n\tfont-size: 3em;\n\tcolor: black;\n\t/* contributes to the outline effect by determining the color inside the outline*/\n\t-webkit-text-stroke-width: 1px; \n\t-webkit-text-fill-color: #FFECC7;\n\ttext-shadow: -3px -2px 5px #FFECC7; /*x y blur-radius color*/\n}\n\n.header_menu {\n\tfont-size: 1.15em;\n\tcolor: #FFECC7;\n\tdisplay: flex;\n\tjustify-content: space-evenly;\n\tgap: 1.5vw;\n}\n\n.buttonText {\n\tfont-size: 2em;\n\tcolor: white;\n\tbackground: none;\n\tborder-radius: 1px;\n\tborder-width: 2px;\n\tborder-color: #FFECC7;\n\tpadding: 10px;\n}\n\n.main_sec_container {\n\tborder: 1px solid red;\n\tbackground: url(${p});\n\tbackground-size: contain; \n\t/*the contain val specifies that regardless of the size of the containing box, the \n\tbackground image shoul dbe scaled so that each size is large as possible\n\twhile not exceeding the length of the corresponding side of container*/\n\t\n}\n\n.footer {\n\tdisplay: flex;\n\tflex-direction: column;\n\tjustify-content: space-around;\n\talign-items: center;\n\tcolor: #FFFFFF;\n\tpadding-top: 15px;\n\tpadding-bottom: 10px;\n}\n\n.resInquiries {\n\tdisplay: grid;\n\tgrid-template-columns: 1fr 1fr 1fr;\n\tcolumn-gap: 50px;\n}\n\n.colInquiry {\n\twidth: 150px;\n\tdisplay: flex;\n\tflex-direction: column;\n\tgap: 10px;\n}\n\n.footer_header {\n\tfont-size: 20px;\n}\n\n.thirdColInquiry {\n\tdisplay: flex;\n\tflex-direction: column;\n\tgap: 10px;\n}\n\n.followUs {\n\tdisplay: flex;\n\tflex-direction: column;\n\talign-items: center;\n\tgap: 10px;\n}\n\n.logoDiv {\n\tdisplay: flex;\n\tgap: 15px;\n}\n\n`,""]);const u=l},645:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",a=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),a&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),a&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,a,o,r){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(a)for(var d=0;d<this.length;d++){var c=this[d][0];null!=c&&(i[c]=!0)}for(var s=0;s<e.length;s++){var l=[].concat(e[s]);a&&i[l[0]]||(void 0!==r&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=r),t&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=t):l[2]=t),o&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=o):l[4]="".concat(o)),n.push(l))}},n}},667:e=>{e.exports=function(e,n){return n||(n={}),e?(e=String(e.__esModule?e.default:e),/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),n.hash&&(e+=n.hash),/["'() \t\n]|(%20)/.test(e)||n.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e):e}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var n=[];function t(e){for(var t=-1,a=0;a<n.length;a++)if(n[a].identifier===e){t=a;break}return t}function a(e,a){for(var r={},i=[],d=0;d<e.length;d++){var c=e[d],s=a.base?c[0]+a.base:c[0],l=r[s]||0,p="".concat(s," ").concat(l);r[s]=l+1;var u=t(p),m={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==u)n[u].references++,n[u].updater(m);else{var h=o(m,a);a.byIndex=d,n.splice(d,0,{identifier:p,updater:h,references:1})}i.push(p)}return i}function o(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,o){var r=a(e=e||[],o=o||{});return function(e){e=e||[];for(var i=0;i<r.length;i++){var d=t(r[i]);n[d].references--}for(var c=a(e,o),s=0;s<r.length;s++){var l=t(r[s]);0===n[l].references&&(n[l].updater(),n.splice(l,1))}r=c}}},569:e=>{var n={};e.exports=function(e,t){var a=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(t)}},216:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},565:(e,n,t)=>{e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},795:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var a="";t.supports&&(a+="@supports (".concat(t.supports,") {")),t.media&&(a+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(a+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),a+=t.css,o&&(a+="}"),t.media&&(a+="}"),t.supports&&(a+="}");var r=t.sourceMap;r&&"undefined"!=typeof btoa&&(a+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(r))))," */")),n.styleTagTransform(a,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},589:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}},613:(e,n,t)=>{e.exports=t.p+"88bf254df56a7e7c0644.jpg"}},n={};function t(a){var o=n[a];if(void 0!==o)return o.exports;var r=n[a]={id:a,exports:{}};return e[a](r,r.exports,t),r.exports}t.m=e,t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var a in n)t.o(n,a)&&!t.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:n[a]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),(()=>{var e;t.g.importScripts&&(e=t.g.location+"");var n=t.g.document;if(!e&&n&&(n.currentScript&&(e=n.currentScript.src),!e)){var a=n.getElementsByTagName("script");if(a.length)for(var o=a.length-1;o>-1&&!e;)e=a[o--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=e})(),t.b=document.baseURI||self.location.href,t.nc=void 0,(()=>{var e=t(379),n=t.n(e),a=t(795),o=t.n(a),r=t(569),i=t.n(r),d=t(565),c=t.n(d),s=t(216),l=t.n(s),p=t(589),u=t.n(p),m=t(426),h={};function f(){const e=document.querySelector("#content"),n=document.createElement("div");n.classList.add("footer");const t=document.createElement("div");t.classList.add("resInquiries");const a=document.createElement("div");a.classList.add("colInquiry");const o=document.createElement("p");o.classList.add("footer_header"),o.innerText="Order Now";const r=document.createElement("div");v(r,"Delivery","Deals","Happy Hour","Drinks"),a.appendChild(o),a.appendChild(r);const i=document.createElement("div");i.classList.add("colInquiry");const d=document.createElement("p");d.classList.add("footer_header"),d.innerText="About";const c=document.createElement("div");v(c,"Contact Us","Opening Hours","Locations"),i.appendChild(d),i.appendChild(c);const s=document.createElement("div");s.classList.add("thirdColInquiry");const l=document.createElement("div");l.classList.add("colInquiry");const p=document.createElement("p");p.classList.add("footer_header"),p.innerText="Privacy Policy";const u=document.createElement("div");v(u,"Terms and Conditions","Cookies and Ads"),l.appendChild(p),l.appendChild(u);const m=document.createElement("div");m.classList.add("colInquiry");const h=document.createElement("p");h.classList.add("footer_header"),h.innerText="Language";const f=document.createElement("div");v(f,"Francais"),m.appendChild(h),m.appendChild(f),s.appendChild(l),s.appendChild(m),t.appendChild(a),t.appendChild(i),t.appendChild(s);const C=document.createElement("div");C.classList.add("followUs");const b=document.createElement("p");b.innerText="Follow Us",C.classList.add("footer_header"),C.appendChild(b);const x=document.createElement("div");x.classList.add("logoDiv"),g(x,"../images/github-mark.png"),g(x,"../images/igwhite.png"),C.appendChild(x);const E=document.createElement("p");E.innerText="We are not liable to any injuries or illnesses sustained from visiting one of our locations.",n.appendChild(t),n.appendChild(C),n.appendChild(E),e.appendChild(n)}function v(e,...n){for(let t=0;t<n.length;t++){const a=document.createElement("p");a.innerText=n[t],e.appendChild(a)}}function g(e,n){const t=document.createElement("a"),a=document.createElement("img");a.classList.add("footer_logos"),a.setAttribute("src",n),t.appendChild(a),e.appendChild(t)}h.styleTagTransform=u(),h.setAttributes=c(),h.insert=i().bind(null,"head"),h.domAPI=o(),h.insertStyleElement=l(),n()(m.Z,h),m.Z&&m.Z.locals&&m.Z.locals,function(){const e=document.querySelector("#content"),n=document.createElement("div");n.classList.add("header");const t=document.createElement("p");t.innerText="Tim's Diner",t.classList.add("timsDiner");const a=document.createElement("div");a.classList.add("header_menu");const o=document.createElement("p");o.innerText="Menus",a.appendChild(o);const r=document.createElement("p");r.innerText="Locations",a.appendChild(r);const i=document.createElement("p");i.innerText="Gift-Cards",a.appendChild(i);const d=document.createElement("p");d.innerText="Careers",a.appendChild(d);const c=document.createElement("button");c.innerText="ORDER NOW",c.classList.add("buttonText"),c.setAttribute("id","orderButton"),c.addEventListener("click",(()=>{const n=document.querySelector(".footer");n&&e.removeChild(n);const t=document.querySelector(".main_sec_container");t&&e.removeChild(t),function(){const e=document.querySelector("#content"),n=document.createElement("div");n.classList.add("main_sec_container");const t=document.createElement("div");t.classList.add("main_sec");const a=document.createElement("div"),o=document.createElement("p");o.innerText="Appetizers",a.appendChild(o);const r=document.createElement("div");r.classList.add("menu_item");const i=document.createElement("div"),d=document.createElement("p"),c=document.createElement("p");d.innerText="Truffle Fries",c.innerText="$8";const s=document.createElement("p");s.innerText="truffle, herbs, grana padano, garlic aioli",i.appendChild(d),i.appendChild(c),r.appendChild(i),r.appendChild(s);const l=document.createElement("div");l.classList.add("menu_item");const p=document.createElement("div"),u=document.createElement("p"),m=document.createElement("p");u.innerText="Chicken Wings",m.innerText="50c / wing";const h=document.createElement("p");h.innerText="sweet & sour, creamy parmesan dip",p.appendChild(u),p.appendChild(m),l.appendChild(p),l.appendChild(h),a.appendChild(r),a.appendChild(l);const f=document.createElement("div"),v=document.createElement("p");f.innerText="Mains",f.appendChild(v);const g=document.createElement("div");g.classList.add("menu_item");const C=document.createElement("div"),b=document.createElement("p"),x=document.createElement("p");b.innerText="Krabby Patty Burger",x.innerText="$10";const E=document.createElement("p");E.innerText="crab meat, secret ingredient, buns, lettuce",C.appendChild(b),C.appendChild(x),g.appendChild(C),g.appendChild(E);const y=document.createElement("div");y.classList.add("menu_item");const T=document.createElement("div"),w=document.createElement("p"),L=document.createElement("p");w.innerText="Krabby Patty Burger",L.innerText="$10";const k=document.createElement("p");k.innerText="crab meat, secret ingredient, buns, lettuce",T.appendChild(w),T.appendChild(L),y.appendChild(T),y.appendChild(k),f.appendChild(g),f.appendChild(y);const _=document.createElement("div"),q=document.createElement("p");q.innerText="Mains",_.appendChild(q);const S=document.createElement("div");S.classList.add("menu_item");const F=document.createElement("div"),I=document.createElement("p"),j=document.createElement("p");I.innerText="New York Cheesecake",j.innerText="$1.5";const M=document.createElement("p");M.innerText="cheese, sugar, NY rats",F.appendChild(I),F.appendChild(j),S.appendChild(F),S.appendChild(M),_.appendChild(S);const A=document.createElement("div"),$=document.createElement("p");$.innerText="Salads",A.appendChild($);const D=document.createElement("div");D.classList.add("menu_item");const z=document.createElement("div"),N=document.createElement("p"),P=document.createElement("p");N.innerText="Avocado Kale Salad",P.innerText="$20";const O=document.createElement("p");O.innerText="avocado, kale, grass, dressing",z.appendChild(N),z.appendChild(P),D.appendChild(z),D.appendChild(O),A.appendChild(D);const U=document.createElement("div"),H=document.createElement("p");H.innerText="Drinks",U.appendChild(H);const R=document.createElement("div");R.classList.add("menu_item");const B=document.createElement("div"),Z=document.createElement("p"),W=document.createElement("p");Z.innerText="Bellini",W.innerText="$3";const K=document.createElement("p");K.innerText="bacardi superior, peach schnapps, sparkling wine, peach and sangria",B.appendChild(Z),B.appendChild(W),R.appendChild(B),R.appendChild(K);const Y=document.createElement("div");Y.classList.add("menu_item");const G=document.createElement("div"),J=document.createElement("p"),Q=document.createElement("p");J.innerText="Whiskey Sour",Q.innerText="$3";const V=document.createElement("p");V.innerText="jack daniel's tennessee whiskey, fresh lemon, lime, angostura bitters",G.appendChild(J),G.appendChild(Q),Y.appendChild(G),Y.appendChild(V),U.appendChild(R),U.appendChild(Y),t.appendChild(a),t.appendChild(f),t.appendChild(_),t.appendChild(A),t.appendChild(U),n.appendChild(t),e.appendChild(n)}(),f()})),n.appendChild(t),n.appendChild(a),n.appendChild(c),console.log("headers have been appended!"),e.appendChild(n)}(),f()})()})();