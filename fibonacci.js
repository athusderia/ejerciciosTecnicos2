function fibo(n){
    let seq=[0,1];

    for (let i=2; i<n; i++){
        seq[i] = seq[i-1] + seq[i-2];
    }
    return seq;
}

console.log(fibo(10))

// 1. Recursividad simple (pero ineficiente)
function fiboRecursivo(n) {
    if (n <= 1) {
        return n;
    }
    return fiboRecursivo(n - 1) + fiboRecursivo(n - 2);
}

// Ejemplos de uso:
console.log("Recursivo simple:");
console.log(fiboRecursivo(10)); // Solo el número en posición 10