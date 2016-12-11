// Create secret number

var secretNumber = 4;

// Ask user for guess

var stringGuess =  prompt("Guess a number");
var guess = Number(stringGuess);

// check if guess is correct

if(guess === secretNumber) {
  alert("YOU GOT IT RIGHT!");
}
else if(guess < secretNumber) {
  alert("Your guess was too low!");
}
else {
  alert("Your guess is too high!");
}