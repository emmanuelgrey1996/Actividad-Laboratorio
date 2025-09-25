//inicializacion
const animales = [ "capibara", "tortuga", "cuervo"]   

console.log(animales.length)
console.log(animales[2]);
console.log(animales)
animales[2] = "gatos";
console.log(animales[2]);
console.log(animales)
animales[3] = "perros";
console.log(animales)
// Todos estos metodos mutan el array original linea 12 a la 23
// push() este metodo agrega valores al final del array 
animales.push("pericos")
console.log(animales)
// unshift () este metodo permite agregar valores al inicio 




/* Metodos que no mutan el array, metodos funcionales
map () ejecuta una operacion sobre cada uno de los elementos del array y devuelve un array nuevo el resultado */

const edades = [27, 28, 31, 32, 26, 28, 27, 28, 22, 23];
const edadesPorDos = edades.map((edad, index, array ) =>{
    console.log({edad});
     console.log({index});
     return edad * 2;

} ); 
console.log(edadesPorDos)

/*
  Metodo filter
  Evalua una condicion y los valores del array que sean verdaderos
  son guardado en un array nuevo que retorna
*/
const edadesSin28 = edades.filter((edad)=> edad !== 28 )
console.log("filter");
console.log(edadesSin28);

/* Metodo splice para no mutar existe toSpliced
Uso para agregar elementos en una posicion deseada*/ 
edadesSin28.splice(2,0,28);
console.log(edadesSin28);
console.log(edadesSin28.splice(3,2));
console.log(edadesSin28);
console.log(edadesSin28.splice(2));
console.log(edadesSin28);
//reemplazando elemento 
edadesSin28.splice(1,1,30);
console.log(edadesSin28);

//slice metodo que nos permite generar subArrays
 //Podemos indicar el inicio con base en indices, si ingresamos un indice negatico, le da la vuelta al array
 //Podemos indicar el final para el subArray, con el indices, si no indicamos e lfinal, creara el subArray, hasta donde termina 
 //el array original. Tambien podemos usar indices negativos
 //return: un array nuevo con los elementos tomados de las posiciones indicadas 

 const edadesNew = edadesPorDos.slice(2,6);
 const edadesSinfIN = edadesPorDos.slice(3);
 const edadesNegativo = edadesPorDos.slice(-4);
 console.log(edadesNew);
 console.log(edadesSinfIN);
 console.log(edadesNegativo); 



