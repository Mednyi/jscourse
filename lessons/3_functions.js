'use strict';
// Functions

// Function declaration
/*
    function <name> (argument1, argument2, ...arguments) {
        <function body>
        [return]
    }
 */

function myPow (a,b) {
    console.log(a);
    console.log(b);
    return a**b;
};

// function call
myPow(2,3); // передаем в функцию значения аргументов
let result = myPow(2,4);

// Function Expression
/*
    const [let] <variable name> = function (arg1, arg2, ...args) {
        <function body>
    }
 */
const myPow_exp = function (a = 2, b) {//если есть значение по умолчанию, его лучше записывать последним?
    return a**b;
};

// Named function expression (NFE)
// Не помню, зачем так делать. Помню только, что имя функции должно быть таким же, как имя переменной. Ответ: если переменная переопределится, функция останется в памяти
const progression = function progression (a, d, count) {
    console.log(a);
    if (count > 0) progression(a + d, d, count-1);
};

// Arrow functions
// анонимные функции с особым синтаксисом
// работают в том контексте, в котором объявлены
// работают с фиксированным числом аргументов
/*
    const [let] <name> = (arg1, arg2, ...args) => {
        <body>
        [return]
    }

    const [let] <name> = arg1 => {
        <body>
        [return]
    }

    const [let] <name> = arg1 => result

    const [let] <name> = arg1 => ({<object>})

 */

const myPow_arrow = (a, b) => {
    return a**b
};

const increment = a => {
    return a + 1;
};

const increment1 = a => a + 1;

const factory = field => ({field}); // вообще не помню, в чем соль
