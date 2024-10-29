import { Usuario } from "./usuario.js";
import { Cuenta } from "./cuenta.js";

const marcos = new Usuario("Marcos", "123456")

const javier = new Usuario("Javier", "2233")

const alexis = new Usuario("Alexis", "98765")

const valen = new Usuario("Valentina", "56789")

marcos.crearCuenta(new Cuenta ("marquitos10", 3000))
marcos.crearCuenta(new Cuenta ("marquitos20", 45000))

javier.crearCuenta(new Cuenta("javier1", 7000))

alexis.crearCuenta(new Cuenta("alex45", 10000))
alexis.crearCuenta(new Cuenta("alex45", 20000))

valen.crearCuenta(new Cuenta("valen2", 5000))
valen.crearCuenta(new Cuenta("valen3", 55000))


export let datos =[
    marcos,
    javier,
    alexis,
    valen
]

  


console.log(datos);
