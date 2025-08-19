// Ejercicio: Contar Palabras en un String
// Descripción:
// Escribe una función en JavaScript que reciba un string y devuelva el número de 
// palabras que contiene. Una palabra se define como una secuencia de caracteres separada por espacios.

const contarPalabras = ((cadena)=>{

     cadena = cadena.split(" ")
    const palabrasFiltradas = cadena.filter(palabra => palabra !=="");

    return palabrasFiltradas.length

})


console.log(contarPalabras("Hola mundo wuuuu  wuwu"))