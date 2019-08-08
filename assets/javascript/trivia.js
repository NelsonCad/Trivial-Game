$(document).ready(function () {


    const trivia = [
        {
            quest: "what is the title of the guy that says 'Rada Rada' in Chowder?",
            answers: [
                "Chef",
                "apprentice",
                "assistant",
                "nusiance"
            ]
        },
        {
            quest: "Who is the leader of the Beta Kids in Homestuck?",
            answers: [
                "John",
                "Rose",
                "Jade",
                "Dave"
            ]
        },
        {
            quest: "Who is the Hero of Heart out of the Alpha kids in Homestuck?",
            answers: [
                "Jane",
                "Dirk",
                "Roxy",
                "Jake"
            ]
        },
        {
            quest: "Who is the stabby douchebag in the Midnight Crew from Homestuck?",
            answers: [
                "Daimonds Droog",
                "Hearts Boxcar",
                "Clubs Deuce",
                "Spades Slick"
            ]
        },
        {
            quest: "What is the meaning of life?",
            answers: [
                "42",
                "Self-happiness",
                "Respect from peers",
                "Alpha Timeline"
            ]
        },
        {
            quest: "What is the name if the Frigate that the Master Cheif started in at the beginning of Halo: Combat Evolved?",
            answers: [
                "Infinity",
                "Forward unto Dawn",
                "Pillar of Autumn",
                "High Charity"
            ]
        }];

    // starts quiz when user clicks start button
    $("#start").on("click", startTriv);

    // trivia index
    let triviaI = 0;
    // let trivIndAns = trivia[triviaI].answers;

    let score = 0;

    //time set per question
    let time = 45;
    let interValid;

    // timer function
    function timer() {
        time--;
        $(".timer").text("time left: " + time);
        //if timer hits 0, will work on later
        if (time === 0) {
            nextQuest();
        }
    }

    function endResults() {
        // clears question and answer columns for 
        $(".questions").empty();
        $(".answers").empty();

        clearInterval(interValid);
        time = 45;
        triviaI = 0;

        // shows the user's score
        $(".screen").append("<h4>").text("you got " + score + " out of " + trivia.length);

        let Restart = $("<button>").attr("id", "restart").text("Restart");
        $(".buttons").append(Restart);
        $("#restart").on("click", function () {
            score = 0;
            startTriv();
        });
    }

    // when a choice is made
    function nextQuest() {

        // adds to index so that next question is brought up
        triviaI++;

        if ($(this).attr("Charac") === "assistant" || $(this).attr("Charac") === "John" || $(this).attr("Charac") === "Dirk" || $(this).attr("Charac") === "Spades Slick" || $(this).attr("Charac") === "42" || $(this).attr("Charac") === "Pillar of Autumn") {
            score++;
        }

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
        //empties instructions
        $(".screen").empty();
        // moves to next question
        $(".choices").click(nextQuest);


    }
});