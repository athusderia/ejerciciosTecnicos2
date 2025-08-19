// Ejercicio: Contar Vocales en un String
// Descripción:
// Escribe una función en JavaScript que reciba un string y devuelva 
// el número de vocales que contiene. Las vocales son a, e, i, o, u (tanto mayúsculas como minúsculas).

// const contarVocalers = ((cadena)=>{

//     let cadenaMIn = cadena.toLowerCase();
//     let array = []
//     let vocales =["a","e","i","o","u"]

//     for(let i=0; i < cadena.length; i++){
//         if(vocales.includes(cadenaMIn[i])){
//             array.push(cadena[i])
//         }
//     }

//     return array.length

// })

const contarVocalers =((cadena)=>{
    const vocales =["a","e","i","o","u"]

    return cadena.toLowerCase().split("").reduce((contador, caracter)=> { return vocales.includes(caracter) ? contador+ 1 :contador;}, 0)

})

console.log(contarVocalers("Hola mundo"))