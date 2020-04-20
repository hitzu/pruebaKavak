'use strict'
const express = require('express');

const countryController = require("../controllers/country.controller");

var api = express.Router();

api.get('/all', countryController.getCountries)

module.exports = api;