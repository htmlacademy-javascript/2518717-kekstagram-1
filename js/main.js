// Задание по Кекстаграм
// ================================================================================

import { fullDescriptionRooms } from './full-description-rooms.js';
import { descriptionPhotos } from './description-photos.js';

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

const NAME_AUTHORS = ['Артём', 'Гена', 'Чебурашка', 'Шапокляк', 'Просто босс'];

descriptionPhotos();

export{DESCRIPTION_PHOTOS};
export{TEXT_COMMENTS};
export{NAME_AUTHORS};

// Задание по Кексобукинг
// ================================================================================

const TYPE_LOCATION = ['palace', 'flat', 'house', 'bungalow', 'hotel'];
const TIME_CHECK = ['12:00', '13:00', '14:00'];
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
export{TYPE_LOCATION};
export{TIME_CHECK};
export{TYPE_FEATURES};
export{DESCRIPTION_ROOMS};
export{PHOTO_ROOMS};
export{TITLE_ROOMS};

fullDescriptionRooms();
