# 2. Conceptos básicos de HTML

HTML consta de doa componentes principales:
* Elementos
* Etiquetas


![Componentes de HTML](https://assets-v3.circle.so/qb0zbq75vnxdjwxy9y76tdo0agjy)

## 2.1 Elementos y Etiquetas (tags)

Un elemento es una línea como la que se presenta a continuación:

```HTML
<main>
  <h1>Esta línea completa es un elemento</h1>
  <p>Esto es un párrafo creado con HTML</p>
</main>
```
En efecto, toda la línea se llama "elemento `<h1>`"

Un elemento HTML a menudo se componer de dos etiquetas:
* Etiqueta de apertura (o etiqueta de inicio): ej `<h1>`.
* Etiqueta de cierre (o etiqueta de finalización): ej `</h1>`.

## 2.2 Texto en HTML

El texto en HTML se presenta en dos categorías:
* headings headers o encabezados
* paragraphs o parrafos

En los siguientes ejemplos puede notar las diferencias entre ambos:
![Ejemplo de pagína con texto](https://assets-v3.circle.so/nngudrkc2ihfzvzqu80mjkmqy34o)

![Ejemplo de pagína con texto](https://assets-v3.circle.so/jbn7wo3acwwynh0kir3n9mi03upg)

![Ejemplo de pagína con texto](https://assets-v3.circle.so/f932ud5bwwv1zlno3wp4zhjkmnab)

## 2.2.1 HTML paragraphs

Está representado por una etiqueta  de apertura `<p>` y etiqueta de cierre `</p>` y cuyo contenido es un bloque con texto.

Observe la siguiente imagen y trate de identificar los paragraphs.

![Textos HTML](https://assets-v3.circle.so/7k6vw7yvx2y44raha9b53t7fyiuy)

Veamos un ejemplo:

```HTML
<p>I used to think that rain was romantic. That it held possibility. It smells fresh and delicious and intoxicating and it whispers of new beginnings as it pounds against the ground.</p>

<p>When it rained, you could imagine your car breaking down. You could imagine someone stopping their car to help you out	the rain plastering their hair to their face and soaking you both. You could imagine leaning in closer to them with the roaring of the storm in your ears and smelling damp earth on them and kissing, with rain pattering relentlessly on top of the two of you, while the wind blew and you both froze.</p>

<p>But it would be alright. Being cold doesn't matter half so much if you're cold with someone else. I always thought rain was like that, so wonderful and fresh and exciting and romantic.</p>
```

## 2.2.2 HTML headings

Como sugiere el nombre, los headings o encabezados son títulos o subtítulos que se utilizan en una página web para dividir, organizar y resaltar el contenido. Se definen mediante etiquetas como `<h1>` en la que los números de las etiquetes sugieren dónde se ubica el encabezado en la jerarquía.

Revisando el ejemplo de la página "Dogs or Cats?" puedes observar que existen tres diferentes headings:

1. Primary heading: "Dog or Cat?".
2. Secondary headyng: el subheading "What kind of person are you?".
3. Tertiary heading: Hay dos encabezados terciarios: "Dogs" y "Cats".

HTML tiene seis headings que van desde `<h1>` hasta `<h6>` siendo `<h1>` el heading de mayor tamaño y `<h6>` el de menor tamaño. Cada heading representa un diferente nivel de importancia.

Un elemento `<h1>` suele ser un primer título y el más destacado de una página web. Ayuda a identificar la información más importante y, a menudo, se utiliza para el nombre o título más importante de la página. Los motores de búsqueda usan etiquetas HTML para comprender como presentar el contenido, por lo que una mejor práctica es usar una sola vez por página web la etiqueta `<h1>` para mantener la relevancia de la etiqueta en los motores de búsqueda.

Veamos el siguiente ejemplo:

```HTML
<h1>The Wizard of Oz</h1>

<h2>The Rescue of the Tin Woodman</h2>

<h3>Chapter 5</h3>

<p>So, while they were walking through the forest, the Tin Woodman told the following story:</p>

<p>"I was born the son of a woodman who chopped down trees in the forest and sold the wood for a living. When I grew up, I too became a wood chopper, and after my father died I took care of my old mother as long as she lived. Then I made up my mind that instead of living alone I would marry, so that I might not become lonely.</p>

<h4>L. Frank Baum</h4>
```

## 2.3 Atributos

Observa el siguiente elemento HTML:

```HTML
<img src="images/mountain-hiker.jpg" width="500" />
```

Note que la etiqueta luce diferente a las antes vistas. Los atributos son fragmentos adicionales de información que están vinculados con ciertos elementos. Siempre se escriben entro de la etiqueta de apertura y siempre seguirán la siguiente estructura: `atributo="valor"`.

## 2.4 Imágenes: <img>

Observe el siguiente ejemplo y responda:

* ¿En que se diferencia el elemento `<img>` de los elementos `<h1>` y `<p>`?
* ¿Que significa `<img>`?
* ¿Que significa `src`?
* ¿Que significa `width`?
* ¿Que significa `alt`?
* Si no proporciona medida `width`, ¿qué valor toma?
* Cuando cambia el valor width, ¿qué valor toma?
* Cuando `width="500"` se elimina, que sucede con la imagen?

```HTML
<h1>Seljalandsfoss Waterfall</h1>

<img src="https://3fc7422c-974c-4598-a810-95fe2f35ffdf-00-3touj63j1i6ls.riker.replit.dev/waterfall.jpg" width="500" alt="Seljalandsfoss Waterfall">

<p>Seljalandsfoss is one of the best known waterfalls in Iceland. Seljalandsfoss is located in the South Region in Iceland right by Route 1 and the road that leads to Þórsmörk Road 249. The waterfall drops 60 m (197 ft). One of the interesting things about this waterfall is that visitors can walk behind it into a small cave.</p>

<p>Photo by Robert Lukeman on Unsplash</p>
```
Técnicamente, decir que en HTML se incrustan imágenes (como podría estar en un PDF o en un Google Doc) es incorrecto. Todas las magenes en una página HTML son archivos separados que deben ubicarse en un servidor web y luego son referenciadas en la web para que se rendericen. Los atributos que puede tener la etiqueta `<img>` puede ser:

* src: significa source (fuente) y hace referencia a la ubicación en la línea de la imagen.
* width: hace referencia al ancho qur tomará en la web y se expresa en pixeles. Si no se establece el ancho la imagen se mostrará en cualquier tamaño en el que se guarde naturalmente la imagen.
* alt: alternative text (texto alternativo), texto que representa la imagen y debe aplicarse a todas las imagenes de una página web. El texto alternativo es importante por estas razones:
  * Si el enlace de la imagen está roto, se mostrará el texto alternativo para que el usuario sepa qué imagen debe aparecer en la pantalla.
  * El texto alternativo es esencial para la accesibilidad. Lo utilizan lectores web visuales, que describirán imágenes a usuarios, que describirán imágenes a usuarios ciegos o con discapacidad visual.
  * Proporcionar un valor alt ayudará a mejorar la visibilidad de un sitio web en Internet porque proporciona a los motores de búsqueda información más detallada.

A continuación un ejemplo de una estructura con diferentes elementos HTML:

```HTML
 <!-- imagenes: crown =  -->
<img src="crow.jpg" alt="Crow" width="600px">

<h1>The Wizard of Oz</h1>

<h2>The Search for the Wicked Witch</h2>

<h3>Chapter 12</h3>

<img src="scarecrow.jpg" alt="Scarecrow" width="600px">

<p>
  And the Wicked Witch said to the King Crow, "Fly at once to the strangers; peck out their eyes and tear them to
  pieces."
</p>

<p>
  But the Scarecrow said, "This is my battle, so lie down beside me and you will not be harmed."
</p>

<p>
  So they all lay upon the ground except the Scarecrow, and he stood up and stretched out his arms. And when the crows
  saw him they were frightened, as these birds always are by scarecrows, and did not dare to come any nearer.
</p>

<h4>
  (Crow & Scarecrow Photos by Dimitar Donovski on Unsplash)
</h4>
```