// Botón de Inicio
document.getElementById('back-btn').addEventListener('click', function () {
  window.location.href = '../../index.html'
})

// Botón de Modo Oscuro
document.getElementById('dark-mode-btn').addEventListener('click', function () {
  document.body.classList.toggle('dark-mode')
})

// Botón de Juego Aleatorio
const creativeGames = [
  '../creative-metaphors/index.html',
  '../creative-acronyms/index.html',
  '../creative-poetry/index.html'
]

document.getElementById('shuffle-btn').addEventListener('click', function () {
  const randomGame = creativeGames[Math.floor(Math.random() * creativeGames.length)]
  window.location.href = randomGame
})