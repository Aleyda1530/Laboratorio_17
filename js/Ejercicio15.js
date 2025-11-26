// Ejercicio 15 – División asíncrona con Promesa
// Autora: Aleyda
function dividirAsyncPromesa(a, b) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(b === 0)
                reject(new Error("No es posible dividir entre cero"));
            else
                resolve(a/b);
        }, 1500);
    })
}
//Pruedas
dividirAsyncPromesa(100, 5)
.then((resultado) => {
    console.log("Resultado de la división: ", resultado);
})
.catch((e) => {
    console.log("Error: ", e.message);
})
dividirAsyncPromesa(2992, 0)
.then((resultado) => {
    console.log("Resultado de la división: ", resultado);
})
.catch((e) => {
    console.log("Error: ", e.message);
})
