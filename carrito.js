import {
    listaProductos
} from "./productos.js";

// array vacio para ir cargando las compras al carrito
const carrito = [];


// const precioAcumulado = [JSON.parse(localStorage.getItem("productos"))];
const carritoContenedor = document.getElementById("carrito");


// Saludo e info al abrir pagina de carrito

Swal.fire({
    title: '<strong>¿Cómo comprar?</strong>',
    icon: 'info',
    html: 'De nuestra lista de variedades, haga click en donde dice <b>"seleccione cantidad"</b> para desplegar un menú con opciones.   ' +
        'Seleccione de la lista la cantidad que desea ordenar.   ' +
        'Puede agregar el mismo producto las veces que desee.   ' +
        'En "ver carrito" podra ver las unidades pedidas.  Gracias por su compra :) ',
    showCloseButton: true,
    showCancelButton: false,
    focusConfirm: false,
    confirmButtonText: '<i class="fa fa-thumbs-up"></i> Entiendo!',
    confirmButtonAriaLabel: 'Thumbs up, great!',

})


// Trayendo del localStorage el carrito guardado
 
const carritoLocalStorage = JSON.parse(localStorage.getItem("carritoStorage"));
// carritoLocalStorage = JSON.parse(carritoLocalStorage)
console.log("console log carrito local storage")
console.log(carritoLocalStorage)







// Tratando de mantener la funcionaldiad del carrito si el localStorage no esta vacio. NO PUEDO hacer que el carrito se me cargue con los datos de carritoLocalStorage
if (carritoLocalStorage === [] || carritoLocalStorage === null) {
    console.log("el carrito storage esta vacio");
    
}else {
    carrito === carritoLocalStorage;
    console.log("console log carrito ")
    console.log(carrito)
};












// Funcion para ir agregando elementos al carrito
function agregarAlCarrito(numero) {


    // Condicional IF para agregar las unidades al carrito por medio de pushearle las unidades pedidas

    if (numero === 1) {
        console.log("selecciono producto 1");

        if (carrito.includes(listaProductos[0])) {
            // listaProductos[0].unidadesPedidas = listaProductos[0].unidadesPedidas + 1;
            listaProductos[0].unidadesPedidas++;
            console.log("unidades 1 pedidassssss", listaProductos[0].unidadesPedidas)
        } else {
            carrito.push(listaProductos[0]);
            listaProductos[0].unidadesPedidas = listaProductos[0].unidadesPedidas + 1;
            console.log("unidades 1 pedidassssss", listaProductos[0].unidadesPedidas)
        }

    } else if (numero === 2) {
        console.log("selecciono producto 2");
        if (carrito.includes(listaProductos[1])) {
            // listaProductos[1].unidadesPedidas = listaProductos[1].unidadesPedidas + 1;
            listaProductos[1].unidadesPedidas++;
            console.log("unidades 2 pedidassssss", listaProductos[1].unidadesPedidas)
        } else {
            carrito.push(listaProductos[1]);
            // listaProductos[1].unidadesPedidas = listaProductos[1].unidadesPedidas + 1;
            listaProductos[1].unidadesPedidas++;
            console.log("unidades 2 pedidassssss", listaProductos[1].unidadesPedidas)
        }

    } else if (numero === 3) {
        console.log("selecciono producto 3");
        if (carrito.includes(listaProductos[2])) {
            // listaProductos[2].unidadesPedidas = listaProductos[2].unidadesPedidas + 1;
            listaProductos[2].unidadesPedidas++;
            console.log("unidades 3 pedidassssss", listaProductos[2].unidadesPedidas)
        } else {
            carrito.push(listaProductos[2]);
            // listaProductos[2].unidadesPedidas = listaProductos[2].unidadesPedidas + 1;
            listaProductos[2].unidadesPedidas++;
            console.log("unidades 3 pedidassssss", listaProductos[2].unidadesPedidas)
        }

    } else if (numero === 4) {
        console.log("selecciono producto 4");
        if (carrito.includes(listaProductos[3])) {
            // listaProductos[3].unidadesPedidas = listaProductos[3].unidadesPedidas + 1;
            listaProductos[3].unidadesPedidas++;
            console.log("unidades 4 pedidassssss", listaProductos[3].unidadesPedidas)
        } else {
            carrito.push(listaProductos[3]);
            precios.push(listaProductos[3].precio);
            // listaProductos[3].unidadesPedidas = listaProductos[3].unidadesPedidas + 1;
            listaProductos[3].unidadesPedidas++
            console.log("unidades 4 pedidassssss", listaProductos[3].unidadesPedidas)
        }

    } else if (numero === 5) {
        console.log("selecciono producto 5");
        if (carrito.includes(listaProductos[4])) {
            // listaProductos[4].unidadesPedidas = listaProductos[4].unidadesPedidas + 1;
            listaProductos[4].unidadesPedidas++;
            console.log("unidades 5 pedidassssss", listaProductos[4].unidadesPedidas)
        } else {
            carrito.push(listaProductos[4]);
            // listaProductos[4].unidadesPedidas = listaProductos[4].unidadesPedidas + 1;
            listaProductos[4].unidadesPedidas++;
            console.log("unidades 5 pedidassssss", listaProductos[4].unidadesPedidas)
        }

    } else if (numero === 6) {
        console.log("selecciono producto 6");
        if (carrito.includes(listaProductos[5])) {
        //    listaProductos[5].unidadesPedidas = listaProductos[5].unidadesPedidas + 1;
           listaProductos[5].unidadesPedidas++;
            console.log("unidades 6 pedidassssss", listaProductos[5].unidadesPedidas)
        } else {
            carrito.push(listaProductos[5]);
            // listaProductos[5].unidadesPedidas = listaProductos[5].unidadesPedidas + 1;
            listaProductos[5].unidadesPedidas++;
            console.log("unidades 6 pedidassssss", listaProductos[5].unidadesPedidas)
        }


    } else {
        console.log("producto no valido")
    };

    //   Metodo reduce para sumar todos los precios del carrito
    // const carritoTotal = precios.reduce((a, b) => a + b);
    // console.log(`Total acumulado: $ ${carritoTotal} `);

};


// Renderizado de los productos en la pagina 
const contenedor = document.getElementById("contenedor")

for (const producto of listaProductos) {
    let carritoCompras = document.createElement("div");
    carritoCompras.innerHTML = `
    <div class="card m-5 ${producto.nombre} margenTarjetas ">
        <div class="card-body contenedorTarjetas align-items-center justify-content-center d-flex flex-column">
             <h3 class="card-title m-2 nombreTarjeta nombre">Cerveza ${producto.nombre}</h3>
             <p class="card-text m-2 nombreTarjeta precio">Precio unidad $${producto.precio}</p>
             <p class="card-text m-2 nombreTarjeta codigo">Código producto: ${producto.codigo}</p>
             
             <form id="idFormulario${producto.codigo}" class="align-items-center justify-content-center d-flex flex-column">
               <input id="idInput${producto.codigo}" type="number" placeholder="Seleccione cantidad" class="m-2" required list="listaOpciones">
               <button type="submit" class="btn btn-primary mt-5 botonCarrito" id="boton${producto.codigo}"> Agregar al carrito</button>
             </form>

        </div>
    </div>
    
    <datalist id="listaOpciones">
    <option value="6">
    <option value="12">
    <option value="24">
    </datalist>
    `;
    contenedor.append(carritoCompras);
    const botonCarrito = document.getElementById(`boton${producto.codigo}`);
    botonCarrito.addEventListener("click", () => agregarAlCarrito(producto.codigo));

    //  sacarle default al form, no me funciona (agregue el input y el button a un form con id `form${producto.codigo}`)
    const form = document.getElementById(`idFormulario${producto.codigo}`);
    form.addEventListener("click", (e) => {
        e.preventDefault()
    })


    // agregando sweet alert al boton de agregar al carrito
    botonCarrito.addEventListener("click", () => {
        Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Producto cargado correctamente',
            showConfirmButton: false,
            timer: 1500
        })
    });

    // Leyendo cantidad de latas pedidas y transportando esa cantidad al array para generar el pedido y el precio final
    const idInput = document.getElementById(`idInput${producto.codigo}`);

    botonCarrito.addEventListener("click", () => leerCantidad(idInput))

    function leerCantidad() {
        console.log(idInput.value);
        let cantidadPedida = idInput.value;
        console.log("cantidad pedida", cantidadPedida);


        // ternario FUNCIONAL reemplazando cadena de if de abajo. dejo silenciado porque me resulta mas practico leer de la otra forma
        // botonCarrito === boton1 ? listaProductos[0].unidadesPedidas = parseInt(cantidadPedida) + parseInt(listaProductos[0].unidadesPedidas) - 1 :  botonCarrito === boton2 ? listaProductos[1].unidadesPedidas = parseInt(cantidadPedida) + parseInt(listaProductos[1].unidadesPedidas) - 1 :botonCarrito === boton3 ? listaProductos[2].unidadesPedidas = parseInt(cantidadPedida) + parseInt(listaProductos[2].unidadesPedidas) - 1 : botonCarrito === boton4 ? listaProductos[3].unidadesPedidas = parseInt(cantidadPedida) + parseInt(listaProductos[3].unidadesPedidas) - 1 : botonCarrito === boton5 ? listaProductos[4].unidadesPedidas = parseInt(cantidadPedida) + parseInt(listaProductos[4].unidadesPedidas) - 1 : botonCarrito === boton6 ? listaProductos[5].unidadesPedidas = parseInt(cantidadPedida) + parseInt(listaProductos[5].unidadesPedidas) - 1 : console.log("fin");
        
        if (botonCarrito === boton1) {
            listaProductos[0].unidadesPedidas = parseInt(cantidadPedida) + parseInt(listaProductos[0].unidadesPedidas) - 1;
        }

        if (botonCarrito === boton2) {
            listaProductos[1].unidadesPedidas = parseInt(cantidadPedida) + parseInt(listaProductos[1].unidadesPedidas) - 1;
        }

        if (botonCarrito === boton3) {
            listaProductos[2].unidadesPedidas = parseInt(cantidadPedida) + parseInt(listaProductos[2].unidadesPedidas) - 1;
        }

        if (botonCarrito === boton4) {
            listaProductos[3].unidadesPedidas = parseInt(cantidadPedida) + parseInt(listaProductos[3].unidadesPedidas) - 1;
        }

        if (botonCarrito === boton5) {
            listaProductos[4].unidadesPedidas = parseInt(cantidadPedida) + parseInt(listaProductos[4].unidadesPedidas) - 1;
        }

        if (botonCarrito === boton6) {
            listaProductos[5].unidadesPedidas = parseInt(cantidadPedida) + parseInt(listaProductos[5].unidadesPedidas) - 1;
        }


// agrego clase para ocultar el carrito cada vez que cargo producto nuevo para que se recargue al apretar "ver carrito"
        carritoContenedor.classList.add("ocultar");
    }

};

// Funcionalidad al boton de Ver carrito
function renderizadoPrecio() {
    const carritoContenedor = document.getElementById("carrito");

    // Calculo de cada parte que compone el precio final unidad * precio unitario
    
    let resultado1 = parseInt(listaProductos[0].unidadesPedidas) * parseInt(listaProductos[0].precio);
    let resultado2 = parseInt(listaProductos[1].unidadesPedidas) * parseInt(listaProductos[1].precio);
    let resultado3 = parseInt(listaProductos[2].unidadesPedidas) * parseInt(listaProductos[2].precio);
    let resultado4 = parseInt(listaProductos[3].unidadesPedidas) * parseInt(listaProductos[3].precio);
    let resultado5 = parseInt(listaProductos[4].unidadesPedidas) * parseInt(listaProductos[4].precio);
    let resultado6 = parseInt(listaProductos[5].unidadesPedidas) * parseInt(listaProductos[5].precio);

    let resultadoFinal = resultado1 + resultado2 + resultado3 + resultado4 + resultado5 + resultado6;

    const precioFinal = document.getElementById("precioFinal")
    precioFinal.innerHTML = ``;
    let precioParrafo = document.createElement(`div`)
    precioParrafo.innerHTML = `<h2>El total de su compra es $ ${resultadoFinal} .</h2>
    `;
    carritoContenedor.append(precioParrafo);

}


// Funcion para "ver carrito de compras" 
function verCarrito() {
  
    // const carritoLocalStorage = JSON.parse(localStorage.getItem("carritoStorage"));
    // // carritoLocalStorage = JSON.parse(carritoLocalStorage)
    // console.log("console log carrito local storage")
    // console.log(carritoLocalStorage)

    // if (carritoLocalStorage !== []) {
    //     carrito === carritoLocalStorage;
    // };

    // Renderizado de los productos en el carrito de compras
    
    carritoContenedor.classList.remove("ocultar");
    carritoContenedor.innerHTML = ``;

    for (const elementos of carrito) {

        let contenidoCarrito = document.createElement("div");
        contenidoCarrito.classList.add(`divCarritoLista`);
        contenidoCarrito.innerHTML = `
        <div id="" class="d-flex flex-row flex-wrap borrarDiv">
            <h3 class="m-3">Cerveza: ${elementos.nombre}</h3>
            <h4 class="m-3">Precio por unidad: $ ${elementos.precio} </h4>
            <h4 class="m-3">Codigo: ${elementos.codigo}</h4>
            <h4 class="m-3">Unidades: ${elementos.unidadesPedidas}</h4>
        </div>
        `;
        carritoContenedor.append(contenidoCarrito);
    };

    localStorage.setItem("carritoStorage", JSON.stringify(carrito));

    // Llamo funcion de precio final del carrito
    renderizadoPrecio();

    // creo el boton para cerrar el carrito
    let botonCerrarCarrito = document.createElement(`div`);
    botonCerrarCarrito.innerHTML = `<button id="cerrarCarritoCompras" class="">Cerrar carrito</button>`;
    carritoContenedor.append(botonCerrarCarrito);

    // Funcionalidad boton cerrar carrito

    let botonCerrarCarritoFuncion = document.getElementById(`cerrarCarritoCompras`);
    botonCerrarCarritoFuncion.addEventListener(`click`, ()=> {
    
        carritoContenedor.classList.add("ocultar");
    })

    
    // creo el boton para eliminar el carrito y doy funcionalidad para vaciar
    let botonEliminarCarrito = document.createElement(`button`);
    
    botonEliminarCarrito.innerHTML = "Eliminar";
    carritoContenedor.append(botonEliminarCarrito);
    botonEliminarCarrito.addEventListener("click", () => {
    carrito.length=0;
    // precioParrafo.length=0
    carritoContenedor.classList.add("ocultar");
    listaProductos[0].unidadesPedidas=0;
    listaProductos[1].unidadesPedidas=0;
    listaProductos[2].unidadesPedidas=0;
    listaProductos[3].unidadesPedidas=0;
    listaProductos[4].unidadesPedidas=0;
    listaProductos[5].unidadesPedidas=0;

    // reseteando el carrito del localStorage al clickear en eliminar
    localStorage.setItem("carritoStorage", JSON.stringify([]))
})

    

};

const verCarritoFinal = document.getElementById("verCarritoFinal");
verCarritoFinal.addEventListener("click", verCarrito);



