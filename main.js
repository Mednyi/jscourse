'use strict';
// Comment
/*
Comments
 */

// Переменные
// Объявление переменной
let localVariable = 5;
// Инициализация
localVariable = 10;

// Deprecated.
var globalVariable = 100;

// Constant
const constVariable = "This is constant var";
const CONSTANT_VARIABLE = 10;


// Data types

// Number
let number = 10; // maximum = 2^53        minimum = -2^53
number = 2.5;
number = 1/0; // (Infinity)
let notANumber = 'try it' / 10; // (NaN)
const bigInteger = 72834782738472834782673678534897589347589739847589n; // big integer. infinity. literal n at the end.

// Strings
let str = 'This is string';
str = "This is string";
const strConst = 'This is constant string ';
let date = new Date().toLocaleDateString();
let templateString = `Today is ${date}
    A good day
`;

// Boolean

let trueStatement = true;
let falseStatement = false;

// null - type

let nullVar = null;

// undefined

let undefVar; // initial value is undefined

// Object

let tank = {
    ammo: 100,
    armor: 100,
    fire () {
        this.ammo--;
    }
};
tank.ammo = 50;
tank.armor = 100;

// Operator typeof - check variable type

typeof tank; // object

// Array is object with number keys

let arr = [];
arr = [12, 'asdfasdf', {a:10}];
console.log(arr[1]); // console output : asdfasdf

