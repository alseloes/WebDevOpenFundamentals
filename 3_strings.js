// STRINGS

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