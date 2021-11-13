'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "4b6db237b3514a88107a422469adfb0f",
"index.html": "b45b04da5ec94473e309765799828f98",
"/": "b45b04da5ec94473e309765799828f98",
"main.dart.js": "d38a4fe798cba301ca71e40e51bcd3c3",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "15f73b7e8a8209c2206210b3ac8dea1b",
".git/config": "17690c2569ad0e05cc0d037ca803a46f",
".git/objects/61/b2428738689b97500c41de7c6efdbf895aabf8": "5b444e640cbb4406b901cb299f204a94",
".git/objects/61/25a4cbb023ad3b740d3fd24f823aa6b58e6d56": "16d591d43203cbdf5b0fb6c96c6a2718",
".git/objects/0d/2cfda1299372ae8b9183c79162db000316db32": "f12d467764097d4eea3d95ab0063f815",
".git/objects/0d/76b38faadebf1cbe0a5c57bc986692e7f55930": "729376d5ed7f118b7a2aa60a50885de9",
".git/objects/95/d721cb51cddfb48cb7462195503a234f503245": "184d289a6c2b170fd39fb0eb71b5e445",
".git/objects/95/9c0dc77d9cb137344988da4456af7125da14c7": "8877344902e0da4b99f40c0f9d5ce918",
".git/objects/59/3955cba57a8fd01e099e6890332568ae2aeeac": "6d9f9a05ea45ca0a414756704c1a1cb0",
".git/objects/59/24dbad4ccf819399367550a830ad8f919ae5da": "ed10ce3ffc86d2d43ff4a326b67a9425",
".git/objects/59/24a763b1faa3d285011ada2110fc0a744af1c4": "006378bf74b13756cfdd07f0363a0177",
".git/objects/92/67ebba74bb2c2ce835d4a51e17d05e92a393e0": "20a0eb16c8b0a1a3050c3afd88bac4ef",
".git/objects/92/d8a65c33493d8206859d06f6ff95f1c909f3a9": "6c98f5b24af90123c6ea32f432eae948",
".git/objects/92/572c6221f356e3541815873e48b8b8373a19a9": "0f5210c1308271ec8a22a14bb18377ef",
".git/objects/0c/e9e3d250e2863f986369d48738d7a09bd6b97c": "1cec223a1db0a7a35ae7a3cdd87ddaf7",
".git/objects/66/493d6c879c1d88c1ba74cbb3f7849cdae91718": "393dff2d3dec7d977108894e5d0bf278",
".git/objects/66/fe5c9663549193a4ff5b339192235d4cfbe1c1": "2f37e8ca9ea738b3af6ae3ccf6db7307",
".git/objects/3e/1ed4cb6223197139f8053227106faaeccfb5e1": "bdcb4ec47161efd0c74df700aece6c96",
".git/objects/50/cd1a6c4c0e14b9dbe9efbb57b99eec1eb93cdc": "49718d2a27f61c0b5026e06cd8c93bcb",
".git/objects/68/d37df59697e2a147607839a9bae1e93788d749": "9f8adf16ac1438da3e0148805060a5a8",
".git/objects/6f/cb32868a28482f4ae40c67ad2383653770f698": "fcfae8acb035e47a0afcb4b54b81473a",
".git/objects/03/b357e225cb0536e6d4b5e07feb73c33441f600": "19e7bebfcf04a33d46b22de781e9fa34",
".git/objects/9b/1f7b6072e157b7d2019499243893787fe877ea": "3cb06387f7b5be4ea2f834437055f768",
".git/objects/9b/ab9323688006b4e229b3aca143cb2d2b7f08d0": "a5ba5d01ee8e6d4d99b432558a8e5910",
".git/objects/9b/b8f7141224cc8b04c326b37b822dda4f85166d": "7060dc07e763e33112afb1926798013e",
".git/objects/9e/47547a78364ef66575ddffec537aeac39dc2de": "455fbeaa4aef9190fbc7e914d0b0ec8d",
".git/objects/9e/648f3f830c45cef84144a1e7e7a87914795946": "b3308c76851a06ae6433d91b5eed3dfb",
".git/objects/04/8bb13a8bb240ded4609f398fc10c7b4d049a73": "41989495d0130a46923735920bb642a9",
".git/objects/6a/a25ede1539f48c1b2033f0894742ad8c5117c0": "b789e4df410a82b33bae0744ebc4bd83",
".git/objects/32/03148837c84a6addbb500d59e53734efa29463": "98eeb42b2d76919bf4e95fafafd0560a",
".git/objects/32/46ad559eeae0370195978eaed83f1053ee13fd": "a043dbc0a0bda96ce2127799ccc27506",
".git/objects/32/828edb85b65f20bea7f30ce3939bc6366f9971": "6d4b6cf5fe9b2e70d9156c41ac6d1b2a",
".git/objects/32/f7aba11313925649128dc57403ff1a03a2705c": "798d5342780c1bad0e2f23b5720d84ca",
".git/objects/35/538a64540bec63f4a10bcdbaf5549577f0917e": "8b6cf51826815688ccb4116aee2093ee",
".git/objects/69/463d06a0e766352be067fdd7d9fdb6c69d24f3": "50c27368430f9da069a1fd9c4e3e88e9",
".git/objects/69/63a34dab0af17acfe90e3299263e52d27c6df4": "eb331fcfbe4ff4dd9daa29c90e1944c2",
".git/objects/56/0ff986cb8507ed17dab41f24c818631d9c2d21": "1a73efd94336247dc7be0eff4c8fcc12",
".git/objects/56/a53c8e9fde2e6c87b51b41aa82d4f8e934c7b8": "98f35481fbd0a9d64328a260302d6c91",
".git/objects/56/df0a84d9316546c45b16e5083ac94161f31bff": "f4bf94f45f24f9e66d6fc6826431ef8f",
".git/objects/51/188815fda9e56f3b5bf37aa005cd368b296add": "795f4b515d2dbaae100f69cf2ceaf983",
".git/objects/3d/249a72973ef2c8d0c3b567c52c659221b7828a": "1925b7b6e9b18f0c2530a8bd2e54b868",
".git/objects/58/eca2cd979efcce9d2c612c5f9ba82d2061f247": "95d39db8ea2e81df1cb6859327c946d3",
".git/objects/58/c9579dd27e242291c05bbd8b92d50c90dad411": "213a638a7542be3c484372a0c09eb76e",
".git/objects/58/278acb40c1efb7a2af4c65520e865bc55c9863": "6acc87b5b49271f1190dfc35112e3499",
".git/objects/0b/34dfd613f1927c2a1f16bfd26469b8d53a8ae9": "7d20e305a0445d5560f1907e88edfd6c",
".git/objects/0e/f5d7e9281bf86b31c4119f057ab6bdb4271db7": "8374f0a81dedf0e9908f6450828fea48",
".git/objects/60/86f514a866e0f5f70df5a3d207070cee2bb2de": "6ad03867afbb739067301ef275667212",
".git/objects/34/1b8b8b54331c0225591d2b3d8cde52b3b0b5dc": "d2bf4db97776a8396968e3d484f892fb",
".git/objects/34/9621ec50e32b7992d885aef59e13793dc2b9ce": "abcdfc827714eccc084c09e36798dc03",
".git/objects/5f/96b9e7c531c99698794f6578773f2bd0723219": "b5b83bce2b25d25ed2d25ed7a5cca744",
".git/objects/33/e8966192146f6d8c3098cbc901404e968e22a1": "beab74c0cca4d92e0e32ca1560755057",
".git/objects/33/a49b9e35207a20612252172c44f654375d0da1": "f24714059da468a56fe51ff54e3a1be2",
".git/objects/33/6d1117a6476466705ce55c03e533952621743d": "5ba3ea2690c46e778118bad60f6a2212",
".git/objects/05/9c76a7f50439605ad6bb6e577884cc059b86ff": "5c3ab6bf0812879d53f6da8acec7ca43",
".git/objects/9d/fe03ce483a02fff31c35421094c53a333097bc": "8a40e8439eecbbb9d5ceafe0316a7c80",
".git/objects/9d/a63fae05f4bdc27414554008c3da056a1b650e": "237923a4ae31e18c95180ba5693be89a",
".git/objects/9c/3d33a904b32d6d1704f5389b83db75aff57646": "cc4a96d2a0040491c54e48cea6ff898e",
".git/objects/9c/47183ae9d74fd055c80b1b820d105d4ef45cee": "4699cefeb0b7ece93f85789c92bdd180",
".git/objects/02/32c24ccaad03e693f5089977a91106180458f1": "2c940969fc225190e66db9105569a0bd",
".git/objects/02/246c176f61fc795f06dd7b62ad60fb8f4142f8": "750c42ca085e0ddf5425581885a26335",
".git/objects/02/37b575c0635049abdb8a17bdff16a176188e96": "953b1a929a60c25045f7dca3310f1b2c",
".git/objects/a4/d134c4ff7b0901ec5e6b4d1f04dd78fc5a5171": "727c944053dd595f31c146c2f211fcfa",
".git/objects/a4/308ef1f2ae66b7b3bbb42530ec4bc4aaf073b7": "13b33c019d860a173bedf269ae052b84",
".git/objects/a4/6d5b7550b0a93f3136d711595f6ed593299dc9": "2e6dd5ee7bb4b64e59a7a72ebf82e3c4",
".git/objects/b5/3eaa0d881cbcd451e1d086251bee22631c5346": "8111c1a4353c964525026c08f393e7a6",
".git/objects/b2/7ae1fe4c87297d23556377da5d609c91640702": "f150d5bdb08bc44ade44160e23fee1cf",
".git/objects/b2/54463d1894f185e5c3bb8858801bf396aec77f": "caf592250cb8e905b5882574a2d51431",
".git/objects/b2/c4dbd15f47db336ca1f929a0e8d8e8cd201211": "6742b4c453b456494f32b3ec01a4d4c9",
".git/objects/b2/544dc3775691c8ac7e34406f0ade07b0a7c8e9": "2c145f1034e20ec29b5b9059c2d1ee5d",
".git/objects/d9/0ced7257c794bd5e84289f0c0d70d898a0da72": "9908d0d36c35bba02afc5e2dbe9d9af0",
".git/objects/d9/b475d448c44f624ea5fe15f74eb392f7b5c00e": "6015c20b64248358ad9a01b9007f69cd",
".git/objects/d9/f6d46f6ed926ea4c91c881d25cb6be1a5495f2": "98fd49381aae6edeee846f2dff5c795f",
".git/objects/ac/5c8c6bca70b3400fe912f1f2d15046771be639": "c61a9bb4e0138cfac1d4a3569869d9e1",
".git/objects/ac/2225672468ef407d656aa5ef0e225a0db6433d": "427286e3159a84e5a53b068369a00508",
".git/objects/ad/dfd4b40a3a424cf0f7d173aef8c5bfc416a596": "2a3c92d7d0ed40842b09b105388a2dbd",
".git/objects/bb/84ca5c2835e8c74e776f4902f577fbecf46e82": "d689960237100250ab4b8ca031c9d73f",
".git/objects/d7/8fbbe3ea394b57f06ba087c663ef19d2cac903": "7fd67ff75a5623e5580fb30bb3806599",
".git/objects/d7/bbf6263c90e169c260a9eb1e81bcc8a9dc6360": "e411de8dc9ad2aacc5763e03aeb690fa",
".git/objects/d0/f5f706fda07cbc59d4107aca63c15aea18724d": "26f43319b8715ef9767d7a07bb5d0eb3",
".git/objects/df/58f4c6186e23f3baf31c81af1b237273e09623": "171ce3e0452caaa44790f192a649c845",
".git/objects/df/cd5c0478ae5b1449cef4575103a1fcb8bee663": "a53ddd4316fde796d30cc3bdd01aa00a",
".git/objects/a2/eb281b466687aa05c0bd0ff20171d6e5dba691": "e2b1e0064a71fe6d7b4a17b44c58b5a7",
".git/objects/a5/1a38dc796eec34cfeb9c45e9b7a4d49d129449": "ec1d1c5721d0fcd367813d268f4d018d",
".git/objects/d1/494a7bcaaf82fcae3bd41e4932dd4fdd5440a8": "fcffe141b3c1bdd31f04c805ccd9dfe0",
".git/objects/d6/53e9962667e1771860f47f12d1be1328ace967": "fd0c17b481bad5e1ed4bddb0b133831a",
".git/objects/d6/64db214832f48205d32d863b9c0738fa33688a": "d2a5567e232f2ae5101e6dad753376b7",
".git/objects/ae/d63736fa7e721ddce22a75b5717d4af92b2286": "9c132de4a81f917e742c23a638c20934",
".git/objects/d8/a9839e8d7cdd3666f2c352caef52b8a6f4ea29": "ce6248224d9e9835b10b33decbcc5342",
".git/objects/ab/1f1c744c2131682afa9501d2d7310977834cb0": "8d02839299e35f53bd1afd5d29a70e5c",
".git/objects/ab/6337b9db19bbbc89484cb7e9e0776c289a6eb1": "49da695262aedf962cf3731ba36e5bc9",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/ab/b1e6611d14eb27815e33b4283b3c679cb47b7b": "937dc9b1b7de0d8039840da27cea1346",
".git/objects/ab/b71a1f95536995aa867c9561ef0d9696f483b4": "abe07eb3f9cea3f7c21718b47b2d2475",
".git/objects/ab/6f745900e32105f5acec48dba1f966e5aacbbe": "bf810e1c83c769d05748eb248a20d1fe",
".git/objects/e5/b365401667118391b51b9af98407eac4552478": "92ab6980f9417ce00af5a9a6e5eb3483",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e5/750f70d48c590687fe6484bc6ea39232282e11": "739e82a9f1b4e8e5b7df92ecd739c210",
".git/objects/e2/e0358487c8c44396b86411f8e8ae637eae8e94": "ef756a5bc423764312ff6cf3be2c9c41",
".git/objects/f4/5e5f034580efbd57ca6b807c308b0e02d40058": "bcd1fe27d8fb4311322b8cf93a0266df",
".git/objects/f4/d1636894e5d02323a89b55bff672cc14e0de38": "0664a6c096f522e493151835448d2e7a",
".git/objects/f4/59621ce88145b243587334d19c4ae81eba4117": "6879122b31a092c41a8d7a4ed7d77814",
".git/objects/f3/4c22c0cf23b0d671877cd4bb7339464f3ead82": "5ce22e1eec2c165fb855e47e81cbaaa2",
".git/objects/eb/b9e59586aa259e14f8a6dd86578eb1e9cc613a": "512680ddbb664a323573a9a7a9b10072",
".git/objects/c7/8dd592c1e09419a0a3fae1c61968a8ec5f3757": "427750e74ffd63e1d2a3d2e34fd4349f",
".git/objects/c7/5ce6e2e2aac5b78e92d56f327aa6dba0e8ae9b": "d15f93a03b5ac0612a2717bf7140b197",
".git/objects/c7/88c80746e3fdbb540487a2197ef3e70e34dc10": "935257cbe6de95f00c175b24f2411cc0",
".git/objects/c7/cc2e93f9cca80618cedc7af5840e10b7973f7c": "51081294492d4bed5652acbc9fb955eb",
".git/objects/c0/b26c91a7a26c93f045ed16fc4c55b3cb3316a2": "a7ebfe9fe9a6c5def27e64770b2d8057",
".git/objects/ee/b444da89b9863064209e854cc7acbd044d12ed": "17cbd25873e37a54f3c828c43a3cfe33",
".git/objects/ee/d18430a01d8c725757abe6b5cbc242f16e83ee": "81551375b695fc957c8a7746c65fe152",
".git/objects/c9/10907abbb979952011fbd405c5b0da166bad0b": "bcdca1a958d5d9f70818447a0763e983",
".git/objects/c9/74c51c3ab3c8a6f9d40a1af549e42eb653e233": "8070944b65ba8314e6e670c4ddfe6b27",
".git/objects/fd/636419c02e5a30d7d4dad6c6d167c93ecb3921": "5951f590df23905a41d730846c93ecdc",
".git/objects/f2/f705186c82c91a432c4ee1a968c91bb7da69fa": "08fca12319e839301fe4684d8f06b21e",
".git/objects/f5/27be5bf00d7a355a014960a31593485263fd01": "67f662f98d54d67ce701aba2885d0885",
".git/objects/e3/dc57ecc7dd98f161bec6930dc526775a07f929": "2f04cff08030465f9099af6fe692b076",
".git/objects/cf/e5de0b26a9cda89a34420bcba7b0fcd72ed399": "4089b2d24c31ee614562e727d80a266c",
".git/objects/cf/05210c29dcf64c87aa6a3903fe40beb44211d6": "bfcdcccd637d1c761d412f507865e9cd",
".git/objects/cf/c4313ae7a6593fa6e6da5c2d4d0ffcc320bfd1": "e2899977e81a31353fbaf3afc06b8201",
".git/objects/ca/0f1ea02be748241c483c83110fa2d18edffdd2": "214ea6b4bf9d3345a16aa63c51f06fd1",
".git/objects/e4/5a325ee01d85dcaffe291171199ad0e2b3105b": "b45f599a7b05d3f8b21b2a496a8be21e",
".git/objects/e4/7898794fc3d3a2222b51cbfbd244e9319bfddd": "669b25d5f4ede1b81d4fc5c538d6eb96",
".git/objects/e4/6578c4b373820a0a49d97cc381aff22a950414": "848e5e85dbe847772b980bcb0ad67380",
".git/objects/e4/c48389d0d4972430500a25091bbc240b20ffa5": "dbaf09a75c798ecdf3b357c828b29a93",
".git/objects/c8/62904263e9071c8fff036c9a5d6a05ea9b3817": "296e550a73b18150907f8c4f00a5c7ec",
".git/objects/c8/97c8673f331c1beb39d5767a25ae1f81622a14": "55a635f47b305c068b95c54ba1dbae31",
".git/objects/ed/6c7f85a33abbed6f41e6e08585a594f0bd5fae": "19f83ce7ecf3969e462edca585314167",
".git/objects/c1/3bd8721416e851243ca360f83aa98255a315eb": "9ed2d3ad9a813ddb3dc39ce0868e7dfb",
".git/objects/c1/8707c7abec5c8374603f61f957ba1810a62b15": "e0e518b9a4dfb40778718ee9a7d84688",
".git/objects/ec/76c7ea975303994411ae9f3aa7add2cb21675c": "877073cbbbf119422b6be352b03d2ddf",
".git/objects/ec/5b8c985ca8c63162b76200f6c674ccea8ce9d2": "94dd851b3b7e8b813a1a8b20db855235",
".git/objects/20/746c8b82ec90cefc1c84a7f8517c2cfcbc4ee5": "537c044496a2500c111175087feb34a0",
".git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
".git/objects/11/a7f144875046e5ede887d09178f08cf73016a3": "7dc69ce2e9ac7ad1298dff4df31ae4f0",
".git/objects/7d/794c2400ecbd121d2c2a4c6d4e3d63032ced31": "a9f8786614a0b9cd351d1f6b14ad8887",
".git/objects/7d/ad62af679076e1008588520c570992851183cd": "663acc6adfe722ea0d099473a9ab4120",
".git/objects/29/acabd154b0d6ee5bf7c2b9575457b01adc5761": "3a22faab70597543dab8e9252fda92d8",
".git/objects/7c/fe6ed58dd9b9814b12dbf0f4adfabaeeaf4229": "032cc881a5e8b43ff7e2d5062d17ab90",
".git/objects/7c/c171b9e96b6ad8a1d5a0266f6304d1ec8d9607": "5ba77945c431e1f07d9ce05aaa83a990",
".git/objects/16/a61bb33692cd6f5bc7bd4186209c90e215ce01": "f82604253f20c4da1617e5a460bd6121",
".git/objects/16/28501616377f4bf0b5117cea3b6fbdb8db1826": "55fa35d3d19194fd1bcefa11980a2bee",
".git/objects/42/de04cdea4b883f6071938aa36cd9d00c201fa9": "e76cef77936ce0329f5008a4146a5241",
".git/objects/42/75ab0836b482e4fbe1d5081976f3f2ffb41ffa": "195223ab3774f7d348d898a6dcf297d9",
".git/objects/89/bef7cb8200edfc66f3eb7785ed7eb1f66e5229": "14b2636bcbecea5d08cc3a74b491026e",
".git/objects/89/b05e2d230ca937eb8e6a4b6ca32e232321186d": "baaddca25f20b7f8254ddf8c0dcbdd90",
".git/objects/89/c7d9acc57b602d2cefb2f8bbdd8faa05f81406": "dbf35825e43e56ee6a895cc10573dcba",
".git/objects/89/fb7d2f64d9b1cf9a99e391e97f00dc978975de": "69371ef055e35cac0f5e5e8a14c87a45",
".git/objects/1f/cd26c4850844c61664dc54897e8015d4ab4695": "c41b2210a561fe839d7b873c40e60209",
".git/objects/73/5f9e6b025a7421ea378cb106cf1d288eea219f": "49dcd154bcadaa7865dc7718738a2590",
".git/objects/73/f90c27c51c6d05394159908a67c10672f6efc8": "c4f96b2619099f7595e968d93a5b76f6",
".git/objects/87/f4d1ca940b5ebfee0d7edd6cd93f7b3935c3a1": "77e38afbdfa5855227bbdeb6ca50ac85",
".git/objects/80/9b500206cd20f96ca8898581f51f87f744a8ab": "1836dcc542f0b408363ce301d6f0917f",
".git/objects/80/df96b9f45ddaec50c3aff6aa0a39e05bac4d10": "be9ccea1b91d5ec383469c65f2ca5382",
".git/objects/80/30e682e5305be83501898d0f02bfe0bcfae627": "dc13da0340b847d903c62b67323bd6e6",
".git/objects/1a/38c9362bc437dac530ac9f57afbfab4ce7370c": "f2603cebd44b1142aaa7cdad585a00a5",
".git/objects/7b/e248ec56349c5348f80b499c2fb577fc78d45e": "270fb01ede8917bdf309efe96fb878e1",
".git/objects/7b/21f0ecd7dad3f7152a09edf5e32b81bdb597f8": "73ee73a145e50edda5b0f277ba3897d3",
".git/objects/7b/58481146d960c2e44d0a8531dc5a3fa7109277": "dc555d8b187abca4f4e8de7c4fb7508f",
".git/objects/8f/aa5475b4ff5ed057d9878ef6a2a0fa1524115e": "51e85e2f159e0013b907b43d20233e8b",
".git/objects/8a/c33886701247b22d8bf45c08e531336351ec4c": "51299bd1900854c8db490a9f9b4c8640",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/7e/8f041e03492c3babc4b84753a35f7577b77868": "6fdd1ac214e86d676f05a6fff9c2e216",
".git/objects/7e/5e5d015bbb4e6820ade6c02df32fdda3247ef3": "ace83ecae002a82a5ef57b4c2e54be2e",
".git/objects/10/6d3a68feb23166a629cff61e4174224b1581cd": "7f72d9cb44b3f0b7fd5e53d5430592d9",
".git/objects/4c/7dc75b8ce33a976200206e766fb3d664369ccf": "00a44cb1255d87590762bd4698f1b7b0",
".git/objects/4c/cc17121d9e3c141a0a5a236d5b439b4225744d": "0c2bf547a6da17155c93ce5328b518ee",
".git/objects/26/0282c58c2e9f1d9b2b66ded1fe9ede65b374b4": "9de19351e73eaa39a3f7917d1f56cff8",
".git/objects/21/c9f052c1363db308990bc5af6f5fe8172b65fb": "20ac946899309305b9b0baa1271834fb",
".git/objects/4d/119b90c784cafd83c0cf0bdb226f8a285d1380": "4682f74944a76fb3621d9674031e84bc",
".git/objects/81/59c9a348ddea927e179742175b697bfcf3f140": "d9afdb58247d7119de31a327cbfc3cea",
".git/objects/81/0f6594d7e22c86ed06efe6803859b355528ed2": "b89b705c23c1b3ef836a1f3f012e0db9",
".git/objects/81/863395f755dab7e487790fdb3d61db7cb8afe0": "1ce70cd0ea5559282843bf352bbefd75",
".git/objects/86/779aced2433ac0cc26206545aba74ed1e95581": "f70ee5e6a2fbef547bddf54b0fb5cedc",
".git/objects/72/926c6d3057c7cac89943a69654ebac2d9fcb72": "c36d109eb949c7c218f99eec4d374f0d",
".git/objects/72/7b52abf5805b31dcc8f3aa75dec3252f6245de": "6465f9ce5e8cbd607fc14783079422d1",
".git/objects/72/5a77c7d8116ff660c1cd2e237d425901a5f499": "b3838215ff836cb5b5076234146133a7",
".git/objects/72/dffd9a78ffb66cae7d4b942af5a88e5014cf31": "42162ef478eb4f1ba0e1c87098c4faa0",
".git/objects/44/267ce102e511a2dbadddd190f6fc6df0fb22d9": "f7961a91b72a1c4c6aa52f09c3195137",
".git/objects/2a/c9e2dfed243df987b1cea42ad1a7f35af7f179": "b58357c910e1b96a12d308880939f4d6",
".git/objects/2f/e6e7bf80eaa52c057b54f7956fb313d326c233": "5d18aaa7677b64c8d1c45af84cd19f5e",
".git/objects/43/e73c5b30dee4f7aa714b2d02798bed19f2719e": "cb1c324cdcb847d40e32ae942c8bd203",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/88/5000500e95aa7ac7684e89920888232c2b306c": "57bf2e84e266795ce9fce7bc86754369",
".git/objects/88/36cad01b7da4b671c91367fc100c34ea76db65": "f0683edd2140ee68047017688ffb7fc9",
".git/objects/07/ede2bece194af92fe70695ced131ed5265122c": "4792ab96684a11c96240b2d59c699b93",
".git/objects/00/699450c8cc550c8c78aed8636bdb736e0e2dbb": "0423d10c9d7c9ecfd660cd76bed729a7",
".git/objects/00/0f93ef9c34228f4f8aed7eca6caa5213648513": "889703fa1c88a5c63251e932df7e6e9e",
".git/objects/6e/e652e5cfb7d3122d8a81b1e445843567b899af": "2bb67059167b5cb769f4997a51f58806",
".git/objects/9a/285e81699a9c21b7354a3cb330b54338728e0e": "58e5bff6e7fa97ca1b695ad961fda95f",
".git/objects/9a/4c941c1ddb1af63e19324cc09a195c50c76944": "0d388983305ac0edef601137e492468c",
".git/objects/36/3af5dae8f2719df0d20857696929f9b28b478e": "8f5777cc4eba8a06191686a6eee00689",
".git/objects/5c/aa2b3b18fd7fe7525d28ae1b1ce1206a2c3b9d": "03035fdaa8bb53bf64904dcc37db6508",
".git/objects/5c/6b17b74ce05f1c589d60a92a9d66635a5e4990": "8b88048db534a14178882984719079bf",
".git/objects/09/5cd1438d0dfa005f35d113bd818c6e35d9ccda": "8f1085fad8ed8ecfb7e6a12da407453f",
".git/objects/09/faf95f06444afe300c99b6053a8f24a6583303": "630ec3e3e5688b3a851891e713f5c718",
".git/objects/5d/9b56992a566c335a3847398f26a9b5323b9670": "cee67672ed8c10a704336fca0bc7dd7b",
".git/objects/31/5f922d2389732fd9ec22045947f3ede863c905": "55c332d175838440192ca48b993cd1e4",
".git/objects/65/af62591d002ef79a0a6f4a09c6fd3cf521f46d": "3f7a05cbe6db33a989030c6335c991c0",
".git/objects/62/aa3085a96270b83523c063dcb0a69fdc569f89": "0a3a3af359fa499e6fbc73afd72818a7",
".git/objects/96/7bc5915777ec1a12c461aa94a76d4497597047": "0f615f2144e5f5a32c2681b014fce678",
".git/objects/54/18f94f58f2b08c6915e2089aee8d2debb3ecdb": "439a54efd521473f0ed7adfd3d0dc508",
".git/objects/53/15f4bf22ada5f617c55a64b611a0470b8ea747": "3f8dea669bbdc0f32af5035449a1f30c",
".git/objects/53/ff4fa28a9d3ffdb2334b41b098e5f410436a28": "e6677bd3c133db5d36ad2bc4772e35b4",
".git/objects/3f/81962c3b3f7d75cbb2d503acadb030d0bacda7": "b2aed247728529310c37d7eaf68ecdc0",
".git/objects/30/a7e82e709b41da5e8c28d34a613f12869e0a21": "2c83a6e2ab8ad504ae3543acc2e4d645",
".git/objects/5e/26db0a592dced45f71e289338b5732d22bc643": "fcdb75418bbf776efa19b0fedbd4da9c",
".git/objects/5b/f40df630d9ae7cb8ae026c930b8f3421bbec54": "b65d98c24f90f21a96f4eaed9cb8076a",
".git/objects/08/9f2965c3a4a118dd19246578a94c98c1e4ce2a": "2a1ff6ad97e68d2557ba5f0f06c825fb",
".git/objects/08/811b1014987b004a295ab5198ecb1c492b4ca0": "8a922df249058e7454eed00be1c6b694",
".git/objects/6d/a5e2167792cf5d6eb1205de454f832475e0779": "99115858cfab5e8fe438eb80ed61fedd",
".git/objects/6d/972bd51cb0a87a8b3c57e1028434f11c97bb13": "a445b9e1890b98ef06c62512d44e0eb9",
".git/objects/6d/986c703d949c8e18448160be697bcf9d71e540": "b6d5e93048cfd8b52462852c3cf23e26",
".git/objects/01/4def9a53a41b6d042175f067cc9d2e9a21500b": "c4ce69bddba73affee1b3ddcda1d1faf",
".git/objects/06/f92595327bbb47f0dc285a971fa8a534d3ff5d": "3459c26a84862a60882e8712f20839ea",
".git/objects/06/e03a3bfc7fe64f711175fe2c66bfb76b61cd0d": "5e52598f04d2d2505176f0ed7bf6108e",
".git/objects/6c/c07519c43462e37d22add35ed4b2cb317c2c9d": "07b4912a765ad8bda0277db729cba8d0",
".git/objects/6c/f56e38348d7811d369ee2c90e91c131842a9dc": "3cf8231c45b8e8b8d081b7ac9308df7f",
".git/objects/6c/e0af2eb0ca2c336178ad7e7460b125358f1f89": "ea0d6e93be0ef735f989a6a6213dc463",
".git/objects/39/88e0005d74c1076aebc80ca63286aa400e2f7e": "5b7ba991457d2e71daae0c5ebc4cb42a",
".git/objects/39/a1bd6c1afa3ebc97367d629a35c014e08e7555": "0e7238dffb328ece13c7bda0ebfc885d",
".git/objects/39/8717cd0217d7c42d5fa58147ecddde1071b596": "1c91d539a24f25f3ab923ec6da6c0b82",
".git/objects/99/2fde5123a19cc9dbece15d68277f63a578874b": "3219dc057c7f42e6a90f01863701d3ad",
".git/objects/52/0b5f2cfd5a61c740995f69a2f7d0b87311635e": "b6977d7633049a575b8cc56dacd9651e",
".git/objects/55/2dc25c268280b3d53c40de16284406ffbd1902": "6c37cfdf8182cd9a220e96e268f7b19c",
".git/objects/97/b7c31fc84d0e19a9ce986f0bce25d5b5b04bec": "9d7959266f9893eed0579c1d87c353d5",
".git/objects/97/919bf813b22a8585edf87d78dbd871becf5a67": "720579481cde1124b81ef8936c7349a8",
".git/objects/63/3cad4f6d186344d3a2400330469d7f829c41f4": "7886779b65581d4e0764c082c2732f8d",
".git/objects/63/a176b0928df8b3f9bfd41f72afeae8044acfb7": "94392706e159df65a7eed8a47a26bae5",
".git/objects/63/017f41cd3df26ac8509ace65b8ea454c241b74": "49fe5ca39e7bef158868689b17a5c3b7",
".git/objects/0f/8ab1d600276efab5228ab7bf7896043db546e0": "eb762982a27fa8e53471c41c0210ae5b",
".git/objects/0f/624cd026300c0a085675a3957665d5a5b7f729": "218d9b92d480eda38a43e722c9b6363c",
".git/objects/0f/6876daea47251898650680ab1e4e71a5de3ca2": "3f85180dd4715052a95881a4e38628bd",
".git/objects/0a/d09bfce46dcdb53f957071727a468b3290096f": "dd336ec2cf18d4806bd328a7200b61d1",
".git/objects/0a/eb5b9ebab7134fa111b3eceade32d6ae62e8ee": "c2eeba7b3d08a0b82635a9eeb9dde557",
".git/objects/0a/262175b3cec9fd023234a4c2798b6ea0b032b5": "05e5cca25557ed68262c45640f491fe6",
".git/objects/64/3e4cf7121fab048ca46bd3ebe8ad813317fcb2": "5a121e4accb3168f3e40cf1846aebf0c",
".git/objects/bf/62e3745f69c6bd7f69deec5d1127b48bdd72f0": "276ff51be8ef2acc6d8343230ff461fd",
".git/objects/bf/219cc05e9a5a5900102a60edd4c0389d41e5a6": "38179508be2c64117c7b9fb97372161e",
".git/objects/d3/a0c9f1dc8a60d79ef11204fc6539f3fb65636e": "202ef0c9ab82fba2e34ba73e8c1e9299",
".git/objects/d3/22f9ebe5fdcd230e1c64b4c91f53a4bb7e0f72": "ee9e1d2aa5430be3ab1305618eba252f",
".git/objects/ba/86f52cdf4aa93bfd648f80f9532e02bbfc2832": "7afc3b1ae5459d571ab38043b00f92f4",
".git/objects/a0/a4e786468344293a9fa198896f721ce982d718": "43f774c00492e324be688822ff62848e",
".git/objects/a7/31ee376745f11908b28aade665ccb16bcec536": "a02c33a6f5520136da4a66ea1929e88d",
".git/objects/a7/8ecd2a957ac9a94be8b905c9cfba696b6f1a6f": "a7f5336747c2bd601b2b30a2e96c6706",
".git/objects/dc/68eb1c39bfa8680ee8ff441004ef7d01ba890f": "9483dabfdb38142bfd0e2b6d62b21413",
".git/objects/dc/fbc11ef693f798ec3a9c56959f1f17c7bd4224": "36c23f46a88ee9a77e30ab235e295db7",
".git/objects/dc/131f35faee4d63f2b5a12285a49e22214f6bee": "24d631574b6cc7db3a326e75c4713d0c",
".git/objects/b6/4ba0f85ff97f2e7bbcaec8b033a0c5e8f56d20": "928af98dd9473385e6bdd66168462009",
".git/objects/b6/886e97bcf67dd00370ee1fca4976dc064371e5": "4a7522450bddc80bca983ddd1112e0e8",
".git/objects/a9/eede864007bd3a8889751eb1a04e237976a471": "daa5bc7df547be76021679e094e14269",
".git/objects/d5/6a6f56016ae5b48298686cdd16cdc7df48223f": "0177fc96caa8bb0197da08ebfae3fe15",
".git/objects/d5/5d6a0175aca8a3096e27a9cacb68913f150e1c": "69a74143f2e61396243b10070acb6f7a",
".git/objects/d5/5788cd41a78fa27cf48580c7edf52122418d94": "26a3af22a93d0cfb879375cfca7577b3",
".git/objects/d2/b18feff3315addadc3be11595491cca18d8a92": "384d7928d46a88ae70505583eb63b1b1",
".git/objects/d2/1e89492cca72319baa1632fb2b4a2dbbafb1b1": "088b06a8d23023d7878b6f069a9cccd2",
".git/objects/aa/d42183c5e410ca0c95513665bdd2a1e20f278d": "6db42192f98ef9788f5b1f52adcad36f",
".git/objects/af/f9fe0e3908a12d9d6e998084ccb425975841f6": "040a29af821b5bda0e2614ef3303ed20",
".git/objects/b7/d0634060cc77807f46247e39a78a6023e4f89b": "f27b8529d0f27b13d6080c9c2d1e69ea",
".git/objects/b7/2cf233654c727c041de654bce53e89a8df75ac": "fca387d15cfb168a3142a86773a0498b",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/db/e1e51a7fc393f084a0bdb9677a14411c5886a3": "1cc8793598371d0a870ff7f096cd7082",
".git/objects/a8/e8010635ce443556f5f7749c2e184b3bdafb80": "6351b0c1e895987e42f681b1fc578339",
".git/objects/a8/beffd3ad4fe54d6cabccf83a05477d6a986cd0": "6677888e4a051c7838b5b240c09f0981",
".git/objects/a8/5e7e85a2eb6b71a3274f8b2b785acf5b823c7d": "9d56985d3e41c4773afb10a5a77875b1",
".git/objects/a6/8ce2c2c0f409f9e6d38c7962b5b77bfba8f6aa": "9a1ab9c54f6169f66ff5fc20118d549c",
".git/objects/a1/202d2c250b58f2bf2c0e3fb60fcfda13e6949f": "6d50b80e6b4a539ebe4da50955856b21",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a1/6b8426bda1cc88297e4973356df1f542cfc53d": "2dae800aa56177f84db3f168e01cf423",
".git/objects/ef/37fd3aa03219709dbae5af60dc88fafbd97156": "b7a9a3796779b77f44ae5ead0c916d55",
".git/objects/ef/ee20e59f941db0208dfd63f92534bf662dcf2f": "184881b0bdff97947b4fe13856d3a005",
".git/objects/ef/12b6747a80bb96957e607d07b4204313f2de20": "dcf6d16f55f7e4d1b587bc16f3ad1881",
".git/objects/ef/0d1478d62bc4ffe55551950e65fc89d5328ada": "8d7c54e432682a8c27bb7e083a4be464",
".git/objects/c4/63f0d5be39acac6e7e527430143e4f90568f1e": "e48eccce9588c5b9a9006a9c74b73940",
".git/objects/ea/6200d83b63bd7f3143e71c38d34b9e1d485829": "89be29943f889555fcdf2c2c16ba5cb2",
".git/objects/ea/9ba957269598e08c930c3937b26c9aaf1eb08c": "b9d5e06333611c92dbe9b47ce53cd128",
".git/objects/e1/112d5b1c955938ed6038d9eb2636a6606b2e30": "4f10eb00671930b2e80159acbc363a1d",
".git/objects/e1/52ffe95a36db5cb751aef5e8873f40322e182e": "543b82a4beddfaef702b393ab8a8235d",
".git/objects/e1/25eef629935e8bf56480fcd3f59aeaa2fc2b59": "65e07eabc48cd2570b5e4c172cd31466",
".git/objects/cd/6ef08466c1a685e796f11836cc3347460b1106": "947b1cfecc783f516436533b331fd3dc",
".git/objects/cc/9afcbd033b4ffc017e735e47687639b21a9b40": "a445da1c26138e063b72063e0a8478ae",
".git/objects/cc/60dc8624d02d0009394804eb33a149981d8922": "3cb40db19a05c166b4a4a7cd6da06c70",
".git/objects/cc/9ee0c3b327f0610636cabedb1c2e6dd2826c70": "df0a4f961638c703514c14f35a977ae3",
".git/objects/cc/b686c569a4d684f9da748c2ba9f8e8934610cd": "20b6a3a112e19928695eadfb147c091e",
".git/objects/f7/50661b78aa09201c10610001ebbcf969812b8d": "15056087524b930805e5e3ee15a31a6a",
".git/objects/f7/68715ae59cefacc0101a96d9a0af2efb6dba9e": "4575ae47c66bd9f1be84680cfde924f9",
".git/objects/f7/b70d4551d0a528c4f3cb549faaec3eb36d2960": "f0274224dde0519e8d1d19e57f5fdbd1",
".git/objects/f7/bc88c74dab5f8883f0d2484a2d8942767e9a35": "ec32b192dc4c7d0fac5b5533559f7d5f",
".git/objects/fa/0e236a98bf0d4752c292084c8e3c093ec79219": "2067ef0f07f316c7c01538d061054eae",
".git/objects/fa/547e0d09d9c4154b7ffd6321a3f072e828d641": "815626fa21afb6880d6f13061a0de1b3",
".git/objects/c5/895d4ccd042727f975d6235266e4927fb24541": "9ef7d0538ea3e926bf5d1a9ed0133c7b",
".git/objects/f6/4f834bc856737fa86f05e98f5d3cee3d9c6916": "9198e47cda3050e3ca0235cc3ba3d104",
".git/objects/f6/9085fe0fbb24edfa45186db75f110454d6584c": "80b9d6bbd933de06c77a212195d636a5",
".git/objects/e9/63c8adc66e9b2d9dd7f7fbce463261a5e3c5f9": "6b10c358e9947a54c5f1089ef6321ebe",
".git/objects/e9/ac640ee9515b18ba2fa204cd05e4bbca0e8542": "bc38c7b9bd7777e1b8b29988b4376845",
".git/objects/e9/929d1ff12abe7a8b47a48f480c9d4dd9dbd706": "d74270a99a296f37d846485d95c437da",
".git/objects/e7/9745aef6191540514082c4aee29970ce7ecc65": "1d20861ae180dab8ebd1d5f39b39f42b",
".git/objects/cb/622cd26e2624cfe4a7676c095de5eb0e79b87a": "1ba29f7b33414956bc9dd94993cf5c17",
".git/objects/f8/ecf6d33d138007c1087862c55bdab217f61111": "e2bcf6f8920f4baf3b8d83009c3cefdf",
".git/objects/f8/3147dc87b382fcb0ceb29781198479fa4fce00": "19fbda39fba185bb8c463647336195a1",
".git/objects/f8/3d18b245bf21a43ea15ca1f55c125b8408c8d4": "f25452bbba7a0042d3c0be16e460abf2",
".git/objects/f8/d1b1e9448ce139880cbc56c9380642692f9206": "1f1e1eb7dcd3b70a883d5a7ee8482762",
".git/objects/ce/f9ef624dacc4a1a406a4f2b1c09cbafeb99187": "4a6c76e3ebd1e44ca47cffefa316f113",
".git/objects/46/d254dc870af4e75bbfd0b8a4fa2af983295d6a": "484527fbbee5b32e849fc13cb1ef5c11",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/2c/697393f063502cce9adf4765cf831b724de9a4": "921163dbe41370c01cb9ff8679047555",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/2d/ef8a0496f10177677d62ed1fbe0dc1c0cbf513": "ef61bcac08a9187b2ad9b4b0d7e335f5",
".git/objects/83/389825bbf1066987cc4b6f23baaed132e0a75f": "9095c4ee7728888b7afdb12f4927bb6f",
".git/objects/83/3a1bf4ff67cd143b4179590c7a9aa88635d4b6": "2d9779a52bd88ecedea26775c5a0c268",
".git/objects/1b/cb906f210ebe3d947f81de5fbe6cd4c9e50c1f": "1cd123dc1bce0a4b66be8d5f65505ea6",
".git/objects/1b/a9b27f33a28461c951d32eace9c9e79a9e92eb": "fdab840389e287ed0ad2521152f22fd9",
".git/objects/48/87210283fafbbf35240cab885cda73c3d727d2": "ef33d03692165a1e9aff06e997a31513",
".git/objects/1e/a42cd20ee58fcbe4eff1b8117ed7d315de8219": "0402dbb45ba19ccfc1356c1a3b61bd92",
".git/objects/1e/261445e3f37e08c1d8d945c0b76ce170477ee3": "ad0d3a0def1ad050cbd5331d49793f0f",
".git/objects/84/414e45941304c948c6234b19282f98dc527864": "abaf71fdade011de82fa461c7df35b1f",
".git/objects/4a/b287e209d7d6d12d0bbce65fcd42edc11232d5": "73245440b6cc6427d786364e89630ef4",
".git/objects/4a/02916ffefbe7529ee86c95026de2c8e9c3393b": "822ab8b06db33862df784a5b3a20ecdc",
".git/objects/24/72f532afb0d1278baaed02f5793d70053ae943": "937da03f7f50e0cfb18c8fd27e8355b2",
".git/objects/24/cafc14d5fead6a3bb44d0f125956beaf90cb76": "44883ad31d663ba11eab67d23e7f2912",
".git/objects/23/12abd7d196b9ede4577fcb08269a0385ec7a2f": "7a8a3aa45a4411166dbfe463a980092c",
".git/objects/4f/9ea8a87dc7a701d725666e2bff8b4645624ea7": "317387c19d191f0ce8769f0906efbf00",
".git/objects/8d/eaef56da615ad87030289954717c39dba65cb7": "46844b05cb8cb3efc01b7c2489547d80",
".git/objects/8c/012917dab71a26d535ff8c614582477a123a6d": "22939eff7a0cb1fc6bb53c9bf363b949",
".git/objects/8c/076f8228d4dc8ab2e1c22161266719a71cc1c0": "48b253893dde22dcc30116d106dc9944",
".git/objects/8c/470501ad9999888fff0bbaf774b2edf2715d82": "4f7cf93c8f3bf9f8107c5b5a6dd0468e",
".git/objects/85/8ffeb6bc345a89de450596daa3151811b49dd2": "b34ed3380b16c7000872b43423ee8a92",
".git/objects/85/828d9ecc3d65f295ea091b0b8c0fb4b27eb5c4": "fac7a572db098d4f94d27c225d1e12c1",
".git/objects/1d/7385bf8c92136404c1f796b683d0c225898f50": "e4c92b9f83ff4c65e7995e88303dc51b",
".git/objects/71/486fc5e67ee6348115d7a8322c81ee77bb2f89": "da2a5b26e51a0c5deeace9f3fa196130",
".git/objects/76/1f86d64d335b271842494f53168847aae24d88": "7dbdafcea857c830e3041651e0c00633",
".git/objects/76/b4ac2af7ac516b7fb8b1217ef95cfd12386331": "0b7166d3d038aaab00a9ea6475b7440e",
".git/objects/76/be4298753802435382b9e6b909975093275813": "4e2252166fea17db9cce0e39ab0cc71c",
".git/objects/1c/8c1b31b2dd93a1a9f1650b0ef81636ba3e5bf5": "23bd39ddb8b623fac3e968ac8df90845",
".git/objects/82/7366a7c18a4c08530913380f7a02ec3c720f8f": "f252b09b98b99a34310c78f6971361fa",
".git/objects/40/226fbc32b09604c8ffbd96a5ea676a3f75a116": "abb0ec0ba63df7996e2825dab3ff9684",
".git/objects/2e/30ab4233775ac8375567893635085606bdc624": "a322fc9987841b5a55fef3ea8ef5e7e8",
".git/objects/2b/d94f575b109e5c6936e3ac32eaf23f6e3ac720": "7e059ff5cbd19b372635f6a21e337fff",
".git/objects/2b/7de41e879cd8f6183ece304970f9ba0a2fa0a6": "034c27a391b37d8f199dd7e2294becd0",
".git/objects/8b/1facd7dd66ebb1b665af142d84e4d3f768c4de": "322ea995dfca41e0e2e884dba9f13fd6",
".git/objects/8b/3059b57e36d39b9891c43d2c719fea9e943ac1": "1fed7ea62bd30e7591d846ec9ef141c3",
".git/objects/13/342a9006b1a34c1ff0daf610df35c3b76ae53c": "2db8ed93e535f5cd5dc810a7bce9339f",
".git/objects/7f/46f9b264c0effb045fd19b5a4a061fbde47a64": "362279aaf4e0219ea151b22e0b08fd20",
".git/objects/7f/daded176b17ab029583073f992f8c994d3bf5f": "5f6dc403a57541f783c0fa4c617cb6ea",
".git/objects/14/91d1d308c37f724425cd4afddfcca5fcd3bad5": "4fe97e1d5f11f2fd085a273b45190eda",
".git/objects/14/e91f7161dcd00961f2c00babd6d310c1133893": "06f1bbba0e428dcb23f1783519151c71",
".git/HEAD": "5ab7a4355e4c959b0c5c008f202f51ec",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "b17dfc570486d4127695c5fa6c43927e",
".git/logs/refs/heads/gh-pages": "0d6c001d6c08f0a7dfb227e7ffb3d9ee",
".git/logs/refs/remotes/origin/gh-pages": "f0fc5873901330e0e4fa70134f9b1f97",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "e4db8c12ee125a8a085907b757359ef0",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "ecbb0cb5ffb7d773cd5b2407b210cc3b",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "3c5989301dd4b949dfa1f43738a22819",
".git/hooks/update.sample": "517f14b9239689dff8bda3022ebd9004",
".git/refs/heads/gh-pages": "3300d50a29712094b193ad3c7702a69c",
".git/refs/remotes/origin/gh-pages": "3300d50a29712094b193ad3c7702a69c",
".git/index": "92b8f6be93dbd4d4652dfc782d00c564",
".git/packed-refs": "a891e6bb26eb0d480aef486a7e8ea166",
".git/COMMIT_EDITMSG": "0e1381b2adfbd16f5f71f5e5f8333658",
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
