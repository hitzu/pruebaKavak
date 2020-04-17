'use strict'
const Authenticator = require("../middlewares/authenticator")
const express = require('express');

const trackController = require("../controllers/track.controller");

var api = express.Router();

api.post('/',  Authenticator.authenticate("jwt",{session:false}), trackController.createTrack);

api.get('/withOutArtist/:sort', trackController.getTracksWithOutArtist);

api.get('/getGenreAndAlbum/:sort', trackController.getGenreAndAlbum);

api.get('/', trackController.getAllTracks);




api.put('/:idTrack', Authenticator.authenticate("jwt",{session:false}), trackController.updateTrack);


module.exports = api;