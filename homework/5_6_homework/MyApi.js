'use strict';
import { HTTPRequest } from './HTTPRequest.js'

const postCocoa = async () => {
    const cocoa = new HTTPRequest('drinks.ru/sale/');
    const response = await cocoa.post('cocoa', {type:null, area:'Chilie', amt:5});
    console.log(response);  
};

const postCoffee = async () => {
    const coffee = new HTTPRequest('drinks.ru/sale/');
    const response = await coffee.post('coffee', {type:'grain', area:'Kenia', amt:3});
    console.log(response);  
};

postCocoa();
postCoffee();

const putTea = async () => {
    const tea = new HTTPRequest('drinks.ru/sale/');
    const responce = await tea.put('tea', {type:'leaf', area:'Ceylon', amt:1});
    console.log(response);
};

putTea ();

const getTea = async () => {
    const tea = new HTTPRequest('drinks.ru/sale/');
    const responce = await tea.get('tea');
    console.log(response);
};

getTea();

const deleteCoffee = async () => {
    const coffee = new HTTPRequest('drinks.ru/sale/');
    const responce = await coffee.delete('coffee');
};

deleteCoffee();

export default {
    postCocoa,
    postCoffee,
    putTea,
    getTea,
    deleteCoffee
}
