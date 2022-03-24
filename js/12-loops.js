// Приклад 1 - Цикл for
// Напиши цикл for який виводить у консоль браузера числа за зростанням від min до max, але тільки якщо число кратне 5.

// const min = 20;
// const max = 50;

// console.log('start');

// // for (let i = min; i <= max; i += 1) {
// //   if (i % 5 === 0) {
// //     console.log(i);
// //   }
// // }

// for (let i = min; i <= max; i += 1) {
//   if (i % 5 !== 0) {
//     continue;
//   }

//   console.log(i);

//   if (i === 45) {
//     break;
//   }
// }

// console.log('finish');

//////////////////////////////////////////////////////////

// Приклад 2 - Цикл for
//Напишіть цикл for який виводить у консоль браузера числа за спаданням від max до min.

// const max = 100;
// const min = 90;

// for (let i = max; i >= min; i -= 1) {
//   console.log(i);
// }

////////////////////////////////////////////////////

/*
 * Приклад 3 - Запитати у користувача число 3 рази (`Enter a number #${currentCount} of ${totalCount}`)
 * Порахувати суму цих чисел і вивести на екран (`Total sum is ${sum}`)
 * Якщо користувач натиснув Cancel, необхідно зупинити цикл і вивести на екран повідомлення ('You finished the game').
 * Якщо ввів не число, то вивести на екран повідомлення (`${userAnswer} is not a number! Try again`) і перервати цю ітерацію
 */

// WHILE

// 1) лічильник, кількість ітерацій, сума
// 2) умова виконання циклу
// 3) тіло циклу зі зверненням до користувача
// 4) перевірка на Cancel
// 5) перевірка на не число
// 6) лічильник та сума повинні змінюватися

// const totalCount = 3;
// let currentCount = 1;
// let sum = 0;

// while (currentCount <= totalCount) {
//   const userAnswer = prompt(`Enter a number #${currentCount} of ${totalCount}`);

//   if (userAnswer === null) {
//     alert('You finished the game');
//     break;
//   }

//   const userNum = Number(userAnswer);

//   if (Number.isNaN(userNum)) {
//     alert(`${userAnswer} is not a number! Try again`);
//     continue;
//   }

//   sum += userNum;
//   currentCount += 1;
// }

// alert(`Total sum is ${sum}`);

//////////////////////////////////////////////////////////

/*
 * Приклад 4 - Цикл do...while
 * Напишіть цикл, який пропонує ввести число більше 100 через prompt ('Enter a number more than 100').
 * Якщо користувач ввів інше число - попросити ввести ще раз, і так далі ('You missed! Try again').
 * Цикл повинен запитувати число поки:
 * - користувач не введе число, більше 100 ('Well done! You entered [number]!'),
 * - або не натисне кнопку Cancel в prompt ('You finished the game!').
 * Передбачається, що користувач вводить лише цифри.
 * Обробляти нечислові рядки не потрібно.
 */

// DO WHILE

// let userNum = 0;
