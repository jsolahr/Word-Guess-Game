    // Creates an array that lists out all of the options
    var userChoices = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
    var wordChoices = ["carrot","lettuce","squash","zucchini","pepper","tomato","potato"]
    
    

    // Creating variables to hold the number of wins, guesses and letters guesed    
    var win = 0;
    var remainingGuesses = 0;
    var randomWord = wordChoices[Math.floor(Math.random() * wordChoices.length)];
    var lettersGuessed = 0;


    // Create variables that hold references to the places in the HTML where we want to display things.
    var currentWordText = document.getElementById("currentWord-text");
    var winstext = document.getElementById("wins-text");
    var guessesnumber = document.getElementById("numberofguesses-text");
    var letterchoices = document.getElementById("letterchoices-text");

    document.onkeyup = function(event) {

    // Determines which key was pressed.
        var userGuess = event.key;

    // This logic determines the outcome of the game (win/loss/tie), and increments the appropriate number
        if ((userGuess === userChoices)) {
            (remainingGuesses++);
        }
        else {
           (lettersGuessed++);
        }
    }
    // Create variables that hold references to the places in the HTML where we want to display things.
      currentWordText.textContent = "Current Word: " + randomWord;
      winstext.textContent = "Wins: " + win;
      guessesnumber.textContent = "Number of Guesses: " + remainingGuesses;
      letterchoices.textContent = "Letters Already Guessed: " + lettersGuessed;
