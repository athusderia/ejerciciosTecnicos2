// Dados dos numeros indicar cual es mayor y cual es menor.

// Input: (2, 5)
// Output: 2 is less than 5

const numeroMayor = (num1, num2) => {
    if (num1 > num2) {
        return `El ${num1} es mayor que ${num2}`;
    } else {
        return `El ${num2} es mayor que ${num1}`;
    }
};

console.log(numeroMayor(3, 89)); // Output: "El 89 es mayor que 3"