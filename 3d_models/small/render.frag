precision highp float;
precision highp sampler3D;
precision highp isampler3D;
uniform vec3 u_inv_modelview_pos;
uniform mat4 u_ndc_to_aabbclip;
uniform ivec3 u_texture_sz;
uniform int u_block_sz;
uniform int u_block_dim;
uniform int u_num_bands;
uniform sampler3D u_data_0;
uniform sampler3D u_data_1;
uniform sampler3D u_data_2;
uniform sampler3D u_data_3;
uniform sampler3D u_data_4;
uniform sampler3D u_data_5;
uniform sampler3D u_data_6;
uniform isampler3D index_texture;
in vec3 v_rd;

float SH_0_0( vec3 n ) { return  1.0; }
float SH_1_0( vec3 n ) { return  n.y; }
float SH_1_1( vec3 n ) { return  n.z; }
float SH_1_2( vec3 n ) { return  n.x; }
float SH_2_0( vec3 n ) { return  n.x*n.y; }
float SH_2_1( vec3 n ) { return  n.y*n.z; }
float SH_2_2( vec3 n ) { return  (3.0*n.z*n.z-1.0); }
float SH_2_3( vec3 n ) { return  n.x*n.z; }
float SH_2_4( vec3 n ) { return  (n.x*n.x-n.y*n.y); }

float undiscretize_alpha(const float discretized_alpha)
{
    const float e = exp(1.0f);
    return 256.0f*(exp(discretized_alpha)-1.0f)/(e-1.0f);
}

void get_color(vec3 rd, vec3 global_tx, int index, inout vec3 c, inout float alpha)
{

    // Compute tx
    vec3 global_xyz =  global_tx * vec3(u_block_sz * u_block_dim, u_block_sz * u_block_dim, u_block_sz * u_block_dim); 
    vec3 local_xyz = mod(global_xyz, float(u_block_sz));

    vec3 block_xyz = vec3(index % u_texture_sz.x, index / u_texture_sz.x % u_texture_sz.y, index / (u_texture_sz.x * u_texture_sz.y)) * float(u_block_sz + 2);
    block_xyz += local_xyz + vec3(1, 1, 1);

    vec3 tx = block_xyz / vec3((u_block_sz + 2) * u_texture_sz.x, (u_block_sz + 2) * u_texture_sz.y, (u_block_sz + 2) * u_texture_sz.z);

    //    c0  c1   c2   c3   c4   c5   c6    
    // |000a|1112|2233|3444|5556|6677|7888|
    // | SH0|   SH1    |       SH2        |
    // (0)
    {
        vec4 w0 = texture(u_data_0, tx);
        float sh00 = SH_0_0(rd);
        c.x = w0.x * sh00;
        c.y = w0.y * sh00;
        c.z = w0.z * sh00;
        alpha = undiscretize_alpha(w0.w);
    }
    // (1-2)
    if(u_num_bands >= 3)
    {
        vec4 w10_11 = texture(u_data_1, tx);
        vec4 w11_12 = texture(u_data_2, tx);
        vec4 w12_20 = texture(u_data_3, tx);
        float sh10 = SH_1_0(rd);
        float sh11 = SH_1_1(rd);
        float sh12 = SH_1_2(rd);
        c.x += w10_11.x * sh10;
        c.y += w10_11.y * sh10;
        c.z += w10_11.z * sh10;
        c.x += w10_11.w * sh11;
        //
        c.y += w11_12.x * sh11;
        c.z += w11_12.y * sh11;
        c.x += w11_12.z * sh12;
        c.y += w11_12.w * sh12;
        //
        c.z += w12_20.x * sh12;
        if(u_num_bands >= 7)
        {
            float sh20 = SH_2_0(rd);
            c.x += w12_20.y * sh20;
            c.y += w12_20.z * sh20;
            c.z += w12_20.w * sh20;
        }
    }
    // (3-6)
    if(u_num_bands >= 7)
    {
        vec4 w21_22 = texture(u_data_4, tx);
        vec4 w22_23 = texture(u_data_5, tx);
        vec4 w23_24 = texture(u_data_6, tx);
        float sh21 = SH_2_1(rd);
        float sh22 = SH_2_2(rd);
        float sh23 = SH_2_3(rd);
        float sh24 = SH_2_4(rd);

        c.x += w21_22.x * sh21;
        c.y += w21_22.y * sh21;
        c.z += w21_22.z * sh21;
        c.x += w21_22.w * sh22;

        c.y += w22_23.x * sh22;
        c.z += w22_23.y * sh22;
        c.x += w22_23.z * sh23;
        c.y += w22_23.w * sh23;

        c.z += w23_24.x * sh23;
        c.x += w23_24.y * sh24;
        c.y += w23_24.z * sh24;
        c.z += w23_24.w * sh24;
    }
}

int get_index(vec3 tx)
{
    return texture(index_texture, tx).x;
}

float min_component(in vec3 v) {
    return min(min(v.x, v.y), v.z);
}

float max_component(in vec3  v) {
    return max(max(v.x, v.y), v.z);
}

// Intersect a ray with aabb where aabb.mix.xyz = -1, and aabb.max.xyz = 1.
// returns vec2(min_t, max_t).
vec2 boxIntersection(in vec3 ro, in vec3 rd) {
    vec3 m = 1.0/rd;
    vec3 n = ro*m;
    vec3 t0 = -m - n;
    vec3 t1 = m - n;
    // isect if mint <= maxt;
    return vec2(max_component(min(t0,t1)), min_component(max(t0,t1)));
}

float hash(vec2 p) { return fract(1e4 * sin(17.0 * p.x + p.y * 0.1) * (0.1 + abs(sin(p.y * 13.0 + p.x)))); }
const float E = 2.7182818284;
void main() {
    // Transform rays to "aabb" space.
    vec3 rd = normalize(v_rd);
    vec3 ro = u_inv_modelview_pos;
    vec2 ti = boxIntersection(ro, rd);

    vec3 H = vec3(0.0);
    float V_i = 0.0;
    const float dt = 2.0/512.0;
    for(float t = max(ti.x, 0.0); (t < ti.y); t+=dt)
    {
        vec3 pos = ro + t*rd; // pos.xyz is in range (-1, 1).
        if(pos.x <= -0.99 ||
           pos.y <= -0.99 || 
           pos.z <= -0.99 || 
           pos.x >=  0.99 || 
           pos.y >=  0.99 || 
           pos.z >=  0.99)
           continue;

        vec3 clip_pos = (u_ndc_to_aabbclip*vec4(pos, 1.0)).xyz;
        vec3 uv = 0.5*pos+0.5;
        vec3 c = vec3(0.0);
        float a = 0.0;

        int index = get_index(uv);
        if (index < 0) continue;
        get_color(-rd, uv, index, c, a);
        // a = 256.0*(exp(a)-1.0)/(E-1.0); // uint8(255*log((e-1)*clamp(v,0,S)/S + 1)), S=256
        // if(a > 1.0)
        if(clip_pos.x < -1.0 ||
           clip_pos.y < -1.0 || 
           clip_pos.z < -1.0 || 
           clip_pos.x >  1.0 || 
           clip_pos.y >  1.0 || 
           clip_pos.z >  1.0)
           {
                c.r = 1.0;
           }

        if(a != -1.0)
        {
            float v = a*dt;
            H += exp(-V_i) * (1.0 - exp(-v)) * c;
            V_i += v;
        }
    }
    // V_i = V_i*smoothstep(0.1, 1.0, V_i);
    gl_FragColor.xyz = H + exp(-V_i) * vec3(0.0);
    // gl_FragColor.xyz = vec3(1.0, 0.0, 0.0);
    gl_FragColor.a = 1.0;
}
