// Dependencies
// =============================================================
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 8080;

// Var to export data to Express App
// =============================================================
//var apiFriends = require("./app/data/friends");
var routes = require("./app/routing/htmlRoutes")(app);



// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());



//Sets up Express app to handle css style
app.use(express.static(__dirname + '/app/public/public'));



//  Connect apiFriends data to application
//app.use('/', apiFriends);









app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});