// todo Сортування масиву із циклом
/*
 * Напиши скрипт сортування масиву рядків в алфавітному порядку за першою літерою елемента.
 */

const langs = [
  'python',
  'javascript',
  'abb',
  'beta',
  'c++',
  'haskell',
  'php',
  'ruby',
];

function getMinValue(array) {
  let minEl = array[0];

  for (const item of array) {
    if (minEl > item) {
      minEl = item;
    }
  }

  return minEl;
}

function sortArray(array) {
  const newArr = [];

  for (; array.length; ) {
    newArr.push(array.splice(array.indexOf(getMinValue(array)), 1));
  }

  return newArr;
}

console.table(sortArray(langs));
