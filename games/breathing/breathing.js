
// Botón de Inicio
document.getElementById('back-btn').addEventListener('click', function () {
  window.location.href = '../../index.html'
})

// Botón de Modo Oscuro
document.getElementById('dark-mode-btn').addEventListener('click', function () {
  document.body.classList.toggle('dark-mode')
})

// Lista de juegos de respiración para el botón de juego aleatorio
const breathingGames = [
    '../breathing/index.html', // Ejercicio de respiración
    '../breathing-blow-candle/index.html', // Sopla la vela
    '../breathing-guided/index.html' // Respiraciones guiadas
  ]
  
  // Lógica para elegir un juego aleatorio
  document.getElementById("shuffle-btn").addEventListener("click", function() {
    const randomGame = breathingGames[Math.floor(Math.random() * breathingGames.length)]
    window.location.href = randomGame
  })