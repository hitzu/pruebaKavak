'use strict'
const express = require('express');
const Authenticator = require("../middlewares/authenticator")
const userController = require("../controllers/user.controller");

var api = express.Router();
api.post('/', userController.createUser);
api.put('/', Authenticator.authenticate("jwt",{session:false}), userController.updateUser)
api.get('/allUsers', userController.getAllUsers);
api.get('/:userId', userController.getUser);


module.exports = api;