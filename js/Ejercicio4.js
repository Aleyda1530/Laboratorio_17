// Ejercicio 4 – Generar un SyntaxError con JSON.parse
// Autora: Aleyda

try{
    let textoInvalido = "{nombre: Aleyda}";
    let objeto = JSON.parse(textoInvalido);
} catch(error){
    console.log("Nombre de rror: ", error.name);
    console.log("Mensaje del error: ", error.message);
}