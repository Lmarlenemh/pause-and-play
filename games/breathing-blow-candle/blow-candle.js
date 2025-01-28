// Detectar audio del micrófono
navigator.mediaDevices.getUserMedia({ audio: true })
  .then(function (stream) {
    // Crear contexto de audio
    const audioContext = new (window.AudioContext || window.webkitAudioContext)();
    const analyser = audioContext.createAnalyser();
    const microphone = audioContext.createMediaStreamSource(stream);
    const dataArray = new Uint8Array(analyser.frequencyBinCount);

    microphone.connect(analyser);

    // Referencias a las imágenes y al texto de apoyo
    const candleLit = document.getElementById("candle-lit"); // Vela prendida
    const candleUnlit = document.getElementById("candle-unlit"); // Vela apagada
    const instruction = document.querySelector(".instruction"); // Texto de instrucciones

    // Configuración inicial
    candleLit.classList.remove("hidden"); // Mostrar vela prendida
    candleUnlit.classList.add("hidden"); // Ocultar vela apagada
    instruction.textContent = "Sopla para apagar la vela";

    let candleBlown = false; // Evita apagar la vela varias veces

    // Función para verificar si hay un soplido
    function checkBlow() {
      analyser.getByteFrequencyData(dataArray);

      // Filtrar frecuencias típicas de un soplido (5000-10000 Hz)
      const filteredFrequencies = dataArray.slice(500, 1000).reduce((acc, val) => acc + val, 0);

      // Si el volumen supera un umbral y no se ha apagado aún la vela
      if (filteredFrequencies > 2500 && !candleBlown) {
        candleBlown = true;
        candleLit.classList.add("hidden"); // Ocultar vela prendida
        candleUnlit.classList.remove("hidden"); // Mostrar vela apagada
        instruction.textContent = "¡Has apagado la vela!"; // Cambiar el texto
      }
    }

    // Comprobamos el micrófono cada 100 ms
    setInterval(checkBlow, 100);
  })
  .catch(function (err) {
    console.error("Acceso al micrófono denegado:", err);
  });

// Botón de Inicio
document.getElementById("back-btn").addEventListener("click", function () {
  window.location.href = "../../index.html";
});

// Botón de Modo Oscuro
document.getElementById("dark-mode-btn").addEventListener("click", function () {
  document.body.classList.toggle("dark-mode");
});

// Botón de Juego Aleatorio
const breathingGames = [
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
];

document.getElementById("shuffle-btn").addEventListener("click", function () {
  const randomGame = breathingGames[Math.floor(Math.random() * breathingGames.length)];
  window.location.href = randomGame;
});
