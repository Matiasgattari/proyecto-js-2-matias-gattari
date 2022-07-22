import { listaProductos } from "./productos.js";

// Renderizado de los productos en la pagina 


const contenedor = document.getElementById("contenedor")
for (const producto of listaProductos) {
    let carritoCompras = document.createElement("div");
    carritoCompras.innerHTML = `
    <div class="card m-5 ${producto.nombre} margenTarjetas ">
        <div class="card-body contenedorTarjetas align-items-center justify-content-center d-flex flex-column">
             <h3 class="card-title m-2 nombreTarjeta">Cerveza ${producto.nombre}</h3>
             <p class="card-text m-2 nombreTarjeta">Precio $ ${producto.precio}</p>
             <input type="number" placeholder="Cantidad" class="m-2">
             <button id="botonCarrito" type="submit" class="btn btn-primary mt-5"> Agregar al carrito</button>
        </div>
    </div>`;
    contenedor.append(carritoCompras);
 }



// const divContenedorCarrito = 