// Dependencies
var path = require("path");


var router = function(app) {

    app.get('/', function(req, res) {
        res.sendFile(path.join(__dirname, "../public/home.html"));
    });

    app.get('/survey', function(req, res) {
        res.sendFile(path.join(__dirname, "../public/survey.html"));
    });

    // app.get('*', function(req, res) {
    //     res.send("this is not the page that are you looking for");
    // });
}

module.exports = router;