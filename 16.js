
// Dado una cadena de texto, devolver cuantas vocales tiene la misma.

//  Input: `denu`
//   Output: `2`

const buscarVocales = (palabra) => {
    const vocales = ["a", "e", "i", "o", "u"]; // Lista de vocales
    let contador = 0;

    for (let i = 0; i < palabra.length; i++) {
        if (vocales.includes(palabra[i].toLowerCase())) { // Convertir a minúscula para comparar
            contador = contador + 1;
        }
    }
    return contador;
};

console.log(buscarVocales("Arturo")); // Output: 3