if(!self.define){let e,s={};const n=(n,a)=>(n=new URL(n+".js",a).href,s[n]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=s,document.head.appendChild(e)}else e=n,importScripts(n),s()})).then((()=>{let e=s[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(a,i)=>{const c=e||("document"in self?document.currentScript.src:"")||location.href;if(s[c])return;let o={};const t=e=>n(e,c),r={module:{uri:c},exports:o,require:t};s[c]=Promise.all(a.map((e=>r[e]||t(e)))).then((e=>(i(...e),o)))}}define(["./workbox-1846d813"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/chunks/282.1dfbc13fa809cc98.js",revision:"otjf3cjW_UX_QvajkA4Vp"},{url:"/_next/static/chunks/563.fbd5f4f9151f8110.js",revision:"otjf3cjW_UX_QvajkA4Vp"},{url:"/_next/static/chunks/952.5ec9833d912c4db8.js",revision:"otjf3cjW_UX_QvajkA4Vp"},{url:"/_next/static/chunks/983.c856ab4818a20170.js",revision:"otjf3cjW_UX_QvajkA4Vp"},{url:"/_next/static/chunks/framework-dc33c0b5493501f0.js",revision:"otjf3cjW_UX_QvajkA4Vp"},{url:"/_next/static/chunks/main-e2772a9706e8f31a.js",revision:"otjf3cjW_UX_QvajkA4Vp"},{url:"/_next/static/chunks/pages/_app-46bd695ccd31fcbf.js",revision:"otjf3cjW_UX_QvajkA4Vp"},{url:"/_next/static/chunks/pages/_error-a3f18418a2205cb8.js",revision:"otjf3cjW_UX_QvajkA4Vp"},{url:"/_next/static/chunks/pages/index-f443fc4611100b84.js",revision:"otjf3cjW_UX_QvajkA4Vp"},{url:"/_next/static/chunks/pages/login-9b3e453e8ca424a8.js",revision:"otjf3cjW_UX_QvajkA4Vp"},{url:"/_next/static/chunks/polyfills-5cd94c89d3acac5f.js",revision:"otjf3cjW_UX_QvajkA4Vp"},{url:"/_next/static/chunks/webpack-269f3b925a25685a.js",revision:"otjf3cjW_UX_QvajkA4Vp"},{url:"/_next/static/css/f5828a2815530407.css",revision:"otjf3cjW_UX_QvajkA4Vp"},{url:"/_next/static/otjf3cjW_UX_QvajkA4Vp/_buildManifest.js",revision:"otjf3cjW_UX_QvajkA4Vp"},{url:"/_next/static/otjf3cjW_UX_QvajkA4Vp/_middlewareManifest.js",revision:"otjf3cjW_UX_QvajkA4Vp"},{url:"/_next/static/otjf3cjW_UX_QvajkA4Vp/_ssgManifest.js",revision:"otjf3cjW_UX_QvajkA4Vp"},{url:"/favicon.ico",revision:"7d3bd6feaa2ad8675080fbe4b11a1456"},{url:"/fonts/SFRounded-Black.woff",revision:"aac91c2525cbc828a9546b12b46a563f"},{url:"/fonts/SFRounded-Bold.woff",revision:"4d74d86e0bd6d39fc7e41b4ccc1a77d9"},{url:"/fonts/SFRounded-Heavy.woff",revision:"8bb2102d5c56c3c50f2c16875291fae1"},{url:"/fonts/SFRounded-Light.woff",revision:"101364030e72199d5cacefda11f189d5"},{url:"/fonts/SFRounded-Medium.woff",revision:"b05824b9438a2a5e2c2956fb9eb7c970"},{url:"/fonts/SFRounded-Regular.woff",revision:"af4c81271faa1183caf5bf2537cff7dd"},{url:"/fonts/SFRounded-Semibold.woff",revision:"4d33f19e837a2462662807e2711256d2"},{url:"/fonts/SFRounded-Thin.woff",revision:"2e0469aa1186ecfd1430d7be1ade40f0"},{url:"/fonts/SFRounded-Ultralight.woff",revision:"b0ab1b4f33d92632aa7d30c5a33aa827"},{url:"/fonts/stylesheet.css",revision:"05e867f2fd4315cf62fada49c9fc7509"},{url:"/icons/apple-touch-icon-114x114.png",revision:"eaf602cf0930993f9113c9da2ebef357"},{url:"/icons/apple-touch-icon-120x120.png",revision:"e3df711bdd4e7153126f2e81e8a2eab8"},{url:"/icons/apple-touch-icon-144x144.png",revision:"099589c6808de99671c543e5064f80fa"},{url:"/icons/apple-touch-icon-152x152.png",revision:"51bd24abab3e9aa07a402230bfb17be8"},{url:"/icons/apple-touch-icon-60x60.png",revision:"0159b178892da6a629f9c8930101e745"},{url:"/icons/apple-touch-icon-76x76.png",revision:"da8e53b61a1f85902b11e01e8ae538a6"},{url:"/icons/favicon-144.png",revision:"5a3108cf3e93d96bb22e0dbf488f35bf"},{url:"/icons/favicon-192.png",revision:"2ba10b8c9f15c7607ab5a6717ef60bd7"},{url:"/icons/favicon-196.png",revision:"7658e0839b4022d84756b74b7d169de0"},{url:"/icons/favicon-32.png",revision:"30055672ca7a5c4b5cca009933477400"},{url:"/icons/favicon-64.png",revision:"994a2ebf58b09885392c2b29857379ea"},{url:"/icons/favicon-96.png",revision:"414f1330a9659e90658ba2bd6560491f"},{url:"/images/background.svg",revision:"ea9902fe51857522050e7ecc552df6ec"},{url:"/images/home/coin1.png",revision:"bf8c0356792c84e0fff280b32c1464e3"},{url:"/images/home/coin2.png",revision:"23b70eed0d4e37b07c46a1f97fd95ced"},{url:"/images/home/coin3.png",revision:"1ab058b731ba4e05a054afa23105f65e"},{url:"/images/home/coin4.png",revision:"3086e01e415b5eae159317779fec481b"},{url:"/images/home/coin5.png",revision:"6af4a335c2253933326f4f11b323b0ca"},{url:"/images/logo.svg",revision:"60b6a9119d1893c8e5eb5b6045d3a81c"},{url:"/images/medium.svg",revision:"3fc833fa9597c7fd88b82a9acd320f03"},{url:"/images/verifySendEmail.png",revision:"1333fcc39b6361057252858b0a38ae72"},{url:"/images/wallet/bsc-logo.svg",revision:"f59d6098211f2da123280001ed7d8e5c"},{url:"/images/wallet/coinbaseWalletIcon.svg",revision:"62578f5994645a1825d4829e2c4394b0"},{url:"/images/wallet/eth-logo.svg",revision:"60b032e4a1d3cfc9882485ed0acbf5e3"},{url:"/images/wallet/metamask.png",revision:"023762b6aec2a2249b8fdfb638f00ef3"},{url:"/images/wallet/polygon.png",revision:"e88163ceb9d06a763625709e6a188b18"},{url:"/images/wallet/trustwallet.svg",revision:"1760ef20900910bff02e4240b8bc99a6"},{url:"/images/wallet/walletConnect.svg",revision:"8215855c185176eb79446ce8cc1f3998"},{url:"/locales/en/common.json",revision:"374c5d1f277595df9b2106f4b392232c"},{url:"/locales/fr/common.json",revision:"841e34c2579843deaa2081919d3ebf5e"},{url:"/manifest.json",revision:"31d80428a986afb8000661656df8227a"},{url:"/vercel.svg",revision:"4b4f1876502eb6721764637fe5c41702"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:n,state:a})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
