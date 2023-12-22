(()=>{"use strict";var e={426:(e,n,t)=>{t.d(n,{Z:()=>m});var o=t(81),d=t.n(o),i=t(645),a=t.n(i),r=t(667),c=t.n(r),s=new URL(t(613),t.b),l=a()(d()),p=c()(s);l.push([e.id,`/* http://meyerweb.com/eric/tools/css/reset/ \n   v2.0 | 20110126\n   License: none (public domain)\n*/\n\nhtml, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed, \nfigure, figcaption, footer, header, hgroup, \nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n\tmargin: 0;\n\tpadding: 0;\n\tborder: 0;\n\tfont-size: 100%;\n\tfont: inherit;\n\tvertical-align: baseline;\n}\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure, \nfooter, header, hgroup, menu, nav, section {\n\tdisplay: block;\n}\nbody {\n\tline-height: 1;\n}\nol, ul {\n\tlist-style: none;\n}\nblockquote, q {\n\tquotes: none;\n}\nblockquote:before, blockquote:after,\nq:before, q:after {\n\tcontent: '';\n\tcontent: none;\n}\ntable {\n\tborder-collapse: collapse;\n\tborder-spacing: 0;\n}\n\n/*======================================================================*/\n/* Implemented CSS begins here! */\n.footer_logos {\n    height: 25px;\n    width: 25px;\n}\n\n#content {\n\tdisplay: grid;\n\tgrid-template-rows: auto;\n\theight: 100vh;\n\twidth: 100vw;\n\tfont-family: sans-serif;\n\tfont-weight: 400;\n\tbackground-color: #393838;\n}\n\n.header {\n\tborder-bottom: 1px solid #920E0E;\n\tdisplay: flex;\n\tjustify-content: space-evenly;\n\talign-items: center;\n\tpadding: 0.5em;\n\tbackground-color: #393838;\n}\n\n.timsDiner {\n\tfont-size: 3em;\n\tcolor: black;\n\t/* contributes to the outline effect by determining the color inside the outline*/\n\t-webkit-text-stroke-width: 1px; \n\t-webkit-text-fill-color: #FFECC7;\n\ttext-shadow: -3px -2px 5px #FFECC7; /*x y blur-radius color*/\n}\n\n.header_menu {\n\tfont-size: 1.15em;\n\tcolor: #FFECC7;\n\tdisplay: flex;\n\tjustify-content: space-evenly;\n\tgap: 1.5vw;\n}\n\n.header_menu_button {\n\tcolor: #FFECC7;\n\tbackground-color: #393838;\n\tfont-size: 1.15em;\n}\n\n.buttonText {\n\tfont-size: 2em;\n\tcolor: white;\n\tbackground: none;\n\tborder-radius: 1px;\n\tborder-width: 2px;\n\tborder-color: #FFECC7;\n\tpadding: 10px;\n}\n\n.main_sec_container {\n\tborder: 1px solid #920E0E;\n\tbackground: url(${p});\n\tbackground-size: contain; \n\t/*the contain val specifies that regardless of the size of the containing box, the \n\tbackground image shoul dbe scaled so that each size is large as possible\n\twhile not exceeding the length of the corresponding side of container*/\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-items: center;\n}\n\n.main_sec {\n\theight: 80%;\n\twidth: 480px;\n\tborder: 20px solid #FFECC7;\n\tbackground-color: #FFDD9B;\n\tdisplay: grid;\n\tgrid-template-columns: 200px 200px;\n\tgrid-template-rows: 1fr 1fr 1fr;\n\tcolumn-gap: 20px;\n}\n\n#appetizerDiv {\n\tgrid-row-start: 1;\n}\n\n#mainsDiv {\n\tgrid-row-start: 2;\n}\n\n#dessertsDiv {\n\tgrid-row-start: 3;\n}\n\n.food_entry {\n\tmargin-left: 30px;\n\tmargin-top: 30px;\n\twidth: 200px;\n\tfont-size: 12px;\n\tdisplay: flex;\n\tflex-direction: column;\n\tgap: 10px;\n}\n\n.food_title {\n\tfont-size: 24px;\n\tcolor: #920E0E;\n}\n\n.name_price {\n\tfont-size: 14px;\n\tdisplay: flex;\n\tjustify-content: space-between;\n}\n\n\n\n.footer {\n\tborder-top: 1px solid #920E0E;\n\tdisplay: flex;\n\tflex-direction: column;\n\tjustify-content: space-around;\n\talign-items: center;\n\tcolor: #FFFFFF;\n\tpadding-top: 15px;\n\tpadding-bottom: 10px;\n}\n\n.resInquiries {\n\tdisplay:flex;\n\tjustify-content: center;\n\tmargin-left: 80px;\n}\n\n.colInquiry {\n\twidth: 175px;\n\tdisplay: flex;\n\tflex-direction: column;\n\tgap: 10px;\n}\n\n.footer_header {\n\tfont-size: 20px;\n\tcolor: #FFECC7;\n}\n\n.thirdColInquiry {\n\tdisplay: flex;\n\tflex-direction: column;\n\tgap: 10px;\n}\n\n.followUs {\n\tdisplay: flex;\n\tflex-direction: column;\n\talign-items: center;\n\tgap: 10px;\n}\n\n.logoDiv {\n\tdisplay: flex;\n\tgap: 15px;\n}\n\n`,""]);const m=l},645:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",o=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),o&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),o&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,o,d,i){"string"==typeof e&&(e=[[null,e,void 0]]);var a={};if(o)for(var r=0;r<this.length;r++){var c=this[r][0];null!=c&&(a[c]=!0)}for(var s=0;s<e.length;s++){var l=[].concat(e[s]);o&&a[l[0]]||(void 0!==i&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=i),t&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=t):l[2]=t),d&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=d):l[4]="".concat(d)),n.push(l))}},n}},667:e=>{e.exports=function(e,n){return n||(n={}),e?(e=String(e.__esModule?e.default:e),/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),n.hash&&(e+=n.hash),/["'() \t\n]|(%20)/.test(e)||n.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e):e}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var n=[];function t(e){for(var t=-1,o=0;o<n.length;o++)if(n[o].identifier===e){t=o;break}return t}function o(e,o){for(var i={},a=[],r=0;r<e.length;r++){var c=e[r],s=o.base?c[0]+o.base:c[0],l=i[s]||0,p="".concat(s," ").concat(l);i[s]=l+1;var m=t(p),u={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==m)n[m].references++,n[m].updater(u);else{var h=d(u,o);o.byIndex=r,n.splice(r,0,{identifier:p,updater:h,references:1})}a.push(p)}return a}function d(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,d){var i=o(e=e||[],d=d||{});return function(e){e=e||[];for(var a=0;a<i.length;a++){var r=t(i[a]);n[r].references--}for(var c=o(e,d),s=0;s<i.length;s++){var l=t(i[s]);0===n[l].references&&(n[l].updater(),n.splice(l,1))}i=c}}},569:e=>{var n={};e.exports=function(e,t){var o=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(t)}},216:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},565:(e,n,t)=>{e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},795:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var o="";t.supports&&(o+="@supports (".concat(t.supports,") {")),t.media&&(o+="@media ".concat(t.media," {"));var d=void 0!==t.layer;d&&(o+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),o+=t.css,d&&(o+="}"),t.media&&(o+="}"),t.supports&&(o+="}");var i=t.sourceMap;i&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),n.styleTagTransform(o,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},589:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}},613:(e,n,t)=>{e.exports=t.p+"88bf254df56a7e7c0644.jpg"}},n={};function t(o){var d=n[o];if(void 0!==d)return d.exports;var i=n[o]={id:o,exports:{}};return e[o](i,i.exports,t),i.exports}t.m=e,t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var o in n)t.o(n,o)&&!t.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:n[o]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),(()=>{var e;t.g.importScripts&&(e=t.g.location+"");var n=t.g.document;if(!e&&n&&(n.currentScript&&(e=n.currentScript.src),!e)){var o=n.getElementsByTagName("script");if(o.length)for(var d=o.length-1;d>-1&&!e;)e=o[d--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=e})(),t.b=document.baseURI||self.location.href,t.nc=void 0,(()=>{var e=t(379),n=t.n(e),o=t(795),d=t.n(o),i=t(569),a=t.n(i),r=t(565),c=t.n(r),s=t(216),l=t.n(s),p=t(589),m=t.n(p),u=t(426),h={};function f(){const e=document.querySelector("#content"),n=document.createElement("div");n.classList.add("footer");const t=document.createElement("div");t.classList.add("resInquiries");const o=document.createElement("div");o.classList.add("colInquiry");const d=document.createElement("p");d.classList.add("footer_header"),d.innerText="Order Now";const i=document.createElement("div");v(i,"Delivery","Deals","Happy Hour","Drinks"),o.appendChild(d),o.appendChild(i);const a=document.createElement("div");a.classList.add("colInquiry");const r=document.createElement("p");r.classList.add("footer_header"),r.innerText="About";const c=document.createElement("div");v(c,"Contact Us","Opening Hours","Locations"),a.appendChild(r),a.appendChild(c);const s=document.createElement("div");s.classList.add("thirdColInquiry");const l=document.createElement("div");l.classList.add("colInquiry");const p=document.createElement("p");p.classList.add("footer_header"),p.innerText="Privacy Policy";const m=document.createElement("div");v(m,"Terms and Conditions","Cookies and Ads"),l.appendChild(p),l.appendChild(m);const u=document.createElement("div");u.classList.add("colInquiry");const h=document.createElement("p");h.classList.add("footer_header"),h.innerText="Language";const f=document.createElement("div");v(f,"Francais"),u.appendChild(h),u.appendChild(f),s.appendChild(l),s.appendChild(u),t.appendChild(o),t.appendChild(a),t.appendChild(s);const g=document.createElement("div");g.classList.add("followUs");const x=document.createElement("p");x.innerText="Follow Us",g.classList.add("footer_header"),g.appendChild(x);const E=document.createElement("div");E.classList.add("logoDiv"),C(E,"../images/github-mark.png"),C(E,"../images/igwhite.png"),g.appendChild(E);const b=document.createElement("p");b.innerText="We are not liable to any injuries or illnesses sustained from visiting one of our locations.",n.appendChild(t),n.appendChild(g),n.appendChild(b),e.appendChild(n)}function v(e,...n){for(let t=0;t<n.length;t++){const o=document.createElement("p");o.innerText=n[t],e.appendChild(o)}}function C(e,n){const t=document.createElement("a"),o=document.createElement("img");o.classList.add("footer_logos"),o.setAttribute("src",n),t.appendChild(o),e.appendChild(t)}function g(e,n,t){const o=document.createElement("div"),d=document.createElement("p");d.innerText=n,o.appendChild(d);const i=document.createElement("p");i.innerText=t,o.appendChild(i),e.appendChild(o)}h.styleTagTransform=m(),h.setAttributes=c(),h.insert=a().bind(null,"head"),h.domAPI=d(),h.insertStyleElement=l(),n()(u.Z,h),u.Z&&u.Z.locals&&u.Z.locals,function(){const e=document.querySelector("#content"),n=document.createElement("div");n.classList.add("header");const t=document.createElement("p");t.innerText="Tim's Diner",t.classList.add("timsDiner");const o=document.createElement("div");o.classList.add("header_menu");const d=document.createElement("p");d.innerText="Menus",o.appendChild(d);const i=document.createElement("button");i.innerText="Locations",i.classList.add("header_menu_button"),i.addEventListener("click",(()=>{const n=document.querySelector(".footer");n&&e.removeChild(n);const t=document.querySelector(".main_sec_container"),o=document.querySelector(".location_Sec");t?e.removeChild(t):o&&e.removeChild(o),function(){const e=document.querySelector("#content"),n=document.createElement("div");n.classList.add("location_Sec");const t=document.createElement("div"),o=document.createElement("p");o.innerText="Locations",t.appendChild(o);const d=document.createElement("div");g(d,"Surrey","10am - 9pm"),g(d,"Burnaby","9am - 5pm"),g(d,"Richmond","8am - 8pm"),g(d,"Vancouver","9am - 6pm"),t.appendChild(d),n.appendChild(t),e.appendChild(n)}(),f()})),o.appendChild(i);const a=document.createElement("p");a.innerText="Gift-Cards",o.appendChild(a);const r=document.createElement("p");r.innerText="Careers",o.appendChild(r);const c=document.createElement("button");c.innerText="ORDER NOW",c.classList.add("buttonText"),c.setAttribute("id","orderButton"),c.addEventListener("click",(()=>{const n=document.querySelector(".footer");n&&e.removeChild(n);const t=document.querySelector(".location_Sec"),o=document.querySelector(".main_sec_container");o?e.removeChild(o):t&&e.removeChild(t),function(){const e=document.querySelector("#content"),n=document.createElement("div");n.classList.add("main_sec_container");const t=document.createElement("div");t.classList.add("main_sec");const o=document.createElement("div");o.classList.add("food_entry"),o.setAttribute("id","appetizerDiv");const d=document.createElement("p");d.classList.add("food_title"),d.innerText="Appetizers",o.appendChild(d);const i=document.createElement("div");i.classList.add("menu_item");const a=document.createElement("div");a.classList.add("name_price");const r=document.createElement("p"),c=document.createElement("p");r.innerText="Truffle Fries",c.innerText="$8";const s=document.createElement("p");s.innerText="truffle, herbs, grana padano, garlic aioli",a.appendChild(r),a.appendChild(c),i.appendChild(a),i.appendChild(s);const l=document.createElement("div");l.classList.add("menu_item");const p=document.createElement("div");p.classList.add("name_price");const m=document.createElement("p"),u=document.createElement("p");m.innerText="Chicken Wings",u.innerText="50c / wing";const h=document.createElement("p");h.innerText="sweet & sour, creamy parmesan dip",p.appendChild(m),p.appendChild(u),l.appendChild(p),l.appendChild(h),o.appendChild(i),o.appendChild(l);const f=document.createElement("div");f.classList.add("food_entry"),f.setAttribute("id","mainsDiv");const v=document.createElement("p");v.innerText="Mains",v.classList.add("food_title"),f.appendChild(v);const C=document.createElement("div");C.classList.add("menu_item");const g=document.createElement("div");g.classList.add("name_price");const x=document.createElement("p"),E=document.createElement("p");x.innerText="Krabby Patty Burger",E.innerText="$10";const b=document.createElement("p");b.innerText="crab meat, secret ingredient, buns, lettuce",g.appendChild(x),g.appendChild(E),C.appendChild(g),C.appendChild(b);const y=document.createElement("div");y.classList.add("menu_item");const T=document.createElement("div");T.classList.add("name_price");const L=document.createElement("p"),_=document.createElement("p");L.innerText="Krabby Patty Burger",_.innerText="$10";const w=document.createElement("p");w.innerText="crab meat, secret ingredient, buns, lettuce",T.appendChild(L),T.appendChild(_),y.appendChild(T),y.appendChild(w),f.appendChild(C),f.appendChild(y);const k=document.createElement("div");k.classList.add("food_entry"),k.setAttribute("id","dessertsDiv");const S=document.createElement("p");S.classList.add("food_title"),S.innerText="Desserts",k.appendChild(S);const q=document.createElement("div");q.classList.add("menu_item");const F=document.createElement("div");F.classList.add("name_price");const D=document.createElement("p"),I=document.createElement("p");D.innerText="New York Cheesecake",I.innerText="$1.5";const j=document.createElement("p");j.innerText="cheese, sugar, NY rats",F.appendChild(D),F.appendChild(I),q.appendChild(F),q.appendChild(j),k.appendChild(q);const z=document.createElement("div");z.classList.add("food_entry");const A=document.createElement("p");A.classList.add("food_title"),A.innerText="Salads",z.appendChild(A);const M=document.createElement("div");M.classList.add("menu_item");const $=document.createElement("div");$.classList.add("name_price");const N=document.createElement("p"),P=document.createElement("p");N.innerText="Avocado Kale Salad",P.innerText="$20";const O=document.createElement("p");O.innerText="avocado, kale, grass, dressing",$.appendChild(N),$.appendChild(P),M.appendChild($),M.appendChild(O),z.appendChild(M);const U=document.createElement("div");U.classList.add("food_entry");const B=document.createElement("p");B.classList.add("food_title"),B.innerText="Drinks",U.appendChild(B);const R=document.createElement("div");R.classList.add("menu_item");const H=document.createElement("div");H.classList.add("name_price");const Z=document.createElement("p"),W=document.createElement("p");Z.innerText="Bellini",W.innerText="$3";const K=document.createElement("p");K.innerText="bacardi superior, peach schnapps, sparkling wine, peach and sangria",H.appendChild(Z),H.appendChild(W),R.appendChild(H),R.appendChild(K);const Y=document.createElement("div");Y.classList.add("menu_item");const G=document.createElement("div");G.classList.add("name_price");const J=document.createElement("p"),Q=document.createElement("p");J.innerText="Whiskey Sour",Q.innerText="$3";const V=document.createElement("p");V.innerText="jack daniel's tennessee whiskey, fresh lemon, lime, angostura bitters",G.appendChild(J),G.appendChild(Q),Y.appendChild(G),Y.appendChild(V),U.appendChild(R),U.appendChild(Y),t.appendChild(o),t.appendChild(f),t.appendChild(k),t.appendChild(z),t.appendChild(U),n.appendChild(t),e.appendChild(n)}(),f()})),n.appendChild(t),n.appendChild(o),n.appendChild(c),console.log("headers have been appended!"),e.appendChild(n)}(),f()})()})();