// Escribe una función en JavaScript que reciba un array de productos y 
// devuelva un nuevo array con los nombres en mayúsculas solo de los 
// productos que cuestan más de 20 dólares.

const products = [
    { name: "Laptop", price: 800 },
    { name: "Mouse", price: 15 },
    { name: "Teclado", price: 25 },
    { name: "Monitor", price: 200 },
    { name: "USB", price: 10 }
  ];

  
const productosMayores=((products)=>{
    let productosFiltrados =  products.filter(producto => producto.price >20).map(producto =>producto.name.toUpperCase())

      return productosFiltrados

})

console.log(productosMayores(products))