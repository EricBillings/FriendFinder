/* Survey Page Functionality */


let valArray = [];

function getValue(question) {
    let qValue = 0;

    const qArray = ["Q1", "Q2", "Q3", "Q4", "Q5", "Q6", "Q7", "Q8", "Q9", "Q10"];

    for (let j = 0; j < qArray.length; j++) {

        question = qArray[j];


        let answer = document.getElementsByName(question);

        for (let i = 0; i < answer.length; i++) {
            if (answer[i].checked) {
                qValue = answer[i].value;
                break
            }
        }
        if (qValue === 0) {
            const errDiv = $("<div>");
            $("#error").append("<hr>");
            $("#error").append(errDiv.text("Error! Please Answer All Questions Before Submitting"));
            $("#error").append("<hr>");
            return
        }
        valArray.push(qValue);

    };
};

$("#sendSurvey").on("click", function (event) {
    event.preventDefault();
    $("#error").empty();
    getValue();

    let name = localStorage.getItem("userName")
    let photo = localStorage.getItem("photoFile");

    if (!name) {
        const errDiv = $("<div>");
        $("#error").append(errDiv.text("Error! You Must Register on the Home Page Before Submitting the Survey."));
        $("#error").append("<hr>");

        return

    } else {

        let newFriend = {
            "name": name,
            "photo": photo,
            "scores": valArray,

        }    


        console.log(newFriend);

        $.post("/api/friends", newFriend, function (data, err) {

            if (err) {
                console.log(err);
            } else {
                console.log("data sent");
            }
        })
    }


});

/* Home Page Functionality */

$("#photoFile").change(function () {
    const path = $("#photoFile").val();
    console.log(path);
$("#fileName").html(path);
});


$("#register").on("click", function (event) {
    event.preventDefault();

    let userName = $("#userName").val();

    localStorage.setItem("userName", userName);

    const file = $("#photoFile").val();

    localStorage.setItem("photoFile", file);

    $("#fileName").empty();

    $("#register").hide();

    const confirmDiv = $("<div>");

    $("#register-section").append(confirmDiv.text("Thanks for Registering. Proceed to the Survery"));


});


