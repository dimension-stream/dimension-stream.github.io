(()=>{"use strict";var e,n,t,r={5426:(e,n,t)=>{t.d(n,{Z:()=>ne});var r=t(8081),o=t.n(r),a=t(3645),i=t.n(a),s=t(8184),l=t(1667),f=t.n(l),c=new URL(t(4468),t.b),d=new URL(t(5810),t.b),p=new URL(t(3683),t.b),m=new URL(t(9764),t.b),u=new URL(t(3847),t.b),b=new URL(t(7988),t.b),h=new URL(t(6254),t.b),g=new URL(t(8574),t.b),w=new URL(t(9159),t.b),v=new URL(t(5433),t.b),y=new URL(t(8125),t.b),x=new URL(t(6969),t.b),L=new URL(t(7559),t.b),M=new URL(t(4046),t.b),S=new URL(t(6500),t.b),R=new URL(t(2049),t.b),O=new URL(t(642),t.b),E=new URL(t(5694),t.b),U=new URL(t(9695),t.b),_=new URL(t(1758),t.b),j=i()(o());j.i(s.Z);var k=f()(c),A=f()(c,{hash:"?#iefix"}),I=f()(d),z=f()(p),H=f()(m),B=f()(u,{hash:"#Montserrat"}),N=f()(b),P=f()(b,{hash:"?#iefix"}),T=f()(h),C=f()(g),Z=f()(w),$=f()(v,{hash:"#Montserrat"}),q=f()(y),D=f()(y,{hash:"?#iefix"}),F=f()(x),G=f()(L),J=f()(M),K=f()(S,{hash:"#Montserrat"}),Q=f()(R),V=f()(R,{hash:"?#iefix"}),W=f()(O),X=f()(E),Y=f()(U),ee=f()(_,{hash:"#Roboto"});j.push([e.id,"/* montserrat-100 - latin */\n@font-face {\n    font-family: 'Montserrat';\n    font-style: normal;\n    font-weight: 100;\n    src: url("+k+"); /* IE9 Compat Modes */\n    src: local(''),\n            url("+A+") format('embedded-opentype'), /* IE6-IE8 */\n            url("+I+") format('woff2'), /* Super Modern Browsers */\n            url("+z+") format('woff'), /* Modern Browsers */\n            url("+H+") format('truetype'), /* Safari, Android, iOS */\n            url("+B+") format('svg'); /* Legacy iOS */\n}\n/* montserrat-regular - latin */\n@font-face {\n    font-family: 'Montserrat';\n    font-style: normal;\n    font-weight: 400;\n    src: url("+N+"); /* IE9 Compat Modes */\n    src: local(''),\n            url("+P+") format('embedded-opentype'), /* IE6-IE8 */\n            url("+T+") format('woff2'), /* Super Modern Browsers */\n            url("+C+") format('woff'), /* Modern Browsers */\n            url("+Z+") format('truetype'), /* Safari, Android, iOS */\n            url("+$+") format('svg'); /* Legacy iOS */\n}\n/* montserrat-700 - latin */\n@font-face {\n    font-family: 'Montserrat';\n    font-style: normal;\n    font-weight: 700;\n    src: url("+q+"); /* IE9 Compat Modes */\n    src: local(''),\n            url("+D+") format('embedded-opentype'), /* IE6-IE8 */\n            url("+F+") format('woff2'), /* Super Modern Browsers */\n            url("+G+") format('woff'), /* Modern Browsers */\n            url("+J+") format('truetype'), /* Safari, Android, iOS */\n            url("+K+") format('svg'); /* Legacy iOS */\n}\n/* roboto-regular - latin */\n@font-face {\n    font-family: 'Roboto';\n    font-style: normal;\n    font-weight: 400;\n    src: url("+Q+"); /* IE9 Compat Modes */\n    src: local(''),\n            url("+V+") format('embedded-opentype'), /* IE6-IE8 */\n            url("+W+") format('woff2'), /* Super Modern Browsers */\n            url("+X+") format('woff'), /* Modern Browsers */\n            url("+Y+") format('truetype'), /* Safari, Android, iOS */\n            url("+ee+') format(\'svg\'); /* Legacy iOS */\n}\n\n/* https://www.w3schools.com/css/css3_box-sizing.asp */\n* {\n    box-sizing: border-box;\n}\n\nhtml {\n    width: 100%;\n    height: 100%;\n}\n\n\nbody {\n    background-color: black;\n    color:azure;\n    font-family: "Montserrat", "proxima-nova", "Helvetica Neue", Helvetica, Arial, sans-serif;\n    display: flex;\n    flex-direction: column;\n    place-content: center;\n    min-height: 100vh;\n    margin: 0;\n    /* position: relative; */\n}\n\na {\n    color: #a8a6a1;\n    font-family: "Roboto", "proxima-nova", "Helvetica Neue", Helvetica, Arial, sans-serif;\n}\n\nh1,h2,h3,h4 {\n    font-family: "Montserrat", "proxima-nova", "Helvetica Neue", Helvetica, Arial, sans-serif;\n    line-height: 1.2em;\n    font-family: Montserrat;\n    font-weight: 400;\n    font-style: normal;\n    letter-spacing: 0em;\n    text-transform: none;\n    line-height: 1.4em;\n    /* font-size: 2rem; */\n}\n\nh1 {font-size: 1rem;}\nh2 {font-size: 1.5rem;}\nh3 {font-size: 2rem;}\nh4 {font-size: 4rem;}\n\n\n#volume_demos {\n    justify-content: center;\n    margin-top: 10vh;\n    margin-bottom: 20vh;\n}\n#volume_thumbnails {\n    display: flex;\n    flex-wrap: wrap;\n    gap: 8px;\n    justify-content: center;\n}\n#other_thumbnails {\n    display: flex;\n    flex-wrap: wrap;\n    gap: 8px;\n    justify-content: center;\n}\n\n.volume_thumbnail {\n    display: grid;\n    grid-template-rows: 1fr auto;\n    grid-auto-rows: minmax(50px, auto);\n    border: 2px solid grey;\n    /* border-radius: 10px; */\n    place-items: start center;\n    place-content: center;\n}\n\n.volume_thumbnail a{\n    display: flex;\n    top:50%;\n    justify-content: center;\n    place-content: center;\n    border: 1px solid silver;\n    width: 100%;\n    height: 100%; \n    background-color: #111111;\n    font-family: "Montserrat", "proxima-nova", "Helvetica Neue", Helvetica, Arial, sans-serif;\n    text-decoration: none;\n}\n\n.volume_thumbnail b{\n    word-wrap: break-word;\n    place-content: center;\n    width: 230px;\n    height: 100%; \n    font-family: "Montserrat", "proxima-nova", "Helvetica Neue", Helvetica, Arial, sans-serif;\n    font-style: normal;\n    font-weight: 400;\n}\n\n.volume_thumbnail ul{\n    place-content: right;\n    font-size: 0.5rem;\n    list-style: none;\n    font-family: "Montserrat", "proxima-nova", "Helvetica Neue", Helvetica, Arial, sans-serif;\n    font-style: normal;\n    font-weight: 400;\n}\n\n.contact {\n    grid-area: ct;\n}\n\n.description {\n    grid-area: ds;\n}\n\n.about {\n\n    grid-area: ab;\n}\n\n.copyright {\n    grid-area: cr;\n    text-align: center;\n}\n\n.footer {\n    margin-top: auto;\n    display: grid;\n    grid-area: footer-area;\n    /* place-items: center; */\n    justify-items: center;\n    align-items: start;\n    background-color: #111111;\n    text-align: left;\n    font-size: 0.8rem;\n    font-weight: 100;\n    grid-template-columns: repeat(3, 1fr);\n    grid-auto-rows: minmax(50px, auto);\n    grid-template-areas:\n      "ct ab ds"\n      "cr cr cr";\n}\n\n@media only screen and (max-width: 768px) {\n    .footer {\n    justify-items: left;\n    grid-template-columns: 1fr 8fr 1fr;\n    grid-template-areas:\n      ". ct ."\n      ". ab ."\n      ". ds ."\n      ". cr .";\n    }\n}\n\n.footer h3{\n    font-size: 1rem;\n    margin-bottom: 0;\n}\n\n.footer a {\n    font-weight: 100;\n    font-size: 0.75rem;\n}\n\n.footer ul{\n    margin-top: 0;\n    list-style: none;\n    padding: 0;\n}\n',""]);const ne=j},7367:(e,n,t)=>{var r=t(3379),o=t.n(r),a=t(7795),i=t.n(a),s=t(569),l=t.n(s),f=t(3565),c=t.n(f),d=t(9216),p=t.n(d),m=t(4589),u=t.n(m),b=t(5426),h={};h.styleTagTransform=u(),h.setAttributes=c(),h.insert=l().bind(null,"head"),h.domAPI=i(),h.insertStyleElement=p(),o()(b.Z,h),b.Z&&b.Z.locals&&b.Z.locals,t(2247);const g=new URLSearchParams(window.location.search).get("id");Promise.all([t.e(950),t.e(413),t.e(64),t.e(701),t.e(231)]).then(t.bind(t,2231)).then((e=>e.init(g)))},4468:(e,n,t)=>{e.exports=t.p+"57aa6f9687748ae992ec.eot"},3847:(e,n,t)=>{e.exports=t.p+"608bed77db71c77c75c0.svg"},9764:(e,n,t)=>{e.exports=t.p+"9ba49716ee4dfeae851c.ttf"},3683:(e,n,t)=>{e.exports=t.p+"ded830b177e96d29e2af.woff"},5810:(e,n,t)=>{e.exports=t.p+"0eb7192dfac4c4f54c88.woff2"},8125:(e,n,t)=>{e.exports=t.p+"529a322078da3b51d132.eot"},6500:(e,n,t)=>{e.exports=t.p+"fac85a3030008d30b0b8.svg"},4046:(e,n,t)=>{e.exports=t.p+"3f5b876175be4a08f03a.ttf"},7559:(e,n,t)=>{e.exports=t.p+"49404dd4323f8b0d04ff.woff"},6969:(e,n,t)=>{e.exports=t.p+"686bda13a6c973520c20.woff2"},7988:(e,n,t)=>{e.exports=t.p+"af48efb77783b5e67d88.eot"},5433:(e,n,t)=>{e.exports=t.p+"22d8566c41c8d731931b.svg"},9159:(e,n,t)=>{e.exports=t.p+"81e8a75b2a1ac3a76c06.ttf"},8574:(e,n,t)=>{e.exports=t.p+"97471a283f288b915d94.woff"},6254:(e,n,t)=>{e.exports=t.p+"b07bcc994632839adaff.woff2"},2049:(e,n,t)=>{e.exports=t.p+"160fbc69802809bdb0ef.eot"},1758:(e,n,t)=>{e.exports=t.p+"4f862c8ba4ed785461ee.svg"},9695:(e,n,t)=>{e.exports=t.p+"69358f64aea6fd09499a.ttf"},5694:(e,n,t)=>{e.exports=t.p+"9b78ea3bc4f00e508f01.woff"},642:(e,n,t)=>{e.exports=t.p+"4673b4537a84c7f7a130.woff2"}},o={};function a(e){var n=o[e];if(void 0!==n)return n.exports;var t=o[e]={id:e,loaded:!1,exports:{}};return r[e].call(t.exports,t,t.exports,a),t.loaded=!0,t.exports}a.m=r,a.amdD=function(){throw new Error("define cannot be used indirect")},a.amdO={},e=[],a.O=(n,t,r,o)=>{if(!t){var i=1/0;for(c=0;c<e.length;c++){for(var[t,r,o]=e[c],s=!0,l=0;l<t.length;l++)(!1&o||i>=o)&&Object.keys(a.O).every((e=>a.O[e](t[l])))?t.splice(l--,1):(s=!1,o<i&&(i=o));if(s){e.splice(c--,1);var f=r();void 0!==f&&(n=f)}}return n}o=o||0;for(var c=e.length;c>0&&e[c-1][2]>o;c--)e[c]=e[c-1];e[c]=[t,r,o]},a.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return a.d(n,{a:n}),n},a.d=(e,n)=>{for(var t in n)a.o(n,t)&&!a.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:n[t]})},a.f={},a.e=e=>Promise.all(Object.keys(a.f).reduce(((n,t)=>(a.f[t](e,n),n)),[])),a.u=e=>e+".bundle.js",a.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),a.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),n={},t="dimension-stream.github.io:",a.l=(e,r,o,i)=>{if(n[e])n[e].push(r);else{var s,l;if(void 0!==o)for(var f=document.getElementsByTagName("script"),c=0;c<f.length;c++){var d=f[c];if(d.getAttribute("src")==e||d.getAttribute("data-webpack")==t+o){s=d;break}}s||(l=!0,(s=document.createElement("script")).charset="utf-8",s.timeout=120,a.nc&&s.setAttribute("nonce",a.nc),s.setAttribute("data-webpack",t+o),s.src=e),n[e]=[r];var p=(t,r)=>{s.onerror=s.onload=null,clearTimeout(m);var o=n[e];if(delete n[e],s.parentNode&&s.parentNode.removeChild(s),o&&o.forEach((e=>e(r))),t)return t(r)},m=setTimeout(p.bind(null,void 0,{type:"timeout",target:s}),12e4);s.onerror=p.bind(null,s.onerror),s.onload=p.bind(null,s.onload),l&&document.head.appendChild(s)}},a.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.nmd=e=>(e.paths=[],e.children||(e.children=[]),e),(()=>{var e;a.g.importScripts&&(e=a.g.location+"");var n=a.g.document;if(!e&&n&&(n.currentScript&&(e=n.currentScript.src),!e)){var t=n.getElementsByTagName("script");t.length&&(e=t[t.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),a.p=e})(),(()=>{a.b=document.baseURI||self.location.href;var e={601:0};a.f.j=(n,t)=>{var r=a.o(e,n)?e[n]:void 0;if(0!==r)if(r)t.push(r[2]);else{var o=new Promise(((t,o)=>r=e[n]=[t,o]));t.push(r[2]=o);var i=a.p+a.u(n),s=new Error;a.l(i,(t=>{if(a.o(e,n)&&(0!==(r=e[n])&&(e[n]=void 0),r)){var o=t&&("load"===t.type?"missing":t.type),i=t&&t.target&&t.target.src;s.message="Loading chunk "+n+" failed.\n("+o+": "+i+")",s.name="ChunkLoadError",s.type=o,s.request=i,r[1](s)}}),"chunk-"+n,n)}},a.O.j=n=>0===e[n];var n=(n,t)=>{var r,o,[i,s,l]=t,f=0;if(i.some((n=>0!==e[n]))){for(r in s)a.o(s,r)&&(a.m[r]=s[r]);if(l)var c=l(a)}for(n&&n(t);f<i.length;f++)o=i[f],a.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return a.O(c)},t=self.webpackChunkdimension_stream_github_io=self.webpackChunkdimension_stream_github_io||[];t.forEach(n.bind(null,0)),t.push=n.bind(null,t.push.bind(t))})(),a.nc=void 0;var i=a.O(void 0,[247],(()=>a(7367)));i=a.O(i)})();