// Dado un array de numeros, devolver el array sin elementos duplicados. Lo mismo si hay algun String, debemos borrarlo

// Input: [1,1,2,2,3,3,'denu']
// Output: [1,2,3]

const noDuplicados = ((array)=>{

    const arrayLimpio = new Set(array)

    return arrayLimpio

})


console.log(noDuplicados([1,1,2,2,3,3]))