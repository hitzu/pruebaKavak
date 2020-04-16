'use strict'

const ip = require("ip");

const app= require("./app");
const port = 3000

const db = require("./models")
db.sequelize.sync();

app.listen(port, () => {
    console.log(`API REST corriendo en http://${ip.address()}:${port}/`)
});
