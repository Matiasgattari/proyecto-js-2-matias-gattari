import {
    listaProductos
} from "./productos.js";

// Renderizado de los productos en la pagina 


const contenedor = document.getElementById("contenedor")
for (const producto of listaProductos) {
    let carritoCompras = document.createElement("div");
    carritoCompras.innerHTML = `
    <div class="card m-5 ${producto.nombre} margenTarjetas ">
        <div class="card-body contenedorTarjetas align-items-center justify-content-center d-flex flex-column divTarjeta">
             <h3 class="card-title m-2 nombreTarjeta nombre">Cerveza ${producto.nombre}</h3>
             <p class="card-text m-2 nombreTarjeta precio">Precio $ ${producto.precio}</p>
             <p class="card-text m-2 nombreTarjeta codigo">${producto.codigo}</p>
             <input type="number" placeholder="Cantidad" class="m-2">
             <button type="submit" class="btn btn-primary mt-5 botonCarrito  ${producto.codigo}"> Agregar al carrito</button>
        </div>
    </div>`;
    contenedor.append(carritoCompras);
};
// console.log(contenedor)







const arrayCarrito = [];

const botonCarrito = document.querySelectorAll(".botonCarrito");

function agregarAlCarrito() {
   
console.log("producto agregado al carrito")
};

botonCarrito.forEach((botonCarrito) => {
    botonCarrito.addEventListener("click", agregarAlCarrito);
    
});
