const operation = require("./operation.js")

function printCalculation(operator, calculate) {
    console.log("6 " + operator + " 7 = " + calculate(6, 7));
}

printCalculation("+", operation.sum);
printCalculation("-", operation.difference);
printCalculation("*", operation.product);
printCalculation("/", operation.quotient);