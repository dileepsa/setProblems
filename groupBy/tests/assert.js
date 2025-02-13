const isEqual = require('../src/isEqual.js').isEqual;

const assert = function (actual, expected, message) {
  const testResult = isEqual(actual, expected);
  const status = testResult ? '✅' : '❌';
  console.log(status, '-', message);

  return testResult;
};

exports.assert = assert;
