// scope

// function showNumber(a) {
//   a = 50;
//   console.log('a in showNumber - ', a);

//   function showAnotherNumber() {
//     let a = 30;
//     console.log('a in showAnotherNumber - ', a);

//     function lastNumber() {
//       console.log('a in lastNumber - ', a);
//     }
//     lastNumber();
//   }

//   showAnotherNumber();
// }

// let a = 10;

// showNumber(a);

// console.log('a in global - ', a);

/////////////////////////////////////////////////////

// - стек викликів
// - помилки в консолі, стек-трейс викликів

// const logGoodbye = function () {
//   console.log('Bye bye!');
// };

// const logQuestion = function () {
//   console.log('How are you?');

//   logGoodbye();
// };

// const logGreet = function () {
//   console.log('Hi there!');

//   logQuestion();
// };

// // debugger;
// logGreet();

///////////////////////////////////////////////////////////////

// var

/* Недоліки:
   - можна змінити (не можна заборонити зміну)
   - hoisting - менша передбачуваність
   - не підкоряються блоковій області видимості, тільки функціональній (плюс можливість переоголосити зовнішню змінну в блоці і вона перезапише зовнішню)
*/

// console.log(value); // undefined

// var value = 5;

// if (true) {
//   console.log(value); // 5
//   var value = 10;
//   console.log(value); // 10
// }

// console.log(value); // 10

////////////////////////////////////////////////////

// Рекурсія
// (в інструментах розробника Sourses - Scope & Call Stack)
// Написати функцію зворотного відліку countDown(start), яка виведе числа від переданого до 0

// function countDown(start) {
//   console.log(start);

//   if (start > 0) {
//     countDown(start - 1);
//   }
// }

// // debugger;
// countDown(3);

// // countDown(11500);

/////////////////////////////////////////////////////////////////

// IIFE розшифровується як Immediately Invoked Function Expression - функціональний вираз, що негайно викликається.
// IIFE можуть використовуватися для інкапсуляції коду в локальну область видимості, щоб оголошені в ній змінні не потрапляли в глобальну область видимості (для var).
// IIFEs are very useful because they don’t pollute the global object, and they are a simple way to isolate variables declarations.

// (function () {
//   console.log('Hi');
// })();

// const num = (function () {
//   return 5;
// })();
// console.log(num);

// (function () {
//   let firstVariable = 5;

//   console.log(firstVariable);
// })();

// console.log(firstVariable);

// Вирази, що починаються з функції, вважаються оголошеннями функцій. Будучи розміщеною всередині (), ця функція стає функціональним виразом, яке може бути виконано з наступним ().
// Подібні функції не відображаються в глобальній області видимості, і ви можете навіть не вказувати ім'я, якщо ви не посилатиметеся на них.
