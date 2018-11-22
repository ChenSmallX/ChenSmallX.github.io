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

var precacheConfig = [["2018/06/06/hello-hexo/index.html","cfa535a0022166a3eeeb9c49c741176e"],["2018/06/06/test/index.html","eaca9baa7717a60ae22895cc52ac1d13"],["2018/06/07/config-of-vscode-for-c-cpp-on-macos/index.html","0db897ec415ff9c1caec6451ecacbe2e"],["2018/06/08/VPS-panel-VPSMate/index.html","5d9ef02d182f42d31f1f35ae636099f6"],["2018/06/08/VPS-panel-bt/index.html","2f9561477e595a6f871e9629a42075cf"],["2018/06/08/build-shadowsocks-r-like-a-stable-dog/index.html","24fd7878497ae5962aefa7523ea3d1bd"],["2018/06/08/net-optimize-for-VPS-net-speeder/index.html","fb5ae86c3f46791a7f9ea01dc5da7ebf"],["2018/06/08/recommend-VPS-recently/index.html","93aac884d4a52608a2e89680b116df33"],["2018/06/08/settings-for-a-new-or-minimal-centos/index.html","fe73703b9dcbb5dea5ca282a499da21f"],["2018/06/09/net-optimize-for-VPS-serverspeeder/index.html","881ee704d66de99757e5dd6b36e20089"],["2018/06/13/javaprogramlanguage-personal-encountered-javautilnosuchelementexception-anomalies-and-problems-and-solutions/index.html","fcfbfe0dfc746a2f1fdc284a7c2bdbee"],["2018/06/19/digitalocean-centos6-enable-bbr-to-upspeed/index.html","f486794a36f8009f83cd430e9eb65957"],["2018/06/19/sshWarning-solution/index.html","de317dda853e8bf9b9aededa08ad21d2"],["2018/07/03/hacknet-again/index.html","03990bef285f1a6b2fffe6f2ed07662b"],["2018/07/03/python-learning-list/index.html","b6727ae4c2a2876ff7d03e3637cd2052"],["2018/07/11/vim-caught-deadly-signal-segv/index.html","e58eba89577afabda69164aad33d0c73"],["2018/07/13/computerInstitution-summerassignment-2018/index.html","c48036b3d83b548726bf720fa68f31ee"],["2018/11/20/post-everyday-2018-11-20/index.html","274134c9d7e006be1a7590639aeb82d0"],["2018/11/21/post-everyday-2018-11-21/index.html","9e72dc11c7e1715742b72a07f7a09b4e"],["2018/11/22/VMWare-Fusion-recycle-storage/index.html","791adc7c7a1da608aa719eb1eb68b8a5"],["2018/11/22/post-everyday-2018-11-22/index.html","ca09d54322049b9540e34149bf67158f"],["about-me/index.html","027d082d278935b92760cf2d82eaea1a"],["archives/2018/06/index.html","9a66bb7e958e461d71da5a319e7115d7"],["archives/2018/06/page/2/index.html","c5d822a8e56c33bc4f962613b22b5164"],["archives/2018/07/index.html","b8ff6ceb56e5dde7466b8f28422ab324"],["archives/2018/11/index.html","0c89aacbf8a4537191714ac5822fdb7c"],["archives/2018/index.html","3e43e48c3c2ff22f886817372dead549"],["archives/2018/page/2/index.html","7c0ba016d8f93f10fdeccb8c9f3ed968"],["archives/2018/page/3/index.html","ff094777435de678b50ec664cf8c9081"],["archives/index.html","660586e5e5523db57c2c54ea97ed3b33"],["archives/page/2/index.html","f6bff00ae032bfccc91dd2cae504b13d"],["archives/page/3/index.html","2ae114a4065006547504744ca91e51a0"],["assets/algolia/algoliasearch.js","d2d43273523febe70b3fbe4c7fb050bd"],["assets/algolia/algoliasearch.min.js","d5ac7c786438492c5b4e9a9f8fc411ba"],["assets/algolia/algoliasearchLite.js","81dab03a4f3d2e08cb6ebccca9f81a09"],["assets/algolia/algoliasearchLite.min.js","01e86fe9a14b3d8270ca1867bacc7066"],["categories/Linux-learning/index.html","456ffd2036dc81fd0183eadedeeaf8c4"],["categories/Linux/Ubuntu/index.html","fe10a7b63995937240c2ea81ec463763"],["categories/Linux/index.html","4705b3d5116cfd4a703cf526b002a31b"],["categories/VMWare-Fusion/index.html","770bbb4e1462d1fefd83d573281a61a9"],["categories/game/index.html","6dd00e5eda35aa50ddbd2843421bc115"],["categories/geek-s-work/index.html","82037e9c2ff20ce33909367147b08839"],["categories/geek-s-work/page/2/index.html","fe0b7b3cf16877864578e6072e3c0cb6"],["categories/geek-s-work/play-with-VPS/index.html","53583f9a89607374016ebc35f61cc189"],["categories/index.html","9e9958764a15668ac18bead790da20fd"],["categories/programer-walk/JAVA/index.html","20bbc03a9b65c735224eb89348259dec"],["categories/programer-walk/Python-3/index.html","02a5e540e27bc7119f3000a3ad9d8ead"],["categories/programer-walk/index.html","21723e6f5f0b4b9c3cca979822622480"],["categories/programer-walk/programming-tools/index.html","5b1ffa6b2edf0d943076960fa049f03e"],["categories/test/index.html","5c7f937475ccdfe634a29f54b7cf6bc1"],["categories/每日一记/index.html","f3b1c0577951fc2003695dfa4e26e15e"],["categories/计算机协会/index.html","2f9c5ccbc8c88f7e4e1df813e7b666d0"],["css/index.css","edb50afbb3856f9df25c1ae34d83ed98"],["css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["gallery/index.html","7cd46f718a1225e9f6d2266e108126ea"],["img/Anonymous_masks_hackers_v_for_vendetta_black_background_3840x2400.jpg","ce571a3428d1522fd31f82492c945ab3"],["img/BBRscript.png","9ebb84292ad0257c2e2f10ccc8210857"],["img/DOticket.jpg","a0f155fb0316c82e30d8c30527380be2"],["img/ELECTRONICS_machine_technology_circuit_electronic_computer_technics_detail_psychedelic_abstract_pattern_5472x3648.jpg","68cfae3ed50fff3db3d710003ecc631f"],["img/Gears_mechanical_technics_metal_steel_abstract_abstraction_steampunk_mechanism_machine_Engineering_gear_1920x1080.jpg","c397ba08a4d48f0d431a63b15f5c15fb"],["img/HACKER_hack_hacking_internet_computer_anarchy_poster_1920x1083.jpg","b68a0e40bb43ba7fcab9bc33ecb9f348"],["img/Hacker_hacking_hack_anarchy_virus_internet_computer_sadic_Anonymous_dark_1920x1080.jpg","db0a7fe1fe9ebe8fa1208d4894e0348c"],["img/KVM-OVZ-XEN.png","022b91d2147df73b9045a10f5ed9d179"],["img/MacBook_keyboard_2560x1600.jpg","a7dbe22103bbca4ac4a62bb4ef63f17e"],["img/Minimalistic_apple_inc_2560x1600.jpg","79da60f54c9b965f6946019745a7ef44"],["img/QQ20180610-2032072x.png","02ffc9ce3850ee27732ff178324d48e6"],["img/Winter_Mountain_3840x2160.jpg","a8789af4556247c0a021413164200016"],["img/after_BBR.png","06f69fc3cbf721e932a3aa7c8ebe76cf"],["img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["img/avatar.png","6cc4a809d23e3d8946a299ae4ce4e4cd"],["img/before_BBR.png","c1399865981bbc7d7547c43699657341"],["img/computer_engineering_science_tech_1920x1080.jpg","9750a9696cb2fe206bfa85c164b37f21"],["img/computers_electronics_macro_chips_integrated_circuit_heatsinks_processor_1920x1080.jpg","ff368e75aa91ea6bc7c033e714b55031"],["img/cubecloud.png","b5d83eeded92e8a495be6199d859b230"],["img/datagrip.png","d3b75b7a48a2c2653631447159de4e21"],["img/goodSQL-DG.png","e21b1c961365b4fd252676e7662e5b97"],["img/goodSQL-G.png","25abaa2aa16ec7806e47eb7cc6990f6c"],["img/topimg.jpg","9910536312243fefc306013138ddacc2"],["img/vm-recycal.png","006b9fe2147ebc9874c7a2e66deb71ec"],["img/wrongSQL.png","f54dfce3f9f991f641403a9d8be6a8dc"],["index.html","3e8295884c59f3505bf171c01d1d9b49"],["js/copy.js","f4607057c0513bd07a69fcac08121979"],["js/fancybox.js","cdef3c681834a3e5ee4de9a7ed2e0fb0"],["js/fireworks.js","c186e041cb64c2e7efd345b7838f6ad7"],["js/head.js","72dbb78b4e9c4cdf14fd4b8c9bd9828c"],["js/hexo-theme-melody.js","d41d8cd98f00b204e9800998ecf8427e"],["js/scroll.js","c1789d3ce75d3ff59ea20a6b435c2fcf"],["js/search/algolia.js","dedc6e24c8d82429d5d498cc5a47ab07"],["js/search/local-search.js","bac0e1eda3d01fe70e4f7b887390ad97"],["js/sidebar.js","d24db780974e661198eeb2e45f20a28f"],["js/third-party/anime.min.js","9b4bbe6deb700e1c3606eab732f5eea5"],["js/third-party/jquery.fancybox.min.js","3c9fa1c1199cd4f874d855ecb1641335"],["js/third-party/jquery.min.js","c9f5aeeca3ad37bf2aa006139b935f0a"],["js/third-party/reveal/head.min.js","aad121203010122e05f1766d92385214"],["js/third-party/reveal/highlight.min.js","44594243bec43813a16371af8fe7e105"],["js/third-party/reveal/markdown.min.js","7ec4cef5a7fe3f0bf0eb4dc6d7bca114"],["js/third-party/reveal/marked.min.js","c2a88705e206d71dc21fdc4445349127"],["js/third-party/reveal/math.min.js","0a278fee2e57c530ab07f7d2d9ea8d96"],["js/third-party/reveal/notes.min.js","89a0dfae4d706f9c75b317f686c3aa14"],["js/third-party/reveal/reveal.min.js","8988419d67efb5fe93e291a357e26ec9"],["js/third-party/reveal/zoom.min.js","9791f96e63e7d534cba2b67d4bda0419"],["js/third-party/velocity.min.js","64da069aba987ea0512cf610600a56d1"],["js/third-party/velocity.ui.min.js","c8ca438424a080620f7b2f4ee4b0fff1"],["js/transition.js","bd261a5dda799613501070ecc19d6e69"],["js/utils.js","3ff3423d966a1c351e9867813b3f6d36"],["page/2/index.html","e0d0ac2ce9004e3b6aae661a78d6bb36"],["page/3/index.html","8e8afc103bc33153d62da8add66f42e5"],["tags/BBR/index.html","1d2c50568d8945c59a0a26e29e908e65"],["tags/CentOS/index.html","3f8ee54c43160f9ccb33ce6b817aa18e"],["tags/DigitalOcean/index.html","234340cbc84053a6c61a23f777c68e9f"],["tags/Hacknet/index.html","ad1823595961c47c766cb8289da22dd8"],["tags/JAVA/index.html","64ba0348daa3ce1e03a3b8cef5aa8e87"],["tags/Linux/index.html","c3d73e0386b84d902d0b3154ec62b37b"],["tags/MacOSX/index.html","f747033321ec6e01dca52d60b0457995"],["tags/Programming-language/index.html","d2e93b0fa94a866f5aef16ac7c388af9"],["tags/Python-3/index.html","b9853e4e15640f6419c8da88dfcfe00d"],["tags/Ubuntu/index.html","762b8b18b74c701d5a784ead401b26fe"],["tags/Unix/index.html","d907f1fd5c5a13f3bef95dd35ff33176"],["tags/VMWare-Fusion/index.html","834fbe55b5db3f5b293af98cfb6e583c"],["tags/VPS-panel/index.html","6dca37a932bd6ea77f3102bbb7d1b6ba"],["tags/VPS/index.html","e943208284aa8b89a019ce51922be399"],["tags/Vim-GVim/index.html","c09710859db10563251a2b9726e1392b"],["tags/bash/index.html","c309cbde351890d2ff73ba3cf949f301"],["tags/games/index.html","8ff60f83421612407c05e41ef0a75064"],["tags/hacker-game/index.html","4923dd033e5918efc16643b8b9c9d401"],["tags/index.html","fa86a09d4337f8e11723c3168d269931"],["tags/net-optimize/index.html","825e5c8ff84e284c860c848e30efd0a7"],["tags/net-speeder/index.html","7dfab0cf90626038c3cb79a8110ead72"],["tags/programming-tools/index.html","489413ab73278f96cd28731128c1fef7"],["tags/serverspeeder/index.html","53d064decad27e6b0c477268169c8784"],["tags/shadowsocks-R/index.html","4b0c5a61c44f4889736bd227f6854bbf"],["tags/test/index.html","ab8d30d5784354ff6871f86f9aaf9f91"],["tags/vscode/index.html","8ddead90cdf3dff34a0afa4575908267"],["tags/每日一记/index.html","59da593ee3ba029eecf7da3dcc088393"],["tags/翻墙/index.html","e974e86caf12b59bf2b4898f5cb17d97"],["tags/计算机协会/index.html","fc80ebc0028e3b61d1a00b9851fe50aa"]];
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







