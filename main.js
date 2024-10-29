import { Cuenta } from "./cuenta.js";
import { Usuario } from "./usuario.js";
import { datos } from "./datos.js";

const username = localStorage.getItem("username")

const usuario = datos.find((user)=> user.nombre === username) //encontramos al usuario que inicio sesion
console.log(usuario);

datos.splice(datos.indexOf(usuario), 1) ///Sacamos al usuario que se registro


const selecMiCuen = document.getElementById("opciones-mi-cuentas") //hago referencia al selec, para mostrar las cuentas del usuario registrado
const selecOtraCuenta = document.getElementById("opciones-otra-cuentas")//hago referencia añ selec que nos va a mostrar las cuentas
const btnCerrar = document.getElementById("cerrar-sesion")
const btnTransferir = document.getElementById("btn-hacer-transferencia")//boton que va a inicar la transferencia
btnTransferir.addEventListener("click" , capturarDatos)

btnCerrar.addEventListener("click", (e)=>{
    e.preventDefault();
    localStorage.clear();
     window.location.href = "./index.html"
})

usuario.cuentas.forEach(data =>{ //hacemos que podamos ver las distintas cuentas que tiene el usuario para usar
    const option = document.createElement("option")
    option.value = data.id_cuenta;
    option.textContent = data.titular
    selecMiCuen.appendChild(option)
    
})


datos.forEach(datos=>{ //hacemos que podamos ver todas las cuentas a las que podemos transferir
    datos.cuentas.forEach(cuentas=>{
        const option = document.createElement("option")
        option.value = cuentas.id_cuenta
        option.textContent = cuentas.titular
        selecOtraCuenta.appendChild(option)
    })
})



function capturarDatos(){ //capturamos y verificamos que todos los campos esten completos
    let inpTransfer = document.getElementById("inp-transfer").value
    if(selecMiCuen.value!="" && selecOtraCuenta!="" && inpTransfer!= ""){//Usamos la condicion para verificar que todos los campos esten completos

        let obtener;
        let otraCuenta;
        let miCuenta = usuario.cuentas.find((id)=>id.id_cuenta === parseInt(selecMiCuen.value))
        console.log(miCuenta);
        
        for (let data of datos) {
             obtener = data.cuentas.find(cuenta => cuenta.id_cuenta === parseInt(selecOtraCuenta.value));
            if (obtener) {
                otraCuenta=obtener
            }
            
        }
        console.log(otraCuenta.monto);
        
        transferencia(miCuenta, otraCuenta, inpTransfer) //usamos la funcion transferir y le pasamos los parametros
    }else{
        alert("HAy campos vacios")
    }
    
}

function transferencia(micuenta, otraCuenta, transfer){//hacemos una funcion que se va a encargar de hacer la transferencia de dinero entre las cuentas

    if (transfer<=micuenta.monto){//verificamos que el usuario que estemos usando tenga dinero suficiente para hacer la transferencia

        micuenta.monto -= parseInt(transfer)
        otraCuenta.monto +=parseInt(transfer)
        console.log(otraCuenta.monto)
        cardTransferencia(micuenta, otraCuenta, transfer)
        alert("se completo la transferencia")
    }else{
        alert("No se pudo hacer la transferencia")
    }
   
}

function cardTransferencia(micuenta, otraCuenta, transfer){//Usamos esta funcion para crear un mensaje que informe lo que paso
    const div = document.getElementById("mensaje")
    const nombreUser = document.createElement("h2")
    const nombreCuenta = document.createElement("h2")
    const cuentaTransfer = document.createElement("h2")
    const mensaje = document.createElement("h2")

    nombreUser.textContent= `Usuario: ${username}`;
    nombreCuenta.textContent = `Cuenta: ${micuenta.titular}`;
    cuentaTransfer.textContent = `Transferencia a la cuenta: ${otraCuenta.titular}` ;
    mensaje.textContent = `Se le tranfiro $ ${transfer}`
      
    div.appendChild(nombreUser)
    div.appendChild(nombreCuenta)
    div.appendChild(mensaje)
    div.appendChild(cuentaTransfer)
}




