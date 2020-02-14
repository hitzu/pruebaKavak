/**
 * @api {POST} /login/ Obtener token para autenticar
 * @apiName Login
 * @apiGroup RegisterLogin
 * @apiDescription En el archivo /Data/acounts.js podemos obtener el owner y 
 * el password de la cuenta
 * @apiParam { number } user puede ser el account o el owner
 * @apiParam { string } password password de la cuenta 
 *
 * @apiSuccess { json } account retorna un objeto con los datos de la cuenta y el token correspondiente
 * @apiSuccessExample { json } Success
 * {
    "account": [
        {
            "account": 987654321,
            "balance": 45450,
            "owner": 7612338352,
            "password": "123456",
            "createdAt": "2012-04-23T18:25:43.511Z"
        }
    ],
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NzYxMjMzODM1MiwiaWF0IjoxNTgxNjk2MzE5fQ.THJCB6VzuN47exq7VSXHkXcwpmwGbsxM9sGENMScOyU"
 *}
 * @apiError usuarioNoEncontrado el numero de cuenta o el owner o la contraseña es incorrecta
 * @apiErrorExample { json } usuario invalido
 * HTTP/1.1 403 Unauthorized 
 * {
 *  "error": "invalidLogin"
 * }
 */