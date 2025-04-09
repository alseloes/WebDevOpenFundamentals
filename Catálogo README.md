CATÁLOGO OPCIONES .md:
------
>
# Titulo 1 h1

<h1>Titulo 1 h1 desde HTML</h1>

## Titulo 2 h2

### Titulo 3 h2

#### Titulo 4 h4

##### Titulo 5 h5

###### Titulo 6 h6

> Ejemplo de como crear citas

Texto que puede ir en cualquier parte

___________________
**Negrita:** Texto en negrita.
__Otra negrita:__ otro ejemplo de negrita

*cursiva*: Texto en cursiva

_otra cursiva_: otro ejemplo de cursiva

> ## Ejemplo de uso cita
>
> En este campo puede ir un texto personalizado para citas
>


![Este es un texto alternativo opcional para imagenes](/assets/images/markdown/markdown.png)


Lista numerada
>
1. Item
2. Item2
3. Otro elemento
Otro
>
Lista no numerada
>
- Item
- Item2
    - Item 2 opcional
- [phpcs](https://github.com/squizlabs/php_codesniffer)
- [laminas-test](https://docs.laminas.dev/laminas-test/)
- [phpunit](https://phpunit.de)

Enlace ejemplo:
>
[Repositorio del front](https://github.com/HBohorquezS/SIFrontend)
>
Otro ejemplo de enlace es http://localhost:8080
>
Tablas

| Encabezado 1 | Encabezado 2 |
|--------------|--------------|
| Celda 1      | Celda 2      |
| Celdda 3     | 😂     |


Codigo
>
`npm run build`
> Esta opcion es ideal para rutas como `config/development.config.php.dist` o extenciones como `.dist`
>


Bloque de código:
>
  ```bash
  $ composer require --dev laminas/laminas-test
  ```

```bash
$ cd path/to/install
$ php -S 0.0.0.0:8080 -t public
# OR use the composer alias:
$ composer serve
```
```sh
# RUN apt-get install --yes libpq-dev \
#     && docker-php-ext-install pdo_pgsql
```
>
```bash
$ composer require --dev vimeo/psalm psalm/plugin-phpunit laminas/laminas-test
```

```apache
<VirtualHost *:80>
    ServerName laminasapp.localhost
    DocumentRoot /path/to/laminasapp/public
    <Directory /path/to/laminasapp/public>
        DirectoryIndex index.php
        AllowOverride All
        Order allow,deny
        Allow from all
        <IfModule mod_authz_core.c>
        Require all granted
        </IfModule>
    </Directory>
</VirtualHost>
```
```nginx
http {
    # ...
    include sites-enabled/*.conf;
}
```
```nginx
server {
    listen       80;
    server_name  laminasapp.localhost;
    root         /path/to/laminasapp/public;

    location / {
        index index.php;
        try_files $uri $uri/ @php;
    }

    location @php {
        # Pass the PHP requests to FastCGI server (php-fpm) on 127.0.0.1:9000
        fastcgi_pass   127.0.0.1:9000;
        fastcgi_param  SCRIPT_FILENAME /path/to/laminasapp/public/index.php;
        include fastcgi_params;
    }
}
```
FIN CATÁLOGO
---------------------------------






>DOCUMENTACION EN DESARROLLO (Debe incluir):
> --------------------------------
> - Pasos para crear un nuevo módulo, incluida la actualización de caché, composer install y composer dum-autoload
> - Estructura del FrontEnd
> - Como definir estilos personalizados y donde están los estilos
> - Como crear los archivos .dist
> - Estructura del backend
> - Como hacer el pull en el servidor

# SISTEMA INTEGRADO v3.0



## Pasos previos a la realización de un commit
>
1. ### Interrupción del proceso webpack
    Aunque en el `.gitignore` se han incluido los archivos `.dist` ya que estos se contruyen automáticamente al ejecutar `npx webpack` (o `npm run build`) tanto en local como en el servidor, se recomienda interrumpir `webpack` antes de realizar un commit ejecutando `ctrl + C` en la terminal en la que se está ejecutando `webpack`.

2. ### Habilitar URL del backend
    Antes de realizar un commit es necesario asegurarse que en el `config.js` ubicado en el path `public/js/modules/config.js` se encuntre habilitada la URL que enlaza a la ip del backend desplegado en el servidor apache, como se muestra a continuación:


    ```javascript
    const BACKEND_URL = 'http://10.240.24.57:8081'; //URL BackEnd desplegado
    //const BACKEND_URL = 'http://backend.megaapp';
    ```

    Posterior a la realización del commit asegurese de habilitar nuevamente la URL al backend en local para continuar con el proceso de desarrollo como se especifica a continuación:

    ```javascript
    // const BACKEND_URL = 'http://10.240.24.57:8081';
    const BACKEND_URL = 'http://backend.megaapp'; // URL BackEnd local
    ```

3. ### Acualización de la caché
    >
    #### En local
    >

>


Una vez realizado un cambio significativoque implique uAunque en el `.gitignore` se han incluido los archivos `.dist` ya que estos se contruyen automáticamente al ejecutar `npx webpack` (o `npm run build`) tanto en local como en el servidor, se recomienda interrumpir `webpack` antes de realizar un commit ejecutando `ctrl + C` en la terminal en la que se está ejecutando `webpack`.

## Enlaces a documentación de deferencia
>
A continuacón se relaciona enlaces a documentación del stack que maneja el proyecto:
>
- [php](https://www.php.net/manual/es/index.php)
- [laminas-tutorials](https://docs.laminas.dev/tutorials/)
- [datatables](https://datatables.net/manual/index)
- [webpack](https://webpack.js.org/concepts/)


> ## Steps to develop
>
> At root directory execute ` npm install` to get dependencies.
>
> Then execute ``` npm run build ``` and it will execute ``` webpack ``` which is configured to watch changes while terminal is active.
>
> After do these steps you can start to modify /public/js/ directory.


