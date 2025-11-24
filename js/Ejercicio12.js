// Ejercicio 12 – Procesar lista con tiempos aleatorios y callback final
// Autora: Aleyda

function procesarLista(listaNumeros, callbackFinal){
    let cantidadProcesada = 0;
    listaNumeros.forEach((numero) => {
        let tiempo = Math.floor(Math.random()*( 1500 - 500 + 1)) + 500;
        setTimeout(() =>{
            console.log((`Procesando ${numero}...`));
            cantidadProcesada++;
            if(cantidadProcesada === listaNumeros.length){
                callbackFinal("Proceso totalmente completo");
            }
        }, tiempo);
    });
}
let numeros = [5, 10, 20, 35];
procesarLista(numeros, function(mensaje){
    console.log(mensaje);
})
