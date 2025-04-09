# Herramientas previas

Vamos a trabajar con todo lo visto hasta ahora, es decir, diferentes tipos de datos, propiedades y métodos, condicionales, arrays, iteraciones, objetos y funciones.

Indentación:
Nos permite tener un mayor orden visual de nuestro código:

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
La mayoría de editores de código brindan asistentes de indentación para manejar un orden correcto.

# 11. Escenario práctico

Nuestro teatro vende dulces y estamos teniendo problemas para hacer seguimiento de nuestro inventario. Necesitamos ayuda para saber que dulces pedir. ¿Puedes ayudarno?

A continuación, te presentamos los datos que tenemos de cada uno de los dulces en nuestro inventario:

- **dulce** - nombre del dulce, representado por un dato de tipo `string` (ej: jet).
- **enStock** - cantidad actual existente, representado por un número entero - `number` (ej: 180).
- **promedioSemanal** - número promedio de unidades vendidas semanalmente, representado por un número entero - `number` (ej: 200).

Los datos del inventario de dulces se ven así:

```javascript
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
```
Tenemos una serie de desafíos. Para cada uno, ayúdanos a escribir una fumción para que podamos a entender mejor nuestro inventario.

Queremos saber:

1. ¿Cuanta cantidad de tipos de dulces tenemos?
2. ¿Cuanta cantidad de dulces tenemos en stock?
3. Crea un nuevo dulce al inventario.
4. ¿Deberíamos pedir este dulce? (pedir si el stock actual es menor que el promedio semanal vendido)
5. ¿Qué cantidad de un dulce específico debemos ordenar esta semana?
6. ¿Qué cantidad de dulces debo ordenar esta semana?