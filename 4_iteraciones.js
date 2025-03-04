// ITERACIONES:

// an example of a for loop
let countTo = 5;
for (let step = 1; step <= countTo; step++) {
  console.log(step);
}

// another example:
let numberOfGuests = 20;
for (let index = 1; index <= numberOfGuests; index++) {
  console.log("Here is a 🍔 for guest #" + index);
}

// Estructora del ciclo for;

// for (initialExpression; condition; incrementExpression) {
//   loop body
// }

// Ejercicios de Loops:
// 1) Write a for loop that logs the numbers from 1 to 10.
let numero = 1
for (let index = 1; index <=10 ; index++){
    console.log(numero++)
}

//otra opcion:

for (num = 1; num <=10 ; num++){
  console.log(num)
}

// 2) Write a for loop that logs the numbers from 5 to 10. (Hint: Change the initial value of the counter.)

for (num = 5; num <=10 ; num++){
  console.log(num)
}

// 3) Write a for loop that logs the numbers from 0 to 100, counting up by 10. (Hint: Change the increment.)
for (num = 0; num <=100 ; num+=10){
  console.log(num)
}

// 4) Write a for loop that sums all numbers between 1 and 10 (including 10) into the sum variable
// don't modify these variables
let sum = 0;

for ( i= 1 ; i<=10 ; i++ ){
  sum = sum + i;
}
console.log(sum);
// hint: loop body should look something like this: sum = sum + index

// Ejercicio más complejo:
let partyPeople = ["Joe", "Julie", "Jasmine", "Julio"];

for (let i = 0; i < partyPeople.length; i++) {
  console.log(partyPeople[i] + " likes to party!");
}

// En el ejemmplo anterior
//  * la longitud del array es empleado en la condición en cuyo caso se usa < (menor que el número de elementos en el array) ya que va hasta el último indice del array
//  * el contador i comienza en cero ya que debe comenzar en el indice del array 0
//  * en cada ciclo se ingresa a una posición diferente del array

// Ejercicio:
// write a for loop that adds up all the numbers in the array to the totalSnacksEaten variable


// don't modify these variables
let snacksEatenPerDay = [3, 2, 5, 6, 1, 2, 2, 4, 8, 2, 5, 3, 3, 1];
let totalSnacksEaten = 0;

for (let i = 0; i < snacksEatenPerDay.length ; i++) {
    totalSnacksEaten += snacksEatenPerDay[i]
}
console.log(totalSnacksEaten);

// Ejercicio: for loop + if
let mixedArray = [9, "six", true, 18];

//prints the values of the items in the mixedArray
console.log("Printing each item...");
for (let i = 0; i < mixedArray.length; i++) {
  console.log(mixedArray[i]);
}

//prints a formatted string depending on item type
console.log("Printing formatted string with item type...");
for (let i = 0; i < mixedArray.length; i++) {
  if (typeof mixedArray[i] == "number") {
    console.log("The item at position " + i + " is a number: " + mixedArray[i]);
  }
  if (typeof mixedArray[i] == "string") {
    console.log("The item at position " + i + " is a string: " + mixedArray[i]);
  }
  if (typeof mixedArray[i] == "boolean") {
    console.log("The item at position " + i + " is a boolean: " + mixedArray[i]);
  }
}

// En el caso anterior es mejor usar else if porque solo una de las condiciones puede ser verdadera a la vez (un elemento no puede ser a la vez un number, string y boolean). Además:
// * Se evalúan todas las condiciones incluso después de encontrar la correcta.
// * Es un poco menos eficiente porque JavaScript sigue verificando condiciones innecesarias.
// Ventajas de else if:

// ✅ Ventajas de else if:
// Más eficiente, porque una vez que se cumple una condición, las siguientes ya no se evalúan.
// Más legible, porque muestra claramente que las condiciones son mutuamente excluyentes.


// Se puede interrumpir un ciclo for con un break
for (let i = 1; i <= 30; i++){
  if (i === 21){
    console.log("TWENTY ONE! Black Jack, dale!");
    break;
  } else {
    console.log(i);
  }
}

// También se puede saltar al siguiente ciclo con un continue omitiendo por el presente ciclo.
for (let i = 1; i <= 30; i++){
  if (i % 3 === 0) {
    continue;
  }
  console.log(i);
}

// Ejercicio

// 1) create a for loop that will console.log the numbers from 1 through 50.

// 2) Inside the loop, before the console.log, add a condition: if the number is divisible by 5, skip it. hint: use the modulo operator to check if a number is divisible by another and use the continue keyword to skip

// 3) Add another condition: if the number is divisible by 10 or divisible by 15, console.log "Donkey!". hint: note that the previous step skips all numbers divisible by 5, and all numbers divisible by 10 or 15 are also divisible by 5, so if your "Donkey!" is not showing you might want to try switching the order of the conditions 😉

// 4) Add one last condition: if the number is not divisible by 2 and the previous number is not divisible by 10, console.log "Monkey!".

// 5 optional) As a bonus, feel free to join all conditions together in a single conditional block (with else and else if statements), make the loop run from 50 to 1, or make up your own conditions! Practice makes the master!


for (let index = 1; index <= 50; index++) {
  if ( index % 2 !== 0 && (index - 1) % 10 !== 0 ) {
      console.log("Monkey!")
  } else if (index % 10 === 0 || index % 15 === 0 ) {
      console.log("Donkey!")
  }
  if (index % 5 === 0) {
      continue;
  }
  console.log(index);
}