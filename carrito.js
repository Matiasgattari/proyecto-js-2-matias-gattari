import {
    listaProductos
} from "./productos.js";

// array vacio para ir cargando las compras y los precios
const carrito = [];
const precios = [];

// funcion para ir agregando elementos al carrito
function agregarAlCarrito(numero) {

// Condicional IF para ir pusheando cada precio especifico del producto que el cliente desea

    if (numero === 1) {
        console.log("selecciono producto 1");
        carrito.push(listaProductos[0]);
        precios.push(listaProductos[0].precio);
        // console.log(precios);
        // console.log(carrito);

    } else if (numero === 2) {
        console.log("selecciono producto 2");
        carrito.push(listaProductos[1]);
        precios.push(listaProductos[1].precio);
        // console.log(precios);
        // console.log(carrito);

    } else if (numero === 3) {
        console.log("selecciono producto 3");
        carrito.push(listaProductos[2]);
        precios.push(listaProductos[2].precio);
        // console.log(precios);
        // console.log(carrito);

    } else if (numero === 4) {
        console.log("selecciono producto 4");
        carrito.push(listaProductos[3]);
        precios.push(listaProductos[3].precio);
        // console.log(precios);
        // console.log(carrito);

    } else if (numero === 5) {
        console.log("selecciono producto 5");
        carrito.push(listaProductos[4]);
        precios.push(listaProductos[4].precio);
        // console.log(precios);
        // console.log(carrito);

    } else if (numero === 6) {
        console.log("selecciono producto 6");
        carrito.push(listaProductos[5]);
        precios.push(listaProductos[5].precio);
        // console.log(precios);
        // console.log(carrito);
    }  else {
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
function verCarrito () {
    const carritoContenedor = document.getElementById("carrito");
    carritoContenedor.innerHTML =``;


    for ( const elementos of carrito) {
    
        let contenidoCarrito = document.createElement("div");
        contenidoCarrito.classList.add(`divCarritoLista`);
        contenidoCarrito.innerHTML = `
        <div id="divCarritoLista" class="d-flex flex-row flex-wrap">
            <h3>Cerveza: ${elementos.nombre}</h3>
            <h4>Precio por unidad: $ ${elementos.precio} </h4>
            <h4>Codigo: Código ${elementos.codigo}</h4>
        </div>
        `;
        carritoContenedor.append(contenidoCarrito);
    };

// filtrar para ver cuantos elementos de cada uno hay en el carrito




    const carritoFiltrado1 = carrito.filter(carrito => carrito.codigo === 1);
    console.log("ver carrito filtrado 1.........................................")
    console.log(carritoFiltrado1);
    const carritoFiltrado2 = carrito.filter(carrito => carrito.codigo === 2);
    console.log("ver carrito filtrado 2.........................................")
    console.log(carritoFiltrado2);
    const carritoFiltrado3 = carrito.filter(carrito => carrito.codigo === 3);
    console.log("ver carrito filtrado 3.........................................")
    console.log(carritoFiltrado3);
    const carritoFiltrado4 = carrito.filter(carrito => carrito.codigo === 4);
    console.log("ver carrito filtrado 4.........................................")
    console.log(carritoFiltrado4);
    const carritoFiltrado5 = carrito.filter(carrito => carrito.codigo === 5);
    console.log("ver carrito filtrado 5.........................................")
    console.log(carritoFiltrado5);
    const carritoFiltrado6 = carrito.filter(carrito => carrito.codigo === 6);
    console.log("ver carrito filtrado 6.........................................")
    console.log(carritoFiltrado6);

    console.log("")
    console.log("")
    console.log("")
    console.log("")
    console.log("")


    // obtengo datos de filtros y los cuento
    if (carritoFiltrado1.length !== 0) {
        console.log (listaProductos[0]);
        console.log(`Usted pidio ${carritoFiltrado1.length} unidades de cerveza rubia`);
    } else {
        console.log ("no pediste cerveza rubia")
    }
        
     if (carritoFiltrado2.length !== 0) {
        console.log (listaProductos[1]);
        console.log(`Usted pidio ${carritoFiltrado2.length} unidades de cerveza negra`);
    }else {
        console.log ("no pediste cerveza negra")
    }

     if (carritoFiltrado3.length !== 0) {
        console.log (listaProductos[2]);
        console.log(`Usted pidio ${carritoFiltrado3.length} unidades de cerveza roja`);
    } else {
        console.log ("no pediste cerveza roja")
    }
    
    if (carritoFiltrado4.length !== 0) {
        console.log (listaProductos[3]);
        console.log(`Usted pidio ${carritoFiltrado4.length} unidades de cerveza honey`);
    } else {
        console.log ("no pediste cerveza honey")
    }
    
    if (carritoFiltrado5.length !== 0) {
        console.log (listaProductos[4]);
        console.log(`Usted pidio ${carritoFiltrado5.length} unidades de cerveza ipa`);
    } else {
        console.log ("no pediste cerveza ipa")
    }
    
    if (carritoFiltrado6.length !== 0) {
        console.log (listaProductos[5]);
        console.log(`Usted pidio ${carritoFiltrado6.length} unidades de cerveza pale ale`);
    } else {
        console.log ("no pediste cerveza pale ale")
    };

    };
    


const verCarritoFinal = document.getElementById("verCarritoFinal");
verCarritoFinal.addEventListener("click", verCarrito);






