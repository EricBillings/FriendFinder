const friendData = require("../data/friends.js");



module.exports = function (app) {

    app.get("/api/friends", function (req, res) {
        res.json(friendData);
    });


    app.post("/api/friends", function (req, res) {
        friendData.push(req.body);
        const currentUser = req.body;
        console.log(currentUser);
        /*let valArray = req.body.scores.map(Number);

        let finalScore = valArray.reduce(function (total, amount) {
            return total + amount
        });
        console.log(finalScore);
        */

        for (let i = 0; i < friendData.length; i++) {
            

            friendData[i]["scores"] = friendData[i]["scores"].map(Number)
            let finalScore = friendData[i]["scores"].reduce(function (total, amount) {
                return total + amount
            });

            friendData[i]["scores"] = finalScore;
            console.log(friendData[i]["scores"]);


        }



        /*friendData.forEach(function (element) {
            let valArray = element.scores.map(Number);
            valArray.reduce(function (total, amount) {
               let finalScore = total =+ amount
                console.log(finalScore);
                
                
            })
            

        });*/



    });


};

