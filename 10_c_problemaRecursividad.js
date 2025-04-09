let personas = [
  {
    nombre: "Susana",
    municipio: "Betania",
    gustos: ["pizza", "karaoke", "estudiar", "bailar"],
  },
  {
    nombre: "Juan",
    municipio: "Hispania",
    gustos: ["fotografía", "pintar", "peliculas"],
  },
  {
    nombre: "Milena",
    municipio: "Betania",
    gustos: ["pizza", "karate", "cocinar", "poesia"],
  },
  {
    nombre: "Ramón",
    municipio: "Andes",
    gustos: ["caminar", "futbol", "ciclismo", "cocinar"],
  },
  {
    nombre: "Andrés",
    municipio: "Betania",
    gustos: ["cocinar", "karaoke", "jazz", "hamburguesa"],
  },
];

console.log("1 //////////////////////////////////////////////");
// 1) Cuenta el número de personas en nuestra base de datos:

console.log("-------A) Opción recursiva ---------")
function contarRecursivo(personasArr, num, acum) {
  if (num === 0) {
    return acum;
  }
  return contarRecursivo(personasArr, num - 1, acum + 1);
}

function main1a() {
  let cantidadPersonas = contarRecursivo(personas, personas.length, 0);
  console.log("Nuestra base de datos tiene", cantidadPersonas, "personas");
}

main1a();

/*
Problemas para usar operadores ++ y --
*num-- no funciona correctamente: num-- pasa el valor sin decrementarlo antes, porque el operador -- tiene post-decremento.
Se cambia por num - 1, que sí pasa el valor decrecido.

*acum++ no suma correctamente: acum++ devuelve el valor antes de incrementarlo.
Se cambia por acum + 1, que sí pasa el valor correcto.

Flujo de ejecución corregido
Llamadas recursivas para personas.length = 5:

contarRecursivo(personas, 5, 0) → contarRecursivo(personas, 4, 1)
contarRecursivo(personas, 4, 1) → contarRecursivo(personas, 3, 2)
contarRecursivo(personas, 3, 2) → contarRecursivo(personas, 2, 3)
contarRecursivo(personas, 2, 3) → contarRecursivo(personas, 1, 4)
contarRecursivo(personas, 1, 4) → contarRecursivo(personas, 0, 5)
contarRecursivo(personas, 0, 5) → **Retorna 5**
*/

console.log("-------A) Otra opción recursiva ---------")

function contarRecursivo2(arr, index = 0) {
  if (index >= arr.length) return 0; //
  return 1 + contarRecursivo2(arr, index + 1);
}

function main1b() {
  let otraRecursiva = contarRecursivo2(personas);
  console.log("Nuestra base de datos tiene", otraRecursiva, "personas");
}

main1b();

console.log("2 //////////////////////////////////////////////");

// 2) Por cada persona obtenga su municipio:

console.log("-------A) Otra opción recursiva ---------")

function obtenerMunicipiosRecursivo(arr, index = 0) {
  if (index >= arr.length) return 0; //
  console.log(`${arr[index].nombre} es de ${arr[index].municipio}`);
  return obtenerMunicipiosRecursivo(arr, index + 1);
}

function main2a() {
  console.log("La siguiente es la lista de personas y su origen mediante recursividad:");
  obtenerMunicipiosRecursivo(personas);
}

main2a();

console.log("-------B) Acumulando en una variable el string ---------");

function obtenerMunicipiosRecursivo2(arr, index = 0, acumString = "") {
  if (index >= arr.length) {
    return acumString;
  } else {
    acumString += `${index + 1}- ${arr[index].nombre} es de ${arr[index].municipio}\n`;
    return obtenerMunicipiosRecursivo2(arr, index + 1, acumString);
  }
}

function main2b() {
let salidaAcumString = obtenerMunicipiosRecursivo2(personas);
  console.log("La siguiente es la lista de personas y su origen acumulando string:\n"+salidaAcumString)
}

main2b();

console.log("3 //////////////////////////////////////////////");

// 3) Encuentra a todas las personas de un municipio en particular.

function getPersonasXMunicipioRecursivo(personasArr, municipio, i = 0, personasMunicipio = []) {
  if (i >= personasArr.length) return personasMunicipio
  if (personasArr[i].municipio === municipio) {
    personasMunicipio.push(personasArr[i].nombre);
  }
  return getPersonasXMunicipioRecursivo(personasArr, municipio, i + 1, personasMunicipio)
}

function main3() {
  const municipioBuscar = "Betania"
  let personasMunicipio = getPersonasXMunicipioRecursivo(personas, municipioBuscar);
  console.log("Las personas procedentes de",municipioBuscar, "son:", personasMunicipio.join(", "))
  console.log("Otra manera de expresarlo: ");
  console.log(`Las personas procedentes de ${municipioBuscar} son: ${personasMunicipio.join(", ")}`)
}

main3();

console.log("4 //////////////////////////////////////////////");
// 4) Añade un nuevo gusto a a una persona.

function agregarGustoRecursivo(persona, personasArr, nuevoGusto, personaNew, i = 0) {
  if (i >= personasArr.length) return personaNew;
  if (personasArr[i].nombre === persona){
    personaNew = personasArr[i];
    personaNew.gustos.push(nuevoGusto);
  }
  return agregarGustoRecursivo(persona, personasArr, nuevoGusto, personaNew, i + 1)
}

function main4() {
  let personaEncontrar = "Milena"
  let gustoAgregar = "patinar"
  let personasNew = agregarGustoRecursivo(personaEncontrar, personas, gustoAgregar); // Prueba pasar directamente la ejecusión de la función en el console.log
  console.log(`La nueva lista de gustos de ${personaEncontrar} es: ${personasNew.gustos.join(", ")}`);
  // console.log(`La nueva composición de ${personaEncontrar} es: ${personasNew}`); // Presenta problemas para visualizar personasNew
  console.log("La nueva composición de", personaEncontrar, "es:", personasNew); // Funciona bien
  // console.log(`La nueva composición de ${personaEncontrar} es: ${JSON.stringify(personasNew, null, 2)}`);  // Convierte el objeto personasNew en formato JSON con una indentación de 2 espacios.
  console.log("El nuevo array personas es: ",personas );
}

main4();

console.log("5 //////////////////////////////////////////////");
// 5) Cuenta el número de personas que tengan un gusto específico.

// "Este problema se resuelve con un bucle dentro de otro bucle"

console.log("-------A) Función dentro de una función ---------")

function contarGustosByTopicRec(personasArr, gustoBuscado, i = 0, conteo = 0 ) {
  if (i >= personasArr.length) {
    return conteo;
  } else {
    function conteoInterno(j = 0, conteo) {
      if (j >= personasArr[i].gustos.length) {
        return contarGustosByTopicRec(personasArr, gustoBuscado, i + 1, conteo);
      } else if (personasArr[i].gustos[j] === gustoBuscado) {
        return conteoInterno(j + 1, conteo + 1);
      } else {
        return conteoInterno(j + 1, conteo);
      }
    }

    return conteoInterno(0, conteo);
  }
}

function main5a() {
  let gustoContarEnPersonas = "pizza"
  const functionEnFunction = contarGustosByTopicRec(personas, gustoContarEnPersonas)
  console.log("La cantidad de personas que tienen por gusto",gustoContarEnPersonas, "es de", functionEnFunction, "persona(s)");
}

main5a();

console.log("-------B) Otra opción ---------")

function contarPorGusto(arr, gusto, index = 0, contador = 0) {
  if (index >= arr.length) return contador; // Caso base: devolvemos la cuenta
  if (arr[index].gustos.includes(gusto)) contador++; // Si la persona tiene el gusto, sumamos
  return contarPorGusto(arr, gusto, index + 1, contador);
}

function main5b() {
  let gustoContarEnPersonas = "pizza";
  let conteo = contarPorGusto(personas, gustoContarEnPersonas);
  console.log("La cantidad de personas que tienen por gusto",gustoContarEnPersonas, "es de", conteo, "persona(s)");
}

main5b();