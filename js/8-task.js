// Опертор % и методи рядків

// Напиши скрипт, який переведе значення totalMinutes (кількість хвилин) у рядок у форматі годин і хвилин HH:MM

const value = 1441
const hours = (value / 60).toFixed()
const minutes = value % 60
const totalTime = (`${hours}:${minutes}`)
console.log(totalTime)

// 70 покаже 01:10
// 450 покаже 07:30
// 1441 покаже 24:01

// const totalMinutes = 70;
