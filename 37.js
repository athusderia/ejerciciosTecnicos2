// Dado un numero mostrar una lista de los cuadrados de todos los numeros naturales hasta llegar al mismo.

// Input: 5
// Output: [ 0, 1, 4, 9, 16 ]


const textoRepetido = (frase) => {
    // Objeto para almacenar la frecuencia de cada elemento
    let frecuencia = {};

    // Recorrer el array y contar la frecuencia de cada elemento
    for (let i = 0; i < frase.length; i++) {
        let elemento = frase[i];
        if (frecuencia[elemento]) {
            frecuencia[elemento]++;
        } else {
            frecuencia[elemento] = 1;
        }
    }

    // Variables para almacenar el elemento más frecuente y su cantidad
    let elementoMasFrecuente;
    let maxFrecuencia = 0;

    // Recorrer el objeto de frecuencias para encontrar el elemento más frecuente
    for (let elemento in frecuencia) {
        if (frecuencia[elemento] > maxFrecuencia) {
            maxFrecuencia = frecuencia[elemento];
            elementoMasFrecuente = elemento;
        }
    }
    

    return elementoMasFrecuente;
};

console.log(textoRepetido(["hola", "hola", "mundo"])); // "hola"
console.log(textoRepetido(["denu", "denu", "lemon"])); // "denu"
console.log(textoRepetido(["a", "b", "c", "a", "b", "a"])); // "a"