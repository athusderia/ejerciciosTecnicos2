// Dado un String, si hay mas mayusculas, pasar todo a mayuscula, y viceversa.

// Input: "DENu"
// Output: DENU

const toMayusOrMinus = (stringToEvaluate) => {
    let minusAmount = 0;
    let mayusAmount = 0;

    for (let i = 0; i < stringToEvaluate.length; i++) {
        const letter = stringToEvaluate[i];

        if (letter >= "A" && letter <= "Z") { // Verifica si es una letra mayúscula
            mayusAmount++;
        } else if (letter >= "a" && letter <= "z") { // Verifica si es una letra minúscula
            minusAmount++;
        }
    }

    return mayusAmount > minusAmount ? stringToEvaluate.toUpperCase() : stringToEvaluate.toLowerCase();
};

console.log(toMayusOrMinus("HOL a 123!")); // Output: "hola 123!"