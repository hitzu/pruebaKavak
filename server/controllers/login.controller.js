'use strict'
const Data = require("../Data/accounts");
const jwt = require("jsonwebtoken");

const logIn =  (req,res)=>{
  try {
    
    var {user,password} = req.body

    let account = Data.Accounts.filter(el=>{return (el.password == password && user == el.owner) || (el.password == password && user == el.account)}) 
    
    if (!account.length) {
      throw {name:"invalidLogin"}
    }
    let payload = {id:account[0].owner}
    let token = jwt.sign(payload,"secretString")
    res.status(200).send({account:account[0],token})
  } catch (error) {
    if (error.name === "invalidLogin") {
      res.status(403).send({error:"invalidLogin"})
    } else {
      res.status(500).send({error:error.message})
    }
  }
  
  
}

module.exports = {logIn}