/*
Operadores aritmeticos
*/
//suma
console.log(2 + 2);
//resta
console.log(10 - 7);
//multiplicacion
console.log(2 * 4);
//concatenar ocurre cuando hay un string
console.log("10" + 2);
//coercion de tipo
console.log("10" - 2);
//potencia
console.log( 2 ** 3);
console.log( 2 ** 5);
//division
console.log(10 / 2);
console.log(10 / 0);
console.log(-10 / 0);
console.log(23 / 2);
//operadores logico 
console.log(2 == 2);



/*
Operador and &&
devuelve treu solo si ambos lados son verdaderos*/
console.log(2 === 2 && 3 === 3)
console.log(2 === 2 && 3 === 4)
console.log(2 === 4 && 3 === 3)

/*Operador or //
devuelve true si al menso uno de los dos lados son verdaderos
*/
console.log(2 === 2 || 3 === 3)
console.log(2 === 5 || 2 === 3)
console.log(2 === 5 || 2 === 2)

/*Operador distitnto de !==
este operador devuelve true si dos cosas no son iguales */

//estricto
console.log(2 !== 3)

console.log("2" != 3)


/*Operador not !
invierte el valor boolean
!true = false
!false = true 
*/

console.log(!true)
console.log(!false)

/* curiosidades js truthy y falsy values */
console.log("hola" && true)
console.log(" " && true)


