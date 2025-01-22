// Botón de Inicio
document.getElementById('back-btn').addEventListener('click', function () {
  window.location.href = '../../index.html'
})

// Botón de Modo Oscuro
document.getElementById('dark-mode-btn').addEventListener('click', function () {
  document.body.classList.toggle('dark-mode')
})

// Botón de Juego Aleatorio
const sensoryGames = [
  '../sensory-5-4-3-2-1/index.html',
  '../sensory-ice-cube/index.html',
  '../sensory-imaginary-rain/index.html'
]

document.getElementById('shuffle-btn').addEventListener('click', function () {
  const randomGame = sensoryGames[Math.floor(Math.random() * sensoryGames.length)]
  window.location.href = randomGame
})
