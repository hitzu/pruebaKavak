/**
 * @api {POST} /users
 * @apiName createUser
 * @apiGroup Users
 * @apiPermission none
 * @apiDescription se crea un usuario
 * @apiParam { string } name 
 * @apiParam { string } email 
 * @apiParam { string } countryCode 
 * @apiSuccess { json } se obtiene el usuario creado
 * @apiSuccessExample { json } Success
 * {
    "user": {
        "status": true,
        "id": 197,
        "name": "Roberto",
        "email": "robert.torres.lopez@gmail.com",
        "countryCode": "PE"
    }
}*/

/**
 * @api {Put} /users/
 * @apiName updateUser
 * @apiGroup Users
 * @apiPermission JWT
 * @apiHeader { string } Authorization \"jwt \"+token
 * @apiDescription se asigna a 0 el estado de los usuarios que no tienen tracks o albumes
 * @apiSuccess { json } se obtienen los usuarios que se actualizado
 * @apiSuccessExample { json } Success
 * {
    "user": [
        {
            "id": 22,
            "name": "Felipe",
            "email": "mercury.musica@gmail.com",
            "countryCode": "CO",
            "status": false
        },
        {
            "id": 24,
            "name": "Desire",
            "email": "desmandriba@yahoo.com",
            "countryCode": "PE",
            "status": false
        },
        {
            "id": 26,
            "name": "Diego",
            "email": "cobra.rockmetal@gmail.com",
            "countryCode": "PE",
            "status": false
        },
        {
            "id": 42,
            "name": "Diego",
            "email": "diegoreyes.bernardini@gmail.com",
            "countryCode": "PE",
            "status": false
        },
        {
            "id": 195,
            "name": "Joel",
            "email": "djcaile@outlook.com",
            "countryCode": "CL",
            "status": false
        }
    ]
}
 * @apiError Unauthorized token invalido
 * @apiErrorExample { json } Unauthorized
 * HTTP/1.1 401 Unauthorized 
 * {
 *  Unauthorized
 * } 
 * */

 /**
 * @api {Get} /users/:userId
 * @apiName getAlbumByID
 * @apiGroup Albums
 * @apiPermission none
 * @apiDescription se obtiene el album por id
 * @apiParam { string } userId 
 * @apiSuccess { json } se obtiene un user por id
 * @apiSuccessExample { json } Success
 * {
    "user": {
        "id": 22,
        "name": "Felipe",
        "email": "mercury.musica@gmail.com",
        "countryCode": "CO",
        "status": false
    }
}
}*/