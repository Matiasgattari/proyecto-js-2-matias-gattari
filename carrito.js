import {
    listaProductos
} from "./productos.js";

// array vacio para ir cargando las compras y los precios
const carrito = [];
const precios = [];
const precioAcumulado = [];

// funcion para ir agregando elementos al carrito
function agregarAlCarrito(numero) {

    // Condicional IF para ir pusheando cada precio especifico del producto que el cliente desea

    if (numero === 1) {
        console.log("selecciono producto 1");

        if (carrito.includes(listaProductos[0])) {
            precios.push(listaProductos[0].precio);
            listaProductos[0].unidadesPedidas = listaProductos[0].unidadesPedidas + 1;
            console.log("unidades 1 pedidassssss", listaProductos[0].unidadesPedidas)
        } else {
            carrito.push(listaProductos[0]);
            precios.push(listaProductos[0].precio);
            listaProductos[0].unidadesPedidas = listaProductos[0].unidadesPedidas + 1;
            console.log("unidades 1 pedidassssss", listaProductos[0].unidadesPedidas)
        }

    } else if (numero === 2) {
        console.log("selecciono producto 2");
        if (carrito.includes(listaProductos[1])) {
            precios.push(listaProductos[1].precio);
            listaProductos[1].unidadesPedidas = listaProductos[1].unidadesPedidas + 1;
            console.log("unidades 2 pedidassssss", listaProductos[1].unidadesPedidas)
        } else {
            carrito.push(listaProductos[1]);
            precios.push(listaProductos[1].precio);
            listaProductos[1].unidadesPedidas = listaProductos[1].unidadesPedidas + 1;
            console.log("unidades 2 pedidassssss", listaProductos[1].unidadesPedidas)
        }

    } else if (numero === 3) {
        console.log("selecciono producto 3");
        if (carrito.includes(listaProductos[2])) {
            precios.push(listaProductos[2].precio);
            listaProductos[2].unidadesPedidas = listaProductos[2].unidadesPedidas + 1;
            console.log("unidades 3 pedidassssss", listaProductos[2].unidadesPedidas)
        } else {
            carrito.push(listaProductos[2]);
            precios.push(listaProductos[2].precio);
            listaProductos[2].unidadesPedidas = listaProductos[2].unidadesPedidas + 1;
            console.log("unidades 3 pedidassssss", listaProductos[2].unidadesPedidas)
        }

    } else if (numero === 4) {
        console.log("selecciono producto 4");
        if (carrito.includes(listaProductos[3])) {
            precios.push(listaProductos[3].precio);
            listaProductos[3].unidadesPedidas = listaProductos[3].unidadesPedidas + 1;
            console.log("unidades 4 pedidassssss", listaProductos[3].unidadesPedidas)
        } else {
            carrito.push(listaProductos[3]);
            precios.push(listaProductos[3].precio);
            listaProductos[3].unidadesPedidas = listaProductos[3].unidadesPedidas + 1;
            console.log("unidades 4 pedidassssss", listaProductos[3].unidadesPedidas)
        }



    } else if (numero === 5) {
        console.log("selecciono producto 5");
        if (carrito.includes(listaProductos[4])) {
            precios.push(listaProductos[4].precio);
            listaProductos[4].unidadesPedidas = listaProductos[4].unidadesPedidas + 1;
            console.log("unidades 5 pedidassssss", listaProductos[4].unidadesPedidas)
        } else {
            carrito.push(listaProductos[4]);
            precios.push(listaProductos[4].precio);
            listaProductos[4].unidadesPedidas = listaProductos[4].unidadesPedidas + 1;
            console.log("unidades 5 pedidassssss", listaProductos[4].unidadesPedidas)
        }



    } else if (numero === 6) {
        console.log("selecciono producto 6");
        if (carrito.includes(listaProductos[5])) {
            precios.push(listaProductos[5].precio);
            listaProductos[5].unidadesPedidas = listaProductos[5].unidadesPedidas + 1;
            console.log("unidades 6 pedidassssss", listaProductos[5].unidadesPedidas)
        } else {
            carrito.push(listaProductos[5]);
            precios.push(listaProductos[5].precio);
            listaProductos[5].unidadesPedidas = listaProductos[5].unidadesPedidas + 1;
            console.log("unidades 6 pedidassssss", listaProductos[5].unidadesPedidas)
        }


    } else {
        console.log("producto no valido")
    };

    //   Metodo reduce para sumar todos los precios del carrito
    const carritoTotal = precios.reduce((a, b) => a + b);
    console.log(`Total acumulado: $ ${carritoTotal} `);




};


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
             <button type="submit" class="btn btn-primary mt-5 botonCarrito" id="boton${producto.codigo}"> Agregar al carrito</button>
        </div>
    </div>`;
    contenedor.append(carritoCompras);
    const botonCarrito = document.getElementById(`boton${producto.codigo}`);
    botonCarrito.addEventListener("click", () => agregarAlCarrito(producto.codigo));


};



// Funcion para "ver carrito de compras" 
function verCarrito() {




    // Renderizado de los productos en el carrito de compras
    const carritoContenedor = document.getElementById("carrito");
    carritoContenedor.innerHTML = ``;


    for (const elementos of carrito) {

        let contenidoCarrito = document.createElement("div");
        contenidoCarrito.classList.add(`divCarritoLista`);
        contenidoCarrito.innerHTML = `
        <div id="divCarritoLista" class="d-flex flex-row flex-wrap">
            <h3 class="m-3">Cerveza: ${elementos.nombre}</h3>
            <h4 class="m-3">Precio por unidad: $ ${elementos.precio} </h4>
            <h4 class="m-3">Codigo: ${elementos.codigo}</h4>
            <h4 class="m-3">Codigo: Unidades ${elementos.unidadesPedidas}</h4>

        </div>
        `;
        carritoContenedor.append(contenidoCarrito);

    };


};


// Funcionalidad al boton de Ver carrito

const verCarritoFinal = document.getElementById("verCarritoFinal");
verCarritoFinal.addEventListener("click", verCarrito);

function renderizadoPrecio() {

    const precioFinalMostrar = (precios.reduce((a, b) => a + b));
    const precioFinal = document.getElementById("precioFinal")
    precioFinal.innerHTML = ``;
    let precioParrafo = document.createElement(`div`)
    precioParrafo.innerHTML = `<h2>El total de su compra es $ ${precioFinalMostrar} .</h2>
    `;
    precioFinal.append(precioParrafo);

}

verCarritoFinal.addEventListener("click", renderizadoPrecio);