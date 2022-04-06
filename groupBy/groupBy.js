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

const groupElement = function (element, list) {
  const group = [];

  for (let position = 0; position < list.length; position++) {
    if (isEqual(element, list[position])) {
      group.push(list[position]);
    }
  }
  return group;
};

const groupBy = function (list) {
  const uniqueElements = getUniqueElements(list);
  const groups = [];

  for (let index = 0; index < uniqueElements.length; index++) {
    groups.push(groupElement(uniqueElements[index], list));
  }

  return groups;
};

exports.groupBy = groupBy;
