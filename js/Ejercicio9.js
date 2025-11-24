// Ejercicio 9 – Función con callback y temporizador
// Autora: Aleyda

function cargarMensaje(callback){
    setTimeout(() => {
        callback("Mensaje cargado");
    }, 1000);
}
cargarMensaje(function(mensaje){
    console.log(mensaje);
})