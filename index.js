const { evaluateExpression, concatenateStrings } = require('./expressionsOperatorsUtils');

// Example usage
const result1 = evaluateExpression(2 + 3 * 4 - 1);
console.log('Result 1:', result1);

const result2 = concatenateStrings('Hello', ' ', 'World');
console.log('Result 2:', result2);