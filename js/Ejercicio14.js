// Ejercicio 14 – Cargar usuario con Promesa
// Autora: Aleyda
function cargarUsuarioPromesa() {
    return new Promise((resolve) => {
        let tiempo = Math.floor(Math.random()*(701)) + 800;
        setTimeout(() => {
            let usuario = {
                id: 1, nombre: "Aleyda"
            };
            resolve(usuario);
        }, tiempo);
    })
}
cargarUsuarioPromesa()
.then((usuario) => {
    console.log(`Usuario cargado: ${usuario.nombre} (ID: ${usuario.id})`);
})