#README.md
Guess a number App
HTML Setup
Number Input

Why? So the user can enter their guesses
Button

Why? To submit the guess and trigger state changes
Guesses remaining span

Why? To display remaining guesses
(Too high/Too low/You got it!) span

Why? Tell the user what's wrong with their guess (if anything) *5) Reset button
Go grab these DOM elements (that means they need ids!)

Initialize state (our global lets)

Random number: n
Guesses remaining: 4
Add event listener to button

On click
STATE: decrement remaining guesses by 1 (--)
Store user guess in a variable (Number(someInput.value))
Compare user guess with random number
VIEW: a) if user guess is greater than the random number, inject 'too high' into our results span - VIEW: check if there are any guesses left. If not, disable the input and add a losing message b) if user guess is less than the random number, inject 'too low' into our results span - VIEW: check if there are any guesses left. If not, disable the input and add a losing message c) if the user guess is equal to the random number, congratulate the user. - disable the input and display a winning message
VIEW: If applicable, Change the remaining guesses text content
STRETCH Add an event listener onto the reset button

On click
STATE: Reset remaining guesses state to 4
STATE: Create a new random number
VIEW: re-enable the inputs if they are disabled and fix the game text