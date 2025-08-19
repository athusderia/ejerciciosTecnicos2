// Dado un array de numeros, devolver el mismo con sus numeros elevados al cuadrado, y se debe eliminar cualquier contenido que no sea numerico

// Input: [5,6,7,"denu"]
// Output: [25,36,49]

const numerosAlCuadrado =((array)=>{

    for(let i=0; i<array.length; i++){
        array[i] = array[i]*array[i]
    }

    return array

})

console.log(numerosAlCuadrado([5,6,7,]))