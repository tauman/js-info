'use strict';

const object = {
    a: 'value a',
    b: 'value b'
};

function destructureObject1() {
    const { a, b } = object;

    console.log('\ndestructureObject1()');
    console.log(`"a: "${a}" b: "${b}"`);
    console.log();
}
// destructureObject1();


// --------------------------------------------------------------- //


function destructureObject2() {
    const { a: m, b: n } = object;

    console.log('\ndestructureObject2()');
    console.log(`m: "${m}" n: "${n}"`);
    console.log();
}
// destructureObject2();


// --------------------------------------------------------------- //


function destructureObject1WithDefaults() {
    const { a, b, c = 'value c'} = object;

    console.log('\ndestructureObject1WithDefaults()');
    console.log(`a: "${a}" b: "${b}" c: "${c}"`);
    console.log();
}
// destructureObject1WithDefaults();


// --------------------------------------------------------------- //


function destructureObject2WithDefaults() {
    const { a: m, b: n, c: s = 'value c'} = object;

    console.log('\ndestructureObject2WithDefaults()');
    console.log(`m: "${m}" n: "${n}" s: "${s}"`);
    console.log();
}
// destructureObject2WithDefaults();


// --------------------------------------------------------------- //


function destructureComplexObject() {
    const obj1 = {
        x: 'value x',
        y: 'value y',
        z: {
            a: 'value a',
            b: 'value b'
        }
    };

    const {
        x: m,
        y: n,
        z: {
            a: s,
            b: t
        }
    } = obj1;

    console.log('\ndestructureObject2WithDefaults()');
    console.log(`m: "${m}" n: "${n}" s: "${s}" t: "${t}"`);
    console.log();
}
destructureComplexObject();
