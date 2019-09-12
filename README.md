# Web del grupo GDG Toledo

## Creación de entorno local

### A pelo

#### Instalación

##### Requerimientos

* `Ruby`
* `RubyGems`
* `GCC` y `Make`

Sigue la guía oficial para instalarte todos los requerimientos en tu sistema operativo

[https://jekyllrb.com/docs/installation/](https://jekyllrb.com/docs/installation/)


##### jekyll

Una vez instalados todos los requerimientos ya podremos instalarnos la gema jekyll.

```shell
gem install jekyll bundler
```

##### Bundle and Server

Completada la instalación solo tendremos que bundle y servir lanzar el servidor local con:

```shell
bundle exec jekyll serve
```

y abrir el browser en `http://localhost:4000`


### Con Docker

Si tienes Docker instalado en el sistema, accede a la raíz del proyecto y podrás optar por las siguientes opciones:

- Compilar y servir en tiempo real usando el comando:
````
docker-compose up --build
````

- si solo quieres compilar el proyecto puedes hacer uso de la imagen oficial de Jekyll en DockerHub:

````shell
export JEKYLL_VERSION=3.8
docker run --rm \
  --volume="$PWD:/srv/jekyll" \
  -it jekyll/minimal:$JEKYLL_VERSION \
  jekyll build
````