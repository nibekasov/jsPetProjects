// List of currencies and their rates
const exchangeRates = {
    USD: 1.0,
    JPY: 113.5,
    EUR: 0.89,
    RUB: 74.36,
    GBP: 0.75,
};

// Welcome message
console.log("Welcome to Currency Converter!");

// Print the currencies and their rates
for (const currency in exchangeRates) {
    console.log(`1 USD equals ${exchangeRates[currency]} ${currency}`);
}
console.log("I can convert USD to these currencies: JPY, EUR, RUB, USD, GBP");
console.log("Type the currency you wish to convert: USD");

// Function to convert the amount
function convertCurrency(amount, toCurrency) {
    if (isNaN(amount)) {
        console.log("The amount has to be a number");
        return;
    }

    if (amount < 1) {
        console.log("The amount cannot be less than 1");
        return;
    }

    const upperToCurrency = toCurrency.toUpperCase();
    if (!exchangeRates.hasOwnProperty(upperToCurrency)) {
        console.log("Unknown currency");
        return;
    }

    const result = (amount * exchangeRates[upperToCurrency]).toFixed(4);
    console.log(`Result: ${amount} USD equals ${result} ${upperToCurrency}`);

}

    const readline = require("readline");
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
    });

    rl.question("To: ", (toCurrency) => {
        // Check if the entered currency is in uppercase, convert to uppercase if not
        const upperToCurrency = toCurrency.toUpperCase();
        // Check if the currency is in the list
        if (!exchangeRates.hasOwnProperty(upperToCurrency)) {
            console.log("Unknown currency");
            //rl.close();
            return;
        }

        rl.question("Amount: ", (amount) => {
            convertCurrency(parseFloat(amount), toCurrency);
            rl.close();
        });
    });
