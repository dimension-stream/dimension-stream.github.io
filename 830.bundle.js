"use strict";(self.webpackChunkdimension_stream_github_io=self.webpackChunkdimension_stream_github_io||[]).push([[830],{830:(n,e,t)=>{t.r(e),t.d(e,{init:()=>p});var o,a,r,i,l=t(466),c=t(212),s=t(365),u=t(885),v=t(530),d={uniforms:{u_data:{value:-1},u_inv_modelview_pos:{value:-1}},vertexShader:'\n        uniform vec3 u_inv_modelview_pos;\n        out vec3 v_rd;\n        void main() {\n            // Transform rd to "aabb" space.\n            v_rd = position.xyz - u_inv_modelview_pos;\n            gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);\n        }',fragmentShader:'\n        precision highp float;\n        precision highp sampler3D;\n        uniform vec3 u_inv_modelview_pos;\n        uniform sampler3D u_data;\n        in vec3 v_rd;\n\n        float min_component(in vec3 v) {\n            return min(min(v.x, v.y), v.z);\n        }\n\n        float max_component(in vec3  v) {\n            return max(max(v.x, v.y), v.z);\n        }\n\n        // Intersect a ray with aabb where aabb.mix.xyz = -1, and aabb.max.xyz = 1.\n        // returns vec2(min_t, max_t).\n        vec2 boxIntersection(in vec3 ro, in vec3 rd) {\n            vec3 m = 1.0/rd;\n            vec3 n = ro*m;\n            vec3 t0 = -m - n;\n            vec3 t1 = m - n;\n            // isect if mint <= maxt;\n            return vec2(max_component(min(t0,t1)), min_component(max(t0,t1)));\n        }\n\n        float hash(vec2 p) { return fract(1e4 * sin(17.0 * p.x + p.y * 0.1) * (0.1 + abs(sin(p.y * 13.0 + p.x)))); }\n        const float E = 2.7182818284;\n        void main() {\n            // Transform rays to "aabb" space.\n            vec3 rd = normalize(v_rd);\n            vec3 ro = u_inv_modelview_pos;\n            vec2 ti = boxIntersection(ro, rd);\n\n            vec3 H = vec3(0.0);\n            float V_i = 0.0;\n            const float dt = 2.0/512.0;\n            // for(float t = max(ti.x, 0.0) + 1.0*dt*(2.0*hash(rd.xy)-1.0); (t < ti.y); t+=dt)\n            for(float t = max(ti.x, 0.0); (t < ti.y); t+=dt)\n            {\n                vec3 pos = ro + t*rd;\n                // pos.xyz is in range (-1, 1).\n                vec3 uv = 0.5*pos+0.5;\n                vec4 val = texture(u_data, uv);\n                val.a = 256.0*(exp(val.a)-1.0)/(E-1.0); // uint8(255*log((e-1)*clamp(v,0,S)/S + 1)), S=256\n                // val.a = 256.0*val.a; // uint8(255*clamp(v,0,S)/S), S=256\n                // float v = val.a; // float\n                if(val.a > 1.0)\n                {\n                    float v = val.a*dt;\n                    H += exp(-V_i) * (1.0 - exp(-v)) * val.rgb;\n                    V_i += v;\n                }\n            }\n            // V_i = V_i*smoothstep(0.1, 1.0, V_i);\n            gl_FragColor.xyz = H + exp(-V_i) * vec3(0.0);\n        }'};function m(){var n=document.getElementById("volume-canvas");return[n.clientWidth,n.clientHeight]}function f(){i.begin(),o.render(a,r),requestAnimationFrame(f),i.end()}function p(n){var e=this;(i=new l).showPanel(0),document.body.appendChild(i.dom);var t=document.getElementById("volume-canvas");o=new c.CP7({antialias:!1,canvas:t});var p=m();o.setSize(p[0],p[1]),window.addEventListener("resize",_),a=new c.xsS,(r=new c.cPb(60,p[0]/p[1],.1,10)).position.set(-2.5,2.5,2.5),r.lookAt(0,0,0),new s.z(r,o.domElement),a.add(r);var h=document.getElementById("progress"),x=document.getElementById("progress_bar"),w=document.getElementById("progress_text"),y=new c.hH6;y.setResponseType("arraybuffer"),y.load("https://www.dl.dropboxusercontent.com/s/"+n+"/grid.tar.gz?dl=1",(function(n){return t=e,o=void 0,i=function(){var e,t,o,r,i,l,s,m,f,p,_,x;return function(n,e){var t,o,a,r,i={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]};return r={next:l(0),throw:l(1),return:l(2)},"function"==typeof Symbol&&(r[Symbol.iterator]=function(){return this}),r;function l(r){return function(l){return function(r){if(t)throw new TypeError("Generator is already executing.");for(;i;)try{if(t=1,o&&(a=2&r[0]?o.return:r[0]?o.throw||((a=o.return)&&a.call(o),0):o.next)&&!(a=a.call(o,r[1])).done)return a;switch(o=0,a&&(r=[2&r[0],a.value]),r[0]){case 0:case 1:a=r;break;case 4:return i.label++,{value:r[1],done:!1};case 5:i.label++,o=r[1],r=[0];continue;case 7:r=i.ops.pop(),i.trys.pop();continue;default:if(!((a=(a=i.trys).length>0&&a[a.length-1])||6!==r[0]&&2!==r[0])){i=0;continue}if(3===r[0]&&(!a||r[1]>a[0]&&r[1]<a[3])){i.label=r[1];break}if(6===r[0]&&i.label<a[1]){i.label=a[1],a=r;break}if(a&&i.label<a[2]){i.label=a[2],i.ops.push(r);break}a[2]&&i.ops.pop(),i.trys.pop();continue}r=e.call(n,i)}catch(n){r=[6,n],o=0}finally{t=a=0}if(5&r[0])throw r[1];return{value:r[0]?r[1]:void 0,done:!0}}([r,l])}}}(this,(function(w){switch(w.label){case 0:return e=u.ec(new Uint8Array(n)),[4,v(e.buffer).then((function(n){console.log(n)}),(function(n){console.log(n)}),(function(n){if(console.log(n),"grid.bin"===n.name)t=n.buffer;else if("grid.json"===n.name){var e=n.readAsJSON();o=e.GRID_RES,r=e.GRID_HALF_SIDE;var a=e.FORMAT;i="UCHAR"==a?c.ywz:c.VzW}}))];case 1:return w.sent(),l=new Uint8Array(t),(s=new c.zob(l,o[0],o[1],o[2])).format=c.wk1,s.type=i,s.magFilter=c.wem,s.minFilter=c.wem,s.needsUpdate=!0,s.generateMipmaps=!1,m=d,(f=c.rDY.clone(m.uniforms)).u_data.value=s,f.u_inv_modelview_pos.value=new c.Pa4,p=new c.jyz({uniforms:f,vertexShader:m.vertexShader,fragmentShader:m.fragmentShader,side:c._Li}),_=new c.DvJ(2,2,2),(x=new c.Kj0(_,p)).rotation.set(Math.PI/2,Math.PI,Math.PI),x.scale.set(r[0],r[1],r[2]),x.onBeforeRender=function(n,e,t,o,a,r){a.uniforms.u_inv_modelview_pos.value.setFromMatrixColumn(t.matrixWorldInverse.clone().multiply(x.matrixWorld).invert(),3)},a.add(x),h.style.display="none",[2]}}))},new((r=void 0)||(r=Promise))((function(n,e){function a(n){try{c(i.next(n))}catch(n){e(n)}}function l(n){try{c(i.throw(n))}catch(n){e(n)}}function c(e){var t;e.done?n(e.value):(t=e.value,t instanceof r?t:new r((function(n){n(t)}))).then(a,l)}c((i=i.apply(t,o||[])).next())}));var t,o,r,i}),(function(n){n.loaded===n.total?w.innerHTML="Unpacking...":w.innerHTML=Math.round(n.loaded/n.total*100)+"%",x.value=n.loaded/n.total*100}),(function(n){console.log("Error: "+n)})),f()}function _(){var n=m();r.aspect=n[0]/n[1],r.updateProjectionMatrix(),o.setSize(n[0],n[1])}}}]);