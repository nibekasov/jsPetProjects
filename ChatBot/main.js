const input = require('sync-input');

function greet(bot_name, birth_year) {
    console.log("Hello! My name is " + bot_name + ".");
    console.log("I was created in " + birth_year + ".");
}

function remind_name() {
    console.log("Please, remind me your name.");
    let name = input();
    console.log("What a great name you have, " + name + "!");
}

function guess_age() {
    console.log("Let me guess your age.");
    console.log("Enter remainders of dividing your age by 3, 5 and 7.");

    let rem3 = Number(input());
    let rem5 = Number(input());
    let rem7 = Number(input());

    let age = (rem3 * 70 + rem5 * 21 + rem7 * 15) % 105;

    console.log("Your age is " + age + "; that's a good time to start programming!");
}

function count() {
    console.log("Now I will prove to you that I can count to any number you want.");

    let number = Number(input());
    let current = 0;

    while (current <= number) {
        console.log(current + " !");
        current += 1;
    }
}

function test() {
    console.log("Let's test your knowledge of Time Series and Machine Learning.");
    console.log("Question 1: What is a time series?");
    console.log("1. A dataset that contains only numerical values.");
    console.log("2. A sequence of data points measured at successive points in time.");
    console.log("3. A type of machine learning algorithm used for image recognition.");
    console.log("4. A method for sorting data based on timestamps.");

    let answer1 = 2;

    let userAnswer1 = Number(input());

    while (userAnswer1 !== answer1) {
        console.log("Please, try again.");
        userAnswer1 = Number(input());
    }
    //console.log("Congratulations, have a nice day!")
    console.log("Correct! Moving on to the next question.");

    console.log("Question 2: What is the purpose of time series forecasting?");
    console.log("1. To analyze historical data for patterns and trends.");
    console.log("2. To predict future values based on past observations.");
    console.log("3. To categorize data points into different time intervals.");
    console.log("4. To identify anomalies in the dataset.");

    let answer2 = 2;

    let userAnswer2 = Number(input());

    while (userAnswer2 !== answer2) {
      console.log("Please, try again.");
      userAnswer2 = Number(input());
    }

    console.log("Correct! One more question to go.");

    console.log("Question 3: Which machine learning algorithm is commonly used for time series forecasting?");
    console.log("1. Support Vector Machine (SVM)");
    console.log("2. Decision Tree");
    console.log("3. k-Nearest Neighbors (k-NN)");
    console.log("4. Autoregressive Integrated Moving Average (ARIMA)");

    let answer3 = 4;

    let userAnswer3 = Number(input());

    while (userAnswer3 !== answer3) {
      console.log("Please, try again.");
      userAnswer3 = Number(input());
    }

    console.log("Congratulations, you've completed the quiz! Have a nice day!");
  }

    function end() {
        console.log("Completed, have a nice day!");
    }


    greet('Hall-9000', '2023')  // change it as you need
    remind_name();
    guess_age();
    count();
    test();
    end();
