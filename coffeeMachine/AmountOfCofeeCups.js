const input = require('sync-input')

function calculateMaxCups(water, milk, coffeeBeans) {
    const waterPerCup = 200;
    const milkPerCup = 50;
    const coffeeBeansPerCup = 15;

    const maxWaterCups = Math.floor(water / waterPerCup);
    const maxMilkCups = Math.floor(milk / milkPerCup);
    const maxCoffeeBeansCups = Math.floor(coffeeBeans / coffeeBeansPerCup);

    return Math.min(maxWaterCups, maxMilkCups, maxCoffeeBeansCups);
}

console.log("Write how many ml of water the coffee machine has:");
const availableWater = parseInt(input(), 10);

console.log("Write how many ml of milk the coffee machine has:");
const availableMilk = parseInt(input(), 10);

console.log("Write how many grams of coffee beans the coffee machine has:");
const availableCoffeeBeans = parseInt(input(), 10);

console.log("Write how many cups of coffee you will need:");
const cupsOfCoffeeNeeded = parseInt(input(), 10);

const maxCups = calculateMaxCups(availableWater, availableMilk, availableCoffeeBeans);

if (cupsOfCoffeeNeeded <= maxCups) {
    const additionalCups = maxCups - cupsOfCoffeeNeeded;
    if (additionalCups === 0) {
        console.log("Yes, I can make that amount of coffee");
    } else {
        console.log(`Yes, I can make that amount of coffee (and even ${additionalCups} more that that`)
    }
} else {
    console.log(`No, I can make only ${maxCups} cups of coffee`);
}