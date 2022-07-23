import {
    listaProductos
} from "./productos.js";

const carrito = [];

// Renderizado de los productos en la pagina 
function agregarAlCarrito(numero) {
    // console.log("agregado correctamente")
    // console.log(numero)
  if (numero === 1) {
    console.log("selecciono producto 1");
carrito.push(listaProductos[0].precio);
console.log(carrito);
  } else if (numero === 2) {
    console.log("selecciono producto 2");
    carrito.push(listaProductos[1].precio);
    console.log(carrito);
  } else if (numero === 3) {
    console.log("selecciono producto 3");
    carrito.push(listaProductos[2].precio);
    console.log(carrito);
  } else if (numero === 4) {
    console.log("selecciono producto 4");
    carrito.push(listaProductos[3].precio);
    console.log(carrito);
  } else { console.log ("producto no valido")};
  const carritoTotal = carrito.reduce((a,b) => a + b );
console.log(`Total acumulado: $ ${carritoTotal} `);
};

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
             <button type="submit" class="btn btn-primary mt-5 botonCarrito" id="boton${producto.codigo}"> Agregar al carrito</button>
        </div>
    </div>`;
    contenedor.append(carritoCompras);
    const botonCarrito = document.getElementById(`boton${producto.codigo}`);
    botonCarrito.addEventListener("click", () => agregarAlCarrito(producto.codigo));


};


