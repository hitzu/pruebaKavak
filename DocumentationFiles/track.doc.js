/**
 * @api {POST} /track
 * @apiName createTrack
 * @apiGroup Tracks
 * @apiPermission JWT
 * @apiHeader { string } Authorization \"jwt \"+token
 * @apiDescription se crea un track y se asocia al usuario que hace la peticion
 * @apiParam { string } title 
 * @apiParam { string } artist 
 * @apiParam { string } isrc 
 * @apiParam { string } albumid 
 * @apiParam { string } genre 
 * @apiSuccess { json } se obtiene el album creado
 * @apiSuccessExample { json } Success
 * {
    "track": {
        "id": 83,
        "title": "Quiubole",
        "artist": "Banda Baston",
        "isrc": "PEBQ91400010",
        "albumid": 20848,
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
 * @api {Get} /tracks/getGenreAndAlbum/:sort
 * @apiName getTrackWhenTheAlbumIsGenreDiferent
 * @apiGroup Tracks
 * @apiPermission none
 * @apiDescription se obtienen los tracks donde el album es de un genero diferente
 * @apiParam { string } sort valores permitidos 'ASC' 'DESC' 
 * @apiSuccess { json } se obtiene los tracks con los filtros seleccionados
 * @apiSuccessExample { json } Success
 * {
    "tracks": [
        {
            "id": 1,
            "title": "Cuando pienso en ti",
            "artist": "Desiré Mandrile Ballón",
            "isrc": "PEDM11403001",
            "genre": "ROCK",
            "albumid": 14,
            "userid": 24,
            "album": {
                "id": 14,
                "title": "Amante",
                "artist": "Desiré Mandrile",
                "label": "Lupa",
                "upc": "634654350060",
                "genre": "R_B_SOUL",
                "status": true,
                "userid": 24
            }
        }
    ]
}*/

/**
 * @api {Get} /tracks/withOutArtist/:sort
 * @apiName getTracksWithOutArtist
 * @apiGroup Tracks
 * @apiPermission none
 * @apiDescription se obtienen los tracks que no tienen vinculado un artista
 * @apiParam { string } sort valores permitidos 'ASC' 'DESC' 
 * @apiSuccess { json } se obtiene los tracks con los filtros seleccionados
 * @apiSuccessExample { json } Success
 * {
    "tracks": [
        {
            "id": 78,
            "title": "Cumbia Space (Digital Cumbia 2017)",
            "artist": null,
            "isrc": "PEBQ91610734",
            "genre": "ELECTRONIC",
            "albumid": 10479,
            "userid": 195
        },
        {
            "id": 55,
            "title": "Highland Warrior",
            "artist": null,
            "isrc": "PEBQ91400372",
            "genre": "ROCK",
            "albumid": 142,
            "userid": 26
        },
        {
            "id": 2,
            "title": "Lo que no fue no será",
            "artist": null,
            "isrc": "PEDM11403002",
            "genre": "R_B_SOUL",
            "albumid": 14,
            "userid": 24
        },
        {
            "id": 44,
            "title": "When I Walk the Streets",
            "artist": null,
            "isrc": "PEBQ91400014",
            "genre": "ROCK",
            "albumid": 10,
            "userid": 26
        }
    ]
}*/


/**
 * @api {Put} /tracks/:trackId
 * @apiName updateTrackById
 * @apiGroup Tracks
 * @apiPermission JWT
 * @apiHeader { string } Authorization \"jwt \"+token
 * @apiDescription se actualiza el artist del track con el nombre del usuario solo si no existia un valor anterior
 * @apiSuccess { json } se obtiene los tracks actualizado
 * @apiSuccessExample { json } Success
 * {
    "tracks": true
}
* @apiError error
* @apiErrorExample { json } error
* HTTP/1.1 500 trying to update a correct track
* {
*  "error": "if you modify a track with artirts you screw up"
* } 
* */

/**
 * @api {Get} /tracks/:albumId
 * @apiName getTrackByID
 * @apiGroup Tracks
 * @apiPermission none
 * @apiDescription se obtiene el track por id
 * @apiParam { string } albumId 
 * @apiSuccess { json } se obtiene un track por id
 * @apiSuccessExample { json } Success
 * {
    "tracks": 
    {
        "id": 44,
        "title": "When I Walk the Streets",
        "artist": null,
        "isrc": "PEBQ91400014",
        "genre": "ROCK",
        "albumid": 10,
        "userid": 26
    } 
}*/


/**
 * @api {Get} /tracks/
 * @apiName getAllTracks
 * @apiGroup Tracks
 * @apiPermission none
 * @apiDescription se obtienen todos los tracks con su usuario
 * @apiSuccess { json } se obtiene los tracks 
 * @apiSuccessExample { json } Success
 * {
    "tracks": [
        {
            "id": 1,
            "title": "Cuando pienso en ti",
            "user": {
                "id": 24,
                "name": "Desire",
                "email": "desmandriba@yahoo.com",
                "countryCode": "PE",
                "status": false
            }
        },
        {
            "id": 2,
            "title": "Lo que no fue no será",
            "user": {
                "id": 24,
                "name": "Desire",
                "email": "desmandriba@yahoo.com",
                "countryCode": "PE",
                "status": false
            }
        },
        {
            "id": 3,
            "title": "Ahora",
            "user": {
                "id": 24,
                "name": "Desire",
                "email": "desmandriba@yahoo.com",
                "countryCode": "PE",
                "status": false
            }
        },
        {
            "id": 4,
            "title": "Almohada",
            "user": {
                "id": 24,
                "name": "Desire",
                "email": "desmandriba@yahoo.com",
                "countryCode": "PE",
                "status": false
            }
        },

        ....
    ]
}*/