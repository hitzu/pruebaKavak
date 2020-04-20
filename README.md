# Prueba Tecnica Para Kavak

Back End con NodeJs y MySql

## Instalacion

1. Migrar db_musical.sql <- IMPORTANTE "Sequelize actualiza el nombre de las tablas a sus plurales, por eso se actualizo "country" a "countries"
2. Clonar repositorio ` https://github.com/hitzu/pruebaKavak.git `
3. Instalar todas las dependencias con ` npm install `
4. Levantar el servidor con ` npm start `

## Uso

Las peticiones a los recursos de la api son consumidas en 

`  http://localhost:3000/ `


## Arquitectura del sistema

La prueba tecnica utiliza una arquitectura modelo vista controlador 

1. Modelo: carpeta ` models ` aqui se guardan todos los archivos de descripcion de los modelos de las bases de datos utilizados por sequelize.
2. Vista: carpeta ` routes ` almacena los archivos que describen las rutas para consumir los recursos de la api
3. Controlador: carpeta ` controllers ` contiene los archivos de los metodos que se ejecutan para devolver los recursos solicitados por los clientes

## EndPoints sobresalientes 

Login
`Post http://localhost:3000/login `

List all albums from Peru that which genre is ROCK.
`Get http://localhost:3000/albums/byUserCountryAndGenre/PE/ROCK/ASC`

Find any track that does not have artist and update it with the user name, only
tracks without artist if you modify other tracks you screw up.

Get tracks without artist
`Get http://localhost:3000/tracks/withOutArtist/ASC`

jwt security -> update track by id, only update the artist if the track doesnt have it
`Put http://localhost:3000/tracks/2`

jwt security -> Set status 0 to any album which not have tracks and show them
`Put http://localhost:3000/albums/`

jwt security -> Set status 0 to any user which not have track or albums and show them
`Put http://localhost:3000/users/`

List all tracks that here genre is different to genre of here album
`Get http://localhost:3000/tracks/getGenreAndAlbum/ASC`

Revisar la documentacion para profundizar en los recursos del api en el documento 

` Documentacion/index.html  `


## Librerias externas

1. [ApiDoc](https://apidocjs.com/) : Crea la documentacion de RESTFUls web APIs
2. [sequelize](https://sequelize.org/) : ORM para MySql, permite mapear las estructuras de bases de datos y convertirlos objetos json
3. [nodemon](https://nodemon.io/) : Permite reiniciar automaticamente el servidor en cada cambio para un desarrollo mas rapido.
4. [passportjs](http://www.passportjs.org/) : Administrador de estrategias de seguridad
5. [passport-jwt](http://www.passportjs.org/packages/passport-jwt/) : Permite crear las estrategias de autenticacion por token


## License
[MIT](https://choosealicense.com/licenses/mit/)