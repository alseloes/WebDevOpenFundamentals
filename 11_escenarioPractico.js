let inventario = [
  {
    dulce: "Jet",
    enStock: 180,
    promedioSemanal: 200,
  },
  {
    dulce: "Milky way",
    enStock: 90,
    promedioSemanal: 100,
  },
  {
    dulce: "Bon bon bum",
    enStock: 300,
    promedioSemanal: 170,
  },
  {
    dulce: "Nucita",
    enStock: 150,
    promedioSemanal: 40,
  },
];

console.log("1 //////////////////////////////////////////////");
// 1) ¿Cuanta cantidad de tipos de dulces tenemos?

function contarTiposDeDulces(dulcesArr) {
  return dulcesArr.length;
}

function main1() {
  let cantidadDulces = contarTiposDeDulces(inventario);
  console.log("Nuestro inventario tiene", cantidadDulces, "tipos de dulces");
}

main1();

console.log("2 //////////////////////////////////////////////");
// 2) ¿Cuanta cantidad de dulces tenemos en stock?

function cantidadStock(dulcesArr) {
  let stock = 0;
  dulcesArr.forEach((dulce) => {
    stock += dulce.enStock;
  });
  return stock;
}

function main2() {
  let stockDulces = cantidadStock(inventario);
  console.log("Actualmente contamos con un stock de", stockDulces, "dulces");
}

main2();

console.log("3 //////////////////////////////////////////////");
// 3) Crea un nuevo dulce al inventario.
// Debemos tomar el inventario, agregar un nuevo objeto "dulce" y asegurarnos que retorne un valor (no solo modificar el array)

function crearDulce(nombre, stock, promedioSem) {
  return {
    dulce: nombre,
    enStock: stock,
    promedioSemanal: promedioSem,
  };
}

function addDulce(dulcesArr, nombre, stock, promedioSem) {
  dulcesArr.push(crearDulce(nombre, stock, promedioSem));
  return dulcesArr;
}

function main3() {
  let nuevoDulce = "Jumbo";
  let stockNuevoDulce = 220;
  let promedioSemanalnuevoDul = 300;
  addDulce(inventario, nuevoDulce, stockNuevoDulce, promedioSemanalnuevoDul);
  console.log("A continuación el inventiario actualizado", inventario);
}

main3();

console.log("4 //////////////////////////////////////////////");
// 4) ¿Deberíamos pedir este dulce? (pedir si el stock actual es menor que el promedio semanal vendido)

console.log("-------A) Buscando un solo elemento ---------");

function necesidadDeComprarDulce(dulcesArr, dulceEvaluar) {
  const evaluado = dulcesArr.find((d) => d.dulce === dulceEvaluar);

  if (!evaluado) {
    console.log("Dulce no encontrado en el inventario");
    return null;
  }
  return evaluado.enStock < evaluado.promedioSemanal;
}

function main4a() {
  let dulceEvaluado = "Jet";
  let resultado = necesidadDeComprarDulce(inventario, dulceEvaluado);
  if (resultado) {
    console.log("Es necesario comprar", dulceEvaluado);
  } else {
    console.log("No es necesario comprar", dulceEvaluado);
  }
}

main4a();

console.log("-------B) Evaluando todos los elementos ---------");

console.log("5 //////////////////////////////////////////////");
// 5) ¿Qué cantidad de un dulce específico debemos pedir esta semana?

console.log("6 //////////////////////////////////////////////");
// 6) ¿Qué cantidad de dulces debo ordenar esta semana?
