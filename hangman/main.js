function getUserInput() {
    return new Promise((resolve, reject) => {
        const stdin = process.stdin;
        stdin.setEncoding('utf8');

        stdin.once('data', (input) => {
            resolve(input.trim());
        });

        stdin.resume();
    });
}

function chooseRandomWord() {
    const words = ['python', 'java', 'swift', 'javascript'];
    const randomIndex = Math.floor(Math.random() * words.length);
    return words[randomIndex];
}

function hideWord(word) {
    return '-'.repeat(word.length);
}

async function main() {
    let totalWins = 0;
    let totalLosses = 0;
    let gameOver = false;

    while (!gameOver) {
        console.log("H A N G M A N");
        console.log(`Type "play" to play the game, "results" to show the scoreboard, and "exit" to quit:`)

        const menuChoice = (await getUserInput()).toLowerCase();

        if (menuChoice === "play") {
            const wordToGuess = chooseRandomWord();
            let hiddenWord = hideWord(wordToGuess);
            let attempts = 8;
            let guessedLetters = new Set();

            while (attempts > 0) {
                console.log('\n' + hiddenWord);
                console.log("\nInput a letter:");
                const userGuess = await getUserInput();
                const letter = userGuess.trim();

                if (letter.length !== 1) {
                    console.log("\nPlease, input a single letter.");
                    continue;
                }

                if (!/^[a-z]$/.test(letter)) {
                    console.log("\nPlease, enter a lowercase letter from the English alphabet.");
                    continue;
                }

                if (guessedLetters.has(letter)) {
                    console.log("\nYou've already guessed this letter.");
                    continue;
                }

                guessedLetters.add(letter);

                if (!wordToGuess.includes(letter)) {
                    attempts--;
                    console.log("\nThat letter doesn't appear in the word.");
                } else{
                    hiddenWord = hiddenWord.split('').map((char, index) =>
                        wordToGuess[index] === letter ? letter : char
                    ).join('');
                }

                if (hiddenWord === wordToGuess) {
                    console.log('\n' + hiddenWord);
                    console.log("\nYou survived!");
                    console.log(`You guessed the word ${wordToGuess}!`);
                    totalWins++;
                    break;
                }

                if (attempts === 0) {
                    console.log("\nYou lost!");
                    totalLosses++;
                    break;
                }
            }
        } else if (menuChoice === "results") {
            console.log(`You won: ${totalWins} times.`);
            console.log(`You lost: ${totalLosses} times.`);
        } else if (menuChoice === "exit") {
            console.log("Goodbye!");
            gameOver = true;
            break;
        } else {
            console.log('Invalid choice. Please, try again.')
        }
    }
}

main();
