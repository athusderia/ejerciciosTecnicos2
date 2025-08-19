// Descripción:
// Escribe una función en JavaScript que reciba un array de números y devuelva la suma de todos los números pares que contiene.

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const sumaPares =((array)=>{
//     let suma=0

//     for(let i=0; i<array.length; i++){
//         if(array[i] %2 ===0){
//             suma=suma+array[i]
//         }
//     }
//     return suma
// })

const sumaPares =((array)=>{

    return array.reduce((suma, numero)=> numero %2 === 0 ? suma+ numero: suma,0)
})




console.log(sumaPares(numeros))