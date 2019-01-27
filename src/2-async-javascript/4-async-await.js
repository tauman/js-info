'use strict';


async function foo() {
    return 5;
}

async function bar() {
    throw new Error('ERROR');
}


async function baz() {
    try {
        const result = await foo();
        console.log(result);
    } catch(error) {
        console.log(error.message);
    }
}

async function quux() {
    try {
        const result = await bar();
        console.log(result);
    } catch(error) {
        console.log(error);
    }
}


// success
baz();

// --------------------------------------------------------------- //

// failure
// quux();


// --------------------------------------------------------------- //


// what does this print?
// console.log(foo());


// --------------------------------------------------------------- //


// what about this?
// console.log(bar());
