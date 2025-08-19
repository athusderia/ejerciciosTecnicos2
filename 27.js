// Dado un numero mostrar a cuantos años, meses y dias equivale.

// Input: 920
// Output: 2 años, 6 meses y 2 dias

const calcularTiempo =((diasCalcular)=>{

    let años = Math.floor(diasCalcular / 365)
    let meses = Math.floor((diasCalcular % 365) / 30)
    let dias = Math.floor((diasCalcular % 365) % 30)


    return `${años} ${meses} ${dias}`

})


console.log(calcularTiempo(920))