// Порядок срабатывания скриптов
const number = 10
console.log('3 - срабатывает скрипт с атрибутом defer в <head> -', number)
console.log('')
//
// 1) Вивести на екран повідомлення 'Welcome to my page!'

alert('Уведоление - alert()');

// 2) Попросити користувача ввести свій вік 'How old are you?' і вивести в консоль те, що він ввів (перевірити тип даних)

const userAge = prompt('Обращение к пользователю, который должен ввести данные в поле - возвращает в консоль введденные данные - prompt()');

console.log(userAge);

// console.log('userAge =', userAge);
// console.log('typeof userAge =', typeof userAge);

// 3) Запитати у користувача, чи він є студентом 'Are you a student?' і вивести в консоль те, що він відповів

const isStudent = confirm('Обращение к пользователю, который должен ответить ок/cansel(возвращает в консоль соответсвенно true/false) - confirm()');

console.log(isStudent);



//
//

//
// alert("hello")
// window.alert("hi")
//
//
// prompt() - появляется поле - если ввести значение, то при ЛОГИРОВАНИИ переменной name - отобразится значение введенное пользователем
// const name = prompt("What is your name?")
// console.log('name:', name)
// console.log('typeof name:', typeof name)
//
//
//
// const isStudent = confirm("Are you student")
// console.log('isStudent:', isStudent)
