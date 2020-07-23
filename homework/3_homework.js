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

//------------------
const arr = [1,2,3,5,1,9,0,10];
const max = (arr) => {
    let maxEl = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if(maxEl < arr[i]) {
            maxEl = arr[i];
        }
    }
    return maxEl;
};
const result = max(arr);
//-------------------------------


// задание №2 — так и не заработало, too much recurtion
let factorial = function factorial (n, k=1) {
    if (n >= 1) {
        factorial(n - 1, k * n);
    } else {
        console.log(k);
        return k
    }
};

//--------------------------------
let factorial2 = function factorial2 (n) {
    if (n > 1) {
        return n*factorial2(n-1)
    } else {
        return 1
    }
};

console.log(factorial(4));

