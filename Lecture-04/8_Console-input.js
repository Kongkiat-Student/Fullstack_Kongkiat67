const rl = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('What is your name? ', (name) => {
    rl.question('Enter your weigth (in kg.): ', (weigth) => {
        rl.question('Enter your height (in meters): ', (height) => {
            let bmi = weigth / (height * height);
            console.log(`Hello ${name}, your BMI is ${bmi.toFixed(2)}`);
            rl.close();
        });
    });
});