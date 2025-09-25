// Funciones básicas de calculadora
function sumar(a, b) {
  return a + b;
}

function restar(a, b) {
  return a - b;
}

function multiplicar(a, b) {
  return a * b;
}

function dividir(a, b) {
  if (b === 0) {
    return "Error: No se puede dividir entre 0";
  }
  return a / b;
}

// Menú de opciones
function main() {
  let opcion = prompt(
    "Elige una operación:\n1. Sumar\n2. Restar\n3. Multiplicar\n4. Dividir"
  );

  let num1 = parseFloat(prompt("Ingresa el primer número:"));
  let num2 = parseFloat(prompt("Ingresa el segundo número:"));
  let resultado;

  switch (opcion) {
    case "1":
      resultado = sumar(num1, num2);
      break;
    case "2":
      resultado = restar(num1, num2);
      break;
    case "3":
      resultado = multiplicar(num1, num2);
      break;
    case "4":
      resultado = dividir(num1, num2);
      break;
    default:
      resultado = "Opción no válida";
  }

  console.log("El resultado es: " + resultado);
}

// Ejecutar el programa
main();