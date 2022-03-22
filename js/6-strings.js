/*
 * Шаблонні рядки
 * Написати фразу за допомогою конкатенації та шаблонних рядків
 * "Hello, my name is [name], I'm [age] years old and I like [hobby]", де у квадратних дужках - змінні вставлені в рядок
 */

// const name = 'Dan';
// const age = 35;
// const hobby = 'swimming';

// console.log(msg);

/////////////////////////////////////////////////////

// Запитати у користувача його ім'я, прізвище та вік за допомогою prompt
// Записати всі відповіді у змінні та вивести в консоль рядок:
// User's full name is [name] [lastName]. He is [age] years old.

// const userName = prompt('Your name:');
// const lastName = prompt('Your lastName:');
// const age = prompt('Your age:');

// console.log(msg);

/////////////////////////////////////////////////////

/*
 * Властивості та методи рядків
 * includes - перевірка на наявність символів у рядку
 * toLowerCase - приведення рядка до нижнього регістру
 * toUpperCase - приведення рядка до верхнього регістру
 * length - довжина рядка (кількість символів у рядку)
 */

// const str = 'Hello world!';
// const subStr = 'hello';

// Перевірити, чи входить subStr у str

// console.log(isIncluded);

//////////////////// indexOf

// const str = 'Hello world I`m happy!';

// console.log(str[0]);

// const lastIndex = str.length - 1;
// console.log(str[lastIndex]);

// console.log(str.indexOf('!'));
// console.log(str.indexOf('o'));
// console.log(str.indexOf('z'));

/////////////////// slice

// let str = "The quick red fox jumped over the lazy dog's back.";

// const strPart = str.slice();
// const strPart = str.slice(0, 5);
// const strPart = str.slice(-5);
// const strPart = str.slice(4);

// console.log(strPart);
// console.log(str);

/////////////////////////////////////////////////////////////

// Методы startsWith / endsWith

// const str1 = 'Saturday night plans';

// console.log(str1.startsWith('Sat')); // true

// console.log(str1.startsWith(' ')); // false

////////

// const str1 = 'Cats are the best!';

// console.log(str1.endsWith('best!')); // true

// const str2 = 'Is this a question';

// console.log(str2.endsWith('?')); // false

////////////////////////////////////////////////////////////

// Методы replace() и replaceAll()

// const p =
//   'The fox jumps over the lazy dog. If the dog reacted, was it really lazy?';

// console.log(p.replace('dog', 'monkey'));
// console.log(p.replaceAll('dog', 'monkey'));
// console.log(p.replaceAll(' ', '___'));

///////////////////////////////////////////////////////////

// trim();

// const a = 'Hello';
// const b = '  Hello John!  ';

// console.log(a);
// console.log(b);

// console.log(a === b);
// console.log(a === b.trim());

// console.log(b);
// console.log(b.trim());

//////////////////////////////////////////////////

// Методи рядків та чейнинг
// Напиши скрипт, який розраховує індекс маси тіла людини. Для цього необхідно розділити вагу в кілограмах на квадрат висоти людини в метрах.

// Вага та висота зберігаються у змінних weight і height, але не як числа, а у вигляді рядків (спеціально для завдання).
// Нецілі числа можуть бути задані у вигляді 24.7 або 24,7, тобто роздільником дробової частини може бути кома.

// Індекс маси тіла необхідно округлити до однієї цифри після коми

// let weight = '88,3';
// let height = '1.75';

// console.log(bmi); // 28.8
