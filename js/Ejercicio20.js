// Ejercicio 20 – Procesar lista con async/await
// Autora: Aleyda
function esperarProcesamiento(numero) {
    return new Promise((resolve) => {
        let tiempo = Math.floor(Math.random() * (1001)) + 500;
        setTimeout(() => {
            console.log(`Procesando ${numero}...`);
            resolve();
        }, tiempo);
    });
}
async function procesarListaAsync(listaNumeros) {
    for (let numero of listaNumeros) {
        await esperarProcesamiento(numero);
    }
    return "Proceso completado";
}
// Prueba
let numeros = [3, 6, 9, 12];
async function ejecutar() {
    let mensajeFinal = await procesarListaAsync(numeros);
    console.log(mensajeFinal);
}
ejecutar();
