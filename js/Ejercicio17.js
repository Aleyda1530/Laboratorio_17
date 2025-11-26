// Ejercicio 17 – Mensaje con async/await
// Autora: Aleyda
function cargarMensajeAsync() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Mensaje cargado");
        }, 1000);
    });
}
async function ejecutar() {
    let mensaje = await cargarMensajeAsync();
    console.log(mensaje);
}
ejecutar();