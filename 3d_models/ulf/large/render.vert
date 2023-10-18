uniform vec3 u_inv_modelview_pos;
out vec3 v_rd;
void main() {
    // Transform rd to "aabb" space.
    v_rd = position.xyz - u_inv_modelview_pos;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
