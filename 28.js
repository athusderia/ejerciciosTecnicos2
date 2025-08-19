// Dado un numero devolver su factorial (La multiplifacion de todos los numeros hasta llegar a el)

// Input: 3
// Output: 6 (1x2x3)


const factorial = ((numero)=>{
    let factorial =1
    for(let i=2; i<=numero; i++){
        factorial = factorial * i
    }
    console.log(factorial)

})

factorial(5);