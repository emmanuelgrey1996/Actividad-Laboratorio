import { Operations } from "./scripts/operations.js";
import { capitalize, capitalizeEvenLetters } from "./scripts/text.js";

console.log("La suma de 2 y 4 es:" + Operations.add(2,4)); 
console.log("El total de tu compra con iva es:" + Operations.getTotaWithlIVA(500));
console.log("El iva de tu compra es:" + Operations.getIVA(500));

console.log("Como ganas $500 debes pagar" + Operations.getISR(5000) + " de ISR");
console.log(Operations.getISR(40000));
console.log(Operations.getISR(4000));

console.log(Operations.getSalaryMinusISR(5000)); 
console.log(Operations.getSalaryMinusISR(40000)); 

console.log(capitalize("grace palma"));
console.log(capitalize("erick alberto romo rodriguez"));
console.log("hola");


console.log(capitalizeEvenLetters("GRACE PALMA"));
console.log(capitalizeEvenLetters("erick alberto romo rodriguez"));