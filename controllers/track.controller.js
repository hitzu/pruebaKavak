'use strict'
const db = require("../models");
const { Track, User } = db
const Op = db.Sequelize.Op


const createUser = async (req,res)=>{
	try{
		const [name, email, country] = req.body

		const user = {
			name : name,
			email : email,
			country : country
		}

		User.create(user).then((req) => {
			res.status(200).send({ user: req }) })
	}catch (error) {
		res.status(500).send({error:error.message})
	}
}

const updateUser = (req,res)=>{
	
}

const getUser = (req,res)=>{
	
}

const getAllTracks = async (req,res)=>{
	try {
        console.log("entro jajaja")
		const tracksFound = await Track.findAll({
			include : ["users"]
		})
		res.status(200).send({ user: tracksFound })
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
	getAllTracks
}
