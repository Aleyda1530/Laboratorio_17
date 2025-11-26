// Ejercicio 16 – Procesar lista usando Promesas
// Autora: Aleyda
function procesarListaPromesa(listaNumeros) {
    let promesas = listaNumeros.map((numero) => {
        return new Promise((resolve) => {
            let tiempo = Math.floor(Math.random()*(701)) + 500;
            setTimeout(() => {
                console.log(`Procesando ${numero}...`);
                resolve();
            }, tiempo);
        })
    })
    return Promise.all(promesas)
    .then(() => {
            return "Proceso completado";
        })
}
let numeros = [3, 9, 30, 100];
procesarListaPromesa(numeros)
.then((mensajeFinal) => {
    console.log(mensajeFinal);
})