
export class Cuenta {

    #titular;
    #monto;
    #id_cuenta;
    static #instancia = 0

    
    constructor(titular, monto){
        this.#id_cuenta = ++Cuenta.#instancia;
        this.#titular = titular;
        this.#monto = monto;
    }

    get id_cuenta(){
        return this.#id_cuenta;
    }
    get titular(){
        return this.#titular;
    }
    get monto(){
        return this.#monto;
    }

    set monto(newmonto){
        this.#monto = newmonto;
    }

    informacionCuenta(){
        console.log(`Id: ${this.#id_cuenta} Titular: ${this.#titular}  Monto: ${this.#monto}`)
    }

    

}