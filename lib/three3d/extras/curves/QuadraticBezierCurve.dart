part of three_extra;

class QuadraticBezierCurve extends Curve {

  bool isQuadraticBezierCurve = true;

  QuadraticBezierCurve( Vector2? v0, Vector2? v1, Vector2? v2 ) {


    this.type = 'QuadraticBezierCurve';

    this.v0 = v0 ?? Vector2(null, null);
    this.v1 = v1 ?? Vector2(null, null);
    this.v2 = v2 ?? Vector2(null, null);
  }


  QuadraticBezierCurve.fromJSON( Map<String, dynamic> json ) : super.fromJSON(json) {


    this.v0.fromArray( json["v0"] );
    this.v1.fromArray( json["v1"] );
    this.v2.fromArray( json["v2"] );

  }


  getPoint( t, optionalTarget ) {

    var point = optionalTarget ?? Vector2(null, null);

    var v0 = this.v0, v1 = this.v1, v2 = this.v2;

    point.set(
      QuadraticBezier( t, v0.x, v1.x, v2.x ),
      QuadraticBezier( t, v0.y, v1.y, v2.y )
    );

    return point;

  }

  copy ( source ) {

    super.copy( source );

    this.v0.copy( source.v0 );
    this.v1.copy( source.v1 );
    this.v2.copy( source.v2 );

    return this;

  }

  toJSON() {

    var data = super.toJSON( );

    data["v0"] = this.v0.toArray();
    data["v1"] = this.v1.toArray();
    data["v2"] = this.v2.toArray();

    return data;

  }

  


}
