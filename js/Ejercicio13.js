// Ejercicio 13 – Mensaje con Promesa
// Autora: Aleyda
function cargarMensajePromesa() {
    return new Promise((resolve) =>{
        setTimeout(() => {
            resolve("Mensaje cargado");
        }, 1000)
    })
}

cargarMensajePromesa()
.then((mensaje) =>{
    console.log(mensaje);
})