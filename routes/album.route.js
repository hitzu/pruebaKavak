'use strict'
const Authenticator = require("../middlewares/authenticator")
const express = require('express');

const albumController = require("../controllers/album.controller");

var api = express.Router();

api.post('/',  Authenticator.authenticate("jwt",{session:false}), albumController.createAlbum);

api.get('/byUserCountryAndGenre/:codeCountry/:genre/:sort', albumController.getAlbumByUserCountryAndGenre)

api.put('/', Authenticator.authenticate("jwt",{session:false}), albumController.updateAlbum)

module.exports = api;