'use strict';

// RECURSION

// what do you expect to happen?


function printForever1() {
    console.log('forever');
    printForever1();
}
printForever1();


// --------------------------------------------------------------- //


function printForever2() {
    console.log('forever');
    setTimeout(printForever2);
}
// printForever2();