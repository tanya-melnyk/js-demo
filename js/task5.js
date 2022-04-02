/*
 * Є масив із числами. Створіть із нього новий масив, де залишаться лежати лише позитивні числа. Створіть для цього допоміжну функцію isPositive(), яка параметром прийматиме число і повертатиме true, якщо число позитивне, і false - якщо негативне.
 */

const arr = [1, 2, 3, -1, -2, -3];

function isPositive(number) {
  if (number >= 0) {
    return true;
  } else {
    return false;
  }
}

function getNewArr(array) {
  const arr = [];

  // for (let i = 0; i < array.length; i += 1) {
  //   if (isPositive(array[i])) {
  //     arr.push(array[i]);
  //   }
  // }

  for (const item of array) {
    if (isPositive(item)) {
      arr.push(item);
    }
  }

  return arr;
}

console.log(getNewArr(arr));
