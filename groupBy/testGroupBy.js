const groupByLib = require('./groupBy.js');
const groupBy = groupByLib.groupBy;

const assertLib = require('./assert.js');
const assert = assertLib.assert;

const testGroupBy = function (list, expected, message) {
  assert(groupBy(list), expected, message);
};

const groupByTests = function () {
  testGroupBy([1], [[1]], 'Single element');
  testGroupBy([1, 2, 1], [[1, 1], [2]], 'Repeated elements');
  testGroupBy(
    [1, 2, 3, 1, 2, 4],
    [[1, 1], [2, 2], [3], [4]],
    'Repeated elements'
  );
};

groupByTests();
