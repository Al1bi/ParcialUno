module.exports = class Contador{

    constructor(cadena){
        this.mapita = {};
        this.mapear(cadena);
    }

    mapear(cadena){
        this.mapita[cadena] = 1;
    }

    verificarOcurrencias(palabras, cantidad){
        for(let i = 0; i < palabras.length; i++){
            if( this.mapita[palabras[i]] != cantidad[i]) return false;
        }
        return true;
    }

};