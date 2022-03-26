/*
 * Перепишіть конструкцію if за допомогою тернарного оператора
 */

// ✅ Де це доцільно
let result;

if (a + b < 4) {
  result = 'Мало';
} else {
  result = 'Багато';
}

// ❌ Де це недоцільно
let message;

if (login === 'Сотрудник') {
  message = 'Привет';
} else if (login === 'Директор') {
  message = 'Здравствуйте';
} else if (login === '') {
  message = 'Нет логина';
} else {
  message = '';
}
