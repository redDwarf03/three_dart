part of three_webgl;

class WebGLCubeMaps {

  WebGLRenderer renderer;
  var cubemaps = WeakMap();

  WebGLCubeMaps(this.renderer) {

  }

	

	mapTextureMapping( texture, mapping ) {

		if ( mapping == EquirectangularReflectionMapping ) {

			texture.mapping = CubeReflectionMapping;

		} else if ( mapping == EquirectangularRefractionMapping ) {

			texture.mapping = CubeRefractionMapping;

		}

		return texture;

	}

	get( texture ) {

		if ( texture != null && texture.isTexture && texture.isRenderTargetTexture == false ) {

			var mapping = texture.mapping;

			if ( mapping == EquirectangularReflectionMapping || mapping == EquirectangularRefractionMapping ) {

				if ( cubemaps.has( texture ) ) {

					var cubemap = cubemaps.get("texture").texture;
					return mapTextureMapping( cubemap, texture.mapping );

				} else {

					var image = texture.image;

					if ( image && image.height > 0 ) {

						var currentRenderTarget = renderer.getRenderTarget();

						var renderTarget = WebGLCubeRenderTarget( image.height / 2, null, null );
						renderTarget.fromEquirectangularTexture( renderer, texture );
						cubemaps.add(key: texture, value: renderTarget);

						renderer.setRenderTarget( currentRenderTarget );
					
						texture.addEventListener( 'dispose', onTextureDispose );

						return mapTextureMapping( renderTarget.texture, texture.mapping );

					} else {

						// image not yet ready. try the conversion next frame

						return null;

					}

				}

			}

		}

		return texture;

	}

	onTextureDispose( event ) {

		var texture = event.target;

		texture.removeEventListener( 'dispose', onTextureDispose );

		var cubemap = cubemaps.get( texture );

		if ( cubemap != null ) {

			cubemaps.delete( texture );
			cubemap.dispose();

		}

	}

	dispose() {

		cubemaps = new WeakMap();

	}

}
