(()=>{"use strict";var n={56:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},72:n=>{var e=[];function t(n){for(var t=-1,r=0;r<e.length;r++)if(e[r].identifier===n){t=r;break}return t}function r(n,r){for(var a={},i=[],c=0;c<n.length;c++){var d=n[c],s=r.base?d[0]+r.base:d[0],l=a[s]||0,u="".concat(s," ").concat(l);a[s]=l+1;var p=t(u),f={css:d[1],media:d[2],sourceMap:d[3],supports:d[4],layer:d[5]};if(-1!==p)e[p].references++,e[p].updater(f);else{var m=o(f,r);r.byIndex=c,e.splice(c,0,{identifier:u,updater:m,references:1})}i.push(u)}return i}function o(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,o){var a=r(n=n||[],o=o||{});return function(n){n=n||[];for(var i=0;i<a.length;i++){var c=t(a[i]);e[c].references--}for(var d=r(n,o),s=0;s<a.length;s++){var l=t(a[s]);0===e[l].references&&(e[l].updater(),e.splice(l,1))}a=d}}},113:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}},249:(n,e,t)=>{t.d(e,{A:()=>m});var r=t(601),o=t.n(r),a=t(314),i=t.n(a),c=t(417),d=t.n(c),s=new URL(t(998),t.b),l=new URL(t(749),t.b),u=i()(o()),p=d()(s),f=d()(l);u.push([n.id,`main {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 70vh;\n}\n\n.add__card {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n\ninput {\n  margin: 10px;\n  padding: 10px;\n  border-radius: 10px;\n  width: 300px;\n  border: none;\n  border: 2px solid #d19bc8;\n  background-color: transparent;\n  color: #d19bc8;\n  &:focus {\n    outline: none;\n    border: 2px solid #d19bc8;\n    color: #d19bc8;\n  }\n}\n\nbutton {\n  margin: 10px;\n  padding: 10px;\n  border-radius: 10px;\n  width: 300px;\n  border: none;\n  border: 2px solid #d19bc8;\n  background-color: transparent;\n  color: #d19bc8;\n\n  &:hover {\n    cursor: pointer;\n    background-color: #d19bc8;\n    color: #fff;\n  }\n}\n\n/* стиили для карточек */\n\n.cards {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  align-items: center;\n}\n\n.to__do__mem {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  border: 1px solid #d19bc8;\n  border-radius: 10px;\n  padding: 10px;\n  margin: 10px;\n  width: 300px;\n  height: 400px;\n}\n\n.text__card {\n    margin-top: 15px;\n    font-size: 25px;\n\n  text-align: center;\n  color: #d19bc8;\n  word-break: break-all;\n\n}\n\n.to__do__mem .icon {\n  width: 30px;\n  height: 30px;\n  display: inline-block;\n  background-repeat: no-repeat;\n  background-size: contain;\n  transition: transform 200ms ease-in-out;\n}\n\n.img__card {\n  width: 200px;\n  height: 200px;\n}\n\n.like__card {\n  background-image: url(${p});\n  margin-bottom: 20px;\n \n\n\n  &:hover {\n    cursor: pointer;\n  }\n}\n\n.delete__card {\n  background-image: url(${f});\n  margin-top: 20px;\n  mix-blend-mode: multiply;\n  \n\n  \n\n  &:hover {\n    cursor: pointer;\n  }\n}\n\n.liked {\n  transform: scale(1.2);\n  border-radius: 100px 100px 150px 150px;\n  background-color: #d19bc8;\n\n  &:hover {\n    cursor: pointer;\n  }\n}\n`,""]);const m=u},314:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",r=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),r&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),r&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,r,o,a){"string"==typeof n&&(n=[[null,n,void 0]]);var i={};if(r)for(var c=0;c<this.length;c++){var d=this[c][0];null!=d&&(i[d]=!0)}for(var s=0;s<n.length;s++){var l=[].concat(n[s]);r&&i[l[0]]||(void 0!==a&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=a),t&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=t):l[2]=t),o&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=o):l[4]="".concat(o)),e.push(l))}},e}},417:n=>{n.exports=function(n,e){return e||(e={}),n?(n=String(n.__esModule?n.default:n),/^['"].*['"]$/.test(n)&&(n=n.slice(1,-1)),e.hash&&(n+=e.hash),/["'() \t\n]|(%20)/.test(n)||e.needQuotes?'"'.concat(n.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):n):n}},540:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},601:n=>{n.exports=function(n){return n[1]}},659:n=>{var e={};n.exports=function(n,t){var r=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},721:(n,e,t)=>{t.d(e,{A:()=>c});var r=t(601),o=t.n(r),a=t(314),i=t.n(a)()(o());i.push([n.id,"header {\n    display: flex;\n    justify-content: center;\n    padding: 20px;\n    text-align: center;\n}\n\nh1 {\n    color: #D19BC8;\n    font-size: 100px;\n    font-weight: bold;\n}",""]);const c=i},749:(n,e,t)=>{n.exports=t.p+"9b2d84a615486068141b.png"},825:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,o&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleTagTransform(r,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},919:(n,e,t)=>{t.d(e,{A:()=>u});var r=t(601),o=t.n(r),a=t(314),i=t.n(a),c=t(721),d=t(249),s=t(939),l=i()(o());l.i(c.A),l.i(d.A),l.i(s.A),l.push([n.id,"*{\n    padding: 0px;\n    margin:0px;\n    box-sizing: border-box;\n}\n\nbody{\n    background-color: #05283A;\n}",""]);const u=l},939:(n,e,t)=>{t.d(e,{A:()=>c});var r=t(601),o=t.n(r),a=t(314),i=t.n(a)()(o());i.push([n.id,"",""]);const c=i},998:(n,e,t)=>{n.exports=t.p+"d6d77dc370bca19af687.svg"}},e={};function t(r){var o=e[r];if(void 0!==o)return o.exports;var a=e[r]={id:r,exports:{}};return n[r](a,a.exports,t),a.exports}t.m=n,t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var r in e)t.o(e,r)&&!t.o(n,r)&&Object.defineProperty(n,r,{enumerable:!0,get:e[r]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),(()=>{var n;t.g.importScripts&&(n=t.g.location+"");var e=t.g.document;if(!n&&e&&(e.currentScript&&"SCRIPT"===e.currentScript.tagName.toUpperCase()&&(n=e.currentScript.src),!n)){var r=e.getElementsByTagName("script");if(r.length)for(var o=r.length-1;o>-1&&(!n||!/^http(s?):/.test(n));)n=r[o--].src}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/^blob:/,"").replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=n})(),t.b=document.baseURI||self.location.href,t.nc=void 0;var r=t(72),o=t.n(r),a=t(825),i=t.n(a),c=t(659),d=t.n(c),s=t(56),l=t.n(s),u=t(540),p=t.n(u),f=t(113),m=t.n(f),v=t(919),b={};b.styleTagTransform=m(),b.setAttributes=l(),b.insert=d().bind(null,"head"),b.domAPI=i(),b.insertStyleElement=p(),o()(v.A,b),v.A&&v.A.locals&&v.A.locals;var g=document.querySelector("#input__img"),h=document.querySelector("#input__text");document.querySelector("#add__to__do").addEventListener("click",(function(){""!==g.value.trim()&&""!==h.value.trim()?(createCard(g.value,h.value),g.value="",h.value=""):alert("Введите задачу")})),createCard=function(n,e){var t=document.querySelector("template").content.cloneNode(!0),r=t.querySelector(".to__do__mem"),o=r.querySelector(".img__card"),a=r.querySelector(".text__card");o.src=n,a.textContent=e,document.querySelector("body").appendChild(t),deleteCard(r),like(r)},like=function(n){var e=n.querySelector(".like__card");e.addEventListener("click",(function(){e.classList.toggle("liked")}))},deleteCard=function(n){n.querySelector(".delete__card").addEventListener("click",(function(){n.remove()}))}})();