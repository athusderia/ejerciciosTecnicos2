// Escribe una función en JavaScript que 
// reciba un array de nombres completos y 
// devuelva un nuevo array con las iniciales 
// de cada persona en mayúsculas.

const nombres = ["Juan Pérez", "María López", "Carlos Sánchez", "Ana"];


const iniciales =((array)=>{

    const iniciales = array.map(letras => letras.split(" ").map(inicial => inicial[0].toUpperCase()).join(""))


    return iniciales

})


console.log(iniciales(nombres))