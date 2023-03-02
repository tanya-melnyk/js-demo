/*
 * Шаблонні рядки
 * Написати фразу за допомогою конкатенації та шаблонних рядків
 * "Hello, my name is [name], I'm [age] years old and I like [hobby]", де у квадратних дужках - змінні вставлені в рядок
 */

// const name = 'Joe';
// const age = 35;
// const hobby = 'swimming';

// // const msg =
// //   'Hello, my name is ' +
// //   name +
// //   ", I'm " +
// //   age +
// //   ' years old and I like ' +
// //   hobby;

// const msg = `Hello, my name is ${name}, I'm ${age} years old and I like ${hobby}`;

// console.log(msg);

/////////////////////////////////////////////////////

// Запитати у користувача його ім'я, прізвище та вік за допомогою prompt
// Записати всі відповіді у змінні та вивести в консоль рядок:
// User's full name is [name] [lastName]. He is [age] years old.

// const userName = prompt('Your name:');
// const lastName = prompt('Your lastName:');
// const age = prompt('Your age:');

// console.log(msg);
console.log('10) Индексация рядка, массива начинается с 0 1 2 3 4...')
console.log('');

const age = 30
console.log('11) Шаблонизация - шаблонные подстановки age=30 `Мне ${age} лет`', `Мне ${age} лет`);
console.log('')
/////////////////////////////////////////////////////

/*
 * Властивості та методи рядків
 * includes - перевірка на наявність символів у рядку
 * toLowerCase - приведення рядка до нижнього регістру
 * toUpperCase - приведення рядка до верхнього регістру
 * length - довжина рядка (кількість символів у рядку)
 */
console.log('12) .length - СВ-ВО строки')
console.log('')

console.log('13) .includes - МЕТОД() строки - Поиск совпадения подстроки в строке')

// Поиск совпадения подстроки в строке
const string = 'good MORNING'
const subString = 'Good'

const stringToLow = string.toLowerCase()
const subStringToLow = subString.toLowerCase()

const isIncluded = stringToLow.includes(subStringToLow)
console.log(' Метод .toLowerCase() - Привожу подстроку(запрос) к нижнему регистру')
console.log(' Метод .toLowerCase() - Привожу саму базовую строку, в котрой буду искать к нижнему регистру')
console.log(' Метод .includes() - возвращает БУЛЬ true/false', isIncluded)
console.log('')





// const str = 'Hello world!';

// // console.log(str.length);

// const subStr = 'hello';

// // Перевірити, чи входить subStr у str

// const strLower = str.toLowerCase();
// const subStrLower = subStr.toLowerCase();
// const isIncluded = strLower.includes(subStrLower);

// // const isIncluded = str.toLowerCase().includes(subStr.toLowerCase());

// console.log(isIncluded);

//////////////////// indexOf

const str = 'days';

const length = str.length;
console.log('14) string.length = ', length)

const lastIndex = str.length - 1
console.log(' Находим значение последнего индекса в строкеlastIndex = string.length - 1 => 4 - 1 = ', lastIndex);

const lastSymbol = str[lastIndex]
console.log(' строка[индекс] = символ, т.е. последнему индексу[3] соотв-т символ s - lastSymbol = str[lastIndex] :', lastSymbol)
console.log('')


// console.log(str.length);

// console.log(lastIndex);

// console.log(str[lastIndex]);

// const lastIndex = str.length - 1;
// console.log(str[lastIndex]);

// console.log(str.indexOf('!'));
// console.log(str.indexOf('o'));
// console.log(str.indexOf('z'));
console.log('15) Метод indexOf() - чтобы узнать на каком индексе лежит символ')
const firstName = 'Denis Orlenko'
console.log(' name=Denis => indexOf(e) - ищет до превого совпадения:', firstName.indexOf('D'))
console.log(' Если указанного символа нет в строке - то возвращает:', firstName.indexOf('j'))
console.log('')
/////////////////// slice
console.log('16) .slice(с, до) - вырезает, возвращает вырезанный отрезок')
console.log(' .slice(3) - вырезает с 3-индекса до конца')
console.log(' .slice(0, 5) - вырезает первые 4 символа - с 0-индекса до 5-индекса(по 4-индекс включительно)')
console.log(' .slice(-3) - вырезает последние 3 символа - вырезает 3 индекса с конца')
console.log('')
// let str = "The quick red fox jumped over the lazy dog's back.";

// const strPart = str.slice(10);
// const strPart = str.slice(0, 20);
// const strPart = str.slice(-5);
// const strPart = str.slice(4);

// console.log(strPart);
// console.log(str);


/////////////////////////////////////////////////////////////

// Методы startsWith / endsWith
console.log('17) Методы startsWith() / endsWith() - возвращают БУЛЬ')
console.log('')
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
console.log('18) Методы replace() - до первого совпадения и replaceAll() - все совпадения')
const p =
  'The fox jumps, the fox run';

console.log(' Заменяет первое совпадение - p.replace("dog", "monkey")', p.replace('fox', 'monkey'));
console.log(' Заменяет все совпадения - p.replaceAll("dog", "monkey")', p.replaceAll('fox', 'monkey'));
console.log('')
// console.log(p.replaceAll(' ', '___'));

///////////////////////////////////////////////////////////

// trim();
console.log('19) trim() - санация - удаление пробелов вначале и вконце строки')
const a = '  Hello John!  ';

console.log(' Пробелы:',a);

console.log(' Санация пробелов:', a.trim());
console.log('')

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

let weight = '88,3';
let height = '1.75';
console.log('20) НЕВАЛИДНОЕ значение height:', height)

// Если пользователь ввел невалидный символ запятую вместо точки
const heightNorm = height.replace(',', '.')
console.log(' Метод .replace(",", ".") - приводит к валидным символам:', heightNorm)

// Преобразовую строку в число - Number()
const heightNormNumber = Number(heightNorm)
console.log(' Метод Number() приводит к числу:', heightNormNumber)

// Округление до одной цифры после запятой - toFixed()
const heightNormToFix = heightNormNumber.toFixed(1)
console.log(' Метод .toFixed(1) - округляет до одной цифры после запятой:', heightNormToFix)
console.log('')






// const weightNorm = Number(weight.replace(',', '.'));
// const heightNorm = Number(height.replace(',', '.'));

// const bmi = (weightNorm / heightNorm ** 2).toFixed(1);

// console.log(bmi); // 28.8
