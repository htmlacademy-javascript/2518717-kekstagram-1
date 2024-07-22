import { getRandomInteger } from './get-random-array-element.js';
import { getRandomArrayElement } from './get-random-array-element.js';
import { getRandomArray } from './get-random-array.js';
import { CreateUniqUser } from './create-uniq-user.js';
import { TITLE_ROOMS } from './main.js';
import { TYPE_LOCATION } from './main.js';
import { TIME_CHECK } from './main.js';
import { TYPE_FEATURES } from './main.js';
import { DESCRIPTION_ROOMS } from './main.js';
import { PHOTO_ROOMS } from './main.js';

const fullDescriptionRooms = () => ({
  author: {
    avatar: `img/avatars/user${CreateUniqUser()}.png`,
  },
  offer: {
    title: getRandomArrayElement(TITLE_ROOMS),
    address: {
      lat: getRandomInteger(35.65, 35.7, 5),
      lng: getRandomInteger(139.7, 139.8, 5),
    },
    price: getRandomInteger(1000, 10000),
    type: getRandomArrayElement(TYPE_LOCATION),
    rooms: getRandomInteger(1, 5),
    guests: getRandomInteger(1, 10),
    checkin: getRandomArrayElement(TIME_CHECK),
    checkout: getRandomArrayElement(TIME_CHECK),
    features: getRandomArray(TYPE_FEATURES),
    description: getRandomArrayElement(DESCRIPTION_ROOMS),
    photos: getRandomArray(PHOTO_ROOMS),
    location: {
      lat: getRandomInteger(35.65, 35.7, 5),
      lng: getRandomInteger(139.7, 139.8, 5),
    },
  },
});

export{fullDescriptionRooms};
