!function(e,o){"object"==typeof exports&&"object"==typeof module?module.exports=o():"function"==typeof define&&define.amd?define([],o):"object"==typeof exports?exports.mailgo=o():e.mailgo=o()}(window,(function(){return function(e){var o={};function a(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,a),n.l=!0,n.exports}return a.m=e,a.c=o,a.d=function(e,o,t){a.o(e,o)||Object.defineProperty(e,o,{enumerable:!0,get:t})},a.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,o){if(1&o&&(e=a(e)),8&o)return e;if(4&o&&"object"==typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(a.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&o&&"string"!=typeof e)for(var n in e)a.d(t,n,function(o){return e[o]}.bind(null,n));return t},a.n=function(e){var o=e&&e.__esModule?function(){return e.default}:function(){return e};return a.d(o,"a",o),o},a.o=function(e,o){return Object.prototype.hasOwnProperty.call(e,o)},a.p="",a(a.s=0)}([function(e,o,a){"use strict";!function(){function e(){var e=document.createElement("div");e.style.display="none",e.id="mailgo",e.classList.add("mailgo-modal");var o=document.createElement("div");o.className="mailgo-modal-background",e.appendChild(o);var a=document.createElement("div");a.className="mailgo-modal-content",e.appendChild(a);var t=document.createElement("strong");t.id="mailgo-title",t.className="mailgo-title",a.appendChild(t);var n=document.createElement("div");n.id="mailgo-details",n.className="mailgo-details";var i=document.createElement("p");i.id="mailgo-cc";var l=document.createElement("span");l.className="mailgo-weight-500";var d=document.createTextNode("cc ");l.appendChild(d);var r=document.createElement("span");r.id="mailgo-cc-value",i.appendChild(l),i.appendChild(r),n.appendChild(i);var c=document.createElement("p");c.id="mailgo-bcc";var m=document.createElement("span");m.className="mailgo-weight-500";var s=document.createTextNode("bcc ");m.appendChild(s);var p=document.createElement("span");p.id="mailgo-bcc-value",c.appendChild(m),c.appendChild(p),n.appendChild(c);var g=document.createElement("p");g.id="mailgo-subject";var u=document.createElement("span");u.className="mailgo-weight-500";var b=document.createTextNode("subject ");u.appendChild(b);var f=document.createElement("span");f.id="mailgo-subject-value",g.appendChild(u),g.appendChild(f),n.appendChild(g);var h=document.createElement("p");h.id="mailgo-body";var x=document.createElement("span");x.className="mailgo-weight-500";var y=document.createTextNode("body ");x.appendChild(y);var w=document.createElement("span");w.id="mailgo-body-value",h.appendChild(x),h.appendChild(w),n.appendChild(h),a.appendChild(n);var k=document.createElement("a");k.id="mailgo-gmail",k.href=v,k.classList.add("mailgo-open"),k.classList.add("mailgo-gmail");var C=document.createTextNode("open in ");k.appendChild(C);var E=document.createElement("span");E.className="mailgo-weight-500";var L=document.createTextNode("Gmail");E.appendChild(L),k.appendChild(E),a.appendChild(k);var N=document.createElement("a");N.id="mailgo-outlook",N.href=v,N.classList.add("mailgo-open"),N.classList.add("mailgo-outlook");var T=document.createTextNode("open in ");N.appendChild(T);var j=document.createElement("span");j.className="mailgo-weight-500";var A=document.createTextNode("Outlook");j.appendChild(A),N.appendChild(j),a.appendChild(N);var z=document.createElement("a");z.id="mailgo-open",z.href=v,z.classList.add("mailgo-open"),z.classList.add("mailgo-default");var S=document.createElement("span");S.className="mailgo-weight-500";var U=document.createTextNode("open");S.appendChild(U);var _=document.createTextNode(" default");z.appendChild(S),z.appendChild(_),a.appendChild(z);var I=document.createElement("a");I.id="mailgo-copy",I.href=v,I.classList.add("mailgo-copy"),I.classList.add("mailgo-weight-500");var M=document.createTextNode("copy");I.appendChild(M),a.appendChild(I);var O=document.createElement("a");O.href="https://mailgo.js.org?ref=mailgo-modal",O.className="mailgo-by",O.target="_blank",O.rel="noopener noreferrer";var W=document.createTextNode("mailgo.js.org");O.appendChild(W),a.appendChild(O),document.body.appendChild(e),o.addEventListener("click",R);var D=document.createElement("div");D.style.display="none",D.id="mailgo-tel",D.classList.add("mailgo-modal");var P=document.createElement("div");P.className="mailgo-modal-background",D.appendChild(P);var H=document.createElement("div");H.className="mailgo-modal-content",D.appendChild(H);var G=document.createElement("strong");G.id="mailgo-tel-title",G.className="mailgo-title",H.appendChild(G);var B=document.createElement("a");B.id="mailgo-telegram",B.href=v,B.classList.add("mailgo-open"),B.classList.add("mailgo-telegram"),B.style.display="none";var Z=document.createTextNode("open in ");B.appendChild(Z);var F=document.createElement("span");F.className="mailgo-weight-500";var $=document.createTextNode("Telegram");F.appendChild($),B.appendChild(F),H.appendChild(B);var q=document.createElement("a");q.id="mailgo-wa",q.href=v,q.classList.add("mailgo-open"),q.classList.add("mailgo-wa");var J=document.createTextNode("open in ");q.appendChild(J);var K=document.createElement("span");K.className="mailgo-weight-500";var Q=document.createTextNode("WhatsApp");K.appendChild(Q),q.appendChild(K),H.appendChild(q);var V=document.createElement("a");V.id="mailgo-skype",V.href=v,V.classList.add("mailgo-open"),V.classList.add("mailgo-skype");var X=document.createTextNode("open in ");V.appendChild(X);var Y=document.createElement("span");Y.className="mailgo-weight-500";var ee=document.createTextNode("Skype");Y.appendChild(ee),V.appendChild(Y),H.appendChild(V);var oe=document.createElement("a");oe.id="mailgo-call",oe.href=v,oe.classList.add("mailgo-open"),oe.classList.add("mailgo-default");var ae=document.createElement("span");ae.className="mailgo-weight-500";var te=document.createTextNode("call");ae.appendChild(te);var ne=document.createTextNode(" as default");oe.appendChild(ae),oe.appendChild(ne),H.appendChild(oe);var ie=document.createElement("a");ie.id="mailgo-tel-copy",ie.href=v,ie.classList.add("mailgo-copy"),ie.classList.add("mailgo-weight-500");var le=document.createTextNode("copy");ie.appendChild(le),H.appendChild(ie);var de=document.createElement("a");de.href="https://mailgo.js.org?ref=mailgo-modal",de.className="mailgo-by",de.target="_blank",de.rel="noopener noreferrer";var re=document.createTextNode("mailgo.js.org");de.appendChild(re),H.appendChild(de),document.body.appendChild(D),P.addEventListener("click",R)}function o(e,o){var a=0<arguments.length&&void 0!==e?e:f,t=1<arguments.length?o:void 0;if(a===f){if(t.href&&t.href.toLowerCase().startsWith(g)){y=decodeURIComponent(t.href.split("?")[0].split(g)[1].trim()),x=new URL(t.href);var n=new URLSearchParams(x.search);k=n.get("cc"),C=n.get("bcc"),E=n.get("subject"),L=n.get("body")}else y=t.getAttribute("data-address")+"@"+t.getAttribute("data-domain"),x=new URL(g+encodeURIComponent(y)),k=t.getAttribute("data-cc-address")+"@"+t.getAttribute("data-cc-domain"),C=t.getAttribute("data-bcc-address")+"@"+t.getAttribute("data-bcc-domain"),E=t.getAttribute("data-subject"),L=t.getAttribute("data-body");if(!P(y.split(",")))return;k&&!P(k.split(","))&&(k=""),C&&!P(C.split(","))&&(C="");var v=M("mailgo-title"),R=(M("mailgo-details"),M("mailgo-cc")),U=M("mailgo-cc-value"),_=M("mailgo-bcc"),O=M("mailgo-bcc-value"),D=M("mailgo-subject"),H=M("mailgo-subject-value"),G=M("mailgo-body"),B=M("mailgo-body-value");i=M("mailgo-gmail"),l=M("mailgo-outlook"),d=M("mailgo-open"),p=M("mailgo-copy"),v.innerHTML=y.split(",").join("<br/>"),k?(R.style.display="block",U.innerHTML=k.split(",").join("<br/>")):R.style.display="none",C?(_.style.display="block",O.innerHTML=C.split(",").join("<br/>")):_.style.display="none",E?(D.style.display="block",H.textContent=E):D.style.display="none",L?(G.style.display="block",B.textContent=L):G.style.display="none",i.addEventListener("click",(function(){return A.openGmail()})),l.addEventListener("click",(function(){return A.openOutlook()})),w=I(y),d.addEventListener("click",(function(){return A.openDefault()})),p.addEventListener("click",(function(){return A.copy(y||N)}))}if(a===h){t.href&&t.href.toLowerCase().startsWith(u)?N=decodeURIComponent(t.href.split("?")[0].split(u)[1].trim()):t.href&&t.href.toLowerCase().startsWith(b)?N=decodeURIComponent(t.href.split("?")[0].split(b)[1].trim()):t.hasAttribute("data-tel")&&(N=t.getAttribute("data-tel"),t.getAttribute("data-msg"));var Z=M("mailgo-tel-title");t.hasAttribute("data-telegram")&&(T=t.getAttribute("data-telegram")),t.hasAttribute("data-skype")&&(j=t.getAttribute("data-skype")),r=M("mailgo-telegram"),c=M("mailgo-wa"),m=M("mailgo-skype"),s=M("mailgo-call"),p=M("mailgo-tel-copy"),Z.innerHTML=N,c.addEventListener("click",(function(){return A.openWhatsApp()})),T&&(W("mailgo-telegram","block"),r.addEventListener("click",(function(){return A.openTelegram()}))),m.addEventListener("click",(function(){return A.openSkype()})),s.addEventListener("click",(function(){return A.callDefault()})),p.addEventListener("click",(function(){return A.copy(N)}))}S(a),document.addEventListener("keydown",z)}function a(e,o){var a=1<arguments.length&&void 0!==o?o:f;return a===f?e.href&&e.href.toLowerCase().startsWith(g)&&!e.classList.contains("no-mailgo")||e.hasAttribute("data-address")&&(e.href&&"#mailgo"===e.getAttribute("href").toLowerCase()||e.classList&&e.classList.contains("mailgo")):a===h&&(e.href&&(e.href.toLowerCase().startsWith(u)||e.href.toLowerCase().startsWith(b))&&!e.classList.contains("no-mailgo")||e.hasAttribute("data-tel")&&e.href&&"#mailgo"===e.getAttribute("href").toLowerCase()||e.classList&&e.classList.contains("mailgo"))}function t(e){if(document.contains(M("mailgo"))&&document.contains(M("mailgo-tel"))&&!U(f)&&!U(h)){var t=e.path||e.composedPath&&e.composedPath()||D(e.target);t&&t.forEach((function(t){if(!(t instanceof HTMLDocument||t instanceof Window))return a(t,f)?(e.preventDefault(),void o(f,t)):a(t,h)?(e.preventDefault(),void o(h,t)):void 0}))}}function n(e){return/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(e)}var i,l,d,r,c,m,s,p,g="mailto:",u="tel:",b="callto:",f="mail",h="tel",v="javascript:void(0);",x="",y="",w="",k="",C="",E="",L="",N="",T="",j="",A=function(){(void 0).openGmail=function(){var e="https://mail.google.com/mail/u/0/?view=cm&source=mailto&to="+encodeURIComponent(y);k&&(e=e.concat("&cc="+encodeURIComponent(k))),C&&(e=e.concat("&bcc="+encodeURIComponent(C))),E&&(e=e.concat("&subject="+E)),L&&(e=e.concat("&body="+L)),window.open(e,"_blank"),R()},(void 0).openOutlook=function(){var e="https://outlook.live.com/owa/?path=/mail/action/compose&to="+encodeURIComponent(y);E&&(e=e.concat("&subject="+E)),L&&(e=e.concat("&body="+L)),window.open(e,"_blank"),R()},(void 0).openDefault=function(){_(w),R()},(void 0).openTelegram=function(){var e="https://t.me/"+T;window.open(e,"_blank"),R()},(void 0).openSkype=function(){var e="skype:"+(""!==j?j:N);window.open(e,"_blank"),R()},(void 0).openWhatsApp=function(){var e="https://wa.me/"+N;window.open(e,"_blank"),R()},(void 0).callDefault=function(){var e="tel:"+N;window.open(e),R()},(void 0).copy=function(e){H(e),(p=U(f)?M("mailgo-copy"):M("mailgo-tel-copy")).textContent="copied",setTimeout((function(){p.textContent="copy",R()}),999)}},z=function(e){if(U(f))switch(e.keyCode){case 27:R();break;case 71:A().openGmail();break;case 79:A.openOutlook();break;case 32:case 13:A.openDefault();break;case 67:A.copy(y);break;default:return}else if(U(h))switch(e.keyCode){case 27:R();break;case 84:A.openTelegram();break;case 87:A.openWhatsApp();break;case 32:case 13:A.callDefault();break;case 67:A.copy(N);break;default:return}},S=function(e){var o=0<arguments.length&&void 0!==e?e:f;o!==f?o!==h||W("mailgo-tel","flex"):W("mailgo","flex")},R=function(){W("mailgo","none"),W("mailgo-tel","none"),document.removeEventListener("keydown",z)},U=function(e){var o=0<arguments.length&&void 0!==e?e:f;return o===f?"flex"===O("mailgo"):o===h&&"flex"===O("mailgo-tel")},_=function(e){return window.location.href=g+atob(e)},I=function(e){return btoa(e)},M=function(e){return document.getElementById(e)},O=function(e){return M(e).style.display},W=function(e,o){return M(e).style.display=o},D=function(e){for(var o=[];e;){if(o.push(e),"HTML"===e.tagName)return o.push(document),o.push(window),o;e=e.parentElement}},P=function(e){return e.every(n)},H=function(e){var o=document.createElement("textarea");o.value=e,o.setAttribute("readonly",""),o.style.position="absolute",o.style.left="-9999px",document.body.appendChild(o);var a=0<document.getSelection().rangeCount&&document.getSelection().getRangeAt(0);o.select(),document.execCommand("copy"),document.body.removeChild(o),a&&(document.getSelection().removeAllRanges(),document.getSelection().addRange(a))};!function(){if(window&&"undefined"!=typeof window){var o=document.createElement("style");o.id="mailgo-style",o.type="text/css";var a=document.createTextNode('.mailgo-modal{position:fixed;top:0;right:0;bottom:0;left:0;-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column;overflow:hidden;font-size:15px;z-index:10000}.mailgo-modal a,.mailgo-modal p,.mailgo-modal span,.mailgo-modal strong{margin:0;padding:0;font-size:100%;line-height:1;font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"}.mailgo-modal strong{font-weight:700}.mailgo-modal .mailgo-modal-background{position:absolute;z-index:10001;top:0;right:0;bottom:0;left:0;background-color:rgba(32,35,42,.75);opacity:.8}.mailgo-modal .mailgo-modal-content{position:relative;z-index:10002;-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;text-align:center;min-width:200px;max-width:240px;background-color:#fff;opacity:.97;-webkit-border-radius:8px;-moz-border-radius:8px;border-radius:8px;-webkit-box-shadow:0 3px 20px rgba(32,35,42,.5);-moz-box-shadow:0 3px 20px rgba(32,35,42,.5);box-shadow:0 3px 20px rgba(32,35,42,.5);color:#4a4a4a;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column;overflow:auto;padding:20px;-webkit-transition:.5s -webkit-box-shadow;transition:.5s -webkit-box-shadow;-o-transition:.5s box-shadow;-moz-transition:.5s box-shadow,.5s -moz-box-shadow;transition:.5s box-shadow;transition:.5s box-shadow,.5s -webkit-box-shadow,.5s -moz-box-shadow}.mailgo-modal .mailgo-modal-content:hover{opacity:1;-webkit-box-shadow:0 7px 20px rgba(32,35,42,.85);-moz-box-shadow:0 7px 20px rgba(32,35,42,.85);box-shadow:0 7px 20px rgba(32,35,42,.85)}.mailgo-modal .mailgo-modal-content .mailgo-title{margin-bottom:8px;overflow:hidden;white-space:nowrap;-o-text-overflow:ellipsis;text-overflow:ellipsis}.mailgo-modal .mailgo-modal-content .mailgo-details{margin-bottom:10px}.mailgo-modal .mailgo-modal-content .mailgo-details p{font-size:12px;margin-top:3px;margin-bottom:3px}.mailgo-modal .mailgo-modal-content a{padding:10px;color:#4a4a4a;-webkit-border-radius:5px;-moz-border-radius:5px;border-radius:5px;text-decoration:none}.mailgo-modal .mailgo-modal-content a.mailgo-gmail{color:#d44638}.mailgo-modal .mailgo-modal-content a.mailgo-outlook{color:#0072c6}.mailgo-modal .mailgo-modal-content a.mailgo-wa{color:#00bfa5}.mailgo-modal .mailgo-modal-content a.mailgo-telegram{color:#08c}.mailgo-modal .mailgo-modal-content a.mailgo-skype{color:#00aff0}.mailgo-modal .mailgo-modal-content a.mailgo-copy{padding:16px 10px;font-size:16px}.mailgo-modal .mailgo-modal-content a.mailgo-copy:hover,.mailgo-modal .mailgo-modal-content a.mailgo-default:hover{background-color:rgba(0,0,0,.08);color:#4a4a4a}.mailgo-modal .mailgo-modal-content a.mailgo-gmail:hover{background-color:rgba(212,70,56,.08);color:#d44638}.mailgo-modal .mailgo-modal-content a.mailgo-outlook:hover{background-color:rgba(0,114,198,.08);color:#0072c6}.mailgo-modal .mailgo-modal-content a.mailgo-telegram:hover{background-color:rgba(0,114,198,.08);color:#08c}.mailgo-modal .mailgo-modal-content a.mailgo-wa:hover{background-color:rgba(0,191,165,.08);color:#00bfa5}.mailgo-modal .mailgo-modal-content a.mailgo-skype:hover{background-color:rgba(0,175,240,.08);color:#00aff0}.mailgo-modal .mailgo-modal-content a.mailgo-by{font-size:8px;margin-top:.8rem;padding:5px;color:#4a4a4a;opacity:.5}.mailgo-modal .mailgo-modal-content a.mailgo-by:hover{opacity:1}.mailgo-modal .mailgo-modal-content .mailgo-weight-500{font-weight:500}');o.appendChild(a),document.head.appendChild(o),document.addEventListener("DOMContentLoaded",e),document.addEventListener("click",t)}}()}()}])}));