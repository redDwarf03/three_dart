part of three_materials;


/**
 * Lambert网格材质，与光照有反应，漫反射
 * parameters = {
 *  color: <hex>,
 *  opacity: <float>,
 *
 *  map: new THREE.Texture( <Image> ),
 *
 *  lightMap: new THREE.Texture( <Image> ),
 *  lightMapIntensity: <float>
 *
 *  aoMap: new THREE.Texture( <Image> ),
 *  aoMapIntensity: <float>
 *
 *  emissive: <hex>,
 *  emissiveIntensity: <float>
 *  emissiveMap: new THREE.Texture( <Image> ),
 *
 *  specularMap: new THREE.Texture( <Image> ),
 *
 *  alphaMap: new THREE.Texture( <Image> ),
 *
 *  envMap: new THREE.CubeTexture( [posx, negx, posy, negy, posz, negz] ),
 *  combine: THREE.Multiply,
 *  reflectivity: <float>,
 *  refractionRatio: <float>,
 *
 *  wireframe: <boolean>,
 *  wireframeLinewidth: <float>,
 * }
 */

class MeshLambertMaterial extends Material {

  String type = "MeshLambertMaterial";
  bool isMeshLambertMaterial = true;

  MeshLambertMaterial( [parameters] ) : super() {

    this.color = new Color(0,0,0).setHex( 0xffffff ); // diffuse

    this.map = null;

    this.lightMap = null;
    this.lightMapIntensity = 1.0;

    this.aoMap = null;
    this.aoMapIntensity = 1.0;

    this.emissive = new Color(0,0,0);
    this.emissiveIntensity = 1.0;
    this.emissiveMap = null;

    this.specularMap = null;

    this.alphaMap = null;

    this.envMap = null;
    this.combine = MultiplyOperation;
    this.reflectivity = 1;
    this.refractionRatio = 0.98;

    this.wireframe = false;
    this.wireframeLinewidth = 1;
    this.wireframeLinecap = 'round';
    this.wireframeLinejoin = 'round';

    this.setValues( parameters );
  }


  // copy( source ) {

  //   Material.prototype.copy.call( this, source );

  //   this.color.copy( source.color );

  //   this.map = source.map;

  //   this.lightMap = source.lightMap;
  //   this.lightMapIntensity = source.lightMapIntensity;

  //   this.aoMap = source.aoMap;
  //   this.aoMapIntensity = source.aoMapIntensity;

  //   this.emissive.copy( source.emissive );
  //   this.emissiveMap = source.emissiveMap;
  //   this.emissiveIntensity = source.emissiveIntensity;

  //   this.specularMap = source.specularMap;

  //   this.alphaMap = source.alphaMap;

  //   this.envMap = source.envMap;
  //   this.combine = source.combine;
  //   this.reflectivity = source.reflectivity;
  //   this.refractionRatio = source.refractionRatio;

  //   this.wireframe = source.wireframe;
  //   this.wireframeLinewidth = source.wireframeLinewidth;
  //   this.wireframeLinecap = source.wireframeLinecap;
  //   this.wireframeLinejoin = source.wireframeLinejoin;

  //   return this;

  // }


}
