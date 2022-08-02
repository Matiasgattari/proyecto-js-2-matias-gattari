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



    Swal.fire({
        title: `Usuario registrado con exito`,
        timer: 2500,
        timerProgressBar: true,
        allowOutsideClick: true,
        showConfirmButton: false
    });

});




// PARTE DE LOGIN

// agregando evento al boton de login
const botonLogin = document.getElementById(`botonLogin`);

botonLogin.addEventListener(`click`, () => {

    let usuarioLogin = document.getElementById(`usuarioLogin`);
    let usuarioLoginValor = usuarioLogin.value;
    let contraseniaLogin = document.getElementById(`contraseniaLogin`);
    let contraseniaLoginValor = contraseniaLogin.value


    // debugger;

    // trayendo valores del localStorage como array
    let usuariosStorage = JSON.parse(localStorage.getItem("usuarios"));
    console.log(usuariosStorage);

    // debugger;

// validacion de que el nombre de usuario y contrasenia estan en el localStorage, por medio de forEach

    usuariosStorage.forEach(object => {
        if (object.nombre === usuarioLoginValor && object.contrasenia === contraseniaLoginValor) {
            Swal.fire({
                title: `Sesion iniciada`,
                timer: 2500,
                timerProgressBar: true,
                allowOutsideClick: true,
                showConfirmButton: false
            });
        } else {
            Swal.fire({
                title: `intente nuevamente`,
                timer: 2500,
                timerProgressBar: true,
                allowOutsideClick: true,
                showConfirmButton: false
            });
        }
    });

});