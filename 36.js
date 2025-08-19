// Dado un String, devolver cuantas consonantes y vocales tiene.

// Input: denu
// Output: Consonantes: 2 Vocales: 2

const letras = (frase) => {
  let vocales = ["a", "e", "i", "o", "u"];
  let contadorVocales = 0;
  let contadorConsonantes = 0;

  let fraseSeparada = frase.toLowerCase().split("");

  for (let i = 0; i < fraseSeparada.length; i++) {
    if (vocales.includes(fraseSeparada[i])) {
      contadorVocales++;
    } else {
      contadorConsonantes++;
    }
  }

  return `La frase tiene ${contadorVocales} vocales y ${contadorConsonantes}`;
};

console.log(letras("athus"));
