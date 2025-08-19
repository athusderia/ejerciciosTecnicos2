// Dado un numero, indicar que tipo de angulo es (recto, agudo, obtuso, etc..)

// Referencia

// Agudos < 90

// Recto == 90

// Obtuso > 90

// Llano == 180

// Completo == 360

// Mayor a 180 < 180

// Input: 90

// Output: Angulo Recto


const angulo = ((grade)=>{
    let result =""

    switch(true){
        case (grade > 90):
            result = "Angulo Agudo"
            break;
        case (grade == 90):
            result = "Angulo Recto"
            break;
        case (grade < 90 && grade < 180):
            result = "Angulo Obtuso"
            break;
        case (grade == 180):
            result= "Angulo Llano";
            break;
        case (grade > 180 && grade < 360):
            result = "Angulo Concavo"
            break;
        default:
            result = "Angulo Completo"
            break;
    }
    return result;

})

console.log(angulo(90))