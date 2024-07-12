import {getRandomInteger} from './getRandomArrayElement.js';

const CreateUnicUser = () => {
  const i = getRandomInteger(1, 10);
  if (i < 10) {
    return `0${i}`;
  }
  return i;
};

export{CreateUnicUser};
