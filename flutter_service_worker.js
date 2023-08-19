'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "de06ea07f8ecee0f362a23b9751091bc",
".git/config": "4ca1498d94af3d640624dc2351fab435",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "28d383f80db56069a400b60503135bd8",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "374faba570e3a76562d17d5a751d18f7",
".git/logs/refs/heads/master": "374faba570e3a76562d17d5a751d18f7",
".git/logs/refs/remotes/origin/master": "67f364e9407b39dada9ee3b5b6ab2d3c",
".git/objects/01/c6ab48e1fbeeec53a9d79f15c92ac1042c51e9": "e9324afb5ff2fed7d5c9f7a5e86bd7e1",
".git/objects/03/c531a7a4eadfbb97e5434401927ee31890cf33": "fe6b24f60048b7f218835d95c2c650ae",
".git/objects/0b/85bcdb86bf9e9f9fda81b13cec9c9349d47d77": "77cbf4b6cc88e2471afd14a98ef2e0ed",
".git/objects/12/cd92ba639aa09756e516c0b0abecf294a7aa61": "805ae96bda1c33e72c508730a4e06432",
".git/objects/1d/384f3748038966a5c7316223edf120dd5894dd": "a8d542276aa823dfefb8d26439e1077a",
".git/objects/1e/bf993c04c08e17a0122730f8d7ce6e139c8bad": "eeb4f0d71f24758335fe1753273ad6c2",
".git/objects/1f/686edd1465272558af328ca43cb7189a0059e6": "5e83820f6d3e5392693d45bc239b2b61",
".git/objects/22/134fc2bceb74a806d582466a4653c6125682f6": "5696fddf5df07bf2e54208e76ff0c174",
".git/objects/2c/071d404a310f5907d80243d04948ad892cc200": "e978528e7927b26abc7ef34c82f468b3",
".git/objects/35/91af41948adc8001f3586d76b91181311953fc": "c91d33b29071dcff3b2b3385383761cb",
".git/objects/37/7580cbf691d03aea79c63a3a251b1b48ac01f1": "c196d282a50e3c372b4445c6b8868297",
".git/objects/3f/4d349406543f67212b477ba853df2d1e4e5a25": "fdeae0b430d6f5c524d35951d4b42ef3",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/4b/9b463455fc6a4696d3a8409daf436866fc6cbf": "d921de0eb67e6dcd268b2017e41c54b1",
".git/objects/51/34e6402246228fb7f58ce8fe76727a61d99a62": "6b5e5b48febe40daec7062aecdc3b39f",
".git/objects/62/a01d6826913d9efa140d2e9f4bc0f13918e607": "44ba2af6a4f05cb190463143170ae010",
".git/objects/68/d575cc5d2389019a53e381db3e42903ed783e5": "543bc00a0701df371d11dffee2df6adf",
".git/objects/70/010cc4761157d9d7cc2d082cf342e63fe1190a": "baf21d1dacab382149ee93266543ff40",
".git/objects/70/2608f86787c8cd86a4307b4213694f7d6ee76d": "3c7daa2f8682a6fa5796eb345eabbd4f",
".git/objects/74/dd6b692ddf8e83ba786d44c01537246fcf977e": "b1658c378200e6ab7acde88d5fd19e26",
".git/objects/76/31117c4b7e757e27c461fc9997c934f2ba8799": "82bf2ef089e71019b7d45430a62bab33",
".git/objects/7d/1086b0c6534ecbdb7c85ea5897478498982402": "b71c7c7a7becaf47ee5eeb6725315f1e",
".git/objects/82/9371a977bf5ad44b7f214caddf52392460bc58": "a09a36828ecf76c0ddfcfff925db3983",
".git/objects/86/4045aaed5e0d47dde364c523dee8243d977531": "18b044e893111c4a35a65c36c635db97",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8e/7f4b338840099949781ab85496d7a67fae46f1": "7f2803c236e9e7d95ef6ed16a3a2bd13",
".git/objects/8e/9c10f3917013ea6aea58b4819b9ad308796201": "b7ed30000d9f2b5800c9282fd69f2f29",
".git/objects/92/c0194deb5a3ac2fd0291c4c5ced090b4fda623": "e948707d98e189fdca31fe9472a696f4",
".git/objects/a0/5b1a3bd8868d966340b6cd9fa9549c73382640": "36b3b75300c60e337e6b9c85018446c1",
".git/objects/a7/06bdd2b2900985dfc6c86960d8b2857215c78c": "b757c31659773f0b4c6fa4779a522495",
".git/objects/ae/300f15ae866b27cf9f47afe7f8beee3966fc68": "ef3dea613f48346d08cbd4a6108a6e9d",
".git/objects/ae/37803d1933c3979fd1b939ff61cc667b0b70dc": "f5c08c98e82ebd9034dbd78b64a292fa",
".git/objects/b2/2fdb2d1fa6a3bced274617d58f6ab432bb0d8b": "1b405e4dfab487f51d41422d52600614",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/bb/ac29f5ef7a40bf14c0901bc1457724156bc0de": "1393f20f0610cabefe2d4f45865b0f54",
".git/objects/ca/72bfc67bfc77c3afaa2a898cc46e60299d9733": "ebf7466e95224b427658506524754c1e",
".git/objects/d1/0292380a3e8e822b37f87661b6583662b3e14d": "9c206998b6f44817ea1851470c91d4f8",
".git/objects/d3/efa7fd80d9d345a1ad0aaa2e690c38f65f4d4e": "610858a6464fa97567f7cce3b11d9508",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d9/4566a597b804de15382a6695ba608c0df9bc54": "652b4487b553808ace7f4fb3b8d6677d",
".git/objects/db/57b8141e918cf3ccb95bdb5636f5875101d015": "76dd85d08b710ab2f72f2bb9d496b6f6",
".git/objects/df/0e01093d0379545885e0b6916af67d7595826c": "19d366e3d7cfc9fbede62b78afb6f51f",
".git/objects/e7/5e920f175da53dd6f04d858636baa25dc702f4": "0fd694d0b7477cee41611e70d0cd6732",
".git/objects/eb/3684d8912606c264cf2111d6b50550c6bfe370": "b1fb3c4566e6c3c59d90ce61e2196be0",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/f6/f93050007550702a6bb3711def3e20e9e4c278": "1802d25dead3ff56be465c9bbee8dc8d",
".git/objects/fb/b16e2013fadc4286b86bc46b50715182f3d1ff": "76cfc7fd725adae878880018994e35af",
".git/objects/fb/f3c98990f18b1c11737a07cb8d2be664aa4737": "97541225cfbc4f7062cea759e204f5ce",
".git/refs/heads/master": "ab0b31fd8d6a1c951f8f73c46e956c9b",
".git/refs/remotes/origin/master": "ab0b31fd8d6a1c951f8f73c46e956c9b",
"assets/AssetManifest.bin": "5c6560ad1dfab2c93aae36d30879f2b4",
"assets/AssetManifest.json": "cb58aa2bb01a067574db9f5d023d1202",
"assets/assets/answers.json": "007106522b192bdaa360ffb695e11f99",
"assets/assets/dependencies.json": "b647bd16cec900de393aeb62cad42b52",
"assets/assets/ha.json": "9dd6b8146663a1b3f131e2f665b5a523",
"assets/assets/images/assistant.png": "67babe224a9c79d1bad55caeb85963cf",
"assets/assets/images/assistant_image.png": "6b8422b314a4f15a1afcc04893c9bea4",
"assets/assets/images/me_image.png": "12775a077ecf4a0fef9b349ad13fd620",
"assets/assets/images/signia_logo.png": "78820b96ffa77657d52ea997e7b4b518",
"assets/assets/pairing.json": "7db3965e986a8c31d7da7e3c1816eb6e",
"assets/assets/phone.json": "e3cdd6e3cba21a11e78bcb837edaf05a",
"assets/assets/phonedata.csv": "e8b1b753ae099ca6c44b85d8ca13a68c",
"assets/assets/Signia_D12_HA.csv": "e5575954df665e6a74638e2e909e95f3",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "460950d7958fb4a9afdb534b7bac9889",
"assets/NOTICES": "ad89924490ea80b9287e1a67bf1d172d",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "57d849d738900cfd590e9adc7e208250",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"canvaskit/canvaskit.js": "76f7d822f42397160c5dfc69cbc9b2de",
"canvaskit/canvaskit.wasm": "f48eaf57cada79163ec6dec7929486ea",
"canvaskit/chromium/canvaskit.js": "8c8392ce4a4364cbb240aa09b5652e05",
"canvaskit/chromium/canvaskit.wasm": "fc18c3010856029414b70cae1afc5cd9",
"canvaskit/skwasm.js": "1df4d741f441fa1a4d10530ced463ef8",
"canvaskit/skwasm.wasm": "6711032e17bf49924b2b001cef0d3ea3",
"canvaskit/skwasm.worker.js": "19659053a277272607529ef87acf9d8a",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "6b515e434cea20006b3ef1726d2c8894",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "ced391cd8550d4ffd3ab4bd51c046da7",
"/": "ced391cd8550d4ffd3ab4bd51c046da7",
"main.dart.js": "15211bc7c2fc4cf2ff89eab524867e99",
"manifest.json": "e7480c1a146ba550e64ab8bd75738824",
"version.json": "ff2b129bc2c61b452b8854392cb858ef"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
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
        // Claim client to enable caching on first launch
        self.clients.claim();
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
      // Claim client to enable caching on first launch
      self.clients.claim();
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
