'use strict';

function resolve5() {
    // return a Promise that resolves to 5
    return Promise.resolve(5);
}

function resolve3() {
    // return a Promise that resolves to 3
    return Promise.resolve(3);
}

function reject() {
    // return a Promise that rejects with a string
    return Promise.reject('ERROR: reject()');
}

function anotherReject() {
    // return a Promise that rejects with a string
    return Promise.reject('ERROR: anotherReject()');
}

// --------------------------------------------------------------- //

// Using a promise:

// Resoves - both forms

// resolve5()
//     .then(r => console.log(r))
//     .catch(e => console.log(e));

// resolve5()
//     .then(r => console.log(r), e => console.log(e));


// --------------------------------------------------------------- //


// Rejects - both forms

// anotherReject().then(r => console.log(r), e => console.log(e));

// anotherReject().then(r => console.log(r), e => console.log(e));

// --------------------------------------------------------------- //

// returns the first promise that resolves or rejects:

// Promise.race([reject(), resolve5(), resolve3()])
//     .then(r => console.log(r))
//     .catch(e => console.log(e));


// --------------------------------------------------------------- //

// returns an array with all completed promises
// unless one or more reject, in which case it
// returns the first promise that rejects:

// Promise.race([reject(), resolve5(), anotherReject(), resolve3()])
//     .then(r => console.log(r))
//     .catch(e => console.log(e));
