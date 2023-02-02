(()=>{"use strict";var e,n,r,t={5426:(e,n,r)=>{r.d(n,{Z:()=>ne});var t=r(8081),o=r.n(t),a=r(3645),i=r.n(a),s=r(8184),f=r(1667),l=r.n(f),c=new URL(r(4468),r.b),d=new URL(r(5810),r.b),p=new URL(r(3683),r.b),m=new URL(r(9764),r.b),u=new URL(r(3847),r.b),b=new URL(r(7988),r.b),h=new URL(r(6254),r.b),g=new URL(r(8574),r.b),w=new URL(r(9159),r.b),v=new URL(r(5433),r.b),y=new URL(r(8125),r.b),x=new URL(r(6969),r.b),L=new URL(r(7559),r.b),S=new URL(r(4046),r.b),M=new URL(r(6500),r.b),R=new URL(r(2049),r.b),O=new URL(r(642),r.b),U=new URL(r(5694),r.b),E=new URL(r(9695),r.b),k=new URL(r(1758),r.b),j=i()(o());j.i(s.Z);var A=l()(c),_=l()(c,{hash:"?#iefix"}),I=l()(d),z=l()(p),B=l()(m),P=l()(u,{hash:"#Montserrat"}),T=l()(b),C=l()(b,{hash:"?#iefix"}),H=l()(h),N=l()(g),Z=l()(w),$=l()(v,{hash:"#Montserrat"}),q=l()(y),F=l()(y,{hash:"?#iefix"}),D=l()(x),G=l()(L),J=l()(S),K=l()(M,{hash:"#Montserrat"}),Q=l()(R),V=l()(R,{hash:"?#iefix"}),W=l()(O),X=l()(U),Y=l()(E),ee=l()(k,{hash:"#Roboto"});j.push([e.id,"/* montserrat-100 - latin */\n@font-face {\n    font-family: 'Montserrat';\n    font-style: normal;\n    font-weight: 100;\n    src: url("+A+"); /* IE9 Compat Modes */\n    src: local(''),\n            url("+_+") format('embedded-opentype'), /* IE6-IE8 */\n            url("+I+") format('woff2'), /* Super Modern Browsers */\n            url("+z+") format('woff'), /* Modern Browsers */\n            url("+B+") format('truetype'), /* Safari, Android, iOS */\n            url("+P+") format('svg'); /* Legacy iOS */\n}\n/* montserrat-regular - latin */\n@font-face {\n    font-family: 'Montserrat';\n    font-style: normal;\n    font-weight: 400;\n    src: url("+T+"); /* IE9 Compat Modes */\n    src: local(''),\n            url("+C+") format('embedded-opentype'), /* IE6-IE8 */\n            url("+H+") format('woff2'), /* Super Modern Browsers */\n            url("+N+") format('woff'), /* Modern Browsers */\n            url("+Z+") format('truetype'), /* Safari, Android, iOS */\n            url("+$+") format('svg'); /* Legacy iOS */\n}\n/* montserrat-700 - latin */\n@font-face {\n    font-family: 'Montserrat';\n    font-style: normal;\n    font-weight: 700;\n    src: url("+q+"); /* IE9 Compat Modes */\n    src: local(''),\n            url("+F+") format('embedded-opentype'), /* IE6-IE8 */\n            url("+D+") format('woff2'), /* Super Modern Browsers */\n            url("+G+") format('woff'), /* Modern Browsers */\n            url("+J+") format('truetype'), /* Safari, Android, iOS */\n            url("+K+") format('svg'); /* Legacy iOS */\n}\n/* roboto-regular - latin */\n@font-face {\n    font-family: 'Roboto';\n    font-style: normal;\n    font-weight: 400;\n    src: url("+Q+"); /* IE9 Compat Modes */\n    src: local(''),\n            url("+V+") format('embedded-opentype'), /* IE6-IE8 */\n            url("+W+") format('woff2'), /* Super Modern Browsers */\n            url("+X+") format('woff'), /* Modern Browsers */\n            url("+Y+") format('truetype'), /* Safari, Android, iOS */\n            url("+ee+') format(\'svg\'); /* Legacy iOS */\n}\n\n/* https://www.w3schools.com/css/css3_box-sizing.asp */\n* {\n    box-sizing: border-box;\n}\n\nhtml {\n    width: 100%;\n    height: 100%;\n}\n\n\nbody {\n    background-color: black;\n    color:azure;\n    font-family: "Montserrat", "proxima-nova", "Helvetica Neue", Helvetica, Arial, sans-serif;\n    display: flex;\n    flex-direction: column;\n    place-content: center;\n    min-height: 100vh;\n    margin: 0;\n    /* position: relative; */\n}\n\na {\n    color: #a8a6a1;\n    font-family: "Roboto", "proxima-nova", "Helvetica Neue", Helvetica, Arial, sans-serif;\n}\n\nh1,h2,h3,h4 {\n    font-family: "Montserrat", "proxima-nova", "Helvetica Neue", Helvetica, Arial, sans-serif;\n    line-height: 1.2em;\n    font-family: Montserrat;\n    font-weight: 400;\n    font-style: normal;\n    letter-spacing: 0em;\n    text-transform: none;\n    line-height: 1.4em;\n    /* font-size: 2rem; */\n}\n\nh1 {font-size: 1rem;}\nh2 {font-size: 1.5rem;}\nh3 {font-size: 2rem;}\nh4 {font-size: 4rem;}\n\n\n#volume_demos {\n    justify-content: center;\n    margin-top: 20vh;\n    margin-bottom: 20vh;\n}\n#volume_thumbnails {\n    display: flex;\n    flex-wrap: wrap;\n    gap: 8px;\n    justify-content: center;\n}\n\n.volume_thumbnail {\n    display: grid;\n    grid-template-rows: 1fr auto;\n    grid-auto-rows: minmax(50px, auto);\n    border: 2px solid grey;\n    /* border-radius: 10px; */\n    place-items: center;\n    place-content: center;\n}\n\n.volume_thumbnail a{\n    display: flex;\n    place-content: center;\n    border: 1px solid silver;\n    width: 100%;\n    height: 100%;\n    background-color: #111111;\n    font-family: "Montserrat", "proxima-nova", "Helvetica Neue", Helvetica, Arial, sans-serif;\n    text-decoration: none;\n}\n\n\n.contact {\n    grid-area: ct;\n}\n\n.description {\n    grid-area: ds;\n}\n\n.about {\n\n    grid-area: ab;\n}\n\n.copyright {\n    grid-area: cr;\n    text-align: center;\n}\n\n.footer {\n    margin-top: auto;\n    display: grid;\n    grid-area: footer-area;\n    /* place-items: center; */\n    justify-items: center;\n    align-items: start;\n    background-color: #111111;\n    text-align: left;\n    font-size: 0.8rem;\n    font-weight: 100;\n    grid-template-columns: repeat(3, 1fr);\n    grid-auto-rows: minmax(50px, auto);\n    grid-template-areas:\n      "ct ab ds"\n      "cr cr cr";\n}\n\n@media only screen and (max-width: 768px) {\n    .footer {\n    justify-items: left;\n    grid-template-columns: 1fr 8fr 1fr;\n    grid-template-areas:\n      ". ct ."\n      ". ab ."\n      ". ds ."\n      ". cr .";\n    }\n}\n\n.footer h3{\n    font-size: 1rem;\n    margin-bottom: 0;\n}\n\n.footer a {\n    font-weight: 100;\n    font-size: 0.75rem;\n}\n\n.footer ul{\n    margin-top: 0;\n    list-style: none;\n    padding: 0;\n}',""]);const ne=j},7738:(e,n,r)=>{var t=r(3379),o=r.n(t),a=r(7795),i=r.n(a),s=r(569),f=r.n(s),l=r(3565),c=r.n(l),d=r(9216),p=r.n(d),m=r(4589),u=r.n(m),b=r(5426),h={};h.styleTagTransform=u(),h.setAttributes=c(),h.insert=f().bind(null,"head"),h.domAPI=i(),h.insertStyleElement=p(),o()(b.Z,h),b.Z&&b.Z.locals&&b.Z.locals,r(2247);const g=new URLSearchParams(window.location.search).get("id");Promise.all([r.e(949),r.e(718),r.e(348)]).then(r.bind(r,2348)).then((e=>e.init(g)))},4468:(e,n,r)=>{e.exports=r.p+"57aa6f9687748ae992ec.eot"},3847:(e,n,r)=>{e.exports=r.p+"608bed77db71c77c75c0.svg"},9764:(e,n,r)=>{e.exports=r.p+"9ba49716ee4dfeae851c.ttf"},3683:(e,n,r)=>{e.exports=r.p+"ded830b177e96d29e2af.woff"},5810:(e,n,r)=>{e.exports=r.p+"0eb7192dfac4c4f54c88.woff2"},8125:(e,n,r)=>{e.exports=r.p+"529a322078da3b51d132.eot"},6500:(e,n,r)=>{e.exports=r.p+"fac85a3030008d30b0b8.svg"},4046:(e,n,r)=>{e.exports=r.p+"3f5b876175be4a08f03a.ttf"},7559:(e,n,r)=>{e.exports=r.p+"49404dd4323f8b0d04ff.woff"},6969:(e,n,r)=>{e.exports=r.p+"686bda13a6c973520c20.woff2"},7988:(e,n,r)=>{e.exports=r.p+"af48efb77783b5e67d88.eot"},5433:(e,n,r)=>{e.exports=r.p+"22d8566c41c8d731931b.svg"},9159:(e,n,r)=>{e.exports=r.p+"81e8a75b2a1ac3a76c06.ttf"},8574:(e,n,r)=>{e.exports=r.p+"97471a283f288b915d94.woff"},6254:(e,n,r)=>{e.exports=r.p+"b07bcc994632839adaff.woff2"},2049:(e,n,r)=>{e.exports=r.p+"160fbc69802809bdb0ef.eot"},1758:(e,n,r)=>{e.exports=r.p+"4f862c8ba4ed785461ee.svg"},9695:(e,n,r)=>{e.exports=r.p+"69358f64aea6fd09499a.ttf"},5694:(e,n,r)=>{e.exports=r.p+"9b78ea3bc4f00e508f01.woff"},642:(e,n,r)=>{e.exports=r.p+"4673b4537a84c7f7a130.woff2"}},o={};function a(e){var n=o[e];if(void 0!==n)return n.exports;var r=o[e]={id:e,exports:{}};return t[e].call(r.exports,r,r.exports,a),r.exports}a.m=t,e=[],a.O=(n,r,t,o)=>{if(!r){var i=1/0;for(c=0;c<e.length;c++){for(var[r,t,o]=e[c],s=!0,f=0;f<r.length;f++)(!1&o||i>=o)&&Object.keys(a.O).every((e=>a.O[e](r[f])))?r.splice(f--,1):(s=!1,o<i&&(i=o));if(s){e.splice(c--,1);var l=t();void 0!==l&&(n=l)}}return n}o=o||0;for(var c=e.length;c>0&&e[c-1][2]>o;c--)e[c]=e[c-1];e[c]=[r,t,o]},a.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return a.d(n,{a:n}),n},a.d=(e,n)=>{for(var r in n)a.o(n,r)&&!a.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})},a.f={},a.e=e=>Promise.all(Object.keys(a.f).reduce(((n,r)=>(a.f[r](e,n),n)),[])),a.u=e=>e+".bundle.js",a.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),a.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),n={},r="dimension-stream.github.io:",a.l=(e,t,o,i)=>{if(n[e])n[e].push(t);else{var s,f;if(void 0!==o)for(var l=document.getElementsByTagName("script"),c=0;c<l.length;c++){var d=l[c];if(d.getAttribute("src")==e||d.getAttribute("data-webpack")==r+o){s=d;break}}s||(f=!0,(s=document.createElement("script")).charset="utf-8",s.timeout=120,a.nc&&s.setAttribute("nonce",a.nc),s.setAttribute("data-webpack",r+o),s.src=e),n[e]=[t];var p=(r,t)=>{s.onerror=s.onload=null,clearTimeout(m);var o=n[e];if(delete n[e],s.parentNode&&s.parentNode.removeChild(s),o&&o.forEach((e=>e(t))),r)return r(t)},m=setTimeout(p.bind(null,void 0,{type:"timeout",target:s}),12e4);s.onerror=p.bind(null,s.onerror),s.onload=p.bind(null,s.onload),f&&document.head.appendChild(s)}},a.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{var e;a.g.importScripts&&(e=a.g.location+"");var n=a.g.document;if(!e&&n&&(n.currentScript&&(e=n.currentScript.src),!e)){var r=n.getElementsByTagName("script");r.length&&(e=r[r.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),a.p=e})(),(()=>{a.b=document.baseURI||self.location.href;var e={995:0};a.f.j=(n,r)=>{var t=a.o(e,n)?e[n]:void 0;if(0!==t)if(t)r.push(t[2]);else{var o=new Promise(((r,o)=>t=e[n]=[r,o]));r.push(t[2]=o);var i=a.p+a.u(n),s=new Error;a.l(i,(r=>{if(a.o(e,n)&&(0!==(t=e[n])&&(e[n]=void 0),t)){var o=r&&("load"===r.type?"missing":r.type),i=r&&r.target&&r.target.src;s.message="Loading chunk "+n+" failed.\n("+o+": "+i+")",s.name="ChunkLoadError",s.type=o,s.request=i,t[1](s)}}),"chunk-"+n,n)}},a.O.j=n=>0===e[n];var n=(n,r)=>{var t,o,[i,s,f]=r,l=0;if(i.some((n=>0!==e[n]))){for(t in s)a.o(s,t)&&(a.m[t]=s[t]);if(f)var c=f(a)}for(n&&n(r);l<i.length;l++)o=i[l],a.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return a.O(c)},r=self.webpackChunkdimension_stream_github_io=self.webpackChunkdimension_stream_github_io||[];r.forEach(n.bind(null,0)),r.push=n.bind(null,r.push.bind(r))})(),a.nc=void 0;var i=a.O(void 0,[247],(()=>a(7738)));i=a.O(i)})();