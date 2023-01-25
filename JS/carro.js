console.log("hola mundo!");
alert("Haciendo el trabajo");

try {
    fetch("elementos/productos.json")
.then (respuesta => {
    return respuesta.json ()
})
.then (datos => console.log(datos))
} catch (e) {
    console.log(error);
}