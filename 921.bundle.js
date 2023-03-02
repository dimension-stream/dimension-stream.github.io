"use strict";(self.webpackChunkdimension_stream_github_io=self.webpackChunkdimension_stream_github_io||[]).push([[921],{9921:(n,e,t)=>{t.r(e),t.d(e,{init:()=>N});var a,r,o=t(9477),i=t(9365),u=t(7885),c=t(4376),l=t(8761),s=t(5149),_=(new URLSearchParams(window.location.search).get("id"),78/180*Math.PI),d={camYBias:0,camZBias:0,eyeSizeBias:0};l.r.onGUIConstructed=function(n){var e=n.addFolder("VirtualHole");e.add(d,"eyeSizeBias",-10,10).step(.01),e.add(d,"camYBias",-10,10).step(.01),e.add(d,"camZBias",-10,10).step(.01),e.open()},l.r.onCameraChanged=function(n){var e=n.video.videoWidth,t=n.video.videoHeight;Math.atan(Math.tan(_/2)*e/Math.sqrt(t*t+e*e)),Math.atan(Math.tan(_/2)*t/Math.sqrt(t*t+e*e)),a=[e,t],r=.5*Math.sqrt(a[0]*a[0]+a[1]*a[1])*Math.tan(.5*Math.PI-.5*_)};var v=[263,362],f=[33,133];function m(n){var e,t,o=n[0].keypoints[v[0]],i=n[0].keypoints[v[1]],u=n[0].keypoints[f[0]],c=n[0].keypoints[f[1]],l=function(n,e){var t=n.x-e.x,a=n.y-e.y;return Math.sqrt(t*t+a*a)},s=l(o,i),_=l(u,c),m=(e=Math.max(s,_),(24.2+d.eyeSizeBias)*r/e-d.camZBias),x=(t=[n[0].keypoints[6].x,n[0].keypoints[6].y],[Math.atan2(a[0]/2-t[0],r),Math.atan2(a[1]/2-t[1],r)]);return[Math.tan(x[0])*m,Math.tan(x[1])*m+d.camYBias,m+d.camZBias].map((function(n){return n/1e3}))}function x(n,e){return[n[0]-e[0],n[1]-e[1],n[2]-e[2]]}function h(n,e){return n[0]*e[0]+n[1]*e[1]+n[2]*e[2]}function p(n){var e=Math.sqrt(n[0]*n[0]+n[1]*n[1]+n[2]*n[2]);return n[0]/=e,n[1]/=e,n[2]/=e,n}var w=!1,b=[[0,0,0],[0,0,0],[0,0,0]],y=[[0,0,0],[0,0,0],[0,0,0]];var g,z,M,S=t(3644),k=function(n,e,t,a){return new(t||(t=Promise))((function(r,o){function i(n){try{c(a.next(n))}catch(n){o(n)}}function u(n){try{c(a.throw(n))}catch(n){o(n)}}function c(n){var e;n.done?r(n.value):(e=n.value,e instanceof t?e:new t((function(n){n(e)}))).then(i,u)}c((a=a.apply(n,e||[])).next())}))},H=function(n,e){var t,a,r,o,i={label:0,sent:function(){if(1&r[0])throw r[1];return r[1]},trys:[],ops:[]};return o={next:u(0),throw:u(1),return:u(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function u(u){return function(c){return function(u){if(t)throw new TypeError("Generator is already executing.");for(;o&&(o=0,u[0]&&(i=0)),i;)try{if(t=1,a&&(r=2&u[0]?a.return:u[0]?a.throw||((r=a.return)&&r.call(a),0):a.next)&&!(r=r.call(a,u[1])).done)return r;switch(a=0,r&&(u=[2&u[0],r.value]),u[0]){case 0:case 1:r=u;break;case 4:return i.label++,{value:u[1],done:!1};case 5:i.label++,a=u[1],u=[0];continue;case 7:u=i.ops.pop(),i.trys.pop();continue;default:if(!((r=(r=i.trys).length>0&&r[r.length-1])||6!==u[0]&&2!==u[0])){i=0;continue}if(3===u[0]&&(!r||u[1]>r[0]&&u[1]<r[3])){i.label=u[1];break}if(6===u[0]&&i.label<r[1]){i.label=r[1],r=u;break}if(r&&i.label<r[2]){i.label=r[2],i.ops.push(u);break}r[2]&&i.ops.pop(),i.trys.pop();continue}u=e.call(n,i)}catch(n){u=[6,n],a=0}finally{t=r=0}if(5&u[0])throw u[1];return{value:u[0]?u[1]:void 0,done:!0}}([u,c])}}},P=new o.cPb;P.matrixAutoUpdate=!1;var T={Translation:{X:0,Y:0,Z:0},Rotation:{X:0,Y:0,Z:0},Scale:.05,"Use headtracking":!1};function I(){C===U&&requestAnimationFrame(C)}function A(n,e){var t=n.addFolder("Viewer");if(e){var a=t.addFolder("Transforms"),r=a.addFolder("Translation");r.add(T.Translation,"X",-.1,.1).step(.001).onChange(I),r.add(T.Translation,"Y",-.1,.1).step(.001).onChange(I),r.add(T.Translation,"Z",-.1,.1).step(.001).onChange(I),a.add(T,"Scale",.01,.1).step(.001).onChange(I)}t.add(T,"Use headtracking").onChange((function(n){return W(n)})),t.open()}var F,R=new c.XS({width:300});R.domElement.id="gui",A(R,!0),l.r.onGUIConstructed=(F=l.r.onGUIConstructed,function(n){F(n),R.destroy(),A(n,!0),n.__folders.Backend.hide(),n.__folders.Model.hide(),n.__folders.Camera.close(),n.__folders.VirtualHole.close()});var C,B=new o.Tme;function D(){B.scale.set(T.Scale,T.Scale,T.Scale),B.position.set(T.Translation.X,T.Translation.Y,T.Translation.Z),B.updateMatrix()}function U(){C===U?(S.d.beginStats(),D(),console.log("normal rendering"),B.rotation.set(T.Rotation.X,T.Rotation.Y,T.Rotation.Z),B.updateMatrix(),g.render(z,M),S.d.endStats()):console.log("skipped rendering")}function E(){k(this,void 0,void 0,(function(){return H(this,(function(n){return[2,S.d.beginStats()]}))})).then(D).then((function(){return s.Dd(!1)})).then((function(n){if(null!=n&&n.length>0){var e=q(),t=function(n,e,t,a){void 0===a&&(a=!0),a&&(n=function(n){var e=1/4.125;if(w)return w=!1,y[0]=n,y[1]=n,b[0]=n,b[1]=n,n;var t=[(-.25*y[0][0]+.375*y[1][0]+n[0]+2*b[0][0]+b[1][0])*e,(-.25*y[0][1]+.375*y[1][1]+n[1]+2*b[0][1]+b[1][1])*e,(-.25*y[0][2]+.375*y[1][2]+n[2]+2*b[0][2]+b[1][2])*e];return y[1]=y[0],y[0]=t,b[1]=b[0],b[0]=n,t}(n));var r,o,i,u,c,l,s,_,d,v,f,m,g,z,M,S,k=-e/2,H=-t/2;return r=[k,H,0],o=[k+e,H,0],i=[k,H+t,0],u=[n[0],n[1],n[2]],c=.1,l=p(x(o,r)),s=p(x(i,r)),_=p(function(n,e){return[n[1]*e[2]-n[2]*e[1],n[2]*e[0]-n[0]*e[2],n[0]*e[1]-n[1]*e[0]]}(l,s)),d=x(r,u),v=x(o,u),f=x(i,u),m=-h(d,_),g=h(l,d)*c/m,z=h(l,v)*c/m,M=h(s,d)*c/m,S=h(s,f)*c/m,[[.2/(z-g),0,0,0,0,.2/(S-M),0,0,(z+g)/(z-g),(S+M)/(S-M),-10.1/9.9,-1,0,0,-2/9.9,0],[l[0],s[0],_[0],0,l[1],s[1],_[1],0,l[2],s[2],_[2],0,u[0],u[1],u[2],1]]}(m(n),.621,.621*e[1]/e[0]),a=(new o._fP).setFromEuler(new o.USm(T.Rotation.X,T.Rotation.Y,T.Rotation.Z)),r=(new o._fP).setFromRotationMatrix(M.matrixWorld.clone().invert());B.rotation.setFromQuaternion(r.multiply(a)),P.matrixWorld.fromArray(t[1]),P.matrixWorld.decompose(P.position,P.quaternion,P.scale),P.projectionMatrix.fromArray(t[0]),P.matrixWorldInverse.copy(P.matrixWorld).invert(),P.projectionMatrixInverse.copy(P.projectionMatrix).invert(),g.render(z,P)}requestAnimationFrame(C)})).then((function(){return S.d.endStats()}))}var V=function(){return k(this,void 0,void 0,(function(){var n=this;return H(this,(function(e){return this.initialized||this.pending?[2,this.initialized]:(this.pending=!0,[2,l.S().then((function(){return n.pending=!1,n.initialized=!0,n.initialized}))])}))}))}.bind({initialized:!1,pending:!1});function W(n){return k(this,void 0,void 0,(function(){return H(this,(function(e){return n?V().then((function(n){n&&(C=E,requestAnimationFrame(C))})):(C=U,requestAnimationFrame(C)),[2]}))}))}function q(){var n=document.getElementById("volume-canvas");return[n.clientWidth,n.clientHeight]}var Y,Z,j,L=t(9530),X=!0;onkeydown=function(n){"p"===n.key&&((X=!X)?(Y.maxPolarAngle=.51*Math.PI,Y.minPolarAngle=.3*Math.PI):(Y.maxPolarAngle=Math.PI,Y.minPolarAngle=0))};var G,J,K,Q={u_num_bands:{value:null},u_texture_sz:{value:null},u_block_sz:{value:null},u_block_dim:{value:null},u_data_0:{value:null},u_data_1:{value:null},u_data_2:{value:null},u_data_3:{value:null},u_data_4:{value:null},u_data_5:{value:null},u_data_6:{value:null},index_texture:{value:null},u_aabb_min:{value:null},u_aabb_max:{value:null},transformMatrix:{value:null}};function N(n){var e=document.getElementById("volume-canvas");G=new o.CP7({antialias:!1,canvas:e});var t=q();G.setSize(t[0],t[1]),window.addEventListener("resize",O),J=new o.xsS,(K=new o.cPb(60,t[0]/t[1],.01,5)).position.set(.5*T.Scale,.5*T.Scale,4.5*T.Scale),K.lookAt(0,0,0),(Y=new i.z(K,G.domElement)).maxPolarAngle=.51*Math.PI,Y.minPolarAngle=.3*Math.PI,Y.addEventListener("change",U),J.add(K);var a,r=document.getElementById("progress"),c=document.getElementById("progress_bar"),l=document.getElementById("progress_text"),s=document.getElementById("progress_header"),_=new o.hH6;_.setRequestHeader({"Cache-Control":"no-cache"});var d="/3d_models/"+n+"/";_.setResponseType("json").loadAsync(d+"runtime_info.json").then((function(n){a=n})).then((function(n){var e=["index.bin.tar.gz"].concat(Array.from({length:a.num_bands},(function(n,e){return"grid_"+e+".bin.tar.gz"})));_.setResponseType("arraybuffer");var t={loaded:Array(e.length),total:Array(e.length),progress:function(n){function e(n,e){return n+e}this.loaded[this.i]=n.loaded,this.total[this.i]=n.total;var t=this.total.reduce(e),a=this.loaded.reduce(e)/t;l.innerHTML=Math.round(100*a)+"%",c.value=100*a},onProgress_i:function(n){return t.progress.bind({loaded:t.loaded,total:t.total,i:n})}};return Promise.all(e.map((function(n,e){return _.loadAsync(d+n,t.onProgress_i(e))})))})).then((function(n){return console.log("download done"),s.innerHTML="Unpacking",l.innerHTML="This may take a while...",new Promise((function(e,t){setTimeout((function(){e(n.map((function(n){return u.ec(new Uint8Array(n))})))}),300)}))})).then((function(n){return console.log("unpacking"),s.innerHTML="Reading data",l.innerHTML="...",Promise.all(n.map((function(n){return L(n.buffer)})))})).then((function(n){console.log("untar");var e=n.map((function(n){return n[0].buffer})),t=new Int32Array(e[0]),i=e.slice(1).map((function(n){return new Uint8Array(n)})),u=o.rDY.clone(Q);j=a.grid_half_side;var c=a.grid_offset.map((function(n,e){return n-j[e]})),l=a.grid_offset.map((function(n,e){return n+j[e]}));u.u_aabb_min.value=c,u.u_aabb_max.value=l,u.u_block_sz.value=a.block_sz,u.u_block_dim.value=a.block_dim;var s,_,d,v,f,m,x=(s=t,d=_=a.block_dim,v=_,f=_,(m=new o.JUT(s,d,v,f)).internalFormat="R32I",m.format=o.D9w,m.type=o.Kz5,m.magFilter=o.TyD,m.minFilter=o.TyD,m.wrapR=o.uWy,m.wrapS=o.uWy,m.wrapT=o.uWy,m.needsUpdate=!0,m.generateMipmaps=!1,m);u.index_texture.value=x;var h=function(n,e){var t=e+2,a=n.length/4/Math.pow(t,3),r=Math.floor(2048/t),o=Math.floor(Math.pow(a,1/3)),i=[o+1,o+1,o+1];function u(n){return n[0]*n[1]*n[2]}for(var c=1;c<=r;c++)for(var l=c;l<=r;l++)for(var s=Math.max(Math.max(c,l),o);s<=r;s++){var _=[c,l,s];if(u(_)>=u(i))break;u(_)>=a&&(i=_)}return i}(i[0],a.block_sz);u.u_texture_sz.value=h,console.log("3D texture size: "+h),u.u_num_bands.value=a.num_bands,i.forEach((function(n,e){var t=function(n,e,t){for(var a=t+2,r=new Uint8Array(e[0]*a*(e[1]*a)*(e[2]*a)*4).fill(0),i=0,u=0;u<e[2];u++)for(var c=0;c<e[1];c++)for(var l=0;l<e[0];l++)for(var s=0;s<a;s++)for(var _=0;_<a;_++)for(var d=0;d<a;d++)for(var v=a*l+d,f=a*c+_,m=(a*u+s)*a*e[0]*a*e[1]+f*a*e[0]+v,x=0;x<4;x++)i<n.length&&(r[4*m+x]=n[i],i++);var h=a*e[0],p=a*e[1],w=a*e[2],b=new o.JUT(r,h,p,w);return b.format=o.wk1,b.type=o.ywz,b.magFilter=o.wem,b.minFilter=o.wem,b.wrapR=o.uWy,b.wrapS=o.uWy,b.wrapT=o.uWy,b.needsUpdate=!0,b.generateMipmaps=!1,b}(n,h,a.block_sz);u["u_data_"+e].value=t})),u.transformMatrix.value=(new o.yGw).identity();var p,w,b,y,k=new o.jyz({uniforms:u,vertexShader:"\n    precision highp float;\n    uniform mat4 transformMatrix;\n    out vec3 v_rd_world;\n    out vec3 v_ro_world;\n    void main() {\n        mat4 modifiedViewMatrix = viewMatrix * transformMatrix;\n        v_ro_world = inverse(modifiedViewMatrix)[3].xyz;\n        v_rd_world = (modelMatrix * vec4(position, 1.0)).xyz - v_ro_world;\n        gl_Position = projectionMatrix * modifiedViewMatrix * modelMatrix * vec4(position, 1.0);\n        // vec4 position_world = modelMatrix * vec4(position, 1.0);\n        // v_rd_world = position_world.xyz - cameraPosition;\n        // gl_Position = projectionMatrix * viewMatrix * position_world;\n    }",fragmentShader:"\n    precision highp float;\n    precision highp sampler3D;\n    precision highp isampler3D;\n    uniform vec3 u_aabb_min;\n    uniform vec3 u_aabb_max;\n    uniform ivec3 u_texture_sz;\n    uniform int u_block_sz;\n    uniform int u_block_dim;\n    uniform int u_num_bands;\n    uniform sampler3D u_data_0;\n    uniform sampler3D u_data_1;\n    uniform sampler3D u_data_2;\n    uniform sampler3D u_data_3;\n    uniform sampler3D u_data_4;\n    uniform sampler3D u_data_5;\n    uniform sampler3D u_data_6;\n    uniform isampler3D index_texture;\n    in vec3 v_rd_world;\n    in vec3 v_ro_world;\n\n    float SH_0_0( vec3 n ) { return  1.0; }\n    float SH_1_0( vec3 n ) { return  n.y; }\n    float SH_1_1( vec3 n ) { return  n.z; }\n    float SH_1_2( vec3 n ) { return  n.x; }\n    float SH_2_0( vec3 n ) { return  n.x*n.y; }\n    float SH_2_1( vec3 n ) { return  n.y*n.z; }\n    float SH_2_2( vec3 n ) { return  (3.0*n.z*n.z-1.0); }\n    float SH_2_3( vec3 n ) { return  n.x*n.z; }\n    float SH_2_4( vec3 n ) { return  (n.x*n.x-n.y*n.y); }\n    \n    float undiscretize_alpha(const float discretized_alpha)\n    {\n        const float e = exp(1.0f);\n        return 256.0f*(exp(discretized_alpha)-1.0f)/(e-1.0f);\n    }\n    \n    vec4 get_color(vec3 rd, vec3 global_tx, int index)\n    {\n        vec4 c = vec4(0.0);\n        // Compute tx  \n        ivec3 sparse_offset = ivec3(\n            index % u_texture_sz.x,\n            (index / u_texture_sz.x) % u_texture_sz.y,\n            index / (u_texture_sz.x * u_texture_sz.y)\n        ) * (u_block_sz + 2);\n    \n        vec3 local_offset = mod(global_tx * vec3(u_block_dim*u_block_sz), float(u_block_sz)) + vec3(1);\n        vec3 tx = (vec3(sparse_offset) + local_offset) / vec3((u_block_sz + 2) * u_texture_sz);\n        // ivec3 stp = ivec3(round(global_tx * vec3(u_block_sz * u_block_dim) - 0.5));\n        // ivec3 local_offset_i = (stp % u_block_sz) + ivec3(1);\n        // ivec3 itx = sparse_offset + local_offset_i;\n    \n        //    c0  c1   c2   c3   c4   c5   c6    \n        // |000a|1112|2233|3444|5556|6677|7888|\n        // | SH0|   SH1    |       SH2        |\n        // (0)\n        {\n            vec4 w0 = texture(u_data_0, tx);\n            // vec4 w0 = texelFetch(u_data_0, itx, 0);\n            float sh00 = SH_0_0(rd);\n            c.x = w0.x * sh00;\n            c.y = w0.y * sh00;\n            c.z = w0.z * sh00;\n            c.a = undiscretize_alpha(w0.w);\n        }\n        // (1-2)\n        if(u_num_bands >= 3)\n        {\n            vec4 w10_11 = texture(u_data_1, tx);\n            vec4 w11_12 = texture(u_data_2, tx);\n            vec4 w12_20 = texture(u_data_3, tx);\n            float sh10 = SH_1_0(rd);\n            float sh11 = SH_1_1(rd);\n            float sh12 = SH_1_2(rd);\n            c.x += w10_11.x * sh10;\n            c.y += w10_11.y * sh10;\n            c.z += w10_11.z * sh10;\n            c.x += w10_11.w * sh11;\n            //\n            c.y += w11_12.x * sh11;\n            c.z += w11_12.y * sh11;\n            c.x += w11_12.z * sh12;\n            c.y += w11_12.w * sh12;\n            //\n            c.z += w12_20.x * sh12;\n            if(u_num_bands >= 7)\n            {\n                float sh20 = SH_2_0(rd);\n                c.x += w12_20.y * sh20;\n                c.y += w12_20.z * sh20;\n                c.z += w12_20.w * sh20;\n            }\n        }\n        // (3-6)\n        if(u_num_bands >= 7)\n        {\n            vec4 w21_22 = texture(u_data_4, tx);\n            vec4 w22_23 = texture(u_data_5, tx);\n            vec4 w23_24 = texture(u_data_6, tx);\n            float sh21 = SH_2_1(rd);\n            float sh22 = SH_2_2(rd);\n            float sh23 = SH_2_3(rd);\n            float sh24 = SH_2_4(rd);\n    \n            c.x += w21_22.x * sh21;\n            c.y += w21_22.y * sh21;\n            c.z += w21_22.z * sh21;\n            c.x += w21_22.w * sh22;\n    \n            c.y += w22_23.x * sh22;\n            c.z += w22_23.y * sh22;\n            c.x += w22_23.z * sh23;\n            c.y += w22_23.w * sh23;\n    \n            c.z += w23_24.x * sh23;\n            c.x += w23_24.y * sh24;\n            c.y += w23_24.z * sh24;\n            c.z += w23_24.w * sh24;\n        }\n        return c;\n    }\n    \n    int get_index(vec3 tx)\n    {\n        ivec3 stp = ivec3(round(tx * vec3(u_block_dim) - 0.5));\n        return texelFetch(index_texture, stp, 0).x;\n        // return texture(index_texture, tx).x;\n    }\n    \n    float min_component(in vec3 v) {\n        return min(min(v.x, v.y), v.z);\n    }\n    \n    float max_component(in vec3  v) {\n        return max(max(v.x, v.y), v.z);\n    }\n    \n    // Intersect a ray with aabb where aabb.mix.xyz = -1, and aabb.max.xyz = 1.\n    // returns vec2(min_t, max_t).\n    vec2 boxIntersection(in vec3 ro, in vec3 rd) {\n        vec3 m = 1.0/rd;\n        vec3 n = ro*m;\n        vec3 t0 = -m - n;\n        vec3 t1 = m - n;\n        // isect if mint <= maxt;\n        return vec2(max_component(min(t0,t1)), min_component(max(t0,t1)));\n    }\n\n    vec2 aabbIntersection(in vec3 ro, in vec3 rd) {\n        vec3 m = 1.0/rd;\n        vec3 t0 = (u_aabb_min - ro)*m;\n        vec3 t1 = (u_aabb_max - ro)*m;\n        // isect if mint <= maxt;\n        return vec2(max_component(min(t0,t1)), min_component(max(t0,t1)));\n    }\n\n    vec3 to_texcoord(in vec3 pos)\n    {\n        return (pos - u_aabb_min)/(u_aabb_max - u_aabb_min);\n    }\n    \n    float hash(vec2 p) { return fract(1e4 * sin(17.0 * p.x + p.y * 0.1) * (0.1 + abs(sin(p.y * 13.0 + p.x)))); }\n    const float E = 2.7182818284;\n    void main() {                        \n        vec3 rd = normalize(v_rd_world);\n        vec3 ro = v_ro_world;\n        vec2 ti = aabbIntersection(v_ro_world, rd);\n    \n        vec3 H = vec3(0.0);\n        float V_i = 0.0;\n        float grid_sz = float(u_block_sz * u_block_dim);\n        float dt = 2.0 / grid_sz;\n        for(float t = max(ti.x, 0.0); (t < ti.y); t+=dt)\n        {\n            vec3 pos = ro + t*rd; // pos.xyz is in range (-1, 1).\n            if(pos.x <= (u_aabb_min.x + 0.01) ||\n               pos.y <= (u_aabb_min.y + 0.01) || \n               pos.z <= (u_aabb_min.z + 0.01) || \n               pos.x >= (u_aabb_max.x - 0.01) || \n               pos.y >= (u_aabb_max.y - 0.01) || \n               pos.z >= (u_aabb_max.z - 0.01) )\n               continue;\n    \n            vec3 uv = to_texcoord(pos);\n    \n            int index = get_index(uv);\n            if (index < 0) continue;\n            vec4 c = get_color(-rd, uv, index);\n            // a = 256.0*(exp(a)-1.0)/(E-1.0); // uint8(255*log((e-1)*clamp(v,0,S)/S + 1)), S=256\n            // if(a > 1.0)\n    \n            if(c.a != -1.0)\n            {\n                float v = c.a*dt;\n                H += exp(-V_i) * (1.0 - exp(-v)) * c.rgb;\n                V_i += v;\n            }\n\n\n            if (exp(-V_i) < (grid_sz / 4480.0)) break;\n        }\n        // V_i = V_i*smoothstep(0.1, 1.0, V_i);\n        gl_FragColor.xyz = H;// + exp(-V_i) * vec3(0.0);\n        gl_FragColor.a = 1.0;\n    }\n    ",side:o._Li}),H=new o.DvJ(2,2,2);(Z=new o.Kj0(H,k)).scale.fromArray(j),Z.onBeforeRender=function(n,e,t,a,r,o){r.uniforms.transformMatrix.value.copy(B.matrix)},r.style.display="none",J.add(Z),p=G,w=J,b=K,y=[0,Math.PI,0],S.d.setupStats(),g=p,z=w,M=b,T.Rotation.X=y[0],T.Rotation.Y=y[1],T.Rotation.Z=y[2],W(T["Use headtracking"]),console.log("Loading done!")})).catch(console.log)}function O(){var n=q();K.aspect=n[0]/n[1],K.updateProjectionMatrix(),G.setSize(n[0],n[1])}}}]);