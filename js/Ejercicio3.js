// Ejercicio 3 – Provocar un error e imprimir su mensaje
// Autora: Aleyda

try{
    let resultado = variableDefinida +10;
} catch(error){
    console.log("Mensaje del error", error.message);
}