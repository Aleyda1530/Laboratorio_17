// Ejercicio 8 – Propagación de errores entre funciones
// Autora: Aleyda
function nivel2(){
    try{
        let resultado = x + 15;
    } catch(e){
        console.log("Nivel 2 atrapó el error: ", e.message);
        throw e;
    }
}
function nivel1(){
    try{
        nivel2();
    } catch(e){
        console.log("Nivel 1 recibió el error: ", e.message);
        throw error;
    }
}

try{
    nivel1();
} catch(e){
    console.log("ERROR FINAL capturado en el nivel superior: ", e.message);
}