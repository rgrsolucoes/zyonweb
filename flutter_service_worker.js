'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "44536b9feff31b870ff79ba08b4d9bfa",
"assets/assets/images/casas/exclusive/home/banheiro.jpeg": "4a8501cd95735874f2ec3ddf1a74125c",
"assets/assets/images/casas/exclusive/home/cozinha1.jpeg": "c6d6428bf458148a95ceef125f079da0",
"assets/assets/images/casas/exclusive/home/cozinha2.jpeg": "2103e1eb6acfa844c2d695db2e3068e2",
"assets/assets/images/casas/exclusive/home/externa1.jpeg": "81431318b679b2d96dc8ccc07fb05638",
"assets/assets/images/casas/exclusive/home/externa2.jpeg": "60d85182b11669e6daafd9fa5a4b891a",
"assets/assets/images/casas/exclusive/home/externa3.jpeg": "b437bb87fc0c9875f1b5c8b8b05727aa",
"assets/assets/images/casas/exclusive/home/externa4.jpeg": "1d764e0000172968e741c8e5bffb0065",
"assets/assets/images/casas/exclusive/home/fachada1.jpeg": "3bec74f05c0b36363a8b95013d0f7c68",
"assets/assets/images/casas/exclusive/home/fachada2.jpeg": "7b5b4eaa1dd50525cbc3b40e927806b4",
"assets/assets/images/casas/exclusive/home/fachada3.jpeg": "0a4f58532cbe24effd75641bae938559",
"assets/assets/images/casas/exclusive/home/planta.jpeg": "10af12994e92e0059fbef37c5a6468d3",
"assets/assets/images/casas/exclusive/home/quarto1.jpeg": "3d6d33cfe02c8225772f7481c3435e00",
"assets/assets/images/casas/exclusive/home/quarto2.jpeg": "c4ca0007254c54f41375fe1841b7dccb",
"assets/assets/images/casas/exclusive/home/quarto3.jpeg": "ef20ac66b06164759253ad44ba9b9294",
"assets/assets/images/casas/exclusive/home/quarto4.jpeg": "59cae02f55f8cec1e2d0fde29e2267db",
"assets/assets/images/casas/personalite/compact/banheiro.jpeg": "69d7e4daccea5a85923fe275112ec41c",
"assets/assets/images/casas/personalite/compact/cozinha1.jpeg": "86df26b2fbbdc34d582da05ebc621a01",
"assets/assets/images/casas/personalite/compact/cozinha2.jpeg": "5cf031d942b665bca2927a456aa7f38f",
"assets/assets/images/casas/personalite/compact/fachada1.jpeg": "f8b28b0103773f03c20af00bb7eafa1c",
"assets/assets/images/casas/personalite/compact/fachada2.jpeg": "cb6d67d725f2ed4054017cadc7a0b952",
"assets/assets/images/casas/personalite/compact/fachada3.jpeg": "94632bf5ced5b4f759d28a6d94a027b6",
"assets/assets/images/casas/personalite/compact/planta.jpeg": "5c7309e6f42685c4eb9bad64ff8f9a40",
"assets/assets/images/casas/personalite/compact/quarto1.jpeg": "3068f735f9cb1ae7663db5abce24f15c",
"assets/assets/images/casas/personalite/compact/quarto2.jpeg": "bccffffd13913cf8231ec2cf11190469",
"assets/assets/images/casas/personalite/compact/quarto3.jpeg": "02ec2b371fb725d51412a8734da26bfc",
"assets/assets/images/casas/personalite/compact/sala1.jpeg": "bcfd576980ad288580012b69b9683e8c",
"assets/assets/images/casas/personalite/compact/sala2.jpeg": "46f195e6285fb7f640531022df60691d",
"assets/assets/images/casas/personalite/dream/banheiro.jpeg": "8a6ef497d207335a11e35f0b784be1b2",
"assets/assets/images/casas/personalite/dream/cozinha1.jpeg": "e1b2364e287d2805b5dc3050ffc6f7ff",
"assets/assets/images/casas/personalite/dream/cozinha2.jpeg": "72419ae7478dbd140b0da03981d854a3",
"assets/assets/images/casas/personalite/dream/fachada1.jpeg": "d72fade02462da0fad9952931d932402",
"assets/assets/images/casas/personalite/dream/fachada2.jpeg": "020cfbd41b6b0cee0d910abf03f2323d",
"assets/assets/images/casas/personalite/dream/fachada3.jpeg": "b26764ae738f568adf2b617a8787db88",
"assets/assets/images/casas/personalite/dream/fachada4.jpeg": "76544b1368574ea88a6ce93f810dbd9f",
"assets/assets/images/casas/personalite/dream/planta.jpeg": "d9e37205b6b16ebec34b780a8d9501df",
"assets/assets/images/casas/personalite/dream/quarto1.jpeg": "cfea109525e9facf81b7c9281b763e80",
"assets/assets/images/casas/personalite/dream/quarto2.jpeg": "63e5aba48044eaeb50d61fe8657fc75f",
"assets/assets/images/casas/personalite/dream/quarto3.jpeg": "51bd9ec0207c9cd329586c3bd15f2fb8",
"assets/assets/images/casas/personalite/dream/quarto4.jpeg": "a67749bfcdbf27778d63cf6b93035456",
"assets/assets/images/casas/personalite/dream/quarto5.jpeg": "5e92e6e32aa0568d143d0f37a888baff",
"assets/assets/images/casas/personalite/dream/sala.jpeg": "1aaf00350b8e1cb23fd19247e654e210",
"assets/assets/images/casas/personalite/home/banheiro.jpeg": "d9cf682e3344eb0724f4e4e6a5a27961",
"assets/assets/images/casas/personalite/home/cozinha1.jpeg": "6a69e9bb21a6fbfea1b17274cce0aa6b",
"assets/assets/images/casas/personalite/home/cozinha2.jpeg": "5e891374d029179e441c5da3c7f85b66",
"assets/assets/images/casas/personalite/home/fachada1.jpeg": "451675aef883ce03d9fc400e8fb0d493",
"assets/assets/images/casas/personalite/home/fachada2.jpeg": "56f99fd23c1d8c4c82db07d78dc7a233",
"assets/assets/images/casas/personalite/home/fachada3.jpeg": "365210a410fb93f5018f6633a6521549",
"assets/assets/images/casas/personalite/home/fachada4.jpeg": "ea78405f657c4f67072fee0278e26450",
"assets/assets/images/casas/personalite/home/planta.jpeg": "25e19192ccd4c3313a7ca1460cde6037",
"assets/assets/images/casas/personalite/home/quarto1.jpeg": "d7f3771f2819667403acd8cfcc822bf8",
"assets/assets/images/casas/personalite/home/quarto2.jpeg": "f4a9cbfbfc5fef25ce1ff4d844698f31",
"assets/assets/images/casas/personalite/home/quarto3.jpeg": "70de2a6170cb1de3f71c45e6e9d194b3",
"assets/assets/images/casas/personalite/home/quarto4.jpeg": "3792a9009e3a286e14018ee715b00ba0",
"assets/assets/images/casas/personalite/home/quarto5.jpeg": "cd39f34e72495a2f62130c44d3cbcc44",
"assets/assets/images/casas/personalite/home/quarto6.jpeg": "8c4f17af16278df66895eb5b044c4439",
"assets/assets/images/casas/personalite/home/sala.jpeg": "b5609f0e5970fdd8082890aff940e7a3",
"assets/assets/images/casas/personalite/home/sala2.jpeg": "29f0ac11e41276060af129ed1394920f",
"assets/assets/images/casas/personalite/liberty/banheiro.jpeg": "ca290d20f053f85b2dec93b0577273da",
"assets/assets/images/casas/personalite/liberty/cozinha1.jpeg": "a2ad3f6c5a4aea435790f80927ea73a5",
"assets/assets/images/casas/personalite/liberty/cozinha2.jpeg": "6c63a2faca460c5ec0b73da98b16f319",
"assets/assets/images/casas/personalite/liberty/fachada1.jpeg": "dffef813605890b297fdb217acc5cb6b",
"assets/assets/images/casas/personalite/liberty/fachada2.jpeg": "08c8148bd3cca3228d90ef97eb392df1",
"assets/assets/images/casas/personalite/liberty/fachada3.jpeg": "2ccbf52ad326b3deb8b9682527c12135",
"assets/assets/images/casas/personalite/liberty/fachada4.jpeg": "5a96e338e4e217b1dc0c02ad2c899b33",
"assets/assets/images/casas/personalite/liberty/fachada5.jpeg": "ddc7af3af408c80e860c59b5885d4de9",
"assets/assets/images/casas/personalite/liberty/planta.jpeg": "f628fca42192f2c0555000aa0a3739ff",
"assets/assets/images/casas/personalite/liberty/quarto1.jpeg": "33dfd20c438a7ac15abc3d703ab33b23",
"assets/assets/images/casas/personalite/liberty/quarto2.jpeg": "fe1ea522bd99ac8bccfc8ec28d99dc18",
"assets/assets/images/casas/personalite/liberty/sala1.jpeg": "e64481728fa62cc13d057b44843f6b44",
"assets/assets/images/casas/personalite/liberty/sala2.jpeg": "0268a9a8042f083e2b81f9b81e952103",
"assets/assets/images/casas/personalite/master/banheiro.jpeg": "94b61cf78b85921ac83af4f121be023a",
"assets/assets/images/casas/personalite/master/cozinha1.jpeg": "f2b5b96815b04ba62734f5d7a7a700a6",
"assets/assets/images/casas/personalite/master/cozinha2.jpeg": "7d55fe461fa52ba3b2b08c8ed46d27ce",
"assets/assets/images/casas/personalite/master/fachada1.jpeg": "89639791e1991affacdbae77f69cad55",
"assets/assets/images/casas/personalite/master/fachada2.jpeg": "026193d4b4135e30f05a12811c577669",
"assets/assets/images/casas/personalite/master/fachada3.jpeg": "8661bf8b95fadf41d5c4b2c8525f2b38",
"assets/assets/images/casas/personalite/master/fachada4.jpeg": "db70fd5e85ede45a3ec188b05d76cc98",
"assets/assets/images/casas/personalite/master/planta.jpeg": "43408c6cc81fc7cd46c47a5ebeb76352",
"assets/assets/images/casas/personalite/master/quarto1.jpeg": "085f52354cf24f68cd1e3052da48d39c",
"assets/assets/images/casas/personalite/master/quarto2.jpeg": "9a4b75848dc106b73a4fbb465c988df0",
"assets/assets/images/casas/personalite/master/quarto3.jpeg": "68a1181380af600c6a54821f119336b0",
"assets/assets/images/casas/personalite/master/sala1.jpeg": "ca86686dba3f45074c42fafe2f838c9c",
"assets/assets/images/ciclo.jpg": "d8b32a03c9f4e0e9abb9611cac7f4231",
"assets/assets/images/hero.jpg": "45805c6b65a0b3a0b6beac7c331d0e87",
"assets/assets/images/homeZyon.png": "5e256463cae8e91c5d0a647f4ae6fb97",
"assets/assets/images/logoZyonAnd.png": "bbf3ae8904e59253d8e76c87743161e9",
"assets/assets/images/logoZyonNovo.png": "e89072c1f794caf574ddcf4572484188",
"assets/assets/images/logoZyonNovo.svg": "990b98325360837345e188b42b48ba17",
"assets/assets/images/logoZyonT.png": "a6e12f965b157848cff1f090ce2f5860",
"assets/assets/images/logoZyonUrb.png": "c1320887e55e8175e1d752548c5ce66c",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/NOTICES": "976b5d4e0704e87ba0d08794d8065def",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "30d809883314ab73a6c7edf26ba4d4e3",
"/": "30d809883314ab73a6c7edf26ba4d4e3",
"main.dart.js": "4e65cdc3374f6c0b07097dd679afd58a",
"manifest.json": "9be77192d552a3674bc4aeea25172e02",
"version.json": "df97cfd3f353000658a996f4a5f968dd"
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
