(()=>{"use strict";var e,n={6893:(e,n,t)=>{var o,r,a,l,i,c,s,v=t(8761),u=t(5149),f=t(3644),d=t(9477),g="\n//#version 420 core\n// Stupid Apple.\n// #version 330 core\nprecision highp float;\nout vec2 v_uv;\nvoid main()\n{\n    gl_Position = vec4(position, 1);\n    v_uv = uv;\n}\n",p=function(e,n,t,o){return new(t||(t=Promise))((function(r,a){function l(e){try{c(o.next(e))}catch(e){a(e)}}function i(e){try{c(o.throw(e))}catch(e){a(e)}}function c(e){var n;e.done?r(e.value):(n=e.value,n instanceof t?n:new t((function(e){e(n)}))).then(l,i)}c((o=o.apply(e,n||[])).next())}))},m=function(e,n){var t,o,r,a,l={label:0,sent:function(){if(1&r[0])throw r[1];return r[1]},trys:[],ops:[]};return a={next:i(0),throw:i(1),return:i(2)},"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function i(i){return function(c){return function(i){if(t)throw new TypeError("Generator is already executing.");for(;a&&(a=0,i[0]&&(l=0)),l;)try{if(t=1,o&&(r=2&i[0]?o.return:i[0]?o.throw||((r=o.return)&&r.call(o),0):o.next)&&!(r=r.call(o,i[1])).done)return r;switch(o=0,r&&(i=[2&i[0],r.value]),i[0]){case 0:case 1:r=i;break;case 4:return l.label++,{value:i[1],done:!1};case 5:l.label++,o=i[1],i=[0];continue;case 7:i=l.ops.pop(),l.trys.pop();continue;default:if(!((r=(r=l.trys).length>0&&r[r.length-1])||6!==i[0]&&2!==i[0])){l=0;continue}if(3===i[0]&&(!r||i[1]>r[0]&&i[1]<r[3])){l.label=i[1];break}if(6===i[0]&&l.label<r[1]){l.label=r[1],r=i;break}if(r&&l.label<r[2]){l.label=r[2],l.ops.push(i);break}r[2]&&l.ops.pop(),l.trys.pop();continue}i=n.call(e,l)}catch(e){i=[6,e],o=0}finally{t=r=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,c])}}};function h(){}function _(e){return new d.Pa4(e.x,e.y,e.z)}var y=0,x=Date.now();function w(){(function(){return p(this,void 0,void 0,(function(){var e;return m(this,(function(n){return e=x,x=Date.now(),y+=x-e,[2]}))}))})().then((function(){return f.d.beginStats()})).then((function(){return(0,u.Dd)(!1)})).then((function(e){requestAnimationFrame(w);for(var n=0;n<e.length;n++){var t=_(e[n].keypoints[152]),v=_(e[n].keypoints[23]),u=_(e[n].keypoints[253]),f=e[n].box.width;t.z*=-f,v.z*=-f,u.z*=-f;var g=_(e[n].keypoints[33]),p=_(e[n].keypoints[133]),m=_(e[n].keypoints[362]),h=_(e[n].keypoints[263]),x=v.sub(t).normalize(),b=u.sub(t).normalize(),A=x.cross(b).normalize(),k=c/s,z=new d.FM8(1/c*g.x,1/s*g.y),B=new d.FM8(1/c*p.x,1/s*p.y),C=5*z.sub(B).length(),S=l.material.uniforms;S.effect_mask.value=7,S.glow_scale.value=C,S.time.value=y/1e3,S.texture_ar.value=k,S.tc_laser_offset.value.set(.1*A.x,.1*A.y),S.laser_dir.value.copy(A),S.glow_color.value.set(1,1,0,1),S.glare_color.value.set(1,0,0,1),S.left_laser.value.set(1/c*g.x*k,1/s*g.y,1/c*p.x*k,1/s*p.y),S.right_laser.value.set(1/c*m.x*k,1/s*m.y,1/c*h.x*k,1/s*h.y),l.material.uniformsNeedUpdate=!0,r.setRenderTarget(a),r.render(l,o)}r.setRenderTarget(null),r.render(i,o)})).then((function(){return f.d.endStats()}))}v.r.onCameraChanged=function(e){c=e.video.videoWidth,s=e.video.videoHeight,r&&(r.setSize(c,s),a.setSize(c,s))},function(){p(this,void 0,void 0,(function(){return m(this,(function(e){return v.S().then((function(){(o=new d.iKG(-1,1,1,-1,0,1)).position.z=.01;var e=document.getElementById("camera-video"),n=new d.fO1(e),t=new d._12(2,2),c=new d.jyz({fragmentShader:"\n//#version 420 core\n// Stupid Apple.\n// #version 330 core\nprecision highp float;\n\nin vec2 v_uv;\n\nuniform vec4 left_laser;\nuniform vec4 right_laser;\nuniform vec3 laser_dir;\nuniform float time;\nuniform float texture_ar;\nuniform vec2 tc_laser_offset;\nuniform vec4 glare_color;\nuniform vec4 glow_color;\nuniform int effect_mask;\nuniform float glow_scale;\n\nvec3 hash3( vec2 p )\n{\n    vec3 q = vec3( dot(p,vec2(127.1,311.7)), \n                   dot(p,vec2(269.5,183.3)), \n                   dot(p,vec2(419.2,371.9)) );\n    return fract(sin(q)*43758.5453);\n}\n\nfloat voronoise( in vec2 p, float u, float v )\n{\n    float k = 1.0+63.0*pow(1.0-v,6.0);\n\n    vec2 i = floor(p);\n    vec2 f = fract(p);\n    \n    vec2 a = vec2(0.0,0.0);\n    for( int y=-2; y<=2; y++ )\n    for( int x=-2; x<=2; x++ )\n    {\n        vec2  g = vec2( x, y );\n        vec3  o = hash3( i + g )*vec3(u,u,1.0);\n        vec2  d = g - f + o.xy;\n        float w = pow( 1.0-smoothstep(0.0,1.414,length(d)), k );\n        a += vec2(o.z*w,w);\n    }\n    \n    return a.x/a.y;\n}\n\nfloat noise(in vec2 p)\n{\n    return voronoise(p, 1.0, 1.0);\n}\n\nfloat noise(in float p)\n{\n    return noise(vec2(p));\n}\n//const mat2 m2 = mat2(0.8,-0.6,0.6,0.8);\n//float fbm( in vec2 p ){\n//    float f = 0.0;\n//    f += 0.5000*noise( p ); p = m2*p*2.02;\n//    f += 0.2500*noise( p ); p = m2*p*2.03;\n//    f += 0.1250*noise( p ); p = m2*p*2.01;\n//    f += 0.0625*noise( p );\n//\n//    return f/0.9375;\n//}\n\nfloat segment_d(vec2 P, vec2 A, vec2 B) \n{\n    vec2 g = B - A;\n    vec2 h = P - A;\n    return length(h - g * clamp(dot(g, h) / dot(g,g), 0.0, 1.0));\n}\n\nfloat segment(vec2 P, vec2 A, vec2 B, float r) \n{\n    vec2 g = B - A;\n    vec2 h = P - A;\n    float d = length(h - g * clamp(dot(g, h) / dot(g,g), 0.0, 1.0));\n    return smoothstep(r, r*0.5, d);\n}\n\nfloat sideflare(vec2 P, vec2 A, vec2 B, float r, float len) \n{\n    //P *= 10.0;\n    //A *= 10.0;\n    //B *= 10.0;\n    //A.y = B.y = 0.5*(A.y + B.y);\n    vec2 AA = mix(B,A, len);\n    vec2 BB = mix(A,B, len);\n    vec2 g = BB - AA;\n    vec2 h = P - AA;\n    vec2 c = 0.5*(A+B);\n    \n    float d = length(h - g * clamp(dot(g, h) / dot(g,g), 0.0, 1.0));\n    float d2 = pow(10.0*distance(c,P), 1.0);\n    //return smoothstep(0.01, 0.01*0.5, d);\n    //return 0.3*smoothstep(distance(AA,BB)*0.005, 0.0, d2);\n    //return 0.5*smoothstep(r, 0.0, mix(d, d*d2, 0.5));// * smoothstep(distance(AA,BB)*0.5, 0.0, d2);\n    //return smoothstep(r, 0.0, d)/(1.0 + d2);\n    return 0.15*smoothstep(r, 0.0, d) * smoothstep(len, 0.0 ,d2);\n}\n\nvec2 lensflare(vec2 uv,vec2 pos)\n{\n    uv  *= 2.0/glow_scale;\n    pos *= 2.0/glow_scale;\n    vec2 main = uv-pos;\n    //return(step(length(main), 1.0));\n    vec2 uvd = uv*(length(uv));\n    \n    float ang = atan(main.x,main.y);\n    float dist=length(main);\n    float n = noise(vec2(ang*8.0,dist*32.0));\n    \n    float f0 = 1.0/(length(uv-pos)*16.0+1.0);\n    //f0 = f0+f0*(sin(noise(sin(ang*2.+10.0*pos.x)*4.0 - cos(ang*3.+10.0*pos.y))*16.)*.1 + dist*.1 + .8);\n    //return f0;\n    float f1 = (sin(noise(sin(ang*2.+10.0*pos.x)*4.0 - cos(ang*3.+10.0*pos.y))*16.)*.1 + dist*.1 + .8);\n    return vec2(2.*smoothstep(0.1, .8, f0), f1*f1*smoothstep(0., .3,f0));\n}\n\n\nvec3 hsv2rgb(vec3 c)\n{\n    vec4 K = vec4(1.0, 2.0 / 3.0, 1.0 / 3.0, 3.0);\n    vec3 p = abs(fract(c.xxx + K.xyz) * 6.0 - K.www);\n    return c.z * mix(K.xxx, clamp(p - K.xxx, 0.0, 1.0), c.y);\n}\n\nvoid main(){\n    vec2 tc = vec2(v_uv.x*texture_ar, v_uv.y);\n    vec2 ll = 0.5*(left_laser.xy  + left_laser.zw);\n    vec2 rl = 0.5*(right_laser.xy + right_laser.zw);\n    const float laser_len = 10.0;\n\n    float lasers = 0.0;\n    if((effect_mask & 4) != 0)\n    {\n        lasers = smoothstep(0.05, -0.05, segment_d(tc, ll, ll + laser_len*laser_dir.xy))\n               + smoothstep(0.05, -0.05, segment_d(tc,  rl, rl + laser_len*laser_dir.xy));\n        lasers *= 0.5*(1.0+noise( 48.0*tc + 500.0*tc_laser_offset));\n    }\n\n    vec2 eyes = vec2(0.0);\n    if((effect_mask & 1) != 0)\n    {\n        eyes += max(lensflare(tc, ll),\n                   lensflare(tc, rl));\n    }\n    if((effect_mask & 2) != 0)\n    {\n        eyes.y += sideflare(tc, ll, rl, 0.005, 8.0);\n    }\n    \n    gl_FragColor.a += eyes.x + eyes.y + lasers;\n    vec4 eye_color = mix(\n        clamp(glare_color + vec4(0, 0.25*sin(2.0*time), 0, 1), vec4(0), vec4(1)),\n        glow_color,\n        eyes.x);\n    gl_FragColor.a = clamp(gl_FragColor.a*eye_color.a, 0., 1.);\n    gl_FragColor.xyz = smoothstep(0.05, 0.2, gl_FragColor.a)*eye_color.rgb;\n    // gl_FragColor.rgb = vec3(mod(time,1.0), 0,0);\n}\n",vertexShader:g,uniforms:{effect_mask:{value:0},glow_scale:{value:0},time:{value:0},texture_ar:{value:0},tc_laser_offset:{value:new d.FM8},laser_dir:{value:new d.Pa4},glow_color:{value:new d.Ltg},glare_color:{value:new d.Ltg},left_laser:{value:new d.Ltg},right_laser:{value:new d.Ltg}}});l=new d.Kj0(t,c),a=new d.dd2(e.width,e.height);var s=new d.jyz({fragmentShader:"\n//#version 420 core\n// Stupid Apple.\n// #version 330 core\nprecision highp float;\n\nuniform sampler2D image;\nuniform sampler2D effect;\nin vec2 v_uv;\nvoid main(){\n    vec2 uv1 = vec2(1,0) + vec2(-1,1)*v_uv;\n    vec2 uv2 = vec2(1,1) + vec2(-1,-1)*v_uv;\n    vec4 orig = texture(image, uv1);\n    vec4 col = texture(effect, uv2);\n    gl_FragColor.xyz = mix(orig.xyz, col.xyz, min(1.0, col.a));\n    // gl_FragColor.xyz = col.aaa;\n    //gl_FragColor.xyz = col.aaa;\n    //gl_FragColor = 0.5*(texture(image, v_uv) + texture(effect, v_uv));\n    //gl_FragColor = texture(image, v_uv)*texture(effect, v_uv);\n    // gl_FragColor = col;\n    gl_FragColor.a = 1.0;\n}\n",vertexShader:g,uniforms:{image:{value:n},effect:{value:a.texture}}});i=new d.Kj0(t,s);var v=document.getElementById("effect-canvas");null!=v&&((r=new d.CP7({antialias:!1,canvas:v,depth:!1})).setSize(e.width,e.height),r.setClearColor(new d.Ilk(.2,0,0)),r.clearColor(),window.addEventListener("resize",h))})).then(w),[2]}))}))}()}},t={};function o(e){var r=t[e];if(void 0!==r)return r.exports;var a=t[e]={id:e,loaded:!1,exports:{}};return n[e].call(a.exports,a,a.exports,o),a.loaded=!0,a.exports}o.m=n,o.amdD=function(){throw new Error("define cannot be used indirect")},o.amdO={},e=[],o.O=(n,t,r,a)=>{if(!t){var l=1/0;for(v=0;v<e.length;v++){for(var[t,r,a]=e[v],i=!0,c=0;c<t.length;c++)(!1&a||l>=a)&&Object.keys(o.O).every((e=>o.O[e](t[c])))?t.splice(c--,1):(i=!1,a<l&&(l=a));if(i){e.splice(v--,1);var s=r();void 0!==s&&(n=s)}}return n}a=a||0;for(var v=e.length;v>0&&e[v-1][2]>a;v--)e[v]=e[v-1];e[v]=[t,r,a]},o.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return o.d(n,{a:n}),n},o.d=(e,n)=>{for(var t in n)o.o(n,t)&&!o.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:n[t]})},o.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),o.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),o.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.nmd=e=>(e.paths=[],e.children||(e.children=[]),e),(()=>{var e={10:0};o.O.j=n=>0===e[n];var n=(n,t)=>{var r,a,[l,i,c]=t,s=0;if(l.some((n=>0!==e[n]))){for(r in i)o.o(i,r)&&(o.m[r]=i[r]);if(c)var v=c(o)}for(n&&n(t);s<l.length;s++)a=l[s],o.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return o.O(v)},t=self.webpackChunkdimension_stream_github_io=self.webpackChunkdimension_stream_github_io||[];t.forEach(n.bind(null,0)),t.push=n.bind(null,t.push.bind(t))})();var r=o.O(void 0,[956,477,829],(()=>o(6893)));r=o.O(r)})();