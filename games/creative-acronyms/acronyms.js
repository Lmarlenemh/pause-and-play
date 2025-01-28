// Referencias
const acronymContainer = document.getElementById('acronym-container')

// Generar letras aleatorias
function generateLetters() {
  acronymContainer.innerHTML = '' // Limpiar las letras existentes
  const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  const randomLength = Math.floor(Math.random() * 4) + 3 // Generar entre 3 y 6 letras

  for (let i = 0; i < randomLength; i++) {
    const randomIndex = Math.floor(Math.random() * letters.length)
    const randomLetter = letters[randomIndex]

    // Crear elemento para la letra
    const letterElement = document.createElement('div')
    letterElement.classList.add('acronym-letter')
    letterElement.textContent = randomLetter

    acronymContainer.appendChild(letterElement)
  }
}

// Botón para generar letras
document.getElementById('generate-letters-btn').addEventListener('click', generateLetters)

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
  '../breathing/index.html',
  '../sensory-5-4-3-2-1/index.html',
  '../mental-guess-color/index.html',
  '../physical-movement/index.html',
  '../tactile-maze/index.html',
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
  const randomGame = creativeGames[Math.floor(Math.random() * creativeGames.length)]
  window.location.href = randomGame
})

// Inicializar el juego
generateAcronym()
