// Dado un array de numeros, sacar la media de todos (la suma de todos los numeros dividido por la cantidad de elementos, el promedio)

// Input: [1,2,3]
// Output: 3


const media =((array)=>{

    array = cleanArray(array)

    const suma = array.reduce((a,b) => a+b,0 )

    return Math.round((suma/array.length))
    // return (suma/array.length)

})

const cleanArray =((array)=>{
    array = array.filter(element => typeof element ==='number')
    return array
})


console.log(media([1,5,6,3,66,7, 'Hola']))