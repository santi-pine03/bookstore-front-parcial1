# bookstore-front-parcial1

Configurar la URL del backend

El archivo que hace las peticiones al backend está en src/lib/api.ts.
Dentro de ese archivo hay una constante llamada BASE_URL con la dirección del servidor:

const BASE_URL = "http://127.0.0.1:8080";


En caso de que el backend este corriendo en otro puerto o en otro dominio, se debe modificar el valor de esta constante y poner la URL correspondiente. :)