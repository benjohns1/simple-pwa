const cacheName = "hello-pwa";
const filesToCache = [
    "/",
    "/index.html",
    "/main.js"
];

self.addEventListener("install", e => {
    e.waitUntil(caches.open(cacheName).then(cache => cache.addAll(filesToCache)));
});

self.addEventListener("fetch", e => {
    e.respondWith(caches.match(e.request).then(response => response || fetch(e.request)));
});