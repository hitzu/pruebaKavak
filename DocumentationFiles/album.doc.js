/**
 * @api {POST} /albums
 * @apiName createAlbums
 * @apiGroup Albums
 * @apiPermission JWT
 * @apiHeader { string } Authorization \"jwt \"+token
 * @apiDescription se crea un album y se asocia al usuario que hace la peticion
 * @apiParam { string } title 
 * @apiParam { string } artist 
 * @apiParam { string } isrc 
 * @apiParam { string } upc 
 * @apiParam { string } genre 
 * @apiSuccess { json } se obtiene el album creado
 * @apiSuccessExample { json } Success
 * {
    "album": {
        "id": 20849,
        "title": "Quibole",
        "artist": "Luces Fantasma",
        "label": "All We Do Is Party",
        "upc": "634654350398",
        "genre": "RAP",
        "userid": 22
    }
}
 * @apiError Unauthorized token invalido
 * @apiErrorExample { json } Unauthorized
 * HTTP/1.1 401 Unauthorized 
 * {
 *  Unauthorized
 * } 
 * */

 /**
 * @api {Get} /albums/byUserCountryAndGenre/:countrycode/:genre/:sort
 * @apiName albumByContruAndGenre
 * @apiGroup Albums
 * @apiPermission none
 * @apiDescription se obtienen los albumes con filtros de pais y de genero
 * @apiParam { string } countrycode 
 * @apiParam { string } genre 
 * @apiParam { string } sort valores permitidos 'ASC' 'DESC' 
 * @apiSuccess { json } se obtiene los albumes con los filtros seleccionados
 * @apiSuccessExample { json } Success
 * {
    "albums": [
        {
            "id": 12,
            "title": "After",
            "artist": "Vanilla Funk",
            "label": "Independiente",
            "upc": "634654350398",
            "genre": "ROCK",
            "status": true,
            "userid": 42,
            "user": {
                "id": 42,
                "name": "Diego",
                "email": "diegoreyes.bernardini@gmail.com",
                "countryCode": "PE",
                "status": false
            }
        },
        {
            "id": 142,
            "title": "Lethal Strike",
            "artist": "Cobra",
            "label": "Austral Holocaust",
            "upc": "4250936511316",
            "genre": "ROCK",
            "status": true,
            "userid": 26,
            "user": {
                "id": 26,
                "name": "Diego",
                "email": "cobra.rockmetal@gmail.com",
                "countryCode": "PE",
                "status": false
            }
        },
        {
            "id": 10,
            "title": "To Hell",
            "artist": "Cobra",
            "label": "Austral Holocaust Productions",
            "upc": "4250936511415",
            "genre": "ROCK",
            "status": true,
            "userid": 26,
            "user": {
                "id": 26,
                "name": "Diego",
                "email": "cobra.rockmetal@gmail.com",
                "countryCode": "PE",
                "status": false
            }
        }
    ]
}*/

/**
 * @api {Get} /albums/:albumId
 * @apiName getAlbumByID
 * @apiGroup Albums
 * @apiPermission none
 * @apiDescription se obtiene el album por id
 * @apiParam { string } albumId 
 * @apiSuccess { json } se obtiene un album por id
 * @apiSuccessExample { json } Success
 * {
    "album": 
    {
        "id": 10,
        "title": "To Hell",
        "artist": "Cobra",
        "label": "Austral Holocaust Productions",
        "upc": "4250936511415",
        "genre": "ROCK",
        "status": true,
        "userid": 26,
        "user": {
            "id": 26,
            "name": "Diego",
            "email": "cobra.rockmetal@gmail.com",
            "countryCode": "PE",
            "status": false
        }
    } 
}*/


/**
 * @api {Put} /albums/
 * @apiName updateAlbum
 * @apiGroup Albums
 * @apiPermission JWT
 * @apiHeader { string } Authorization \"jwt \"+token
 * @apiDescription se asigna a 0 el estado de los albumes que no tienen tracks
 * @apiSuccess { json } se obtienen los albumes que se actualizado
 * @apiSuccessExample { json } Success
 * {
    "updateAlbum": [
        {
            "id": 4587,
            "title": "Tormenta",
            "artist": "Desire Mandrile",
            "label": null,
            "upc": "634654356031",
            "genre": "ALTERNATIVE",
            "status": false,
            "userid": 24
        },
        {
            "id": 8092,
            "title": "Indómitos",
            "artist": "Desire Mandrile ",
            "label": null,
            "upc": "634654363220",
            "genre": "POP",
            "status": false,
            "userid": 24
        },
        {
            "id": 20840,
            "title": "Intensidad",
            "artist": "Desire Mandrile",
            "label": "Independiente",
            "upc": "651973325548",
            "genre": "LATIN",
            "status": false,
            "userid": 24
        },
        {
            "id": 20841,
            "title": "title",
            "artist": "artist",
            "label": "isrc",
            "upc": "upc",
            "genre": "ROCK",
            "status": false,
            "userid": null
        },
        {
            "id": 20842,
            "title": "title",
            "artist": "artist",
            "label": "isrc",
            "upc": "upc",
            "genre": "ROCK",
            "status": false,
            "userid": null
        },
        {
            "id": 20843,
            "title": "title",
            "artist": "artist",
            "label": "isrc",
            "upc": "upc",
            "genre": "ROCK",
            "status": false,
            "userid": null
        },
        {
            "id": 20844,
            "title": "title",
            "artist": "artist",
            "label": "isrc",
            "upc": "upc",
            "genre": "ROCK",
            "status": false,
            "userid": null
        },
        {
            "id": 20845,
            "title": "title",
            "artist": "artist",
            "label": "isrc",
            "upc": "upc",
            "genre": "ROCK",
            "status": false,
            "userid": null
        },
        {
            "id": 20846,
            "title": "title",
            "artist": "artist",
            "label": "isrc",
            "upc": "upc",
            "genre": "ROCK",
            "status": false,
            "userid": null
        },
        {
            "id": 20847,
            "title": "title",
            "artist": "artist",
            "label": "isrc",
            "upc": "upc",
            "genre": "ROCK",
            "status": false,
            "userid": 22
        },
        {
            "id": 20848,
            "title": "Quibole",
            "artist": "Banda Baston",
            "label": "All We Do Is Party",
            "upc": "634654350398",
            "genre": "RAP",
            "status": false,
            "userid": 22
        },
        {
            "id": 20849,
            "title": "Quibole",
            "artist": "Luces Fantasma",
            "label": "All We Do Is Party",
            "upc": "634654350398",
            "genre": "RAP",
            "status": false,
            "userid": 22
        }
    ]
}*
 * @apiError Unauthorized token invalido
 * @apiErrorExample { json } Unauthorized
 * HTTP/1.1 401 Unauthorized 
 * {
 *  Unauthorized
 * } 
 * */