const formularioInicio = document.getElementById(`formularioInicio`);
formularioInicio.addEventListener("click", (e) => {
    e.preventDefault()
});

// const login = document.getElementById("login")
// login.addEventListener("click", () =>{
//     let inputUsuario= document.getElementById("usuario");
//     localStorage.setItem(`usuario`, inputUsuario.value);
//     let contrasenia = document.getElementById("contrasenia");
//     localStorage.setItem(`contrasenia`,contrasenia.value);
//       });
      

let usuarioRegistrado = localStorage.getItem(`Nombre`)
let usuario = document.getElementById(`usuario`)

let contraseniaRegistrada = localStorage.getItem(`contrasenia`);
let contrasenia = document.getElementById(`contrasenia`);

const login = document.getElementById(`login`)
login.addEventListener("click", () => {
  console.log(usuarioRegistrado);
  console.log(usuario.value);
  console.log(contraseniaRegistrada);
  console.log(contrasenia.value);

  if (usuarioRegistrado === usuario.value && contraseniaRegistrada === contrasenia.value) {
    alert("sesion iniciada")
  } else {
    alert ("usuario incorrecto")
  }
})

