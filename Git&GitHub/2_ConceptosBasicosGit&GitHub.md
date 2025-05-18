# 2. Conceptos básicos de Git & GitHub

## 2.1 Empezando

Un repositorio Git es simplemente una carpeta, pero puede **rastrear todos los archivos que contiene**, incluyendo todos los de cada subcarpeta. Lo que lo hace especial es que contiene la carpeta `.git`.

Es importante recordar que un repositorio Git **rastrea los cambios en cada subcarpeta**. Por ejemplo, si conviertes tu carpeta de inicio en un repositorio Git, rastreará los cambios de cada archivo en cada subcarpeta de tu carpeta de inicio. Esto se debe a que todas las demás carpetas se encuentran dentro de tu carpeta de inicio. Por lo tanto, crear un repositorio anidado es redundante y probablemente cause confusión en el futuro. Una buena regla para recordar es que **no es necesario colocar un repositorio Git dentro de otro**.

## 2.2 Inicializar un repositorio Git

Si no sabes cómo abrir la línea de comandos, estos videos te servirán de repaso.

[MacOS-Command Line](https://www.youtube.com/watch?v=aKRYQsKR46I)

[Windows Command Line](https://youtu.be/MBBWVgE0ewk)

Crea una carpeta llamada "getting-started-with-git". Dentro, ejecuta el siguiente comando desde la línea de comandos. Mi recomendación es que la crees lo ás cerca a la raiz de tu máquina.

```bash
git init
```
El comando anterior _inicializará_ un nuevo repositorio dentro de la carpeta actual. Ejecute `ls -a` para buscar los archivos y carpetas en esta carpeta. Debería ver una carpeta llamada `.git`.

## 2.2 Eliminando la carpeta .git

Al comenzar, es posible que inicialices un repositorio Git en el lugar equivocado. ¡No te preocupes! Siempre puedes eliminar la carpeta `.git`, como se muestra aquí:

```bash
rm -r .git
```
Ten en cuenta que si eliminas esta carpeta y ya has realizado confirmaciones, estas se perderán. Si ya has realizado confirmaciones, quizás debas agregar el parámetro -f, como se muestra a continuación. Como siempre, ¡ten cuidado al ejecutar comandos como este!

```bash
rm -rf .git
```
### **HAZ ESTO: ELIMINA LA CARPETA .git**

Ahora, elimina la carpeta `.git` de tu carpeta "getting-started-with-git". Luego, ejecuta git init de nuevo.

## 2.3 Comprobación del estado

De ahora en adelante, te resultará útil conocer el comando `git status`. Este comando mostrará información sobre lo que está sucediendo actualmente en tu repositorio Git. Al ejecutar `git status` por primera vez en un repositorio vacío, recibirás un mensaje como el siguiente:

```bash
On branch main

No commits yet

nothing to commit (create/copy files and use "git add" to track)
```

El resultado anterior indica lo siguiente:
* Actualmente se encuentra en la _rama principal - main branch_. (Si no ha cambiado la predeterminada, podría ser la _rama maestra - master branch_). Esta es la rama predeterminada que siempre se crea al crear un nuevo repositorio. Aprenderá más sobre las ramas más adelante.
* No se han realizado commits (confirmaciones). ¡Pronto lo hará!
* No se han realizado cambios en el repositorio desde que ejecutó `git init`. Tenga en cuenta que el resultado también ofrece una pista útil sobre qué hacer a continuación.

El comando `git status` siempre es útil si no está seguro de qué sucede con Git.

### **HAZ ESTO: CREA UN ARCHIVO**

En la carpeta "getting-started-with-git", crea un archivo llamado `teams.txt`. Luego, ejecuta `git status`. Verás algo similar a lo siguiente en tu terminal:

```bash
On branch main
No commits yet

Untracked files: (use "git add <file>..." to include in what will be committed)

teams.txt

nothing added to commit but untracked files present (use "git add" to track)
```
Como se puede notar, el mensaje ha cambiado.

La sección _untracked files (Archivos sin seguimiento)_ del mensaje indica qué archivos están en la carpeta pero que Git no rastrea aún. El estado _untracked (sin seguimiento)_ es uno de los cuatro estados posibles de un archivo en un repositorio Git. Un archivo sin seguimiento no forma parte del repositorio Git.

## 2.4 Staging files

Una vez que haya realizado cambios en un archivo o creado uno nuevo, puede agregarlo. Agregar un archivo también se denomina _staging a file_ (preparando un archivo), ya que se mueve a un _staging area_. El _staging area_ representa los cambios listos para confirmarse (commit), a diferencia de los archivos sin seguimiento (untracked files), que aún no están listos para confirmarse.

En resumen, existen cuatro estados posibles para un cambio:
* Untracked - Sin seguimiento
* Staged - Preparado
* Unmodified - Sin modificar
* Modified - Modificado

El siguiente diagrama muestra cómo los archivos cambian entre los estados posibles:

![Diagrama de posibles estados Git](https://assets-v3.circle.so/g6cicjd1ly2gehdzy1ghkkpctd9b)

Si desea mover un archivo de un modo _untracked_ a uno con _staged_, puede ejecutar el comando `add`, de la siguiente manera:

```bash
git add teams.txt
```

Como habrás notado, esta es la sintaxis que se sugirió en la salida de `git status`.

### **HAZ ESTO: STAGE FILES**

Prepare su archivo ejecutando el comando `git add` mencionado anteriormente. Luego, escriba `git status`. Verá algo similar a lo siguiente:

```bash
On branch main
No commits yet

Changes to be committed: (use "git rm --cached <file>..." to unstage)

new file:  teams.txt
```

Como puede ver arriba, el resultado proporciona instrucciones para deshacer la configuración del archivo `teams.txt`, lo que implica que este archivo ya está _staged_. De hecho, todos los archivos de la sección "Changes to be committed" están `staged`.

## 2.5 Haciendo commits

Cada _commmit_ (confirmación) agrupa todos los _staged_ (cambios programados) y los guarda, con un mensaje útil y metainformación sobre ellos. Cuantas más confirmaciones realices, más fácil será obtener un historial detallado de lo sucedido. Y, como aprenderás más adelante, tener más confirmaciones te brinda más puntos de control a los que puedes volver si algo sale mal.

Los mejores desarrolladores realizan confirmaciones con frecuencia, lo que garantiza que su trabajo se registre, etiquete y respalde.

### **HAZ ESTO: REALIZA UN COMMIT**

En este punto, tus cambios están _staged_ (preparados) y estás listo para realizar tu primer commit. Para ello, ejecuta el siguiente comando.

```bash
git commit -m "Adding the teams.txt file"
```
El comando `git commit` guarda todo lo que esté staged, empaquetando los cambios en una única confirmación (commit). El indicador `-m` permite añadir un mensaje y contextualizar la confirmación.

Si vuelves a ejecutar `git status`, verás algo similar a lo siguiente:

```bash
On branch main
nothing to commit, working tree clean
```
## 2.6 Revisa tu historial

¿Cómo sabes si tu _commit_ funcionó correctamente? Una forma es usar el comando `git log`, que te mostrará el historial de todo tu repositorio.

Intenta ejecutar el comando `git log`. El resultado será similar a esto:

```bash
commit 8529743e386b193450baab116e5a0e81a0b5ea9f (HEAD -> main)
Author: Author Name <email@theopenbootcamp.com>
Date:   Thu May 16 16:35:33 2025 -0700

Adding the teams.txt file
```

**Nota:** Recuerda que puedes usar `Q` para salir del lector.

El resultado mostrado corresponde a un único commit. En este commit, puedes ver lo siguiente:
1. Un **commit SHA**, que representa el ID único de la confirmación (en este caso, 85297...).
2. Quién realizó el commit y la hora en que se realizó.
3. El mensaje del commit.

Por ahora, puedes ignorar la parte `(HEAD -> main)` del mensaje de confirmación. Esto se explicará más adelante.

## 2.7 Tamaño del commit

Es mejor realizar muchas confirmaciones o commits pequeños que uno solo grande. Con muchas confirmaciones pequeñas, se obtienen múltiples mensajes descriptivos que facilitan que un colaborador (o un futuro yo) comprenda lo sucedido.

También facilita volver a un punto específico del proyecto. Si solo tienes dos commits, y sus mensajes son "Initial Commit" y "Project completed", no hay forma de pasar de un punto a otro.

Además, es ideal agrupar archivos relacionados en un mismo commit. Por ejemplo, supongamos que realizaste cambios en los siguientes archivos:

```bash
teams.txt
players.txt
configuration.txt
```
Quizás quieras hacer dos commits:
1. Tu primer commit podría ser para agregar `configuration.txt`.
2. Tu segundo commit podría ser para agregar `teams.txt` y `players.txt`.

¿Por qué separar los commits de esta manera? Es posible que el archivo `configuration.txt` no esté relacionado con los archivos `teams.txt` y `players.txt`. Por lo tanto, crear un commit separado puede ayudar a enfatizar que el archivo `configuration.txt` tiene un propósito diferente.

### **HAZ ESTO: REALIZA MÁS CAMBIOS**

Agrega el siguiente texto a tu archvo `teams.txt`:

```txt
Hopper Hawks
The Lovelace Lynxs
Turing's Tigers
```

Observa los cambios

Suele ser útil ver los cambios realizados antes de prepararlos. Puedes hacerlo con el comando `git diff`.

Intenta ejecutar `git diff`. Verás un resultado similar al que se muestra a continuación. (Y, como siempre, recuerda que puedes usar `Q` para salir del lector).

```bash
diff --git a/teams.txt b/teams.txt
index e69de29..eea9eae 100644
--- a/teams.txt
+++ b/teams.txt
@@ -0,0 +1,3 @@
+Hopper Hawks
+The Lovelace Lynxs
+Turing's Tigers
```

Lo anterior muestra lo siguiente:
* El contenido en la parte superior indica que se está comparando una versión anterior del archivo `teams.txt` con la versión actual modificada.
* Cualquier línea marcada con un signo más (+) indica lo que se ha añadido. Aunque esto no se muestra arriba, cualquier línea eliminada se mostrará con un signo menos (-) delante.

## 2.8 Agrega todos los cambios

Agrega todos los cambios al _staging area_ con el siguiente comando:

```bash
git add -A
```
La flag `-A` añadirá todos los cambios al área de pruebas, incluyendo los archivos nuevos. Como acabas de comprobar la diferencia entre el historial y los cambios actuales, sabes que añadir todo ahora será una confirmación correcta.

También lo puedes realizar mediante el siguiente comando:

```bash
git add .
```

## 2.14 Salir de _vi_

Ahora, intenta ejecutar el siguiente comando. Ten en cuenta que a este comando le falta la flag `-m`.

```bash
git commit
```
Dependiendo de su sistema operativo, es probable que acceda a un editor de terminal llamado _vi_. El editor _vi_ no es tan complejo, pero puede resultar abrumador si no lo conoce.

![git commit](https://assets-v3.circle.so/d8qbmz99zq85nygqr9eodxsctyol)

Por ahora, deberías planear salir de _vi_ si lo abres accidentalmente. Para ello, escribe `:q!`
Luego, pulsa `Intro`.

![Saliendo del commit](https://assets-v3.circle.so/yj2urdi8ww58v847izkpvosa79a6)

### **HAZ ESTO: INTENTA HACER UN COMMIT CON CAMBIOS "UNSTAGED**

Ahora, inténtalo. Agrega el siguiente texto a tu archivo teams.txt:
```txt
Torvalds Tornados
```
"Stage" los cambios con el siguiente comando:

```bash
git add -A
```

Ejecuta `git diff`. Los cambios estan "staged", entonces `git diff` debería mostrar que no hay diferencias.

Recuarda que puedes usar `Q` para salir del lector.

Agrega el siguiente texto a tu archivo `teams.txt`:

```txt
Page Panthers
```

Ahora, ejecuta `git status`. Verás algo como esto:

```bash
On branch main
Changes to be committed:
  (use "git restore --staged <file>..." to unstage)
	modified:   teams.txt

Changes not staged for commit:
  (use "git add <file>..." to update what will be committed)
  (use "git restore <file>..." to discard changes in working directory)

modified:   teams.txt
```

Ten en cuenta que `modified: teams.txt` aparece tanto en "_Changes to be committed:_" como en "_Changes not staged for commit:_".

> ¿Qué ocurre si realizas un commit ahora? Recuerda que Git solo confirma los cambios preparados (staged). Como solo preparaste uno de los cambios, puedes concluir que solo la adición de Torvalds Tornados se incluirá en la confirmación.

Pruébalo. Ejecuta `git commit -m "add new team: Torvalds Tornados"`.

Ahora, vuelve a ejecutar `git diff`. Verás que la adición de "_Page Panthers_", que aún no está preparada, no se incluyó en la confirmación.

![git diff](https://assets-v3.circle.so/6kfje3x8envsw16v4oou7k1pddz6)