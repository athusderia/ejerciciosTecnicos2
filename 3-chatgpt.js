// Escribe una función en JavaScript que reciba un array 
// de palabras y devuelva un nuevo array con las palabras 
// que tienen más de 5 letras, pero invertidas.

const palabras = ["hola", "javascript", "código", "web", "desarrollo", "API"];


const palabrasLargas = ((array)=>{
    let palabrasRepetidas =[]
    
    for(let i=0; i <array.length; i++ ){
        if(array[i].length >= 5){
            palabrasRepetidas.push(array[i])
        }

    }
     let palabrasInversas = palabrasRepetidas.map(palabra => palabra.split("").reverse().join(""))

    return palabrasInversas
})

console.log(palabrasLargas(palabras))