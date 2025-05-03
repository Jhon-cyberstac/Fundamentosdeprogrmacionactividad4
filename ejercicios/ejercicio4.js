function calcularFactorial() {
    const input = document.getElementById("numero");
    const resultadoDiv = document.getElementById("resultado");
    const valor = parseInt(input.value);

    if (isNaN(valor) || valor < 0) {
        resultadoDiv.innerHTML = "<p>Por favor, introduce un número entero positivo.</p>";
        return;
    }

    let factorial = 1;
    for (let i = 1; i <= valor; i++) {
        factorial *= i;
    }

    resultadoDiv.innerHTML = `<p>El factorial de ${valor} es ${factorial}</p>`;
}
