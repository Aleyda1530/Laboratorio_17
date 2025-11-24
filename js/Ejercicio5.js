// Ejercicio 5 – Error en console.log con catch y finally
// Autora: Aleyda
try{
    console.logNoexiste("Probamod el error");
} catch(error){
    console.log("falló");
} finally{
    console.log("siempre se ejecuta");
}