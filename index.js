// 1) Написать функцию, которая находит сумму элементов массива.
// let array = [2, 4, 6, 5, 7, 9];
// function sumArray(arr) {
//   return arr.reduce((sum, el) => sum + el, 0);
// }
// let a = sumArray(array);
// console.log(a);

// 2) Написать функцию, которая делит массив на 2 части и возвращает вторую половину.
// let b = ["раз", "два", "три", "четыре", "пять"];
// function secondPart(arr) {
//   let a = Math.floor(arr.length / 2);
//   return arr.slice(a);
// }
// let m = secondPart(b);
// console.log(m);

// 3) Написать функцию, которая конкатенирует 4 массива.
// concatFour = (arr1, arr2, arr3, arr4) => arr1.concat(arr2, arr3, arr4);
// a = [1, 2, 34];
// b = ["b", "c", 8];
// c = [10, 8];
// d = {
//   id: 1,
//   name: "john",
//   length: 2,
//   [Symbol.isConcatSpreadable]: true,
// };
// console.log(concatFour(a, b, c, d));
// 4) Написать функцию, которая принимает массив, где каждый элемент - число, а вовзращает массив, где каждый элемент - 'Элемент = ' + число первоначального массива.
// let y = [1, 2, 3, 4, 5];
// function returnArrStr(array) {
//   return array.map((item) => `Элемент + ${item}`);
// }
// console.log(returnArrStr(y));
// 5) Применить метод массива forEach, который каждую итерацию выводитв консоль сообщение о том, какой сейчас элемент массива учавствуетв  переборе.
// let arr = [1, 2, 3, 4, 5];

// arr.forEach((item, i, array) =>
//   console.log(
//     `Элемент ${item} с индексом ${i} участвует в переборе массива ${array}`
//   )
// );

// 6) Написать функцию, котрая разбивает строку на буквы.
// function splitString(str) {
//   return str.split("");
// }
// let o = "В лесу родилась елочка";
// console.log(splitString(o));

// 7) Написать функцию, которая из элементов массива конструирует строку и между каждым эелемнтом массива вставляет символ амперсанда.
// let n = ["гусь", "купил", "себе", "гармошку"];

// function getString(arr) {
//   return arr.join("&");
// }
// console.log(getString(n));
// 1) Написать функцию, которая возвращает первые 30 чисел в *ряду Фибоначчи*.
// function getRow(n) {
//   let a = 1;
//   let b = 1;
//   let m = [1, 1];
//   for (let i = 3; i <= n; i++) {
//     let c = a + b;
//     a = b;
//     b = c;
//     m.push(c);
//   }
//   return m;
// }
// console.log(getRow(30));

// 2) 2 в 15 степени = 32768, сумма цифр этого числа равна 3 + 2 + 7 + 6 + 8 = 26.
//    Какова сумма цифр числа 2 в 30 степени? (Высчитать программой)

// function getSumFromNumber(a, n) {
//   return a ** n;
// }
// let str = String(getSumFromNumber(3, 30));
// let r = str.split("");
// console.log(r);
// let rst = r.map((item) => +item);
// console.log(rst);
// let y = rst.reduce((sum, el) => sum + el, 0);
// console.log(y);
