'use strict'
const db = require("../models");
const { Track, User, Country, Album } = db
const Op = db.Sequelize.Op


const createTrack = async (req,res)=>{
	try{
		
	}catch (error) {
		res.status(500).send({error:error.message})
	}
}

const updateTrack = (req,res)=>{
	try{
		
	}catch (error) {
		res.status(500).send({error:error.message})
	}
}

const getTrack = (req,res)=>{
	try{
		
	}catch (error) {
		res.status(500).send({error:error.message})
	}
}

const getAllTracks = async (req,res)=>{
	try {
		const tracksFound = await Track.findAll({
			attributes: [
				'id', 'title'
			],
			include : [{
				model : Album,
			}],
			include : [{
				model : User,	
			}]
		})
		
		res.status(200).send({ tracks: tracksFound })
	} catch (error) {
		res.status(500).send({error:error.message})
	}
}

const deleteTrack = (req,res)=>{
	try{
		
	}catch (error) {
		res.status(500).send({error:error.message})
	}
}

const deleteAllTracks = (req,res)=>{
	try{
		
	}catch (error) {
		res.status(500).send({error:error.message})
	}
}



module.exports = {
	getAllTracks
}
