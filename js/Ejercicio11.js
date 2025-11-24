// Ejercicio 11 – División asíncrona con callback
// Autora: Aleyda
function dividirAsync(a, b, callback){
    setTimeout(() => {
        if(b === 0)
            callback(new Error("No se puede dividir entre cero"), null);
        else
            callback(null, a/b);
    }, 1500);
}
//Pruedas
dividirAsync(15, 3, function(e, resultado){
    if(e)
        console.log("Error: ", e.message);
    else
        console.log("Resultado de la división: ", resultado);
});
dividirAsync(50, 0, function(error, resultado) {
    if (error) {
        console.log("Error:", error.message);
    } else {
        console.log("Resultado de la división:", resultado);
    }
});