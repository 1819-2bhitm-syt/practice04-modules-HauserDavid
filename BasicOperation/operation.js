function sum(num1, num2) {
    return num1 + num2;
}

function difference(num1, num2){
    return num1 - num2;
}

function product(num1, num2){
    return num1 * num2;
}

function quotient(num1, num2){
    return num1 / num2;
}

modules.export.quotient = quotient;
modules.export.product = product;
modules.export.difference = difference;
modules.export.sum =  sum;