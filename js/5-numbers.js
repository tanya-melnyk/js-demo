// Методи parseInt, parseFloat, isNaN, Number, toFixed
// Приведення до числа
console.log('5) Преобразование строки в число: Number()');
const userAgeStr = prompt('Enter your age:');
const userAgeNum = Number(userAgeStr);

console.log('typeof -', typeof userAgeStr);
console.log(userAgeStr);

console.log('typeof -', typeof userAgeNum);
console.log('Number(userAgeStr) - подсветка значения голубым цветом -', userAgeNum);
console.log('')
// // const userAgeNum = parseInt(userAgeStr);
// // const userAgeNum = parseFloat(userAgeStr);
// // const userAgeNum = +userAgeStr;

// console.log(typeof userAgeStr);
// console.log(userAgeStr);

// console.log(typeof userAgeNum);
// console.log(userAgeNum);

///////// parseInt, parseFloat
let width = '500px'
const widthToNum = parseInt(width);
console.log('6) parseInt(width) - распарсиваю строку "500px" в целое число -', widthToNum);

let height = 'px125px';
const invalidString = parseInt(height);
console.log('6.1) parseInt("px125px") - в строке значение начинается не с цифры - невалидная число, Not a Number - "px125px" -', invalidString)

let letterSpacing = '0.99em'
const letterSpacingToNum = parseFloat(letterSpacing);
console.log('6.2) parseFloat("0.99em") - распарсивание строки в плавающее число(т.е. десятые,сотые, тысячные..) - "0.99em" -', letterSpacingToNum)

let font = '125,555'
const invalidString2 = parseFloat(font);
console.log('6) parseFloat("125,555") - ЗАПЯТАЯ - невалидный символ для числа, поэтому обрывается считывание - Not a Number - "125,555" -', invalidString2)
console.log('')
// let font = '25.578964rem';

// const integer = parseInt(font);
// console.log(integer);

// const float = parseFloat(font);
// console.log(float);

// console.log('parseInt', parseInt(font));
// console.log('parseFloat', parseFloat(font));

// console.log(parseInt('10.5px'));
// console.log(parseInt('10px'));
// console.log(parseFloat('25,5px'));
// console.log(parseInt('aas20'));
// console.log(parseFloat('a25.5'));

//////////////// toFixed

const str = '5.9486394474958799px';
const numberToFloat = parseFloat(str)
console.log('7) Распарсиваю рядок методом parseFloat("5.9486394474958799px")', numberToFloat)

let numberToFixed = numberToFloat.toFixed(4)
console.log('7.1) .toFixed(4) - округление числа с указанием кол-ва чисел после запятой:', numberToFixed)

const numberToFixedToNumber = Number(numberToFixed)
console.log('7.2) Метод .toFixed(4) преобразовует число в рядок, поэтому, чтобы заново преоброзовать рядок в число применяю Конструктор Number():', numberToFixedToNumber)

const string = '5.9486';
const numberToFloat2 = parseFloat(string)
numberToFixed = numberToFloat2.toFixed()
console.log('7.3) Метод .toFixed() если в скобках не указано значение, то округляется до целого числа "5.9486" =>', numberToFixed)

// Цепочка методов =>chaining
const roundedNumber = Number(parseFloat(str).toFixed(1));
console.log('7.4) Цепочка методов => chaining - сокращенная запись - Number(parseFloat(str).toFixed(1)):', roundedNumber)

///////// isNaN
const str3 = '555px';

const numberFromString = Number(str);
console.log(numberFromString); // NaN
console.log('Метод .isNaN("555px") проверяет валидная строка или невалидная - true - значит невалидная т.е. в строке есть посторонний символы - это значит, что надо распарсить строку(parseInt, parseFloat) перед тем как приводить к числу (Number())', Number.isNaN(numberFromString));

// console.log(number);

// const roundedNumberStr = number.toFixed(2);
// const roundedNumber = Number(roundedNumberStr);

// console.log(roundedNumber);

//////////

// const str = '5.9486394474958799';

// const roundedNumber = Number(parseFloat(str).toFixed(2));

// console.log(roundedNumber);

///////// isNaN

// const str = '555';

// const numberFromString = Number(str);
// console.log(numberFromString); // NaN
// console.log(Number.isNaN(numberFromString));

// console.log(NaN === NaN);

/////////////////////////////////////////////////////////

// Клас Math

// console.log(Math.round(7.5));
// console.log(Math.round(7.49999));

// console.log(Math.floor(4.99));
// console.log(Math.ceil(2.00001));

// console.log(Math.abs(-10));
// console.log(Math.pow(3, 4));
// console.log(Math.sqrt(16));
// console.log(Math.max(-50, -40, 5, 100, 500));
// console.log(Math.min(5, 2, -4));
// console.log(Math.random()); // 0 - 0.9999999999

// const min = 1; // включно
// const max = 101; // виключно

// const randomNumber = Math.floor(Math.random() * (max - min)) + min;

// console.log(randomNumber);

////////////

// Зведення в ступінь
// Визначити площу кола з радіусом 10 см

// const radius = 10;
// // const area = Math.PI * Math.pow(radius, 2);
// // const area = Math.PI * radius * radius;
// const area = Math.PI * radius ** 2;

// console.log(area);

// console.log(Math.PI);

////////////////////////////////////////////////////

// Арифметичні операції між рядками та числами

////////////////////////////////////// +

// let a = 3;
// let b = 10;
// let c = '12';
// console.log(a + b + c);

// console.log(3 + '12' + 10);

////////////////////////////////////////////////////// -

// let a = 10;
// let b = '5';
// console.log(a - b); // 8

/////////////////////////////////////////////////////// *

// let a = 2;
// let b = '2.2';
// console.log(a * b); // 4.4

/////////////////////////////////////////////////

// let a = 10;
// let b = '2';
// console.log(a / b); // 5

// let a = 10;
// let b = 0;
// console.log(a / b); // Infinity

// let a = 10;
// let b = Infinity;
// console.log(a / b); // 0
