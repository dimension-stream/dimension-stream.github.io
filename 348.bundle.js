"use strict";(self.webpackChunkdimension_stream_github_io=self.webpackChunkdimension_stream_github_io||[]).push([[348],{2348:(n,e,t)=>{t.r(e),t.d(e,{init:()=>p});var a,r=t(3466),o=t(9477),_=t(9365),i=t(7885),u=t(9530),c=!0;onkeydown=function(n){"p"===n.key&&((c=!c)?(a.maxPolarAngle=.51*Math.PI,a.minPolarAngle=.3*Math.PI):(a.maxPolarAngle=Math.PI,a.minPolarAngle=0))};var l,s,d,m,v={u_num_bands:{value:null},u_texture_sz:{value:null},u_block_sz:{value:null},u_block_dim:{value:null},u_data_0:{value:null},u_data_1:{value:null},u_data_2:{value:null},u_data_3:{value:null},u_data_4:{value:null},u_data_5:{value:null},u_data_6:{value:null},index_texture:{value:null},u_aabb_min:{value:null},u_aabb_max:{value:null}};function f(){var n=document.getElementById("volume-canvas");return[n.clientWidth,n.clientHeight]}function x(){m.begin(),l.render(s,d),requestAnimationFrame(x),m.end()}function p(n){(m=new r).showPanel(0),document.body.appendChild(m.dom);var e=document.getElementById("volume-canvas");l=new o.CP7({antialias:!1,canvas:e});var t=f();l.setSize(t[0],t[1]),window.addEventListener("resize",h),s=new o.xsS,(d=new o.cPb(60,t[0]/t[1],.1,50)).position.set(.5,.5,4.5),d.lookAt(0,0,0),(a=new _.z(d,l.domElement)).maxPolarAngle=.51*Math.PI,a.minPolarAngle=.3*Math.PI,s.add(d);var c,p=document.getElementById("progress"),b=document.getElementById("progress_bar"),w=document.getElementById("progress_text"),y=document.getElementById("progress_header"),g=new o.hH6;g.setRequestHeader({"Cache-Control":"no-cache"});var z="/3d_models/"+n+"/";g.setResponseType("json").loadAsync(z+"runtime_info.json").then((function(n){c=n})).then((function(n){var e=["index.bin.tar.gz"].concat(Array.from({length:c.num_bands},(function(n,e){return"grid_"+e+".bin.tar.gz"})));g.setResponseType("arraybuffer");var t={loaded:Array(e.length),total:Array(e.length),progress:function(n){function e(n,e){return n+e}this.loaded[this.i]=n.loaded,this.total[this.i]=n.total;var t=this.total.reduce(e),a=this.loaded.reduce(e)/t;w.innerHTML=Math.round(100*a)+"%",b.value=100*a},onProgress_i:function(n){return t.progress.bind({loaded:t.loaded,total:t.total,i:n})}};return Promise.all(e.map((function(n,e){return g.loadAsync(z+n,t.onProgress_i(e))})))})).then((function(n){return console.log("download done"),y.innerHTML="Unpacking",w.innerHTML="This may take a while...",new Promise((function(e,t){setTimeout((function(){e(n.map((function(n){return i.ec(new Uint8Array(n))})))}),300)}))})).then((function(n){return console.log("unpacking"),y.innerHTML="Reading data",w.innerHTML="...",Promise.all(n.map((function(n){return u(n.buffer)})))})).then((function(n){console.log("untar");var e=n.map((function(n){return n[0].buffer})),t=new Int32Array(e[0]),a=e.slice(1).map((function(n){return new Uint8Array(n)})),r=o.rDY.clone(v),_=c.grid_offset.map((function(n,e){return n-c.grid_half_side[e]})),i=c.grid_offset.map((function(n,e){return n+c.grid_half_side[e]}));r.u_aabb_min.value=_,r.u_aabb_max.value=i,r.u_block_sz.value=c.block_sz,r.u_block_dim.value=c.block_dim;var u,l,d,m,f,x,h=(u=t,d=l=c.block_dim,m=l,f=l,(x=new o.JUT(u,d,m,f)).internalFormat="R32I",x.format=o.D9w,x.type=o.Kz5,x.magFilter=o.TyD,x.minFilter=o.TyD,x.wrapR=o.uWy,x.wrapS=o.uWy,x.wrapT=o.uWy,x.needsUpdate=!0,x.generateMipmaps=!1,x);r.index_texture.value=h;var b=function(n,e){var t=e+2,a=n.length/4/Math.pow(t,3),r=Math.floor(2048/t),o=Math.floor(Math.pow(a,1/3)),_=[o+1,o+1,o+1];function i(n){return n[0]*n[1]*n[2]}for(var u=1;u<=r;u++)for(var c=u;c<=r;c++)for(var l=Math.max(Math.max(u,c),o);l<=r;l++){var s=[u,c,l];if(i(s)>=i(_))break;i(s)>=a&&(_=s)}return _}(a[0],c.block_sz);r.u_texture_sz.value=b,console.log("3D texture size: "+b),r.u_num_bands.value=c.num_bands,a.forEach((function(n,e){var t=function(n,e,t){for(var a=t+2,r=new Uint8Array(e[0]*a*(e[1]*a)*(e[2]*a)*4).fill(0),_=0,i=0;i<e[2];i++)for(var u=0;u<e[1];u++)for(var c=0;c<e[0];c++)for(var l=0;l<a;l++)for(var s=0;s<a;s++)for(var d=0;d<a;d++)for(var m=a*c+d,v=a*u+s,f=(a*i+l)*a*e[0]*a*e[1]+v*a*e[0]+m,x=0;x<4;x++)_<n.length&&(r[4*f+x]=n[_],_++);var p=a*e[0],h=a*e[1],b=a*e[2],w=new o.JUT(r,p,h,b);return w.format=o.wk1,w.type=o.ywz,w.magFilter=o.wem,w.minFilter=o.wem,w.wrapR=o.uWy,w.wrapS=o.uWy,w.wrapT=o.uWy,w.needsUpdate=!0,w.generateMipmaps=!1,w}(n,b,c.block_sz);r["u_data_"+e].value=t}));var w=new o.jyz({uniforms:r,vertexShader:"\n    precision highp float;\n    out vec3 v_rd_world;\n    void main() {\n        vec4 position_world = modelMatrix * vec4(position, 1.0);\n        v_rd_world = position_world.xyz - cameraPosition;\n        gl_Position = projectionMatrix * viewMatrix * position_world;\n    }",fragmentShader:"\n    precision highp float;\n    precision highp sampler3D;\n    precision highp isampler3D;\n    uniform vec3 u_aabb_min;\n    uniform vec3 u_aabb_max;\n    uniform ivec3 u_texture_sz;\n    uniform int u_block_sz;\n    uniform int u_block_dim;\n    uniform int u_num_bands;\n    uniform sampler3D u_data_0;\n    uniform sampler3D u_data_1;\n    uniform sampler3D u_data_2;\n    uniform sampler3D u_data_3;\n    uniform sampler3D u_data_4;\n    uniform sampler3D u_data_5;\n    uniform sampler3D u_data_6;\n    uniform isampler3D index_texture;\n    in vec3 v_rd;\n    in vec3 v_rd_world;\n    \n    float SH_0_0( vec3 n ) { return  1.0; }\n    float SH_1_0( vec3 n ) { return  n.y; }\n    float SH_1_1( vec3 n ) { return  n.z; }\n    float SH_1_2( vec3 n ) { return  n.x; }\n    float SH_2_0( vec3 n ) { return  n.x*n.y; }\n    float SH_2_1( vec3 n ) { return  n.y*n.z; }\n    float SH_2_2( vec3 n ) { return  (3.0*n.z*n.z-1.0); }\n    float SH_2_3( vec3 n ) { return  n.x*n.z; }\n    float SH_2_4( vec3 n ) { return  (n.x*n.x-n.y*n.y); }\n    \n    float undiscretize_alpha(const float discretized_alpha)\n    {\n        const float e = exp(1.0f);\n        return 256.0f*(exp(discretized_alpha)-1.0f)/(e-1.0f);\n    }\n    \n    vec4 get_color(vec3 rd, vec3 global_tx, int index)\n    {\n        vec4 c = vec4(0.0);\n        // Compute tx  \n        ivec3 sparse_offset = ivec3(\n            index % u_texture_sz.x,\n            (index / u_texture_sz.x) % u_texture_sz.y,\n            index / (u_texture_sz.x * u_texture_sz.y)\n        ) * (u_block_sz + 2);\n    \n        vec3 local_offset = mod(global_tx * vec3(u_block_dim*u_block_sz), float(u_block_sz)) + vec3(1);\n        vec3 tx = (vec3(sparse_offset) + local_offset) / vec3((u_block_sz + 2) * u_texture_sz);\n        // ivec3 stp = ivec3(round(global_tx * vec3(u_block_sz * u_block_dim) - 0.5));\n        // ivec3 local_offset_i = (stp % u_block_sz) + ivec3(1);\n        // ivec3 itx = sparse_offset + local_offset_i;\n    \n        //    c0  c1   c2   c3   c4   c5   c6    \n        // |000a|1112|2233|3444|5556|6677|7888|\n        // | SH0|   SH1    |       SH2        |\n        // (0)\n        {\n            vec4 w0 = texture(u_data_0, tx);\n            // vec4 w0 = texelFetch(u_data_0, itx, 0);\n            float sh00 = SH_0_0(rd);\n            c.x = w0.x * sh00;\n            c.y = w0.y * sh00;\n            c.z = w0.z * sh00;\n            c.a = undiscretize_alpha(w0.w);\n        }\n        // (1-2)\n        if(u_num_bands >= 3)\n        {\n            vec4 w10_11 = texture(u_data_1, tx);\n            vec4 w11_12 = texture(u_data_2, tx);\n            vec4 w12_20 = texture(u_data_3, tx);\n            float sh10 = SH_1_0(rd);\n            float sh11 = SH_1_1(rd);\n            float sh12 = SH_1_2(rd);\n            c.x += w10_11.x * sh10;\n            c.y += w10_11.y * sh10;\n            c.z += w10_11.z * sh10;\n            c.x += w10_11.w * sh11;\n            //\n            c.y += w11_12.x * sh11;\n            c.z += w11_12.y * sh11;\n            c.x += w11_12.z * sh12;\n            c.y += w11_12.w * sh12;\n            //\n            c.z += w12_20.x * sh12;\n            if(u_num_bands >= 7)\n            {\n                float sh20 = SH_2_0(rd);\n                c.x += w12_20.y * sh20;\n                c.y += w12_20.z * sh20;\n                c.z += w12_20.w * sh20;\n            }\n        }\n        // (3-6)\n        if(u_num_bands >= 7)\n        {\n            vec4 w21_22 = texture(u_data_4, tx);\n            vec4 w22_23 = texture(u_data_5, tx);\n            vec4 w23_24 = texture(u_data_6, tx);\n            float sh21 = SH_2_1(rd);\n            float sh22 = SH_2_2(rd);\n            float sh23 = SH_2_3(rd);\n            float sh24 = SH_2_4(rd);\n    \n            c.x += w21_22.x * sh21;\n            c.y += w21_22.y * sh21;\n            c.z += w21_22.z * sh21;\n            c.x += w21_22.w * sh22;\n    \n            c.y += w22_23.x * sh22;\n            c.z += w22_23.y * sh22;\n            c.x += w22_23.z * sh23;\n            c.y += w22_23.w * sh23;\n    \n            c.z += w23_24.x * sh23;\n            c.x += w23_24.y * sh24;\n            c.y += w23_24.z * sh24;\n            c.z += w23_24.w * sh24;\n        }\n        return c;\n    }\n    \n    int get_index(vec3 tx)\n    {\n        ivec3 stp = ivec3(round(tx * vec3(u_block_dim) - 0.5));\n        return texelFetch(index_texture, stp, 0).x;\n        // return texture(index_texture, tx).x;\n    }\n    \n    float min_component(in vec3 v) {\n        return min(min(v.x, v.y), v.z);\n    }\n    \n    float max_component(in vec3  v) {\n        return max(max(v.x, v.y), v.z);\n    }\n    \n    // Intersect a ray with aabb where aabb.mix.xyz = -1, and aabb.max.xyz = 1.\n    // returns vec2(min_t, max_t).\n    vec2 boxIntersection(in vec3 ro, in vec3 rd) {\n        vec3 m = 1.0/rd;\n        vec3 n = ro*m;\n        vec3 t0 = -m - n;\n        vec3 t1 = m - n;\n        // isect if mint <= maxt;\n        return vec2(max_component(min(t0,t1)), min_component(max(t0,t1)));\n    }\n\n    vec2 aabbIntersection(in vec3 ro, in vec3 rd) {\n        vec3 m = 1.0/rd;\n        vec3 t0 = (u_aabb_min - ro)*m;\n        vec3 t1 = (u_aabb_max - ro)*m;\n        // isect if mint <= maxt;\n        return vec2(max_component(min(t0,t1)), min_component(max(t0,t1)));\n    }\n\n    vec3 to_texcoord(in vec3 pos)\n    {\n        return (pos - u_aabb_min)/(u_aabb_max - u_aabb_min);\n    }\n    \n    float hash(vec2 p) { return fract(1e4 * sin(17.0 * p.x + p.y * 0.1) * (0.1 + abs(sin(p.y * 13.0 + p.x)))); }\n    const float E = 2.7182818284;\n    void main() {                        \n        vec3 rd = normalize(v_rd_world);\n        vec3 ro = cameraPosition;\n        vec2 ti = aabbIntersection(cameraPosition, rd);\n    \n        vec3 H = vec3(0.0);\n        float V_i = 0.0;\n        float grid_sz = float(u_block_sz * u_block_dim);\n        float dt = 2.0 / grid_sz;\n        for(float t = max(ti.x, 0.0); (t < ti.y); t+=dt)\n        {\n            vec3 pos = ro + t*rd; // pos.xyz is in range (-1, 1).\n            if(pos.x <= (u_aabb_min.x + 0.01) ||\n               pos.y <= (u_aabb_min.y + 0.01) || \n               pos.z <= (u_aabb_min.z + 0.01) || \n               pos.x >= (u_aabb_max.x - 0.01) || \n               pos.y >= (u_aabb_max.y - 0.01) || \n               pos.z >= (u_aabb_max.z - 0.01) )\n               continue;\n    \n            vec3 uv = to_texcoord(pos);\n    \n            int index = get_index(uv);\n            if (index < 0) continue;\n            vec4 c = get_color(-rd, uv, index);\n            // a = 256.0*(exp(a)-1.0)/(E-1.0); // uint8(255*log((e-1)*clamp(v,0,S)/S + 1)), S=256\n            // if(a > 1.0)\n    \n            if(c.a != -1.0)\n            {\n                float v = c.a*dt;\n                H += exp(-V_i) * (1.0 - exp(-v)) * c.rgb;\n                V_i += v;\n            }\n\n\n            if (exp(-V_i) < (grid_sz / 4480.0)) break;\n        }\n        // V_i = V_i*smoothstep(0.1, 1.0, V_i);\n        gl_FragColor.xyz = H;// + exp(-V_i) * vec3(0.0);\n        gl_FragColor.a = 1.0;\n    }\n    ",side:o._Li}),y=new o.DvJ(2,2,2),g=new o.Kj0(y,w);g.scale.fromArray(c.grid_half_side),p.style.display="none",s.add(g),console.log("Loading done!")})).then(x).catch(console.log)}function h(){var n=f();d.aspect=n[0]/n[1],d.updateProjectionMatrix(),l.setSize(n[0],n[1])}}}]);