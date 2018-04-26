var apiFriends = require("../data/friends");
var bodyParser = require("body-parser");

var API = function(app) {
    app.get('/api/friends', function(req, res) {
        res.json(apiFriends);
    });

    // Sets up the Express app to handle data parsing
    // =============================================================
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(bodyParser.json());

    app.post('/api/friends', function(req, res) {
        var survey = req.body;
        console.log(survey);
        res.json(survey);
    });
};

module.exports = API;