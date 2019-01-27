'use strict';


// A higher order function is a function that takes
// a function as a parameter and/or returns a function
// as a result.

const FIVE = 5;

// Take a function 'applier' and apply it to FIVE, returning the result
function doIt(applier) {
    return applier(5);
}

const add20 = value => value + 20;

console.log(add20); // <- this is a function
console.log(doIt(add20)); // <- take function and apply it


// --------------------------------------------------------------- //


// Note that many of the array methods are higher-order functions,
// including map(), forEach(), and filter()
const ary = [1, 2, 3, 4, 5];

const doubler = value => value * 2;

const doubledAry = ary.map(doubler);

// console.log(doubler); // <- this is a function
// console.log(doubledAry); // <- this is the application of that function


// --------------------------------------------------------------- //


// Take a value 'addValue' and return a function that adds that
// value to another value.
//
// Note how this uses a closure
function addGenerator(addValue) {
    return value => value + addValue;
}

const add5 = addGenerator(5);

// console.log(add5);  // <- this is a function
// console.log(add5(7));  // <- this is the result of the function


// --------------------------------------------------------------- //

// take a function 'applier' and return a new function that applies
// the original function 'applier' in a value.
function applyGenerator(applier) {
    return value => applier(value);
}

const doubleApply = applyGenerator(num => 2 * num);

// console.log(doubleApply);  // <- this is a function
// console.log(doubleApply(5));  // <- this is the result of the function
