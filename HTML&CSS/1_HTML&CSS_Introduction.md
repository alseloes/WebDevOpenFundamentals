# 1. HTML & CSS: Introducción

HTML, CSS y JavaScript es un grupo de tecnologías y lenguajes que componen el frontend de su aplicación web.

## 1.1 Markup Language - Lenguaje de Marcado

Los lenguajes de marcado son lenguajes diseñados para el procesamiento, definición y presentación de texto. En español simple, los lenguajes de marcado se utilizan para presentar información a los usuarios en un formato específico utilizando diferentes diseños y estilos. Los elementos utilizados para especificar el formato se llaman etiquetas.

En resumen, usted define elementos como etiquetas, y esas etiquetas se formatean en un documento nuevo y elegante.

## 1.2 ¿Qué es HTML?

Hypertext Markup Language, conocido como HTML, es un lenguajes de programación sencillo que se utiliza para crear la estructura de una página web. La idea básica de HTML es que los conchetes < > que rodean el código de una página web le indican al mavegador web con que información está trabajando.

En su nivel más básico, el hipertexto es texto digital que hace referencias a ubicaciones, como un sitio web que enlaza a otro. Gracias al hoipertexto en HTML, una página web puede incluir enlaces que permiten al usuario conectarse con otras ubicaciones o páginas del sitio web o de otro sitio web. Como su nombre lo infdica, HTML también es un lengiuaje marcado, lo que significa que utiliza etiquetas entre paréntesis como se muestra arriba, como `<head>` y `<body>` para crear elementos HTML, los cuales dictan como se muestra el contenido dentro de un navegador web. HTML, al igual que otros archivos de marcado, se basa en palabras familiares que los humanos realmente pueden leer, en lugar de solo la sintaxis de programación técnica.

HTML fue creado en el año 1989. Ha madurado con el tiempo y la versión más actual es HTML5. Fue desarrollado en el CERN por Tim Berners - Lee ya que, después de crear el primer navegador web del mundo, la World Wide Web (wwww), necesitaba un lenguaje para mostrar el contenido del nevagador, por lo que eligió un lenguaje basado en SGML. Utiliza etiquetas de apertura y de cierre para dar sentido a un texto desorganizado, etiquetas (tags) como `h` (heading), `p` (paragraph), `a` (anchor = ancla) para vinsular a una página web. HTML experimentó muchos cambios durante el auge inicial de internet y se estandarizó como HTML5 en 2008. La versión moderna contiene etiquetas para manejar variedad de contenidos, como `video`, `audio` y `canvas` para dibujar gráficos personalizados.

El elemento HTML típico tiene etiquetas de apertura y de cierre, en el medio podemos tener contenido que puede ser texto o elementos HTML adicionales llamados hijos. La etiqueta de apertura puede tener uno o más atributos que son pares clave-valor y pueden personalizar la apariencia o el comportamiento del elemento.

Un archivo HTML contiene una jerarquía de nodos basada en el Document Object Model (DOM). Una página web comienza exactamente con ua etiqueta `HTML` y tiene dos hijos: `head` y `body`. El `head` contiene cosas que no se muestran directamente en una página web, como el `tittle` o una etiqueta `meta` para dar una descripción a la página (la etiqueta `meta` no tiene etiqueta de cierre). Las etiquetas de cierre son opcionales cuando un elemento es completamente autónomo. El `body` contiene la UI. la etiqueta `img` es autocerrable, contiene la ruta del archivo de la imagen `src` y puede contener un alt description `alt` para que sea accesible a robopts y lectores de pantalla. También es posible vncular una página web en otra mediante etiqueta de anclaje `a` y luego mediante atributo `href` se asigna la URL a la que se desea navegar cuando se hace click. También se pueden emplear etiquetas estructurales `div` que se usan para agrupar elementos donde se pueden diseñar elementos de la UI más complejos como barras de navegación, como barras de navegación. La ruta o path de un archivo HTML se puede copiar y pegar en cualquier navegador para visualizar o renderizar el HTML.

```HTML
<html>

  <head>

    <title>My First Website</tittle>
    <meta name="description" content="yay!">
    <img src= "bamboo.png" alt = "bamboo shoot"/>

  </head>

  <body>
    <h1>HTML is awesome!</h1>
    <p>Look mom, I built a website</p>

  </body>

</html>

```

## 1.3 ¿Qué es CSS?

Cascading Style Sheets (Hoja de Estilo en Cascada), o CSS, es un lenguaje de programación de baja barrera de entrada que se creó específicamente para complementar HTML. Como lenguaje de hojas de estilo, CSS es el código que expresa y explica cómo se debe presentar un lenguaje de marcado, como HTML.

Cuando se usa junto con HTML en una página web, CSS puede agregar una variedad de detalles de formato, diseño y estilo que de otro modo no serían vistos por un usuario.

Mediante CSS nuestro HTML puede ser modificado en el tamaño, color, el posicionamiento, el diseño de elementos HTML, etc. Se lanzó por pirmera vez en 1996 y evolucionó a CSS3 en 1999. El lenguaje continúa evolucionando hoy con nuevas características, pero nunca habrá un CSS4, solo actualizaciones del lenguaje existente.

La regla típica de CSS comienza con un selector que se puede combinar con un elemento en el documento HTML. Entre las llaves del selector se crea un bloque de declaración en el que contiene propiedades que cambian la apariencia del elemento.

```CSS
p { font-size: 1.2em;}
```

```HTML
<p>This is a paragraph</p>
```

Esto se conoce como CSS RULE (o Regla de CSS), pero lo complicado es que las hojas de estilo en cascada pueden contener multiples reglas que se aplican al mismo elemento. Esto crear una jeraquía y las reglas que son más específicas sobreescribirán las reglas de sus padres (especificidad)

```CSS
.box {
  background-color: red;
  text-align: center;
  }

  .box {
  background-color: green;
  text-align: left;
  }

  .box {
  background-color: blue;
  text-align: right;
  }
```

En orden de menos a mayor especificidad:
* Elements
* Classes
* ID Attributes
* Inline style

El orden de las reglas CCS importa. Además, algunos elementos heredarán los estilos de su padre, pero otros no. En última instancia, el navegador usa los conceptos de cascada, especificidad y herencia para contolar los estilos que se aplican a un elemento.

Un ejemplo de una regla CSS que apunta a todos los elementos de un cierto tipo se presenta a continuación:
```HTML
<style>

  p { color: red;}

</style>

# All <p> elements

<p>Hi</p>
<p>Mom</p>
<p>how are you?</p>
```

También, multiples elemento relacionado con una clase personalizada puede verse modificado de forma selectiva como se muestra en el siguiente ejemplo:
```HTML
<style>

  .red { color: red;}

</style>

# All <p> elements

<p class="red">Hi</p>
<p class="red">Mom</p>
<p>how are you?</p>
```

O un solo elemento puede modificarse empleando un ID como se muestra a continuación:
```HTML
<style>

  #myParagraph { color: red;}

</style>

# All <p> elements

<p id="myParagraph">Hi</p>
<p>Mom</p>
<p>how are you?</p>
```
Ahora, piensa en cada elemento HTML como una caja (Box Model o Modelo de Caja), el contenido está en el medio rodeado de un padding (o borde de relleno) y una margin (o margen). La cantidad de espacio real que utiliza cada elemento dentro de la caja se puede personalizar definiendo propiedades como el paddin o el margin. Pueden tomar valores de píxeles explícitos o valores de respuesta que son relativos al elemento principal o un porcentaje de la ventana gráfica en sí (%, em, vm). Estos cuadros se unirán entre sí para formar una página web, pero puede usar herramientas como Flex Layout y Grid Layout para controlar como flotan de una manera sofisticada. También pueden detectar la interacción de un usuario con pseudoselectores como Hover, agregar lógica con variable o propiedades personalizadas y realizar consultas que pueden aplicar estilos dependiendo del tamaño o tipo de dispositivo, inclusive manejando animaciones complejas con transiciones y key frames.

En general, CSS puede agregar algunos elementos a HTML como se listan a continuación:
* Texto: CSS asigna fuentes, tamaños de texto, alineaciones y colores específicos al texto.
* Medios: CSS asigna los tamaños de imagen a las imágenes de una página web y puede agregar esquinas redondeadas y bordes elegantes a esas imágenes.
* Enlaces: CSS asigna colores a los enlaces.
* Contenedores: CSS asigna la altura y el ancho de los contenedores de una página web, así como los colores o imágenes que se utilizan en el fondo para proporcionar estructura y estilo.

## 1.4 Descubriendo HTML y CSS

Una parte clave para aprender a codificar es aprender dónde y como puede ver el código existente usted mismo. Casi todo el código que se utiliza para crear una página web (incluido HTML, CSS y JavaScript) se puede encontrar en línea. Solo hay que saber donde buscar.

Nota sobre los navegadores: Google Chrome permite encontrar los archivos HTML y CSS de una página web mediante herramientas de desarrollador.

Pasos para encontrar HTML de una web:

1. Haga click derecho en el fondo o el texto de la página web, lo que mostrará un menú desplegable.
2. Haga click en la opción "Ver código fuente de la página" en la menú desplegable.
3. La siguiente página que se abre debería revelar todo el código HTML de esa página web. Tómese un momento para mirar a su alrededor y revisar el código HTML. Aunque no se espera  que comprendas nada de esto todavía, es posible que puedas entender parte del código.

Pasos para encontrar CSS de una web:

El código CSS de una página web suele estar organizado en otro archivo que se puede encontrar siguiendo los siguientes pasos:

1. Haga click derecho en el fondo o el texto de la página web, lo que mostrará un menú desplegable.
web, lo que mostrará un menú desplegable.
2. Haga click en la opción "Ver código fuente de la página" en la menú desplegable.
3. Una vez que estés en la fuente de la página, presiona CTRL + F para abrir la barra Buscar.
4. Luego, busca ".css". Es posible que su búsqueda revela más de un archivo .css.
5. Puede dar click en uno de los achivos .css para observar el código presente