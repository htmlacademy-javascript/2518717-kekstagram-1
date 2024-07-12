// Задание по Кекстаграм
// ================================================================================
import {getRandomInteger} from './getRandomArrayElement.js';
import {getRandomArrayElement} from './getRandomArrayElement.js';
import {getRandomArray} from './getRandomArray.js';
import {createUnicValue} from './createUnicValue.js';
import {CreateUnicUser} from './CreateUnicUser.js';

const DESCRIPTION_PHOTOS = [
  'Редкий кадр стоил автору долгих томительных часов ожидания',
  'Лучшая работа автора',
  'Тонко подмечены детали',
  'Прекрасный фон',
  'Глаз не отвести',
];

const TEXT_COMMENTS = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];

const NAME_AUTHORS = [
  'Артём',
  'Гена',
  'Чебурашка',
  'Шапокляк',
  'Просто босс',
];

const createUnicId = createUnicValue(1, 25);
const createUnicIdComment = createUnicValue(1, 10000000);

const DescriptionPhotos = () => ({
  id: createUnicId(),
  url: `photos/${createUnicId()}.jpg`,
  description: getRandomArrayElement(DESCRIPTION_PHOTOS),
  likes: getRandomInteger(15,200),
  comments: {
    id: createUnicIdComment(),
    avatar: `img/avatar-${getRandomInteger(1,6)}.svg`,
    message: getRandomArrayElement(TEXT_COMMENTS),
    name: getRandomArrayElement(NAME_AUTHORS),
  }
});
DescriptionPhotos();

// Задание по Кексобукинг
// ================================================================================

const TYPE_LOCATION = [
  'palace',
  'flat',
  'house',
  'bungalow',
  'hotel',
];
const TIME_CHECK = [
  '12:00',
  '13:00',
  '14:00',
];
const TYPE_FEATURES = [
  'wifi',
  'dishwasher',
  'parking',
  'washer',
  'elevator',
  'conditioner',
];

const DESCRIPTION_ROOMS = [
  'Уютный номер с прекрасным видом',
  'Просторный, светлый номер',
  'Комфорт для гостей - наш приоритет',
  'Прекрасный номер для полноценного отдыха',
  'Побывав здесь, Вы обязательно вернётесь!',
];
const PHOTO_ROOMS = [
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg',
];
const TITLE_ROOMS = [
  'Лучший номер10',
  'Лучшее сочетание "Цена-качество"',
  'Наш дивиз - "Чистота и забота!"',
  'Ваш отдых - наше призвание!',
  'Три номера по цене двух!',
  'У нас скучно не будет!',
];

const FullDescriptionRooms = () => ({
  author: {
    avatar: `img/avatars/user${CreateUnicUser()}.png`,
  },
  offer: {
    title: getRandomArrayElement(TITLE_ROOMS),
    address: {
      lat: getRandomInteger(35.65000,35.70000, 5),
      lng: getRandomInteger(139.70000,139.80000, 5),
    },
    price: getRandomInteger(1000,10000),
    type: getRandomArrayElement(TYPE_LOCATION),
    rooms: getRandomInteger(1,5),
    guests: getRandomInteger(1,10),
    checkin: getRandomArrayElement(TIME_CHECK),
    checkout: getRandomArrayElement(TIME_CHECK),
    features: getRandomArray(TYPE_FEATURES),
    description: getRandomArrayElement(DESCRIPTION_ROOMS),
    photos: getRandomArray(PHOTO_ROOMS),
    location: {
      lat: getRandomInteger(35.65000,35.70000, 5),
      lng: getRandomInteger(139.70000,139.80000, 5),
    },
  }
});
FullDescriptionRooms();
