/*
 * Є двомірний масив з числами, наприклад [[1, 2, 3], [4, 5], [6]]. Знайдіть суму елементів цього масиву. Масив, звичайно, може бути довільним.
 */

const arr = [[1, 2, 3], [4, 5], [6]];

function getTotalValue(array) {
  let total = 0;

  for (let i = 0; i < array.length; i += 1) {
    for (let j = 0; j < array[i].length; j += 1) {
      total += array[i][j];
    }
  }

  return total;
}

console.log(getTotalValue(arr));
