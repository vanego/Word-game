// smart letter constructor takes dumb letter and turns it into a smart letter
function SmartLetter(dumbLetter) {
    this.rightGuessedValue = dumbLetter;    // guessed value equals dumbLetter
    this.wrongGuessedValue = "_ "; //wrong value = underscore
    this.guessedCorrectly = false; // inital letter value equals underscore

    // uses our dumbletter function in letter.js and returns either a letter or underscore 
    this.letterChecker = function (dumbLetter) {
        // .toLowerCase makes case sensitivity irrelevant
        if (dumbLetter.toLowerCase() === this.rightGuessedValue.toLowerCase()) {
            this.guessedCorrectly = true;
        } else {
            this.guessedCorrectly = false;
        }
    }
}

//-------------- TESTING ---------------
// console.log("Creating a smart V...")
// var smartV = new SmartLetter("v");
// console.log(smartV.guessedCorrectly);

// console.log("Comparing it to 'i'...")
// smartV.letterChecker("i");
// console.log(smartV.guessedCorrectly);

// console.log("Comparing it to 'v'...")
// smartV.letterChecker("v");
// console.log(smartV.guessedCorrectly);
//-------------- TESTING ---------------

module.exports = SmartLetter;