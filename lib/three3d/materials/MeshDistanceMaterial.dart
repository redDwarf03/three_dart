part of three_materials;


/**
 * parameters = {
 *
 *  referencePosition: <float>,
 *  nearDistance: <float>,
 *  farDistance: <float>,
 *
 *  map: new THREE.Texture( <Image> ),
 *
 *  alphaMap: new THREE.Texture( <Image> ),
 *
 *  displacementMap: new THREE.Texture( <Image> ),
 *  displacementScale: <float>,
 *  displacementBias: <float>
 *
 * }
 */

class MeshDistanceMaterial extends Material {

  bool isMeshDistanceMaterial = true;

  late Vector3 referencePosition;
  late num nearDistance;
  late num farDistance;




  MeshDistanceMaterial( parameters ) : super() {

    this.type = 'MeshDistanceMaterial';

    this.referencePosition = new Vector3.init();
    this.nearDistance = 1;
    this.farDistance = 1000;
    
    this.map = null;

    this.alphaMap = null;

    this.displacementMap = null;
    this.displacementScale = 1;
    this.displacementBias = 0;

    this.fog = false;

    this.setValues( parameters );
  }


  copy ( source ) {

    super.copy( source );

    this.referencePosition.copy( source.referencePosition );
    this.nearDistance = source.nearDistance;
    this.farDistance = source.farDistance;
    
    this.map = source.map;

    this.alphaMap = source.alphaMap;

    this.displacementMap = source.displacementMap;
    this.displacementScale = source.displacementScale;
    this.displacementBias = source.displacementBias;

    return this;

  }


}
