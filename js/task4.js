// todo Індекс маси тіла
/*
 * Напиши функцію calcBMI(weight, height) яка розраховує та повертає індекс маси тіла людини. Для цього необхідно розділити вагу в кілограмах на квадрат висоти людини за метри.
 * Вага та висота будуть спеціально передані як рядки. Нецілі числа можуть бути задані у вигляді 24.7 або 24,7, тобто як роздільник дробової частини може бути кома.
 * Індекс маси тіла необхідно округлити до однієї цифри після коми;
 */

function calcBMI(weight, height) {
  const weightNum = parseFloat(weight.replace(',', '.'));
  const heightNum = parseFloat(height.replace(',', '.'));

  const bmi = weightNum / heightNum ** 2;

  return bmi.toFixed(1);
}

console.log(calcBMI('88,3', '1.75')); // 28.8
