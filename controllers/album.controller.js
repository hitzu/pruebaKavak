'use strict'
const db = require("../models");
const { Album, User } = db
const Op = db.Sequelize.Op


const createAlbum = async (req,res)=>{
	try{
		
	}catch (error) {
		res.status(500).send({error:error.message})
	}
}

const updateAlbum = (req,res)=>{
	
}

const getAlbum = (req,res)=>{
	
}

const getAlbumByUserCountryAndGenre = async (req,res)=>{
	try {
		const {codeCountry, genre, sort} = req.params
		
		if (sort != 'ASC' && sort != 'DESC'){
			throw {message : "order dont allow "}
		}

		const userFound = await User.findAll(
		{
			where : {countryCode : codeCountry},
			attributes: ['id']
		})
		const userId = userFound.map(user => user.id)
		
		const albumsFounds = await Album.findAll({
			where : {
				userid : userId,
				genre : genre,
			},
			order: [ ['title', sort] ],
			include : [{
				model : "usersid",
				required: false },
			],
		})

		res.status(200).send({ albums: albumsFounds })
	} catch (error) {
		res.status(500).send({error:error.message})
	}
}

const deleteAlbum = (req,res)=>{
	
}

const deleteAllAlbums = (req,res)=>{
	
}



module.exports = {
	getAlbumByUserCountryAndGenre,
}
