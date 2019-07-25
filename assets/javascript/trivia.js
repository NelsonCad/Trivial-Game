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
            answers: {
                ans1: "John",
                ans2: "Rose",
                ans3: "Jade",
                ans4: "Dave"
            }
        },
        {
            quest: "Alpha Leader",
            answers: {
                ans1: "Jane",
                ans2: "Dirk",
                ans3: "Roxy",
                ans4: "Jake"
            }
        },
        {
            quest: "midnight crew leader",
            answers: {
                ans1: "daimonds droog",
                ans2: "hearts boxcar",
                ans3: "clubs deuce",
                ans4: "spades slick"
            }
        },
        {
            quest: "life meaning",
            answers: {
                ans1: "42",
                ans2: "self-happiness",
                ans3: "respect from peers",
                ans4: "alpha timeline"
            }
        }];

    // answers to the questions in order    
    const trivAns = ["assistant", "John", "Dirk", "spades slick", "42"];

    $("#start").on("click", startTriv);

    // trivia index
    let triviaI = 0;

    //time set per question
    let time = 45;
    let interValid;

    // timer function
    function timer() {
        time--;
        $(".timer").text(time);
    }

    // start of the trivia game
    function startTriv() {

        // sets timer for question
        clearInterval(interValid);
        interValid = setInterval(timer, 1000);

        //creates h1 with the question in the correct box
        let TriviaQuest = $("<h3>").text(trivia[triviaI].quest);

        // creates the buttons with the choices associated with the question
        let triviaAns = trivia[triviaI].answers;
        
        triviaAns.forEach(function () {

            let choiceBtn = $("<button>")
            
            choiceBtn.addClass("choices");

        });

        // if the timer hits 0 function, will work on later
        if (time === 0) {
            clearInterval(interValid);
            time = 45;
            timer();
        }

        // appends the question for user to see
        $(".questions").append(TriviaQuest);

        // should append the buttons for the use's choice
        $(".answers").append(triviaAns);

        $(".buttons").empty();
    }

    console.log(trivia[triviaI].answers);
});