'use strict';


// Pure functions are functions that do not cause any
// side effects AND will always return the same result
// when passed the same parameter(s).

// Therefore a pure function is 'deterministic'.

// A pure function CANNOT have any I/O. However, for
// our purposes, we can usually ignore logging calls
// our console output for this consideration.

// This is a pure function:
function pure(x, y) {
    return x + y;
}


// --------------------------------------------------------------- //


// This is not:
function impure(millis) {
    return Date.now() + millis;
}

console.log(impure(60000));


// --------------------------------------------------------------- //


// For testing, we can sometimes allow a function to act somewhat 'pure'
// by including one or more optional parameters:
function fakePure(millis, now) {
    now = now || Date.now();

    return now + millis;
}

const now = Date.now();

// console.log(fakePure(60000)); // <- does not always return same value
// console.log(fakePure(60000, now)); // <- returns same value every time
