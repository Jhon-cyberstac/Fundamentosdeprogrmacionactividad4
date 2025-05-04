let randomNumber = Math.floor(Math.random() * 50) + 1; // Genera un número aleatorio entre 1 y 50
let guesses = 0; // Inicializa el contador de intentos del jugador
const guessInput = document.querySelector("#guess"); // Obtiene el elemento de entrada de HTML para la suposición del jugador
const guessSubmit = document.querySelector("#submit"); // Obtiene el botón de envío de HTML
const resetButton = document.querySelector("#reset"); // Obtiene el botón de reinicio de HTML
const resultText = document.querySelector("#result"); // Obtiene el elemento de texto de HTML para mostrar los resultados

function checkGuess() {
    const userGuess = Number(guessInput.value); // Obtiene la suposición del jugador del campo de entrada y la convierte a número
    if (userGuess === randomNumber) { // Comprueba si la suposición del jugador es correcta
        resultText.textContent = `¡Felicidades! Adivinaste el número en ${guesses} intentos.`; // Muestra un mensaje de éxito con el número de intentos
        guessInput.disabled = true; // Deshabilita el campo de entrada
        guessSubmit.disabled = true; // Deshabilita el botón de envío
        resetButton.style.display = "block"; // Muestra el botón de reinicio
    } else if (userGuess < randomNumber) { // Comprueba si la suposición del jugador es demasiado baja
        resultText.textContent = "El número es mayor."; // Muestra un mensaje indicando que el número es mayor
        guesses++; // Incrementa el contador de intentos
    } else if (userGuess > randomNumber) { // Comprueba si la suposición del jugador es demasiado alta
        resultText.textContent = "El número es menor."; // Muestra un mensaje indicando que el número es menor
        guesses++; // Incrementa el contador de intentos
    }
}

function resetGame() {
    randomNumber = Math.floor(Math.random() * 50) + 1; // Genera un nuevo número aleatorio
    guesses = 0; // Reinicia el contador de intentos
    guessInput.disabled = false; // Habilita el campo de entrada
    guessSubmit.disabled = false; // Habilita el botón de envío
    resultText.textContent = ""; // Borra el texto del resultado
    resetButton.style.display = "none"; // Oculta el botón de reinicio
    guessInput.value = ""; // Limpia el valor en el campo de entrada
}

guessSubmit.addEventListener("click", checkGuess); // Agrega un detector de eventos al botón de envío para llamar a la función checkGuess cuando se hace clic
resetButton.addEventListener("click", resetGame); // Agrega un detector de e
