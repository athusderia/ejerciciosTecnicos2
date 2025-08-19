// Reto: Filtrar y Formatear Nombres
// Escribe una función en JavaScript que reciba un array de objetos con
// información de personas y devuelva un nuevo array con los nombres de
// las personas mayores de 18 años, en mayúsculas.

const people = [
  { name: "Ana", age: 17 },
  { name: "Carlos", age: 22 },
  { name: "Elena", age: 30 },
  { name: "Luis", age: 15 },
];

const personasMayores = (array) => {
  let mayores = [];

  for (let i = 0; i < array.length; i++) {
    // console.log(array[i].age)
    if (array[i].age >= 18) {
      mayores.push(array[i].name.toUpperCase());
    }
  }
  return mayores;
};

// const personasMayores = (array) =>
//     array
//       .filter(persona => persona.age >= 18)  // Filtra solo mayores de 18
//       .map(persona => persona.name.toUpperCase()); // Convierte los nombres a mayúsculas
  
//   console.log(personasMayores(people));
  

console.log(personasMayores(people));
