'use strict';
import HTTPRequest from './HTTPRequest.js'

const postCocoa = () => {
    const cocoa = new HTTPRequest('drinks.ru/sale/')
    const data = cocoa.post('cocoa', {type:null, area:'Chilie', amt:5})
    console.log(data)  // promice возвращает reject
};

const postCoffee = 1;

const putTea = 1;
const getTea = 1;
const deleteCoffee = 1;

export default {
    postCocoa,
    postCoffee,
    putTea,
    getTea,
    deleteCoffee
}