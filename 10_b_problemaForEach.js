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

function contarPersonasForEafh (persorasArr){
  let count = 0;
  persorasArr.forEach(p => {
      count++;
  });
  return count;
}

function main1() {
  let cantidadPersonasFor = contarPersonasForEafh(personas);
  console.log("Nuestra base de datos tiene",cantidadPersonasFor,"personas");
}

main1();

console.log("2 //////////////////////////////////////////////")

// 2) Por cada persona obtenga su municipio:

console.log("-------A) Imprimiendo en consola en cada ciclo ---------");

function obtenerMunicipioForEach1 (personasArr){
  personasArr.forEach(persona => {
    console.log(`${persona.nombre} es de ${persona.municipio}`)
  });
}

function main2a() {
  console.log("La siguiente es la lista de personas y su origen:")
  obtenerMunicipioForEach1(personas)
}

main2a();

console.log("-------B) Imprimiendo en consola en cada ciclo y empleando getNombre & getMunicipio ---------");
// Esta opción funciona, pero no es la más adecuada

function getNombre(unArray){
  return unArray.nombre
}

function getMunicipio(unArray){
  return unArray.municipio
}

function obtenerMunicipio3(arrPersonas){
  arrPersonas.forEach(persona => {
    const nombre = getNombre(persona);
    const municipio = getMunicipio(persona);
    console.log(`${nombre} es de ${municipio}`);
  });
}

function main2b() {
  let salidaForEach2 = obtenerMunicipio3(personas);
  console.log("La siguiente es la lista de personas obtenida mediante forEach y su origen acumulando string:\n"+salidaForEach2)
}

main2b();

console.log("-------C) Acumulando en una variable el string ---------");

function obtenerMunicipioForEach2(personasArr){
  let acumString = ""
  let num = 0;
  personasArr.forEach(persona => {
    num++;
    acumString += `${num}) ${persona.nombre} es de ${persona.municipio}\n`;
  });
  return acumString
}

function main2c() {
  let salidaAcumStringForEach = obtenerMunicipioForEach2(personas);
  console.log("La siguiente es la lista de personas obtenida mediante forEach y su origen acumulando string:\n"+salidaAcumStringForEach)
}

main2c();

console.log("3 //////////////////////////////////////////////")

// // 3) Encuentra a todas las personas de un municipio en particular.

function obtenerPersonasXMunicipioForEach(municipio, personasArr){
  let personasMunicipio = [];
  personasArr.forEach(persona => {
    if (persona.municipio === municipio){
      personasMunicipio.push(persona.nombre)
    }
  });
  return personasMunicipio;
}

function main3() {
  const municipioBuscar = "Betania"
  let personasMunicipio = obtenerPersonasXMunicipioForEach(municipioBuscar, personas)
  console.log("Las personas procedentes de",municipioBuscar, "son:", personasMunicipio.join(", "))
  console.log("Otra manera de expresarlo: ");
  console.log(`Las personas procedentes de ${municipioBuscar} son: ${personasMunicipio.join(", ")}`)
}

main3();

console.log("4 //////////////////////////////////////////////")
// // 4) Añade un nuevo gusto a a una persona.

function agregarGusto(personasArr, individuo, nuevoGusto){
  let personaActualizada = null;
  personasArr.forEach(persona => {
    if( persona.nombre === individuo){
      persona.gustos.push(nuevoGusto);
      personaActualizada = persona; // no la puedo declarar nuevaGustosList en esta línea
    }
  });
  return personaActualizada;
}

function main4() {
  let personaEncontrar = "Milena"
  let gustoAgregar = "patinar"
  let personasNew = agregarGusto(personas, personaEncontrar, gustoAgregar); // Prueba pasar directamente la ejecusión de la función en el console.log
  console.log(`La nueva lista de gustos de ${personaEncontrar} es: ${personasNew.gustos.join(", ")}`);
  // console.log(`La nueva composición de ${personaEncontrar} es: ${personasNew}`); // Presenta problemas para visualizar personasNew
  console.log("La nueva composición de", personaEncontrar, "es:", personasNew); // Funciona bien
  // console.log(`La nueva composición de ${personaEncontrar} es: ${JSON.stringify(personasNew, null, 2)}`);  // Convierte el objeto personasNew en formato JSON con una indentación de 2 espacios.
  console.log("El nuevo array personas es: ",personas );
}

main4();

console.log("5 //////////////////////////////////////////////")
// 5) Cuenta el número de personas que tengan un gusto específico.

// Creando un ForEach dentro de otro ForEach

function contarGustosByTopic(arrPersonas, gustoBuscado){
  let acumuladorGusto = 0;
  arrPersonas.forEach(persona => {
    let gustosArr = persona.gustos
    gustosArr.forEach(gusto => {
      if (gusto === gustoBuscado){
        acumuladorGusto++
      }
    });
  });
  return acumuladorGusto;
}

function main5() {
  let gustoContarEnPersonas = "cocinar"
  let loopception = contarGustosByTopic(personas, gustoContarEnPersonas);
  console.log("La cantidad de personas que tienen por gusto",gustoContarEnPersonas, "es de", loopception, "persona(s)");
}

main5();
