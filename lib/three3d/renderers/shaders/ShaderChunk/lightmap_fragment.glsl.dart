String lightmap_fragment = """
#ifdef USE_LIGHTMAP

	vec4 lightMapTexel = texture2D( lightMap, vUv2 );
	vec3 lightMapIrradiance = lightMapTexelToLinear( lightMapTexel ).rgb * lightMapIntensity;

	#ifndef PHYSICALLY_CORRECT_LIGHTS

		lightMapIrradiance *= PI;

	#endif

	reflectedLight.indirectDiffuse += lightMapIrradiance;

#endif
""";
