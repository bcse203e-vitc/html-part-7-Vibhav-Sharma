
let number = Math.floor(Math.random() * 100) + 1;
let attempts = 5;

while (attempts > 0) {
    let guess = parseInt(prompt("Guess a number between 1 and 100: "));
    if (guess === number) {
        alert("Congratulations! You guessed it right.");
        break;
    } else if (guess > number) {
        alert("Too high!");
    } else {
        alert("Too low!");
    }
    attempts--;
}

if (attempts === 0) {
    alert("You lost! The correct number was " + number);
}
