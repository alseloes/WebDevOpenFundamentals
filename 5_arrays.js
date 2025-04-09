// ARRAYS

let = selectedColors = ['blue', 'red'];
selectedColors[2] = 'green';
console.log(selectedColors);
selectedColors[2] = 1;
console.log(selectedColors);
typeof(selectedColors);

// Ejercicio arrays
let myFavoriteFruits = ["banana", "cherry", "mango"];
let myLuckyNumbers = [4, 8, 15, 16, 23, 42];

 // add the two arrays:
let combinedArray = myFavoriteFruits + myLuckyNumbers;

console.log(myFavoriteFruits);
console.log(myLuckyNumbers);
console.log(combinedArray);

// Otro ejemplo:
let listOfPuppies = ["shadow", "mocha", "ranger"];
let emptyArray = [];
let puppyAges = [0, 1, 2];

// we can mix strings and numbers!
let puppyAgeDescriptions = ["two months", "thirteen months", 2];

let puppiesAndAges = [
  ["shadow", "mocha", "ranger"],
  [0, 1, 2],
]; // arrays inside arrays! 🤯


// Push() y Pop()

//---------------------------------
//          PUSH
//---------------------------------

// let myFavoriteFruits = ["banana", "cherry", "mango"]; // ya está declarado más arriba

myFavoriteFruits.push("pear");
console.log(myFavoriteFruits);

myFavoriteFruits.push("banana");
console.log(myFavoriteFruits);

//---------------------------------
//          POP
//---------------------------------

let myFavoriteFruits2 = ["banana", "cherry", "mango", "pear"];

console.log(myFavoriteFruits2.length); // prints array length, 4
myFavoriteFruits2.pop(); // removes last item from the list
console.log(myFavoriteFruits2);
console.log(myFavoriteFruits2.length); // prints array length, 3

console.log("=================================");


// pop() both removes the last item from the array AND returns that item, so it can be used for example to create a new variable.

let lastFruit = myFavoriteFruits2.pop();

console.log(lastFruit); // prints variable, which is 'mango'
console.log(myFavoriteFruits2); // prints the array
console.log(myFavoriteFruits2.length); // 2

console.log("=================================");

// We can use push() to move lastFruit back into the array
myFavoriteFruits2.push(lastFruit); // adds lastFruit to the array
console.log(myFavoriteFruits2);