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
  