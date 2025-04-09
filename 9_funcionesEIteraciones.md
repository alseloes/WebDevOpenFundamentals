# Herramientas previas

#### 1. Iteraciones:

Recordemos un poco algunas maneras de como podemos operar con iteraciones con unos ejemplos.

1. Podemos recorrer un array con un ciclo for en el que ejecute una acción concreta en cada ciclo como en el siguiente ejemplo:

   ```javascript
   // 1) Declaramos un array con los nombres de nuestros amigos a saludar
   let friends = ["Andrés", "Camila", "Pedro"];

   // 2) Recorremos el array mediante un ciclo for:
   for (let i = 0; i < friends.length; i++) {
     let friend = friends[i];
     // 3) En cada ciclo saludaremos a nuestro amigo correspondiente al incice actual del for:
     console.log("Hola " + friend + ", ¡me alegro de que estés aquí!");
   }
   ```

2. Podemos emplear un ciclo for para que itere de manera acumulada y solo nos presente el resultad final. Por ejemplo, si tuvieramos una colección de números podríamos sumarlos todos usando un patrón acumulador y presentar el resultado al final:

   ```javascript
   // 1) Declaramos un array con los goles marcados en cada partido
   let golesMarcados = [0, 1, 3, 0, 5, 4, 2, 0, 1];
   // 2) Declaramos el estado inicial del acumulador de goles marcados
   let golesTotales = 0;

   // 3) Sumamos todos los goles marcados con un ciclo for
   for (let i = 0; i < golesMarcados.length; i++) {
     golesTotales = golesTotales + golesMarcados[i];
   }

   // 4) Al final, presentamos en consola un string concatenado con el resultado final
   console.log("El equipo marco " + golesTotales + " goles esta temporada.");
   ```

# 9. Práctica teórica: Funciones & Iteraciones

Las funciones pueden ser mucho más que registrar valores, calcular números o cambiar strings. También permiten emplear iteraciones en ellas haciendo que sea Miremos un pequeño ejemplo de las funciones en combinación con el poder de los loops tomando el ejemplo del ciclo for acumulador de goles marcados:

```javascript
// 1) Declaro la función definiendo un argumento:
function sumarGoles(arrayGoles) {
  // 2) Declaro el estado inicial del acumulador
  let golesTotales = 0;
  // 3) Recorro el array (solicitado en el argumento)
  for (let i = 0; i < arrayGoles.length; i++) {
    // 4) Acumulo los goles
    golesTotales += arrayGoles[i];
  }
  // 5) Returno un string con los goles totales marcados (Ojo, no se está imprimiendo, solo se está asignando a una variable de tipo string)
  return "El equipo marco " + golesTotales + " goles esta temporada.";
}

// 6) Declaro dos arrays con los goles de dos equipos
let golesMarcadosEquipo1 = [0, 1, 3, 0, 5, 4, 2, 0, 1];
let golesMarcadosEquipo2 = [2, 0, 2, 1, 1, 6, 3, 1, 1, 3, 0, 2, 1, 0];

// 7) Invoco la función pasando como argumento el array de goles de un equipo y lo imprimo en consola mediante el método 'log' del objeto 'console'
console.log(sumarGoles(golesMarcadosEquipo1));
console.log(sumarGoles(golesMarcadosEquipo2));
```

**_Un par de Tips:_**

* Hemos visto que a medida que nuestro código se hace más grande aumenta la dificultar para leerlo. Es nuestra responsabilidad como desarrolladores usar buenas prácticas para hacerlos más legible. Una buena práctica es usar correctamente la `indentación`, la cual consiste en llevar el código en varios niveles desde el punto de vista visual. Veamos esto con un ejemplo usando varios `if` anidados:

  ```javascript
  if () {
    if () {
      if () {
        if () {
          if () {
          }
        }
      }
    }
  }
  ```

* A veces puede ser dificultoso imaginar los pasos que debe seguir un ciclo dentro de una función. Es conveniente escribir o dibujar los pasos detenidamente antes de llevar una idea compleja a código.

## Ejercicios:
1) Escriba una función llamada imprimirInstrucciones la cual deberá recibir como argumento el siguiente array con strings correspondiente a las instrucciones:
    ```javascript
      instrucciones = [
        "Retire en pástico envoltorio",
        "Coloque en el microondas por 45 segundos",
        "Retire del microondas",
        "Deje que se enfríe",
        "¡Disfrute!",
      ];
    ```
    La función deberá concatenar siguiendo la siguiente estructura:
    * `Paso 1 - imprimirInstrucciones[i]`
    * `Paso 2 - imprimirInstrucciones[i + 1]`, etc

    Al final, debería imprimir en consola algo similar a lo siguiente:

    ```javascript
    Paso 1 - Retire en pástico envoltorio
    Paso 2 - Coloque en el microondas por 45 segundos
    Paso 3 - Retire del microondas
    Paso 4 - Deje que se enfríe
    Paso 5 - ¡Disfrute!
    ```

2) Crea una función que califique examenes, la cual debe recibir dos arrays como argumento:
    * Un array con las respuestas correctas.
    * Un array con las respuestas dadas por un estudiante.

    Por ejemplo:

    ```javascript
    let respuestasCorrectas = ["A", "D", "D", "B", "B", "C", "B"];
    let respuestaEstudiante = ["C", "D", "D", "B", "A", "C", "B"];
    calificarExamen(respuestasCorrectas, respuestaEstudiante); //=> 5
    ```

3) Complementa la función de la función del ejercicio 2 de manera tal que sea posible determinar si el esudiante aprobó y reprobó la prueba. La nueva función debe recibir (adicionalmente) el nomnbre del estudiante e imprimir en consola:
    * "Hola <estudiante>, has sacado <nota> por lo tanto ganaste la prueba, ¡Felicitaciones!"
    * "Hola <estudiante>, has sacado <nota> por lo tanto perdiste la prueba, espero que puedas prepararte mejor para la próxima prueba".

    Adicionalmente, debe tener en cuenta que un estudiante apobará la prueba si obtiene una calificación igual o superior al 70% de las respuestas positivas.