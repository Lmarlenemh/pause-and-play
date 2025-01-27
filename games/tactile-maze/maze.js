// Referencias a los elementos
const mazeContainer = document.getElementById('maze-container')
const nextMazeBtn = document.getElementById('next-maze-btn')

let currentMazeIndex = 0 // Índice del laberinto actual

// Diseños de laberintos difíciles
const mazes = [
    `
      <div id="start-point" class="start">🟡</div>
      <div class="wall" style="top: 0px; left: 50px; width: 20px; height: 200px;"></div>
      <div class="wall" style="top: 100px; left: 50px; width: 200px; height: 20px;"></div>
      <div class="wall" style="top: 150px; left: 250px; width: 20px; height: 150px;"></div>
      <div class="wall" style="top: 250px; left: 50px; width: 200px; height: 20px;"></div>
      <div id="end-point" class="end">🏁</div>
    `,
    `
      <div id="start-point" class="start">🟡</div>
      <div class="wall" style="top: 0px; left: 100px; width: 20px; height: 150px;"></div>
      <div class="wall" style="top: 150px; left: 100px; width: 150px; height: 20px;"></div>
      <div class="wall" style="top: 150px; left: 250px; width: 20px; height: 100px;"></div>
      <div class="wall" style="top: 250px; left: 50px; width: 200px; height: 20px;"></div>
      <div class="wall" style="top: 100px; left: 50px; width: 20px; height: 50px;"></div>
      <div id="end-point" class="end">🏁</div>
    `,
    `
      <div id="start-point" class="start">🟡</div>
      <div class="wall" style="top: 0px; left: 50px; width: 20px; height: 100px;"></div>
      <div class="wall" style="top: 100px; left: 50px; width: 200px; height: 20px;"></div>
      <div class="wall" style="top: 100px; left: 250px; width: 20px; height: 150px;"></div>
      <div class="wall" style="top: 150px; left: 50px; width: 20px; height: 150px;"></div>
      <div class="wall" style="top: 250px; left: 50px; width: 200px; height: 20px;"></div>
      <div id="end-point" class="end">🏁</div>
    `
  ]
  
  // Cambiar al siguiente laberinto
  nextMazeBtn.addEventListener('click', function () {
    currentMazeIndex = (currentMazeIndex + 1) % mazes.length
    loadMaze(currentMazeIndex)
  })

  function loadMaze(index) {
    mazeContainer.innerHTML = mazes[index]
    setupDragAndDrop() // Configura la funcionalidad de arrastre
  }
  
// Función para cargar un laberinto
function loadMaze(index) {
  mazeContainer.innerHTML = mazes[index]
  setupDragAndDrop() // Configura la funcionalidad de arrastre
}

function setupDragAndDrop() {
    const startPoint = document.getElementById('start-point')
    const endPoint = document.getElementById('end-point')
    const walls = document.querySelectorAll('.wall') // Seleccionar todas las paredes
  
    let isDragging = false
  
    startPoint.addEventListener('mousedown', function () {
      isDragging = true
      startPoint.style.position = 'absolute'
    })
  
    mazeContainer.addEventListener('mousemove', function (e) {
      if (isDragging) {
        const rect = mazeContainer.getBoundingClientRect()
        const x = e.clientX - rect.left - startPoint.offsetWidth / 2
        const y = e.clientY - rect.top - startPoint.offsetHeight / 2
  
        // Restringir el movimiento dentro del laberinto
        if (x >= 0 && x <= mazeContainer.offsetWidth - startPoint.offsetWidth) {
          startPoint.style.left = `${x}px`
        }
  
        if (y >= 0 && y <= mazeContainer.offsetHeight - startPoint.offsetHeight) {
          startPoint.style.top = `${y}px`
        }
  
        // Verificar colisión con las paredes usando un collider más pequeño
        for (let wall of walls) {
          const wallRect = wall.getBoundingClientRect()
          const startRect = startPoint.getBoundingClientRect()
  
          const colliderSize = 10 // Área de colisión más pequeña
  
          if (
            startRect.right - colliderSize > wallRect.left &&
            startRect.left + colliderSize < wallRect.right &&
            startRect.bottom - colliderSize > wallRect.top &&
            startRect.top + colliderSize < wallRect.bottom
          ) {
            alert('¡Has tocado una pared! Reiniciando...')
            loadMaze(currentMazeIndex) // Reiniciar laberinto
            return
          }
        }
      }
    })
  
    mazeContainer.addEventListener('mouseup', function () {
      isDragging = false
  
      // Verificar si se alcanzó la meta
      const startRect = startPoint.getBoundingClientRect()
      const endRect = endPoint.getBoundingClientRect()
  
      if (
        startRect.right > endRect.left &&
        startRect.left < endRect.right &&
        startRect.bottom > endRect.top &&
        startRect.top < endRect.bottom
      ) {
        alert('¡Felicidades, llegaste a la meta! 🎉')
      }
    })
  }
  
  
  
  // Cargar el primer laberinto al iniciar el juego
  loadMaze(currentMazeIndex)
  

// Botón de Inicio
document.getElementById('back-btn').addEventListener('click', function () {
    window.location.href = '../../index.html'
  })
  
  // Botón de Modo Oscuro
  document.getElementById('dark-mode-btn').addEventListener('click', function () {
    document.body.classList.toggle('dark-mode')
  })
  
  // Botón de Juego Aleatorio de juegos táctiles
const tactileGames = [
    '../tactile-maze/index.html', // Juego "Laberinto"
    '../tactile-bubbles/index.html', // Juego "Dibuja con el Dedo"
    '../tactile-puzzle/index.html' // Juego "Puzzle"
  ]
  
  // Lógica del botón "Juego Aleatorio"
  document.getElementById('shuffle-btn').addEventListener('click', function () {
    const randomGame = tactileGames[Math.floor(Math.random() * tactileGames.length)]
    window.location.href = randomGame
  })