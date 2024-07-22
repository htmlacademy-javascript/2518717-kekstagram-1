const getRandomInteger = (beginningRange, endRange, qtyAfterPoint = 0) => {
  let i;
  if (endRange - beginningRange > 0) {
    i = beginningRange + Math.random() * (endRange - beginningRange);
    return Number(i.toFixed(qtyAfterPoint));
  }
  return NaN;
};

const getRandomArrayElement = (elements) => elements[getRandomInteger(0, elements.length - 1)];

export {getRandomArrayElement};

export {getRandomInteger};
