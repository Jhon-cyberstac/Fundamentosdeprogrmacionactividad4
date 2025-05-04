document.addEventListener('DOMContentLoaded', () => {
    const formularioNumeros = document.getElementById('formulario-numeros');
    const resultadosDiv = document.getElementById('resultados');
    const mediaPositivosSpan = document.getElementById('media-positivos');
    const mediaNegativosSpan = document.getElementById('media-negativos');
    const cantidadCerosSpan = document.getElementById('cantidad-ceros');

    formularioNumeros.addEventListener('submit', (event) => {
        event.preventDefault();

        const numeros = [];
        let hasErrors = false;

        for (let i = 1; i <= 10; i++) {
            const inputName = `numero${i}`;
            const inputValue = document.querySelector(`[name="${inputName}"]`).value;
            const valor = parseFloat(inputValue);

            if (!isNaN(valor)) {
                numeros.push(valor);
            } else {
                alert('Por favor, ingrese números válidos en todos los campos.');
                hasErrors = true;
                break;
            }
        }

        if (hasErrors) {
            return;
        }

        if (numeros.length === 10) {
            let positivos = [];
            let negativos = [];
            let ceros = 0;

            numeros.forEach(num => {
                if (num > 0) {
                    positivos.push(num);
                } else if (num < 0) {
                    negativos.push(num);
                } else {
                    ceros++;
                }
            });

            const mediaPositivos = positivos.length > 0
                ? positivos.reduce((suma, num) => suma + num, 0) / positivos.length
                : 0;
            const mediaNegativos = negativos.length > 0
                ? negativos.reduce((suma, num) => suma + num, 0) / negativos.length
                : 0;

            mediaPositivosSpan.textContent = mediaPositivos.toFixed(2);
            mediaNegativosSpan.textContent = mediaNegativos.toFixed(2);
            cantidadCerosSpan.textContent = ceros;

            resultadosDiv.classList.remove('oculto');
        } else {
            alert('Por favor, ingrese los 10 números.');
        }
    });
});
