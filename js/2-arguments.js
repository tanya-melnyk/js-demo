// 2 - Псевдомасив arguments (у стрілочних функцій його немає)

/*
  Напишіть функцію calculateAverage(), яка приймає довільну кількість аргументів і повертає їхнє середнє значення.
  Всі аргументи, що передаються, будуть лише числами.
*/

// const calculateAverage = function () {
//   let sum = 0;

//   for (const arg of arguments) {
//     sum += arg;
//   }

//   return sum / arguments.length;
// };

// console.log(calculateAverage(1, 2, 3, 4)); // 2.5
// console.log(calculateAverage(14, 8, 2)); // 8
// console.log(calculateAverage(27, 43, 2, 8, 36)); // 23.2

//////////////////////////////////////////////////////////////////

/*
  Написати функцію addUniqueNumbers(...), яка отримує першим параметром масив унікальних чисел, а другим і далі - довільну кількість чисел.
  Функція повинна додати до масиву з унікальними числами тільки нові для нього числа з-поміж інших аргументів, а ті які в масиві вже є ігнорує.
  Новий масив має повертатися із функції.
*/

// function addUniqueNumbers() {
//   const uniqueNumbersCopy = arguments[0].concat();
//   const restArguments = Array.from(arguments).slice(1);

//   for (const arg of restArguments) {
//     if (!uniqueNumbersCopy.includes(arg)) {
//       uniqueNumbersCopy.push(arg);
//     }
//   }
//   return uniqueNumbersCopy;
// }

// const addUniqueNumbers = (uniqueNums, ...restArguments) => {
//   const uniqueNumbersCopy = uniqueNums.concat();

//   for (const arg of restArguments) {
//     if (!uniqueNumbersCopy.includes(arg)) {
//       uniqueNumbersCopy.push(arg);
//     }
//   }
//   return uniqueNumbersCopy;
// };

// const uniqueNumbers = [2, 1, 4, 9];

// //////// Виклики функції для перевірки

// const newArray = addUniqueNumbers(uniqueNumbers, 4, 5, 12, 3, 1, 2, 8);
// console.log('uniqueNumbers', uniqueNumbers); // [2, 1, 4, 9]
// console.log('newArray', newArray); // [2, 1, 4, 9, 5, 12, 3, 8]

// const newArray = addUniqueNumbers(uniqueNumbers, 1, 2, 3);
// console.log('uniqueNumbers', uniqueNumbers); // [2, 1, 4, 9]
// console.log('newArray', newArray); // [2, 1, 4, 9, 3]

// const newArray = addUniqueNumbers(uniqueNumbers, 9, 2, 3, 19);
// console.log('uniqueNumbers', uniqueNumbers); // [2, 1, 4, 9]
// console.log('newArray', newArray); // [2, 1, 4, 9, 3, 19]
