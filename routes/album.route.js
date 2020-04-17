'use strict'
const express = require('express');

const albumController = require("../controllers/album.controller");

var api = express.Router();

api.get('/byUserCountryAndGenre/:codeCountry/:genre/:sort', albumController.getAlbumByUserCountryAndGenre)

module.exports = api;