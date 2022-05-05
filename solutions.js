// Building Methods from Scratch

// Source article: https://www.digitalocean.com/community/tutorials/how-to-implement-javascript-array-methods-from-scratch#introduction

// Setting up strict mode

    'use strict';

// 1 - Implementing Map from scratch

// Creates an anoymous function with on argument
const myCustomMapFunction = function(callback){
    // console logs are result we want
    console.log('My Custom Map Function!');
}

// Array Constructor that attaches above function and assigns it to myCustomMapFunction
Array.prototype.mapFromScratch = myCustomMapFunction;

// creating an array and will link to below code for our callback
const arr = [1,2,3];
     
// this is our callback to execute code and return "My Custom Map Function
arr.mapFromScratch();
