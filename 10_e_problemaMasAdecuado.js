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

console.log("------- Mediante propiedad length (Mejor opción) ---------");

function contarPersonas(personasArr) {
  return personasArr.length;
}

function main1() {
  let cantidadPersonasLength = contarPersonas(personas);
  console.log(
    "Nuestra base de datos tiene",
    cantidadPersonasLength,
    " personas"
  );
}

main1();

console.log("2 //////////////////////////////////////////////");
// 2) Por cada persona obtenga su municipio:

console.log("-------A) Mediante forEach ---------");

function obtenerMunicipio(personasArr) {
  personasArr.forEach((persona) => {
    console.log(`${persona.nombre} es de ${persona.municipio}`);
  });
}

function main2a() {
  console.log("La siguiente es la lista de personas y su origen:");
  obtenerMunicipio(personas);
}

main2a();

console.log("-------B) Retornando un solo string mediante map + join ---------");

function obtenerMunicipio(personasArr) {
  return personasArr
    .map((persona) => `${persona.nombre} es de ${persona.municipio}`)
    .join("\n");
}

function main2b() {
  let salidaString = obtenerMunicipio(personas);
  console.log(
    "La siguiente es la lista de personas obtenida alternativamente:\n" +
      salidaString
  );
}

main2b();

console.log("-------C) Retornando un solo string con indices mediante map + join ---------");

function obtenerMunicipio2(personasArr) {
  return personasArr
    .map(
      (persona, index) =>
        `${index + 1}- ${persona.nombre} es de ${persona.municipio}`
    )
    .join("\n");
}

function main2c() {
  // let salida = obtenerMunicipio2(personas);
  console.log(
    "La siguiente es la lista de personas obtenida mediante otra alternativa:\n" +
    obtenerMunicipio2(personas)
  );
}

main2c();

console.log("3 //////////////////////////////////////////////");
// 3) Encuentra a todas las personas de un municipio en particular.

console.log("-------A) Empleando filter + map ---------");

function obtenerPersonasXMunicipio(municipio, personasArr) {
  return personasArr
    .filter((persona) => persona.municipio === municipio)
    .map((persona) => persona.nombre);
}

function main3a() {
  const municipioBuscar = "Betania";
  let personasMunicipio = obtenerPersonasXMunicipio(municipioBuscar, personas);
  console.log(
    "Las personas procedentes de",
    municipioBuscar,
    "son:",
    personasMunicipio.join(", ")
  );
  console.log("Otra manera de presentarlo: ");
  console.log(
    `Las personas procedentes de ${municipioBuscar} son: ${personasMunicipio.join(
      ", "
    )}`
  );
}

main3a();

console.log("-------B) Empleando filter + map & getters---------");

// Empleando funciones getNombre y getMunicipio

function getNombre(unArray) {
  return unArray.nombre;
}

function getMunicipio(unArray) {
  return unArray.municipio;
}

function obtenerPersonasXMunicipio2(municipio, personasArr) {
  return personasArr
    .filter((persona) => getMunicipio(persona) === municipio)
    .map((persona) => getNombre(persona));
}

function main3b() {
  const municipioBuscar2 = "Betania";
  let personasMunicipio2 = obtenerPersonasXMunicipio2(
    municipioBuscar2,
    personas
  );
  console.log(
    "Las personas procedentes de",
    municipioBuscar2,
    "son:",
    personasMunicipio2.join(", ")
  );
  console.log("Otra manera de presentarlo: ");
  console.log(
    `Las personas procedentes de ${municipioBuscar2} son: ${personasMunicipio2.join(
      ", "
    )}`
  );
}

main3b();


console.log("4 //////////////////////////////////////////////");
// 4) Añade un nuevo gusto a a una persona.

console.log("-------A.1) Empleando map & spread operator ---------");

function modificaPersonas(personasArr, personaBuscada, gusto) {
  return personasArr.map((persona) =>
    persona.nombre === personaBuscada ? { ...persona, gustos: [...persona.gustos, gusto] } : persona
  );
}

function main4a1() {
  let personaNewGusto = "Susana";
  let nuevoGusto = "peliculas";
  let personasNew = modificaPersonas(personas, personaNewGusto, nuevoGusto);
  personas = personasNew
  let personaEncontrada = personasNew.find(persona => persona.nombre === personaNewGusto);
  console.log(
    `La nueva lista de gustos de ${personaNewGusto} es: ${JSON.stringify(personaEncontrada.gustos)}`
  );
    console.log(
    "La nueva composición de",
    personaNewGusto,
    "es:",
    personaEncontrada
  );
  // Funciona bien
  // console.log(`La nueva composición de ${personaNewGusto} es: ${JSON.stringify(personaBuscada, null, 2)}`);  // Convierte el objeto personasNew en formato JSON con una indentación de 2 espacios.
  console.log("El nuevo array personas es: ", personas);
}

main4a1();

console.log("-------A.1) Empleando map & spread operator pero de manera inmutable ---------");
// No modifica el array original, crea una copia

function agregarGustoInmutable(individuo, personasArr, nuevoGusto) {
  return personasArr.map(persona => {
    if (persona.nombre === individuo) {
      return { ...persona, gustos: [...persona.gustos, nuevoGusto] };
    }
    return persona;
  });
}

function main4a2(){
  let personaModificada = "Milena"
  let gustoIncluir = "pintar"
  let personasCopia = agregarGustoInmutable(personaModificada, personas, gustoIncluir);
  console.log("El nuevo array:", personasCopia); // Nuevo array modificado
  console.log("El array personas original:", personas); // Array original intacto
}

main4a2();

console.log("-------B.1) Empleando find() ---------");

function buscarPersona2(personasArr, personaBuscada) {
  return personasArr.find(persona => persona.nombre === personaBuscada);
}

function addGusto(persona, gusto) {
  if (persona) { // Evita error si la persona no existe
    persona.gustos.push(gusto);
  }
}

function main4b1() {
  let personaNewGusto2 = "Milena";
  let nuevoGusto2 = "rompecabezas";
  let personaBuscada2 = buscarPersona2(personas, personaNewGusto2);
  addGusto(personaBuscada2, nuevoGusto2);
  console.log(
    `La nueva lista de gustos de ${personaNewGusto2} es: ${personaBuscada2.gustos.join(
      ", "
    )}`
  );
  // console.log(`La nueva composición de ${personaNewGusto} es: ${personaBuscada}`); // Presenta problemas para visualizar personasNew
  console.log(
    "La nueva composición de",
    personaNewGusto2,
    "es:",
    personaBuscada2
  ); // Funciona bien
  // console.log(`La nueva composición de ${personaNewGusto} es: ${JSON.stringify(personaBuscada, null, 2)}`);  // Convierte el objeto personasNew en formato JSON con una indentación de 2 espacios.
  console.log("El nuevo array personas es: ", personas);
}

main4b1();

console.log("-------B.2) Empleando find() sin atomizar ---------");

function agregarGusto(personasArr, individuo, nuevoGusto) {
  let persona = personasArr.find(p => p.nombre === individuo);
  if (persona) {
    persona.gustos.push(nuevoGusto);
    return persona.gustos;
  }
  return null; // Retorna null si la persona no fue encontrada
}

function main4b2() {
  let personaNewGusto2 = "Milena";
  let nuevoGusto2 = "correr";
  let personaBuscada2 = agregarGusto(personas, personaNewGusto2, nuevoGusto2);
  console.log(
    `La nueva lista de gustos de ${personaNewGusto2} es: ${personaBuscada2.join(
      ", "
    )}`
  );
  // console.log(`La nueva composición de ${personaNewGusto} es: ${personaBuscada}`); // Presenta problemas para visualizar personasNew
  console.log(
    "La nueva composición de",
    personaNewGusto2,
    "es:",
    personaBuscada2
  ); // Funciona bien
  // console.log(`La nueva composición de ${personaNewGusto} es: ${JSON.stringify(personaBuscada, null, 2)}`);  // Convierte el objeto personasNew en formato JSON con una indentación de 2 espacios.
  console.log("El nuevo array personas es: ", personas);
}

main4b2();

console.log("5 //////////////////////////////////////////////");
// 5) Cuenta el número de personas que tengan un gusto específico.

console.log("-------A) Empleando find() y forEach ---------");

// función que busque en los gustos de una persona
// función que recorra la lista de personas contando repeticiones de gusto

function buscarGustosPersona(gustosArr, gusto) {
  return gustosArr.find((g) => g === gusto);
}

function contarGustosByTopic(personasArr, gustoBucado) {
  let contadorGustos = 0;
  personasArr.forEach((p) => {
    if (buscarGustosPersona(p.gustos, gustoBucado)) {
      contadorGustos++;
    }
  });
  return contadorGustos;
}

function main5a() {
  let gustoContarEnPersonas = "cocinar";
  let conteoGustos = contarGustosByTopic(personas, gustoContarEnPersonas);
  console.log(
    "La cantidad de personas que tienen por gusto",
    gustoContarEnPersonas,
    "es de",
    conteoGustos,
    "persona(s)"
  );
}

main5a();

console.log("-------B) Empleando filter.length ---------");

function contarPorGusto(gustosArr, gusto) {
  return gustosArr.filter(persona => persona.gustos.includes(gusto)).length;
}

function main5b() {
  let gustoContar = "cocinar";
  let conteoGusto = contarPorGusto(personas, gustoContar);
  console.log(
    "La cantidad de personas que tienen por gusto",
    gustoContar,
    "es de",
    conteoGusto,
    "persona(s)"
  );
}

main5b();

console.log("-------C) Empleando reduce() ---------");

function contarPersonasConGusto(personas, gustoBuscado) {
  return personas.reduce((contador, persona) =>
    persona.gustos.includes(gustoBuscado) ? contador + 1 : contador
  , 0);
}

function main5c() {
  let gustoContar = "pizza";
  let conteoGusto = contarPersonasConGusto(personas, gustoContar);
  console.log(
    "La cantidad de personas que tienen por gusto",
    gustoContar,
    "es de",
    conteoGusto,
    "persona(s)"
  );
}

main5c();