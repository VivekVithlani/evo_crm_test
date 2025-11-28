'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "af2741f2a5d1b1df019367bec8638581",
"version.json": "55d15b07dba3931c48d498330b54ff8b",
"index.html": "a3c9674521ac5be831a87d88ebd8601b",
"/": "a3c9674521ac5be831a87d88ebd8601b",
"main.dart.js": "46260b72d88218f0c899acd98122a11b",
"flutter.js": "888483df48293866f9f41d3d9274a779",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "cc1d2cf23bc49faef1e9af146290df2d",
"assets/images/ic_customer.png": "4d64dc5357c7e0b3f48a2adb1ca3ee4e",
"assets/images/ic_password.png": "1f64d052f5c6ea50329d45e5077e4218",
"assets/images/ic_opportunity.png": "9d1a18fde029bbad5f08affaafa4ef98",
"assets/images/ic_orders.png": "abc870346fb3c4085455cabafdff1cfd",
"assets/images/ic_activity.png": "cf40feb68955f713c5fd25ed7fd514f7",
"assets/images/ic_port.jpeg": "2d8dee0998fb8bae8c21e0b12cfb9f90",
"assets/images/ic_message.png": "df8fc3cc577c5388747e6eae87d2233d",
"assets/images/ic_report.png": "fcc44fdb522933fca15e501cdd6063c0",
"assets/images/ic_user.png": "96f70dbdb69e8fd34ee9d9280788d6c0",
"assets/images/ic_invoice.png": "522d68796b36804abe451ceb279d5622",
"assets/images/ic_filter.png": "191e3d3e818d4248c85b757d67e815ee",
"assets/images/ic_edit.png": "017110b76d839bd228b9355bed578acb",
"assets/images/ic_lead.png": "9b050b091af16970550aa5dd74d791bf",
"assets/images/ic_contact.png": "2c4ceed857e1beb20c3d792650063648",
"assets/images/ic_home_logout.png": "7ae8513081b9d0491f79fb57c1b4e88a",
"assets/images/ic_dashboard.png": "9b9655093b017cf36ddd08333447940b",
"assets/images/ic_logo.png": "129b95cc77f0554d39964d7ea4046380",
"assets/images/ic_email.png": "61b1c7505fa350c8e2fdb99b13af0451",
"assets/images/ic_done.png": "224e312bca85904edf1b2f61d163a826",
"assets/images/ic_url.png": "d0727a4773e0ecae3f6b4ff1b511f097",
"assets/images/ic_warning.png": "639f5cc2716244cd964bddf96436b7a9",
"assets/images/ic_contact_us.png": "a4af53b9615de92abd609e9f5a211e9e",
"assets/images/ic_sort.png": "0d0b92567a784c76471324f516d3e146",
"assets/AssetManifest.json": "6e488333a23bd39dd350f89b5663efad",
"assets/NOTICES": "7ebfb201f22120aeab397b78acf697ae",
"assets/FontManifest.json": "9ede6e3d4cd1e29cfc145d72e7c32c3c",
"assets/AssetManifest.bin.json": "6af8e61dcfc2a480efcda04da34041c6",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "bc6f9d46b6b00695636645386e76dac2",
"assets/packages/toast/assets/toastify.js": "e7006a0a033d834ef9414d48db3be6fc",
"assets/packages/toast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/flutter_inappwebview_web/assets/web/web_support.js": "509ae636cfdd93e49b5a6eaf0f06d79f",
"assets/packages/flex_color_picker/assets/opacity.png": "49c4f3bcb1b25364bb4c255edcaaf5b2",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.css": "5a8d0222407e388155d7d1395a75d5b9",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.html": "16911fcc170c8af1c5457940bd0bf055",
"assets/packages/html_editor_enhanced/assets/plugins/summernote-at-mention/summernote-at-mention.js": "8d1a7c753cf1a4cd0058e31fa1e5376e",
"assets/packages/html_editor_enhanced/assets/summernote-lite-dark.css": "3f3cb618d1d51e3e6d0d4cce469b991b",
"assets/packages/html_editor_enhanced/assets/summernote.html": "8ce8915ee5696d3c568e94911eb0d9bf",
"assets/packages/html_editor_enhanced/assets/jquery.min.js": "b61aa6e2d68d21b3546b5b418bf0e9c3",
"assets/packages/html_editor_enhanced/assets/summernote-no-plugins.html": "89ca56cd85a91f1dc39f5413204e24d0",
"assets/packages/html_editor_enhanced/assets/font/summernote.ttf": "82fa597f29de41cd41a7c402bcf09ba5",
"assets/packages/html_editor_enhanced/assets/font/summernote.eot": "f4a47ce92c02ef70fc848508f4cec94a",
"assets/packages/html_editor_enhanced/assets/summernote-lite.min.css": "570da368f96dc6433b8a1006c425ca7d",
"assets/packages/html_editor_enhanced/assets/summernote-lite.min.js": "4fe75f9b35f43da141d60d6a697db1c1",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "01ce0c4279f6d36dcb44cb4763314127",
"assets/fonts/Raleway-Medium.ttf": "430a0518f5ff3b6c8968b759a29b36e2",
"assets/fonts/MaterialIcons-Regular.otf": "e9699380ab7f1ec576b0d29edbc8a911",
"assets/assets/images/login_banner.jpg": "87d806fa1e2a35ee31f50c1b95443480",
"assets/assets/images/database.png": "1f6b085339bb7307c049bd9301b194cc",
"assets/assets/images/map.png": "c56134837a4c759e91a17bb6b4cfcc22",
"assets/assets/images/en.png": "2822f08635ba028c6928d633a4416951",
"assets/assets/images/user.png": "96f70dbdb69e8fd34ee9d9280788d6c0",
"assets/assets/images/fr.png": "a7d33e1998b1eee77ff4bf6a742be232",
"assets/assets/images/es.png": "69bf7c3df4b222c445bf6ebffec278e6",
"assets/assets/images/url.png": "d0727a4773e0ecae3f6b4ff1b511f097",
"assets/assets/images/logo.png": "129b95cc77f0554d39964d7ea4046380",
"assets/assets/images/mobile.png": "895e81b6edee94e8150871c8e28539bf",
"assets/assets/images/telephone.png": "d2d599b47f528204409aaa3a06bc88c7",
"assets/assets/images/port.jpeg": "2d8dee0998fb8bae8c21e0b12cfb9f90",
"assets/assets/sounds/speech_to_text_stop.m4r": "a374dd99c9ef5ab69e3e90c9ce6b701b",
"assets/assets/sounds/speech_to_text_cancel.m4r": "d9bd93da5aa0cf3ea45d6dba8e8a7532",
"assets/assets/sounds/speech_to_text_listening.m4r": "32d913b62055e794ec6fb052df72b382",
"canvaskit/skwasm.js": "1ef3ea3a0fec4569e5d531da25f34095",
"canvaskit/skwasm_heavy.js": "413f5b2b2d9345f37de148e2544f584f",
"canvaskit/skwasm.js.symbols": "0088242d10d7e7d6d2649d1fe1bda7c1",
"canvaskit/canvaskit.js.symbols": "58832fbed59e00d2190aa295c4d70360",
"canvaskit/skwasm_heavy.js.symbols": "3c01ec03b5de6d62c34e17014d1decd3",
"canvaskit/skwasm.wasm": "264db41426307cfc7fa44b95a7772109",
"canvaskit/chromium/canvaskit.js.symbols": "193deaca1a1424049326d4a91ad1d88d",
"canvaskit/chromium/canvaskit.js": "5e27aae346eee469027c80af0751d53d",
"canvaskit/chromium/canvaskit.wasm": "24c77e750a7fa6d474198905249ff506",
"canvaskit/canvaskit.js": "140ccb7d34d0a55065fbd422b843add6",
"canvaskit/canvaskit.wasm": "07b9f5853202304d3b0749d9306573cc",
"canvaskit/skwasm_heavy.wasm": "8034ad26ba2485dab2fd49bdd786837b"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
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
