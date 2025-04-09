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
]

console.log("1 //////////////////////////////////////////////")
// 1) Cuenta el número de personas en nuestra base de datos:

function contarPersonas(personasArr){
  contador = 0;
  for (let i = 0; i < personasArr.length; i++) {
    contador++;
  }
  return contador
}

function main1() {
  let cantidadPersonasFor = contarPersonas(personas);
  console.log("Nuestra base de datos tiene",cantidadPersonasFor,"personas");
}

main1();


console.log("2 //////////////////////////////////////////////")

// 2) Por cada persona obtenga su municipio:

console.log("-------A) Imprimiendo en consola en cada ciclo ---------");

function obtenerMunicipio(personasArr){
  for (let i = 0; i < personasArr.length; i++) {
    console.log(`${personasArr[i].nombre} es de ${personasArr[i].municipio}`)
  }
}

function main2a() {
  console.log("La siguiente es la lista de personas y su origen:");
  obtenerMunicipio(personas);
}

main2a();

console.log("-------B) Acumulando en una variable el string ---------");

function obtenerMunicipio(personasArr){
  let acumString = ""
  let num = 0;
  for (let i = 0; i < personasArr.length; i++) {
    num++
    acumString += `${num}- ${personasArr[i].nombre} es de ${personasArr[i].municipio}\n`
  }
  return acumString
}

function main2b() {
  let salidaAcumString = obtenerMunicipio(personas);
  console.log("La siguiente es la lista de personas y su origen acumulando string:\n"+salidaAcumString)
}

main2b();

console.log("3 //////////////////////////////////////////////")

// 3) Encuentra a todas las personas de un municipio en particular.

console.log("-------A) Mediante push() ---------");

function obtenerPersonasXMunicipio(municipio, personasArr){
  let personasMunicipio = [];
  for (let i = 0; i < personasArr.length; i++) {
    if (personasArr[i].municipio === municipio){
      personasMunicipio.push(personasArr[i].nombre)
    }
  }
  return personasMunicipio;
}

function main3a() {
  const municipioBuscar = "Betania"
  let personasMunicipio = obtenerPersonasXMunicipio(municipioBuscar, personas)
  console.log("Las personas procedentes de",municipioBuscar, "son:", personasMunicipio.join(", "))
  console.log("Otra manera de expresarlo: ");
  console.log(`Las personas procedentes de ${municipioBuscar} son: ${personasMunicipio.join(", ")}`)
}

main3a();


console.log("-------B) Mediante push() + getNombre & getMunicipio  ---------");

function getNombre(unArray){
  return unArray.nombre
}

function getMunicipio(unArray){
  return unArray.municipio
}

function obtenerPersonasXMunicipio2(municipio, personasArr){
  let personasMunicipio = [];
  for (let i = 0; i < personasArr.length; i++) {
    if (getMunicipio(personasArr[i]) === municipio){
      personasMunicipio.push(getNombre(personasArr[i]))
    }
  }
  return personasMunicipio;
}

console.log("4 //////////////////////////////////////////////")
// 4) Añade un nuevo gusto a a una persona.

function agregarGusto(personasArr, persona, nuevoGusto){
  for (let i = 0; i < personasArr.length; i++) {
    if( personasArr[i].nombre === persona){
      let listaGustos = personasArr[i].gustos
      listaGustos.push(nuevoGusto)
      return personasArr[i];
    }
  }
}

function main4() {
  let personaEncontrar = "Milena"
  let gustoEncontrar = "patinar"
  let personasNew = agregarGusto(personas, personaEncontrar, gustoEncontrar); // Prueba pasar directamente la ejecusión de la función en el console.log
  console.log(`La nueva lista de gustos de ${personaEncontrar} es: ${personasNew.gustos.join(", ")}`);
  // console.log(`La nueva composición de ${personaEncontrar} es: ${personasNew}`); // Presenta problemas para visualizar personasNew
  console.log("La nueva composición de", personaEncontrar, "es:", personasNew); // Funciona bien
  // console.log(`La nueva composición de ${personaEncontrar} es: ${JSON.stringify(personasNew, null, 2)}`);  // Convierte el objeto personasNew en formato JSON con una indentación de 2 espacios.
  console.log("El nuevo array personas es: ",personas );
}

main4();

console.log("5 //////////////////////////////////////////////")
// 5) Cuenta el número de personas que tengan un gusto específico.

// Este problema se resuelve con un bucle dentro de otro bucle, también conocido como "loopception"

function contarGustosByTopic(arrPersonas, gustoBuscado){
  let acumuladorGusto = 0;
  for (let iPersona = 0; iPersona < arrPersonas.length; iPersona++) {
    for (let iGusto = 0; iGusto < arrPersonas[iPersona].gustos.length; iGusto++) {
      if (arrPersonas[iPersona].gustos[iGusto] === gustoBuscado){
        acumuladorGusto++
        break;
      }
    }
  }
  return acumuladorGusto;
}

function main5() {
  let gustoContarEnPersonas = "cocinar"
  let loopception = contarGustosByTopic(personas, gustoContarEnPersonas);
  console.log("La cantidad de personas que tienen por gusto",gustoContarEnPersonas, "es de", loopception, "persona(s)");
}

main5();

