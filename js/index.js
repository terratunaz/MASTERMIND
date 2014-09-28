//Stores four color values
var playerCode = [];
//Explains the rules of the game to the player and asks them if they would like to play
var play = prompt("Welcome to MASTERMIND! This is a two player game in which you will compete against the computer. You'll start off by choosing a code made up of four color 'blocks' with six colors in total to choose from. You can choose the same color multiple times. After you've selected your 'code', the computer will have 10 guesses to crack it. Think you can out smart the computer? Type YES to continue or NO to quit.").toUpperCase();

//If the player decides to play, run the game code
if (play === "YES") {

    alert("Please respond to the following prompt four times. Enter only one color at a time.");
    //Will run through the following code four times in order to generate the player's 'code'
    for (i = 0; i < 4;) {
        //Asks the player to input a response to the prompt and have the response converted to caps
        var playerChoice = prompt("Please choose one of the following colors: red, green, orange, yellow, blue or purple.").toUpperCase();

        //If the player chooses from amongst the predetermined choices keep prompting the player until they've given a response to the prompt four times
        if (playerChoice === "RED" || playerChoice === "GREEN" || playerChoice === "ORANGE" || playerChoice === "YELLOW" || playerChoice === "BLUE" || playerChoice === "PURPLE") {
            i++;
            //Keep track of each of the four responses and the order in which they are selected
            playerCode[i] = playerChoice;

        }
        //If the player doesn't choose from amongst the predetermined choices, keep prompting them until they do and four colors or 'code' have been selected
        else {
            alert("Please choose ONE appropriate color at a time and try again.");
        }

    }
    //Show the players the four colors or "code" they have created     
    alert("You have choosen the following four color code " + playerCode.toString());
    alert("Now the computer will make its guess...");
    alert("Just keep pressing OK until the computer is done with its calculations.");

    //Stores the numerical value assigned to each color
    var numValue;

    //Examine the 'code' the player has selected and assign a numerical value to each of the different colors
    for (i = 1; i < playerCode.length; i++) {
        if (playerCode[i] === "RED") {
            numValue = 1;
            playerCode[i] = numValue;
        } else if (playerCode[i] === "GREEN") {
            numValue = 2;
            playerCode[i] = numValue;
        } else if (playerCode[i] === "ORANGE") {
            numValue = 3;
            playerCode[i] = numValue;
        } else if (playerCode[i] === "YELLOW") {
            numValue = 4;
            playerCode[i] = numValue;

        } else if (playerCode[i] === "BLUE") {
            numValue = 5;
            playerCode[i] = numValue;

        } else {
            numValue = 6;
            playerCode[i] = numValue;

        }
    }
    //The computer will have ten opportunities to guess the player's color 'code'
    var computerChoice1;
    var computerChoice2;
    var computerChoice3;
    var computerChoice4;
    var computerTurn = 10;
    var computerAnswer = [];

    //Have the computer choose a random number between one and six and assign that number to each of the four choices that the computer can make during each turn
    do {
        computerChoice1 = Math.floor((Math.random() * 6) + 1);
        computerChoice2 = Math.floor((Math.random() * 6) + 1);
        computerChoice3 = Math.floor((Math.random() * 6) + 1);
        computerChoice4 = Math.floor((Math.random() * 6) + 1);


        //Run through the player's 'code' and if at any point the computer's selection matches what the player has selected, store that information, then display the stored values each time so that the player can get a sense that the computer is trying to guess the 'code' 
        if (playerCode[1] === computerChoice1) {

            computerAnswer[0] = computerChoice1;

        } else if (playerCode[2] === computerChoice2) {
            computerAnswer[1] = computerChoice2;

        } else if (playerCode[3] === computerChoice3) {
            computerAnswer[2] = computerChoice3;

        } else if (playerCode[4] === computerChoice4) {
            computerAnswer[3] = computerChoice4;

        }

        //Each time comparisons between the player's 'code' and the computer's selections occur, the computer loses a turn and the computer's guesses are displayed to the player
        computerTurn--;

        alert("The computer's guess: " + computerAnswer);
    }
    while (computerTurn > 0);

    document.write(playerCode);

    //Stores the actual color value rather than the numerical value associated with the color
    var colorValue;

    //If the player's 'code' matches with the selections the computer has made then the computer wins 
    if (playerCode[1] === computerAnswer[0] && playerCode[2] === computerAnswer[1] && playerCode[3] === computerAnswer[2] && playerCode[4] === computerAnswer[3]) {
        //Run through the computer's guess and convert the numbers into the colors assigned to them so that the computer's guess is outputted as words rather than a string of numbers
        for (i = 0; i < computerAnswer.length; i++) {
            if (computerAnswer[i] === 1) {
                colorValue = "RED";
                computerAnswer[i] = colorValue;
            } else if (computerAnswer[i] === 2) {
                colorValue = "GREEN";
                computerAnswer[i] = colorValue;
            } else if (computerAnswer[i] === 3) {
                colorValue = "ORANGE";
                computerAnswer[i] = colorValue;
            } else if (computerAnswer[i] === 4) {
                colorValue = "YELLOW";
                computerAnswer[i] = colorValue;

            } else if (computerAnswer[i] === 5) {
                colorValue = "BLUE";
                computerAnswer[i] = colorValue;

            } else {
                colorValue = "PURPLE";
                computerAnswer[i] = colorValue;

            }
        }

        alert("Your code is " + computerAnswer + ". The computer Wins!");



    }


    //If the computer can't figure out the player's 'code', the player wins
    else {
        alert("Congratulations, you MASTERMIND you, the computer couldn't crack your code. You Win!");
    }

}


//If the player doesn't want to play, terminate the game but invite them to try playing another time
else {

    alert("Sorry to see you go. If you would like to give the game another go just refresh the page and type 'YES' to play.");

}