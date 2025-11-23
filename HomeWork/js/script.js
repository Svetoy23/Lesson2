// Якщо змінна більше нуля - виведіть true, менше - false
//Перевірте це на варіантах  1, 0, -3.
// let number = -3;

// if (number > 0) {
//   console.log(true);
// } else {
//   console.log(false);
// }

// Якщо змінна ="test" - виведіть true,
//Перевірте це на варіантах  'test', "qwerty", true
// let myVar = "test";

// myVar === "test" ? console.log(true) : null;

// Якщо змінна більше 10 -  відніміть 5,
//менше - додайте 5, результат виведіть в консоль
//Перевірте це на варіантах  1, 10, 13.

// function modifyNumber(num) {
//   if (num > 10) {
//     num = num - 5;
//   } else if (num < 10) {
//     num = num + 5;
//   }

//   console.log(num);
// }

// console.log("Варіант 1:");
// modifyNumber(1);

// console.log("Варіант 10:");
// modifyNumber(10);

// console.log("Варіант 13:");
// modifyNumber(13);

//Зробіть сервіс який отримує число від 1 до 12
// виведіть місяць який дорівнює числу

// const input = prompt("Введіть номер місяця (від 1 до 12):");

// const monthNumber = Number(input);

// // const months = [
// //   "Січень",
// //   "Лютий",
// //   "Березень",
// //   "Квітень",
// //   "Травень",113
// //   "Червень",
// //   "Липень",
// //   "Серпень",
// //   "Вересень",
// //   "Жовтень",
// //   "Листопад",
// //   "Грудень",
// // ];

// // if (monthNumber >= 1 && monthNumber <= 12) {
// //
// //   alert("Це місяць: " + months[monthNumber - 1]);
// // } else {
// //   alert("Помилка! Ви ввели неправильне число. Спробуйте від 1 до 12.");
// // }

//Зробіть сервіс який отримує тризначне число
//Поверніть користувачу сумму цих чисел

// let numberStr = prompt("Введіть тризначне число:");

// if (numberStr.length === 3) {
//   let digit1 = Number(numberStr[0]); // Перша цифра
//   let digit2 = Number(numberStr[1]); // Друга цифра
//   let digit3 = Number(numberStr[2]); // Третя цифра

//   let sum = digit1 + digit2 + digit3;

//   alert("Сума цифр числа " + numberStr + " дорівнює: " + sum);
// } else {
//   alert("Будь ласка, введіть тризначне число!");12
// }
