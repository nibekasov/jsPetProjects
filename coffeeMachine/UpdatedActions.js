// Use "input()" to input a line from the user
// Use "input(str)" to print some text before requesting input
// You will need this in the following stages
const input = require('sync-input')

let money = 550;
let water = 400;
let milk = 540;
let coffeeBeans = 120;
let disposableCups = 9;

function printCoffeeMachineState() {
    console.log(`The coffee machine has:\n${water} ml of water\n${milk} ml of milk`);
    console.log(`${coffeeBeans} g of coffee beans\n${disposableCups} disposable cups`);
    console.log(`$${money} of money`);
}

function buyCoffee(choice) {
    let waterNeeded, milkNeeded, beansNeeded, cost;
    switch (choice) {
        case 1: // Espresso
            waterNeeded = 250;
            milkNeeded  = 0;
            beansNeeded = 16;
            cost = 4;
            break;
        case 2: // Latte
            waterNeeded = 350;
            milkNeeded = 75;
            beansNeeded = 20;
            cost = 7;
            break;
        case 3: // Cappuchino
            waterNeeded = 200;
            milkNeeded = 100;
            beansNeeded = 12;
            cost = 6;
            break;
        default:
            console.log("Invalid choice!");
            return;
    }

    if (water >= waterNeeded && milk >= milkNeeded && coffeeBeans >= beansNeeded && disposableCups > 0) {
        console.log("I have enough resources. Making your coffee!");
        water -= waterNeeded;
        milk -= milkNeeded;
        coffeeBeans -= beansNeeded;
        disposableCups--;
        money += cost;
    } else {
        let missingResource = "";
        if (water < waterNeeded) missingResource = "water";
        else if (milk < milkNeeded) missingResource = "milk";
        else if (coffeeBeans < beansNeeded) missingResource = "coffee beans";
        else if (disposableCups === 0) missingResource = "disposable cups";

        console.log(`Sorry, not enough ${missingResource}!`);
    }
}

function fillSupplies() {
    console.log("Write how many ml of water you want to add:");
    water += parseInt(input(),10);

    console.log("Write how many ml of milk you want to add:");
    milk += parseInt(input(), 10);

    console.log("Write how many grams of coffee beans you want to add:")
    coffeeBeans += parseInt(input(), 10);

    console.log("Write how many disposable cups you want to add:")
    disposableCups += parseInt(input(), 10);
}

function takeMoney() {
    console.log(`I gave you $${money}`);
    money = 0;
}

while (true) {
    console.log("\nWrite action (buy, fill, take, remaining, exit):")
    const action = input();
    switch (action) {
        case "buy":
            console.log("What do you want to buy? 1 - espresso, 2 - latte, 3 - cappuccino:");
            const choice = parseInt(input(), 10);
            buyCoffee(choice);
            break;
        case "fill":
            fillSupplies();
            break;
        case "take":
            takeMoney();
            break;
        case "remaining":
            printCoffeeMachineState();
            break;
        case "exit":
            process.exit(0);
        default:
            console.log("Invalid action!");
    }
}
console.log("\nThe coffee machine has been updated:");
printCoffeeMachineState();