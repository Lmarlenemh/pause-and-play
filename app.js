// Botón de Inicio
document.getElementById('back-btn').addEventListener('click', function () {
  window.location.href = 'index.html'
})

// Botón de Modo Oscuro
document.getElementById('dark-mode-btn').addEventListener('click', function () {
  document.body.classList.toggle('dark-mode')
})

// Juegos disponibles
const games = [
  'games/breathing/index.html',
  'games/sensory-5-4-3-2-1/index.html',
  'games/mental-guess-color/index.html',
  'games/physical-movement/index.html',
  'games/tactile-maze/index.html',
  'games/creative-acronyms/index.html',
  'games/breathing-blow-candle/index.html',
  'games/breathing-guided/index.html',
  'games/sensory-ice-cube/index.html',
  'games/sensory-imaginary-rain/index.html',
  'games/mental-intervals/index.html',
  'games/mental-positive-associations/index.html',
  'games/physical-balance/index.html',
  'games/physical-walk/index.html',
  'games/tactile-bubbles/index.html',
  'games/tactile-puzzle/index.html',
  'games/creative-poetry/index.html',
  'games/creative-metaphors/index.html'
]

// Botón de Juego Aleatorio
document.getElementById('shuffle-btn').addEventListener('click', function () {
  const randomIndex = Math.floor(Math.random() * games.length)
  const randomGame = games[randomIndex]
  window.location.href = randomGame
})

if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/service-worker.js')
    .then(reg => console.log('Service Worker registrado ✅', reg))
    .catch(err => console.error('Error registrando el Service Worker ❌', err))
}

if ('Notification' in window && 'serviceWorker' in navigator) {
  navigator.serviceWorker.register('/service-worker.js')
    .then(reg => {
      console.log('Service Worker registrado ✅')

      // Preguntar al usuario si quiere recibir notificaciones
      Notification.requestPermission().then(permission => {
        if (permission === 'granted') {
          console.log('Notificaciones permitidas ✅')

          reg.showNotification('¡Bienvenido a Pause & Play!', {
            body: 'Te notificaremos sobre nuevos juegos y actividades 🎮',
            icon: 'assets/images/logo.png',
            badge: 'assets/images/badge.png'
          })
        } else if (permission === 'denied') {
          console.warn('Notificaciones bloqueadas ❌')
        }
      })
    })
    .catch(err => console.error('Error registrando el Service Worker ❌', err))
}
