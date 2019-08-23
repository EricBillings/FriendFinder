const friendData = require("../data/friends.js");



module.exports = function (app) {

    app.get("/api/friends", function (req, res) {
        res.json(friendData);
    });


    app.post("/api/friends", function (req, res) {
        friendData.push(req.body);
        const currentUser = req.body;
        console.log(currentUser);
        const scoreArray = [];
        const compareArray = [];

        for (let i = 0; i < friendData.length; i++) {


            friendData[i]["scores"] = friendData[i]["scores"].map(Number)
            let finalScore = friendData[i]["scores"].reduce(function (total, amount) {
                return total + amount
            });

            friendData[i]["scores"] = finalScore;
            console.log(friendData[i]["scores"]);
            scoreArray.push(friendData[i]["scores"]);
            console.log(scoreArray);

        }

        let userPlace = scoreArray.length - 1;
        let userScore = scoreArray[userPlace];
        console.log(userScore)
        for (let i = 0; i < (scoreArray.length - 1); i++) {
            let result = Math.abs(userScore - scoreArray[i]);
            compareArray.push(result);
            console.log(compareArray);

        }

        let lowestVal = 100;
        for (let i = 0; i < compareArray.length; i++) {
            if (compareArray[i] < lowestVal) {
                lowestVal = compareArray[i]
                console.log(lowestVal);
                let friendPosition = compareArray.indexOf(lowestVal);
                let friendMatch = friendData[friendPosition];
                console.log(friendMatch);
            }

        }

/* Currently console logging the friend match. Could not allocate further time to add to modal pop up functionality */

    });


};

