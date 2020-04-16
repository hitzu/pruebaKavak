# Prueba Tecnica Para Kavak

Back End con NodeJs

## Instalacion

1. Clonar repositorio ` https://github.com/hitzu/PruebaAiontech.git `
2. Instalar todas las dependencias con ` npm install `
3. Levantar el servidor con ` npm start `

## Uso

Las peticiones a los recursos de la api son consumidas en 

`  http://localhost:3000/ `

Revisar la documentacion para consumir los recursos de la api en el documento 

` server/Documentacion/index.html  `

## Arquitectura del sistema

La prueba tecnica utiliza una arquitectura modelo vista controlador 

1. Modelo: carpeta ` models ` aqui se guardan todos los archivos de descripcion de los modelos de las bases de datos utilizados por sequelize.
2. Vista: carpeta ` routes ` almacena los archivos que describen las rutas para consumir los recursos de la api
3. Controlador: carpeta ` controllers ` contiene los archivos de los metodos que se ejecutan para devolver los recursos solicitados por los clientes

## Librerias externas

1. [ApiDoc](https://apidocjs.com/) : Crea la documentacion de RESTFUls web APIs
2. [sequelize](https://sequelize.org/) : ORM para MySql, permite mapear las estructuras de bases de datos y convertirlos objetos json
3. [nodemon](https://nodemon.io/) : Permite reiniciar automaticamente el servidor en cada cambio para un desarrollo mas rapido.


## License
[MIT](https://choosealicense.com/licenses/mit/)