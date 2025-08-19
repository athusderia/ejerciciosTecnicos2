// Dado un array de Strings, devolver otro con los valores que esten formados por mas de dos palabras

// Input: ["hola denu", "pastel", "rosa"]
// Output: ["hola denu"]

const newString = ((array)=>{

    let newArray =[]

    for(let i=0 ; i < array.length; i++){
        if(array[i].split(" ").length >= 2){
            newArray.push(array[i])
        }
    }

    return newArray
})


console.log(newString(["Hola athus", "Deria", "Delia", "Hola mundo"]))