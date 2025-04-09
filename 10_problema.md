# Herramientas previas

Vamos a trabajar con todo lo visto hasta ahora, es decir, diferentes tipos de datos, propiedades y métodos, condicionales, arrays, iteraciones, objetos y funciones.

# 10. Rompiendo problemas

Te presento nuestra base de datos, la cual está representada por el array personas:

```javascript
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
    gustos: ["pizza", "karate", "gimnasio", "poesia"],
  },
  {
    nombre: "Ramón",
    municipio: "Andes",
    gustos: ["caminar", "futbol", "ciclismo"],
  },
  {
    nombre: "Andrés",
    municipio: "Betania",
    gustos: ["cocinar", "karaoke", "jazz", "hamburguesa"],
  },
]
```
Nos han encomendado las siguientes tareas:
1) Cuenta el número de personas en nuestra base de datos.
2) Por cada persona obtenga su municipio.
3) Encuentra a todas las personas de un municipio en particular.
4) Añade un nuevo gusto a a una persona.
5) Cuenta el número de personas que tengan un gusto específico.

Sobre el punto 4 Considera los siguientes escenarios:
* ¿Qué pasaría si no se encuentra el nombre buscado?
* ¿Qué pasaría si el nombre buscado se repite varia veces?
* ¿Qué pasaría si la persona ya tiene adicionado un gusto que se quiere agregar?


