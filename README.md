Pasos para deploy

Recordar detener y eliminar el contenedor y la imagen de la landing previo a subir la nueva version

1: docker build -t landing-technodevs:${version} .
2: docker save -o landing-technodevs.tar landing-technodevs:${version}
3: Acceder a portainer.technodevs.com.ar
4: Acceder al entorno "Local"
5: Acceder a la pestaña "images" y luego seleccionar "import"
6: Subir el archivo .tar creado
7: Correr el contenedor en el puerto 8081, ademas seleccionar en la pestaña network "npm_network"