/**
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
*/

// DO NOT EDIT THIS GENERATED OUTPUT DIRECTLY!
// This file should be overwritten as part of your build process.
// If you need to extend the behavior of the generated service worker, the best approach is to write
// additional code and include it using the importScripts option:
//   https://github.com/GoogleChrome/sw-precache#importscripts-arraystring
//
// Alternatively, it's possible to make changes to the underlying template file and then use that as the
// new base for generating output, via the templateFilePath option:
//   https://github.com/GoogleChrome/sw-precache#templatefilepath-string
//
// If you go that route, make sure that whenever you update your sw-precache dependency, you reconcile any
// changes made to this original template file with your modified copy.

// This generated service worker JavaScript will precache your site's resources.
// The code needs to be saved in a .js file at the top-level of your site, and registered
// from your pages in order to be used. See
// https://github.com/googlechrome/sw-precache/blob/master/demo/app/js/service-worker-registration.js
// for an example of how you can register this script and handle various service worker events.

/* eslint-env worker, serviceworker */
/* eslint-disable indent, no-unused-vars, no-multiple-empty-lines, max-nested-callbacks, space-before-function-paren, quotes, comma-spacing */
'use strict';

var precacheConfig = [["2018/06/06/hello-hexo/index.html","8a785416efe772df88fa0902ad5dd19e"],["2018/06/06/test/index.html","919f86cae700d5032a430992d07f9bb3"],["2018/06/07/config-of-vscode-for-c-cpp-on-macos/index.html","e5a499f5f9d1b368918d3043bd18bfb3"],["2018/06/08/VPS-panel-VPSMate/index.html","85b642644eb32b9275fad45f5d0bcd38"],["2018/06/08/VPS-panel-bt/index.html","c3d3f6dbf9e4c51f7b1e8c7fc3b5feff"],["2018/06/08/build-shadowsocks-r-like-a-stable-dog/index.html","c9d54df8efb499820ea1a8c65862696b"],["2018/06/08/net-optimize-for-VPS-net-speeder/index.html","0f566262197c6add0777bf7637739ec6"],["2018/06/08/recommend-VPS-recently/index.html","b0cc6dc1aa6bc9568c612a55674fc637"],["2018/06/08/settings-for-a-new-or-minimal-centos/index.html","9200fa9885eb13a1b686a4b1f084d5ec"],["2018/06/09/net-optimize-for-VPS-serverspeeder/index.html","24dec278b44a7480274bcd94e02773ef"],["2018/06/13/javaprogramlanguage-personal-encountered-javautilnosuchelementexception-anomalies-and-problems-and-solutions/index.html","f1d799fc7af8a90950dfc95c1920a565"],["2018/06/19/digitalocean-centos6-enable-bbr-to-upspeed/index.html","970d4f5a104fd9ce738d380d5b16f7f1"],["2018/06/19/sshWarning-solution/index.html","e2c755852d33d1baa01003555d5cee4c"],["2018/07/03/hacknet-again/index.html","0188901cc4ffca8e1a8adcb259a1fa09"],["2018/07/03/python-learning-list/index.html","dd363e5aa32858b2bdc788a43d8b5fa6"],["2018/07/11/vim-caught-deadly-signal-segv/index.html","28caa139d57ee8ea131910ca8739b9e7"],["2018/07/13/computerInstitution-summerassignment-2018/index.html","7f691014466ea4228a7920aa0d23d568"],["2018/11/20/post-everyday-2018-11-20/index.html","d4ab3be7cb7e40bb79ffb30eda54c468"],["2018/11/21/post-everyday-2018-11-21/index.html","03c2eee91e28c373e9e5f37d9021e136"],["about-me/index.html","d8dd6d2e99d421ceef9770196ffe4736"],["archives/2018/06/index.html","fe1bcab14b415a030b876cdbe8a36725"],["archives/2018/06/page/2/index.html","866fb9e993c7ca84e3e8b4e31b60dce4"],["archives/2018/07/index.html","73c169204c53363e3e5ab56868a607a2"],["archives/2018/11/index.html","d4da6a7a2f8de26c64de8dfb583287e3"],["archives/2018/index.html","06566cbdb5be4f42e8bede5113f31f1f"],["archives/2018/page/2/index.html","c02757e77551bd626cde29ebcb5ae6ac"],["archives/index.html","35c3365cb2705cfd8e8e7821a0f0b55e"],["archives/page/2/index.html","b493e28b410a01adf8866f575ad88570"],["assets/algolia/algoliasearch.js","d2d43273523febe70b3fbe4c7fb050bd"],["assets/algolia/algoliasearch.min.js","d5ac7c786438492c5b4e9a9f8fc411ba"],["assets/algolia/algoliasearchLite.js","81dab03a4f3d2e08cb6ebccca9f81a09"],["assets/algolia/algoliasearchLite.min.js","01e86fe9a14b3d8270ca1867bacc7066"],["categories/Linux-learning/index.html","8ef6ebf4be98c93ba5d517e40d7dbfb2"],["categories/game/index.html","d6ab6e46dc44b21730e6fe83775f6ce7"],["categories/geek-s-work/index.html","08d7ebef1012d0be144ceec692bd65e3"],["categories/geek-s-work/page/2/index.html","4a8c7d4f1c2c3e5335e3ebf75dae533f"],["categories/geek-s-work/play-with-VPS/index.html","cac8c965db9f31ba5718a7b3bef0c0c1"],["categories/index.html","cdce900057cde0aac5b7617e6acd712f"],["categories/programer-walk/JAVA/index.html","5d53e1e371ae44140c8918a034b1a6fe"],["categories/programer-walk/Python-3/index.html","d79a33ca7beb4482f225233f596e3c06"],["categories/programer-walk/index.html","5010a4c0914702519661f62db76d29dd"],["categories/programer-walk/programming-tools/index.html","aa67a9ffb7fc3bafd742619dee8f5237"],["categories/test/index.html","cbfc33857b0abdd1d2a9ba1f37c8554f"],["categories/每日一记/index.html","7a865b3412d2aa7a6862943a6d69ce06"],["categories/计算机协会/index.html","7c2dca93152575c2b942939cb5831e0e"],["css/index.css","edb50afbb3856f9df25c1ae34d83ed98"],["css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["gallery/index.html","124780333740c5cdc38201a43c054bcf"],["img/Anonymous_masks_hackers_v_for_vendetta_black_background_3840x2400.jpg","ce571a3428d1522fd31f82492c945ab3"],["img/BBRscript.png","9ebb84292ad0257c2e2f10ccc8210857"],["img/DOticket.jpg","a0f155fb0316c82e30d8c30527380be2"],["img/ELECTRONICS_machine_technology_circuit_electronic_computer_technics_detail_psychedelic_abstract_pattern_5472x3648.jpg","68cfae3ed50fff3db3d710003ecc631f"],["img/Gears_mechanical_technics_metal_steel_abstract_abstraction_steampunk_mechanism_machine_Engineering_gear_1920x1080.jpg","c397ba08a4d48f0d431a63b15f5c15fb"],["img/HACKER_hack_hacking_internet_computer_anarchy_poster_1920x1083.jpg","b68a0e40bb43ba7fcab9bc33ecb9f348"],["img/Hacker_hacking_hack_anarchy_virus_internet_computer_sadic_Anonymous_dark_1920x1080.jpg","db0a7fe1fe9ebe8fa1208d4894e0348c"],["img/KVM-OVZ-XEN.png","022b91d2147df73b9045a10f5ed9d179"],["img/MacBook_keyboard_2560x1600.jpg","a7dbe22103bbca4ac4a62bb4ef63f17e"],["img/Minimalistic_apple_inc_2560x1600.jpg","79da60f54c9b965f6946019745a7ef44"],["img/QQ20180610-2032072x.png","02ffc9ce3850ee27732ff178324d48e6"],["img/Winter_Mountain_3840x2160.jpg","a8789af4556247c0a021413164200016"],["img/after_BBR.png","06f69fc3cbf721e932a3aa7c8ebe76cf"],["img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["img/avatar.png","6cc4a809d23e3d8946a299ae4ce4e4cd"],["img/before_BBR.png","c1399865981bbc7d7547c43699657341"],["img/computer_engineering_science_tech_1920x1080.jpg","9750a9696cb2fe206bfa85c164b37f21"],["img/computers_electronics_macro_chips_integrated_circuit_heatsinks_processor_1920x1080.jpg","ff368e75aa91ea6bc7c033e714b55031"],["img/cubecloud.png","b5d83eeded92e8a495be6199d859b230"],["img/datagrip.png","d3b75b7a48a2c2653631447159de4e21"],["img/goodSQL-DG.png","e21b1c961365b4fd252676e7662e5b97"],["img/goodSQL-G.png","25abaa2aa16ec7806e47eb7cc6990f6c"],["img/topimg.jpg","9910536312243fefc306013138ddacc2"],["img/wrongSQL.png","f54dfce3f9f991f641403a9d8be6a8dc"],["index.html","53555533689afbec2847b52522c7383b"],["js/copy.js","f4607057c0513bd07a69fcac08121979"],["js/fancybox.js","cdef3c681834a3e5ee4de9a7ed2e0fb0"],["js/fireworks.js","c186e041cb64c2e7efd345b7838f6ad7"],["js/head.js","72dbb78b4e9c4cdf14fd4b8c9bd9828c"],["js/hexo-theme-melody.js","d41d8cd98f00b204e9800998ecf8427e"],["js/scroll.js","c1789d3ce75d3ff59ea20a6b435c2fcf"],["js/search/algolia.js","dedc6e24c8d82429d5d498cc5a47ab07"],["js/search/local-search.js","bac0e1eda3d01fe70e4f7b887390ad97"],["js/sidebar.js","d24db780974e661198eeb2e45f20a28f"],["js/third-party/anime.min.js","9b4bbe6deb700e1c3606eab732f5eea5"],["js/third-party/jquery.fancybox.min.js","3c9fa1c1199cd4f874d855ecb1641335"],["js/third-party/jquery.min.js","c9f5aeeca3ad37bf2aa006139b935f0a"],["js/third-party/reveal/head.min.js","aad121203010122e05f1766d92385214"],["js/third-party/reveal/highlight.min.js","44594243bec43813a16371af8fe7e105"],["js/third-party/reveal/markdown.min.js","7ec4cef5a7fe3f0bf0eb4dc6d7bca114"],["js/third-party/reveal/marked.min.js","c2a88705e206d71dc21fdc4445349127"],["js/third-party/reveal/math.min.js","0a278fee2e57c530ab07f7d2d9ea8d96"],["js/third-party/reveal/notes.min.js","89a0dfae4d706f9c75b317f686c3aa14"],["js/third-party/reveal/reveal.min.js","8988419d67efb5fe93e291a357e26ec9"],["js/third-party/reveal/zoom.min.js","9791f96e63e7d534cba2b67d4bda0419"],["js/third-party/velocity.min.js","64da069aba987ea0512cf610600a56d1"],["js/third-party/velocity.ui.min.js","c8ca438424a080620f7b2f4ee4b0fff1"],["js/transition.js","bd261a5dda799613501070ecc19d6e69"],["js/utils.js","3ff3423d966a1c351e9867813b3f6d36"],["page/2/index.html","d597b600f178a82aaa374a4abda9624a"],["tags/BBR/index.html","87570597ac38969d4b78e686a10ee703"],["tags/CentOS/index.html","264ab4ffe843b8d3c2b3607e7ffc4a57"],["tags/DigitalOcean/index.html","1ecd46046d7ab39cc624f25b2e08c240"],["tags/Hacknet/index.html","782ddcd5cefd0de1d09a763fda0acd6e"],["tags/JAVA/index.html","40876dae23c3aa863dadc7882abd61ce"],["tags/Linux/index.html","ab3b23a8f29e1de117177c0b6eaea59b"],["tags/Programming-language/index.html","01cb852c1f541989b6e3d223c75e754e"],["tags/Python-3/index.html","1ecfb6a8b7217962045982cabc7c7186"],["tags/Unix/index.html","1100c3a1468e371b3cf5d43944151cc1"],["tags/VPS-panel/index.html","4bfb20eabf7d823bdec429f65c7b1176"],["tags/VPS/index.html","fb56b0a53dbe72da77accbb0fe74000d"],["tags/Vim-GVim/index.html","e624920cf4ddd66858829c0a1bfd6256"],["tags/bash/index.html","70aab8de017cc3517ab13184d2036e72"],["tags/games/index.html","e41d74d4425bdf498fc2b96b846d2b89"],["tags/hacker-game/index.html","f63b2fd7312be55c983fd513bf35d539"],["tags/index.html","bd20c2f7f798255ef138f77a3bbe15b9"],["tags/net-optimize/index.html","da43d8c65f88893604d69bc8d3493cc7"],["tags/net-speeder/index.html","f5dd2bbfd30b4665548725f679141663"],["tags/programming-tools/index.html","f755a826c4a875a5781e10b31f594b2e"],["tags/serverspeeder/index.html","52e658bffce64aac7b0b9c92aa42c0a4"],["tags/shadowsocks-R/index.html","0cbb9ef819f2dc528f621090659b0015"],["tags/test/index.html","2e0d741db74d5f79e52396f1f84f881a"],["tags/vscode/index.html","0f841d8c17cdd1e938c5bfed3e653b50"],["tags/每日一记/index.html","12d352b2282fd29d8bca3d7bcef57532"],["tags/翻墙/index.html","f32f7357f1266fa35fe700ee25145667"],["tags/计算机协会/index.html","277843714fa5908e6d70eb55367aba83"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');


var ignoreUrlParametersMatching = [/^utm_/];



var addDirectoryIndex = function(originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
      url.pathname += index;
    }
    return url.toString();
  };

var cleanResponse = function(originalResponse) {
    // If this is not a redirected response, then we don't have to do anything.
    if (!originalResponse.redirected) {
      return Promise.resolve(originalResponse);
    }

    // Firefox 50 and below doesn't support the Response.body stream, so we may
    // need to read the entire body to memory as a Blob.
    var bodyPromise = 'body' in originalResponse ?
      Promise.resolve(originalResponse.body) :
      originalResponse.blob();

    return bodyPromise.then(function(body) {
      // new Response() is happy when passed either a stream or a Blob.
      return new Response(body, {
        headers: originalResponse.headers,
        status: originalResponse.status,
        statusText: originalResponse.statusText
      });
    });
  };

var createCacheKey = function(originalUrl, paramName, paramValue,
                           dontCacheBustUrlsMatching) {
    // Create a new URL object to avoid modifying originalUrl.
    var url = new URL(originalUrl);

    // If dontCacheBustUrlsMatching is not set, or if we don't have a match,
    // then add in the extra cache-busting URL parameter.
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
      url.search += (url.search ? '&' : '') +
        encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
  };

var isPathWhitelisted = function(whitelist, absoluteUrlString) {
    // If the whitelist is empty, then consider all URLs to be whitelisted.
    if (whitelist.length === 0) {
      return true;
    }

    // Otherwise compare each path regex to the path of the URL passed in.
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function(whitelistedPathRegex) {
      return path.match(whitelistedPathRegex);
    });
  };

var stripIgnoredUrlParameters = function(originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // Remove the hash; see https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // Exclude initial '?'
      .split('&') // Split into an array of 'key=value' strings
      .map(function(kv) {
        return kv.split('='); // Split each 'key=value' string into a [key, value] array
      })
      .filter(function(kv) {
        return ignoreUrlParametersMatching.every(function(ignoredRegex) {
          return !ignoredRegex.test(kv[0]); // Return true iff the key doesn't match any of the regexes.
        });
      })
      .map(function(kv) {
        return kv.join('='); // Join each [key, value] array into a 'key=value' string
      })
      .join('&'); // Join the array of 'key=value' strings into a string with '&' in between each

    return url.toString();
  };


var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
  precacheConfig.map(function(item) {
    var relativeUrl = item[0];
    var hash = item[1];
    var absoluteUrl = new URL(relativeUrl, self.location);
    var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
    return [absoluteUrl.toString(), cacheKey];
  })
);

function setOfCachedUrls(cache) {
  return cache.keys().then(function(requests) {
    return requests.map(function(request) {
      return request.url;
    });
  }).then(function(urls) {
    return new Set(urls);
  });
}

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return setOfCachedUrls(cache).then(function(cachedUrls) {
        return Promise.all(
          Array.from(urlsToCacheKeys.values()).map(function(cacheKey) {
            // If we don't have a key matching url in the cache already, add it.
            if (!cachedUrls.has(cacheKey)) {
              var request = new Request(cacheKey, {credentials: 'same-origin'});
              return fetch(request).then(function(response) {
                // Bail out of installation unless we get back a 200 OK for
                // every request.
                if (!response.ok) {
                  throw new Error('Request for ' + cacheKey + ' returned a ' +
                    'response with status ' + response.status);
                }

                return cleanResponse(response).then(function(responseToCache) {
                  return cache.put(cacheKey, responseToCache);
                });
              });
            }
          })
        );
      });
    }).then(function() {
      
      // Force the SW to transition from installing -> active state
      return self.skipWaiting();
      
    })
  );
});

self.addEventListener('activate', function(event) {
  var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.keys().then(function(existingRequests) {
        return Promise.all(
          existingRequests.map(function(existingRequest) {
            if (!setOfExpectedUrls.has(existingRequest.url)) {
              return cache.delete(existingRequest);
            }
          })
        );
      });
    }).then(function() {
      
      return self.clients.claim();
      
    })
  );
});


self.addEventListener('fetch', function(event) {
  if (event.request.method === 'GET') {
    // Should we call event.respondWith() inside this fetch event handler?
    // This needs to be determined synchronously, which will give other fetch
    // handlers a chance to handle the request if need be.
    var shouldRespond;

    // First, remove all the ignored parameters and hash fragment, and see if we
    // have that URL in our cache. If so, great! shouldRespond will be true.
    var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
    shouldRespond = urlsToCacheKeys.has(url);

    // If shouldRespond is false, check again, this time with 'index.html'
    // (or whatever the directoryIndex option is set to) at the end.
    var directoryIndex = 'index.html';
    if (!shouldRespond && directoryIndex) {
      url = addDirectoryIndex(url, directoryIndex);
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond is still false, check to see if this is a navigation
    // request, and if so, whether the URL matches navigateFallbackWhitelist.
    var navigateFallback = '';
    if (!shouldRespond &&
        navigateFallback &&
        (event.request.mode === 'navigate') &&
        isPathWhitelisted([], event.request.url)) {
      url = new URL(navigateFallback, self.location).toString();
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond was set to true at any point, then call
    // event.respondWith(), using the appropriate cache key.
    if (shouldRespond) {
      event.respondWith(
        caches.open(cacheName).then(function(cache) {
          return cache.match(urlsToCacheKeys.get(url)).then(function(response) {
            if (response) {
              return response;
            }
            throw Error('The cached response that was expected is missing.');
          });
        }).catch(function(e) {
          // Fall back to just fetch()ing the request if some unexpected error
          // prevented the cached response from being valid.
          console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
          return fetch(event.request);
        })
      );
    }
  }
});







