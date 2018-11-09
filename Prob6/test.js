const differenceOfSquares = require('./index');

test('differenceOfSquares function is defined', () => {
  expect(typeof differenceOfSquares).toEqual('function');
});

test('calculates correct sum of squares value', () => {
  expect(differenceOfSquares()).toEqual(25164150);
});


