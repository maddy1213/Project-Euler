/* Question No 6
The sum of the squares of the first ten natural numbers is,
(1*1)+(2*2)+(3*3)+.....+(10*10) = 385
The square of the sum of the first ten natural numbers is,
(1+2+3+4+....+10)*(1+2+3+4+....+10) = 3025
Hence the difference between the sum of the squares of the first ten natural numbers and the square of the sum is 
3025−385=2640.
Find the difference between the sum of the squares of the first one hundred natural numbers and the square of the sum.
Simple and easy prob to demonstrate
*/

function differenceOfSquares() {
  // function to find sum of squares of first n natural numbers
  function sumOfSquares(numbers) {
    let total = 0
    //interates through the number and returns square of each number and adds to the sum
    numbers.forEach((num) => {
      total += num * num;
    });
    // finally returns the sum of all the squares.
    return total
  }
  // function to find square of the sum of first n natural numbers
  function squareOfSum(numbers) {
    let total = 0
    //Iterates through the numbers and returns the sum
    numbers.forEach((num) => {
      total += num;
    });
    //Returns the square of the sum
    return total * total
  }
  // .keys() returns new Array Iterator Object that has the kyes
  numbers = [...Array(101).keys()];

  // Returns the difference between sum of the squares and square of the sum of first n natural numbers
  console.log(squareOfSum(numbers) - sumOfSquares(numbers));
  return squareOfSum(numbers) - sumOfSquares(numbers);
}
// export the module

module.exports = differenceOfSquares;