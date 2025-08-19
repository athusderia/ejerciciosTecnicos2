// Letras consecutivas

const cambiarLetras = (cadena) => {
    let resultado = "";
    let i = 0;

    while (i < cadena.length) {
        let letra = cadena[i];
        let count = 1;

        // Contamos cuántas veces se repite la letra consecutivamente
        while (i + count < cadena.length && cadena[i + count] === letra) {
            count++;
        }

        // Si hay 3 o más caracteres repetidos, los reemplazamos por (count / 3) veces la siguiente letra
        if (count >= 3) {
            let newChar = String.fromCharCode(letra.charCodeAt(0) + 1);
            resultado += newChar.repeat(Math.floor(count / 3)); 
        } else {
            resultado += letra.repeat(count);
        }

        // Avanzamos en la cadena
        i += count;
    }

    return resultado;
};

// Pruebas
console.log(cambiarLetras("aaa"));       // "b"
console.log(cambiarLetras("bbb"));       // "c"
console.log(cambiarLetras("aaaaaa"));    // "bb"
console.log(cambiarLetras("bbbbbb"));    // "cc"
console.log(cambiarLetras("aaaaaaaaa")); // "bbb"
console.log(cambiarLetras("ccccccccc")); // "ddd"
console.log(cambiarLetras("abc"));       // "abc"
console.log(cambiarLetras("aaabbbccc")); // "bcc"
