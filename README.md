# Web del grupo GDG Toledo

## Creación de entorno local

### "A pelo"
TODO meter chicha aquí

### Con Docker

Si tienes Docker instalado en el sistema, accede a la raíz del proyecto y podrás optar por las siguientes opciones:

- Compilar y servir en tiempo real usando el comando:
````
docker-compose up --build
````
- si solo quieres compilar el proyecto puedes hacer uso de la imagen oficial de Jekyll en DockerHub:
````
export JEKYLL_VERSION=3.8
docker run --rm \
  --volume="$PWD:/srv/jekyll" \
  -it jekyll/minimal:$JEKYLL_VERSION \
  jekyll build
````