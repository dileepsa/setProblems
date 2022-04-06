const isEqual = require('./isEqual.js').isEqual;

const countOccurrence = function (array, element) {
  for (let index = 0; index < array.length; index++) {
    if (isEqual(array[index][0], element)) {
      return array[index][1]++;
    }
  }

  return array.push([element, 1]);
};

const groupFrequencies = function (list) {
  const counts = [];

  for (let index = 0; index < list.length; index++) {
    countOccurrence(counts, list[index]);
  }

  return counts;
};

exports.groupFrequencies = groupFrequencies;
