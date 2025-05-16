# 4. Web Frameworks

## 4.1 Creando un nuevo proyecto en [Repli.it](https://replit.com/~)

Cuando se crea un nuevo proyecto en [Repli.it](https://replit.com/~) notarás que se crea con una gran cantidad de código HTML adicional. Vamo a crear un nuevo proyecto para profundizar en el código y permitir comprender correctamente como funcionan los proyectos HTML, CSS y JS. Siga los siguientes pasos:

1. Comienza creando un nuevo REPL haciendo click en el ícono** ➕ new repl** en la esquina superior derecha.

![New repl](https://assets-v3.circle.so/emwbq0anhqr5aslh7gkzkr5eh4oo)

2. A continuación, seleccione la opción de framework **HTML, CSS, JS** en el menú despliegable de **Languages**.

![Framework HTML, CSS, JS](https://assets-v3.circle.so/rn6rod5cqk410hi538c4w8xe1pj4)

3. Haciendo click en **Files**, verá que el nuevo proyecto proporciona tres archivos en el directorio de su proyecto:
* `index.html`: Todo el código HTML va a ser escrito en este.
* `style.css`: Todo el código CSS va a ser escrito en este.
* `script.js`: Todo el código JavaScript va a ser escrito en este. (Sin embargo, este paso lo veremos más adelante)

![Directorio](https://assets-v3.circle.so/94ivmq5bcsgmpozbt0bs3hj7p2fs)

A continuación vamos a desmenuzar toda esta información:

## 4.2 El index

Una característica interesante de [Repli.it](https://replit.com/~) es que proporciona el marco básico para un sitio web creado con HTML, CSS, y JavaScript. Esto es útil porque este código se utiliza en todas las páginas HTML de Internet. En [Repli.it](https://replit.com/~) este código fundamental se puede encontrar en el archivo `index.html` o el index. Tómese un momento para explorar y familiarizarse con las diferentes partes de este código principal. Las pieza del índice se definen a continuación.
![index.html](https://assets-v3.circle.so/j31150sgpxicvwdzwe9xveja3n0a)

* `DOCTYPE`

  ```HTML
  <!DOCTYPE html>
  ```
  Como lo sugiere su nombre, este línea de código declara este documento como una página web HTML5. Esta etiqueta es la primera línea de código HTML y debe ser la primera línea de código en una página web HTML5. Es importante tener en cuenta que esta es la única etiqueta HTML escrita en mayúsculas; todas las demás etiquetas HTML deben escribirse en minúscula.

* `html`

  ```HTML
  <html>
    ...
  </html>
  ```
  El elemento `<html>` identifica y contiene el código HTML en las páginas web HTML. La etiqueta de apertura `<html>` y de cierre `</html>` envuelve todo el código HTML que está relacionado con la página web.

* `head`
  ```HTML
  <head>
    ...
  </head>
  ```
  Cada página web HTML tiene un elemento `<head>`. Este contiene toda la información importante que los navegadores web y los motores de búsqueda necesitan con respecto a una página web. En cierto modo, este elemento es el cerebro de la página web. Aunque este elemento contiene información vital sobre la página web, nada de lo que contiene se muestra en la página web real. Incluirá varios de los componentes que leerá a continuación, como metaetiquetas, el elemento `<title>` y el elemento `<link>`.

  * Metaetiquetas `meta`

    ```HTML
    <meta charset="utf-8" />
    ```
    Las metaetiquetas contienen importante información relacionada con los datos dentro de la página web. La metaetiqueta anterior declara el juego de caracteres o conjunto de caracteres para indicar a los navegadores cómo procesar la caracteres y el código dentro del archivo.
    ```HTML
    <meta name="viewport" content="width=device-width" />
    ```
    La metaetiqueta anterior establece el ancho de la página web para que siga el ancho de la pantalla de cualquier dispositivo que está mirando el usuario. Por ejemplo, el ancho de un monitor de computadora será mayor que el ancho de la pantalla de un teléfono móvil y esta metaetiqueta garantiza que la página web se muestre correctamente en ambos dispositivos. Esta metaetiqueta será particularmente útil cuando comience a crear páginas web que respondan a diferentes anchos de pantalla.

  * `title`
    ```HTML
    <title>repl.it</title>
    ```
    El elemento `<tittle>` define el título de la página web. Puedes ver el título de la página web en la pestaña superior de un navegador web, pero no puedes ver el título en la página web en si misma. De hecho, podría ser una versión ligeramente diferente (o extendida) del nombre o título mostrado de la página web. `<title>` es tambien el nombre que se utiliza cuando una página web se marca como favorita en el navegador web.

  * `link`
    ```HTML
    <link href="style.css" rel="stylesheet" type="text/css" />
    ```
    El `<link>` se utiliza para conectarse y hacer referencia a recursos en Internet. De hecho, debería resultarle familiar. Lo ha usado en ejercicios anteriores para conectar un archivo externo `style.css` con el `index.html`.

    Usar una página CSS externa tiene varias ventajas. Con un archivo `style.css` separado puede mantener todo el código principal de estilo CSS escrito en un solo lugar y luego varias páginas HTML pueden hacer referencia a ese archivo CSS. De esa manera, puede actualizar el código CSS en todas sus páginas web de manera simultánea y consistente simplemente cambiando ese archivo CSS. Y aunque no es necesario que este enlace esté en el elemento de la página HTML, esuna buena práctica colocarlo allí.

    El atributo `rel` significa relación: la relación entre el documento HTML y el archivo CSS. `type` especifica el tipo de medio del archivo vinculado y, en este caso, está etiquetado como `text/css`. Sin embargo, vale la pena señalar que el atributo de tipo ya no es necesario en las páginas web, pero tiene a permanece porque, bueno, no está de más tenerlo.

* `body`
  ```HTML
  <body>
    ...
  </body>
  ```
  El elemento `<body>` contiene todo el código HTML para texto, imágenes, links y containers usados para la estructura de la página web. Todo el contenido basado en código HTML con el que trabajó anteriormente se colocaría dentro del `<body>`.

* `script`
  ```HTML
  <script src="script.js"></script>
  ```
  De manera similar a como se conecta el código HTML con un archivo CSS mediante el elemento `<link>`, el elemento `<script>` extrae el código JavaScript escrito en el archivo `script.js`. Y, al igual que es recomendable mantener el archivo CSS en el <head>, conviene mantener la línea de código del script al final de la página HTML, debajo del resto del código HTML, pero justo antes de la etiqueta de cierre del elemento HTML. Esto permitirá que la página web cargue primero (y más rápido), ya que el código JavaScript (más pesado) se cargará al final.

  **Nota:** Todavía no añadirás JavaScript a tus proyectos HTML y CSS. Por ahora, puedes dejarlo como está (o eliminarlo).


## 4.3 Proyecto web

Tómese un momento para ver cómo se ve un sitio web de varias páginas usando [Repl.it](https://replit.com/~)

[Ver ejemplo](https://replit.com/@rootlearnhq/WebProject)

Como puedes ver, los archivos `index.html`, `style.css `y `script.js` siguen ahí. Pero en este proyecto, hay tres archivos HTML adicionales, así como una carpeta de imágenes. Las imágenes están organizadas en subcarpetas para facilitar su búsqueda.

Tanto el código HTML como el CSS son bastante avanzados en esta etapa. ¡Pero no te preocupes! Todos los puntos de control de estos módulos te ayudarán a tener una mejor base para escribir y leer HTML y CSS. Aunque parezca increíble, en la primera semana del curso, estarás codificando y diseñando sitios web como este. Y, además, ¡entenderás la función de cada línea de código!

## 4.4 El archivo `normalize.css`

Aunque parezca increíble, los navegadores web tienen sus propios estilos predeterminados para mostrar HTML, lo que puede provocar cambios inesperados o problemáticos en tu sitio web. Por lo tanto, un elemento `<h1>` en una página puede verse ligeramente diferente en Chrome y Firefox, incluso si son el mismo código. Por suerte, existe una solución: `normalize.css`.

El archivo [normalize.css](https://necolas.github.io/normalize.css/) de Nicolas Gallagher es una librería CSS que configura todos los elementos HTML para que se muestren de forma uniforme en todos los navegadores web compatibles. Es un pequeño archivo que aplica estilo y formato a encabezados, párrafos, citas en bloque y otros elementos HTML comunes para que se vean idénticos (o muy similares) en Chrome, Firefox, Safari, etc.

Aunque puede descargar el archivo `normalize.css` y administrarlo localmente, suele funcionar mejor si se enlaza al archivo desde una red de distribución de contenido (_content delivery network_ - CDN). Es recomendable cargar primero el archivo `normalize.css` en el código, antes de aplicar sus propias reglas de estilo con su propio archivo `style.css`. Puede verlo en el ejemplo de código a continuación:

```HTML
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width" />
  <title>Template: Starting Point</title>
  <link
    href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css"
    rel="stylesheet"
    type="text/css"
  />
  <link href="style.css" rel="stylesheet" type="text/css" />
</head>
```

¿Por qué es mejor referenciar `normalize.css` antes que tu archivo `style.css`? Bueno, CSS aplicará los estilos en el orden en que aparecen en el código. Esto significa que si agregas el archivo `normalize.css` al final, ¡los estilos de este podrían sobrescribirlos! Este concepto se explicará con más detalle en un punto de control posterior. En este punto, es importante recordar qué archivo colocar primero.

Otro aspecto a tener en cuenta: la única diferencia entre un archivo `normalize.css` y un archivo `normalize.min.css` es que la versión `.min` elimina todos los espacios y el formato visual. Esto dificulta la lectura del código, pero reduce el tamaño del archivo, lo cual es muy útil cuando millones de sitios web lo referencian.

## 4.5 Nota sobre los archivos `index.html`

Volvamos por un momento al importantísimo archivo `index.html`. El nombre `index.html` es significativo. Cuando un navegador web abre una carpeta con varios archivos HTML, siempre mostrará primero la página `index.html`, sin necesidad de referenciarla.

[Repli.it](https://replit.com/~) intenta reforzar la importancia del archivo `index.html` exigiendo que se encuentre en el directorio principal y prohibiendo renombrarlo o eliminarlo. Tenga en cuenta lo siguiente al trabajar con archivos `index.html`:

* La página de inicio de cada sitio web se llamará `index.html`.
* Naturalmente, trabajar con varios proyectos que tienen la página web `index.html` puede ser confuso. Por eso es esencial organizar los archivos de forma lógica, con nombres de carpeta de proyecto adecuados.
* El archivo `index.html` debe escribirse en minúsculas. Los nombres de archivos web suelen usar solo minúsculas para evitar errores simples.

Pero imagine que falta un archivo `index.html` en un directorio web. En este caso, podrían ocurrir dos cosas, según las preferencias del servidor web:

1. La página web abre un error 404: Archivo no encontrado, como se ve a continuación.
![Código 404](https://assets-v3.circle.so/gbk02wi43uzv2hd9eriq2h0bg3of)
2. La página web muestra una lista de todos los archivos en ese directorio, como se muestra a continuación. Sin embargo, esto puede ser peligroso, ya que cualquier archivo de este directorio puede ser visto y luego descargado. En este caso, la visualización de la página web dependerá de su proveedor de alojamiento web y de cómo gestione los directorios sin archivos `index.html`.
![Directory web](https://assets-v3.circle.so/z39iddwtrtj3i7qcgzwp42bh8jsa)