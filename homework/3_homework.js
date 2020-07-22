'use strict';
/*
1. Дан массив из 5 чисел.
Написать функцию поиска максимального элемента (функция возвращает максимальный элемент)

2. Написать рекурсивную функцию (NFE) поиска факториала числа.
*/

// задание №1
function maxNumber (a, b, c, d, e) {
    if (a > b && a > c && a > d && a > e) return a
    else if (b > c && b > d && b > e) return b
    else if (c > d && c > e) return c
    else if (d > e) return d
    else return e
    };

maxNumber(1, 4, 110, 17, 92);

// задание №2 — так и не заработало, too much recurtion
let factorial = function factorial (n, k=1) {
    if (n >= 1) factorial(n--, k*n);
};
console.log(factorial(4));

