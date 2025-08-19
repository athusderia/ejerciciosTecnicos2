// Dado un numero mostrar una lista de los cuadrados de todos los numeros naturales hasta llegar al mismo.

// Input: 5
// Output: [ 0, 1, 4, 9, 16 ]

const cuadradoNumero =((number)=>{
    return number*number
})


const mostrarCuadrados =((number)=>{
    let array =[]

    for(let i=0; i<number; i++){
        array.push(cuadradoNumero(i))
    }
    return array
})

console.log(mostrarCuadrados(5))