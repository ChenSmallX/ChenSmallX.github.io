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

var precacheConfig = [["2018/06/06/hello-hexo/index.html","dde1d8c587c9386da722bce111d3fa1d"],["2018/06/06/test/index.html","f5d98b7e3f6f47e1f10f2164ceeb0d38"],["2018/06/07/config-of-vscode-for-c-cpp-on-macos/index.html","b609acc9f3c2277e183968c9c9225ff5"],["2018/06/08/VPS-panel-VPSMate/index.html","1c822dc651a6d125cdbcf44876e0c148"],["2018/06/08/VPS-panel-bt/index.html","0a6432b37d7a4591257123eaf69015ad"],["2018/06/08/build-shadowsocks-r-like-a-stable-dog/index.html","20036dd23698f83dd444e0910164c525"],["2018/06/08/net-optimize-for-VPS-net-speeder/index.html","85b545903dce121bdd67b948fbdb0d2f"],["2018/06/08/recommend-VPS-recently/index.html","f91609cc7b2423c24575bbc2a13fb845"],["2018/06/08/settings-for-a-new-or-minimal-centos/index.html","d6d7f1b75d55dcba6b3f6221e2bea49e"],["2018/06/09/net-optimize-for-VPS-serverspeeder/index.html","749daf18950457e05661073d29a9b2f5"],["2018/06/13/javaprogramlanguage-personal-encountered-javautilnosuchelementexception-anomalies-and-problems-and-solutions/index.html","646d301d9feaab33c1b33461fe5b7f05"],["2018/06/19/digitalocean-centos6-enable-bbr-to-upspeed/index.html","7abbcee7cda715f7a14fe0e843367425"],["2018/06/19/sshWarning-solution/index.html","af2ac7e7bf05f506faf64f231c011adc"],["2018/07/03/hacknet-again/index.html","713d3e9e1850c7b6abc567b0a73456f0"],["2018/07/03/python-learning-list/index.html","29a141dbec53a7e91fa542dcbda6ee4b"],["2018/07/11/vim-caught-deadly-signal-segv/index.html","b28e70dae3bd810f66f88db6bb593354"],["2018/07/13/computerInstitution-summerassignment-2018/index.html","af0ebec46eefcbb22438f2d2b32fe287"],["2018/11/20/post-everyday-2018-11-20/index.html","e057d4c51b84da9bd55a2d527ff15fc8"],["2018/11/21/post-everyday-2018-11-21/index.html","ca9f9d6c4b6b8713e1d17044f7453761"],["2018/11/22/VMWare-Fusion-recycle-storage/index.html","cd2631c543bbea4f6ae160ee9e5504dc"],["2018/11/22/post-everyday-2018-11-22/index.html","bb855fee186ee7232b4aac143b563a51"],["about-me/index.html","d8c0a0e974284231b0e6e7e42ccddd4c"],["archives/2018/06/index.html","574417ad89d34279f328005e825f6b1c"],["archives/2018/06/page/2/index.html","3ec470659f6bd10d688d0cdfd9dacecd"],["archives/2018/07/index.html","412237beda9a51edca561e338f624d8a"],["archives/2018/11/index.html","238f4781b433ca7426bf14f3ff3fe3d5"],["archives/2018/index.html","0ee21823454c079a41a498c605581f79"],["archives/2018/page/2/index.html","53a529f59bfc5ac5b165f1708cf1c5c8"],["archives/2018/page/3/index.html","447559d8082d2bd8da4d238a14eda2c6"],["archives/index.html","bae8fdc1d963676de1070e57318e7d2e"],["archives/page/2/index.html","f88de0c451cd51c14f5dc6092edfe0d1"],["archives/page/3/index.html","ddee0d122a4e807644bc330ef1c5a9b4"],["assets/algolia/algoliasearch.js","d2d43273523febe70b3fbe4c7fb050bd"],["assets/algolia/algoliasearch.min.js","d5ac7c786438492c5b4e9a9f8fc411ba"],["assets/algolia/algoliasearchLite.js","81dab03a4f3d2e08cb6ebccca9f81a09"],["assets/algolia/algoliasearchLite.min.js","01e86fe9a14b3d8270ca1867bacc7066"],["categories/Linux-learning/index.html","dcef090e5016b138817ff145a3e4a90b"],["categories/Linux/Ubuntu/index.html","ba3978da0c53def10d0ca6ccaab4ada9"],["categories/Linux/index.html","3e9d2676f16abf68373065cf2cdc31fb"],["categories/VMWare-Fusion/index.html","88ed7e846744ceff58137fef42d15728"],["categories/game/index.html","ac9292973c9d341c7e454c36e8ea2eb8"],["categories/geek-s-work/index.html","e219dc647d27b6333e2ef45308d8cb9b"],["categories/geek-s-work/page/2/index.html","b3c18dc45173dc6d0cb2291e24de729d"],["categories/geek-s-work/play-with-VPS/index.html","f8ca7a915ddd5c61bcf95bd31334d830"],["categories/index.html","b5470a694a68851e9eae9c48156cd3d6"],["categories/programer-walk/JAVA/index.html","c464fcd39ba05bb3fcfd4bff265266e1"],["categories/programer-walk/Python-3/index.html","c1fc28cdc87ae4f886169227e3bb1601"],["categories/programer-walk/index.html","ff36b8978abc6cd5e09c2f115bf4f891"],["categories/programer-walk/programming-tools/index.html","0d36bb3421c170f9f2f750fd9723e89d"],["categories/test/index.html","e7cf7087c51b2a094021bf4b92e3b1cf"],["categories/每日一记/index.html","976f7b6c794db494e1bb7181c76b37e5"],["categories/计算机协会/index.html","3f67a0ac0d22926da835d75130d7be1a"],["css/index.css","edb50afbb3856f9df25c1ae34d83ed98"],["css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["gallery/index.html","8fbdd423d0736c9f0dc3d0e5fbbf4d00"],["img/Anonymous_masks_hackers_v_for_vendetta_black_background_3840x2400.jpg","ce571a3428d1522fd31f82492c945ab3"],["img/BBRscript.png","9ebb84292ad0257c2e2f10ccc8210857"],["img/DOticket.jpg","a0f155fb0316c82e30d8c30527380be2"],["img/ELECTRONICS_machine_technology_circuit_electronic_computer_technics_detail_psychedelic_abstract_pattern_5472x3648.jpg","68cfae3ed50fff3db3d710003ecc631f"],["img/Gears_mechanical_technics_metal_steel_abstract_abstraction_steampunk_mechanism_machine_Engineering_gear_1920x1080.jpg","c397ba08a4d48f0d431a63b15f5c15fb"],["img/HACKER_hack_hacking_internet_computer_anarchy_poster_1920x1083.jpg","b68a0e40bb43ba7fcab9bc33ecb9f348"],["img/Hacker_hacking_hack_anarchy_virus_internet_computer_sadic_Anonymous_dark_1920x1080.jpg","db0a7fe1fe9ebe8fa1208d4894e0348c"],["img/KVM-OVZ-XEN.png","022b91d2147df73b9045a10f5ed9d179"],["img/MacBook_keyboard_2560x1600.jpg","a7dbe22103bbca4ac4a62bb4ef63f17e"],["img/Minimalistic_apple_inc_2560x1600.jpg","79da60f54c9b965f6946019745a7ef44"],["img/QQ20180610-2032072x.png","02ffc9ce3850ee27732ff178324d48e6"],["img/Winter_Mountain_3840x2160.jpg","a8789af4556247c0a021413164200016"],["img/after_BBR.png","06f69fc3cbf721e932a3aa7c8ebe76cf"],["img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["img/avatar.png","6cc4a809d23e3d8946a299ae4ce4e4cd"],["img/before_BBR.png","c1399865981bbc7d7547c43699657341"],["img/computer_engineering_science_tech_1920x1080.jpg","9750a9696cb2fe206bfa85c164b37f21"],["img/computers_electronics_macro_chips_integrated_circuit_heatsinks_processor_1920x1080.jpg","ff368e75aa91ea6bc7c033e714b55031"],["img/cubecloud.png","b5d83eeded92e8a495be6199d859b230"],["img/datagrip.png","d3b75b7a48a2c2653631447159de4e21"],["img/goodSQL-DG.png","e21b1c961365b4fd252676e7662e5b97"],["img/goodSQL-G.png","25abaa2aa16ec7806e47eb7cc6990f6c"],["img/topimg.jpg","9910536312243fefc306013138ddacc2"],["img/vm-recycal.png","006b9fe2147ebc9874c7a2e66deb71ec"],["img/wrongSQL.png","f54dfce3f9f991f641403a9d8be6a8dc"],["index.html","12eed1c9072308f09f30f8253ec03203"],["js/copy.js","f4607057c0513bd07a69fcac08121979"],["js/fancybox.js","cdef3c681834a3e5ee4de9a7ed2e0fb0"],["js/fireworks.js","c186e041cb64c2e7efd345b7838f6ad7"],["js/head.js","72dbb78b4e9c4cdf14fd4b8c9bd9828c"],["js/hexo-theme-melody.js","d41d8cd98f00b204e9800998ecf8427e"],["js/scroll.js","c1789d3ce75d3ff59ea20a6b435c2fcf"],["js/search/algolia.js","dedc6e24c8d82429d5d498cc5a47ab07"],["js/search/local-search.js","bac0e1eda3d01fe70e4f7b887390ad97"],["js/sidebar.js","d24db780974e661198eeb2e45f20a28f"],["js/third-party/anime.min.js","9b4bbe6deb700e1c3606eab732f5eea5"],["js/third-party/jquery.fancybox.min.js","3c9fa1c1199cd4f874d855ecb1641335"],["js/third-party/jquery.min.js","c9f5aeeca3ad37bf2aa006139b935f0a"],["js/third-party/reveal/head.min.js","aad121203010122e05f1766d92385214"],["js/third-party/reveal/highlight.min.js","44594243bec43813a16371af8fe7e105"],["js/third-party/reveal/markdown.min.js","7ec4cef5a7fe3f0bf0eb4dc6d7bca114"],["js/third-party/reveal/marked.min.js","c2a88705e206d71dc21fdc4445349127"],["js/third-party/reveal/math.min.js","0a278fee2e57c530ab07f7d2d9ea8d96"],["js/third-party/reveal/notes.min.js","89a0dfae4d706f9c75b317f686c3aa14"],["js/third-party/reveal/reveal.min.js","8988419d67efb5fe93e291a357e26ec9"],["js/third-party/reveal/zoom.min.js","9791f96e63e7d534cba2b67d4bda0419"],["js/third-party/velocity.min.js","64da069aba987ea0512cf610600a56d1"],["js/third-party/velocity.ui.min.js","c8ca438424a080620f7b2f4ee4b0fff1"],["js/transition.js","bd261a5dda799613501070ecc19d6e69"],["js/utils.js","3ff3423d966a1c351e9867813b3f6d36"],["page/2/index.html","452aaf13216306961da3f7ba6d09303b"],["page/3/index.html","fe3bcd8cd1916a16e6cefb35c5087287"],["tags/BBR/index.html","4a4f75f60969c8caf2d9fc4fb8e37f37"],["tags/CentOS/index.html","f64cb615da37e1a9a5037d7a51dde0da"],["tags/DigitalOcean/index.html","e50d2f1127e52e11f2801d80d122b396"],["tags/Hacknet/index.html","bd722a4712e0941c0deaef196bdabb84"],["tags/JAVA/index.html","eb270f52df5e84104d514b38126c2df3"],["tags/Linux/index.html","2b4bf04458938545182a0d23ccfe1f92"],["tags/MacOSX/index.html","a9d447d109e3f894592baf57782755ba"],["tags/Programming-language/index.html","52b8e3c7a61adb148623fb9e76dad72b"],["tags/Python-3/index.html","656c34aecc734682890b382ce2c5879e"],["tags/Ubuntu/index.html","1407b543007b8047facb8b1af4d95554"],["tags/Unix/index.html","cad5e50bbfa2b034b29e56c9a543a7cb"],["tags/VMWare-Fusion/index.html","2532e2e9cb41c060206f2dc323374b01"],["tags/VPS-panel/index.html","43d452bd9dbff24cf049e1c4083ddb99"],["tags/VPS/index.html","aad8851561986957533473f458f784de"],["tags/Vim-GVim/index.html","c742540b6f5192c5be67b8b39874c2d1"],["tags/bash/index.html","7d428c99ca464027202016946b344720"],["tags/games/index.html","533450d1647009f3fba6f369e6f9a537"],["tags/hacker-game/index.html","f32278dd9551696cc6340ba64fac43b9"],["tags/index.html","6795acb9b81a263ef884c346be56a65d"],["tags/net-optimize/index.html","538ee638726f7300e40a2e7b378269c4"],["tags/net-speeder/index.html","02f31c02ae75aea04c9da3b763467977"],["tags/programming-tools/index.html","0505fff7536d0715d24fca8ba1598c46"],["tags/serverspeeder/index.html","4c3da0703ccce7bdcc9f5c1ef78d0f2e"],["tags/shadowsocks-R/index.html","cb53b881305b982a208e4ba1a5fa9227"],["tags/test/index.html","c09c785ae7316ed1e3dd908c841f970e"],["tags/vscode/index.html","6a68adcc98f6ea65358b5634973ef165"],["tags/每日一记/index.html","dfd7befa51cda1199be122964bd064ca"],["tags/翻墙/index.html","2606c51748b239e6e07afb5b8c528e82"],["tags/计算机协会/index.html","9cf47dc480d55dde53c2ca2e2a0c72b3"]];
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







