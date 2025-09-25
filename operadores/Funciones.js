/*
¿Que es una funcion?
Es un bloque de codigo que realiza idealmente solo una accion ejemplo: sumar,
Con el objetico de tener codigo reutilizable sin la necesidad de escribir todo de nuevo
*/

/* Parametros 
   Son variables a las cuales se les va a asignar valor 
   cuando la funcion es llamada 
   */




// 1.Forma uno de declarar funciones, function declaration o statement
// Pasa por un proceso llamado hoisting
// esto quiere decir que son lo primero de nuestro cogido en ser ejecutado por el compilado 
// */

 console.log(saludar("Grace"))
function saludar(name){
  //console.log(name)  
  return `Hola, ${name} bienvenid@ a generation`
}

//2. Forma dos, function expression o anonima

const addTwoNumbers = function(a, b){
    return a + b;
}

// 3. Forma tres, arrow function, expression lambda 

const martes = () => "Feliz Jueves" 

    const nameMayus = (name) =>{
        const mayus = name.toUpperCase()
        return `Tu nombre fue puesto todo en mayus ${mayus}`
    }
    console.log(nameMayus("Emmanuel"))

martes();






const suma1 = addTwoNumbers(10, 15)
console.log(suma1)
console.log(addTwoNumbers(20, 32))




/*argumento
Es el valor que se le da a la variable cuando 
es llamada la funcion
*/
const saludar1 = saludar("Emmanuel")
console.log(saludar("Grace"))
saludar("Emmanuel")
console.log(saludar1)



const option = +prompt("Selecciona una opcion\n 1. Saludar\n 2. Sumar\n 3. Feliz\n 4.Mayus")
switch(option){
    case 1:
      const name = prompt("Ingresa tu nombre")
      console.log(saludar(name))
      break;
      case 2:
        const num1 = prompt("Ingresa un numero")
        const num2 = prompt("Ingresa otro numero")
        console.log(addTwoNumbers(num1,mun2))
        break;

        case 3:
            alert(martes())
            break;
        case 4:
            const nameM = prompt("Ingresa tu nombre")
            alert(nameMayus(nameM))
            break;
            default:
                alert("Debes ingresar una opcion valida, en numero");
                

}


