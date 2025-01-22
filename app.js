// Botón de Inicio
document.getElementById('back-btn').addEventListener('click', function () {
  window.location.href = 'index.html'
})

// Botón de Modo Oscuro
document.getElementById('dark-mode-btn').addEventListener('click', function () {
  document.body.classList.toggle('dark-mode')
})

/*
document.getElementById("dark-mode-toggle").addEventListener("click", function() {
    document.body.classList.toggle("dark-mode");
  });*/
  
  document.getElementById("shuffle-btn").addEventListener("click", function() {
    // Aquí se puede implementar la lógica para seleccionar un juego aleatorio
    //alert("Juego aleatorio iniciado");
  });

// Juegos disponibles por categoría en botones
const gamesByCategory = {
  // para redirigir al archivo de los juegos de respiraciones
  breathing: [
    'games/breathing/index.html',
    'games/breathing-guided/index.html',
    'games/breathing-blow-candle/index.html'
  ],
  // para redirigir al archivo de los juegos sensoriales
  sensory: [
    'games/sensory-5-4-3-2-1/index.html',
    'games/sensory-ice-cube/index.html',
    'games/sensory-imaginary-rain/index.html'
  ],
  // para redirigir al archivo de los juegos mentales
  mental: [
    'games/mental-guess-color/index.html',
    'games/mental-intervals/index.html',
    'games/mental-positive-associations/index.html'
  ],
  // para redirigir al archivo de los juegos fisicos
  physical: [
    'games/physical-movement/index.html',
    'games/physical-balance/index.html',
    'games/physical-walk/index.html'
  ],
  // para redirigir al archivo de los juegos tactiles
  tactile: [
    'games/tactile-maze/index.html',
    'games/tactile-bubbles/index.html',
    'games/tactile-puzzle/index.html'
  ],
  // para redirigir al archivo de los juegos creativos
  creative: [
    'games/creative-acronyms/index.html',
    'games/creative-poetry/index.html',
    'games/creative-metaphors/index.html'
  ]
}

// Función para redirigir a un juego aleatorio para la pagina de inicio
function redirectToRandomGame(category) {
  const games = gamesByCategory[category]
  if (games && games.length > 0) {
    const randomIndex = Math.floor(Math.random() * games.length)
    window.location.href = games[randomIndex]
  } else {
    alert('No hay juegos disponibles para esta categoría.')
  }
}

// Botones de las categorías
document.getElementById('breathing-btn').addEventListener('click', function () {
  redirectToRandomGame('breathing')
})

document.getElementById('sensory-btn').addEventListener('click', function () {
  redirectToRandomGame('sensory')
})

document.getElementById('mental-btn').addEventListener('click', function () {
  redirectToRandomGame('mental')
})

document.getElementById('physical-btn').addEventListener('click', function () {
  redirectToRandomGame('physical')
})

document.getElementById('tactile-btn').addEventListener('click', function () {
  redirectToRandomGame('tactile')
})

document.getElementById('creative-btn').addEventListener('click', function () {
  redirectToRandomGame('creative')
})



// Juegos disponibles
const games = [
  { url: 'games/breathing/index.html' },
  { url: 'games/sensory-5-4-3-2-1/index.html' },
  { url: 'games/mental-guess-color/index.html' },
  { url: 'games/physical-movement/index.html' },
  { url: 'games/tactile-maze/index.html' },
  { url: 'games/creative-acronyms/index.html' },
  { url: 'games/breathing-blow-candle/index.html' },
  { url: 'games/breathing-guided/index.html' },
  { url: 'games/sensory-ice-cube/index.html' },
  { url: 'games/sensory-imaginary-rain/index.html' },
  { url: 'games/mental-intervals/index.html' },
  { url: 'games/mental-positive-associations/index.html' },
  { url: 'games/physical-balance/index.html' },
  { url: 'games/physical-walk/index.html' },
  { url: 'games/tactile-bubbles/index.html' },
  { url: 'games/tactile-puzzle/index.html' },
  { url: 'games/creative-poetry/index.html' },
  { url: 'games/creative-metaphors/index.html' },
]

// Botón de Juego Aleatorio
document.getElementById('shuffle-btn').addEventListener('click', function () {
  const randomIndex = Math.floor(Math.random() * games.length)
  const randomGame = games[randomIndex]
  window.location.href = randomGame.url
})
