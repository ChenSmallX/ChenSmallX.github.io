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

var precacheConfig = [["/2018/06/06/hello-hexo/index.html","f7d6ce7cac8e93e49a067d8983b6e33f"],["/2018/06/06/test/index.html","23c8ec7de86b13f462d9abecf325d456"],["/2018/06/07/config-of-vscode-for-c-cpp-on-macos/index.html","8f3327352e35d91b92f6b9d3a32d5d14"],["/2018/06/08/VPS-panel-VPSMate/index.html","add9a3e3339a5a9ba96aeaafe44cbafc"],["/2018/06/08/VPS-panel-bt/index.html","6503c9ff50447a5481121a373638b6bc"],["/2018/06/08/build-shadowsocks-r-like-a-stable-dog/index.html","d0268cc975c7578ecfd04c88feb75c20"],["/2018/06/08/net-optimize-for-VPS-net-speeder/index.html","c11d308dd98c43d34653c864f5db3107"],["/2018/06/08/recommend-VPS-recently/index.html","bf2cd48da9553a70c9619a039b2be3da"],["/2018/06/08/settings-for-a-new-or-minimal-centos/index.html","cfbeb773d3f0e346daef4cb4a7df0803"],["/2018/06/09/net-optimize-for-VPS-serverspeeder/index.html","3f372e6e6a5af5fc28f59657f36bd439"],["/2018/06/13/javaprogramlanguage-personal-encountered-javautilnosuchelementexception-anomalies-and-problems-and-solutions/index.html","ad1a972bac9d5ff489e6a1702f580595"],["/2018/06/19/digitalocean-centos6-enable-bbr-to-upspeed/index.html","dbb7f3685574442c25710ab70842c9b3"],["/2018/06/19/sshWarning-solution/index.html","cf31acc0a6c1a3c7b1e0137656276856"],["/2018/07/03/hacknet-again/index.html","4f05f68ebbb2dc5d4b92af3b9d12082b"],["/2018/07/03/python-learning-list/index.html","61a8e5ed483af3545fde68de5a6c43cc"],["/2018/07/11/vim-caught-deadly-signal-segv/index.html","a4ea3c5a784a15f15e47e07a153b28fc"],["/2018/07/13/computerInstitution-summerassignment-2018/index.html","51586a6430eaac6568b057dd02d31b26"],["/2018/11/20/post-everyday-2018-11-20/index.html","e36ea2966a1af4ba53c79705d5a6d6a3"],["/2018/11/21/post-everyday-2018-11-21/index.html","303c545ae1b145975422ad985fb931dd"],["/2018/11/22/VMWare-Fusion-recycle-storage/index.html","fe189d033f8ceeab22063c3983b3821e"],["/2018/11/22/post-everyday-2018-11-22/index.html","6433b62255277eaa22c944d17e6be007"],["/2018/11/23/MySQL-disorder-output-solution/index.html","62c91956a1acf487c3ac45966013a604"],["/2018/11/23/post-everyday-2018-11-23/index.html","8d29c573e2c85320c94071670b7890dc"],["/2018/11/24/post-everyday-2018-11-24/index.html","4e3a087a4cd7b9c8d3fb706924081e8a"],["/2018/11/26/post-everyday-2018-11-26/index.html","6546ac1613736bffde0d3470bb7574cb"],["/2018/11/27/post-everyday-2018-11-27/index.html","6d6c4d60735506b2d0e14cc0018d2f95"],["/2018/12/04/post-everyday-2018-12-4/index.html","a2d8abf24029dc7ef8ad0d311797fadf"],["/2018/12/05/post-everyday-2018-12-5/index.html","3743f43ef6df1fd47def18d2b237e3a3"],["/2018/12/10/post-everyday-2018-12-10/index.html","a925d4bc800154a41f191da528cd7c16"],["/2019/01/25/be-expert-skills-hardware/index.html","dc6c72be6d81d925cb63b5d125d44a87"],["/2019/01/25/be-expert-skills-system/index.html","2ed4cd387a26cce63c247af774cf31e9"],["/2019/01/25/computerInstitution-winterassignment-2019/index.html","1294c2c49ba7ec08f9caf6126e43db5b"],["/2019/03/13/post-everyday-2019-3-13/index.html","bae6383ca76f0a85730a22f20059b111"],["/2019/03/15/post-everyday-2019-3-15/index.html","6f5ab38b8c9692d67310d57dfff323cb"],["/2019/03/18/post-everyday-2019-3-19/index.html","750e886027b5b390911f2f4e94dc98de"],["/2019/03/20/post-everyday-2019-3-20/index.html","045db60dd0bc93d8255380b3aa2cf21b"],["/2019/03/25/post-everyday-2019-3-25/index.html","102d6669fd48b41df8a019ed1a7631ea"],["/2019/03/29/post-everyday-2019-3-29/index.html","88860b534e86859eb7ba83ca5109ed77"],["/QQ20181123-094100@2x.png","902e3b5f44547e3f6266ae68943e8504"],["/about-me/index.html","edd5bfb69bbad1b0397b76123b7a93b1"],["/archives/2018/06/index.html","ba6fd54c57b44eee43b43fcf14831f01"],["/archives/2018/06/page/2/index.html","b80f5d2e7162494d928e02923f94f22f"],["/archives/2018/07/index.html","ae4e8962fea95fa0014ce0b8ab439efd"],["/archives/2018/11/index.html","9d915c3ac06260b7dda81d4961bca739"],["/archives/2018/12/index.html","295d54b013520635e8e60cec3d34eb3a"],["/archives/2018/index.html","e0d1f7d6071c3391c460dd3f4de9d479"],["/archives/2018/page/2/index.html","e6ef2f39cad30a8f9ea6cdc36295d6dd"],["/archives/2018/page/3/index.html","15c869b431fddc6f3434bfe31b5b3c40"],["/archives/2019/01/index.html","bd407ee4018695e2e1e4efd17934287e"],["/archives/2019/03/index.html","9fe8eabd51694098a57250677dc3aa53"],["/archives/2019/index.html","09782c3a6b1b6cf29888a4aaa8e0598e"],["/archives/index.html","0e03d9aa8ce4ca3db1bac8285122025e"],["/archives/page/2/index.html","7357005f35cc805ec0ee03d316a90913"],["/archives/page/3/index.html","fc02239ee4a2adf9b35a5019e8dd22a4"],["/archives/page/4/index.html","7e17e2e1731595943acaa131d070219a"],["/assets/algolia/algoliasearch.js","d2d43273523febe70b3fbe4c7fb050bd"],["/assets/algolia/algoliasearch.min.js","d5ac7c786438492c5b4e9a9f8fc411ba"],["/assets/algolia/algoliasearchLite.js","81dab03a4f3d2e08cb6ebccca9f81a09"],["/assets/algolia/algoliasearchLite.min.js","01e86fe9a14b3d8270ca1867bacc7066"],["/baidusitemap.xml","b5e9eba4066c0dc679f430fc6490beb9"],["/categories/Game/index.html","350dea197cfdc7f92d934fc2468246d7"],["/categories/Geek-s-Work/Play-with-VPS/index.html","e7b3c4ff9ab44502eb5d244955b54ba4"],["/categories/Geek-s-Work/index.html","764d0c3a748d4e7e4f1eeff3ff1e386b"],["/categories/Geek-s-Work/page/2/index.html","f75b7033ca150059644eb826d0348ea1"],["/categories/HEXO/index.html","9cd50eb1a4452d29a4a07a2f45d8ea16"],["/categories/JavaScript/index.html","1bad1ac172fd8aee2119f7b80776f1ba"],["/categories/Linux-Learning/Ubuntu/index.html","28aa9f98c5652089c56e5c4c2931815d"],["/categories/Linux-Learning/index.html","814f885a8c91bcb207e5d4f9fbda56c9"],["/categories/My-English-Learning/index.html","f581db79fe563cee25a6310c5d06a550"],["/categories/MySQL/index.html","fce5400a491ea2b1cff5da7e353104b9"],["/categories/NAS/index.html","0a6005d9f2283767ad9d5b6fa7b72edd"],["/categories/Programer-Walk/JAVA/index.html","d73449f85ab010a87de83a7e275375cc"],["/categories/Programer-Walk/Programming-Tools/index.html","a1beae2392b590f94598d61e035521b9"],["/categories/Programer-Walk/Python-3/index.html","fcb4ae856aef4bdf73c8a9f5f51d9910"],["/categories/Programer-Walk/index.html","e08d2403d34cbc05ad77fb89c860b48e"],["/categories/VMWare-Fusion/index.html","8bd919c08263d225c3ec6c05fdd642a8"],["/categories/index.html","d8d7bfec0684491e3e44855a04683043"],["/categories/test/index.html","170892b641a60f2bf90500928aea09a7"],["/categories/每日一记/index.html","ad75ed0fd6c42e5eb6bfea14a4b62b9a"],["/categories/每日一记/page/2/index.html","ee94e6f15402a620c93fd3f7f12559ee"],["/categories/计算机协会/index.html","fa8fd5e26a47406ba70f551f805a2bde"],["/categories/黑群晖/index.html","db2a6fef460b2bc2aeb57dc502710b98"],["/css/index.css","0ad931abf3611cec4a6d63e21d5d9a48"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/gallery/index.html","bca0fdf4162657490184c5ddd246f082"],["/img/Anonymous_masks_hackers_v_for_vendetta_black_background_3840x2400.jpg","ce571a3428d1522fd31f82492c945ab3"],["/img/BBRscript.png","9ebb84292ad0257c2e2f10ccc8210857"],["/img/DOticket.jpg","a0f155fb0316c82e30d8c30527380be2"],["/img/ELECTRONICS_machine_technology_circuit_electronic_computer_technics_detail_psychedelic_abstract_pattern_5472x3648.jpg","68cfae3ed50fff3db3d710003ecc631f"],["/img/Gears_mechanical_technics_metal_steel_abstract_abstraction_steampunk_mechanism_machine_Engineering_gear_1920x1080.jpg","c397ba08a4d48f0d431a63b15f5c15fb"],["/img/HACKER_hack_hacking_internet_computer_anarchy_poster_1920x1083.jpg","b68a0e40bb43ba7fcab9bc33ecb9f348"],["/img/Hacker_hacking_hack_anarchy_virus_internet_computer_sadic_Anonymous_dark_1920x1080.jpg","db0a7fe1fe9ebe8fa1208d4894e0348c"],["/img/KVM-OVZ-XEN.png","022b91d2147df73b9045a10f5ed9d179"],["/img/MacBook_keyboard_2560x1600.jpg","a7dbe22103bbca4ac4a62bb4ef63f17e"],["/img/Minimalistic_apple_inc_2560x1600.jpg","79da60f54c9b965f6946019745a7ef44"],["/img/QQ20180610-2032072x.png","02ffc9ce3850ee27732ff178324d48e6"],["/img/Winter_Mountain_3840x2160.jpg","a8789af4556247c0a021413164200016"],["/img/after_BBR.png","06f69fc3cbf721e932a3aa7c8ebe76cf"],["/img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["/img/avatar.png","6cc4a809d23e3d8946a299ae4ce4e4cd"],["/img/before_BBR.png","c1399865981bbc7d7547c43699657341"],["/img/computer_engineering_science_tech_1920x1080.jpg","9750a9696cb2fe206bfa85c164b37f21"],["/img/computers_electronics_macro_chips_integrated_circuit_heatsinks_processor_1920x1080.jpg","ff368e75aa91ea6bc7c033e714b55031"],["/img/cubecloud.png","b5d83eeded92e8a495be6199d859b230"],["/img/datagrip.png","d3b75b7a48a2c2653631447159de4e21"],["/img/goodSQL-DG.png","e21b1c961365b4fd252676e7662e5b97"],["/img/goodSQL-G.png","25abaa2aa16ec7806e47eb7cc6990f6c"],["/img/icon/AppIcon24x24@2x.png","e57974e7e9bcbfa7c781c4a6b68c329a"],["/img/icon/AppIcon27.5x27.5@2x.png","65aa90709838add203c669d2b4918947"],["/img/icon/AppIcon40x40@2x.png","315025af34fde3ed2f2307273bdc9819"],["/img/icon/AppIcon44x44@2x.png","6f7e6157e44b080ef932e058fd7a0d19"],["/img/icon/AppIcon86x86@2x.png","8b01f32921fac4c0153ada98b8dbbfa2"],["/img/icon/AppIcon98x98@2x.png","45bbd3fbe1e64a9e9bfb7ed4e268a587"],["/img/icon/GooglePlayStore.png","44c41f406e8eceed836bc86970248e80"],["/img/icon/Icon-60@2x.png","686d59262e614e4334152fd2a37edde8"],["/img/icon/Icon-60@3x.png","540b1eec63e3542dfd0a6b87eade86de"],["/img/icon/Icon-72.png","0cf96ad3f6ea7a11d1bedf23a1c97ff0"],["/img/icon/Icon-72@2x.png","cf171765d10bebd5de064fb0062beac5"],["/img/icon/Icon-76.png","87d7de28aae1891fc52d8aa8464e687c"],["/img/icon/Icon-76@2x.png","4f6de6c6057895e75b4ec474540ed63a"],["/img/icon/Icon-83.5@2x.png","4bdaf24ed1d0de820c15adaa38c5e5c3"],["/img/icon/Icon-Notification.png","37ecc35f7809d69b2146ccf1221b8c13"],["/img/icon/Icon-Notification@3x.png","db17d5c1e38b255984d953b441d0f05e"],["/img/icon/Icon-Small-40.png","c0f8a5fd80f7976ac430e33eae71387b"],["/img/icon/Icon-Small-40@2x.png","315025af34fde3ed2f2307273bdc9819"],["/img/icon/Icon-Small-50.png","c652fa24fbfee44babac5dc8e8cbde09"],["/img/icon/Icon-Small-50@2x.png","f92ee8a02961f8e65742df5534994eec"],["/img/icon/Icon-Small.png","792bec4998433d3c25b450b0c7df2e49"],["/img/icon/Icon-Small@2x.png","f20db6dd8ea3316ae4c2910343c83cb6"],["/img/icon/Icon-Small@3x.png","cc916e3dbc5b8d962de5b315093109c1"],["/img/icon/Icon.png","51e04138100e798dce0a2c7e3da2b769"],["/img/icon/Icon@2x.png","a104c87d1e0f9ca88ca7cc93b9ec1915"],["/img/icon/hdpi.png","0cf96ad3f6ea7a11d1bedf23a1c97ff0"],["/img/icon/iTunesArtwork.png","44c41f406e8eceed836bc86970248e80"],["/img/icon/iTunesArtwork@2x.png","fa97997acbb38995800d896032978aa5"],["/img/icon/ldpi.png","1014dd6fb967135fb27b9b3dadb564e8"],["/img/icon/mdpi.png","e57974e7e9bcbfa7c781c4a6b68c329a"],["/img/icon/xhdpi.png","442580ffe555286de676d42012f2de6d"],["/img/icon/xxhdpi.png","cf171765d10bebd5de064fb0062beac5"],["/img/icon/xxxhdpi.png","d4064f9e8ba8d5f00501f048188523bd"],["/img/punch/20190313-listening.jpg","5ef5dee7162e714667d73ccfd41420e9"],["/img/punch/20190315-listening.jpg","9a53033e560930d17f149f5eacba67e5"],["/img/punch/20190319.jpg","cee12c362b1f0659990f4ea4be001dce"],["/img/punch/20190320-hs.jpg","faa1a013a510c0f6b78758811422c9b9"],["/img/punch/20190320.jpg","b16b7f2c413c3008e9a7d90f12b7e856"],["/img/punch/20190320_.jpg","f844503589939db75b2b518a9f7301fa"],["/img/punch/20190329.jpg","bd105efb5aca6e855f5ca6b229b998cf"],["/img/sql-null.png","f8a2143b9f8a4cea6fa5c81634e655ac"],["/img/testH61.jpg","f7241e7628960136c46cea3029363eb9"],["/img/topimg.jpg","0f15f964c1d3914566d01270819c5686"],["/img/vm-recycal.png","006b9fe2147ebc9874c7a2e66deb71ec"],["/img/wrongSQL.png","f54dfce3f9f991f641403a9d8be6a8dc"],["/img/地铁站.jpeg","8081fe4b11421172ec92f63fbed02921"],["/index.html","68855f61ea53f185e8e3a054df978c26"],["/js/copy.js","f4607057c0513bd07a69fcac08121979"],["/js/fancybox.js","cdef3c681834a3e5ee4de9a7ed2e0fb0"],["/js/fireworks.js","c186e041cb64c2e7efd345b7838f6ad7"],["/js/head.js","72dbb78b4e9c4cdf14fd4b8c9bd9828c"],["/js/hexo-theme-melody.js","d41d8cd98f00b204e9800998ecf8427e"],["/js/scroll.js","c1789d3ce75d3ff59ea20a6b435c2fcf"],["/js/search/algolia.js","53160985d32d6fd66d98aa0e05b081ac"],["/js/search/local-search.js","8f69402950f5566dd77f66005a9d17fb"],["/js/sidebar.js","d24db780974e661198eeb2e45f20a28f"],["/js/third-party/anime.min.js","9b4bbe6deb700e1c3606eab732f5eea5"],["/js/third-party/jquery.fancybox.min.js","3c9fa1c1199cd4f874d855ecb1641335"],["/js/third-party/jquery.min.js","c9f5aeeca3ad37bf2aa006139b935f0a"],["/js/third-party/reveal/head.min.js","aad121203010122e05f1766d92385214"],["/js/third-party/reveal/highlight.min.js","44594243bec43813a16371af8fe7e105"],["/js/third-party/reveal/markdown.min.js","7ec4cef5a7fe3f0bf0eb4dc6d7bca114"],["/js/third-party/reveal/marked.min.js","c2a88705e206d71dc21fdc4445349127"],["/js/third-party/reveal/math.min.js","0a278fee2e57c530ab07f7d2d9ea8d96"],["/js/third-party/reveal/notes.min.js","89a0dfae4d706f9c75b317f686c3aa14"],["/js/third-party/reveal/reveal.min.js","8988419d67efb5fe93e291a357e26ec9"],["/js/third-party/reveal/zoom.min.js","9791f96e63e7d534cba2b67d4bda0419"],["/js/third-party/velocity.min.js","64da069aba987ea0512cf610600a56d1"],["/js/third-party/velocity.ui.min.js","c8ca438424a080620f7b2f4ee4b0fff1"],["/js/transition.js","bd261a5dda799613501070ecc19d6e69"],["/js/utils.js","3ff3423d966a1c351e9867813b3f6d36"],["/manifest.json","394145a19a8431fcd5ce8b558f25427f"],["/page/2/index.html","6a9454fedd45a411581f2f1af13bcc24"],["/page/3/index.html","2179d8f089aed37b1efc87ae44dfd39a"],["/page/4/index.html","d2fd4faaa4c038646fad8bc7534d9b1b"],["/search.xml","cff523b59e5223ae5e8c801deff3bcef"],["/sitemap.xml","c020d56ce5257693d10ce96759cacf51"],["/tags/BBR/index.html","c6868f439f0329e438f88281065aac5c"],["/tags/CentOS/index.html","ae7f7a7ff4aa1ad79c8eb1df0cd47a3c"],["/tags/DataGrip/index.html","2de91d7953a2ed0a475edc6d95b8eba0"],["/tags/DigitalOcean/index.html","87e825ef259e8e8599591d39c9d6968b"],["/tags/Games/index.html","dd0b6a530b2175bba499f10295bf1d2c"],["/tags/Hacker-Game/index.html","fffba431c9f5b15213f7bae91cd9130c"],["/tags/Hacknet/index.html","e5f20e0806d3e2e653736f7ef25fb0f5"],["/tags/JAVA/index.html","0ddaeec92b639087f935ecc2135e4042"],["/tags/Linux/index.html","571945fd28ae4a85cf46445d0b03df5d"],["/tags/MacOSX/index.html","16424691114a8d115155ab7b222eb0af"],["/tags/MySQL/index.html","97296351afb358725c7518dc2b507d17"],["/tags/Net-Optimize/index.html","4fb901818713c91674ff05ad1c2773c1"],["/tags/Net-Speeder/index.html","a53e6c15ba6d2abc81fe7dc4082825b2"],["/tags/Programming-Language/index.html","dea62852780777708736e299f5d4851c"],["/tags/Programming-Tools/index.html","1100d35d544f0396532ff0a026df3357"],["/tags/Python-3/index.html","c83f859fb2f9eee1058a5d664061af9a"],["/tags/ServerSpeeder/index.html","18d9b27ebd45c0484f7d0356561b542b"],["/tags/Shadowsocks-R/index.html","4feaea1e4138cbd23660d965a59b0f49"],["/tags/Ubuntu/index.html","08f825a93652e36d1d2b832f890bc77c"],["/tags/Unix/index.html","403bad32495356611846b4ff4b82c9d1"],["/tags/VMWare-Fusion/index.html","fcf0e0f4c95bc5a802ad6489dc616b21"],["/tags/VPS-Panel/index.html","d269d0aa425c2b733bd8bcc3a92e9088"],["/tags/VPS/index.html","55b92d947dcac542aea8335a418d7e15"],["/tags/Vim-GVim/index.html","e1026e16762ba87562652b1c2bb3def7"],["/tags/bash/index.html","73f24e6d2a6f5d68524c2e711183beab"],["/tags/index.html","e1fe72248f03e1936ff432d6ea895859"],["/tags/ssh/index.html","668d4b477c4ff45896d5e03097e802bd"],["/tags/test/index.html","2c4fccab000fcb0e1b024499efa4f198"],["/tags/vscode/index.html","8be5d57de4a7ef7d8c71dc5762ce72ef"],["/tags/宝塔面板/index.html","231bafe687b2a880b3ab9a474fb64f34"],["/tags/每日一记/index.html","7df25df13acb5884084d64b087bbce57"],["/tags/每日一记/page/2/index.html","5d153a705bc2cb5dfa0075ba94009a40"],["/tags/翻墙/index.html","0e49428a388240fdd8a877eba4482e81"],["/tags/计算机协会/index.html","d9a4edf71c85db4d44aced391b6a7941"],["/wifi-icon.png","3616e551e69fc1d622c535ab84fec10e"]];
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




