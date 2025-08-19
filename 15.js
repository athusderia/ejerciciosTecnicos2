function caracterMasUsado(texto) {
    // Objeto para contar la frecuencia de cada carácter
    const frecuencia = {};

    // Recorremos el string y contamos la frecuencia de cada carácter
    for (let caracter of texto) {
        if (frecuencia[caracter]) {
            frecuencia[caracter]++;
        } else {
            frecuencia[caracter] = 1;
        }
    }

    // Encontrar el carácter con la frecuencia más alta
    let caracterMasFrecuente = '';
    let maxFrecuencia = 0;

    for (let caracter in frecuencia) {
        if (frecuencia[caracter] > maxFrecuencia) {
            maxFrecuencia = frecuencia[caracter];
            caracterMasFrecuente = caracter;
        }
    }

    return caracterMasFrecuente;
}

console.log(caracterMasUsado("denuuu")); // Output: "u"