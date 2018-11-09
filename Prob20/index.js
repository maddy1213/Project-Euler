/* Problem 20:
n! means n × (n − 1) × ... × 3 × 2 × 1

For example, 10! = 10 × 9 × ... × 3 × 2 × 1 = 3628800,
and the sum of the digits in the number 10! is 3 + 6 + 2 + 8 + 8 + 0 + 0 = 27.

Find the sum of the digits in the number 100! */
//Selected this problem to demonstrate the recursive strategy to get factorial and handle exponential numbers in Javascript

// Get the factorial of a given number recurssively
function factorial(num) {
    //if the number ===1 then return the number else recursively find the factorial.
    if (num === 1) {
        return num;
    }

    return num * factorial(num - 1);
}

function sumOfDigits(num) {
    var sum = 0;
    //Loop through the number till it is >=1
    while (num >= 1) {
        sum += num % 10;
        //Math.trunc returns the integer part of the number
        num = Math.trunc(num / 10);
    }
    //Finally returns the sum of the digits
    return sum;
}
//  Here we are call the function sumOfDigits where we are passing the factorial we get for a given number.
function factorialSum(number) {
    let result = sumOfDigits(factorial(number));
    console.log(result);
    return result;
}
module.exports = factorialSum;