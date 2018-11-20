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

var precacheConfig = [["2018/06/06/hello-hexo/index.html","c9c96a1a40875fe4cabafb2ffeb3fc64"],["2018/06/06/test/index.html","d49580adaa8bad5224ff0cb783d259e5"],["2018/06/07/config-of-vscode-for-c-cpp-on-macos/index.html","721cb94192cb2e54e4a3c50d27754cad"],["2018/06/08/VPS-panel-VPSMate/index.html","fbeb3dbcad00bce4dd124b809b7e1545"],["2018/06/08/VPS-panel-bt/index.html","56df10e1cbdd0996e28a593a6847045d"],["2018/06/08/build-shadowsocks-r-like-a-stable-dog/index.html","29a0a17fe3a1b4e2cdc180bb81b418ae"],["2018/06/08/net-optimize-for-VPS-net-speeder/index.html","6447e2dba863537407eb1eabea0e7727"],["2018/06/08/recommend-VPS-recently/index.html","2ce4d0b0a92beab668fbb5cb4006484a"],["2018/06/08/settings-for-a-new-or-minimal-centos/index.html","93af5d6ebd344e8c872e5604d7b29cd7"],["2018/06/09/net-optimize-for-VPS-serverspeeder/index.html","4a56c88cdb8538a6da8953a81cd244c0"],["2018/06/13/javaprogramlanguage-personal-encountered-javautilnosuchelementexception-anomalies-and-problems-and-solutions/index.html","1af6cb3747011b7820d28e55c56fa42c"],["2018/06/19/digitalocean-centos6-enable-bbr-to-upspeed/index.html","45ca09d7189dfc6906b4693b66f58b16"],["2018/06/19/sshWarning-solution/index.html","d997062399bbd55543a24de7e0cb0163"],["2018/07/03/hacknet-again/index.html","7af574a4cd5a9678a81971c522db01d6"],["2018/07/03/python-learning-list/index.html","fd0199853bc4765eb2afad4a779442bb"],["2018/07/11/vim-caught-deadly-signal-segv/index.html","889312f43f0026b3104183da0cb3dede"],["2018/07/13/computerInstitution-summerassignment-2018/index.html","c4ddc4d359259db568ee3c0150762a3a"],["2018/11/20/post-everyday-2018-11-20/index.html","56111020ddca69d71be9de8b0d44b226"],["about-me/index.html","b570d52b1e9348ee510e3aba072e2a9e"],["archives/2018/06/index.html","e4f36bf55399eb2b8d07456a1bfff794"],["archives/2018/06/page/2/index.html","1efd7eb2e2e42a9b55c22e8f7754455e"],["archives/2018/07/index.html","af56d87b221a2754f3f0752813ddc1e0"],["archives/2018/11/index.html","7ff9a94b6bf4b2d3a4e16c0639ab201f"],["archives/2018/index.html","67bcf10f0593fd2b40a19583b8af8fbe"],["archives/2018/page/2/index.html","eaa35e2db4b218325805a4b3666f6358"],["archives/index.html","a35271c1a6d86c9a30b233e6a13fdabb"],["archives/page/2/index.html","28f7aaf48c75025612bdc3fb7f71df7b"],["assets/algolia/algoliasearch.js","d2d43273523febe70b3fbe4c7fb050bd"],["assets/algolia/algoliasearch.min.js","d5ac7c786438492c5b4e9a9f8fc411ba"],["assets/algolia/algoliasearchLite.js","81dab03a4f3d2e08cb6ebccca9f81a09"],["assets/algolia/algoliasearchLite.min.js","01e86fe9a14b3d8270ca1867bacc7066"],["categories/Linux-learning/index.html","b0aab2397918527d16ba7825446b4644"],["categories/game/index.html","28ab463ce5e8700f97593d83f1348684"],["categories/geek-s-work/index.html","4632932065376df10a7dc3b23c50bfbb"],["categories/geek-s-work/page/2/index.html","d378a0b6841bef4977e96856d07878c3"],["categories/geek-s-work/play-with-VPS/index.html","94ba2371aec3ea238a252e17d169858d"],["categories/index.html","89c9e2d51953e2a1c3508943fb67ac36"],["categories/programer-walk/JAVA/index.html","0df830de8a7dc4028e35965c9a0afb63"],["categories/programer-walk/Python-3/index.html","005836d9e79e64900487dfeb3426a515"],["categories/programer-walk/index.html","a1aae09b85e2ad4e2e3b622058c149aa"],["categories/programer-walk/programming-tools/index.html","b28d2ad9d25e0bab1c2b7c8312f66f38"],["categories/test/index.html","fb482eafcb716256bba82a33c71b4572"],["categories/每日一记/index.html","5b520b43c894fbf29448469d8a9322d6"],["categories/计算机协会/index.html","1cf16b9410afab76b7a8d28b81995f1f"],["css/index.css","edb50afbb3856f9df25c1ae34d83ed98"],["css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["gallery/index.html","c7638fb287f966fa9c4abc45056009ba"],["img/Anonymous_masks_hackers_v_for_vendetta_black_background_3840x2400.jpg","ce571a3428d1522fd31f82492c945ab3"],["img/BBRscript.png","9ebb84292ad0257c2e2f10ccc8210857"],["img/DOticket.jpg","a0f155fb0316c82e30d8c30527380be2"],["img/ELECTRONICS_machine_technology_circuit_electronic_computer_technics_detail_psychedelic_abstract_pattern_5472x3648.jpg","68cfae3ed50fff3db3d710003ecc631f"],["img/Gears_mechanical_technics_metal_steel_abstract_abstraction_steampunk_mechanism_machine_Engineering_gear_1920x1080.jpg","c397ba08a4d48f0d431a63b15f5c15fb"],["img/HACKER_hack_hacking_internet_computer_anarchy_poster_1920x1083.jpg","b68a0e40bb43ba7fcab9bc33ecb9f348"],["img/Hacker_hacking_hack_anarchy_virus_internet_computer_sadic_Anonymous_dark_1920x1080.jpg","db0a7fe1fe9ebe8fa1208d4894e0348c"],["img/KVM-OVZ-XEN.png","022b91d2147df73b9045a10f5ed9d179"],["img/MacBook_keyboard_2560x1600.jpg","a7dbe22103bbca4ac4a62bb4ef63f17e"],["img/Minimalistic_apple_inc_2560x1600.jpg","79da60f54c9b965f6946019745a7ef44"],["img/QQ20180610-2032072x.png","02ffc9ce3850ee27732ff178324d48e6"],["img/Winter_Mountain_3840x2160.jpg","a8789af4556247c0a021413164200016"],["img/after_BBR.png","06f69fc3cbf721e932a3aa7c8ebe76cf"],["img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["img/avatar.png","6cc4a809d23e3d8946a299ae4ce4e4cd"],["img/before_BBR.png","c1399865981bbc7d7547c43699657341"],["img/computer_engineering_science_tech_1920x1080.jpg","9750a9696cb2fe206bfa85c164b37f21"],["img/computers_electronics_macro_chips_integrated_circuit_heatsinks_processor_1920x1080.jpg","ff368e75aa91ea6bc7c033e714b55031"],["img/cubecloud.png","b5d83eeded92e8a495be6199d859b230"],["img/topimg.jpg","9910536312243fefc306013138ddacc2"],["index.html","e28b5291216ccc8dfc0ce414665d97f7"],["js/copy.js","f4607057c0513bd07a69fcac08121979"],["js/fancybox.js","cdef3c681834a3e5ee4de9a7ed2e0fb0"],["js/fireworks.js","c186e041cb64c2e7efd345b7838f6ad7"],["js/head.js","72dbb78b4e9c4cdf14fd4b8c9bd9828c"],["js/hexo-theme-melody.js","d41d8cd98f00b204e9800998ecf8427e"],["js/scroll.js","c1789d3ce75d3ff59ea20a6b435c2fcf"],["js/search/algolia.js","dedc6e24c8d82429d5d498cc5a47ab07"],["js/search/local-search.js","bac0e1eda3d01fe70e4f7b887390ad97"],["js/sidebar.js","d24db780974e661198eeb2e45f20a28f"],["js/third-party/anime.min.js","9b4bbe6deb700e1c3606eab732f5eea5"],["js/third-party/jquery.fancybox.min.js","3c9fa1c1199cd4f874d855ecb1641335"],["js/third-party/jquery.min.js","c9f5aeeca3ad37bf2aa006139b935f0a"],["js/third-party/reveal/head.min.js","aad121203010122e05f1766d92385214"],["js/third-party/reveal/highlight.min.js","44594243bec43813a16371af8fe7e105"],["js/third-party/reveal/markdown.min.js","7ec4cef5a7fe3f0bf0eb4dc6d7bca114"],["js/third-party/reveal/marked.min.js","c2a88705e206d71dc21fdc4445349127"],["js/third-party/reveal/math.min.js","0a278fee2e57c530ab07f7d2d9ea8d96"],["js/third-party/reveal/notes.min.js","89a0dfae4d706f9c75b317f686c3aa14"],["js/third-party/reveal/reveal.min.js","8988419d67efb5fe93e291a357e26ec9"],["js/third-party/reveal/zoom.min.js","9791f96e63e7d534cba2b67d4bda0419"],["js/third-party/velocity.min.js","64da069aba987ea0512cf610600a56d1"],["js/third-party/velocity.ui.min.js","c8ca438424a080620f7b2f4ee4b0fff1"],["js/transition.js","bd261a5dda799613501070ecc19d6e69"],["js/utils.js","3ff3423d966a1c351e9867813b3f6d36"],["page/2/index.html","ed2341f67a9edefd4f5df34edbe20f5d"],["tags/BBR/index.html","bb151ba4f3901f5b0f0d892bdd0acd07"],["tags/CentOS/index.html","2345782037381068d5de74c5db3a54ae"],["tags/DigitalOcean/index.html","ac99cdd4b654fc2ee54799ff81991cc6"],["tags/Hacknet/index.html","8d2a7f8422333c0b416fd9e0b13c9b97"],["tags/JAVA/index.html","187d2e8e25d9f700236f0062b5fc1d79"],["tags/Linux/index.html","76eaa271b751fe975aed2e5d94b197b9"],["tags/Programming-language/index.html","954020c452a50da29c95e21b49f4fe0a"],["tags/Python-3/index.html","f4802789f0ae46f5be466f85fcf33ed9"],["tags/Unix/index.html","ccf1422e4a41aac9a16a2f695de56712"],["tags/VPS-panel/index.html","e58ab0ddaff0230396a6ff3912fc2784"],["tags/VPS/index.html","b894f169b31db071a38eebed7139eb9f"],["tags/Vim-GVim/index.html","3574fe5bd28d6116ca7515c783e4fd9a"],["tags/bash/index.html","b4febcb7053298910910f11849b409b4"],["tags/games/index.html","dcaaebd5811759565ae0e2b9c895dbb0"],["tags/hacker-game/index.html","1b05aaffc6d866682874c85f9c9190b1"],["tags/index.html","7d01515457e8b1780e2d80ed67f46b39"],["tags/net-optimize/index.html","53adaf61e857415a666c77a033d71b13"],["tags/net-speeder/index.html","18507631bcb5637c52aff6d0616f71d9"],["tags/programming-tools/index.html","512441a7ebc3add48fd52f7eee58f59e"],["tags/serverspeeder/index.html","639d1b670af129f899a4e11614fc4c62"],["tags/shadowsocks-R/index.html","f2154cc2f56bbe633ac7ce412523a12e"],["tags/test/index.html","961ec5e86abe77ee01eb38efebb3423f"],["tags/vscode/index.html","502952024227833360c09ced2e6912e0"],["tags/每日一记/index.html","2bfe4a1f9f350b36cfc63a72ced3110e"],["tags/翻墙/index.html","6f24e2f6cf6a9375e920241986c37b30"],["tags/计算机协会/index.html","1ae463f4e3aa902b307295dbdcc0c200"]];
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







