'use strict'
const db = require("../models");
const { Country } = db
const Op = db.Sequelize.Op

const getCountries = async (req,res)=>{
	try{
		res.status(200).send({country : await Country.findAll()})
	}catch (error) {
		res.status(500).send({error:error.message})
	}
}

module.exports = {
	getCountries
}
