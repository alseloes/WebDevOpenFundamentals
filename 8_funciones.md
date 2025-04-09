Las funciones son datos de tipo Object (objetos) son objetos especiales de tipo `Function` que tiene propiedades y métodos. Para observar esto más claramente veamos el siguiente ejemplo:

```javascript

function saludar() {
  console.log("Hola");
}

saludar.propiedad = "Soy una función y un objeto";

console.log(typeof saludar); // "function" (pero realmente es un objeto)
console.log(saludar.propiedad); // "Soy una función y un objeto"

console.log(saludar instanceof Object); // true
console.log(saludar instanceof Function); // true
```