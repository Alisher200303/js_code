"use strict";

const cars = {
    color: 'white',
    isBuy: false,
    isArmor: function() {
        console.log('Armor does\'t have');
    }
};

const nexia = Object.create(cars);

console.log(nexia.color);

const bmw = {
    color: 'red',
};

// bmw.__proto__ = cars;

Object.setPrototypeOf(bmw, cars);

bmw.isArmor()

console.log(bmw.isBuy);