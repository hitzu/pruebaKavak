'use strict'
const db = require("../models");
const { User } = db
const jwt = require("jsonwebtoken");

const logIn = async (req,res)=>{
  try {
    
    var {email} = req.body

    const account = await User.findOne(
    {
      where : {email : email},
    })
    console.log(account)
    
    if (!account) {
      throw {name:"invalidLogin"}
    }
    let payload = {id:account.id}
    let token = jwt.sign(payload,"secretString")
    res.status(200).send({account:account,token})
  } catch (error) {
    if (error.name === "invalidLogin") {
      res.status(403).send({error:"invalidLogin"})
    } else {
      res.status(500).send({error:error.message})
    }
  }
  
  
}

module.exports = {logIn}