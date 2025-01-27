part of three_materials;



/**
 * parameters = {
 *  defines: { "label" : "value" },
 *  uniforms: { "parameter1": { value: 1.0 }, "parameter2": { value2: 2 } },
 *
 *  fragmentShader: <string>,
 *  vertexShader: <string>,
 *
 *  wireframe: <boolean>,
 *  wireframeLinewidth: <float>,
 *
 *  lights: <bool>,
 * }
 */

class ShaderMaterial extends Material {
  String type = 'ShaderMaterial';

  bool isShaderMaterial = true;

  ShaderMaterial( Map<String, dynamic>? parameters ) : super() {
  
    this.defines = {};
    this.uniforms = {};

    this.vertexShader = default_vertex;
    this.fragmentShader = default_fragment;

    this.linewidth = 1;

    this.wireframe = false;
    this.wireframeLinewidth = 1;

    this.fog = false; // set to use scene fog
    this.lights = false; // set to use scene lights
    this.clipping = false; // set to use user-defined clipping planes

    this.extensions = {
      "derivatives": false, // set to use derivatives
      "fragDepth": false, // set to use fragment depth values
      "drawBuffers": false, // set to use draw buffers
      "shaderTextureLOD": false // set to use shader texture LOD
    };

    // When rendered geometry doesn't include these attributes but the material does,
    // use these default values in WebGL. This avoids errors when buffer data is missing.
    this.defaultAttributeValues = {
      'color': [ 1, 1, 1 ],
      'uv': [ 0, 0 ],
      'uv2': [ 0, 0 ]
    };

    this.index0AttributeName = null;
    this.uniformsNeedUpdate = false;

    this.glslVersion = null;

    if ( parameters != null ) {
      if ( parameters["attributes"] != null ) {
        print( 'THREE.ShaderMaterial: attributes should now be defined in THREE.BufferGeometry instead.' );
      }

      this.setValues( parameters );

    }

  }


  copy( source ) {

    super.copy(source);

    this.fragmentShader = source.fragmentShader;
    this.vertexShader = source.vertexShader;

    this.uniforms = cloneUniforms( source.uniforms );

    this.defines = json.decode(json.encode(source.defines));

    this.wireframe = source.wireframe;
    this.wireframeLinewidth = source.wireframeLinewidth;

    this.lights = source.lights;
    this.clipping = source.clipping;

    this.extensions = json.decode(json.encode(source.extensions));

    this.glslVersion = source.glslVersion;

    return this;

  }

  clone() {
    return ShaderMaterial({}).copy( this );
  }

  // toJSON( meta ) {

  //   var data = super.toJSON( meta );

  //   data.glslVersion = this.glslVersion;
  //   data.uniforms = {};

  //   for ( var name in this.uniforms ) {

  //     var uniform = this.uniforms[ name ];
  //     var value = uniform.value;

  //     if ( value && value.isTexture ) {

  //       data.uniforms[ name ] = {
  //         type: 't',
  //         value: value.toJSON( meta ).uuid
  //       };

  //     } else if ( value && value.isColor ) {

  //       data.uniforms[ name ] = {
  //         type: 'c',
  //         value: value.getHex()
  //       };

  //     } else if ( value && value.isVector2 ) {

  //       data.uniforms[ name ] = {
  //         type: 'v2',
  //         value: value.toArray()
  //       };

  //     } else if ( value && value.isVector3 ) {

  //       data.uniforms[ name ] = {
  //         type: 'v3',
  //         value: value.toArray()
  //       };

  //     } else if ( value && value.isVector4 ) {

  //       data.uniforms[ name ] = {
  //         type: 'v4',
  //         value: value.toArray()
  //       };

  //     } else if ( value && value.isMatrix3 ) {

  //       data.uniforms[ name ] = {
  //         type: 'm3',
  //         value: value.toArray()
  //       };

  //     } else if ( value && value.isMatrix4 ) {

  //       data.uniforms[ name ] = {
  //         type: 'm4',
  //         value: value.toArray()
  //       };

  //     } else {

  //       data.uniforms[ name ] = {
  //         value: value
  //       };

  //       // note: the array variants v2v, v3v, v4v, m4v and tv are not supported so far

  //     }

  //   }

  //   if ( Object.keys( this.defines ).length > 0 ) data.defines = this.defines;

  //   data.vertexShader = this.vertexShader;
  //   data.fragmentShader = this.fragmentShader;

  //   var extensions = {};

  //   for ( var key in this.extensions ) {

  //     if ( this.extensions[ key ] === true ) extensions[ key ] = true;

  //   }

  //   if ( Object.keys( extensions ).length > 0 ) data.extensions = extensions;

  //   return data;

  // }

}
