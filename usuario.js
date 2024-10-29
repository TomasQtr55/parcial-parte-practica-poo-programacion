export class Usuario {
    #nombre;
    #clave;
  

    constructor(nombre, clave){
        this.#nombre = nombre;
        this.#clave = clave;
        this.cuentas = [];
    }

    //Usamos get
    get nombre(){
        return this.#nombre;
    }
    get clave(){
        return this.#clave;
    }

    set clave(newClave){
        this.#clave = newClave
    }

    crearCuenta(newcuenta){
        this.cuentas.push(newcuenta)
    }

}