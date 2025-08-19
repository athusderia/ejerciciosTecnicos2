// Dado un numero indicar si es capicua o no (se leen igual de izquierda a derecha y viceversa)

// Input: 2002
// Output: true


const capicua =((numero)=>{

    let numeroEvaluar = numero.toString() 
    let numeroEvaluarVolteado = numeroEvaluar.split("").reverse().join("")
    console.log(numeroEvaluar)
    console.log(numeroEvaluarVolteado)

    return (numeroEvaluarVolteado===numeroEvaluar)

})


console.log(capicua(110011))