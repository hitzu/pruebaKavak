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
 * @api {Get} /tracks/:trackid
 * @apiName getTrackByID
 * @apiGroup Tracks
 * @apiPermission none
 * @apiDescription se obtiene el track por id
 * @apiParam { string } trackId 
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
 * @api {Get} /tracks/byAlbum/:albumId/:sort
 * @apiName getTrackByAlbum
 * @apiGroup Tracks
 * @apiPermission none
 * @apiDescription se obtiene el track por album
 * @apiParam { string } albumId 
 * @apiSuccess { json } se obtiene un track por id
 * @apiSuccessExample { json } Success
 * {
    "tracks": [
        {
            "id": 43,
            "title": "Beware My Wrath",
            "album": {
                "title": "To Hell"
            },
            "user": {
                "email": "cobra.rockmetal@gmail.com",
                "countrycode": "PE"
            }
        },
        {
            "id": 39,
            "title": "Beyond the Curse",
            "album": {
                "title": "To Hell"
            },
            "user": {
                "email": "cobra.rockmetal@gmail.com",
                "countrycode": "PE"
            }
        },
        {
            "id": 41,
            "title": "Danger Zone",
            "album": {
                "title": "To Hell"
            },
            "user": {
                "email": "cobra.rockmetal@gmail.com",
                "countrycode": "PE"
            }
        },
        {
            "id": 40,
            "title": "Fallen Soldier",
            "album": {
                "title": "To Hell"
            },
            "user": {
                "email": "cobra.rockmetal@gmail.com",
                "countrycode": "PE"
            }
        },
        {
            "id": 46,
            "title": "Inner Demon",
            "album": {
                "title": "To Hell"
            },
            "user": {
                "email": "cobra.rockmetal@gmail.com",
                "countrycode": "PE"
            }
        },
        {
            "id": 42,
            "title": "Rough Riders",
            "album": {
                "title": "To Hell"
            },
            "user": {
                "email": "cobra.rockmetal@gmail.com",
                "countrycode": "PE"
            }
        },
        {
            "id": 45,
            "title": "To Hell",
            "album": {
                "title": "To Hell"
            },
            "user": {
                "email": "cobra.rockmetal@gmail.com",
                "countrycode": "PE"
            }
        },
        {
            "id": 44,
            "title": "When I Walk the Streets",
            "album": {
                "title": "To Hell"
            },
            "user": {
                "email": "cobra.rockmetal@gmail.com",
                "countrycode": "PE"
            }
        }
    ]
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
    "track": [
        {
            "id": 1,
            "title": "Cuando pienso en ti",
            "album": {
                "title": "Amante"
            },
            "user": {
                "email": "desmandriba@yahoo.com",
                "countrycode": "PE"
            }
        },
        {
            "id": 2,
            "title": "Lo que no fue no será",
            "album": {
                "title": "Amante"
            },
            "user": {
                "email": "desmandriba@yahoo.com",
                "countrycode": "PE"
            }
        },
        {
            "id": 3,
            "title": "Ahora",
            "album": {
                "title": "Amante"
            },
            "user": {
                "email": "desmandriba@yahoo.com",
                "countrycode": "PE"
            }
        },
        {
            "id": 4,
            "title": "Almohada",
            "album": {
                "title": "Amante"
            },
            "user": {
                "email": "desmandriba@yahoo.com",
                "countrycode": "PE"
            }
        },
        {
            "id": 5,
            "title": "Cuando llegue la hora",
            "album": {
                "title": "Amante"
            },
            "user": {
                "email": "desmandriba@yahoo.com",
                "countrycode": "PE"
            }
        },
        {
            "id": 6,
            "title": "Mío",
            "album": {
                "title": "Amante"
            },
            "user": {
                "email": "desmandriba@yahoo.com",
                "countrycode": "PE"
            }
        },
        {
            "id": 7,
            "title": "Que somos amantes",
            "album": {
                "title": "Amante"
            },
            "user": {
                "email": "desmandriba@yahoo.com",
                "countrycode": "PE"
            }
        },
        {
            "id": 8,
            "title": "Cóncavo y convexo",
            "album": {
                "title": "Amante"
            },
            "user": {
                "email": "desmandriba@yahoo.com",
                "countrycode": "PE"
            }
        },
        {
            "id": 9,
            "title": "Aventurero",
            "album": {
                "title": "Amante"
            },
            "user": {
                "email": "desmandriba@yahoo.com",
                "countrycode": "PE"
            }
        },
        {
            "id": 10,
            "title": "Jamás impedirás",
            "album": {
                "title": "Amante"
            },
            "user": {
                "email": "desmandriba@yahoo.com",
                "countrycode": "PE"
            }
        },
        {
            "id": 32,
            "title": "El lagarto",
            "album": {
                "title": "After"
            },
            "user": {
                "email": "diegoreyes.bernardini@gmail.com",
                "countrycode": "PE"
            }
        },
        {
            "id": 33,
            "title": "Ghostbusters",
            "album": {
                "title": "After"
            },
            "user": {
                "email": "diegoreyes.bernardini@gmail.com",
                "countrycode": "PE"
            }
        },
        {
            "id": 34,
            "title": "Máncora",
            "album": {
                "title": "After"
            },
            "user": {
                "email": "diegoreyes.bernardini@gmail.com",
                "countrycode": "PE"
            }
        },
        {
            "id": 35,
            "title": "Mario Bross",
            "album": {
                "title": "After"
            },
            "user": {
                "email": "diegoreyes.bernardini@gmail.com",
                "countrycode": "PE"
            }
        },
        {
            "id": 36,
            "title": "Mingacho",
            "album": {
                "title": "After"
            },
            "user": {
                "email": "diegoreyes.bernardini@gmail.com",
                "countrycode": "PE"
            }
        },
        {
            "id": 37,
            "title": "Strikeforce",
            "album": {
                "title": "After"
            },
            "user": {
                "email": "diegoreyes.bernardini@gmail.com",
                "countrycode": "PE"
            }
        },
        {
            "id": 38,
            "title": "Payasito",
            "album": {
                "title": "After"
            },
            "user": {
                "email": "diegoreyes.bernardini@gmail.com",
                "countrycode": "PE"
            }
        },
        {
            "id": 39,
            "title": "Beyond the Curse",
            "album": {
                "title": "To Hell"
            },
            "user": {
                "email": "cobra.rockmetal@gmail.com",
                "countrycode": "PE"
            }
        },
        {
            "id": 40,
            "title": "Fallen Soldier",
            "album": {
                "title": "To Hell"
            },
            "user": {
                "email": "cobra.rockmetal@gmail.com",
                "countrycode": "PE"
            }
        },
        {
            "id": 41,
            "title": "Danger Zone",
            "album": {
                "title": "To Hell"
            },
            "user": {
                "email": "cobra.rockmetal@gmail.com",
                "countrycode": "PE"
            }
        },
        {
            "id": 42,
            "title": "Rough Riders",
            "album": {
                "title": "To Hell"
            },
            "user": {
                "email": "cobra.rockmetal@gmail.com",
                "countrycode": "PE"
            }
        },
        {
            "id": 43,
            "title": "Beware My Wrath",
            "album": {
                "title": "To Hell"
            },
            "user": {
                "email": "cobra.rockmetal@gmail.com",
                "countrycode": "PE"
            }
        },
        {
            "id": 44,
            "title": "When I Walk the Streets",
            "album": {
                "title": "To Hell"
            },
            "user": {
                "email": "cobra.rockmetal@gmail.com",
                "countrycode": "PE"
            }
        },
        {
            "id": 45,
            "title": "To Hell",
            "album": {
                "title": "To Hell"
            },
            "user": {
                "email": "cobra.rockmetal@gmail.com",
                "countrycode": "PE"
            }
        },
        {
            "id": 46,
            "title": "Inner Demon",
            "album": {
                "title": "To Hell"
            },
            "user": {
                "email": "cobra.rockmetal@gmail.com",
                "countrycode": "PE"
            }
        },
        {
            "id": 47,
            "title": "Overwhelmed",
            "album": {
                "title": "Lethal Strike"
            },
            "user": {
                "email": "cobra.rockmetal@gmail.com",
                "countrycode": "PE"
            }
        },
        {
            "id": 48,
            "title": "Rockmetal",
            "album": {
                "title": "Lethal Strike"
            },
            "user": {
                "email": "cobra.rockmetal@gmail.com",
                "countrycode": "PE"
            }
        },
        {
            "id": 49,
            "title": "Men of War",
            "album": {
                "title": "Lethal Strike"
            },
            "user": {
                "email": "cobra.rockmetal@gmail.com",
                "countrycode": "PE"
            }
        },
        {
            "id": 50,
            "title": "Whitechapel",
            "album": {
                "title": "Lethal Strike"
            },
            "user": {
                "email": "cobra.rockmetal@gmail.com",
                "countrycode": "PE"
            }
        },
        {
            "id": 51,
            "title": "The Roadrunner (Bite my Dust)",
            "album": {
                "title": "Lethal Strike"
            },
            "user": {
                "email": "cobra.rockmetal@gmail.com",
                "countrycode": "PE"
            }
        },
        {
            "id": 52,
            "title": "Denim Attack",
            "album": {
                "title": "Lethal Strike"
            },
            "user": {
                "email": "cobra.rockmetal@gmail.com",
                "countrycode": "PE"
            }
        },
        {
            "id": 53,
            "title": "Blessed by Beer",
            "album": {
                "title": "Lethal Strike"
            },
            "user": {
                "email": "cobra.rockmetal@gmail.com",
                "countrycode": "PE"
            }
        },
        {
            "id": 54,
            "title": "Scene of Our End",
            "album": {
                "title": "Lethal Strike"
            },
            "user": {
                "email": "cobra.rockmetal@gmail.com",
                "countrycode": "PE"
            }
        },
        {
            "id": 55,
            "title": "Highland Warrior",
            "album": {
                "title": "Lethal Strike"
            },
            "user": {
                "email": "cobra.rockmetal@gmail.com",
                "countrycode": "PE"
            }
        },
        {
            "id": 70,
            "title": "Don't You know Why",
            "album": {
                "title": "We Are Mercury"
            },
            "user": {
                "email": "mercury.musica@gmail.com",
                "countrycode": "CO"
            }
        },
        {
            "id": 71,
            "title": "Going On (Ft Purple Zippers)",
            "album": {
                "title": "We Are Mercury"
            },
            "user": {
                "email": "mercury.musica@gmail.com",
                "countrycode": "CO"
            }
        },
        {
            "id": 72,
            "title": "Jelly Beach",
            "album": {
                "title": "We Are Mercury"
            },
            "user": {
                "email": "mercury.musica@gmail.com",
                "countrycode": "CO"
            }
        },
        {
            "id": 73,
            "title": "Right Now",
            "album": {
                "title": "We Are Mercury"
            },
            "user": {
                "email": "mercury.musica@gmail.com",
                "countrycode": "CO"
            }
        },
        {
            "id": 77,
            "title": "Likeflow (Tropical Dance Music)",
            "album": {
                "title": "Likeflow (Tropical Dance Music)"
            },
            "user": {
                "email": "djcaile@outlook.com",
                "countrycode": "CL"
            }
        },
        {
            "id": 78,
            "title": "Cumbia Space (Digital Cumbia 2017)",
            "album": {
                "title": "Cumbia Space (Digital Cumbia 2017)"
            },
            "user": {
                "email": "djcaile@outlook.com",
                "countrycode": "CL"
            }
        }
    ]
}*/