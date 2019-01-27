'use strict';

// Declaration
// Note: Only this one is hoisted
function foo() {
    console.log('foo()');
}

// Expression
const bar = function() {
    console.log('bar()');
};

// No parameter
const quux = () => {
    console.log('quux()');
};

// One parameter, parenthesis optional
const baz = param => {
    return param;
};

// No body, return implied
const double = num => 2 * num;

// No body, return object
const thud = (param1, param2) => ({ param1, param2 });
