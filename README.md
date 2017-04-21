# B612

## B612-front-boilerplate

Boilerplate para construir tu sitio estático personal **responsive** y poder desplegarlo en wedeploy.io

## Descripción

La primera referencia de B612 es de como se llamaba el asteroide en el que vivía el [El Principito](https://es.wikipedia.org/wiki/El_principito) asi pues, siguiendop está referencia, llamamos así a este proyecto que será nuestro pequeño asteroide en la web.

El proyecto es simplemente un sitio estático que se desplegará en un servicio de [WeDeploy](http://wedeploy.io/) 

## Infraestructura

El proyecto utiliza WeDeploy para desplegar la aplicación. Gracias a su CLI, es posible desplegar en local la infraestructura y desplegar sobre ella nuestra aplicación para comprobar de este modo lo que vamos a desplegar en el cloud. Para instalar el CLI será necesario seguir los pasos descritos en el siguiente [enlace](http://wedeploy.com/docs/intro/using-the-command-line.html).

## Comandos

* Inicializar la infraestructura: `we run`
* Añadir un proyecto: `we link`
* Eliminar un proyecto: `we unlink`
* Parar la infraestructura: `we stop`
* Popular la colección de datos: `curl -vX POST http://data.b612.wedeploy.me/profiles -d @sample-data.json --header "Content-Type: application/json"`

## Consumir api



