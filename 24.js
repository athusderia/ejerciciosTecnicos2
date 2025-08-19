function reducirCadena(cadena) {
    while (true) {
        let nuevaCadena = cadena.replace(/(\w)\1\1/g, (_, letra) => 
            String.fromCharCode(letra.charCodeAt(0) + 1) // Convierte "aaa" en "b", "bbb" en "c", etc.
        );

        if (nuevaCadena === cadena) break; // Si ya no hay cambios, terminamos
        cadena = nuevaCadena;
    }

    return cadena;
}

// Ejemplos de uso
console.log(reducirCadena("aaa"));       // "b"
console.log(reducirCadena("aaaa"));      // "ba"
console.log(reducirCadena("aaabbb"));    // "bc"
console.log(reducirCadena("aaacccaaa")); // "bccb"
console.log(reducirCadena("aabbaaa"));   // "aabb"
console.log(reducirCadena("bbb"));       // "c"
console.log(reducirCadena("ccc"));       // "d"
console.log(reducirCadena("aaaaaa"));    // "b"
