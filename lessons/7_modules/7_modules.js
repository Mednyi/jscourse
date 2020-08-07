'use strict';
// import {createVector, add} from './vectors.js'
import vector from './vectors.js'
const module = (function (){
    let a = 10;
    let b = 10;
    const publicFunction = () => a + b;
    return {
        publicFunction
    }
})(); // IIFE

const myVector = vector.createVector();
const myVector2 = vector.createVector();
const sum = vector.add(myVector, myVector2);

