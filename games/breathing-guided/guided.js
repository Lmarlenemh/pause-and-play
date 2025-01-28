// Referencias a los elementos
const counter = document.getElementById('breath-counter')
const instruction = document.querySelector('.instruction')

let count = 1 // Inicializa el contador

function startBreathingCycle() {
  instruction.textContent = "Inhala y cuenta 1, exhala y cuenta 2, sigue así hasta llegar a 10."
  count = 0
  updateCounter()
}

function updateCounter() {
  counter.textContent = count

  // Si llegamos a 10, esperar 3 segundos y reiniciar
  if (count >= 10) {
    instruction.textContent = "¡Ciclo completado! Tomando pausa..."
    setTimeout(startBreathingCycle, 3000)
  } else {
    // Incrementar el contador después de 2 segundos
    setTimeout(() => {
      count++
      updateCounter()
    }, 2000) // Tiempo para inhala/exhala
  }
}

// Inicia el ciclo de respiraciones al cargar la página
startBreathingCycle()

// Botón de Inicio
document.getElementById("back-btn").addEventListener("click", function () {
    window.location.href = "../../index.html"
  })
  
// Botón de Modo Oscuro
document.getElementById('dark-mode-btn').addEventListener('click', function () {
    document.body.classList.toggle('dark-mode')
  })

// Botón de Juego Aleatorio
const breathingGames = [
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
  const randomGame = breathingGames[Math.floor(Math.random() * breathingGames.length)]
  window.location.href = randomGame
})
