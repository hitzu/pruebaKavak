'use strict'
const Authenticator = require("../middlewares/authenticator")
const express = require('express');

const albumController = require("../controllers/album.controller");

var api = express.Router();

api.post('/',  Authenticator.authenticate("jwt",{session:false}), albumController.createAlbum);

api.put('/', Authenticator.authenticate("jwt",{session:false}), albumController.updateAlbum)

api.get('/genres', albumController.getAllGenres)
api.get('/byUserCountryAndGenre/:codeCountry/:genre/:sort', albumController.getAlbumByUserCountryAndGenre)
api.get('/:albumId', albumController.getAlbum)
module.exports = api;