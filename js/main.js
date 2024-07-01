// Задание по Кекстаграм
// ================================================================================
const getRandomInteger = (beginningRange, endRange, qtyAfterPoint = 0) => {
  let i;
  if (endRange - beginningRange > 0) {
    i = beginningRange + Math.random() * (endRange - beginningRange);
    return Number(i.toFixed(qtyAfterPoint));
  }
  return NaN;
};

const descriptionPhoto = [
  'Редкий кадр стоил автору долгих томительных часов ожидания',
  'Лучшая работа автора',
  'Тонко подмечены детали',
  'Прекрасный фон',
  'Глаз не отвести',
];

const textComments = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];

const nameAuthors = [
  'Артём',
  'Гена',
  'Чебурашка',
  'Шапокляк',
  'Просто босс',
];

function createUnicValue (beginningRange, endRange, qtyAfterPoint = 0){
  const previousValues = [];
  return function (){
    let currentValue = getRandomInteger (beginningRange, endRange, qtyAfterPoint = 0);
    if (previousValues.length >= (endRange - beginningRange + 1)) {
      console.error('Перебраны все числа из диапазона от ' + beginningRange + ' до ' + endRange);
      return null;
    }
    while (previousValues.includes(currentValue)) {
      currentValue = getRandomInteger(beginningRange, endRange, qtyAfterPoint = 0);
    }
    previousValues.push(currentValue);
    return currentValue;
  };
}

const getRandomArrayElement = (elements) => elements[getRandomInteger(0, elements.length - 1)];

const createUnicId = createUnicValue(1, 25);
const createUnicIdComment = createUnicValue(1, 10000000);

const descriptionPhotos = () => ({
  id: createUnicId(),
  url: `photos/${createUnicId()}.jpg`,
  description: getRandomArrayElement(descriptionPhoto),
  likes: getRandomInteger(15,200),
  comments: {
    id: createUnicIdComment(),
    avatar: `img/avatar-${getRandomInteger(1,6)}.svg`,
    message: getRandomArrayElement(textComments),
    name: getRandomArrayElement(nameAuthors),
  }
});
// console.log(descriptionPhotos());

// Задание по Кексобукинг
// ================================================================================

const createUnicUser = createUnicValue(1, 10);

const typeLocation = [
  'palace',
  'flat',
  'house',
  'bungalow',
  'hotel',
];
const timeCheck = [
  '12:00',
  '13:00',
  '14:00',
];
const typeFeatures = [
  'wifi',
  'dishwasher',
  'parking',
  'washer',
  'elevator',
  'conditioner',
];

function getFuteres(Array) {
  const previousValues = [];
  const lengthArray = getRandomInteger(1, Array.length - 1);
  return function (){
    let currentValue = getRandomInteger(1, lengthArray - 1);
    while (previousValues.includes(currentValue) || previousValues.length >= lengthArray) {
      currentValue = getRandomInteger(0, lengthArray);
    }
    previousValues.push(currentValue);
    return previousValues;
  };
}
// console.log(getFuteres(typeFeatures));

const descriptionRooms = [
  'Уютный номер с прекрасным видом',
  'Просторный, светлый номер',
  'Комфорт для гостей - наш приоритет',
  'Прекрасный номер для полноценного отдыха',
  'Побывав здесь, Вы обязательно вернётесь!',
];
const photoRooms = [
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg',
];
const titleRooms = [
  'Лучший номер10',
  'Лучшее сочетание "Цена-качество"',
  'Наш дивиз - "Чистота и забота!"',
  'Ваш отдых - наше призвание!',
  'Три номера по цене двух!',
  'У нас скучно не будет!',
];

const fullDescriptionRooms = () => ({
  author: {
    avatar: `img/avatars/user${createUnicUser() < 10 ? `0${createUnicUser()}` : createUnicUser()}}.png`,
  },//Перед однозначными числами ставится 0. Например, 01, 02...10 - (НЕ РЕШИЛ).
  offer: {
    title: getRandomArrayElement(titleRooms),
    address: {
      lat: getRandomInteger(35.65000,35.70000, 5),//число с плавающей точкой — широта, случайное значение от 35.65000 до 35.70000
      lng: getRandomInteger(139.70000,139.80000, 5),//число с плавающей точкой — долгота, случайное значение от 139.70000 до 139.80000
    },
    price: getRandomInteger(1000,10000),
    type: getRandomArrayElement(typeLocation),//одно из пяти фиксированных значений: palace, flat, house, bungalow или hotel
    rooms: getRandomInteger(1,5),
    guests: getRandomInteger(1,10),
    checkin:getRandomArrayElement(timeCheck),
    checkout:getRandomArrayElement(timeCheck),
    features: [getRandomArrayElement(typeFeatures)],//???????? массив строк — массив случайной длины из значений: wifi, dishwasher, parking, washer, elevator, conditioner. Значения не должны повторяться.
    description: getRandomArrayElement(descriptionRooms),
    photos: [photoRooms],//?????? массив случайной длины из значений
    location: {
      lat: getRandomInteger(35.65000,35.70000, 5),//число с плавающей точкой — широта, случайное значение от 35.65000 до 35.70000
      lng: getRandomInteger(139.70000,139.80000, 5),//число с плавающей точкой — долгота, случайное значение от 139.70000 до 139.80000
    },
  }
});
// console.log(fullDescriptionRooms());

