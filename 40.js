// Dado un array de numeros devolver el valor mas bajo y el valor mas alto

// Input: [1,2,3,4,5]
// Output: Bajo: 1 Alto:5

const evaluar = ((array)=>{

    array = array.sort()

    return `Menor: ${array[0]} mayor: ${array[array.length-1]} `

})

console.log(evaluar([1,5,7,3,99,0]))