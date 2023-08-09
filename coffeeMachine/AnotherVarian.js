// Use "input()" to input a line from the user
// Use "input(str)" to print some text before requesting input
// You will need this in the following stages
const input = require('sync-input');


const coffee_machine = {
    resources: {
        money: 550,
        water: 400,
        milk: 540,
        beans: 120,
        cups: 9
    },
    coffee_recipe: {
        espresso: {
            water: 250,
            beans: 16,
            money: -4,
            cups: 1
        },
        latte: {
            water: 350,
            milk: 75,
            beans: 20,
            money: -7,
            cups: 1
        },
        cappuccino: {
            water: 200,
            milk: 100,
            beans: 12,
            money: -6,
            cups: 1
        },

    },
    remaining: function (){
        console.log(`\nThe coffee machine has:
${this.resources.water} ml of water
${this.resources.milk} ml of milk
${this.resources.beans} g of coffee beans
${this.resources.cups} disposable cups
$${this.resources.money} of money\n`);
    },

    fill: function () {
        console.log(`Write how many ml of water you want to add:`);
        this.resources.water += Number(input());
        console.log(`Write how many ml of milk you want to add:`);
        this.resources.milk += Number(input());
        console.log(`Write how many grams of coffee beans you want to add:`);
        this.resources.beans += Number(input());
        console.log(`Write how many disposable coffee cups you want to add:`);
        this.resources.cups += Number(input());
        console.log('\n')
    },
    take: function (){
        console.log(`I gave you $${this.resources.money}`)
        console.log('\n')
        this.resources.money = 0;
    },
    buy: function (){
        console.log(`\nWhat do you want to buy? 1 - espresso, 2 - latte, 3 - cappuccino:`);
        const user_chose = Number(input());
        let product = ``;
        switch (user_chose) {
            case 1:
                product = `espresso`;
                break;
            case 2:
                product = `latte`;
                break;
            case 3:
                product = `cappuccino`;
                break;
            default:
                console.assert(`Wrong input`);
                break;
        }
        if(product !== '') {
            this.brew(product);
        }
    },
    transaction: function (resource_input) {
        let hasError = false;
        let neededResource = [];
        for(const resource in resource_input) {
            if(this.resources[resource] - resource_input[resource] < 0) {
                hasError = true;
                neededResource.push(resource);
            }
        }

        const transaction_status = !hasError;
        if(hasError) {
            return {transaction_status, neededResource};
        }
        for (const resource in resource_input) {
            this.resources[resource] -= resource_input[resource];
        }
        return {transaction_status, neededResource};
    },
    brew: function (product){
        const transaction_response = this.transaction(this.coffee_recipe[product]);
        if(transaction_response.transaction_status) {
            console.log(`I have enough resources, making you a coffee!\n`)
        }
        else {
            console.log(`Sorry, I have not enough ${transaction_response.neededResource}!\n`);
        }
    },
    take_user_action: function () {
        let isOn = true;
        while (isOn) {
            console.log(`Write action (buy, fill, take):`);
            const user_chose = input();
            switch (user_chose){
                case `buy`:
                    this.buy();
                    break;
                case `fill`:
                    this.fill();
                    break;
                case `take`:
                    this.take();
                    break;
                case 'remaining':
                    this.remaining();
                    break;
                case 'exit':
                    isOn = false;
                    break;
                default:
                    console.log(`Unknown input`)
                    break;
            }
        }
    }
}
coffee_machine.take_user_action();





