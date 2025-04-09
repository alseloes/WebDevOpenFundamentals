# Herramientas previas


# 2. Práctica teórica:  Operadores


En JavaScript, los operadores permiten realizar cálculos, comparaciones y manipulaciones de datos. Se dividen en varias categorías:

## 2.1 Operadores Aritméticos:

Se usan para realizar operaciones matemáticas:


⚡⚡⚡= Muy usado / ⚡⚡= bastante usado / ⚡= algo usado / sin ⚡ = poco usado
| Operador      |  Descripción  | Ejemplo  | Resultado |
|:-------------:|---------------|----------|-----------|
| `+`           |   Suma        | `5 + 3`  |   `8`   ⚡⚡⚡  |
| `-`           |   Resta       | `5 - 3`  |  `2`   ⚡⚡⚡   |
| `*`           | Multiplicación|`5 * 3`   |    `15`⚡⚡⚡   |
| `/`           | División      | `5 / 2`  |  `2.5`  ⚡⚡⚡  |
| `%`           | Módulo (resto)| `5 % 2`  |     `1` ⚡⚡⚡  |
| `**`          | Potencia      | `2 ** 3` |      `8` ⚡⚡ |



## 2.2 Operadores de Asignación:

Se usan para asignar valores a variables:

| Operador      |  Descripción | Ejemplo | Resultado |
|:-------------:|--------------|---------|-----------|
| `=`           |   Asignación simple | `x = 5`   |  `x = 5`   ⚡⚡⚡     |
| `+=`          |   Suma y asigna     | `x += 3`  | `x = x + 3` ⚡⚡⚡   |
| `-=`          | Resta y asigna      |`x -= 3`   |   `x = x - 3`  ⚡ |
| `*=`          | Multiplica y asigna | `x *= 3`  | `x = x * 3`     |
| `/=`          | Divide y asigna     | `x /= 3`  |   `x = x / 3`   |
| `%=`          | Módulo y asigna     | `x %= 3`  |    `x = x % 3`  |


## 2.3 Operadores de Comparación:

Se usan para comparar valores y devuelven `true` o `false`:

| Operador | Descripción                 | Ejemplo  | Resultado |
|:--------:|-----------------------------|---------|-----------|
| `==`     | Igualdad de valor           | `5 == "5"`  | `true`⚡⚡ |
| `===`    | Igualdad estricta (valor y tipo) | `5 === "5"` | `false`⚡⚡⚡ |
| `!=`     | Desigualdad de valor        | `5 != "5"`  | `false`⚡⚡ |
| `!==`    | Desigualdad estricta        | `5 !== "5"` | `true`⚡⚡⚡  |
| `>`      | Mayor que                   | `5 > 3`  | `true`⚡⚡⚡  |
| `<`      | Menor que                   | `5 < 3`  | `false`⚡⚡⚡ |
| `>=`     | Mayor o igual               | `5 >= 5`  | `true`⚡⚡⚡  |
| `<=`     | Menor o igual               | `5 <= 4`  | `false`⚡⚡⚡ |

## 2.4 Operadores Lógicos:

Se usan para evaluar múltiples condiciones:

| Operador | Descripción              | Ejemplo        | Resultado |
|:--------:|--------------------------|---------------|-----------|
| `&&`     | AND (Ambos deben ser `true`) | `true && false` | `false` ⚡⚡⚡|
| `\|\|`   | OR (Al menos uno `true`)  | `true \|\| false` | `true`⚡⚡⚡  |
| `!`      | NOT (Negación)           | `!true`        | `false` ⚡⚡⚡ |

## 2.5 Operadores de Incremento y Decremento:

Se usan para aumentar o disminuir valores en `1`:

| Operador | Descripción  | Ejemplo  | Equivalente a   |
|:--------:|-------------|---------|----------------|
| `++`     | Incremento  | `x++`   | `x = x + 1` ⚡⚡⚡    |
| `--`     | Decremento  | `x--`   | `x = x - 1` ⚡⚡    |

## 2.6 Operadores Ternario:

Forma compacta del `if-else`:

```js
let edad = 18;
let mensaje = (edad >= 18) ? "Mayor de edad" : "Menor de edad";
console.log(mensaje); // "Mayor de edad"
```

## 2.7 Operadores de Tipo (typeof y instanceof):

Los operadores `typeof` e `instanceof` permiten determinar el tipo de datos de una variable o verificar si un objeto pertenece a una determinada clase. Aunque ambos cumplen funciones similares, hay diferencias importantes en su uso y comportamiento.

## 2.7.1 typeof – Identificar el tipo de dato primitivo:

El operador `typeof` devuelve una cadena (`string`) con el tipo de una variable o expresión (⚡).

```js
// Sintaxis:
typeof valor;

// Ejemplos:
console.log(typeof 42);          // "number"
console.log(typeof "Hola");      // "string"
console.log(typeof true);        // "boolean"
console.log(typeof undefined);   // "undefined"
console.log(typeof Symbol());    // "symbol"
console.log(typeof {});          // "object"
console.log(typeof []);          // "object"  // 🚨 Array es un objeto
console.log(typeof function(){}); // "function"
console.log(typeof null);        // "object"  // 🚨 Error histórico en JS
```

🚨 Curiosidades y excepciones de typeof:

* **_El caso de null:_** Aunque `null` es un valor primitivo, `typeof null` devuelve "`object`". Esto es un bug heredado de versiones tempranas de JavaScript.
* **_Arrays:_** `typeof[]` devuelve "`object`", aunque los `arrays` tienen una estructura especial. Para verificar si una variable es un `array`, se usa `Array.isArray([])`.
* **Funciones:** `typeof function() {}` devuelve "`function`", aunque en realidad las funciones son un subtipo de los objetos (Object).


## 2.7.2 instanceof – Verificar la instancia de un objeto:

El operador `instanceof` se usa para comprobar si un objeto pertenece a una clase (o a su prototipo):

```js
// Sintaxis:
variable instanceof Constructor;

// Ejemplos:
console.log([] instanceof Array);       // true
console.log({} instanceof Object);      // true
console.log(new Date() instanceof Date); // true
console.log(new Date() instanceof Object); // true (Date hereda de Object)
console.log(/abc/ instanceof RegExp);   // true

function Persona() {}
let juan = new Persona();
console.log(juan instanceof Persona);  // trueJS
```

🚨 Diferencias clave con `typeof`:
* **_`instanceof` funciona solo con objetos:_** No se puede usar para tipos primitivos como number, string, boolean, etc.
* **_Verifica el prototipo de un objeto:_** Si un objeto hereda de otra clase, instanceof también devolverá true para la clase base.
* **_No distingue entre subtipos de object:_** Mientras typeof diferencia "function" de "object", instanceof solo verifica la relación con un constructor.