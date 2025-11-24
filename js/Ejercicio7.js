// Ejercicio 7 – Manejo de TypeError con instanceof
// Autora: Aleyda
try{
    let valorNulo = null;
    let resultado = valorNulo.nombre;
} catch(e) {
    if (e instanceof TypeError)
        console.log("Hubo un TypeError: ", e.message);
    else
        console.log("Hubo un error diferente: " + e.message);
}