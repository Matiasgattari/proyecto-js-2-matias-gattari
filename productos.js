// const listaProductos2 = [];


// // creando el array de productos por medio de un class constructor
// const listaProductos = [];

// // class Productos {
// //     constructor(codigo, nombre, precio, stock,unidadesPedidas) {
// //         this.codigo = codigo;
// //         this.nombre = nombre;
// //         this.precio = precio;
// //         this.cantidad = stock;
// //         this.unidadesPedidas = unidadesPedidas;
// //         };
    
// //     };

// // Renderizado de los productos en la pagina 



// // const cargar = async  ()=>{

// //     // const response = await fetch ("./data.json");
// //     // const productosResponse = await response.json()
// //     fetch("./data.json")
// //     .then(response  => response.json() )
// //     .then(data => {
// //         console.log(data);

// //         data.forEach((producto) =>{
// //               listaProductos.push(new Productos(producto.codigo, producto.nombre, producto.precio, producto.cantidad, producto.unidadesPedidas))
// //              })
// //              const contenedor = document.getElementById("contenedor")

// //              for (const producto of listaProductos) {
// //                  let carritoCompras = document.createElement("div");
// //                  console.log("log de carrito compras",carritoCompras)
// //                  carritoCompras.innerHTML = `
// //                  <div class="card m-5 ${producto.nombre} margenTarjetas ">
// //                      <div class="card-body contenedorTarjetas align-items-center justify-content-center d-flex flex-column">
// //                           <h3 class="card-title m-2 nombreTarjeta nombre">Cerveza ${producto.nombre}</h3>
// //                           <p class="card-text m-2 nombreTarjeta precio">Precio unidad $${producto.precio}</p>
// //                           <p class="card-text m-2 nombreTarjeta codigo">Código producto: ${producto.codigo}</p>
                          
// //                           <form id="idFormulario${producto.codigo}" class="align-items-center justify-content-center d-flex flex-column">
// //                             <input id="idInput${producto.codigo}" type="number" placeholder="Seleccione cantidad" class="m-2" required list="listaOpciones">
// //                             <button type="submit" class="btn btn-primary mt-5 botonCarrito" id="boton${producto.codigo}"> Agregar al carrito</button>
// //                           </form>
             
// //                      </div>
// //                  </div>
                 
// //                  <datalist id="listaOpciones">
// //                  <option value="6">
// //                  <option value="12">
// //                  <option value="24">
// //                  </datalist>
// //                  `;
// //                  contenedor.append(carritoCompras);
// //                  const botonCarrito = document.getElementById(`boton${producto.codigo}`);
// //                  botonCarrito.addEventListener("click", () => agregarAlCarrito(producto.codigo));
             
// //                  //  sacarle default al form, no me funciona (agregue el input y el button a un form con id `form${producto.codigo}`)
// //                  const form = document.getElementById(`idFormulario${producto.codigo}`);
// //                  form.addEventListener("click", (e) => {
// //                      e.preventDefault()
// //                  })
             
             
// //                  // agregando sweet alert al boton de agregar al carrito
// //                  botonCarrito.addEventListener("click", () => {
// //                      Swal.fire({
// //                          position: 'center',
// //                          icon: 'success',
// //                          title: 'Producto cargado correctamente',
// //                          showConfirmButton: false,
// //                          timer: 1500
// //                      })
// //                  });
             
// //                  // Leyendo cantidad de latas pedidas y transportando esa cantidad al array para generar el pedido y el precio final
// //                  const idInput = document.getElementById(`idInput${producto.codigo}`);
             
// //                  botonCarrito.addEventListener("click", () => leerCantidad(idInput))
             
// //                  function leerCantidad() {
// //                      console.log(idInput.value);
// //                      let cantidadPedida = idInput.value;
// //                      console.log("cantidad pedida", cantidadPedida);
             
             
// //                      // ternario FUNCIONAL reemplazando cadena de if de abajo. dejo silenciado porque me resulta mas practico leer de la otra forma
// //                      // botonCarrito === boton1 ? listaProductos[0].unidadesPedidas = parseInt(cantidadPedida) + parseInt(listaProductos[0].unidadesPedidas) - 1 :  botonCarrito === boton2 ? listaProductos[1].unidadesPedidas = parseInt(cantidadPedida) + parseInt(listaProductos[1].unidadesPedidas) - 1 :botonCarrito === boton3 ? listaProductos[2].unidadesPedidas = parseInt(cantidadPedida) + parseInt(listaProductos[2].unidadesPedidas) - 1 : botonCarrito === boton4 ? listaProductos[3].unidadesPedidas = parseInt(cantidadPedida) + parseInt(listaProductos[3].unidadesPedidas) - 1 : botonCarrito === boton5 ? listaProductos[4].unidadesPedidas = parseInt(cantidadPedida) + parseInt(listaProductos[4].unidadesPedidas) - 1 : botonCarrito === boton6 ? listaProductos[5].unidadesPedidas = parseInt(cantidadPedida) + parseInt(listaProductos[5].unidadesPedidas) - 1 : console.log("fin");
                     
// //                      if (botonCarrito === boton1) {
// //                          listaProductos[0].unidadesPedidas = parseInt(cantidadPedida) + parseInt(listaProductos[0].unidadesPedidas) - 1;
// //                      }
             
// //                      if (botonCarrito === boton2) {
// //                          listaProductos[1].unidadesPedidas = parseInt(cantidadPedida) + parseInt(listaProductos[1].unidadesPedidas) - 1;
// //                      }
             
// //                      if (botonCarrito === boton3) {
// //                          listaProductos[2].unidadesPedidas = parseInt(cantidadPedida) + parseInt(listaProductos[2].unidadesPedidas) - 1;
// //                      }
             
// //                      if (botonCarrito === boton4) {
// //                          listaProductos[3].unidadesPedidas = parseInt(cantidadPedida) + parseInt(listaProductos[3].unidadesPedidas) - 1;
// //                      }
             
// //                      if (botonCarrito === boton5) {
// //                          listaProductos[4].unidadesPedidas = parseInt(cantidadPedida) + parseInt(listaProductos[4].unidadesPedidas) - 1;
// //                      }
             
// //                      if (botonCarrito === boton6) {
// //                          listaProductos[5].unidadesPedidas = parseInt(cantidadPedida) + parseInt(listaProductos[5].unidadesPedidas) - 1;
// //                      }
             
             
// //              // agrego clase para ocultar el carrito cada vez que cargo producto nuevo para que se recargue al apretar "ver carrito"
// //                      carritoContenedor.classList.add("ocultar");
// //                  }
             
// //              };
// //     })
// //     // console.log("productosResponse response.json", productosResponse);


    

// // };

// // cargar ();

// // console.log("listaProductos post fetch",listaProductos2);






// // class Productos {
// //     constructor(codigo, nombre, precio, stock,unidadesPedidas) {
// //         this.codigo = codigo;
// //         this.nombre = nombre;
// //         this.precio = precio;
// //         this.cantidad = stock;
// //         this.unidadesPedidas = unidadesPedidas;
// //         };
    
// //     };

// // let producto1 = new Productos(1, "Rubia", 120, 50,0);
// // let producto2 = new Productos(2, "Negra", 130, 50,0);
// // let producto3 = new Productos(3, "Roja",140, 50,0);
// // let producto4 = new Productos(4, "Honey", 150, 50,0);
// // let producto5 = new Productos(5, "Ipa", 150, 50,0);
// // let producto6 = new Productos(6, "Pale", 150, 50,0);
// // let producto7 = new Productos(7, "Pale", 150, 50,0);

// // listaProductos.push(producto1);
// // listaProductos.push(producto2);
// // listaProductos.push(producto3);
// // listaProductos.push(producto4);
// // listaProductos.push(producto5);
// // listaProductos.push(producto6);
// // listaProductos.push(producto7);

// // comprobacion de carga de productos 
// // console.log(producto1);
// // console.log(producto2);
// // console.log(producto3);
// // console.log(producto4);

// // comprobacion creacion de array con productos
// console.log("console log de listaProductos previo a fetch",listaProductos);

// export {listaProductos};