part of three_renderers;


class WebGLMultipleRenderTargets extends WebGLRenderTarget {

  bool isWebGLMultipleRenderTargets = true;

	WebGLMultipleRenderTargets( width, height, count ) : super(width, height, null) {

		var texture = this.texture;

		this.texture = [];

		for ( var i = 0; i < count; i ++ ) {
			this.texture.add( texture.clone() );
		}

	}

	setSize( width, height, {depth = 1} ) {

		if ( this.width != width || this.height != height || this.depth != depth ) {

			this.width = width;
			this.height = height;
			this.depth = depth;

			for ( var i = 0, il = this.texture.length; i < il; i ++ ) {

				this.texture[ i ].image.width = width;
				this.texture[ i ].image.height = height;
				this.texture[ i ].image.depth = depth;

			}

			this.dispose();

		}

		this.viewport.set( 0, 0, width, height );
		this.scissor.set( 0, 0, width, height );

		return this;

	}

	copy( source ) {

		this.dispose();

		this.width = source.width;
		this.height = source.height;
		this.depth = source.depth;

		this.viewport.set( 0, 0, this.width, this.height );
		this.scissor.set( 0, 0, this.width, this.height );

		this.depthBuffer = source.depthBuffer;
		this.stencilBuffer = source.stencilBuffer;
		this.depthTexture = source.depthTexture;

		this.texture.length = 0;

		for ( var i = 0, il = source.texture.length; i < il; i ++ ) {

			this.texture[ i ] = source.texture[ i ].clone();

		}

		return this;

	}

}

