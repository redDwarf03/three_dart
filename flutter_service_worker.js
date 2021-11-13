'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "4b6db237b3514a88107a422469adfb0f",
"index.html": "17532ef1615883312ab47f3915795e2a",
"/": "17532ef1615883312ab47f3915795e2a",
"main.dart.js": "d38a4fe798cba301ca71e40e51bcd3c3",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "15f73b7e8a8209c2206210b3ac8dea1b",
"assets/textures/kinect.nfo": "ce2e7db348773f1e41837adf7cf3f05f",
"assets/textures/decal/decal-diffuse.png": "f2fc2ddb66a092525b9eee5d1d2a0a9f",
"assets/textures/decal/LICENSE.TXT": "26830afc25d3c907a69aa75ec56f493f",
"assets/textures/decal/decal-normal.jpg": "be840b75f8b1451d6b3367b2f9e9982e",
"assets/textures/kinect.webm": "0e558d600bd7dadf0deec488bf62ee5e",
"assets/textures/transition/transition4.png": "6c1cac89dc2fd3b4717502724a75b7f1",
"assets/textures/transition/transition5.png": "2abe84f7c328b19dd9ec04736401fecf",
"assets/textures/transition/transition6.png": "1005e3263965d15996a5aa815b3dba38",
"assets/textures/transition/transition2.png": "02357a672b69e44c04899e366aaa5283",
"assets/textures/transition/transition3.png": "17dbf69cb7e79fa2fde9b92dd5d16a53",
"assets/textures/transition/transition1.png": "c8ed1477adb6eade6926f593ecd9c1c9",
"assets/textures/square-outline.png": "b905d896d71bc85b43df499e7689d3ae",
"assets/textures/MaryOculus.webm.nfo": "6033b42667e392be12600265c9e641e5",
"assets/textures/3d/head256x256x109.zip": "a076055e3cf6f5a94b67ae081b481a91",
"assets/textures/3d/Readme.txt": "b11754e67393db95477cee6d84f7f421",
"assets/textures/kandao3.jpg": "26411563b5165e1d5fd0416466091667",
"assets/textures/colors.png": "d7f400f404eec84540a93770785ae2d3",
"assets/textures/envmap.png": "4a3d4f25652c670e32663464720108c3",
"assets/textures/patterns/circuit_pattern.png": "28b98bbb36ff23e53db769b04875c9ea",
"assets/textures/patterns/bright_squares256.png": "c007be9453123b75ca0fdf66a0f67671",
"assets/textures/patterns/readme.txt": "c31a1f446cabe388e79e639786b1b1ea",
"assets/textures/uv_grid_opengl.jpg": "ea0adfcb01cfcb26fe36ac0005606444",
"assets/textures/golfball.jpg": "a84bbaa7e0765def26c0c6f7f8272bd9",
"assets/textures/water/Water_1_M_Normal.jpg": "a33d50da063b016852d1d139cf6e73b1",
"assets/textures/water/Water_1_M_Flow.jpg": "1fdb8d394dd0f76739a2830831747d22",
"assets/textures/water/Water_2_M_Normal.jpg": "639428cf065384aae22d01b529011992",
"assets/textures/carbon/Carbon_Normal.png": "a1ee00f9ccaf0e8f44e98a300c794c6c",
"assets/textures/carbon/Carbon.png": "71a6c654da02ced45106f0741a405cf3",
"assets/textures/brick_roughness.jpg": "5f1e9e3fa70ee879bef174b8da9220ad",
"assets/textures/hardwood2_diffuse.jpg": "94bed574871efc2888038b57b23805d1",
"assets/textures/gradientMaps/threeTone.jpg": "f8722875071fb3f56277c4a03f7f1223",
"assets/textures/gradientMaps/fiveTone.jpg": "f90c9de67e4962140bdfa2f8697f8e14",
"assets/textures/cube/MilkyWay/dark-s_px.jpg": "f0e258cabdd9cb6d093701aeec87d73c",
"assets/textures/cube/MilkyWay/dark-s_py.jpg": "59a6fc5f8d6521b586619f9697585cf4",
"assets/textures/cube/MilkyWay/dark-s_pz.jpg": "6f63b2bb9cc27d8d2ba8d7e18679b1c0",
"assets/textures/cube/MilkyWay/dark-s_nz.jpg": "a36b443f1f659f216df3b8f1c82dd167",
"assets/textures/cube/MilkyWay/dark-s_nx.jpg": "7982b0f336a830a4ef6a9d71cde0e0d4",
"assets/textures/cube/MilkyWay/dark-s_ny.jpg": "c3fb491120bb088842ed66ad135e6545",
"assets/textures/cube/Park2/negz.jpg": "101ece5be7592bfb4249a79e1968d3b6",
"assets/textures/cube/Park2/negx.jpg": "6b2f292c33585296de8f4e638986bb79",
"assets/textures/cube/Park2/negy.jpg": "9ed17cd7644cbc03321d4179aa06090d",
"assets/textures/cube/Park2/readme.txt": "aaed0013d845535269df03a1d6ade4a9",
"assets/textures/cube/Park2/posy.jpg": "01f7d2408087e4fc1fc03966616d35ef",
"assets/textures/cube/Park2/posx.jpg": "d7f98688348b7540277ea8c6493f12a6",
"assets/textures/cube/Park2/posz.jpg": "6579ac45179c999a22ca04f88c033e93",
"assets/textures/cube/sun_temple_stripe_stereo.jpg": "3155d0034f1cf1de6fc923280028653d",
"assets/textures/cube/angus/cube_m03_c05.jpg": "f9c578e76e75e7a4e05412b4da4e4bc5",
"assets/textures/cube/angus/cube_m02_c00.jpg": "fc5fc5fa200d898f1bf2660636c3308e",
"assets/textures/cube/angus/cube_m02_c01.jpg": "6a66e639ced554fe434b518a24fa391a",
"assets/textures/cube/angus/cube_m03_c04.jpg": "f4726c3344876876c2aa1389f422a17c",
"assets/textures/cube/angus/cube_m02_c03.jpg": "abca07cf6a171a8dee8197f1b347c5c4",
"assets/textures/cube/angus/cube_m02_c02.jpg": "34ef4015681117644c238f2026f78609",
"assets/textures/cube/angus/cube_m03_c03.jpg": "ce9e6a1bf6e7db2c0801c9da931eae85",
"assets/textures/cube/angus/cube_m03_c02.jpg": "210131c7efbe8477e6ff84941298950d",
"assets/textures/cube/angus/cube_m03_c00.jpg": "81bf6fce04d8da02bbec58f9aaa3aee4",
"assets/textures/cube/angus/cube_m02_c05.jpg": "dfb46bb25ac7ca38ceea463042c1c4e9",
"assets/textures/cube/angus/cube_m02_c04.jpg": "5fa2e4b79be025e32cb0fceb590d9120",
"assets/textures/cube/angus/cube_m03_c01.jpg": "cfb6c9ae3487a5691ad9d79959532ab5",
"assets/textures/cube/angus/cube_m08_c00.jpg": "9a13e039596e885e36849950dcc0e8fb",
"assets/textures/cube/angus/cube_m01_c03.jpg": "9d00522bbe1a5b48cda4fd4fe96462d6",
"assets/textures/cube/angus/cube_m01_c02.jpg": "8f94db8a49e9b4cf55696ef1203f1942",
"assets/textures/cube/angus/cube_m08_c01.jpg": "9a13e039596e885e36849950dcc0e8fb",
"assets/textures/cube/angus/cube_m08_c03.jpg": "9a13e039596e885e36849950dcc0e8fb",
"assets/textures/cube/angus/cube_m01_c00.jpg": "23834b08a1d9bc8e3ae5d002e81c8ede",
"assets/textures/cube/angus/cube_m00_c05.jpg": "43b5eb271b0affe8219ea0c7c6c270bd",
"assets/textures/cube/angus/cube_m00_c04.jpg": "af447e0512922f1900267a71ed3b69f1",
"assets/textures/cube/angus/cube_m01_c01.jpg": "4433c7875ff83ae6fbb3cc59fcdbf32e",
"assets/textures/cube/angus/cube_m08_c02.jpg": "9a13e039596e885e36849950dcc0e8fb",
"assets/textures/cube/angus/cube_m01_c05.jpg": "4174409464e565555597a2df65ee0648",
"assets/textures/cube/angus/cube_m00_c00.jpg": "1f746282cd7775abd34cb3ece980c4e5",
"assets/textures/cube/angus/cube_m00_c01.jpg": "f1a556fa719c9b09fa8f0d9e20993dea",
"assets/textures/cube/angus/cube_m01_c04.jpg": "a9be2267f5801e4a176ff8ce1b86680a",
"assets/textures/cube/angus/cube_m08_c05.jpg": "9a13e039596e885e36849950dcc0e8fb",
"assets/textures/cube/angus/cube_m00_c03.jpg": "69cf25a10c04652be66dbfc9769cd38e",
"assets/textures/cube/angus/cube_m00_c02.jpg": "d5754ee97c90c169ceced87ab1fca975",
"assets/textures/cube/angus/cube_m08_c04.jpg": "9a13e039596e885e36849950dcc0e8fb",
"assets/textures/cube/angus/cube_m05_c02.jpg": "0d5d1008bca3584e39f89629fe37b015",
"assets/textures/cube/angus/cube_m05_c03.jpg": "1ff9946b85199ae1887fe78bf790d06c",
"assets/textures/cube/angus/cube_m05_c01.jpg": "20b655c184bf0d1f29a34311e51f84e7",
"assets/textures/cube/angus/cube_m04_c04.jpg": "c3b52585643e3667eb76e9ecc4116614",
"assets/textures/cube/angus/cube_m04_c05.jpg": "db992a7af0cad5a28cfc0a433262189e",
"assets/textures/cube/angus/cube_m05_c00.jpg": "35ba71ca885d519cbca5e7f7efa73c6e",
"assets/textures/cube/angus/cube_m05_c04.jpg": "fd065a157a100f9931b6ae5af0c726d1",
"assets/textures/cube/angus/cube_m04_c01.jpg": "71d762d42306d46d80229b34bf96249e",
"assets/textures/cube/angus/cube_m04_c00.jpg": "79f92a52113dab426b1c12c0f2b9bac9",
"assets/textures/cube/angus/cube_m05_c05.jpg": "7a5bdfa705a52156293b0b9488966dec",
"assets/textures/cube/angus/cube_m04_c02.jpg": "a204f6952f4e595b80ba4e3be26f8039",
"assets/textures/cube/angus/cube_m04_c03.jpg": "5bdb6c116a6e3d3658cc37fe5926c698",
"assets/textures/cube/angus/cube_m07_c04.jpg": "18ac6b32bcb33a8049bab3d73682d3d7",
"assets/textures/cube/angus/cube_m06_c01.jpg": "4a57331a6037f980744e1e9ceabd2b51",
"assets/textures/cube/angus/cube_m06_c00.jpg": "fa4aa64b2829569e511a8a2b07d21bdf",
"assets/textures/cube/angus/cube_m07_c05.jpg": "d6b116349d219de62223f1bc173e90df",
"assets/textures/cube/angus/cube_m06_c02.jpg": "d14ea38a949055483fd2d00bd121d7a8",
"assets/textures/cube/angus/cube_m06_c03.jpg": "63c166fc2a5bd05e4161c2ff473b322e",
"assets/textures/cube/angus/cube_m07_c02.jpg": "1eeafdbd9283d19766953142f49f9eb5",
"assets/textures/cube/angus/cube_m07_c03.jpg": "6d3e84726d24c66f3d3b652214dd45cc",
"assets/textures/cube/angus/cube_m07_c01.jpg": "a8b0b44937336c6a44d5b32d2780cd70",
"assets/textures/cube/angus/cube_m06_c04.jpg": "536fac800821015801eed7d944012019",
"assets/textures/cube/angus/cube_m06_c05.jpg": "12a1806d2d8bea42c6d1fc85f7a5ca25",
"assets/textures/cube/angus/cube_m07_c00.jpg": "504d27ee248a93c6652683ee9caea527",
"assets/textures/cube/Park3Med/nx.jpg": "15057f5823b001157e6fe4f7a3419cfc",
"assets/textures/cube/Park3Med/ny.jpg": "859e7ed33e6b089c876db4158797740f",
"assets/textures/cube/Park3Med/nz.jpg": "4e146ea3d4b95dcd9944b5b9f2c71e17",
"assets/textures/cube/Park3Med/pz.jpg": "54dfbe0e18ba1db4f10e8c447b439e97",
"assets/textures/cube/Park3Med/px.jpg": "65540dc64fe5230780f94a47065a84e2",
"assets/textures/cube/Park3Med/py.jpg": "e0599c176357c0614a1701179377c7a2",
"assets/textures/cube/Park3Med/readme.txt": "aaed0013d845535269df03a1d6ade4a9",
"assets/textures/cube/pisaRGBM16/nx.png": "ba8ff9181126643f19184428184a64bd",
"assets/textures/cube/pisaRGBM16/ny.png": "901a252667eadad1dc77a060626ec286",
"assets/textures/cube/pisaRGBM16/nz.png": "9d49d2af86d3f8a46f01c73455798634",
"assets/textures/cube/pisaRGBM16/pz.png": "8f8d33796c4003fbee3f1b8f96b8d1a3",
"assets/textures/cube/pisaRGBM16/px.png": "d0d27405fb4dc31dd5939021d7b037aa",
"assets/textures/cube/pisaRGBM16/py.png": "cbe4da36e42cfdd8523c2f0293274766",
"assets/textures/cube/sun_temple_stripe.jpg": "5e5232c73764c0111762171ee65422b9",
"assets/textures/cube/skyboxsun25deg/skyboxsun25degtest.txt": "3b8e55e27c8cbeab8e4ec64e257d8503",
"assets/textures/cube/skyboxsun25deg/nx.jpg": "b6b818dc766ff618c211e74ca032db20",
"assets/textures/cube/skyboxsun25deg/ny.jpg": "03dea9532c298a073d10e7aec70bcdec",
"assets/textures/cube/skyboxsun25deg/nz.jpg": "11fa8330af71da13fa64bcb1e223e6e0",
"assets/textures/cube/skyboxsun25deg/pz.jpg": "3839358face501c191f142262c745044",
"assets/textures/cube/skyboxsun25deg/px.jpg": "7998f7c9cd8e68ba94d977f8de98b6e4",
"assets/textures/cube/skyboxsun25deg/py.jpg": "ad54a9a4630f2c8cf71a9ac95a7c34fc",
"assets/textures/cube/pisa/nx.png": "e94f696327b045cb939f494cc0a0d85a",
"assets/textures/cube/pisa/ny.png": "70a8aa8f8b929d03fd2c2bbe7caabe8c",
"assets/textures/cube/pisa/nz.png": "6af7bd6f734e12f2ccbb0c16d57a9795",
"assets/textures/cube/pisa/pz.png": "47a01aa16f98a1d30e7c6a1c4734db33",
"assets/textures/cube/pisa/px.png": "9210e854072e619e7a98b8a015e2eab7",
"assets/textures/cube/pisa/py.png": "53f2fd65a58e8e993c57c9b8de962292",
"assets/textures/cube/pisaHDR/ny.hdr": "c5b3774b06a2a82a945f6d06474250d3",
"assets/textures/cube/pisaHDR/nx.hdr": "d4e8f4e7b89ec328c85076baadb111a4",
"assets/textures/cube/pisaHDR/nz.hdr": "5f309e50b8abf7e72f4d6865b1d749cc",
"assets/textures/cube/pisaHDR/pz.hdr": "13b08e2e3df4368d8cd73ca27d259fd3",
"assets/textures/cube/pisaHDR/py.hdr": "a3600961aa2447b5fa50e5e04304c118",
"assets/textures/cube/pisaHDR/px.hdr": "acb4d829348437d3b94de14d5ded3839",
"assets/textures/cube/Bridge2/negz.jpg": "93ddca2043d48af80e279d408ae72ae9",
"assets/textures/cube/Bridge2/negx.jpg": "9801efa794aee5a5e8174ce0b7e5db94",
"assets/textures/cube/Bridge2/negy.jpg": "89a84f86138e2c04d4153cac9cd5d15c",
"assets/textures/cube/Bridge2/readme.txt": "aaed0013d845535269df03a1d6ade4a9",
"assets/textures/cube/Bridge2/posy.jpg": "684b9b64999cd41971ce19a485fb08ef",
"assets/textures/cube/Bridge2/posx.jpg": "d28d89004f7b92a5d4fcf483008ec73d",
"assets/textures/cube/Bridge2/posz.jpg": "fe12b4ee015194a00647bc7b1542c8b9",
"assets/textures/cube/SwedishRoyalCastle/nx.jpg": "f63d2cf8647a214abb5e3f3fbd9eeb89",
"assets/textures/cube/SwedishRoyalCastle/ny.jpg": "37013c929b955959593e0650c640d3b7",
"assets/textures/cube/SwedishRoyalCastle/nz.jpg": "c3d681e2b550d3586657c221d4a83223",
"assets/textures/cube/SwedishRoyalCastle/pz.jpg": "b0204d97020b96a360d865673bdc8bfd",
"assets/textures/cube/SwedishRoyalCastle/px.jpg": "81e09fbb6f1daa0dde076b6afa97b57e",
"assets/textures/cube/SwedishRoyalCastle/py.jpg": "13fb35d2b7c924cddb0051e45af0fb3c",
"assets/textures/cube/SwedishRoyalCastle/readme.txt": "aaed0013d845535269df03a1d6ade4a9",
"assets/textures/crate_color8.tga": "07d97eb1bb89a4d20e5b9632745fd858",
"assets/textures/758px-Canestra_di_frutta_(Caravaggio).jpg": "ded243e7192fa2754b87132984fbd936",
"assets/textures/tri_pattern.jpg": "d121adfc4964a0ac46055d7afc71429a",
"assets/textures/tiltbrush/Light.webp": "d92b9395d45eff6323c65c29d247c214",
"assets/textures/waterdudv.jpg": "3def38543f645790e6d836fcc6bdc02d",
"assets/textures/square-outline-textured.png": "6f7897fbc8a9c08f656e19446b46f735",
"assets/textures/pano.mp4": "e8d11d595f46e98389304418424fbe74",
"assets/textures/disturb.jpg": "f1b4c29e355977cd1e12c0063c500406",
"assets/textures/grid.png": "34401589a72c5aff231eadd64bbdc958",
"assets/textures/hardwood2_roughness.jpg": "875c202ad7ad9d6b2272d1b03fbc50fb",
"assets/textures/roughness_map.jpg": "b2ed84242538e86fe13d0a17d02705e5",
"assets/textures/crate_grey8.tga": "7711cb3f146f819a9b6ba88f00a57168",
"assets/textures/matcaps/040full.txt": "74eaf9b5ac4b5a7c24a3d7de48a539f4",
"assets/textures/matcaps/matcap-porcelain-white.jpg": "1b992319e2d525cb67d6637996663716",
"assets/textures/matcaps/040full.exr": "f387fd8d6ce90964e278298abe6c3a46",
"assets/textures/matcaps/matcap-porcelain-white.txt": "9398b964c4e77f93d6dc71eed8031930",
"assets/textures/alphaMap.jpg": "051a8faf14e8c77b49af6a153ab59ebb",
"assets/textures/memorial.exr": "0e6e83bf87be93d81574a8735a820b6d",
"assets/textures/waternormals.jpg": "4418dde3f6abc21dc32506acf5f5b093",
"assets/textures/sprite.png": "d30f6af129314958fefb4fbe7edbe00c",
"assets/textures/sintel.ogv": "f0312fcfa5e1d5867d32ff1b6fa74de9",
"assets/textures/kinect.mp4": "fb564196692eeae497708e96deea9cb4",
"assets/textures/memorial.hdr": "c7273f5a8dff35c6a32e0810e3b241e1",
"assets/textures/MaryOculus.mp4": "a35701d85172949d3f917991256a5f1e",
"assets/textures/crate.gif": "da499b8537ee3ce0ed8469c0a73ecc2c",
"assets/textures/sintel.mp4": "36abd8180373525089df094e2f5a5cea",
"assets/textures/hardwood2_bump.jpg": "bb09e96aa13d1d314ae8ba5a9e42175b",
"assets/textures/lava/lavatile.jpg": "4a9f002bd808e95fe4c37814b4fea834",
"assets/textures/lava/cloud.png": "b1bad13014f2b011193378243a34eef6",
"assets/textures/WalkingManSpriteSheet.png": "7ab79333cfe9bda5396bca85739bf5c9",
"assets/textures/water.jpg": "bcfb9394f4141ab0c9cdaeaf62f1aadd",
"assets/textures/terrain/grasslight-big-nm.jpg": "d9b46098a647b139e79b771b1db961a3",
"assets/textures/terrain/grasslight-big.jpg": "801373c211724f955fb17e1e2b5ba453",
"assets/textures/terrain/readme.txt": "ab72de6fc737288d22513546b0551d29",
"assets/textures/planets/earth_atmos_4096.jpg": "5443d5269947693c26395afc95807810",
"assets/textures/planets/earth_lights_2048.png": "7ccf9db799e9c713dff7dc3461dafa25",
"assets/textures/planets/earth_clouds_1024.png": "63b2ef0cc6d1bbac112d9eb4612663ad",
"assets/textures/planets/earth_atmos_2048.jpg": "e15eb8d2a32d001aa4e06884f6a566cd",
"assets/textures/planets/earth_clouds_2048.png": "5616c53eb44e724672735031cd67613a",
"assets/textures/planets/earth_specular_2048.jpg": "7dd1857a60a7a7bee6fb9e4b6c9fc9dd",
"assets/textures/planets/earth_normal_2048.jpg": "d309331c72cff9557deae2f779d47f26",
"assets/textures/planets/moon_1024.jpg": "2e7ade181b8d94636304008d6f23a516",
"assets/textures/lottie/24017-lottie-logo-animation.json": "185c0b3e9ed7a27c4239d8a8ae910d7f",
"assets/textures/uncompressed.exr": "498a429eb6cc1a32e8d7262c63a70740",
"assets/textures/memorial.png": "33284cc4352d2285357a739572535d6d",
"assets/textures/cm_viridis.png": "cec34c745302ac9091aebbe5bc1ba576",
"assets/textures/uv_grid_directx.jpg": "86c5fd733d18aeaf0ba91bf7f778c278",
"assets/textures/piz_compressed.exr": "9813f6798a87967c373c3d43687323a3",
"assets/textures/sprite0.jpg": "a19a72e4b5d084b6e79789db5ec6a23d",
"assets/textures/sprite0.png": "fbb77be9f02a7624181a10267b2b447e",
"assets/textures/pano.webm": "8be67c8ddac7c78069dbab34904c0587",
"assets/textures/sprites/disc.png": "f1d753f1a8e6ebb30d283f17ca43a560",
"assets/textures/sprites/spark1.png": "6fcfa7e6789e87957c0c7419c18fad9c",
"assets/textures/sprites/ball.png": "d9b2f9599b4c7b18010ad937667c39d2",
"assets/textures/sprites/circle.png": "af5735c195346d58bc2244da9d48678b",
"assets/textures/sprites/snowflake7_alpha.png": "fc324da1add18a604b09e35a1c817cfd",
"assets/textures/sprites/snowflake1.png": "99c51beabb59b5b026c814fe294c5966",
"assets/textures/sprites/snowflake3.png": "2dbe07e000ba1b4fe4ec5b862294caaf",
"assets/textures/sprites/snowflake2.png": "671fe112535f517acaca0b60430d62ef",
"assets/textures/sprites/snowflake5.png": "90be2cc86bdf4bbbc07fe92e0aa650e6",
"assets/textures/sprites/snowflake4.png": "b97b73a720a59d03da0c49c296eb338f",
"assets/textures/kandao3_depthmap.jpg": "0ed734d8828e17b18d9c75722435af52",
"assets/textures/cm_gray.png": "1d7f40ed70c85369b03d19318a6bb6f4",
"assets/textures/compressed/flare_2bpp_rgba.pvr": "f264a5464a74a73657afded8bb3a7209",
"assets/textures/compressed/Mountains_argb_nomip.dds": "f86d0a8820d784db9e001cb2b28a368a",
"assets/textures/compressed/disturb_dxt1_nomip.dds": "6ee457f089c2456343f26fa5b4933a73",
"assets/textures/compressed/disturb_argb_nomip.dds": "6ecb9b53c00031511c006fdac9131b49",
"assets/textures/compressed/Mountains.dds": "1adc9f7ea6880e79bd275bb443fd7b0d",
"assets/textures/compressed/sample_uastc_zstd.ktx2": "bf030777184641652270476cfaf277b1",
"assets/textures/compressed/disturb_argb_mip.dds": "e66b59d985471c11ef021b22002fe190",
"assets/textures/compressed/disturb_PVR2bpp.ktx": "1da53c1c2d35cd2ced2d755565d1d45a",
"assets/textures/compressed/flare_4bpp_rgba.pvr": "26cd5d9cbcec81d74ca77787dd7c87c4",
"assets/textures/compressed/disturb_4bpp_rgb.pvr": "e22d4132ce440ba1ddbe7678b8640f02",
"assets/textures/compressed/disturb_4bpp_rgb_mips.pvr": "004cfc824d0bbfefa0427e4601757f2b",
"assets/textures/compressed/lensflare_ASTC8x8.ktx": "2a0cd67db81c6515fde9f84b1dbcb3dc",
"assets/textures/compressed/park3_cube_mip_2bpp_rgb_v3.pvr": "9602c4ed3d303fad2f813efe690eea22",
"assets/textures/compressed/lensflare_PVR4bpp.ktx": "5a4fc3cb785f620287d230108cffd1d9",
"assets/textures/compressed/disturb_dxt1_mip.dds": "0b4f27433367add6e7d6f8178c931308",
"assets/textures/compressed/disturb_ASTC4x4.ktx": "b5aa9bb1da6b51ab77273fea036a9599",
"assets/textures/compressed/hepatica_dxt3_mip.dds": "9dfd3571232998a2c25fc68e582cf333",
"assets/textures/compressed/park3_cube_nomip_4bpp_rgb.pvr": "db51c0aa238376b5b8ee349e137c91a1",
"assets/textures/compressed/disturb_2bpp_rgb.pvr": "9b0dc8f8e41cb3aeaa1780473d5f8b4c",
"assets/textures/compressed/sample_etc1s.ktx2": "b2b94ed36534c8bdad0e454c93488426",
"assets/textures/compressed/lensflare_BC3.ktx": "4f286e02a1fae0841c679aefa7fa4b91",
"assets/textures/compressed/Mountains_argb_mip.dds": "c62d9540a8796e907de7a0566e33277a",
"assets/textures/compressed/canestra_di_frutta_caravaggio.basis": "95fb1be66d72b6f10ca6fb28e94d5b38",
"assets/textures/compressed/explosion_dxt5_mip.dds": "744585b8b098058aec1846ca0b2506ac",
"assets/textures/compressed/disturb_BC1.ktx": "698e90289ce0cefef6d7637b4a2dbd3c",
"assets/textures/compressed/disturb_4bpp_rgb_v3.pvr": "28f6fb5b7fa2c647145f579ff1582337",
"assets/textures/compressed/lensflare_PVR4bpp%202.ktx": "5a4fc3cb785f620287d230108cffd1d9",
"assets/textures/compressed/disturb_ETC1.ktx": "b2b93d765947ce7c570052fd54244f2a",
"assets/textures/compressed/sample_uastc.ktx2": "d493aacce1cfe8c31d79952b41926ca7",
"assets/textures/equirectangular.png": "d15cbe71af2f4aca6df2270082d48766",
"assets/textures/land_ocean_ice_cloud_2048.jpg": "b07dffb39178b6c32ded56481356ffaa",
"assets/textures/sprite1.png": "1a949586f4b0d119da0dbe0d25567e11",
"assets/textures/sprite1.jpg": "e24dddfab1d3d608bf1ab6df01b790cb",
"assets/textures/floors/FloorsCheckerboard_S_Normal.jpg": "da0bf6462749a20cf8b364d0083fbc85",
"assets/textures/floors/FloorsCheckerboard_S_Diffuse.jpg": "d2d3ed8b358b151149a29e198959b340",
"assets/textures/brick_diffuse.jpg": "d59d03c861d2e85435cffd9813b25742",
"assets/textures/sprite2.png": "52b94f4ec699433ec83b9dca02becb5d",
"assets/textures/minecraft/dirt.png": "bd8b1e0c0bf24e529f5942b540592859",
"assets/textures/minecraft/painterlypack.txt": "3655891f5bdb6cf647fc0455611000e6",
"assets/textures/minecraft/grass.png": "d64ca19924434e4a3193825c7be3f1b0",
"assets/textures/minecraft/atlas.png": "d5ecbc0c27a15ea6456fddc11ec60d85",
"assets/textures/minecraft/grass_dirt.png": "679bff2af41adb69d6a706773a5d5c16",
"assets/textures/MaryOculus.webm": "949ad7230032cc12e1be8093d77cd5ce",
"assets/textures/brick_bump.jpg": "18cbaac66dfe58cc57143f00de9405e0",
"assets/textures/snellen.png": "bc1a888f08c921506cc84a81f8049b43",
"assets/textures/pbr/Scratched_gold/Scratched_gold_01_1K_Height.png": "29b05cec7e581e33763393f1f84ddb55",
"assets/textures/pbr/Scratched_gold/Scratched_gold_01_1K_AO.png": "db8a9642e1249530b1a60f984c450544",
"assets/textures/pbr/Scratched_gold/Scratched_gold_01_1K_Normal.png": "c78badeb18a4c86abfe17ca09ae5ac21",
"assets/textures/pbr/Scratched_gold/Scratched_gold.txt": "4ab4b018d97b9a359fd25adf2d6dd3d2",
"assets/textures/pbr/Scratched_gold/Scratched_gold_01_1K_Base_Color.png": "338526e5d4a5c512c2568855ebdca394",
"assets/textures/pbr/Scratched_gold/Scratched_gold_01_1K_Roughness.png": "1ffedfceb579f255d40d5b53142efdbf",
"assets/textures/2294472375_24a3b8ef46_o.jpg": "5c1129fdec69f5eeefc4dcbf174c1443",
"assets/textures/lensflare/lensflare2.png": "317811aa9d29f9d99a816dd2ad4c044b",
"assets/textures/lensflare/lensflare3.png": "20a2bd3c24508cc7d41a893ed208cab2",
"assets/textures/lensflare/lensflare1.png": "512a9955235dfea402bd1496a92f7ecd",
"assets/textures/lensflare/lensflare0.png": "28ecca635ec4470ba55983a1c966b437",
"assets/textures/lensflare/hexangle.png": "1bc8fc22cb9fdbe842b471fd69c087d6",
"assets/textures/lensflare/lensflare0_alpha.png": "614e5f0fe84fa925c545775ff0d6b8de",
"assets/textures/lensflare/LICENSE.txt": "ac95af3dbc4b11d3502574f01a371d28",
"assets/textures/equirectangular/spot1Lux.hdr": "10f6838d551057ac5b45f68c33e16a32",
"assets/textures/equirectangular/royal_esplanade_1k.hdr": "375181a19c870eb048c0751a468396d4",
"assets/textures/equirectangular/venice_sunset_1k.hdr": "704548cc835be5bb43bbb280395869e7",
"assets/textures/equirectangular/moonless_golf_1k.hdr": "da9edde9ad39465900a7935dc15ab8d7",
"assets/textures/equirectangular/quarry_01_1k.hdr": "d4c4954484c7a713e283b22f71591f26",
"assets/textures/equirectangular/pedestrian_overpass_1k.hdr": "b52d400303d1578413b7283eb1e64e6c",
"assets/screenshots/webgl_shadow_contact.jpg": "2304a71b165a23a324437e979741bf28",
"assets/screenshots/webgl_camera_array.jpg": "b1826f9bd6bc43fab6f3e62b46dc4242",
"assets/screenshots/webgl_geometry_text.jpg": "17327acf9321626f5e7d08c9ea77aaeb",
"assets/screenshots/webgl_loader_obj.jpg": "237ac174b0b5eeb222a1d85b4deb7d43",
"assets/screenshots/webgl_geometry_shapes.jpg": "6b7c73a2adcaa9496c5dcc79aca95135",
"assets/KOMO-v5.cube": "356971b72bd7a755ab995e1903af9519",
"assets/winter.jpg": "e075c0795b3f3890dda68a6f6e3e0096",
"assets/AssetManifest.json": "05bf511bdc80a2443d456d9da8a1476b",
"assets/demo.png": "9c2194fc650645e9c913811bbb52aec8",
"assets/models/obj/male02/male02.obj": "310586de426d900e1540d98f81ed2b81",
"assets/NOTICES": "e9d8a13f5d774c23db7f236395ebde25",
"assets/lut.cube": "b8241bbc7a3c5b0da7947d6be8b37fe0",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/kenpixel.ttf": "16b75ff9ac3ffcfaf20de34bcebc3ad8",
"assets/pingfang.ttf": "67ee533e4da77ffdef0fc1df1fa7935f",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/assets/textures/uv_grid_opengl.jpg": "ea0adfcb01cfcb26fe36ac0005606444",
"assets/assets/screenshots/webgl_shadow_contact.jpg": "2304a71b165a23a324437e979741bf28",
"assets/assets/screenshots/webgl_camera_array.jpg": "b1826f9bd6bc43fab6f3e62b46dc4242",
"assets/assets/screenshots/webgl_geometry_text.jpg": "17327acf9321626f5e7d08c9ea77aaeb",
"assets/assets/screenshots/webgl_loader_obj.jpg": "237ac174b0b5eeb222a1d85b4deb7d43",
"assets/assets/screenshots/webgl_geometry_shapes.jpg": "6b7c73a2adcaa9496c5dcc79aca95135",
"assets/assets/KOMO-v5.cube": "356971b72bd7a755ab995e1903af9519",
"assets/assets/winter.jpg": "e075c0795b3f3890dda68a6f6e3e0096",
"assets/assets/demo.png": "9c2194fc650645e9c913811bbb52aec8",
"assets/assets/models/obj/male02/male02.obj": "310586de426d900e1540d98f81ed2b81",
"assets/assets/lut.cube": "b8241bbc7a3c5b0da7947d6be8b37fe0",
"assets/assets/kenpixel.ttf": "16b75ff9ac3ffcfaf20de34bcebc3ad8",
"assets/assets/pingfang.ttf": "67ee533e4da77ffdef0fc1df1fa7935f"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
