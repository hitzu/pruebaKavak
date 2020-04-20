'use strict'
const db = require("../models");
const { Album, User, Track, Country} = db
const Op = db.Sequelize.Op


const createAlbum = async (req,res)=>{
	try{
		const { title, artist, label, upc, genre } = req.body

		const album = Album.build({
			title : title, 
			artist : artist, 
			label : label, 
			upc : upc, 
			genre : genre, 
			userid : req.user.id
		})


		const newAlbum = await album.save()
		res.status(200).send({ album: newAlbum })
	}catch (error) {
		res.status(500).send({error:error.message})
	}
}

const updateAlbum = async (req,res)=>{
	try{
		const tracks = await Track.findAll(
		{
			attributes: ['albumid']
		})
		const trackssId = tracks.map(track => track.albumid)

		const doesntHaveTracks = await Album.findAll({
			where : {
				id : {[Op.notIn] : trackssId}
			}
		})

		const doesntHaveTracksIDs = doesntHaveTracks.map(album => album.id)


		const promises = []

		doesntHaveTracksIDs.forEach((albumId) =>{
			promises.push(Album.update({status : 0 }, {where : {id : albumId }}))
		})

		await Promise.all(promises)

		const albumsUpdated = await Album.findAll({where : { id : { [Op.in] :  doesntHaveTracksIDs} }})

		res.status(200).send({ updateAlbum : albumsUpdated  })

	}catch (error) {
		res.status(500).send({error:error.message})
	}
}

const getAlbum = async (req,res)=>{
	try{
		res.status(200).send({album : await Album.findOne({where : {id : req.params.albumId }})})
	}catch (error) {
		res.status(500).send({error:error.message})
	}
}

const getAlbumByUserCountryAndGenre = async (req,res)=>{
	try {
		const {codeCountry, genre, sort} = req.params
		
		if (sort != 'ASC' && sort != 'DESC'){
			throw {message : "order dont allow "}
		}

		let contry = codeCountry != "all" ? {countryCode : codeCountry} : null

		const userFound = await User.findAll(
		{
			where : contry,
			attributes: ['id']
		})
		const userId = userFound.map(user => user.id)

		let genreToFilter = genre != "all" ? { userid : userId, genre : genre } : codeCountry != "all" ? { userid : userId } : null
		
		const albumsFounds = await Album.findAll({
			where : genreToFilter,
			order: [ ['title', sort] ],
			include : [{
				model : User
			}],
		})

		res.status(200).send({ albums: albumsFounds })
	} catch (error) {
		res.status(500).send({error:error.message})
	}
}

const getAllGenres = async (req,res) => {
	try {
		const albumsGeners = await Album.findAll({ attributes : ['genre'] })
		const genreArray = albumsGeners.map(genre => genre.genre)
		console.log(genreArray)
		
		res.status(200).send({ albums : [...new Set(genreArray)] })
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
	updateAlbum,
	createAlbum,
	getAlbum,
	getAllGenres
}
