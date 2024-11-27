REST

Representations state transfer

REST es una arquitectura de software, no es un patron y suso para web applications para arquitectura de redes

Se creo en el 2000 por Roy Fielding y se usa de manera masiva para construir API

Vamos a ver los principos de REST

- Simplicidad
- Escalabilidad
- Portabilidad
- Visibilidad
- Fiabilidad
- Fácil de modificar

Se basa la arquitectura de software para crear cosas que se puedan mantener en el tiempo y que resuelva una necesidad especifica

FUNDAMENTOS

Recursos:
Por ejemplo un usuario, una colección, una lista, cada recurso se va a identificar con una URL

Verbos HTTP:
Definir operaciones que se puedan realizar como por ejemplo los CRUD

Representaciones:
Siempre se piensa que es un json pero no, puede tener múltiples represantaciones, aunque el más común es json

Stateless:
El servidor no debe mantener ningún estado entre solicitudes

Interfaz uniforme:
Que siempre llame de la misma manera, que las URL sea similares.

Separación de conceptos:
Permite que cliente y servidor puedan seguir creciendo de manera separada.


Pero importante

A veces puedes crear una API qwue no sea REST, puede ser SOAP

Una API puede ser una API y ya esta

POr ejemplo analizar GraphQL que no todo es REST


### Para la validación de Campos vamos a usar zod


