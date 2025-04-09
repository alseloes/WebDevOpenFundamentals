# Herramientas previas

Hagamos una recopilación de los operadores necesarios para trabajar con condicionales.


## TITULO
Para trabajar con condicionales debemos echar mano de los operadores lógicos y los operadores de comparación. Hagamos un brebe repaso de estos operadores

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

## 2.4 Operadores de igualdad `==` y `===` :

Con los operadores de igualdad `==` (Igualdad de valor) y `===` (Igualdad de estricta) es necesario conocer su comportamiento con precisión. Veamos esto en la siguiente tabla:

| Condición | returns       |
|:--------:|:--------------:|
| `7 === "7"`  | false    |
| `7 == "7"` | true   |

De lo anterior, podemos plantear las siguientes observaciones:
* El operador de `igualdad de valor` (`==`) transforma el string `"7"` en un dato de tipo number `7` y luego compara ambos valores.
* En el caso del operador de `igualdad estricta` (`===`), tanto el valor como el tipo de dato debe ser el mismo.
* A muchos desarrolladores les resulta más facil trabajar con el operador `===` porque no es necesario pensar en conversiones o transformaciones de tipo de datos.

## 2.4 Operadores Lógicos:

Recordemos que los operadores lógicos son `&&` (AND), `||` (OR) y `!` (NOT). Profundicemos en el comportamiento que vimos en el capítulo 2 Operadores.

## Operador `&&` - AND

En el caso del operador `&&` (AND) ambas condiciones deben ser `true`. Veamos esto en la siguiente tabla:

| Condición | returns       |
|:--------:|:--------------:|
| `true && true`  | true    |
| `true && false` | false   |
| `false && false`| false   |


## Operador `||` - OR

Por su parte, con el operador lógico `||` (OR)  una de las dos condiciones debe ser `true` para que la condición sea `true`. Veamos:

| Condición | returns       |
|:--------:|:--------------:|
| `true \|\| true`  | true    |
| `true \|\| false` | true   |
| `false \|\| false`| false   |

## Operador `!` - NOT

Finalmente, el operador `!` (NOT) retorna el valor booleano inverso:

| Condición | returns   |
|:--------:|:--------:|
| `!true`  |  false   |
| `!false`  |  true   |


# 4. Práctica teórica:  Condicionales

Imagina que vas por una carretera y te encuentras una bifurcación en la que tendrás que decidir que camino seguir. Tu código también tendrá que tomar decisiones similares y lo hará dependiendo de las condiciones con las que se encuentre.


CONDITIONAL STATMENTS: declaración condicional
1) IF..ELSE
2) SWITCH..CASE




Bloque If

El bloque de código que está entre llaves después del if se ejecuta solo si la condición es verdadera (`true`).

```javascript
let userLoggedInToday = true;

if (userLoggedInToday) {
  console.log("Thanks for logging in today!");
}
```

Bloque Else

Piensa en el ejemplo en que un usuario se da de alta en una aplicación fotográfica. Al momento de darse de alta no tendrá ningnuna foto cargada en su perfil pero no se mostrará simplemente una página vacía; se le dará la opcíón de subir sus primeras fotos.

Regularmente necesitaras crear planes de respaldo (backup) si las condiciones son diferentes, en este caso se hará mediante el bloque Else





```javascript

if (condicion) {
  declaracion
}
else if (otraCondicion){
  declaracion
}
else if (masCondiciones){
  declaracion
}
else { // cuando no se cumplió ninguna de las condiciones anteriores
  declaracion
}
```
Tengamos en cuenta que la condición se reduce a un valor booleano, independientemente de la cantidad de variables u operaciones que contenga. Generalmente, la ciondición viene de una comprobación del tipo:
* ¿Es igual a esto?
* ¿Es más grande (pequeño) que esto?
* ¿Es múltiplo de esto?
* ¿Este string contiene este otro string?
* ¿La contraseña es suficientemente larga?
* ¿El usuario ha inciado sesión?
* ¿La dirección de correo ya está en uso?
* ¿El tamaño de la foto cumple para ser foto de perfil?

Ahora veamos el siguiente ejemplo:
```javascript
// Tenemos la variable de tipo number 'hora'
// Ahora tenemos las siguientes condiciones
// 1) Si la hora está entre las 6am y las 12pm : ¡Buenos días!
// 2) Si la hora está entre las 12pm y las 6pm : ¡Buenas tardes!
// 3) De otro modo                             : ¡Buenas noches!

// Ahora representémoslo en código
let hora = 10;
if ( hora >= 6 && hora < 12 ){
  console.log("¡Buenos días!")
}
else if ( hora >= 12 && hora < 18 ){
  console.log("¡Buenas tardes!")
} else {
  console.log("¡Buenas noches!")
}

// En este ejemplo, por tratarse de declaraciones simples puedo suprimir las llaves

if ( hora >= 6 && hora < 12 )
  console.log("¡Buenos días!")
else if ( hora >= 12 && hora < 18 )
  console.log("¡Buenas tardes!")
else
  console.log("¡Buenas noches!")
```


En el siguiente ejemplo podemos observar la importancoia de tener presente el orden de los IF, ya que una vez se cumpla una condición habrá una salida del bloque de código:

```javascript
let loginCount = 3;
if (loginCount > 10) {
  console.log("Has tenido muchos inicios de sesión hoy. ¡Descansa!");
} else if (loginCount > 0) {
  console.log("¡Gracias por iniciar sesión!");
} else {
  console.log("¡No olvides iniciar sesión hoy!");
}
```





Ejemplo igualdad
```javascript
// A random number from 1 to 6
let random = Math.ceil(Math.random() * 6);

// Try changing the equality checks below
// See the results by clicking 'run'
if (random === 1) {
  console.log("The random number was 1");
} else if (random === 2) {
  console.log("The random number was 2");
} else if (random === 6) {
  console.log("The random number was 6");
} else {
  console.log("The random number was not 1,2, or six. Unlucky.");
}
```

### Asignación vs Igualdad

Este es un erro muy común que cometen muchos nuevos programadores: confunden el `operador de asignación` (`=`) con los `operadores de igualdad` (`==` y `===`).

```javascript
// assignment (one equal sign)
let currentForecast = "sunny";

// equality comparison (three equal signs)
if (currentForecast === "rain") {
  let recommendation = "Bring your umbrella! ☔";
}

// Mistake alert!
// Only one equals sign,
// means that this assigns 'rain' to currentForecast

// instead of the triple equals,
// which would check if currentForecast is set to 'rain'
if (currentForecast = "rain") {
  let recommendation = "Bring your umbrella! ☔";
}
```


















Llegó el momento de adentrarnos de manera práctica en el mundo de los strings en JavaScript.

En el capítulo 1 tipo de datos mencionamos lo siguiente sobre los strings:

- Los `strings` se usan para representar texto y se llaman así porque son una "cadena" de caracteres organizados en una línea.
- Las comillas pueden ser dobles (`" "`) o simples (`' '`)
- Solo se deben cumplir dos reglas:
  - Se debe usar simpre el mismo tipo de comillas tanto en el principio como en el final del string.
  - En el caso en que se quiera incorporar una comilla (doble o simple) dentro del string será necesario usar lo contrario al comienzo y al final del string.

  ```javascript
    let fraseSimple = "Esta es una frase con una comilla simple ' al interio"

    let fraseDoble = 'Esta es una frase con una comilla doble " al interio'
  ```

Algunos escenarios comunes que requieren funciones con strings avanzados son:

- Validación de envío de formularios.
- Inyectar datos en una plantilla HTML.
- Ordenar un conjunto de elementos alfabéticamente.

## 3.1 Características de los Strings

* Es un tipo dato primitivo. Los primitivos no tienen propiedades ni métodos, solo los objetos.
* Un `string primitivo` es un tipo de dato inmutable que representa texto.
* Cuando usamos "`dot notation`" con un `string primitivo` podemos ver que disponemos de una gran variedad de propiedades y métodos. Esto sucede porque el motor de JavaScript envuelve internamente los `strings primitivos` con un `String object` temporalmente. Después de que se ejecuta la operación (.length, .toUpperCase(), etc.) el objeto temporal se destruye automáticamnete. Es decir, que podemos trabajar con los `strings primitivos` como si fueran `String object`

  ```javascript
  // string primitivo
  const mensajePrimitivo = 'Hola mundo'
  console.log(mensajePrimitivo.toUpperCase());  // "HOLA MUNDO"

  // String object (objeto)
  const mensajeObjecto = new String('Hola mundo')
  console.log(mensajeObjecto.toUpperCase());  // "HOLA MUNDO"

  // Ahora miremos que tipo es cada variable con el operador typeof()
  typeof mensajePrimitivo // string
  typeof mensajeObjecto // object
  ```

Una fuente de información muy completa referente a los  datos de tipo `String object` está disponible en la web de [mozilla developer org](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String), en esta puede consultar todas las propiedades y métodos disponibles para los `String object`.

Veamos a continuación algunas de estas propiedades y métodos disponibles para los `String object` (las mismas que usará los `string primitivos`):


## 3.2 Algunas propiedades y métodos de strings object:


## 3.2.1 Propiedad `length`

* Esta propiedad nos permite conocer la longitud que posee un string. Veamos un ejemplo:
* Podemos asegurar que `lengh` es una propiedad puesto que corresponde a un valor almacenado en un objeto (no ejecuta una acción).

```javascript
const mensaje = 'Esta es mi primera frase en JavaScript'

mensaje.length // 38
```

Esta propiedad es útil, por ejemplo, en situaciones en las que queremos asegurarnos que el usuario digite un número mínimo y/o máximo de caracteres en un input (por ejemplo un campo de un formulario).

## 3.2.2 Método `includes()` (método de búsqueda)

* Es un "método de búsqueda" (search method) o "verificación de prefijo" (prefix check).
* Esté método busca un valor o cadena de texto específica dentro de un `array` o `string` retornando un valor `booleano`
* Sabemos que `includes()` es un método porque realiza una acción concreta y se ejecuta con y se ejecuta con `()`.

 Ejemplo:

```javascript
const mensaje = 'Esta es mi primera frase en JavaScript'

mensaje.includes('primera') // true
mensaje.includes('numero') // false
```

## 3.2.3 Método `startsWith()` (método de búsqueda)

* Es un "`método de búsqueda`" (search method) o "verificación de prefijo" (prefix check).
* Esté método busca un valor o cadena de texto específica al comienzo de un `array` o `string` partiendo desde el índice cero `[0]` y retornando un valor `booleano`

 Ejemplo:
```javascript
const mensaje = 'Esta es mi primera frase en JavaScript'

mensaje.startsWith('Esta') // true
mensaje.startsWith('esta') // false
```
Del ejemplo anterior podemos notar que es sensible a divergencias entre las mayúsculas y minúsculas. A esto se le conoce como `case-sensitive`


## 3.2.4 Método `endsWith()` (método de búsqueda)

* Es un "`método de búsqueda`" (search method) o "verificación de prefijo" (prefix check).
* Esté método busca un valor o cadena de texto específica al final de un `array` o `string` y retornando un valor `booleano`


 Ejemplo:
```javascript
const mensaje = 'Esta es mi primera frase en JavaScript'

mensaje.endsWith('t') // true
mensaje.endsWith('JavaScript') // true
mensaje.endsWith('') // true
mensaje.endsWith(' ') // false
```

## 3.2.5 Método `indexOf()` (método de búsqueda)

* Es un "`método de búsqueda`" (search method).
* Esté método busca el índice del primer caracter de un valor o cadena de texto específica dentro de un `array` o `string` y retornando un valor de tipo `number` correspondiente a dicho índice

 Ejemplo:
```javascript
const mensaje = 'Esta es mi primera frase en JavaScript'

mensaje.indexOf('frase') // 19
mensaje.indexOf('e') // 5
mensaje.indexOf('fr') // 19
mensaje.indexOf('') // 0
mensaje.indexOf(' ') // 4
mensaje.indexOf('Goku') // -1
```

**_Tarea:_** Investiga como funciona `lastIndexOf()` 😜.

## 3.2.6 Método `replace()` (método de manipulación de strings)

* `replace()` es un método en JavaScript que permite obtener un nuevo string en el que se reemplaza una parte de una cadena referencia por otra.
* Es un método de `manipulación de strings` ya que modifica un string al devolver una nueva versión con los cambios. Por esta razón también se dice que es un `método inmutable` (no modifica el string original, sino que devuelve uno nuevo).
* Se clasifica como un `método de búsqueda y reemplazo` porque permite localizar una subcadena dentro de un string y sustituirla por otra.

Ejemplo:
```javascript
const mensaje = 'Esta es mi primera frase en JavaScript'

mensaje.replace('primera', 'segunda') // 'Esta es mi segunda frase en JavaScript'

mensaje // 'Esta es mi primera frase en JavaScript'
```
Notemos que esta acción devuelve un nuevo string sin modificar el string original.

**_Tarea:_** Investiar como se puede realizar un replace insensible a mayúsculas 😮.

## 3.2.7 Método `toUpperCase()` (método de manipulación de strings)

* `toUpperCase()` es un método en JavaScript que permite obtener un nuevo string con todos lo caracteres alfabéticos uppercase.
* Es un método de `manipulación de strings` ya que modifica un string al devolver una nueva versión con los cambios. Por esta razón también se dice que es un `método inmutable` (no modifica el string original, sino que devuelve uno nuevo).

Ejemplo:
```javascript
const mensaje = 'Esta es mi primera frase en JavaScript'

mensaje.toUpperCase() // 'ESTA ES MI PRIMERA FRASE EN JAVASCRIPT'

mensaje // 'Esta es mi primera frase en JavaScript'
```

## 3.2.8 Método `toLowerCase()` (método de manipulación de strings)

* `toLowerCase()` es un método en JavaScript que permite obtener un nuevo string con todos lo caracteres alfabéticos uppercase.
* Es un método de `manipulación de strings` ya que modifica un string al devolver una nueva versión con los cambios. Por esta razón también se dice que es un `método inmutable` (no modifica el string original, sino que devuelve uno nuevo).

Ejemplo:
```javascript
const mensaje = 'Esta es mi primera frase en JavaScript'

mensaje.toLowerCase() // 'esta es mi primera frase en javascript'

mensaje // 'Esta es mi primera frase en JavaScript'
```

## 3.2.9 Método `trimStart()` (método de manipulación de strings)

* `trimStart()` es un método en JavaScript que elimina **SOLO** los espacios en blanco al inicio de una cadena.
* Es un método de `manipulación de strings` ya que modifica un string al devolver una nueva versión con los cambios. Por esta razón también se dice que es un `método inmutable` (no modifica el string original, sino que devuelve uno nuevo).

Ejemplo:
```javascript
const mensaje = '   Esta es mi primera frase en JavaScript   '

mensaje.trim() // 'Esta es mi primera frase en JavaScript   '

mensaje // 'Esta es mi primera frase en JavaScript'
```

**_Nota:_** es equivalente a `trimLeft()`, sin embargo este método no es la versión recomendada en estándares modernos(deprecado).

**_Tarea:_** consulta cual es la versión para hacer `trim` solo al final de la cadena de texto 😉.

## 3.2.10 Método `split()` (método de manipulación de strings)

* `split()` es un método que divide un string en un array de subcadenas basándose en un separador especificado (separándolas según un delimitador).
* Es un método de `manipulación de strings` ya que devuelve un array con las partes resultantes sin modificar el string original . Por esta razón también se dice que es un `método inmutable`.
* Si se usa un string vacío `""` como separador, divide cada carácter en un elemento del array.

Ejemplo:
```javascript
const mensaje = '   Esta es mi primera frase en JavaScript   '

mensaje.split(" ") // ['Esta', 'es', 'mi', 'primera', 'frase', 'en', 'JavaScript']

mensaje // 'Esta es mi primera frase en JavaScript'
```

**_Tarea:_** Investiga como puedes hacer el proceso inverso, es decir, convertir un array en un string 🤠.

## 3.3 Otros manejos de strings en JavaScript:

## 3.3.1 Indexación de cadenas (string indexing)

* En JavaScript (y otros lenguajes como Python y Java), las cadenas de texto (`string`) se pueden tratar como un `array` de caracteres, lo que permite acceder a caracteres específicos usando su índice.
* El índice comienza en `0`.
* Los strings son inmutables, esto quiere decir que aunque puedes acceder a un carácter con `mensaje[0]`, no puedes cambiarlo directamente (`mensaje[0] = "X"` no funciona) como si podrías hacerlo con un dato de tipo `array`.
* Si el índice está fuera del rango, devuelve undefined.

```javascript
let mensaje = "Hola";

console.log(mensaje[0]); // "H"
console.log(mensaje[1]); // "o"
console.log(mensaje[3]); // "a"
console.log(mensaje[10]); // undefined (fuera de rango)
```

## 3.3.2 Escape Notation (notación de escape)

* Es una forma de representar caracteres especiales dentro de cadenas de texto mediante una barra invertida `\`.
* También puedes encontrar información con el nombre de `Escape Sequences`.
* Se usa para insertar caracteres que de otro modo serían difíciles de escribir o que tienen un significado especial en JavaScript.

Ejemplos:
* Deseas tener una comilla simple en un string. Esto lo puedes conseguir mediante el uso de `\'`.
  ```javascript
  let mensaje = 'Probando escape notation \' en JavaScrip';

  mensaje // 'Probando escape notation ' en JavaScrip'
  ```
* Necesitas que el string se presente en dos líneas separadas. Esto es posible mediante el escape notation `\n`.
* Cuando usas `\n` en una string en JavaScript, este carácter representa un salto de línea solo cuando se muestra en un entorno que lo interpreta correctamente, como en la consola de `Node.js` o en un `<pre>` en HTML. También se puede escribir directamente en un `console.log('Este es mi\n primer string')` para observar este comportamiento ya que ahora se muestra como texto literal.
* Pueden consultar más información en la página [mozilla developer](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Lexical_grammar#escape_sequences) referente a `escape notations - escape sequences`.

**_Nota:_** En la consola de `Chrome DevTools`, las cadenas con `\n` se imprimen como una línea continua debido a que el escape notation no se interpreta visualmente como un salto de línea, sino de manera literal dentro del string.

  ```javascript
  let mensaje = 'Probando escape notation\' de salto de líneaen JavaScrip';

  mensaje // 'Probando escape notation ' en JavaScrip'
  ```
La lista de caracteres de escape puede ser amplia. A continuación, se presenta una tabla con los caracteres de escape más comunes:

| Secuencia  | Significado |
|:----------:|------------|
| `\'`      | Comilla simple (`'`) dentro de un string con comillas simples. |
| `\"`      | Comilla doble (`"`) dentro de un string con comillas dobles. |
| `\\`      | Barra invertida (`\`). |
| `\n`      | Nueva línea. |
| `\t`      | Tabulación. |
| `\r`      | Retorno de carro (usado en algunos sistemas operativos). |
| `\b`      | Retroceso (backspace). |
| `\f`      | Salto de página (form feed). |
| `\uXXXX`  | Unicode (carácter en formato hexadecimal). |
| `\xXX`    | Carácter en código hexadecimal. |

**_Nota:_** En la página [mozilla developer](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Lexical_grammar#escape_sequences) puedes consultar más informacón y muchas más `escape notations - escape sequences`.

**_Curiosidad:_** En versiones antiguas de Chrome (antes de 2019), cuando ingresabas directamente una cadena con `\n` en la consola de DevTools, se mostraba con un salto de línea. Sin embargo, a partir de Chrome 72 (2019), Google cambió la forma en que la consola muestra las strings. Ahora, cuando escribes una cadena directamente en la consola sin `console.log()`, Chrome escapa los caracteres especiales como `\n` y los muestra como texto literal en lugar de interpretarlos visualmente.


## 3.3.3. String Concatenation (concatenación de cadenas)

La `String Concatenation` (concatenación de cadenas) es una herramienta que permite unir cadenas de texto para formar una cadena más larga. Veamos cuales son las diferentes manera de concatenar strings.

1. **_Concatenación clásica usando `+`:_** esta concatenación se realiza mediante el operador `+`, tal como podemos ver en el siguiente ejemplo:

    ```javascript
    let nombre = "Juan"
    let presentacion = "Hola, me llamo " + nombre;
    console.log(presentacion);

    // Otra opción es la siguiente:
    let saludo = "Hola, me llamo ";
    let nombre2 = "Carlos";
    let presentacion2 = saludo + nombre2;
    console.log(presentacion2);
    ```
    Veamos que sucede si uno de los valores es un número:
    ```javascript
    console.log("Edad: " + 15); // "Edad: 15"
    ```
    Ahora veamos que sucede si uno es un "string numérico" y el otro es un valor de tipo number:
    ```javascript
    let nueve = "9";
    let ocho = 8;
    let concatenacion = nueve + ocho
    console.log(concatenacion); // 98
    typeof(concatenacion); // string

    // Atención: Si lo intentas hacer con el operador "-" se realizará una resta:

    let resta = nueve - ocho
    console.log(resta); // 1
    typeof(resta); // number
    ```

2. **_Concatenación acumulativa usando `+=`:_** esta es una manera de concatenación poco habitual, pero disponible para el desarrollador:

    ```javascript
    let message = "Hola";
    message += ", ¿cómo estás?";
    console.log(message); // "Hola, ¿cómo estás?"
    ```

    **_Atención:_**
    Existe una cuarta manera de concatenar empleando el método join( ) tal como lo debiste consultar anteriormente. Es el proceso inverso de `split()` 😃😃😃. ¿Ya tienes claro como opera?


## 3.3.4. Template literals

* Template Literals (o Template Strings) son una forma más flexible y recomendada de manejar cadenas de texto en JavaScript (en lugar de concatenación) porque es más limpio y legible.
 * Se emplea usando template literals `${}` dentro de comillas invertidas (Backticks) ``` ` ``` (en lugar de comillas simples ``` ' ``` o dobles ``` " ``` como en concatenación).
*  Permiten `interpolación de variables`, `multilínea` y `expresiones embebidas`.
* Es compatibles con funciones especiales llamadas `Tagged Templates` (funciones etiquetadas), las cuales permiten procesar el template literal antes de evaluarlo.

Ejemplo de `interpolación de variables`:

  ```javascript
  let nombre = "Pepito";
  let edad = 15;
  let  mensajeTL = `Hola, soy ${nombre} y tengo ${edad} años.`
  console.log(mensajeTL);
  // "Hola, soy Pepito y tengo 15 años."

  // En lugar de:
  let mensajeConcatenado = "Hola, soy "+ nombre + " y tengo " + edad + " años".
  ```
Ejemplo de `multilinea`:

  ```javascript
  let linea1 = "Hola al curso"
  let linea2 = "mi nombre es Juan"
  let linea3 = "y estoy estudiando programación"

  let textoMultilinea = `${linea1}
  ${linea2}
  ${linea3}`;

  console.log(textoMultilinea);

    // En lugar de:

  let textoENotation = "Línea 1\n" + "Línea 2\n" + "Línea 3";
  console.log(textoENotation);
  ```

Ejemplo de `espresiones embebidas`:

  ```javascript
  let a = 10;
  let b = 5;
  console.log(`La suma de ${a} y ${b} es ${a + b}`); // La suma de 10 y 5 es 15

    // En lugar de:
  console.log("La suma de "+ a + " y " + b + " es " + (a + b)); // La suma de 10 y 5 es 15
  ```

  Finalmente, miremos un ejemplo de `Tagged Templates` (Esto es más avanzado):
  ```javascript
  function procesar(strings, nombre, edad) {
      return `${strings[0]}${nombre.toUpperCase()}${strings[1]}${edad + 5}${strings[2]}`;
  }

  let resultado = procesar`Hola, soy ${"Juan"} y tengo ${10} años.`;
  console.log(resultado);
  // Hola, soy JUAN y tengo 15 años.
  ```


  Ejercicios:

  1) Dadas las siguientes variables:
  ```javascript
  let horaActual = "3";
  let minutosActuales = "15";
  let segundosActuales = "22"
  ```
  Realiza una concatenación de manera que obtengas la hora completa. Guarda la concatención en una variable.

  2) Partiendo de la siguiente variable:
  ```javascript
  let texto = "Son las ";
  ```
  Realiza una concatenación usando la variable del punto 1 que imprima "Son las 3:15:22"

  3) Partiendo de las siguiente información:
  ```javascript
  let ventaTotal = 4990;
  let costoDeVenta = 2250;

  let ventaTotalMsj = "La venta fue de";
  let costoTotalMsj = "Nos costó";
  let gananciaMsj = "La ganancia por venta fue de";
  ```
  Determine:
  ```javascript
  let gananciaDeVenta =
  let textoVentaTotal =     // La venta fue de 4990
  let textoCostoTotal =     // El costo de venta fue de 2250
  let textoGanacia    =     // La ganancia por venta fue de 2740
  ```
  Nota: Determine si es necesario emplear console.log() para visualizar los resultados.

  4) Partiendo del siguiente string:
  ```javascript
  let socrates = "solo sé que nada sé"
  ```
  Modifique la variable `socrates` para que so contenido se transforme en `upperCase` (OJO: debe mutar la variable).

  5) Partiendo del siguiente string:
  ```javascript
  let originalString = "   Me gusta usar métodos ";
  ```
  * Corrija el string para que se eliminen los espacios de los extremos.
  * Modifique el nuevo string para que se imprima en formato upperCase

Programar no se trata de memorizar; se trata de descubrir como funciona tu computadora, comprender las reglas básicas detras del código y reconocer patrones y conexiones. Usa siempre la documentación y la IA (más no esperes que te haga todo!)


  Antes de iniciar con strings veamos un [video sobre los strings primitivos y no primitivos en JavaScript](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/String).