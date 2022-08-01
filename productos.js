// creando el array de productos por medio de un class constructor
const listaProductos = [];

class Productos {
    constructor(codigo, nombre, precio, stock,unidadesPedidas) {
        this.codigo = codigo;
        this.nombre = nombre;
        this.precio = precio;
        this.cantidad = stock;
        this.unidadesPedidas = unidadesPedidas;
        };
    
    };

let producto1 = new Productos(1, "Rubia", 120, 50,0);
let producto2 = new Productos(2, "Negra", 130, 50,0);
let producto3 = new Productos(3, "Roja",140, 50,0);
let producto4 = new Productos(4, "Honey", 150, 50,0);
let producto5 = new Productos(5, "Ipa", 150, 50,0);
let producto6 = new Productos(6, "Pale", 150, 50,0);

listaProductos.push(producto1);
listaProductos.push(producto2);
listaProductos.push(producto3);
listaProductos.push(producto4);
listaProductos.push(producto5);
listaProductos.push(producto6);

// comprobacion de carga de productos 
// console.log(producto1);
// console.log(producto2);
// console.log(producto3);
// console.log(producto4);

// comprobacion creacion de array con productos
// console.log(listaProductos);

export {listaProductos};