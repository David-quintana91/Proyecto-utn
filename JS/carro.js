console.log("hola mundo!");


const productoA = document.querySelector(".productoA")
const precio = document.querySelector(".precio")
const titulo = document.querySelector(".titulo")
const imgA = document.querySelector(".imgA")

const contenidoGrid = document.querySelector(".contenidoGrid");

try {
    fetch("elementos/productos.json")
.then (respuesta => {
    return respuesta.json ()
})
.then (datos => {
    let contador = 0;
    while (datos.length > contador) {

        let productoA = document.createElement("div")

        let imgA = document.createElement("div")
        let img = document.createElement("img")

        let contenido = document.createElement ("div")

        let titulo = document.createElement ("h2")
        let precio = document.createElement ("p")
        let addcar = document.createElement ("button")

        productoA.setAttribute ("class", "productoA")

        imgA.setAttribute ("class", "imgA")
        img.setAttribute ("src", datos[contador].imgA)

        contenido.setAttribute("class", "contenido")

        titulo.setAttribute("class", "titulo")
        precio.setAttribute("class", "precio")

        titulo.innerHTML= datos[contador].nombre;
        precio.innerHTML = datos[contador].precio + "pesos";
        
        addcar.setAttribute("class", "btnaddcar")
        addcar.innerHTML = "añadir al carrito"
        
        
        productoA.appendChild(imgA)
        imgA.appendChild(img)
        productoA.appendChild(contenido)
        contenido.appendChild(titulo)
        contenido.appendChild(precio)
        contenido.appendChild(addcar)

        contenidoGrid.appendChild(productoA)

 




        
       
        
        contador++;

    }
    
})
} catch (e) {
    console.log(error);
}






