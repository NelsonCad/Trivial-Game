$(document).ready(function () {


    const trivia = [
        {
            quest: "radarada",
            answers: [
                "Chef",
                "apprentice",
                "assistant",
                "nusiance"
            ]
        },
        {
            quest: "Beta leader",
            answers: [
                "John",
                "Rose",
                "Jade",
                "Dave"
            ]
        },
        {
            quest: "Alpha Leader",
            answers: [
                "Jane",
                "Dirk",
                "Roxy",
                "Jake"
            ]
        },
        {
            quest: "midnight crew leader",
            answers: [
                "daimonds droog",
                "hearts boxcar",
                "clubs deuce",
                "spades slick"
            ]
        },
        {
            quest: "life meaning",
            answers: [
                "42",
                "self-happiness",
                "respect from peers",
                "alpha timeline"
            ]
        }];

    // starts quiz when user clicks start button
    $("#start").on("click", startTriv);

    // trivia index
    let triviaI = 0;

    let score = 0;

    //time set per question
    let time = 45;
    let interValid;

    // timer function
    function timer() {
        time--;
        $(".timer").text(time);
        //if timer hits 0, will work on later
        if (time === 0) {
            time = 45;
        }
    }

    function endResults() {
        // clears question and answer columns for 
        $(".questions").empty();
        $(".answers").empty();

        clearInterval(interValid);
        time = 45;
        triviaI = 0;

        $(".screen").append("<h4>").text("you got " + score + " out of " + trivia.length);
        

    }

    // when a choice is made
    function nextQuest() {
        // adds to index so that next question is brought up
        triviaI++;

        if (triviaI === trivia.length) {
            endResults();
            return;
        }

        // clears question and answer columns for re-use
        $(".questions").empty();
        $(".answers").empty();

        //resets time
        time = 45;
        // starts the next question
        startTriv();


    }

    // start of the trivia game
    function startTriv() {

        // creates the buttons with the choices associated with the question
        let triviaAns = trivia[triviaI].answers;

        //creates h1 with the question in the correct box
        let TriviaQuest = $("<h3>").text(trivia[triviaI].quest);

        // sets timer for question
        clearInterval(interValid);
        interValid = setInterval(timer, 1000);

        // actually generates choices as buttons
        triviaAns.forEach(function (choice) {

            let choiceBtn = $("<button>").addClass("choices").text(choice).attr("Charac", choice);

            // should append the buttons for the use's choice
            $(".answers").append(choiceBtn);

        });

        // appends the question for user to see
        $(".questions").append(TriviaQuest);
        // clears the buttons row, so user can't "start" multiple times
        $(".buttons").empty();
        // moves to next question
        $(".choices").on("click", nextQuest);
        //empties instructions
        $(".screen").empty();

    }




});