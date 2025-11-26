// Ejercicio 19 – División asíncrona con async/await
// Autora: Aleyda
function dividirAsyncAwait(a, b) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (b === 0)
                reject(new Error("No es posible dividir entre cero"));
            else
                resolve(a / b);
        }, 1500);
    });
}
//Pruebas
async function ejecutar() {
    try {
        let resultado = await dividirAsyncAwait(900, 5);
        console.log("Resultado de la división:", resultado);
    } catch (e) {
        console.log("Error:", e.message);
    }
    try {
        let resultadoErroneo = await dividirAsyncAwait(1, 0);
        console.log("Resultado de la división:", resultadoErroneo);
    } catch (e) {
        console.log("Error:", e.message);
    }
}
ejecutar();
