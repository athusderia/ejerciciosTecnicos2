// Dado un String poner en mayuscula la primera letra de cada palabra en la cadena y devolverla.

// Input: hola soy denu lemon
// Output: Hola Soy Denu Lemon


const mayuscula = (frase) => {
    // Dividir la frase en palabras, capitalizar cada una y unirlas de nuevo
    return frase
        .toLowerCase() // Convertir toda la frase a minúsculas
        .split(" ") // Dividir la frase en un arreglo de palabras
        .map((palabra) => palabra.charAt(0).toUpperCase() + palabra.slice(1)) // Capitalizar cada palabra
        .join(" "); // Unir las palabras en una sola cadena
};

console.log(mayuscula("hola soy erick")); // Output: "Hola Soy Erick"