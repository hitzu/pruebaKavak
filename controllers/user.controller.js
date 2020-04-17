'use strict'
const db = require("../models");
const { Album, User, Track } = db
const Op = db.Sequelize.Op


const createUser = async (req,res)=>{
	try{
		
	}catch (error) {
		res.status(500).send({error:error.message})
	}
}

const updateUser = async (req,res)=>{
	try{
		const PromisesToGet = [
			Track.findAll({ attributes: ['userid'] }), 
			Album.findAll({ attributes: ['userid'] })
		]

		const promisesResponses = await Promise.all(PromisesToGet)

		const allIdsToUpdate = Array.from([...promisesResponses[1], ...promisesResponses[0]])
		const allIDs = allIdsToUpdate.map(user => { return user.userid })
		const clearRepeateds = [...new Set(allIDs)].filter( (value => value != null))

		const promises = []

		clearRepeateds.forEach((userID) =>{
			promises.push(User.update({status : 0 }, {where : {id : userID }}))
		})

		await Promise.all(promises)

		const UserUpdated = await User.findAll({where : { id : { [Op.in] :  clearRepeateds} }})
		

		res.status(200).send({ user: UserUpdated })
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
	getAllUsers,
	updateUser
}
