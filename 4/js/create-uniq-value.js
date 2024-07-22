import { getRandomInteger } from './get-random-array-element.js';

function createUniqValue(beginningRange, endRange) {
  const previousValues = [];
  return function () {
    let currentValue = getRandomInteger(beginningRange, endRange);
    if (previousValues.length >= endRange - beginningRange + 1) {
      return null;
    }
    while (previousValues.includes(currentValue)) {
      currentValue = getRandomInteger(beginningRange, endRange);
    }
    previousValues.push(currentValue);
    return currentValue;
  };
}

export { createUniqValue };
