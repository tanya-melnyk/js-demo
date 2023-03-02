// Приведення типів
// Метод Boolean та true/falsy значення
console.log('21) класс Boolean()')
console.log('')
//// false
console.log('falsy значения:');
console.log('Boolean(NaN)', Boolean(NaN));
console.log('Boolean(undefined)', Boolean(undefined));
console.log('Boolean(null)', Boolean(null));
console.log('Boolean(0)', Boolean(0));
console.log('Boolean("")', Boolean(''));
console.log('Boolean(false)', Boolean(false));
console.log('')

// console.log('-----------------------');

//// true
console.log('true значения:');
console.log('Boolean("false")', Boolean('false'));
console.log('Boolean(Infinity)', Boolean(Infinity));
console.log('Boolean(" ")', Boolean(' '));
console.log('Boolean(-5)', Boolean(-5));
console.log('Boolean([])', Boolean([]));
console.log('Boolean({})', Boolean({}));
console.log('')
////////////////////////////////////////////////////

// Логічні оператори
console.log('Логичные операторы')
// - повертають не true або false, а значення змінної
// - не порівнюють два операнди зліва і справа, а перевіряють булеве значення операнда зліва, а потім вже приймають рішення
// - пріоритет операторів – спочатку &&, потім ||

console.log('&& - логическое И - запинается на лжи - т.е. первое ложное значение будет результатом выражения - т.к. 0 - это falsy - 0 && 5', 0 && 5)
console.log('|| - логическое ИЛИ - запинается на правде - т.е. первое правдивое значение будет результатом выражения - т.к. 4 - это true - 4 || 5', 4 || 5)
console.log('! - логическое НЕ - приводит к БУЛЮ + ИНВЕРТИРУЕТ ТИП - !5', !5)
console.log('!! - логическое НЕ - приводит к БУЛЮ !!5', !!5)
// && and
// || or
// ! not

/////////////////

// const dog = 'dog';
// const dog = '';
// const dog = null;
// const dog = undefined;

// const finalData = dog && 'mastiff'; // if dog then mastiff
// console.log('finalData', finalData);

///////////////

// false || false || false

// const finalData2 = dog || 'cat'; // if no dog then cat
// console.log(finalData2);

///////

// const finalData3 = !dog;
// console.log(finalData3);

// const finalData4 = !!dog;
// console.log(finalData4);

////////////////////////////////////////////

// console.log('Holiday' && 'Tickets' && 'Trip');

// console.log('Trip' || 'Save money');

////////////////////////////////////////////

// Відрізок

// 0 ------------ 10 ------------- 20 -------------- 30

// const num = 45;

////// Всередині відрізка:
// console.log(num >= 10 && num <= 20);

////// Поза відрізком:
// console.log(num < 10 || num > 20);

//////////////////////////////////////////

// Що виведе код?

// console.log('Mango' || 'Poly');

// console.log(true && 3);

// console.log(true || 3);

// console.log(false && 3);

// console.log(true || 3 || 4);

// console.log(true && 4 && 'll');

///////////////////////////////////////////

// Значення за замовчуванням та оператор нульового злиття ?? (nullish coalescing operator)

// Відрефактори код так, щоб у змінну value привласнилося значення змінної incomingValue, якщо воно не дорівнює undefined або null.
// Інакше має привласнитися значення defaultValue.
// Перевір роботу скрипта для наступних значень змінної incomingValue: null, undefined, 0, false.
// Використовуй оператор ??

// const incomingValue = 5;

// const defaultValue = 10;

// const value = incomingValue || defaultValue;

// console.log(value);

/////////////////////////////////////////

// console.log(true || false || 7);

// console.log(true && 0 && 'hello');

// console.log(null || 2 || undefined);

// console.log(true && 4 && 'hello');

// console.log(!null || !(2 && undefined));

// console.log((1 && null && 2) >= 0);

// console.log(null || (2 && 3) || 4);

// console.log(0 || '' || '0');

// console.log(0 || null || '0');

// console.log(0 || undefined || null);

// console.log(4 + 5 === 8 || 5 * 4 === 20 || 'q' + 'w' >= 'qw');

// console.log(false || true && true);

// console.log(0 || '' || 0);

// console.log(0 || 'undefined' || null);

// console.log(NaN || null || 5);

// console.log(28 || null || '');

// console.log(Infinity || 55 || NaN);

// console.log(undefined || 'true' || NaN);

// console.log('a' && 1 && 0);

// console.log('a' && 1 && 2);

// console.log('a' && 0 && 2);

// console.log('0' && NaN && 2);

// console.log('' && NaN && 2);

// console.log(' ' && NaN && 2);

// console.log([] && 'null' && 2);

// console.log([] && null && 2);

// console.log([] && undefined && 2);

// console.log([] && 8 && -Infinity);

// console.log(false && 'false' && -Infinity);

// console.log('true' && -0 && null);

console.log(Number("15,5"));
console.log("15,5".replace(",", "."));
console.log(Number("15,5".replace(",", ".")));

console.log(Number(parseFloat("15,5px")));