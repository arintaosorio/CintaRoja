//Forma 1
function divEsEntero(num1, num2){
	const residuo = num1 % num2;
	if (residuo == 0){
		return true;
	}else {
		return false;
	}
}
//Forma 2
function divEsEntero(num1, num2){
	return (num1 % num2) == 0;
}

//Forma 3
const divEsEntero = (num1, num2) => (num1 % num2) == 0;

divEsEntero(5,3)



for (let i = 0; i <= 1000; i++) {
	console.log(i)
}


//1.- Escriba un programa que pida dos números y que conteste cuál es el menor y cuál el mayor o que escriba que son iguales.
function menor(num1, num2){
	if (num1 > num2) {
		return(num1);
	} else if (num1 < num2){
		return(num2);
	} else{
	return("son iguales");

}
}



//2- Escriba un programa que pida el año actual y un año cualquiera y que escriba cuántos años han pasado desde ese año o cuántos años faltan para llegar a ese año.

//3 Escriba un programa que pida tres números y que escriba si son los tres iguales, si hay dos iguales o si son los tres distintos.


/*4- Pedir tres números y obtener el mayor de ellos.
1.Hacer un programa que imprima en pantalla los números del 1000 al 1.
 2.Hacer un programa que muestre los números pares que hay entre 0 y 1000.
3.Hacer un programa que sume los numeros que hay entre 0 y 10.*/