// Referencias a los elementos
const currentNumberDisplay = document.getElementById('current-number')
const instruction = document.querySelector('.instruction')

let currentNumber = 100 // Número inicial
const intervalTime = 3000 // Tiempo entre intervalos en milisegundos (2 segundos)

// Función para actualizar el contador automáticamente
function startCounting() {
  const interval = setInterval(() => {
    if (currentNumber >= 0) {
      currentNumberDisplay.textContent = currentNumber
      currentNumber -= 7
    } else {
      clearInterval(interval) // Detener el intervalo al finalizar
      currentNumberDisplay.textContent = '¡Bien hecho!'
      instruction.textContent = 'Has completado el ejercicio.'
    }
  }, intervalTime)
}

// Inicia el contador automáticamente al cargar la página
startCounting()

// Botón de Inicio
document.getElementById('back-btn').addEventListener('click', function () {
  window.location.href = '../../index.html'
})

// Botón de Modo Oscuro
document.getElementById('dark-mode-btn').addEventListener('click', function () {
  document.body.classList.toggle('dark-mode')
})

// Botón de Juego Aleatorio
const mentalGames = [
  '../breathing/index.html',
  '../sensory-5-4-3-2-1/index.html',
  '../mental-guess-color/index.html',
  '../physical-movement/index.html',
  '../tactile-maze/index.html',
  '../creative-acronyms/index.html',
  '../breathing-blow-candle/index.html',
  '../breathing-guided/index.html',
  '../sensory-ice-cube/index.html',
  '../sensory-imaginary-rain/index.html',
  '../mental-intervals/index.html',
  '../mental-positive-associations/index.html',
  '../physical-balance/index.html',
  '../physical-walk/index.html',
  '../tactile-bubbles/index.html',
  '../tactile-puzzle/index.html',
  '../creative-poetry/index.html',
  '../creative-metaphors/index.html'
]

document.getElementById('shuffle-btn').addEventListener('click', function () {
  const randomGame = mentalGames[Math.floor(Math.random() * mentalGames.length)]
  window.location.href = randomGame
})
