module.exports = class Contador{

    constructor(cadena){
        this.mapita = {};
        this.mapear(cadena);
    }

    mapear(cadena){

        let palabra = "";

        for(let i = 0; i < cadena.length; i++){
            if(cadena[i]==' ' ||cadena[i]==',' ){

                if(isNaN(this.mapita[palabra])){
                    this.mapita[palabra] = 0;
                }
                this.mapita[palabra]++;
                console.log(this.mapita[palabra]);
                palabra = "";
            }else palabra+=cadena[i];
        }

        if(isNaN(this.mapita[palabra])){
            this.mapita[palabra] = 0;
        }
        this.mapita[palabra]++;


    }

    verificarOcurrencias(palabras, cantidad){
        for(let i = 0; i < palabras.length; i++){
            if( this.mapita[palabras[i]] != cantidad[i]) return false;
        }
        return true;
    }

};