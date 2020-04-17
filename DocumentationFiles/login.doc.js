/**
 * @api {POST} /login
 * @apiName Login
 * @apiGroup loginServices
 * @apiPermission none
 * @apiDescription se valida si existe el email del usuario
 * @apiParam { string } email usuario a registrarse
 *
 * @apiSuccess { json } transaction retorna un objeto con los datos del usuario registrado y el token para endPoints con seguridad
 * @apiSuccessExample { json } Success
 * {
    "account": {
        "id": 22,
        "name": "Felipe",
        "email": "mercury.musica@gmail.com",
        "countryCode": "CO",
        "status": false
    },
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjIsImlhdCI6MTU4NzEzMDYwM30.wiOv9-xvMW_9p8VV5AzifmVvH_pAkkYKlmHmpgayapg"
}
 * @apiError usuarioNoEncontrado el numero de cuenta o el owner o la contraseña es incorrecta
 * @apiErrorExample { json } usuario invalido
 * HTTP/1.1 403 Unauthorized 
 * {
 *  "error": "invalidLogin"
 * }
 */