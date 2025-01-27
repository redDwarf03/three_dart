part of three_core;

var _vector = new Vector3.init();

class InterleavedBufferAttribute extends BaseBufferAttribute {

  String name = "";
  InterleavedBuffer? data;
  int itemSize;
  int offset;
  bool normalized;
  bool isInterleavedBufferAttribute = true;
  String type = "InterleavedBufferAttribute";

  InterleavedBufferAttribute( this.data, this.itemSize, this.offset, this.normalized ) : super() {
  }

  get count {
		return this.data!.count;
	}

	get array {
    return this.data!.array;
	}

	set needsUpdate(value) {
    this.data!.needsUpdate = value;
	}


  applyMatrix4 ( m ) {

		for ( var i = 0, l = this.data!.count; i < l; i ++ ) {

			_vector.x = this.getX( i );
			_vector.y = this.getY( i );
			_vector.z = this.getZ( i );

			_vector.applyMatrix4( m );

			this.setXYZ( i, _vector.x, _vector.y, _vector.z );

		}

		return this;

	}

  applyNormalMatrix( m ) {

		for ( var i = 0, l = this.count; i < l; i ++ ) {

			_vector.x = this.getX( i );
			_vector.y = this.getY( i );
			_vector.z = this.getZ( i );

			_vector.applyNormalMatrix( m );

			this.setXYZ( i, _vector.x, _vector.y, _vector.z );

		}

		return this;

	}

	transformDirection( m ) {

		for ( var i = 0, l = this.count; i < l; i ++ ) {

			_vector.x = this.getX( i );
			_vector.y = this.getY( i );
			_vector.z = this.getZ( i );

			_vector.transformDirection( m );

			this.setXYZ( i, _vector.x, _vector.y, _vector.z );

		}

		return this;

	}

	setX ( index, x ) {

		this.data!.array[ index * this.data!.stride + this.offset ] = x;

		return this;

	}

	setY ( index, y ) {

		this.data!.array[ index * this.data!.stride + this.offset + 1 ] = y;

		return this;

	}

	setZ ( index, z ) {

		this.data!.array[ index * this.data!.stride + this.offset + 2 ] = z;

		return this;

	}

	setW ( index, w ) {

		this.data!.array[ index * this.data!.stride + this.offset + 3 ] = w;

		return this;

	}

	getX ( index ) {

		return this.data!.array[ index * this.data!.stride + this.offset ];

	}

	getY ( index ) {

		return this.data!.array[ index * this.data!.stride + this.offset + 1 ];

	}

	getZ ( index ) {

		return this.data!.array[ index * this.data!.stride + this.offset + 2 ];

	}

	getW ( index ) {

		return this.data!.array[ index * this.data!.stride + this.offset + 3 ];

	}

	setXY ( index, x, y ) {

		index = index * this.data!.stride + this.offset;

		this.data!.array[ index + 0 ] = x;
		this.data!.array[ index + 1 ] = y;

		return this;

	}

	setXYZ ( index, x, y, z ) {

		index = index * this.data!.stride + this.offset;

		this.data!.array[ index + 0 ] = x;
		this.data!.array[ index + 1 ] = y;
		this.data!.array[ index + 2 ] = z;

		return this;

	}

	setXYZW ( index, x, y, z, w ) {

		index = index * this.data!.stride + this.offset;

		this.data!.array[ index + 0 ] = x;
		this.data!.array[ index + 1 ] = y;
		this.data!.array[ index + 2 ] = z;
		this.data!.array[ index + 3 ] = w;

		return this;

	}

	// clone ( data ) {

	// 	if ( data == null ) {

	// 		print( 'THREE.InterleavedBufferAttribute.clone(): Cloning an interlaved buffer attribute will deinterleave buffer data!.' );

	// 		var array = [];

	// 		for ( var i = 0; i < this.count; i ++ ) {

	// 			var index = i * this.data!.stride + this.offset;

	// 			for ( var j = 0; j < this.itemSize; j ++ ) {

	// 				array.add( this.data!.array[ index + j ] );

	// 			}

	// 		}

	// 		return new BufferAttribute(array, this.itemSize, this.normalized );

	// 	} else {

	// 		if ( data!.interleavedBuffers == null ) {

	// 			data!.interleavedBuffers = {};

	// 		}

	// 		if ( data!.interleavedBuffers[ this.data!.uuid ] == null ) {

	// 			data!.interleavedBuffers[ this.data!.uuid ] = this.data!.clone( data );

	// 		}

	// 		return new InterleavedBufferAttribute( data!.interleavedBuffers[ this.data!.uuid ], this.itemSize, this.offset, this.normalized );

	// 	}

	// }

	toJSON ( data ) {

		if ( data == null ) {

			print( 'THREE.InterleavedBufferAttribute.toJSON(): Serializing an interlaved buffer attribute will deinterleave buffer data!.' );

			var array = [];

			for ( var i = 0; i < this.count; i ++ ) {

				var index = i * this.data!.stride + this.offset;

				for ( var j = 0; j < this.itemSize; j ++ ) {

					array.add( this.data!.array[ index + j ] );

				}

			}

			// deinterleave data and save it as an ordinary buffer attribute for now

			return {
				"itemSize": this.itemSize,
				"type": this.array.runtimeType.toString(),
				"array": array,
				"normalized": this.normalized
			};

		} else {

			// save as true interlaved attribtue

			if ( data.interleavedBuffers == null ) {

				data.interleavedBuffers = {};

			}

			if ( data.interleavedBuffers[ this.data!.uuid ] == null ) {

				data.interleavedBuffers[ this.data!.uuid ] = this.data!.toJSON( data );

			}

			return {
				"isInterleavedBufferAttribute": true,
				"itemSize": this.itemSize,
				"data": this.data!.uuid,
				"offset": this.offset,
				"normalized": this.normalized
			};

		}

	}


}


