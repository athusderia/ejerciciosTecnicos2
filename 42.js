// Dado dos numeros, sacar un numero random entre ellos

// Input: 1,100
// Output: 46 -- Random


const random =((num1, num2)=>{

    const numRandom = Math.random() *((num2 - num1) + num1)

    return Math.round(numRandom)


})


console.log(random(1,55))