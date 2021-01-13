import { resetGame } from './utils.js';
const guessesLeft = document.getElementById('guessRemain');
console.log(guessesLeft);
const userGuess = document.getElementById('inputGuess');
const fateButton = document.getElementById('guessButton');
const yesNoBox = document.getElementById('secretBox'); 
console.log(userGuess, fateButton, yesNoBox);

let secretNum = Math.ceil(Math.random() * 20);
let guessRemain = 4; 

fateButton.addEventListener('click', () => {
    --guessRemain;
    const userInput = Number(userGuess.value);
    if (userInput === secretNum) { 
        yesNoBox.textContent = 'Great job Katniss Everdeen!';
        setTimeout(function(){
            if (confirm('Would you like to play again?')) {
                [guessRemain, secretNum] = resetGame(guessRemain, userGuess, guessesLeft, yesNoBox, secretNum);
            } else {
                yesNoBox.textContent = 'Thanks for playing!'; 
            }
        }, 500);  
    } else if (userInput > secretNum) {
        yesNoBox.textContent = 'You have guessed too high, try again';
    } else if (userInput < secretNum) {
        yesNoBox.textContent = 'You have guessed too low, try agin';
    }
    if (guessRemain === 0 && userInput !== secretNum) {
        yesNoBox.textContent = 'You have no more guesses, the odds were not in your favor'; 
        yesNoBox.disabled = true;  
        setTimeout(function(){ 
            if (confirm('Would you like to play again?')) {
                [guessRemain, secretNum] = resetGame(guessRemain, userGuess, guessesLeft, yesNoBox, secretNum);
            } else {
                yesNoBox.textContent = 'Thanks for playing!';
            }
        }, 500);
    }
    guessesLeft.textContent = `You have ${guessRemain} guesses remaining!`;
});