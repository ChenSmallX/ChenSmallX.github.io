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

var precacheConfig = [["2018/06/06/hello-hexo/index.html","766ce1e2fe6f9f7ae21477bf24ac3bb7"],["2018/06/06/test/index.html","0efc4451a7bfd9997c40e5054abb570d"],["2018/06/07/config-of-vscode-for-c-cpp-on-macos/index.html","834cfdd68cbca24132d09cc567148234"],["2018/06/08/VPS-panel-VPSMate/index.html","cd2d846e04172afb896878f49251a019"],["2018/06/08/VPS-panel-bt/index.html","45d0b927ae322a13ecadd700501471b1"],["2018/06/08/build-shadowsocks-r-like-a-stable-dog/index.html","ac6236f345a00ca69e1c755800ac36ae"],["2018/06/08/net-optimize-for-VPS-net-speeder/index.html","e774425a974bb9786b42bb1f7957a8ca"],["2018/06/08/recommend-VPS-recently/index.html","698ddc22de45c65f09cb100da605de2b"],["2018/06/08/settings-for-a-new-or-minimal-centos/index.html","875e63e1ef8f4025db1297e48923a5f8"],["2018/06/09/net-optimize-for-VPS-serverspeeder/index.html","5ea863bb649e7484359e91181177b72e"],["2018/06/13/javaprogramlanguage-personal-encountered-javautilnosuchelementexception-anomalies-and-problems-and-solutions/index.html","67bb135051c6124b9ce28e1a0801266e"],["2018/06/19/digitalocean-centos6-enable-bbr-to-upspeed/index.html","6e1a30b61545a20cbd4edf09785bdfb9"],["2018/06/19/sshWarning-solution/index.html","0765b2926d5da94d3e837bff8f504e1f"],["2018/07/03/hacknet-again/index.html","3c348bfcb34d17be809b1c5abd5014b0"],["2018/07/03/python-learning-list/index.html","f674aef0605e31ee98f450324c9b863b"],["2018/07/11/vim-caught-deadly-signal-segv/index.html","6d6b4858069148a1664329b5f21df876"],["2018/07/13/computerInstitution-summerassignment-2018/index.html","44ce120f14c571d87c67ca75062eb39f"],["2018/11/20/post-everyday-2018-11-20/index.html","135d0497f71d4c09197df8305a5bbc03"],["2018/11/21/post-everyday-2018-11-21/index.html","f1a20541ee0e505208d7131fec61f202"],["2018/11/22/VMWare-Fusion-recycle-storage/index.html","bd8f38345c293de73d238aff384c92a8"],["about-me/index.html","d920ff6923bb78f7731e28c81dad24d0"],["archives/2018/06/index.html","7f6905866a2712d25a4524996e746244"],["archives/2018/06/page/2/index.html","1f3a47fd7005f1fc843fc66da60178ef"],["archives/2018/07/index.html","10a628bad739cd2f3c76217d0de838a6"],["archives/2018/11/index.html","a75f604b3161784aa5ce4117deb27fce"],["archives/2018/index.html","dbd50dde8f75ff2a81e2de1eac72b6c1"],["archives/2018/page/2/index.html","e5f3cfb552043b3a338ae8b5e35c63c9"],["archives/index.html","7758cb6804a5a0705dd39c2d03df592f"],["archives/page/2/index.html","d518928db84f2092195617a58990630a"],["assets/algolia/algoliasearch.js","d2d43273523febe70b3fbe4c7fb050bd"],["assets/algolia/algoliasearch.min.js","d5ac7c786438492c5b4e9a9f8fc411ba"],["assets/algolia/algoliasearchLite.js","81dab03a4f3d2e08cb6ebccca9f81a09"],["assets/algolia/algoliasearchLite.min.js","01e86fe9a14b3d8270ca1867bacc7066"],["categories/Linux-learning/index.html","0e76c04f9a6d570bcd42efa175874cec"],["categories/game/index.html","ff7487d965e48a7458062da16f9a20c5"],["categories/geek-s-work/index.html","d722588f6d0c281e648e7df0e270d4ba"],["categories/geek-s-work/page/2/index.html","3b29df76b423584bfaebef9b4cc4840f"],["categories/geek-s-work/play-with-VPS/index.html","45e0e8603dfd5644577692e59a95d223"],["categories/index.html","ccd7b4c3c2f5a6e97fab91782069fd13"],["categories/programer-walk/JAVA/index.html","4fd43872d16f72f21505d443eeb251e5"],["categories/programer-walk/Python-3/index.html","559a4d6dd731c8c152e751ef8b58b10a"],["categories/programer-walk/index.html","c6c48bd93c8576f2d05f09075e8b0dfa"],["categories/programer-walk/programming-tools/index.html","dd84eeb98533924d1912565475369851"],["categories/test/index.html","1deb1bb28d8d5ec8de22dc348c69cca8"],["categories/每日一记/index.html","bb096d32e6d69c285eb162721b6d7728"],["categories/计算机协会/index.html","beb32748dbb238e4e56cb08acbdbc2c2"],["css/index.css","edb50afbb3856f9df25c1ae34d83ed98"],["css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["gallery/index.html","ba945c19c7879fbbab2434c7c91ff986"],["img/Anonymous_masks_hackers_v_for_vendetta_black_background_3840x2400.jpg","ce571a3428d1522fd31f82492c945ab3"],["img/BBRscript.png","9ebb84292ad0257c2e2f10ccc8210857"],["img/DOticket.jpg","a0f155fb0316c82e30d8c30527380be2"],["img/ELECTRONICS_machine_technology_circuit_electronic_computer_technics_detail_psychedelic_abstract_pattern_5472x3648.jpg","68cfae3ed50fff3db3d710003ecc631f"],["img/Gears_mechanical_technics_metal_steel_abstract_abstraction_steampunk_mechanism_machine_Engineering_gear_1920x1080.jpg","c397ba08a4d48f0d431a63b15f5c15fb"],["img/HACKER_hack_hacking_internet_computer_anarchy_poster_1920x1083.jpg","b68a0e40bb43ba7fcab9bc33ecb9f348"],["img/Hacker_hacking_hack_anarchy_virus_internet_computer_sadic_Anonymous_dark_1920x1080.jpg","db0a7fe1fe9ebe8fa1208d4894e0348c"],["img/KVM-OVZ-XEN.png","022b91d2147df73b9045a10f5ed9d179"],["img/MacBook_keyboard_2560x1600.jpg","a7dbe22103bbca4ac4a62bb4ef63f17e"],["img/Minimalistic_apple_inc_2560x1600.jpg","79da60f54c9b965f6946019745a7ef44"],["img/QQ20180610-2032072x.png","02ffc9ce3850ee27732ff178324d48e6"],["img/Winter_Mountain_3840x2160.jpg","a8789af4556247c0a021413164200016"],["img/after_BBR.png","06f69fc3cbf721e932a3aa7c8ebe76cf"],["img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["img/avatar.png","6cc4a809d23e3d8946a299ae4ce4e4cd"],["img/before_BBR.png","c1399865981bbc7d7547c43699657341"],["img/computer_engineering_science_tech_1920x1080.jpg","9750a9696cb2fe206bfa85c164b37f21"],["img/computers_electronics_macro_chips_integrated_circuit_heatsinks_processor_1920x1080.jpg","ff368e75aa91ea6bc7c033e714b55031"],["img/cubecloud.png","b5d83eeded92e8a495be6199d859b230"],["img/datagrip.png","d3b75b7a48a2c2653631447159de4e21"],["img/goodSQL-DG.png","e21b1c961365b4fd252676e7662e5b97"],["img/goodSQL-G.png","25abaa2aa16ec7806e47eb7cc6990f6c"],["img/topimg.jpg","9910536312243fefc306013138ddacc2"],["img/vm-recycal.png","006b9fe2147ebc9874c7a2e66deb71ec"],["img/wrongSQL.png","f54dfce3f9f991f641403a9d8be6a8dc"],["index.html","d439b1e789bdab67f3fc541a46398cb3"],["js/copy.js","f4607057c0513bd07a69fcac08121979"],["js/fancybox.js","cdef3c681834a3e5ee4de9a7ed2e0fb0"],["js/fireworks.js","c186e041cb64c2e7efd345b7838f6ad7"],["js/head.js","72dbb78b4e9c4cdf14fd4b8c9bd9828c"],["js/hexo-theme-melody.js","d41d8cd98f00b204e9800998ecf8427e"],["js/scroll.js","c1789d3ce75d3ff59ea20a6b435c2fcf"],["js/search/algolia.js","dedc6e24c8d82429d5d498cc5a47ab07"],["js/search/local-search.js","bac0e1eda3d01fe70e4f7b887390ad97"],["js/sidebar.js","d24db780974e661198eeb2e45f20a28f"],["js/third-party/anime.min.js","9b4bbe6deb700e1c3606eab732f5eea5"],["js/third-party/jquery.fancybox.min.js","3c9fa1c1199cd4f874d855ecb1641335"],["js/third-party/jquery.min.js","c9f5aeeca3ad37bf2aa006139b935f0a"],["js/third-party/reveal/head.min.js","aad121203010122e05f1766d92385214"],["js/third-party/reveal/highlight.min.js","44594243bec43813a16371af8fe7e105"],["js/third-party/reveal/markdown.min.js","7ec4cef5a7fe3f0bf0eb4dc6d7bca114"],["js/third-party/reveal/marked.min.js","c2a88705e206d71dc21fdc4445349127"],["js/third-party/reveal/math.min.js","0a278fee2e57c530ab07f7d2d9ea8d96"],["js/third-party/reveal/notes.min.js","89a0dfae4d706f9c75b317f686c3aa14"],["js/third-party/reveal/reveal.min.js","8988419d67efb5fe93e291a357e26ec9"],["js/third-party/reveal/zoom.min.js","9791f96e63e7d534cba2b67d4bda0419"],["js/third-party/velocity.min.js","64da069aba987ea0512cf610600a56d1"],["js/third-party/velocity.ui.min.js","c8ca438424a080620f7b2f4ee4b0fff1"],["js/transition.js","bd261a5dda799613501070ecc19d6e69"],["js/utils.js","3ff3423d966a1c351e9867813b3f6d36"],["page/2/index.html","ed0e979bd8004b95d7ca6d6fd9ce937a"],["tags/BBR/index.html","b60d0c76e5964a6f890e22b882cd4445"],["tags/CentOS/index.html","4f75d67fd01934b688141bf6940cf6b6"],["tags/DigitalOcean/index.html","f7276057427f14b4f809ca90e1561be3"],["tags/Hacknet/index.html","9caf954b6b4933453e2904405c109625"],["tags/JAVA/index.html","55e0970a9356915667a420be669d79dc"],["tags/Linux/index.html","099fa7c4bd57def31a6bb4906953cff4"],["tags/Programming-language/index.html","988397ad0314c418629976a7513ef9c5"],["tags/Python-3/index.html","bf34bec285d3221bec996d2888b1204f"],["tags/Unix/index.html","6d6f859b0951da26aa40bca850057f1b"],["tags/VPS-panel/index.html","6b50eaccfe11fd520898296df53b442c"],["tags/VPS/index.html","dc372775c154678e901734a42104cc47"],["tags/Vim-GVim/index.html","e953df92b8be4f16d520995aadbe6f39"],["tags/bash/index.html","f5cb1828a6a376fcbe44df9e4d4f806c"],["tags/games/index.html","881d2f2b544a1319816be9f15ba7a978"],["tags/hacker-game/index.html","64e77dec058d0967a927cc8f78a19107"],["tags/index.html","9081fbb6140dedc4f6c391a66116f123"],["tags/net-optimize/index.html","84492f0c2a56f03ac019a0fe7c69d949"],["tags/net-speeder/index.html","476ee31c602c5a07eefa8714242399f6"],["tags/programming-tools/index.html","3d04560014eb78e89f7e6162a98bf3d9"],["tags/serverspeeder/index.html","0c695e1add66fb170e5d8d31b20af605"],["tags/shadowsocks-R/index.html","6e5a133d20cb989a59854b5860fa6f0b"],["tags/test/index.html","2e1eb01821f8e77c9c62e3dfcad6854c"],["tags/vscode/index.html","285c49343e2bd36a44a2e444a32ed08a"],["tags/每日一记/index.html","26dbe2f459e534f074c94180d894bf88"],["tags/翻墙/index.html","981751cd1ef535c59c2ce64db9ad0503"],["tags/计算机协会/index.html","33a85fc8411cfefc00510f69dca27fd5"]];
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







