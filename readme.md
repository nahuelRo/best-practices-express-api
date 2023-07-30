# Buenas practicas express api restful

## Arquitectura

* Una arquitectura es una manera de estructurar y relacionar diferentes partes de un software.
* En este caso voy a utilizar la arquitecura de 3 capas:

![Arquitectura](./img/arquitectura.png)

1. Capa de controllador: manejaremos todo lo relacionado con HTTP. Eso significa que estamos tratando con solicitudes y respuestas para nuestros puntos finales.
2. Capa de servicio: toda la logica comercial estará en la capa de servicio que exporta ciertos servicios (métodos) que utiliza el controlador.
3. Capa de acceso a datos: donde se trabaja la base de datos


## Versionado

Antes de escribir cualquier código especifico de API, debemos tener en cuenta el control de versiones para que el proyecto escale.
* La gran ventaja es que podemos trabajar en nuevas funciones o mejoras en una nueva versión mientras los clientes todavía usan la versión actual y no se ven afectados por cambios importantes
* Tampoco obligamos a los clientes a usar la nueva versión de inmediato.
* Las versiones actual y nueva básicamente se ejecutan en paralelo y no se afectan entre sí.


Esta jerarquia de carpetas nos permite tener las routes donde accede el app.js en una carpeta v1.

Nota: Las demás carpetas quedan en src y no entran en la carpeta v1, ya que al ser un proyecto de menor escala, podemos utilizar tanto el controllador, el servicio, como la database, para las diferentes versiones.
```console
--src
  --controllers
  --database
  --services
  --v1
    --routes
    --index.js
  --app.js
```

## Nombre Recursos en Plural

Podríamos nombrar el punto final de creación /api/v1/workout porque nos gustaría agregar un entrenamiento, pero esto puede dar lugar a malentendidos.

* La API es utilizada por otros humanos y debe ser precisa, Esto también se aplica a los nombres de los recursos.
* Hay que imaginar un recurso como una caja. en este ejemplo, la caja es una colección que almacena diferentes entrenamientos.
* Nombrar sus recursos en plural tiene la gran ventaja de que es muy claro para otros humanos, que esta es una colección que consta de diferentes entrenamientos.