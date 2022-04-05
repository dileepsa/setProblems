const areArraysEqual = function (array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  }

  for (let index = 0; index < array1.length; index++) {
    if (array1[index] !== array2[index]) {
      return false;
    }
  }

  return true;
};

const areEqual = function (element1, element2) {
  if (Array.isArray(element1) && Array.isArray(element2)) {
    return areArraysEqual(element1, element2);
  }

  return element1 === element2;
};

const isPresent = function (subset, set) {
  for (let index = 0; index < set.length; index++) {
    if (areEqual(set[index], subset)) {
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
    if (areEqual(element, set[position])) {
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

console.log(groupSameElements([1, 2, 1])); //[[1,1], 2]
console.log(groupSameElements([1, 2, 3, 1, 2, 4])); //[[1,1], [2,2], [3], [4]]
console.log(groupSameElements([[1, 1], 1, [1, 1], 1])); //[ [ [ 1, 1 ], [ 1, 1 ] ], [ 1, 1 ] ]
