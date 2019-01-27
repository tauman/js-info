'use strict';


function sayHello() {
    console.log('\n\n   HELLO   \n\n');
}


// What is the order of output to the console?

function example1() {
    console.log('Start...');
    sayHello();
    console.log('...End');
}
example1();


// --------------------------------------------------------------- //


function example2() {
    console.log('Start...');
    setTimeout(sayHello, 3000);
    console.log('...End');
}
// example2();


// --------------------------------------------------------------- //


function example3() {
    console.log('Start...');
    setTimeout(sayHello);
    console.log('...End');
}
// example3();
