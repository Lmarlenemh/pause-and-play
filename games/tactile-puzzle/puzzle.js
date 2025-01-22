// Referencias a los contenedores
const puzzleBoard = document.getElementById('puzzle-board')
const puzzlePieces = document.getElementById('puzzle-pieces')

// Piezas del puzzle
const pieces = [
  { id: 1, image: '../../assets/images/piece1.png' },
  { id: 2, image: '../../assets/images/piece2.png' },
  { id: 3, image: '../../assets/images/piece3.png' },
  { id: 4, image: '../../assets/images/piece4.png' },
  { id: 5, image: '../../assets/images/piece5.png' },
  { id: 6, image: '../../assets/images/piece6.png' },
  { id: 7, image: '../../assets/images/piece7.png' },
  { id: 8, image: '../../assets/images/piece8.png' },
  { id: 9, image: '../../assets/images/piece9.png' }
]

// Rompecabezas disponibles
const puzzles = [
  [
    { id: 1, image: '../../assets/images/puzzle1/piece1.png' },
    { id: 2, image: '../../assets/images/puzzle1/piece2.png' },
    { id: 3, image: '../../assets/images/puzzle1/piece3.png' },
    { id: 4, image: '../../assets/images/puzzle1/piece4.png' },
    { id: 5, image: '../../assets/images/puzzle1/piece5.png' },
    { id: 6, image: '../../assets/images/puzzle1/piece6.png' },
    { id: 7, image: '../../assets/images/puzzle1/piece7.png' },
    { id: 8, image: '../../assets/images/puzzle1/piece8.png' },
    { id: 9, image: '../../assets/images/puzzle1/piece9.png' }
  ],
  [
    { id: 1, image: '../../assets/images/puzzle2/piece1.png' },
    { id: 2, image: '../../assets/images/puzzle2/piece2.png' },
    { id: 3, image: '../../assets/images/puzzle2/piece3.png' },
    { id: 4, image: '../../assets/images/puzzle2/piece4.png' },
    { id: 5, image: '../../assets/images/puzzle2/piece5.png' },
    { id: 6, image: '../../assets/images/puzzle2/piece6.png' },
    { id: 7, image: '../../assets/images/puzzle2/piece7.png' },
    { id: 8, image: '../../assets/images/puzzle2/piece8.png' },
    { id: 9, image: '../../assets/images/puzzle2/piece9.png' }
  ],
  [
    { id: 1, image: '../../assets/images/puzzle3/piece1.png' },
    { id: 2, image: '../../assets/images/puzzle3/piece2.png' },
    { id: 3, image: '../../assets/images/puzzle3/piece3.png' },
    { id: 4, image: '../../assets/images/puzzle3/piece4.png' },
    { id: 5, image: '../../assets/images/puzzle3/piece5.png' },
    { id: 6, image: '../../assets/images/puzzle3/piece6.png' },
    { id: 7, image: '../../assets/images/puzzle3/piece7.png' },
    { id: 8, image: '../../assets/images/puzzle3/piece8.png' },
    { id: 9, image: '../../assets/images/puzzle3/piece9.png' }
  ]
]


let currentPuzzleIndex = 0 // Índice del rompecabezas actual

// Generar el tablero y mezclar piezas
function generatePuzzle() {
  const pieces = puzzles[currentPuzzleIndex] // Obtener el conjunto de piezas actual

  puzzleBoard.innerHTML = ''
  puzzlePieces.innerHTML = ''

  // Crear espacios en el tablero (3x3)
  for (let i = 0; i < 9; i++) {
    const slot = document.createElement('div')
    slot.classList.add('puzzle-slot')
    slot.dataset.id = (i + 1).toString() // Identificador único del slot
    puzzleBoard.appendChild(slot)
  }

  // Mezclar piezas
  const shuffledPieces = pieces.sort(() => Math.random() - 0.5)

  // Crear las piezas del puzzle
  shuffledPieces.forEach(piece => {
    const pieceElement = document.createElement('img')
    pieceElement.classList.add('puzzle-piece')
    pieceElement.dataset.id = piece.id.toString()
    pieceElement.src = piece.image
    pieceElement.draggable = true

    // Eventos de arrastre
    pieceElement.addEventListener('dragstart', dragStart)
    pieceElement.addEventListener('dragend', dragEnd)

    puzzlePieces.appendChild(pieceElement)
  })
}

// Manejo de eventos de arrastre
function dragStart(e) {
  e.dataTransfer.setData('text/plain', e.target.dataset.id)
  e.target.classList.add('dragging')
}

function dragEnd(e) {
  e.target.classList.remove('dragging')
}

// Soltar pieza en el tablero
puzzleBoard.addEventListener('dragover', function (e) {
  e.preventDefault()
})

puzzleBoard.addEventListener('drop', function (e) {
  e.preventDefault()
  const pieceId = e.dataTransfer.getData('text/plain')
  const piece = document.querySelector(`.puzzle-piece[data-id="${pieceId}"]`)
  const slot = e.target.closest('.puzzle-slot')

  // Verificar si la pieza y el slot coinciden
  if (slot && piece && slot.dataset.id === piece.dataset.id) {
    slot.appendChild(piece) // Asociar pieza al slot
    piece.draggable = false // Desactivar el arrastre
    piece.style.cursor = 'default' // Cambiar el cursor a predeterminado

    // Verificar si todas las piezas están en su lugar
    checkPuzzleCompletion()
  }
})

// Verificar si el puzzle está completo
function checkPuzzleCompletion() {
  const slots = document.querySelectorAll('.puzzle-slot')
  const isComplete = Array.from(slots).every(slot => slot.children.length > 0)

  if (isComplete) {
    alert('¡Felicidades, completaste el puzzle! 🎉')
  }
}

// Cambiar al siguiente rompecabezas
document.getElementById('next-puzzle-btn').addEventListener('click', function () {
  currentPuzzleIndex = (currentPuzzleIndex + 1) % puzzles.length // Avanzar al siguiente rompecabezas
  generatePuzzle() // Generar el nuevo rompecabezas
})

// Iniciar el juego
generatePuzzle()






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