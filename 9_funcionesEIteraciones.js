// // Solución  ejercicio 1

// function imprimirInstrucciones(arrInstrucciones) {
//   for (let i = 0; i < arrInstrucciones.length; i++) {
//     console.log(`Paso ${i + 1} - ${arrInstrucciones[i]}`);
//   }
// }

// instrucciones = [
//   "Retire en pástico envoltorio",
//   "Coloque en el microondas por 45 segundos",
//   "Retire del microondas",
//   "Deje que se enfríe",
//   "¡Disfrute!",
// ];

// imprimirInstrucciones(instrucciones);

//-------------------------------------------------------------------//
// Solución  ejercicio 2

function calificarExamen(referenciaArr, respuestasArr){
  let notaAcumulada = 0
  for (let i = 0; i < referenciaArr.length; i++) {
    if (referenciaArr[i] === respuestasArr[i]) {
      notaAcumulada++;
    }
  }
  return notaAcumulada
}

let respuestasRef = ["A", "D", "D", "B", "B", "C", "B", "A", "D", "C", "A"];
let respuestaEst = ["C", "D", "D", "B", "A", "C", "B", "C", "D", "C", "A"];

// let respuestasOk = calificarExamen(respuestasRef, respuestaEst);
// console.log(respuestasOk); //=> 5

//--------------------------------------------------//
// Solución  ejercicio 3

// Ya tengo una función que se encarga de determinar cuantas respuestas positivas tiene el estudiante.
// Ahora voy a crear una función que determine la nota del estudiante
function evaluarEstudiante(profesor, respEstudiantes){
  let resultado = calificarExamen(profesor, respEstudiantes)
  return resultado / profesor.length
}


// Finalmente voy a crear una función que se encargue de informar al esudiante el resulado de su prueba:
function informarEstudiante(nombreEstudiante, profesor, respEstudiantes) {
  let informe = evaluarEstudiante(profesor, respEstudiantes)
  if (informe >= 0.7) {
    return `Hola ${nombreEstudiante}, has sacado ${informe} por lo tanto ganaste la prueba, ¡Felicitaciones!`
  } else {
    return `Hola ${nombreEstudiante}, has sacado ${informe} por lo tanto perdiste la prueba, espero que puedas prepararte mejor para la próxima prueba`
  }
}

let informar = informarEstudiante("Maria", respuestasRef, respuestaEst);
console.log(informar);