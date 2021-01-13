export function resetGame(guessRemain, userGuess, guessesLeft, yesNoBox, secretNum) {
    guessRemain = 4;
    userGuess.value = '';
    guessesLeft.textContent = '';
    yesNoBox.textContent = ''; 
    secretNum = Math.ceil(Math.random() * 20);
    return [guessRemain, secretNum];
}
