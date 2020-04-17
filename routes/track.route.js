'use strict'
const Authenticator = require("../middlewares/authenticator")
const express = require('express');

const trackController = require("../controllers/track.controller");

var api = express.Router();

api.get('/withOutArtist/:sort', trackController.getTracksWithOutArtist);

api.get('/', trackController.getAllTracks);




api.put('/:idTrack', Authenticator.authenticate("jwt",{session:false}), trackController.updateTrack);


module.exports = api;