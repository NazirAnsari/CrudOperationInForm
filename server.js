const express = require("express");
const app = express();
// const conn = require("./Backend/connection/db.js");
const router = require("./Backend/router/router.js");
const path = require("path");
var bodyParser = require("body-parser");

// for non blocking 3rd party calls
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET,POST,PUT,PATCH,DELETE');
    res.setHeader('Access-Control-Allow-Methods', 'Content-Type', 'Authorization');
    next();
})

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/", router);

// calling CSS
app.use(express.static(path.join(__dirname, "./Frontend")));


// running the port
app.listen(5000, () => {
    console.group("App Listening on port 5000 !!")
})