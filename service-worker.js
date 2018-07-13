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

var precacheConfig = [["2018/06/06/hello-hexo/index.html","55d824252f1a7d4df87346d15334e539"],["2018/06/06/test/index.html","4b1ce3e705bd624eb7e40fe1370718da"],["2018/06/07/config-of-vscode-for-c-cpp-on-macos/index.html","bdcc86fddf835bc2682ba3f7631c9ae9"],["2018/06/08/VPS-panel-VPSMate/index.html","012cc87baa350e34642e1f6ab3318a07"],["2018/06/08/VPS-panel-bt/index.html","ef13065023ce7e58e1dc8788f148877f"],["2018/06/08/build-shadowsocks-r-like-a-stable-dog/index.html","c3c4072d863ae9fa9f711c780a85d447"],["2018/06/08/net-optimize-for-VPS-net-speeder/index.html","9b3dae875f0451cfacc07622439da323"],["2018/06/08/recommend-VPS-recently/index.html","8ed0fa3ec33db98d773e349d52003772"],["2018/06/08/settings-for-a-new-or-minimal-centos/index.html","413cf108c3299265635ec63fecd16567"],["2018/06/09/net-optimize-for-VPS-serverspeeder/index.html","dda0baf2565f166d09722fd4beaf3561"],["2018/06/13/javaprogramlanguage-personal-encountered-javautilnosuchelementexception-anomalies-and-problems-and-solutions/index.html","db3069ae86c616a578239c89539713d7"],["2018/06/19/digitalocean-centos6-enable-bbr-to-upspeed/index.html","8c8ab97b5b8eee0bf71dd678b8fdbb84"],["2018/06/19/sshWarning-solution/index.html","180583af57ffc647e31cb5902d8c443e"],["2018/07/03/hacknet-again/index.html","769a46e26675be04d7d4520d1db8a1fc"],["2018/07/03/python-learning-list/index.html","9945374ddf61d65ae8a7d52a02998288"],["2018/07/11/vim-caught-deadly-signal-segv/index.html","46638fe6058cd1504bf3def37bd1eea5"],["2018/07/13/computerInstitution-summerassignment-2018/index.html","e1e26433c589195575d67e4882dacdba"],["about-me/index.html","5eadc46ffd582d0feaf9a01ab68fca42"],["archives/2018/06/index.html","720b889ffd12af0c37190581c3dfb093"],["archives/2018/06/page/2/index.html","5470d713c377a3db73104efa4fba94b5"],["archives/2018/07/index.html","30dbdcb12ac0059b5b045245cf320e86"],["archives/2018/index.html","6575d566b46243538903ec53ea409fa7"],["archives/2018/page/2/index.html","16d70eba8493f00e0cdfeb4e17c92e35"],["archives/index.html","a5362ccf1d281c964c7a5945b5ae624c"],["archives/page/2/index.html","1493be99312adf0387bdc0795459ccd5"],["assets/algolia/algoliasearch.js","d2d43273523febe70b3fbe4c7fb050bd"],["assets/algolia/algoliasearch.min.js","d5ac7c786438492c5b4e9a9f8fc411ba"],["assets/algolia/algoliasearchLite.js","81dab03a4f3d2e08cb6ebccca9f81a09"],["assets/algolia/algoliasearchLite.min.js","01e86fe9a14b3d8270ca1867bacc7066"],["categories/Linux-learning/index.html","93e9503c9cb65f84580531ab339bfad9"],["categories/game/index.html","b9240a0c44bdb70312a10b1f609c504e"],["categories/geek-s-work/index.html","b3da25835c779ca48adb11c31881517c"],["categories/geek-s-work/page/2/index.html","6e031ec7ce146d401961806ba6a7b4f6"],["categories/geek-s-work/play-with-VPS/index.html","4ada1aad8f3849e640269714724e496e"],["categories/index.html","79a45ada43cce841446fa1ead463a8aa"],["categories/programer-walk/JAVA/index.html","beb6265a7b9e2d9d30c504f6d827cc22"],["categories/programer-walk/Python-3/index.html","3e1ae823995b85f21e5ecaceed2a122c"],["categories/programer-walk/index.html","6c1c4aaceeda6f638262b6e6c18706e4"],["categories/programer-walk/programming-tools/index.html","d6bc187ed53779cfaadf84a87a51f411"],["categories/test/index.html","fbe4fcc08ae5047a08907def0f3a1a30"],["categories/计算机协会/index.html","efaf225dae5784de79e2b528c9bbf0fc"],["css/index.css","edb50afbb3856f9df25c1ae34d83ed98"],["css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["gallery/index.html","69088373ba0485c84631d85709d01db4"],["img/Anonymous_masks_hackers_v_for_vendetta_black_background_3840x2400.jpg","ce571a3428d1522fd31f82492c945ab3"],["img/BBRscript.png","9ebb84292ad0257c2e2f10ccc8210857"],["img/DOticket.jpg","a0f155fb0316c82e30d8c30527380be2"],["img/ELECTRONICS_machine_technology_circuit_electronic_computer_technics_detail_psychedelic_abstract_pattern_5472x3648.jpg","68cfae3ed50fff3db3d710003ecc631f"],["img/Gears_mechanical_technics_metal_steel_abstract_abstraction_steampunk_mechanism_machine_Engineering_gear_1920x1080.jpg","c397ba08a4d48f0d431a63b15f5c15fb"],["img/HACKER_hack_hacking_internet_computer_anarchy_poster_1920x1083.jpg","b68a0e40bb43ba7fcab9bc33ecb9f348"],["img/Hacker_hacking_hack_anarchy_virus_internet_computer_sadic_Anonymous_dark_1920x1080.jpg","db0a7fe1fe9ebe8fa1208d4894e0348c"],["img/KVM-OVZ-XEN.png","022b91d2147df73b9045a10f5ed9d179"],["img/MacBook_keyboard_2560x1600.jpg","a7dbe22103bbca4ac4a62bb4ef63f17e"],["img/Minimalistic_apple_inc_2560x1600.jpg","79da60f54c9b965f6946019745a7ef44"],["img/QQ20180610-2032072x.png","02ffc9ce3850ee27732ff178324d48e6"],["img/Winter_Mountain_3840x2160.jpg","a8789af4556247c0a021413164200016"],["img/after_BBR.png","06f69fc3cbf721e932a3aa7c8ebe76cf"],["img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["img/avatar.png","6cc4a809d23e3d8946a299ae4ce4e4cd"],["img/before_BBR.png","c1399865981bbc7d7547c43699657341"],["img/computer_engineering_science_tech_1920x1080.jpg","9750a9696cb2fe206bfa85c164b37f21"],["img/computers_electronics_macro_chips_integrated_circuit_heatsinks_processor_1920x1080.jpg","ff368e75aa91ea6bc7c033e714b55031"],["img/cubecloud.png","b5d83eeded92e8a495be6199d859b230"],["img/topimg.jpg","9910536312243fefc306013138ddacc2"],["index.html","020dd92651204b0fa19a5359f69c0ca3"],["js/copy.js","f4607057c0513bd07a69fcac08121979"],["js/fancybox.js","cdef3c681834a3e5ee4de9a7ed2e0fb0"],["js/fireworks.js","c186e041cb64c2e7efd345b7838f6ad7"],["js/head.js","72dbb78b4e9c4cdf14fd4b8c9bd9828c"],["js/hexo-theme-melody.js","d41d8cd98f00b204e9800998ecf8427e"],["js/scroll.js","c1789d3ce75d3ff59ea20a6b435c2fcf"],["js/search/algolia.js","dedc6e24c8d82429d5d498cc5a47ab07"],["js/search/local-search.js","bac0e1eda3d01fe70e4f7b887390ad97"],["js/sidebar.js","d24db780974e661198eeb2e45f20a28f"],["js/third-party/anime.min.js","9b4bbe6deb700e1c3606eab732f5eea5"],["js/third-party/jquery.fancybox.min.js","3c9fa1c1199cd4f874d855ecb1641335"],["js/third-party/jquery.min.js","c9f5aeeca3ad37bf2aa006139b935f0a"],["js/third-party/reveal/head.min.js","aad121203010122e05f1766d92385214"],["js/third-party/reveal/highlight.min.js","44594243bec43813a16371af8fe7e105"],["js/third-party/reveal/markdown.min.js","7ec4cef5a7fe3f0bf0eb4dc6d7bca114"],["js/third-party/reveal/marked.min.js","c2a88705e206d71dc21fdc4445349127"],["js/third-party/reveal/math.min.js","0a278fee2e57c530ab07f7d2d9ea8d96"],["js/third-party/reveal/notes.min.js","89a0dfae4d706f9c75b317f686c3aa14"],["js/third-party/reveal/reveal.min.js","8988419d67efb5fe93e291a357e26ec9"],["js/third-party/reveal/zoom.min.js","9791f96e63e7d534cba2b67d4bda0419"],["js/third-party/velocity.min.js","64da069aba987ea0512cf610600a56d1"],["js/third-party/velocity.ui.min.js","c8ca438424a080620f7b2f4ee4b0fff1"],["js/transition.js","bd261a5dda799613501070ecc19d6e69"],["js/utils.js","3ff3423d966a1c351e9867813b3f6d36"],["page/2/index.html","d472f73a1ec8815e67f73f590aa71bb1"],["tags/BBR/index.html","64c2a1f4c460f849790b4e06753522ea"],["tags/CentOS/index.html","231920f934bb1e6a9630431de05f0790"],["tags/DigitalOcean/index.html","56dedcd249d66d4a689c6b6ec8547156"],["tags/Hacknet/index.html","5bfc1d96d9518464ae587676cc1c0b2e"],["tags/JAVA/index.html","d46e34763a1bfcaed43ebab7d3a2b552"],["tags/Linux/index.html","82467d2606204c852727fbc12af10c64"],["tags/Programming-language/index.html","d99b23b6566b379b768c5982e27bd1e0"],["tags/Python-3/index.html","a1a7ac6164b317d51d8c3e571adb0a3d"],["tags/Unix/index.html","1ceade157ca92d7f710db5b9946671a1"],["tags/VPS-panel/index.html","9c969cbf8d3260a73387936ea77dbb7a"],["tags/VPS/index.html","a8354a38e869ecfa0c1473f7460df4b2"],["tags/Vim-GVim/index.html","bebb4c371aef9cc46c838e8b8e4863de"],["tags/bash/index.html","4a0eddc954f7b07fa0d3daf8316fbe89"],["tags/games/index.html","3a8c705158fa224efdeb6d098621caa6"],["tags/hacker-game/index.html","9857b07a7fbec8296438b07d1650c4b1"],["tags/index.html","2f6439a9d86cad8f4d3e368303e8d332"],["tags/net-optimize/index.html","0a28897416e5d6241eb2d6b57ef41333"],["tags/net-speeder/index.html","25628fc55770e575e7ebf16c03946f7e"],["tags/programming-tools/index.html","84f94fcb20a5800aa78df8181ba081cf"],["tags/serverspeeder/index.html","b9f3d0147f9119e951b5e11063b0d46a"],["tags/shadowsocks-R/index.html","9abc7be871b549b29f1d31c4dafaf441"],["tags/test/index.html","10b6f2a41a10cbdd1117f2a909f0b7be"],["tags/vscode/index.html","3b8b2a40d69fcca8f0f005df985171f7"],["tags/翻墙/index.html","b752ef7ae02528980e99229fbe097d28"],["tags/计算机协会/index.html","5d0189d964906a4ce6d794575abf4111"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');


var ignoreUrlParametersMatching = [/^utm_/];



var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
      url.pathname += index;
    }
    return url.toString();
  };

var cleanResponse = function (originalResponse) {
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

var createCacheKey = function (originalUrl, paramName, paramValue,
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

var isPathWhitelisted = function (whitelist, absoluteUrlString) {
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

var stripIgnoredUrlParameters = function (originalUrl,
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







