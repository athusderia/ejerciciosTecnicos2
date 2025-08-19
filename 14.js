// Dado un String y un numero, repetir el String las veces que diga el numero

// Input: ('denu', 2) -- Palabra y veces que se debe repetir
// Output: 'denu' 'denu'

function repetir(palabra, repetir) {
    let resultado = '';
    for (let i = 0; i < repetir; i++) {
        resultado += palabra + ' '; // Agrega la palabra y un espacio
    }
    return resultado.trim(); // Elimina el espacio extra al final
}

console.log(repetir("Athus", 5)); // Output: "Athus Athus Athus Athus Athus"