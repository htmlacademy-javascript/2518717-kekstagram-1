//Функция для проверки, является ли строка палиндромом. Пример:
// Строка является палиндромом -- имяФункции('топот'); // true
// Несмотря на разный регистр, тоже палиндром -- имяФункции('ДовОд'); // true
// Это не палиндром -- имяФункции('Кекс');  // false
// Это палиндром -- имяФункции('Лёша на полке клопа нашёл '); // true

function isPolindrom(word){
  const noSpace = word.replaceAll(' ', '');
  const lowerCaseWord = noSpace.toLowerCase();
  let countTrue = 0;
  const countCicles = lowerCaseWord.length % 2 ? lowerCaseWord.length / 2 - 1 : lowerCaseWord.length / 2;
  for (let i = 0; i < countCicles; i++) {
    // eslint-disable-next-line no-unused-expressions
    lowerCaseWord[i] === lowerCaseWord[lowerCaseWord.length - 1 - i] ? countTrue++ : countTrue = 0;
  }
  if (countTrue === Math.floor(lowerCaseWord.length / 2)) {
    return true;
  }
  return false;
}
isPolindrom('Лёша на полке клопа нашёл ');
// ==============================================

//Функция для извлечения содержащихся в аргументе цифр от 0 до 9.
// имяФункции('2023 год');            // 2023
// имяФункции('ECMAScript 2022');     // 2022
// имяФункции('1 кефир, 0.5 батона'); // 105
// имяФункции('агент 007');           // 7
// имяФункции('а я томат');           // NaN
// имяФункции(2023); // 2023
// имяФункции(-1);   // 1
// имяФункции(1.5);  // 15

function getNumber(someSimbles){
  const allString = String(someSimbles);
  const noSpace = allString.replaceAll(' ', '');
  let numberRow = '';
  for (let i = 0; i < noSpace.length; i++) {
    // eslint-disable-next-line no-unused-expressions
    Number(noSpace[i]) * 0 === 0 ? numberRow = `${numberRow }${ noSpace[i]}` : 0;
  }
  // eslint-disable-next-line eqeqeq
  if (Number(numberRow) * 0 === 0 && numberRow != '') {
    return Number(numberRow);
  }
  return NaN;
}
getNumber('klю . 2 4 ж!"№;%6%6:7*2?*(ous1');
// ==============================================

//Функция, которая принимает три параметра: исходную строку, минимальную длину и строку с добавочными символами — и возвращает строку, дополненную символами. Примеры:
// Добавочный символ использован один раз
// имяФункции('1', 2, '0');      // '01'

// Добавочный символ использован три раза
// имяФункции('1', 4, '0');      // '0001'

// Добавочные символы обрезаны с конца
// имяФункции('q', 4, 'werty');  // 'werq'

// Добавочные символы использованы полтора раза
// имяФункции('q', 4, 'we');     // 'wweq'

// Добавочные символы не использованы, исходная строка не изменена
// имяФункции('qwerty', 4, '0'); // 'qwerty'

function setString(sorce, lengthPhrase, addPhrase){
  if (sorce.length + addPhrase.length < lengthPhrase) {
    for (let i = sorce.length + addPhrase.length; i < lengthPhrase; i = sorce.length += addPhrase.length) {
      sorce = addPhrase + sorce;
    }
    const remains = lengthPhrase - sorce.length;
    sorce = addPhrase.slice(0, remains) + sorce;
    return String(sorce);
  } else if (sorce.length < lengthPhrase) {
    const countAddSimble = lengthPhrase - sorce.length;
    sorce = addPhrase.slice(0, countAddSimble) + sorce;
    return String(sorce);
  } else {
    return String(sorce);
  }
}
setString('q', 4, 'we');
// ==============================================

// Функция по разделу "Кекстаграм" (возвращает true, если длина строки короче указанной, а иначе false).
// Примеры:
// Cтрока короче 20 символов -- имяФункции('проверяемая строка', 20); // true
// Длина строки ровно 18 символов -- имяФункции('проверяемая строка', 18); // true
// Строка длиннее 10 символов -- имяФункции('проверяемая строка', 10); // false

function comparisonLength (chekedString, number){
  const i = chekedString.length < number;
  return i;
}
comparisonLength('проверяемая строка', 10);
// ==============================================

// Функция по разделу "Кексобукинг" (Функция, возвращающая случайное число с плавающей точкой из переданного диапазона включительно).
// Пример: имя_функции(от, до, количество_знаков_после_запятой); // Результат: число с плавающей точкой из диапазона "от...до" с указанным "количеством знаков после запятой"

function random (beginningRange, endRange, qtyAfterPoint){
  let i;
  if (endRange - beginningRange > 0) {
    i = beginningRange + Math.random() * (endRange - beginningRange);
    return Number(i.toFixed(qtyAfterPoint));
  } else if (beginningRange - endRange > 0){
    i = endRange + Math.random() * (beginningRange - endRange);
    return `Возможно Вы перепутали местами "от" и "до" в аргументах функции. Если это так, то искомое значение будет = ${Number(i.toFixed(qtyAfterPoint))} Но чтобы функция работала корректно, пожалуйста, проверьте ещё раз Ваши данные и внесите их правильно (Подсказка: первый аргумент должен быть меньше второго.)`;
  }
  return NaN;
}
random(1.3, 1.25, 4);
