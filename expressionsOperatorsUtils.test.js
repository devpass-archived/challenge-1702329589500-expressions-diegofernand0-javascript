const { evaluateExpression, concatenateStrings } = require('./expressionsOperatorsUtils');

test('Evaluate Expression', () => {
  expect(evaluateExpression(2 + 3 * 4 - 1)).toBe(13);
  expect(evaluateExpression((10 - 2) * 5 / 3)).toBe(12.666666666666666);
  expect(evaluateExpression(5 ** 2)).toBe(25);
});

test('Concatenate Strings', () => {
  expect(concatenateStrings('Hello', ' ', 'World')).toBe('Hello World');
  expect(concatenateStrings('Hello', ' World')).toBe('Hello World');
  expect(concatenateStrings('Hello', ' ', 'Beautiful', ' ', 'World')).toBe('Hello Beautiful World');
});