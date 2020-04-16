'use strict'
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const routeLogin=require ("./routes/login.route");
const routeUser=require ("./routes/user.route");
const routeTrack=require ("./routes/track.route");
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json());

app.use((req,res,next)=>{
    res.header('Access-Control-Allow-Origin','*');
    res.header('Access-Control-Allow-Headers','X-API-KEY,Origin, X-Requested-With, Content-Type, Accept, Access-Control-Request-Method, Authorization');
    res.header('Access-Control-Allow-Methods','GET, POST, PUT, DELETE');
    res.header('Allow','GET, POST, PUT, DELETE')
    next();
});

app.use("/login",routeLogin);
app.use("/user",routeUser);
app.use("/track",routeTrack);

module.exports= app;
