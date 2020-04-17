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

const getTracksWithOutArtist = async (req,res)=>{
	try{

		const {sort} = req.params

		if (sort != 'ASC' && sort != 'DESC'){
			throw {message : "order dont allow "}
		}

		const trackWithOutArtist = await Track.findAll({
			where : {artist : null},
			order: [ ['title', sort] ],
		})
		res.status(200).send({ tracks: trackWithOutArtist })
		
	}catch (error) {
		res.status(500).send({error:error.message})
	}
}

const updateTrack = async (req,res)=>{
	try{
		const {idTrack} = req.params
		const artist =req.user.name
		const track = await Track.findOne({where : {id : idTrack, artist : null}})
		if(!track){
			throw {message : "if you modify a track with artirts you screw up"}
		}
		const trackUpdate = await Track.update(
			{artist: artist},
			{where: {id : idTrack}}
		)
		if(!trackUpdate){
			throw {message : "error trying update"}
		}
		// console.log(track)
		res.status(200).send({ tracks: true})
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
		
		res.status(200).send({ track: tracksFound })
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
	getAllTracks,
	updateTrack,
	getTracksWithOutArtist
}
