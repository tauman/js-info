'use strict';

const ary = [1, 2, 3];

function destructureArray1() {
    const [x, y] = [1, 2, 3];

    console.log('\ndestructureArray1()');
    console.log(`x: ${x} y: ${y}`);
    console.log();
}
destructureArray1();


// --------------------------------------------------------------- //


function destructureArray2() {
    const [x, , y] = [1, 2, 3];

    console.log('\ndestructureArray2()');
    console.log(`x: ${x} y: ${y}`);
    console.log();
}
// destructureArray2();


// --------------------------------------------------------------- //


function destructureArray3() {
    const [first, ...rest] = ary;

    console.log('\ndestructureArray3()');
    console.log(`first: ${first}`);
    console.log(`rest: ${rest}`);
    console.log();
}
// destructureArray3();
