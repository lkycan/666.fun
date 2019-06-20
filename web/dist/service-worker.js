/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "ce90893899e82f1b12323ac2c90bd77e"
  },
  {
    "url": "assets/css/0.styles.9dbddc83.css",
    "revision": "fbc5f1cad90cc763d79da19c9462455d"
  },
  {
    "url": "assets/img/dag-ledger.a28affa8.png",
    "revision": "a28affa8f917fb74c75a899d6db05905"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/1.289befdc.js",
    "revision": "a12921e77c1e0063c82859ed27a97883"
  },
  {
    "url": "assets/js/10.3627dc86.js",
    "revision": "3f6e28e7298c9b7f91e62e35da33157d"
  },
  {
    "url": "assets/js/11.0987cf63.js",
    "revision": "2f65c4662d3db3393e711ab9361d2ada"
  },
  {
    "url": "assets/js/12.82c6f835.js",
    "revision": "267bfba4da82bd083f4a4ffdf8a513c5"
  },
  {
    "url": "assets/js/13.a80a5a37.js",
    "revision": "4028afec1a44e16ae21b83fb91dc71e7"
  },
  {
    "url": "assets/js/14.d390f948.js",
    "revision": "d82d3b7144cee956e3e684badb50517a"
  },
  {
    "url": "assets/js/15.ebf63688.js",
    "revision": "fed9bebcdb008fc01b2261129c91d942"
  },
  {
    "url": "assets/js/16.d5330953.js",
    "revision": "afb5f8bef6141eb0d7a780820f8f50ce"
  },
  {
    "url": "assets/js/17.3d0e0127.js",
    "revision": "266387cd7b659713faed682bc0dbb196"
  },
  {
    "url": "assets/js/18.bf08beb9.js",
    "revision": "dd9480fa6b04903ad3f2deb9aba46d21"
  },
  {
    "url": "assets/js/19.40a673a2.js",
    "revision": "deff7e65d89befd10a156baef61246bc"
  },
  {
    "url": "assets/js/20.48ba6bc8.js",
    "revision": "1d703bd2e27eb327167853582ffec2a2"
  },
  {
    "url": "assets/js/21.dfb83714.js",
    "revision": "1d783c1aed2df9f2e8c89293809f513d"
  },
  {
    "url": "assets/js/22.c80641cc.js",
    "revision": "111eb50d59a1e622ed360ec5ace30eb1"
  },
  {
    "url": "assets/js/23.bfa329b6.js",
    "revision": "aaca7550b208bb14b8fbbed8664be7b9"
  },
  {
    "url": "assets/js/24.f54fc2e2.js",
    "revision": "6d91584d2507286bba48e61a2d3afadc"
  },
  {
    "url": "assets/js/25.3b95db7a.js",
    "revision": "9b2b6200d7bb21af6eea320b1ae7971b"
  },
  {
    "url": "assets/js/26.b96e229c.js",
    "revision": "0d3bd0f351065e446f7f0027c58dcaaf"
  },
  {
    "url": "assets/js/3.62b70ef5.js",
    "revision": "4d70365f2cdcdd249a1f70207b752cb3"
  },
  {
    "url": "assets/js/4.8ebce26d.js",
    "revision": "e3ab1a510fb784219542149814517445"
  },
  {
    "url": "assets/js/5.cd597305.js",
    "revision": "9c10226d212409da1a15dda22f4f4a0c"
  },
  {
    "url": "assets/js/6.36c3d131.js",
    "revision": "e6833baebf970232e84fa77de250aad2"
  },
  {
    "url": "assets/js/7.a85c8183.js",
    "revision": "bf34d5fc8eae25170b74c725cb456482"
  },
  {
    "url": "assets/js/8.5a8aa820.js",
    "revision": "a9a789aeedcade672ce713eb60ec9e00"
  },
  {
    "url": "assets/js/9.205879ea.js",
    "revision": "e7c6acccebe35e9390553ca969a272dd"
  },
  {
    "url": "assets/js/app.fdb3f222.js",
    "revision": "0c93891694f3e86857de19163e6ec68b"
  },
  {
    "url": "assets/js/vendors~notification.749c47b7.js",
    "revision": "72afd8d6c2906ecb799c44aa2709948b"
  },
  {
    "url": "en/about/index.html",
    "revision": "11a53d02d37bbdb96890a508bf7305e4"
  },
  {
    "url": "en/about/node/index.html",
    "revision": "65c3fd946899fedc7618fec09963c3ac"
  },
  {
    "url": "en/about/README2.html",
    "revision": "1ee764f377743bddffd14b760d26dcb4"
  },
  {
    "url": "en/bbs/index.html",
    "revision": "885c980776a2c50a8567b4d03b64ef61"
  },
  {
    "url": "en/village/index.html",
    "revision": "e59f8fba854a5b95add96133af7bbcad"
  },
  {
    "url": "en/vote/howToDo/index.html",
    "revision": "b315340baccadb74e1f5c85e0f81ae7f"
  },
  {
    "url": "en/vote/rewards/index.html",
    "revision": "6b17b74e44c8ef27ef5a012bea730ca8"
  },
  {
    "url": "en/wweChatGroup/index.html",
    "revision": "665bac5bdf6252d8a5468a95853997fd"
  },
  {
    "url": "hero.png",
    "revision": "0651c6a4c5d91a7a621c4224d0ea9ad8"
  },
  {
    "url": "i18n/index.html",
    "revision": "309dcdc8e25d0f1e428473e7be61f33f"
  },
  {
    "url": "icon.png",
    "revision": "3adb381137e58710307db63496ec4d71"
  },
  {
    "url": "icon2.png",
    "revision": "c04b041288244df9e8086ab8dc9000c4"
  },
  {
    "url": "index.html",
    "revision": "3489669cbffa0b226a875e1fca3d7c07"
  },
  {
    "url": "logo_black_transparent.svg",
    "revision": "2e34049010e7affd00c20a99ff07ef56"
  },
  {
    "url": "logo_black_transparent2.svg",
    "revision": "d3bfc93842aeb680aa5c68adc9248418"
  },
  {
    "url": "logo_black.svg",
    "revision": "1f05a600724cf8bb3470e39e42fe68bd"
  },
  {
    "url": "logo_black2.svg",
    "revision": "7ec7599d5d63e3ef82f30227c8dca340"
  },
  {
    "url": "zh/about/index.html",
    "revision": "e8ebeed4d8cc6308ce304b2567c2d849"
  },
  {
    "url": "zh/about/node/index.html",
    "revision": "e8c8b35e543fc5a4bcb86a90abec5b3a"
  },
  {
    "url": "zh/about/README2.html",
    "revision": "332863e7031bf57e70e3d3fad7e3592b"
  },
  {
    "url": "zh/bbs/index.html",
    "revision": "bf2a06244d61aa9aca5295872ceef7b6"
  },
  {
    "url": "zh/index.html",
    "revision": "048a29289bb4be3bcd14b34511db0172"
  },
  {
    "url": "zh/village/index.html",
    "revision": "2ce74c2b580d54dfbe88c452d76f7fc4"
  },
  {
    "url": "zh/vote/howToDo/index.html",
    "revision": "d9ab01c19e693ecb3d861edee58ad724"
  },
  {
    "url": "zh/vote/rewards/index.html",
    "revision": "90d34e4cb22644887769856ff013ef12"
  },
  {
    "url": "zh/wweChatGroup/index.html",
    "revision": "4e357c8632153de14855cccad201336c"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
