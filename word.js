var SmartLetter = require("./letter.js");

// function constructor takes dumbWord and turns it into a smartWord
function SmartWord(dumbWord) {
    this.smartWord = turnDumbWordIntoSmartWord(dumbWord); // smartWord equals function output
    // uses dumbLetter function in letter.js
    this.letterChecker = function (dumbLetter) {
        for (var index = 0; index < this.smartWord.length; index++) {
            var smartLetter = this.smartWord[index];
            smartLetter.letterChecker(dumbLetter);
        }
    }
    // will return _ or correct letters
    this.showWord = function () {
        var wordString = ""; // string so that there isn't a <br> between _
        for (var index = 0; index < this.smartWord.length; index++) {
            var smartLetter = this.smartWord[index];

            if (smartLetter.guessedCorrectly === true) {
                wordString += smartLetter.rightGuessedValue + " ";
            } else {
                wordString += smartLetter.wrongGuessedValue;
            }
        }

        console.log(wordString);
    }
}

function turnDumbWordIntoSmartWord(dumbWord) {
    // starts smartWord empty array
    var smartWord = [];

    //loops through dumbLetters, turns them into smartLetters, and constructs smartWord
    for (var index = 0; index < dumbWord.length; index++) {
        var dumbLetter = dumbWord[index];

        // turns our dumbLetter into a smartLetter
        var smartLetter = new SmartLetter(dumbLetter);

        // put smartLetter into smartWord
        smartWord.push(smartLetter);
    }
    // returns smartWord to whoever called the function
    return smartWord;
}

//-------------- TESTING ---------------
// var dumbWord = "Vanessa";
// var smartWord = new SmartWord(dumbWord);
// smartWord.showWord();

// smartWord.letterChecker("v");
// smartWord.showWord();
//-------------- TESTING ---------------

module.exports = SmartWord;

