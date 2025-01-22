// Referencias a los elementos
const instructionText = document.getElementById('instruction-text')
const nextStepBtn = document.getElementById('next-step-btn')

// Pasos del juego
const steps = [
  'Encuentra: 5 cosas que puedas ver.',
  'Encuentra: 4 cosas que puedas tocar.',
  'Encuentra: 3 cosas que puedas escuchar.',
  'Encuentra: 2 cosas que puedas oler.',
  'Encuentra: 1 cosa que puedas saborear.'
]

let currentStep = 0 // Índice del paso actual

// Actualiza el texto de instrucciones al hacer clic en "Siguiente"
nextStepBtn.addEventListener('click', function () {
  currentStep++
  if (currentStep < steps.length) {
    instructionText.textContent = steps[currentStep]
  } else {
    instructionText.textContent = '¡Bien hecho! Has completado el ejercicio.'
    nextStepBtn.disabled = true // Desactiva el botón al finalizar
  }
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
