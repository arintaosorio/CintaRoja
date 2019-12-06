//creamos la clse
class Mascota{
    constructor(patas,nombre){
        this.patas = patas;
        this.cerebro = true;
        this.nombre = nombre;
        console.log('Se creo la Mascota');
    }

    getNombre(){
        return this.nombre
    }
}

//la haces 'pública' para poder llamarla en otros archivos

module.exports = {
    Mascota
}
