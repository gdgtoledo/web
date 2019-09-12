# Web del grupo GDG Toledo

## 🚀 Creación de entorno local

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
bundle exec jekyll serve`
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
  -it jekyll/builder:$JEKYLL_VERSION \
  jekyll build
````

## 🔧 Develop

### Meetups
Para añadir una página con información relativa a un meetup, sigue los siguientes pasos:

  1. Crea una rama en la que trabajar, por ejemplo: `git checkout -b myMeetup`
  2. Localiza la carpeta `_meetups`
  3. Crea un nuevo fichero con extensión `.md` o puedes copiar uno ya existente, pero adapta el nombre del fichero para que no exista confusión. El formato de la fecha en el nombre del fichero es `AAAA-MM-DD`, seguido del nombre del meetup.
  4. Añade información al fichero en el formato adecuado para que Jekyll pueda leerla correctamente, puedes copiar los campos de otro fichero.
  5. Guarda los cambios `git add -A && git commit -m "My meetup info"`
  6. Solicita Pull Request con la rama modificada.

### Miembros
Para añadir una página con información relativa a un miembro nuevo, sigue los siguientes pasos:

  1. Crea una rama en la que trabajar, por ejemplo: `git checkout -b myInfo`
  2. Localiza la carpeta `_members`
  3. Crea un nuevo fichero con extensión `.md` o puedes copiar uno ya existente, pero adapta el nombre del fichero para que no exista confusión.
  4. Añade información al fichero en el formato adecuado para que Jekyll pueda leerla correctamente, puedes copiar los campos de otro fichero.
  5. Guarda los cambios `git add -A && git commit -m "My info"`
  6. Solicita Pull Request con la rama modificada.
