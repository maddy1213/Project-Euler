const factorialSum = require('./index');

test('factorialSum function is defined', () => {
  expect(typeof factorialSum).toEqual('function');
});

test('calculates correct factorialSum value', () => {
  expect(factorialSum(100)).toEqual(659);
});

