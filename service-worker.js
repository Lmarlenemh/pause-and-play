self.addEventListener("install", event => {
    event.waitUntil(
      caches.open("pause-play-cache").then(cache => {
        return cache.addAll([
          "/",
          "/index.html",
          "/style.css",
          "/app.js",
          "/assets/images/mascot.png"
        ]);
      })
    );
  });
  
  self.addEventListener("fetch", event => {
    event.respondWith(
      caches.match(event.request).then(response => {
        return response || fetch(event.request);
      })
    );
  });
  