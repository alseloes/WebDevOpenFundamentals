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

function contar(contador) {
  return contador + 1;
}

function contarPersonas(personasArr, count = 0) {
  for (let i = 0; i < personasArr.length; i++) {
    count = contar(count);
  }
  return count;
}

function main1() {
  let cantidadPersonasFor = contarPersonas(personas);
  console.log("Nuestra base de datos tiene", cantidadPersonasFor, "personas");
}

main1();

console.log("2 //////////////////////////////////////////////");

// 2) Por cada persona obtenga su municipio:

console.log("-------A) Empleando For + getNombre & getMunicipio ---------");

//--------------------------------------------------------//
//--- Las siguientes 2 funciones van a ser reutilizadas---//
//--------------------------------------------------------//

function getNombre(unArray) {
  return unArray.nombre;
}

function getMunicipio(unArray) {
  return unArray.municipio;
}

//--------------------------------------------------------//
//--------------------------------------------------------//

function obtenerMunicipio(arrPersonas) {
  let acumString = "";
  for (let i = 0; i < arrPersonas.length; i++) {
    const nombre = getNombre(arrPersonas[i]);
    const municipio = getMunicipio(arrPersonas[i]);
    acumString += `${nombre} es de ${municipio}\n`;
  }
  return acumString;
}

function main2a() {
  let municipioByPersona = obtenerMunicipio(personas);
  console.log(
    "La siguiente es la lista de personas y su origen:\n" + municipioByPersona
  );
}

main2a();

console.log("-------B) Empleando ForEach + getNombre & getMunicipio ---------");

// Reutilizando las funciones getNombre y getMunicipio

function obtenerMunicipio2(arrPersonas) {
  arrPersonas.forEach((persona) => {
    const nombre = getNombre(persona);
    const municipio = getMunicipio(persona);
    console.log(`${nombre} es de ${municipio}`);
  });
}

function main2b() {
  console.log("La siguiente es la lista de personas y su origen:");
  obtenerMunicipio2(personas);
}

console.log("3 //////////////////////////////////////////////");

// 3) Encuentra a todas las personas de un municipio en particular.

console.log("-------A) Empleando For + getNombre & getMunicipio ---------");

// Voy a usar las funciones getNombre y getMunicipio creados anteriormente

function obtenerPersonasXMunicipio2(municipio, personasArr) {
  let personasMunicipio = [];
  for (let i = 0; i < personasArr.length; i++) {
    if (getMunicipio(personasArr[i]) === municipio) {
      personasMunicipio.push(getNombre(personasArr[i]));
    }
  }
  return personasMunicipio;
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
  console.log("Otra manera de expresarlo: ");
  console.log(
    `Las personas procedentes de ${municipioBuscar} son: ${personasMunicipio.join(
      ", "
    )}`
  );
}

main3a();


console.log("-------B) Creando la función validarMunicipio (sin getNombre ni getMunicipio) ---------");

// Ahora voy a crear una función nueva llamada validarPersonaXmunicipio sin empleo de los getters

function validarPersonaXmunicipio(
  arrPersonas,
  personaMunicipio,
  arrAcum,
  municipio
) {
  if (personaMunicipio === municipio) {
    return arrAcum.push(arrPersonas);
  }
}

function obtenerPersonasXMunicipio(municipio, personasArr) {
  let personasMunicipio = [];
  for (let i = 0; i < personasArr.length; i++) {
    validarPersonaXmunicipio(
      personasArr[i].nombre,
      personasArr[i].municipio,
      personasMunicipio,
      municipio
    );
  }
  return personasMunicipio;
}

function main3b() {
  const municipioBuscar1 = "Betania";
  let personasMunicipio1 = obtenerPersonasXMunicipio(
    municipioBuscar1,
    personas
  );
  console.log(
    "Las personas procedentes de",
    municipioBuscar1,
    "son:",
    personasMunicipio1.join(", ")
  );
  console.log("Otra manera de expresarlo: ");
  console.log(
    `Las personas procedentes de ${municipioBuscar1} son: ${personasMunicipio1.join(
      ", "
    )}`
  );
}

main3b();

console.log("-------C) Usando las funciones validarMunicipio, getNombre y getMunicipio) ---------");

// Ahora usando las funciones getNombre, getMunicipio y validarMunicipio

function obtenerPersonasXMunicipio2(municipio, personasArr) {
  let personasMunicipio = [];
  for (let i = 0; i < personasArr.length; i++) {
    validarPersonaXmunicipio(
      getNombre(personasArr[i]),
      getMunicipio(personasArr[i]),
      personasMunicipio,
      municipio
    );
  }
  return personasMunicipio;
}

function main3c() {
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
  console.log("Otra manera de expresarlo: ");
  console.log(
    `Las personas procedentes de ${municipioBuscar2} son: ${personasMunicipio2.join(
      ", "
    )}`
  );
}

main3c();

console.log("4 //////////////////////////////////////////////");
// 4) Añade un nuevo gusto a a una persona.

// Pseudocódigo:
// 1) recorro el array buscando a la persona
// 2) evalúo si el nombre de la posición es la que estoy buscando
//    a) Si el nombre de la persona corresponde ---> addGusto
//    b) Si no corresponde ---> continúo

// Verbos: buscarPersona, agregarGusto, recorrerPersonas

console.log("-------A) Usando las funciones buscarPersona, agregarGusto y recorrerPersonas ---------");

function buscarPersona(personaNombre, nombreBuscado) {
  return personaNombre === nombreBuscado;
}

function agregarGusto(gusto, personaObjGustos) {
  return personaObjGustos.push(gusto);
}

function recorrerPersonas(personasArr, persona, gusto) {
  for (let i = 0; i < personasArr.length; i++) {
    if (buscarPersona(personasArr[i].nombre, persona)) {
      agregarGusto(gusto, personasArr[i].gustos);
      return personasArr[i];
    }
  }
  return null;
}

// Falta el caso en el que retorne null
function main4a() {
  let personaEncontrar = "Milena";
  let gustoAgregar = "patinar";
  let personasNew = recorrerPersonas(personas, personaEncontrar, gustoAgregar); // Prueba pasar directamente la ejecusión de la función en el console.log
  console.log(
    `La nueva lista de gustos de ${personaEncontrar} es: ${personasNew.gustos.join(
      ", "
    )}`
  );
  // console.log(`La nueva composición de ${personaEncontrar} es: ${personasNew}`); // Presenta problemas para visualizar personasNew
  console.log("La nueva composición de", personaEncontrar, "es:", personasNew); // Funciona bien
  // console.log(`La nueva composición de ${personaEncontrar} es: ${JSON.stringify(personasNew, null, 2)}`);  // Convierte el objeto personasNew en formato JSON con una indentación de 2 espacios.
  console.log("El nuevo array personas es: ", personas);
}

main4a();

console.log("-------B) Otra manera de implementando otra lógica ---------");

// Otro pseudocódigo
// 1) Recorro el array para reconocer la posición personas[i] y retornarlo
// 2) A la posición personas[i].gustos agrego el nuevo gusto

function buscarPersona2(personasArr, personaBuscada) {
  for (let i = 0; i < personasArr.length; i++) {
    if (personasArr[i].nombre === personaBuscada) {
      return personasArr[i];
    }
  }
  return;
}

function addGusto(persona, gusto) {
  persona.gustos.push(gusto);
}

function main4b() {
  let personaNewGusto = "Milena";
  let nuevoGusto = "rompecabezas";
  let personaBuscada = buscarPersona2(personas, personaNewGusto);
  addGusto(personaBuscada, nuevoGusto);
  console.log(
    `La nueva lista de gustos de ${personaNewGusto} es: ${personaBuscada.gustos.join(
      ", "
    )}`
  );
  // console.log(`La nueva composición de ${personaNewGusto} es: ${personaBuscada}`); // Presenta problemas para visualizar personasNew
  console.log(
    "La nueva composición de",
    personaNewGusto,
    "es:",
    personaBuscada
  ); // Funciona bien
  // console.log(`La nueva composición de ${personaNewGusto} es: ${JSON.stringify(personaBuscada, null, 2)}`);  // Convierte el objeto personasNew en formato JSON con una indentación de 2 espacios.
  console.log("El nuevo array personas es: ", personas);
}

main4b();

console.log("5 //////////////////////////////////////////////");
// 5) Cuenta el número de personas que tengan un gusto específico.

console.log("-------A) Implementando una lógica ---------");

// Este problema se resuelve con un bucle dentro de otro bucle, también conocido como "loopception"

// Pseudocódigo:
// 1) Recorro cada posición del array personas.
// 2) En cada posición busco en el array de gustos si se encuentra el gusto buscado
//    a) Si está el gusto buscado ---> Contador++
//    b) Si no está el gusto      ---> Continúa con el siguiente index
// 3) Al final retorno el contador

function contarGusto(count) {
  return count + 1;
}

function gustosPersona(persona) {
  return persona.gustos;
}

function scanearGustos(gustosArr, gustoBuscado, count) {
  for (let j = 0; j < gustosArr.length; j++) {
    if (gustosArr[j] === gustoBuscado) {
      count = contarGusto(count);
    }
  }
  return count;
}

function scanearPersonas(personasArr, gustoRef, count = 0) {
  for (let i = 0; i < personasArr.length; i++) {
    const personaGusto = gustosPersona(personasArr[i]);
    count = scanearGustos(personaGusto, gustoRef, count);
  }
  return count;
}

function main5a() {
  let gustoContar = "cocinar";
  let salida = scanearPersonas(personas, gustoContar);
  console.log(
    "La cantidad de personas que tienen por gusto",
    gustoContar,
    "es de",
    salida,
    "persona(s)"
  );
}

main5a();

console.log("-------B) Reduciendo la lógica ---------");

function scanearGustos2(gustosArr, gustoBuscado, count) {
  for (let j = 0; j < gustosArr.length; j++) {
    if (gustosArr[j] === gustoBuscado) {
      count++
    }
  }
  return count;
}

function scanearPersonas2(personasArr, gustoRef, count = 0) {
  for (let i = 0; i < personasArr.length; i++) {
    const personaGusto = personasArr[i].gustos;
    count = scanearGustos2(personaGusto, gustoRef, count);
  }
  return count;
}

function main5b() {
  let gustoContar = "pizza";
  let salida = scanearPersonas2(personas, gustoContar);
  console.log(
    "La cantidad de personas que tienen por gusto",
    gustoContar,
    "es de",
    salida,
    "persona(s)"
  );
}

main5b();