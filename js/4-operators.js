/*
 * Базові оператори +, -, *, /
 * Вивести у консоль:
 * 1) загальну суму - кількість яблук та кількість винограду
 * 2) різницю яблук та винограду
 */
console.log('1) Базовые операторы: + - / * ')

const a = 10
const b = 15
const sum = a + b
console.log('1.1) оператор суммы +:', sum)

// const diff = appleCount - grapeCount;

// console.log('diff', diff);

////////////////////////////////////////////////////

/*
 * Пріоритет операторів
 * Створити змінну result, привласнити їй вираз 10 + 22 - 2 * 5
 * Розібрати пріоритет та вивести її значення у консоль
 */
// Вначале умножение и деление (*, /)  =>  а затем +,-
const result = 5 + 3 - 2 * 4;


console.log('1.2) приоритет операторов 5 + 3 - 2 * 4: сначала умножение, затем сложение/вычитание', result);

/////////////////////////////////////////////////////

// Комбіновані оператори ++, --, +=, -=, *=, /=
console.log('2) Комбинованые оператори: a += 1; a++; a -= 1; a *= 1')


// let a = 5;

// a = a + 1;
// console.log(a);

// a++;
// console.log(a);

// a += 1;
// console.log(a);

// ///////////

// a = a - 1;
// console.log(a);

// a--;
// console.log(a);

// a -= 1;
// console.log(a);

///////////

// Заміни вираз перевизначення комбінованим оператором +=.
console.log('2.1) Переопределение значения переменной, используя комбинированный оператор:')

// let students = 100;

// // students = students + 50;

// students += 50;

// console.log(students);

///////////

// let a = 35;

// a += 5; // a = a + 5
// console.log(a);

// a -= 3; // a = a - 3
// console.log(a);

// a *= 2; // a = a * 2
// console.log(a);

// a /= 7; // a = a / 7
// console.log(a);

/////////////////////////////////////////////////

// Оператор залишку від ділення %
const d = 20;
const f = 3;
const g = d % f;
console.log('3) остаток от деления %:', g)

//

// const e = 11;
// const r = 6;

// console.log(e % r);

// console.log(a % 2);
// console.log(b % 2);

// // ///////////

// // // Перевірити, чи є а та b парними числами
const h = 10
const ifEven = a % 2 === 0
console.log('3.1) проверка числа четное/нечетное ifEven(четное):', ifEven)

// const isAEven = a % 2 === 0;
// const isBEven = b % 2 === 0;

// console.log('isAEven', isAEven);
// console.log('isBEven', isBEven);

//////////////////////////////////////////////

// Оператори порівняння та приведення типів
// Яким буде результат цих виразів?
console.log('4) Опрераторы сравнения приводят к БУЛЮ: > <')
console.log('4.1) Опрераторы нестрогого сравнения: ==')
console.log('4.2) Опрераторы строгого сравнения: ===')
console.log('4.3) Опрераторы строгого неравенства(т.е. если 1 !== 2 будет true): !==')

// console.log(5 > 4);

// console.log(10 >= '7');

// console.log('2' > '12');

// console.log('2' < '12');

// console.log('4' == 4);

// console.log('6' === 6);

// console.log('false' === false);

// console.log(1 == true);

// console.log(1 === true);

// console.log('0' == false);

// console.log('0' === false);

// console.log('Papaya' < 'papaya');

// console.log('Papaya' === 'papaya');

// console.log(undefined == null);

// console.log(undefined === null);

// console.log(5 !== 10);
