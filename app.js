// Botón de Inicio
document.getElementById('back-btn').addEventListener('click', function () {
  window.location.href = 'index.html'
})

// Botón de Modo Oscuro
document.getElementById('dark-mode-btn').addEventListener('click', function () {
  document.body.classList.toggle('dark-mode')
})

// Función para redirigir a un juego aleatorio para la pagina de inicio
/*function redirectToRandomGame(category) {
  const games = gamesByCategory[category]
  if (games && games.length > 0) {
    const randomIndex = Math.floor(Math.random() * games.length)
    window.location.href = games[randomIndex]
  } else {
    alert('No hay juegos disponibles para esta categoría.')
  }
}
*/

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
  window.location.href = randomGame.url
  /*const randomGame = games[Math.floor(Math.random() * games.length)]
  window.location.href = randomGame*/
})
