// Методи parseInt, parseFloat, isNaN, Number, toFixed
// Приведення до числа

// const userAgeStr = prompt('Enter your age:');

// const userAgeNum = Number(userAgeStr);
// const userAgeNum = parseInt(userAgeStr);
// const userAgeNum = parseFloat(userAgeStr);
// const userAgeNum = +userAgeStr;

// console.log(typeof userAgeStr);
// console.log(userAgeStr);

// console.log(typeof userAgeNum);
// console.log(userAgeNum);

///////// parseInt, parseFloat

// let font = '2.578964rem';

// console.log('parseInt', parseInt(font));
// console.log('parseFloat', parseFloat(font));

// console.log(parseInt('10.5px'));
// console.log(parseInt('10px'));
// console.log(parseFloat('25,5px'));
// console.log(parseInt('aas20'));
// console.log(parseFloat('a25.5'));

//////////////// toFixed

// const str = '5.9486394474958799';
// const number = parseFloat(str);
// const roundedNumberStr = number.toFixed(2);
// const roundedNumber = Number(roundNumberStr);
// console.log(roundedNumber);

///////// isNaN

// const str = '555qwed';

// const numberFromString = Number(str);
// console.log(numberFromString); // NaN
// console.log(Number.isNaN(numberFromString));

/////////////////////////////////////////////////////////

// Клас Math

// console.log(Math.round(7.5));
// console.log(Math.round(7.49999));

// console.log(Math.floor(4.99));
// console.log(Math.ceil(2.00001));

// console.log(Math.abs(-10));
// console.log(Math.pow(3, 4));
// console.log(Math.sqrt(16));
// console.log(Math.max(-50, -40, 5, 100, 100));
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
// const area = Math.PI * Math.pow(radius, 2);
// const area = Math.PI * radius * radius;
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

////////////////////////////////////////////////////// -

// let a = 10;
// let b = '2';
// console.log(b - a); // 8

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
