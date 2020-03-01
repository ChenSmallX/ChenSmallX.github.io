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

var precacheConfig = [["/2018/06/06/hello-hexo/index.html","df1b2b55740ca812f013b92a06248d84"],["/2018/06/06/test/index.html","4b4bf80a710a83fcf993c393c8f19ed2"],["/2018/06/07/config-of-vscode-for-c-cpp-on-macos/index.html","fb4ca29ef42b11bf0cfe3d76c0b12a40"],["/2018/06/08/VPS-panel-VPSMate/index.html","3b0809cb5e03368af9858383ed72f9bf"],["/2018/06/08/VPS-panel-bt/index.html","3d2053e8a0ded20ebecba1b4fa79f061"],["/2018/06/08/build-shadowsocks-r-like-a-stable-dog/index.html","ae82c73cf503b212c99475673dde9e11"],["/2018/06/08/net-optimize-for-VPS-net-speeder/index.html","9fd9da3a17d5aee029b44a23e13035d4"],["/2018/06/08/recommend-VPS-recently/index.html","478d6130a5491231a1e44f4a28a7031f"],["/2018/06/08/settings-for-a-new-or-minimal-centos/index.html","f267659fc9d3786c1fb09027b90f1a67"],["/2018/06/09/net-optimize-for-VPS-serverspeeder/index.html","2e173e60e5328d5c92ac39e19d110d8c"],["/2018/06/13/javaprogramlanguage-personal-encountered-javautilnosuchelementexception-anomalies-and-problems-and-solutions/index.html","f371ad55bcd1273837b803c7306f66e1"],["/2018/06/19/digitalocean-centos6-enable-bbr-to-upspeed/index.html","12e614a596826ca47bda0e19410a217b"],["/2018/06/19/sshWarning-solution/index.html","aefdfe2d2afb6581fe795cff23ea9b58"],["/2018/07/03/hacknet-again/index.html","1ccd6617bae6d5322c0bb4860fb0631c"],["/2018/07/03/python-learning-list/index.html","56e6cded60631c0345fcf129d3649892"],["/2018/07/11/vim-caught-deadly-signal-segv/index.html","a5fb0ac02bc8d9cd871aedff49b64d33"],["/2018/07/13/computerInstitution-summerassignment-2018/index.html","de6e7c61b5f371579ffd76d2723ed41a"],["/2018/11/20/post-everyday-2018-11-20/index.html","3e8cfec31b626ffce140ac15aaae1f0f"],["/2018/11/21/post-everyday-2018-11-21/index.html","be1c604ed95bcfd4236bcafb29883cd9"],["/2018/11/22/VMWare-Fusion-recycle-storage/index.html","b28841f6447c919bb726e0d016d88c4d"],["/2018/11/22/post-everyday-2018-11-22/index.html","40646fff786d1fe7024e6c9d8c34dd46"],["/2018/11/23/MySQL-disorder-output-solution/index.html","c752c761f90d090c5dea2d154a06845b"],["/2018/11/23/post-everyday-2018-11-23/index.html","f8aa02317a2cf6592c4c5f721a75a328"],["/2018/11/24/post-everyday-2018-11-24/index.html","2e036a67559c988a806c15ed8267294d"],["/2018/11/26/post-everyday-2018-11-26/index.html","750e99d41acc3e343f40fe5d49ef7074"],["/2018/11/27/post-everyday-2018-11-27/index.html","1a13d47803ce879cca4eb8f8b5f2433b"],["/2018/12/04/post-everyday-2018-12-4/index.html","1025ac87db50ed978b9b249ce10f2d35"],["/2018/12/05/post-everyday-2018-12-5/index.html","db2ff65fb1937f8c2b9538ebf511e1f7"],["/2018/12/10/post-everyday-2018-12-10/index.html","ab56fe1e3244644a76641b1eb14e90cd"],["/2019/01/25/be-expert-skills-hardware/index.html","459d94c38d4804d2f7c8f953cca01472"],["/2019/01/25/be-expert-skills-system/index.html","2c21ef3febd2b1362f566f850688d29b"],["/2019/01/25/computerInstitution-winterassignment-2019/index.html","01e186847e30c4dc5550bb2c23f7e179"],["/2019/03/13/post-everyday-2019-3-13/index.html","e22b60a9f489b3470062604fe3c7bcf8"],["/2019/03/15/post-everyday-2019-3-15/index.html","da5049fc60aa934f0562742eea5ad658"],["/2019/03/18/post-everyday-2019-3-19/index.html","d797b5c7e3f6a976d4d29f9f9e6f649a"],["/2019/03/20/post-everyday-2019-3-20/index.html","6836a2d78a090e03b0376d5a250c82f8"],["/2019/03/25/post-everyday-2019-3-25/index.html","031daf511c8ce67a80dbc8f2e4d34e31"],["/2019/03/29/post-everyday-2019-3-29/index.html","9ff80b1d7005b961bf12c71d35c9d984"],["/2019/04/01/post-everyday-2019-4-1/index.html","4d77d26ae5a19bf2bd9a785040a132fc"],["/2019/04/01/synology-overview/index.html","bee629201e337ef9ddccfca6b81400d4"],["/2019/04/03/synology-something/index.html","b394986b77a08c091953f283dddc5d62"],["/2019/04/10/post-everyday-2019-4-10/index.html","0a6dd1e1adc995247b30277bbed0f3dd"],["/2019/04/16/post-everyday-2019-4-16/index.html","cdd63d3175fb9f6addf1e161a03cefc5"],["/2019/04/23/post-everyday-2019-4-23/index.html","7f25fceb65818c7af30a418a6c6438cb"],["/2019/07/24/leetcode-11-mostCapacity-boostOperation/index.html","dab9b71627c6959d48cf29dfca61a106"],["/2019/07/24/leetcode-8-atoi/index.html","2ca4b15f4fe83ce0681dc5cbdbd3367d"],["/2019/07/25/leetcode-14-longestCommonPrefix/index.html","6c8794510dac40a7ad1b87b78c9252c6"],["/2019/07/25/leetcode-15-threeSum/index.html","794fc566ee7356c959d4050a197ae44a"],["/2019/07/25/leetcode-2-addTwoNumbers/index.html","338276f23532b9a9c6178797a2208be9"],["/2019/07/29/leetcode-20-validBracket/index.html","a636d6d44b37646244218be8f68aa695"],["/2019/07/29/leetcode-21-mergeTwoLists/index.html","c6e12e518234fe7509452629dea67e7c"],["/2019/07/29/set-specific-language-MacOS-app/index.html","4c539b47f1ed10c0b891f6366ecda443"],["/2019/07/30/leetcode-23-mergeKLists/index.html","27809ed44522392e2b8a0c06c7ca3c36"],["/2019/08/01/leetcode-26-removeDuplicates/index.html","6f83985c19934530c3d47844a7e775e8"],["/2019/08/01/leetcode-33-search/index.html","480262bdbaf6adc304ade63d73a1fb94"],["/2019/08/07/vscode-debug-C-itermNternimal/index.html","4d8d9571f0ba2a349a14ffe55babd61e"],["/2019/08/21/leetcode-1114-Foo-Bar/index.html","ad4a0ad29f579ce2b4d044a15146489e"],["/2019/08/22/leetcode-46-permute/index.html","ddbf1f095de46ef4e51d2a8398600d57"],["/2019/09/05/leetcode-292-canWinNum/index.html","62d029678c3e1403cdd5a0b913b45167"],["/2019/09/06/leetcode-344-reverseString/index.html","0a7e9a1b8f9b548895fd709530507cf3"],["/2019/09/07/C-template-multi-files-compile/index.html","9ab41aae6f4561ff16aac3add97f4d61"],["/2019/09/07/leetcode-206-reverseList/index.html","21aba26fdd67d021eaa34e90292b55a4"],["/2019/09/07/leetcode-557-reverseWord/index.html","80ccff163b5a54c821c8999694f88931"],["/2019/10/25/solve-mac-mail-pop-up-bug/index.html","5386d4b85dad302366b6dc3b1d068b3c"],["/404.html","dfed275d0471411fd48ad45e7cc90fb3"],["/QQ20181123-094100@2x.png","902e3b5f44547e3f6266ae68943e8504"],["/about-me/index.html","b1a2d3a714f7551ca6ca6642bbff68dd"],["/archives/2018/06/index.html","1693efd7a30a89ba8fd4499f4e10065e"],["/archives/2018/06/page/2/index.html","828c9035f10eec2c1af98273f8a8cef0"],["/archives/2018/07/index.html","17c028d0df3e6ac619fb1a2f693dcdaa"],["/archives/2018/11/index.html","6a808e5bfd1256fb9669668a71a5ef80"],["/archives/2018/12/index.html","90bcf0d50c098a4d41090b39536c0571"],["/archives/2018/index.html","3be2a6b65a46fd2915c463cc4583783b"],["/archives/2018/page/2/index.html","49755f441c124d5a98f275b1916b3f22"],["/archives/2018/page/3/index.html","3801b748eb4f7257e77fbe246234da6c"],["/archives/2019/01/index.html","09b9be1a7c9cc864e1364bf2cc75aeb8"],["/archives/2019/03/index.html","2006efaf2088ef1fe7798ca97db6eac6"],["/archives/2019/04/index.html","9c8e0f1434b8f1fe0dd034910a70780e"],["/archives/2019/07/index.html","25ff429742e523e0c320f7aa407e3e3d"],["/archives/2019/08/index.html","56e929c6c6df16d221040cacf18f668d"],["/archives/2019/09/index.html","98ee9949c5c1d116fd9a488b01a80a96"],["/archives/2019/10/index.html","06c60498aa82704f85d1da94b0c9819f"],["/archives/2019/index.html","a6edf5b4726fc227efe7e8e10fb783b7"],["/archives/2019/page/2/index.html","abbc2f2fc22abd2daf5cef23a6b70577"],["/archives/2019/page/3/index.html","955ece0f2ccb44ca37de0a15cde98824"],["/archives/2019/page/4/index.html","d713619d81606b9174ee1e78d6990258"],["/archives/index.html","037f467e44a8af9760924567ab956ce9"],["/archives/page/2/index.html","b6e1cfdc2713842f8fb1f3c77ff19080"],["/archives/page/3/index.html","209683e78a650eaf53e48262d47ad072"],["/archives/page/4/index.html","165c916648e9620e0583cf2ac553633b"],["/archives/page/5/index.html","2be3e0e6ac5c9f88817f46aca1a43a8e"],["/archives/page/6/index.html","8ef39b60bcac5f85cc2b1b6619105274"],["/archives/page/7/index.html","84738c6ac8b80edfa68fb23da0448ee6"],["/assets/algolia/algoliasearch.js","d2d43273523febe70b3fbe4c7fb050bd"],["/assets/algolia/algoliasearch.min.js","d5ac7c786438492c5b4e9a9f8fc411ba"],["/assets/algolia/algoliasearchLite.js","81dab03a4f3d2e08cb6ebccca9f81a09"],["/assets/algolia/algoliasearchLite.min.js","01e86fe9a14b3d8270ca1867bacc7066"],["/atom.xml","5999da9d25fd2b5bca382a7a02ff0a8e"],["/baidusitemap.xml","18d36620ecfd880310941b7ff0881a9a"],["/categories/Game/index.html","29017ae2fd47301ff3cb00fd0db1569d"],["/categories/Geek-s-Work/MacOS/index.html","06f1f18edbe98d82a85f3864ffd2b311"],["/categories/Geek-s-Work/NAS/index.html","a9f01564f9318891a969cca548845b59"],["/categories/Geek-s-Work/Play-with-VPS/index.html","389756058ee8888d705e66fd259f9207"],["/categories/Geek-s-Work/VMWare-Fusion/index.html","0f0555cf738cbd88242035b12f0db72a"],["/categories/Geek-s-Work/index.html","cec728030e27571ce68a9f7a47db9825"],["/categories/Geek-s-Work/page/2/index.html","1bf61b41f48707ef4a24bda3c863f93f"],["/categories/HEXO/index.html","6c7ca97e3b6312a9a093064d0881c238"],["/categories/Linux-Learning/Ubuntu/index.html","264d289b302536892e6c82aedba49733"],["/categories/Linux-Learning/index.html","f842e7350efd31e932afef7894c5f66c"],["/categories/My-English-Learning/index.html","4cd498f328782ca04485c38f511c32c8"],["/categories/Programer-Walk/JAVA/index.html","d0fd3c2acf5dd214f7be1ce826121f58"],["/categories/Programer-Walk/JavaScript/index.html","c96dda0e7c3488ab75fa7b63e522938f"],["/categories/Programer-Walk/MySQL/index.html","94ad0b877840a06d8d9acdf209cbcbea"],["/categories/Programer-Walk/OJ/index.html","6b7ce3eb1def52dc340b667a047a38e2"],["/categories/Programer-Walk/OJ/page/2/index.html","90f0ca77a7cd89e21d355b231b6e351f"],["/categories/Programer-Walk/Programming-Tools/index.html","302cecd0357a53506f5b54e7f1c8a1f7"],["/categories/Programer-Walk/Python-3/index.html","afdd3e2c90af335b655ba8615a101d59"],["/categories/Programer-Walk/index.html","aa845bc39d10a88afb9fd4543760beaf"],["/categories/Programer-Walk/page/2/index.html","12f1097f7ee282d868d2226e525115f1"],["/categories/index.html","f5bcc0f0a8addccf1d1c016147b58e15"],["/categories/每日一记/index.html","2c8f46922fe95c80cc82c09b8b14e3cd"],["/categories/每日一记/page/2/index.html","4737fe2383778e4f2f510f3a38283486"],["/categories/计算机协会/index.html","bd6389552ef3f880b8e7d5ef08263fcd"],["/css/404.css","b1bb50e1fabe41adcec483f6427fb3aa"],["/css/index.css","04d1ac769b842c6e83e44f2a905336fa"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/gallery/index.html","137bf098638be437963a9e0ebf9df861"],["/img/Anonymous_masks_hackers_v_for_vendetta_black_background_3840x2400.jpg","ce571a3428d1522fd31f82492c945ab3"],["/img/BBRscript.png","9ebb84292ad0257c2e2f10ccc8210857"],["/img/Commands_Linux_Archlinux_Terminal_computer_system_programming_1920x1080.jpg","1d0f4dec977f2478992faade43b7b579"],["/img/Console_microsoft_windows_1920x1200.jpg","8cbb61d0b0036c6f8d17401d755cfd9f"],["/img/DOticket.jpg","a0f155fb0316c82e30d8c30527380be2"],["/img/ELECTRONICS_machine_technology_circuit_electronic_computer_technics_detail_psychedelic_abstract_pattern_5472x3648.jpg","68cfae3ed50fff3db3d710003ecc631f"],["/img/GAMING_game_video_computer_gamer_poster_2048x1152.jpg","590b2e95adb47e1d9c32b0ce53655d2f"],["/img/Gears_mechanical_technics_metal_steel_abstract_abstraction_steampunk_mechanism_machine_Engineering_gear_1920x1080.jpg","c397ba08a4d48f0d431a63b15f5c15fb"],["/img/Green_minimalistic_computers_evolution_flesh_disc_simple_2560x1600.jpg","c4b417a23c2c83768857d0d88543f53a"],["/img/HACKER_hack_hacking_internet_computer_anarchy_poster_1920x1083.jpg","b68a0e40bb43ba7fcab9bc33ecb9f348"],["/img/Hacker_hacking_hack_anarchy_virus_internet_computer_sadic_Anonymous_dark_1920x1080.jpg","db0a7fe1fe9ebe8fa1208d4894e0348c"],["/img/KVM-OVZ-XEN.png","022b91d2147df73b9045a10f5ed9d179"],["/img/MacBook_keyboard_2560x1600.jpg","a7dbe22103bbca4ac4a62bb4ef63f17e"],["/img/Minimalistic_apple_inc_2560x1600.jpg","79da60f54c9b965f6946019745a7ef44"],["/img/NAS/desktop.png","b553ddf3f3de0a6e4e14ba9beec14b04"],["/img/NAS/login.png","9d32855e18da11f360ad0204cc8ac91b"],["/img/NAS/storageManager.png","d5067be8d2771e1be4fb3639b244f0ce"],["/img/QQ20180610-2032072x.png","02ffc9ce3850ee27732ff178324d48e6"],["/img/RiME.jpg","ebaf7f4bea05e51d8b567c0497bf7aae"],["/img/Winter_Mountain_3840x2160.jpg","a8789af4556247c0a021413164200016"],["/img/after_BBR.png","06f69fc3cbf721e932a3aa7c8ebe76cf"],["/img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["/img/alipay.jpg","a5a1fdaa9b2dcbac19d7687b39f3c094"],["/img/avatar.png","6cc4a809d23e3d8946a299ae4ce4e4cd"],["/img/avator.jpg","4ec90e1270479f1f5549df4fc9e1b11a"],["/img/before_BBR.png","c1399865981bbc7d7547c43699657341"],["/img/code_background.png","498098fba4fcb1adf198ec0b4885999d"],["/img/computer_engineering_science_tech_1920x1080.jpg","9750a9696cb2fe206bfa85c164b37f21"],["/img/computers_electronics_macro_chips_integrated_circuit_heatsinks_processor_1920x1080.jpg","ff368e75aa91ea6bc7c033e714b55031"],["/img/cubecloud.png","b5d83eeded92e8a495be6199d859b230"],["/img/datagrip.png","d3b75b7a48a2c2653631447159de4e21"],["/img/gdb-code-sign-trust.png","5e1d9e829907538757db0e50022902e6"],["/img/gdb-code-sign.png","f8f12a3e9b73f0398d220cf0b52d3e7b"],["/img/goodSQL-DG.png","e21b1c961365b4fd252676e7662e5b97"],["/img/goodSQL-G.png","25abaa2aa16ec7806e47eb7cc6990f6c"],["/img/icon/AppIcon24x24@2x.png","e57974e7e9bcbfa7c781c4a6b68c329a"],["/img/icon/AppIcon27.5x27.5@2x.png","65aa90709838add203c669d2b4918947"],["/img/icon/AppIcon40x40@2x.png","315025af34fde3ed2f2307273bdc9819"],["/img/icon/AppIcon44x44@2x.png","6f7e6157e44b080ef932e058fd7a0d19"],["/img/icon/AppIcon86x86@2x.png","8b01f32921fac4c0153ada98b8dbbfa2"],["/img/icon/AppIcon98x98@2x.png","45bbd3fbe1e64a9e9bfb7ed4e268a587"],["/img/icon/GooglePlayStore.png","44c41f406e8eceed836bc86970248e80"],["/img/icon/Icon-60@2x.png","686d59262e614e4334152fd2a37edde8"],["/img/icon/Icon-60@3x.png","540b1eec63e3542dfd0a6b87eade86de"],["/img/icon/Icon-72.png","0cf96ad3f6ea7a11d1bedf23a1c97ff0"],["/img/icon/Icon-72@2x.png","cf171765d10bebd5de064fb0062beac5"],["/img/icon/Icon-76.png","87d7de28aae1891fc52d8aa8464e687c"],["/img/icon/Icon-76@2x.png","4f6de6c6057895e75b4ec474540ed63a"],["/img/icon/Icon-83.5@2x.png","4bdaf24ed1d0de820c15adaa38c5e5c3"],["/img/icon/Icon-Notification.png","37ecc35f7809d69b2146ccf1221b8c13"],["/img/icon/Icon-Notification@3x.png","db17d5c1e38b255984d953b441d0f05e"],["/img/icon/Icon-Small-40.png","c0f8a5fd80f7976ac430e33eae71387b"],["/img/icon/Icon-Small-40@2x.png","315025af34fde3ed2f2307273bdc9819"],["/img/icon/Icon-Small-50.png","c652fa24fbfee44babac5dc8e8cbde09"],["/img/icon/Icon-Small-50@2x.png","f92ee8a02961f8e65742df5534994eec"],["/img/icon/Icon-Small.png","792bec4998433d3c25b450b0c7df2e49"],["/img/icon/Icon-Small@2x.png","f20db6dd8ea3316ae4c2910343c83cb6"],["/img/icon/Icon-Small@3x.png","cc916e3dbc5b8d962de5b315093109c1"],["/img/icon/Icon.png","51e04138100e798dce0a2c7e3da2b769"],["/img/icon/Icon@2x.png","a104c87d1e0f9ca88ca7cc93b9ec1915"],["/img/icon/hdpi.png","0cf96ad3f6ea7a11d1bedf23a1c97ff0"],["/img/icon/iTunesArtwork.png","44c41f406e8eceed836bc86970248e80"],["/img/icon/iTunesArtwork@2x.png","fa97997acbb38995800d896032978aa5"],["/img/icon/ldpi.png","1014dd6fb967135fb27b9b3dadb564e8"],["/img/icon/mdpi.png","e57974e7e9bcbfa7c781c4a6b68c329a"],["/img/icon/xhdpi.png","442580ffe555286de676d42012f2de6d"],["/img/icon/xxhdpi.png","cf171765d10bebd5de064fb0062beac5"],["/img/icon/xxxhdpi.png","d4064f9e8ba8d5f00501f048188523bd"],["/img/keychain.png","d6e8ced48a44ce3d9a01cfdda1e4fa8e"],["/img/minimalistic_floppy_disks_compact_disc_disc_2560x1600.jpg","5c60da3376ee4a16404c0f72acb3beb8"],["/img/punch/20190313-listening.jpg","5ef5dee7162e714667d73ccfd41420e9"],["/img/punch/20190315-listening.jpg","9a53033e560930d17f149f5eacba67e5"],["/img/punch/20190319.jpg","cee12c362b1f0659990f4ea4be001dce"],["/img/punch/20190320-hs.jpg","faa1a013a510c0f6b78758811422c9b9"],["/img/punch/20190320.jpg","b16b7f2c413c3008e9a7d90f12b7e856"],["/img/punch/20190320_.jpg","f844503589939db75b2b518a9f7301fa"],["/img/punch/20190329.jpg","bd105efb5aca6e855f5ca6b229b998cf"],["/img/punch/20190401.jpg","2e5fa38ea1e9fde8fe4266aa869e3581"],["/img/punch/20190410.jpg","18312207baca3aec25cd4b2c99a162cf"],["/img/punch/20190423-s.jpg","f4c133c9b9606efac299ed9c2e982f43"],["/img/punch/20190423.jpg","61e875c006e966a6d3fde152c9b64c0d"],["/img/sql-null.png","f8a2143b9f8a4cea6fa5c81634e655ac"],["/img/system-privacy.png","70701871a71834c6c50b768da50bb571"],["/img/testH61.jpg","f7241e7628960136c46cea3029363eb9"],["/img/topimg.jpg","0f15f964c1d3914566d01270819c5686"],["/img/vm-recycal.png","006b9fe2147ebc9874c7a2e66deb71ec"],["/img/vscode-debug-c++.png","ee52f0e2da3a009a466834c140e75408"],["/img/wechat.jpg","f3ebdcc2d02a3b3027e71dcda179cd01"],["/img/wrongSQL.png","f54dfce3f9f991f641403a9d8be6a8dc"],["/img/地铁站.jpeg","8081fe4b11421172ec92f63fbed02921"],["/index.html","a62b8513f22821a4cc3142bf6844c0db"],["/js/copy.js","45aae54bf2e43ac27ecc41eb5e0bacf7"],["/js/fancybox.js","f84d626654b9bbc05720952b3effe062"],["/js/fireworks.js","35933ce61c158ef9c33b5e089fe757ac"],["/js/head.js","347edd99f8e3921b45fa617e839d8182"],["/js/hexo-theme-melody.js","d41d8cd98f00b204e9800998ecf8427e"],["/js/katex.js","d971ba8b8dee1120ef66744b89cfd2b1"],["/js/scroll.js","a12ad7e37b9e325f8da3d0523d3757c7"],["/js/search/algolia.js","53160985d32d6fd66d98aa0e05b081ac"],["/js/search/local-search.js","1565b508bd866ed6fbd724a3858af5d8"],["/js/sidebar.js","d24db780974e661198eeb2e45f20a28f"],["/js/third-party/anime.min.js","9b4bbe6deb700e1c3606eab732f5eea5"],["/js/third-party/canvas-ribbon.js","09c181544ddff1db701db02ac30453e0"],["/js/third-party/jquery.fancybox.min.js","3c9fa1c1199cd4f874d855ecb1641335"],["/js/third-party/jquery.min.js","c9f5aeeca3ad37bf2aa006139b935f0a"],["/js/third-party/reveal/head.min.js","aad121203010122e05f1766d92385214"],["/js/third-party/reveal/highlight.min.js","44594243bec43813a16371af8fe7e105"],["/js/third-party/reveal/markdown.min.js","7ec4cef5a7fe3f0bf0eb4dc6d7bca114"],["/js/third-party/reveal/marked.min.js","c2a88705e206d71dc21fdc4445349127"],["/js/third-party/reveal/math.min.js","0a278fee2e57c530ab07f7d2d9ea8d96"],["/js/third-party/reveal/notes.min.js","89a0dfae4d706f9c75b317f686c3aa14"],["/js/third-party/reveal/reveal.min.js","8988419d67efb5fe93e291a357e26ec9"],["/js/third-party/reveal/zoom.min.js","9791f96e63e7d534cba2b67d4bda0419"],["/js/third-party/velocity.min.js","64da069aba987ea0512cf610600a56d1"],["/js/third-party/velocity.ui.min.js","c8ca438424a080620f7b2f4ee4b0fff1"],["/js/transition.js","911db4268f0f6621073afcced9e1bfef"],["/js/utils.js","3ff3423d966a1c351e9867813b3f6d36"],["/live2dw/assets/live2d-widget-model-bilibili.model.json","6b6dc90bacf5bea95e5f41732756f0f4"],["/live2dw/assets/moc/33.1024/closet.2016.xmas/texture_01.png","2bcf94bc9d9ce523fad40f254822fff0"],["/live2dw/assets/moc/33.1024/closet.2016.xmas/texture_02.png","6e34e2f4df0e4d038ecdf83a3b173cde"],["/live2dw/assets/moc/33.1024/closet.2016.xmas/texture_03_1.png","d0bbb2defaecb5d4c0ef52ab360c3265"],["/live2dw/assets/moc/33.1024/closet.2016.xmas/texture_03_2.png","eb41b0556d6d31fe17d2032b3632c778"],["/live2dw/assets/moc/33.1024/closet.2017.cba-normal/texture_01.png","cbdb60dc59b6a08c64821aaa97512742"],["/live2dw/assets/moc/33.1024/closet.2017.cba-normal/texture_02.png","13ad7bf3aa1a42a5e1dd1e2f31ea31da"],["/live2dw/assets/moc/33.1024/closet.2017.cba-normal/texture_03.png","7f42a4d361ac032cd737e695a7feba1d"],["/live2dw/assets/moc/33.1024/closet.2017.newyear/texture_01.png","f15ada8a27eb4431e81c36582ad4c5eb"],["/live2dw/assets/moc/33.1024/closet.2017.newyear/texture_02.png","7e33d1c03c5916193050f71341b4a7a8"],["/live2dw/assets/moc/33.1024/closet.2017.newyear/texture_03.png","4aa01901e8825803f713dcc936358a15"],["/live2dw/assets/moc/33.1024/closet.2017.school/texture_01.png","defcfa6952f742dda0e1db15a1a36f1a"],["/live2dw/assets/moc/33.1024/closet.2017.school/texture_02.png","4387272e066ab932ebbf3465aae7521c"],["/live2dw/assets/moc/33.1024/closet.2017.school/texture_03.png","4ad14efbe80725cd817dfea8adee4e04"],["/live2dw/assets/moc/33.1024/closet.2017.summer.normal/texture_01.png","1952c6094c4a6395fcc220ff3cb5b13e"],["/live2dw/assets/moc/33.1024/closet.2017.summer.normal/texture_02.png","0352fb78c14e385aca9404819d44ca30"],["/live2dw/assets/moc/33.1024/closet.2017.summer.normal/texture_03_1.png","27419e6883558b98d87defd1a68c042d"],["/live2dw/assets/moc/33.1024/closet.2017.summer.normal/texture_03_2.png","3b1ee34c813f7646d5c4955cc724426d"],["/live2dw/assets/moc/33.1024/closet.2017.tomo-bukatsu.high/texture_01.png","adaae15046f327ca0487b3fa7eb4a851"],["/live2dw/assets/moc/33.1024/closet.2017.tomo-bukatsu.high/texture_02.png","79b74fc078412d335029e51a60b5d52e"],["/live2dw/assets/moc/33.1024/closet.2017.tomo-bukatsu.high/texture_03.png","cae282aed0ee8820ce2466700537adce"],["/live2dw/assets/moc/33.1024/closet.2017.tomo-bukatsu.low/texture_01.png","f7787616bb8becf875eb2287cd5b75e0"],["/live2dw/assets/moc/33.1024/closet.2017.tomo-bukatsu.low/texture_02.png","29f35b59f6c42324d19f0f3ab08ba050"],["/live2dw/assets/moc/33.1024/closet.2017.tomo-bukatsu.low/texture_03.png","8fc09a82177fb337f9cc20856e46037c"],["/live2dw/assets/moc/33.1024/closet.2017.valley/texture_01.png","1a8b5d61f235847e1819f1c18bfb50be"],["/live2dw/assets/moc/33.1024/closet.2017.valley/texture_02.png","11a57782793a2932ea8c42e7affbd589"],["/live2dw/assets/moc/33.1024/closet.2017.valley/texture_03.png","97445440e605da915613e44ff7829656"],["/live2dw/assets/moc/33.1024/closet.2017.vdays/texture_01.png","e1ff4f7a54645a73a4a68b2d8d4809c4"],["/live2dw/assets/moc/33.1024/closet.2017.vdays/texture_02.png","116183fcdd5f52e08be83f17ac36f0fb"],["/live2dw/assets/moc/33.1024/closet.2017.vdays/texture_03.png","7723d023b27259ad45e09bde6c7acb79"],["/live2dw/assets/moc/33.1024/closet.2018.lover/texture_01.png","86c09cc094a2ce258562d2bcd06b1d82"],["/live2dw/assets/moc/33.1024/closet.2018.lover/texture_02.png","6582de8e686bc673ab94626a7f40de52"],["/live2dw/assets/moc/33.1024/closet.2018.lover/texture_03.png","42fb0c3df5d37d37aa9a1777501dc480"],["/live2dw/assets/moc/33.1024/closet.2018.spring/texture_01.png","2a1b2ac3471f8f62258fbf0bd369d726"],["/live2dw/assets/moc/33.1024/closet.2018.spring/texture_02.png","3b9ad7e69909bea9a4a9d31787079cbc"],["/live2dw/assets/moc/33.1024/closet.2018.spring/texture_03.png","13c77f51a6aabe3ca2d525813d6ac3c2"],["/live2dw/assets/moc/33.1024/closet.default.v2/texture_00.png","121525748ef0a5beffc4adcef1e8385f"],["/live2dw/assets/moc/33.1024/closet.default.v2/texture_01.png","45954db1e5f5703228a389e2f341b83d"],["/live2dw/assets/moc/33.1024/closet.default.v2/texture_02.png","ebad9aa8610cff82e9edbc02b8b6c6ba"],["/live2dw/assets/moc/33.1024/closet.default.v2/texture_03.png","ff84419bbde867efa962b8d9c2d3457c"],["/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["/manifest.json","394145a19a8431fcd5ce8b558f25427f"],["/page/2/index.html","f0a3d0fb348739ea649241e7db978a2d"],["/page/3/index.html","fe99d0bec7a656e36329d03a6a0400bb"],["/page/4/index.html","fd623afeefd794395fe75e7bebc94cab"],["/page/5/index.html","68929f5289524e4221c68cbc25a75c8d"],["/page/6/index.html","8771fe04b52b65af092e87185981e8c6"],["/page/7/index.html","952c1e435958496fa2b7e62bc237f75e"],["/search.xml","5c0abbd1e180933c1d4402970d965c27"],["/sitemap.xml","91ab7b26109b2a91bfe14ba501195fc1"],["/tags/BBR/index.html","a91e3889b3ea29278a33286d6c44af9c"],["/tags/C-C/index.html","7bd35620aa8d989ff08ac4cbc51f0bde"],["/tags/C/index.html","50e8559f72ea63394e31da9181ff437a"],["/tags/CentOS/index.html","d388d8eb9bf6c0ba8dee27ff403ff098"],["/tags/DataGrip/index.html","6caf1b692df3e31d98dd37125622d8d5"],["/tags/DigitalOcean/index.html","7971dd645cd15d49dc136d5b0740e149"],["/tags/Games/index.html","6cc844662bf2660f3cca586a22185c37"],["/tags/Hacker-Game/index.html","183813c5059939ca699764fa38554a28"],["/tags/Hacknet/index.html","c721ba04c60fb840afb4f6234d8e6253"],["/tags/Hexo/index.html","57fbfd87a2447fae547f27243ce9a57d"],["/tags/JAVA/index.html","72019eeb5310094dfa72a571238b05d7"],["/tags/Linux/index.html","a80be62f91c557680e047147c5d39fcf"],["/tags/MacOS/index.html","5f9fc78edc783d52d4eedc8670f2288e"],["/tags/MacOSX/index.html","2ed62aa5c99f8603adc237755fde0c92"],["/tags/MySQL/index.html","7563db7ed8f17fe5356e91128b226436"],["/tags/NAS/index.html","3035ca029cfcc170fc34dd4f7022fd97"],["/tags/Net-Optimize/index.html","934348f13f4067c60a8a744b3304a433"],["/tags/Net-Speeder/index.html","b588d3cdb3740d61b8645016421d42ef"],["/tags/OJ/index.html","eda0167c78b498c41bae47474e9ddfc2"],["/tags/Programming-Language/index.html","b79af23a9d814e4cff3b4f2c3becdc33"],["/tags/Python-3/index.html","6f47345b60d76e4df3ac19f45567e4fc"],["/tags/ServerSpeeder/index.html","39ea520cb49a59a345eb82b2c4368a36"],["/tags/Shadowsocks-R/index.html","823d53889fbeef727890748347f4cde1"],["/tags/Synology/index.html","2f5a559e441ae09660abd5626d616161"],["/tags/Ubuntu/index.html","c5bebea89a44cbfd2994996da652e957"],["/tags/Unix/index.html","72c4197e96d31c47732c73640fbf25ad"],["/tags/VMWare-Fusion/index.html","9cff9ea3435a309d5942b9c5a7790bc5"],["/tags/VPS-Panel/index.html","7d58f69f460ecc903164bf20a2eaaf60"],["/tags/VPS/index.html","cf559cfb4f05797240906ed55824b0ce"],["/tags/Vim-GVim/index.html","17bd172217754c680802deb165e7f4da"],["/tags/bash/index.html","b4ef0bb29b9f7189032e6871e82bb6da"],["/tags/clang/index.html","126622d71729b5dd2e7881f2b213692d"],["/tags/code-sign/index.html","96d4fd8b9aa1f8fe390af9418d6abfa6"],["/tags/debug/index.html","69f335f3d692a4e72edb7d8ea01dea59"],["/tags/gcc/index.html","95a5fff4bd1d3322530596d426b4e32d"],["/tags/gdb/index.html","829f796a2e58bbdf15ceb686ab9a2c07"],["/tags/index.html","7b0b225af89d69354328d3ed823e4a72"],["/tags/leetcode/index.html","a1b2d3eee547ce2de73f24ac2ea5bbf5"],["/tags/leetcode/page/2/index.html","7eb595b053bb27b64741362c4b845ff1"],["/tags/lldb/index.html","b7dfbd017720c4566af3dd4bf3380edd"],["/tags/mail-app/index.html","b570bb8a8e3a0bfdb8930cd45b2d8320"],["/tags/programming-tools/index.html","ceec32caefbfb09c12ee465012438a2f"],["/tags/ssh/index.html","19f868be0d17f7997740388b3f2a5952"],["/tags/template/index.html","e7961223aa2d72ad9c23c8b2419f27aa"],["/tags/test/index.html","c586296038a24a5008946fc75f0fa718"],["/tags/vscode/index.html","317475381042619a7614f8baa762c28a"],["/tags/二分查找/index.html","d4af3bff8b878d1efe2d8ccf4d76352b"],["/tags/分治/index.html","29b4a9f45062a2ab35c90c1b82f4e1cf"],["/tags/剪枝/index.html","2087f238ed6cf4515c1d60f05934a964"],["/tags/去重/index.html","2d92175615e9abcaaa42680acc5bbe5a"],["/tags/双指针/index.html","d8aac079de093c20de0d15e8df821171"],["/tags/多线程/index.html","48946dde061f446dd86c98cb981cf1b7"],["/tags/宝塔面板/index.html","633994e4752202286da167fcc24dd365"],["/tags/栈/index.html","9cca5dcebbd2bacff5c822e215d6eadd"],["/tags/模板/index.html","3d097402aa7810cbdc4a62d0375de14d"],["/tags/每日一记/index.html","4ecec3553e5e0cfa05bb71fb72f53843"],["/tags/每日一记/page/2/index.html","391f6d6958e75b2cc700110b2fb7521d"],["/tags/翻墙/index.html","c183606660a869e946d48250ae149368"],["/tags/计算机协会/index.html","ab499b24ec7334173dab0aa11e16fd62"],["/tags/递归/index.html","35c84684742f079c0e0c46ec1b486fc7"],["/tags/遍历/index.html","7ba0f39e972de152459701788bb8e5a2"],["/tags/链表/index.html","329094be60e389e6d1fb98675d0bcb8f"],["/tags/黑裙/index.html","d5ed82a7729af70f53a73d27ff25d10a"],["/tags/黑裙，NAS/index.html","736b24b5bddc3a121c21954a2b5e331a"],["/wifi-icon.png","3616e551e69fc1d622c535ab84fec10e"]];
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


// *** Start of auto-included sw-toolbox code. ***
/* 
 Copyright 2016 Google Inc. All Rights Reserved.

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

     http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/!function(e){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var t;t="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this,t.toolbox=e()}}(function(){return function e(t,n,r){function o(c,s){if(!n[c]){if(!t[c]){var a="function"==typeof require&&require;if(!s&&a)return a(c,!0);if(i)return i(c,!0);var u=new Error("Cannot find module '"+c+"'");throw u.code="MODULE_NOT_FOUND",u}var f=n[c]={exports:{}};t[c][0].call(f.exports,function(e){var n=t[c][1][e];return o(n?n:e)},f,f.exports,e,t,n,r)}return n[c].exports}for(var i="function"==typeof require&&require,c=0;c<r.length;c++)o(r[c]);return o}({1:[function(e,t,n){"use strict";function r(e,t){t=t||{};var n=t.debug||m.debug;n&&console.log("[sw-toolbox] "+e)}function o(e){var t;return e&&e.cache&&(t=e.cache.name),t=t||m.cache.name,caches.open(t)}function i(e,t){t=t||{};var n=t.successResponses||m.successResponses;return fetch(e.clone()).then(function(r){return"GET"===e.method&&n.test(r.status)&&o(t).then(function(n){n.put(e,r).then(function(){var r=t.cache||m.cache;(r.maxEntries||r.maxAgeSeconds)&&r.name&&c(e,n,r)})}),r.clone()})}function c(e,t,n){var r=s.bind(null,e,t,n);d=d?d.then(r):r()}function s(e,t,n){var o=e.url,i=n.maxAgeSeconds,c=n.maxEntries,s=n.name,a=Date.now();return r("Updating LRU order for "+o+". Max entries is "+c+", max age is "+i),g.getDb(s).then(function(e){return g.setTimestampForUrl(e,o,a)}).then(function(e){return g.expireEntries(e,c,i,a)}).then(function(e){r("Successfully updated IDB.");var n=e.map(function(e){return t.delete(e)});return Promise.all(n).then(function(){r("Done with cache cleanup.")})}).catch(function(e){r(e)})}function a(e,t,n){return r("Renaming cache: ["+e+"] to ["+t+"]",n),caches.delete(t).then(function(){return Promise.all([caches.open(e),caches.open(t)]).then(function(t){var n=t[0],r=t[1];return n.keys().then(function(e){return Promise.all(e.map(function(e){return n.match(e).then(function(t){return r.put(e,t)})}))}).then(function(){return caches.delete(e)})})})}function u(e,t){return o(t).then(function(t){return t.add(e)})}function f(e,t){return o(t).then(function(t){return t.delete(e)})}function h(e){e instanceof Promise||p(e),m.preCacheItems=m.preCacheItems.concat(e)}function p(e){var t=Array.isArray(e);if(t&&e.forEach(function(e){"string"==typeof e||e instanceof Request||(t=!1)}),!t)throw new TypeError("The precache method expects either an array of strings and/or Requests or a Promise that resolves to an array of strings and/or Requests.");return e}function l(e,t,n){if(!e)return!1;if(t){var r=e.headers.get("date");if(r){var o=new Date(r);if(o.getTime()+1e3*t<n)return!1}}return!0}var d,m=e("./options"),g=e("./idb-cache-expiration");t.exports={debug:r,fetchAndCache:i,openCache:o,renameCache:a,cache:u,uncache:f,precache:h,validatePrecacheInput:p,isResponseFresh:l}},{"./idb-cache-expiration":2,"./options":4}],2:[function(e,t,n){"use strict";function r(e){return new Promise(function(t,n){var r=indexedDB.open(u+e,f);r.onupgradeneeded=function(){var e=r.result.createObjectStore(h,{keyPath:p});e.createIndex(l,l,{unique:!1})},r.onsuccess=function(){t(r.result)},r.onerror=function(){n(r.error)}})}function o(e){return e in d||(d[e]=r(e)),d[e]}function i(e,t,n){return new Promise(function(r,o){var i=e.transaction(h,"readwrite"),c=i.objectStore(h);c.put({url:t,timestamp:n}),i.oncomplete=function(){r(e)},i.onabort=function(){o(i.error)}})}function c(e,t,n){return t?new Promise(function(r,o){var i=1e3*t,c=[],s=e.transaction(h,"readwrite"),a=s.objectStore(h),u=a.index(l);u.openCursor().onsuccess=function(e){var t=e.target.result;if(t&&n-i>t.value[l]){var r=t.value[p];c.push(r),a.delete(r),t.continue()}},s.oncomplete=function(){r(c)},s.onabort=o}):Promise.resolve([])}function s(e,t){return t?new Promise(function(n,r){var o=[],i=e.transaction(h,"readwrite"),c=i.objectStore(h),s=c.index(l),a=s.count();s.count().onsuccess=function(){var e=a.result;e>t&&(s.openCursor().onsuccess=function(n){var r=n.target.result;if(r){var i=r.value[p];o.push(i),c.delete(i),e-o.length>t&&r.continue()}})},i.oncomplete=function(){n(o)},i.onabort=r}):Promise.resolve([])}function a(e,t,n,r){return c(e,n,r).then(function(n){return s(e,t).then(function(e){return n.concat(e)})})}var u="sw-toolbox-",f=1,h="store",p="url",l="timestamp",d={};t.exports={getDb:o,setTimestampForUrl:i,expireEntries:a}},{}],3:[function(e,t,n){"use strict";function r(e){var t=a.match(e.request);t?e.respondWith(t(e.request)):a.default&&"GET"===e.request.method&&0===e.request.url.indexOf("http")&&e.respondWith(a.default(e.request))}function o(e){s.debug("activate event fired");var t=u.cache.name+"$$$inactive$$$";e.waitUntil(s.renameCache(t,u.cache.name))}function i(e){return e.reduce(function(e,t){return e.concat(t)},[])}function c(e){var t=u.cache.name+"$$$inactive$$$";s.debug("install event fired"),s.debug("creating cache ["+t+"]"),e.waitUntil(s.openCache({cache:{name:t}}).then(function(e){return Promise.all(u.preCacheItems).then(i).then(s.validatePrecacheInput).then(function(t){return s.debug("preCache list: "+(t.join(", ")||"(none)")),e.addAll(t)})}))}e("serviceworker-cache-polyfill");var s=e("./helpers"),a=e("./router"),u=e("./options");t.exports={fetchListener:r,activateListener:o,installListener:c}},{"./helpers":1,"./options":4,"./router":6,"serviceworker-cache-polyfill":16}],4:[function(e,t,n){"use strict";var r;r=self.registration?self.registration.scope:self.scope||new URL("./",self.location).href,t.exports={cache:{name:"$$$toolbox-cache$$$"+r+"$$$",maxAgeSeconds:null,maxEntries:null},debug:!1,networkTimeoutSeconds:null,preCacheItems:[],successResponses:/^0|([123]\d\d)|(40[14567])|410$/}},{}],5:[function(e,t,n){"use strict";var r=new URL("./",self.location),o=r.pathname,i=e("path-to-regexp"),c=function(e,t,n,r){t instanceof RegExp?this.fullUrlRegExp=t:(0!==t.indexOf("/")&&(t=o+t),this.keys=[],this.regexp=i(t,this.keys)),this.method=e,this.options=r,this.handler=n};c.prototype.makeHandler=function(e){var t;if(this.regexp){var n=this.regexp.exec(e);t={},this.keys.forEach(function(e,r){t[e.name]=n[r+1]})}return function(e){return this.handler(e,t,this.options)}.bind(this)},t.exports=c},{"path-to-regexp":15}],6:[function(e,t,n){"use strict";function r(e){return e.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&")}var o=e("./route"),i=e("./helpers"),c=function(e,t){for(var n=e.entries(),r=n.next(),o=[];!r.done;){var i=new RegExp(r.value[0]);i.test(t)&&o.push(r.value[1]),r=n.next()}return o},s=function(){this.routes=new Map,this.routes.set(RegExp,new Map),this.default=null};["get","post","put","delete","head","any"].forEach(function(e){s.prototype[e]=function(t,n,r){return this.add(e,t,n,r)}}),s.prototype.add=function(e,t,n,c){c=c||{};var s;t instanceof RegExp?s=RegExp:(s=c.origin||self.location.origin,s=s instanceof RegExp?s.source:r(s)),e=e.toLowerCase();var a=new o(e,t,n,c);this.routes.has(s)||this.routes.set(s,new Map);var u=this.routes.get(s);u.has(e)||u.set(e,new Map);var f=u.get(e),h=a.regexp||a.fullUrlRegExp;f.has(h.source)&&i.debug('"'+t+'" resolves to same regex as existing route.'),f.set(h.source,a)},s.prototype.matchMethod=function(e,t){var n=new URL(t),r=n.origin,o=n.pathname;return this._match(e,c(this.routes,r),o)||this._match(e,[this.routes.get(RegExp)],t)},s.prototype._match=function(e,t,n){if(0===t.length)return null;for(var r=0;r<t.length;r++){var o=t[r],i=o&&o.get(e.toLowerCase());if(i){var s=c(i,n);if(s.length>0)return s[0].makeHandler(n)}}return null},s.prototype.match=function(e){return this.matchMethod(e.method,e.url)||this.matchMethod("any",e.url)},t.exports=new s},{"./helpers":1,"./route":5}],7:[function(e,t,n){"use strict";function r(e,t,n){return n=n||{},i.debug("Strategy: cache first ["+e.url+"]",n),i.openCache(n).then(function(t){return t.match(e).then(function(t){var r=n.cache||o.cache,c=Date.now();return i.isResponseFresh(t,r.maxAgeSeconds,c)?t:i.fetchAndCache(e,n)})})}var o=e("../options"),i=e("../helpers");t.exports=r},{"../helpers":1,"../options":4}],8:[function(e,t,n){"use strict";function r(e,t,n){return n=n||{},i.debug("Strategy: cache only ["+e.url+"]",n),i.openCache(n).then(function(t){return t.match(e).then(function(e){var t=n.cache||o.cache,r=Date.now();if(i.isResponseFresh(e,t.maxAgeSeconds,r))return e})})}var o=e("../options"),i=e("../helpers");t.exports=r},{"../helpers":1,"../options":4}],9:[function(e,t,n){"use strict";function r(e,t,n){return o.debug("Strategy: fastest ["+e.url+"]",n),new Promise(function(r,c){var s=!1,a=[],u=function(e){a.push(e.toString()),s?c(new Error('Both cache and network failed: "'+a.join('", "')+'"')):s=!0},f=function(e){e instanceof Response?r(e):u("No result returned")};o.fetchAndCache(e.clone(),n).then(f,u),i(e,t,n).then(f,u)})}var o=e("../helpers"),i=e("./cacheOnly");t.exports=r},{"../helpers":1,"./cacheOnly":8}],10:[function(e,t,n){t.exports={networkOnly:e("./networkOnly"),networkFirst:e("./networkFirst"),cacheOnly:e("./cacheOnly"),cacheFirst:e("./cacheFirst"),fastest:e("./fastest")}},{"./cacheFirst":7,"./cacheOnly":8,"./fastest":9,"./networkFirst":11,"./networkOnly":12}],11:[function(e,t,n){"use strict";function r(e,t,n){n=n||{};var r=n.successResponses||o.successResponses,c=n.networkTimeoutSeconds||o.networkTimeoutSeconds;return i.debug("Strategy: network first ["+e.url+"]",n),i.openCache(n).then(function(t){var s,a,u=[];if(c){var f=new Promise(function(r){s=setTimeout(function(){t.match(e).then(function(e){var t=n.cache||o.cache,c=Date.now(),s=t.maxAgeSeconds;i.isResponseFresh(e,s,c)&&r(e)})},1e3*c)});u.push(f)}var h=i.fetchAndCache(e,n).then(function(e){if(s&&clearTimeout(s),r.test(e.status))return e;throw i.debug("Response was an HTTP error: "+e.statusText,n),a=e,new Error("Bad response")}).catch(function(r){return i.debug("Network or response error, fallback to cache ["+e.url+"]",n),t.match(e).then(function(e){if(e)return e;if(a)return a;throw r})});return u.push(h),Promise.race(u)})}var o=e("../options"),i=e("../helpers");t.exports=r},{"../helpers":1,"../options":4}],12:[function(e,t,n){"use strict";function r(e,t,n){return o.debug("Strategy: network only ["+e.url+"]",n),fetch(e)}var o=e("../helpers");t.exports=r},{"../helpers":1}],13:[function(e,t,n){"use strict";var r=e("./options"),o=e("./router"),i=e("./helpers"),c=e("./strategies"),s=e("./listeners");i.debug("Service Worker Toolbox is loading"),self.addEventListener("install",s.installListener),self.addEventListener("activate",s.activateListener),self.addEventListener("fetch",s.fetchListener),t.exports={networkOnly:c.networkOnly,networkFirst:c.networkFirst,cacheOnly:c.cacheOnly,cacheFirst:c.cacheFirst,fastest:c.fastest,router:o,options:r,cache:i.cache,uncache:i.uncache,precache:i.precache}},{"./helpers":1,"./listeners":3,"./options":4,"./router":6,"./strategies":10}],14:[function(e,t,n){t.exports=Array.isArray||function(e){return"[object Array]"==Object.prototype.toString.call(e)}},{}],15:[function(e,t,n){function r(e,t){for(var n,r=[],o=0,i=0,c="",s=t&&t.delimiter||"/";null!=(n=x.exec(e));){var f=n[0],h=n[1],p=n.index;if(c+=e.slice(i,p),i=p+f.length,h)c+=h[1];else{var l=e[i],d=n[2],m=n[3],g=n[4],v=n[5],w=n[6],y=n[7];c&&(r.push(c),c="");var b=null!=d&&null!=l&&l!==d,E="+"===w||"*"===w,R="?"===w||"*"===w,k=n[2]||s,$=g||v;r.push({name:m||o++,prefix:d||"",delimiter:k,optional:R,repeat:E,partial:b,asterisk:!!y,pattern:$?u($):y?".*":"[^"+a(k)+"]+?"})}}return i<e.length&&(c+=e.substr(i)),c&&r.push(c),r}function o(e,t){return s(r(e,t))}function i(e){return encodeURI(e).replace(/[\/?#]/g,function(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()})}function c(e){return encodeURI(e).replace(/[?#]/g,function(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()})}function s(e){for(var t=new Array(e.length),n=0;n<e.length;n++)"object"==typeof e[n]&&(t[n]=new RegExp("^(?:"+e[n].pattern+")$"));return function(n,r){for(var o="",s=n||{},a=r||{},u=a.pretty?i:encodeURIComponent,f=0;f<e.length;f++){var h=e[f];if("string"!=typeof h){var p,l=s[h.name];if(null==l){if(h.optional){h.partial&&(o+=h.prefix);continue}throw new TypeError('Expected "'+h.name+'" to be defined')}if(v(l)){if(!h.repeat)throw new TypeError('Expected "'+h.name+'" to not repeat, but received `'+JSON.stringify(l)+"`");if(0===l.length){if(h.optional)continue;throw new TypeError('Expected "'+h.name+'" to not be empty')}for(var d=0;d<l.length;d++){if(p=u(l[d]),!t[f].test(p))throw new TypeError('Expected all "'+h.name+'" to match "'+h.pattern+'", but received `'+JSON.stringify(p)+"`");o+=(0===d?h.prefix:h.delimiter)+p}}else{if(p=h.asterisk?c(l):u(l),!t[f].test(p))throw new TypeError('Expected "'+h.name+'" to match "'+h.pattern+'", but received "'+p+'"');o+=h.prefix+p}}else o+=h}return o}}function a(e){return e.replace(/([.+*?=^!:${}()[\]|\/\\])/g,"\\$1")}function u(e){return e.replace(/([=!:$\/()])/g,"\\$1")}function f(e,t){return e.keys=t,e}function h(e){return e.sensitive?"":"i"}function p(e,t){var n=e.source.match(/\((?!\?)/g);if(n)for(var r=0;r<n.length;r++)t.push({name:r,prefix:null,delimiter:null,optional:!1,repeat:!1,partial:!1,asterisk:!1,pattern:null});return f(e,t)}function l(e,t,n){for(var r=[],o=0;o<e.length;o++)r.push(g(e[o],t,n).source);var i=new RegExp("(?:"+r.join("|")+")",h(n));return f(i,t)}function d(e,t,n){return m(r(e,n),t,n)}function m(e,t,n){v(t)||(n=t||n,t=[]),n=n||{};for(var r=n.strict,o=n.end!==!1,i="",c=0;c<e.length;c++){var s=e[c];if("string"==typeof s)i+=a(s);else{var u=a(s.prefix),p="(?:"+s.pattern+")";t.push(s),s.repeat&&(p+="(?:"+u+p+")*"),p=s.optional?s.partial?u+"("+p+")?":"(?:"+u+"("+p+"))?":u+"("+p+")",i+=p}}var l=a(n.delimiter||"/"),d=i.slice(-l.length)===l;return r||(i=(d?i.slice(0,-l.length):i)+"(?:"+l+"(?=$))?"),i+=o?"$":r&&d?"":"(?="+l+"|$)",f(new RegExp("^"+i,h(n)),t)}function g(e,t,n){return v(t)||(n=t||n,t=[]),n=n||{},e instanceof RegExp?p(e,t):v(e)?l(e,t,n):d(e,t,n)}var v=e("isarray");t.exports=g,t.exports.parse=r,t.exports.compile=o,t.exports.tokensToFunction=s,t.exports.tokensToRegExp=m;var x=new RegExp(["(\\\\.)","([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))"].join("|"),"g")},{isarray:14}],16:[function(e,t,n){!function(){var e=Cache.prototype.addAll,t=navigator.userAgent.match(/(Firefox|Chrome)\/(\d+\.)/);if(t)var n=t[1],r=parseInt(t[2]);e&&(!t||"Firefox"===n&&r>=46||"Chrome"===n&&r>=50)||(Cache.prototype.addAll=function(e){function t(e){this.name="NetworkError",this.code=19,this.message=e}var n=this;return t.prototype=Object.create(Error.prototype),Promise.resolve().then(function(){if(arguments.length<1)throw new TypeError;return e=e.map(function(e){return e instanceof Request?e:String(e)}),Promise.all(e.map(function(e){"string"==typeof e&&(e=new Request(e));var n=new URL(e.url).protocol;if("http:"!==n&&"https:"!==n)throw new t("Invalid scheme");return fetch(e.clone())}))}).then(function(r){if(r.some(function(e){return!e.ok}))throw new t("Incorrect response status");return Promise.all(r.map(function(t,r){return n.put(e[r],t)}))}).then(function(){})},Cache.prototype.add=function(e){return this.addAll([e])})}()},{}]},{},[13])(13)});


// *** End of auto-included sw-toolbox code. ***



// Runtime cache configuration, using the sw-toolbox library.

toolbox.router.get("/*", toolbox.cacheFirst, {"origin":"cdnjs.cloudflare.com"});




