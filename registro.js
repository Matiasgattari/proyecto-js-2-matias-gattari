const formularioRegistro = document.getElementById(`formularioRegistro`);
formularioRegistro.addEventListener("click", (e) => {
    e.preventDefault()
});

const registrar = document.getElementById(`registrar`)
registrar.addEventListener("click", () =>{
    let inputNombre= document.getElementById("inputNombre");
    localStorage.setItem(`Nombre`, inputNombre.value);

    let inputApellido= document.getElementById(`inputApellido`);
    localStorage.setItem(`Apellido`, inputApellido.value);

    let inputDireccion= document.getElementById(`inputDireccion`);
    localStorage.setItem(`Direccion`, inputDireccion.value);

    let inputContrasenia = document.getElementById("inputContrasenia");
    localStorage.setItem(`contrasenia`,inputContrasenia.value);

      });
      
