const isEqual = require('./isEqual.js').isEqual;

const countFrequency = function (array, element) {
  for (let index = 0; index < array.length; index++) {
    if (isEqual(array[index][0], element)) {
      return array[index][1]++;
    }
  }

  return array.push([element, 1]);
};

const countFrequencies = function (list) {
  const counts = [];

  for (let index = 0; index < list.length; index++) {
    countFrequency(counts, list[index]);
  }

  return counts;
};

exports.countFrequencies = countFrequencies;
