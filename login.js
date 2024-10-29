import { datos } from "./datos.js";
localStorage.clear();
const btn = document.getElementById("btn-iniciar")

btn.addEventListener("click",(e)=>{
    e.preventDefault()
    let nombre = document.getElementById("ingresar-user").value
    let clave = document.getElementById("ingresar-clave").value
    let msg = "Usuario Y/o contraseña incorrectas"

    datos.forEach( usuario =>{
        if (nombre === usuario.nombre){
            if (clave === usuario.clave){
                msg = nombre + " Iniciaste Sesion"
                console.log(usuario)
                localStorage.setItem("username", usuario.nombre)
                localStorage.setItem("clave", usuario.clave)
                window.location.href = "./home.html"
            }
            
        }
      

    })
    alert(msg)
    nombre = ""
    clave = ""
})

console.log(localStorage.getItem("username"));


