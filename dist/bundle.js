(()=>{"use strict";var e={426:(e,n,t)=>{t.d(n,{Z:()=>i});var d=t(81),a=t.n(d),r=t(645),o=t.n(r)()(a());o.push([e.id,"/* http://meyerweb.com/eric/tools/css/reset/ \n   v2.0 | 20110126\n   License: none (public domain)\n*/\n\nhtml, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed, \nfigure, figcaption, footer, header, hgroup, \nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n\tmargin: 0;\n\tpadding: 0;\n\tborder: 0;\n\tfont-size: 100%;\n\tfont: inherit;\n\tvertical-align: baseline;\n}\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure, \nfooter, header, hgroup, menu, nav, section {\n\tdisplay: block;\n}\nbody {\n\tline-height: 1;\n}\nol, ul {\n\tlist-style: none;\n}\nblockquote, q {\n\tquotes: none;\n}\nblockquote:before, blockquote:after,\nq:before, q:after {\n\tcontent: '';\n\tcontent: none;\n}\ntable {\n\tborder-collapse: collapse;\n\tborder-spacing: 0;\n}\n\n/*======================================================================*/\n/* Implemented CSS begins here! */\n.footer_logos {\n    height: 50px;\n    width: 50px;\n}\n\n#html {\n}\n\n#content {\n\tdisplay: grid;\n\tgrid-template-rows: auto;\n\theight: 100vh;\n\tfont-family: sans-serif;\n\tbackground-color: #393838;\n}\n\n.header {\n\tborder: 1px solid;\n\tdisplay: flex;\n\tjustify-content: space-evenly;\n\talign-items: center;\n\tpadding: 0.5em;\n\tbackground-color: #393838;\n}\n\n.timsDiner {\n\tfont-size: 3em;\n\tcolor: black;\n\t/* contributes to the outline effect by determining the color inside the outline*/\n\t-webkit-text-stroke-width: 1px; \n\t-webkit-text-fill-color: #FFECC7;\n\ttext-shadow: -3px -2px 5px #FFECC7; /*x y blur-radius color*/\n}\n\n.header_menu {\n\tfont-size: 1.15em;\n\tcolor: #FFECC7;\n\tdisplay: flex;\n\tjustify-content: space-evenly;\n\tgap: 1.5vw;\n}\n\n.buttonText {\n\tfont-size: 2em;\n\tcolor: white;\n\tbackground: none;\n\tborder-radius: 1px;\n\tborder-width: 2px;\n\tborder-color: #FFECC7;\n\tpadding: 10px;\n}\n\n.main_sec_container {\n\tborder: 1px solid red;\n}\n\n.footer {\n\tborder: 1px solid blue;\n\tdisplay: flex;\n\tflex-direction: column;\n}",""]);const i=o},645:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",d=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),d&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),d&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,d,a,r){"string"==typeof e&&(e=[[null,e,void 0]]);var o={};if(d)for(var i=0;i<this.length;i++){var c=this[i][0];null!=c&&(o[c]=!0)}for(var l=0;l<e.length;l++){var s=[].concat(e[l]);d&&o[s[0]]||(void 0!==r&&(void 0===s[5]||(s[1]="@layer".concat(s[5].length>0?" ".concat(s[5]):""," {").concat(s[1],"}")),s[5]=r),t&&(s[2]?(s[1]="@media ".concat(s[2]," {").concat(s[1],"}"),s[2]=t):s[2]=t),a&&(s[4]?(s[1]="@supports (".concat(s[4],") {").concat(s[1],"}"),s[4]=a):s[4]="".concat(a)),n.push(s))}},n}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var n=[];function t(e){for(var t=-1,d=0;d<n.length;d++)if(n[d].identifier===e){t=d;break}return t}function d(e,d){for(var r={},o=[],i=0;i<e.length;i++){var c=e[i],l=d.base?c[0]+d.base:c[0],s=r[l]||0,p="".concat(l," ").concat(s);r[l]=s+1;var m=t(p),u={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==m)n[m].references++,n[m].updater(u);else{var h=a(u,d);d.byIndex=i,n.splice(i,0,{identifier:p,updater:h,references:1})}o.push(p)}return o}function a(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,a){var r=d(e=e||[],a=a||{});return function(e){e=e||[];for(var o=0;o<r.length;o++){var i=t(r[o]);n[i].references--}for(var c=d(e,a),l=0;l<r.length;l++){var s=t(r[l]);0===n[s].references&&(n[s].updater(),n.splice(s,1))}r=c}}},569:e=>{var n={};e.exports=function(e,t){var d=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!d)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");d.appendChild(t)}},216:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},565:(e,n,t)=>{e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},795:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var d="";t.supports&&(d+="@supports (".concat(t.supports,") {")),t.media&&(d+="@media ".concat(t.media," {"));var a=void 0!==t.layer;a&&(d+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),d+=t.css,a&&(d+="}"),t.media&&(d+="}"),t.supports&&(d+="}");var r=t.sourceMap;r&&"undefined"!=typeof btoa&&(d+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(r))))," */")),n.styleTagTransform(d,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},589:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}}},n={};function t(d){var a=n[d];if(void 0!==a)return a.exports;var r=n[d]={id:d,exports:{}};return e[d](r,r.exports,t),r.exports}t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var d in n)t.o(n,d)&&!t.o(e,d)&&Object.defineProperty(e,d,{enumerable:!0,get:n[d]})},t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),t.nc=void 0,(()=>{var e=t(379),n=t.n(e),d=t(795),a=t.n(d),r=t(569),o=t.n(r),i=t(565),c=t.n(i),l=t(216),s=t.n(l),p=t(589),m=t.n(p),u=t(426),h={};function f(){const e=document.querySelector("#content"),n=document.createElement("div");n.classList.add("footer");const t=document.createElement("div"),d=document.createElement("div"),a=document.createElement("p");a.classList.add("footer_header"),a.innerText="Order Now";const r=document.createElement("div");v(r,"Delivery","Deals","Happy Hour","Drinks"),d.appendChild(a),d.appendChild(r);const o=document.createElement("div"),i=document.createElement("p");i.classList.add("footer_header"),i.innerText="About";const c=document.createElement("div");v(c,"Contact Us","Opening Hours","Locations"),o.appendChild(i),o.appendChild(c);const l=document.createElement("div"),s=document.createElement("div"),p=document.createElement("p");p.classList.add("footer_header"),p.innerText="Privacy Policy";const m=document.createElement("div");v(m,"Terms and Conditions","Cookies and Ads"),s.appendChild(p),s.appendChild(m);const u=document.createElement("div"),h=document.createElement("p");h.classList.add("footer_header"),h.innerText="Language";const f=document.createElement("div");v(f,"Francais"),u.appendChild(h),u.appendChild(f),l.appendChild(s),l.appendChild(u),t.appendChild(d),t.appendChild(o),t.appendChild(l);const E=document.createElement("div");C(E,"../images/github-mark.png"),C(E,"../images/igwhite.png");const b=document.createElement("p");b.innerText="We are not liable to any injuries or illnesses sustained from visiting one of our locations.",n.appendChild(t),n.appendChild(E),n.appendChild(b),e.appendChild(n)}function v(e,...n){for(let t=0;t<n.length;t++){const d=document.createElement("p");d.innerText=n[t],e.appendChild(d)}}function C(e,n){const t=document.createElement("a"),d=document.createElement("img");d.classList.add("footer_logos"),d.setAttribute("src",n),t.appendChild(d),e.appendChild(t)}h.styleTagTransform=m(),h.setAttributes=c(),h.insert=o().bind(null,"head"),h.domAPI=a(),h.insertStyleElement=s(),n()(u.Z,h),u.Z&&u.Z.locals&&u.Z.locals,function(){const e=document.querySelector("#content"),n=document.createElement("div");n.classList.add("header");const t=document.createElement("p");t.innerText="Tim's Diner",t.classList.add("timsDiner");const d=document.createElement("div");d.classList.add("header_menu");const a=document.createElement("p");a.innerText="Menus",d.appendChild(a);const r=document.createElement("p");r.innerText="Locations",d.appendChild(r);const o=document.createElement("p");o.innerText="Gift-Cards",d.appendChild(o);const i=document.createElement("p");i.innerText="Careers",d.appendChild(i);const c=document.createElement("button");c.innerText="ORDER NOW",c.classList.add("buttonText"),c.setAttribute("id","orderButton"),c.addEventListener("click",(()=>{const n=document.querySelector(".footer");n&&e.removeChild(n);const t=document.querySelector(".main_sec_container");t&&e.removeChild(t),function(){const e=document.querySelector("#content"),n=document.createElement("div");n.classList.add("main_sec_container");const t=document.createElement("div");t.classList.add("main_sec");const d=document.createElement("div"),a=document.createElement("p");a.innerText="Appetizers",d.appendChild(a);const r=document.createElement("div");r.classList.add("menu_item");const o=document.createElement("div"),i=document.createElement("p"),c=document.createElement("p");i.innerText="Truffle Fries",c.innerText="$8";const l=document.createElement("p");l.innerText="truffle, herbs, grana padano, garlic aioli",o.appendChild(i),o.appendChild(c),r.appendChild(o),r.appendChild(l);const s=document.createElement("div");s.classList.add("menu_item");const p=document.createElement("div"),m=document.createElement("p"),u=document.createElement("p");m.innerText="Chicken Wings",u.innerText="50c / wing";const h=document.createElement("p");h.innerText="sweet & sour, creamy parmesan dip",p.appendChild(m),p.appendChild(u),s.appendChild(p),s.appendChild(h),d.appendChild(r),d.appendChild(s);const f=document.createElement("div"),v=document.createElement("p");f.innerText="Mains",f.appendChild(v);const C=document.createElement("div");C.classList.add("menu_item");const E=document.createElement("div"),b=document.createElement("p"),x=document.createElement("p");b.innerText="Krabby Patty Burger",x.innerText="$10";const g=document.createElement("p");g.innerText="crab meat, secret ingredient, buns, lettuce",E.appendChild(b),E.appendChild(x),C.appendChild(E),C.appendChild(g);const y=document.createElement("div");y.classList.add("menu_item");const T=document.createElement("div"),k=document.createElement("p"),L=document.createElement("p");k.innerText="Krabby Patty Burger",L.innerText="$10";const w=document.createElement("p");w.innerText="crab meat, secret ingredient, buns, lettuce",T.appendChild(k),T.appendChild(L),y.appendChild(T),y.appendChild(w),f.appendChild(C),f.appendChild(y);const _=document.createElement("div"),S=document.createElement("p");S.innerText="Mains",_.appendChild(S);const q=document.createElement("div");q.classList.add("menu_item");const F=document.createElement("div"),M=document.createElement("p"),A=document.createElement("p");M.innerText="New York Cheesecake",A.innerText="$1.5";const j=document.createElement("p");j.innerText="cheese, sugar, NY rats",F.appendChild(M),F.appendChild(A),q.appendChild(F),q.appendChild(j),_.appendChild(q);const D=document.createElement("div"),N=document.createElement("p");N.innerText="Salads",D.appendChild(N);const O=document.createElement("div");O.classList.add("menu_item");const P=document.createElement("div"),I=document.createElement("p"),$=document.createElement("p");I.innerText="Avocado Kale Salad",$.innerText="$20";const H=document.createElement("p");H.innerText="avocado, kale, grass, dressing",P.appendChild(I),P.appendChild($),O.appendChild(P),O.appendChild(H),D.appendChild(O);const z=document.createElement("div"),Z=document.createElement("p");Z.innerText="Drinks",z.appendChild(Z);const B=document.createElement("div");B.classList.add("menu_item");const R=document.createElement("div"),W=document.createElement("p"),K=document.createElement("p");W.innerText="Bellini",K.innerText="$3";const U=document.createElement("p");U.innerText="bacardi superior, peach schnapps, sparkling wine, peach and sangria",R.appendChild(W),R.appendChild(K),B.appendChild(R),B.appendChild(U);const Y=document.createElement("div");Y.classList.add("menu_item");const G=document.createElement("div"),J=document.createElement("p"),Q=document.createElement("p");J.innerText="Whiskey Sour",Q.innerText="$3";const V=document.createElement("p");V.innerText="jack daniel's tennessee whiskey, fresh lemon, lime, angostura bitters",G.appendChild(J),G.appendChild(Q),Y.appendChild(G),Y.appendChild(V),z.appendChild(B),z.appendChild(Y),t.appendChild(d),t.appendChild(f),t.appendChild(_),t.appendChild(D),t.appendChild(z),n.appendChild(t),e.appendChild(n)}(),f()})),n.appendChild(t),n.appendChild(d),n.appendChild(c),console.log("headers have been appended!"),e.appendChild(n)}(),f()})()})();