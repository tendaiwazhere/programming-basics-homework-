const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter first number: ", function(first) {
    rl.question("Enter second number: ", function(second) {
        // Number() converts the input text into numbers.
        let num1 = Number(first);
        let num2 = Number(second);

        console.log("Sum:", num1 + num2);
        console.log("Difference:", num1 - num2);
        console.log("Product:", num1 * num2);
        console.log("Quotient:", num1 / num2);

        rl.close();
    });
});