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

var precacheConfig = [["2018/06/06/hello-hexo/index.html","2508b58aaeb451bb7c8e035f9a70ac6f"],["2018/06/06/test/index.html","5f2b13026aeb3f721d9afc929dd9ea92"],["2018/06/07/config-of-vscode-for-c-cpp-on-macos/index.html","414a12a9e215e751e3661bda84c67cac"],["2018/06/08/VPS-panel-VPSMate/index.html","6d62f1cf6e5e4d503bdeeeb6ee939a9b"],["2018/06/08/VPS-panel-bt/index.html","d081c636e7eef53ae9691c62f00d3f2f"],["2018/06/08/build-shadowsocks-r-like-a-stable-dog/index.html","d71a01851c1a0e8284aefec4493aae7b"],["2018/06/08/net-optimize-for-VPS-net-speeder/index.html","fbc403e0a3454877bdaceb4506e83a18"],["2018/06/08/recommend-VPS-recently/index.html","108fa10c468099147f2e7ea61ca9671c"],["2018/06/08/settings-for-a-new-or-minimal-centos/index.html","aa1355b781f4523afb519796b14a97cb"],["2018/06/09/net-optimize-for-VPS-serverspeeder/index.html","55696aa5e8f7aa339ee8447f7d0aa5e5"],["2018/06/13/javaprogramlanguage-personal-encountered-javautilnosuchelementexception-anomalies-and-problems-and-solutions/index.html","7baf2d5d00581cf2d1697f7dc88f405f"],["2018/06/19/digitalocean-centos6-enable-bbr-to-upspeed/index.html","14f95ae3af260d7594006a932a7b7ca2"],["2018/06/19/sshWarning-solution/index.html","811ee7f8d0f3276a56d97537f5185b44"],["about-me/index.html","0ece041c54b0287f3bc1ef73a7365807"],["archives/2018/06/index.html","b3151d8ae7dc881ef6ae59cb58978572"],["archives/2018/06/page/2/index.html","19e97b07ce9d63d3ccb9c0ab2a223ce4"],["archives/2018/index.html","8c09c1c5c83cc5164b091aebe23a6c73"],["archives/2018/page/2/index.html","bae79f97bde144ae42d8e38ed9df9da4"],["archives/index.html","b489c4b2b1dd23a82e4c7dd47239101b"],["archives/page/2/index.html","67dba30303c50980dabd45fa574401c0"],["assets/algolia/algoliasearch.js","d2d43273523febe70b3fbe4c7fb050bd"],["assets/algolia/algoliasearch.min.js","d5ac7c786438492c5b4e9a9f8fc411ba"],["assets/algolia/algoliasearchLite.js","81dab03a4f3d2e08cb6ebccca9f81a09"],["assets/algolia/algoliasearchLite.min.js","01e86fe9a14b3d8270ca1867bacc7066"],["categories/Linux-learning/index.html","8e93d95344c974f4f89021143aa79abb"],["categories/geek-s-work/index.html","cc27910366b9fcb3863cbf53b1c6aa9f"],["categories/geek-s-work/play-with-VPS/index.html","0fb4fffc43e6bd364980ef43f7eec7f6"],["categories/index.html","954f75dd78a7e6fb78aaf653a7a65362"],["categories/programer-walk/JAVA-programming-language/index.html","ef5c1250cc75ac9e28a61cde047ee9ba"],["categories/programer-walk/index.html","f0db7839f3320a592ee4dfbc8beb77f1"],["categories/programer-walk/programming-tools/index.html","20867a36b36e18eba16d79f069f2337e"],["categories/test/index.html","af2f9e9232f441c2d569b4f7a5cd9ae2"],["css/index.css","edb50afbb3856f9df25c1ae34d83ed98"],["css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["gallery/index.html","9f7a73c212f5aff5a10b47d56be419de"],["img/Anonymous_masks_hackers_v_for_vendetta_black_background_3840x2400.jpg","ce571a3428d1522fd31f82492c945ab3"],["img/BBRscript.png","9ebb84292ad0257c2e2f10ccc8210857"],["img/DOticket.jpg","a0f155fb0316c82e30d8c30527380be2"],["img/ELECTRONICS_machine_technology_circuit_electronic_computer_technics_detail_psychedelic_abstract_pattern_5472x3648.jpg","68cfae3ed50fff3db3d710003ecc631f"],["img/Gears_mechanical_technics_metal_steel_abstract_abstraction_steampunk_mechanism_machine_Engineering_gear_1920x1080.jpg","c397ba08a4d48f0d431a63b15f5c15fb"],["img/HACKER_hack_hacking_internet_computer_anarchy_poster_1920x1083.jpg","b68a0e40bb43ba7fcab9bc33ecb9f348"],["img/Hacker_hacking_hack_anarchy_virus_internet_computer_sadic_Anonymous_dark_1920x1080.jpg","db0a7fe1fe9ebe8fa1208d4894e0348c"],["img/KVM-OVZ-XEN.png","022b91d2147df73b9045a10f5ed9d179"],["img/MacBook_keyboard_2560x1600.jpg","a7dbe22103bbca4ac4a62bb4ef63f17e"],["img/Minimalistic_apple_inc_2560x1600.jpg","79da60f54c9b965f6946019745a7ef44"],["img/QQ20180610-2032072x.png","02ffc9ce3850ee27732ff178324d48e6"],["img/Winter_Mountain_3840x2160.jpg","a8789af4556247c0a021413164200016"],["img/after_BBR.png","06f69fc3cbf721e932a3aa7c8ebe76cf"],["img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["img/avatar.png","6cc4a809d23e3d8946a299ae4ce4e4cd"],["img/before_BBR.png","c1399865981bbc7d7547c43699657341"],["img/computer_engineering_science_tech_1920x1080.jpg","9750a9696cb2fe206bfa85c164b37f21"],["img/computers_electronics_macro_chips_integrated_circuit_heatsinks_processor_1920x1080.jpg","ff368e75aa91ea6bc7c033e714b55031"],["img/cubecloud.png","b5d83eeded92e8a495be6199d859b230"],["img/topimg.jpg","9910536312243fefc306013138ddacc2"],["index.html","2f10e4b53eda05b90626d4d4455da8c4"],["js/copy.js","f4607057c0513bd07a69fcac08121979"],["js/fancybox.js","cdef3c681834a3e5ee4de9a7ed2e0fb0"],["js/fireworks.js","c186e041cb64c2e7efd345b7838f6ad7"],["js/head.js","72dbb78b4e9c4cdf14fd4b8c9bd9828c"],["js/hexo-theme-melody.js","d41d8cd98f00b204e9800998ecf8427e"],["js/scroll.js","c1789d3ce75d3ff59ea20a6b435c2fcf"],["js/search/algolia.js","dedc6e24c8d82429d5d498cc5a47ab07"],["js/search/local-search.js","bac0e1eda3d01fe70e4f7b887390ad97"],["js/sidebar.js","d24db780974e661198eeb2e45f20a28f"],["js/third-party/anime.min.js","9b4bbe6deb700e1c3606eab732f5eea5"],["js/third-party/jquery.fancybox.min.js","3c9fa1c1199cd4f874d855ecb1641335"],["js/third-party/jquery.min.js","c9f5aeeca3ad37bf2aa006139b935f0a"],["js/third-party/reveal/head.min.js","aad121203010122e05f1766d92385214"],["js/third-party/reveal/highlight.min.js","44594243bec43813a16371af8fe7e105"],["js/third-party/reveal/markdown.min.js","7ec4cef5a7fe3f0bf0eb4dc6d7bca114"],["js/third-party/reveal/marked.min.js","c2a88705e206d71dc21fdc4445349127"],["js/third-party/reveal/math.min.js","0a278fee2e57c530ab07f7d2d9ea8d96"],["js/third-party/reveal/notes.min.js","89a0dfae4d706f9c75b317f686c3aa14"],["js/third-party/reveal/reveal.min.js","8988419d67efb5fe93e291a357e26ec9"],["js/third-party/reveal/zoom.min.js","9791f96e63e7d534cba2b67d4bda0419"],["js/third-party/velocity.min.js","64da069aba987ea0512cf610600a56d1"],["js/third-party/velocity.ui.min.js","c8ca438424a080620f7b2f4ee4b0fff1"],["js/transition.js","bd261a5dda799613501070ecc19d6e69"],["js/utils.js","3ff3423d966a1c351e9867813b3f6d36"],["page/2/index.html","01c22ba6a5446a2dc344c548ec2e1c41"],["tags/BBR/index.html","c8f0a41fa00bb52534b88dcf8c33b96b"],["tags/CentOS/index.html","db141be7f4221872a172c5d5b3af9d5b"],["tags/DigitalOcean/index.html","55000f55b0747685c0823107b64763a2"],["tags/JAVA/index.html","60eaa9e14b6735ab75c7471409dbe627"],["tags/Linux/index.html","c8ec4057481315af29da25bbe1007214"],["tags/Programming-language/index.html","1b930810da1ee410798e40136dc6cf67"],["tags/VPS-panel/index.html","dbd6dd5d2eccf46c9a1b413290dc2b83"],["tags/VPS/index.html","a21a0c46d91068a8dd967bf7719a2336"],["tags/index.html","28c3a0b20af7d87efe3d6842671b61df"],["tags/net-optimize/index.html","61bf351c68d74de02274f92fe34ba786"],["tags/net-speeder/index.html","6aed22529891ddf99fcd51ff62df4bf1"],["tags/programming-tools/index.html","e43736f53d7137f27758de3f7a5e798a"],["tags/serverspeeder/index.html","8ad9d6d134db9ee4683b0c77734fd5b3"],["tags/shadowsocks-R/index.html","6823095f8ea2fc1fe042e83b834d1e03"],["tags/test/index.html","64df7426e7d772bc12971cbedf395404"],["tags/vscode/index.html","00dac2a89bd72be38f593a11edb8f7e0"],["tags/翻墙/index.html","09918ec413eceeaab2346aeac25d41b0"]];
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







