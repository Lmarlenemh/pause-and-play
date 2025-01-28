// Lista de movimientos
const movements = [
    'Salta como un conejo 🐇',
    'Toca tus pies sin doblar las rodillas 👣',
    'Gira sobre tu eje tres veces 🔄',
    'Camina hacia atrás por 5 pasos 🚶‍♂️',
    'Levanta una rodilla y luego la otra como marchando 🦵',
    'Estírate como si intentaras tocar el cielo 🌤️',
    'Aplaude 10 veces rápido 👏'
  ]
  
  let currentIndex = -1 // Índice del movimiento actual
  
  // Referencias a los elementos
  const movementDisplay = document.getElementById('movement-display')
  const nextMovementBtn = document.getElementById('next-movement-btn')
  
  // Mostrar el siguiente movimiento
  function showNextMovement() {
    currentIndex = (currentIndex + 1) % movements.length // Ciclar a través de los movimientos
    movementDisplay.textContent = movements[currentIndex]
  }
  
  // Evento del botón "Siguiente Movimiento"
  nextMovementBtn.addEventListener('click', showNextMovement)
  
  // Mostrar el primer movimiento al cargar la página
  showNextMovement()
  
  // Botón de Inicio
  document.getElementById('back-btn').addEventListener('click', function () {
    window.location.href = '../../index.html'
  })
  
  // Botón de Modo Oscuro
  document.getElementById('dark-mode-btn').addEventListener('click', function () {
    document.body.classList.toggle('dark-mode')
  })
  
  // Botón de Juego Aleatorio
  const physicalGames = [
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
    const randomGame = physicalGames[Math.floor(Math.random() * physicalGames.length)]
    window.location.href = randomGame
  })
  