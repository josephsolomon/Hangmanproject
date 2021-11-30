import prompt from "readline-sync";
import wordBank from "./word-bank.js";

console.log("\nWelcome to Hangman!\nPress ctrl+c to stop\n");

let answer = wordBank[Math.floor(Math.random()*wordBank.length)].toLowerCase();
//while loop will control number of guesses 
const startGame  = 



const userInput = prompt.question("First Guess");



const guessCheck = (guess, word) => {

    return word.includes(guess);

};



console.log("userInput", userInput)
