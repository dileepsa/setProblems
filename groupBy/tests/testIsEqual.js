const isEqual = require('..src/isEqual.js').isEqual;

const testIsEqual = function (lhs, rhs, expStatus, description) {
  const testResult = isEqual(lhs, rhs) === expStatus;
  const status = testResult ? '✅' : '❌';

  console.log(status, '-', description);
  return testResult;
};

const isEqualTests = function () {
  testIsEqual(1, 1, true, 'Same numbers');
  testIsEqual('hello', 'hello', true, 'Same strings');
  testIsEqual('hello', 'hi', false, 'Different strings');
  testIsEqual(1, 2, false, 'Different numbers');
  testIsEqual([1], [1], true, 'Same arrays');
  testIsEqual([1], [2], false, 'Different arrays');
  testIsEqual([1, [1]], [1, [1]], true, 'Nested arrays');
  testIsEqual(1, 'hi', false, 'Number and string');
  testIsEqual(1, [1], false, 'Number and Array');
};

isEqualTests();
