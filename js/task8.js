/*
 * Є масив із числами. Виведіть послідовно його елементи, використовуючи рекурсію і не використовуючи цикл.
 */

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// function withoutFor(arr) {
//   console.log(arr[0]);
//   arr.splice(0, 1);

//   if (arr.length > 0) {
//     withoutFor(arr);
//   }
// }

// withoutFor(array);

function withoutFor(arr, index = 0) {
  if (index >= arr.length) {
    return;
  }

  console.log(arr[index]);

  withoutFor(arr, index + 1);
}

withoutFor(array, 0);
