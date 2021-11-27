"use strict";
/****Funksiyalar ****/

/*

let number = 8;

function getText(text) {
    console.log(text);
    let numbers = 10;
    console.log(numbers);
}


getText("hello text");
console.log(number);
*/

/**Funtion Decloration */

function calc(a, b) {
    return a + b;
}
console.log(calc(5, 10));
console.log(calc(4, 10));
console.log(calc(3, 10));
console.log(calc(2, 10));

function returnNumber() {
    let number = 8;
    return number;
}

const num = returnNumber();
console.log(num);


/**Function Exprassions */

const funcExpr = function() {
    console.log(10);
}
funcExpr()

/**Array function */

const arrayFunction = (c, d) => c + d;

const arrayFunction = (c, d) => {
    return c + d;
};

const plus = arrayFunction(10, 19);

console.log(plus);