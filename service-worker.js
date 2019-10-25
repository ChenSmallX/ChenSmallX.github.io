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

var precacheConfig = [["/2018/06/06/hello-hexo/index.html","65ce970840fc52c6309c4efdc26447c3"],["/2018/06/06/test/index.html","e35e89f8cbcf0d8fab2165bf4c63314c"],["/2018/06/07/config-of-vscode-for-c-cpp-on-macos/index.html","aebbec1356b3eb947ed834b592c10014"],["/2018/06/08/VPS-panel-VPSMate/index.html","85985e9a71fbe893cdd1fd3282330bf2"],["/2018/06/08/VPS-panel-bt/index.html","e7263beee04f22fc45fce1ff11abd3cb"],["/2018/06/08/build-shadowsocks-r-like-a-stable-dog/index.html","e2d8e24f57b598de89f57ba209144e28"],["/2018/06/08/net-optimize-for-VPS-net-speeder/index.html","ddc6068d7c2b1546f94bed426497ff1b"],["/2018/06/08/recommend-VPS-recently/index.html","bd4c3fae9128e9e23441ab9b4d1293d2"],["/2018/06/08/settings-for-a-new-or-minimal-centos/index.html","7bef12c009a8764260f71be0089349ea"],["/2018/06/09/net-optimize-for-VPS-serverspeeder/index.html","353b8c1cfc51503a3e382372e2dbeabc"],["/2018/06/13/javaprogramlanguage-personal-encountered-javautilnosuchelementexception-anomalies-and-problems-and-solutions/index.html","40e84d04c423ccb721394ed95f64430b"],["/2018/06/19/digitalocean-centos6-enable-bbr-to-upspeed/index.html","a94aa204b7ccf3556b4e375880ed7184"],["/2018/06/19/sshWarning-solution/index.html","f573d151d67a831b4bac5a4ef38f8233"],["/2018/07/03/hacknet-again/index.html","2afe07491456830f226cca070c81fe23"],["/2018/07/03/python-learning-list/index.html","653e6ef4ce8acce6e1a23f7f8c1e41b4"],["/2018/07/11/vim-caught-deadly-signal-segv/index.html","5727855d94efea69170a0982df9eff21"],["/2018/07/13/computerInstitution-summerassignment-2018/index.html","0215df547c86f3c26197811e4ba69f02"],["/2018/11/20/post-everyday-2018-11-20/index.html","b33726810bfd411a27f81d02b2451718"],["/2018/11/21/post-everyday-2018-11-21/index.html","3397560db20834b692b19f7bf50c34b9"],["/2018/11/22/VMWare-Fusion-recycle-storage/index.html","d84105587fa3ea6e4ff9f46d15b101f4"],["/2018/11/22/post-everyday-2018-11-22/index.html","640235bf4887be1f212abf1d831de6e5"],["/2018/11/23/MySQL-disorder-output-solution/index.html","59906791c6833e45b9ce4f4756f7cb52"],["/2018/11/23/post-everyday-2018-11-23/index.html","dda5fb4fb26d31e82cdbec91658cbbf1"],["/2018/11/24/post-everyday-2018-11-24/index.html","82f7cc7495fd16d971e0ccac7c18c76c"],["/2018/11/26/post-everyday-2018-11-26/index.html","cf6492f3425a6ebe3972a6c9b5ffcd61"],["/2018/11/27/post-everyday-2018-11-27/index.html","feffbe21ed607a7230dd89b15f6a81a8"],["/2018/12/04/post-everyday-2018-12-4/index.html","ebf53aba324dd554218281d4830bd63c"],["/2018/12/05/post-everyday-2018-12-5/index.html","10360f8b13dad4d6205b37ea23df6518"],["/2018/12/10/post-everyday-2018-12-10/index.html","c2084fd54526bb1567804c0e4f70fd36"],["/2019/01/25/be-expert-skills-hardware/index.html","8e9760b465daa407cb8a04a99fc4867c"],["/2019/01/25/be-expert-skills-system/index.html","a8b0300c905eed946f1a6bce51f7cf37"],["/2019/01/25/computerInstitution-winterassignment-2019/index.html","6c670ffd33570255cbbd652b82825310"],["/2019/03/13/post-everyday-2019-3-13/index.html","cb31bb5a6e68dede18f3d81d1ee07346"],["/2019/03/15/post-everyday-2019-3-15/index.html","80b69e2892b2cf3ac016c6b895e2a960"],["/2019/03/18/post-everyday-2019-3-19/index.html","ed94093a6a24d5d7193317799bbcda44"],["/2019/03/20/post-everyday-2019-3-20/index.html","62dc71a0f6d4e35af113a7704ccbbcaa"],["/2019/03/25/post-everyday-2019-3-25/index.html","c6ab361dde45f43c2eeae507193c5a46"],["/2019/03/29/post-everyday-2019-3-29/index.html","e40a53539b8091dd8b40c1058ce74da6"],["/2019/04/01/post-everyday-2019-4-1/index.html","d5a808bd5eff08d251677bbfb3755ef6"],["/2019/04/01/synology-overview/index.html","91c7e4ca20978affae0e377e2948367e"],["/2019/04/03/synology-something/index.html","f8eae01e89c9c422d69da48c1c50abe6"],["/2019/04/10/post-everyday-2019-4-10/index.html","6c27ee1ccf0e7f6d33d346661313305a"],["/2019/04/16/post-everyday-2019-4-16/index.html","440a55f4c3dccba63cf5c8e23f4a7149"],["/2019/04/23/post-everyday-2019-4-23/index.html","645d1560766711a615227ab78f58b102"],["/2019/07/24/leetcode-11-mostCapacity-boostOperation/index.html","5cfe7d66cfab896d17d477875c58ed47"],["/2019/07/24/leetcode-8-atoi/index.html","408f628b6c34365db97a4d407e05702f"],["/2019/07/25/leetcode-14-longestCommonPrefix/index.html","f37b4d83ac39e2a420d8f8ee7227735c"],["/2019/07/25/leetcode-15-threeSum/index.html","13d13f80b3851e92bc8cc5c723d5e111"],["/2019/07/25/leetcode-2-addTwoNumbers/index.html","08eb900709085d014272c94ff7c3206a"],["/2019/07/29/leetcode-20-validBracket/index.html","a90e3bbb4fb14da17db6e77268def2cd"],["/2019/07/29/leetcode-21-mergeTwoLists/index.html","bb625f0c4b2968f7d19e4aa7bdb35165"],["/2019/07/29/set-specific-language-MacOS-app/index.html","29002b865525a095ac37f21f58821574"],["/2019/07/30/leetcode-23-mergeKLists/index.html","f3d6002bc8c80a4d0e6e32ffefd7861d"],["/2019/08/01/leetcode-26-removeDuplicates/index.html","e1c3a12fd4376b6084fbe220e9ef3a9c"],["/2019/08/01/leetcode-33-search/index.html","da80657a8d320173e058db16883ba180"],["/2019/08/07/vscode-debug-C-itermNternimal/index.html","13b4142870815ed2798d7b6317016477"],["/2019/08/21/leetcode-1114-Foo-Bar/index.html","1fcb1f654395585a510a6b2580b3674c"],["/2019/08/22/leetcode-46-permute/index.html","15dfe6ce7311b827452a76d6afc3a2ab"],["/2019/09/05/leetcode-292-canWinNum/index.html","c47fd4b05f0f39f6a1e2f0498c7fd6b7"],["/2019/09/06/leetcode-344-reverseString/index.html","1d45479e5da82d6bcba0196b77df56b3"],["/2019/09/07/C-template-multi-files-compile/index.html","f0335e3b15375b9aaf88852186b4c925"],["/2019/09/07/leetcode-206-reverseList/index.html","45e060d10fcc43d929e97856406da58c"],["/2019/09/07/leetcode-557-reverseWord/index.html","5132b51f1a4b900ab0160ab2ed79bce9"],["/2019/10/25/solve-mac-mail-pop-up-bug/index.html","f638c77a990971444f386559ac2de8eb"],["/QQ20181123-094100@2x.png","902e3b5f44547e3f6266ae68943e8504"],["/about-me/index.html","f9497573991689f9be4bc78dad798b06"],["/archives/2018/06/index.html","596de2674cbd187ac64ab38b7e659db8"],["/archives/2018/06/page/2/index.html","789310c2f81439b50fb97b84569c1eaf"],["/archives/2018/07/index.html","e386a2765d21122d42c5877957b45533"],["/archives/2018/11/index.html","bdb7f080a5420414b634bb5b3b6f943b"],["/archives/2018/12/index.html","9aa4126e82c18ead7761b5f69b8ad198"],["/archives/2018/index.html","ec2e1e1837cb91fe4988d6a3c1d8c6c7"],["/archives/2018/page/2/index.html","f2f6802f1417eb0de5ab5f2e72eedd14"],["/archives/2018/page/3/index.html","5575197d358760a9c53759381343d7b0"],["/archives/2019/01/index.html","fa26eec04561be94f6ea52522aa9e2c8"],["/archives/2019/03/index.html","6d5847e05bed9be64d4ecb61d1eaff93"],["/archives/2019/04/index.html","3ed30b62bd337c517debfa73ed5a2f02"],["/archives/2019/07/index.html","8296d0c631a85e3e1034d6033ac74049"],["/archives/2019/08/index.html","83ede68cba406c165071e1b4a0010c8c"],["/archives/2019/09/index.html","2f0774374c971f791b54543c91ad5bc7"],["/archives/2019/10/index.html","868a1fbbbff4ceb04ebd4f7ad397f135"],["/archives/2019/index.html","d5baa04fed338dbc4eff1258780c349c"],["/archives/2019/page/2/index.html","f41575125701ef1660fe6ac50332c611"],["/archives/2019/page/3/index.html","350e3057679b5930e950a77cecf5e7bc"],["/archives/2019/page/4/index.html","2a46e6f5848ccf460780ac06c0be1a12"],["/archives/index.html","6a0e690ee697d469fa9602d9e07302f5"],["/archives/page/2/index.html","3bb6a06dd227a58817c8947c3a1f32b5"],["/archives/page/3/index.html","dd7feb355967c6f244ba61ccbeef6fd2"],["/archives/page/4/index.html","d60e4b94ed488928912885608bf1f44b"],["/archives/page/5/index.html","e724774e027e44f68bdf21efbfe60d7a"],["/archives/page/6/index.html","886ea58136c7e64d251a129885140fe7"],["/archives/page/7/index.html","123ac23b8b9c871a81fe79ea51047825"],["/assets/algolia/algoliasearch.js","d2d43273523febe70b3fbe4c7fb050bd"],["/assets/algolia/algoliasearch.min.js","d5ac7c786438492c5b4e9a9f8fc411ba"],["/assets/algolia/algoliasearchLite.js","81dab03a4f3d2e08cb6ebccca9f81a09"],["/assets/algolia/algoliasearchLite.min.js","01e86fe9a14b3d8270ca1867bacc7066"],["/atom.xml","5999da9d25fd2b5bca382a7a02ff0a8e"],["/baidusitemap.xml","18d36620ecfd880310941b7ff0881a9a"],["/categories/Game/index.html","dc0b32ff49d073cc0ab29f08b118642f"],["/categories/Geek-s-Work/MacOS/index.html","cd48d472e536bbb0c85a07800d1e8c52"],["/categories/Geek-s-Work/NAS/index.html","3ec6e9660c194d1547a45ed42932db23"],["/categories/Geek-s-Work/Play-with-VPS/index.html","005f6e38652c41d7abf0f6f81d2f5851"],["/categories/Geek-s-Work/VMWare-Fusion/index.html","4f4d274dd0606cf6bc0193c8d8ea0051"],["/categories/Geek-s-Work/index.html","dee558922506f7f04a5edd26644c887c"],["/categories/Geek-s-Work/page/2/index.html","8badd38f2d0490aa23bde75482468aaf"],["/categories/HEXO/index.html","27321855b45ffb1674145e13d4d46d2a"],["/categories/Linux-Learning/Ubuntu/index.html","fdc30d3e95baeb11b5cb5491f8ace732"],["/categories/Linux-Learning/index.html","3298c1cb92d1e59e4886e75e6ec1d3bb"],["/categories/My-English-Learning/index.html","f823f6f33719fee6fc26a63356ae030f"],["/categories/Programer-Walk/JAVA/index.html","1232bc8f93e453474128370cd5a799d1"],["/categories/Programer-Walk/JavaScript/index.html","1352857814bcc11ba1fe54ea104afdd7"],["/categories/Programer-Walk/MySQL/index.html","a8a38d9a1b0961ffc7dffb9403e757e7"],["/categories/Programer-Walk/OJ/index.html","f9ab11267901be5651ae94b635a271c1"],["/categories/Programer-Walk/OJ/page/2/index.html","3da01c46183490ffd4ff53b6748e3ac3"],["/categories/Programer-Walk/Programming-Tools/index.html","8b693e5ea9e310cff76468f68e60afb9"],["/categories/Programer-Walk/Python-3/index.html","9ab7dab3219548cd40863818ff8bdf34"],["/categories/Programer-Walk/index.html","2402cd74a12fbffb0699975e08a37b7a"],["/categories/Programer-Walk/page/2/index.html","5d9d1cfaadd7edc0ffc9583998b28dc6"],["/categories/index.html","a6f6355d4ff7b8627e42341c733aa695"],["/categories/每日一记/index.html","dd32eb242d5f21c93c805dd08ec0e219"],["/categories/每日一记/page/2/index.html","2491f7cbf034e2d5de2bf1b2f5c25a1f"],["/categories/计算机协会/index.html","80436edf76a4fe218b82fa811d2d03ae"],["/css/index.css","f40e8a705d4cffabc9966abe7ecf862e"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/gallery/index.html","02b8a5c525a16c3696dbc1fa6c16c22e"],["/img/Anonymous_masks_hackers_v_for_vendetta_black_background_3840x2400.jpg","ce571a3428d1522fd31f82492c945ab3"],["/img/BBRscript.png","9ebb84292ad0257c2e2f10ccc8210857"],["/img/Commands_Linux_Archlinux_Terminal_computer_system_programming_1920x1080.jpg","1d0f4dec977f2478992faade43b7b579"],["/img/Console_microsoft_windows_1920x1200.jpg","8cbb61d0b0036c6f8d17401d755cfd9f"],["/img/DOticket.jpg","a0f155fb0316c82e30d8c30527380be2"],["/img/ELECTRONICS_machine_technology_circuit_electronic_computer_technics_detail_psychedelic_abstract_pattern_5472x3648.jpg","68cfae3ed50fff3db3d710003ecc631f"],["/img/GAMING_game_video_computer_gamer_poster_2048x1152.jpg","590b2e95adb47e1d9c32b0ce53655d2f"],["/img/Gears_mechanical_technics_metal_steel_abstract_abstraction_steampunk_mechanism_machine_Engineering_gear_1920x1080.jpg","c397ba08a4d48f0d431a63b15f5c15fb"],["/img/Green_minimalistic_computers_evolution_flesh_disc_simple_2560x1600.jpg","c4b417a23c2c83768857d0d88543f53a"],["/img/HACKER_hack_hacking_internet_computer_anarchy_poster_1920x1083.jpg","b68a0e40bb43ba7fcab9bc33ecb9f348"],["/img/Hacker_hacking_hack_anarchy_virus_internet_computer_sadic_Anonymous_dark_1920x1080.jpg","db0a7fe1fe9ebe8fa1208d4894e0348c"],["/img/KVM-OVZ-XEN.png","022b91d2147df73b9045a10f5ed9d179"],["/img/MacBook_keyboard_2560x1600.jpg","a7dbe22103bbca4ac4a62bb4ef63f17e"],["/img/Minimalistic_apple_inc_2560x1600.jpg","79da60f54c9b965f6946019745a7ef44"],["/img/NAS/desktop.png","b553ddf3f3de0a6e4e14ba9beec14b04"],["/img/NAS/login.png","9d32855e18da11f360ad0204cc8ac91b"],["/img/NAS/storageManager.png","d5067be8d2771e1be4fb3639b244f0ce"],["/img/QQ20180610-2032072x.png","02ffc9ce3850ee27732ff178324d48e6"],["/img/RiME.jpg","ebaf7f4bea05e51d8b567c0497bf7aae"],["/img/Winter_Mountain_3840x2160.jpg","a8789af4556247c0a021413164200016"],["/img/after_BBR.png","06f69fc3cbf721e932a3aa7c8ebe76cf"],["/img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["/img/alipay.jpg","a5a1fdaa9b2dcbac19d7687b39f3c094"],["/img/avatar.png","6cc4a809d23e3d8946a299ae4ce4e4cd"],["/img/avator.jpg","4ec90e1270479f1f5549df4fc9e1b11a"],["/img/before_BBR.png","c1399865981bbc7d7547c43699657341"],["/img/code_background.png","498098fba4fcb1adf198ec0b4885999d"],["/img/computer_engineering_science_tech_1920x1080.jpg","9750a9696cb2fe206bfa85c164b37f21"],["/img/computers_electronics_macro_chips_integrated_circuit_heatsinks_processor_1920x1080.jpg","ff368e75aa91ea6bc7c033e714b55031"],["/img/cubecloud.png","b5d83eeded92e8a495be6199d859b230"],["/img/datagrip.png","d3b75b7a48a2c2653631447159de4e21"],["/img/gdb-code-sign-trust.png","5e1d9e829907538757db0e50022902e6"],["/img/gdb-code-sign.png","f8f12a3e9b73f0398d220cf0b52d3e7b"],["/img/goodSQL-DG.png","e21b1c961365b4fd252676e7662e5b97"],["/img/goodSQL-G.png","25abaa2aa16ec7806e47eb7cc6990f6c"],["/img/icon/AppIcon24x24@2x.png","e57974e7e9bcbfa7c781c4a6b68c329a"],["/img/icon/AppIcon27.5x27.5@2x.png","65aa90709838add203c669d2b4918947"],["/img/icon/AppIcon40x40@2x.png","315025af34fde3ed2f2307273bdc9819"],["/img/icon/AppIcon44x44@2x.png","6f7e6157e44b080ef932e058fd7a0d19"],["/img/icon/AppIcon86x86@2x.png","8b01f32921fac4c0153ada98b8dbbfa2"],["/img/icon/AppIcon98x98@2x.png","45bbd3fbe1e64a9e9bfb7ed4e268a587"],["/img/icon/GooglePlayStore.png","44c41f406e8eceed836bc86970248e80"],["/img/icon/Icon-60@2x.png","686d59262e614e4334152fd2a37edde8"],["/img/icon/Icon-60@3x.png","540b1eec63e3542dfd0a6b87eade86de"],["/img/icon/Icon-72.png","0cf96ad3f6ea7a11d1bedf23a1c97ff0"],["/img/icon/Icon-72@2x.png","cf171765d10bebd5de064fb0062beac5"],["/img/icon/Icon-76.png","87d7de28aae1891fc52d8aa8464e687c"],["/img/icon/Icon-76@2x.png","4f6de6c6057895e75b4ec474540ed63a"],["/img/icon/Icon-83.5@2x.png","4bdaf24ed1d0de820c15adaa38c5e5c3"],["/img/icon/Icon-Notification.png","37ecc35f7809d69b2146ccf1221b8c13"],["/img/icon/Icon-Notification@3x.png","db17d5c1e38b255984d953b441d0f05e"],["/img/icon/Icon-Small-40.png","c0f8a5fd80f7976ac430e33eae71387b"],["/img/icon/Icon-Small-40@2x.png","315025af34fde3ed2f2307273bdc9819"],["/img/icon/Icon-Small-50.png","c652fa24fbfee44babac5dc8e8cbde09"],["/img/icon/Icon-Small-50@2x.png","f92ee8a02961f8e65742df5534994eec"],["/img/icon/Icon-Small.png","792bec4998433d3c25b450b0c7df2e49"],["/img/icon/Icon-Small@2x.png","f20db6dd8ea3316ae4c2910343c83cb6"],["/img/icon/Icon-Small@3x.png","cc916e3dbc5b8d962de5b315093109c1"],["/img/icon/Icon.png","51e04138100e798dce0a2c7e3da2b769"],["/img/icon/Icon@2x.png","a104c87d1e0f9ca88ca7cc93b9ec1915"],["/img/icon/hdpi.png","0cf96ad3f6ea7a11d1bedf23a1c97ff0"],["/img/icon/iTunesArtwork.png","44c41f406e8eceed836bc86970248e80"],["/img/icon/iTunesArtwork@2x.png","fa97997acbb38995800d896032978aa5"],["/img/icon/ldpi.png","1014dd6fb967135fb27b9b3dadb564e8"],["/img/icon/mdpi.png","e57974e7e9bcbfa7c781c4a6b68c329a"],["/img/icon/xhdpi.png","442580ffe555286de676d42012f2de6d"],["/img/icon/xxhdpi.png","cf171765d10bebd5de064fb0062beac5"],["/img/icon/xxxhdpi.png","d4064f9e8ba8d5f00501f048188523bd"],["/img/keychain.png","d6e8ced48a44ce3d9a01cfdda1e4fa8e"],["/img/minimalistic_floppy_disks_compact_disc_disc_2560x1600.jpg","5c60da3376ee4a16404c0f72acb3beb8"],["/img/punch/20190313-listening.jpg","5ef5dee7162e714667d73ccfd41420e9"],["/img/punch/20190315-listening.jpg","9a53033e560930d17f149f5eacba67e5"],["/img/punch/20190319.jpg","cee12c362b1f0659990f4ea4be001dce"],["/img/punch/20190320-hs.jpg","faa1a013a510c0f6b78758811422c9b9"],["/img/punch/20190320.jpg","b16b7f2c413c3008e9a7d90f12b7e856"],["/img/punch/20190320_.jpg","f844503589939db75b2b518a9f7301fa"],["/img/punch/20190329.jpg","bd105efb5aca6e855f5ca6b229b998cf"],["/img/punch/20190401.jpg","2e5fa38ea1e9fde8fe4266aa869e3581"],["/img/punch/20190410.jpg","18312207baca3aec25cd4b2c99a162cf"],["/img/punch/20190423-s.jpg","f4c133c9b9606efac299ed9c2e982f43"],["/img/punch/20190423.jpg","61e875c006e966a6d3fde152c9b64c0d"],["/img/sql-null.png","f8a2143b9f8a4cea6fa5c81634e655ac"],["/img/system-privacy.png","70701871a71834c6c50b768da50bb571"],["/img/testH61.jpg","f7241e7628960136c46cea3029363eb9"],["/img/topimg.jpg","0f15f964c1d3914566d01270819c5686"],["/img/vm-recycal.png","006b9fe2147ebc9874c7a2e66deb71ec"],["/img/vscode-debug-c++.png","ee52f0e2da3a009a466834c140e75408"],["/img/wechat.jpg","f3ebdcc2d02a3b3027e71dcda179cd01"],["/img/wrongSQL.png","f54dfce3f9f991f641403a9d8be6a8dc"],["/img/地铁站.jpeg","8081fe4b11421172ec92f63fbed02921"],["/index.html","fcb1decd39ba0a0d9954a1b001b923f3"],["/js/copy.js","10b58e108593f60eb272b8ecda1f2a27"],["/js/fancybox.js","9cfc893a86a6bfc51f4db6293c4d2b08"],["/js/fireworks.js","35933ce61c158ef9c33b5e089fe757ac"],["/js/head.js","72dbb78b4e9c4cdf14fd4b8c9bd9828c"],["/js/hexo-theme-melody.js","d41d8cd98f00b204e9800998ecf8427e"],["/js/scroll.js","e2433ba220e56fa03095f6164bac719e"],["/js/search/algolia.js","53160985d32d6fd66d98aa0e05b081ac"],["/js/search/local-search.js","1565b508bd866ed6fbd724a3858af5d8"],["/js/sidebar.js","d24db780974e661198eeb2e45f20a28f"],["/js/third-party/anime.min.js","9b4bbe6deb700e1c3606eab732f5eea5"],["/js/third-party/jquery.fancybox.min.js","3c9fa1c1199cd4f874d855ecb1641335"],["/js/third-party/jquery.min.js","c9f5aeeca3ad37bf2aa006139b935f0a"],["/js/third-party/reveal/head.min.js","aad121203010122e05f1766d92385214"],["/js/third-party/reveal/highlight.min.js","44594243bec43813a16371af8fe7e105"],["/js/third-party/reveal/markdown.min.js","7ec4cef5a7fe3f0bf0eb4dc6d7bca114"],["/js/third-party/reveal/marked.min.js","c2a88705e206d71dc21fdc4445349127"],["/js/third-party/reveal/math.min.js","0a278fee2e57c530ab07f7d2d9ea8d96"],["/js/third-party/reveal/notes.min.js","89a0dfae4d706f9c75b317f686c3aa14"],["/js/third-party/reveal/reveal.min.js","8988419d67efb5fe93e291a357e26ec9"],["/js/third-party/reveal/zoom.min.js","9791f96e63e7d534cba2b67d4bda0419"],["/js/third-party/velocity.min.js","64da069aba987ea0512cf610600a56d1"],["/js/third-party/velocity.ui.min.js","c8ca438424a080620f7b2f4ee4b0fff1"],["/js/transition.js","bd261a5dda799613501070ecc19d6e69"],["/js/utils.js","3ff3423d966a1c351e9867813b3f6d36"],["/live2dw/assets/live2d-widget-model-bilibili.model.json","6b6dc90bacf5bea95e5f41732756f0f4"],["/live2dw/assets/moc/33.1024/closet.2016.xmas/texture_01.png","2bcf94bc9d9ce523fad40f254822fff0"],["/live2dw/assets/moc/33.1024/closet.2016.xmas/texture_02.png","6e34e2f4df0e4d038ecdf83a3b173cde"],["/live2dw/assets/moc/33.1024/closet.2016.xmas/texture_03_1.png","d0bbb2defaecb5d4c0ef52ab360c3265"],["/live2dw/assets/moc/33.1024/closet.2016.xmas/texture_03_2.png","eb41b0556d6d31fe17d2032b3632c778"],["/live2dw/assets/moc/33.1024/closet.2017.cba-normal/texture_01.png","cbdb60dc59b6a08c64821aaa97512742"],["/live2dw/assets/moc/33.1024/closet.2017.cba-normal/texture_02.png","13ad7bf3aa1a42a5e1dd1e2f31ea31da"],["/live2dw/assets/moc/33.1024/closet.2017.cba-normal/texture_03.png","7f42a4d361ac032cd737e695a7feba1d"],["/live2dw/assets/moc/33.1024/closet.2017.newyear/texture_01.png","f15ada8a27eb4431e81c36582ad4c5eb"],["/live2dw/assets/moc/33.1024/closet.2017.newyear/texture_02.png","7e33d1c03c5916193050f71341b4a7a8"],["/live2dw/assets/moc/33.1024/closet.2017.newyear/texture_03.png","4aa01901e8825803f713dcc936358a15"],["/live2dw/assets/moc/33.1024/closet.2017.school/texture_01.png","defcfa6952f742dda0e1db15a1a36f1a"],["/live2dw/assets/moc/33.1024/closet.2017.school/texture_02.png","4387272e066ab932ebbf3465aae7521c"],["/live2dw/assets/moc/33.1024/closet.2017.school/texture_03.png","4ad14efbe80725cd817dfea8adee4e04"],["/live2dw/assets/moc/33.1024/closet.2017.summer.normal/texture_01.png","1952c6094c4a6395fcc220ff3cb5b13e"],["/live2dw/assets/moc/33.1024/closet.2017.summer.normal/texture_02.png","0352fb78c14e385aca9404819d44ca30"],["/live2dw/assets/moc/33.1024/closet.2017.summer.normal/texture_03_1.png","27419e6883558b98d87defd1a68c042d"],["/live2dw/assets/moc/33.1024/closet.2017.summer.normal/texture_03_2.png","3b1ee34c813f7646d5c4955cc724426d"],["/live2dw/assets/moc/33.1024/closet.2017.tomo-bukatsu.high/texture_01.png","adaae15046f327ca0487b3fa7eb4a851"],["/live2dw/assets/moc/33.1024/closet.2017.tomo-bukatsu.high/texture_02.png","79b74fc078412d335029e51a60b5d52e"],["/live2dw/assets/moc/33.1024/closet.2017.tomo-bukatsu.high/texture_03.png","cae282aed0ee8820ce2466700537adce"],["/live2dw/assets/moc/33.1024/closet.2017.tomo-bukatsu.low/texture_01.png","f7787616bb8becf875eb2287cd5b75e0"],["/live2dw/assets/moc/33.1024/closet.2017.tomo-bukatsu.low/texture_02.png","29f35b59f6c42324d19f0f3ab08ba050"],["/live2dw/assets/moc/33.1024/closet.2017.tomo-bukatsu.low/texture_03.png","8fc09a82177fb337f9cc20856e46037c"],["/live2dw/assets/moc/33.1024/closet.2017.valley/texture_01.png","1a8b5d61f235847e1819f1c18bfb50be"],["/live2dw/assets/moc/33.1024/closet.2017.valley/texture_02.png","11a57782793a2932ea8c42e7affbd589"],["/live2dw/assets/moc/33.1024/closet.2017.valley/texture_03.png","97445440e605da915613e44ff7829656"],["/live2dw/assets/moc/33.1024/closet.2017.vdays/texture_01.png","e1ff4f7a54645a73a4a68b2d8d4809c4"],["/live2dw/assets/moc/33.1024/closet.2017.vdays/texture_02.png","116183fcdd5f52e08be83f17ac36f0fb"],["/live2dw/assets/moc/33.1024/closet.2017.vdays/texture_03.png","7723d023b27259ad45e09bde6c7acb79"],["/live2dw/assets/moc/33.1024/closet.2018.lover/texture_01.png","86c09cc094a2ce258562d2bcd06b1d82"],["/live2dw/assets/moc/33.1024/closet.2018.lover/texture_02.png","6582de8e686bc673ab94626a7f40de52"],["/live2dw/assets/moc/33.1024/closet.2018.lover/texture_03.png","42fb0c3df5d37d37aa9a1777501dc480"],["/live2dw/assets/moc/33.1024/closet.2018.spring/texture_01.png","2a1b2ac3471f8f62258fbf0bd369d726"],["/live2dw/assets/moc/33.1024/closet.2018.spring/texture_02.png","3b9ad7e69909bea9a4a9d31787079cbc"],["/live2dw/assets/moc/33.1024/closet.2018.spring/texture_03.png","13c77f51a6aabe3ca2d525813d6ac3c2"],["/live2dw/assets/moc/33.1024/closet.default.v2/texture_00.png","121525748ef0a5beffc4adcef1e8385f"],["/live2dw/assets/moc/33.1024/closet.default.v2/texture_01.png","45954db1e5f5703228a389e2f341b83d"],["/live2dw/assets/moc/33.1024/closet.default.v2/texture_02.png","ebad9aa8610cff82e9edbc02b8b6c6ba"],["/live2dw/assets/moc/33.1024/closet.default.v2/texture_03.png","ff84419bbde867efa962b8d9c2d3457c"],["/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["/manifest.json","394145a19a8431fcd5ce8b558f25427f"],["/page/2/index.html","3eba4d5f03cab1b099d2f3c5840108eb"],["/page/3/index.html","15e78522207b0888ae7a282bb52623e9"],["/page/4/index.html","e5fe211cbe6c7c9e5a17b2bf2823b94c"],["/page/5/index.html","7ecf579ffdf6c7e4127074690e7dd9c0"],["/page/6/index.html","1408701772f39b28bf18800bf7beaebb"],["/page/7/index.html","a323dbe1fe0766ea92d803eba807d6ea"],["/search.xml","5c0abbd1e180933c1d4402970d965c27"],["/sitemap.xml","302532f45e6a53b55955c5f38082a4dd"],["/tags/BBR/index.html","c67ad20e23af2ba372271d4c47960cd3"],["/tags/C-C/index.html","7e9ac2743d55f899c6e6d32aae0dac41"],["/tags/C/index.html","d087cb6b20977bc5b56b3ee0965bdefb"],["/tags/CentOS/index.html","afa3b9acce71f8ac1b7a59738746d45d"],["/tags/DataGrip/index.html","8e62e06f1ce00b5ba971b8cc3607c657"],["/tags/DigitalOcean/index.html","1045d56b3a1814cd77882a02b7927d6c"],["/tags/Games/index.html","33199c08c0b5ecfa0559807c12988156"],["/tags/Hacker-Game/index.html","e710ce110a1fe1237853f6416878fe30"],["/tags/Hacknet/index.html","aff09b5ee68ac10018d2e4e5c059fe3a"],["/tags/Hexo/index.html","3b740e7cc93dc9a4802b57fa5b9bd605"],["/tags/JAVA/index.html","3e6bb9f6472f6b838654e9219499347a"],["/tags/Linux/index.html","1ed448e03629e40cb39209723dc6a3e8"],["/tags/MacOS/index.html","a24236c2b4c531548430ea00e9794aba"],["/tags/MacOSX/index.html","c7e2a66b962ff6260381426d8e56bd7e"],["/tags/MySQL/index.html","5a8bad94b53c5ab05ebce2debe8a6b55"],["/tags/NAS/index.html","d1b32082b3e4b2e8ba2715702c75e3fa"],["/tags/Net-Optimize/index.html","da67e5f823879b412060510b6baef475"],["/tags/Net-Speeder/index.html","da00acd637aacb11328470b3daeb5b9a"],["/tags/OJ/index.html","2ceb3cd1b478c002d1ad68637030ccb7"],["/tags/Programming-Language/index.html","a04aef188d09a69afafe2aee1a42007b"],["/tags/Python-3/index.html","883871188582bb5283c236d6419d7063"],["/tags/ServerSpeeder/index.html","f08d373231e1b36cf1547b3c370848cf"],["/tags/Shadowsocks-R/index.html","753fc14896c855c594fc3eb58cf1d685"],["/tags/Synology/index.html","536af00a6e9bcee6785e186c9896135c"],["/tags/Ubuntu/index.html","39cf0ebd120519446efbdd59f119a480"],["/tags/Unix/index.html","a6a374659b436a07f3b9b8799300c9db"],["/tags/VMWare-Fusion/index.html","8672b97f4a57ddc1c4438a0894a150a3"],["/tags/VPS-Panel/index.html","cc3d356f25f9b9cda669c012c7f00876"],["/tags/VPS/index.html","74c86dc256fa2648ad9b47d6957178e8"],["/tags/Vim-GVim/index.html","1b13d5b54649fe10e0a30c206cb9555f"],["/tags/bash/index.html","7078372bd3d43213439b97a150375e64"],["/tags/clang/index.html","e0f09e59715411d666335a3b55292b4a"],["/tags/code-sign/index.html","4aa78bf2c9e2f244a5a14a439bd1b879"],["/tags/debug/index.html","0a458166041ff41d93dc43699cbdd760"],["/tags/gcc/index.html","d33b7eb858c1d32936d59993064c3f86"],["/tags/gdb/index.html","559a3e4ea26f621a765fed39dc1cdc51"],["/tags/index.html","941aafe19b883b49307e0bd7d4c011e2"],["/tags/leetcode/index.html","667377886b910181ee55059efc3f6ed8"],["/tags/leetcode/page/2/index.html","0fb5cfdf93636a9022c77813edd688e5"],["/tags/lldb/index.html","c79ef8f02e60d91b88d56afbf4d87a97"],["/tags/mail-app/index.html","a1ce35ca1ce707f1c9864bff15f6e2b3"],["/tags/programming-tools/index.html","dd7c7ad24adb9d3b53dc34874452b3db"],["/tags/ssh/index.html","bae24e555547ee5dbb4645e66540a37f"],["/tags/template/index.html","0194b7fc851b6de0f8e1ab37ea1484e4"],["/tags/test/index.html","8a213bf8a7bd2785dafd6e18ed8925b8"],["/tags/vscode/index.html","8718d41721b8440a0c5395c00a22ad4a"],["/tags/二分查找/index.html","2b61f9b6e3254655ed1310804c09bbad"],["/tags/分治/index.html","a39ee3f9b741ebf2473ed95df1f78463"],["/tags/剪枝/index.html","6e2bd475e44ba7fdc7fa59f23e904c16"],["/tags/去重/index.html","147b3e809d08a392555f61f2e8f60e4f"],["/tags/双指针/index.html","3a8d53a663c346150b12dc03e9f1ca66"],["/tags/多线程/index.html","8988a0a601d2dd9be9d2a90dd49e085a"],["/tags/宝塔面板/index.html","b527e278b6f6ff980184116527a44390"],["/tags/栈/index.html","130856d30016556651bbee40706c2938"],["/tags/模板/index.html","7a75b50b9475b2d4fd1f8706ebcba780"],["/tags/每日一记/index.html","8894f25cca6466ed0429f4dc74839519"],["/tags/每日一记/page/2/index.html","99ff329e43b6498c6c8e42d5ea9056ae"],["/tags/翻墙/index.html","49f2229e74eb6a05d1ed08b3d4d0d458"],["/tags/计算机协会/index.html","8ca8d4c0dbec21e06d24334d817b0785"],["/tags/递归/index.html","c2b662d5f4ae10bc3b0ec97018c5c4c7"],["/tags/遍历/index.html","286099b53519ebe6ea20d8bad92fbaf8"],["/tags/链表/index.html","7e9ddc894c779645801ea61ffcde8621"],["/tags/黑裙/index.html","5611cc8f653ef21e235db7076e3933e7"],["/tags/黑裙，NAS/index.html","f184fd47b6f5887c21c2818dcf0bbffc"],["/wifi-icon.png","3616e551e69fc1d622c535ab84fec10e"]];
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




