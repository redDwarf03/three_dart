part of three_geometries;

class ConeGeometry extends CylinderGeometry {

  String type = 'ConeGeometry';

	ConeGeometry( [radius = 1, height = 1, radialSegments = 8, heightSegments = 1, openEnded = false, thetaStart = 0, thetaLength = Math.PI * 2] ) : 
  super(0, radius, height, radialSegments, heightSegments, openEnded, thetaStart, thetaLength )
  {

		this.parameters = {
			"radius": radius,
			"height": height,
			"radialSegments": radialSegments,
			"heightSegments": heightSegments,
			"openEnded": openEnded,
			"thetaStart": thetaStart,
			"thetaLength": thetaLength
		};

	}

}
