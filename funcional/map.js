const lista = [1,12,1,213,34,65,7,876]
const listaObj= [
    {nombre:'Lola',age:20},
    {nombre:'Lolo',age:21},
    {nombre:'Lula',age:22},
    {nombre:'Lela',age:23},
    {nombre:'Lala',age:24}
]

//con un for lo hariamos as
// const acumulador = []
// for(let i= 0; i< listaObj.length; i++){
//     console.log(listaObj[i]);
//     acumulador.push(listaObj[i].nombre)
// }
// console.log(acumulador);

//Cómo hacerlo con map:
 const listaNombre = listaObj.map((elemento,index,lista)=>{
   console.log(elemento.nombre); 
   return elemento.nombre
});

console.log(listaNombre);


//FILTRO
//con un for:
// const filtro =[]
// for(let i= 0; i< listaObj.length; i++){
//     if(listaObj[i].age>22){
//         filtro.push(listaObj[i])
//     }
// }
// console.log(filtro)



//Con filter:
const filtro = listaObj.filter((elemento,index,lista)=>{
    return elemento.age > 22
});
console.log(filtro);


/*
----------------------------------------------------------------
                  Programación Funcional
                          Filter
    1.- A partir del siguiente arreglo de animalitos: */
    const animalitos = [
    { nombre: "carlitos"  , especie: "conejo" },    // 0
    { nombre: "esteban"   , especie: "perro" },     // 1
    { nombre: "fabiruchis", especie: "tortuga" },   // 2
    { nombre: "anita"     , especie: "gato" },      // 3
    { nombre: "miranda"   , especie: "conejo" },    // 4
    { nombre: "lucas"     , especie: "conejo" },    // 5
    { nombre: "Horacia"   , especie: "tortuga" }    // 6
    ];

    const filtroC = animalitos.filter((elemento,index,lista)=>{
        return elemento.especie == "conejo";
    });
    console.log(filtroC);

    
   /* Genera un nuevo arreglo en el que solo se encuentren
    los conejos del arreglo original.  
----------------------------------------------------------------
                          Map
    2.- A partir del siguiente arreglo de mascotas:*/
    const mascotas = [
        { nombre: "Bimbo",    especie: "Hamster", comidasFavoritas: ["Semillas", "Nueces"] },
        { nombre: "Ludovico", especie: "Perro",   comidasFavoritas: ["Huesos", "Jamon"] },
        { nombre: "Pavlov",   especie: "Perro",   comidasFavoritas: ["Croquetas", "Pollo"] },
        { nombre: "Chancla",  especie: "Gato",    comidasFavoritas: ["Atun", "Pescado"] },
        { nombre: "Don Pepe", especie: "Perico",  comidasFavoritas: ["Semillas"] }
    ];
   /* Genera un nuevo arreglo que contenga los nombres de todas 
    las mascotas. */
    const listaMascotas = mascotas.map((elemento,index,lista)=>{
        console.log(elemento.nombre); 
        return elemento.nombre
     });
     
     console.log(listaMascotas);

//     Escribe una funcion que tome una cadena de palabras en minusculas y la regrese en mayusculas.
// 		Entrada: ["hola","como","estas"]
// 		Salida: ["HOLA","COMO","ESTAS"]
const hola = ["hola","como","estas"];

const holaMay = hola.map((elemento,index,lista)=>{
    return elemento.toUpperCase();
 });
 
 console.log(holaMay);

// Crea una funcion que reciba como parametro una cadena de palabras y devuelva la cadena de caracteres modificadas en mayusculas y minusculas.
// 		Entrada:["Hola amigos", "cinta roja cdmx y gdl"," yei" ]
// 		Salida:["HOLA amigos", "CINTA roja CDMX y GDL","YEI"]
// 3. Hacer un arreglo de 4 cantidades de tiempo en minutos [120, 80, 200, 100], y agarrar sólo las que son mayores a dos horas (hacer la comparación en horas)
const tiempo = [120, 80, 200, 100];
const mayor = tiempo.filter((elemento,index,lista)=>{
    return elemento > 120;
});
console.log(mayor);


// 4.- A partir de esta lista [1, 3, 5, 7, 9], multiplicar todos los elementos por 7, y después sólo traer los que son menores a 30
/*
----------------------------------------------------------------
6.- Devolver los asteroides que sean potencialmente peligrosos
    para la tierra de la semana pasada hasta hoy.
                    https://api.nasa.gov/
----------------------------------------------------------------
*/