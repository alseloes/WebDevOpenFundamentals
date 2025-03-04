// OBJETOS:

// an example of an object
let gifts = {
  tommy: "stuffed giraffe",
  lisa: "coloring book",
  roberto: "baseball cap",
  beth: "suit of armor",
};

console.log(gifts["tommy"])

// an Object with a mix of data types
let actionFigure = {
  name: "Super Awesome Guy",
  heightInCentimeters: 10,
  accessories: ["cape", "disguise", "laser ring"],
  limitedEdition: true,
};

// Acceder a valores de un objeto mediante dot notation

actionFigure.name; // 'Super Awesome Guy'
actionFigure.limitedEdition; // true

// Cuando no se puede acceder mediante dot notation:
// getting information out of an object
let categories = {
  'best picture': 'Shrek',
  'best director': 'Shrek 2'
};

// we can't do these
//categories.best director; // no funcionaría
//categories.best picture;  // no funcionaría

// so we use bracket notation
categories['best picture']; // 'Shrek'
categories['best director']; // 'Shrek 2'

// Adicionando un nuevo par clave/valor a un objeto
let myFamily = {
  mom: "Cynthia",
  dad: "Paul",
};

myFamily.sister = "Lucinda"; // dot notation
myFamily["brother in law"] = "Merle"; // bracket notation

// Ejercicio: Adicionar a la canasta de frutas (objeto) nuevas frutas
// Adding key/value pairs to objects
// don't modify the object here

let fruitBasket = {
  apple: "red",
  blackberry: "black",
  orange: "orange",
};

// Add the other fruits and colors using dot notation below
// NOTE: Remember that they are case-senstive
fruitBasket.banana = "yellow";    // Adicionado mediante dot notation
fruitBasket["avocado"] = "green"; // Adicionado bracket notation
fruitBasket.strawberry = "red";   // Adicionado mediante dot notation

console.log(fruitBasket);

// Ejercicio: Adicionar los nuevos lenguajes de programación aprendidos
// The original languages variable - don't modify it here
let languages = {
  python: "Guido van Rossum",
};

// Add the other languages and their creators below using dot notation

languages["cobol"] = "Grace Hopper";
languages["javascript"] = "Brendan Eich";
languages["java"] = "James Gosling";
languages["swift"] = "Chris Lattner";


// Ejercicio: En la lista de una escuela hay dos estudiantes erroneos, la información de Jacob es la información de Guillermo y viceversa

// Updating key/value pairs of objects

let students = {
  jacob: {
    classes: ["math", "chemistry", "english"],
    grade: 11,
    age: 16,
  },
  guillermo: {
    classes: ["history", "math", "physics"],
    grade: 12,
    age: 17,
  },
};

// Write your solution here
// Hint: Use the 'temp' variable to hold on to one value while you swap it for the other.

let temp = students.jacob;

students.jacob = students.guillermo;
students.guillermo = temp;
console.log(students);

// Objetos: iteraciones sobre objetos

// El siguiente ejercicio usa casi todos conceptos anteriores: variables, control de flujo, loops, arrays y objetos. El código usa un for para revisar si cada elemento del objeto tiene la propiedad attending en true o en false.
let partyPeople = [
  { name: "Joe", attending: false },
  { name: "Jasmine", attending: true },
  { name: "Julio", attending: false },
  { name: "Julia", attending: true },
];


// loop through each item
// check if the person is attending
// if they are attending, say they are partying
// otherwise, say they are burnt out

for (let i = 0; i < partyPeople.length; i++) {
  if (partyPeople[i].attending) {
    console.log(partyPeople[i].name + " is partying!");
  } else {
    console.log(partyPeople[i].name + " is burnt out on partying =(");
  }
}

// Objetos: Object.keys


// Para obtener las propiedades(claves) de un objeto, se puede emplear Object.keys(Objeto)
// Nota: retorna un Array
let olympicRecords1 = {
  athletics100Men: 'Justin Gatlin',
  athleticsLongJumpMen: 'Mike Powell'
};
let allKeys = Object.keys(olympicRecords1);

console.log(allKeys);

// console output:
// [ "athletics100Men", "athleticsLongJumpMen" ]


// Objetos: Operador In (ForIn)

// Para recorrer objetos se usa forIn:

let olympicRecords2 = {
  athletics100Men: 'Justin Gatlin',
  athleticsLongJumpMen: 'Mike Powell'
};



//    placeholder - can be any word (key, record, blah, pizza but pick meaningful names)

for (let key in olympicRecords2) {
  // console.log(key);
  // console.log(olympicRecords[key]);
  console.log(`key = ${key}: value = ${olympicRecords2[key]} `)
}

// Nota: en caso que usaramos en el value dot notation olympicRecords.key nos retornaría undefined ya que intentaría acceder a una clave llamada key que no existe!


// Ejemplo de Operador "in":
let user = {
  name: 'Ana',
  age: 27
};

console.log('name' in user); // => true
console.log('age' in user); // => true
console.log('course' in user); // => false

// Ejercicio

// First, let's list all the properties of the object to see what we are dealing with. So, create a for in loop that will console.log the key and values of each property. hint: remember that bracket notation will be needed here

// Delete the previousOwner property.

// Update the doesItWork property to be true.

// Create a conditional that will check if the price of the product is higher than 100. In case it is, add a new property discountPercentage with a value of 10.

// Using the price and discountPercentage properties (and a little bit of math 😉 ) update the price property to be the discounted one! Price minus 10%

// Finally, create a conditional that, using the in operator, will check of the discountPercentage property exists in the object and, if so, create a console.log() that uses the three property values to look something like this: "We got some headphones on sale for just $108, that's 10% off!"

// Initial code

let product = {
  name: 'headphones',
  price: 120,
  doesItWork: false,
  previousOwner: "Bob"
};

console.log("PUNTO 1 -------------------")
for (let key in product){
  console.log(key) // claves
}
for (let key in product){
  console.log(product[key]) // claves
}
console.log("PUNTO 2 ---------------------")

delete product.previousOwner
console.log(product)

console.log("PUNTO 3 ---------------------")

product.doesItWork = true;

console.log(product);

console.log("PUNTO 4 Y PUNTO 5 ----------------")

if ( product.price > 100 ) {
  product.discountPercentage = 10
  product.price = product.price * (100 - product.discountPercentage)
  // product.price -= product.price * (product.discountPercentage / 100) --> Otra opción
} else {
  return
}

console.log(product);

console.log("PUNTO 6 ---------------------")

if ( "discountPercentage" in product ) {
  // console.log("We got some " + product.name + " on sale for just $"+ product.price + ", that's " + product.discountPercentage +"% off!")
  console.log(`We got some ${product.name} on sale for just $${product.price}, that's ${product.discountPercentage}% off!`)
} else {
  console.log("We're sorry. We don't have any discount :(")
}