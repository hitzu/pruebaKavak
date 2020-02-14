/**
 * @api {POST} /account/transfer Realizar una transaccion
 * @apiName Transferir Dinero
 * @apiGroup AccountsOperations
 * @apiPermission JWT
 * @apiHeader { string } Authorization \"jwt \"+token
 * @apiDescription Se transfiere dinero de una cuenta autentificada a otra cuenta valida
 * @apiParam { number } fromAccount cuenta autentificada con jwt
 * @apiParam { number } toAccount cuenta destino valida
 * @apiParam { number } amount cantidad a transferir
 *
 * @apiSuccess { json } transaction retorna un objeto con los datos de la transaccion realizada
 * @apiSuccessExample { json } Success
 * {
    "transaction": {
        "fromAccount": 987654321,
        "toAccount": 455947030,
        "amount": 500,
        "sentAt": "2020-02-14T16:37:51.445Z"
    }
 * }
 * @apiError permisoDenegado el token del usuario no pertenece a la cuenta
 * @apiErrorExample { json } permisoDenegado
 * HTTP/1.1 403  
 * {
 *  "error": "permisoDenegado no tienes privilegios sobre esta cuenta"
 * }
 * @apiError operacionInvalida el numero de cuenta destino no existe
 * @apiErrorExample { json } operacionInvalida
 * HTTP/1.1 403  
 * {
 *  "error": "operacionInvalida la cuenta destino no existe"
 * }
 * @apiError recursosInsuficientes la cuenta tiene menos de -500 
 * @apiErrorExample { json } recursosInsuficientes
 * HTTP/1.1 403  
 * {
 *  "error": "recursosInsuficientes, esta cuenta no tiene suficiente dinero"
 * }
 * @apiError Unauthorized token invalido
 * @apiErrorExample { json } Unauthorized
 * HTTP/1.1 401 Unauthorized 
 * {
 *  Unauthorized
 * }
 */


/**
 * @api {Get} /transactions/received Ver las transacciones recibidas
 * @apiName Transferencias recibidas
 * @apiGroup AccountsOperations
 * @apiPermission JWT
 * @apiHeader { string } Authorization \"jwt \"+token
 * @apiDescription Se obtienen las transferencias donde la cuenta ha recibido dinero en este caso la cuenta se obtiene a partir de la informacion
 * que se obtiene del jwt
 * @apiSuccess { array } transaction retorna un arreglo de objetos con los datos de las transacciones
 * @apiSuccessExample { json } Success
 * {
    "transactions": [
        {
            "fromAccount": 455947030,
            "toAccount": 987654321,
            "amount": 876.88,
            "sentAt": "2012-04-23T18:25:43.511Z"
        },
        {
            "fromAccount": 455947030,
            "toAccount": 987654321,
            "amount": 876.88,
            "sentAt": "2012-04-23T18:25:43.511Z"
        },
        {
            "fromAccount": 455947030,
            "toAccount": 987654321,
            "amount": 876.88,
            "sentAt": "2012-04-23T18:25:43.511Z"
        },
        {
            "fromAccount": 455947030,
            "toAccount": 987654321,
            "amount": 876.88,
            "sentAt": "2012-04-23T18:25:43.511Z"
        },
        {
            "fromAccount": 455947030,
            "toAccount": 987654321,
            "amount": 876.88,
            "sentAt": "2012-04-23T18:25:43.511Z"
        }
    ]
 *}
 * @apiError Unauthorized token invalido
 * @apiErrorExample { json } Unauthorized
 * HTTP/1.1 401 Unauthorized 
 * {
 *  Unauthorized
 * }
 * 
 */

 /**
 * @api {Get} /transactions/sent Ver las transacciones enviadas
 * @apiName Transferencias enviadas
 * @apiGroup AccountsOperations
 * @apiPermission JWT
 * @apiHeader { string } Authorization \"jwt \"+token
 * @apiDescription Se obtienen las transferencias donde la cuenta ha enviado dinero en este caso la cuenta se obtiene a partir de la informacion
 * que se obtiene del jwt
 * @apiSuccess { array } transaction retorna un arreglo de objetos con los datos de las transacciones 
 * @apiSuccessExample { json } Success
 * {
    "transactions": [
        {
            "fromAccount": 123456789,
            "toAccount": 455947030,
            "amount": 876.88,
            "sentAt": "2012-04-23T18:25:43.511Z"
        },
        {
            "fromAccount": 123456789,
            "toAccount": 455947030,
            "amount": 876.88,
            "sentAt": "2012-04-23T18:25:43.511Z"
        }
    ]
}
 * @apiError Unauthorized token invalido
 * @apiErrorExample { json } Unauthorized
 * HTTP/1.1 401 Unauthorized 
 * {
 *  Unauthorized
 * }
 * 
 */

 /**
 * @api {Get} /transactions Ver todas las transacciones de una cuenta
 * @apiName ver todas las transferencias
 * @apiGroup AccountsOperations
 * @apiPermission JWT
 * @apiHeader { string } Authorization \"jwt \"+token
 * @apiDescription Se obtienen las transferencias de la cuenta en este caso la cuenta se obtiene a partir de la informacion
 * que se obtiene del jwt
 * @apiSuccess { array } transaction retorna un arreglo de objetos con los datos de las transacciones 
 * @apiSuccessExample { json } Success
 * {
    "transactions": [
        {
            "fromAccount": 455947030,
            "toAccount": 987654321,
            "amount": 876.88,
            "sentAt": "2012-04-23T18:25:43.511Z"
        },
        {
            "fromAccount": 455947030,
            "toAccount": 987654321,
            "amount": 876.88,
            "sentAt": "2012-04-23T18:25:43.511Z"
        },
        {
            "fromAccount": 455947030,
            "toAccount": 987654321,
            "amount": 876.88,
            "sentAt": "2012-04-23T18:25:43.511Z"
        },
        {
            "fromAccount": 455947030,
            "toAccount": 987654321,
            "amount": 876.88,
            "sentAt": "2012-04-23T18:25:43.511Z"
        },
        {
            "fromAccount": 455947030,
            "toAccount": 987654321,
            "amount": 876.88,
            "sentAt": "2012-04-23T18:25:43.511Z"
        }
    ]
}
 * @apiError Unauthorized token invalido
 * @apiErrorExample { json } Unauthorized
 * HTTP/1.1 401 Unauthorized 
 * {
 *  Unauthorized
 * }
 * 
 */


 /**
 * @api {Get} /balance Ver el balance de una cuenta
 * @apiName Balance de la cuenta 
 * @apiGroup AccountsOperations
 * @apiPermission JWT
 * @apiHeader { string } Authorization \"jwt \"+token
 * @apiDescription Se obtienen el balance de la cuenta en este caso la cuenta se obtiene a partir de la informacion
 * que se obtiene del jwt
 * @apiSuccess { json } balance retorna un objeto con los datos de la cuenta
 * @apiSuccessExample { json } Success
 * {
    "balanceFound": {
        "account": 455947030,
        "balance": 100,
        "owner": 7612123456,
        "createdAt": "2012-04-23T18:25:43.511Z"
    }
 * }
 * @apiError Unauthorized token invalido
 * @apiErrorExample { json } Unauthorized
 * HTTP/1.1 401 Unauthorized 
 * {
 *  Unauthorized
 * }
 * 
 */