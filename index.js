'use strict'
const express = require('express');
const path = require('path');
var bodyParser = require("body-parser");
var routes = require("./routes/routes.js");
const PORT = process.env.PORT || 5000;


var app = express();
app.use(express.static(path.join(__dirname, 'public')))
    .use(bodyParser.json())
    .use(bodyParser.urlencoded({extended : true}))
    .set('views', path.join(__dirname, 'views'))
    .set('view engine', 'ejs')
    .listen(PORT, () => console.log(`Listen on ${PORT}`));

routes(app);