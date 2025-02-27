self.addEventListener('push', function (event) {
  let options = {
    body: '¿Estas bien? Tomate un tiempo🎮',
    icon: 'assets/images/logo.png',
    badge: 'assets/images/badge.png',
    vibrate: [200, 100, 200], // Patrón de vibración
    actions: [
      { action: 'open_app', title: 'Abrir App' },
      { action: 'close', title: 'Cerrar' }
    ]
  }

  event.waitUntil(
    self.registration.showNotification('Pause & Play', options)
  )
})

// Manejar la acción cuando se toca la notificación
self.addEventListener('notificationclick', function (event) {
  event.notification.close()
  if (event.action === 'open_app') {
    clients.openWindow('/')
  }
})

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
  