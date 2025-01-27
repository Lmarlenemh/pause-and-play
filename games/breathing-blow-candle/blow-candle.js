/*
// Detectar audio del micrófono
navigator.mediaDevices.getUserMedia({ audio: true })
  .then(function (stream) {
    const audioContext = new (window.AudioContext || window.webkitAudioContext)()
    const analyser = audioContext.createAnalyser()
    const microphone = audioContext.createMediaStreamSource(stream)
    const dataArray = new Uint8Array(analyser.frequencyBinCount)

    microphone.connect(analyser)

    // Referencias a las imágenes y al texto de apoyo
    const candleLit = document.getElementById("candle-lit")
    const candleUnlit = document.getElementById("candle-unlit")
    const instruction = document.querySelector(".instruction")

    let candleBlown = false // Evita apagar la vela varias veces

    function checkBlow() {
      analyser.getByteFrequencyData(dataArray)

      // Filtrar frecuencias típicas de un soplido (5000-10000 Hz)
      const filteredFrequencies = dataArray.slice(500, 1000).reduce((acc, val) => acc + val, 0)

      // Si el volumen supera un umbral y no se ha apagado aún la vela
      if (filteredFrequencies > 2500 && !candleBlown) {
        candleBlown = true
        candleLit.classList.add("hidden")
        candleUnlit.classList.remove("hidden")
        instruction.textContent = "¡Has apagado la vela!"
      }
    }

    // Comprobamos el micrófono cada 100 ms
    setInterval(checkBlow, 100)
  })
  .catch(function (err) {
    console.error("Acceso al micrófono denegado:", err)
  })

// Modo oscuro
document.getElementById("dark-mode-toggle").addEventListener("click", function () {
  document.body.classList.toggle("dark-mode")
})

// Juego aleatorio
const breathingGames = [
  '../breathing/index.html',
  '../breathing-blow-candle/index.html'
]

document.getElementById("shuffle-btn").addEventListener("click", function () {
  const randomGame = breathingGames[Math.floor(Math.random() * breathingGames.length)]
  window.location.href = randomGame
})
*/


/*
// Detectar audio del micrófono
navigator.mediaDevices.getUserMedia({ audio: true })
  .then(function (stream) {
    // Crear contexto de audio
    const audioContext = new (window.AudioContext || window.webkitAudioContext)()
    const analyser = audioContext.createAnalyser()
    const microphone = audioContext.createMediaStreamSource(stream)
    const dataArray = new Uint8Array(analyser.frequencyBinCount)

    microphone.connect(analyser)

    // Referencias a las imágenes y al texto de apoyo
    const candleLit = document.getElementById("candle-lit") // Vela prendida
    const candleUnlit = document.getElementById("candle-unlit") // Vela apagada
    const instruction = document.querySelector(".instruction") // Texto de instrucciones

    // Configuración inicial
    candleLit.classList.remove("hidden") // Mostrar vela prendida
    candleUnlit.classList.add("hidden") // Ocultar vela apagada
    instruction.textContent = "Sopla para apagar la vela"

    let candleBlown = false // Evita apagar la vela varias veces

    // Función para verificar si hay un soplido
    function checkBlow() {
      analyser.getByteFrequencyData(dataArray)

      // Filtrar frecuencias típicas de un soplido (5000-10000 Hz)
      const filteredFrequencies = dataArray.slice(500, 1000).reduce((acc, val) => acc + val, 0)

      // Si el volumen supera un umbral y no se ha apagado aún la vela
      if (filteredFrequencies > 2500 && !candleBlown) {
        candleBlown = true
        candleLit.classList.add("hidden") // Ocultar vela prendida
        candleUnlit.classList.remove("hidden") // Mostrar vela apagada
        instruction.textContent = "¡Has apagado la vela!" // Cambiar el texto
      }
    }

    // Comprobamos el micrófono cada 100 ms
    setInterval(checkBlow, 100)
  })
  .catch(function (err) {
    console.error("Acceso al micrófono denegado:", err)
  })

// Botón de Inicio
document.getElementById("back-btn").addEventListener("click", function () {
  window.location.href = "../../index.html"
})

// Botón de Modo Oscuro
document.getElementById("dark-mode-btn").addEventListener("click", function () {
  document.body.classList.toggle("dark-mode")
})

// Botón de Juego Aleatorio
const breathingGames = [
  "../breathing/index.html",
  "../breathing-blow-candle/index.html",
  "../breathing-guided/index.html"
]

document.getElementById("shuffle-btn").addEventListener("click", function () {
  const randomGame = breathingGames[Math.floor(Math.random() * breathingGames.length)]
  window.location.href = randomGame
})
*/


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
  "../breathing/index.html",
  "../breathing-blow-candle/index.html",
  "../breathing-guided/index.html"
];

document.getElementById("shuffle-btn").addEventListener("click", function () {
  const randomGame = breathingGames[Math.floor(Math.random() * breathingGames.length)];
  window.location.href = randomGame;
});
