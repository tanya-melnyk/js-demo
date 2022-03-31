// По функціям важливі поняття:
// - навіщо потрібні функції
// - навіщо потрібний return
// - функція завжди щось повертає - якщо немає return, повернеться undefined
// - оголошення це ще не виклик - не працюватиме
// - локальні змінні - функціональна (блочна) область видимості

// KISS - keep it simple and stupid
// DRY - don't repeat yourself

///////////////////////////////////////////////////

// Навіщо потрібні функції

// const items = ['Mango', 'Poly', 'Ajax'];

//   for (let i = 0; i < items.length; i += 1) {
//     const position = i + 1;
//     const item = items[i];
//     console.log(`${position} - ${item}`);
//   }

// console.log('------------------');

// const seasons = ['Winter', 'Spring', 'Summer', 'Fall'];

// console.log('------------------');

// const animals = ['cat', 'dog', 'horse', 'cow'];

///////////////////////////////////////////////////

// Створення

///////////////////////////////
// function declaration
// Можна звернутися до оголошення
///////////////////////////////

// const a = 2;
// const b = 5;
// const result = addNumbers(a, b);
// console.log(result); // 7

// function addNumbers(num1, num2) {
//   const result = num1 + num2;
//   return result;
// }

/////////////////////////////
// function expression
/////////////////////////////

// const addNumbers = function (num1, num2) {
//   const result = num1 + num2;
//   return result;
// };

// const a = 2;
// const b = 5;
// const result = addNumbers(a, b);
// console.log(result); // 7

/////////////////////////////
// arrow function
// Немає свого this і arguments
/////////////////////////////

// const addNumbers = (num1, num2) => {
//   const result = num1 + num2;
//   return result;
// };

// const addNumbers = (num1, num2) => {
//   return num1 + num2;
// };

// const addNumbers = (num1, num2) => num1 + num2;

// const a = 2;
// const b = 5;
// const result = addNumbers(a, b);
// console.log(result); // 7

// console.log(addNumbers(a, b)); // 7

///////////////////////////////////////////////

// Порядок виконання коду

// const a = 1;
// const b = 2;

// const addTwoNumbers = function () {
//   return a + b;
// };

// const functionResult = addTwoNumbers();

// console.log('Значення functionResult -', functionResult);

/////////////

// console.log('Оголошуємо функцію addTwoNumbers');
// console.log('Функція addTwoNumbers викликана');
// console.log('Оголошуємо змінну functionResult');
// console.log('Значення functionResult -', functionResult);

///////////////////////////////////////////////////////////

// У чому різниця між параметрами функції та її аргументами

// const subtractNumbers = function (number1, number2) {
//   return number1 - number2;
// };

// const a = 1;
// const b = 2;

// const functionResult = subtractNumbers(b, a);

// const functionResult = subtractNumbers(5, 7);

// console.log(functionResult);

///////////////////////////////////////////////////////////

// - небажано мутувати зовнішні змінні
// - небажано мутувати параметри

// let arr = [5, 5];
// let num = 2;

// console.log('arr', arr);

// const pasteInArray = function (array, elem) {
//   const middleIndex = Math.floor(array.length / 2);
//   array.splice(middleIndex, 0, elem);
//   return array;
// };

// const result = pasteInArray(arr, num);
// console.log('result', result);

// console.log('arr', arr);

///////////////////////////////////////////////////////////

/* 
 * Приклад - Дефолтні значення параметрів функції

 * Написати функцію showMessage, яка отримує два аргументи - name та days
 * Повертати вона повинна рядок:
   `${user_name} has trial version for ${how_many} days`
 * Якщо аргументи не передані, має виводитися рядок:
   'User has trial version for 30 days';
 */

// const result = showMessage('Jack', 60);
// console.log(result);

// console.log('-------------------------');

// const userName = 'Mick';
// const trialDays = 20;
// const result2 = showMessage(userName, trialDays);
// console.log(result2);

// console.log('-------------------------');

// console.log(showMessage());
