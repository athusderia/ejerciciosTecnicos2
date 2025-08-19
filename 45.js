// Dado un array de alumnos, con su nombre y su calificacion, mostrar cuantos aprobaron y cuantos no. (Aprobás con 6)

// Input: [["Denu", 4], ["Jorge", 2], ["Mafalda", 10]]
// Output: 2 suspensos y 1 aprobado


const aprobados =((array)=>{
    let aprobados = 0
    let reprobados = 0

    for(let i=0; i<array.length; i++){
    array[i][1] >=6 ? aprobados ++ : reprobados ++

    }
    return `Aprobados: ${aprobados} Reprobados: ${reprobados}`


})


console.log(aprobados([["Denu", 8], ["Jorge", 2], ["Mafalda", 10]]))