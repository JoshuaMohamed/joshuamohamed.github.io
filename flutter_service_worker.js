'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "009c9e65172e010890f7f65fde438006",
"index.html": "00680fdb58753a35678c3a52effec576",
"/": "00680fdb58753a35678c3a52effec576",
"main.dart.js": "c0b826829318a2fe1cc92463155a2f4f",
"flutter.js": "f85e6fb278b0fd20c349186fb46ae36d",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "d40c47d1c161f94dbcb13094d37f1f55",
".git/ORIG_HEAD": "2cf8e9e6752dd72ab56af6a532921fd4",
".git/config": "7cd33326b9e9c60517e6b77af09dceda",
".git/objects/0d/0df08f7c3e147a8ae36017cf81a96e35b73717": "106e868f28a72727fb6fb0fa71123633",
".git/objects/59/003e0e0c89e47e4b14683ebeaf47b6ab90fe11": "667f80c7ac06cf8da994cab2bcc73fd0",
".git/objects/59/62efb2dffef4c259bda261b128fcab4b659c34": "11e1a7683fedc73b6a0da57ee3c6a112",
".git/objects/92/250a10ec5a099174d267be6de8db7656d9f873": "212193caa31ba0dda4d3eb904e473c8d",
".git/objects/57/84f26f4dad824be605552106829b0bbcc11505": "31fe62c3030234f19a6726543cb67981",
".git/objects/57/dd3357df87993165db68f4f3c7b9482ade0b79": "da9a0083b7e6881efba952b8d7af419b",
".git/objects/03/eaddffb9c0e55fb7b5f9b378d9134d8d75dd37": "87850ce0a3dd72f458581004b58ac0d6",
".git/objects/03/f9fdcd8ca16fa22dfad8036c44ae315499afc3": "eefb0f7e88d5587f787bff98b9634670",
".git/objects/9b/2aa5fd7385882cc6a753eef9685e9220b9e97e": "f271f7abe4551ef05a038049fd723783",
".git/objects/04/c22f4c2efc91cc03c097529f96ab7d0525c9d2": "9f83466e82cbe57972682277f588245a",
".git/objects/6a/fc020af03e584c5a43434b9a643d430905698c": "3f715686870eee27aa1f4390472f2d71",
".git/objects/69/24d3ef04c2cf8d3a0252029d48f12f939b901f": "c51100f041298858307fb01d45da7386",
".git/objects/3c/038b8e5a0ec84b895776a2c6d4cd695dfb500f": "614bd38313e72b216d88f251d96d889b",
".git/objects/67/fcf0fb2af0c069495fbc7fe7ab0e442a86e357": "1a79be5246f5dff458e8e5299ce23f14",
".git/objects/93/27b67f1c675e0a983512621d9558f1d55018ea": "47a2236b390921cae518158374f3e1bb",
".git/objects/9c/dcf85f7c8f1273d2b9e2d49453c97e84ed0990": "c12549582353c03c84edd1561c987dd7",
".git/objects/a4/7f48426b01e2192df11da814d85283e82a0c1e": "9f35b916d9ac5f50d005b42600e289bf",
".git/objects/be/a65becf6ad75bf51a018e09e2db231eecbe997": "2b2d431ab1f0f2f099659e478923d71e",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/bc/c77a0013fc5838eab8f78c871a62b0af0e435f": "52577b82618147351d9661e679d77442",
".git/objects/ae/480206c23804ba57a82416e602fef2ad28d7f4": "8f42477ac73a5a88806c196e4807c0d8",
".git/objects/d8/94d809067a45c6a617526b8a88abbfd3d6b0df": "531c1b4e43dc66e6ec019daaf7e7cb83",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/f3/915e04a561b51878f5bce919509fd96a77edfa": "4f33c619c1b3aefd7b2f2add00b6c8a4",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/fe/3914bcf3baf9d87a873a444cac8aaf9dcd54c1": "372add7dd6cdabc32b9333e8d66bff72",
".git/objects/4e/89617a3696bd10c155ec378f4a65a9f89e9e3a": "d8056e20bae90d092b619c895129e982",
".git/objects/11/1f8b6e603d062f6390a4c722507406546bd403": "aedadd46cab7e8258cffe256d22ba1d4",
".git/objects/11/dbef78d3d2a2774288e1c3a45f867904330206": "9dca473360b00c1aa875b39c25288155",
".git/objects/29/2214367c0af9a2eee8f873b2944224e2fe3f0c": "902d6cf3d5ea70392a74bfc9ded583bb",
".git/objects/29/4a8a7062a97b5cccad883d3b8e68b0f452d552": "c4a4a038b83ab6b834240874279db55e",
".git/objects/29/bfd35a2bfdd92b6e8b4ec2970f4d1eebf49357": "7a3021e789f7e98c6a0ecc90a27556e3",
".git/objects/42/90b5289797f0e759d823044e6947fb7a503d59": "329a5f0887fd42feabba97bab2618888",
".git/objects/42/93d4ae80590d8a06ce9624641270bd6c3622c6": "77d5e7497bfcca59fb0b6b3d9db16a05",
".git/objects/45/95f56c4d84d62c32b9662bf44ac5b504032470": "8b3c5fbdce367a6b8a5e5292de9170d5",
".git/objects/87/bb4f56e02308073565f2e98562268d3992ce89": "23245867cad894c6fe15303769a88734",
".git/objects/1a/5eadf611ae501697304c8438348541f59e5c80": "6e10cedc44c67d01118641606cec2eb1",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/21/3d0eac49a754993eeb48db403e4d69419c2170": "652c859e5818685351be63cfb9a102ee",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/5d/257da88801cedf777b79b49688ae99ad574168": "6a35639316403658d16173bc15528987",
".git/objects/91/3152a53151168d4c461fda19f0172789c95ca0": "d16c8df08766a5252bf61182cc5f9f99",
".git/objects/65/1cdb0e0bbae69f5d284f413a6375ef4df23c82": "e66771026782f5ae27bb8a65bf5457f3",
".git/objects/62/867afacad45816e830abbd152252f4a9fe1f2f": "181c1db79c28eed9fb3530bd252bb3c6",
".git/objects/54/336c5dc6dde545ea90cdf2b9276128d835c66e": "1eb34e1e378385b2a35b6d0ca9e20fe6",
".git/objects/53/02e3e4c0483c7c126a996dac41a1054f5b83d6": "7368336fc4de4fb379c4f76348175c3e",
".git/objects/99/86f6a97e3ce9d95366c3babe948328e00e20b0": "4728bdfb143a0695495a9ccb84bebfe3",
".git/objects/d2/e289555deea254d31e6c51a354ca1ba44a665d": "74c100e8f41cabc73dcc346b1f66cb35",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/de/28db843d7df6ed23b8a7526f6b6b4a83425fe7": "797e4f7b3d8dced098c51679ff33e848",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/cd/22076013ce8b84475eae9bb4cd6c60b5460fbe": "81c620e2d6cbe5638d6c90ee25886389",
".git/objects/f9/58b0983e238aa79bc6fb76c9854654c03fbbe1": "c015bc8efa8f340d9d2134da38a06b0d",
".git/objects/fa/8dfc58440bd57b0b6b74063cf30402b5e4bd2e": "ace7f87d47906eb2b6e8eda1ed71948e",
".git/objects/e9/e575d0b36ebd696294496017834c26b62e1505": "8eca52e53d59927cc7c00a13888ea67b",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/2c/73175c4458b1c34879434ef5d2eb195ac69614": "dbdc7b82bd05db38ddc4a5f3e54f3151",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/2d/cf3542c874e33cd8ab86ceb6f0ec444228aa78": "66baad0ae5d874f09b6eee790095bc65",
".git/objects/4a/d9e1d977062ec02565cab15ea59ff692749fa6": "567dd5e20c22f1f59a8a4c1be6692e11",
".git/objects/24/b1f14dd348b07c9b8373758bde9ac14d16fd92": "dbf45d6c044044561758a334420e9569",
".git/objects/76/8651b2e249c2517c7b37bdbeea0a5d8bfbb707": "495b1c4fefa633f6afe4dc5840ebe18f",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "0e6cffdd45ca51cac451045848460261",
".git/logs/refs/heads/main": "a8535e2b5335671ba97f21c87e0aaecd",
".git/logs/refs/remotes/origin/main": "d09cf6c70711468235747ebec2fd7143",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/main": "2cf8e9e6752dd72ab56af6a532921fd4",
".git/refs/remotes/origin/main": "2cf8e9e6752dd72ab56af6a532921fd4",
".git/index": "1480c6b9bb05a27c37007aeca156b2b9",
".git/COMMIT_EDITMSG": "2a4e5f52520782c9172c3d4ee4075e17",
".git/FETCH_HEAD": "b8ace9b5603a428464e62cc68ffdfeb3",
"assets/AssetManifest.json": "55a89437059d0ed03c7138ff3334be50",
"assets/NOTICES": "fb9e9695eff13a72ecc9316559bef51f",
"assets/FontManifest.json": "560f38a76a5bdb500037506803ed5a73",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/shaders/ink_sparkle.frag": "b1b1f20921bc4596c641c3507b016010",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/assets/fonts/GothicA1-Regular.ttf": "be717b1c4a0d2489626ea59c48df621e",
"assets/assets/fonts/GothicA1-ExtraBold.ttf": "a185c09926e7bfb5a960bc997437445e",
"assets/assets/fonts/OpenSans-ExtraBold.ttf": "fb7e3a294cb07a54605a8bb27f0cd528",
"assets/assets/fonts/GothicA1-SemiBold.ttf": "0b1aef2be46d737e07db61fa9eb509b3",
"assets/assets/fonts/OpenSans-Regular.ttf": "3ed9575dcc488c3e3a5bd66620bdf5a4",
"canvaskit/canvaskit.js": "2bc454a691c631b07a9307ac4ca47797",
"canvaskit/profiling/canvaskit.js": "38164e5a72bdad0faa4ce740c9b8e564",
"canvaskit/profiling/canvaskit.wasm": "95a45378b69e77af5ed2bc72b2209b94",
"canvaskit/canvaskit.wasm": "bf50631470eb967688cca13ee181af62"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
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
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
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
