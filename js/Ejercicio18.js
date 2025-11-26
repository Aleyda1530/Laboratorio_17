// Ejercicio 18 – Cargar usuario con async/await
// Autora: Aleyda
function cargarUsuarioAsync() {
    return new Promise((resolve) => {
        let tiempo = Math.floor(Math.random()*(701)) + 800;
        setTimeout(() => {
            let usuario = {
                id: 1, nombre: "Aleyda"
            };
            resolve(usuario);
        }, tiempo);
    });
}
async function ejecutar() {
    let usuario = await cargarUsuarioAsync();
    console.log(`Usuario cargado: ${usuario.nombre} (ID: ${usuario.id})`);
}
ejecutar();
