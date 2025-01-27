// Referencias a los elementos
const startSoundBtn = document.getElementById('start-sound-btn')
let rainAudio = new Audio('../../assets/audio/rain-sound.mp3')

// Reproducir sonido de lluvia
startSoundBtn.addEventListener('click', function () {
  rainAudio.loop = true // Reproducir en bucle
  rainAudio.play()
  startSoundBtn.disabled = true // Desactivar botón al iniciar el sonido
  startSoundBtn.textContent = 'Sonido de lluvia reproduciéndose'
})

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
