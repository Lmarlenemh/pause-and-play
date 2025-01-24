// Lista de posiciones de equilibrio
const balances = [
    'Levanta un pie y trata de mantener el equilibrio mientras cuentas hasta 10',
    'Mantén los brazos extendidos como un avión y equilibra sobre un pie ',
    'Coloca las manos en la cabeza y mantén el equilibrio en puntas de pie ',
    'Inclínate hacia adelante como si fueras una tabla inclinada ',
    'Levanta una rodilla y sosténla con ambas manos durante 10 segundos ',
    'Estira los brazos hacia arriba y mantente firme como un árbol '
  ]
  
  let currentIndex = -1 // Índice de la posición actual
  
  // Referencias a los elementos
  const balanceDisplay = document.getElementById('balance-display')
  const nextBalanceBtn = document.getElementById('next-balance-btn')
  
  // Mostrar la siguiente posición de equilibrio
  function showNextBalance() {
    currentIndex = (currentIndex + 1) % balances.length // Ciclar a través de las posiciones
    balanceDisplay.textContent = balances[currentIndex]
  }
  
  // Evento del botón "Siguiente Posición"
  nextBalanceBtn.addEventListener('click', showNextBalance)
  
  // Mostrar la primera posición al cargar la página
  showNextBalance()
  
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
    '../physical-movement/index.html',
    '../physical-balance/index.html',
    '../physical-walk/index.html'
  ]
  
  document.getElementById('shuffle-btn').addEventListener('click', function () {
    const randomGame = physicalGames[Math.floor(Math.random() * physicalGames.length)]
    window.location.href = randomGame
  })
  