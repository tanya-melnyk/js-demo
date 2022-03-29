// Базові операції з масивом

// Створіть масив із елементами 1, 2 і 3

const arr = [1, '2', 3];

// Вивести довжину масиву в консоль

// console.log(arr.length);

// Перший елемент

const firstElem = arr[0];
// console.log(firstElem);

// Останній елемент (index/at)

const lastElem = arr[arr.length - 1];
// console.log(lastElem);

// console.log(arr.at(-1));

// Збільште другий елемент масиву на одиницю

arr[1] += 1;

// А перший елемент замінити на 100

arr[0] = 100;

arr[3] = 25;
arr[10] = 5;

// console.log(arr.length);

////////////////////////////////////////////////////

// Копіювання за посиланням та за значенням

////// Примітиви
// let a = 5;
// let b = a;

// console.log(a === b);

// a = 6;

// console.log('a =', a);
// console.log('b =', b);
// console.log(a === b);

// b = a;

// console.log('a =', a);
// console.log('b =', b);

// console.log(a === b);

////// Складні типи

const clients = ['Mango', 'Poly', 'Ajax', 'Cat'];
// const clientsCopy = clients;

// console.log('clientsCopy:', clientsCopy);

// console.log(clients === clientsCopy);

// clients[0] = 'Dog';
// clientsCopy[2] = 'Horse';

// console.log('clients:', clients);
// console.log('clientsCopy:', clientsCopy);

// ///////

// const arr1 = ['Poly'];
// const arr2 = ['Poly'];

// console.log(arr1 === arr2);

// console.log(['Poly'] === ['Poly']);

// console.log([] === []);
