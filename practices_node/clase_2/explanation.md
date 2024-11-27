Aqui vamos continuando

Vamos a hacer un HTTP para crear una API con Express

Vamos a darle


Entendamos que es un http

user entra con un dispositivo y hace una petición a unsitio

envia un request --->

Enviamos un GET cuando hacemos el request

Le enviamos url, headers, method (GET), body

Esto llega al servidor

Y se hace el proceso

Y lo regresa como una response en statusCode, headers, body

Revisemos el status code

100 - 199 Respuestas informativa
200 - 299 Respuestas satisfactorias
300 - 399 Redirecciones
400 - 499 Errores del cliente, es algo que el usuario busco mal
500 - 599 Errores del servidor

Status más famosos

200 OK
301 Moved Permanently
400 Bad Request
404 Not Found
500 Internal Server Error

Ahora vamos a usar Nodemon

Funciona bien pero carga y le impone carga y lo vuelve más lento

Ahora veamos los metodos

GET Para hacer una peticion para recuperar datos

HEAD Para hacer una petición pero sin mirar el body

POST Para crear una entidad de un  recurso

PUT para reemplazar un recurso

DELETE Borrar un recurso

OPTIONS quiero que me indiques con esta URL cuales son los modos de comunicacion contigo










