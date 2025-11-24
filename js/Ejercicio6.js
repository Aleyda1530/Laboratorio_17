// Ejercicio 6 – Función validarEdad con manejo de errores
// Autora: Aleyda
function validarEdad(edad) {
    if(isNaN(edad) || edad < 0)
        throw new Error("Edad inválida");
    return "Edad válida: " + edad;
}
try{
    let resultado = validadEdad(-19);
    console.log(resultado);
} catch (e){
    console.log("Ocurrió un error ", e.message);
}