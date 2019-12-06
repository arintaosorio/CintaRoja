/*
------------------------------------------------------------
1. Hacer superclase Maestro y subclases Maestro de Física y
   Maestro de Música y a cada uno asignarle su materia y
   calcular su promedio de grupo a partir de calificaciones
   (puedes usar arreglos). El maestro de física tiene un
   atributo “antiguedad” que guarda un valor numerico,
   mientras que el maestro de música tiene un atributo “edad”
   también guardando un valor numérico.
------------------------------------------------------------
*/

class Maestro {
    constructor(materia, calificaciones) {
        this.materia = materia;
        this.calificaciones = calificaciones;
    }

    promedio() {
        let suma = 0;

        for (let i = 0; i < this.calificaciones.length; i++) {
            suma += this.calificaciones[i];
        }

        return (suma / this.calificaciones.length);
    }
}

class MaestroDeFisica extends Maestro {
    constructor(materia, calificaciones, antiguedad) {
        super(materia, calificaciones);
        this.antiguedad = antiguedad;
    }
}
class MaestroDeMusica extends Maestro {
    constructor(materia, calificaciones, edad) {
        super(materia, calificaciones);
        this.edad = edad;
    }
}

const prom1 = new MaestroDeFisica('fisica', [9, 8, 5, 6, 10, 5, 5,], 8);
const prom2 = new MaestroDeMusica('musica', [9, 10, 9, 9, 9, 9, 6,], 25);

console.log(prom1.promedio());
console.log(prom2.promedio()); 


//TAREITA

/*
------------------------------------------------------------
2.- Crea una superclase llamada Electrodoméstico con las
    siguientes características:
    a. Sus atributos son precio, color, consumoEnergetico
       y capacidad (peso máximo)
    b. El constructor solo debe pedir precio, color
       y capacidad.
    c. consumoEnergetico debe iniciar con valor de 100
------------------------------------------------------------

3.- Crear una clase Bebida que herede a dos clases Cerveza
    y Refresco. Ambas clases deben tener la propiedad
    cantidad (ml). La clase Refresco debe tener el atributo
    azucar(g) y la clase Cerveza debe el atributo
    porcentajeAlcohol. Crear los getters y setters
    correspondientes.
4.- Crea una superclase llamada Electrodoméstico con las
    siguientes características:
    a. Sus atributos son precio, color, consumoEnergetico
       y capacidad (peso máximo)
    b. El constructor solo debe pedir precio, color
       y capacidad.
    c. consumoEnergetico debe iniciar con valor de 100
5.- Crea una subclase de Electrodomestico llamada Lavadora
    con las siguientes características:
    a. Su atributo es carga(kg de ropa), además de los
       atributos heredados.
    b. Crea el método precioFinal(). Este se calcula
       multiplicando el consumoEnergetico por la carga.
*/

class Bebida {
    constructor(cantidad){
        this.cantidad =cantidad;
    }
    getCantidad (){
        return this.cantidad;
    }
}

class Refresco extends Bebida {
    constructor(cantidad,azucar){
        super(cantidad);
        this.azucar = azucar;
    }
    getAzucar (){
        return this.azucar;
    }
}

class Cerveza extends Bebida {
    constructor(cantidad,porcentajeAlcohol){
        super(cantidad);
        this.porcentajeAlcohol = porcentajeAlcohol;
    }
    getPorcentajeAlcohol (){
        return this.porcentajeAlcohol;
    }
}


class Electrodomestico {
    constructor(precio, color, capacidad){
        this.precio = precio;
        this.color = color;
        this.capacidad = capacidad;
    }
}

class Lavadora extends Electrodomestico {
    constructor(){
        super(precio, color, capacidad)
    }
}