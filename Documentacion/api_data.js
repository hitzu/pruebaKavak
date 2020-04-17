define({ "api": [
  {
    "type": "Get",
    "url": "/albums/byUserCountryAndGenre/:countrycode/:genre/:sort",
    "title": "",
    "name": "albumByContruAndGenre",
    "group": "Albums",
    "permission": [
      {
        "name": "none"
      }
    ],
    "description": "<p>se obtienen los albumes con filtros de pais y de genero</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "countrycode",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "genre",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "sort",
            "description": "<p>valores permitidos 'ASC' 'DESC'</p>"
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
            "field": "se",
            "description": "<p>obtiene los albumes con los filtros seleccionados</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success",
          "content": "{\n    \"albums\": [\n        {\n            \"id\": 12,\n            \"title\": \"After\",\n            \"artist\": \"Vanilla Funk\",\n            \"label\": \"Independiente\",\n            \"upc\": \"634654350398\",\n            \"genre\": \"ROCK\",\n            \"status\": true,\n            \"userid\": 42,\n            \"user\": {\n                \"id\": 42,\n                \"name\": \"Diego\",\n                \"email\": \"diegoreyes.bernardini@gmail.com\",\n                \"countryCode\": \"PE\",\n                \"status\": false\n            }\n        },\n        {\n            \"id\": 142,\n            \"title\": \"Lethal Strike\",\n            \"artist\": \"Cobra\",\n            \"label\": \"Austral Holocaust\",\n            \"upc\": \"4250936511316\",\n            \"genre\": \"ROCK\",\n            \"status\": true,\n            \"userid\": 26,\n            \"user\": {\n                \"id\": 26,\n                \"name\": \"Diego\",\n                \"email\": \"cobra.rockmetal@gmail.com\",\n                \"countryCode\": \"PE\",\n                \"status\": false\n            }\n        },\n        {\n            \"id\": 10,\n            \"title\": \"To Hell\",\n            \"artist\": \"Cobra\",\n            \"label\": \"Austral Holocaust Productions\",\n            \"upc\": \"4250936511415\",\n            \"genre\": \"ROCK\",\n            \"status\": true,\n            \"userid\": 26,\n            \"user\": {\n                \"id\": 26,\n                \"name\": \"Diego\",\n                \"email\": \"cobra.rockmetal@gmail.com\",\n                \"countryCode\": \"PE\",\n                \"status\": false\n            }\n        }\n    ]\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "DocumentationFiles/album.doc.js",
    "groupTitle": "Albums"
  },
  {
    "type": "POST",
    "url": "/albums",
    "title": "",
    "name": "createAlbums",
    "group": "Albums",
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
    "description": "<p>se crea un album y se asocia al usuario que hace la peticion</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "title",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "artist",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "isrc",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "upc",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "genre",
            "description": ""
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
            "field": "se",
            "description": "<p>obtiene el album creado</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success",
          "content": "{\n    \"album\": {\n        \"id\": 20849,\n        \"title\": \"Quibole\",\n        \"artist\": \"Luces Fantasma\",\n        \"label\": \"All We Do Is Party\",\n        \"upc\": \"634654350398\",\n        \"genre\": \"RAP\",\n        \"userid\": 22\n    }\n}",
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
    "filename": "DocumentationFiles/album.doc.js",
    "groupTitle": "Albums"
  },
  {
    "type": "Get",
    "url": "/albums/:albumId",
    "title": "",
    "name": "getAlbumByID",
    "group": "Albums",
    "permission": [
      {
        "name": "none"
      }
    ],
    "description": "<p>se obtiene el album por id</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "albumId",
            "description": ""
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
            "field": "se",
            "description": "<p>obtiene un album por id</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success",
          "content": "{\n    \"album\": \n    {\n        \"id\": 10,\n        \"title\": \"To Hell\",\n        \"artist\": \"Cobra\",\n        \"label\": \"Austral Holocaust Productions\",\n        \"upc\": \"4250936511415\",\n        \"genre\": \"ROCK\",\n        \"status\": true,\n        \"userid\": 26,\n        \"user\": {\n            \"id\": 26,\n            \"name\": \"Diego\",\n            \"email\": \"cobra.rockmetal@gmail.com\",\n            \"countryCode\": \"PE\",\n            \"status\": false\n        }\n    } \n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "DocumentationFiles/album.doc.js",
    "groupTitle": "Albums"
  },
  {
    "type": "Get",
    "url": "/users/:userId",
    "title": "",
    "name": "getAlbumByID",
    "group": "Albums",
    "permission": [
      {
        "name": "none"
      }
    ],
    "description": "<p>se obtiene el album por id</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "userId",
            "description": ""
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
            "field": "se",
            "description": "<p>obtiene un user por id</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success",
          "content": "{\n    \"user\": {\n        \"id\": 22,\n        \"name\": \"Felipe\",\n        \"email\": \"mercury.musica@gmail.com\",\n        \"countryCode\": \"CO\",\n        \"status\": false\n    }\n}\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "DocumentationFiles/user.doc.js",
    "groupTitle": "Albums"
  },
  {
    "type": "Put",
    "url": "/albums/",
    "title": "",
    "name": "updateAlbum",
    "group": "Albums",
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
    "description": "<p>se asigna a 0 el estado de los albumes que no tienen tracks</p>",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "se",
            "description": "<p>obtienen los albumes que se actualizado</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success",
          "content": "{\n    \"updateAlbum\": [\n        {\n            \"id\": 4587,\n            \"title\": \"Tormenta\",\n            \"artist\": \"Desire Mandrile\",\n            \"label\": null,\n            \"upc\": \"634654356031\",\n            \"genre\": \"ALTERNATIVE\",\n            \"status\": false,\n            \"userid\": 24\n        },\n        {\n            \"id\": 8092,\n            \"title\": \"Indómitos\",\n            \"artist\": \"Desire Mandrile \",\n            \"label\": null,\n            \"upc\": \"634654363220\",\n            \"genre\": \"POP\",\n            \"status\": false,\n            \"userid\": 24\n        },\n        {\n            \"id\": 20840,\n            \"title\": \"Intensidad\",\n            \"artist\": \"Desire Mandrile\",\n            \"label\": \"Independiente\",\n            \"upc\": \"651973325548\",\n            \"genre\": \"LATIN\",\n            \"status\": false,\n            \"userid\": 24\n        },\n        {\n            \"id\": 20841,\n            \"title\": \"title\",\n            \"artist\": \"artist\",\n            \"label\": \"isrc\",\n            \"upc\": \"upc\",\n            \"genre\": \"ROCK\",\n            \"status\": false,\n            \"userid\": null\n        },\n        {\n            \"id\": 20842,\n            \"title\": \"title\",\n            \"artist\": \"artist\",\n            \"label\": \"isrc\",\n            \"upc\": \"upc\",\n            \"genre\": \"ROCK\",\n            \"status\": false,\n            \"userid\": null\n        },\n        {\n            \"id\": 20843,\n            \"title\": \"title\",\n            \"artist\": \"artist\",\n            \"label\": \"isrc\",\n            \"upc\": \"upc\",\n            \"genre\": \"ROCK\",\n            \"status\": false,\n            \"userid\": null\n        },\n        {\n            \"id\": 20844,\n            \"title\": \"title\",\n            \"artist\": \"artist\",\n            \"label\": \"isrc\",\n            \"upc\": \"upc\",\n            \"genre\": \"ROCK\",\n            \"status\": false,\n            \"userid\": null\n        },\n        {\n            \"id\": 20845,\n            \"title\": \"title\",\n            \"artist\": \"artist\",\n            \"label\": \"isrc\",\n            \"upc\": \"upc\",\n            \"genre\": \"ROCK\",\n            \"status\": false,\n            \"userid\": null\n        },\n        {\n            \"id\": 20846,\n            \"title\": \"title\",\n            \"artist\": \"artist\",\n            \"label\": \"isrc\",\n            \"upc\": \"upc\",\n            \"genre\": \"ROCK\",\n            \"status\": false,\n            \"userid\": null\n        },\n        {\n            \"id\": 20847,\n            \"title\": \"title\",\n            \"artist\": \"artist\",\n            \"label\": \"isrc\",\n            \"upc\": \"upc\",\n            \"genre\": \"ROCK\",\n            \"status\": false,\n            \"userid\": 22\n        },\n        {\n            \"id\": 20848,\n            \"title\": \"Quibole\",\n            \"artist\": \"Banda Baston\",\n            \"label\": \"All We Do Is Party\",\n            \"upc\": \"634654350398\",\n            \"genre\": \"RAP\",\n            \"status\": false,\n            \"userid\": 22\n        },\n        {\n            \"id\": 20849,\n            \"title\": \"Quibole\",\n            \"artist\": \"Luces Fantasma\",\n            \"label\": \"All We Do Is Party\",\n            \"upc\": \"634654350398\",\n            \"genre\": \"RAP\",\n            \"status\": false,\n            \"userid\": 22\n        }\n    ]\n}*",
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
    "filename": "DocumentationFiles/album.doc.js",
    "groupTitle": "Albums"
  },
  {
    "type": "POST",
    "url": "/track",
    "title": "",
    "name": "createTrack",
    "group": "Tracks",
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
    "description": "<p>se crea un track y se asocia al usuario que hace la peticion</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "title",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "artist",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "isrc",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "albumid",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "genre",
            "description": ""
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
            "field": "se",
            "description": "<p>obtiene el album creado</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success",
          "content": "{\n    \"track\": {\n        \"id\": 83,\n        \"title\": \"Quiubole\",\n        \"artist\": \"Banda Baston\",\n        \"isrc\": \"PEBQ91400010\",\n        \"albumid\": 20848,\n        \"genre\": \"RAP\",\n        \"userid\": 22\n    }\n}",
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
    "filename": "DocumentationFiles/track.doc.js",
    "groupTitle": "Tracks"
  },
  {
    "type": "Get",
    "url": "/tracks/",
    "title": "",
    "name": "getAllTracks",
    "group": "Tracks",
    "permission": [
      {
        "name": "none"
      }
    ],
    "description": "<p>se obtienen todos los tracks con su usuario</p>",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "se",
            "description": "<p>obtiene los tracks</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success",
          "content": "{\n    \"tracks\": [\n        {\n            \"id\": 1,\n            \"title\": \"Cuando pienso en ti\",\n            \"user\": {\n                \"id\": 24,\n                \"name\": \"Desire\",\n                \"email\": \"desmandriba@yahoo.com\",\n                \"countryCode\": \"PE\",\n                \"status\": false\n            }\n        },\n        {\n            \"id\": 2,\n            \"title\": \"Lo que no fue no será\",\n            \"user\": {\n                \"id\": 24,\n                \"name\": \"Desire\",\n                \"email\": \"desmandriba@yahoo.com\",\n                \"countryCode\": \"PE\",\n                \"status\": false\n            }\n        },\n        {\n            \"id\": 3,\n            \"title\": \"Ahora\",\n            \"user\": {\n                \"id\": 24,\n                \"name\": \"Desire\",\n                \"email\": \"desmandriba@yahoo.com\",\n                \"countryCode\": \"PE\",\n                \"status\": false\n            }\n        },\n        {\n            \"id\": 4,\n            \"title\": \"Almohada\",\n            \"user\": {\n                \"id\": 24,\n                \"name\": \"Desire\",\n                \"email\": \"desmandriba@yahoo.com\",\n                \"countryCode\": \"PE\",\n                \"status\": false\n            }\n        },\n\n        ....\n    ]\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "DocumentationFiles/track.doc.js",
    "groupTitle": "Tracks"
  },
  {
    "type": "Get",
    "url": "/tracks/:albumId",
    "title": "",
    "name": "getTrackByID",
    "group": "Tracks",
    "permission": [
      {
        "name": "none"
      }
    ],
    "description": "<p>se obtiene el track por id</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "albumId",
            "description": ""
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
            "field": "se",
            "description": "<p>obtiene un track por id</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success",
          "content": "{\n    \"tracks\": \n    {\n        \"id\": 44,\n        \"title\": \"When I Walk the Streets\",\n        \"artist\": null,\n        \"isrc\": \"PEBQ91400014\",\n        \"genre\": \"ROCK\",\n        \"albumid\": 10,\n        \"userid\": 26\n    } \n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "DocumentationFiles/track.doc.js",
    "groupTitle": "Tracks"
  },
  {
    "type": "Get",
    "url": "/tracks/getGenreAndAlbum/:sort",
    "title": "",
    "name": "getTrackWhenTheAlbumIsGenreDiferent",
    "group": "Tracks",
    "permission": [
      {
        "name": "none"
      }
    ],
    "description": "<p>se obtienen los tracks donde el album es de un genero diferente</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "sort",
            "description": "<p>valores permitidos 'ASC' 'DESC'</p>"
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
            "field": "se",
            "description": "<p>obtiene los tracks con los filtros seleccionados</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success",
          "content": "{\n    \"tracks\": [\n        {\n            \"id\": 1,\n            \"title\": \"Cuando pienso en ti\",\n            \"artist\": \"Desiré Mandrile Ballón\",\n            \"isrc\": \"PEDM11403001\",\n            \"genre\": \"ROCK\",\n            \"albumid\": 14,\n            \"userid\": 24,\n            \"album\": {\n                \"id\": 14,\n                \"title\": \"Amante\",\n                \"artist\": \"Desiré Mandrile\",\n                \"label\": \"Lupa\",\n                \"upc\": \"634654350060\",\n                \"genre\": \"R_B_SOUL\",\n                \"status\": true,\n                \"userid\": 24\n            }\n        }\n    ]\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "DocumentationFiles/track.doc.js",
    "groupTitle": "Tracks"
  },
  {
    "type": "Get",
    "url": "/tracks/withOutArtist/:sort",
    "title": "",
    "name": "getTracksWithOutArtist",
    "group": "Tracks",
    "permission": [
      {
        "name": "none"
      }
    ],
    "description": "<p>se obtienen los tracks que no tienen vinculado un artista</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "sort",
            "description": "<p>valores permitidos 'ASC' 'DESC'</p>"
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
            "field": "se",
            "description": "<p>obtiene los tracks con los filtros seleccionados</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success",
          "content": "{\n    \"tracks\": [\n        {\n            \"id\": 78,\n            \"title\": \"Cumbia Space (Digital Cumbia 2017)\",\n            \"artist\": null,\n            \"isrc\": \"PEBQ91610734\",\n            \"genre\": \"ELECTRONIC\",\n            \"albumid\": 10479,\n            \"userid\": 195\n        },\n        {\n            \"id\": 55,\n            \"title\": \"Highland Warrior\",\n            \"artist\": null,\n            \"isrc\": \"PEBQ91400372\",\n            \"genre\": \"ROCK\",\n            \"albumid\": 142,\n            \"userid\": 26\n        },\n        {\n            \"id\": 2,\n            \"title\": \"Lo que no fue no será\",\n            \"artist\": null,\n            \"isrc\": \"PEDM11403002\",\n            \"genre\": \"R_B_SOUL\",\n            \"albumid\": 14,\n            \"userid\": 24\n        },\n        {\n            \"id\": 44,\n            \"title\": \"When I Walk the Streets\",\n            \"artist\": null,\n            \"isrc\": \"PEBQ91400014\",\n            \"genre\": \"ROCK\",\n            \"albumid\": 10,\n            \"userid\": 26\n        }\n    ]\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "DocumentationFiles/track.doc.js",
    "groupTitle": "Tracks"
  },
  {
    "type": "Put",
    "url": "/tracks/:trackId",
    "title": "",
    "name": "updateTrackById",
    "group": "Tracks",
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
    "description": "<p>se actualiza el artist del track con el nombre del usuario solo si no existia un valor anterior</p>",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "se",
            "description": "<p>obtiene los tracks actualizado</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success",
          "content": "{\n    \"tracks\": true\n}",
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
            "field": "error",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "error",
          "content": "HTTP/1.1 500 trying to update a correct track\n{\n \"error\": \"if you modify a track with artirts you screw up\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "DocumentationFiles/track.doc.js",
    "groupTitle": "Tracks"
  },
  {
    "type": "POST",
    "url": "/users",
    "title": "",
    "name": "createUser",
    "group": "Users",
    "permission": [
      {
        "name": "none"
      }
    ],
    "description": "<p>se crea un usuario</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "name",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "email",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "countryCode",
            "description": ""
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
            "field": "se",
            "description": "<p>obtiene el usuario creado</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success",
          "content": "{\n    \"user\": {\n        \"status\": true,\n        \"id\": 197,\n        \"name\": \"Roberto\",\n        \"email\": \"robert.torres.lopez@gmail.com\",\n        \"countryCode\": \"PE\"\n    }\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "DocumentationFiles/user.doc.js",
    "groupTitle": "Users"
  },
  {
    "type": "Put",
    "url": "/users/",
    "title": "",
    "name": "updateUser",
    "group": "Users",
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
    "description": "<p>se asigna a 0 el estado de los usuarios que no tienen tracks o albumes</p>",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "se",
            "description": "<p>obtienen los usuarios que se actualizado</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success",
          "content": "{\n    \"user\": [\n        {\n            \"id\": 22,\n            \"name\": \"Felipe\",\n            \"email\": \"mercury.musica@gmail.com\",\n            \"countryCode\": \"CO\",\n            \"status\": false\n        },\n        {\n            \"id\": 24,\n            \"name\": \"Desire\",\n            \"email\": \"desmandriba@yahoo.com\",\n            \"countryCode\": \"PE\",\n            \"status\": false\n        },\n        {\n            \"id\": 26,\n            \"name\": \"Diego\",\n            \"email\": \"cobra.rockmetal@gmail.com\",\n            \"countryCode\": \"PE\",\n            \"status\": false\n        },\n        {\n            \"id\": 42,\n            \"name\": \"Diego\",\n            \"email\": \"diegoreyes.bernardini@gmail.com\",\n            \"countryCode\": \"PE\",\n            \"status\": false\n        },\n        {\n            \"id\": 195,\n            \"name\": \"Joel\",\n            \"email\": \"djcaile@outlook.com\",\n            \"countryCode\": \"CL\",\n            \"status\": false\n        }\n    ]\n}",
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
    "filename": "DocumentationFiles/user.doc.js",
    "groupTitle": "Users"
  },
  {
    "type": "POST",
    "url": "/login",
    "title": "",
    "name": "Login",
    "group": "loginServices",
    "permission": [
      {
        "name": "none"
      }
    ],
    "description": "<p>se valida si existe el email del usuario</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "email",
            "description": "<p>usuario a registrarse</p>"
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
            "description": "<p>retorna un objeto con los datos del usuario registrado y el token para endPoints con seguridad</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success",
          "content": "{\n    \"account\": {\n        \"id\": 22,\n        \"name\": \"Felipe\",\n        \"email\": \"mercury.musica@gmail.com\",\n        \"countryCode\": \"CO\",\n        \"status\": false\n    },\n    \"token\": \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjIsImlhdCI6MTU4NzEzMDYwM30.wiOv9-xvMW_9p8VV5AzifmVvH_pAkkYKlmHmpgayapg\"\n}",
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
    "filename": "DocumentationFiles/login.doc.js",
    "groupTitle": "loginServices"
  }
] });
