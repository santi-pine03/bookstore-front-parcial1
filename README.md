# bookstore-front-parcial1

Configurar la URL del backend

La URL del backend está configurada en el archivo next.config.ts.
Dentro de la sección env:

env: {
  NEXT_PUBLIC_API_BASE: "http://127.0.0.1:8080",
}

En caso de que el backend este corriendo en otro puerto o en otro dominio, se debe modificar el valor de esta constante y poner la URL correspondiente. :)