define({ "api": [
  {
    "type": "Get",
    "url": "/balance",
    "title": "Ver el balance de una cuenta",
    "name": "Balance_de_la_cuenta",
    "group": "AccountsOperations",
    "permission": [
      {
        "name": "JWT"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Authorization",
            "description": "<p>&quot;jwt &quot;+token</p>"
          }
        ]
      }
    },
    "description": "<p>Se obtienen el balance de la cuenta en este caso la cuenta se obtiene a partir de la informacion que se obtiene del jwt</p>",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "balance",
            "description": "<p>retorna un objeto con los datos de la cuenta</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success",
          "content": "{\n    \"balance\": [\n        {\n            \"account\": 455947030,\n            \"balance\": 100,\n            \"owner\": 7612123456,\n            \"password\": \"123456\",\n            \"createdAt\": \"2012-04-23T18:25:43.511Z\"\n        }\n    ]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Unauthorized",
            "description": "<p>token invalido</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Unauthorized",
          "content": "HTTP/1.1 401 Unauthorized \n{\n Unauthorized\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "server/DocumentationFiles/account.doc.js",
    "groupTitle": "AccountsOperations"
  },
  {
    "type": "Get",
    "url": "/transactions/sent",
    "title": "Ver las transacciones enviadas",
    "name": "Transferencias_enviadas",
    "group": "AccountsOperations",
    "permission": [
      {
        "name": "JWT"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Authorization",
            "description": "<p>&quot;jwt &quot;+token</p>"
          }
        ]
      }
    },
    "description": "<p>Se obtienen las transferencias donde la cuenta ha enviado dinero en este caso la cuenta se obtiene a partir de la informacion que se obtiene del jwt</p>",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "array",
            "optional": false,
            "field": "transaction",
            "description": "<p>retorna un arreglo de objetos con los datos de las transacciones</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success",
          "content": "{\n    \"transactions\": [\n        {\n            \"fromAccount\": 123456789,\n            \"toAccount\": 455947030,\n            \"amount\": 876.88,\n            \"sentAt\": \"2012-04-23T18:25:43.511Z\"\n        },\n        {\n            \"fromAccount\": 123456789,\n            \"toAccount\": 455947030,\n            \"amount\": 876.88,\n            \"sentAt\": \"2012-04-23T18:25:43.511Z\"\n        }\n    ]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Unauthorized",
            "description": "<p>token invalido</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Unauthorized",
          "content": "HTTP/1.1 401 Unauthorized \n{\n Unauthorized\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "server/DocumentationFiles/account.doc.js",
    "groupTitle": "AccountsOperations"
  },
  {
    "type": "Get",
    "url": "/transactions/received",
    "title": "Ver las transacciones recibidas",
    "name": "Transferencias_recibidas",
    "group": "AccountsOperations",
    "permission": [
      {
        "name": "JWT"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Authorization",
            "description": "<p>&quot;jwt &quot;+token</p>"
          }
        ]
      }
    },
    "description": "<p>Se obtienen las transferencias donde la cuenta ha recibido dinero en este caso la cuenta se obtiene a partir de la informacion que se obtiene del jwt</p>",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "array",
            "optional": false,
            "field": "transaction",
            "description": "<p>retorna un arreglo de objetos con los datos de las transacciones</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success",
          "content": "{\n    \"transactions\": [\n        {\n            \"fromAccount\": 455947030,\n            \"toAccount\": 987654321,\n            \"amount\": 876.88,\n            \"sentAt\": \"2012-04-23T18:25:43.511Z\"\n        },\n        {\n            \"fromAccount\": 455947030,\n            \"toAccount\": 987654321,\n            \"amount\": 876.88,\n            \"sentAt\": \"2012-04-23T18:25:43.511Z\"\n        },\n        {\n            \"fromAccount\": 455947030,\n            \"toAccount\": 987654321,\n            \"amount\": 876.88,\n            \"sentAt\": \"2012-04-23T18:25:43.511Z\"\n        },\n        {\n            \"fromAccount\": 455947030,\n            \"toAccount\": 987654321,\n            \"amount\": 876.88,\n            \"sentAt\": \"2012-04-23T18:25:43.511Z\"\n        },\n        {\n            \"fromAccount\": 455947030,\n            \"toAccount\": 987654321,\n            \"amount\": 876.88,\n            \"sentAt\": \"2012-04-23T18:25:43.511Z\"\n        }\n    ]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Unauthorized",
            "description": "<p>token invalido</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Unauthorized",
          "content": "HTTP/1.1 401 Unauthorized \n{\n Unauthorized\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "server/DocumentationFiles/account.doc.js",
    "groupTitle": "AccountsOperations"
  },
  {
    "type": "POST",
    "url": "/account/transfer",
    "title": "Realizar una transaccion",
    "name": "Transferir_Dinero",
    "group": "AccountsOperations",
    "permission": [
      {
        "name": "JWT"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Authorization",
            "description": "<p>&quot;jwt &quot;+token</p>"
          }
        ]
      }
    },
    "description": "<p>Se transfiere dinero de una cuenta autentificada a otra cuenta valida</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "fromAccount",
            "description": "<p>cuenta autentificada con jwt</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "toAccount",
            "description": "<p>cuenta destino valida</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "amount",
            "description": "<p>cantidad a transferir</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "transaction",
            "description": "<p>retorna un objeto con los datos de la transaccion realizada</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success",
          "content": "{\n    \"transaction\": {\n        \"fromAccount\": 987654321,\n        \"toAccount\": 455947030,\n        \"amount\": 500,\n        \"sentAt\": \"2020-02-14T16:37:51.445Z\"\n    }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "permisoDenegado",
            "description": "<p>el token del usuario no pertenece a la cuenta</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "operacionInvalida",
            "description": "<p>el numero de cuenta destino no existe</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "recursosInsuficientes",
            "description": "<p>la cuenta tiene menos de -500</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Unauthorized",
            "description": "<p>token invalido</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "permisoDenegado",
          "content": "HTTP/1.1 403  \n{\n \"error\": \"permisoDenegado no tienes privilegios sobre esta cuenta\"\n}",
          "type": "json"
        },
        {
          "title": "usuario invalido",
          "content": "HTTP/1.1 403  \n{\n \"error\": \"operacionInvalida la cuenta destino no existe\"\n}",
          "type": "json"
        },
        {
          "title": "usuario invalido",
          "content": "HTTP/1.1 403  \n{\n \"error\": \"recursosInsuficientes, esta cuenta no tiene suficiente dinero\"\n}",
          "type": "json"
        },
        {
          "title": "Unauthorized",
          "content": "HTTP/1.1 401 Unauthorized \n{\n Unauthorized\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "server/DocumentationFiles/account.doc.js",
    "groupTitle": "AccountsOperations"
  },
  {
    "type": "Get",
    "url": "/transactions",
    "title": "Ver todas las transacciones de una cuenta",
    "name": "ver_todas_las_transferencias",
    "group": "AccountsOperations",
    "permission": [
      {
        "name": "JWT"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Authorization",
            "description": "<p>&quot;jwt &quot;+token</p>"
          }
        ]
      }
    },
    "description": "<p>Se obtienen las transferencias de la cuenta en este caso la cuenta se obtiene a partir de la informacion que se obtiene del jwt</p>",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "array",
            "optional": false,
            "field": "transaction",
            "description": "<p>retorna un arreglo de objetos con los datos de las transacciones</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success",
          "content": "{\n    \"transactions\": [\n        {\n            \"fromAccount\": 455947030,\n            \"toAccount\": 987654321,\n            \"amount\": 876.88,\n            \"sentAt\": \"2012-04-23T18:25:43.511Z\"\n        },\n        {\n            \"fromAccount\": 455947030,\n            \"toAccount\": 987654321,\n            \"amount\": 876.88,\n            \"sentAt\": \"2012-04-23T18:25:43.511Z\"\n        },\n        {\n            \"fromAccount\": 455947030,\n            \"toAccount\": 987654321,\n            \"amount\": 876.88,\n            \"sentAt\": \"2012-04-23T18:25:43.511Z\"\n        },\n        {\n            \"fromAccount\": 455947030,\n            \"toAccount\": 987654321,\n            \"amount\": 876.88,\n            \"sentAt\": \"2012-04-23T18:25:43.511Z\"\n        },\n        {\n            \"fromAccount\": 455947030,\n            \"toAccount\": 987654321,\n            \"amount\": 876.88,\n            \"sentAt\": \"2012-04-23T18:25:43.511Z\"\n        }\n    ]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Unauthorized",
            "description": "<p>token invalido</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Unauthorized",
          "content": "HTTP/1.1 401 Unauthorized \n{\n Unauthorized\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "server/DocumentationFiles/account.doc.js",
    "groupTitle": "AccountsOperations"
  },
  {
    "type": "POST",
    "url": "/login/",
    "title": "Obtener token para autenticar",
    "name": "Login",
    "group": "RegisterLogin",
    "description": "<p>En el archivo /Data/acounts.js podemos obtener el owner y el password de la cuenta</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "user",
            "description": "<p>puede ser el account o el owner</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "password",
            "description": "<p>password de la cuenta</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "account",
            "description": "<p>retorna un objeto con los datos de la cuenta y el token correspondiente</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success",
          "content": "{\n    \"account\": [\n        {\n            \"account\": 987654321,\n            \"balance\": 45450,\n            \"owner\": 7612338352,\n            \"password\": \"123456\",\n            \"createdAt\": \"2012-04-23T18:25:43.511Z\"\n        }\n    ],\n    \"token\": \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NzYxMjMzODM1MiwiaWF0IjoxNTgxNjk2MzE5fQ.THJCB6VzuN47exq7VSXHkXcwpmwGbsxM9sGENMScOyU\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "usuarioNoEncontrado",
            "description": "<p>el numero de cuenta o el owner o la contraseña es incorrecta</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "usuario invalido",
          "content": "HTTP/1.1 403 Unauthorized \n{\n \"error\": \"invalidLogin\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "server/DocumentationFiles/login.doc.js",
    "groupTitle": "RegisterLogin"
  }
] });
