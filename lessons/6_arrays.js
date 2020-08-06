'use strict';
const arr = [1,2,3,4,5,6,7,8,9,20];
const emptyArr = [];

typeof arr; // object

// get value
console.log(arr[2]);

// set value
arr[2] = 5;
console.log(arr[2]); // will display 5

// spread operator

const arrA = [1,2,3,4];
const arrB = [5,6,7,8];
const arrAB = [...arrA, ...arrB]; // склеит массивы
const arrABcopy = [...arrAB]; // сделает копию массива (не станет ссылаться на то же место в памяти, где массив arrAB)

// map reduce

let data = {
    books: {
        '3456' : {
            id: '3456',
            title: 'book1',
            pages: 100
        },
        '3457' : {
            id: '3457',
            title: 'book2',
            pages: 1000
        },
        '3458' : {
            id: '3458',
            title: 'book3',
            pages: 300
        },
    }
};

Object.keys(data.books); // get array of keys
Object.values(data.books); // get array of values
Object.entries(data.books); // get entries - array of [key, value] pairs

const titles = Object.values(data.books).map(book => book.title);
// reduce(f, init acc) , f - callback function (runs for every array element) , init acc - initial acc value
const pages = Object.values(data.books).reduce((acc, book) => {
    acc += book.pages;
    return acc;
}, 0); // 0 - initial acc value (may be anything)

const filtered = Object.values(data.books).filter(book => book.pages > 200);
