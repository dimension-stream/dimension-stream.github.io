"use strict";(self.webpackChunkdimension_stream_github_io=self.webpackChunkdimension_stream_github_io||[]).push([[348],{348:(n,e,t)=>{t.r(e),t.d(e,{init:()=>x});var a,o,r,_,i=t(466),u=t(477),l=t(365),c=t(885),s=t(530),d={u_num_bands:{value:null},u_texture_sz:{value:null},u_block_sz:{value:null},u_block_dim:{value:null},u_data_0:{value:null},u_data_1:{value:null},u_data_2:{value:null},u_data_3:{value:null},u_data_4:{value:null},u_data_5:{value:null},u_data_6:{value:null},index_texture:{value:null},u_inv_modelview_pos:{value:null},u_ndc_to_aabbclip:{value:null}};function v(){var n=document.getElementById("volume-canvas");return[n.clientWidth,n.clientHeight]}function m(){_.begin(),a.render(o,r),requestAnimationFrame(m),_.end()}function x(n){(_=new i).showPanel(0),document.body.appendChild(_.dom);var e=document.getElementById("volume-canvas");a=new u.CP7({antialias:!1,canvas:e});var t=v();a.setSize(t[0],t[1]),window.addEventListener("resize",f),o=new u.xsS,(r=new u.cPb(60,t[0]/t[1],.1,10)).position.set(-2.5,2.5,2.5),r.lookAt(0,0,0),new l.z(r,a.domElement),o.add(r);var x,p=document.getElementById("progress"),h=document.getElementById("progress_bar"),w=document.getElementById("progress_text"),z=document.getElementById("progress_header"),y=new u.hH6;y.setRequestHeader({"Cache-Control":"no-cache"});var b="/3d_models/"+n+"/";y.setResponseType("json").loadAsync(b+"runtime_info.json").then((function(n){x=n})).then((function(n){var e=["index.bin.tar.gz"].concat(Array.from({length:x.num_bands},(function(n,e){return"grid_"+e+".bin.tar.gz"})));y.setResponseType("arraybuffer");var t={loaded:Array(e.length),total:Array(e.length),progress:function(n){function e(n,e){return n+e}this.loaded[this.i]=n.loaded,this.total[this.i]=n.total;var t=this.total.reduce(e),a=this.loaded.reduce(e)/t;w.innerHTML=Math.round(100*a)+"%",h.value=100*a,console.log("progress: "+a)},onProgress_i:function(n){return t.progress.bind({loaded:t.loaded,total:t.total,i:n})}};return Promise.all(e.map((function(n,e){return y.loadAsync(b+n,t.onProgress_i(e))})))})).then((function(n){return console.log("download done"),z.innerHTML="Unpacking",w.innerHTML="This may take a while...",new Promise((function(e,t){setTimeout((function(){e(n.map((function(n){return c.ec(new Uint8Array(n))})))}),300)}))})).then((function(n){return console.log("unpacking"),z.innerHTML="Reading data",w.innerHTML="...",Promise.all(n.map((function(n){return s(n.buffer)})))})).then((function(n){console.log("untar");var e=n.map((function(n){return n[0].buffer})),t=new Int32Array(e[0]),a=e.slice(1).map((function(n){return new Uint8Array(n)})),r=u.rDY.clone(d);r.u_block_sz.value=x.block_sz,r.u_block_dim.value=x.block_dim;var _,i,l,c,s,v,m=(_=t,l=i=x.block_dim,c=i,s=i,(v=new u.JUT(_,l,c,s)).internalFormat="R32I",v.format=u.D9w,v.type=u.Kz5,v.magFilter=u.TyD,v.minFilter=u.TyD,v.needsUpdate=!0,v.generateMipmaps=!1,v);r.index_texture.value=m;var f=function(n,e){var t=e+2,a=n.length/4/Math.pow(t,3),o=Math.floor(2048/t),r=Math.floor(Math.pow(a,1/3)),_=[r+1,r+1,r+1];function i(n){return n[0]*n[1]*n[2]}for(var u=1;u<=o;u++)for(var l=u;l<=o;l++)for(var c=Math.max(Math.max(u,l),r);c<=o;c++){var s=[u,l,c];if(i(s)>=i(_))break;i(s)>=a&&(_=s)}return _}(a[0],x.block_sz);r.u_texture_sz.value=f,console.log("3D texture size: "+f),r.u_num_bands.value=x.num_bands,a.forEach((function(n,e){var t=function(n,e,t){for(var a=t+2,o=new Uint8Array(e[0]*a*(e[1]*a)*(e[2]*a)*4).fill(0),r=0,_=0;_<e[2];_++)for(var i=0;i<e[1];i++)for(var l=0;l<e[0];l++)for(var c=0;c<a;c++)for(var s=0;s<a;s++)for(var d=0;d<a;d++)for(var v=a*l+d,m=a*i+s,x=(a*_+c)*a*e[0]*a*e[1]+m*a*e[0]+v,f=0;f<4;f++)r<n.length&&(o[4*x+f]=n[r],r++);var p=a*e[0],h=a*e[1],w=a*e[2],z=new u.JUT(o,p,h,w);return z.format=u.wk1,z.type=u.ywz,z.magFilter=u.wem,z.minFilter=u.wem,z.wrapR=u.uWy,z.wrapS=u.uWy,z.wrapT=u.uWy,z.needsUpdate=!0,z.generateMipmaps=!1,z}(n,f,x.block_sz);r["u_data_"+e].value=t})),r.u_inv_modelview_pos.value=new u.Pa4,r.u_ndc_to_aabbclip.value=(new u.yGw).identity();var h=new u.jyz({uniforms:r,vertexShader:'uniform vec3 u_inv_modelview_pos;\n    out vec3 v_rd;\n    void main() {\n        // Transform rd to "aabb" space.\n        v_rd = position.xyz - u_inv_modelview_pos;\n        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);\n    }',fragmentShader:'\n    precision highp float;\n    precision highp sampler3D;\n    precision highp isampler3D;\n    uniform vec3 u_inv_modelview_pos;\n    uniform ivec3 u_texture_sz;\n    uniform int u_block_sz;\n    uniform int u_block_dim;\n    uniform int u_num_bands;\n    uniform sampler3D u_data_0;\n    uniform sampler3D u_data_1;\n    uniform sampler3D u_data_2;\n    uniform sampler3D u_data_3;\n    uniform sampler3D u_data_4;\n    uniform sampler3D u_data_5;\n    uniform sampler3D u_data_6;\n    uniform isampler3D index_texture;\n    in vec3 v_rd;\n    \n    float SH_0_0( vec3 n ) { return  1.0; }\n    float SH_1_0( vec3 n ) { return  n.y; }\n    float SH_1_1( vec3 n ) { return  n.z; }\n    float SH_1_2( vec3 n ) { return  n.x; }\n    float SH_2_0( vec3 n ) { return  n.x*n.y; }\n    float SH_2_1( vec3 n ) { return  n.y*n.z; }\n    float SH_2_2( vec3 n ) { return  (3.0*n.z*n.z-1.0); }\n    float SH_2_3( vec3 n ) { return  n.x*n.z; }\n    float SH_2_4( vec3 n ) { return  (n.x*n.x-n.y*n.y); }\n    \n    float undiscretize_alpha(const float discretized_alpha)\n    {\n        const float e = exp(1.0f);\n        return 256.0f*(exp(discretized_alpha)-1.0f)/(e-1.0f);\n    }\n    \n    void get_color(vec3 rd, vec3 global_tx, int index, inout vec3 c, inout float alpha)\n    {\n    \n        // Compute tx\n        vec3 global_xyz =  global_tx * vec3(u_block_sz * u_block_dim, u_block_sz * u_block_dim, u_block_sz * u_block_dim); \n        vec3 local_xyz = mod(global_xyz, float(u_block_sz));\n    \n        vec3 block_xyz = vec3(index % u_texture_sz.x, index / u_texture_sz.x % u_texture_sz.y, index / (u_texture_sz.x * u_texture_sz.y)) * float(u_block_sz + 2);\n        block_xyz += local_xyz + vec3(1, 1, 1);\n    \n        vec3 tx = block_xyz / vec3((u_block_sz + 2) * u_texture_sz.x, (u_block_sz + 2) * u_texture_sz.y, (u_block_sz + 2) * u_texture_sz.z);\n    \n        //    c0  c1   c2   c3   c4   c5   c6    \n        // |000a|1112|2233|3444|5556|6677|7888|\n        // | SH0|   SH1    |       SH2        |\n        // (0)\n        {\n            vec4 w0 = texture(u_data_0, tx);\n            float sh00 = SH_0_0(rd);\n            c.x = w0.x * sh00;\n            c.y = w0.y * sh00;\n            c.z = w0.z * sh00;\n            alpha = undiscretize_alpha(w0.w);\n        }\n        // (1-2)\n        if(u_num_bands >= 3)\n        {\n            vec4 w10_11 = texture(u_data_1, tx);\n            vec4 w11_12 = texture(u_data_2, tx);\n            vec4 w12_20 = texture(u_data_3, tx);\n            float sh10 = SH_1_0(rd);\n            float sh11 = SH_1_1(rd);\n            float sh12 = SH_1_2(rd);\n            c.x += w10_11.x * sh10;\n            c.y += w10_11.y * sh10;\n            c.z += w10_11.z * sh10;\n            c.x += w10_11.w * sh11;\n            //\n            c.y += w11_12.x * sh11;\n            c.z += w11_12.y * sh11;\n            c.x += w11_12.z * sh12;\n            c.y += w11_12.w * sh12;\n            //\n            c.z += w12_20.x * sh12;\n            if(u_num_bands >= 7)\n            {\n                float sh20 = SH_2_0(rd);\n                c.x += w12_20.y * sh20;\n                c.y += w12_20.z * sh20;\n                c.z += w12_20.w * sh20;\n            }\n        }\n        // (3-6)\n        if(u_num_bands >= 7)\n        {\n            vec4 w21_22 = texture(u_data_4, tx);\n            vec4 w22_23 = texture(u_data_5, tx);\n            vec4 w23_24 = texture(u_data_6, tx);\n            float sh21 = SH_2_1(rd);\n            float sh22 = SH_2_2(rd);\n            float sh23 = SH_2_3(rd);\n            float sh24 = SH_2_4(rd);\n    \n            c.x += w21_22.x * sh21;\n            c.y += w21_22.y * sh21;\n            c.z += w21_22.z * sh21;\n            c.x += w21_22.w * sh22;\n    \n            c.y += w22_23.x * sh22;\n            c.z += w22_23.y * sh22;\n            c.x += w22_23.z * sh23;\n            c.y += w22_23.w * sh23;\n    \n            c.z += w23_24.x * sh23;\n            c.x += w23_24.y * sh24;\n            c.y += w23_24.z * sh24;\n            c.z += w23_24.w * sh24;\n        }\n    }\n    \n    int get_index(vec3 tx)\n    {\n        return texture(index_texture, tx).x;\n    }\n    \n    float min_component(in vec3 v) {\n        return min(min(v.x, v.y), v.z);\n    }\n    \n    float max_component(in vec3  v) {\n        return max(max(v.x, v.y), v.z);\n    }\n    \n    // Intersect a ray with aabb where aabb.mix.xyz = -1, and aabb.max.xyz = 1.\n    // returns vec2(min_t, max_t).\n    vec2 boxIntersection(in vec3 ro, in vec3 rd) {\n        vec3 m = 1.0/rd;\n        vec3 n = ro*m;\n        vec3 t0 = -m - n;\n        vec3 t1 = m - n;\n        // isect if mint <= maxt;\n        return vec2(max_component(min(t0,t1)), min_component(max(t0,t1)));\n    }\n    \n    float hash(vec2 p) { return fract(1e4 * sin(17.0 * p.x + p.y * 0.1) * (0.1 + abs(sin(p.y * 13.0 + p.x)))); }\n    const float E = 2.7182818284;\n    void main() {\n        // Transform rays to "aabb" space.\n        vec3 rd = normalize(v_rd);\n        vec3 ro = u_inv_modelview_pos;\n        vec2 ti = boxIntersection(ro, rd);\n    \n        vec3 H = vec3(0.0);\n        float V_i = 0.0;\n        float grid_sz = float(u_block_sz * u_block_dim);\n        float dt = 2.0 / grid_sz;\n        for(float t = max(ti.x, 0.0); (t < ti.y); t+=dt)\n        {\n            vec3 pos = ro + t*rd; // pos.xyz is in range (-1, 1).\n            if(pos.x <= -0.99 ||\n               pos.y <= -0.99 || \n               pos.z <= -0.99 || \n               pos.x >=  0.99 || \n               pos.y >=  0.99 || \n               pos.z >=  0.99)\n               continue;\n    \n            vec3 uv = 0.5*pos+0.5;\n            vec3 c = vec3(0.0);\n            float a = 0.0;\n    \n            int index = get_index(uv);\n            if (index < 0) continue;\n            get_color(-rd, uv, index, c, a);\n            // a = 256.0*(exp(a)-1.0)/(E-1.0); // uint8(255*log((e-1)*clamp(v,0,S)/S + 1)), S=256\n            // if(a > 1.0)\n    \n            if(a != -1.0)\n            {\n                float v = a*dt;\n                H += exp(-V_i) * (1.0 - exp(-v)) * c;\n                V_i += v;\n            }\n\n            if (exp(-V_i) < (grid_sz / 4480.0)) break;\n        }\n        // V_i = V_i*smoothstep(0.1, 1.0, V_i);\n        gl_FragColor.xyz = H;// + exp(-V_i) * vec3(0.0);\n        // gl_FragColor.xyz = vec3(1.0, 0.0, 0.0);\n        gl_FragColor.a = 1.0;\n    }\n    ',side:u._Li}),w=new u.DvJ(2,2,2),z=new u.Kj0(w,h);z.scale.fromArray(x.grid_half_side),z.onBeforeRender=function(n,e,t,a,o,r){var _=t.matrixWorldInverse.clone().multiply(this.matrixWorld);o.uniforms.u_inv_modelview_pos.value.setFromMatrixColumn(_.clone().invert(),3)},p.style.display="none",o.add(z),console.log("Loading done!")})).then(m).catch(console.log)}function f(){var n=v();r.aspect=n[0]/n[1],r.updateProjectionMatrix(),a.setSize(n[0],n[1])}}}]);