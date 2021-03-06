'use strict'
const db = require("../models");
const { Track, User, Country, Album } = db
const Op = db.Sequelize.Op


const createTrack = async (req,res)=>{
	try{
		const { title, artist, isrc, albumid, genre, } = req.body
		const userid = req.user.id

		const track = Track.build({
			title : title, 
			artist : artist, 
			isrc : isrc, 
			albumid : albumid, 
			genre : genre, 
			userid : userid
		})

		const newTrack = await track.save()
		res.status(200).send({ track: newTrack })
	}catch (error) {
		res.status(500).send({error:error.message})
	}
}

const getGenreAndAlbum = async (req,res)=>{
	try{
		const {sort} = req.params
		
		if (sort != 'ASC' && sort != 'DESC'){
			throw {message : "order dont allow "}
		}

		const TracksFound = await Track.findAll({
			order: [ ['title', sort] ],
			include : [{
				model : Album,
				as : 'album',
				attributes: [
					'title'
				],
			},{
				model : User,
				attributes: [
					'email', 'countrycode'
				],
			}],
		})
		const areDiferentes = TracksFound.map((track) => {
			if (track.genre !== track.album.genre){
				return track
			}
		})
		const clearNull = areDiferentes.filter( (value => value != null))
		res.status(200).send({ tracks: clearNull })
	
	
	}catch (error) {
		res.status(500).send({error:error.message})
	}
}

const getByAlbum = async (req,res)=>{
	try{
		const {albumid, sort} = req.params
		
		if (sort != 'ASC' && sort != 'DESC'){
			throw {message : "order dont allow "}
		}

		const TracksFound = await Track.findAll({
			where : { albumid : albumid },
			attributes: [
				'id', 'title'
			],
			include : [{
				model : Album,
				as : 'album',
				attributes: [
					'title'
				],
			},{
				model : User,
				attributes: [
					'email', 'countrycode'
				],
			}],
			
			order: [ ['title', sort] ],
		})

		res.status(200).send({ tracks: TracksFound })
	
	
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

const getTrack = async (req,res)=>{
	try{
		res.status(200).send({album : await Track.findOne(
			{where : {id : req.params.trackId },
			attributes: [
				'id', 'title'
			],
			include : [{
				model : Album,
				as : 'album',
				attributes: [
					'title'
				],
			},{
				model : User,
				attributes: [
					'email', 'countrycode'
				],
			}],
		})})
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
				as : 'album',
				attributes: [
					'title'
				],
			},{
				model : User,
				attributes: [
					'email', 'countrycode'
				],
			}],
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
	createTrack,
	getAllTracks,
	updateTrack,
	getTracksWithOutArtist,
	getGenreAndAlbum,
	getTrack,
	getByAlbum
}
