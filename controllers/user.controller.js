'use strict'
const db = require("../models");
console.log(db.User)
const User = db.User
const Op = db.Sequelize.Op


const createUser = async (req,res)=>{
	try{
		
	}catch (error) {
		res.status(500).send({error:error.message})
	}
}

const updateUser = async (req,res)=>{
	try{
		
	}catch (error) {
		res.status(500).send({error:error.message})
	}
}

const getUser = (req,res)=>{
	try{
		
	}catch (error) {
		res.status(500).send({error:error.message})
	}
}

const getAllUsers = async (req,res)=>{
	try {
		const usersFound = await User.findAll()
		res.status(200).send({ user: usersFound })
	} catch (error) {
		res.status(500).send({error:error.message})
	}
}

const deleteUser = (req,res)=>{
	
}

const deleteAllUsers = (req,res)=>{
	
}



module.exports = {
	createUser,
	getAllUsers
}
