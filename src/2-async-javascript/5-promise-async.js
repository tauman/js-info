'use strict';

function return2() {
    return 2;
}

async function async5() {
    return 5;
}

function promise7() {
    return Promise.resolve(7);
}

// It is obvious what this line will return:
console.log(return2());

// But...notice that these two lines print more or
//less the same thing:
// console.log(async5());
// console.log(promise7());

// --------------------------------------------------------------- //

// Note that since async is merely syntactic sugar
// for promises, they can be used interchangeably:

function all() {
    Promise.all([async5(), promise7()])
        .then(r => console.log(r))
        .catch(e => console.log(e));
}
// all();

// --------------------------------------------------------------- //

// More async/Promise interchangeability:
function waitFor() {
    async5()
        .then(r => console.log(r))
        .catch(e => console.log(e));
}
// waitFor();


// --------------------------------------------------------------- //


async function thump() {
    throw new Error('ERROR: thump()');
}

// thump()
//     .then(r => console.log(r))
//     .catch(e => console.log(e.message));


// --------------------------------------------------------------- //

function crash() {
    return Promise.reject('ERROR: crash()');
}

async function crashTest() {
    try {
        await crash();
    } catch(error) {
        console.log(error);
    }
}
// crashTest();