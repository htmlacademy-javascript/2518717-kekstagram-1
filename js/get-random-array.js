import { getRandomInteger } from './get-random-array-element.js';

function getRandomArray(array) {
  const previousValues = [];
  const lengthArray = getRandomInteger(1, array.length);
  let currentValue = array[getRandomInteger(0, array.length - 1)];
  for (let index = 0; index < lengthArray; index++) {
    while (
      previousValues.includes(currentValue) ||
      previousValues.length >= lengthArray
    ) {
      currentValue = array[getRandomInteger(0, array.length - 1)];
    }
    previousValues.push(currentValue);
  }
  return previousValues;
}

export { getRandomArray };
