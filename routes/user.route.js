'use strict'
const express = require('express');

const userController = require("../controllers/user.controller");

var api = express.Router();
api.post('/', userController.createUser);
api.get('/allUsers', userController.getAllUsers);


module.exports = api;