const resultadoDiv = document.getElementById("resultado");

while (true) {
    let entrada = prompt("Introduce un número (negativo para salir):");
    let numero = parseFloat(entrada);

    if (isNaN(numero)) {
        resultadoDiv.innerHTML += `<p>'${entrada}' no es un número válido.</p>`;
        continue;
    }

    if (numero < 0) {
        resultadoDiv.innerHTML += "<p>Programa terminado. Se ingresó un número negativo.</p>";
        break;
    }

    let cuadrado = numero * numero;
    resultadoDiv.innerHTML += `<p>El cuadrado de ${numero} es ${cuadrado}</p>`;
}
