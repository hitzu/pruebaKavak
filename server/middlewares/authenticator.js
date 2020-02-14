'use strict'
const Data = require("../Data/accounts");
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
        let account = Data.Accounts.filter(el=>{ return el.owner === jwt_payload.id })
        if (account.length) {
            next(null, account[0]);
        } else {
            next(null, false);
        }
    } catch (error) {
        next(error, false);
    }
});


passport.use(accountAuthentication);
module.exports = passport;