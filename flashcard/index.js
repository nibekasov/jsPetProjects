<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Geography Flashcards</title>
</head>
<body>
<h1>What is the capital of...</h1>

<!-- Container to hold flashcards -->
<div id="flashcard-container"></div>

<script>
    // Function to create a flashcard
    function createFlashcard(country) {
        const flashcard = document.createElement('div');
        flashcard.className = 'flashcard';

        const countryName = document.createElement('p');
        countryName.textContent = country;

        flashcard.appendChild(countryName);
        return flashcard;
    }

    // Example list of country names (replace this with your dynamic fetch)
    const countryNames = ['Mexico', 'Papua New Guinea', 'United Kingdom', 'Japan', 'Canada', 'Australia', 'Germany', 'India', 'Brazil'];

    // Update the flashcards with country names
    const flashcardContainer = document.getElementById('flashcard-container');
    countryNames.forEach(country => {
        const flashcard = createFlashcard(country);
        flashcardContainer.appendChild(flashcard);
    });
    /*
    // Function to create a flashcard
    function createFlashcard(country) {
        const flashcard = document.createElement('div');
        flashcard.className = 'flashcard';
        flashcard.textContent = country;
        return flashcard;
    }

    // Fetch data from the local server (proxy)
    fetch('http://localhost:8080/wikipedia')
        .then(response => response.text())
        .then(data => {
            // Create a temporary DOM element to parse the HTML content
            const parser = new DOMParser();
            const htmlDoc = parser.parseFromString(data, 'text/html');

            // Extract the country names from the Wikipedia table
            const countryNames = [];
            const tableRows = htmlDoc.querySelectorAll('.wikitable tbody tr');
            tableRows.forEach(row => {
                const columns = row.querySelectorAll('td');
                if (columns.length >= 3) {
                    const countryName = columns[0].textContent.trim();
                    countryNames.push(countryName);
                }
            });

            // Update the flashcards with country names
            const flashcardContainer = document.getElementById('flashcard-container');
            countryNames.forEach(country => {
                const flashcard = createFlashcard(country);
                flashcardContainer.appendChild(flashcard);
            });
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });

     */
</script>
</body>
</html>
