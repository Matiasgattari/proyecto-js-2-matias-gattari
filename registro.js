// PARTE DE REGISTRO DE USUARIOS


// sacando el default al formulario de registro
const formularioRegistro = document.getElementById(`formularioRegistro`);
formularioRegistro.addEventListener("click", (e) => {
    e.preventDefault()
});


const formularioLogin = document.getElementById(`formularioLogin`);
formularioLogin.addEventListener("click", (e) => {
    e.preventDefault()
});


let usuarios = [];

const registrar = document.getElementById(`registrar`)


// Agregando evento al boton de registrar
registrar.addEventListener("click", () => {

    let inputNombre = document.getElementById("inputNombre");
    // localStorage.setItem(`Nombre`, inputNombre.value);

    let inputApellido = document.getElementById(`inputApellido`);
    // localStorage.setItem(`Apellido`, inputApellido.value);

    let inputDireccion = document.getElementById(`inputDireccion`);
    // localStorage.setItem(`Direccion`, inputDireccion.value);

    let inputContrasenia = document.getElementById("inputContrasenia");
    // localStorage.setItem(`contrasenia`,inputContrasenia.value);

    let inputNombreValor = inputNombre.value;
    let inputApellidoValor = inputApellido.value;
    let inputDireccionValor = inputDireccion.value;
    let inputContraseniaValor = inputContrasenia.value;

// funcion constructora de usuarios
    class Usuarios {

        constructor(inputNombreValor, inputApellidoValor, inputDireccionValor, inputContraseniaValor) {
            this.nombre = inputNombreValor;
            this.apellido = inputApellidoValor;
            this.direccion = inputDireccionValor;
            this.contrasenia = inputContraseniaValor;
        }
    }
    usuarios.push(new Usuarios(inputNombreValor, inputApellidoValor, inputDireccionValor, inputContraseniaValor))
    console.log(usuarios);

     localStorage.setItem("usuarios", JSON.stringify(usuarios));
});





// PARTE DE LOGIN

// agregando evento al boton de login
const botonLogin = document.getElementById(`botonLogin`);
botonLogin.addEventListener(`click`, () => {

    let usuarioLogin = document.getElementById(`usuarioLogin`);
    let usuarioLoginValor = usuarioLogin.value;
    let contraseniaLogin = document.getElementById(`contraseniaLogin`);
    let contraseniaLoginValor = contraseniaLogin.value



    // TRATAR DE PASAR ACA UN FOR EACH para cada usuario del arreglo USUARIOS para buscar nombre de usuario y contrasenia iguales
    // no puedo guardar el arreglo usuarios completo en el localStorage, solo se me guarda el ultimo usuario ingresado.
    let usuarioStorage = JSON.parse(localStorage.getItem(`usuarios`));


// usando IF para validar inicio de sesion, vinculado al usuario posicion 0 del array usuario
if (usuarioLoginValor === usuarioStorage[0].nombre && contraseniaLoginValor === usuarioStorage[0].contrasenia) {
    Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Tu sesion ha sido inisiada',
        showConfirmButton: false,
        timer: 2500
      })
} else {
    Swal.fire({
        position: 'center',
        icon: 'error',
        title: 'Datos incorrectos. Por favor ingrese los datos correctos',
        showConfirmButton: false,
        timer: 4500
      })
}
});
