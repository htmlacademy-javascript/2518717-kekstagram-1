import {getRandomInteger} from './getRandomArrayElement.js';

function getRandomArray(Array) {
  const previousValues = [];
  const lengthArray = getRandomInteger(1, Array.length);
  let currentValue = Array[getRandomInteger(0, Array.length - 1)];
  for (let index = 0; index < lengthArray; index++) {
    while (previousValues.includes(currentValue) || previousValues.length >= lengthArray) {
      currentValue = Array[getRandomInteger(0, Array.length - 1)];
    }
    previousValues.push(currentValue);
  }
  return previousValues;
}

export{getRandomArray};
