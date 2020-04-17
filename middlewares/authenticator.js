'use strict'
const db = require("../models");
const { User } = db
var passport = require("passport");
var passportJWT = require("passport-jwt");

var ExtractJwt = passportJWT.ExtractJwt;
var jwtOptions = {}
jwtOptions.jwtFromRequest = ExtractJwt.fromAuthHeaderWithScheme('jwt');
jwtOptions.secretOrKey = "secretString";


var JwtStrategy = passportJWT.Strategy;

const accountAuthentication = new JwtStrategy(jwtOptions, async (jwt_payload, next) =>{
    console.log('new authenticated request with payload:', jwt_payload);
    try {
        console.log(jwt_payload.id)
        let userFound = await User.findOne({where : {id : jwt_payload.id}})
        if(userFound){
            next(null, userFound);
        }
        else{
            next(null, false);
        }

    } catch (error) {
        next(error, false);
    }
});


passport.use(accountAuthentication);
module.exports = passport;