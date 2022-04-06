const isEqual = require('./isEqual.js').isEqual;

const countFrequencies = function (array, element) {
  for (let index = 0; index < array.length; index++) {
    if (isEqual(array[index][0], element)) {
      return array[index][1]++;
    }
  }

  return array.push([element, 1]);
};

const frequencies = function (list) {
  const counts = [];

  for (let index = 0; index < list.length; index++) {
    countFrequencies(counts, list[index]);
  }

  return counts;
};

// exports.frequencies = frequencies;
console.log(frequencies([1, 2, 1]));
