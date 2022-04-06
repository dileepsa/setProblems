const isEqual = require('./isEqual.js').isEqual;

const isPresent = function (subset, set) {
  for (let index = 0; index < set.length; index++) {
    if (isEqual(set[index], subset)) {
      return true;
    }
  }

  return false;
};

const getUniqueElements = function (set) {
  const uniqueElements = [];

  for (let index = 0; index < set.length; index++) {
    if (!isPresent(set[index], uniqueElements)) {
      uniqueElements.push(set[index]);
    }
  }

  return uniqueElements;
};

const groupElement = function (element, set) {
  const subset = [];

  for (let position = 0; position < set.length; position++) {
    if (isEqual(element, set[position])) {
      subset.push(set[position]);
    }
  }
  return subset;
};

const groupSameElements = function (set) {
  const uniqueElements = getUniqueElements(set);
  const subsets = [];

  for (let index = 0; index < uniqueElements.length; index++) {
    subsets.push(groupElement(uniqueElements[index], set));
  }

  return subsets;
};

console.log(groupSameElements([1])); //[[1]]
console.log(groupSameElements([1, 2, 1])); //[[1,1], 2]
console.log(groupSameElements([1, 2, 3, 1, 2, 4])); //[[1,1], [2,2], [3], [4]]
console.log(groupSameElements([[1, 1], 1, [1, 1], 1])); //[ [ [ 1, 1 ], [ 1, 1 ] ], [ 1, 1 ] ]
console.log(
  groupSameElements([
    [[1], [2]],
    [[1], [2]],
  ])
);
