/*
 * Тернарний оператор

 * Бажано використовувати тільки:
 * - якщо є тільки два варіанти, тобто як аналог if...else
 * - якщо потрібно привласнити значення зміннїй за умовою
 * - якщо потрібно повернути щось із функції за умовою
 */

// Перепишіть if...else за допомогою тернарного оператора

// const cash = 90;
// const taxiPrice = 100;
// // let result;

// // if (cash >= taxiPrice) {
// //   result = 'Let`s go!';
// // } else {
// //   result = 'Not enough';
// // }

// const result = cash >= taxiPrice ? 'Let`s go!' : 'Not enough';

// console.log(result);

////////////////////////////////////////////////////

// Простий тернарний оператор

// let a = 20;
// let b = 30;
// // let result = '';

// // if (a > b) {
// //   result = '"A" wins';
// // } else {
// //   result = '"B" wins';
// // }

// const result = a > b ? '"A" wins' : '"B" wins';

// console.log(result);

// Вкладений тернарний оператор

// let a = 50;
// let b = 60;
// let result = '';

// if (a > b) {
//   result = '"A" wins';
// } else if (a < b) {
//   result = '"B" wins';
// } else {
//   result = 'Draw!';
// }

// result = a > b ? '"A" wins' : a < b ? '"B" wins' : 'Draw!';

// console.log(result);

//////////////////////////////////

// Не дуже хороша практика

// const login = prompt('Enter login');

// // if (login.length >= 4) {
// //  alert('Congratulation you are in');
// // } else {
// //  alert('Enter longer login');
// // }

// login.length >= 4
//   ? alert('Congratulation you are in')
//   : alert('Enter longer login');
