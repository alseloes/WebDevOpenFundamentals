// STRINGS

// String primitivo
let message = "hi";

// String object: necesitamos una función constructora
let another = new String("hi");

console.log("message =", typeof message);
console.log("another =", typeof another);

message = "This is my first message"; // OJO: Esto no sería posible si message estuviera definido mediante const, acá se reasignó porque se declaro con let
// Los siguientes métodos que están dentro de los console.log los puedo ejecutar desde la consola de chrome

console.log("Longitud = ", message.length);

console.log("posición 0 =", message[0]);
console.log("posición 1 =", message[1]);
console.log('Incluye "my" =', message.includes("my"));
console.log('Incluye "not" =', message.includes("not"));
console.log('Comienza en "This" =', message.startsWith("This"));
console.log('Comienza en "this" =', message.startsWith("this")); // Es case sensitive
console.log('Finaliza en "e" =', message.endsWith("e"));
console.log('indeOf "my" =', message.indexOf("my")); // my comienza en el indice 8

// También es  posible reemplazar parte de una cadena:
console.log(
  'replace "first" por "second" =',
  message.replace("first", "second")
); // Notar que retorna un nuevo string y no modifica el original
console.log('nuevo "message" =', message);
console.log("toUpperCase =", message.toUpperCase()); // Tampoco cambia el message original
console.log("toUpperCase =", message.toLowerCase());

let message2 = " This is my first message ";
console.log("message2 =", message2);
console.log("message2 trim =", message2.trim()); // recorta los extremos
console.log("message2 trimLeft =", message2.trimStart()); // recorta el extremo izquierdo. OJO: trimLeft() --> deprecado

// ESCAPE NOTATION - CARACTERES DE ESCAPE : se emplea con back slash \

let message3 = "This is my\n first message";


// Cuando usas \n en una string en JavaScript, este carácter representa un salto de línea solo cuando se muestra en un entorno que lo interpreta correctamente, como en la consola de Node.js o en un <pre> en HTML. También se puede escribir directamente en un console.log('This is my\n first message') para observar este comportamiento ya que ahora se muestra como texto literal

// Sin embargo, en la consola de Chrome DevTools, las cadenas con \n se imprimen como una línea continua porque el \n no se interpreta visualmente como un salto de línea. Se muestra literalmente dentro de la string.

// En versiones antiguas de Chrome (antes de 2019), cuando ingresabas directamente una cadena con \n en la consola de DevTools, se mostraba con un salto de línea.
// Sin embargo, a partir de Chrome 72 (2019), Google cambió la forma en que la consola muestra las strings. Ahora, cuando escribes una cadena directamente en la consola sin console.log(), Chrome escapa los caracteres especiales como \n y los muestra como texto literal en lugar de interpretarlos visualmente.

console.log("message3 = ", message3);

console.log("message3 split = ", message3.split(" "));

console.log("Hello".length);
// llevar a la consola de chrome
let longWord = "supercalifragilisticexpialidocious";
longWord.length; // 34

let texto = "Hola, Juan";
console.log(texto.length); // Propiedad: devuelve el número de caracteres (9)
console.log(texto.toUpperCase()); // Método: convierte el texto a mayúsculas ("HOLA, JUAN")

let loudText = "WHAT A BEAUTIFUL DAY";
loudText.toLowerCase();
console.log(loudText); // WHAT A BEAUTIFUL DAY
console.log(loudText.toLowerCase());

// Si no se reasigna la variable, no se registrará cambio en el valor de la variable

let newLoudText = "WHAT A BEAUTIFUL DAY";
newLoudText = newLoudText.toLowerCase();
console.log(newLoudText); // what a beautiful day

// CONDITIONALS
// IF & ELSE   .... SWITCH & CASE

// Hour
// If hour is between 6am and 12pm: Good morning!
// If it is between 12pm and 6pm: Good afternoon!
// Otherwise: Good evening!

let hour = 10;

if (hour >= 6 && hour < 12) {
  console.log("Good morning!");
} else if (hour >= 12 && hour < 18) {
  console.log("Good afternoon!");
} else {
  console.log("Good evening!");
}

// Sin embargo, la llaves no son necesarias debido a que se tiene single statment, por lo que no hay ruido
let hour2 = 10;

if (hour2 >= 6 && hour2 < 12) console.log("Good morning!");
else if (hour2 >= 12 && hour2 < 18) console.log("Good afternoon!");
else console.log("Good evening!");

// En el siguiente ejemplo es importante tener presente el orden de los IF. Una vez se cumple una condición hay una salida

let loginCount = 3;
if (loginCount > 10) {
  console.log("That's a lot of logins today, champ! Maybe give it a rest.");
} else if (loginCount > 0) {
  console.log("Thanks for logging in!");
} else {
  console.log("Don't forget to log in today");
}


// El siguiente ejercicio se resuelvre descomentando la línea:


// Operator precedence:
//   1. Parentheses (())
//   2. Exponents (**)
//   3. Multiplication (*)
//   4. Division (/)
//   5. Addition (+)
//   6. Subtraction (-)

//   Question: Where do Equality Check (===), Not (!), And (&&), and Comparison (>) fit in this list? Try to add all four to the list.
//   Use the code below to experiment and find out.

//   Hint: Try adding parentheses, changing the operators, and logging different values!


// if ((!5 - 4 + 9 > 2) === (2 * 10 / 5 === 4)) {
  if (!5 - 4 > 2 === 2 * 10 / 5 === 4) {
  console.log("the expression was truthy")
} else {
  console.log("it was falsy");
}

console.log(!5)
console.log(!5 - 4)
console.log(4 > 2)
console.log(5 - 4 > 2)
console.log(4 > 2 === 2)
console.log(2 * 10 / 5)
console.log(2 * 10 / 5 === 4)

// La siguiente expresión JS la convierte en nooleano:
let weather = "sunny";

if (weather) {
  console.log("There is weather outside");
}