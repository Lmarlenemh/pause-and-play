// Colores disponibles para el juego
const colors = [
    { rgb: 'rgb(255, 0, 0)', name: 'Rojo' },
    { rgb: 'rgb(0, 255, 0)', name: 'Verde' },
    { rgb: 'rgb(0, 0, 255)', name: 'Azul' },
    { rgb: 'rgb(255, 255, 0)', name: 'Amarillo' },
    { rgb: 'rgb(255, 165, 0)', name: 'Naranja' },
    { rgb: 'rgb(71, 50, 9)', name: 'Cafe' },
    { rgb: 'rgb(128, 0, 128)', name: 'Morado' },
    { rgb: 'rgb(0, 238, 255)', name: 'Cyan' },
    { rgb: 'rgb(255, 0, 157)', name: 'Rosa' },
    { rgb: 'rgb(90, 90, 90)', name: 'Gris' },
    { rgb: 'rgb(255, 255, 255)', name: 'Blanco' },
    { rgb: 'rgb(0, 0, 0)', name: 'Negro' }
  ]
  
  let currentIndex = -1 // Índice del color actual
  
  // Referencias a los elementos
  const colorDisplay = document.getElementById('color-display')
  const colorName = document.getElementById('color-name')
  const nextBtn = document.getElementById('next-btn')
  
  // Cambiar al siguiente color
  function showNextColor() {
    currentIndex = (currentIndex + 1) % colors.length // Ciclar a través de los colores
    const currentColor = colors[currentIndex]
    colorDisplay.style.backgroundColor = currentColor.rgb
  }
  
  // Evento del botón "Siguiente"
  nextBtn.addEventListener('click', showNextColor)
  
  // Mostrar el primer color al cargar la página
  showNextColor()
  
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
  