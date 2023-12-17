(()=>{"use strict";var e={426:(e,n,t)=>{t.d(n,{Z:()=>c});var d=t(81),a=t.n(d),r=t(645),o=t.n(r)()(a());o.push([e.id,"/* http://meyerweb.com/eric/tools/css/reset/ \n   v2.0 | 20110126\n   License: none (public domain)\n*/\n\nhtml, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed, \nfigure, figcaption, footer, header, hgroup, \nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n\tmargin: 0;\n\tpadding: 0;\n\tborder: 0;\n\tfont-size: 100%;\n\tfont: inherit;\n\tvertical-align: baseline;\n}\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure, \nfooter, header, hgroup, menu, nav, section {\n\tdisplay: block;\n}\nbody {\n\tline-height: 1;\n}\nol, ul {\n\tlist-style: none;\n}\nblockquote, q {\n\tquotes: none;\n}\nblockquote:before, blockquote:after,\nq:before, q:after {\n\tcontent: '';\n\tcontent: none;\n}\ntable {\n\tborder-collapse: collapse;\n\tborder-spacing: 0;\n}\n\n/*======================================================================*/\n/* Implemented CSS begins here! */\n.footer_logos {\n    height: 50px;\n    width: 50px;\n}\n/*to do: time to add more styles*/",""]);const c=o},645:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",d=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),d&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),d&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,d,a,r){"string"==typeof e&&(e=[[null,e,void 0]]);var o={};if(d)for(var c=0;c<this.length;c++){var i=this[c][0];null!=i&&(o[i]=!0)}for(var l=0;l<e.length;l++){var s=[].concat(e[l]);d&&o[s[0]]||(void 0!==r&&(void 0===s[5]||(s[1]="@layer".concat(s[5].length>0?" ".concat(s[5]):""," {").concat(s[1],"}")),s[5]=r),t&&(s[2]?(s[1]="@media ".concat(s[2]," {").concat(s[1],"}"),s[2]=t):s[2]=t),a&&(s[4]?(s[1]="@supports (".concat(s[4],") {").concat(s[1],"}"),s[4]=a):s[4]="".concat(a)),n.push(s))}},n}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var n=[];function t(e){for(var t=-1,d=0;d<n.length;d++)if(n[d].identifier===e){t=d;break}return t}function d(e,d){for(var r={},o=[],c=0;c<e.length;c++){var i=e[c],l=d.base?i[0]+d.base:i[0],s=r[l]||0,p="".concat(l," ").concat(s);r[l]=s+1;var m=t(p),u={css:i[1],media:i[2],sourceMap:i[3],supports:i[4],layer:i[5]};if(-1!==m)n[m].references++,n[m].updater(u);else{var h=a(u,d);d.byIndex=c,n.splice(c,0,{identifier:p,updater:h,references:1})}o.push(p)}return o}function a(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,a){var r=d(e=e||[],a=a||{});return function(e){e=e||[];for(var o=0;o<r.length;o++){var c=t(r[o]);n[c].references--}for(var i=d(e,a),l=0;l<r.length;l++){var s=t(r[l]);0===n[s].references&&(n[s].updater(),n.splice(s,1))}r=i}}},569:e=>{var n={};e.exports=function(e,t){var d=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!d)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");d.appendChild(t)}},216:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},565:(e,n,t)=>{e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},795:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var d="";t.supports&&(d+="@supports (".concat(t.supports,") {")),t.media&&(d+="@media ".concat(t.media," {"));var a=void 0!==t.layer;a&&(d+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),d+=t.css,a&&(d+="}"),t.media&&(d+="}"),t.supports&&(d+="}");var r=t.sourceMap;r&&"undefined"!=typeof btoa&&(d+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(r))))," */")),n.styleTagTransform(d,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},589:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}}},n={};function t(d){var a=n[d];if(void 0!==a)return a.exports;var r=n[d]={id:d,exports:{}};return e[d](r,r.exports,t),r.exports}t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var d in n)t.o(n,d)&&!t.o(e,d)&&Object.defineProperty(e,d,{enumerable:!0,get:n[d]})},t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),t.nc=void 0,(()=>{var e=t(379),n=t.n(e),d=t(795),a=t.n(d),r=t(569),o=t.n(r),c=t(565),i=t.n(c),l=t(216),s=t.n(l),p=t(589),m=t.n(p),u=t(426),h={};function v(){const e=document.querySelector("#content"),n=document.createElement("div");n.classList.add("footer");const t=document.createElement("div"),d=document.createElement("div"),a=document.createElement("p");a.classList.add("footer_header"),a.innerText="Order Now";const r=document.createElement("div");f(r,"Delivery","Deals","Happy Hour","Drinks"),d.appendChild(a),d.appendChild(r);const o=document.createElement("div"),c=document.createElement("p");c.classList.add("footer_header"),c.innerText="About";const i=document.createElement("div");f(i,"Contact Us","Opening Hours","Locations"),o.appendChild(c),o.appendChild(i);const l=document.createElement("div"),s=document.createElement("div"),p=document.createElement("p");p.classList.add("footer_header"),p.innerText="Privacy Policy";const m=document.createElement("div");f(m,"Terms and Conditions","Cookies and Ads"),s.appendChild(p),s.appendChild(m);const u=document.createElement("div"),h=document.createElement("p");h.classList.add("footer_header"),h.innerText="Language";const v=document.createElement("div");f(v,"Francais"),u.appendChild(h),u.appendChild(v),l.appendChild(s),l.appendChild(u),t.appendChild(d),t.appendChild(o),t.appendChild(l);const E=document.createElement("div");C(E,"../images/github-mark.png"),C(E,"../images/igwhite.png");const b=document.createElement("p");b.innerText="We are not liable to any injuries or illnesses sustained from visiting one of our locations.",n.appendChild(t),n.appendChild(E),n.appendChild(b),e.appendChild(n)}function f(e,...n){for(let t=0;t<n.length;t++){const d=document.createElement("p");d.innerText=n[t],e.appendChild(d)}}function C(e,n){const t=document.createElement("a"),d=document.createElement("img");d.classList.add("footer_logos"),d.setAttribute("src",n),t.appendChild(d),e.appendChild(t)}h.styleTagTransform=m(),h.setAttributes=i(),h.insert=o().bind(null,"head"),h.domAPI=a(),h.insertStyleElement=s(),n()(u.Z,h),u.Z&&u.Z.locals&&u.Z.locals,function(){const e=document.querySelector("#content"),n=document.createElement("div");n.classList.add("header");const t=document.createElement("div");t.classList.add("header_content");const d=document.createElement("p");d.innerText="Tim's Diner",t.appendChild(d);const a=document.createElement("div");a.classList.add("header_menu");const r=document.createElement("p");r.innerText="Menus",a.appendChild(r);const o=document.createElement("p");o.innerText="Locations",a.appendChild(o);const c=document.createElement("p");c.innerText="Gift Cards",a.appendChild(c);const i=document.createElement("p");i.innerText="Careers",a.appendChild(i);const l=document.createElement("div");l.classList.add("header_order");const s=document.createElement("button"),p=document.createElement("p");p.innerText="ORDER NOW",s.setAttribute("id","orderButton"),s.addEventListener("click",(()=>{const n=document.querySelector(".footer");n&&e.removeChild(n);const t=document.querySelector(".main_sec");t&&e.removeChild(t),function(){const e=document.querySelector("#content"),n=document.createElement("div"),t=document.createElement("div");t.classList.add("main_sec");const d=document.createElement("div"),a=document.createElement("p");a.innerText="Appetizers",d.appendChild(a);const r=document.createElement("div");r.classList.add("menu_item");const o=document.createElement("div"),c=document.createElement("p"),i=document.createElement("p");c.innerText="Truffle Fries",i.innerText="$8";const l=document.createElement("p");l.innerText="truffle, herbs, grana padano, garlic aioli",o.appendChild(c),o.appendChild(i),r.appendChild(o),r.appendChild(l);const s=document.createElement("div");s.classList.add("menu_item");const p=document.createElement("div"),m=document.createElement("p"),u=document.createElement("p");m.innerText="Chicken Wings",u.innerText="50c / wing";const h=document.createElement("p");h.innerText="sweet & sour, creamy parmesan dip",p.appendChild(m),p.appendChild(u),s.appendChild(p),s.appendChild(h),d.appendChild(r),d.appendChild(s);const v=document.createElement("div"),f=document.createElement("p");v.innerText="Mains",v.appendChild(f);const C=document.createElement("div");C.classList.add("menu_item");const E=document.createElement("div"),b=document.createElement("p"),g=document.createElement("p");b.innerText="Krabby Patty Burger",g.innerText="$10";const x=document.createElement("p");x.innerText="crab meat, secret ingredient, buns, lettuce",E.appendChild(b),E.appendChild(g),C.appendChild(E),C.appendChild(x);const y=document.createElement("div");y.classList.add("menu_item");const T=document.createElement("div"),L=document.createElement("p"),k=document.createElement("p");L.innerText="Krabby Patty Burger",k.innerText="$10";const _=document.createElement("p");_.innerText="crab meat, secret ingredient, buns, lettuce",T.appendChild(L),T.appendChild(k),y.appendChild(T),y.appendChild(_),v.appendChild(C),v.appendChild(y);const w=document.createElement("div"),S=document.createElement("p");S.innerText="Mains",w.appendChild(S);const q=document.createElement("div");q.classList.add("menu_item");const M=document.createElement("div"),A=document.createElement("p"),N=document.createElement("p");A.innerText="New York Cheesecake",N.innerText="$1.5";const O=document.createElement("p");O.innerText="cheese, sugar, NY rats",M.appendChild(A),M.appendChild(N),q.appendChild(M),q.appendChild(O),w.appendChild(q);const P=document.createElement("div"),j=document.createElement("p");j.innerText="Salads",P.appendChild(j);const D=document.createElement("div");D.classList.add("menu_item");const I=document.createElement("div"),$=document.createElement("p"),H=document.createElement("p");$.innerText="Avocado Kale Salad",H.innerText="$20";const Z=document.createElement("p");Z.innerText="avocado, kale, grass, dressing",I.appendChild($),I.appendChild(H),D.appendChild(I),D.appendChild(Z),P.appendChild(D);const B=document.createElement("div"),F=document.createElement("p");F.innerText="Drinks",B.appendChild(F);const R=document.createElement("div");R.classList.add("menu_item");const W=document.createElement("div"),K=document.createElement("p"),U=document.createElement("p");K.innerText="Bellini",U.innerText="$3";const z=document.createElement("p");z.innerText="bacardi superior, peach schnapps, sparkling wine, peach and sangria",W.appendChild(K),W.appendChild(U),R.appendChild(W),R.appendChild(z);const Y=document.createElement("div");Y.classList.add("menu_item");const G=document.createElement("div"),J=document.createElement("p"),Q=document.createElement("p");J.innerText="Whiskey Sour",Q.innerText="$3";const V=document.createElement("p");V.innerText="jack daniel's tennessee whiskey, fresh lemon, lime, angostura bitters",G.appendChild(J),G.appendChild(Q),Y.appendChild(G),Y.appendChild(V),B.appendChild(R),B.appendChild(Y),t.appendChild(d),t.appendChild(v),t.appendChild(w),t.appendChild(P),t.appendChild(B),n.appendChild(t),e.appendChild(n)}(),v()})),s.appendChild(p),l.appendChild(s),n.appendChild(t),n.appendChild(a),n.appendChild(l),console.log("headers have been appended!"),e.appendChild(n)}(),v()})()})();