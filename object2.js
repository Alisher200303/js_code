"use strict";

// let a = 8,
//     b = a;

//     console.log(b + 5);
//     console.log(a);

// const bmw = {
//     color: 'black',
//     isBuy: false,
// };

// const merc = bmw;
// merc.color = 'white';

// console.log(merc);
// console.log(bmw);

// function copyObj(obj) {
//     let objCopy = {};
//     for (let key in obj) {
//         objCopy[key] = obj[key];
//     }
//     return objCopy;
// }


// const nexiaR3 = {
//     color: "black",
//     isBuy: false,
//     shum: {
//         a: 100,
//         b: 200,
//     },
// };

// const spark = copyObj(nexiaR3);
// spark.shum.a = 300;
// console.log(spark);
// console.log(nexiaR3);

// spark.color = "white";


// /*********** 2 */

// const nexia2 = {
//     color: 'red',
//     isBuy: true,
// };

// const extra = {
//     shum: 100,
// };

// console.log(Object.assign(nexia2, extra));

// const newCar = Object.assign({}, nexia2);
// newCar.isBuy = false;
// console.log(newCar);
// console.log(nexia2);


const arr = [1, 2, 3, 4];
const newArr = arr.slice();


// newArr[1] = 22;
console.log(arr);
console.log(newArr);


const cars = ['bmw', 'mers', 'wolksvagen'],
    plane = ['German', 'UzbArways', 'Turkish'],
    technology = [...cars, ...plane, 'matiz'];

console.log(technology);


function number(a, b, ...c) {
    console.log(a, b, c);
}

number(1, 2, 4, 5, 6, 7);


function func(a, b, c) {
    console.log(a);
    console.log(b);
    console.log(c);
}

const numbers = [1, 2, 3];
func(...numbers);
