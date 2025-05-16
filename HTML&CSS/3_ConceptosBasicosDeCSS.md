# 3. Conceptos básicos de CSS

HTML es aburrido por si solo. CSS aplica los estilos para darle vida al HTML aplicando fuente, tamaños, colores a las páginas web. Aunque CSS fue diseñado específicamente para complementar HTML, el código CSS generalmente se escribe en archivos distintos, con nombres de archivo como `style.css`. Esta separación ayuda a mantener organizado tanto el código HTML como el código CSS.

Observa el contenido del `index.html` y el `style.css` a continuación.

```HTML
<!-- index.html --->
<link href="style.css" rel="stylesheet" type="text/css" />

<h1>The Raven</h1>

<p>Once upon a midnight dreary, as I pondered weak and weary,</p>

<p>Over many a quaint and curious volume of forgotten lore</p>

<p>While I nodded, nearly napping, suddenly there came a tapping,</p>

<p>As of someone gently rapping, rapping at my chamber door.</p>
```

```CSS
/* style.css */
h1 {
  font-family: 'Times New Roman';
  font-size: 72px;
  color: firebrick;
}

p {
  font-family: Arial;
  font-size: 18px;
  color: darkslategrey;
}
```

El archivo CSS muestra como puede adicionar estilo al CSS, específicamente a los headings y paragraphs. Observa lo siguiente:

- La primera línea de HTML contiene el link que conecta el CSS al HTML.
- Si eliminas la primera línea del HTML estarías rompiendo el enlace al CSS, por lo que no se aplicaría el estilo.
- El archivo CSS contiene los selectores de los elementos usados en el HTML.

La manera en como se conecta el HTML al CSS es mediante el elemento `<link>`, el cual debe tener la siguiente estructura:

```CSS
<link href="style.css" rel="stylesheet" type="text/css" />
```

El HTML se enlaza, pero debe estar claramente especificada la ruta. En el ejemplo anterior, ambos archivos (`index.html` y `style.css`) están en el mismo directorio, pero esto no siempre se cumple ya que es posible y recomendable que los estilos de almacenen en un directorio llamado generalmente como `styles`, por lo que la ruta (relativa o absoluta) debe quedar claramente especificada.

* `rel` (Relationship)
  El atributo rel especifica la relación entre el documento HTML actual y el recurso vinculado. En el caso de un archivo CSS, el valor de rel es "stylesheet", lo que indica que el archivo vinculado es una hoja de estilos que se aplicará al documento.

  Otros valores comunes de rel incluyen:

  * `icon`: Para vincular un ícono (como un favicon).
  * `alternate`: Para vincular versiones alternativas del documento.
  * `preload`: Para cargar recursos de manera anticipada.

*

## 3.1 Reglas CSS

Al igual que CSS, HTML tiene una particular y específica sintaxis. En general, CSS es una colección de conjuntos de reglas (o rulesets) que comunmente se hace referencia como reglas. Estas reglas definen que cambios aplican al documento HTML. La siguiente imagen muestra que hay una sola regla que tiene varios componentes:

- un selector
- una propiedad
- una declaración
- un valor

![Estructura de CSS](https://assets-v3.circle.so/6w2qqin28m8dspuqsrno6opc8ii8)

Más a profundidad, tenemos lo siguiente:

- **Rule, ruleset o regla:** bloque de código completo asignado para crear el estilo del HTML.
- **Selector:** Este es el nombre del elemento HTML al que se le aplicará el estilo.
- **Property o propiedad:** conjunto o familia de atrinutos u opciones que pueden cambiar.
- **Value o valor:** Es el cambio específico que se desea realizar, como el tamaño del pixel, el color, etc.
- **Declaration o declaración:** Consta tanto de la propiedad como del valor asignado al selector.

## 3.2 Selectores y declaración

Un selector define qué elemento del código debería verse afectado por el bloque de declaración que sigue al selector. El selector hace referencia a un elemento HTML específico, como el elemento `<p>` (o paragraph) de la i9magen anterior. En este caso, el elemento `<p>` tendrá el estilo de la información proporcionada en el bloque de declaración.

El bloque de declaración comienza y termina con llaves `{}`. Cada línea dentro de las llaves representa una declaración separada, cada una de las cuales aplica un estilo o formato particular al elemento al que se hace referencia. Por ejemplo, el código CSS siguiente tiene dos declaraciones. ¿Qué hace cada uno?

```CSS
p {
  color: blue;
  font-size: 16px;
}
```

## 3.3 Properties & values (propiedades y valores)

Cada declaración se compone de dos componentes: una propiedad y un valor. Una propiedad CSS es la categoría general o el tipo de cambio de estilo que le gustaría aplicar.

Existen cientos de propiedades y valores CSS. La referencia [CSS Reference](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#index) de Mozilla es un recurso valioso que comparte las propiedades más comunes, pero la lista es mucho más larga. Periódicamente descubrirás nuevas propiedades y valores de CSS a lo largo de tu carrera.

En una declaración, la propiedad se nombra primero. Le siguen dos puntos (`:`), luego el valor y finalmente punto y coma (`;`). Estructuralmente las declaraciones tienen este aspecto: `propiedad: valor;`. Una de las mejores formas de aprender sobre propiedades y valores es ver ejemplos de cómo funcionan. Mira el siguiente ejemplo. ¿ Qué crees que realizan esas declaraciones?

```CSS
h1 {
  color: white;
  font-family: 'Times New Roman';
  font-size: 16px;
}
```
La propiedad `color` refiere al color del texto y el valor `white` establece que dicho color es blanco. Es importante adelantar que a menudo se declara el color en formato hexadecimal en el valor, pero esto se verá más adelante.

La propiedad `font-family` aplica una fuente específica al texto. `Arial` y `Times New Roman` son fuentes comunes que se encuentran en casi todas las computadoras. Los nombres de funetes con más de una palabra deben ingresarse entre comillas como 'esto', para ayudar al código a leer el nombre de la fuente correctamente.

La propiedad `font-size` se refiere a qué tan grande o pequeño será el texto en la página. El valor `px` representa píxeles y establece el tamaño exacto del texto. Los píxeles son una medida comñun para el texto en la web. Pero a medida que aprenda más sobre el tamaño, descubrirá otras medidas que son particularmente útiles para dimensionar elementos HTML.

## 3.4 Ejercicio: práctica CSS

Se proporciona un `index.html` y un `style.css`. Trata de hacer coincidir, probando con diferentes estilos, la renderización con la imagen proporcionada.

```HTML
<!-- index.html --->
<link href="style.css" rel="stylesheet" type="text/css" />

<h1>The Raven</h1>

<p>Once upon a midnight dreary, as I pondered weak and weary,</p>

<p>Over many a quaint and curious volume of forgotten lore</p>

<p>While I nodded, nearly napping, suddenly there came a tapping,</p>

<p>As of someone gently rapping, rapping at my chamber door.</p>
```
```CSS
/* style.css */
h1 {


}

p {


}
```
Una vez que haya relacionado el ejemplo de referencia con el código, practique usando diferentes valores para cambiar la presentación de la página web HTML. Los siguientes son valores de muestra que puede se útiles.

* color
  * red
  * blue
  * green
  * pink
  * yellow
  * orange
  * black
* font-family
  * Arial
  * 'Arial Black'
  * 'Comic Sans MS'
  * Impact
  * 'Trebuchet MS'
  * 'Times New Roman'
  * Georgia
  * Webdings
  * Wingdings
* font-size
  * Practice using sizes that are between 8px and 108px.

Imagen de referencia 1:
![Image de referencia 1](https://assets-v3.circle.so/h8cd3gom63x3haoovrofihs4y5bl)

Imagen de referencia 2:
![Imagen de referencia 2](https://assets-v3.circle.so/pjobp65nrqqdc2rxqpizehtiv9y6)

Una posible solución al estilo (styles.css) es la siguiente:
```CSS
h1 {
  color: green;
  font-family: 'Comic Sans MS';
  font-size: 60px;
}

p {
  color: red;
  font-size: 28px;
}
```
## 3.5 Intro a colores web

En los primeros años de HTML, los nombres de los colores, como `white`, se asignaban a un número limitado de valores de color. Estos nombres de colores todavía se utilzan y tienen ventaja de ser bastante fáciles de recordar y consultar. Pero hay una limitación importante: sólo hay 140. Afortunadamente? ahora existe una solución a ese problema: códigos de colores hexadecimales.

Hoy en día, la forma mucho más sólida y profesional de asignar colores es utilizar códigos de color hexadecimales (que a veces se denominan valores hexadecimales). Los códigos de colores hexadecimal tienden a ser menos "amigables" que los nombres de colores porque están representados pur un código alfanumérico en lugar de una palabra familiar. Por ejemplo, el nombre del color rojo anaranjado llamado `tomato` es mucho más fácil de recordar que  ` #FF6347`.

Sin embargo, los códigos de colores hexadecimales han ampliado considerablemente la paleta de colores de Internet. Ahora hay 16.777.216 posibles valores de colores para usar, que es mucho más que 140. Vale la pena señalar que cuando asigna valores de colores, no necesita asignar un nombre de color ni un código de color hexadecimal. Solo necesita usa uno de los dos.

Tamnbién deberías consultar la [lista de nombres de colores y códigos hexadecimales](https://htmlcolorcodes.com/color-names/) para ver los 140 colores con snombre y sus correspondientes códigos de color hexadecimal. Aunque probablemente utilice códigos de color hexadecimal en su trabajo diario, es útil familiarizarse con los nombres de los colores en caso de que trabaje con desarrolladores que utilicen  nombres de colores como acceso directo para valores de color.

## 3.6 Hallando el valor de un color

Los códigos de colores hexadecimales pueden ser un poco más dificiles de recordar, pero la verdad es la siguiente: en realidad no es necesario recordarlos. Hay varias formas de encontrar códigos de colores hexadecimales en la web cuando se necesitan, incluidas muchas herramientas, complementos y sitios web.

Una herramienta útil se llama [Coolors](https://coolors.co/). Con un solo clic, Coolors generará una combinación de colores para que puedas usar. Estos colores, en combinación con tonos de blanco y negro, serán más que suficientes para tu trabajo.

![Coolors](https://assets-v3.circle.so/0uq4bijn11mlfnj7f26wisi367xw)

Dicho esto, en realidad hay dos códigos de colores hexadecimales que debes memorizar. Afotunadamente, son bastante sencillos.

* **Black:** el código hexadecimal para el black es ` #000000`.
* **White:** el código hexadecimal para el white es `ffffff`.

## 3.7 Más sobre las fuentes: Alternativa

La propiedad `font-family` asigna una fuente particular al texto HTML. Esta capacidad permite diseñar contenido escrito en una página web utilizando tipos de letras específicos.

Sin embargo, es posible que vea declaraciones en las que la propiedad `font-family` va seguida de más de un valor de fuente. Observa e ejemplo a continuación:

```CSS
h1 {
  font-family: Arial, Tahoma, serif;
}
```

Este concepto de codificación se conoce como __font stacks__ y ayuda a prevenir problemas si una computadora o un navegador no puede asignar la fuente solicitada al texto específico. El __font stacks__ le dice al código que si la primera fuente (Arial) no se carga, entonces debe cargar la segunda fuente de la lista (Tahoma), y así sucesivamente. Esto se denomina __font fallbacks__ (o __fuentes alternativas__).

Generalmente, la última elección de fuente debe ser una categoría general de tipografía con la que todos los dispositivos puedan funcionar. Probablemente, no será otra fuente específica, sino un tipo de fuente más amplio, como `serif` o `sans-serif`. Todas las siguientes categorías de fuentes aparecerán de manera confiable en cada máquina y, por lo tanto, se pueden usar al final de su pila de fuentes:

* **Serif:** Las fuentes serit se utilizan a menudo para los títulos. Las letras de estas fuentes tienen extremos o colas pequeñas y ahusadas, que añaden un acento estelístico al texto y hacen que las letras y los caracteres sean más atractivos en tamaños más grandes.
* **Sans-serif:** Las fuentes sans-serif se utilizan a menudo para el texto de los párrafos de los sitios web. Tienen un mínimo de ensanchamiento o ahusamiento en los extremos de las letras, lo que hace que el texto más pequeño sea más facil de leer.
* **Monospace:** Estas fuentes se utilizan a menudo para ejemplos de código y todas las letras tienen el mismo ancho.
* **Cursive:** Este tipo de fuente tiene un estilo divertido y escrito a mano, que puede parecer más enfático que la cursiva.
* **Fantasy:** Este tipo de fuente tiene un estlo decoratico y caprichoso, pero puede ser utilizado como alternativa con cuidado; es más limitado que otros grupos de fuente.


## 3.8 Más estilos para texto:

Algunos ejemplos divertidos relacionadas con las propiedades del texto:

* **font-style:** Con esta propiedad se puede cambiar el formato estilístico de la fuente, como agregar cursiva u oblicua.
* **font-weight:** Esta propiedad permite ajustar el grosor o espesor de una fuente. Generalmente, hay valores disponibles de 100 a 900.

* **letter-spacing:** Esta propiedad permite determinar la proximidad de las letras individuales, aumentando o disminuyendo el espacio entre ellas, medido en píxeles. Por ejemplo, un valor de 1 px es bastante normal, mientras que un valor de -3 px las acercará.

* **line-height:** Esta propiedad permite aumentar o disminuir el espacio entre líneas de texto. Por ejemplo, se podría aplicar un espacio de 20 px entre líneas de texto.

* **text-align:** Esta propiedad permite realinear el texto para que quede centrado, a la izquierda, a la derecha o justificado.

* **text-decoration:** Esta propiedad permite agregar formato adicional, como subrayado, sobrerayado (texto con una línea horizontal encima, a menudo usado en notación matemática) o tachado.

* **text-transform:** Esta propiedad permite cambiar el formato de las letras, como mayúsculas y minúsculas.

## 3.9 Práctica:

En esta actividad debes diseñar la web _Dogs or Cats?_ que se muestra a continuación:

![Dogs or Cats?](https://assets-v3.circle.so/gho4o7x3qll2owih33662y7oyzpk)

Debes utilizar el código CSS para diseñar la página HTML

Su objetivo es hacer que su página web se parezca lo más posible a la imagen, pero no debe preocuparse demasiado por conseguir los colores o tamaños exactos, solo debe hacer lo mejor que pueda.

**Solución:** En el directorio debes tener los siguientes archivos:
* index.html
* style.css
* dogs.jpg

A continuación una posible opción que resuelve la actividad:

```HTML
<!-- index.html --->

<link href="style.css" rel="stylesheet" type="text/css" />

<h1>DOGS OR CATS?</h1>

<h2>What kind of person are you?</h2>

<p>The world is made up of three types of people: Cat people; dog people; and <br> boring people.</p>

<p>Why do you think you have a preference for one over the over?</p>

<h3>Dogs</h3>

<img src="dogs.jpg" alt="dog">

<p>
  The dog's story is inexorably linked with the human's. Dogs are dogs, and <br>not wolves, purely because of human tampering. They were made by us to fit <br>us. The same is true of almonds, but almonds don't play fetch. We took, and <br>take, the cute ones, the sweet ones, the ones we like the best and mold <br>them and their offspring, often to the detriment of their health, into our <br>perfect companion. An that they are.
</p>
```

```CSS
/* style.css */
h1 {
  color: #DFC08D;
  font-family: 'Courier New', 'Sans-serif';
  font-weight: bold;
  font-size: 50px;
  letter-spacing: 10px;
  text-align: center;
}

h2, h3{
  color: firebrick;
  font-family: 'Times New Roman', 'Sans-serif';
  font-weight: bold;
}

p {
  color: #838383;
  font-family: 'Arial', 'Calibri', 'Sans-serif';
  font-size: 18px;
}

img{
  width: 600px;
}
```



