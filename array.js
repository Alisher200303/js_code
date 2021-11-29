"use strict";

// const arr = new Array('1, 2, 3');

// const arr = [1, 2, 3];

// arr.shift(6);
// console.log(arr);

// // massivga qo'shish va olib tashlash
// const arr = [1, 2, 3];
// // arr.pop()
// arr.push(77)

// console.log(arr);

// //************** */
// const arr = [1, 2, 3];

// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }

// for (let key of arr) {
//     console.log(key);
// }

// const colors = ['red', 'black', 'crimson']

// colors.forEach(function(item, index, arr) {
//     console.log(item);
// })



// /****************** */

const questions = prompt("" , "");

const answers = questions.split(", ");

console.log(answers);

console.log(answers.join('; '));



/******************* */

const number = [2, 10, 17, 24, 8];

// number.sort(sortArr);
number.sort();
console.log(number);

// function sortArr(a, b) {
//     return a - b;
// }