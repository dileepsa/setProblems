const countFrequenciesLib = require('./countFrequencies.js');
const countFrequencies = countFrequenciesLib.countFrequencies;

const assertLib = require('./assert.js');
const assert = assertLib.assert;

const testCountFrequencies = function (list, expected, message) {
  assert(countFrequencies(list), expected, message);
};

const countFrequenciesTests = function () {
  testCountFrequencies([1], [[1, 1]], 'Single element');
  testCountFrequencies(
    [1, 2, 1],
    [
      [1, 2],
      [2, 1],
    ],
    'Single element is Repeated'
  );
  testCountFrequencies(
    [1, 2, 3, 1, 2, 4],
    [
      [1, 2],
      [2, 2],
      [3, 1],
      [4, 1],
    ],
    'Multiple Repeated elements'
  );
  testCountFrequencies(
    [1, [1, 1], 1, [1, 1]],
    [
      [1, 2],
      [[1, 1], 2],
    ],
    'Nested Repeated elements'
  );
};

countFrequenciesTests();
