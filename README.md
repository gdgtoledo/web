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
bundle exec jekyll serve
```

y abrir el browser en `http://localhost:4000`

### Con Docker

Si tienes Docker instalado en el sistema, accede a la raíz del proyecto y podrás optar por las siguientes opciones:

- Compilar y servir en tiempo real usando el comando:
````shell
make run
````

y abrir el browser en `http://localhost:4000`

- si solo quieres compilar el proyecto puedes hacer uso de la imagen oficial de Jekyll en DockerHub:

````shell
make build
````

## 🔧 Develop

### Meetups
Para añadir una página con información relativa a un meetup, sigue los siguientes pasos:

  1. Crea una rama en la que trabajar, por ejemplo: `git checkout -b myMeetup`
  1. Localiza la carpeta `_meetups`
  1. Copia el fichero llamado `1900-01-01-meetup-event-name.md`, pégalo en el mismo directorio y renómbralo cambiando la fecha por la del meetup seguida del nombre del mismo, teniendo en cuenta que el nombre del fichero será usado como URL
  1. Edita el fichero y cambia las propiedades del _front matter_ con la información del meetup (no toques `layout: meetup`)
  1. En la sección de contenido, donde pone `Lorem ipsum...` refleja la descripción del meetup y otra información que consideres relevante
  1. Borra la propiedad `published: false` del _front matter_ o cámbiala a `true`
  1. Guarda los cambios y sube al repo `git add -A && git commit -m "My meetup info"`
  1. Ejecuta el build para generar los ficheros estáticos (Ver sección `Con Docker`)
  1. Solicita Pull Request con la rama modificada.

### Miembros
Para añadir una página con información relativa a un miembro nuevo, sigue los siguientes pasos:

  1. Crea una rama en la que trabajar, por ejemplo: `git checkout -b myInfo`
  1. Localiza la carpeta `_members`
  1. Crea un nuevo fichero con extensión `.md` o puedes copiar uno ya existente, pero adapta el nombre del fichero para que no exista confusión.
  1. Añade información al fichero en el formato adecuado para que Jekyll pueda leerla correctamente, puedes copiar los campos de otro fichero.
  1. Guarda los cambios `git add -A && git commit -m "My info"`
  1. Ejecuta el build para generar los ficheros estáticos (Ver sección `Con Docker`)
  1. Solicita Pull Request con la rama modificada.
