// index.js: The file containing the logic for the course of the game, which depends on Word.js and:

// Randomly selects a word and uses the Word constructor to store it
// Prompts the user for each guess and keeps track of the user's remaining guesses

var SmartWord = require("./word.js");

// array of words to randomly choose from
var dumbWordArray = ["Nelly", "Vanessa", "Morgan", "Jeff", "Shaughn", "Ryan", "Mississippi"];

// gives me a random index
var randomIndex = Math.floor(Math.random() * dumbWordArray.length);
// give me random word pertaining to index
var dumbRandomWord = dumbWordArray[randomIndex];


// turn dumbRandomWord into a smart word
var randomSmartWord = new SmartWord(dumbRandomWord);

// prompt user to guess letters and keep track of guesses userGuesses --
var userGuesses = 10;

// interact with user until they run out of guesses or they guess the word
while (userGuesses >= 0) {
    console.log(dumbRandomWord);
    randomSmartWord.showWord();     //shows _
    console.log(" Gues the word in " + userGuesses + " or less guesses.");
    var userInput = process.argv[2];
    randomSmartWord.letterChecker(userInput);
    userGuesses--;
}






// need it to display the _




