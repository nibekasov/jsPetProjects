// Use "input()" to input a line from the user
// Use "input(str)" to print some text before requesting input
// You will need this in the following stages
const input = require('sync-input')

function calculateIngredients(cups) {
    const waterPerCup = 200;
    const milkPerCup = 50;
    const coffeeBeansPerCup = 15;

    const totalWater = waterPerCup * cups;
    const totalMilk = milkPerCup * cups;
    const totalCoffeeBeans = coffeeBeansPerCup * cups;

    return {
        water: totalWater,
        milk: totalMilk,
        coffeeBeans: totalCoffeeBeans
    };
}

const cupsOfCoffee = parseInt(input("> "), 10);

const ingredients = calculateIngredients(cupsOfCoffee);

console.log(`For ${cupsOfCoffee} cups of coffee you will need:`);
console.log(`${ingredients.water} ml of water`);
console.log(`${ingredients.milk} ml of milk`);
console.log(`${ingredients.coffeeBeans} g of coffee beans`);
