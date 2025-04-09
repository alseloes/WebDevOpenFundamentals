// TIPOS DE DATOS PRIMITIVOS

// ---------------------------------//
// -----------BOOLEANOS-------------//
// ---------------------------------//

// declaración de valor booleano
let loggeado = true;

// evaluando un boolean
if (loggeado) {
  console.log("El usuario está loggeado.");
}

loggeado = false;

if (!loggeado) {
  console.log("El usuario no está loggeado.");
}

// data coercion example
let stringVar = 'Life was simpler when I was ';
let numVar = 12;

let combined = stringVar + numVar;
console.log(typeof(combined)); // => 'string'
console.log(combined); // => Life was simpler when I was 12

// NÚMEROS

// Los números pueden ser enteros (int) o de punto decimal flotante (float)








