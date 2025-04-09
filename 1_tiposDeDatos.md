# Herramientas previas

#### 1. `console.log( )` --> método:

Ya mencionamos el objeto `console`. Este objeto tiene el método `log()` que nos permite "imprimir" en consola todo aquello que reciba el método. Observemos el siguiente ejemplo:

```javascript
let a = 4;
let b = 5;

console.log( a + b );
```

#### 2. Operador `typeof`:

Javascript proporciona un operador que permite revelar un tipo de dato de un valor particular:

```javascript
console.log(typeof(2)); // number
console.log(typeof('2')); // string
console.log(typeof(true)); // boolean
```
**_Nota:_** más adelante ahondaremos en los diferente operadores disponibles.


# 1. Práctica teórica:  Tipos de datos


JavaScript tiene datos de tipo `primitivo` (**7 tipos** primitivo) y datos de tipo `Object` (**1 tipo** de referencia). Veamos esta clasificación a continuación:

## 1.1 Clasificación de tipo de datos

Los tipos de datos pueden ser de dos tipos:

- Datos de tipo primitivos.
- Objetos o tipos de referencia

## 1.1.1 Datos de tipo primitivo

Son valores _**almacenados directamente en la memoria**_ en el stack (zona de memoria rápida y organizada en bloques) como valor directo y se comparan por valor.

A continuación, observemos un ejemplo de comparación por valor:

``` javascript
let a = 10;
let b = a;  // Se copia el valor, no la referencia

a = 20;  // Modificamos 'a', pero 'b' sigue igual

console.log(a); // 20
console.log(b); // 10  (no cambia porque fue una copia del valor)
```

Del ejemplo anterior podemos concluir que `b` almacenó el valor `10` y no una referencia apuntando hacia `a`, por lo cual cuando cambiamos `a`, `b` continuó igual.


Ahora, revisemos que sucede cuando se comparan dos variables con el mismo valor asigando:

```javascript
let a = 10;
let b = 10;  // Se copia el valor, no la referencia

console.log(a === b); // true --> ✅✅✅ (Son lo mismo)
```

Podemos ver claramente que dos variables diferentes pueden tener el mismo valor.


En la siguiente tabla se presentan los tipos de datos primitivos:


| Tipo de dato  | ¿Qué es? | Ejemplo | ¿Lo veremos? |
|--------------|---------|---------|:-----------:|
| **string**   | Cadenas de texto. | `"Hola, mundo"` | 😃😃😃 |
| **number**   | Números enteros y decimales. | `42`, `3.14` | 😃😃😃 |
| **bigint**   | Números grandes (más allá de `Number.MAX_SAFE_INTEGER`). | `9007199254740991n` | 😐 |
| **boolean**  | Valores `true` o `false`. | `true`, `false` | 😃😃😃 |
| **null**     | Ausencia intencional de un valor. | `let x = null;` | 😃 |
| **undefined** | Valor por defecto de una variable no asignada. | `let y;` | 😃 |
| **symbol**   | Identificadores únicos. | `Symbol("id")` | 😢 |

Los tipos de datos primitivos comienzan por _**minúscula**_ ya que no son objetos en si, sino _**tipos de datos básicos**_. Por convención, los tipos de datos básicos comienzan por _**minúscula**_.

## 1.1.2 Objetos: Tipos de referencia

Los objetos (objects) son una gran catagoría principal que contiene

Son estructuras más complejas que se _**almacenan en memoria por referencia**_ o heap (área de memoria dinámica). Cuando asignamos un objeto a una variable, **esta almacena una referencia (una dirección en memoria) y no el valor directamente**:

A continuación de comparación por referencia:
```javascript
let obj1 = { nombre: "Juan" };
let obj2 = obj1;  // No se copia el valor, se copia la referencia

obj1.nombre = "Carlos";  // Modificamos el objeto original

console.log(obj1.nombre); // "Carlos"
console.log(obj2.nombre); // "Carlos" (también cambió porque apunta al mismo objeto)
```

Del ejemplo anterior podemos concluir que como `obj2` no almacenó una copia del objeto, sino una referencia a la misma ubicación en memoria, cualquier cambio en `obj1` también afecta a `obj2`.

Ahora, observemos un ejemplo de comparación de objetos:

```javascript
let objA = { edad: 25 };
let objB = { edad: 25 };

console.log(objA === objB); // false ❌ (No son el mismo objeto❗❗❗)
```

Aunque dos objetos sean iguales en su composición clave-valor, una sencilla comparación entre ellos nos muestra que no son los mismos objetos.

En la siguiente tabla se presentan **algunos** (❗) tipos de datos de referencia:

| Tipo de dato  | ¿Qué es?  | Ejemplo | ¿Lo veremos? |
|--------------|-----------|---------|:-----------:|
| **Object (objetos)**     | Contiene pares clave-valor.   | `{ nombre: "Juan", edad: 30 }` | 😃😃😃 |
| **Array (arreglos)**     | Lista ordenada de elementos.  | `[1, 2, 3, 4, 5]` | 😃😃😃 |
| **Function (funciones)** | Código reutilizable.          | `function saludar() { console.log("Hola"); }` | 😃😃😃 |
| **Date (fechas)**        | Manejo de fechas y horas.     | `new Date()` | 😐 |
| **RegExp**               | Expresiones regulares.        | `/abc/i` | 😢 |
| **Map y Set**            | Estructuras de datos avanzadas | `new Map()`, `new Set([1,2,3])` | 😭 |

Los tipos de datos de referencia **son constructores de objetos**, y en JavaScript los nombres de constructores y clases comienzan con _**mayúscula**_.

Observemos el siguiente ejemplo:

```javascript
let texto1 = "Hola"; // Tipo primitivo
let texto2 = new String("Hola"); // Objeto tipo String

console.log(typeof texto1); // "string"
console.log(typeof texto2); // "object"

console.log(texto1 === texto2); // false ❌ (Son diferentes en memoria)
```

Sin embargo, existen objetos globales (los cuales no son una clase ni una función constructora) que se escriben con minúscula (ej: objeto `console` --> `console.log()` )

### **Nota:**
Para efectos del presente curso nos vamos a centrar solo en los siguientes tipos de datos:

- string
- number
- boolean
- null
- undefined
- Object (los veremos más adelante)
  - Object (general)
  - Array
  - Function

## 1.2 Definición de lo tipo de datos primitivos

Veamos ahora la descripción de los cinco tipos de datos primitivos.

## 1.2.1 Dato tipo "string" (cadena)

- Los `strings` se usan para representar texto y se llaman así porque son una "cadena" de caracteres organizados en una línea.
- Las comillas pueden ser dobles (`" "`) o simples (`' '`), pero se debe usar simpre el mismo tipo en el par de comillas.
  ```javascript
  let stringSimple = 'Esto es un string';
  let stringDoble = "Esto también es un string";
  ```
- Pueden contener texto, números, caracteres, emojis, etc.
  ```javascript
  let soyUnEmoji = '😮';
  ```

## 1.2.2  Dato tipo "number" (número)

Los datos de tipo `number` pueden ser enteros o decimal (`int`) de punto flotante (`float`)

```javascript
let soyUnNumero = 122;
let tambienSoyUnNumero = 0.4585
```

## 1.2.3  Dato tipo "boolean" (booleano)

- Solo tienen dos estados: `true` y `false`

  ```javascript
  let estudiandoProgramacion = true;
  let !estudiandoProgramacion = false;

  let aprendiendoPatinaje = false;
  let !aprendiendoPatinaje = true;
  ```

## 1.2.4  Dato tipo "null" (nulo)

- Es un tipo de dato que se utiliza para indicar que una variable no tiene valor asignado, es decir, cuando se quiere representar "sin valor".
- Se emplea como valor como valor predeterminado cuando otros datos no esán disponibles.
- Si se ejecuta `typeof(null)` se obtiene `object`. Sin embargo, realmente `null` es tipo de dato diferente a `object`. Esta peculiaridad se debe a un error histórico en la implementación de JavaScript y no se puede corregir ahora ya que rompería demasiados códigos existentes que dependen de `typeof(null) === object`.

  ```javascript
  let ejemplo = null;
  ejemplo; // null
  ```

## 1.2.5  Dato tipo "undefined" (indefinido)

* Significa que la variable nunca se definió un valor.
* Es común declarar variables (crear por primera vez en la memoria) antes de asignarle un valor posteriormente, en cuyo caso la variable será `undefined` hasta que se le asigne un valor (‼️deja que `undefined` ocurra naturalmente).

  ```javascript
  let magicWord;
  magicWord; // undefined
  ```


  **Atención:** La diferencia entre `null` y `undefined` está en que en el primero el desarrollador decidió deliberadamente que el valor estaba vacío (null), mientras que en el segundo el valor está vacío simplemente porque nunca se le asignó nada (undefined). Esto quiere decir que no se debe asignar una variable como `undefined` porque otro desarrollador podría interpretar que se olvidó asignarlo. En su lugar, para representar la ausencia de un valor debe usarse `null`.


## 1.3  Conversión de tipo de dato

## 1.3.1  Conversión de tipo de dato "string" a "number"

En el caso de los datos de tipo "string", se puede convertir un dato en númerico mediante las _**funciones globales**_ de JavaScripts `Number()` (función global y constructor), `parseInt()` (para convertir a números enteros) y `parseFloat()` (para convertir a números de punto flotante o decimales).

Veamos como opera `Number()`:

``` javascript
let numeroString = "2"
typeof(numeroString); // string

let numero = Number(numeroString);
console.log(numero); // 2
typeof(numero); // number

let decimalString = "3.14";
let decimal = Number(decimalString);
console.log(decimal); // 3.14
typeof(decimal); // number
```
Ahora veamos como opera `parseInt()`:

``` javascript
let numeroString = "2"
typeof(numeroString); // string

let numero = parseInt(numeroString);
console.log(numero); // 2
typeof(numero); // number

numero = parseFloat(numeroString);
console.log(numero); // 2
typeof(numero); // number
```

Finalmente, observemos como opera `parseFloat()`:

``` javascript
let decimalString = "0.564"
typeof(decimalString); // string

let decimal = parseInt(decimalString);
console.log(decimal); // 0
typeof(decimal); // number

// Reasignando "decimal"
decimal = parseFloat(decimalString);
console.log(decimal); // 0.564
typeof(decimal); // number
```

Ahora observemos con ejemplos las principales diferencias a la hora de convertir datos entre estas tres funciones:

1️⃣ Manejo de números con decimales
```javascript
console.log(Number("3.14"));     // 3.14
console.log(parseInt("3.14"));   // 3 (descarta decimales)
console.log(parseFloat("3.14")); // 3.14 (mantiene decimales)
```
2️⃣ Conversión de strings con texto
```javascript
console.log(Number("42px"));      // NaN
console.log(parseInt("42px"));    // 42
console.log(parseFloat("42.5px"));// 42.5
```
3️⃣ Manejo de bases numéricas
```javascript
console.log(Number("010"));         // 10
console.log(parseInt("010", 8));    // 8 (interpreta como octal)
console.log(parseInt("010", 10));   // 10
console.log(parseFloat("010.5"));   // 10.5
```
4️⃣ Manejo de valores vacíos o inválidos
```javascript
console.log(Number(""));        // 0
console.log(parseInt(""));      // NaN
console.log(parseFloat(""));    // NaN

console.log(Number("abc"));     // NaN
console.log(parseInt("abc"));   // NaN
console.log(parseFloat("abc")); // NaN
```
5️⃣ Manejo de booleanos y null
```javascript
console.log(Number(true));    // 1
console.log(Number(false));   // 0
console.log(Number(null));    // 0

console.log(parseInt(true));  // NaN
console.log(parseInt(null));  // NaN
console.log(parseFloat(true));// NaN
console.log(parseFloat(null));// NaN
```
6️⃣ Manejo de espacios en blanco
```javascript
console.log(Number("   42   "));   // 42
console.log(parseInt("   42   ")); // 42
console.log(parseFloat("   42.5 ")); // 42.5
// Number() ignora espacios iniciales y finales, parseInt() y parseFloat() solo ignoran espacios iniciales, pero el primer caracter válido debe sere un número.
```
¿Cuando emplear cada uno?
* `Number()` cuando necesites una conversión precisa (booleanos, null, strings válidos).
* `parseInt()` cuando solo necesites enteros y quieras extraerlos de un string.
* `parseFloat()` cuando necesites un número decimal y quieras extraerlo de un string.

## 1.3.2  Conversión de tipo de dato "number" a "string"

Ya vimos que mediante el operador `+` es posible convertir un valor `number` a un `string`, pero esto no siempre funcionará bien. Por suerte existe el _**método prototípico**_ `toString()`. Veamos el siguiente ejemplo.

```javascript
let edad = 101;
let edadString = edad.toString();
typeof edad; // 'number'
typeof edadString; // 'string'
// edad sigue siendo número
```
Tengamos en cuenta que `toString()` debe usarse con un objeto ya que no es una `función global`, de lo contrario se obtendrá un error.