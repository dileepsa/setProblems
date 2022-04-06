const areEqual = function (argument1, argument2) {
  const bothAreArrays = Array.isArray(argument1) && Array.isArray(argument2);

  if (bothAreArrays) {
    const array1 = argument1;
    const array2 = argument2;

    if (array1.length !== array2.length) {
      return false;
    }

    for (let index = 0; index < array1.length; index++) {
      if (!areEqual(array1[index], array2[index])) {
        return false;
      }
    }
    return true;
  }

  return argument1 === argument2;
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
