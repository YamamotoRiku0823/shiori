const CACHE_NAME = 'shiori-v1';
const FILES = [
  './',
  './index.html',
  './manifest.json',
  './page(1).PNG',
  './page(2).PNG',
  './page(3).PNG',
  './page(4).PNG',
  './page(5).PNG',
  './page(6).PNG',
  './page(7).PNG',
  './page(8).PNG',
  './page(9).PNG',
  './page(10).PNG',
  './page(11).PNG',
  './page(12).PNG',
  './page(13).PNG',
  './page(14).PNG',
  './page(15).PNG',
  './page(16).PNG',
  './page(17).PNG',
  './page(18).PNG',
  './icon_180.png',
  './icon_192.png',
  './icon_512.png'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(FILES))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});