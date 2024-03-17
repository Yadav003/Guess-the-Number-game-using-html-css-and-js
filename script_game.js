// Generate a random number between 1 and 100
const targetNumber = Math.floor(Math.random() * 100) + 1;

// Number of attempts allowed
const maxAttempts = 10;
let attemptsLeft = maxAttempts;

function checkGuess() {
    const guessInput = document.getElementById('guessInput');
    const message = document.getElementById('message');
    const playerGuess = parseInt(guessInput.value);

    if (isNaN(playerGuess)) {
        message.textContent = "Please enter a valid number.";
        return;
    }

    attemptsLeft--;

    if (playerGuess === targetNumber) {
        message.textContent = `Congratulations! You guessed the number ${targetNumber} correctly in ${maxAttempts - attemptsLeft} attempts.`;
        guessInput.disabled = true;
    } else if (attemptsLeft === 0) {
        message.textContent = `Game over. The correct number was ${targetNumber}.`;
        guessInput.disabled = true;
    } else if (playerGuess < targetNumber) {
        message.textContent = `Try again. The number is higher. Attempts left: ${attemptsLeft}`;
    } else {
        message.textContent = `Try again. The number is lower. Attempts left: ${attemptsLeft}`;
    }

    guessInput.value = '';
}