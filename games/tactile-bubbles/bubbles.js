// Referencias
const bubbleArea = document.getElementById('bubble-area')
const totalBubbles = 15 // Número de burbujas a generar
let explodedCount = 0 // Contador de burbujas explotadas

// Generar burbujas
function generateBubbles() {
  for (let i = 0; i < totalBubbles; i++) {
    const bubble = document.createElement('div')
    bubble.classList.add('bubble')

    // Asignar tamaño aleatorio
    const sizes = ['small', 'medium', 'large']
    const randomSize = sizes[Math.floor(Math.random() * sizes.length)]
    bubble.classList.add(randomSize)

    // Posición inicial aleatoria
    const x = Math.random() * (bubbleArea.clientWidth - 70)
    const y = Math.random() * (bubbleArea.clientHeight - 70)
    bubble.style.left = `${x}px`
    bubble.style.top = `${y}px`

    // Asignar dirección y velocidad aleatoria
    const dx = (Math.random() - 0.5) * 4 // Velocidad horizontal (-2 a 2)
    const dy = (Math.random() - 0.5) * 4 // Velocidad vertical (-2 a 2)

    // Evento para explotar burbuja
    bubble.addEventListener('click', function () {
      explodeBubble(bubble)
    })

    bubbleArea.appendChild(bubble)

    // Animar el movimiento de la burbuja
    moveBubble(bubble, dx, dy)
  }
}

// Mover una burbuja de manera independiente
function moveBubble(bubble, dx, dy) {
  const moveInterval = setInterval(() => {
    // Obtener posición actual
    let x = parseFloat(bubble.style.left)
    let y = parseFloat(bubble.style.top)

    // Actualizar posición
    x += dx
    y += dy

    // Detectar colisiones con los bordes
    if (x <= 0 || x >= bubbleArea.clientWidth - bubble.offsetWidth) {
      dx = -dx // Invertir dirección horizontal
    }
    if (y <= 0 || y >= bubbleArea.clientHeight - bubble.offsetHeight) {
      dy = -dy // Invertir dirección vertical
    }

    // Aplicar la nueva posición
    bubble.style.left = `${x}px`
    bubble.style.top = `${y}px`
  }, 20) // Actualizar cada 20ms
}

// Explosión de burbuja
function explodeBubble(bubble) {
  bubble.remove() // Eliminar la burbuja del DOM
  explodedCount++

  if (explodedCount === totalBubbles) {
    setTimeout(() => {
      alert('¡Felicidades, explotaste todas las burbujas! 🎉')
      resetGame()
    }, 200)
  }
}

// Reiniciar el juego
function resetGame() {
  explodedCount = 0
  bubbleArea.innerHTML = '' // Limpiar el área
  generateBubbles() // Generar nuevas burbujas
}

// Inicializar el juego
generateBubbles()


// Botón de Inicio
document.getElementById('back-btn').addEventListener('click', function () {
  window.location.href = '../../index.html'
})

// Botón de Modo Oscuro
document.getElementById('dark-mode-btn').addEventListener('click', function () {
  document.body.classList.toggle('dark-mode')
})

// Botón de Juego Aleatorio
const tactileGames = [
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
  '../tactile-puzzle/index.html',
  '../creative-poetry/index.html',
  '../creative-metaphors/index.html'
]

document.getElementById('shuffle-btn').addEventListener('click', function () {
  const randomGame = tactileGames[Math.floor(Math.random() * tactileGames.length)]
  window.location.href = randomGame
})
