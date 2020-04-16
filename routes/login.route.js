'use strict'
const express = require('express');
const LoginController = require("../controllers/login.controller");
var api = express.Router();
api.post('/', LoginController.logIn);
module.exports = api;