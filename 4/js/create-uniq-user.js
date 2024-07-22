import { getRandomInteger } from './get-random-array-element.js';

const CreateUniqUser = () => {
  const i = getRandomInteger(1, 10);
  return i < 10 ? `0${i}` : i;
};

export { CreateUniqUser };
