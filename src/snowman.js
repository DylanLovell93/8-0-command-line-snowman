/*
  `readline-sync` is a library that allows you to access user input from the command line. The library is assigned to the variable `readline`. It is used in the `run()` function below.
*/
const readline = require("readline-sync");
/*
  The `dictionary` variable will have an array of words that can be used for your game. It is used in the `getRandomWord()` function.
*/
const dictionary = require("./dictionary");

/*
  This function returns a random word from the list in `src/dictionary.js`. You do not need to update or edit this function. Instead, you only need to call it from the `run()` function.
*/
function getRandomWord() {
  const index = Math.floor(Math.random() * dictionary.length);
  return dictionary[index];
}
//inporting valid inputs
const validInput = require("./validinput");

// New helper function
function validInputCheck(letter){
  //Check if letter is valid and return it
  return validInput.includes(letter.toLowerCase())
};
/*
  This function will run your game. Everything you want to happen in your game should happen inside of here.

  You should still define other, smaller functions outside of the `run()` function that have a single specific purpose, such as getting user input or checking if a guess is correct. You can then call these helper functions from inside the `run()` function.

  Once you understand the code below, you may remove the comments if you like.
*/
function run() {
  //Declare variable for our secretword
  const secretWord = getRandomWord();
  //Declare variable for our incorrectGuess, set to length of secretWord
  let incorrectGuess = secretWord.length;
  //Declare variable for alreadyGuessed, set to empty array
  let alreadyGuessed = [];
  //Declare variable for displayedWord, set to empty array
  let displayedWord = [];
  //Use a loop to fill our displayedWord with "_"s, make it as long as our secretWord
  while (displayedWord.length < secretWord.length){
    displayedWord.push("_");
  }
  //Declare variable for message
  let message = "";
  //Create loop for our game
  while (incorrectGuess !== 0 && displayedWord.includes("_")){
    //Print our game
    console.log(`Remaining Incorrect Guesses: ${incorrectGuess}\nLetters Guessed: ${alreadyGuessed.join(", ") || "None"}\nWord: ${displayedWord.join(" ")}${message}`);
    //Ask for an input
    const userInput = readline.question("Guess a letter: ");
    //check if input isnt valid with helper function
    if (!validInputCheck(userInput)){
      //if it isn't, ask user to input valid input
      message = `\n\nInvalid input of ${userInput}. Please enter a single letter.`
      //send them back to the guess phase
      continue;
    }
    //check if input was already guess
    if (alreadyGuessed.includes(userInput)){
      //if it was, tell the user, and don't penalize them
      message = `Input of ${userInput} has already been guessed.`;
      continue;
    }
    //loop through our secretWord
      //in loop, check if input = currentLetter
        //if it is, change the value of displayedWord[i], to currentLetter
    //after loop, check if displayWord includes input
      //if it does, incorrect Guess -= 0;
      //if it isn't, incorrectGuess -= 1;
    //Add input to letters guessed
    
  }
  //check if they won
    //if they did, give winning message
    //if they didn't, give losing message
}

run();
