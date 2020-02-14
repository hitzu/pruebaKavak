'use strict'

var ip = require("ip");

const app= require("./app");
const port = 8080
app.listen(port, () => {
    console.log(`API REST corriendo en http://${ip.address()}:${port}/`)
});
