# 3. Continuación de conceptos básicos de GitHub

## 3.1 Pushing

Subir tu código (hacer _push_ a tu código) a GitHub significa mover las confirmaciones que has realizado desde tu equipo local a un repositorio de GitHub.

Ten en cuenta que solo se subirán tus commits. Si tienes archivos o cambios sin "commitear", no se enviarán a GitHub.

Para subir tu código a GitHub, sigue estos tres pasos:
1. Crea un repositorio en GitHub.
2. Usa los comandos de GitHub para vincularlos.
3. Usa los comandos de GitHub para subir tu código.

De ahora en adelante, los repositorios de Git en tu equipo local se describirán como _repositorios_ locales, mientras que los repositorios de GitHub en la web se describirán como _repositorios remotos_. Un repositorio local es un repositorio creado en tu equipo; es lo que se crea al ejecutar `git init`. Y un repositorio remoto es un repositorio creado en la web, con un sitio web como GitHub. Estos repositorios pueden sincronizarse entre sí, pero no es obligatorio.

Los repositorios remotos requieren [autenticación](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/about-authentication-to-github#authenticating-with-the-command-line). La autenticación confirma tus credenciales y te permite acceder de forma segura a los recursos de tu cuenta. Puedes acceder a los repositorios desde la línea de comandos de dos maneras: **SSH** y **HTTPS**. GitHub recomienda usar el método HTTPS y proporciona instrucciones detalladas sobre cómo configurar un [token de acceso personal](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-tokens).

### **HAZ ESTO: CREAR UN NUEVO REPOSITORIO REMOTO**

1. Vaya al [sitio web de GitHub](https://github.com/) y cree un nuevo repositorio. La forma de hacerlo dependerá de la interfaz que esté viendo. Haga clic en el botón "New" o seleccione el icono ➕ junto a su foto de perfil. Luego, en el menú desplegable, haga clic en "New repository".

Aparecerá una pantalla similar a esta:

![Crear nuevo repo](https://assets-v3.circle.so/x0ew7gckiovm003i8uh5vkdd9qrq)

2. En esta página, introduzca el nombre del repositorio. Por ahora, lo llamaremos "test". Es recomendable que el nombre del repositorio coincida con la carpeta que creó en su equipo local, pero no es obligatorio. Asegúrese de que la casilla "**Initialize this repository with a README**" esté desactivada. A continuación, haga clic en "**Create repository**".

A continuación, verá una página similar a la que se muestra a continuación.

![Quick setup](https://assets-v3.circle.so/brmxw61vnn338udmkrxy27hsuiom)

3. Conecta tu repositorio local a tu repositorio remoto

La página de arriba describe cómo conectar sus repositorios locales y remotos. Concéntrese en la siguiente sección:

![Section](https://assets-v3.circle.so/zr1me91hulc2ypf8578qlndt0q8p)

Normalmente, deberías ejecutar ambas líneas de código para subir tu repositorio. Pero por ahora, las ejecutarás una por una.

Primero, ejecuta la siguiente línea en tu repositorio local:
Ve a tus archivos locales y abre la terminal dentro de la carpeta correcta.

```bash
git remote add origin <your-url>
```
El comando anterior añade un nuevo repositorio remoto (`git remote add`) con el nombre **origin** y una URL que apunta a la URL que acabas de crear. Puedes nombrar tu repositorio remoto como quieras, aunque **origin** es el estándar.

Al ejecutar este comando en la línea de comandos, no verás ningún resultado. Sin embargo, puedes comprobar todos tus repositorios remotos ejecutando `git remote -v`. Esto devolverá un resultado como este:

```bash
origin	https://github.com/ManishPoduval/test.git(fetch)
origin	https://github.com/ManishPoduval/test.git(push)
```
El resultado anterior muestra que existe un control remoto llamado **origin** en la URL dada. (No se preocupe por la lista duplicada).

3. Sincronización mediante envío

La segunda línea de código que se muestra en GitHub es el comando de **rama** (branch).

```bash
git branch -M main
```
**Nota:** Aprenderás más sobre las ramas más adelante en este programa. Por ahora, solo necesitas saber que este comando cambiará el nombre de la rama **master** a **main**. Desde octubre de 2020, GitHub dejó de usar la terminología **master**.

La tercera línea de código que se muestra en GitHub es el comando **push**.

```bash
git push -u origin main
```
Este comando usa `git push` para enviar tus confirmaciones al **origin** remoto en la rama **main**. La flag `-u` establece la referencia predeterminada del servidor (_upstrem_). Esto significa que, en el futuro, si quieres enviar, simplemente escribe git push.

Después de ejecutar el comando anterior, verás un resultado en tu terminal. Luego, intenta actualizar la página en GitHub y verás tus archivos recién confirmados en GitHub.

4. Practica realizando `git push`

Intenta realizar `git push` nuevamente. ¿Observas el siguiente mensaje?

```bash
Everything up-to-date
```
Si ves este mensaje, significa que no hay nuevos _commits_ para enviar.

Ahora, intenta crear un nuevo archivo llamado **README.md**. No le añadas contenido. Luego, intenta ejecutar `git push` de nuevo.

```bash
touch readme.md
git push
```

## 3.2 Pulling

Al colaborar con otra persona, es posible que esté subiendo actualizaciones al mismo repositorio que tú. Esto significa que es posible que el repositorio remoto tenga _commits_ que tú no tienes en tu repositorio local.

La solución es descargar los cambios. Descargar cambios significa copiar las confirmaciones del repositorio remoto que aún no están en tu repositorio local.
Usarás esto a menudo durante la colaboración en el bootcamp.

Aprenderemos más sobre esto más adelante 🙂. De todas formas, aquí está el comando.

```bash
git pull
```
## 3.3 Forking

Bifurcar un repositorio (forking) consiste en **tomar el código de otra persona y crear una copia**. Eventualmente, los cambios que realices en la bifurcación podrían incluirse en el repositorio original. En GitHub, esto significa tomar el repositorio remoto de otra persona y copiarlo en tu propio repositorio remoto.

**No olvides:**

* Los repositorios remotos se almacenan en GitHub, por lo que al bifurcar creas una copia del repositorio de otra persona alojado en GitHub, y esta copia se alojará en tu perfil de GitHub.
* Todo lo relacionado con la bifurcación se realiza oline, en GitHub.

Consulta esta sencilla ilustración de [Freecodecamp](https://www.freecodecamp.org/).

![Esquema](https://assets-v3.circle.so/xl3iw12ipjdigx7deju4jb90iaej)

### **HAZ ESTO: REALIZA FORK A UN REPO**

1. Dirígete al siguiente [repositorio de pruebas](https://github.com/web-dev-open/pizza). Abrirá una página que se parece a esta:


![Repo](https://assets-v3.circle.so/fpzgou0uzz525qt000s5u334v7ra)

2. Haz clic en el botón **Fork** en la esquina superior derecha. Luego, selecciona tu cuenta de usuario. Verás una imagen como la siguiente:

![Crear repo](https://assets-v3.circle.so/tgg1fqqjkjyl2rv63odqpn7ja02w)

3. Al finalizar, tendrás una copia del repositorio _pizza_ en tu cuenta. Para confirmar que estás viendo el repositorio en tu cuenta, revisa la esquina superior izquierda de la página. Verás algo similar a lo siguiente (excepto con tu nombre de usuario en lugar de el repo de la imagen):

![Pizza repo](https://assets-v3.circle.so/589m70s9acmi16cquzvim5f69rir)

Si ves eso, ¡copiaste correctamente el repositorio a tu cuenta! Ten en cuenta que aún puedes ver la última confirmación y su foto de perfil.

## 3.4 Cloning

Clonar un repositorio se refiere a copiar los _commits_ del repositorio remoto a una versión local. Clonar es básicamente descargar el contenido de un repositorio remoto mediante la línea de comandos.

Al usar `git clone` para clonar un repositorio, el comando hará lo siguiente:
* Crear un nuevo directorio con el nombre del repositorio.
* Crear un enlace al repositorio remoto en el nuevo directorio.
* Descargar el contenido del repositorio a tu ordenador, en el nuevo directorio.

Dado que la clonación creará una carpeta `.git`, es muy importante que no clones dentro de un repositorio existente. Siempre debes estar en un directorio que no sea un repositorio Git.

**¿Es necesario bifurcar antes de clonar?**

_Forking_ y _Cloning_ son dos procesos separados que pueden ir de la mano, pero no necesariamente. Bifurcar es el proceso de copiar un repositorio remoto de un usuario diferente a tu propia cuenta. Y clonar es el proceso de copiar cualquier repositorio remoto a tu ordenador.

Puedes bifurcar, clonar o hacer ambas cosas.

### **HAZ ESTO: CLONA UN REPOSITORIO**

1. Ve al repositorio de _pizza_ que bifurcaste anteriormente y haz clic en el botón "Código" en la esquina superior derecha. Luego, copia la URL.

![Copy repo](https://assets-v3.circle.so/j4mjub9jcbqzxrreagk1i0x2005o)

Verás algo como esto:

![Dirección repo](https://assets-v3.circle.so/felzswnk15l7v71xyy3fvxnlpjia)

Ten en cuenta que es básicamente la URL en la barra de direcciones, excepto que termina con `.git`.

2. En la línea de comandos, accede a un directorio que no sea un repositorio Git. Recuerda que es muy importante no ejecutar el siguiente comando dentro de un repositorio Git; de lo contrario, tendrás repositorios locales anidados.

3. Una vez en un directorio que no sea un repositorio Git, ejecuta el siguiente comando:

```bash
git clone <Copied URL>
```
Es algo como esto

```bash
git clone https://github.com/ManishPoduval/pizza.git
```
Verás que se están descargando algunos archivos. También notarás que tienes una nueva carpeta llamada _pizza_.

Entra en ella y escribe `ls -la`. Verás algo similar a esto:

```bash
drwxr-xr-x   7 wesreid  staff  224 Jul  2 17:21 .
drwx------@ 11 wesreid  staff  352 Jul  2 17:21 ..
drwxr-xr-x  12 wesreid  staff  384 Jul  2 17:21 .git
-rw-r--r--   1 wesreid  staff    8 Jul  2 17:21 README.md
drwxr-xr-x   3 wesreid  staff   96 Jul  2 17:21 images
-rw-r--r--   1 wesreid  staff  646 Jul  2 17:21 index.html
-rw-r--r--   1 wesreid  staff  921 Jul  2 17:21 style.css
```
Como puede ver, se descargaron los archivos y se creó un repositorio.

4. Verifique los repositorios remotos. La clonación crea un enlace entre el repositorio remoto que clonó y su repositorio local. Puede comprobarlo ejecutando `git remote -v`. Verá que el origen apunta al repositorio que clonó.