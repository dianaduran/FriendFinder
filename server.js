// Dependencies
// =============================================================
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 8080;

//Sets up Express app to handle css style
app.use(express.static(__dirname + '/app/public/public'));

// Var to export data to Express App
// =============================================================
var routes = require("./app/routing/htmlRoutes")(app);
var apiFriends = require("./app/routing/apiRoutes")(app);
// app.get('*', function(req, res) {
//     res.send("this is not the page that are you looking for");
// });

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());







//  Connect apiFriends data to application
// app.get('/api/friend', function(req, res) {
//     res.json(apiFriends);
// });









app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});