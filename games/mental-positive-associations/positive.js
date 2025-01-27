// Lista de frases positivas
const positivePhrases = [
    'Eres capaz de lograr cosas increíbles 🌟',
    'Hoy es un buen día para ser feliz 😊',
    'Confía en ti, ¡puedes hacerlo! 💪',
    'Cada paso cuenta hacia tus metas 🚶‍♂️',
    'Tienes el poder de cambiar tu día ✨',
    '¡Eres una persona única y especial! 💖',
    'Todo esfuerzo tiene su recompensa 🌈',
    'Respira hondo, todo saldrá bien 🌬️'
  ]
  
  // Referencias a los elementos
  const positiveDisplay = document.getElementById('positive-display')
  const newPhraseBtn = document.getElementById('new-phrase-btn')
  
  // Cambiar a una nueva frase
  function showNewPhrase() {
    const randomIndex = Math.floor(Math.random() * positivePhrases.length)
    positiveDisplay.textContent = positivePhrases[randomIndex]
  }
  
  // Evento del botón "Nueva frase"
  newPhraseBtn.addEventListener('click', showNewPhrase)
  
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
    '../mental-intervals/index.html',
    '../mental-guess-color/index.html',
    '../mental-positive-associations/index.html'
  ]
  
  document.getElementById('shuffle-btn').addEventListener('click', function () {
    const randomGame = mentalGames[Math.floor(Math.random() * mentalGames.length)]
    window.location.href = randomGame
  })
  