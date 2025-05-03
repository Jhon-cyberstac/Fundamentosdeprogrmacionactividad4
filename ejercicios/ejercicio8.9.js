let totalFacturacion = 0;
let litrosArticulo1 = 0;
let facturasMayores600 = 0;
let contadorFacturas = 0;

const form = document.getElementById("facturaForm");
const resultadoDiv = document.getElementById("resultado");

form.addEventListener("submit", function(event) {
    event.preventDefault();

    const codigo = parseInt(document.getElementById("codigo").value);
    const litros = parseFloat(document.getElementById("litros").value);
    const precio = parseFloat(document.getElementById("precio").value);

    const subtotal = litros * precio;
    totalFacturacion += subtotal;

    if (codigo === 1) {
        litrosArticulo1 += litros;
    }

    if (subtotal > 600) {
        facturasMayores600++;
    }

    contadorFacturas++;

    if (contadorFacturas === 5) {
        mostrarResultados();
        form.reset();
        form.querySelector("button").disabled = true;
    } else {
        form.reset();
    }
});

function mostrarResultados() {
    resultadoDiv.innerHTML = `
        <h2>Resultados</h2>
        <p>Facturación total: $${totalFacturacion.toFixed(2)}</p>
        <p>Litros vendidos del artículo 1: ${litrosArticulo1}</p>
        <p>Facturas con importe mayor a 600: ${facturasMayores600}</p>
    `;
}
