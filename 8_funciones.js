// FUNCIONES

function introduceSelf(name, location, hobby){
  console.log(`Hi! My name is ${name}. I'm from ${location}, and ${hobby}`)
}

introduceSelf("Lina", "Fort Worth", "I love to juggle")

//-------------------------------------//

// da igual si se usan variables que llevan los valores, o si se pasan los valores mismos
function add(num1, num2) {
  console.log(num1 + num2);
}

let myNumber = 1;
let yourNumber = 4;

add(1, 4);
add(myNumber, yourNumber);

//-------------------------------------//

// Variable guarda el string que se va a pasar como argumento
function sayHello(name) {
  console.log("Hello, " + name + "!");
}

let myFriend = "George";
sayHello(myFriend);

//-------------------------------------//


// Atención: parámetros y variables con el mismo nombre, puede ser común
function sayHello(nombre) {
  console.log("Hello, " + nombre + "!");
}
let nombre = "George";
sayHello(nombre);

//-------------------------------------//

// Return en funciones
function add(num1, num2) {
  return num1 + num2;
}

let resultA = add(5, 15);


//-------------------------------------//

function greetFriend  (nombre) {
  return nombre + " , it's good to see you!"
}

let prueba = greetFriend("Khia");
console.log(prueba);
// Otra opción
let personaje = "Pepito";
let prueba2 = greetFriend(personaje);
console.log(prueba2);

//-------------------------------------//

// Que sucede en este caso?
function add(num1, num2) {
  num1 + num2;
}

var result = add(1, 4);
console.log(result);

//undefined

//-------------------------------------//

// Un return llena el espacio donde se llamó la función
function returnsTen() {
  return 10;
}

let eleven = returnsTen() + 1; // becomes 10 + 1
console.log(eleven); // 11


//-------------------------------------//

// Ejemplo de Varios return

function add(num1, num2) {
  if (num1 < 0 || num2 < 0) {
    return "Only positive numbers please!";
  }
  return num1 + num2;
}

console.log(add(1, 4));
console.log(add(-1, 4));


//-------------------------------------//


// Crear una función que genere un correo

// Write your function 'buildEmailAddress' here
// When passed in arguments ("vinay", "gmail"), it should return "vinay@gmail.com"
// buildEmailAddress("vinay", "gmail") //=> "vinay@gmail.com"

function buildEmailAddress (nombre, servidorDeCorreos) {
  return nombre + "@" + servidorDeCorreos + ".com"
}

let vinay = "vinay";
let gmail = "gmail";

let vinayEmail = buildEmailAddress (vinay, gmail)
console.log(vinayEmail);

// También se puede hacer directamente con console.log(buildEmailAddress("vinay", "gmail"))

