var apiFriends = require("../data/friends");
var bodyParser = require("body-parser");

var API = function(app) {
    app.get('/api/friends', function(req, res) {
        res.json(apiFriends);
    });
    // apiFriends.man[0].name

    // Sets up the Express app to handle data parsing
    // =============================================================
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(bodyParser.json());

    app.post('/api/friends', function(req, res) {
        var survey = req.body;
        //console.log(survey);
        var famous;

        if (survey.sex != "F") {
            var apiWoman = apiFriends.women;
            var leastAmount = GetValue(survey.scores, apiWoman[0].scores);
            famous = apiWoman[0];
            for (var i = 1; i < apiWoman.length; i++) {
                var aux = GetValue(survey.scores, apiWoman[i].scores);
                if (leastAmount > aux) {
                    leastAmount = aux;
                    famous = apiWoman[i];
                }
            }
        } else {
            var apiMen = apiFriends.men;
            var leastAmount = GetValue(survey.scores, apiMen[0].scores);
            famous = apiMen[0];
            for (var i = 1; i < apiMen.length; i++) {
                var aux = GetValue(survey.scores, apiMen[i].scores);
                if (leastAmount > aux) {
                    leastAmount = aux;
                    famous = apiMen[i];
                }
            }
        }
        console.log(famous);
        res.json(famous);
    });
};

module.exports = API;

//function calculate the total Difference.
function GetValue(score1, score2) {
    var result = 0;
    for (var i = 0; i < 10; i++) {
        result += Math.abs(score1[i] - score2[i]);
    }
    //console.log(result);
    return result;

}