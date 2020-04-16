'use strict'
const express = require('express');

const trackController = require("../controllers/track.controller");

var api = express.Router();

api.get('/all', trackController.getAllTracks);


module.exports = api;