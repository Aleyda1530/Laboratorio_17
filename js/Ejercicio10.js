// Ejercicio 10 – Callback con tiempo aleatorio y objeto usuario
// Autora: Aleyda

function cargarUsuario(callback) {
    let tiempoEspera = Math.floor(Math.random()*(1500-800+1))+800;
    setTimeout(() => {
        let usuario = {
            id: 1, nombre: "Aleyda"
        };
        callback(usuario);
    }, tiempoEspera);
}

cargarUsuario(function(usuario) {
    console.log(`Usuario cargado: ${usuario.nombre} (ID: ${usuario.id})`);
});