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

var precacheConfig = [["/2018/06/06/hello-hexo/index.html","cab5012ecd01d7454bbd9997d93ffcd3"],["/2018/06/06/test/index.html","3a0fdf68932110efcbc40096d19964e1"],["/2018/06/07/config-of-vscode-for-c-cpp-on-macos/index.html","f2d9c7eb714b969dba75904fca7e4ac7"],["/2018/06/08/VPS-panel-VPSMate/index.html","edf27b011f9983ebadf1220e7db766bd"],["/2018/06/08/VPS-panel-bt/index.html","8f07927ffc343d3ca105145ed95bf2f3"],["/2018/06/08/build-shadowsocks-r-like-a-stable-dog/index.html","362eed8342248dfb9b3bdcc53f177345"],["/2018/06/08/net-optimize-for-VPS-net-speeder/index.html","4720335a483015cc698c80faa9699e0a"],["/2018/06/08/recommend-VPS-recently/index.html","8d11e2b8a0b33de370bdec6514d6f0f0"],["/2018/06/08/settings-for-a-new-or-minimal-centos/index.html","632b68e0ef5e888263abfd7394118898"],["/2018/06/09/net-optimize-for-VPS-serverspeeder/index.html","b3dfdbb69800bb8b481e7565e16b92b4"],["/2018/06/13/javaprogramlanguage-personal-encountered-javautilnosuchelementexception-anomalies-and-problems-and-solutions/index.html","8fa51e47325b6ddbcd8fbef8ce67fa98"],["/2018/06/19/digitalocean-centos6-enable-bbr-to-upspeed/index.html","4aceff9515855b8ce62b009ce2d5dce2"],["/2018/06/19/sshWarning-solution/index.html","03aec9819e49efe68b2925b6cca9c26b"],["/2018/07/03/hacknet-again/index.html","b7be15fff7132b9e0075a02ef0ea03c6"],["/2018/07/03/python-learning-list/index.html","9033e6f1a13bc70ea619ae819d0a2b22"],["/2018/07/11/vim-caught-deadly-signal-segv/index.html","6767aec5b5f5ebcd6efa4b3244f1086c"],["/2018/07/13/computerInstitution-summerassignment-2018/index.html","4f6f55b8b1ee9b3f84489485e3ed8f3b"],["/2018/11/20/post-everyday-2018-11-20/index.html","fae473c0e8a11724f2c8e9d6ece34909"],["/2018/11/21/post-everyday-2018-11-21/index.html","d8a64be8bc01658f395f5def24448ab2"],["/2018/11/22/VMWare-Fusion-recycle-storage/index.html","70549b19b5ed2426848f7c6ed9d407d8"],["/2018/11/22/post-everyday-2018-11-22/index.html","46de86595cd7d8c92355007dcb22f70c"],["/2018/11/23/MySQL-disorder-output-solution/index.html","ddb33eceadf05ac59aa614c33280f02d"],["/2018/11/23/post-everyday-2018-11-23/index.html","db6febd0f90d76bfff226cf07496a352"],["/2018/11/24/post-everyday-2018-11-24/index.html","fd0d04ad6a723fd8a429a61b6b62176b"],["/2018/11/26/post-everyday-2018-11-26/index.html","b0c9ab78750e4c163214d52e877446a6"],["/2018/11/27/post-everyday-2018-11-27/index.html","3bf23843e200feca20da3e3bd12f163e"],["/2018/12/04/post-everyday-2018-12-4/index.html","beac487b59e69795a2d56740b25616b3"],["/2018/12/05/post-everyday-2018-12-5/index.html","d02f42c577d91f2d2929c2514c989b92"],["/2018/12/10/post-everyday-2018-12-10/index.html","ab9493042c4da2e1ff57c66680b8d357"],["/2019/01/25/be-expert-skills-hardware/index.html","94ba002c36c5c6c9a862b17a246835c3"],["/2019/01/25/be-expert-skills-system/index.html","6c3ea56e21aa43d12040ff59a9d98015"],["/2019/01/25/computerInstitution-winterassignment-2019/index.html","16713df9ca11d70c0a74c01dff5d0318"],["/2019/03/13/post-everyday-2019-3-13/index.html","cf2b4b6cd70f81f0ff4d98de1e2e0cee"],["/2019/03/15/post-everyday-2019-3-15/index.html","1359df3d7c353366d87fbb539f20ca9e"],["/2019/03/18/post-everyday-2019-3-19/index.html","83d9da7108986bb50daa5858daea2da7"],["/2019/03/20/post-everyday-2019-3-20/index.html","a77b1ecaaf472f0b1d2e9ac416fd15c3"],["/2019/03/25/post-everyday-2019-3-25/index.html","71d62e07903f774d1d315de56774061e"],["/2019/03/29/post-everyday-2019-3-29/index.html","3566b9cf7f929618a8789ccfec8684a4"],["/2019/04/01/post-everyday-2019-4-1/index.html","b5c5b433b61ec1227b90361531917c3c"],["/2019/04/01/synology-overview/index.html","1f3648ae6584cd1727c7aa28c9bb0a25"],["/2019/04/03/synology-something/index.html","fc1daa0f992ea3642d74e2e3b41b81d7"],["/2019/04/10/post-everyday-2019-4-10/index.html","6dc1a89a1d671ffb9e57154716c4f348"],["/2019/04/16/post-everyday-2019-4-16/index.html","c9b5d0c1ce5511c12027da3d42b508e4"],["/2019/04/23/post-everyday-2019-4-23/index.html","ad8261c1efab668d7441ba0b794f5fd8"],["/2019/07/24/leetcode-11-mostCapacity-boostOperation/index.html","5b30f7c70141194a954b8fecc0c0fb44"],["/2019/07/24/leetcode-8-atoi/index.html","c9734bc71ce2feb99478c46db2aed792"],["/2019/07/25/leetcode-14-longestCommonPrefix/index.html","8ee8fe4ffa2418efc9e9cfdf7899d96a"],["/2019/07/25/leetcode-15-threeSum/index.html","60ee961cfbda8334b1c9868b31797b5f"],["/2019/07/25/leetcode-2-addTwoNumbers/index.html","f4469b162bc3ce6f8dd2dfad1d726e6c"],["/2019/07/29/leetcode-20-validBracket/index.html","5425252189d5c024a9e291861e6f08c2"],["/2019/07/29/leetcode-21-mergeTwoLists/index.html","3b704da91b103060eaeb0897a8839511"],["/2019/07/29/set-specific-language-MacOS-app/index.html","26641672577b2578526fee7cc83b9b8f"],["/2019/07/30/leetcode-23-mergeKLists/index.html","744fbab4241d5552885353b78ebf387b"],["/2019/08/01/leetcode-26-removeDuplicates/index.html","02c2ef893cba261101e63b3d9d7d8225"],["/2019/08/01/leetcode-33-search/index.html","d147978a0456ed33d7f609e53f03af90"],["/2019/08/07/vscode-debug-C-itermNternimal/index.html","2ec021d9b04129e62f72548e4adfb3ee"],["/2019/08/21/leetcode-1114-Foo-Bar/index.html","4b59ae2e1a5d92d68abb23e41c31c536"],["/2019/08/22/leetcode-46-permute/index.html","4a5c99c674512c8b745ab4237229ecd2"],["/2019/09/05/leetcode-292-canWinNum/index.html","0fc6c93ea0d9f1a55a79a13e040937ba"],["/2019/09/06/leetcode-344-reverseString/index.html","5704e3108516c72d47a629b473c42870"],["/2019/09/07/C-template-multi-files-compile/index.html","953798d65472c87dc03159188730c1dc"],["/2019/09/07/leetcode-206-reverseList/index.html","7fb919c1e86c39fc4d0c75f7013fd048"],["/2019/09/07/leetcode-557-reverseWord/index.html","97d5a38cfb4b1950a58376b6a211b06d"],["/QQ20181123-094100@2x.png","902e3b5f44547e3f6266ae68943e8504"],["/about-me/index.html","f8cab3efba9c7de1e8d74de6fd4a130b"],["/archives/2018/06/index.html","a9756ada3c4186d7ac0a846121c9caaf"],["/archives/2018/06/page/2/index.html","622c43a4433990f050c2d0799a1aca68"],["/archives/2018/07/index.html","eeae6e38d472ce27d488074ff307eb46"],["/archives/2018/11/index.html","494f792d995d8a9fab4d393a4477fcd0"],["/archives/2018/12/index.html","3b22a3468f274dd1df7c3b4a40970212"],["/archives/2018/index.html","ed0d4acc6de6a388c5b33d12721831b7"],["/archives/2018/page/2/index.html","3b5fb392898bd1c56e0615b7f2ba209a"],["/archives/2018/page/3/index.html","42d7de8a9ada1d48f6baa7a6c8a3918e"],["/archives/2019/01/index.html","28b32ec456e9d5478eb185fd176a2bd6"],["/archives/2019/03/index.html","d3e26ccb6382a3057b4e3d2010cf51af"],["/archives/2019/04/index.html","8817b6c98ddbe3c73fe2f7b8a4a1b3cc"],["/archives/2019/07/index.html","d068d75096e9d79a31be90fef4e5aa38"],["/archives/2019/08/index.html","3bf0a04aab15fb38cb0781c2135cef01"],["/archives/2019/09/index.html","7464596c716be9271cca5338c1a1fa5c"],["/archives/2019/index.html","ae861c261eac2e3e2caee16b35cfb333"],["/archives/2019/page/2/index.html","d4a5689542006d347a59e391e60da4f1"],["/archives/2019/page/3/index.html","74db356c9d9d9d39a681522bd01c9546"],["/archives/2019/page/4/index.html","59fbcf5e41090f06f3ba0dad567fa3f8"],["/archives/index.html","7163f1d94b95afb9dff72552322879ef"],["/archives/page/2/index.html","a790ac54e50217291ab25c353a048893"],["/archives/page/3/index.html","dfa46d6e6f28a51266dcc1a041113616"],["/archives/page/4/index.html","f4c7494501b8676f3baab9c2948b8f81"],["/archives/page/5/index.html","b125740f888b2ebc5a210b23a0d3c9f8"],["/archives/page/6/index.html","f3b3cdfe4a156be6194e3633c5d552bb"],["/archives/page/7/index.html","363651832777c4fba6a7a8d0364d0429"],["/assets/algolia/algoliasearch.js","d2d43273523febe70b3fbe4c7fb050bd"],["/assets/algolia/algoliasearch.min.js","d5ac7c786438492c5b4e9a9f8fc411ba"],["/assets/algolia/algoliasearchLite.js","81dab03a4f3d2e08cb6ebccca9f81a09"],["/assets/algolia/algoliasearchLite.min.js","01e86fe9a14b3d8270ca1867bacc7066"],["/atom.xml","b5e6c404fe83cad807d93cb85ea0736b"],["/baidusitemap.xml","085627371c19d681ba779c2805e97280"],["/categories/Game/index.html","c6f147bc9c7030f60a007d6bbeb20f7e"],["/categories/Geek-s-Work/NAS/index.html","f90edbe0a77a95df269f580e0c267117"],["/categories/Geek-s-Work/Play-with-VPS/index.html","6e6d17bcc96cd11c69a89229d45f0149"],["/categories/Geek-s-Work/VMWare-Fusion/index.html","e8458044897f75e6056e032e497270bf"],["/categories/Geek-s-Work/index.html","7357d785d6404a5a58af4f4426d41c44"],["/categories/Geek-s-Work/page/2/index.html","d533a5b6c8560ad3cd60b1570b4259d6"],["/categories/HEXO/index.html","1e5d797a44d216d3e0c9fbc353284f10"],["/categories/Linux-Learning/Ubuntu/index.html","7ef17d5b42934531f1668105e70a7647"],["/categories/Linux-Learning/index.html","1d33bfea840ce71595b0f43e5ddd9b1e"],["/categories/My-English-Learning/index.html","af118fcf8386459fecaa1227562c0331"],["/categories/Programer-Walk/JAVA/index.html","540a279b1213e00f09373c021010d375"],["/categories/Programer-Walk/JavaScript/index.html","6b4313f22cb550a860a9963808a1df28"],["/categories/Programer-Walk/MySQL/index.html","228f22b397603c5dc5140f786ff773de"],["/categories/Programer-Walk/OJ/index.html","9131c162b916efa2d061722aacb634d6"],["/categories/Programer-Walk/OJ/page/2/index.html","4e495abcf703197372408810b830c5f0"],["/categories/Programer-Walk/Programming-Tools/index.html","008d68fb5adfc933ffb4a155d86f137f"],["/categories/Programer-Walk/Python-3/index.html","8d2a966d3845df22219dab51b6f1be7d"],["/categories/Programer-Walk/index.html","4efec20207ed60c0b313ae30e9b68122"],["/categories/Programer-Walk/page/2/index.html","f1daa987aa4dcef09be2df3a9a96b678"],["/categories/index.html","631a712b962e2b29b108264559240378"],["/categories/每日一记/index.html","3327f3705706a9dbfc9ca7b47cc8bb7a"],["/categories/每日一记/page/2/index.html","f334ed4eb3532b04e11293d9d5ff241f"],["/categories/计算机协会/index.html","2bb1f1bd702e6ed2a5c01fc77f4d70b4"],["/css/index.css","f40e8a705d4cffabc9966abe7ecf862e"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/gallery/index.html","a810193316a8a6fd341236a3d52a6a97"],["/img/Anonymous_masks_hackers_v_for_vendetta_black_background_3840x2400.jpg","ce571a3428d1522fd31f82492c945ab3"],["/img/BBRscript.png","9ebb84292ad0257c2e2f10ccc8210857"],["/img/Commands_Linux_Archlinux_Terminal_computer_system_programming_1920x1080.jpg","1d0f4dec977f2478992faade43b7b579"],["/img/Console_microsoft_windows_1920x1200.jpg","8cbb61d0b0036c6f8d17401d755cfd9f"],["/img/DOticket.jpg","a0f155fb0316c82e30d8c30527380be2"],["/img/ELECTRONICS_machine_technology_circuit_electronic_computer_technics_detail_psychedelic_abstract_pattern_5472x3648.jpg","68cfae3ed50fff3db3d710003ecc631f"],["/img/GAMING_game_video_computer_gamer_poster_2048x1152.jpg","590b2e95adb47e1d9c32b0ce53655d2f"],["/img/Gears_mechanical_technics_metal_steel_abstract_abstraction_steampunk_mechanism_machine_Engineering_gear_1920x1080.jpg","c397ba08a4d48f0d431a63b15f5c15fb"],["/img/Green_minimalistic_computers_evolution_flesh_disc_simple_2560x1600.jpg","c4b417a23c2c83768857d0d88543f53a"],["/img/HACKER_hack_hacking_internet_computer_anarchy_poster_1920x1083.jpg","b68a0e40bb43ba7fcab9bc33ecb9f348"],["/img/Hacker_hacking_hack_anarchy_virus_internet_computer_sadic_Anonymous_dark_1920x1080.jpg","db0a7fe1fe9ebe8fa1208d4894e0348c"],["/img/KVM-OVZ-XEN.png","022b91d2147df73b9045a10f5ed9d179"],["/img/MacBook_keyboard_2560x1600.jpg","a7dbe22103bbca4ac4a62bb4ef63f17e"],["/img/Minimalistic_apple_inc_2560x1600.jpg","79da60f54c9b965f6946019745a7ef44"],["/img/NAS/desktop.png","b553ddf3f3de0a6e4e14ba9beec14b04"],["/img/NAS/login.png","9d32855e18da11f360ad0204cc8ac91b"],["/img/NAS/storageManager.png","d5067be8d2771e1be4fb3639b244f0ce"],["/img/QQ20180610-2032072x.png","02ffc9ce3850ee27732ff178324d48e6"],["/img/RiME.jpg","ebaf7f4bea05e51d8b567c0497bf7aae"],["/img/Winter_Mountain_3840x2160.jpg","a8789af4556247c0a021413164200016"],["/img/after_BBR.png","06f69fc3cbf721e932a3aa7c8ebe76cf"],["/img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["/img/alipay.jpg","a5a1fdaa9b2dcbac19d7687b39f3c094"],["/img/avatar.png","6cc4a809d23e3d8946a299ae4ce4e4cd"],["/img/avator.jpg","4ec90e1270479f1f5549df4fc9e1b11a"],["/img/before_BBR.png","c1399865981bbc7d7547c43699657341"],["/img/code_background.png","498098fba4fcb1adf198ec0b4885999d"],["/img/computer_engineering_science_tech_1920x1080.jpg","9750a9696cb2fe206bfa85c164b37f21"],["/img/computers_electronics_macro_chips_integrated_circuit_heatsinks_processor_1920x1080.jpg","ff368e75aa91ea6bc7c033e714b55031"],["/img/cubecloud.png","b5d83eeded92e8a495be6199d859b230"],["/img/datagrip.png","d3b75b7a48a2c2653631447159de4e21"],["/img/gdb-code-sign-trust.png","5e1d9e829907538757db0e50022902e6"],["/img/gdb-code-sign.png","f8f12a3e9b73f0398d220cf0b52d3e7b"],["/img/goodSQL-DG.png","e21b1c961365b4fd252676e7662e5b97"],["/img/goodSQL-G.png","25abaa2aa16ec7806e47eb7cc6990f6c"],["/img/icon/AppIcon24x24@2x.png","e57974e7e9bcbfa7c781c4a6b68c329a"],["/img/icon/AppIcon27.5x27.5@2x.png","65aa90709838add203c669d2b4918947"],["/img/icon/AppIcon40x40@2x.png","315025af34fde3ed2f2307273bdc9819"],["/img/icon/AppIcon44x44@2x.png","6f7e6157e44b080ef932e058fd7a0d19"],["/img/icon/AppIcon86x86@2x.png","8b01f32921fac4c0153ada98b8dbbfa2"],["/img/icon/AppIcon98x98@2x.png","45bbd3fbe1e64a9e9bfb7ed4e268a587"],["/img/icon/GooglePlayStore.png","44c41f406e8eceed836bc86970248e80"],["/img/icon/Icon-60@2x.png","686d59262e614e4334152fd2a37edde8"],["/img/icon/Icon-60@3x.png","540b1eec63e3542dfd0a6b87eade86de"],["/img/icon/Icon-72.png","0cf96ad3f6ea7a11d1bedf23a1c97ff0"],["/img/icon/Icon-72@2x.png","cf171765d10bebd5de064fb0062beac5"],["/img/icon/Icon-76.png","87d7de28aae1891fc52d8aa8464e687c"],["/img/icon/Icon-76@2x.png","4f6de6c6057895e75b4ec474540ed63a"],["/img/icon/Icon-83.5@2x.png","4bdaf24ed1d0de820c15adaa38c5e5c3"],["/img/icon/Icon-Notification.png","37ecc35f7809d69b2146ccf1221b8c13"],["/img/icon/Icon-Notification@3x.png","db17d5c1e38b255984d953b441d0f05e"],["/img/icon/Icon-Small-40.png","c0f8a5fd80f7976ac430e33eae71387b"],["/img/icon/Icon-Small-40@2x.png","315025af34fde3ed2f2307273bdc9819"],["/img/icon/Icon-Small-50.png","c652fa24fbfee44babac5dc8e8cbde09"],["/img/icon/Icon-Small-50@2x.png","f92ee8a02961f8e65742df5534994eec"],["/img/icon/Icon-Small.png","792bec4998433d3c25b450b0c7df2e49"],["/img/icon/Icon-Small@2x.png","f20db6dd8ea3316ae4c2910343c83cb6"],["/img/icon/Icon-Small@3x.png","cc916e3dbc5b8d962de5b315093109c1"],["/img/icon/Icon.png","51e04138100e798dce0a2c7e3da2b769"],["/img/icon/Icon@2x.png","a104c87d1e0f9ca88ca7cc93b9ec1915"],["/img/icon/hdpi.png","0cf96ad3f6ea7a11d1bedf23a1c97ff0"],["/img/icon/iTunesArtwork.png","44c41f406e8eceed836bc86970248e80"],["/img/icon/iTunesArtwork@2x.png","fa97997acbb38995800d896032978aa5"],["/img/icon/ldpi.png","1014dd6fb967135fb27b9b3dadb564e8"],["/img/icon/mdpi.png","e57974e7e9bcbfa7c781c4a6b68c329a"],["/img/icon/xhdpi.png","442580ffe555286de676d42012f2de6d"],["/img/icon/xxhdpi.png","cf171765d10bebd5de064fb0062beac5"],["/img/icon/xxxhdpi.png","d4064f9e8ba8d5f00501f048188523bd"],["/img/keychain.png","d6e8ced48a44ce3d9a01cfdda1e4fa8e"],["/img/minimalistic_floppy_disks_compact_disc_disc_2560x1600.jpg","5c60da3376ee4a16404c0f72acb3beb8"],["/img/punch/20190313-listening.jpg","5ef5dee7162e714667d73ccfd41420e9"],["/img/punch/20190315-listening.jpg","9a53033e560930d17f149f5eacba67e5"],["/img/punch/20190319.jpg","cee12c362b1f0659990f4ea4be001dce"],["/img/punch/20190320-hs.jpg","faa1a013a510c0f6b78758811422c9b9"],["/img/punch/20190320.jpg","b16b7f2c413c3008e9a7d90f12b7e856"],["/img/punch/20190320_.jpg","f844503589939db75b2b518a9f7301fa"],["/img/punch/20190329.jpg","bd105efb5aca6e855f5ca6b229b998cf"],["/img/punch/20190401.jpg","2e5fa38ea1e9fde8fe4266aa869e3581"],["/img/punch/20190410.jpg","18312207baca3aec25cd4b2c99a162cf"],["/img/punch/20190423-s.jpg","f4c133c9b9606efac299ed9c2e982f43"],["/img/punch/20190423.jpg","61e875c006e966a6d3fde152c9b64c0d"],["/img/sql-null.png","f8a2143b9f8a4cea6fa5c81634e655ac"],["/img/system-privacy.png","70701871a71834c6c50b768da50bb571"],["/img/testH61.jpg","f7241e7628960136c46cea3029363eb9"],["/img/topimg.jpg","0f15f964c1d3914566d01270819c5686"],["/img/vm-recycal.png","006b9fe2147ebc9874c7a2e66deb71ec"],["/img/vscode-debug-c++.png","ee52f0e2da3a009a466834c140e75408"],["/img/wechat.jpg","f3ebdcc2d02a3b3027e71dcda179cd01"],["/img/wrongSQL.png","f54dfce3f9f991f641403a9d8be6a8dc"],["/img/地铁站.jpeg","8081fe4b11421172ec92f63fbed02921"],["/index.html","84311faf7eebfb26e86277843732ba87"],["/js/copy.js","10b58e108593f60eb272b8ecda1f2a27"],["/js/fancybox.js","9cfc893a86a6bfc51f4db6293c4d2b08"],["/js/fireworks.js","35933ce61c158ef9c33b5e089fe757ac"],["/js/head.js","72dbb78b4e9c4cdf14fd4b8c9bd9828c"],["/js/hexo-theme-melody.js","d41d8cd98f00b204e9800998ecf8427e"],["/js/scroll.js","e2433ba220e56fa03095f6164bac719e"],["/js/search/algolia.js","53160985d32d6fd66d98aa0e05b081ac"],["/js/search/local-search.js","1565b508bd866ed6fbd724a3858af5d8"],["/js/sidebar.js","d24db780974e661198eeb2e45f20a28f"],["/js/third-party/anime.min.js","9b4bbe6deb700e1c3606eab732f5eea5"],["/js/third-party/jquery.fancybox.min.js","3c9fa1c1199cd4f874d855ecb1641335"],["/js/third-party/jquery.min.js","c9f5aeeca3ad37bf2aa006139b935f0a"],["/js/third-party/reveal/head.min.js","aad121203010122e05f1766d92385214"],["/js/third-party/reveal/highlight.min.js","44594243bec43813a16371af8fe7e105"],["/js/third-party/reveal/markdown.min.js","7ec4cef5a7fe3f0bf0eb4dc6d7bca114"],["/js/third-party/reveal/marked.min.js","c2a88705e206d71dc21fdc4445349127"],["/js/third-party/reveal/math.min.js","0a278fee2e57c530ab07f7d2d9ea8d96"],["/js/third-party/reveal/notes.min.js","89a0dfae4d706f9c75b317f686c3aa14"],["/js/third-party/reveal/reveal.min.js","8988419d67efb5fe93e291a357e26ec9"],["/js/third-party/reveal/zoom.min.js","9791f96e63e7d534cba2b67d4bda0419"],["/js/third-party/velocity.min.js","64da069aba987ea0512cf610600a56d1"],["/js/third-party/velocity.ui.min.js","c8ca438424a080620f7b2f4ee4b0fff1"],["/js/transition.js","bd261a5dda799613501070ecc19d6e69"],["/js/utils.js","3ff3423d966a1c351e9867813b3f6d36"],["/live2dw/assets/live2d-widget-model-bilibili.model.json","6b6dc90bacf5bea95e5f41732756f0f4"],["/live2dw/assets/moc/33.1024/closet.2016.xmas/texture_01.png","2bcf94bc9d9ce523fad40f254822fff0"],["/live2dw/assets/moc/33.1024/closet.2016.xmas/texture_02.png","6e34e2f4df0e4d038ecdf83a3b173cde"],["/live2dw/assets/moc/33.1024/closet.2016.xmas/texture_03_1.png","d0bbb2defaecb5d4c0ef52ab360c3265"],["/live2dw/assets/moc/33.1024/closet.2016.xmas/texture_03_2.png","eb41b0556d6d31fe17d2032b3632c778"],["/live2dw/assets/moc/33.1024/closet.2017.cba-normal/texture_01.png","cbdb60dc59b6a08c64821aaa97512742"],["/live2dw/assets/moc/33.1024/closet.2017.cba-normal/texture_02.png","13ad7bf3aa1a42a5e1dd1e2f31ea31da"],["/live2dw/assets/moc/33.1024/closet.2017.cba-normal/texture_03.png","7f42a4d361ac032cd737e695a7feba1d"],["/live2dw/assets/moc/33.1024/closet.2017.newyear/texture_01.png","f15ada8a27eb4431e81c36582ad4c5eb"],["/live2dw/assets/moc/33.1024/closet.2017.newyear/texture_02.png","7e33d1c03c5916193050f71341b4a7a8"],["/live2dw/assets/moc/33.1024/closet.2017.newyear/texture_03.png","4aa01901e8825803f713dcc936358a15"],["/live2dw/assets/moc/33.1024/closet.2017.school/texture_01.png","defcfa6952f742dda0e1db15a1a36f1a"],["/live2dw/assets/moc/33.1024/closet.2017.school/texture_02.png","4387272e066ab932ebbf3465aae7521c"],["/live2dw/assets/moc/33.1024/closet.2017.school/texture_03.png","4ad14efbe80725cd817dfea8adee4e04"],["/live2dw/assets/moc/33.1024/closet.2017.summer.normal/texture_01.png","1952c6094c4a6395fcc220ff3cb5b13e"],["/live2dw/assets/moc/33.1024/closet.2017.summer.normal/texture_02.png","0352fb78c14e385aca9404819d44ca30"],["/live2dw/assets/moc/33.1024/closet.2017.summer.normal/texture_03_1.png","27419e6883558b98d87defd1a68c042d"],["/live2dw/assets/moc/33.1024/closet.2017.summer.normal/texture_03_2.png","3b1ee34c813f7646d5c4955cc724426d"],["/live2dw/assets/moc/33.1024/closet.2017.tomo-bukatsu.high/texture_01.png","adaae15046f327ca0487b3fa7eb4a851"],["/live2dw/assets/moc/33.1024/closet.2017.tomo-bukatsu.high/texture_02.png","79b74fc078412d335029e51a60b5d52e"],["/live2dw/assets/moc/33.1024/closet.2017.tomo-bukatsu.high/texture_03.png","cae282aed0ee8820ce2466700537adce"],["/live2dw/assets/moc/33.1024/closet.2017.tomo-bukatsu.low/texture_01.png","f7787616bb8becf875eb2287cd5b75e0"],["/live2dw/assets/moc/33.1024/closet.2017.tomo-bukatsu.low/texture_02.png","29f35b59f6c42324d19f0f3ab08ba050"],["/live2dw/assets/moc/33.1024/closet.2017.tomo-bukatsu.low/texture_03.png","8fc09a82177fb337f9cc20856e46037c"],["/live2dw/assets/moc/33.1024/closet.2017.valley/texture_01.png","1a8b5d61f235847e1819f1c18bfb50be"],["/live2dw/assets/moc/33.1024/closet.2017.valley/texture_02.png","11a57782793a2932ea8c42e7affbd589"],["/live2dw/assets/moc/33.1024/closet.2017.valley/texture_03.png","97445440e605da915613e44ff7829656"],["/live2dw/assets/moc/33.1024/closet.2017.vdays/texture_01.png","e1ff4f7a54645a73a4a68b2d8d4809c4"],["/live2dw/assets/moc/33.1024/closet.2017.vdays/texture_02.png","116183fcdd5f52e08be83f17ac36f0fb"],["/live2dw/assets/moc/33.1024/closet.2017.vdays/texture_03.png","7723d023b27259ad45e09bde6c7acb79"],["/live2dw/assets/moc/33.1024/closet.2018.lover/texture_01.png","86c09cc094a2ce258562d2bcd06b1d82"],["/live2dw/assets/moc/33.1024/closet.2018.lover/texture_02.png","6582de8e686bc673ab94626a7f40de52"],["/live2dw/assets/moc/33.1024/closet.2018.lover/texture_03.png","42fb0c3df5d37d37aa9a1777501dc480"],["/live2dw/assets/moc/33.1024/closet.2018.spring/texture_01.png","2a1b2ac3471f8f62258fbf0bd369d726"],["/live2dw/assets/moc/33.1024/closet.2018.spring/texture_02.png","3b9ad7e69909bea9a4a9d31787079cbc"],["/live2dw/assets/moc/33.1024/closet.2018.spring/texture_03.png","13c77f51a6aabe3ca2d525813d6ac3c2"],["/live2dw/assets/moc/33.1024/closet.default.v2/texture_00.png","121525748ef0a5beffc4adcef1e8385f"],["/live2dw/assets/moc/33.1024/closet.default.v2/texture_01.png","45954db1e5f5703228a389e2f341b83d"],["/live2dw/assets/moc/33.1024/closet.default.v2/texture_02.png","ebad9aa8610cff82e9edbc02b8b6c6ba"],["/live2dw/assets/moc/33.1024/closet.default.v2/texture_03.png","ff84419bbde867efa962b8d9c2d3457c"],["/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["/manifest.json","394145a19a8431fcd5ce8b558f25427f"],["/page/2/index.html","abf160b39f254ec7bc55d67eb8345372"],["/page/3/index.html","a153a686581cb0fff6cb9d3246ae6e12"],["/page/4/index.html","88fe3d70ac1d7c20cd22f0bd987b28be"],["/page/5/index.html","6f987e7581ab2d1c0c2a17251270181b"],["/page/6/index.html","fc36ecd24fd7fa2c60241c84c7e93be8"],["/page/7/index.html","aa672f1128e24aa0bd15860e69095566"],["/search.xml","656bdaa403707220674f9f11ad8804ec"],["/sitemap.xml","3cfad62000d4a630c0e5bca5e5d18258"],["/tags/BBR/index.html","17622c6f6dfc0b4b91fab1782afede00"],["/tags/C-C/index.html","8f811aef5ee6b66c86bc457c9414b392"],["/tags/C/index.html","db49c4c7f6a2ead89df89eaf9b836920"],["/tags/CentOS/index.html","db37a52dc3e16771da8067b125447757"],["/tags/DataGrip/index.html","435eb21b268892b343dbcf2e5affb601"],["/tags/DigitalOcean/index.html","e49aa7cbbe92c3678e9aabf2b5c8157e"],["/tags/Games/index.html","367f82d8ddb0a85a8b1348aeef183c19"],["/tags/Hacker-Game/index.html","b7d37f1ac4d37df7648adf4effaa9b13"],["/tags/Hacknet/index.html","91bc0164f9469184acaa2006d0ce3b48"],["/tags/Hexo/index.html","9d7274e8b03930ccbc5705712a31b6bf"],["/tags/JAVA/index.html","310330243a895c5965e4b7f8a6d5b733"],["/tags/Linux/index.html","495aae644ae532ec340daa7624176a68"],["/tags/MacOS/index.html","9a4e8136c97dd4461219e254fd854c8e"],["/tags/MacOSX/index.html","31e93384f19ba4922c2098a10a76d403"],["/tags/MySQL/index.html","4fb6322a7b48ba5bf687f03f914615c2"],["/tags/NAS/index.html","fa66d8c8476762e920bbf287754b4378"],["/tags/Net-Optimize/index.html","7dcc552202f42c4c74e40dc5ccf4a29d"],["/tags/Net-Speeder/index.html","01cb1c5ab6dcfbb435a093fcb46a0336"],["/tags/OJ/index.html","f7fefc01965b4f3bf1c7871f1839e382"],["/tags/Programming-Language/index.html","746df9bae0b0cbc412912e1726b26ce8"],["/tags/Python-3/index.html","97ce09654aa65e81c01a3985e8c3b2f3"],["/tags/ServerSpeeder/index.html","bf4c2f7554880e1463157ff3e741bc6c"],["/tags/Shadowsocks-R/index.html","18b81162e7831631c112960c1a9e4196"],["/tags/Synology/index.html","6e4aa7fb977b72e59097be4cbad55530"],["/tags/Ubuntu/index.html","352e1993b38c402eb989ec599cf95324"],["/tags/Unix/index.html","9f26b4f5ec6217933f3f53162e13c567"],["/tags/VMWare-Fusion/index.html","b85acbf9ac67e46d901db3a2d03f49fd"],["/tags/VPS-Panel/index.html","ac17e038f5c50a06cb1abe9eb4a49b3d"],["/tags/VPS/index.html","502a0e954e6febe500e7e6f425df279d"],["/tags/Vim-GVim/index.html","ba6ee78550686933d8c6d291431d4823"],["/tags/bash/index.html","12a3088d57d9db554617cf930a0c80c3"],["/tags/clang/index.html","f7c5f94490165b2d9934a739217dc84d"],["/tags/code-sign/index.html","08ded96d0f304709c65c07ad321d72f8"],["/tags/debug/index.html","3fe66af2ebb9499672d5c503f740c1c7"],["/tags/gcc/index.html","61817aacb3a1489cde5b0a588a8f5851"],["/tags/gdb/index.html","7fc8ccdaed54d7ce74fdd56fef1390f2"],["/tags/index.html","2ba021a486b253d4fe5508871c0272c1"],["/tags/leetcode/index.html","f84729e00c7cf2682f75cded0d6be13f"],["/tags/leetcode/page/2/index.html","fe1e5ffe7183d8d636785ea10abed60a"],["/tags/lldb/index.html","ce479f18e190ca4bac3643e06b9e6de9"],["/tags/programming-tools/index.html","7a6c11f091d7fa8262ab60738cea74cd"],["/tags/ssh/index.html","aaea951fd9c5d365182fb10b702e6eee"],["/tags/template/index.html","3c4ee5a81fef19c898eb2a4cfff37a99"],["/tags/test/index.html","51072382d5503ab331e8dded8915550c"],["/tags/vscode/index.html","f0709d3f834e7ad13c362873b3873dee"],["/tags/二分查找/index.html","c8cdd2e3d84c1eef26fb489962a9d9c4"],["/tags/分治/index.html","412efe9e77814ce242c1549ac2af98a5"],["/tags/剪枝/index.html","87f7fa6d83cecdd27524e9120c2ea27e"],["/tags/去重/index.html","e962c2dbc1c55e1801d835146bae11da"],["/tags/双指针/index.html","f5444d31b636e4bb170bfa3a1af77c1d"],["/tags/多线程/index.html","3806dbb51febc1bfa6e6af40ed7e73fe"],["/tags/宝塔面板/index.html","ed1fed6485603c1da890d05ce815bd02"],["/tags/栈/index.html","1cd95a60045b998104d7e3c29d815964"],["/tags/模板/index.html","9436f159ae5c9e2c3e6a82c631c9a6f7"],["/tags/每日一记/index.html","a33c510322167851392d81806944a3bf"],["/tags/每日一记/page/2/index.html","b9fd49df734f70626d5db8e9603180fb"],["/tags/翻墙/index.html","b78708a9b56045eb03297ef0061de2fc"],["/tags/计算机协会/index.html","511305297729bd8e055d63c131ca7e79"],["/tags/递归/index.html","b660b16b5bd2e65282524766fd5e496c"],["/tags/遍历/index.html","bff6299dfd468960b0306fbfaded8eb2"],["/tags/链表/index.html","cd606a378841e109c67418bffb591bb6"],["/tags/黑裙/index.html","851ec67f22589d1a7f01135581f94791"],["/tags/黑裙，NAS/index.html","cfe46932e2baff7c9e17acd8d4d5ad40"],["/wifi-icon.png","3616e551e69fc1d622c535ab84fec10e"]];
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




