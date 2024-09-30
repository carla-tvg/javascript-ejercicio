function convertirTemperatura(gradosCelsius) {
    const kelvin = gradosCelsius + 273.15;
    const fahrenheit = (gradosCelsius * 9/5) + 32;

    return {
        kelvin: kelvin.toFixed(2),
        fahrenheit: fahrenheit.toFixed(2)
    };
}

function convertir() {
    const input = document.getElementById("celsius");
    const gradosC = parseFloat(input.value);
    const resultados = document.getElementById("resultados");

    // Validar la entrada
    if (isNaN(gradosC)) {
        alert("Por favor, ingrese un número válido."); // Mensaje de error
        input.value = ""; // Limpiar el input
        return; // Salir de la función
    }

    const conversion = convertirTemperatura(gradosC);
    resultados.innerHTML = `Kelvin: ${conversion.kelvin}, Fahrenheit: ${conversion.fahrenheit}`;
    console.log(`Kelvin: ${conversion.kelvin}, Fahrenheit: ${conversion.fahrenheit}`);
}
